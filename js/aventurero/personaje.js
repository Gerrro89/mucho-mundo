/* =========================================================
   WEB LEER — Mi Aventurero: el personaje
   ---------------------------------------------------------
   El personaje es el MODELO 3D DEL USUARIO (archivo .glb o
   .gltf en la carpeta "modelo"). Este modulo solo monta el
   lienzo 3D, lo encuadra, le cambia el color de piel y le
   coloca encima las prendas del armario.

   Las prendas son piezas 3D con volumen real (esferas, cajas,
   cilindros, conos, toros y superficies de revolucion), en el
   mismo espacio de coordenadas del muneco de referencia, y se
   ajustan a las proporciones del modelo del usuario.

   AV_PERSONAJE.mini(cats)    -> miniatura para el armario
   AV_PERSONAJE.montar3d()    -> monta el personaje 3D
   AV_PERSONAJE.liberar3d()   -> libera el motor al salir
   ========================================================= */

window.AV_PERSONAJE = (function () {
  "use strict";

  const VIEWBOX = "0 0 200 300";

  /* Cada dibujo usa identificadores de degradado únicos para que
     puedan coexistir varios personajes en la misma página. */
  let contador = 0;
  function idUnico() {
    contador += 1;
    return "av" + contador;
  }

  /* ---------------------------------------------------------
     Degradados de la base (volumen, luz de contorno y sombras)
     --------------------------------------------------------- */

  /* ---------------------------------------------------------
     Base: cuerpo, cara y extremidades con volumen.
     Es siempre la capa más baja.
     --------------------------------------------------------- */

  /* ---------------------------------------------------------
     VOLUMEN AUTOMÁTICO
     Los accesorios vienen con colores planos. Aquí se
     convierten en degradados (luz arriba-izquierda, sombra
     abajo-derecha) para que parezcan objetos de relieve.
     Se hace solo, así que añadir un accesorio nuevo no
     requiere dibujarlo a mano.
     --------------------------------------------------------- */
  function hexRgb(hex) {
    const h = hex.replace("#", "");
    return {
      r: parseInt(h.substring(0, 2), 16),
      g: parseInt(h.substring(2, 4), 16),
      b: parseInt(h.substring(4, 6), 16),
    };
  }
  function rgbHex(r, g, b) {
    const p = (n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
    return "#" + p(r) + p(g) + p(b);
  }
  function aclarar(hex, cant) {
    const c = hexRgb(hex);
    return rgbHex(c.r + (255 - c.r) * cant, c.g + (255 - c.g) * cant, c.b + (255 - c.b) * cant);
  }
  function oscurecer(hex, cant) {
    const c = hexRgb(hex);
    return rgbHex(c.r * (1 - cant), c.g * (1 - cant), c.b * (1 - cant));
  }

  /* Convierte los rellenos planos de un SVG en degradados.
     Devuelve { defs, svg }. Los negro puros y los blancos
     se dejan planos (son sombras y brillos). */
  function darVolumen(svg, u) {
    const vistos = [];
    const re = /fill="#([0-9a-fA-F]{6})"/g;
    let m;
    while ((m = re.exec(svg))) {
      const hex = "#" + m[1].toLowerCase();
      if (hex === "#000000" || hex === "#ffffff") continue;
      if (vistos.indexOf(hex) === -1) vistos.push(hex);
    }
    if (!vistos.length) return { defs: "", svg: svg };

    let defs = "<defs>";
    const mapa = {};
    vistos.forEach((hex, i) => {
      const id = u + "-v" + i;
      defs +=
        '<linearGradient id="' + id + '" x1="0.18" y1="0" x2="0.82" y2="1">' +
        '<stop offset="0%" stop-color="' + aclarar(hex, 0.34) + '"/>' +
        '<stop offset="42%" stop-color="' + hex + '"/>' +
        '<stop offset="100%" stop-color="' + oscurecer(hex, 0.3) + '"/>' +
        "</linearGradient>";
      mapa[hex] = "url(#" + id + ")";
    });
    defs += "</defs>";

    let salida = svg;
    const re2 = /fill="#([0-9a-fA-F]{6})"/g;
    salida = salida.replace(re2, function (todo, h) {
      const hex = "#" + h.toLowerCase();
      return mapa[hex] ? 'fill="' + mapa[hex] + '"' : todo;
    });
    return { defs: defs, svg: salida };
  }

  /* ---------------------------------------------------------
     Capas ordenadas (de atrás hacia delante) para la escena 3D
     --------------------------------------------------------- */

  /* ---------------------------------------------------------
     SVG plano con las capas (para miniaturas y lugares sencillos)
     --------------------------------------------------------- */

  /* ---------------------------------------------------------
     Miniatura para la cuadrícula del armario: la silueta
     base en gris claro + el accesorio en color, para que se
     vea la pieza EN SU CONTEXTO y no flotando.
     --------------------------------------------------------- */
  function silueta() {
    /* Maniqui neutro: solo un soporte para que se vea la pieza
       de ropa en su sitio. No es ningun modelo concreto. */
    return (
      '<ellipse cx="100" cy="281" rx="42" ry="9" fill="#dbe9f2"/>' +
      '<rect x="84" y="156" width="16" height="112" rx="8" fill="#dbe9f2"/>' +
      '<rect x="100" y="156" width="16" height="112" rx="8" fill="#dbe9f2"/>' +
      '<ellipse cx="92" cy="270" rx="13" ry="7" fill="#dbe9f2"/>' +
      '<ellipse cx="108" cy="270" rx="13" ry="7" fill="#dbe9f2"/>' +
      '<rect x="56" y="80" width="18" height="78" rx="9" fill="#dbe9f2"/>' +
      '<rect x="126" y="80" width="18" height="78" rx="9" fill="#dbe9f2"/>' +
      '<circle cx="65" cy="160" r="8" fill="#dbe9f2"/>' +
      '<circle cx="135" cy="160" r="8" fill="#dbe9f2"/>' +
      '<rect x="78" y="76" width="44" height="84" rx="14" fill="#dbe9f2"/>' +
      '<circle cx="100" cy="54" r="21" fill="#dbe9f2"/>'
    );
  }

  function mini(accesorio) {
    let extra = "";
    let defs = "";
    if (accesorio) {
      const v = darVolumen(accesorio.svg, idUnico());
      defs = v.defs;
      extra = v.svg;
    }
    return (
      '<svg viewBox="' + VIEWBOX + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      defs +
      silueta() +
      extra +
      "</svg>"
    );
  }

  /* ---------------------------------------------------------
     ESCENA 3D REAL (WebGL)
     Cada parte del cuerpo y cada accesorio son volúmenes de
     verdad: esferas, cápsulas, cilindros, cajas y toros, con
     luz difusa y contorno suave. Se puede girar arrastrando.
     El personaje es el modelo 3D del usuario; si el dispositivo
     no tiene WebGL, se avisa con un mensaje.
     --------------------------------------------------------- */
  function montar3d(equipado, contenedor, opciones) {
    opciones = opciones || {};
    if (!contenedor) return null;
    contenedor.innerHTML = "";

    /* --- ¿Está el modelo del usuario? --- */
    const url = opciones.modeloUrl;
    if (!url) {
      const aviso = document.createElement("div");
      aviso.className = "aviso-sin-3d";
      aviso.innerHTML =
        "🧊 <strong>Falta tu modelo 3D</strong>" +
        "Pon tu archivo en la carpeta <em>modelo</em> con el nombre " +
        "<em>aventurero.glb</em> y recarga la página.";
      contenedor.appendChild(aviso);
      return { modo: "sin-modelo", aviso: aviso };
    }

    /* --- ¿Hay WebGL? --- */
    if (window.AV_MOTOR3D && window.AV_MOTOR3D.soportado()) {
      const lienzo = document.createElement("canvas");
      lienzo.className = "av-lienzo3d";
      lienzo.setAttribute("role", "img");
      lienzo.setAttribute("aria-label", opciones.alt || "Mi aventurero en 3D");
      contenedor.appendChild(lienzo);

      const motor = window.AV_MOTOR3D.crear(lienzo);
      if (motor) {
        contenedor._motor3d = motor;
        motor.iniciar();
        /* El modelo 3D del usuario es el personaje */
        motor.cargarModelo(url).then((g) => {
            if (!g) {
              contenedor._errorModelo = true;
              return;
            }
            /* Los accesorios son archivos 3D propios, en el mismo
               espacio que el personaje: solo hay que superponerlos. */
            const ids = Object.keys(equipado || {});
            const promesas = ids.map((cat) => {
              const id = equipado[cat];
              const ruta = window.AV_ACCESORIOS.url3D(id);
              if (!ruta) return Promise.resolve(null);
              return window.AV_GLTF.cargar(ruta)
                .then((acc) => {
                  if (acc) {
                    /* ORDEN IMPORTANTE: primero aplicar la calibracion de
                       escala/posicion a la geometria, despues subdividir y
                       moldear. Escalar al final despegaba la ropa del cuerpo
                       y volvia a provocar intersecciones en hombros y cadera. */
                    const ajuste = window.AV_ACCESORIOS.ajuste3D(id);
                    if (ajuste && window.AV_GLTF.ajustarGeometria) {
                      window.AV_GLTF.ajustarGeometria(acc, ajuste);
                    }
                    if (!window.AV_SIN_MOLDE) {
                      if (window.AV_GLTF.subdividir) window.AV_GLTF.subdividir(acc);
                      const opMolde = window.AV_ACCESORIOS.moldearDe(id);
                      if (opMolde && window.AV_GLTF.moldear) window.AV_GLTF.moldear(acc, opMolde);
                      /* Hombros: donde la manga corta deja el deltoides
                         al aire, un redondeo extra cierra la tela por
                         encima del hombro (prenda a prenda). */
                      if (opMolde && opMolde.capazo && window.AV_GLTF.capazo) {
                        window.AV_GLTF.capazo(acc, opMolde.capazo);
                      }
                      /* Mangas largas: se construyen midiendo el brazo
                         del propio cuerpo (g), ya con la prenda
                         ajustada y moldeada. */
                      if (opMolde && opMolde.mangas && window.AV_GLTF.mangas) {
                        window.AV_GLTF.mangas(acc, opMolde.mangas, g);
                      }
                      /* Detalles (cremalleras, cintas, suelas): un poco
                         por encima de la tela, porque el moldeado los
                         aplana contra ella y se hunden (parpadean). */
                      if (window.AV_GLTF.relieve) {
                        window.AV_GLTF.relieve(
                          acc,
                          opMolde && opMolde.relieve !== undefined ? opMolde.relieve : 0.015,
                          opMolde ? opMolde.zonas : null
                        );
                      }
                    }
                    /* Ya esta ajustada y moldeada: no volver a escalar al dibujar. */
                    motor.anadirModelo(acc, null, id);
                    /* y el color que haya elegido el niño */
                    const col = window.AV_ACCESORIOS.colorDe(id, opciones.colores);
                    if (col) motor.colorAccesorio(acc, col);
                  }
                  return acc;
                })
                .catch(() => null);
            });
            Promise.all(promesas).then(() => {
              try {
                /* Detecta si el modelo viene tumbado (Z-up) y lo pone
                   boca arriba; luego la camara se ajusta a su tamano. */
                const ejes = motor.detectarEjes();
                if (ejes) contenedor._ejesModelo = ejes;
                motor.encuadrarModelo(1.02);
                /* El tono de piel elegido por el niño (null = el del
                   archivo, que se restaura por si estaba teñido) */
                motor.tintePiel(opciones.piel || null);
                /* chispas flotando alrededor: dan vida a la escena */
                if (motor.ponChispas) {
                  const puestas = Object.keys(equipado || {}).length;
                  motor.ponChispas(puestas ? 8 + puestas * 2 : 0, 0.55, 1.5);
                }
                motor.iniciar();
              } catch (e) {
                /* se ha cambiado de pantalla mientras cargaba */
              }
            });
          });
        return { modo: "webgl", lienzo: lienzo, motor: motor };
      }
      /* Si el motor falla, se quita el lienzo */
      contenedor.innerHTML = "";
    }

    /* --- Sin WebGL no se puede ver el modelo 3D --- */
    const aviso = document.createElement("div");
    aviso.className = "aviso-sin-3d";
    aviso.innerHTML =
      "🧊 <strong>Tu personaje necesita 3D</strong>" +
      "Abre la web en un navegador con WebGL (Chrome, Firefox, Edge o Safari actualizado) para verlo.";
    contenedor.appendChild(aviso);
    return { modo: "sin-3d", aviso: aviso };
  }

  /* Libera el motor 3D (al salir de la pantalla) */
  function liberar3d(contenedor) {
    if (!contenedor) return;
    if (contenedor._motor3d) {
      contenedor._motor3d.detener();
      contenedor._motor3d = null;
    }
  }

  /* ---------------------------------------------------------
     Icono pequeño de categoría (para los botones de pestañas)
     --------------------------------------------------------- */
  function icono(categoria) {
    const c = window.AV_ACCESORIOS.categoria(categoria);
    return c ? c.icono : "⭐";
  }

  return {
    VIEWBOX: VIEWBOX,
    silueta: silueta,
    mini: mini,
    montar3d: montar3d,
    liberar3d: liberar3d,
    icono: icono,
  };
})();
