/* =========================================================
   WEB LEER — Mi Aventurero: modelos 3D
   ---------------------------------------------------------
   Cada parte del cuerpo es una pieza 3D de verdad (esfera,
   cápsula, cilindro, caja o toro) con su volumen, su color y
   su sitio. Los accesorios también son objetos 3D que se
   colocan sobre la cabeza, el torso, etc.

   Sistema de coordenadas del personaje:
     · mide 2 unidades de alto (del suelo y=0 a la cabeza y=2)
     · el suelo está en y = 0
     · el centro de la cabeza está en y = 1.62
     · el torso va de y = 0.72 a y = 1.28
     · mira hacia +Z (el niño ve la cara)

   Las piezas se describen así:
     { tipo, pos:[x,y,z], esc:[x,y,z], rot:[x,y,z], color, medidas }
   ========================================================= */

window.AV_MODELO = (function () {
  "use strict";

  const PI = Math.PI;

;

  /* Tonos que se ofrecen en el selector de piel. El tono "modelo"
     es el que trae el archivo 3D del usuario (#f5be91). */
  const TONOS = [
    { id: "porcelana", nombre: "Porcelana", hex: "#ffe7d2" },
    { id: "arena", nombre: "Arena", hex: "#ffd9b3" },
    { id: "modelo", nombre: "Del modelo", hex: "#f5be91" },
    { id: "miel", nombre: "Miel", hex: "#e8b183" },
    { id: "canela", nombre: "Canela", hex: "#d09a6a" },
    { id: "cacao", nombre: "Cacao", hex: "#b87a4c" },
    { id: "ebano", nombre: "Ébano", hex: "#96603a" },
  ];

  /* ---------------------------------------------------------
     Ayudantes de construcción
     --------------------------------------------------------- */
  const P = (tipo, pos, esc, color, extra) => {
    const o = { tipo: tipo, pos: pos, esc: esc, color: color };
    if (extra) Object.keys(extra).forEach((k) => (o[k] = extra[k]));
    return o;
  };

  /* OJO: la malla de ESFERA tiene radio 1, asi que el tamaño final
     sale de `r` (radio) multiplicado por `esc` (proporciones).
     Antes se usaba `esc` como tamaño absoluto y el radio se
     ignoraba: los ojos salian del tamaño de la cabeza. */
  const esfera = (pos, r, color, esc) => {
    const s = esc || [1, 1, 1];
    return P("esf", pos, [r * s[0], r * s[1], r * s[2]], color, { medidas: [1] });
  };
  /* La caja tiene tamaño 1, asi que aqui `s` si es el tamaño real. */
  const caja = (pos, s, color, rot) => P("caja", pos, s, color, { medidas: [1, 1, 1], rot: rot || [0, 0, 0] });
  /* El cilindro tiene radio 1 y alto 1: el radio real sale de r0
     y `medidas[1]` es la proporción de la parte de arriba. */
  const cil = (pos, r0, r1, alto, color, rot) =>
    P("cil", pos, [r0, r0, alto], color, { medidas: [1, r0 ? r1 / r0 : 1], rot: rot || [0, 0, 0] });
  /* El toro tiene radio mayor 1: el tamaño real sale de R y el
     grosor de la ratio. */
  /* Igual que lathe, pero la pieza ya nace colocada. */
  const latheEn = (pos, perfil, color, esc, rot) => {
    const p = lathe(perfil, color, esc, rot);
    p.pos = pos;
    return p;
  };
  /* Superficie de revolucion: perfil = [[y, radio], ...].
     Sirve para esculpir la cabeza, el torso y las extremidades. */
  const lathe = (perfil, color, esc, rot) =>
    P("lathe", [0, 0, 0], esc || [1, 1, 1], color, {
      medidas: [perfil.map((p) => p[0] + ":" + p[1]).join(",")],
      rot: rot || [0, 0, 0],
    });
  /* Cono: radio `r` en la base, punta arriba, alto `alto`. */
  const cono = (pos, r, alto, color, rot) =>
    P("cono", pos, [r, r, alto], color, { medidas: [1], rot: rot || [0, 0, 0] });
  const toro = (pos, R, r, color, rot) =>
    P("tor", pos, [R, R, R], color, { medidas: [1, R ? r / R : 1], rot: rot || [0, 0, 0] });

  /* ---------------------------------------------------------
     CUERPO BASE
     Proporciones "chibi" de muñeco: cabeza grande y redonda,
     cuerpo pequeñito y blando, brazos y piernas que se leen
     bien por separado.

     Altura total ≈ 1,92 (del suelo y=0 a la cabeza y=1,92)
     --------------------------------------------------------- */

  /* ---------------------------------------------------------
     CARA: ojos grandes con brillo, cejas, rubor y sonrisa.
     Todo con volumen (esferas achatadas y un toro).
     --------------------------------------------------------- */

  /* ---------------------------------------------------------
     ACCESORIOS EN 3D
     Cada accesorio se construye con piezas que se reconozcan:
     casquetes (esferas achaparradas), aros (toros), conos
     (puntas), barras (cilindros) y cajas redondeadas
     (esferas estiradas).

     Referencias del cuerpo:
       cabeza  centro (0,1.62,0) radio 0.30
       torso   centro (0,1.02,0) semiejes 0.255 / 0.26 / 0.184
       cuello  (0,1.33,0)
       caderas  (0,0.79,0)
       piernas  x = ±0.185
       brazos   x = ±0.33
     --------------------------------------------------------- */;


  /* ---------------------------------------------------------
     MONTAJE: cuerpo + cara + accesorios equipados
     --------------------------------------------------------- */

  /* Solo las prendas (sin el cuerpo): se usan cuando el personaje es
     el modelo 3D del usuario y el cuerpo ya lo pone su archivo. */

  /* ---------------------------------------------------------
     MASCOTAS EN 3D
     Cada especie y etapa tiene su propio modelito.
     Los nombres coinciden con lo que se ve.
     --------------------------------------------------------- */
  const MASCOTAS_3D = {
    /* --- DRAGÓN: huevo, cría, dragón joven, dragón alto --- */
    dragon: [
      /* 0: huevo */
      () => [
        esfera([0, 0.32, 0], 0.3, "#fff4d6", [0.85, 1.15, 0.85]),
        esfera([0, 0.5, 0], 0.12, "#ffffff", [1, 0.6, 1]),
      ],
      /* 1: cría */
      () => [
        esfera([0, 0.34, 0], 0.26, "#8fe3a8", [1, 1.05, 0.9]),
        esfera([0, 0.62, 0.06], 0.2, "#8fe3a8"),
        esfera([-0.1, 0.76, 0], 0.05, "#3fa34d", [0.5, 1.1, 0.5]),
        esfera([0.1, 0.76, 0], 0.05, "#3fa34d", [0.5, 1.1, 0.5]),
        esfera([0, 0.58, 0.22], 0.06, "#ffe08a"),
        cil([0, 0.66, -0.1], 0.03, 0.01, 0.22, "#3fa34d", [-0.5, 0, 0]),
      ],
      /* 2: dragón */
      () => [
        esfera([0, 0.4, 0], 0.3, "#3fa34d", [1, 1.15, 0.9]),
        esfera([0, 0.74, 0.08], 0.24, "#3fa34d"),
        esfera([-0.12, 0.9, 0], 0.055, "#3fa34d", [0.45, 1.2, 0.45]),
        esfera([0.12, 0.9, 0], 0.055, "#3fa34d", [0.45, 1.2, 0.45]),
        esfera([0, 0.7, 0.26], 0.07, "#ffe08a"),
        cil([0, 0.85, -0.12], 0.035, 0.01, 0.3, "#2f8040", [-0.6, 0, 0]),
        cil([0, 0.62, -0.2], 0.05, 0.03, 0.5, "#2f8040", [0.7, 0, 0]),
      ],
      /* 3: dragón alto (con alas) */
      () => [
        esfera([0, 0.45, 0], 0.34, "#2f8040", [1, 1.2, 0.9]),
        esfera([0, 0.84, 0.08], 0.27, "#2f8040"),
        esfera([-0.14, 1.02, 0], 0.06, "#2f8040", [0.45, 1.25, 0.45]),
        esfera([0.14, 1.02, 0], 0.06, "#2f8040", [0.45, 1.25, 0.45]),
        esfera([0, 0.8, 0.29], 0.075, "#ffd166"),
        cil([0, 0.98, -0.14], 0.04, 0.01, 0.36, "#1f5c2a", [-0.6, 0, 0]),
        esfera([-0.36, 0.82, -0.12], 0.24, "#8fe3a8", [1.2, 0.3, 0.6]),
        esfera([0.36, 0.82, -0.12], 0.24, "#8fe3a8", [1.2, 0.3, 0.6]),
        cil([0, 0.66, -0.24], 0.055, 0.035, 0.6, "#1f5c2a", [0.7, 0, 0]),
      ],
    ],
    /* --- GATO: huevo, gatito, gato, gato real --- */
    gato: [
      () => [
        esfera([0, 0.32, 0], 0.3, "#fff4d6", [0.85, 1.15, 0.85]),
        esfera([0, 0.5, 0], 0.12, "#ffffff", [1, 0.6, 1]),
      ],
      () => [
        esfera([0, 0.32, 0], 0.25, "#f6c177", [1, 1, 0.92]),
        esfera([0, 0.58, 0.05], 0.19, "#f6c177"),
        esfera([-0.1, 0.72, -0.01], 0.05, "#f6c177", [0.5, 1, 0.5]),
        esfera([0.1, 0.72, -0.01], 0.05, "#f6c177", [0.5, 1, 0.5]),
        esfera([-0.07, 0.6, 0.19], 0.028, "#2d3142"),
        esfera([0.07, 0.6, 0.19], 0.028, "#2d3142"),
        esfera([0, 0.55, 0.22], 0.028, "#e08b9a"),
      ],
      () => [
        esfera([0, 0.36, 0], 0.28, "#f2994a", [1, 1.05, 0.9]),
        esfera([0, 0.66, 0.06], 0.21, "#f2994a"),
        esfera([-0.11, 0.8, -0.01], 0.055, "#f2994a", [0.5, 1, 0.5]),
        esfera([0.11, 0.8, -0.01], 0.055, "#f2994a", [0.5, 1, 0.5]),
        esfera([-0.08, 0.68, 0.21], 0.032, "#2d3142"),
        esfera([0.08, 0.68, 0.21], 0.032, "#2d3142"),
        esfera([0, 0.62, 0.24], 0.03, "#e08b9a"),
        cil([0, 0.4, -0.22], 0.05, 0.02, 0.5, "#e08b2e", [0.8, 0, 0]),
      ],
      () => [
        esfera([0, 0.42, 0], 0.33, "#e08b2e", [1, 1.1, 0.9]),
        esfera([0, 0.78, 0.06], 0.25, "#e08b2e"),
        esfera([-0.13, 0.94, -0.01], 0.06, "#e08b2e", [0.5, 1, 0.5]),
        esfera([0.13, 0.94, -0.01], 0.06, "#e08b2e", [0.5, 1, 0.5]),
        esfera([-0.09, 0.8, 0.23], 0.035, "#2d3142"),
        esfera([0.09, 0.8, 0.23], 0.035, "#2d3142"),
        esfera([0, 0.73, 0.26], 0.032, "#e08b9a"),
        cil([0, 0.46, -0.26], 0.06, 0.02, 0.6, "#c9761f", [0.85, 0, 0]),
      ],
    ],
    /* --- DINOSAURIO: huevo, cría, dino, dino grande --- */
    dino: [
      () => [
        esfera([0, 0.32, 0], 0.3, "#fff4d6", [0.85, 1.15, 0.85]),
        esfera([0, 0.5, 0], 0.12, "#ffffff", [1, 0.6, 1]),
      ],
      () => [
        esfera([0, 0.3, 0], 0.26, "#8fd3f4", [1, 1, 0.9]),
        esfera([0, 0.56, 0.05], 0.18, "#8fd3f4", [1, 0.9, 1.1]),
        esfera([-0.09, 0.7, 0.02], 0.05, "#8fd3f4", [0.5, 1, 0.5]),
        esfera([0.09, 0.7, 0.02], 0.05, "#8fd3f4", [0.5, 1, 0.5]),
        esfera([0, 0.54, 0.22], 0.05, "#2d3142"),
        cil([0, 0.6, -0.1], 0.025, 0.01, 0.2, "#2f80ed", [-0.5, 0, 0]),
      ],
      () => [
        esfera([0, 0.34, 0], 0.3, "#2f80ed", [1, 1.05, 0.95]),
        esfera([0, 0.64, 0.1], 0.2, "#2f80ed", [1, 0.95, 1.2]),
        esfera([-0.1, 0.78, 0.08], 0.05, "#2f80ed", [0.5, 1, 0.5]),
        esfera([0.1, 0.78, 0.08], 0.05, "#2f80ed", [0.5, 1, 0.5]),
        esfera([0, 0.62, 0.28], 0.045, "#2d3142"),
        cil([0, 0.34, -0.24], 0.055, 0.02, 0.5, "#1f5fae", [0.85, 0, 0]),
      ],
      () => [
        esfera([0, 0.4, 0], 0.36, "#1f5fae", [1, 1.1, 0.95]),
        esfera([0, 0.76, 0.12], 0.24, "#1f5fae", [1, 0.95, 1.25]),
        esfera([-0.12, 0.92, 0.1], 0.055, "#1f5fae", [0.5, 1, 0.5]),
        esfera([0.12, 0.92, 0.1], 0.055, "#1f5fae", [0.5, 1, 0.5]),
        esfera([0, 0.74, 0.33], 0.05, "#2d3142"),
        cil([0, 0.42, -0.28], 0.07, 0.02, 0.66, "#1a4a8c", [0.9, 0, 0]),
        esfera([0, 0.98, -0.1], 0.05, "#ffd166"),
      ],
    ],
    /* --- BÚHO: huevo, pollito, búho, búho real --- */
    buho: [
      () => [
        esfera([0, 0.32, 0], 0.3, "#fff4d6", [0.85, 1.15, 0.85]),
        esfera([0, 0.5, 0], 0.12, "#ffffff", [1, 0.6, 1]),
      ],
      () => [
        esfera([0, 0.3, 0], 0.25, "#f2d16b", [1, 1, 0.92]),
        esfera([0, 0.56, 0.05], 0.19, "#f2d16b"),
        esfera([-0.08, 0.68, 0], 0.05, "#f2d16b", [0.5, 1, 0.5]),
        esfera([0.08, 0.68, 0], 0.05, "#f2d16b", [0.5, 1, 0.5]),
        esfera([-0.06, 0.58, 0.19], 0.028, "#2d3142"),
        esfera([0.06, 0.58, 0.19], 0.028, "#2d3142"),
        cil([0, 0.34, 0.05], 0.02, 0.01, 0.08, "#e08b2e", [0.4, 0, 0]),
      ],
      () => [
        esfera([0, 0.34, 0], 0.3, "#bb6bd9", [1, 1.05, 0.92]),
        esfera([0, 0.64, 0.08], 0.23, "#bb6bd9"),
        esfera([-0.1, 0.8, 0], 0.06, "#bb6bd9", [0.5, 1, 0.5]),
        esfera([0.1, 0.8, 0], 0.06, "#bb6bd9", [0.5, 1, 0.5]),
        esfera([-0.08, 0.66, 0.22], 0.05, "#ffffff"),
        esfera([0.08, 0.66, 0.22], 0.05, "#ffffff"),
        esfera([-0.08, 0.66, 0.25], 0.024, "#2d3142"),
        esfera([0.08, 0.66, 0.25], 0.024, "#2d3142"),
        cil([0, 0.36, 0.12], 0.025, 0.012, 0.1, "#e08b2e", [0.5, 0, 0]),
        esfera([-0.3, 0.36, -0.02], 0.14, "#bb6bd9", [0.4, 1, 0.8]),
        esfera([0.3, 0.36, -0.02], 0.14, "#bb6bd9", [0.4, 1, 0.8]),
      ],
      () => [
        esfera([0, 0.4, 0], 0.34, "#9b51e0", [1, 1.1, 0.92]),
        esfera([0, 0.74, 0.08], 0.26, "#9b51e0"),
        esfera([-0.12, 0.92, 0], 0.065, "#9b51e0", [0.5, 1, 0.5]),
        esfera([0.12, 0.92, 0], 0.065, "#9b51e0", [0.5, 1, 0.5]),
        esfera([-0.09, 0.76, 0.25], 0.055, "#ffffff"),
        esfera([0.09, 0.76, 0.25], 0.055, "#ffffff"),
        esfera([-0.09, 0.76, 0.28], 0.026, "#2d3142"),
        esfera([0.09, 0.76, 0.28], 0.026, "#2d3142"),
        cil([0, 0.42, 0.14], 0.03, 0.015, 0.12, "#ffd166", [0.5, 0, 0]),
        esfera([-0.34, 0.42, -0.02], 0.17, "#9b51e0", [0.4, 1, 0.85]),
        esfera([0.34, 0.42, -0.02], 0.17, "#9b51e0", [0.4, 1, 0.85]),
        esfera([0, 1.02, -0.02], 0.05, "#ffd166"),
      ],
    ],
  };

  /* Monta la mascota en 3D */
  function montarMascota(especie, etapa) {
    const serie = MASCOTAS_3D[especie];
    if (!serie) return [];
    const fab = serie[Math.min(etapa, serie.length - 1)];
    return fab ? fab() : [];
  }

  /* =========================================================
     ACCESORIOS 3D
     ---------------------------------------------------------
     Las prendas del armario son archivos propios (.glb) en la
     carpeta "accesorios3d". Vienen ya colocados en el mismo
     espacio que el personaje del usuario, asi que solo hay que
     superponerlos: de eso se encarga el motor 3D.
     ========================================================= */

  return {
    TONOS,
    MASCOTAS_3D,
    montarMascota,
  };
})();
