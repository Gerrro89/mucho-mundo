/* =========================================================
   WEB LEER — Motor 3D (WebGL) sin librerías externas
   ---------------------------------------------------------
   Motor mínimo para dibujar un personaje de piezas 3D reales
   (esferas, cápsulas, cilindros, cajas y toros) con luz y
   sombras, y poder girarlo con el dedo o el ratón.

   Por qué propio y no una librería: la web tiene que
   funcionar SIN CONEXIÓN, así que no puede depender de
   ningún archivo externo. Además así ocupa muy poco.

   Uso:
     const motor = AV_MOTOR3D.crear(canvas);
     motor.ponerPiezas(piezas);        // [{tipo, pos, esc, rot, color}]
     motor.iniciar();                    // empieza el bucle de dibujo
     motor.detener();                    // lo para (al salir de la pantalla)
   ========================================================= */

window.AV_MOTOR3D = (function () {
  "use strict";

  /* =========================================================
     1. Matemáticas 3D (matrices de 4x4 en columna mayor)
     ========================================================= */
  function mat4() {
    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }

  function multiplicar(a, b) {
    const r = new Float32Array(16);
    for (let c = 0; c < 4; c++) {
      for (let f = 0; f < 4; f++) {
        r[c * 4 + f] =
          a[f] * b[c * 4] +
          a[4 + f] * b[c * 4 + 1] +
          a[8 + f] * b[c * 4 + 2] +
          a[12 + f] * b[c * 4 + 3];
      }
    }
    return r;
  }

  function perspectiva(fovy, aspect, near, far) {
    const f = 1 / Math.tan(fovy / 2);
    const r = new Float32Array(16);
    r[0] = f / aspect;
    r[5] = f;
    r[10] = (far + near) / (near - far);
    r[11] = -1;
    r[14] = (2 * far * near) / (near - far);
    return r;
  }

  function mirar(oj, centro, arriba) {
    const z = norm(sub(oj, centro));
    const x = norm(cruza(arriba, z));
    const y = cruza(z, x);
    const r = new Float32Array(16);
    r[0] = x[0]; r[1] = y[0]; r[2] = z[0]; r[3] = 0;
    r[4] = x[1]; r[5] = y[1]; r[6] = z[1]; r[7] = 0;
    r[8] = x[2]; r[9] = y[2]; r[10] = z[2]; r[11] = 0;
    r[12] = -punto(x, oj); r[13] = -punto(y, oj); r[14] = -punto(z, oj); r[15] = 1;
    return r;
  }

  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function punto(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cruza(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function norm(a) {
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    return [a[0] / l, a[1] / l, a[2] / l];
  }

  function ident() {
    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }

  /* Matriz de transformación a partir de traslación, rotación
     (cuaternion) y escalado (formato glTF). */
  function deTRS(t, q, s) {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;
    const m = new Float32Array([
      1 - (yy + zz), xy + wz, xz - wy, 0,
      xy - wz, 1 - (xx + zz), yz + wx, 0,
      xz + wy, yz - wx, 1 - (xx + yy), 0,
      0, 0, 0, 1,
    ]);
    const out = new Float32Array(16);
    for (let c = 0; c < 3; c++) {
      for (let f = 0; f < 3; f++) out[c * 4 + f] = m[c * 4 + f] * s[f];
    }
    out[12] = t[0];
    out[13] = t[1];
    out[14] = t[2];
    out[15] = 1; /* el w de la matriz SIEMPRE es 1: si se queda en 0
                    todos los vertices caen detras de la camara */
    return out;
  }

  /* Matriz de rotación sobre el eje X (columna mayor) */
  function rotacionX(ang) {
    const c = Math.cos(ang), s = Math.sin(ang);
    const m = new Float32Array(16);
    m[0] = 1;
    m[5] = c; m[6] = s;
    m[9] = -s; m[10] = c;
    m[15] = 1;
    return m;
  }

  /* Matriz de rotación sobre el eje Y (columna mayor) */
  function rotacionY(ang) {
    const c = Math.cos(ang), s = Math.sin(ang);
    const m = new Float32Array(16);
    m[0] = c; m[2] = -s;
    m[8] = s; m[10] = c;
    m[5] = 1;
    m[15] = 1;
    return m;
  }

  /* Traslación · Rotación · Escalado, en ese orden */
  function componer(pos, rot, esc) {
    const [rx, ry, rz] = rot || [0, 0, 0];
    const [sx, sy, sz] = esc || [1, 1, 1];
    const cx = Math.cos(rx), sxr = Math.sin(rx);
    const cy = Math.cos(ry), syr = Math.sin(ry);
    const cz = Math.cos(rz), szr = Math.sin(rz);
    /* R = Ry * Rx * Rz, guardada en orden de COLUMNAS (que es como
       espera WebGL). Indice = columna * 3 + fila. */
    const r = new Float32Array([
      /* col 0 */ cy * cz + syr * sxr * szr, -cy * szr + syr * sxr * cz, syr * cx,
      /* col 1 */ cx * szr, cx * cz, -sxr,
      /* col 2 */ -syr * cz + cy * sxr * szr, syr * szr + cy * sxr * cz, cy * cx,
    ]);
    const m = new Float32Array(16);
    /* Una matriz 3x3 en orden de columnas tiene paso 3:
       columna 0 = r[0..2], columna 1 = r[3..5], columna 2 = r[6..8]. */
    for (let i = 0; i < 3; i++) {
      m[i] = r[i] * sx;
      m[4 + i] = r[3 + i] * sy;
      m[8 + i] = r[6 + i] * sz;
    }
    m[12] = pos[0];
    m[13] = pos[1];
    m[14] = pos[2];
    m[15] = 1;
    return m;
  }

  /* =========================================================
     2. Generación de mallas (posición, normal y color)
     Cada malla: { datos: Float32Array, Indices: Uint16Array }
     ========================================================= */
  function nuevaMalla(verts, indices) {
    return { datos: new Float32Array(verts), indices: new Uint16Array(indices) };
  }

  function mallaEsfera(radio, segU, segV, color) {
    const v = [];
    const idx = [];
    for (let j = 0; j <= segV; j++) {
      const phi = (j / segV) * Math.PI;
      const sp = Math.sin(phi), cp = Math.cos(phi);
      for (let i = 0; i <= segU; i++) {
        const th = (i / segU) * Math.PI * 2;
        const st = Math.sin(th), ct = Math.cos(th);
        const x = cp * st, y = sp, z = cp * ct;
        v.push(x * radio, y * radio, z * radio, x, y, z, color[0], color[1], color[2]);
      }
    }
    for (let j = 0; j < segV; j++) {
      for (let i = 0; i < segU; i++) {
        const a = j * (segU + 1) + i;
        const b = a + segU + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    return nuevaMalla(v, idx);
  }

  function mallaCilindro(r0, r1, alto, segU, color) {
    const v = [];
    const idx = [];
    const h = alto / 2;
    /* lateral */
    for (let j = 0; j <= 1; j++) {
      const rr = j === 0 ? r0 : r1;
      const y = j === 0 ? -h : h;
      for (let i = 0; i <= segU; i++) {
        const th = (i / segU) * Math.PI * 2;
        const cx = Math.cos(th), cz = Math.sin(th);
        const nx = cx, nz = cz;
        const ny = r1 - r0 === 0 ? 0 : 0;
        v.push(cx * rr, y, cz * rr, nx, ny, nz, color[0], color[1], color[2]);
      }
    }
    for (let i = 0; i < segU; i++) {
      const a = i, b = i + 1, c = segU + 1 + i, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
    /* tapas */
    [1, -1].forEach((sign) => {
      const rr = sign > 0 ? r1 : r0;
      const y = sign > 0 ? h : -h;
      const centro = v.length / 7;
      v.push(0, y, 0, 0, sign, 0, color[0], color[1], color[2]);
      for (let i = 0; i <= segU; i++) {
        const th = (i / segU) * Math.PI * 2;
        v.push(Math.cos(th) * rr, y, Math.sin(th) * rr, 0, sign, 0, color[0], color[1], color[2]);
      }
      for (let i = 0; i < segU; i++) {
        if (sign > 0) idx.push(centro, centro + 1 + i, centro + 2 + i);
        else idx.push(centro, centro + 2 + i, centro + 1 + i);
      }
    });
    return nuevaMalla(v, idx);
  }

  function mallaCaja(w, h, d, color) {
    const v = [];
    const idx = [];
    const x = w / 2, y = h / 2, z = d / 2;
    const caras = [
      [[0, 0, 1], [-x, -y, z], [x, -y, z], [x, y, z], [-x, y, z]],
      [[0, 0, -1], [x, -y, -z], [-x, -y, -z], [-x, y, -z], [x, y, -z]],
      [[1, 0, 0], [x, -y, z], [x, -y, -z], [x, y, -z], [x, y, z]],
      [[-1, 0, 0], [-x, -y, -z], [-x, -y, z], [-x, y, z], [-x, y, -z]],
      [[0, 1, 0], [-x, y, z], [x, y, z], [x, y, -z], [-x, y, -z]],
      [[0, -1, 0], [-x, -y, -z], [x, -y, -z], [x, -y, z], [-x, -y, z]],
    ];
    caras.forEach((cara) => {
      const n = cara[0];
      const base = v.length / 7;
      for (let i = 1; i < 5; i++) {
        v.push(cara[i][0], cara[i][1], cara[i][2], n[0], n[1], n[2], color[0], color[1], color[2]);
      }
      idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
    });
    return nuevaMalla(v, idx);
  }

  /* Superficie de revolucion: el perfil es una lista de
     {y, r} que describe la forma al girar. Las normales se
     calculan a partir de la inclinacion del propio perfil. */
  function mallaRevolucion(perfil, segU, color) {
    const v = [];
    const idx = [];
    const n = perfil.length;
    for (let j = 0; j < n; j++) {
      const p = perfil[j];
      const prev = perfil[Math.max(0, j - 1)];
      const next = perfil[Math.min(n - 1, j + 1)];
      const dr = next.r - prev.r;
      const dy = next.y - prev.y;
      const len = Math.hypot(dr, dy) || 1;
      const nrad = dy / len;
      const nup = -dr / len;
      for (let i = 0; i <= segU; i++) {
        const th = (i / segU) * Math.PI * 2;
        const cx = Math.cos(th), cz = Math.sin(th);
        const pz = p.z || 0;
        v.push(cx * p.r + pz, p.y, cz * p.r, cx * nrad, nup, cz * nrad, color[0], color[1], color[2]);
      }
    }
    for (let j = 0; j < n - 1; j++) {
      for (let i = 0; i < segU; i++) {
        const a = j * (segU + 1) + i;
        const b = a + segU + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    return nuevaMalla(v, idx);
  }

  /* Cono: radio 1 en la base, punta arriba, alto 1 (de -0.5 a 0.5) */
  function mallaCono(radio, segU, color) {
    const v = [];
    const idx = [];
    const h = 0.5;
    for (let i = 0; i <= segU; i++) {
      const th = (i / segU) * Math.PI * 2;
      const cx = Math.cos(th), cz = Math.sin(th);
      const nl = Math.hypot(1, radio) || 1;
      v.push(cx * radio, -h, cz * radio, cx / nl, radio / nl, cz / nl, color[0], color[1], color[2]);
    }
    const punta = v.length / 7;
    v.push(0, h, 0, 0, 1, 0, color[0], color[1], color[2]);
    for (let i = 0; i < segU; i++) {
      idx.push(i, i + 1, punta);
    }
    const base = v.length / 7;
    v.push(0, -h, 0, 0, -1, 0, color[0], color[1], color[2]);
    for (let i = 0; i <= segU; i++) {
      const th = (i / segU) * Math.PI * 2;
      v.push(Math.cos(th) * radio, -h, Math.sin(th) * radio, 0, -1, 0, color[0], color[1], color[2]);
    }
    for (let i = 0; i < segU; i++) {
      idx.push(base, base + 2 + i, base + 1 + i);
    }
    return nuevaMalla(v, idx);
  }

  function mallaToro(R, r, segU, segV, color) {
    const v = [];
    const idx = [];
    for (let j = 0; j <= segV; j++) {
      const ph = (j / segV) * Math.PI * 2;
      const cp = Math.cos(ph), sp = Math.sin(ph);
      for (let i = 0; i <= segU; i++) {
        const th = (i / segU) * Math.PI * 2;
        const ct = Math.cos(th), st = Math.sin(th);
        const x = (R + r * cp) * ct;
        const y = r * sp;
        const z = (R + r * cp) * st;
        const nx = cp * ct, ny = sp, nz = cp * st;
        v.push(x, y, z, nx, ny, nz, color[0], color[1], color[2]);
      }
    }
    for (let j = 0; j < segV; j++) {
      for (let i = 0; i < segU; i++) {
        const a = j * (segU + 1) + i;
        const b = a + segU + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
    return nuevaMalla(v, idx);
  }

  /* =========================================================
     2b. Programa para modelos: con UV, color de vertice y
        textura opcional.
     ========================================================= */
  const VS_MODELO = `
      attribute vec3 aPos;
      attribute vec3 aNorm;
      attribute vec2 aUV;
      attribute vec4 aColor;
      uniform mat4 uMVP;
      uniform mat4 uModelo;
      uniform mat3 uNormal;
      uniform float uGrosor;
      varying vec3 vNorm;
      varying vec2 vUV;
      varying vec4 vColor;
      varying vec3 vPos;
      void main() {
        vNorm = uNormal * aNorm;
        vUV = aUV;
        vColor = aColor;
        /* uGrosor > 0 -> la malla se hincha un poco por la normal:
           sirve para dibujar el contorno de la silueta */
        vec3 pos = aPos + aNorm * uGrosor;
        vPos = (uModelo * vec4(pos, 1.0)).xyz;
        gl_Position = uMVP * vec4(pos, 1.0);
      }`;
  const FS_MODELO = `
      precision mediump float;
      varying vec3 vNorm;
      varying vec2 vUV;
      varying vec4 vColor;
      varying vec3 vPos;
      uniform vec3 uLuz;
      uniform vec3 uOjo;
      uniform vec4 uColor;
      uniform sampler2D uTex;
      uniform float uTieneTex;
      uniform float uColorVert;
      uniform float uEsContorno;
      void main() {
        /* el contorno se dibuja plano, sin luz */
        if (uEsContorno > 0.5) {
          gl_FragColor = vec4(uColor.rgb, uColor.a);
          return;
        }
        vec3 n = normalize(vNorm);
        vec3 l = normalize(uLuz);
        float dif = max(dot(n, l), 0.0);
        float relleno = max(dot(n, normalize(vec3(-0.5, 0.2, -0.8))), 0.0) * 0.3;
        vec3 v = normalize(uOjo - vPos);
        vec4 base = uColor;
        if (uTieneTex > 0.5) {
          vec4 tex = texture2D(uTex, vUV);
          base = vec4(tex.rgb, tex.a) * base;
        }
        /* el color por vertice solo se multiplica cuando se pide */
        base = mix(base, base * vColor, step(0.001, vColor.a) * uColorVert);
        /* Acabado mate: sin brillo especular ni luz de contorno, y la
           luz nunca pasa de 1 para que el color no se lave (asi no
           parece un reflejo). */
        vec3 c = base.rgb * (0.68 + dif * 0.27 + relleno * 0.09);
        /* Contorno suave en la silueta: oscurece el borde y da el
           aspecto de dibujo animado. Tambien ayuda a distinguir la
           ropa de la piel. */
        float borde = pow(1.0 - max(dot(n, v), 0.0), 2.2);
        c = c * (1.0 - borde * 0.38);
        gl_FragColor = vec4(clamp(c, 0.0, 1.0), base.a);
      }`;

  /* =========================================================
     SOMBRA DEL PERSONAJE
     Un disco oscuro y difuminado en el suelo: el personaje se
     apoya en vez de flotar.
     ========================================================= */
  const VS_SOMBRA = `
      attribute vec3 aPos;
      uniform mat4 uMVP;
      varying vec3 vPos;
      void main() {
        vPos = aPos;
        gl_Position = uMVP * vec4(aPos, 1.0);
      }`;
  const FS_SOMBRA = `
      precision mediump float;
      varying vec3 vPos;
      uniform vec4 uColor;
      uniform float uHalo;
      void main() {
        /* dos caidas: una suave y otra de contacto, para que la
           sombra parezca apoyada en el suelo */
        float d = length(vPos.xz);
        float suave = 1.0 - smoothstep(0.15, 1.0, d);
        float contacto = 1.0 - smoothstep(0.0, 0.45, d);
        float a = mix(suave * 0.55 + contacto * 0.45, suave * 0.85, uHalo);
        gl_FragColor = vec4(uColor.rgb, uColor.a * clamp(a, 0.0, 1.0));
      }`;

  /* ---------- Chispas flotando alrededor ---------- */
  const VS_CHISPA = `
      attribute vec2 aPos;
      uniform mat4 uVP;
      uniform vec3 uCentro;
      uniform vec3 uDerecha;
      uniform vec3 uArriba;
      uniform float uTam;
      varying vec2 vUv;
      void main() {
        vUv = aPos;
        vec3 mundo = uCentro + uDerecha * aPos.x * uTam + uArriba * aPos.y * uTam;
        gl_Position = uVP * vec4(mundo, 1.0);
      }`;
  const FS_CHISPA = `
      precision mediump float;
      varying vec2 vUv;
      uniform vec4 uColor;
      void main() {
        float d = length(vUv);
        float a = 1.0 - smoothstep(0.0, 1.0, d);
        a = a * a;
        gl_FragColor = vec4(uColor.rgb, uColor.a * a);
      }`;

  function mallaSombra(segmentos) {
    const vertices = [];
    const indices = [];
    vertices.push(0, 0, 0);
    for (let i = 0; i <= segmentos; i++) {
      const a = (i / segmentos) * Math.PI * 2;
      vertices.push(Math.cos(a), 0, Math.sin(a));
    }
    for (let i = 1; i <= segmentos; i++) indices.push(0, i, i + 1);
    return { vertices: new Float32Array(vertices), indices: new Uint16Array(indices) };
  }

  /* =========================================================
     3. Motor
     ========================================================= */
  function crear(canvas) {
    let gl = null;
    try {
      gl = canvas.getContext("webgl", { antialias: true, alpha: true }) ||
           canvas.getContext("experimental-webgl", { antialias: true, alpha: true });
    } catch (e) {
      gl = null;
    }
    if (!gl) return null;

    /* --- shaders --- */
    const vs = `
      attribute vec3 aPos;
      attribute vec3 aNorm;
      attribute vec3 aColor;
      uniform mat4 uMVP;
      uniform mat4 uModelo;
      uniform mat3 uNormal;
      varying vec3 vNorm;
      varying vec3 vColor;
      varying vec3 vPos;
      void main() {
        vNorm = uNormal * aNorm;
        vColor = aColor;
        vPos = (uModelo * vec4(aPos, 1.0)).xyz;
        gl_Position = uMVP * vec4(aPos, 1.0);
      }`;
    const fs = `
      precision mediump float;
      varying vec3 vNorm;
      varying vec3 vColor;
      varying vec3 vPos;
      uniform vec3 uLuz;
      uniform vec3 uOjo;
      void main() {
        vec3 n = normalize(vNorm);
        vec3 l = normalize(uLuz);
        float dif = max(dot(n, l), 0.0);
        // luz de relleno desde el lado opuesto
        float relleno = max(dot(n, normalize(vec3(-0.5, 0.2, -0.8))), 0.0) * 0.28;
        /* Acabado mate: sin brillo especular ni luz de contorno, y la
           luz nunca pasa de 1 para que el color no se lave. */
        vec3 c = vColor * (0.68 + dif * 0.27 + relleno * 0.09);
        // contorno suave en la silueta (estilo dibujo animado)
        vec3 v = normalize(uOjo - vPos);
        float borde = pow(1.0 - max(dot(n, v), 0.0), 2.2);
        c = c * (1.0 - borde * 0.38);
        gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
      }`;

    function compilar(tipo, fuente) {
      const s = gl.createShader(tipo);
      gl.shaderSource(s, fuente);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        ultimoError = (tipo === gl.VERTEX_SHADER ? "vertice: " : "fragmento: ") + gl.getShaderInfoLog(s);
        gl.deleteShader(s);
        return null;
      }
      return s;
    }
    const vsC = compilar(gl.VERTEX_SHADER, vs);
    const fsC = compilar(gl.FRAGMENT_SHADER, fs);
    if (!vsC || !fsC) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vsC);
    gl.attachShader(prog, fsC);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    gl.useProgram(prog);



    const aPos = gl.getAttribLocation(prog, "aPos");
    const aNorm = gl.getAttribLocation(prog, "aNorm");
    const aColor = gl.getAttribLocation(prog, "aColor");
    const uMVP = gl.getUniformLocation(prog, "uMVP");
    const uModelo = gl.getUniformLocation(prog, "uModelo");
    const uNormal = gl.getUniformLocation(prog, "uNormal");
    const uLuz = gl.getUniformLocation(prog, "uLuz");
    const uOjo = gl.getUniformLocation(prog, "uOjo");

    /* --- estado de la escena --- */
    const piezas = [];
    let ultimoError = "";
    let modelo = null; // modelo glTF principal (el personaje)
    let modelos = []; // todos los que se dibujan: personaje + accesorios
    /* sombra en el suelo: donde se apoya el personaje */
    let sombraRadio = 0;
    let sombraPos = [0, 0, 0];
    let progSombra = null;
    let locSombra = null;
    let bufferSombra = null;
    /* chispas flotando alrededor del personaje */
    let chispas = [];
    let progChispa = null;
    let locChispa = null;
    let bufferChispa = null;
    /* grosor del contorno de la silueta (0 = sin contorno) */
    let grosorContorno = 0.028;
    /* Correccion de ejes: algunos modelos vienen en Z-up (el
       personaje "tumbado"). Esta matriz los pone boca arriba. */
    let correccionBase = ident();
    let giroExtra = 0; // grados extra que gira el modelo sobre si mismo

    /* Matriz final: el giro que elija el niño, sobre la correccion */
    function correccionActual() {
      if (!giroExtra) return correccionBase;
      return multiplicar(rotacionY(giroExtra), correccionBase);
    }
    let angY = 0;
    let angX = 0.08;
    let zoom = 3.1;
    let centroCam = [0, 1.05, 0]; // donde mira la camara
    let girando = false;
    let ultimoX = 0;
    let ultimoY = 0;
    let activo = false;
    let raf = null;
    let arrastrando = false;
    let autoGiro = false;
    let alCambiarVista = null;

    /* --- color --- */
    function colorHex(hex) {
      const h = hex.replace("#", "");
      return [
        parseInt(h.substring(0, 2), 16) / 255,
        parseInt(h.substring(2, 4), 16) / 255,
        parseInt(h.substring(4, 6), 16) / 255,
      ];
    }

    /* --- mallas cacheadas por tipo+medidas --- */
    const cache = {};
    function malla(tipo, medidas, color) {
      const clave = tipo + "|" + medidas.join(",") + "|" + color;
      if (cache[clave]) return cache[clave];
      const c = colorHex(color);
      let m;
      /* Todas las mallas son de tamano 1: el tamano real lo aplica
         la matriz del modelo (asi no se duplica la escala). */
      if (tipo === "esf") m = mallaEsfera(1, 20, 14, c);
      else if (tipo === "cil") m = mallaCilindro(1, medidas[1] !== undefined ? medidas[1] : 1, 1, 20, c);
      else if (tipo === "caja") m = mallaCaja(1, 1, 1, c);
      else if (tipo === "tor") m = mallaToro(1, medidas[1] || 0.15, 24, 10, c);
      else if (tipo === "cono") m = mallaCono(1, 20, c);
      else if (tipo === "lathe") {
        const perfil = String(medidas[0] || "")
          .split(",")
          .map((s) => {
            const a = s.split(":");
            return {
              y: parseFloat(a[0]),
              r: parseFloat(a[1]),
              z: a.length > 2 ? parseFloat(a[2]) : 0,
            };
          });
        m = mallaRevolucion(perfil, 26, c);
      }
      cache[clave] = m;
      return m;
    }

    /* --- ajuste del lienzo --- */
    function ajustar() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth || 300;
      const h = canvas.clientHeight || 360;
      const pw = Math.round(w * dpr);
      const ph = Math.round(h * dpr);
      if (canvas.width !== pw || canvas.height !== ph) {
        canvas.width = pw;
        canvas.height = ph;
      }
      /* El viewport NO se ajusta solo al cambiar el tamaño del
         lienzo: hay que ponerlo a mano en cada fotograma. */
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    /* --- dibujo --- */
    function dibujarFrame() {
      ajustar();
      const tiempo = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
      /* El test de profundidad y la escritura se activan ANTES de
         limpiar: si no, el buffer de profundidad se queda con
         contenido indefinido y ninguna pieza llega a pintarse. */
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.depthMask(true);
      gl.colorMask(true, true, true, true);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      /* No se descarta ninguna cara: el orden de los vértices de
         las mallas es mixto y el culling las ocultaba todas. */
      gl.disable(gl.CULL_FACE);

      if (autoGiro && !arrastrando && !girando) angY += 0.004;

      const aspecto = canvas.width / Math.max(1, canvas.height);
      const proj = perspectiva(0.9, aspecto, 0.1, 60);
      const ojo = [centroCam[0] + Math.sin(angY) * zoom, centroCam[1] + Math.sin(angX) * zoom, centroCam[2] + Math.cos(angY) * zoom];
      const vista = mirar(ojo, centroCam, [0, 1, 0]);
      const vp = multiplicar(proj, vista);

      gl.uniform3f(uLuz, -0.45, 0.85, 0.75);
      gl.uniform3f(uOjo, ojo[0], ojo[1], ojo[2]);

      if (modelos.length) {
        /* 1) el contorno: todas las siluetas por detrás, engrosadas.
              Solo se ven las caras traseras, asi que solo se ve el
              borde: el efecto del dibujo animado. */
        if (grosorContorno > 0) {
          gl.enable(gl.CULL_FACE);
          gl.cullFace(gl.FRONT);
          for (let mi = 0; mi < modelos.length; mi++) {
            dibujarModelo(modelos[mi].gltf, modelos[mi].ajuste, true);
          }
          gl.cullFace(gl.BACK);
          gl.disable(gl.CULL_FACE);
        }
        /* 2) el personaje y sus accesorios encima */
        for (let mi = 0; mi < modelos.length; mi++) {
          dibujarModelo(modelos[mi].gltf, modelos[mi].ajuste, false);
        }
        dibujarSombra();
        dibujarChispas(tiempo / 1000);
      }
      for (let i = 0; i < piezas.length; i++) {
        const p = piezas[i];
        const modelo = componer(p.pos || [0, 0, 0], p.rot || [0, 0, 0], p.esc || [1, 1, 1]);
        const mvp = multiplicar(vp, modelo);
        gl.uniformMatrix4fv(uMVP, false, mvp);
        gl.uniformMatrix4fv(uModelo, false, modelo);
        /* normal: se usa la parte de rotación+escala */
        const n = new Float32Array([modelo[0], modelo[1], modelo[2], modelo[4], modelo[5], modelo[6], modelo[8], modelo[9], modelo[10]]);
        gl.uniformMatrix3fv(uNormal, false, n);

        const m = malla(p.tipo, p.medidas || [1, 1, 1], p.color || "#ffffff");
        if (!m) continue;
        if (!p.buf) {
          p.buf = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, p.buf);
          gl.bufferData(gl.ARRAY_BUFFER, m.datos, gl.STATIC_DRAW);
          p.ibuf = gl.createBuffer();
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, p.ibuf);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, m.indices, gl.STATIC_DRAW);
          p.n = m.indices.length;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, p.buf);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, p.ibuf);
        /* Cada vértice ocupa 9 floats: posición(3) + normal(3) + color(3) */
        const stride = 9 * 4;
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, stride, 0);
        gl.enableVertexAttribArray(aNorm);
        gl.vertexAttribPointer(aNorm, 3, gl.FLOAT, false, stride, 12);
        gl.enableVertexAttribArray(aColor);
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, stride, 24);
        gl.drawElements(gl.TRIANGLES, p.n, gl.UNSIGNED_SHORT, 0);
      }
    }

    function dibujar() {
      if (!activo) return;
      dibujarFrame();
      raf = requestAnimationFrame(dibujar);
    }

    /* --- arrastre para girar --- */
    function alBajar(e) {
      arrastrando = true;
      girando = false;
      autoGiro = false;
      ultimoX = e.clientX;
      ultimoY = e.clientY;
      if (e.target.setPointerCapture) {
        try { e.target.setPointerCapture(e.pointerId); } catch (err) {}
      }
      e.preventDefault();
    }
    function alMover(e) {
      if (!arrastrando) return;
      const dx = e.clientX - ultimoX;
      const dy = e.clientY - ultimoY;
      angY += dx * 0.01;
      angX = Math.max(-0.7, Math.min(0.7, angX + dy * 0.006));
      ultimoX = e.clientX;
      ultimoY = e.clientY;
      e.preventDefault();
    }
    function alSoltar() {
      if (!arrastrando) return;
      arrastrando = false;
      girando = true;
      /* El personaje se queda quieto: al soltar no se vuelve a girar
         solo. La perspectiva la elige el niño arrastrando. */
      setTimeout(() => { girando = false; }, 400);
      avisarVista();
    }
    /* Avisa de que la perspectiva ha cambiado (para poder guardarla) */
    function avisarVista() {
      if (typeof alCambiarVista === "function") {
        try {
          alCambiarVista({ giro: Math.round((angY * 180) / Math.PI), altura: Math.round((angX * 180) / Math.PI) });
        } catch (e) {}
      }
    }
    canvas.addEventListener("pointerdown", alBajar);
    canvas.addEventListener("pointermove", alMover);
    canvas.addEventListener("pointerup", alSoltar);
    canvas.addEventListener("pointercancel", alSoltar);
    canvas.addEventListener("pointerleave", alSoltar);
    canvas.addEventListener("wheel", (e) => {
      zoom = Math.max(1.9, Math.min(5, zoom + (e.deltaY > 0 ? 0.18 : -0.18)));
      e.preventDefault();
    }, { passive: false });

    /* ---------- Programa para modelos glTF ---------- */
    let progM = null;
    let locM = null;
    /* El aviso de fallo se imprime solo la primera vez: en cada
       fotograma repetiría el mismo mensaje y ensuciaría la consola. */
    let avisoModeloDicho = false;
    /* Texturas de los modelos: se crean una vez y se reutilizan */
    const texturasGL = new Map();
    function texturaDe(imagen) {
      if (!imagen) return null;
      if (texturasGL.has(imagen)) return texturasGL.get(imagen);
      const t = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imagen);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      texturasGL.set(imagen, t);
      return t;
    }
    function prepararModelo() {
      if (progM) return progM;
      const v = compilar(gl.VERTEX_SHADER, VS_MODELO);
      const f = compilar(gl.FRAGMENT_SHADER, FS_MODELO);
      if (!v || !f) {
        if (!avisoModeloDicho) {
          if (window.console) console.warn("AV: el programa del modelo no se pudo preparar");
          avisoModeloDicho = true;
        }
        return null;
      }
      const p = gl.createProgram();
      gl.attachShader(p, v);
      gl.attachShader(p, f);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        if (!avisoModeloDicho) {
          if (window.console) console.warn("AV: no se pudo enlazar el programa del modelo", gl.getProgramInfoLog(p));
          avisoModeloDicho = true;
        }
        return null;
      }
      progM = p;
      locM = {
        aPos: gl.getAttribLocation(p, 'aPos'),
        aNorm: gl.getAttribLocation(p, 'aNorm'),
        aUV: gl.getAttribLocation(p, 'aUV'),
        aColor: gl.getAttribLocation(p, 'aColor'),
        uMVP: gl.getUniformLocation(p, 'uMVP'),
        uModelo: gl.getUniformLocation(p, 'uModelo'),
        uNormal: gl.getUniformLocation(p, 'uNormal'),
        uLuz: gl.getUniformLocation(p, 'uLuz'),
        uOjo: gl.getUniformLocation(p, 'uOjo'),
        uColor: gl.getUniformLocation(p, 'uColor'),
        uTex: gl.getUniformLocation(p, 'uTex'),
        uTieneTex: gl.getUniformLocation(p, 'uTieneTex'),
        uColorVert: gl.getUniformLocation(p, 'uColorVert'),
        uGrosor: gl.getUniformLocation(p, 'uGrosor'),
        uEsContorno: gl.getUniformLocation(p, 'uEsContorno'),
      };
      return progM;
    }

    /* ---------- Prepara y dibuja la sombra del suelo ---------- */
    function prepararSombra() {
      if (progSombra) return progSombra;
      const v = compilar(gl.VERTEX_SHADER, VS_SOMBRA);
      const f = compilar(gl.FRAGMENT_SHADER, FS_SOMBRA);
      if (!v || !f) return null;
      const p = gl.createProgram();
      gl.attachShader(p, v);
      gl.attachShader(p, f);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null;
      progSombra = p;
      locSombra = {
        aPos: gl.getAttribLocation(p, "aPos"),
        uMVP: gl.getUniformLocation(p, "uMVP"),
        uColor: gl.getUniformLocation(p, "uColor"),
        uHalo: gl.getUniformLocation(p, "uHalo"),
      };
      const m = mallaSombra(28);
      bufferSombra = {
        pos: gl.createBuffer(),
        idx: gl.createBuffer(),
      };
      gl.bindBuffer(gl.ARRAY_BUFFER, bufferSombra.pos);
      gl.bufferData(gl.ARRAY_BUFFER, m.vertices, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferSombra.idx);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, m.indices, gl.STATIC_DRAW);
      return progSombra;
    }

    function dibujarSombra() {
      if (!sombraRadio) return;
      if (!prepararSombra()) return;
      const aspecto = canvas.width / Math.max(1, canvas.height);
      const proj = perspectiva(0.9, aspecto, 0.1, 400);
      const ojo = [centroCam[0] + Math.sin(angY) * zoom, centroCam[1] + Math.sin(angX) * zoom, centroCam[2] + Math.cos(angY) * zoom];
      const vista = mirar(ojo, centroCam, [0, 1, 0]);
      const vp = multiplicar(proj, vista);
      const m = ident();
      m[0] = sombraRadio;
      m[10] = sombraRadio;
      m[12] = sombraPos[0];
      m[13] = sombraPos[1];
      m[14] = sombraPos[2];
      const mvp = multiplicar(vp, m);

      gl.useProgram(progSombra);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.depthMask(false);
      gl.uniformMatrix4fv(locSombra.uMVP, false, mvp);
      gl.bindBuffer(gl.ARRAY_BUFFER, bufferSombra.pos);
      gl.enableVertexAttribArray(locSombra.aPos);
      gl.vertexAttribPointer(locSombra.aPos, 3, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferSombra.idx);

      /* 1) el halo luminoso del suelo (aditivo) */
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.uniform1f(locSombra.uHalo, 1);
      gl.uniform4f(locSombra.uColor, 0.55, 0.75, 1.0, 0.35);
      gl.drawElements(gl.TRIANGLES, 28 * 3, gl.UNSIGNED_SHORT, 0);

      /* 2) la sombra propiamente dicha */
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.uniform1f(locSombra.uHalo, 0);
      gl.uniform4f(locSombra.uColor, 0.15, 0.2, 0.28, 0.34);
      gl.drawElements(gl.TRIANGLES, 28 * 3, gl.UNSIGNED_SHORT, 0);

      gl.depthMask(true);
      gl.disable(gl.BLEND);
      gl.useProgram(prog);
    }

    /* ---------- Chispas flotantes ---------- */
    function prepararChispa() {
      if (progChispa) return progChispa;
      const v = compilar(gl.VERTEX_SHADER, VS_CHISPA);
      const f = compilar(gl.FRAGMENT_SHADER, FS_CHISPA);
      if (!v || !f) return null;
      const p = gl.createProgram();
      gl.attachShader(p, v);
      gl.attachShader(p, f);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null;
      progChispa = p;
      locChispa = {
        aPos: gl.getAttribLocation(p, "aPos"),
        uVP: gl.getUniformLocation(p, "uVP"),
        uCentro: gl.getUniformLocation(p, "uCentro"),
        uDerecha: gl.getUniformLocation(p, "uDerecha"),
        uArriba: gl.getUniformLocation(p, "uArriba"),
        uTam: gl.getUniformLocation(p, "uTam"),
        uColor: gl.getUniformLocation(p, "uColor"),
      };
      /* un quad de dos triangulos */
      const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
      const indices = new Uint16Array([0, 1, 2, 1, 3, 2]);
      bufferChispa = { pos: gl.createBuffer(), idx: gl.createBuffer() };
      gl.bindBuffer(gl.ARRAY_BUFFER, bufferChispa.pos);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferChispa.idx);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
      return progChispa;
    }

    function dibujarChispas(tiempo) {
      if (!chispas.length) return;
      if (!prepararChispa()) return;
      const aspecto = canvas.width / Math.max(1, canvas.height);
      const proj = perspectiva(0.9, aspecto, 0.1, 400);
      const ojo = [centroCam[0] + Math.sin(angY) * zoom, centroCam[1] + Math.sin(angX) * zoom, centroCam[2] + Math.cos(angY) * zoom];
      const vista = mirar(ojo, centroCam, [0, 1, 0]);
      const vp = multiplicar(proj, vista);
      /* ejes de la camara para que los chispas miren siempre al frente */
      const der = [vista[0], vista[4], vista[8]];
      const arr = [vista[1], vista[5], vista[9]];

      gl.useProgram(progChispa);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.depthMask(false);
      gl.uniformMatrix4fv(locChispa.uVP, false, vp);
      gl.uniform3f(locChispa.uDerecha, der[0], der[1], der[2]);
      gl.uniform3f(locChispa.uArriba, arr[0], arr[1], arr[2]);
      gl.bindBuffer(gl.ARRAY_BUFFER, bufferChispa.pos);
      gl.enableVertexAttribArray(locChispa.aPos);
      gl.vertexAttribPointer(locChispa.aPos, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferChispa.idx);

      for (let i = 0; i < chispas.length; i++) {
        const c = chispas[i];
        const edad = tiempo - c.t0;
        /* las chispas de estallido se apagan solas */
        if (c.vida && edad > c.vida) continue;
        const radio = c.r0 + c.v * edad;
        const x = Math.cos(c.ang) * radio;
        const z = Math.sin(c.ang) * radio;
        const sube = (c.y + edad * c.vel) % c.alto;
        /* el brillo parpadea; en el estallido se apaga al final */
        const parpadeo = 0.35 + 0.65 * Math.abs(Math.sin(edad * c.pulso + c.fase));
        const brillo = c.vida ? parpadeo * Math.max(0, 1 - edad / c.vida) : parpadeo;
        const tam = c.tam * (0.75 + 0.35 * brillo);
        gl.uniform3f(locChispa.uCentro, x, sombraPos[1] + sube, z);
        gl.uniform1f(locChispa.uTam, tam);
        gl.uniform4f(locChispa.uColor, c.r, c.g, c.b, 0.9 * brillo);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      }
      gl.depthMask(true);
      gl.disable(gl.BLEND);
      gl.useProgram(prog);
    }

    /* ---------- Dibuja un modelo glTF ---------- */
    /* Construye la matriz de ajuste de una prenda:
       p' = desp + centro + escala * (p - centro)
       donde "centro" es el centro de la caja de la prenda. */
    function matrizAjuste(ajuste, gltf) {
      const e = ajuste.escala || [1, 1, 1];
      const d = ajuste.desp || [0, 0, 0];
      /* centro de la caja de la prenda (en su espacio original) */
      let mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
      let alguno = false;
      const mundoNodos = [];
      (function rec(indice, padre) {
        const n = gltf.nodos[indice];
        if (!n) return;
        const local = n.matriz ? n.matriz : deTRS(n.t, n.r, n.s);
        const mundo = multiplicar(padre, local);
        mundoNodos.push({ n: n, mundo: mundo });
        (n.hijos || []).forEach((h) => rec(h, mundo));
      })(gltf.escena[0] !== undefined ? gltf.escena[0] : -1, ident());
      mundoNodos.forEach((item) => {
        if (item.n.malla < 0) return;
        const malla = gltf.mallas[item.n.malla];
        if (!malla) return;
        malla.primitivas.forEach((prim) => {
          if (!prim.pos || !prim.pos.datos) return;
          const dd = prim.pos.datos;
          for (let i = 0; i < dd.length; i += 3) {
            for (let k = 0; k < 3; k++) {
              if (dd[i + k] < mn[k]) mn[k] = dd[i + k];
              if (dd[i + k] > mx[k]) mx[k] = dd[i + k];
            }
          }
          alguno = true;
        });
      });
      if (!alguno) return null;
      const centro = [(mn[0] + mx[0]) / 2, (mn[1] + mx[1]) / 2, (mn[2] + mx[2]) / 2];

      /* M = T(desp + centro) * S(escala) * T(-centro) */
      const m = ident();
      for (let c = 0; c < 3; c++) {
        for (let f = 0; f < 3; f++) m[c * 4 + f] = (c === f ? e[c] : 0);
      }
      m[12] = d[0] + centro[0] - e[0] * centro[0];
      m[13] = d[1] + centro[1] - e[1] * centro[1];
      m[14] = d[2] + centro[2] - e[2] * centro[2];
      m[15] = 1;
      return m;
    }

    function dibujarModelo(gltf, ajuste, contorno) {
      if (!gltf) return;
      if (!prepararModelo()) return;
      gl.useProgram(progM);
      const aspecto = canvas.width / Math.max(1, canvas.height);
      const proj = perspectiva(0.9, aspecto, 0.1, 400);
      const ojo = [centroCam[0] + Math.sin(angY) * zoom, centroCam[1] + Math.sin(angX) * zoom, centroCam[2] + Math.cos(angY) * zoom];
      const vista = mirar(ojo, centroCam, [0, 1, 0]);
      const vp = multiplicar(proj, vista);
      gl.uniform3f(locM.uLuz, -0.45, 0.85, 0.75);
      gl.uniform3f(locM.uOjo, ojo[0], ojo[1], ojo[2]);
      gl.activeTexture(gl.TEXTURE0);
      gl.uniform1i(locM.uTex, 0);
      gl.uniform1f(locM.uGrosor, contorno ? grosorContorno : 0);
      gl.uniform1f(locM.uEsContorno, contorno ? 1 : 0);

      /* El ajuste de la prenda se aplica en su propio espacio */
      const ajusteMat = ajuste ? matrizAjuste(ajuste, gltf) : null;
      const mundoNodos = [];
      function recorrer(indice, padre) {
        const n = gltf.nodos[indice];
        if (!n) return;
        let local;
        if (n.matriz) local = n.matriz;
        else local = deTRS(n.t, n.r, n.s);
        /* La correccion de ejes se aplica UNA vez, en la raiz: si se
           aplicase en cada nivel se acumularia y el modelo daria una
           vuelta de mas. */
        const mundo = multiplicar(padre, local);
        mundoNodos.push({ n: n, mundo: mundo });
        n.hijos.forEach(function (h) { recorrer(h, mundo); });
      }
      const raiz = ajusteMat ? multiplicar(correccionActual(), ajusteMat) : correccionActual();
      gltf.escena.forEach(function (i) { recorrer(i, raiz); });

      mundoNodos.forEach(function (item) {
        const n = item.n;
        if (n.malla < 0) return;
        const malla = gltf.mallas[n.malla];
        if (!malla) return;
        malla.primitivas.forEach(function (prim) {
          if (!prim.pos) return;
          /* buffers */
          const buf = crearBuffersPrimitiva(prim);
          if (!buf) return;
          const mat = prim.material >= 0 ? gltf.materiales[prim.material] : null;
          /* Si la pieza trae color por vertice, ese es su color real
             (asi lo traen los archivos del usuario); si no, manda el
             material. Un tinte elegido sustituye al color por vertice. */
          const tieneColorVert = !!buf.color;
          let col, alpha;
          if (contorno) {
            /* el contorno es un tono oscuro y calido, plano */
            col = [0.13, 0.15, 0.21];
            alpha = 0.92;
          } else if (tieneColorVert && gltf._tinte) {
            col = gltf._tinte;
            alpha = 1;
          } else if (tieneColorVert) {
            col = [1, 1, 1];
            alpha = 1;
          } else {
            col = mat ? mat.color : (gltf.colorPrincipal || [0.8, 0.8, 0.8]);
            alpha = mat ? mat.alpha : 1;
          }
          gl.uniform4f(locM.uColor, col[0], col[1], col[2], alpha);
          gl.uniform1f(locM.uColorVert, tieneColorVert && !gltf._tinte ? 1 : 0);
          /* textura */
          const tex = mat && mat.textura >= 0 ? texturaDe(gltf.texturas[mat.textura]) : null;
          if (tex) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, tex);
            gl.uniform1f(locM.uTieneTex, 1);
          } else {
            gl.uniform1f(locM.uTieneTex, 0);
          }
          /* matrices */
          const mvp = multiplicar(vp, item.mundo);
          gl.uniformMatrix4fv(locM.uMVP, false, mvp);
          gl.uniformMatrix4fv(locM.uModelo, false, item.mundo);
          const nm = new Float32Array([
            item.mundo[0], item.mundo[1], item.mundo[2],
            item.mundo[4], item.mundo[5], item.mundo[6],
            item.mundo[8], item.mundo[9], item.mundo[10],
          ]);
          gl.uniformMatrix3fv(locM.uNormal, false, nm);
          gl.bindBuffer(gl.ARRAY_BUFFER, buf.pos);
          if (locM.aPos >= 0) {
            gl.enableVertexAttribArray(locM.aPos);
            gl.vertexAttribPointer(locM.aPos, 3, gl.FLOAT, false, 0, 0);
          }
          if (locM.aNorm >= 0) {
            if (buf.norm) {
              /* OJO: vertexAttribPointer usa el búfer que este
                 enlazado, asi que hay que cambiarlo antes de cada
                 atributo (si no, el color leeria las normales). */
              gl.bindBuffer(gl.ARRAY_BUFFER, buf.norm);
              gl.enableVertexAttribArray(locM.aNorm);
              gl.vertexAttribPointer(locM.aNorm, 3, gl.FLOAT, false, 0, 0);
            } else gl.disableVertexAttribArray(locM.aNorm);
          }
          if (locM.aUV >= 0) {
            if (buf.uv) {
              gl.bindBuffer(gl.ARRAY_BUFFER, buf.uv);
              gl.enableVertexAttribArray(locM.aUV);
              gl.vertexAttribPointer(locM.aUV, 2, gl.FLOAT, false, 0, 0);
            } else gl.disableVertexAttribArray(locM.aUV);
          }
          if (locM.aColor >= 0) {
            if (tieneColorVert) {
              gl.bindBuffer(gl.ARRAY_BUFFER, buf.color);
              gl.enableVertexAttribArray(locM.aColor);
              gl.vertexAttribPointer(locM.aColor, 4, gl.FLOAT, false, 0, 0);
            } else {
              gl.disableVertexAttribArray(locM.aColor);
              gl.vertexAttrib4f(locM.aColor, 1, 1, 1, 1);
            }
          }
          const cuenta = prim.indices ? prim.indices.count : prim.pos.count;
          if (prim.indices) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buf.idx);
            /* Los indices pueden ser de 32 bits (UNSIGNED_INT) */
            const tipoInd = prim.indices.comp === 5125 ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
            gl.drawElements(prim.modo, cuenta, tipoInd, 0);
          } else {
            gl.drawArrays(prim.modo, 0, cuenta);
          }
        });
      });
      gl.useProgram(prog);
    }

    /* Crea (o reutiliza) los buffers de una primitiva */
    const buffersPrimitivas = new Map();
    function crearBuffersPrimitiva(prim) {
      const clave = prim;
      if (buffersPrimitivas.has(clave)) return buffersPrimitivas.get(clave);
      const mk = (acc, componentes) => {
        if (!acc) return null;
        const b = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, b);
        gl.bufferData(gl.ARRAY_BUFFER, acc.datos, gl.STATIC_DRAW);
        return b;
      };
      let idx = null;
      if (prim.indices) {
        idx = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idx);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, prim.indices.datos, gl.STATIC_DRAW);
      }
      const res = { pos: mk(prim.pos), norm: mk(prim.norm), uv: mk(prim.uv), color: mk(prim.color), idx: idx };
      buffersPrimitivas.set(clave, res);
      return res;
    }

    return {
      ok: true,
      /* Pone las piezas. Cada pieza: {tipo, pos, esc, rot, color, medidas} */
      ponerPiezas(lista) {
        piezas.length = 0;
        (lista || []).forEach((p) => {
          piezas.push({
            tipo: p.tipo,
            pos: p.pos || [0, 0, 0],
            esc: p.esc || [1, 1, 1],
            rot: p.rot || [0, 0, 0],
            color: p.color || "#ffffff",
            medidas: p.medidas || [1, 1, 1],
          });
        });
      },
      iniciar() {
        if (activo) return;
        activo = true;
        dibujar();
      },
      detener() {
        activo = false;
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      },
      /* Libera el contexto WebGL de verdad: sin esto el navegador
         acumula contextos y deja de poder crear nuevos. */
      liberar() {
        this.detener();
        try {
          const ext = gl.getExtension('WEBGL_lose_context');
          if (ext) ext.loseContext();
        } catch (e) {}
      },
      /* Carga y dibuja un modelo glTF. El primero es el personaje;
         los siguientes son los accesorios (van en su mismo espacio). */
      get modelo() { return modelo; },
      async cargarModelo(url) {
        if (!window.AV_GLTF) return null;
        try {
          const g = await window.AV_GLTF.cargar(url);
          modelo = g;
          modelos.push({ gltf: g, ajuste: null });
          return g;
        } catch (e) {
          if (window.console) console.warn("AV: no se pudo cargar el modelo", url, e);
          return null;
        }
      },
      /* Añade un modelo ya cargado (accesorios).
         El ajuste (escala + desplazamiento) se aplica en el espacio
         original de la prenda, antes de la correccion de ejes. */
      anadirModelo(gltf, ajuste, id) {
        if (!gltf) return null;
        if (!modelo) modelo = gltf;
        modelos.push({ gltf: gltf, ajuste: ajuste || null, id: id || null });
        return gltf;
      },
      /* Cambia el color de un accesorio ya cargado, sin recargar
         nada: se ve al instante. */
      tintarAccesorio(id, hex) {
        if (!id || !hex) return false;
        for (let i = 0; i < modelos.length; i++) {
          if (modelos[i].id === id) {
            return this.colorAccesorio(modelos[i].gltf, hex);
          }
        }
        return false;
      },
      /* Deja solo este modelo (se usa para las miniaturas) */
      soloEsteModelo(gltf, ajuste, id) {
        modelo = gltf || null;
        modelos = gltf ? [{ gltf: gltf, ajuste: ajuste || null, id: id || null }] : [];
        return modelos.length;
      },
      /* Quita todos los modelos menos el personaje (al cambiar de ropa) */
      dejarSoloElPersonaje() {
        modelos = modelo ? [{ gltf: modelo, ajuste: null }] : [];
        return modelos.length;
      },
      /* Numero de modelos que se dibujan */
      numModelos() {
        return modelos.length;
      },
      girarA(grados) {
        angY = (grados * Math.PI) / 180;
      },
      /* Enciende o apaga el giro automatico */
      autoGiro(on) {
        autoGiro = !!on;
        return autoGiro;
      },
      /* Mueve la camara a un punto (grados) y vuelve a la vista
         de frente si se pide. */
      moverVista(giro, altura) {
        if (giro !== undefined && giro !== null) angY = (giro * Math.PI) / 180;
        /* la altura tambien va en grados (igual que vistaActual) */
        if (altura !== undefined && altura !== null) {
          angX = Math.max(-0.7, Math.min(0.7, (altura * Math.PI) / 180));
        }
        avisarVista();
        return { giro: (angY * 180) / Math.PI, altura: (angX * 180) / Math.PI };
      },
      /* Vuelve a la vista de frente (mirando al niño) */
      mirarAlFrente() {
        angY = 0;
        angX = 0.08;
        avisarVista();
        return { giro: 0, altura: angX };
      },
      /* Se avisa cuando el niño cambia la perspectiva */
      alCambiarVista(fn) {
        alCambiarVista = fn;
      },
      /* Angulo actual de la vista (para guardar la preferencia) */
      vistaActual() {
        return { giro: Math.round((angY * 180) / Math.PI), altura: Math.round((angX * 180) / Math.PI) };
      },
      /* Cambia el color de un accesorio (el material principal).
         Los adornos y detalles conservan su color. */
      colorAccesorio(gltf, hex) {
        if (!gltf || !hex) return false;
        const C = window.AV_GLTF.color;
        const rgb = C.aRGB(hex);
        let cual = gltf.materialPrincipal;
        if (cual === undefined || cual < 0 || !gltf.materiales[cual]) cual = 0;
        if (!gltf.materiales[cual]) return false;
        gltf.materiales[cual].color = rgb;
        gltf.colorPrincipal = rgb.slice();
        /* el tinte sustituye tambien al color por vertice */
        gltf._tinte = rgb.slice();
        return true;
      },
      /* Coloca la sombra en el suelo, bajo los pies del personaje */
      ponerSombra(radio, posicion) {
        sombraRadio = radio || 0;
        if (posicion) sombraPos = posicion;
        return sombraRadio;
      },
      /* Enciende chispas flotando alrededor del personaje.
         Dan vida a la escena sin que el personaje se mueva. */
      ponChispas(cantidad, radio, alto) {
        chispas = [];
        const n = Math.max(0, Math.min(40, cantidad || 0));
        const paleta = [
          [1.0, 0.92, 0.55],  // cálido
          [0.75, 0.95, 1.0],  // azul claro
          [1.0, 0.78, 0.85],  // rosa
          [0.72, 1.0, 0.8],   // verde menta
        ];
        const ahora = (typeof performance !== "undefined" && performance.now ? performance.now() : Date.now()) / 1000;
        for (let i = 0; i < n; i++) {
          const ang = (i / n) * Math.PI * 2 + Math.random() * 0.6;
          const r = (radio || 0.6) * (0.55 + Math.random() * 0.75);
          const col = paleta[i % paleta.length];
          chispas.push({
            ang: ang,
            r0: r,
            v: 0,
            x: Math.cos(ang) * r,
            z: Math.sin(ang) * r,
            y: Math.random() * 0.4,
            alto: alto || 1.6,
            vel: 0.06 + Math.random() * 0.1,
            fase: Math.random() * 6.28,
            pulso: 0.6 + Math.random() * 1.4,
            tam: 0.06 + Math.random() * 0.075,
            r: col[0],
            g: col[1],
            b: col[2],
            vida: 0,
            t0: ahora,
          });
        }
        return chispas.length;
      },
      /* Estallido de chispas: salen disparadas y se apagan.
         Se usa al ponerse o quitarse una prenda. */
      estallidoChispas(cantidad) {
        const n = Math.max(0, Math.min(60, cantidad || 0));
        const paleta = [
          [1.0, 0.9, 0.5],
          [0.7, 0.95, 1.0],
          [1.0, 0.72, 0.8],
          [0.65, 1.0, 0.78],
          [1.0, 1.0, 0.95],
        ];
        const ahora = (typeof performance !== "undefined" && performance.now ? performance.now() : Date.now()) / 1000;
        for (let i = 0; i < n; i++) {
          const ang = Math.random() * Math.PI * 2;
          const col = paleta[i % paleta.length];
          chispas.push({
            ang: ang,
            r0: 0.15 + Math.random() * 0.25,
            v: 0.55 + Math.random() * 0.75,
            x: 0,
            z: 0,
            y: 0.1 + Math.random() * 1.2,
            alto: 3,
            vel: 0.1 + Math.random() * 0.25,
            fase: Math.random() * 6.28,
            pulso: 2.5 + Math.random() * 3,
            tam: 0.05 + Math.random() * 0.06,
            r: col[0],
            g: col[1],
            b: col[2],
            vida: 0.9 + Math.random() * 0.5,
            t0: ahora,
          });
        }
        return chispas.length;
      },
      /* Quita las chispas */
      quitarChispas() {
        chispas = [];
        return 0;
      },
      /* Obliga a la correccion de ejes (Z-up -> Y-up). Se usa para las
         miniaturas: las prendas siempre viven en el espacio del
         personaje, asi que se giran siempre igual. */
      forzarCorreccionZUp() {
        correccionBase = rotacionX(-Math.PI / 2);
        return true;
      },
      /* Encuadra la camara al modelo cargado: calcula el tamaño real
         de la malla y pone la camara a la distancia justa. */
      encuadrarModelo(margen, auto) {
        if (!modelo) return null;
        if (auto) this.detectarEjes();
        const caja = this.medirCaja();
        if (!caja) return null;
        const cx = (caja.minx + caja.maxx) / 2;
        const cy = (caja.miny + caja.maxy) / 2;
        const cz = (caja.minz + caja.maxz) / 2;
        const tam = Math.max(caja.maxx - caja.minx, caja.maxy - caja.miny, caja.maxz - caja.minz) || 1;
        /* La distancia depende del angulo mas estrecho: en vertical el
           lienzo es mas alto que ancho, asi que manda el horizontal. */
        const aspecto = canvas.width / Math.max(1, canvas.height);
        const fovV = 0.45;
        const fovH = Math.atan(Math.tan(fovV) * aspecto);
        const fov = Math.min(fovV, fovH);
        centroCam = [cx, cy, cz];
        zoom = Math.max(1.2, (tam / 2 / Math.tan(fov)) * (margen || 1.5));
        /* la sombra va en el suelo, justo bajo los pies */
        sombraPos = [cx, caja.miny + 0.004, cz];
        sombraRadio = Math.max(0.2, (caja.maxx - caja.minx) * 0.42);
        return { centro: centroCam, tam: tam, zoom: zoom, caja: caja };
      },
      /* Mide la caja que ocupa el modelo en el mundo (ya corregido) */
      medirCaja() {
        if (!modelo) return null;
        const mundoNodos = [];
        function recorrer(indice, padre) {
          const n = modelo.nodos[indice];
          if (!n) return;
          const local = n.matriz ? n.matriz : deTRS(n.t, n.r, n.s);
          const mundo = multiplicar(padre, local);
          mundoNodos.push({ n: n, mundo: mundo });
          n.hijos.forEach((h) => recorrer(h, mundo));
        }
        /* la correccion se aplica una sola vez, en la raiz */
        modelo.escena.forEach((i) => recorrer(i, correccionActual()));

        let minx = 1e9, miny = 1e9, minz = 1e9, maxx = -1e9, maxy = -1e9, maxz = -1e9;
        let alguno = false;
        mundoNodos.forEach((item) => {
          const n = item.n;
          if (n.malla < 0) return;
          const malla = modelo.mallas[n.malla];
          if (!malla) return;
          malla.primitivas.forEach((prim) => {
            if (!prim.pos || !prim.pos.datos || !prim.pos.datos.length) return;
            /* se transforman las 8 esquinas de la caja local */
            let lx0 = 1e9, ly0 = 1e9, lz0 = 1e9, lx1 = -1e9, ly1 = -1e9, lz1 = -1e9;
            const d = prim.pos.datos;
            for (let i = 0; i < d.length; i += 3) {
              if (d[i] < lx0) lx0 = d[i];
              if (d[i] > lx1) lx1 = d[i];
              if (d[i + 1] < ly0) ly0 = d[i + 1];
              if (d[i + 1] > ly1) ly1 = d[i + 1];
              if (d[i + 2] < lz0) lz0 = d[i + 2];
              if (d[i + 2] > lz1) lz1 = d[i + 2];
            }
            for (let c = 0; c < 8; c++) {
              const px = c & 1 ? lx1 : lx0;
              const py = c & 2 ? ly1 : ly0;
              const pz = c & 4 ? lz1 : lz0;
              const wx = item.mundo[0] * px + item.mundo[4] * py + item.mundo[8] * pz + item.mundo[12];
              const wy = item.mundo[1] * px + item.mundo[5] * py + item.mundo[9] * pz + item.mundo[13];
              const wz = item.mundo[2] * px + item.mundo[6] * py + item.mundo[10] * pz + item.mundo[14];
              if (wx < minx) minx = wx;
              if (wx > maxx) maxx = wx;
              if (wy < miny) miny = wy;
              if (wy > maxy) maxy = wy;
              if (wz < minz) minz = wz;
              if (wz > maxz) maxz = wz;
            }
            alguno = true;
          });
        });
        if (!alguno) return null;
        return { minx: minx, miny: miny, minz: minz, maxx: maxx, maxy: maxy, maxz: maxz };
      },
      /* Detecta si el modelo viene en Z-up (personaje tumbado) y lo
         pone boca arriba si hace falta. */
      detectarEjes() {
        if (!modelo) return null;
        /* se mide sin correccion previa */
        const antes = correccionBase;
        correccionBase = ident();
        const caja = this.medirCaja();
        if (!caja) { correccionBase = antes; return null; }
        const dx = caja.maxx - caja.minx;
        const dy = caja.maxy - caja.miny;
        const dz = caja.maxz - caja.minz;
        let aplicado = "ninguno";
        if (dz > dy * 1.25 && dz > dx) {
          /* el modelo esta tumbado: se gira 90 grados sobre X */
          correccionBase = rotacionX(-Math.PI / 2);
          aplicado = "z-up";
        }
        return { aplicado: aplicado, dx: dx, dy: dy, dz: dz };
      },
      /* Cambia el color de piel del modelo cargado. Se detectan los
         materiales de piel (y nariz, orejas y mejillas) y se tiñen.
         Si el tono es null, se vuelve al color original del archivo. */
      tintePiel(hex) {
        if (!modelo) return false;
        if (!modelo._gruposPiel) {
          try {
            modelo._gruposPiel = window.AV_GLTF.gruposPiel(modelo);
          } catch (e) {
            return false;
          }
        }
        const g = modelo._gruposPiel;
        const C = window.AV_GLTF.color;
        if (!g || !g.piel.length) return false;
        if (!hex) {
          /* volver al color que traia el archivo */
          Object.keys(g.originales).forEach((k) => {
            const orig = g.originales[k];
            if (modelo.materiales[k]) modelo.materiales[k].color = orig.slice();
          });
          return true;
        }
        g.piel.forEach((i) => {
          if (modelo.materiales[i]) modelo.materiales[i].color = C.aRGB(hex);
        });
        g.nariz.forEach((i) => {
          if (modelo.materiales[i]) modelo.materiales[i].color = C.aRGB(C.oscurecer(hex, 0.16));
        });
        g.oreja.forEach((i) => {
          if (modelo.materiales[i]) modelo.materiales[i].color = C.aRGB(C.mezclar(hex, "#d98a72", 0.4));
        });
        g.mejilla.forEach((i) => {
          if (modelo.materiales[i]) modelo.materiales[i].color = C.aRGB(C.mezclar(hex, "#ff8fa8", 0.5));
        });
        return true;
      },
      /* Devuelve el tono de piel que lleva ahora el modelo */
      tonoPiel() {
        if (!modelo) return null;
        if (!modelo._gruposPiel) {
          try {
            modelo._gruposPiel = window.AV_GLTF.gruposPiel(modelo);
          } catch (e) {
            return null;
          }
        }
        const g = modelo._gruposPiel;
        if (!g || !g.piel.length) return null;
        const c = modelo.materiales[g.piel[0]].color;
        return window.AV_GLTF.color.aHex(c);
      },
      /* Gira el modelo sobre si mismo (en grados) */
      girarModelo(grados) {
        giroExtra = (grados * Math.PI) / 180;
        return giroExtra;
      },
      /* Enfoca la camara en un punto (para las mascotas, mas baixas) */
      enfocar(centro, distancia) {
        if (centro) centroCam = centro;
        if (distancia) zoom = distancia;
      },
      /* Dibuja un fotograma y lee los píxeles: sirve para comprobar
         que el modelo se está pintando de verdad. */
      capturar(opciones) {
        opciones = opciones || {};
        if (opciones.sinProfundidad) gl.disable(gl.DEPTH_TEST);
        dibujarFrame();
        gl.useProgram(prog);
        if (opciones.sinProfundidad) gl.enable(gl.DEPTH_TEST);
        const w = canvas.width, h = canvas.height;
        const px = new Uint8Array(w * h * 4);
        gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
        let pintados = 0;
        const colores = {};
        for (let i = 0; i < px.length; i += 4) {
          if (px[i + 3] > 10) {
            pintados++;
            const c = px[i] + "," + px[i + 1] + "," + px[i + 2];
            colores[c] = (colores[c] || 0) + 1;
          }
        }
        const principales = Object.keys(colores)
          .sort((a, b) => colores[b] - colores[a])
          .slice(0, 6)
          .map((k) => k + " x" + colores[k]);
        return { pintados: pintados, total: w * h, principales: principales, error: gl.getError() };
      },
      colorHex: colorHex,
      /* Diagnóstico del modelo glTF: dice si se pudo preparar el
         programa, cuántas mallas hay y si llegó a dibujarse. */
      depurarModelo() {
        const info = {
          hayModelo: !!modelo,
          programa: !!progM,
          error: ultimoError,
          correccion: Array.from(correccionBase),
          giroExtra: giroExtra,
          nodos: 0,
          primitivas: 0,
          triangulos: 0,
          posicion: null,
        };
        if (!modelo) return info;
        info.nodos = modelo.nodos.length;
        info.mallas = modelo.mallas.length;
        let n = 0;
        modelo.mallas.forEach((m) => {
          m.primitivas.forEach((p) => {
            n++;
            info.triangulos += p.indices ? p.indices.count / 3 : p.pos.count / 3;
          });
        });
        info.primitivas = n;
        if (modelo.mallas[0] && modelo.mallas[0].primitivas[0]) {
          const p = modelo.mallas[0].primitivas[0].pos;
          if (p && p.datos && p.datos.length) {
            let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9, minz = 1e9, maxz = -1e9;
            for (let i = 0; i < p.datos.length; i += 3) {
              minx = Math.min(minx, p.datos[i]); maxx = Math.max(maxx, p.datos[i]);
              miny = Math.min(miny, p.datos[i + 1]); maxy = Math.max(maxy, p.datos[i + 1]);
              minz = Math.min(minz, p.datos[i + 2]); maxz = Math.max(maxz, p.datos[i + 2]);
            }
            info.posicion = [minx, miny, minz, maxx, maxy, maxz];
          }
        }
        return info;
      },
      /* Diagnóstico: comprueba atributos, búferes y una prueba de dibujo */
      depurar() {
        const p = piezas[0];
        let datos = null;
        if (p) {
          const m = malla(p.tipo, p.medidas || [1, 1, 1], p.color || "#ffffff");
          datos = {
            nVertices: m.datos.length / 9,
            nIndices: m.indices.length,
            primeros: Array.prototype.slice.call(m.datos.slice(0, 9)).map(function (x) { return Math.round(x * 1000) / 1000; }),
          };
        }
        /* Prueba de lectura: se pinta de rojo y se lee */
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.disable(gl.DEPTH_TEST);
        gl.clearColor(1, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        const test = new Uint8Array(4);
        gl.readPixels(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, test);
        const pruebaLectura = Array.prototype.slice.call(test);
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        /* Centro de la primera pieza proyectado */
        let centro = null;
        if (p) {
          const modelo = componer(p.pos || [0, 0, 0], p.rot || [0, 0, 0], p.esc || [1, 1, 1]);
          const aspecto = canvas.width / Math.max(1, canvas.height);
          const proj = perspectiva(0.9, aspecto, 0.1, 60);
          const ojo = [centroCam[0] + Math.sin(angY) * zoom, centroCam[1] + Math.sin(angX) * zoom, centroCam[2] + Math.cos(angY) * zoom];
          const vista = mirar(ojo, centroCam, [0, 1, 0]);
          const vp = multiplicar(proj, vista);
          const mvp = multiplicar(vp, modelo);
          const x = mvp[12], y = mvp[13], z = mvp[14], w = mvp[15];
          centro = { x: x, y: y, z: z, w: w, ndc: [x / w, y / w, z / w] };
        }

        return {
          atributos: { aPos: aPos, aNorm: aNorm, aColor: aColor },
          uniforms: {
            uMVP: uMVP ? "ok" : "NULO",
            uModelo: uModelo ? "ok" : "NULO",
            uNormal: uNormal ? "ok" : "NULO",
            uLuz: uLuz ? "ok" : "NULO",
            uOjo: uOjo ? "ok" : "NULO",
          },
          programa: !!prog,
          nPiezas: piezas.length,
          primeraPieza: p || null,
          malla: datos,
          pruebaLectura: pruebaLectura,
          centroProyectado: centro,
          canvas: canvas.width + "x" + canvas.height,
          client: canvas.clientWidth + "x" + canvas.clientHeight,
          error: gl.getError(),
        };
      },
    };
  }

  /* ---------------------------------------------------------
     Miniaturas 3D
     Se usa UN solo contexto WebGL para dibujar muchas
     miniaturas y copiarlas a lienzos 2D normales.
     --------------------------------------------------------- */
  let miniCtx = null;
  let miniMotor = null;

  function contextoMini() {
    if (miniCtx) return miniCtx;
    try {
      const c = document.createElement('canvas');
      c.width = 200;
      c.height = 300;
      const gl = c.getContext('webgl', { antialias: true, alpha: true, preserveDrawingBuffer: true });
      if (!gl) return null;
      miniCtx = c;
      miniMotor = crear(c);
      return miniMotor ? c : null;
    } catch (e) {
      return null;
    }
  }

  /* Dibuja un accesorio (o el cuerpo) en un lienzo 2D destino. */
  function miniatura(destino, piezas, camara) {
    const c = contextoMini();
    if (!c || !miniMotor) return false;
    const gl = c.getContext('webgl');
    miniMotor.ponerPiezas(piezas || []);
    if (camara) {
      miniMotor.enfocar(camara.centro || [0, 1, 0], camara.zoom || 2.4);
      miniMotor.girarA(camara.angulo || 0);
    }
    miniMotor.capturar();
    return volcarMini(c, gl, destino);
  }

  /* Vuelca el lienzo del mini (WebGL) en un lienzo 2D */
  function volcarMini(c, gl, destino) {
    const w = c.width, h = c.height;
    const px = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    /* WebGL entrega las filas de abajo arriba: hay que voltearlas */
    const img = new Uint8ClampedArray(w * h * 4);
    const fila = w * 4;
    for (let y = 0; y < h; y++) {
      const origen = (h - 1 - y) * fila;
      img.set(px.subarray(origen, origen + fila), y * fila);
    }
    const ctx2 = destino.getContext('2d');
    ctx2.clearRect(0, 0, destino.width, destino.height);
    ctx2.putImageData(new ImageData(img, w, h), 0, 0);
    return true;
  }

  /* Dibuja la miniatura de un accesorio en 3D (archivo glTF).
     El mini motor es compartido, asi que las peticiones se encadenan
     para que no se pisen entre si. */
  let colaMini = Promise.resolve();

  function miniaturaGLB(destino, url, opciones) {
    opciones = opciones || {};
    colaMini = colaMini.then(async () => {
      const c = contextoMini();
      if (!c || !miniMotor) return false;
      const gl = c.getContext('webgl');
      let gltf = null;
      try {
        gltf = await window.AV_GLTF.cargar(url);
      } catch (e) {
        gltf = null;
      }
      if (!gltf) return false;
      /* el mini dibuja solo este modelo */
      miniMotor.soloEsteModelo(gltf, opciones.ajuste || null);
      /* las prendas siempre vienen en el espacio del personaje (Z
         arriba), asi que se giran siempre igual */
      if (opciones.eje !== "libre") miniMotor.forzarCorreccionZUp();
      else miniMotor.detectarEjes();
      /* la camara se centra en la pieza */
      const enc = miniMotor.encuadrarModelo(opciones.margen || 1.2);
      miniMotor.girarA(opciones.angulo || 0);
      miniMotor.capturar();
      volcarMini(c, gl, destino);
      return true;
    }).catch(() => false);
    return colaMini;
  }

  function soportado() {
    try {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
    } catch (e) {
      return false;
    }
  }

  return { crear: crear, soportado: soportado, miniatura: miniatura, miniaturaGLB: miniaturaGLB, ident: ident, mult: multiplicar, deTRS: deTRS };
})();
