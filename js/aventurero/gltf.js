/* =========================================================
   WEB LEER — Cargador glTF / GLB
   ---------------------------------------------------------
   Lee un modelo 3D en formato glTF 2.0 (archivo .gltf o .glb)
   y lo deja listo para que el motor lo dibuje.

   Admite:
     · geometria: POSITION, NORMAL, TEXCOORD_0, COLOR_0
     · indices (con o sin)
     · materiales con baseColorFactor y baseColorTexture
     · jerarquia de nodos (matriz o T/R/S)
     · varios mallos y primitivas
     · skinning (JOINTS_0 + WEIGHTS_0) con mezcla lineal

   NO necesita librerias externas ni conexión: el archivo se
   lee con fetch y se procesa en el navegador.
   ========================================================= */

window.AV_GLTF = (function () {
  "use strict";

  const TIPOS_COMP = {
    5120: { n: 1, arr: Int8Array },
    5121: { n: 1, arr: Uint8Array },
    5122: { n: 1, arr: Int16Array },
    5123: { n: 1, arr: Uint16Array },
    5125: { n: 1, arr: Uint32Array },
    5126: { n: 1, arr: Float32Array },
  };

  const NUM_COMP = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 };

  /* ---------- Utilidades de matrices (columna mayor) ---------- */
  function ident() {
    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  function mult(a, b) {
    const r = new Float32Array(16);
    for (let c = 0; c < 4; c++) {
      for (let f = 0; f < 4; f++) {
        r[c * 4 + f] =
          a[f] * b[c * 4] + a[4 + f] * b[c * 4 + 1] + a[8 + f] * b[c * 4 + 2] + a[12 + f] * b[c * 4 + 3];
      }
    }
    return r;
  }
  function deTRS(t, r, s) {
    const out = ident();
    // rotacion XYZ (euler) -> matriz
    const cx = Math.cos(r[0]), sx = Math.sin(r[0]);
    const cy = Math.cos(r[1]), sy = Math.sin(r[1]);
    const cz = Math.cos(r[2]), sz = Math.sin(r[2]);
    const m = [
      cy * cz, cy * sz, -sy, 0,
      sx * sy * cz - cx * sz, sx * sy * sz + cx * cz, sx * cy, 0,
      cx * sy * cz + sx * sz, cx * sy * sz - sx * cz, cx * cy, 0,
      0, 0, 0, 1,
    ];
    for (let c = 0; c < 3; c++) {
      for (let f = 0; f < 3; f++) out[c * 4 + f] = m[c * 4 + f] * s[f];
    }
    out[12] = t[0];
    out[13] = t[1];
    out[14] = t[2];
    return out;
  }

  /* ---------- Lectura del archivo ---------- */
  function leerGLB(arrayBuffer) {
    const dv = new DataView(arrayBuffer);
    if (dv.getUint32(0, true) !== 0x46546c67) throw new Error("No es un archivo GLB");
    let off = 12;
    let json = null;
    let bin = null;
    while (off < dv.byteLength) {
      const len = dv.getUint32(off, true);
      const tipo = dv.getUint32(off + 4, true);
      const datos = new Uint8Array(arrayBuffer, off + 8, len);
      if (tipo === 0x4e4f534a) json = JSON.parse(new TextDecoder("utf-8").decode(datos));
      else if (tipo === 0x004e4942) bin = datos;
      off += 8 + len + ((4 - (len % 4)) % 4) * 0; // los chunks van alineados a 4
      off = off + ((4 - (off % 4)) % 4);
    }
    if (!json) throw new Error("El GLB no tiene el bloque JSON");
    return { json: json, bin: bin };
  }

  /* ---------- Accessors ---------- */
  function leerAccessor(gltf, indice) {
    const acc = gltf.json.accessors[indice];
    if (!acc) return null;
    const n = NUM_COMP[acc.type] || 1;
    const info = TIPOS_COMP[acc.componentType];
    if (!info) return null;
    const total = acc.count * n;

    if (acc.bufferView === undefined && acc.componentType === 5126) {
      /* Accessor sin bufferView: valores por defecto */
      const out = new Float32Array(total);
      if (acc.type === "VEC3" && acc.componentType === 5126) {
        for (let i = 0; i < acc.count; i++) {
          out[i * 3] = 0;
          out[i * 3 + 1] = 0;
          out[i * 3 + 2] = 0;
        }
      }
      return { datos: out, n: n, count: acc.count, tipo: acc.type, comp: acc.componentType, normalizado: !!acc.normalized };
    }

    const bv = gltf.json.bufferViews[acc.bufferView];
    const buffer = gltf.binarios[bv.buffer];
    /* La posicion absoluta dentro del ArrayBuffer: hay que sumar el
       byteOffset de la vista (el binario del GLB es una vista con
       desplazamiento propio, no empieza en el byte 0). */
    const base = (bv.byteOffset || 0) + (acc.byteOffset || 0);
    const baseAbs = buffer.byteOffset + base;
    const stride = bv.byteStride || n * info.arr.BYTES_PER_ELEMENT;

    let lectura;
    if (bv.byteStride && bv.byteStride !== n * info.arr.BYTES_PER_ELEMENT) {
      /* Con paso: hay que leerlo a mano */
      const tmp = new info.arr(total);
      for (let i = 0; i < acc.count; i++) {
        const off = base + i * stride;
        for (let c = 0; c < n; c++) {
          tmp[i * n + c] = leerComponente(buffer, off + c * info.arr.BYTES_PER_ELEMENT, acc.componentType);
        }
      }
      lectura = tmp;
    } else {
      lectura = new info.arr(buffer.buffer, baseAbs, total);
    }

    /* Normalizar enteros a coma flotante si hace falta.
       OJO: el maximo de un entero normalizado es 2^(bits)-1
       (255 para un byte, 65535 para dos bytes). */
    let datos = lectura;
    if (acc.normalized && acc.componentType !== 5126 && acc.componentType !== 5125) {
      datos = new Float32Array(total);
      const max = Math.pow(2, info.arr.BYTES_PER_ELEMENT * 8) - 1;
      for (let i = 0; i < total; i++) {
        const v = lectura[i] < 0 ? lectura[i] + (max + 1) : lectura[i];
        datos[i] = v / max;
      }
    }
    return { datos: datos, n: n, count: acc.count, tipo: acc.type, comp: acc.componentType, normalizado: !!acc.normalized };
  }

  function leerComponente(buffer, off, comp) {
    const dv = new DataView(buffer.buffer, buffer.byteOffset + off, 4);
    switch (comp) {
      case 5120: return dv.getInt8(0);
      case 5121: return dv.getUint8(0);
      case 5122: return dv.getInt16(0, true);
      case 5123: return dv.getUint16(0, true);
      case 5125: return dv.getUint32(0, true);
      case 5126: return dv.getFloat32(0, true);
      default: return 0;
    }
  }

  /* ---------- Normales calculadas ----------
     Muchos modelos (por ejemplo los exportados con trimesh) solo
     traen las posiciones. Aqui se calculan las normales de cada
     cara y se promedian en los vertices: asi la luz se ve bien. */
  function calcularNormales(pos, indices) {
    const n = pos.count;
    const acc = new Float32Array(n * 3);
    const cuenta = indices ? indices.count : n;
    const get = indices
      ? function (i) { return indices.datos[i]; }
      : function (i) { return i; };
    for (let t = 0; t + 2 < cuenta; t += 3) {
      const a = get(t) * 3, b = get(t + 1) * 3, c = get(t + 2) * 3;
      const ax = pos.datos[a], ay = pos.datos[a + 1], az = pos.datos[a + 2];
      const bx = pos.datos[b], by = pos.datos[b + 1], bz = pos.datos[b + 2];
      const cx = pos.datos[c], cy = pos.datos[c + 1], cz = pos.datos[c + 2];
      const ux = bx - ax, uy = by - ay, uz = bz - az;
      const vx = cx - ax, vy = cy - ay, vz = cz - az;
      const nx = uy * vz - uz * vy;
      const ny = uz * vx - ux * vz;
      const nz = ux * vy - uy * vx;
      acc[a] += nx; acc[a + 1] += ny; acc[a + 2] += nz;
      acc[b] += nx; acc[b + 1] += ny; acc[b + 2] += nz;
      acc[c] += nx; acc[c + 1] += ny; acc[c + 2] += nz;
    }
    for (let i = 0; i < n; i++) {
      const x = acc[i * 3], y = acc[i * 3 + 1], z = acc[i * 3 + 2];
      const l = Math.hypot(x, y, z);
      if (l > 0.000001) {
        acc[i * 3] = x / l; acc[i * 3 + 1] = y / l; acc[i * 3 + 2] = z / l;
      } else {
        acc[i * 3] = 0; acc[i * 3 + 1] = 1; acc[i * 3 + 2] = 0;
      }
    }
    return { datos: acc, n: 3, count: n, tipo: "VEC3", comp: 5126 };
  }

  /* ---------- Indices de 32 bits ----------
     WebGL 1 casi siempre admite indices de 32 bits, pero si el
     dispositivo no lo soporta se pasan a 16 bits (si caben). */
  function ajustarIndices(indices, vertices) {
    if (!indices || indices.comp !== 5125) return indices;
    let max = 0;
    for (let i = 0; i < indices.datos.length; i++) {
      if (indices.datos[i] > max) max = indices.datos[i];
    }
    if (max < 65536) {
      const corto = new Uint16Array(indices.datos.length);
      for (let i = 0; i < corto.length; i++) corto[i] = indices.datos[i];
      return { datos: corto, n: 1, count: indices.count, tipo: "SCALAR", comp: 5123 };
    }
    return indices;
  }

  /* ---------------------------------------------------------
     MOLDEADO: la forma del cuerpo
     ---------------------------------------------------------
     Elipsoides medidos sobre el archivo real del personaje.
     (x = ancho, y = fondo, z = alto, en su espacio original) */
  const CUERPO = {
    torso:     { c: [0, 0.01, 2.83], r: [0.53, 0.31, 0.66] },
    caderas:   { c: [0, 0.015, 2.18], r: [0.47, 0.29, 0.35] },
    musloIzq:  { c: [-0.29, 0.015, 1.75], r: [0.25, 0.2, 0.64] },
    musloDer:  { c: [0.29, 0.015, 1.75], r: [0.25, 0.2, 0.64] },
    espinIzq:  { c: [-0.32, 0, 0.85], r: [0.15, 0.14, 0.6] },
    espinDer:  { c: [0.32, 0, 0.85], r: [0.15, 0.14, 0.6] },
    brazoIzq:  { c: [-0.45, 0, 2.9], r: [0.25, 0.2, 0.48] },
    brazoDer:  { c: [0.45, 0, 2.9], r: [0.25, 0.2, 0.48] },
    cuello:    { c: [0, 0, 3.47], r: [0.15, 0.15, 0.26] },
    cabeza:    { c: [0, -0.01, 3.88], r: [0.34, 0.3, 0.43] },
    pieIzq:    { c: [-0.31, -0.01, 0.16], r: [0.23, 0.4, 0.16] },
    pieDer:    { c: [0.31, -0.01, 0.16], r: [0.23, 0.4, 0.16] },
  };

  /* Devuelve, para un punto y una zona del cuerpo:
         d        distancia con signo a la superficie (fuera = +)
         sx,sy,sz el punto exacto de la superficie en ese rayo
         nx,ny,nz la normal de la superficie ahi
     La proyeccion se hace SIGUIENDO EL RAYO desde el centro del
     elipsoide: es lo que convierte una prenda plana (una caja) en
     una prenda con forma, que abraza al personaje. */
  function zonaDePunto(p, el) {
    const dx = p[0] - el.c[0], dy = p[1] - el.c[1], dz = p[2] - el.c[2];
    const rx = el.r[0], ry = el.r[1], rz = el.r[2];
    const n = Math.sqrt((dx / rx) * (dx / rx) + (dy / ry) * (dy / ry) + (dz / rz) * (dz / rz));
    if (n < 1e-6) return null;
    const lx = dx / n, ly = dy / n, lz = dz / n;
    /* distancia aproximada a la superficie */
    const gx = dx / (rx * rx), gy = dy / (ry * ry), gz = dz / (rz * rz);
    const d = ((n - 1) * n) / Math.max(1e-6, Math.hypot(gx, gy, gz));
    /* normal de la superficie en ese punto (en el espacio del
       elipsoide) y su posicion ABSOLUTA en el personaje */
    let nx = lx / (rx * rx), ny = ly / (ry * ry), nz = lz / (rz * rz);
    const l = Math.hypot(nx, ny, nz) || 1;
    return {
      d: d,
      sx: el.c[0] + lx,
      sy: el.c[1] + ly,
      sz: el.c[2] + lz,
      nx: nx / l,
      ny: ny / l,
      nz: nz / l,
    };
  }

  /* Peso de contacto: 1 mientras la prenda esta pegada al cuerpo y
     baja a cero al llegar al borde del alcance. Asi no se abre
     ninguna grieta ni aparece ningun escalon. */
  function pesoAlcance(d, alcance) {
    if (d <= 0) return 1;
    const borde = alcance * 0.72;
    if (d <= borde) return 1;
    const t = Math.min(1, (d - borde) / Math.max(0.0001, alcance - borde));
    return 1 - t * t * (3 - 2 * t);
  }

  /* ---------------------------------------------------------
     SUBDIVISION: dar geometria a las prendas cuadradas
     ---------------------------------------------------------
     Una prenda de 8 vertices no se puede redondear: no hay nada
     que mover. Aqui se parte cada triangulo en cuatro (tantas
     veces como haga falta) interpolando posicion, normal, UV y
     color, para que luego el moldeado tenga material con el que
     dar forma. */
  function subdividir(gltf) {
    if (!gltf || gltf._subdividido) return 0;
    gltf._subdividido = true;
    let tris = 0;
    (gltf.mallas || []).forEach((malla) => {
      (malla.primitivas || []).forEach((p) => {
        if (p.modo !== 4 || !p.pos || !p.pos.datos || !p.norm || !p.norm.datos) return;
        if (p.joints || p.pesos) return; /* con esqueleto, no se toca */
        const attrs = [p.pos, p.norm, p.uv, p.color].filter(Boolean);
        /* todos deben tener los mismos vertices, o se deja estar */
        if (attrs.some((a) => !a.datos || a.count !== p.pos.count)) return;
        if (attrs.some((a) => a.datos.length !== p.pos.count * a.n)) return;
        if (!p.indices || !p.indices.datos) {
          const n = p.pos.count;
          const arr = new Uint16Array(n);
          for (let i = 0; i < n; i++) arr[i] = i;
          p.indices = { datos: arr, n: 1, count: n, tipo: "SCALAR", comp: 5123 };
        }
        /* cuantos niveles: hasta dejar la malla bastante densa */
        let nivel = 0;
        let tri = Math.floor(p.indices.count / 3);
        while (tri < 3000 && nivel < 3) {
          tri *= 4;
          nivel++;
        }
        for (let v = 0; v < nivel; v++) {
          const cuenta = p.indices.count;
          const nt = Math.floor(cuenta / 3);
          if (!nt || nt * 4 > 70000) break;
          const base = p.pos.count;
          const total = base + nt * 3;
          if (total > 65535) break; /* que sigan cabiendo en 16 bits */
          const viejo = p.indices.datos;
          const nuevos = attrs.map((a) => {
            const out = new Float32Array(total * a.n);
            out.set(a.datos);
            return out;
          });
          const medio = (k, ia, ib, dst) => {
            const a = attrs[k];
            const n = a.n;
            const pa = ia * n, pb = ib * n, pc = dst * n;
            for (let c = 0; c < n; c++) nuevos[k][pc + c] = (a.datos[pa + c] + a.datos[pb + c]) * 0.5;
          };
          const nuevoIdx = new Uint16Array(cuenta * 4);
          let w = 0;
          let s = base;
          for (let t = 0; t < nt; t++) {
            const a = viejo[t * 3], b = viejo[t * 3 + 1], c = viejo[t * 3 + 2];
            const ab = s++, bc = s++, ca = s++;
            for (let k = 0; k < attrs.length; k++) {
              medio(k, a, b, ab);
              medio(k, b, c, bc);
              medio(k, c, a, ca);
            }
            nuevoIdx[w++] = a; nuevoIdx[w++] = ab; nuevoIdx[w++] = ca;
            nuevoIdx[w++] = ab; nuevoIdx[w++] = b; nuevoIdx[w++] = bc;
            nuevoIdx[w++] = ca; nuevoIdx[w++] = bc; nuevoIdx[w++] = c;
            nuevoIdx[w++] = ab; nuevoIdx[w++] = bc; nuevoIdx[w++] = ca;
          }
          attrs.forEach((a, k) => {
            a.datos = nuevos[k];
            a.count = total;
          });
          p.indices = { datos: nuevoIdx, n: 1, count: cuenta * 4, tipo: "SCALAR", comp: 5123 };
          tris += nt * 3;
        }
      });
    });
    return tris;
  }

  /* Vuelve a calcular las normales de una primitiva: la forma ha
     cambiado, asi que la luz debe seguirla (si no, la prenda se
     redondea pero se ilumina como si siguiera plana).
     Se mezcla con las originales segun cuanto se haya movido cada
     vertice, para no ablandar las partes que no se han tocado. */
  function recalcularNormales(p, pesos) {
    const nuevas = calcularNormales(p.pos, p.indices);
    if (!nuevas || !p.norm || !p.norm.datos) return;
    const viejas = p.norm.datos;
    const nn = p.norm.n || 3;
    const copiadas = Math.min(p.norm.count, nuevas.count);
    const out = new Float32Array(nuevas.count * 3);
    for (let i = 0; i < nuevas.count; i++) {
      const k = i < copiadas ? (pesos ? pesos[i] : 1) : 1;
      const base = i < copiadas ? i * nn : -1;
      for (let c = 0; c < 3; c++) {
        const nueva = nuevas.datos[i * 3 + c];
        out[i * 3 + c] = base < 0 ? nueva : viejas[base + c] * (1 - k) + nueva * k;
      }
    }
    p.norm = { datos: out, n: 3, count: nuevas.count, tipo: "VEC3", comp: 5126, normalizado: false };
  }

  /* Moldea una prenda: lleva cada vertice pegado al cuerpo, a una
     distancia exacta de su superficie (el margen de la prenda).
     Como la proyeccion es radial, las caras planas se curvan y la
     prenda adopta la forma del personaje en vez de verse cuadrada.
     Devuelve cuantos vertices se han movido. */
  function moldear(gltf, opciones) {
    if (!gltf || !opciones || gltf._moldeado) return 0;
    const zonas = (opciones.zonas || []).map((nombre) => CUERPO[nombre]).filter(Boolean);
    if (!zonas.length) return 0;
    gltf._moldeado = true;
    const margen = opciones.margen === undefined ? 0.05 : opciones.margen;
    const alcance = opciones.alcance === undefined ? 0.18 : opciones.alcance;
    let movidos = 0;
    (gltf.mallas || []).forEach((m) => {
      (m.primitivas || []).forEach((p) => {
        const pos = p.pos;
        if (!pos || !pos.datos || !p.norm || !p.norm.datos) return;
        const np = pos.n || 3;
        const d = pos.datos;
        const pesos = new Float32Array(pos.count);
        let movio = 0;
        for (let i = 0; i < pos.count; i++) {
          const x = d[i * np], y = d[i * np + 1], z = d[i * np + 2];
          /* las dos zonas mas cercanas: se mezclan para que no se
             note el corte donde una prenda pasa de una a otra */
          let a = null, b = null;
          for (let q = 0; q < zonas.length; q++) {
            const r = zonaDePunto([x, y, z], zonas[q]);
            if (!r) continue;
            if (!a || Math.abs(r.d) < Math.abs(a.d)) {
              b = a;
              a = r;
            } else if (!b || Math.abs(r.d) < Math.abs(b.d)) {
              b = r;
            }
          }
          if (!a || a.d > margen || Math.abs(a.d) > alcance) continue;
          /* Correccion de contacto: antes se arrastraban tambien los
             vertices que ya estaban fuera de la piel, incluso cuando
             tenian espacio suficiente. Eso aplastaba pliegues y hacia
             que ciertas prendas parecieran pegadas o deformadas.
             Ahora solo se corrigen vertices penetrados o demasiado
             cercanos al cuerpo; los bordes y el volumen exterior se
             conservan. */
          const penetracion = a.d <= 0 ? 1 : Math.max(0, Math.min(1, (margen - a.d) / Math.max(margen, 0.0001)));
          const suaveContacto = penetracion * penetracion * (3 - 2 * penetracion);
          const peso = a.d <= 0 ? 1 : suaveContacto;
          if (peso <= 0.002) continue;
          /* objetivo: la superficie de la zona + el margen de ropa */
          let tx = a.sx + a.nx * margen;
          let ty = a.sy + a.ny * margen;
          let tz = a.sz + a.nz * margen;
          if (b && Math.abs(b.d) < alcance) {
            const suave = Math.max(0, 1 - Math.abs(b.d) / alcance);
            const wb = (suave * suave * (3 - 2 * suave)) / (Math.abs(b.d) + 0.03);
            const wa = 1 / (Math.abs(a.d) + 0.03);
            const w = wb / (wa + wb);
            if (w > 0.001) {
              tx = tx * (1 - w) + (b.sx + b.nx * margen) * w;
              ty = ty * (1 - w) + (b.sy + b.ny * margen) * w;
              tz = tz * (1 - w) + (b.sz + b.nz * margen) * w;
            }
          }
          const nx2 = x + (tx - x) * peso;
          const ny2 = y + (ty - y) * peso;
          const nz2 = z + (tz - z) * peso;
          const mov = Math.hypot(nx2 - x, ny2 - y, nz2 - z);
          if (mov < 0.0004) continue;
          d[i * np] = nx2;
          d[i * np + 1] = ny2;
          d[i * np + 2] = nz2;
          pesos[i] = Math.min(1, mov / 0.04);
          movio++;
        }
        if (movio) {
          recalcularNormales(p, pesos);
          movidos += movio;
        }
      });
    });
    return movidos;
  }

  /* =========================================================
     REDONDEO DE HOMBROS ("capazo")
     ---------------------------------------------------------
     En las prendas con manga corta, el borde de la manga queda
     por debajo del hombro y la piel del deltoides asoma por
     encima. Este segundo pase acerca la tela del hombro a la
     superficie del brazo (como el moldeado, pero tambien
     estirando la que esta algo separada, con caida suave) para
     que la manga cierre por encima del hombro con forma
     redonda. Se configura prenda a prenda en MOLDEAR_3D, con
     un campo "capazo" opcional.
     ========================================================= */
  function capazo(gltf, opciones) {
    if (!gltf || !opciones || gltf._capazo) return 0;
    const zonas = (opciones.zonas || ["brazoIzq", "brazoDer"])
      .map((n) => CUERPO[n]).filter(Boolean);
    if (!zonas.length) return 0;
    gltf._capazo = true;
    const x0 = opciones.x0 === undefined ? 0.30 : opciones.x0;
    const z0 = opciones.z0 === undefined ? 2.95 : opciones.z0;
    const z1 = opciones.z1 === undefined ? 3.12 : opciones.z1;
    const margen = opciones.margen === undefined ? 0.045 : opciones.margen;
    const alcance = opciones.alcance === undefined ? 0.42 : opciones.alcance;
    let movidas = 0;
    (gltf.mallas || []).forEach((m) => {
      (m.primitivas || []).forEach((p) => {
        if (!p.pos || !p.pos.datos) return;
        const d = p.pos.datos;
        const np = p.pos.n || 3;
        let hay = false;
        for (let i = 0; i < d.length; i += np) {
          const x = d[i], y = d[i + 1], z = d[i + 2];
          if (Math.abs(x) < x0 || z < z0) continue;
          /* el peso crece con la altura: arriba (hombro) manda,
             abajo se funde con la manga ya moldeada */
          const wz = Math.min(1, Math.max(0, (z - z0) / Math.max(0.0001, z1 - z0)));
          let a = null;
          zonas.forEach((el) => {
            const r = zonaDePunto([x, y, z], el);
            if (r && (!a || Math.abs(r.d) < Math.abs(a.d))) a = r;
          });
          if (!a || a.d > alcance) continue;
          const peso = pesoAlcance(a.d, alcance) * wz;
          if (peso <= 0.002) continue;
          const nx2 = x + (a.sx + a.nx * margen - x) * peso;
          const ny2 = y + (a.sy + a.ny * margen - y) * peso;
          const nz2 = z + (a.sz + a.nz * margen - z) * peso;
          if (Math.hypot(nx2 - x, ny2 - y, nz2 - z) < 0.0004) continue;
          d[i] = nx2; d[i + 1] = ny2; d[i + 2] = nz2;
          hay = true;
        }
        if (hay) { recalcularNormales(p); movidas++; }
      });
    });
    return movidas;
  }

  /* =========================================================
     RELIEVE DE LOS DETALLES
     ---------------------------------------------------------
     Las prendas traen detalles con material propio (cremalleras,
     cintas, suelas, botones) que son cajas muy finas. El
     moldeado las aplana contra la tela y se hunden a ratos
     dentro de ella (parpadean y se ven como roturas). Este pase
     las levanta un pelo hacia fuera, siguiendo su normal, para
     que queden siempre por encima de la tela.
     ========================================================= */
  function relieve(gltf, distancia, zonas) {
    if (!gltf || gltf._relieve) return 0;
    gltf._relieve = true;
    const eps = distancia === undefined ? 0.015 : distancia;
    /* La direccion de salida es la normal RADIAL del cuerpo (si el
       vertice cae en una zona) y si no la normal propia: las
       cintas planas se quedan con las normales de lado tras el
       moldeado y con ellas no se elevan (siguen hundiendose en la
       tela y parpadeando). */
    const els = (zonas || []).map((n) => CUERPO[n]).filter(Boolean);
    let piezas = 0;
    (gltf.mallas || []).forEach((m) => {
      (m.primitivas || []).forEach((p) => {
        if (p.material === undefined || p.material === null || p.material < 0) return;
        if (!p.pos || !p.pos.datos || !p.norm || !p.norm.datos) return;
        const a = p.pos.datos, nrm = p.norm.datos;
        const np = p.pos.n || 3, nn = p.norm.n || 3;
        for (let i = 0, j = 0; i < a.length; i += np, j += nn) {
          let dx = nrm[j], dy = nrm[j + 1], dz = nrm[j + 2];
          if (els.length) {
            let mejor = null;
            for (let q = 0; q < els.length; q++) {
              const r = zonaDePunto([a[i], a[i + 1], a[i + 2]], els[q]);
              if (!r) continue;
              if (!mejor || Math.abs(r.d) < Math.abs(mejor.d)) mejor = r;
            }
            if (mejor && Math.abs(mejor.d) < 0.14) {
              dx = mejor.nx; dy = mejor.ny; dz = mejor.nz;
            }
          }
          a[i] += dx * eps;
          a[i + 1] += dy * eps;
          a[i + 2] += dz * eps;
        }
        piezas++;
      });
    });
    return piezas;
  }

  /* =========================================================
     MANGAS LARGAS (procedurales)
     ---------------------------------------------------------
     Algunas prendas solo traen mangas cortas o aletas de
     hombro. Aqui se construye una tela alrededor de cada brazo,
     DEL HOMBRO A LA MUÑECA, midiendo el propio cuerpo cargado
     (si el archivo no trae brazos reconocibles se usa un perfil
     fijo del muñeco por defecto). La manga queda un poco POR
     ENCIMA de la piel, se cierra en el puño y por arriba queda
     abierta: la abertura natural de una manga, que desde arriba
     se llena con el hombro.
     Va como una malla mas de la prenda (sin material propio),
     asi que hereda el color principal y se tiñe con la misma
     tinta que el resto.
     ========================================================= */

  /* Perfil fijo del brazo del muñeco por defecto (medido sobre
     modelo/aventurero.glb): z, centro en x y semiejes. */
  const PERFIL_BRAZO = [
    { z: 3.34, x: -0.49, rx: 0.20, ry: 0.21 },
    { z: 3.20, x: -0.53, rx: 0.21, ry: 0.22 },
    { z: 3.05, x: -0.57, rx: 0.21, ry: 0.21 },
    { z: 2.90, x: -0.61, rx: 0.19, ry: 0.19 },
    { z: 2.75, x: -0.65, rx: 0.18, ry: 0.18 },
    { z: 2.60, x: -0.70, rx: 0.16, ry: 0.16 },
    { z: 2.45, x: -0.73, rx: 0.15, ry: 0.15 },
    { z: 2.30, x: -0.77, rx: 0.15, ry: 0.14 },
    { z: 2.15, x: -0.81, rx: 0.14, ry: 0.13 },
    { z: 2.06, x: -0.84, rx: 0.14, ry: 0.13 },
  ];

  /* Mide el brazo del cuerpo cargado: devuelve una tabla
     [{z, x, y, rx, ry}] (centro y semiejes por altura) o null
     si el archivo no trae ese brazo. */
  function perfilBrazo(cuerpo, izq) {
    if (!cuerpo || !cuerpo.nodos || !cuerpo.mallas || !cuerpo.escena) return null;
    const re = izq
      ? /^L_(shoulder|upper_sleeve|elbow|forearm)/i
      : /^R_(shoulder|upper_sleeve|elbow|forearm)/i;
    const pts = [];
    function recorrer(indice, padre) {
      const n = cuerpo.nodos[indice];
      if (!n) return;
      const local = n.matriz ? n.matriz : deTRS(n.t, n.r, n.s);
      const mundo = mult(padre, local);
      if (n.malla >= 0 && re.test(String(n.nombre || ""))) {
        const malla = cuerpo.mallas[n.malla];
        if (malla) {
          malla.primitivas.forEach((p) => {
            if (!p.pos || !p.pos.datos) return;
            const d = p.pos.datos;
            const np = p.pos.n || 3;
            for (let k = 0; k + 2 < d.length; k += np) {
              pts.push([
                mundo[0] * d[k] + mundo[4] * d[k + 1] + mundo[8] * d[k + 2] + mundo[12],
                mundo[1] * d[k] + mundo[5] * d[k + 1] + mundo[9] * d[k + 2] + mundo[13],
                mundo[2] * d[k] + mundo[6] * d[k + 1] + mundo[10] * d[k + 2] + mundo[14],
              ]);
            }
          });
        }
      }
      n.hijos.forEach((h) => recorrer(h, mundo));
    }
    cuerpo.escena.forEach((i) => recorrer(i, ident()));
    if (pts.length < 120) return null;
    let zMin = Infinity, zMax = -Infinity;
    pts.forEach((p) => { if (p[2] < zMin) zMin = p[2]; if (p[2] > zMax) zMax = p[2]; });
    if (zMax - zMin < 0.5) return null;
    const paso = 0.06;
    const bins = [];
    for (let z = zMin; z <= zMax + 1e-6; z += paso) {
      bins.push({ z: z, n: 0, sx: 0, sy: 0, minx: Infinity, maxx: -Infinity, miny: Infinity, maxy: -Infinity });
    }
    pts.forEach((p) => {
      let b = Math.floor((p[2] - zMin) / paso);
      if (b < 0) b = 0;
      if (b >= bins.length) b = bins.length - 1;
      const t = bins[b];
      t.n++; t.sx += p[0]; t.sy += p[1];
    });
    /* media por altura */
    bins.forEach((t) => {
      if (t.n < 6) return;
      t.x = t.sx / t.n; t.y = t.sy / t.n;
      t.rx = 0.06; t.ry = 0.06;
      t.ok = true;
    });
    /* La manga tiene que CONTENER el brazo entero: el semieje es
       la MAYOR desviacion respecto a la media (la mitad del ancho
       se queda corta cuando la masa de puntos va hacia dentro y
       por eso asomaba la piel por el lado de fuera). */
    pts.forEach((p) => {
      let b = Math.floor((p[2] - zMin) / paso);
      if (b < 0) b = 0;
      if (b >= bins.length) b = bins.length - 1;
      const t = bins[b];
      if (!t.ok) return;
      const dx = Math.abs(p[0] - t.x), dy = Math.abs(p[1] - t.y);
      if (dx > t.rx) t.rx = dx;
      if (dy > t.ry) t.ry = dy;
    });
    let previo = null;
    for (let i = 0; i < bins.length; i++) {
      const t = bins[i];
      if (t.ok) { previo = t; continue; }
      let sig = null;
      for (let k = i + 1; k < bins.length; k++) if (bins[k].ok) { sig = bins[k]; break; }
      if (previo && sig) {
        const w = (t.z - previo.z) / Math.max(1e-6, sig.z - previo.z);
        t.x = previo.x + (sig.x - previo.x) * w;
        t.y = previo.y + (sig.y - previo.y) * w;
        t.rx = previo.rx + (sig.rx - previo.rx) * w;
        t.ry = previo.ry + (sig.ry - previo.ry) * w;
      } else if (sig) {
        t.x = sig.x; t.y = sig.y; t.rx = sig.rx; t.ry = sig.ry;
      } else if (previo) {
        t.x = previo.x; t.y = previo.y; t.rx = previo.rx; t.ry = previo.ry;
      } else continue;
      t.ok = true;
    }
    const buenos = bins.filter((t) => t.ok);
    if (buenos.length < 8) return null;
    /* suavizar para que no haya escalones entre alturas */
    for (let vuelta = 0; vuelta < 2; vuelta++) {
      const copia = buenos.map((t) => ({ x: t.x, y: t.y, rx: t.rx, ry: t.ry }));
      for (let i = 1; i < buenos.length - 1; i++) {
        buenos[i].x = (copia[i - 1].x + copia[i].x * 2 + copia[i + 1].x) / 4;
        buenos[i].y = (copia[i - 1].y + copia[i].y * 2 + copia[i + 1].y) / 4;
        /* El suavizado solo rellena huecos: NUNCA encoge un bulto
           (hombro, codo), porque ahi saldria la piel. */
        buenos[i].rx = Math.max((copia[i - 1].rx + copia[i].rx * 2 + copia[i + 1].rx) / 4, copia[i].rx);
        buenos[i].ry = Math.max((copia[i - 1].ry + copia[i].ry * 2 + copia[i + 1].ry) / 4, copia[i].ry);
      }
    }
    return buenos.map((t) => ({ z: t.z, x: t.x, y: t.y, rx: Math.min(t.rx, 0.4), ry: Math.min(t.ry, 0.4) }));
  }

  /* Lee el perfil a una altura cualquiera (interpolando) */
  function muestrearPerfil(tabla, z) {
    if (z <= tabla[0].z) return tabla[0];
    const ult = tabla[tabla.length - 1];
    if (z >= ult.z) return ult;
    for (let i = 1; i < tabla.length; i++) {
      if (z <= tabla[i].z) {
        const a = tabla[i - 1], b = tabla[i];
        const w = (z - a.z) / Math.max(1e-6, b.z - a.z);
        return {
          x: a.x + (b.x - a.x) * w,
          y: a.y + (b.y - a.y) * w,
          rx: a.rx + (b.rx - a.rx) * w,
          ry: a.ry + (b.ry - a.ry) * w,
        };
      }
    }
    return ult;
  }

  function mangas(gltf, opciones, cuerpo) {
    if (!gltf || !opciones || gltf._mangas) return 0;
    gltf._mangas = true;
    const margen = opciones.margen === undefined ? 0.05 : opciones.margen;
    const zArriba = opciones.zArriba === undefined ? 3.34 : opciones.zArriba;
    const zAbajo = opciones.zAbajo === undefined ? 2.06 : opciones.zAbajo;
    const paso = opciones.paso === undefined ? 0.06 : opciones.paso;
    let anyadidas = 0;
    [true, false].forEach((izq) => {
      let perfil = perfilBrazo(cuerpo, izq);
      const espejo = !perfil;
      if (!perfil) perfil = PERFIL_BRAZO;
      const eje = (s) => (espejo && !izq) ? -s.x : s.x;
      const N = 20;
      const alturas = [];
      for (let z = zArriba; z > zAbajo + 1e-6; z -= paso) alturas.push(z);
      alturas.push(zAbajo);
      const pos = [], idx = [];
      alturas.forEach((z) => {
        const s = muestrearPerfil(perfil, z);
        let rx = s.rx + margen, ry = s.ry + margen;
        /* el puño queda un poco mas suelto, como en una sudadera */
        const resto = (z - zAbajo) / Math.max(1e-6, zArriba - zAbajo);
        if (resto < 0.16) {
          const k = ((0.16 - resto) / 0.16) * 0.10;
          rx *= 1 + k; ry *= 1 + k;
        }
        for (let j = 0; j < N; j++) {
          const t = (j / N) * Math.PI * 2;
          pos.push(eje(s) + Math.cos(t) * rx, s.y + Math.sin(t) * ry, z);
        }
      });
      /* tubo entre anillos */
      for (let i = 0; i < alturas.length - 1; i++) {
        for (let j = 0; j < N; j++) {
          const a = i * N + j, b = i * N + ((j + 1) % N);
          const c = (i + 1) * N + j, d = (i + 1) * N + ((j + 1) % N);
          idx.push(a, c, b, b, c, d);
        }
      }
      /* puño cerrado */
      const sAbajo = muestrearPerfil(perfil, zAbajo);
      const centro = pos.length / 3;
      pos.push(eje(sAbajo), sAbajo.y, zAbajo - 0.022);
      const ult = (alturas.length - 1) * N;
      for (let j = 0; j < N; j++) idx.push(centro, ult + ((j + 1) % N), ult + j);
      /* empaquetar como primitiva propia de la prenda */
      const posArr = new Float32Array(pos);
      const idxArr = new Uint16Array(idx);
      const norm = calcularNormales(
        { datos: posArr, n: 3, count: posArr.length / 3 },
        { datos: idxArr, count: idxArr.length }
      );
      gltf.mallas.push({
        primitivas: [{
          modo: 4,
          pos: { datos: posArr, n: 3, count: posArr.length / 3, tipo: "VEC3", comp: 5126, normalizado: false },
          norm: norm,
          uv: null,
          color: null,
          indices: { datos: idxArr, n: 1, count: idxArr.length, tipo: "SCALAR", comp: 5123 },
          joints: null,
          pesos: null,
          material: -1,
        }],
      });
      gltf.nodos.push({
        nombre: izq ? "manga_larga_izq" : "manga_larga_der",
        malla: gltf.mallas.length - 1,
        piel: -1,
        hijos: [],
        matriz: null,
        t: [0, 0, 0],
        r: [0, 0, 0, 1],
        s: [1, 1, 1],
      });
      gltf.escena.push(gltf.nodos.length - 1);
      anyadidas++;
    });
    return anyadidas;
  }

  /* Aplica el ajuste de escala/desplazamiento directamente a la malla.
     Se hace ANTES del moldeado: si se escala despues de envolver la ropa
     sobre el cuerpo, el escalado vuelve a introducir penetraciones y huecos.
     El cálculo replica la matriz de ajuste que usaba el motor 3D. */
  function ajustarGeometria(gltf, ajuste) {
    if (!gltf || !ajuste || gltf._ajusteGeometriaAplicado) return 0;
    const e = ajuste.escala || [1, 1, 1];
    const d = ajuste.desp || [0, 0, 0];
    const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
    (gltf.mallas || []).forEach((m) => (m.primitivas || []).forEach((p) => {
      if (!p.pos || !p.pos.datos) return;
      const a = p.pos.datos;
      for (let i = 0; i < a.length; i += 3) for (let k = 0; k < 3; k++) {
        if (a[i + k] < mn[k]) mn[k] = a[i + k];
        if (a[i + k] > mx[k]) mx[k] = a[i + k];
      }
    }));
    if (!Number.isFinite(mn[0])) return 0;
    const c = mn.map((v, k) => (v + mx[k]) * 0.5);
    let cambiados = 0;
    (gltf.mallas || []).forEach((m) => (m.primitivas || []).forEach((p) => {
      if (!p.pos || !p.pos.datos) return;
      const a = p.pos.datos;
      for (let i = 0; i < a.length; i += 3) {
        for (let k = 0; k < 3; k++) a[i + k] = d[k] + c[k] + e[k] * (a[i + k] - c[k]);
      }
      if (p.indices && p.norm) {
        const n = calcularNormales(p.pos, p.indices);
        if (n) p.norm = n;
      }
      cambiados++;
    }));
    gltf._ajusteGeometriaAplicado = true;
    return cambiados;
  }

  /* ---------- Carga principal ---------- */
  /* El modelo ya leído se guarda en memoria: no se vuelve a
     descargar ni a procesar cada vez que se abre una pantalla. */
  const cacheModelos = new Map();

  async function cargar(url, forzar) {
    if (!forzar && cacheModelos.has(url)) return cacheModelos.get(url);
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("No se pudo cargar el modelo (" + resp.status + ")");

    let gltf;
    if (url.toLowerCase().indexOf(".gltf") !== -1) {
      /* El cuerpo solo se puede leer una vez: primero el texto */
      const texto = await resp.text();
      gltf = { json: JSON.parse(texto), binarios: [] };
      /* resolver buffers externos e incrustados */
      const bufs = gltf.json.buffers || [];
      for (let i = 0; i < bufs.length; i++) {
        const b = bufs[i];
        if (b.uri && b.uri.indexOf("data:") === 0) {
          const base64 = b.uri.split(",")[1];
          const bin = atob(base64);
          const arr = new Uint8Array(bin.length);
          for (let k = 0; k < bin.length; k++) arr[k] = bin.charCodeAt(k);
          gltf.binarios.push(arr);
        } else if (b.uri) {
          const r2 = await fetch(new URL(b.uri, url).href);
          gltf.binarios.push(new Uint8Array(await r2.arrayBuffer()));
        } else {
          gltf.binarios.push(new Uint8Array(0));
        }
      }
    } else {
      const buf = await resp.arrayBuffer();
      const leido = leerGLB(buf);
      gltf = { json: leido.json, binarios: [leido.bin || new Uint8Array(0)] };
    }

    const json = gltf.json;
    if (!json.asset || json.asset.version < 2) throw new Error("El archivo no es glTF 2.0");

    /* --------- materiales ---------
       Las piezas sin material propio heredan el color principal
       del accesorio: asi se pueden recolorear bien. */
    const cuenta = {};
    (json.meshes || []).forEach((m) =>
      (m.primitives || []).forEach((p) => {
        if (p.material === undefined || p.material === null) return;
        const acc = json.accessors[p.attributes.POSITION];
        cuenta[p.material] = (cuenta[p.material] || 0) + (acc ? acc.count : 0);
      })
    );
    let principal = -1;
    let maxV = -1;
    Object.keys(cuenta).forEach((k) => {
      if (cuenta[k] > maxV) { maxV = cuenta[k]; principal = +k; }
    });
    const materiales = (json.materials || []).map((m) => {
      const pbr = m.pbrMetallicRoughness || {};
      const color = pbr.baseColorFactor || [1, 1, 1, 1];
      return {
        color: [color[0], color[1], color[2]],
        alpha: color.length > 3 ? color[3] : 1,
        textura: pbr.baseColorTexture ? pbr.baseColorTexture.index : -1,
        doble: !!m.doubleSided,
        transparente: (m.alphaMode === "BLEND") || color.length > 3 && color[3] < 1,
      };
    });

    /* color principal: si las piezas traen color por vertice, ese
       es el color real (algunos archivos lo usan) y se promedia;
       si no, se usa el material que mas superficie tapa. */
    let colorPrincipal = [0.8, 0.8, 0.8];
    let porVertice = false;
    {
      let suma = [0, 0, 0];
      let pesos = 0;
      (json.meshes || []).forEach((m) =>
        (m.primitives || []).forEach((p) => {
          if (p.attributes.COLOR_0 === undefined) return;
          const acc = leerAccessor(gltf, p.attributes.COLOR_0);
          if (!acc || !acc.datos) return;
          const n = acc.n || 4;
          for (let i = 0; i < acc.count; i++) {
            suma[0] += acc.datos[i * n];
            suma[1] += acc.datos[i * n + 1];
            suma[2] += acc.datos[i * n + 2];
            pesos++;
          }
        })
      );
      if (pesos) {
        porVertice = true;
        colorPrincipal = [suma[0] / pesos, suma[1] / pesos, suma[2] / pesos];
      }
    }
    if (!porVertice) {
      if (principal >= 0 && materiales[principal]) colorPrincipal = materiales[principal].color.slice();
      else if (materiales.length) colorPrincipal = materiales[0].color.slice();
    }

    /* --------- texturas ---------
       Se conserva el orden: si una textura no se puede leer se
       guarda un null en su sitio, para que los indices de los
       materiales sigan apuntando a la textura correcta. */
    const texturas = [];
    for (let i = 0; i < (json.textures || []).length; i++) {
      const t = json.textures[i];
      const src = t.source !== undefined && json.images ? json.images[t.source] : null;
      if (!src || !src.bufferView) {
        texturas.push(null);
        continue;
      }
      const bv = json.bufferViews[src.bufferView];
      const buffer = gltf.binarios[bv.buffer];
      const ini = (bv.byteOffset || 0) + (src.byteOffset || 0);
      const bytes = buffer.subarray(ini, ini + (bv.byteLength || 0));
      const blob = new Blob([bytes], { type: src.mimeType || "image/png" });
      try {
        const img = await createImageBitmap(blob);
        texturas.push(img);
      } catch (e) {
        texturas.push(null);
      }
    }

    /* --------- mallas --------- */
    const mallas = (json.meshes || []).map((m) => ({
      primitivas: (m.primitives || []).map((p) => {
        const pos = leerAccessor(gltf, p.attributes.POSITION);
        const indices = p.indices !== undefined ? leerAccessor(gltf, p.indices) : null;
        const idx = ajustarIndices(indices, pos ? pos.count : 0);
        let norm = p.attributes.NORMAL !== undefined ? leerAccessor(gltf, p.attributes.NORMAL) : null;
        /* Si el modelo no trae normales, se calculan aqui */
        if (!norm && pos && pos.datos) norm = calcularNormales(pos, idx);
        return {
          modo: p.mode === 4 ? 4 : p.mode === 5 ? 5 : p.mode === 6 ? 6 : 4,
          pos: pos,
          norm: norm,
          uv: p.attributes.TEXCOORD_0 !== undefined ? leerAccessor(gltf, p.attributes.TEXCOORD_0) : null,
          color: p.attributes.COLOR_0 !== undefined ? leerAccessor(gltf, p.attributes.COLOR_0) : null,
          indices: idx,
          joints: p.attributes.JOINTS_0 !== undefined ? leerAccessor(gltf, p.attributes.JOINTS_0) : null,
          pesos: p.attributes.WEIGHTS_0 !== undefined ? leerAccessor(gltf, p.attributes.WEIGHTS_0) : null,
          material: p.material !== undefined && p.material !== null ? p.material : -1,
        };
      }),
    }));

    /* --------- piel (skinning) --------- */
    const skins = (json.skins || []).map((s) => ({
      joints: s.joints || [],
      inversa: s.inverseBindMatrices !== undefined ? leerAccessor(gltf, s.inverseBindMatrices) : null,
      esqueleto: s.skeleton,
    }));

    /* --------- nodos --------- */
    const nodos = (json.nodes || []).map((n) => ({
      nombre: n.name || "",
      malla: n.mesh !== undefined ? n.mesh : -1,
      piel: n.skin !== undefined ? n.skin : -1,
      hijos: n.children || [],
      matriz: n.matrix ? new Float32Array(n.matrix) : null,
      t: n.translation || [0, 0, 0],
      r: n.rotation || [0, 0, 0, 1],
      s: n.scale || [1, 1, 1],
    }));

    const escena = json.scenes && json.scenes[json.scene || 0] ? json.scenes[json.scene || 0].nodes : [];

    const modelo = { json: json, materiales: materiales, texturas: texturas, mallas: mallas, skins: skins, nodos: nodos, escena: escena, materialPrincipal: principal, colorPrincipal: colorPrincipal };
    cacheModelos.set(url, modelo);
    return modelo;
  }

  /* ---------- Busca un modelo propio en la carpeta del proyecto ----------
     Si el usuario deja su archivo .glb / .gltf en la carpeta "modelo",
     la web lo usa automaticamente en vez del muñeco de piezas. */
  const RUTAS = [
    "modelo/aventurero.glb",
    "modelo/aventurero.gltf",
    "modelo/personaje.glb",
    "modelo/personaje.gltf",
    "img/aventurero.glb",
  ];

  async function existe(url) {
    try {
      const r = await fetch(url, { method: "HEAD", cache: "no-store" });
      return r.ok;
    } catch (e) {
      return false;
    }
  }

  async function buscar() {
    for (let i = 0; i < RUTAS.length; i++) {
      if (await existe(RUTAS[i])) return RUTAS[i];
    }
    return null;
  }

  /* ---------- Anclajes del modelo ----------
     Busca las piezas por nombre (cabeza, hombros, caderas, pies) para
     poder colocar encima las prendas del armario. Devuelve null si el
     modelo no tiene esos nombres. */
  function cajaDePrimitiva(prim) {
    const mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
    const d = prim.pos.datos;
    for (let i = 0; i < d.length; i += 3) {
      if (d[i] < mn[0]) mn[0] = d[i];
      if (d[i] > mx[0]) mx[0] = d[i];
      if (d[i + 1] < mn[1]) mn[1] = d[i + 1];
      if (d[i + 1] > mx[1]) mx[1] = d[i + 1];
      if (d[i + 2] < mn[2]) mn[2] = d[i + 2];
      if (d[i + 2] > mx[2]) mx[2] = d[i + 2];
    }
    return { min: mn, max: mx };
  }

  function anclas(gltf) {
    const res = { cabeza: null, hombros: null, cadera: null, pies: null };
    const cajas = { cabeza: [], hombros: [], cadera: [], pies: [] };
    const nombres = {
      cabeza: ["head", "cabeza", "Head"],
      hombros: ["L_shoulder", "R_shoulder", "shoulder_l", "shoulder_r", "hombro"],
      cadera: ["hip_suit", "pelvis_center", "hip", "pelvis", "cadera"],
      pies: ["L_boot_foot", "R_boot_foot", "foot_l", "foot_r", "pie"],
    };
    gltf.nodos.forEach((n) => {
      if (n.malla < 0) return;
      const malla = gltf.mallas[n.malla];
      if (!malla) return;
      let nombre = String(n.nombre || "").toLowerCase();
      Object.keys(nombres).forEach((clave) => {
        const lista = nombres[clave];
        for (let i = 0; i < lista.length; i++) {
          if (nombre === lista[i].toLowerCase() || nombre.indexOf(lista[i].toLowerCase()) === 0) {
            malla.primitivas.forEach((p) => {
              if (p.pos && p.pos.datos) cajas[clave].push(cajaDePrimitiva(p));
            });
            break;
          }
        }
      });
    });
    Object.keys(cajas).forEach((clave) => {
      const lista = cajas[clave];
      if (!lista.length) return;
      const mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
      lista.forEach((c) => {
        for (let k = 0; k < 3; k++) {
          if (c.min[k] < mn[k]) mn[k] = c.min[k];
          if (c.max[k] > mx[k]) mx[k] = c.max[k];
        }
      });
      res[clave] = { min: mn, max: mx, centro: [(mn[0] + mx[0]) / 2, (mn[1] + mx[1]) / 2, (mn[2] + mx[2]) / 2], tam: [mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]] };
    });
    return res;
  }

  /* ---------- Utilidades de color ---------- */
  function aRGB(hex) {
    const h = String(hex || "#ffffff").replace("#", "");
    return [
      parseInt(h.substring(0, 2), 16) / 255,
      parseInt(h.substring(2, 4), 16) / 255,
      parseInt(h.substring(4, 6), 16) / 255,
    ];
  }
  function aHex(rgb) {
    const p = (v) => {
      const n = Math.max(0, Math.min(255, Math.round(v * 255)));
      return (n < 16 ? "0" : "") + n.toString(16);
    };
    return "#" + p(rgb[0]) + p(rgb[1]) + p(rgb[2]);
  }
  /* Mezcla dos colores (t = 0 -> el primero, t = 1 -> el segundo) */
  function mezclar(hex1, hex2, t) {
    const a = aRGB(hex1), b = aRGB(hex2);
    return aHex([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]);
  }
  function oscurecer(hex, t) { return mezclar(hex, "#000000", t); }
  function aclarar(hex, t) { return mezclar(hex, "#ffffff", t); }

  /* ---------- Grupos de piel del modelo ----------
     Averigua que materiales son piel (usando la pieza "head" como
     referencia) y cuales son nariz, orejas y mejillas. */
  function gruposPiel(gltf) {
    const res = { base: [], piel: [], nariz: [], oreja: [], mejilla: [], color: null, originales: {} };
    if (!gltf) return res;
    /* Materiales de la cabeza: son piel */
    const deCabeza = [];
    gltf.nodos.forEach((n) => {
      if (n.malla < 0) return;
      if (String(n.nombre || "").toLowerCase() !== "head") return;
      const malla = gltf.mallas[n.malla];
      if (!malla) return;
      malla.primitivas.forEach((p) => {
        if (p.material >= 0 && deCabeza.indexOf(p.material) === -1) deCabeza.push(p.material);
      });
    });
    if (!deCabeza.length) {
      /* sin "head": se toma el material mas usado */
      const cuenta = {};
      gltf.mallas.forEach((m) =>
        m.primitivas.forEach((p) => {
          if (p.material >= 0) cuenta[p.material] = (cuenta[p.material] || 0) + 1;
        })
      );
      let mejor = -1, n = 0;
      Object.keys(cuenta).forEach((k) => {
        if (cuenta[k] > n) { n = cuenta[k]; mejor = +k; }
      });
      if (mejor >= 0) deCabeza.push(mejor);
    }
    if (!deCabeza.length) return res;
    res.base = deCabeza;
    const ref = gltf.materiales[deCabeza[0]] ? gltf.materiales[deCabeza[0]].color : [1, 1, 1];
    res.color = aHex(ref);

    gltf.materiales.forEach((mat, i) => {
      const nombre = String(mat.nombre || "").toLowerCase();
      if (nombre.indexOf("nose") !== -1 || nombre.indexOf("nariz") !== -1) {
        res.nariz.push(i);
        return;
      }
      if (nombre.indexOf("ear_inner") !== -1 || nombre.indexOf("earinner") !== -1) {
        res.oreja.push(i);
        return;
      }
      if (nombre.indexOf("cheek") !== -1 || nombre.indexOf("mejilla") !== -1) {
        res.mejilla.push(i);
        return;
      }
      /* misma tonalidad que la cabeza = piel */
      const c = mat.color;
      const d = Math.abs(c[0] - ref[0]) + Math.abs(c[1] - ref[1]) + Math.abs(c[2] - ref[2]);
      if (d < 0.08) res.piel.push(i);
    });
    /* Se guardan los colores originales: asi se puede volver al tono
       que traia el archivo (el modelo se guarda en cache). */
    res.piel.concat(res.nariz, res.oreja, res.mejilla).forEach((i) => {
      if (gltf.materiales[i]) res.originales[i] = gltf.materiales[i].color.slice();
    });
    return res;
  }

  return { cargar: cargar, buscar: buscar, anclas: anclas, gruposPiel: gruposPiel, moldear: moldear, capazo: capazo, relieve: relieve, mangas: mangas, subdividir: subdividir, ajustarGeometria: ajustarGeometria, CUERPO: CUERPO, color: { aRGB: aRGB, aHex: aHex, mezclar: mezclar, oscurecer: oscurecer, aclarar: aclarar }, ident: ident, mult: mult, deTRS: deTRS };
})();
