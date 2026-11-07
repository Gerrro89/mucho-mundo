/* =========================================================
   WEB LEER — Aplicación principal
   Pantallas, rutas de aprendizaje, menús y arranque.
   ========================================================= */

(function () {
  "use strict";

  const C = CORE;
  const $ = C.$;
  const $$ = C.$$;
  const el = C.el;
  const rand = C.rand;
  const shuffle = C.shuffle;

  const D = window.DATA;

  /* =========================================================
     Rutas de aprendizaje (lecciones por nivel)
     ========================================================= */
  function poolObjetosPorLetras(letras) {
    return D.objetos.filter((o) => letras.indexOf(o.w.charAt(0)) !== -1);
  }

  function letrasDeGrupo(g) {
    return D.consonantes.filter((c) => c.grupo === g).map((c) => c.l);
  }

  function explorarLetras(letras, id, titulo) {
    const objs = letras.map((l) => {
      const info = D.vocales.find((v) => v.l === l) || D.consonantes.find((v) => v.l === l);
      return {
        grande: info.l + " " + info.low,
        emoji: info.emoji,
        texto: info.word,
        audio: D.audioLetra(info.l),
      };
    });
    return { id: id, tipo: "explorar", titulo: titulo, n: objs.length, params: { objetos: objs } };
  }

  const rutas = {
    1: () => [
      explorarLetras(["A", "E", "I", "O", "U"], "v1", "Conozco las vocales"),
      { id: "v2", tipo: "find-letter", titulo: "Encuentra la vocal", n: 5, params: { pool: ["A", "E", "I", "O", "U"] } },
      {
        id: "v3",
        tipo: "pick-image",
        titulo: "Vocales e imágenes",
        n: 4,
        params: { pool: poolObjetosPorLetras(["A", "E", "I", "O", "U"]) },
      },
      {
        id: "v4",
        tipo: "letter-object",
        titulo: "¿Con qué vocal empieza?",
        n: 5,
        params: { pool: D.vocales },
      },
      { id: "v5", tipo: "trace", titulo: "Escribo las vocales", params: { letras: ["A", "E", "I"] } },
      { id: "v6", tipo: "memory", titulo: "Memoria de vocales", n: 1, params: { letras: ["A", "E", "I", "O"] } },
      { id: "v7", tipo: "follow", titulo: "Sigo instrucciones", n: 4, params: { letras: ["A", "E", "I", "O", "U"] } },
      {
        id: "v8",
        tipo: "quiz",
        titulo: "Reto final de vocales",
        n: 5,
        params: {
          pasos: [
            { tipo: "find-letter", params: { pool: ["A", "E", "I", "O", "U"] } },
            { tipo: "letter-object", params: { pool: D.vocales } },
            { tipo: "pick-image", params: { pool: poolObjetosPorLetras(["A", "E", "I", "O", "U"]) } },
            { tipo: "initial-sound", params: { pool: poolObjetosPorLetras(["A", "E", "I", "O", "U"]), letras: ["A", "E", "I", "O", "U"] } },
            { tipo: "find-letter", params: { pool: ["A", "E", "I", "O", "U"] } },
          ],
        },
      },
    ],

    2: () => [
      explorarLetras(letrasDeGrupo(1), "c1", "M, P, S, L y T"),
      { id: "c2", tipo: "find-letter", titulo: "Encuentra la consonante", n: 5, params: { pool: letrasDeGrupo(1).concat(["A", "E", "I", "O", "U"]) } },
      { id: "c3", tipo: "letter-object", titulo: "Letra e imagen", n: 5, params: { pool: D.consonantes.filter((c) => c.grupo === 1) } },
      {
        id: "c4",
        tipo: "initial-sound",
        titulo: "Suena al principio",
        n: 5,
        params: { pool: poolObjetosPorLetras(letrasDeGrupo(1)) },
      },
      { id: "c5", tipo: "trace", titulo: "Escribo M, P y S", params: { letras: ["M", "P", "S"] } },
      explorarLetras(letrasDeGrupo(2), "c6", "N, C, D, G y F"),
      { id: "c7", tipo: "find-letter", titulo: "Encuentra la letra nueva", n: 5, params: { pool: letrasDeGrupo(2).concat(letrasDeGrupo(1)) } },
      { id: "c8", tipo: "letter-object", titulo: "Letra e imagen", n: 5, params: { pool: D.consonantes.filter((c) => c.grupo === 2) } },
      {
        id: "c9",
        tipo: "initial-sound",
        titulo: "Suena al principio",
        n: 5,
        params: { pool: poolObjetosPorLetras(letrasDeGrupo(2)) },
      },
      explorarLetras(letrasDeGrupo(3), "c10", "V, B, R, J y Y"),
      { id: "c11", tipo: "bd", titulo: "b y d se parecen", n: 4, params: {} },
      {
        id: "c12",
        tipo: "follow",
        titulo: "Haz lo que te digo",
        n: 4,
        params: { letras: letrasDeGrupo(1).concat(letrasDeGrupo(2)), pool: D.objetos },
      },
      {
        id: "c13",
        tipo: "final-sound",
        titulo: "Suena al final",
        n: 4,
        params: { pool: poolObjetosPorLetras(letrasDeGrupo(1).concat(letrasDeGrupo(2))) },
      },
      explorarLetras(letrasDeGrupo(4), "c14", "Z, Ñ, Q, H, X, K y W"),
      { id: "c15", tipo: "memory", titulo: "Memoria de letras", n: 1, params: { letras: ["M", "P", "S", "L"] } },
      {
        id: "c16",
        tipo: "quiz",
        titulo: "Reto final de letras",
        n: 5,
        params: {
          pasos: [
            { tipo: "find-letter", params: { pool: letrasDeGrupo(1).concat(letrasDeGrupo(2)) } },
            { tipo: "initial-sound", params: { pool: D.objetos } },
            { tipo: "bd", params: {} },
            { tipo: "letter-object", params: { pool: D.consonantes } },
            { tipo: "follow", params: { letras: letrasDeGrupo(1), pool: D.objetos } },
          ],
        },
      },
    ],

    3: () => {
      const f1 = D.familias[0];
      const f2 = D.familias[1];
      const f345 = D.familias.slice(2, 5);
      return [
        explorarSilabas(f1, "s1", "La familia de la M"),
        { id: "s2", tipo: "syllable-listen", titulo: "Escucha la sílaba", n: 5, params: { pool: f1.silabas } },
        explorarSilabas(f2, "s3", "La familia de la P"),
        { id: "s4", tipo: "syllable-listen", titulo: "Escucha la sílaba", n: 5, params: { pool: f1.silabas.concat(f2.silabas) } },
        { id: "s5", tipo: "order-syl", titulo: "Ordeno las sílabas", n: 3, params: { pool: D.palabras.filter((p) => p.syl.length === 2) } },
        explorarSilabas(f345[0], "s6", "La familia de la S"),
        { id: "s7", tipo: "syllable-listen", titulo: "Escucha la sílaba", n: 5, params: { pool: f345[0].silabas } },
        explorarSilabas(f345[1], "s8", "La familia de la L"),
        explorarSilabas(f345[2], "s9", "La familia de la T"),
        {
          id: "s10",
          tipo: "explorar",
          titulo: "Palabras con sílabas especiales",
          n: 6,
          params: {
            objetos: ["SOL", "SAL", "PAN", "MAR", "FLOR", "PERRO"].map((s) => ({
              grande: s,
              emoji: "",
              texto: s,
              audio: "Lee conmigo: " + s.split("").join(" ") + ". " + s,
            })),
          },
        },
        {
          id: "s11",
          tipo: "explorar",
          titulo: "Sílabas trabadas: BR, PL y TR",
          n: 6,
          params: {
            objetos: D.combinaciones.slice(0, 3).map((c) => ({
              grande: c.silabas[0] + "  " + c.silabas[2] + "  " + c.silabas[3],
              emoji: "",
              texto: c.base,
              audio: "La combinación " + c.base.split("").join(" ") + ". " + c.silabas.join(", "),
            })),
          },
        },
        { id: "s12", tipo: "order-syl", titulo: "Ordeno las sílabas", n: 4, params: { pool: D.palabras.filter((p) => p.syl.length >= 2) } },
        {
          id: "s13",
          tipo: "quiz",
          titulo: "Reto final de sílabas",
          n: 5,
          params: {
            pasos: [
              { tipo: "syllable-listen", params: { pool: f1.silabas.concat(f2.silabas) } },
              { tipo: "order-syl", params: { pool: D.palabras.filter((p) => p.syl.length === 2) } },
              { tipo: "syllable-listen", params: { pool: D.familias[2].silabas } },
              { tipo: "order-syl", params: { pool: D.palabras } },
              { tipo: "syllable-listen", params: { pool: f345[2].silabas } },
            ],
          },
        },
      ];
    },

    4: () => [
      explorarPalabras(D.palabras.slice(0, 6), "p1", "Conozco palabras"),
      { id: "p2", tipo: "order-syl", titulo: "Ordeno sílabas", n: 4, params: { pool: D.palabras } },
      { id: "p3", tipo: "build-word", titulo: "Formo palabras", n: 4, params: { pool: D.palabras } },
      { id: "p4", tipo: "pick-image", titulo: "Escucho y elijo", n: 5, params: { pool: D.objetos } },
      { id: "p5", tipo: "fill-word", titulo: "Completo la palabra", n: 4, params: { pool: D.palabras } },
      { id: "p6", tipo: "type-word", titulo: "Escribo con el teclado", n: 3, params: { pool: D.palabras } },
      explorarPalabras(D.palabras.slice(6, 14), "p7", "Más palabras"),
      { id: "p8", tipo: "build-word", titulo: "Formo palabras", n: 5, params: { pool: D.palabras } },
      { id: "p9", tipo: "fill-word", titulo: "Completo la palabra", n: 4, params: { pool: D.palabras } },
      {
        id: "p11",
        tipo: "sopa",
        titulo: "Sopa de letras",
        n: 3,
        params: { palabras: D.palabras, n: 3, dificultad: "facil" },
      },
      {
        id: "p10",
        tipo: "quiz",
        titulo: "Reto final de palabras",
        n: 5,
        params: {
          pasos: [
            { tipo: "order-syl", params: { pool: D.palabras } },
            { tipo: "pick-image", params: { pool: D.objetos } },
            { tipo: "fill-word", params: { pool: D.palabras } },
            { tipo: "build-word", params: { pool: D.palabras } },
            { tipo: "initial-sound", params: { pool: D.objetos } },
          ],
        },
      },
    ],

    5: () => [
      { id: "o1", tipo: "sentence-read", titulo: "Leo una oración", n: 1, params: { pool: D.oraciones.slice(0, 4) } },
      { id: "o2", tipo: "sentence-listen", titulo: "Escucho y respondo", n: 3, params: { pool: D.oraciones.slice(0, 6) } },
      { id: "o3", tipo: "sentence-read", titulo: "Leo una oración", n: 1, params: { pool: D.oraciones.slice(4, 8) } },
      { id: "o4", tipo: "sentence-listen", titulo: "Escucho y respondo", n: 3, params: { pool: D.oraciones.slice(6) } },
      {
        id: "o5",
        tipo: "quiz",
        titulo: "Reto final de oraciones",
        n: 5,
        params: {
          pasos: [
            { tipo: "sentence-listen", params: { pool: D.oraciones } },
            { tipo: "sentence-listen", params: { pool: D.oraciones } },
            { tipo: "sentence-listen", params: { pool: D.oraciones } },
            { tipo: "sentence-listen", params: { pool: D.oraciones } },
            { tipo: "sentence-listen", params: { pool: D.oraciones } },
          ],
        },
      },
    ],

    6: () => [
      { id: "l1", tipo: "story", titulo: "Cuento 1", n: 1, params: { cuento: D.cuentos[0] } },
      { id: "l2", tipo: "story", titulo: "Cuento 2", n: 1, params: { cuento: D.cuentos[1] } },
      { id: "l3", tipo: "story", titulo: "Cuento 3", n: 1, params: { cuento: D.cuentos[2] } },
      { id: "l4", tipo: "story", titulo: "Cuento 4", n: 1, params: { cuento: D.cuentos[3] } },
      {
        id: "l5",
        tipo: "quiz",
        titulo: "Reto final de cuentos",
        n: 4,
        params: {
          pasos: [
            { tipo: "sentence-listen", params: { pool: D.oraciones } },
            { tipo: "sentence-listen", params: { pool: D.oraciones } },
            { tipo: "pick-image", params: { pool: D.objetos } },
            { tipo: "initial-sound", params: { pool: D.objetos } },
          ],
        },
      },
    ],
  };

  function explorarSilabas(familia, id, titulo) {
    const objs = familia.silabas.map((s) => ({
      grande: s,
      emoji: "",
      texto: s,
      audio: "Lee conmigo: " + s.split("").join(" ") + ". " + s,
    }));
    /* Para C y G: primero se explica que su sonido cambia con la vocal */
    if (familia.nota) {
      objs.unshift({
        grande: familia.cons + " cambia",
        emoji: "🔔",
        texto: "Presta atención",
        audio: familia.nota,
      });
    }
    return { id: id, tipo: "explorar", titulo: titulo, n: objs.length, params: { objetos: objs } };
  }

  function explorarPalabras(lista, id, titulo) {
    const objs = lista.map((p) => ({
      grande: p.w,
      emoji: p.emoji,
      texto: p.s,
      audio: p.w + ". " + p.s + ". Se lee: " + p.syl.join(" ") + ".",
    }));
    return { id: id, tipo: "explorar", titulo: titulo, n: objs.length, params: { objetos: objs } };
  }

  /* =========================================================
     Rutas de MATEMÁTICAS (ids "m1".."m6")
     Progreso separado de lectura, misma máquina de lecciones,
     refuerzos adaptativos y desbloqueo por maestría.
     ========================================================= */
  const rutasMate = {
    m1: () => [
      { id: "m1-1", tipo: "count", titulo: "Cuento objetos alegres", n: 5, params: { rango: [1, 5] } },
      { id: "m1-2", tipo: "compare", titulo: "¿Cuál tiene más?", n: 4, params: { rango: [1, 5] } },
      { id: "m1-3", tipo: "tenframe", titulo: "El marco de diez", n: 4, params: { max: 5 } },
      { id: "m1-4", tipo: "ordernums", titulo: "Números en orden", n: 3, params: { rango: [1, 5], cuantos: 3 } },
      { id: "m1-5", tipo: "beforeafter", titulo: "¿Qué sigue?", n: 4, params: { rango: [2, 5], modo: "siguiente" } },
      { id: "m1-6", tipo: "addvisual", titulo: "Sumo con objetos", n: 4, params: { maxTotal: 5 } },
      { id: "m1-7", tipo: "shapes", titulo: "Mis primeras figuras", n: 4, params: { pool: ["circulo", "cuadrado", "triangulo"] } },
      {
        id: "m1-8",
        tipo: "quiz",
        titulo: "Reto final de números",
        params: {
          pasos: [
            { tipo: "count", params: { rango: [1, 5] } },
            { tipo: "tenframe", params: { max: 5 } },
            { tipo: "beforeafter", params: { rango: [2, 5], modo: "siguiente" } },
            { tipo: "addvisual", params: { maxTotal: 5 } },
            { tipo: "compare", params: { rango: [1, 5] } },
          ],
        },
      },
    ],
    m2: () => [
      { id: "m2-1", tipo: "count", titulo: "Cuento hasta el 10", n: 5, params: { rango: [6, 10] } },
      { id: "m2-2", tipo: "tenframe", titulo: "Lleno el marco", n: 4, params: { max: 10 } },
      { id: "m2-3", tipo: "numberline", titulo: "La recta numérica", n: 5, params: { max: 10 } },
      { id: "m2-4", tipo: "ordernums", titulo: "Números grandes en orden", n: 3, params: { rango: [6, 10], cuantos: 4 } },
      { id: "m2-5", tipo: "beforeafter", titulo: "Antes y después", n: 4, params: { rango: [5, 9] } },
      { id: "m2-6", tipo: "compare", titulo: "Compara cantidades", n: 4, params: { rango: [4, 10] } },
      { id: "m2-7", tipo: "shapecount", titulo: "Cuento figuras", n: 4, params: {} },
      {
        id: "m2-8",
        tipo: "quiz",
        titulo: "Reto de la playa",
        params: {
          pasos: [
            { tipo: "count", params: { rango: [6, 10] } },
            { tipo: "numberline", params: { max: 10 } },
            { tipo: "ordernums", params: { rango: [6, 10], cuantos: 4 } },
            { tipo: "beforeafter", params: { rango: [5, 9] } },
            { tipo: "tenframe", params: { max: 10 } },
          ],
        },
      },
    ],
    m3: () => [
      { id: "m3-1", tipo: "addvisual", titulo: "Sumas con objetos", n: 5, params: { maxTotal: 5 } },
      { id: "m3-2", tipo: "missing", titulo: "¿Cuántos faltan?", n: 4, params: { maxTotal: 5 } },
      { id: "m3-3", tipo: "addvisual", titulo: "Sumas un poco más grandes", n: 4, params: { maxTotal: 8 } },
      { id: "m3-4", tipo: "problem", titulo: "Problemas de sumar", n: 3, params: { op: "suma", maxTotal: 6 } },
      { id: "m3-5", tipo: "pattern", titulo: "Patrones coloridos", n: 4, params: {} },
      { id: "m3-6", tipo: "addvisual", titulo: "Sumas hasta el 10", n: 4, params: { maxTotal: 10 } },
      { id: "m3-7", tipo: "ordernums", titulo: "Repaso en orden", n: 3, params: { rango: [1, 10], cuantos: 4 } },
      {
        id: "m3-8",
        tipo: "quiz",
        titulo: "Reto del bosque",
        params: {
          pasos: [
            { tipo: "addvisual", params: { maxTotal: 5 } },
            { tipo: "missing", params: { maxTotal: 5 } },
            { tipo: "problem", params: { op: "suma", maxTotal: 6 } },
            { tipo: "pattern", params: {} },
            { tipo: "addvisual", params: { maxTotal: 10 } },
          ],
        },
      },
    ],
    m4: () => [
      { id: "m4-1", tipo: "subvisual", titulo: "Restas quitando", n: 5, params: { maxTotal: 6 } },
      { id: "m4-2", tipo: "subvisual", titulo: "Restas hasta el 10", n: 4, params: { maxTotal: 10 } },
      { id: "m4-3", tipo: "problem", titulo: "Problemas de quitar", n: 3, params: { op: "resta", maxTotal: 6 } },
      { id: "m4-4", tipo: "addvisual", titulo: "Sumas para recordar", n: 3, params: { maxTotal: 8 } },
      { id: "m4-5", tipo: "beforeafter", titulo: "Números vecinos", n: 4, params: { rango: [2, 9] } },
      { id: "m4-6", tipo: "shapecount", titulo: "Cuento figuras otra vez", n: 4, params: {} },
      {
        id: "m4-7",
        tipo: "quiz",
        titulo: "Reto de la cascada",
        params: {
          pasos: [
            { tipo: "subvisual", params: { maxTotal: 6 } },
            { tipo: "problem", params: { op: "resta", maxTotal: 6 } },
            { tipo: "beforeafter", params: { rango: [2, 9] } },
            { tipo: "subvisual", params: { maxTotal: 10 } },
            { tipo: "compare", params: { rango: [1, 10] } },
          ],
        },
      },
    ],
    m5: () => [
      { id: "m5-1", tipo: "shapes", titulo: "Círculo, cuadrado y triángulo", n: 4, params: { pool: ["circulo", "cuadrado", "triangulo", "rectangulo"] } },
      { id: "m5-2", tipo: "shapecount", titulo: "¿Cuántas figuras hay?", n: 4, params: {} },
      { id: "m5-3", tipo: "shapes", titulo: "Todas las figuras", n: 4, params: {} },
      { id: "m5-4", tipo: "pattern", titulo: "Patrones fáciles", n: 4, params: {} },
      { id: "m5-5", tipo: "pattern", titulo: "Patrones difíciles", n: 4, params: {} },
      { id: "m5-6", tipo: "compare", titulo: "¿Cuál tiene más?", n: 3, params: { rango: [1, 6] } },
      { id: "m5-7", tipo: "ordernums", titulo: "Ordeno hasta el 10", n: 3, params: { rango: [1, 10], cuantos: 4 } },
      {
        id: "m5-8",
        tipo: "quiz",
        titulo: "Reto del castillo",
        params: {
          pasos: [
            { tipo: "shapes", params: {} },
            { tipo: "shapecount", params: {} },
            { tipo: "pattern", params: {} },
            { tipo: "shapes", params: { pool: ["circulo", "cuadrado", "triangulo", "rectangulo"] } },
            { tipo: "ordernums", params: { rango: [1, 10], cuantos: 4 } },
          ],
        },
      },
    ],
    m6: () => [
      { id: "m6-1", tipo: "add", titulo: "Sumas con números", n: 5, params: { maxTotal: 10 } },
      { id: "m6-2", tipo: "sub", titulo: "Restas con números", n: 5, params: { maxTotal: 10 } },
      { id: "m6-3", tipo: "missing", titulo: "Completa la suma", n: 4, params: { maxTotal: 10 } },
      { id: "m6-4", tipo: "problem", titulo: "Problemas mixtos", n: 4, params: { maxTotal: 10 } },
      { id: "m6-5", tipo: "numberline", titulo: "Recta numérica rápida", n: 4, params: { max: 10 } },
      { id: "m6-6", tipo: "count", titulo: "Cuento veloz", n: 4, params: { rango: [1, 10] } },
      { id: "m6-7", tipo: "addvisual", titulo: "Sumas con ayuda", n: 3, params: { maxTotal: 10 } },
      {
        id: "m6-8",
        tipo: "quiz",
        titulo: "Gran reto final",
        params: {
          pasos: [
            { tipo: "add", params: { maxTotal: 10 } },
            { tipo: "sub", params: { maxTotal: 10 } },
            { tipo: "missing", params: { maxTotal: 10 } },
            { tipo: "problem", params: { maxTotal: 10 } },
            { tipo: "numberline", params: { max: 10 } },
          ],
        },
      },
    ],
  };

  /* Lista de actividades de un nivel (lectura o matemáticas) */
  function rutaDe(nivelId) {
    const fn = rutas[nivelId] || rutasMate[nivelId] || rutas[1];
    return fn();
  }

  /* Refuerzos adaptativos de MATEMÁTICAS: cada clave débil se repasa
     con el mismo tipo de actividad que la registró, fijando el
     contenido exacto (pool / fijar) para que sí se practique:
       cant-N        count          marco-N      tenframe
       recta-N       numberline     figura-X     shapes
       contarfigura-X shapecount    orden        ordernums
       patron        pattern        comparar     compare
       anterior-N    beforeafter    siguiente-N  beforeafter
       suma-a-b      add/addvisual  resta-a-b    sub/subvisual
       completa-a-b  missing        problema-    problem        */
  function refuerzosMate(nivelId, debiles) {
    const grupos = {};
    const peso = {};
    debiles.forEach((k) => {
      const i = k.indexOf("-");
      const tipo = i === -1 ? k : k.slice(0, i);
      const v = i === -1 ? "" : k.slice(i + 1);
      if (!grupos[tipo]) {
        grupos[tipo] = [];
        peso[tipo] = 1;
      }
      if (grupos[tipo].indexOf(v) === -1) grupos[tipo].push(v);
      const n = C.Store.data.debil["n" + nivelId + ":" + k] || 1;
      if (n > peso[tipo]) peso[tipo] = n;
    });
    let seq = 0;
    const opciones = [];
    const add = (tipo, desc, pesoCustom) => {
      if (desc) opciones.push({ peso: pesoCustom || peso[tipo] || 1, desc: desc });
    };
    const idR = (tipo) => "refuerzo-" + nivelId + "-" + tipo + "-" + Date.now() + "-" + ++seq;
    const nums = (arr) => arr.map(Number).filter((x) => !isNaN(x));
    const parejas = (arr) =>
      arr
        .map((v) => v.split("-").map(Number))
        .filter((p) => p.length === 2 && !isNaN(p[0]) && !isNaN(p[1]))
        .slice(0, 4);

    const cants = nums(grupos.cant || []).slice(0, 6);
    if (cants.length) {
      add("cant", {
        id: idR("cant"),
        tipo: "count",
        titulo: "¡Otra vez estos números!",
        n: Math.max(3, cants.length),
        params: { pool: cants, rango: [Math.min.apply(null, cants), Math.max(10, Math.max.apply(null, cants))] },
      });
    }
    const marcos = nums(grupos.marco || []).slice(0, 6);
    if (marcos.length) {
      add("marco", { id: idR("marco"), tipo: "tenframe", titulo: "¡Repasamos el marco!", n: Math.max(3, marcos.length), params: { pool: marcos } });
    }
    const rectas = nums(grupos.recta || []).slice(0, 6);
    if (rectas.length) {
      add("recta", { id: idR("recta"), tipo: "numberline", titulo: "¡Otra vez en la recta!", n: Math.max(3, rectas.length), params: { pool: rectas } });
    }
    const figuras = (grupos.figura || []).filter((id) => D.figuras.some((f) => f.id === id)).slice(0, 4);
    if (figuras.length) {
      add("figura", { id: idR("figura"), tipo: "shapes", titulo: "¡Repasamos estas figuras!", n: Math.max(3, figuras.length), params: { fijar: figuras } });
    }
    const contarFig = (grupos.contarfigura || []).filter((id) => D.figuras.some((f) => f.id === id)).slice(0, 4);
    if (contarFig.length) {
      add("contarfigura", { id: idR("cfig"), tipo: "shapecount", titulo: "¡Contamos figuras otra vez!", n: Math.max(3, contarFig.length), params: { fijar: contarFig } });
    }
    const sumas = parejas(grupos.suma || []);
    if (sumas.length) {
      add("suma", { id: idR("suma"), tipo: "addvisual", titulo: "¡Otra vez estas sumas!", n: Math.max(2, sumas.length), params: { fijar: sumas, maxTotal: 10 } });
    }
    const restas = parejas(grupos.resta || []);
    if (restas.length) {
      add("resta", { id: idR("resta"), tipo: "subvisual", titulo: "¡Otra vez estas restas!", n: Math.max(2, restas.length), params: { fijar: restas, maxTotal: 10 } });
    }
    const completas = parejas(grupos.completa || []);
    if (completas.length) {
      add("completa", { id: idR("completa"), tipo: "missing", titulo: "¡Completamos otra vez!", n: Math.max(2, completas.length), params: { fijar: completas, maxTotal: 10 } });
    }
    const fijarBA = nums(grupos.anterior || [])
      .slice(0, 4)
      .map((v) => ({ n: v, modo: "anterior" }))
      .concat(
        nums(grupos.siguiente || [])
          .slice(0, 4)
          .map((v) => ({ n: v, modo: "siguiente" }))
      );
    if (fijarBA.length) {
      add(
        "anterior",
        { id: idR("ba"), tipo: "beforeafter", titulo: "¡Repasamos antes y después!", n: Math.max(2, fijarBA.length), params: { fijar: fijarBA } },
        Math.max(peso.anterior || 1, peso.siguiente || 1)
      );
    }
    if (grupos.orden) add("orden", { id: idR("orden"), tipo: "ordernums", titulo: "¡Ordenamos números otra vez!", n: 3, params: { rango: [1, 10], cuantos: 4 } });
    if (grupos.patron) add("patron", { id: idR("patron"), tipo: "pattern", titulo: "¡Otra vez estos patrones!", n: 4, params: {} });
    if (grupos.comparar) add("comparar", { id: idR("comparar"), tipo: "compare", titulo: "¡Comparamos otra vez!", n: 4, params: { rango: [1, 10] } });
    const problemas = (grupos.problema || []).filter((op) => op === "suma" || op === "resta");
    if (problemas.length) {
      add("problema", { id: idR("problema"), tipo: "problem", titulo: "¡Resolvemos problemas otra vez!", n: Math.max(2, problemas.length), params: { op: problemas[0], maxTotal: 10 } });
    }

    /* Prioriza los contenidos con más errores; máximo 2 refuerzos */
    opciones.sort((a, b) => b.peso - a.peso);
    return opciones.slice(0, 2).map((o) => o.desc);
  }

  function lecciones(nivelId) {
    const base = rutaDe(nivelId);
    /* Refuerzo adaptativo: si hay contenidos difíciles, se agregan al
       principio (máximo 2) ejercicios que repasan EXACTAMENTE esos
       contenidos con el mismo tipo de actividad que los registró, para
       que las claves débiles sí se puedan superar con la práctica:
         letra-   find-letter      inicial- letter-object
         final-   final-sound      silaba-  syllable-listen
         palabra- pick-image       imagen-  follow
         escribir- type-word       comp-    sentence-listen
         cuento-  story                                          */
    const debiles = C.Store.contenidosDebiles(nivelId);
    if (debiles.length) {
      /* Matemáticas: refuerzos con pools fijados por clave débil */
      if (C.Niveles.area(nivelId) === "mate") {
        base.unshift.apply(base, refuerzosMate(nivelId, debiles));
        return base;
      }
      const grupos = {};
      const peso = {};
      debiles.forEach((k) => {
        const i = k.indexOf("-");
        const tipo = i === -1 ? k : k.slice(0, i);
        const v = i === -1 ? "" : k.slice(i + 1);
        if (!grupos[tipo]) {
          grupos[tipo] = [];
          peso[tipo] = 1;
        }
        if (grupos[tipo].indexOf(v) === -1) grupos[tipo].push(v);
        const n = (C.Store.data.debil["n" + nivelId + ":" + k] || 1);
        if (n > peso[tipo]) peso[tipo] = n;
      });

      const sinDup = (a) => a.filter((x, i) => a.indexOf(x) === i);
      /* Objeto o palabra por su texto (para armar pools de imágenes) */
      const comoObjeto = (w) => D.objetos.find((o) => o.w === w) || D.palabras.find((p) => p.w === w);
      const opciones = [];
      const add = (tipo, desc) => {
        if (desc) opciones.push({ peso: peso[tipo] || 1, desc: desc });
      };

      const letras = sinDup(grupos.letra || []).slice(0, 6);
      if (letras.length) {
        /* n = máximo(3, letras): así TODAS las letras débiles se
           practican en la misma pasada (el sorteo es sin repetir). */
        add("letra", {
          id: "refuerzo-" + nivelId + "-letra-" + Date.now(),
          tipo: "find-letter",
          titulo: "¡Vamos a practicar otra vez!",
          n: Math.max(3, letras.length),
          params: { pool: letras },
        });
      }

      const iniciales = sinDup(grupos.inicial || []).slice(0, 6);
      if (iniciales.length) {
        /* Un solo ítem por letra (si no, las opciones de la actividad
           saldrían con letras repetidas) y con al menos 4 letras. */
        const items = [];
        const ya = () => items.map((i) => i.l);
        const buscarPalabra = (L) =>
          D.objetos.concat(D.palabras).find((x) => x.w && x.w.charAt(0) === L);
        iniciales.forEach((L) => {
          const o = buscarPalabra(L);
          if (o) items.push({ l: L, word: o.w, emoji: o.emoji });
        });
        if (items.length) {
          "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("").forEach((L) => {
            if (items.length >= 4) return;
            if (ya().indexOf(L) !== -1) return;
            const o = buscarPalabra(L);
            if (o) items.push({ l: L, word: o.w, emoji: o.emoji });
          });
          add("inicial", {
            id: "refuerzo-" + nivelId + "-inicial-" + Date.now(),
            tipo: "letter-object",
            titulo: "¡Repasamos estos sonidos!",
            /* n = ítems: cubre TODAS las letras débiles en la pasada */
            n: items.length,
            params: { pool: items },
          });
        }
      }

      const finales = sinDup(grupos.final || []);
      if (finales.length) {
        const pool = D.objetos.filter((o) => o.w.length >= 3 && finales.indexOf(o.w.charAt(o.w.length - 1)) !== -1);
        if (pool.length) {
          add("final", {
            id: "refuerzo-" + nivelId + "-final-" + Date.now(),
            tipo: "final-sound",
            titulo: "¡Repasamos cómo terminan!",
            n: Math.min(3, finales.length) || 2,
            params: { pool: pool },
          });
        }
      }

      const silabas = sinDup(grupos.silaba || []).slice(0, 6);
      if (silabas.length) {
        let pool = silabas.slice();
        if (pool.length < 4) {
          const todas = [];
          D.familias.forEach((f) => (f.silabas || []).forEach((s) => todas.push(s)));
          D.combinaciones.forEach((c) => (c.silabas || []).forEach((s) => todas.push(s)));
          pool = pool.concat(todas.filter((s) => pool.indexOf(s) === -1)).slice(0, 4);
        }
        add("silaba", {
          id: "refuerzo-" + nivelId + "-silaba-" + Date.now(),
          tipo: "syllable-listen",
          titulo: "¡Otra vez estas sílabas!",
          /* n = tamaño del pool: sorteo sin repetir, todas se cubren */
          n: pool.length,
          params: { pool: pool },
        });
      }

      /* pick-image solo para claves "palabra-" (limpia esas claves);
         para claves "imagen-" se usa follow, que sí las registra.   */
      const palabras = sinDup(grupos.palabra || []);
      if (palabras.length) {
        let pool = palabras.slice(0, 6).map(comoObjeto).filter(Boolean);
        if (pool.length) {
          if (pool.length < 4) {
            pool = pool.concat(D.objetos.filter((o) => pool.indexOf(o) === -1)).slice(0, 4);
          }
          add("palabra", {
            id: "refuerzo-" + nivelId + "-palabra-" + Date.now(),
            tipo: "pick-image",
            titulo: "¡Repasamos estas palabras!",
            /* n = tamaño del pool: sorteo sin repetir, todas las
               palabras débiles se practican en esta misma pasada.  */
            n: pool.length,
            params: { pool: pool },
          });
        }
      }

      /* "imagen-" solo lo limpia la actividad seguir-instrucción
         (fuera del bloque de palabras: puede ser el único débil) */
      const soloImagen = (grupos.imagen || []).filter((w) => (grupos.palabra || []).indexOf(w) === -1);
      if (soloImagen.length) {
        const objs = soloImagen.map(comoObjeto).filter(Boolean);
        if (objs.length) {
          add("imagen", {
            id: "refuerzo-" + nivelId + "-imagen-" + Date.now(),
            tipo: "follow",
            titulo: "¡Seguimos instrucciones otra vez!",
            n: Math.min(3, objs.length) || 2,
            params: { pool: objs, letras: sinDup(objs.map((o) => o.w.charAt(0))) },
          });
        }
      }

      const escribir = sinDup(grupos.escribir || []);
      if (escribir.length) {
        const pool = D.palabras.filter(
          (p) => p.w.length <= 6 && escribir.some((L) => p.w.indexOf(L) !== -1)
        );
        if (pool.length) {
          add("escribir", {
            id: "refuerzo-" + nivelId + "-escribir-" + Date.now(),
            tipo: "type-word",
            titulo: "¡Escribimos otra vez!",
            n: Math.min(3, pool.length) || 2,
            params: { pool: pool },
          });
        }
      }

      const comp = sinDup(grupos.comp || []);
      if (comp.length) {
        const pool = D.oraciones.filter((o) => comp.indexOf(o.t) !== -1);
        if (pool.length) {
          add("comp", {
            id: "refuerzo-" + nivelId + "-comp-" + Date.now(),
            tipo: "sentence-listen",
            titulo: "¡Escuchamos estas oraciones otra vez!",
            n: Math.min(3, pool.length) || 2,
            params: { pool: pool },
          });
        }
      }

      const cuentos = sinDup(grupos.cuento || []);
      if (cuentos.length) {
        const c = D.cuentos.find((x) => cuentos.indexOf(String(x.id)) !== -1);
        if (c) {
          add("cuento", {
            id: "refuerzo-" + nivelId + "-cuento-" + Date.now(),
            tipo: "story",
            titulo: "¡Leemos ese cuento otra vez!",
            n: 1,
            params: { cuento: c },
          });
        }
      }

      /* Prioriza los contenidos con más errores; máximo 2 refuerzos
         para no alargar demasiado la lección. */
      opciones.sort((a, b) => b.peso - a.peso);
      if (opciones.length) {
        base.unshift.apply(base, opciones.slice(0, 2).map((o) => o.desc));
      }
    }
    return base;
  }

  function letrasAprendidas() {
    const d = C.Store.data;
    if (d.niveles[2] && d.niveles[2].dominio >= 0.5) return letrasDeGrupo(1).concat(letrasDeGrupo(2), ["A", "E", "I", "O", "U"]);
    if (d.niveles[2] && d.niveles[2].hechas.length) return letrasDeGrupo(1).concat(["A", "E", "I", "O", "U"]);
    return ["A", "E", "I", "O", "U"];
  }

  /* =========================================================
     Cultura general: inyector de "¿Sabías que…?" + pantalla
     con categorías, galería ilustrada y retos de quiz.
     ========================================================= */

  /* Pinta un dato sorpresa dentro del cuerpo de una recompensa.
     Se llama desde C.celebrar (core.js), así que llega a las
     recompensas de lecciones, misiones, salas, inventos, casos…
     nunca se duplica y nunca rompe si no hay datos. */
  window.inyectarDatoCultura = function (contenedor) {
    if (!window.CULTURA || !contenedor) return;
    const cuerpo = contenedor.id === "recompensa-cuerpo" ? contenedor : contenedor.querySelector("#recompensa-cuerpo");
    if (!cuerpo || cuerpo.querySelector(".dato-cultura")) return;
    const d = window.CULTURA.dato();
    const caja = el("div", "dato-cultura");
    caja.setAttribute("role", "note");
    caja.innerHTML =
      "<div class='dato-cabeza'><span aria-hidden='true'>🌍</span> ¿Sabías que…? <strong>" +
      d.t +
      "</strong></div><p>" +
      d.d +
      "</p>";
    const fila = cuerpo.querySelector(".fila-botones");
    if (fila) cuerpo.insertBefore(caja, fila);
    else cuerpo.appendChild(caja);
  };

  /* Carátula ilustrada de sección (encuadre redondeado) */
  function bannerCaratula(rutaImg, alt) {
    const b = el("div", "banner-seccion");
    const img = document.createElement("img");
    img.src = rutaImg;
    img.alt = alt || "";
    img.decoding = "async";
    img.loading = "lazy";
    b.appendChild(img);
    return b;
  }

  function pantallaCulturaInicio(cont) {
    cont.appendChild(
      cabecera("🌍 Mundo de la cultura", window.CULTURA.totalDatos + " datos asombrosos, imágenes y retos")
    );

    /* Dato sorpresa inmediato: algo curioso nada más entrar */
    const sorr = el("div", "sorpresa-cultura");
    const pintarSorpresa = () => {
      const d = window.CULTURA.dato();
      sorr.innerHTML = "";
      const tarjeta = el("button", "tarjeta-sorpresa");
      tarjeta.type = "button";
      tarjeta.setAttribute("aria-label", "Dato sorpresa: " + d.t + ". Toca para escucharlo o cambiarlo.");
      tarjeta.innerHTML =
        "<span class='sorpresa-icono' aria-hidden='true'>🎲</span>" +
        "<span class='sorpresa-texto'><strong>" + d.t + "</strong><small>" + d.d + "</small></span>";
      tarjeta.onclick = () => {
        C.Sfx.clic();
        C.Voz.decir(d.t + ". " + d.d);
      };
      const otra = el("button", "btn", "🔁 Otro dato");
      otra.onclick = () => {
        C.Sfx.clic();
        pintarSorpresa();
      };
      sorr.appendChild(tarjeta);
      sorr.appendChild(otra);
    };
    pintarSorpresa();
    cont.appendChild(sorr);

    /* Categorías de datos */
    cont.appendChild(el("h2", "subtitulo", "🏛️ ¿Qué quieres descubrir?"));
    const rejilla = el("div", "rejilla-categorias");
    window.CULTURA.categorias.forEach((c) => {
      const b = el("button", "tarjeta-categoria");
      b.type = "button";
      b.style.setProperty("--c", c.color);
      b.innerHTML =
        "<span class='icono-categoria' aria-hidden='true'>" + c.icono + "</span>" +
        "<span class='texto-categoria'><strong>" + c.nombre + "</strong><small>" +
        c.facts.length + " datos asombrosos</small></span>";
      b.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("cultura", { cat: c.id });
      };
      rejilla.appendChild(b);
    });
    cont.appendChild(rejilla);

    /* Galería ilustrada y reto cultural */
    const fila = el("div", "fila-botones");
    const bGal = el("button", "btn grande primario", "🖼️ Galería con imágenes");
    bGal.onclick = () => {
      C.Sfx.clic();
      C.Nav.ir("cultura", { vista: "galeria" });
    };
    fila.appendChild(bGal);
    const bReto = el("button", "btn grande", "🎯 Reto cultural");
    bReto.onclick = () => {
      C.Sfx.clic();
      C.Nav.ir("cultura", { vista: "reto" });
    };
    fila.appendChild(bReto);
    cont.appendChild(fila);
  }

  function pantallaCulturaCategoria(cont, catId) {
    const cat = window.CULTURA.categorias.find((c) => c.id === catId);
    if (!cat) {
      C.Nav.reemplazar("cultura");
      return;
    }
    const volver = cabecera(cat.icono + " " + cat.nombre, cat.facts.length + " datos para asombrarte");
    const bAtras = el("button", "btn", "⬅️ Volver");
    bAtras.onclick = () => {
      C.Sfx.clic();
      C.Nav.atras();
    };
    volver.appendChild(bAtras);
    cont.appendChild(volver);

    const lista = el("div", "lista-datos");
    cat.facts.forEach((f) => {
      const tarjeta = el("button", "tarjeta-dato");
      tarjeta.type = "button";
      tarjeta.setAttribute("aria-label", f.t + ". Toca para escuchar.");
      tarjeta.innerHTML =
        "<span class='dato-icono' aria-hidden='true'>" + cat.icono + "</span>" +
        "<span class='dato-texto'><strong>" + f.t + "</strong><small>" + f.d + "</small></span>";
      tarjeta.onclick = () => {
        C.Sfx.clic();
        tarjeta.classList.toggle("leida");
        C.Voz.decir(f.t + ". " + f.d);
      };
      lista.appendChild(tarjeta);
    });
    cont.appendChild(lista);

    /* Mini reto de la categoría: 3 preguntas al azar */
    const cajaReto = el("div", "caja-reto-cat");
    const bReto = el("button", "btn grande primario", "🎯 Mini reto de " + cat.nombre);
    bReto.onclick = () => {
      C.Sfx.clic();
      pintarCatReto(cajaReto, window.CULTURA.reto(3), 0, 0, () => C.Nav.ir("cultura", { cat: catId }));
    };
    cajaReto.appendChild(bReto);
    cont.appendChild(cajaReto);
  }

  /* Mini quiz reutilizable para la categoría y para el reto general */
  function pintarCatReto(cont, preguntas, indice, aciertos, alTerminar) {
    cont.innerHTML = "";
    if (indice >= preguntas.length) {
      const cajaFin = el("div", "fin-reto-cat");
      const msg =
        aciertos === preguntas.length
          ? "⭐ ¡Todas bien! "
          : aciertos > 0
          ? "👏 " + aciertos + " de " + preguntas.length + " bien. "
          : "💪 Cada intento enseña. ";
      cajaFin.innerHTML =
        "<p class='fin-reto-msg'>" + msg + "Sigue explorando: cada dato es una puerta nueva al mundo.</p>";
      const fila = el("div", "fila-botones");
      const bOtra = el("button", "btn grande primario", "🔁 Otro reto");
      bOtra.onclick = () => {
        C.Sfx.clic();
        pintarCatReto(cont, window.CULTURA.reto(preguntas.length), 0, 0, alTerminar);
      };
      fila.appendChild(bOtra);
      const bListo = el("button", "btn grande", "✅ Listo");
      bListo.onclick = () => {
        C.Sfx.clic();
        alTerminar();
      };
      fila.appendChild(bListo);
      cajaFin.appendChild(fila);
      cont.appendChild(cajaFin);
      C.celebrar(cont);
      return;
    }
    const q = preguntas[indice];
    const caja = el("div", "pregunta-reto");
    caja.appendChild(el("h3", "pregunta-titulo", "pregunta " + (indice + 1) + " de " + preguntas.length));
    caja.appendChild(el("p", "pregunta-texto", q.p));
    const fila = el("div", "opciones-reto");
    let respondida = false;
    q.opciones.forEach((texto, i) => {
      const b = el("button", "btn grande opcion-reto", texto);
      b.onclick = () => {
        if (respondida) return;
        respondida = true;
        const ok = i === q.correcta;
        b.classList.add(ok ? "correcta" : "incorrecta");
        const explica = el("p", "explica-reto", (ok ? "✅ ¡Eso es! " : "❌ La respuesta era: " + q.opciones[q.correcta] + ". ") + q.dato);
        caja.appendChild(explica);
        if (ok) {
          C.Sfx.bien();
          C.Voz.decir("¡Eso es! " + q.dato);
          aciertos++;
        } else {
          C.Sfx.mal();
          C.Voz.decir("La respuesta era: " + q.opciones[q.correcta] + ". " + q.dato);
        }
        fila.querySelectorAll("button").forEach((x) => (x.disabled = true));
        const sig = el("button", "btn grande primario", "➡️ Siguiente");
        sig.onclick = () => {
          C.Sfx.clic();
          pintarCatReto(cont, preguntas, indice + 1, aciertos, alTerminar);
        };
        caja.appendChild(sig);
      };
      fila.appendChild(b);
    });
    caja.appendChild(fila);
    cont.appendChild(caja);
  }

  function pantallaCulturaReto(cont) {
    cont.appendChild(
      cabecera("🎯 Reto cultural", "26 preguntas para hacer pensar")
    );
    const zona = el("div", "zona-reto-cultural");
    cont.appendChild(zona);
    pintarCatReto(zona, window.CULTURA.reto(6), 0, 0, () => C.Nav.reemplazar("cultura"));
  }

  function pantallaCulturaGaleria(cont) {
    cont.appendChild(
      cabecera("🖼️ Galería con imágenes", "10 escenas para mirar, leer y escuchar")
    );
    const rejilla = el("div", "rejilla-galeria");
    window.CULTURA.galeria.forEach((g) => {
      const tarjeta = el("button", "tarjeta-galeria");
      tarjeta.type = "button";
      tarjeta.setAttribute("aria-label", g.t + ". Toca para escuchar la explicación.");
      tarjeta.innerHTML =
        "<img src='" + g.img + "' alt='' loading='lazy' decoding='async'>" +
        "<span class='texto-galeria'><strong>" + g.t + "</strong><small>" + g.d + "</small></span>";
      tarjeta.onclick = () => {
        C.Sfx.clic();
        tarjeta.classList.toggle("leida");
        C.Voz.decir(g.t + ". " + g.d);
      };
      rejilla.appendChild(tarjeta);
    });
    cont.appendChild(rejilla);
  }

  window.pantalla_cultura = function (datos) {
    const cont = $("#contenido-cultura");
    if (!cont) return;
    cont.innerHTML = "";
    if (datos && datos.cat) pantallaCulturaCategoria(cont, datos.cat);
    else if (datos && datos.vista === "reto") pantallaCulturaReto(cont);
    else if (datos && datos.vista === "galeria") pantallaCulturaGaleria(cont);
    else pantallaCulturaInicio(cont);
  };

  /* =========================================================
     Pantalla: Inicio
     ========================================================= */
  window.pantalla_home = function () {
    if (!C.Store.hayPerfiles()) {
      /* Con el sistema de cuentas: deja decidir a la puerta de entrada
         (cuenta si corresponde, o el formulario de crear perfil). */
      C.Nav.reemplazar(
        window.CUENTAS ? window.CUENTAS.arranque() : "perfil"
      );
      return;
    }
    const d = C.Store.data;
    const perfil = C.Store.perfilActivo;
    const cont = $("#contenido-home");
    cont.innerHTML = "";

    /* Progreso real del perfil: ninguna cifra se inventa */
    function progresoArea(idArea) {
      let hechas = 0;
      let total = 0;
      C.Niveles.deArea(idArea).forEach((n) => {
        const lista = rutaDe(n.id);
        total += lista.length;
        const infoN = C.Store.data.niveles[n.id] || { hechas: [] };
        hechas += lista.filter((l) => infoN.hechas.indexOf(l.id) !== -1).length;
      });
      return { hechas: hechas, total: total };
    }
    const progLetras = progresoArea("lectura");
    const progNumeros = progresoArea("mate");
    const resumenAventurero = window.AVENTURERO.resumen();
    let temasHechos = 0;
    if (d.curriculo) {
      Object.keys(d.curriculo).forEach((k) => {
        if (d.curriculo[k] && d.curriculo[k].hecho) temasHechos++;
      });
    }

    const saludo = d.nombre
      ? (perfil ? avatarHTML(perfil, "avatar-saludo") + " " : "") + "¡Hola, " + d.nombre + "!"
      : "¡Hola! Soy Kiko 🦜";

    /* Ilustración principal de la bienvenida */
    const hero = el("div", "hero-inicio");
    const imgHero = document.createElement("img");
    imgHero.className = "hero-img";
    imgHero.src = "img/inicio.jpg";
    imgHero.alt = "";
    imgHero.setAttribute("aria-hidden", "true");
    hero.appendChild(imgHero);
    const heroTarjeta = el("div", "hero-tarjeta");
    heroTarjeta.appendChild(el("h1", "saludo", saludo));
    heroTarjeta.appendChild(el("p", "hero-subtitulo", "Descubre, practica y celebra cada pequeño logro. ¡Aquí aprender es una aventura!"));
    hero.appendChild(heroTarjeta);
    cont.appendChild(hero);

    /* A. Indicadores visuales del progreso (datos reales) */
    const filaInd = el("div", "indicadores-inicio");
    [
      { icono: "⭐", texto: (d.estrellas || 0) + " estrellas", ir: "aventura" },
      {
        icono: "✅",
        texto: (progLetras.hechas + progNumeros.hechas) + " actividades",
        ir: "aventura",
      },
      { icono: "📚", texto: temasHechos + " lecciones del colegio", ir: "materias" },
      {
        icono: "🏅",
        texto: resumenAventurero.misionesHechas + " de " + resumenAventurero.misiones + " misiones",
        ir: "misiones_av",
      },
    ].forEach((ind) => {
      const chip = el("button", "chip-indicador");
      chip.type = "button";
      chip.title = ind.texto;
      chip.innerHTML =
        "<span aria-hidden='true'>" + ind.icono + "</span><strong>" + ind.texto + "</strong>";
      chip.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir(ind.ir);
      };
      filaInd.appendChild(chip);
    });
    cont.appendChild(filaInd);

    /* E2. Materias del colegio: franja del grado + catálogo de las 10
           asignaturas + tema recomendado (js/materias-home.js) */
    if (window.MATERIAS_HOME && typeof window.MATERIAS_HOME.render === "function") {
      window.MATERIAS_HOME.render(cont);
    }

    const filaBotones = el("div", "botones-principales");

    const btnComenzar = el("button", "btn-huge primario", "🚀<span>¡Empezar mi misión!</span>");
    btnComenzar.onclick = () => {
      C.Sfx.clic();
      /* Con grado y materias del colegio configurados, la misión
         principal es el siguiente tema de la escuela (los otros
         siguen sin cambio: leer y practicar). */
      const sig = window.MATERIAS_HOME ? window.MATERIAS_HOME.botónPrincipal() : null;
      if (sig && sig.indexOf("tema:") === 0) {
        C.Nav.ir("tema", { id: sig.slice(5) });
        return;
      }
      irALeccionSiguiente(siguientePendiente());
    };
    filaBotones.appendChild(btnComenzar);

    const btnJugar = el("button", "btn-huge", "🎮<span>Jugar y practicar</span>");
    btnJugar.onclick = () => {
      C.Sfx.clic();
      C.Nav.ir("jugar");
    };
    filaBotones.appendChild(btnJugar);

    /* Las demás secciones (Mundo, Mascota, Escape rooms, Taller,
       Detectives, Concurso, Laboratorio y Mi Aventurero) aparecen
       más abajo, en la rejilla "Más juegos y aventuras", para no
       repetir aquí los mismos botones. */

    cont.appendChild(filaBotones);

    /* C. Cuatro accesos principales de la aventura */
    cont.appendChild(el("h2", "subtitulo", "¿Qué te gustaría descubrir hoy?"));
    const aventuras = [
      {
        nombre: "Mundo de las letras",
        desc: "Vocales, sílabas, palabras, cuentos y escritura",
        img: "img/lectura.jpg",
        icono: "📖",
        color: "#3fa34d",
        ir: () => C.Nav.ir("aprender", { area: "lectura" }),
        prog: progLetras,
      },
      {
        nombre: "Reino de los números",
        desc: "Contar, sumar, restar, figuras y problemas",
        img: "img/matematicas.jpg",
        icono: "🔢",
        color: "#4cc9f0",
        ir: () => C.Nav.ir("aprender", { area: "mate" }),
        prog: progNumeros,
      },
      {
        nombre: "Mapa de aventuras",
        desc: "Zonas, misiones y desafíos con historia",
        img: "img/mapa.jpg",
        icono: "🗺️",
        color: "#f2994a",
        ir: () => C.Nav.ir("mundo"),
        prog: { hechas: resumenAventurero.misionesHechas, total: resumenAventurero.misiones },
      },
      {
        nombre: "Mundo de la cultura",
        desc: "Datos asombrosos, galería e imágenes",
        img: "img/cul-exploradores.webp",
        icono: "🌍",
        color: "#06d6a0",
        ir: () => C.Nav.ir("cultura"),
        prog: null, /* sin barra: la cultura no se 'completa', se descubre */
      },
      {
        nombre: "Mi personaje",
        desc: "Vístelo con los accesorios que ganas",
        img: "",
        icono: "🚀",
        color: "#9b5de5",
        personaje: true,
        ir: () => C.Nav.ir("aventurero"),
        prog: { hechas: resumenAventurero.desbloqueados, total: resumenAventurero.total },
      },
    ];
    const rejillaAv = el("div", "rejilla-areas rejilla-aventuras");
    aventuras.forEach((a) => {
      const pct = a.prog && a.prog.total ? Math.round((a.prog.hechas * 100) / a.prog.total) : 0;
      const card = el("button", "tarjeta-area");
      card.type = "button";
      card.style.setProperty("--c", a.color);
      vozBoton(card, a.nombre + ". " + a.desc);
      if (a.img) {
        const img = document.createElement("img");
        img.className = "img-area";
        img.src = a.img;
        img.alt = "";
        img.setAttribute("aria-hidden", "true");
        img.loading = "lazy";
        img.decoding = "async";
        card.appendChild(img);
      } else if (a.personaje) {
        /* El aventurero del niño preside su propia tarjeta */
        const escenario = el("span", "img-area img-icono img-personaje");
        escenario.setAttribute("aria-hidden", "true");
        escenario.innerHTML = perfil ? avatarHTML(perfil, "avatar-personaje-tarjeta") : "🚀";
        card.appendChild(escenario);
      } else {
        const iconoGrande = el("span", "img-area img-icono", a.icono);
        iconoGrande.setAttribute("aria-hidden", "true");
        card.appendChild(iconoGrande);
      }
      const infoAv = el("div", "info-area");
      infoAv.innerHTML =
        "<strong>" +
        a.nombre +
        "</strong><small>" +
        a.desc +
        "</small>" +
        (a.prog
          ? "<div class='barra'><i style='width:" + pct + "%;background:" + a.color + "'></i></div><small>" +
            (a.prog.hechas ? a.prog.hechas + " de " + a.prog.total : "¡Empieza hoy!") +
            "</small>"
          : "<small class='micro-frase'>¡Descubre, escucha y aprende!</small>") +
        "<span class='btn-mini-av'>Entrar ▶️</span>";
      card.appendChild(infoAv);
      card.onclick = () => {
        C.Sfx.clic();
        a.ir();
      };
      rejillaAv.appendChild(card);
    });
    cont.appendChild(rejillaAv);

    /* D. Continuar aprendiendo: reanudar la actividad pendiente.
       Primero la lección del colegio (currículo con grado), y si no
       hay, la actividad de letras o números de siempre. */
    if (window.MATERIAS_HOME && typeof window.MATERIAS_HOME.anexarContinuacion === "function") {
      window.MATERIAS_HOME.anexarContinuacion(cont);
    }
    if (d.ultimo && d.ultimo.nivel) {
      const niv = C.Niveles.info(d.ultimo.nivel);
      const listaN = rutaDe(d.ultimo.nivel);
      const infoN = C.Store.data.niveles[d.ultimo.nivel] || { hechas: [] };
      const hechasN = listaN.filter((l) => infoN.hechas.indexOf(l.id) !== -1).length;
      const pctN = listaN.length ? Math.round((hechasN * 100) / listaN.length) : 0;
      cont.appendChild(el("h2", "subtitulo", "⏯️ ¡Sigamos desde donde quedamos!"));
      const zonaCont = el("div", "zona-continuar");
      const card = el("button", "tarjeta-continuar");
      card.type = "button";
      vozBoton(card, "Continuar aprendiendo: " + niv.nombre);
      card.innerHTML =
        "<div class='continuar-info'>" +
        "<strong>" +
        niv.nombre +
        "</strong><small>Actividad " +
        Math.min(hechasN + 1, listaN.length) +
        " de " +
        listaN.length +
        " · " +
        pctN +
        "%</small>" +
        "<div class='barra'><i style='width:" +
        pctN +
        "%'></i></div></div>" +
        "<span class='btn-continuar'>⏯️ Continuar</span>";
      card.onclick = () => {
        C.Sfx.clic();
        irALeccionSiguiente(d.ultimo.nivel);
      };
      zonaCont.appendChild(card);
      cont.appendChild(zonaCont);
    }

    /* E. Logros recientes: las últimas lecciones del colegio terminadas */
    cont.appendChild(el("h2", "subtitulo", "🏆 ¡Mira todo lo que ya lograste!"));
    const filaLogros = el("div", "fila-logros");
    if (d.curriculo) {
      const recientes = [];
      Object.keys(d.curriculo).forEach((id) => {
        const e = d.curriculo[id];
        if (e && e.hecho && e.fecha) {
          recientes.push({ id: id, fecha: e.fecha, estrellas: e.estrellas || 0 });
        }
      });
      recientes.sort((x, y) => y.fecha - x.fecha);
      recientes.slice(0, 3).forEach((r) => {
        const tema = window.CURRICULO.temaPorId(r.id);
        if (!tema) return;
        const mat = window.CURRICULO.materiaPorId(tema.materia);
        const chip = el("button", "chip-logro");
        chip.type = "button";
        chip.innerHTML =
          "<span class='icono-logro' aria-hidden='true'>" +
          (mat && mat.icono ? mat.icono : "📘") +
          "</span>" +
          "<span class='texto-logro'><strong>" +
          tema.nombre +
          "</strong><small>" +
          (mat ? mat.nombre : "") +
          "</small></span>" +
          "<span class='estrellas-logro' aria-hidden='true'>" +
          (r.estrellas > 0 ? "⭐".repeat(Math.min(r.estrellas, 5)) : "✅") +
          "</span>";
        chip.onclick = () => {
          C.Sfx.clic();
          C.Nav.ir("tema", { id: r.id });
        };
        filaLogros.appendChild(chip);
      });
    }
    if (!filaLogros.children.length) {
      filaLogros.appendChild(
        el("p", "sugerencia", "Completa una lección y pronto verás tu primer logro aquí. ¡Tú puedes! 🌟")
      );
    }
    cont.appendChild(filaLogros);

    /* menú de todas las secciones */
    cont.appendChild(el("h3", "subtitulo", "🎪 Más formas de aprender jugando"));
    const secciones = [
      { id: "aprender", icono: "📖", nombre: "Aprender", desc: "Lecciones ordenadas" },
      { id: "escuchar", icono: "👂", nombre: "Escuchar", desc: "Sonidos y palabras" },
      { id: "jugar", icono: "🎮", nombre: "Jugar", desc: "Minijuegos" },
      { id: "practicar", icono: "✍️", nombre: "Practicar", desc: "Trazos y palabras" },
      { id: "mundo", icono: "🐲", nombre: "Aventuras", desc: "Misiones con historia" },
      { id: "cultura", icono: "🌍", nombre: "Cultura", desc: "Datos con imágenes" },
      { id: "mascota", icono: "🐾", nombre: "Mi mascota", desc: "Cuidado y cariño" },
      { id: "escape", icono: "🔐", nombre: "Escape rooms", desc: "Misterios y candados" },
      { id: "taller", icono: "🛠️", nombre: "Taller de inventos", desc: "Construye con retos" },
      { id: "detective", icono: "🕵️", nombre: "Detectives", desc: "Investiga y resuelve casos" },
      { id: "concurso", icono: "🏆", nombre: "Concurso", desc: "5 minijuegos distintos" },
      { id: "laboratorio", icono: "🔬", nombre: "Laboratorio", desc: "Sonidos y sílabas" },
      { id: "aventurero", icono: "🚀", nombre: "Mi Aventurero", desc: "Tu personaje y tus misiones" },
      { id: "aventura", icono: "🗺️", nombre: "Mi aventura", desc: "Mis estrellas" },
    ];
    const menu = el("div", "menu-secciones");
    secciones.forEach((s) => {
      const b = el("button", "tarjeta-seccion");
      b.innerHTML =
        '<span class="icono-seccion">' +
        s.icono +
        "</span><span class='nombre-seccion'>" +
        s.nombre +
        "</span><span class='desc-seccion'>" +
        s.desc +
        "</span>";
      b.onmouseenter = () => C.Voz.decir("Sección " + s.nombre + ". " + s.desc);
      b.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir(s.id);
      };
      menu.appendChild(b);
    });
    cont.appendChild(menu);

    /* Mascota educativa: el búho maestro da consejos al tocarlo */
    const consejosBubo = [
      "Si algo es difícil, respira hondo e inténtalo otra vez. ¡Tú puedes!",
      "Equivocarse también enseña. Cada intento te hace más fuerte.",
      "Repite el sonido en voz alta. ¡Te ayuda a recordarlo!",
      "Cada estrella que ganas hace crecer tu aventura.",
      "Las letras esconden sonidos. ¡Tócalas y escúchalas!",
      "Hoy es un buen día para aprender una letra nueva.",
    ];
    /* El búho alterna entre consejos de estudio y datos de cultura general:
       así nunca se repite tanto y siempre enseña algo nuevo. */
    let consejoBuboAnterior = "";
    function consejoBubo() {
      const conCultura = window.CULTURA && Math.random() < 0.4;
      let texto;
      if (conCultura) {
        const d = window.CULTURA.dato();
        texto = d.d;
      } else do {
        texto = consejosBubo[Math.floor(Math.random() * consejosBubo.length)];
      } while (texto === consejoBuboAnterior);
      consejoBuboAnterior = texto;
      return texto;
    }
    /* =========================================================
       Panel de Mi Aventurero: las misiones para vestir al
       personaje, con barra de desplazamiento y botón para
       plegar el panel.
       ========================================================= */
    const est = window.AVENTURERO.estado();
    const abierto = est.panelAbierto !== false;
    const panel = el("div", "panel-aventurero" + (abierto ? " abierto" : ""));

    /* Cabecera del panel */
    const cabPanel = el("div", "panel-aventurero-cab");
    const resumenAv = window.AVENTURERO.resumen();
    const cabTexto = el("div", "panel-aventurero-titulo");
    cabTexto.innerHTML =
      "<strong>🚀 Mi Aventurero</strong>" +
      "<small>🎒 " + resumenAv.desbloqueados + " de " + resumenAv.total + " accesorios · 🏅 " +
      resumenAv.misionesHechas + " de " + resumenAv.misiones + " misiones</small>";
    cabPanel.appendChild(cabTexto);

    const bPlegar = el("button", "btn-plegar", abierto ? "👆 Ocultar" : "👇 Mostrar misiones");
    bPlegar.setAttribute("aria-expanded", abierto ? "true" : "false");
    bPlegar.onclick = () => {
      C.Sfx.clic();
      const st = window.AVENTURERO.estado();
      st.panelAbierto = st.panelAbierto === false;
      C.Store.save();
      window.pantalla_home();
    };
    cabPanel.appendChild(bPlegar);
    panel.appendChild(cabPanel);

    /* Cuerpo: personaje + tira de misiones con desplazamiento */
    const cuerpo = el("div", "panel-aventurero-cuerpo");
    const figura = el("div", "panel-aventurero-figura");
    /* Si el aventurero no tiene ningún accesorio todavía, en vez de
       mostrar el personaje "en ropa interior" se muestra el animalito
       del perfil: se ve más amable y motiva a ganar la primera pieza. */
    let sinAccesorios = false;
    try {
      sinAccesorios = Object.keys(window.AVENTURERO.equipado() || {}).length === 0;
    } catch (e) {}
    if (sinAccesorios) {
      figura.classList.add("figura-inicial");
      figura.innerHTML = avatarInner(C.Store.perfilActivo);
      figura.setAttribute("aria-label", "Tu animalito. Cuando ganes una misión vestirás a tu Aventurero.");
    } else {
      const montajePanel = montarAventurero(figura, window.AVENTURERO.equipado(), {});
    }
    figura.onclick = () => {
      C.Sfx.clic();
      C.Nav.ir("aventurero");
    };
    const figCaja = el("div", "panel-aventurero-personaje");
    figCaja.appendChild(figura);
    const figPie = el("div", "panel-aventurero-pie", sinAccesorios ? "👆 Gana tu primera misión" : "👆 Tócalo");
    figCaja.appendChild(figPie);
    cuerpo.appendChild(figCaja);
    

    /* Tira horizontal de misiones con filtros por área (34 fichas
       recorren 6.100px de scroll: con pastillas el niño entra al
       grupo que quiere). Reutiliza los grupos de "Mis misiones". */
    const misiones = window.AV_MISIONES.todas();
    let filtroArea = "todas";
    const etiquetasFiltro = [
      { id: "todas", icono: "🌟", nombre: "Todas" },
      { id: "aventura", icono: "🧭", nombre: "Aventura" },
      { id: "lectura", icono: "📖", nombre: "Letras" },
      { id: "mate", icono: "🔢", nombre: "Números" },
      { id: "razonamiento", icono: "🧠", nombre: "Memoria y lógica" },
    ];
    const filaFiltros = el("div", "fila-filtros-misiones");
    const chipsFiltro = [];
    etiquetasFiltro.forEach((f2) => {
      const nArea = f2.id === "todas"
        ? misiones.length
        : misiones.filter((m) => m.area === f2.id).length;
      if (!nArea) return; /* área vacía: no se muestra */
      const chip = el("button", "chip-filtro-misiones" + (f2.id === "todas" ? " activo" : ""));
      chip.type = "button";
      chip.setAttribute("aria-pressed", f2.id === "todas" ? "true" : "false");
      chip.innerHTML =
        "<span aria-hidden='true'>" + f2.icono + "</span><strong>" +
        f2.nombre + " · " + nArea + "</strong>";
      chip.onclick = () => {
        C.Sfx.clic();
        filtroArea = f2.id;
        chipsFiltro.forEach((c2) => {
          const ok = c2 === chip;
          c2.classList.toggle("activo", ok);
          c2.setAttribute("aria-pressed", ok ? "true" : "false");
        });
        llenarTira();
      };
      chipsFiltro.push(chip);
      filaFiltros.appendChild(chip);
    });
    cuerpo.appendChild(filaFiltros);

    const tira = el("div", "tira-misiones");
    const llenarTira = () => {
      tira.innerHTML = "";
      misiones.forEach((m) => {
        if (filtroArea !== "todas" && m.area !== filtroArea) return;
        const hecha = window.AVENTURERO.misionCompletada(m.id);
        const disponible = window.AV_MISIONES.disponible(m.id);
        const prog = window.AVENTURERO.progresoMision(m.id);
        const rec = m.recompensa ? window.AV_ACCESORIOS.info(m.recompensa) : null;

        const destinoHome = disponible && !hecha ? destinoDeMision(m) : null;
        const ficha = el("button", "ficha-mision-home" + (hecha ? " hecha" : "") + (disponible ? "" : " bloqueada"));
        ficha.innerHTML =
          "<span class='fmh-icono'>" + (hecha ? "✅" : m.icono) + "</span>" +
          "<span class='fmh-titulo'>" + m.titulo + "</span>" +
          "<span class='fmh-prog'>" + (hecha ? "¡Hecha!" : disponible ? prog.texto : "🔒") + "</span>" +
          "<span class='fmh-recompensa'>" + (rec ? rec.nombre : "🌟 Felicitación") + "</span>" +
          (destinoHome ? "<span class='fmh-donde'>▶️ " + (destinoHome.zona || destinoHome.titulo || "") + "</span>" : "");
        ficha.onclick = () => {
          C.Sfx.clic();
          if (destinoHome) {
            irAdestino(destinoHome);
          } else {
            C.Nav.ir("misiones_av");
          }
        };
        tira.appendChild(ficha);
      });
    };
    llenarTira();
    cuerpo.appendChild(tira);
    panel.appendChild(cuerpo);
    cont.appendChild(panel);

    const cardMascota = el("button", "tarjeta-mascota");
    const imgMascota = document.createElement("img");
    imgMascota.className = "img-mascota";
    imgMascota.src = "img/mascota.jpg";
    imgMascota.alt = "Búho maestro";
    imgMascota.loading = "lazy";
    imgMascota.decoding = "async";
    cardMascota.appendChild(imgMascota);
    const textoMascota = el("span", "texto-mascota");
    textoMascota.innerHTML = "<strong>🦉 Mi maestro búho</strong><small>Tócame: consejos y datos curiosos</small>";
    cardMascota.appendChild(textoMascota);
    cardMascota.onclick = () => {
      C.Sfx.clic();
      C.Guia.habla(consejoBubo());
    };
    cont.appendChild(cardMascota);

    C.Guia.habla(
      d.ultimo && d.ultimo.nivel ? D.frases.bienvenida2 : d.nombre ? "¡Hola " + d.nombre + "! " + D.frases.bienvenida : D.frases.bienvenida
    );
  };

  /* Selector de área (letras / números) reutilizable */
  let areaAprender = "lectura";
  function tabsArea(areaActual, pantalla) {
    const tabs = el("div", "tabs-area");
    [
      { id: "lectura", icono: "📖", nombre: "Letras" },
      { id: "mate", icono: "🔢", nombre: "Números" },
    ].forEach((t) => {
      const b = el("button", "tab-area" + (t.id === areaActual ? " activa" : ""), t.icono + " " + t.nombre);
      b.setAttribute("aria-pressed", t.id === areaActual ? "true" : "false");
      b.onclick = () => {
        if (t.id === areaActual) return;
        C.Sfx.clic();
        C.Nav.reemplazar(pantalla, { area: t.id });
      };
      tabs.appendChild(b);
    });
    return tabs;
  }

  /* =========================================================
     Pantalla: Aprender (lista de niveles por área)
     ========================================================= */
  window.pantalla_aprender = function (datos) {
    if (datos && datos.area) areaAprender = datos.area === "mate" ? "mate" : "lectura";
    const area = areaAprender;
    const cont = $("#contenido-aprender");
    cont.innerHTML = "";
    cont.appendChild(
      cabecera(
        area === "mate" ? "🔢 Aprender matemáticas" : "📖 Aprender a leer",
        area === "mate" ? "Números, formas y problemas paso a paso." : "Elige el mundo al que quieres ir."
      )
    );
    cont.appendChild(
      bannerSeccion(
        area === "mate" ? "img/matematicas.jpg" : "img/lectura.jpg",
        area === "mate" ? "Números, formas y bloques de colores" : "Libros, letras de madera y tarjetas ilustradas"
      )
    );
    cont.appendChild(tabsArea(area, "aprender"));

    C.Niveles.deArea(area).forEach((n) => {
      const info = C.Store.data.niveles[n.id] || { hechas: [], total: 0, dominio: 0 };
      const lista = rutaDe(n.id);
      const total = lista.length;
      const hechas = info.hechas.filter((h) => lista.some((l) => l.id === h)).length;
      const abierto = C.Store.nivelDesbloqueado(n.id);

      const card = el("div", "tarjeta-nivel" + (abierto ? "" : " bloqueada"));
      card.style.setProperty("--c", n.color);
      vozBoton(card, n.nombre + ". " + n.descripcion);
      card.style.setProperty("--cc", n.colorClaro);
      const pct = total ? Math.round((hechas / total) * 100) : 0;
      card.innerHTML =
        '<span class="icono-nivel">' +
        n.icono +
        "</span>" +
        "<div class='info-nivel'><h3>" +
        n.nombre +
        "</h3><p>" +
        n.descripcion +
        "</p>" +
        "<div class='barra'><i style='width:" +
        pct +
        "%'></i></div><small>" +
        hechas +
        " de " +
        total +
        " actividades</small></div>" +
        (abierto ? "" : "<span class='candado'>🔒</span>");

      if (abierto) {
        card.onclick = () => {
          C.Sfx.clic();
          C.Nav.ir("nivel", { nivel: n.id });
        };
      } else {
        card.onclick = () => {
          C.Sfx.mal();
          C.Guia.habla("Este mundo todavía está cerrado. Termina el anterior para abrirlo.");
        };
      }
      cont.appendChild(card);
    });
    cont.appendChild(volverAtras());
    C.Guia.habla(
      area === "mate"
        ? "Estos son los mundos de los números. Toca el primero para comenzar."
        : "Estos son los mundos de nuestra aventura. Toca el primero para comenzar."
    );
  };

  /* =========================================================
     Pantalla: detalle de nivel
     ========================================================= */
  window.pantalla_nivel = function (datos) {
    const nivelId = (datos && datos.nivel) || 1;
    const niv = C.Niveles.info(nivelId);
    const cont = $("#contenido-nivel");
    cont.innerHTML = "";
    cont.appendChild(cabecera(niv.icono + " " + niv.nombre, niv.descripcion));

    const lista = lecciones(nivelId);
    const info = C.Store.data.niveles[nivelId] || { hechas: [] };

    /* Si se llega desde una misión, se abre sola la actividad que
       completa ese objetivo. */
    if (datos && datos.actividad !== undefined && datos.actividad !== null) {
      const indice = Math.max(0, Math.min(lista.length - 1, datos.actividad));
      setTimeout(() => {
        try {
          ejecutarLeccion(nivelId, indice);
        } catch (e) {
          /* si algo falla, se muestra el mundo igualmente */
        }
      }, 260);
    }

    const btnGran = el("button", "btn-huge primario", "▶️<span>" + (info.hechas.length ? "Continuar" : "Comenzar") + "</span>");
    btnGran.onclick = () => {
      C.Sfx.clic();
      irALeccionSiguiente(nivelId);
    };
    cont.appendChild(btnGran);

    const rejilla = el("div", "rejilla-lecciones");
    lista.forEach((l, i) => {
      const hecha = info.hechas.indexOf(l.id) !== -1;
      const b = el("button", "leccion" + (hecha ? " hecha" : ""));
      b.innerHTML = "<span class='num'>" + (hecha ? "⭐" : i + 1) + "</span><span>" + l.titulo + "</span>";
      b.onclick = () => {
        C.Sfx.clic();
        ejecutarLeccion(nivelId, i);
      };
      vozBoton(b, "Actividad " + (i + 1) + ": " + l.titulo);
      rejilla.appendChild(b);
    });
    cont.appendChild(rejilla);
    cont.appendChild(volverAtras());
    C.Guia.habla("Aquí están las actividades de " + niv.nombre + ". Toca la primera para empezar.");
  };

  /* Primera actividad pendiente en CUALQUIERA de las dos áreas
     (letras o números), respetando el desbloqueo por maestría. */
  function siguientePendiente() {
    const areas = ["lectura", "mate"];
    for (let i = 0; i < areas.length; i++) {
      const niveles = C.Niveles.deArea(areas[i]);
      for (let j = 0; j < niveles.length; j++) {
        const niv = niveles[j];
        if (!C.Store.nivelDesbloqueado(niv.id)) continue;
        const lista = rutaDe(niv.id);
        const info = C.Store.data.niveles[niv.id] || { hechas: [] };
        if (lista.some((l) => info.hechas.indexOf(l.id) === -1)) return niv.id;
      }
    }
    return 1;
  }

  /* Ejecuta la lección i del nivel, o la siguiente pendiente */
  function irALeccionSiguiente(nivelId) {
    if (!C.Store.nivelDesbloqueado(nivelId)) {
      C.Guia.habla("Termina el mundo anterior para abrir este.");
      C.Nav.ir("aprender", { area: C.Niveles.area(nivelId) });
      return;
    }
    const lista = lecciones(nivelId);
    const info = C.Store.data.niveles[nivelId] || { hechas: [] };
    let idx = lista.findIndex((l) => info.hechas.indexOf(l.id) === -1);
    if (idx === -1) idx = 0;
    C.Store.data.ultimo = { nivel: nivelId, indice: idx };
    C.Store.save();
    ejecutarLeccion(nivelId, idx);
  }

  function ejecutarLeccion(nivelId, indice) {
    const lista = lecciones(nivelId);
    if (indice >= lista.length) {
      /* terminó el nivel */
      const niv = C.Niveles.info(nivelId);
      C.Guia.habla("¡Terminaste " + niv.nombre + "! Eres increíble.");
      C.Nav.reemplazar("aventura", { area: C.Niveles.area(nivelId) });
      return;
    }
    const desc = lista[indice];
    desc.nivel = nivelId;
    C.Store.data.ultimo = { nivel: nivelId, indice: indice };
    C.Store.save();
    /* El total guarda solo actividades base: los refuerzos adaptativos
       no cuentan como currículo del nivel. */
    const totalBase = lista.filter((l) => String(l.id).indexOf("refuerzo-") !== 0).length;
    C.Store.nivelInfo(nivelId).total = Math.max(C.Store.nivelInfo(nivelId).total, totalBase);
    C.Store.save();

    C.Nav.ir("actividad", {
      desc: desc,
      alTerminar: (estrellas) => mostrarRecompensa(nivelId, indice, estrellas),
    });
  }

  function mostrarRecompensa(nivelId, indice, estrellas) {
    const lista = lecciones(nivelId);
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    const estrellasTxt = "⭐".repeat(estrellas) + "☆".repeat(3 - estrellas);
    cuerpo.appendChild(el("h2", "", "¡Lo lograste!"));
    cuerpo.appendChild(el("p", "estrellas-grandes", estrellasTxt));
    if (estrellas === 3) cuerpo.appendChild(el("p", "", "¡Sin errores! Eres increíble."));
    else if (estrellas === 2) cuerpo.appendChild(el("p", "", "¡Muy bien! Casi perfecto."));
    else cuerpo.appendChild(el("p", "", "Lo intentaste muchas veces y eso vale mucho. ¡Sigue así!"));

    /* Avanza a la primera actividad BASE pendiente. Se busca por id
       (no por índice) y se ignoran los refuerzos, porque la lista
       puede cambiar a mitad de lección si un contenido débil se
       superó o apareció mientras tanto. */
    const hechas = (C.Store.data.niveles[nivelId] || {}).hechas || [];
    let sig = lista.findIndex(
      (l) => String(l.id).indexOf("refuerzo-") !== 0 && hechas.indexOf(l.id) === -1
    );
    if (sig === -1) sig = lista.length;

    const fila = el("div", "fila-botones");
    if (sig < lista.length) {
      const seguir = el("button", "btn grande primario", "▶️ Seguir aprendiendo");
      seguir.onclick = () => {
        C.Sfx.clic();
        overlay.classList.remove("visible");
        ejecutarLeccion(nivelId, sig);
      };
      fila.appendChild(seguir);
    } else {
      const aventura = el("button", "btn grande primario", "🗺️ Ver mi aventura");
      aventura.onclick = () => {
        C.Sfx.clic();
        overlay.classList.remove("visible");
        C.Nav.reemplazar("aventura", { area: C.Niveles.area(nivelId) });
      };
      fila.appendChild(aventura);
    }
    const btnMenu = el("button", "btn grande", "🏠 Menú");
    btnMenu.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("aprender", { area: C.Niveles.area(nivelId) });
    };
    fila.appendChild(btnMenu);
    cuerpo.appendChild(fila);
    overlay.classList.add("visible");
    C.celebrar(cuerpo);
  }

  /* =========================================================
     Pantalla: actividad (motor)
     ========================================================= */
  window.pantalla_actividad = function (datos) {
    if (!datos || !datos.desc) {
      C.Nav.reemplazar("aprender");
      return;
    }
    const cb = (estrellas) => {
      if (datos.alTerminar) datos.alTerminar(estrellas);
      /* Si al terminar la actividad se ha completado alguna misión
         del aventurero, se celebra aquí (en el mismo cartel, para
         no encimar pantallas). */
      mostrarRecompensaAventurero();
    };
    ACT.ejecutar(datos.desc, cb);
  };

  /* =========================================================
     Recompensa del aventurero: se añade al cartel de la
     actividad que ya está visible. Nunca falla si no hay nada.
     ========================================================= */
  function mostrarRecompensaAventurero() {
    if (!window.AVENTURERO) return;
    let nuevas = [];
    try {
      nuevas = window.AVENTURERO.pendientesMisiones();
    } catch (e) {
      return;
    }
    if (!nuevas.length) return;

    const cuerpo = $("#recompensa-cuerpo");
    if (!cuerpo) return;
    window.AVENTURERO.limpiarPendientes();

    /* Puede haber más de una: senestedan todas las recompensas */
    nuevas.forEach(function (info) {
      const m = info.mission;
      const acc = info.recompensa;

      const caja = el("div", "recompensa-aventurero");
      caja.innerHTML =
        "<div class='rec-av-titulo'>" + (acc ? "🎁 ¡Nuevo accesorio!" : "🏅 ¡Misión completada!") + "</div>" +
        "<div class='rec-av-mision'>" + m.icono + " " + m.titulo + "</div>";
      if (acc) {
        caja.innerHTML +=
          "<div class='rec-av-acc'>" +
          "<span class='miniatura-acc grande'>" + window.AV_PERSONAJE.mini(acc) + "</span>" +
          "<span><strong>" + acc.nombre + "</strong><br><small>" + acc.descripcion + "</small></span>" +
          "</div>" +
          "<p class='rec-av-mensaje'>" + m.mensaje + "</p>";
      } else {
        caja.innerHTML += "<p class='rec-av-mensaje'>" + m.mensaje + "</p>";
      }
      cuerpo.appendChild(caja);
    });

    /* Botones: equipar el último accesorio ganado (o ir al armario) */
    const conAccesorio = nuevas.filter(function (n) { return !!n.recompensa; });
    const ultimo = conAccesorio.length ? conAccesorio[conAccesorio.length - 1].recompensa : null;

    const fila = el("div", "fila-botones");
    if (ultimo) {
      const bPoner = el("button", "btn grande primario", "👕 Ponérmelo");
      bPoner.onclick = () => {
        C.Sfx.clic();
        window.AVENTURERO.equipar(ultimo.id);
        C.Guia.habla("¡Te has puesto " + ultimo.nombre + "!");
        const ov = $("#overlay-recompensa");
        ov.classList.remove("visible");
        C.Nav.reemplazar("aventurero");
      };
      fila.appendChild(bPoner);

      const bArmario = el("button", "btn grande", "🎒 Ver el armario");
      bArmario.onclick = () => {
        C.Sfx.clic();
        const ov = $("#overlay-recompensa");
        ov.classList.remove("visible");
        C.Nav.reemplazar("armario");
      };
      fila.appendChild(bArmario);
    }
    cuerpo.appendChild(fila);

    try {
      C.celebrar(cuerpo);
    } catch (e) {}
  }

  /* =========================================================
     Pantalla: Escuchar
     ========================================================= */
  window.pantalla_escuchar = function () {
    const cont = $("#contenido-escuchar");
    cont.innerHTML = "";
    cont.appendChild(cabecera("👂 Escuchar", "Entrena tu oído con sonidos, palabras e historias."));

    const letras = letrasAprendidas();
    const juegos = [
      {
        icono: "🔤",
        nombre: "Letras y sonidos",
        desc: "Escucha una letra y encuéntrala",
        hacer: () => ({ tipo: "find-letter", titulo: "Letras y sonidos", n: 5, nivel: 1, params: { pool: letras } }),
      },
      {
        icono: "🖼️",
        nombre: "Palabra e imagen",
        desc: "Escucha y toca la imagen",
        hacer: () => ({ tipo: "pick-image", titulo: "Palabra e imagen", n: 5, nivel: 1, params: { pool: D.objetos } }),
      },
      {
        icono: "🥇",
        nombre: "Sonido al principio",
        desc: "¿Con qué letra empieza?",
        hacer: () => ({ tipo: "initial-sound", titulo: "Sonido al principio", n: 5, nivel: 2, params: { pool: D.objetos } }),
      },
      {
        icono: "🏁",
        nombre: "Sonido al final",
        desc: "¿Con qué letra termina?",
        hacer: () => ({ tipo: "final-sound", titulo: "Sonido al final", n: 4, nivel: 2, params: { pool: D.objetos } }),
      },
      {
        icono: "🗣️",
        nombre: "Haz lo que te digo",
        desc: "Sigue instrucciones habladas",
        hacer: () => ({ tipo: "follow", titulo: "Haz lo que te digo", n: 4, nivel: 2, params: { letras: letras, pool: D.objetos } }),
      },
      {
        icono: "💬",
        nombre: "Escucho una oración",
        desc: "Escucha y responde",
        hacer: () => ({ tipo: "sentence-listen", titulo: "Escucho una oración", n: 3, nivel: 5, params: { pool: D.oraciones } }),
      },
      {
        icono: "📚",
        nombre: "Un cuento",
        desc: "Escucha un cuento bonito",
        hacer: () => ({ tipo: "story", titulo: "Un cuento", n: 1, nivel: 6, params: {} }),
      },
    ];
    pintarMenuActividades(cont, juegos);
    cont.appendChild(volverAtras());
    C.Guia.habla("Aquí entrenamos el oído. Elige una actividad y escucha con atención.");
  };

  /* =========================================================
     Pantalla: Jugar
     ========================================================= */
  window.pantalla_jugar = function () {
    const cont = $("#contenido-jugar");
    cont.innerHTML = "";
    cont.appendChild(cabecera("🎮 Jugar", "Minijuegos para practicar lo que aprendes."));
    cont.appendChild(bannerSeccion("img/matematicas.jpg", "Números, formas y bloques de colores"));

    pintarMenuActividades(cont, JUEGOS.CATALOGO);
    cont.appendChild(volverAtras());
    C.Guia.habla("¡Hora de jugar! Elige un juego, escoge la dificultad y practica.");
  };

  /* =========================================================
     Pantalla: Practicar
     ========================================================= */
  window.pantalla_practicar = function () {
    const cont = $("#contenido-practicar");
    cont.innerHTML = "";
    cont.appendChild(cabecera("✍️ Practicar", "Escribe, ordena y repasa letras y palabras."));

    /* En Practicar solo se muestran los juegos de letras y palabras. */
    const deLetras = ["trace", "reconocer", "order-syl", "build-word", "fill-word", "type-word", "leer-oraciones"];
    const juegos = JUEGOS.CATALOGO.filter((j) => deLetras.indexOf(j.id) !== -1);
    pintarMenuActividades(cont, juegos);
    const nota = el(
      "p",
      "nota-adulto",
      "💡 El trazo con el ratón ayuda a coordinar la vista y la mano, pero no reemplaza el lápiz y el papel. Practica también escribiendo en cuaderno."
    );
    cont.appendChild(nota);
    cont.appendChild(volverAtras());
    C.Guia.habla("Aquí practicamos cómo se escriben las letras y las palabras.");
  };

  /* Menú de juegos con selector de dificultad por juego.
     Cada tarjeta muestra el botón de dificultad y arranca una
     VARIANTE distinta cada vez que se juega. */
  function pintarMenuActividades(cont, juegos) {
    const rejilla = el("div", "rejilla-juegos");
    juegos.forEach((j) => {
      const tarjeta = el("div", "tarjeta-juego tarjeta-juego-con-dif");

      const b = el("button", "juego-lanzar");
      b.innerHTML =
        "<span class='icono-juego'>" +
        j.icono +
        "</span><span class='nombre-juego'>" +
        j.nombre +
        "</span><span class='desc-juego'>" +
        j.desc +
        "</span>";
      b.onclick = () => {
        C.Sfx.clic();
        lanzarJuegoLibre(j);
      };
      vozBoton(b, j.nombre + ". " + j.desc);
      tarjeta.appendChild(b);

      /* Selector de dificultad guardado por perfil */
      const nivel = JUEGOS.dificultad(j.id);
      const fila = el("div", "juego-dificultad");
      fila.setAttribute("role", "group");
      fila.setAttribute("aria-label", "Dificultad de " + j.nombre);
      const ops = [
        { k: "facil", t: "🌱 Fácil" },
        { k: "medio", t: "⭐ Medio" },
        { k: "dificil", t: "🔥 Difícil" },
      ];
      ops.forEach((o) => {
        const bot = el("button", "juego-dif" + (o.k === nivel ? " activo" : ""), o.t);
        bot.setAttribute("data-n", o.k);
        bot.onclick = (ev) => {
          ev.stopPropagation();
          C.Sfx.clic();
          JUEGOS.guardarDificultad(j.id, o.k);
          if (j.id === "sopa") C.Store.data.sopaNivel = o.k;
          C.Store.save();
          C.$$(".juego-dif", fila).forEach((x) => x.classList.remove("activo"));
          bot.classList.add("activo");
          C.Guia.habla("Dificultad " + o.t.replace(/[^\w\sÁÉÍÓÚáéíóúÑñ]/g, "").trim() + " para " + j.nombre + ".");
        };
        fila.appendChild(bot);
      });
      tarjeta.appendChild(fila);
      rejilla.appendChild(tarjeta);
    });
    cont.appendChild(rejilla);
  }

  function lanzarJuegoLibre(j, repeticion) {
    /* Genera una variante nueva del juego según su dificultad guardada */
    const d = JUEGOS.dificultad(j.id);
    let desc;
    if (typeof j.niveles === "object") {
      desc = JUEGOS.variante(j.id, d) || JUEGOS.variante(j.id, "facil");
    } else {
      desc = j.hacer();
    }
    if (!desc) {
      C.Guia.habla("Ese juego no está disponible.");
      return;
    }
    desc.id = "libre-" + j.id + "-" + (repeticion || 0);
    C.Nav.ir("actividad", {
      desc: desc,
      alTerminar: (estrellas) => mostrarRecompensaLibre(j, estrellas, (repeticion || 0) + 1),
    });
  }

  function mostrarRecompensaLibre(j, estrellas, n) {
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", "¡Muy bien!"));
    cuerpo.appendChild(el("p", "estrellas-grandes", "⭐".repeat(estrellas) + "☆".repeat(3 - estrellas)));
    cuerpo.appendChild(el("p", "", "Ganaste estrellas por esforzarte."));

    const fila = el("div", "fila-botones");
    const otro = el("button", "btn grande primario", "🔁 Otra vez");
    otro.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      lanzarJuegoLibre(j, n);
    };
    const menu = el("button", "btn grande", "🏠 Menú");
    menu.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.atras();
    };
    fila.appendChild(otro);
    fila.appendChild(menu);
    cuerpo.appendChild(fila);
    overlay.classList.add("visible");
    C.celebrar(cuerpo);
  }

  /* =========================================================
     Pantalla: Mi aventura (mapa de lectura o de matemáticas)
     ========================================================= */
  let areaAventura = "lectura";
  window.pantalla_aventura = function (datos) {
    if (datos && datos.area) areaAventura = datos.area === "mate" ? "mate" : "lectura";
    const area = areaAventura;
    const d = C.Store.data;
    const cont = $("#contenido-aventura");
    cont.innerHTML = "";
    cont.appendChild(cabecera("🗺️ Mi aventura", "Mira todo lo que has aprendido."));

    cont.appendChild(el("p", "resumen-estrellas", "⭐ " + d.estrellas + " estrellas"));
    cont.appendChild(tabsArea(area, "aventura"));

    /* Mapa ilustrado con los niveles colocados sobre el camino */
    const mapaIlus = el("div", "mapa-ilustrado");
    const imgMapa = document.createElement("img");
    imgMapa.className = "img-mapa";
    imgMapa.src = "img/mapa.jpg";
    imgMapa.alt = "Mapa de la aventura";
    mapaIlus.appendChild(imgMapa);

    /* Posición de cada nivel sobre el mapa (% del ancho y alto) */
    const posicionesNiveles = [
      { x: 10, y: 62 },
      { x: 26, y: 40 },
      { x: 42, y: 66 },
      { x: 58, y: 42 },
      { x: 73, y: 66 },
      { x: 88, y: 40 },
    ];
    C.Niveles.deArea(area).forEach((n, i) => {
      const abierto = C.Store.nivelDesbloqueado(n.id);
      const info = d.niveles[n.id] || { hechas: [], total: 0 };
      const lista = rutaDe(n.id);
      const total = lista.length;
      const hechas = info.hechas.filter((h) => lista.some((l) => l.id === h)).length;
      const p = posicionesNiveles[i] || { x: 50, y: 50 };
      const badge = el("button", "badge-mundo" + (abierto ? "" : " bloqueado"));
      badge.style.left = p.x + "%";
      badge.style.top = p.y + "%";
      badge.style.setProperty("--c", n.color);
      badge.innerHTML =
        "<span class='icono-mundo'>" +
        n.icono +
        "</span><span class='nombre-mundo'>" +
        n.nombre +
        "</span><span class='estrellas-mundo'>" +
        (hechas ? "⭐ " + hechas + "/" + total : abierto ? "¡Nuevo!" : "🔒") +
        "</span>";
      if (abierto) {
        badge.onclick = () => {
          C.Sfx.clic();
          C.Nav.ir("nivel", { nivel: n.id });
        };
      } else {
        badge.onclick = () => {
          C.Sfx.mal();
          C.Guia.habla("Ese lugar se abre cuando termines el anterior. ¡Tú puedes!");
        };
      }
      mapaIlus.appendChild(badge);
    });
    cont.appendChild(mapaIlus);

    /* Insignias */
    cont.appendChild(el("h3", "subtitulo", "🏅 Mis medallas"));
    const insignias = el("div", "rejilla-insignias");
    D.insignias.forEach((i) => {
      const tiene = d.insignias.indexOf(i.id) !== -1;
      const b = el("div", "insignia" + (tiene ? " ganada" : " pendiente"));
      b.innerHTML =
        "<span class='icono-insignia'>" +
        (tiene ? i.icono : "🔒") +
        "</span><span class='nombre-insignia'>" +
        i.nombre +
        "</span><span class='desc-insignia'>" +
        i.desc +
        "</span>";
      insignias.appendChild(b);
    });
    /* Insignias del colegio (por materia): se muestran solo cuando
       ya se ganaron, para que la pared crezca con cada materia. */
    try {
      const CURR = window.CURRICULO;
      if (CURR && CURR.MATERIAS) {
        const porMateria = {};
        Object.keys(d.curriculo || {}).forEach(function (idT) {
          const e = d.curriculo[idT];
          if (e && e.hecho && typeof idT === "string") {
            const matId = idT.split("-")[1];
            if (matId) porMateria[matId] = (porMateria[matId] || 0) + 1;
          }
        });
        CURR.MATERIAS.forEach(function (m) {
          const n = porMateria[m.id] || 0;
          if (n >= 1) {
            const b = el("div", "insignia ganada insignia-materia");
            b.style.setProperty("--c", m.color || "#4cc9f0");
            b.innerHTML =
              "<span class='icono-insignia'>" + (m.icono || "📘") +
              "</span><span class='nombre-insignia'>" +
              (n >= 5 ? "¡Cinco temas de " + (m.corto || m.nombre) + "!" : "Primer tema de " + (m.corto || m.nombre)) +
              "</span><span class='desc-insignia'>" +
              (n >= 5 ? "Eres un experto en camino: sigue con más temas." : "¿Seguimos aprendiendo esta materia?") +
              "</span>";
            insignias.appendChild(b);
          }
        });
      }
      /* Fase 2: medallas conectadas al progreso real del colegio.
         - Una por cada unidad didACTica cuyo nAºmero de temas hechos
           alcance el total (window.UNID.unidadCompleta).
         - Una por cada repaso (unidad o materia) con nota >= 70%,
           leyendo data.evaluaciones["unidad:..."/"materia:..."]. */
      const UNID = window.UNID;
      const gradoJugador = d.grado || (C.Store.data && C.Store.data.grado) || null;
      if (gradoJugador && UNID && typeof UNID.unidadesDe === "function") {
        CURR.MATERIAS.forEach(function (m) {
          const unis = UNID.unidadesDe(gradoJugador, m.id);
          if (!unis) return;
          unis.forEach(function (u) {
            if (!UNID.unidadCompleta(u)) return;
            const b = el("div", "insignia ganada insignia-materia");
            b.style.setProperty("--c", m.color || "#ffd166");
            b.innerHTML =
              "<span class='icono-insignia'>" + (u.icono || "\u{1F3C5}") + "</span>" +
              "<span class='nombre-insignia'>Unidad completa: " + u.titulo + "</span>" +
              "<span class='desc-insignia'>Terminaste los " + u.total + " temas de esta unidad de " + (m.corto || m.nombre) + ".</span>";
            insignias.appendChild(b);
          });
        });
      }
      const repasosGanados = [];
      const evs = d.evaluaciones || {};
      Object.keys(evs).forEach(function (k) {
        const e = evs[k];
        if (!e || !e.total || !e.nota) return;
        const pct = Math.round((e.nota * 100) / e.total);
        if (pct < 70) return;
        let nombre = "";
        if (k.indexOf("materia:") === 0) {
          const mid = k.slice(8).split("-")[1];
          const mm = CURR.MATERIAS.filter(function (x) { return x.id === mid; })[0];
          nombre = "Repaso de " + (mm ? (mm.corto || mm.nombre) : "");
        } else if (k.indexOf("unidad:") === 0) {
          const mid = k.split("-")[2] || "";
          const mm = CURR.MATERIAS.filter(function (x) { return x.id === mid; })[0];
          nombre = "Repaso de unidad de " + (mm ? (mm.corto || mm.nombre) : "");
        }
        if (!nombre) return;
        repasosGanados.push({ fecha: e.fecha || 0, nombre: nombre, nota: e.nota, total: e.total });
      });
      repasosGanados.sort(function (a, b) { return b.fecha - a.fecha; });
      repasosGanados.forEach(function (r) {
        const b = el("div", "insignia ganada insignia-materia");
        b.style.setProperty("--c", "#9b5de5");
        b.innerHTML =
          "<span class='icono-insignia'>\u{1F396}\u{FE0F}</span>" +
          "<span class='nombre-insignia'>" + r.nombre + ": aprobado</span>" +
          "<span class='desc-insignia'>Nota: " + r.nota + " de " + r.total + " respuestas correctas.</span>";
        insignias.appendChild(b);
      });
    } catch (e) {}
    cont.appendChild(insignias);

    /* Animales desbloqueados */
    cont.appendChild(el("h3", "subtitulo", "🐾 Mis animales"));
    const rejillaAnimales = el("div", "rejilla-animales");
    D.animales.forEach((a) => {
      const tiene = d.animales.indexOf(a.id) !== -1;
      const activo = d.animalActivo === a.id;
      const b = el("button", "animal" + (tiene ? "" : " bloqueado") + (activo ? " activo" : ""));
      b.innerHTML =
        "<span class='icono-animal'>" +
        (tiene ? a.icono : "🔒") +
        "</span><span class='nombre-animal'>" +
        a.nombre +
        "</span><span class='costo-animal'>" + (tiene ? (activo ? "¡Contigo ahora!" : "Tócalo para jugar con él") : a.costo + " ⭐") + "</span>";
      b.onclick = () => {
        if (!tiene) {
          C.Sfx.mal();
          C.Guia.habla("Este animal se desbloquea con " + a.costo + " estrellas. ¡Sigue aprendiendo!");
          return;
        }
        d.animalActivo = a.id;
        C.Store.save();
        C.Sfx.bien();
        C.Guia.habla("¡Ahora " + a.nombre + " está contigo!");
        window.pantalla_aventura();
      };
      rejillaAnimales.appendChild(b);
    });
    cont.appendChild(rejillaAnimales);

    /* Personalizar al guía */
    cont.appendChild(el("h3", "subtitulo", "🎩 Mi amigo Kiko"));
    const accs = el("div", "rejilla-animales");
    D.accesorios.forEach((a) => {
      const activo = d.accesorio === a.id;
      const b = el("button", "animal" + (activo ? " activo" : ""));
      b.innerHTML = "<span class='icono-animal'>" + a.icono + "</span><span class='nombre-animal'>" + a.nombre + "</span>";
      b.onclick = () => {
        d.accesorio = a.id;
        C.Store.save();
        pintarGuia();
        C.Sfx.clic();
        window.pantalla_aventura();
      };
      accs.appendChild(b);
    });
    cont.appendChild(accs);

    cont.appendChild(volverAtras());
    C.Guia.habla("¡Mira todo lo que has logrado! Cada estrella es tuya por esforzarte.");
  };

  /* =========================================================
     Pantalla: Mundo de aventuras (mapa de misiones)
     Cada misión es una pequeña historia con un personaje que
     pide ayuda: para ayudarlo hay que aprender algo.
     ========================================================= */
  window.pantalla_mundo = function () {
    const cont = $("#contenido-mundo");
    cont.innerHTML = "";
    cont.appendChild(cabecera("Mundo de aventuras", "Ayuda a los personajes en sus misiones"));

    const lista = window.MISIONES.todas();
    const completas = window.MISIONES.misionesCompletadas();
    const zonas = window.MISIONES.zonasAbiertas();

    /* Resumen de progreso: misiones hechas y zonas secretas abiertas */
    const resumen = el("div", "mundo-resumen");
    resumen.innerHTML =
      "<span class='mundo-contador'>🏆 " + completas + " de " + lista.length + " misiones</span>" +
      "<span class='mundo-contador'>🔑 " + zonas.length + " de " + window.MISIONES.totalZonas() + " zonas secretas</span>";
    cont.appendChild(resumen);

    /* Botón grande que lleva directo a la misión que toca ahora */
    const sig = window.MISIONES.siguiente();
    if (sig) {
      const bSig = el("button", "btn-huge primario mundo-seguir");
      bSig.innerHTML = sig.icono + "<span>Seguir: " + sig.titulo + "</span>";
      bSig.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("mision", { id: sig.id });
      };
      vozBoton(bSig, "Seguir la misión. " + sig.titulo);
      cont.appendChild(bSig);
    } else {
      cont.appendChild(el("p", "mundo-final", "🎉 ¡Completaste todas las misiones! El mundo está feliz."));
    }

    /* Mapa con un lugar por misión: se abre cuando terminas la anterior */
    const mapa = el("div", "mapa-misiones");
    lista.forEach((m) => {
      const hecha = window.MISIONES.completada(m.id);
      const abierta = window.MISIONES.disponible(m.id);
      const hechasEtapas = window.MISIONES.etapasHechas(m.id);
      const enProgreso = abierta && !hecha && hechasEtapas > 0;

      const lugar = el("button", "lugar-mision" + (abierta ? "" : " bloqueado") + (hecha ? " hecha" : "") + (enProgreso ? " en-progreso" : ""));
      lugar.style.setProperty("--c", m.color);
      lugar.onclick = () => {
        if (!abierta) {
          C.Guia.habla("Primero termina la misión anterior para abrir este lugar.");
          C.Sfx.mal();
          return;
        }
        C.Sfx.clic();
        C.Nav.ir("mision", { id: m.id });
      };
      vozBoton(lugar, m.titulo);

      const estado = hecha
        ? "✅ Completada · puedes repasarla"
        : enProgreso
        ? "▶️ En progreso · " + hechasEtapas + " de " + m.etapas.length
        : abierta
        ? "🆕 Nueva · " + m.etapas.length + " etapas"
        : "🔒 Necesita la misión anterior";

      lugar.innerHTML =
        (m.img
          ? "<span class='lugar-img'><img src='" + m.img + "' alt='' loading='lazy' decoding='async'></span>"
          : "<span class='lugar-icono'>" + (abierta ? m.icono : "🔒") + "</span>") +
        "<span class='lugar-info'>" +
        "<span class='lugar-mundo'>" + m.mundo + "</span>" +
        "<span class='lugar-titulo'>" + m.titulo + "</span>" +
        "<span class='lugar-estado'>" + estado + "</span>" +
        "</span>";
      mapa.appendChild(lugar);
    });
    cont.appendChild(mapa);

    /* Zonas secretas descubiertas */
    cont.appendChild(el("h3", "subtitulo", "Zonas descubiertas"));
    if (!zonas.length) {
      cont.appendChild(el("p", "mundo-vacio", "Aún no hay zonas secretas. ¡Completa una misión para descubrir la primera!"));
    } else {
      const rejilla = el("div", "rejilla-zonas");
      zonas.forEach((z) => {
        const card = el("div", "tarjeta-zona");
        card.innerHTML = "<span class='zona-icono'>" + z.icono + "</span><span class='zona-nombre'>" + z.nombre + "</span>";
        rejilla.appendChild(card);
      });
      cont.appendChild(rejilla);
    }

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla("Este es el mundo de aventuras. Toca un lugar para empezar una misión.");
    }
  };

  /* =========================================================
     Pantalla: una misión con sus etapas encadenadas.
     Antes de cada etapa, el personaje cuenta qué pasa y qué hay
     que hacer. Al terminar todas, se abre una zona secreta.
     ========================================================= */
  window.pantalla_mision = function (datos) {
    const cont = $("#contenido-mision");
    const m = datos && datos.id ? window.MISIONES.info(datos.id) : null;
    if (!m) {
      C.Nav.reemplazar("mundo");
      return;
    }
    const idx = m.etapas.findIndex((e) => ((C.Store.data.misiones || {})[m.id] || []).indexOf(e.desc.id) === -1);
    const etapa = idx === -1 ? null : idx;

    cont.innerHTML = "";
    cont.appendChild(cabecera(m.titulo, m.mundo));

    /* Imagen de la misión: el niño ve el mundo donde juega */
    if (m.img) {
      const vista = el("div", "mision-hero");
      vista.innerHTML = "<img src='" + m.img + "' alt='Escena de la misión " + m.titulo + "' decoding='async'>";
      cont.appendChild(vista);
    }

    /* Ficha del personaje con la historia */
    const ficha = el("div", "ficha-mision");
    ficha.style.setProperty("--c", m.color);
    const globo = el("div", "globo-personaje");
    globo.innerHTML =
      "<div class='personaje-cara'>" + m.personaje.emoji + "</div>" +
      "<div class='personaje-texto'><strong>" + m.personaje.nombre + "</strong><p>" +
      (etapa === null ? m.exito : m.intro) + "</p></div>";
    ficha.appendChild(globo);
    cont.appendChild(ficha);

    const hablarIntro = () => C.Guia.habla((etapa === null ? m.exito : m.intro));
    const bOir = el("button", "btn grande", "🔊 Escuchar la historia");
    bOir.onclick = () => {
      C.Sfx.clic();
      hablarIntro();
    };
    cont.appendChild(bOir);

    /* Lista de etapas con su estado */
    cont.appendChild(el("h3", "subtitulo", "Etapas de la misión"));
    const pasos = el("div", "lista-etapas");
    m.etapas.forEach((e, i) => {
      const hecha = ((C.Store.data.misiones || {})[m.id] || []).indexOf(e.desc.id) !== -1;
      const esAhora = i === etapa;
      const fila = el("div", "etapa-mision" + (hecha ? " hecha" : "") + (esAhora ? " ahora" : ""));
      fila.innerHTML =
        "<span class='etapa-marca'>" + (hecha ? "✅" : esAhora ? "▶️" : "•") + "</span>" +
        "<span class='etapa-texto'>" + e.desc.titulo + "</span>";
      pasos.appendChild(fila);
    });
    cont.appendChild(pasos);

    /* Acción principal: empezar la etapa pendiente o cerrar la misión */
    const fila = el("div", "fila-botones");
    if (etapa === null) {
      /* Misión ya completa: aseguramos la zona y ofrecemos repasarla
         o volver. Repasar no vuelve a dar estrellas (marcarHecha solo
         premia la primera vez) y no repite la fiesta de recompensa. */
      const zona = window.MISIONES.abrirZona(m.id);
      if (zona) {
        const aviso = el("div", "zona-nueva");
        aviso.innerHTML = "<span class='zona-icono'>" + zona.icono + "</span><p>" + zona.relato + "</p>";
        cont.appendChild(aviso);
      }
      const bRepasar = el("button", "btn grande", "🔁 Repasar misión");
      bRepasar.onclick = () => {
        C.Sfx.clic();
        ejecutarEtapaMision(m.id, 0, true);
      };
      vozBoton(bRepasar, "Repasar la misión desde el principio. Recordar también es aprender.");
      fila.appendChild(bRepasar);
      const bCerrar = el("button", "btn grande primario", "🗺️ Volver al mundo");
      bCerrar.onclick = () => {
        C.Sfx.clic();
        C.Nav.reemplazar("mundo");
      };
      fila.appendChild(bCerrar);
    } else {
      const bEmpezar = el("button", "btn grande primario", "▶️ Etapa " + (etapa + 1) + " de " + m.etapas.length);
      bEmpezar.onclick = () => {
        C.Sfx.clic();
        ejecutarEtapaMision(m.id, etapa);
      };
      fila.appendChild(bEmpezar);
    }
    const bMenu = el("button", "btn grande", "🏠 Menú");
    bMenu.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("home");
    };
    fila.appendChild(bMenu);
    cont.appendChild(fila);

    if (C.Voz && !C.Voz.silenciado) hablarIntro();
  };

  /* Ejecuta la etapa `i` de la misión `misionId` y, al terminar,
     vuelve a la ficha de la misión con la etapa ya marcada.
     En modo repaso solo se juega de nuevo: sin recompensa ni fiesta. */
  function ejecutarEtapaMision(misionId, i, repaso) {
    const m = window.MISIONES.info(misionId);
    if (!m) return;
    const etapa = m.etapas[i];
    if (!etapa) return;
    C.Nav.ir("actividad", {
      desc: etapa.desc,
      alTerminar: (estrellas) => {
        if (repaso) {
          C.Guia.habla("¡Gran repaso! Recordar también es aprender.");
          C.Nav.reemplazar("mision", { id: m.id });
          return;
        }
        window.MISIONES.marcarEtapa(misionId, etapa.desc.id);
        /* Si con esta etapa se completa la misión, abrimos la zona
           secreta y mostramos la recompensa del mundo. */
        const fin = window.MISIONES.completada(misionId);
        const zona = fin ? window.MISIONES.abrirZona(misionId) : null;
        mostrarRecompensaMision(m, estrellas, zona, fin);
      },
    });
  }

  function mostrarRecompensaMision(m, estrellas, zona, fin) {
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", fin ? m.personaje.emoji + " ¡Ayudaste a " + m.personaje.nombre + "!" : m.personaje.emoji + " ¡Etapa superada!"));
    cuerpo.appendChild(el("p", "estrellas-grandes", "⭐".repeat(estrellas) + "☆".repeat(3 - estrellas)));
    cuerpo.appendChild(el("p", "", fin ? m.exito : "¡Buen trabajo! " + (m.etapas.length - window.MISIONES.etapasHechas(m.id)) + " etapa(s) más para ayudar del todo a " + m.personaje.nombre + "."));
    if (zona) {
      const aviso = el("div", "zona-nueva");
      aviso.innerHTML =
        "<span class='zona-icono'>" + zona.icono + "</span>" +
        "<p><strong>¡Zona secreta descubierta!</strong><br>" + zona.nombre + ". " + zona.relato + "</p>";
      cuerpo.appendChild(aviso);
    }

    const fila = el("div", "fila-botones");
    const bSeguir = el("button", "btn grande primario", "🗺️ Seguir en el mundo");
    bSeguir.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("mundo");
    };
    fila.appendChild(bSeguir);
    const bOtra = el("button", "btn grande", "🔁 Otra etapa");
    bOtra.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("mision", { id: m.id });
    };
    fila.appendChild(bOtra);
    cuerpo.appendChild(fila);
    overlay.classList.add("visible");
    C.celebrar(cuerpo);
  }

  /* =========================================================
     Pantalla: Escape rooms (lista de salas)
     Cada sala es una habitación con un misterio que se resuelve
     con retos progresivos: pistas escondidas, candados de
     números/letras/sílabas y un candado final que combina todo.
     ========================================================= */
  window.pantalla_escape = function () {
    const cont = $("#contenido-escape");
    cont.innerHTML = "";
    cont.appendChild(cabecera("🔐 Escape rooms", "Resuelve el misterio de cada habitación"));
    cont.appendChild(bannerCaratula("img/s-escape.webp", "Puerta misteriosa con candados y llaves"));

    const intro = el(
      "p",
      "escape-intro",
      "En cada sala hay candados escondidos. Toca los objetos que brillan para encontrar pistas, resuelve los retos y abre la puerta final. ¡Los retos van de fácil a difícil!"
    );
    cont.appendChild(intro);

    const rejilla = el("div", "rejilla-salas");
    window.ESCAPE.todas().forEach((s) => {
      const abierta = window.ESCAPE.abierta(s.id);
      const disp = window.ESCAPE.disponible(s.id);
      const resueltos = window.ESCAPE.resueltos(s.id);
      const total = window.ESCAPE.totalCerrojos(s);

      const card = el("button", "tarjeta-sala" + (abierta ? " abierta" : "") + (disp ? "" : " bloqueada"));
      card.style.setProperty("--c", s.color);
      const pct = Math.round((resueltos / total) * 100);
      card.innerHTML =
        "<span class='sala-icono'>" + (disp ? s.icono : "🔒") + "</span>" +
        "<span class='sala-nombre'>" + s.nombre + "</span>" +
        "<span class='sala-info'>" +
        (abierta
          ? "✅ ¡Sala abierta! " + total + " candados"
          : disp
          ? "🔧 " + resueltos + " de " + total + " candados"
          : "Se abre al terminar la anterior") +
        "</span><span class='sala-barra'><i style='width:" + (abierta ? 100 : pct) + "%;background:" + s.color + "'></i></span>";

      if (disp) {
        vozBoton(card, s.nombre + ". " + s.intro);
        card.onclick = () => {
          C.Sfx.clic();
          C.Nav.ir("sala", { id: s.id });
        };
      } else {
        card.onclick = () => {
          C.Sfx.mal();
          C.Guia.habla("Primero termina la sala anterior para abrir esta.");
        };
      }
      rejilla.appendChild(card);
    });
    cont.appendChild(rejilla);

    const volver = el("button", "btn grande", "🏠 Menú");
    volver.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("home");
    };
    cont.appendChild(volver);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla("Estos son los escape rooms. Toca una sala para empezar el misterio.");
    }
  };

  /* =========================================================
     Pantalla: una sala de escape en curso.
     Muestra el escenario con objetos brillantes (pistas) y la
     lista de candados. Al resolver todos, se abre la puerta.
     ========================================================= */
  window.pantalla_sala = function (datos) {
    const cont = $("#contenido-sala");
    const s = datos && datos.id ? window.ESCAPE.info(datos.id) : null;
    if (!s) {
      C.Nav.reemplazar("escape");
      return;
    }
    cont.innerHTML = "";
    cont.appendChild(cabecera(s.icono + " " + s.nombre, "Sala " + s.nivel + " de " + window.ESCAPE.todas().length));

    /* Ficha de la historia */
    const ficha = el("div", "ficha-sala");
    ficha.style.setProperty("--c", s.color);
    const globo = el("div", "globo-personaje");
    globo.innerHTML =
      "<div class='personaje-cara'>" + s.icono + "</div>" +
      "<div class='personaje-texto'><p>" + (window.ESCAPE.abierta(s.id) ? s.exito : s.intro) + "</p></div>";
    ficha.appendChild(globo);
    cont.appendChild(ficha);

    /* Escenario: objetos que brillan y esconden pistas */
    cont.appendChild(el("h3", "subtitulo", "Busca pistas en el escenario"));
    const escenario = el("div", "escenario-sala");
    const vistas = window.ESCAPE.pistasVistas(s.id);
    s.escenario.forEach((emoji, i) => {
      const vista = vistas.indexOf(i) !== -1;
      const obj = el("button", "objeto-escena" + (vista ? " visto" : ""));
      obj.innerHTML = "<span class='objeto-icono'>" + emoji + "</span>" + (vista ? "<span class='objeto-marca'>✓</span>" : "<span class='objeto-brillo'>✨</span>");
      vozBoton(obj, "Objeto del escenario. Tócalo para buscar una pista.");
      obj.onclick = () => {
        C.Sfx.clic();
        const nueva = window.ESCAPE.marcarPista(s.id, i);
        const texto = s.pistas[i] || "Aquí no hay nada...";
        C.Guia.habla(texto);
        window.pantalla_sala({ id: s.id });
        if (nueva) C.celebrar($("#contenido-sala"));
      };
      escenario.appendChild(obj);
    });
    cont.appendChild(escenario);

    /* Pista revelada (la última encontrada) o aviso inicial */
    const ultima = vistas.length ? vistas[vistas.length - 1] : -1;
    const cajaPista = el("div", "caja-pista" + (ultima === -1 ? " vacia" : ""));
    cajaPista.innerHTML =
      ultima === -1
        ? "🔎 Toca un objeto brillante para descubrir una pista."
        : "💡 <strong>Pista:</strong> " + s.pistas[ultima];
    cont.appendChild(cajaPista);

    /* Estado de los candados */
    const resueltos = window.ESCAPE.resueltos(s.id);
    const total = window.ESCAPE.totalCerrojos(s);
    cont.appendChild(el("h3", "subtitulo", "Candados de la sala"));
    const filaCand = el("div", "fila-candados");
    for (let i = 0; i < total; i++) {
      const esFinal = i === total - 1;
      const hecho = i < resueltos;
      const esAhora = i === resueltos;
      const chip = el("div", "candado" + (hecho ? " hecho" : "") + (esAhora ? " ahora" : "") + (esFinal ? " final" : ""));
      chip.innerHTML =
        "<span class='candado-icono'>" + (hecho ? "🔓" : esFinal ? "🚪" : "🔒") + "</span>" +
        "<span class='candado-nombre'>" + (esFinal ? "Puerta final" : "Candado " + (i + 1)) + "</span>";
      filaCand.appendChild(chip);
    }
    cont.appendChild(filaCand);

    /* Acción principal */
    const fila = el("div", "fila-botones");
    if (resueltos >= total) {
      const aviso = el("div", "zona-nueva");
      aviso.innerHTML = "<span class='zona-icono'>🎉</span><p>" + s.exito + "</p>";
      cont.appendChild(aviso);
      const bRepetir = el("button", "btn grande", "🔁 Repetir sala");
      bRepetir.onclick = () => {
        C.Sfx.clic();
        window.ESCAPE.reiniciarSala(s.id);
        window.pantalla_sala({ id: s.id });
      };
      fila.appendChild(bRepetir);
    } else {
      const esFinal = resueltos === total - 1;
      const candado = esFinal ? s.final : s.candados[resueltos];
      const bAbrir = el("button", "btn grande primario", (esFinal ? "🚪 Abrir la puerta final" : "🔒 Intentar candado " + (resueltos + 1)));
      bAbrir.onclick = () => {
        C.Sfx.clic();
        abrirCandado(s, candado, esFinal);
      };
      fila.appendChild(bAbrir);
    }
    const bLista = el("button", "btn grande", "🔐 Otras salas");
    bLista.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("escape");
    };
    fila.appendChild(bLista);
    cont.appendChild(fila);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla(window.ESCAPE.abierta(s.id) ? s.exito : "Estás en " + s.nombre + ". " + s.intro);
    }
  };

  /* Abre un candado concreto: genera el reto y muestra opciones
     grandes. Al acertar, avanza un cerrojo; al fallar, anima y
     deja repetir (sin castigo).                                      */
  function abrirCandado(sala, candado, esFinal) {
    const reto = candado.generar();
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", esFinal ? "🚪 " + sala.icono + " Candado final" : "🔒 " + sala.icono + " Candado"));

    /* Pista descubierta ayuda aquí */
    const vistas = window.ESCAPE.pistasVistas(sala.id);
    if (vistas.length) {
      const caja = el("p", "consigna", "Pista: " + sala.pistas[vistas[vistas.length - 1]]);
      cuerpo.appendChild(caja);
    }

    if (reto.emoji) {
      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML = "<div class='explorar-emoji'>" + reto.emoji + "</div>" + (reto.muestra ? "<div class='explorar-texto'>" + reto.muestra + "</div>" : "");
      cuerpo.appendChild(card);
    }

    const enunciado = el("p", "enunciado-candado", reto.enunciado);
    cuerpo.appendChild(enunciado);

    const bOir = el("button", "btn-altavoz", "🔊");
    bOir.onclick = () => {
      C.Sfx.clic();
      C.Guia.habla(reto.hablar);
    };
    cuerpo.appendChild(bOir);
    C.Guia.habla(reto.hablar);

    /* Zona de respuesta: para los retos en secuencia se van
       acumulando los toques; para el resto, un solo toque.     */
    const zonaResp = el("div", "respuesta-candado");
    cuerpo.appendChild(zonaResp);
    const salida = el("div", "opciones-candado");
    cuerpo.appendChild(salida);

    const elegidas = [];

    function comprobar() {
      const correcto = reto.correcto;
      let ok;
      if (reto.secuencia) {
        ok = elegidas.length === correcto.length && elegidas.every((v, i) => v === correcto[i]);
      } else {
        ok = elegidas[0] === correcto;
      }
      if (ok) {
        C.Sfx.bien();
        C.celebrar(cuerpo);
        const r = window.ESCAPE.avanzarCerrojo(sala.id);
        cuerpo.innerHTML = "";
        const abrio = r.abierta;
        cuerpo.appendChild(el("h2", "", abrio ? "🎉 ¡Sala abierta!" : "🔓 ¡Candado abierto!"));
        cuerpo.appendChild(
          el("p", "", abrio ? sala.exito : "¡Muy bien! Ese candado cedió. Quedan " + (r.total - r.resueltos) + " para abrir la puerta.")
        );
        /* Completar una sala también ayuda a la mascota y da material */
        if (window.MASCOTA && window.MASCOTA.tiene()) {
          const subio = window.MASCOTA.sumarPuntos(abrio ? 3 : 1);
          const mat = window.MASCOTA.ganarMaterial();
          if (subio) pintarGuia();
          cuerpo.appendChild(el("p", "mascota-extra", "Ganaste un material: " + mat.icono + " " + mat.nombre));
        }
        cerrarCon(cuerpo, [
          { t: "🔐 Volver a la sala", fn: () => { overlay.classList.remove("visible"); C.Nav.reemplazar("sala", { id: sala.id }); } },
          { t: "🏠 Menú", fn: () => { overlay.classList.remove("visible"); C.Nav.reemplazar("home"); } },
        ]);
      } else {
        C.Sfx.mal();
        C.Guia.habla("Casi. Prueba otra vez con calma, tú puedes.");
        zonaResp.classList.add("mal");
        setTimeout(() => zonaResp.classList.remove("mal"), 600);
        elegidas.length = 0;
        pintarOpciones();
        pintarElegidas();
      }
    }

    function pintarElegidas() {
      zonaResp.innerHTML = "";
      if (!reto.secuencia) return;
      elegidas.forEach((v) => {
        const chip = el("span", "elegida-chip", String(v));
        zonaResp.appendChild(chip);
      });
      if (elegidas.length < reto.correcto.length) {
        zonaResp.appendChild(el("span", "elegida-hueco", "?"));
      }
    }

    function pintarOpciones() {
      salida.innerHTML = "";
      const usadas = elegidas.slice();
      reto.opciones.forEach((v) => {
        const b = el("button", "btn grande opcion-candado", String(v));
        if (usadas.indexOf(v) !== -1) b.classList.add("usada");
        b.onclick = () => {
          if (b.classList.contains("usada")) return;
          C.Sfx.clic();
          elegidas.push(v);
          if (reto.secuencia) {
            pintarElegidas();
            pintarOpciones();
            if (elegidas.length === reto.correcto.length) comprobar();
          } else {
            comprobar();
          }
        };
        salida.appendChild(b);
      });
    }

    pintarElegidas();
    pintarOpciones();

    const salir = el("button", "btn grande", "⬅️ Volver a la sala");
    salir.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("sala", { id: sala.id });
    };
    cuerpo.appendChild(salir);
    overlay.classList.add("visible");
  }

  /* =========================================================
     Pantalla: Taller de inventos
     Lista de inventos. Cada uno se desbloquea al terminar el
     anterior. Muestra cuántas piezas llevas conseguidas.
     ========================================================= */
  window.pantalla_taller = function () {
    const cont = $("#contenido-taller");
    cont.innerHTML = "";
    cont.appendChild(cabecera("🛠️ Taller de inventos", "Resuelve retos y construye cosas increíbles"));
    cont.appendChild(bannerCaratula("img/s-taller.webp", "Banco de herramientas con un robot casero"));

    cont.appendChild(
      el(
        "p",
        "taller-intro",
        "Elige un invento. Resuelve los retos para conseguir las piezas y luego colócalas en su sitio. ¡Cada respuesta correcta construye algo!"
      )
    );

    const rejilla = el("div", "rejilla-inventos");
    window.TALLER.visibles().forEach((t) => {
      const term = window.TALLER.terminado(t.id);
      const disp = window.TALLER.disponible(t.id);
      const colocadas = window.TALLER.colocadas(t.id).length;
      const total = window.TALLER.totalPiezas(t);

      const card = el("button", "tarjeta-invento" + (term ? " terminado" : "") + (disp ? "" : " bloqueado") + (t.secreto ? " secreto" : ""));
      card.style.setProperty("--c", t.color);
      const pct = Math.round((colocadas / total) * 100);
      let info;
      if (term) {
        info = "✅ ¡Construido! " + total + " piezas";
      } else if (t.secreto) {
        info = "🤫 ¡Invento secreto! " + total + " piezas";
      } else if (disp) {
        info = "🧩 " + colocadas + " de " + total + " piezas";
      } else {
        info = "Se abre al terminar el anterior";
      }
      card.innerHTML =
        "<span class='invento-icono'>" + (disp ? t.icono : "🔒") + "</span>" +
        "<span class='invento-nombre'>" + (t.secreto && !disp ? "❓ ???" : t.nombre) + "</span>" +
        "<span class='invento-info'>" + info + "</span>" +
        "<span class='invento-barra'><i style='width:" + (term ? 100 : pct) + "%;background:" + t.color + "'></i></span>";

      if (disp) {
        vozBoton(card, t.nombre + ". " + t.intro);
        card.onclick = () => {
          C.Sfx.clic();
          C.Nav.ir("invento", { id: t.id });
        };
      } else {
        card.onclick = () => {
          C.Sfx.mal();
          C.Guia.habla("Primero termina el invento anterior para abrir este.");
        };
      }
      rejilla.appendChild(card);
    });
    cont.appendChild(rejilla);

    /* Aviso del invento secreto cuando ya está desbloqueado */
    if (window.TALLER.secretoDesbloqueado() && !window.TALLER.terminado("secreto")) {
      const avisoSecreto = el("div", "aviso-secreto");
      avisoSecreto.innerHTML =
        "🤫 <strong>¡Has desbloqueado el Invento Secreto!</strong> Pide 3 retos por pieza. ¡Nada más fácil para ti!";
      cont.appendChild(avisoSecreto);
    }

    const volver = el("button", "btn grande", "🏠 Menú");
    volver.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("home");
    };
    cont.appendChild(volver);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla("Este es el taller de inventos. Toca un invento para construirlo resolviendo retos.");
    }
  };

  /* =========================================================
     Pantalla: un invento en construcción.
     Muestra la cuadrícula con los huecos, las piezas ya
     colocadas y la pieza que toca colocar. El niño resuelve
     retos para conseguir piezas y las coloca en su sitio.
     ========================================================= */
  window.pantalla_invento = function (datos) {
    const cont = $("#contenido-invento");
    const t = datos && datos.id ? window.TALLER.info(datos.id) : null;
    if (!t) {
      C.Nav.reemplazar("taller");
      return;
    }
    cont.innerHTML = "";
    const terminado = window.TALLER.terminado(t.id);
    cont.appendChild(cabecera(t.icono + " " + t.nombre, "Invento " + t.nivel + " de " + window.TALLER.todas().length));

    /* Ficha con la historia del invento */
    const ficha = el("div", "ficha-invento");
    ficha.style.setProperty("--c", t.color);
    const globo = el("div", "globo-personaje");
    globo.innerHTML =
      "<div class='personaje-cara'>" + t.icono + "</div>" +
      "<div class='personaje-texto'><p>" + (terminado ? t.exito : t.intro) + "</p></div>";
    ficha.appendChild(globo);
    cont.appendChild(ficha);

    /* Rejilla del invento: fondo + huecos + piezas colocadas */
    cont.appendChild(el("h3", "subtitulo", terminado ? "Tu invento terminado" : "Coloca las piezas en su sitio"));
    const mesa = el("div", "mesa-invento");
    mesa.style.setProperty("--cols", t.cols);
    mesa.appendChild(el("span", "mesa-fondo", t.fondo || ""));
    const colocadas = window.TALLER.colocadas(t.id);
    const pendiente = window.TALLER.piezaPendiente(t.id);

    for (let f = 0; f < t.filas; f++) {
      for (let c = 0; c < t.cols; c++) {
        const pieza = t.piezas.find((p) => p.fila === f && p.col === c);
        const celda = el("div", "celda-invento");
        if (!pieza) {
          celda.classList.add("vacia");
        } else {
          const puesta = colocadas.indexOf(pieza.id) !== -1;
          const esPendiente = pendiente && pendiente.id === pieza.id;
          if (puesta) {
            celda.classList.add("puesta");
            celda.innerHTML = "<span class='celda-icono'>" + pieza.icono + "</span>";
          } else if (terminado) {
            celda.innerHTML = "<span class='celda-icono tenue'>" + pieza.icono + "</span>";
          } else {
            celda.classList.add("hueco");
            if (esPendiente) celda.classList.add("destino");
            celda.innerHTML = "<span class='celda-hueco'>?</span>";
          }
        }
        mesa.appendChild(celda);
      }
    }
    cont.appendChild(mesa);

    /* Barra de progreso de piezas */
    const total = window.TALLER.totalPiezas(t);
    const pct = Math.round((colocadas.length / total) * 100);
    const progreso = el("div", "progreso-invento");
    progreso.innerHTML =
      "<div class='progreso-barra'><i style='width:" + pct + "%;background:" + t.color + "'></i></div>" +
      "<span class='progreso-texto'>" + colocadas.length + " de " + total + " piezas colocadas</span>";
    cont.appendChild(progreso);

    /* Zona de acciones */
    const acciones = el("div", "fila-botones");

    if (terminado) {
      const aviso = el("div", "zona-nueva");
      aviso.innerHTML = "<span class='zona-icono'>🎉</span><p>" + t.exito + "</p>";
      cont.appendChild(aviso);
      const bRepetir = el("button", "btn grande", "🔁 Volver a construirlo");
      bRepetir.onclick = () => {
        C.Sfx.clic();
        window.TALLER.reiniciar(t.id);
        window.pantalla_invento({ id: t.id });
      };
      acciones.appendChild(bRepetir);
    } else if (pendiente) {
      /* Hay una pieza esperando a colocarse: el niño elige el hueco */
      const consigna = el("p", "consigna", "Tienes " + pendiente.nombre + ". " + window.TALLER.instruccion(t.id));
      cont.appendChild(consigna);

      const piezaActual = el("div", "pieza-actual");
      piezaActual.innerHTML = "<span class='pieza-icono'>" + pendiente.icono + "</span><span class='pieza-nombre'>" + pendiente.nombre + "</span>";
      cont.appendChild(piezaActual);

      const bOir = el("button", "btn-altavoz", "🔊");
      bOir.onclick = () => {
        C.Sfx.clic();
        C.Guia.habla("Tienes " + pendiente.nombre + ". " + window.TALLER.instruccion(t.id));
      };
      cont.appendChild(bOir);

      /* El niño toca el hueco donde cree que va la pieza */
      cont.appendChild(el("h3", "subtitulo", "¿Dónde va? Toca el hueco correcto"));
      const zonaHuecos = el("div", "rejilla-huecos");
      zonaHuecos.style.setProperty("--cols", t.cols);
      for (let f = 0; f < t.filas; f++) {
        for (let c = 0; c < t.cols; c++) {
          const pieza = t.piezas.find((p) => p.fila === f && p.col === c);
          const b = el("button", "hueco-opcion");
          if (!pieza || colocadas.indexOf(pieza.id) !== -1) {
            b.classList.add("no-va");
            b.innerHTML = pieza ? "<span class='celda-icono'>" + pieza.icono + "</span>" : "";
            b.disabled = true;
          } else {
            b.innerHTML = "<span class='celda-hueco'>?</span>";
            b.onclick = () => {
              probarColocar(t, pendiente, f, c, cont);
            };
          }
          zonaHuecos.appendChild(b);
        }
      }
      cont.appendChild(zonaHuecos);

      if (C.Voz && !C.Voz.silenciado) {
        C.Guia.habla("Tienes " + pendiente.nombre + ". " + window.TALLER.instruccion(t.id));
      }
    } else {
      /* No hay pieza pendiente: hay que conseguir una con un reto */
      const pieza = t.piezas.find((p) => window.TALLER.conseguidas(t.id).indexOf(p.id) === -1);
      const nRetos = (pieza && pieza.retos) || 1;
      const consigna = el("p", "consigna", "Consigue una pieza: " + (pieza ? pieza.nombre : ""));
      cont.appendChild(consigna);
      if (nRetos > 1) {
        const aviso = el("p", "consigna retos-extra", "Ojo: esta pieza pide " + nRetos + " retos seguidos. ¡Con calma!");
        cont.appendChild(aviso);
      }
      const bReto = el("button", "btn grande primario", "🧠 Resolver reto para conseguir una pieza");
      bReto.onclick = () => {
        C.Sfx.clic();
        abrirRetoTaller(t, cont);
      };
      acciones.appendChild(bReto);
    }

    const bLista = el("button", "btn grande", "⬅️ Otros inventos");
    bLista.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("taller");
    };
    acciones.appendChild(bLista);
    cont.appendChild(acciones);
  };

  /* Comprueba si el hueco elegido es el correcto */
  function probarColocar(t, pieza, f, c, cont) {
    if (pieza.fila === f && pieza.col === c) {
      C.Sfx.bien();
      window.TALLER.colocarPieza(t.id, pieza.id);
      C.celebrar(cont);
      const fin = window.TALLER.terminado(t.id);
      C.Guia.habla(
        fin
          ? "¡" + t.exito
          : "¡Muy bien! La pieza encajó. " + window.TALLER.instruccion(t.id)
      );
      /* Ayuda a la mascota al construir */
      if (window.MASCOTA && window.MASCOTA.tiene()) {
        const subio = window.MASCOTA.sumarPuntos(fin ? 3 : 1);
        if (subio) pintarGuia();
      }
      setTimeout(() => window.pantalla_invento({ id: t.id }), fin ? 1200 : 700);
    } else {
      C.Sfx.mal();
      C.Guia.habla("Ese no es el sitio. Escucha otra vez dónde va la pieza.");
      cont.classList.add("temblor");
      setTimeout(() => cont.classList.remove("temblor"), 600);
    }
  }

  /* Abre el reto para conseguir una pieza (en el overlay) */
  /* Abre el reto para conseguir una pieza (en el overlay).
     Una pieza puede pedir VARIOS retos seguidos (1, 2 o 3):
     la pieza solo se concede cuando se superan todos. */
  function abrirRetoTaller(t, cont, yaResueltos) {
    const pieza = t.piezas.find((p) => window.TALLER.conseguidas(t.id).indexOf(p.id) === -1);
    if (!pieza) return;
    const resueltos = yaResueltos || 0;
    const totalRetos = pieza.retos || 1;
    const reto = pieza.reto();
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";

    /* Cabecera con el progreso de los retos de esta pieza */
    const cab = el("h2", "", "🧠 Reto del taller");
    if (totalRetos > 1) {
      cab.innerHTML =
        "🧠 Reto " + (resueltos + 1) + " de " + totalRetos + " para " + pieza.nombre;
    }
    cuerpo.appendChild(cab);

    /* Puntos que muestran los retos superados */
    if (totalRetos > 1) {
      const marcas = el("div", "marcas-retos");
      for (let i = 0; i < totalRetos; i++) {
        marcas.appendChild(el("span", "marca-reto" + (i < resueltos ? " hecha" : ""), i < resueltos ? "✓" : String(i + 1)));
      }
      cuerpo.appendChild(marcas);
    }

    const enunciado = el("p", "enunciado-candado", reto.enunciado);
    cuerpo.appendChild(enunciado);

    if (reto.emojis && reto.emojis.length) {
      const card = el("div", "fila-emojis-reto");
      reto.emojis.forEach((e) => card.appendChild(el("span", "emoji-reto", e)));
      cuerpo.appendChild(card);
    }

    const bOir = el("button", "btn-altavoz", "🔊");
    bOir.onclick = () => {
      C.Sfx.clic();
      C.Guia.habla(reto.hablar);
    };
    cuerpo.appendChild(bOir);
    C.Guia.habla(reto.hablar);

    const zonaResp = el("div", "respuesta-candado");
    cuerpo.appendChild(zonaResp);
    const salida = el("div", "opciones-candado");
    cuerpo.appendChild(salida);

    const elegidas = [];

    function pintarElegidas() {
      zonaResp.innerHTML = "";
      if (!reto.secuencia) return;
      elegidas.forEach((v) => zonaResp.appendChild(el("span", "elegida-chip", String(v))));
      if (elegidas.length < reto.correcto.length) zonaResp.appendChild(el("span", "elegida-hueco", "?"));
    }

    function comprobar() {
      const correcto = reto.correcto;
      let ok;
      if (reto.secuencia) {
        ok = elegidas.length === correcto.length && elegidas.every((v, i) => v === correcto[i]);
      } else {
        ok = elegidas[0] === correcto;
      }
      if (ok) {
        C.Sfx.bien();
        C.celebrar(cuerpo);
        const nuevos = resueltos + 1;
        if (nuevos < totalRetos) {
          /* Falta otro reto para esta pieza: se encadena */
          cuerpo.innerHTML = "";
          cuerpo.appendChild(el("h2", "", "✅ ¡Reto superado!"));
          cuerpo.appendChild(
            el("p", "", "¡Bien! Falta " + (totalRetos - nuevos) + " reto" + (totalRetos - nuevos > 1 ? "s" : "") + " más para conseguir " + pieza.nombre + ".")
          );
          const bSeguir = el("button", "btn grande primario", "➡️ Siguiente reto");
          bSeguir.onclick = () => {
            C.Sfx.clic();
            abrirRetoTaller(t, cont, nuevos);
          };
          cuerpo.appendChild(bSeguir);
          const bSalir = el("button", "btn grande", "⬅️ Volver al invento");
          bSalir.onclick = () => {
            C.Sfx.clic();
            overlay.classList.remove("visible");
            C.Nav.reemplazar("invento", { id: t.id });
          };
          cuerpo.appendChild(bSalir);
          C.Guia.habla("¡Muy bien! Vamos con otro reto: " + (totalRetos - nuevos) + " más.");
        } else {
          /* Se han superado todos los retos: la pieza se concede */
          const ganada = window.TALLER.conseguirPieza(t.id);
          cuerpo.innerHTML = "";
          cuerpo.appendChild(el("h2", "", "🧩 ¡Pieza conseguida!"));
          cuerpo.appendChild(
            el("p", "", ganada ? "Has ganado " + ganada.icono + " " + ganada.nombre + ". Ahora colócala en su sitio." : "¡Bien hecho!")
          );
          cerrarCon(cuerpo, [
            {
              t: "🛠️ Colocar la pieza",
              fn: () => {
                overlay.classList.remove("visible");
                C.Nav.reemplazar("invento", { id: t.id });
              },
            },
            {
              t: "🏠 Menú",
              fn: () => {
                overlay.classList.remove("visible");
                C.Nav.reemplazar("home");
              },
            },
          ]);
        }
      } else {
        C.Sfx.mal();
        C.Guia.habla("Casi. Prueba otra vez con calma, tú puedes.");
        zonaResp.classList.add("mal");
        setTimeout(() => zonaResp.classList.remove("mal"), 600);
        elegidas.length = 0;
        pintarElegidas();
        pintarOpciones();
      }
    }

    function pintarOpciones() {
      salida.innerHTML = "";
      const usadas = elegidas.slice();
      reto.opciones.forEach((v) => {
        const b = el("button", "btn grande opcion-candado");
        if (reto.svgOpcion && reto.svgOpcion[v]) {
          /* Opción con figura dibujada (SVG) */
          b.innerHTML =
            "<span class='opcion-figura'><svg viewBox='0 0 80 80' width='64' height='64'>" +
            reto.svgOpcion[v] +
            "</svg></span><span class='opcion-texto'>" + v + "</span>";
        } else if (reto.emojisOpcion && reto.emojisOpcion[v]) {
          b.innerHTML = "<span class='opcion-emoji'>" + reto.emojisOpcion[v] + "</span><span class='opcion-texto'>" + v + "</span>";
        } else {
          b.textContent = String(v);
        }
        if (usadas.indexOf(v) !== -1) b.classList.add("usada");
        b.onclick = () => {
          if (b.classList.contains("usada")) return;
          C.Sfx.clic();
          elegidas.push(v);
          if (reto.secuencia) {
            pintarElegidas();
            pintarOpciones();
            if (elegidas.length === reto.correcto.length) comprobar();
          } else {
            comprobar();
          }
        };
        salida.appendChild(b);
      });
    }

    pintarElegidas();
    pintarOpciones();

    const salir = el("button", "btn grande", "⬅️ Volver al invento");
    salir.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("invento", { id: t.id });
    };
    cuerpo.appendChild(salir);
    overlay.classList.add("visible");
  }

  /* =========================================================
     Pantalla: Detectives de letras y números
     Lista de casos. Cada caso tiene varias etapas y se
     desbloquea al terminar el anterior.
     ========================================================= */
  window.pantalla_detective = function () {
    const cont = $("#contenido-detective");
    cont.innerHTML = "";
    cont.appendChild(cabecera("🕵️ Detectives de letras y números", "Investiga, encuentra pistas y resuelve el caso"));
    cont.appendChild(bannerCaratula("img/s-detective.webp", "Lupa sobre pistas y huellas"));

    cont.appendChild(
      el(
        "p",
        "taller-intro",
        "Recibes una misión y debes investigar el escenario para encontrar lo que buscas. Toca los objetos ocultos, escucha las pistas y resuelve cada acertijo."
      )
    );

    const rejilla = el("div", "rejilla-inventos");
    window.DETECTIVE.todas().forEach((c) => {
      const term = window.DETECTIVE.terminado(c.id);
      const disp = window.DETECTIVE.disponible(c.id);
      const hechas = window.DETECTIVE.etapasResueltas(c.id);
      const total = window.DETECTIVE.totalEtapas(c.id);

      const card = el("button", "tarjeta-invento" + (term ? " terminado" : "") + (disp ? "" : " bloqueado"));
      card.style.setProperty("--c", c.color);
      const pct = Math.round((hechas / total) * 100);
      const info = term
        ? "✅ ¡Caso resuelto!"
        : disp
        ? "🔍 " + hechas + " de " + total + " etapas"
        : "Se abre al resolver el caso anterior";

      card.innerHTML =
        "<span class='invento-icono'>" + (disp ? c.icono : "🔒") + "</span>" +
        "<span class='invento-nombre'>" + c.nombre + "</span>" +
        "<span class='invento-info'>" + info + "</span>" +
        "<span class='invento-barra'><i style='width:" + (term ? 100 : pct) + "%;background:" + c.color + "'></i></span>";

      if (disp) {
        vozBoton(card, c.nombre + ". " + c.intro);
        card.onclick = () => {
          C.Sfx.clic();
          C.Nav.ir("caso", { id: c.id });
        };
      } else {
        card.onclick = () => {
          C.Sfx.mal();
          C.Guia.habla("Primero resuelve el caso anterior para abrir este.");
        };
      }
      rejilla.appendChild(card);
    });
    cont.appendChild(rejilla);

    const volver = el("button", "btn grande", "🏠 Menú");
    volver.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("home");
    };
    cont.appendChild(volver);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla("These are los detectives de letras y números. Toca un caso para empezar la investigación.");
    }
  };

  /* =========================================================
     Pantalla: un caso de detective en curso.
     Muestra la misión, el escenario con objetos ocultos, las
     pistas y el progreso de las etapas.
     ========================================================= */
  window.pantalla_caso = function (datos) {
    const cont = $("#contenido-caso");
    const caso = datos && datos.id ? window.DETECTIVE.info(datos.id) : null;
    if (!caso) {
      C.Nav.reemplazar("detective");
      return;
    }
    const etSol = window.DETECTIVE.etapasResueltas(caso.id);
    const totalEt = window.DETECTIVE.totalEtapas(caso.id);
    const terminado = etSol >= totalEt;

    cont.innerHTML = "";
    cont.appendChild(cabecera(caso.icono + " " + caso.nombre, "Caso " + caso.nivel + " de " + window.DETECTIVE.todas().length));

    /* Ficha con el detective y su misión */
    const ficha = el("div", "ficha-invento");
    ficha.style.setProperty("--c", caso.color);
    const globo = el("div", "globo-personaje");
    globo.innerHTML =
      "<div class='personaje-cara'>" + caso.icono + "</div>" +
      "<div class='personaje-texto'><p><strong>" + caso.detective + "</strong>: " + (terminado ? caso.exito : caso.intro) + "</p></div>";
    ficha.appendChild(globo);
    cont.appendChild(ficha);

    if (terminado) {
      const aviso = el("div", "zona-nueva");
      aviso.innerHTML = "<span class='zona-icono'>🎉</span><p>" + caso.exito + "</p>";
      cont.appendChild(aviso);

      const resumen = el("div", "progreso-invento");
      const pistas = window.DETECTIVE.pistasUsadas(caso.id);
      resumen.innerHTML =
        "<span class='progreso-texto'>✅ " + totalEt + " etapas resueltas · 💡 " + pistas + " pistas usadas</span>";
      cont.appendChild(resumen);

      const fila = el("div", "fila-botones");
      const bRepetir = el("button", "btn grande", "🔁 Repetir el caso");
      bRepetir.onclick = () => {
        C.Sfx.clic();
        window.DETECTIVE.reiniciar(caso.id);
        window.pantalla_caso({ id: caso.id });
      };
      fila.appendChild(bRepetir);
      const bLista = el("button", "btn grande", "⬅️ Otros casos");
      bLista.onclick = () => {
        C.Sfx.clic();
        C.Nav.reemplazar("detective");
      };
      fila.appendChild(bLista);
      cont.appendChild(fila);
      return;
    }

    /* Etapa actual */
    const etapaIdx = Math.min(etSol, totalEt - 1);
    const etapa = window.DETECTIVE.generarEtapa(caso.id, etapaIdx);
    if (!etapa) {
      const aviso = el("div", "zona-nueva");
      aviso.innerHTML = "<span class='zona-icono'>😕</span><p>No se pudo preparar esta etapa. Vamos con la siguiente.</p>";
      cont.appendChild(aviso);
      return;
    }

    /* Progreso de etapas */
    cont.appendChild(el("h3", "subtitulo", "Etapa " + (etapaIdx + 1) + " de " + totalEt + ": " + etapa.titulo));
    const marcasEt = el("div", "marcas-etapas");
    for (let i = 0; i < totalEt; i++) {
      marcasEt.appendChild(el("span", "marca-etapa" + (i < etSol ? " hecha" : i === etapaIdx ? " actual" : ""), i < etSol ? "✓" : String(i + 1)));
    }
    cont.appendChild(marcasEt);

    /* Misión: texto + botón para oírla (pista auditiva) */
    const mision = el("div", "mision-caso");
    mision.innerHTML =
      "<span class='mision-icono'>📋</span><p><strong>Misión:</strong> " + etapa.mission + "</p>";
    const bOirMision = el("button", "btn-altavoz", "🔊");
    bOirMision.onclick = () => {
      C.Sfx.clic();
      C.Guia.habla(etapa.hablar);
    };
    mision.appendChild(bOirMision);
    cont.appendChild(mision);

    /* Pistas visuales (cada etapa tiene las suyas) */
    const textosPista = etapa.pistas || [];
    let indicePista = 0;
    const cajaPista = el("div", "caja-pista vacia");
    cajaPista.innerHTML = "💡 <strong>Pista:</strong> Toca «Pedir pista» para que el detective te ayude.";
    cont.appendChild(cajaPista);
    const bPista = el("button", "btn grande", "💡 Pedir pista");
    bPista.onclick = () => {
      C.Sfx.clic();
      window.DETECTIVE.marcarPista(caso.id);
      const i = Math.min(indicePista, textosPista.length - 1);
      if (i >= 0) {
        cajaPista.classList.remove("vacia");
        cajaPista.innerHTML = "💡 <strong>Pista:</strong> " + textosPista[i];
        C.Guia.habla(textosPista[i]);
      }
      indicePista++;
      bPista.textContent = indicePista < textosPista.length ? "💡 Pedir otra pista" : "💡 Repetir pista";
    };
    cont.appendChild(bPista);

    /* ---- ESCENARIO con objetos ocultos ---- */
    cont.appendChild(el("h3", "subtitulo", "Investiga el escenario"));

    if (etapa.patron) {
      const patron = el("div", "patron-serie");
      etapa.patron.forEach((e) => patron.appendChild(el("span", "patron-dibujo", e)));
      patron.appendChild(el("span", "patron-dibujo", "?"));
      cont.appendChild(patron);
      const consignaPatron = el("p", "consigna", "Toca el dibujo que sigue el patrón.");
      cont.appendChild(consignaPatron);
    }

    /* Estado local de la etapa */
    const revelados = {};
    let encontrados = 0;
    const sumaElegida = [];
    let numeroElegido = null;
    let clasificado = 0;
    let seleccionado = null;

    const zonaEsc = el("div", "escenario-caso");
    const btnPistas = el("div", "fila-botones");

    /* Contador persistente: se actualiza en vivo con cada toque */
    const cajaContador = el("div", "progreso-invento");

    function textoContador() {
      let txt = "";
      if (etapa.objetivo === "marcar") txt = "🔎 Encontrados " + encontrados + " de " + etapa.cuantosObjetivo;
      else if (etapa.objetivo === "sumar") {
        const s = sumaElegida.reduce((a, b) => a + b, 0);
        txt = "🧮 Suma: " + s + " de " + etapa.target + " (" + sumaElegida.length + " de " + etapa.cuantosObjetivo + ")";
      } else if (etapa.objetivo === "numero") txt = "🍎 " + (numeroElegido != null ? "Has elegido " + numeroElegido : "Elige el número");
      else if (etapa.objetivo === "clasificar") txt = "📦 Clasificados " + clasificado + " de " + etapa.items.length;
      else txt = "👆 Toca un dibujo";
      return txt;
    }

    function actualizarContador() {
      cajaContador.innerHTML = "<span class='progreso-texto'>" + textoContador() + "</span>";
    }

    function comprobarEtapa() {
      /* ¿Se ha completado? */
      if (etapa.objetivo === "marcar" && encontrados >= etapa.cuantosObjetivo) finalizarEtapa();
      else if (etapa.objetivo === "elegir" && seleccionado != null) finalizarEtapa();
      else if (etapa.objetivo === "numero" && numeroElegido != null) finalizarEtapa();
      else if (etapa.objetivo === "clasificar" && clasificado >= etapa.items.length) finalizarEtapa();
      else if (etapa.objetivo === "sumar" && sumaElegida.length === etapa.cuantosObjetivo) {
        const total = sumaElegida.reduce((a, b) => a + b, 0);
        if (total === etapa.target) finalizarEtapa();
        else {
          C.Sfx.mal();
          C.Guia.habla("Esa suma no llega a " + etapa.target + ". Prueba con otras cantidades.");
          sumaElegida.length = 0;
          pintarEscenario();
        }
      }
    }

    function finalizarEtapa() {
      C.Sfx.bien();
      const n = window.DETECTIVE.avanzarEtapa(caso.id);
      C.celebrar(cont);
      const overlay = $("#overlay-recompensa");
      const cuerpo = $("#recompensa-cuerpo");
      cuerpo.innerHTML = "";
      const fin = n >= window.DETECTIVE.totalEtapas(caso.id);
      cuerpo.appendChild(el("h2", "", fin ? "🎉 ¡Caso resuelto!" : "✅ ¡Etapa superada!"));
      cuerpo.appendChild(el("p", "", fin ? caso.exito : "¡Muy bien, detective! Vamos con la siguiente etapa."));
      /* Ayuda a la mascota */
      if (window.MASCOTA && window.MASCOTA.tiene()) {
        const subio = window.MASCOTA.sumarPuntos(fin ? 3 : 1);
        if (subio) pintarGuia();
      }
      cerrarCon(cuerpo, [
        {
          t: fin ? "🔐 Ver otros casos" : "➡️ Siguiente etapa",
          fn: () => {
            overlay.classList.remove("visible");
            if (fin) C.Nav.reemplazar("detective");
            else window.pantalla_caso({ id: caso.id });
          },
        },
        {
          t: "🏠 Menú",
          fn: () => {
            overlay.classList.remove("visible");
            C.Nav.reemplazar("home");
          },
        },
      ]);
      overlay.classList.add("visible");
    }

    function pintarEscenario() {
      zonaEsc.innerHTML = "";
      actualizarContador();
      /* En las etapas de ELEGIR (acertijo y serie) los dibujos SIEMPRE
         se ven: el niño necesita ver las opciones para escoger. */
      const opcionesVisibles = etapa.objetivo === "elegir";
      etapa.items.forEach((item) => {
        const b = el("button", "objeto-caso");
        const yaRevelado = revelados[item.id];
        const yaEncontrado = yaRevelado && item.ok;
        if (yaEncontrado) {
          b.classList.add("encontrado");
          b.innerHTML = "<span class='objeto-caso-emoji'>" + item.emoji + "</span><span class='objeto-caso-nombre'>" + (item.nombre || "") + "</span>";
        } else if (yaRevelado || opcionesVisibles) {
          b.classList.add("revelado");
          b.innerHTML = "<span class='objeto-caso-emoji'>" + item.emoji + "</span>" + (item.nombre ? "<span class='objeto-caso-nombre'>" + item.nombre + "</span>" : "");
        } else {
          b.classList.add("oculto");
          b.innerHTML = "<span class='objeto-caso-emoji'>❓</span>";
        }

        /* Elementos extra que muestra cada tipo de etapa */
        if (item.cantidad != null && !yaRevelado) {
          b.innerHTML += "<span class='objeto-caso-cantidad'>" + item.cantidad + "</span>";
        }

        b.onclick = () => {
          if (yaRevelado) {
            /* Si ya se incrustró, volver a tocarla no hace nada */
            return;
          }
          C.Sfx.clic();
          revelados[item.id] = true;
          const nombre = item.nombre || item.emoji;
          C.Guia.habla(nombre);

          if (etapa.objetivo === "clasificar") {
            /* Primero se revela, luego se elige el grupo */
            seleccionado = item;
            pintarEscenario();
            return;
          }

          if (etapa.objetivo === "marcar") {
            if (item.ok) {
              encontrados++;
              C.Sfx.bien();
              C.celebrar(zonaEsc);
            } else {
              C.Sfx.mal();
              C.Guia.habla("Este no empieza por la letra. Busca otro.");
            }
            pintarEscenario();
            comprobarEtapa();
            return;
          }

          if (etapa.objetivo === "elegir") {
            if (item.ok) {
              seleccionado = item;
              pintarEscenario();
              comprobarEtapa();
            } else {
              C.Sfx.mal();
              C.Guia.habla("Ese no sigue el patrón. Mira otra vez.");
              pintarEscenario();
            }
            return;
          }

          if (etapa.objetivo === "sumar") {
            sumaElegida.push(item.cantidad);
            pintarEscenario();
            comprobarEtapa();
            return;
          }

          if (etapa.objetivo === "numero") {
            pintarEscenario();
          }
        };
        zonaEsc.appendChild(b);
      });

      /* Opciones numéricas */
      if (etapa.objetivo === "numero") {
        const filaNum = el("div", "opciones-candado");
        etapa.opciones.forEach((n) => {
          const b = el("button", "btn grande opcion-candado" + (numeroElegido === n ? " usada" : ""), String(n));
          b.onclick = () => {
            C.Sfx.clic();
            numeroElegido = n;
            if (n === etapa.numeroCorrecto) {
              pintarEscenario();
              comprobarEtapa();
            } else {
              C.Sfx.mal();
              C.Guia.habla("Vuelve a contar los dibujos. Casi lo tienes.");
              numeroElegido = null;
              pintarEscenario();
            }
          };
          filaNum.appendChild(b);
        });
        zonaEsc.appendChild(filaNum);
      }

      /* Grupos para clasificar */
      if (etapa.objetivo === "clasificar") {
        const filaGrupos = el("div", "fila-grupos");
        etapa.grupos.forEach((g) => {
          const b = el("button", "btn grande grupo-caso");
          b.innerHTML = "<span class='grupo-emoji'>" + g.emoji + "</span><span class='grupo-nombre'>" + g.nombre + "</span>";
          b.onclick = () => {
            if (seleccionado == null) {
              C.Guia.habla("Primero toca un objeto del escenario.");
              return;
            }
            C.Sfx.clic();
            if (seleccionado.grupo === g.id) {
              C.Sfx.bien();
              clasificado++;
              seleccionado = null;
              pintarEscenario();
              comprobarEtapa();
            } else {
              C.Sfx.mal();
              C.Guia.habla("Ese objeto no es " + g.nombre + ". Piensa en el grupo.");
            }
          };
          filaGrupos.appendChild(b);
        });
        zonaEsc.appendChild(filaGrupos);
      }
    }

    pintarEscenario();
    cont.appendChild(zonaEsc);
    cont.appendChild(cajaContador);

    const bSalir = el("button", "btn grande", "⬅️ Otros casos");
    bSalir.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("detective");
    };
    btnPistas.appendChild(bSalir);
    cont.appendChild(btnPistas);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla(etapa.hablar);
    }
  };

  /* =========================================================
     Pantalla: Concurso de minijuegos (hub)
     Muestra las 5 rondas, los puntos y el INTERRUPTOR DEL
     RELOJ (opcional, apagado por defecto).
     ========================================================= */
  window.pantalla_concurso = function () {
    const cont = $("#contenido-concurso");
    cont.innerHTML = "";
    cont.appendChild(cabecera("🏆 Concurso de minijuegos", "Cinco rondas distintas. Cada una cambia de juego"));
    cont.appendChild(bannerCaratula("img/s-concurso.webp", "Trofeo, globos y estandartes del concurso"));

    const puntos = window.CONCURSO.puntosTotales();
    const hechas = window.CONCURSO.rondasHechas();
    const total = window.CONCURSO.totalRondas();

    /* ---- EL RELOJ ES OPCIONAL ---- */
    const conReloj = window.CONCURSO.conReloj();
    const cajaReloj = el("div", "caja-reloj" + (conReloj ? " activo" : ""));
    cajaReloj.innerHTML =
      "<div class='reloj-titulo'>⏱️ ¿Quieres el reloj?</div>" +
      "<p class='reloj-texto'>" +
      (conReloj
        ? "El reloj está <strong>ENCENDIDO</strong>. Tendrás un poco de tiempo para responder. ¡Se puede apagar!"
        : "El reloj está <strong>APAGADO</strong>. Puedes pensar todo el tiempo que necesites. Nadie te corre. ¡Así es más justo!") +
      "</p>";
    const filaReloj = el("div", "fila-botones");
    const bReloj = el("button", "btn grande " + (conReloj ? "" : "primario"), conReloj ? "🔕 Apagar el reloj" : "⏱️ Encender el reloj");
    bReloj.onclick = () => {
      C.Sfx.clic();
      const v = window.CONCURSO.setReloj(!window.CONCURSO.conReloj());
      C.Guia.habla(
        v
          ? "Reloj encendido. Ahora tienes que responder rápido, pero puedes volver a apagarlo cuando quieras."
          : "Reloj apagado. Puedes pensar todo el tiempo que necesites. ¡Mucho mejor!"
      );
      window.pantalla_concurso();
    };
    filaReloj.appendChild(bReloj);
    cajaReloj.appendChild(filaReloj);
    cont.appendChild(cajaReloj);

    /* ---- Marcador ---- */
    const marcador = el("div", "marcador-concurso");
    marcador.innerHTML =
      "<span class='marcador-item'>🏆 " + puntos + " puntos</span>" +
      "<span class='marcador-item'>✅ " + hechas + " de " + total + " rondas</span>";
    cont.appendChild(marcador);

    /* ---- Lista de rondas ---- */
    const rejilla = el("div", "rejilla-inventos");
    window.CONCURSO.rondas().forEach((r) => {
      const p = window.CONCURSO.progreso(r.id);
      const disp = window.CONCURSO.disponible(r.id);
      const card = el("button", "tarjeta-invento" + (p.terminada ? " terminado" : "") + (disp ? "" : " bloqueado"));
      card.style.setProperty("--c", r.color);
      const pct = p.terminada ? 100 : Math.min(100, Math.round((p.aciertos / 6) * 100));
      const info = p.terminada
        ? "✅ ¡Superada! " + p.puntos + " pts"
        : disp
        ? "🎯 " + p.aciertos + " aciertos · " + p.puntos + " pts"
        : "Se abre al ganar la anterior";

      card.innerHTML =
        "<span class='invento-icono'>" + (disp ? r.icono : "🔒") + "</span>" +
        "<span class='invento-nombre'>" + r.nombre + "</span>" +
        "<span class='invento-info'>" + info + "</span>" +
        "<span class='invento-barra'><i style='width:" + pct + "%;background:" + r.color + "'></i></span>";

      if (disp) {
        vozBoton(card, r.nombre + ". " + r.desc);
        card.onclick = () => {
          C.Sfx.clic();
          C.Nav.ir("ronda", { id: r.id });
        };
      } else {
        card.onclick = () => {
          C.Sfx.mal();
          C.Guia.habla("Primero gana la ronda anterior para abrir esta.");
        };
      }
      rejilla.appendChild(card);
    });
    cont.appendChild(rejilla);

    /* ---- Explicación ---- */
    const ayuda = el("div", "escape-intro");
    ayuda.innerHTML =
      "🏁 <strong>La Carrera</strong>: avanzas cuando aciertas. 🐢 <strong>Tortuga Zipa</strong> solo avanza si te equivocas.<br>" +
      "🎡 <strong>La Ruleta</strong>: el azar elige el desafío. ⏳ <strong>El Reloj</strong>: cuenta los objetos que aparecen. " +
      "🧠 <strong>La Memoria</strong>: encuentra las parejas. 👑 <strong>El Desafío Final</strong>: lectura y matemáticas juntas.";
    cont.appendChild(ayuda);

    const volver = el("button", "btn grande", "🏠 Menú");
    volver.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("home");
    };
    cont.appendChild(volver);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla("El concurso de minijuegos. El reloj está apagado para que puedas pensar sin prisa.");
    }
  };

  /* =========================================================
     Pantalla: una ronda del concurso en curso.
     Cada ronda tiene su propia mecánica.
     ========================================================= */
  window.pantalla_ronda = function (datos) {
    const cont = $("#contenido-ronda");
    const r = datos && datos.id ? window.CONCURSO.info(datos.id) : null;
    if (!r) {
      C.Nav.reemplazar("concurso");
      return;
    }
    cont.innerHTML = "";
    cont.appendChild(cabecera(r.icono + " " + r.nombre, "Ronda " + r.numero + " de " + window.CONCURSO.totalRondas()));

    const conReloj = window.CONCURSO.conReloj();
    const reg = window.CONCURSO.progreso(r.id);

    /* Ficha con la descripción de la ronda */
    const ficha = el("div", "ficha-invento");
    ficha.style.setProperty("--c", r.color);
    const globo = el("div", "globo-personaje");
    globo.innerHTML =
      "<div class='personaje-cara'>" + r.icono + "</div>" +
      "<div class='personaje-texto'><p>" + r.desc + "</p></div>";
    ficha.appendChild(globo);
    cont.appendChild(ficha);

    if (r.tipo === "carrera") pintarRondaCarrera(cont, r);
    else if (r.tipo === "ruleta") pintarRondaRuleta(cont, r);
    else if (r.tipo === "animacion") pintarRondaReloj(cont, r);
    else if (r.tipo === "memoria") pintarRondaMemoria(cont, r);
    else pintarRondaFinal(cont, r);

    /* Pie: salir */
    const fila = el("div", "fila-botones");
    const bSalir = el("button", "btn grande", "⬅️ Volver al concurso");
    bSalir.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("concurso");
    };
    fila.appendChild(bSalir);
    cont.appendChild(fila);
  };

  /* ---------------------------------------------------------
     Piezas comunes de las rondas
     --------------------------------------------------------- */

  /* Barra de tiempo (solo si el reloj está encendido) */
  function barraCrono(segundos) {
    const caja = el("div", "crono");
    const barra = el("div", "crono-barra");
    const relleno = el("i");
    barra.appendChild(relleno);
    caja.appendChild(barra);
    caja.appendChild(el("span", "crono-texto", "⏱️ " + segundos + "s"));
    return { caja: caja, relleno: relleno, total: segundos, restante: segundos };
  }

  /* Cuenta atrás real (requiere reloj encendido).
     Se detiene sola si el niño cambia de pantalla: el cronómetro
     deja de estar en el documento y la cadena de tiempo termina. */
  function arrancarCrono(c, alTerminar) {
    if (!c) return;
    c.restante = c.total;
    const tick = () => {
      /* Si la pantalla ya no está, no seguimos contando */
      if (!c.caja || !c.caja.isConnected) return;
      c.restante -= 0.1;
      const pct = Math.max(0, (c.restante / c.total) * 100);
      c.relleno.style.width = pct + "%";
      if (c.caja) {
        const t = c.caja.querySelector(".crono-texto");
        if (t) t.textContent = "⏱️ " + Math.max(0, Math.ceil(c.restante)) + "s";
      }
      if (c.restante <= 0) {
        if (alTerminar) alTerminar();
        return;
      }
      c.timer = setTimeout(tick, 100);
    };
    tick();
  }
  function pararCrono(c) {
    if (c && c.timer) clearTimeout(c.timer);
  }

  /* Muestra un reto con opciones grandes y comprueba la respuesta.
     alResponder(true)  -> acertó (la ronda avanza)
     alFallar()          -> falló (puede mover al rival, el niño repite)
     Devuelve true si acertó. */
  function mostrarReto(cont, reto, alResponder, alFallar) {
    const zona = el("div", "zona-reto");

    const enunciado = el("p", "enunciado-candado", reto.enunciado);
    zona.appendChild(enunciado);

    if (reto.emoji) {
      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML = "<div class='explorar-emoji'>" + reto.emoji + "</div>";
      zona.appendChild(card);
    }
    if (reto.emojis && reto.emojis.length) {
      const fila = el("div", "fila-emojis-reto");
      reto.emojis.forEach((e) => fila.appendChild(el("span", "emoji-reto", e)));
      zona.appendChild(fila);
    }
    if (reto.letras && reto.letras.length) {
      const fila = el("div", "fila-emojis-reto");
      reto.letras.forEach((e) => fila.appendChild(el("span", "letra-grande", e)));
      zona.appendChild(fila);
    }

    const bOir = el("button", "btn-altavoz", "🔊");
    bOir.onclick = () => {
      C.Sfx.clic();
      C.Guia.habla(reto.hablar);
    };
    zona.appendChild(bOir);
    C.Guia.habla(reto.hablar);

    const salida = el("div", "opciones-candado");
    zona.appendChild(salida);

    const elegidas = [];
    const zonaResp = el("div", "respuesta-candado");
    zona.appendChild(zonaResp);

    function pintarElegidas() {
      zonaResp.innerHTML = "";
      if (!reto.secuencia) return;
      elegidas.forEach((v) => zonaResp.appendChild(el("span", "elegida-chip", String(v))));
      if (elegidas.length < reto.correcto.length) zonaResp.appendChild(el("span", "elegida-hueco", "?"));
    }

    function comprobar() {
      let ok;
      if (reto.secuencia) {
        ok = elegidas.length === reto.correcto.length && elegidas.every((v, i) => v === reto.correcto[i]);
      } else {
        ok = elegidas[0] === reto.correcto;
      }
      if (ok) {
        C.Sfx.bien();
        C.celebrar(zona);
        if (alResponder) alResponder(true);
      } else {
        C.Sfx.mal();
        zonaResp.classList.add("mal");
        setTimeout(() => zonaResp.classList.remove("mal"), 600);
        elegidas.length = 0;
        pintarElegidas();
        pintarOpciones();
        /* La ronda se avisa del fallo (el niño puede repetir el reto) */
        if (alFallar) alFallar();
        else C.Guia.habla("Casi. Prueba otra vez con calma, tú puedes.");
      }
    }

    function pintarOpciones() {
      salida.innerHTML = "";
      const usadas = elegidas.slice();
      reto.opciones.forEach((v) => {
        const b = el("button", "btn grande opcion-candado");
        if (reto.svgOpcion && reto.svgOpcion[v]) {
          b.innerHTML =
            "<span class='opcion-figura'><svg viewBox='0 0 80 80' width='64' height='64'>" + reto.svgOpcion[v] + "</svg></span>" +
            "<span class='opcion-texto'>" + v + "</span>";
        } else {
          b.textContent = String(v);
        }
        if (usadas.indexOf(v) !== -1) b.classList.add("usada");
        b.onclick = () => {
          if (b.classList.contains("usada")) return;
          C.Sfx.clic();
          elegidas.push(v);
          if (reto.secuencia) {
            pintarElegidas();
            pintarOpciones();
            if (elegidas.length === reto.correcto.length) comprobar();
          } else {
            comprobar();
          }
        };
        salida.appendChild(b);
      });
    }

    pintarElegidas();
    pintarOpciones();
    cont.appendChild(zona);
    return zona;
  }

  /* ---------------------------------------------------------
     RONDA 1: LA CARRERA
     Tú avanzas al acertar; Zipa avanza al fallar.
     --------------------------------------------------------- */
  function pintarRondaCarrera(cont, r) {
    const conReloj = window.CONCURSO.conReloj();
    const TOTAL = 8;
    let pasoYo = 0;
    let pasoZipa = 0;
    let aciertos = 0;

    /* Pista de carrera */
    const pista = el("div", "pista-carrera");
    pista.appendChild(el("span", "pista-meta", "🏁 META"));
    const linea = el("div", "pista-linea");
    for (let i = 0; i < TOTAL; i++) linea.appendChild(el("span", "pista-hito"));
    pista.appendChild(linea);
    const corredorYo = el("div", "corredor yo", "🐱");
    const corredorZipa = el("div", "corredor zipa", "🐢");
    pista.appendChild(corredorYo);
    pista.appendChild(corredorZipa);
    cont.appendChild(pista);

    const marcador = el("div", "marcador-concurso");
    marcador.innerHTML =
      "<span class='marcador-item'>🐱 Tú: " + pasoYo + " / " + TOTAL + "</span>" +
      "<span class='marcador-item'>🐢 Zipa: " + pasoZipa + " / " + TOTAL + "</span>";
    cont.appendChild(marcador);

    const zona = el("div", "zona-ronda");
    cont.appendChild(zona);

    function situar() {
      const pos = (p) => "left:" + Math.min(100, (p / TOTAL) * 100) + "%;";
      corredorYo.style.cssText = pos(pasoYo) + "bottom:58px;";
      corredorZipa.style.cssText = pos(pasoZipa) + "bottom:14px;";
      marcador.innerHTML =
        "<span class='marcador-item'>🐱 Tú: " + pasoYo + " / " + TOTAL + "</span>" +
        "<span class='marcador-item'>🐢 Zipa: " + pasoZipa + " / " + TOTAL + "</span>";
    }
    situar();

    let crono = null;

    function siguientePregunta() {
      if (pasoYo >= TOTAL) {
        C.Sfx.bien();
        C.celebrar(cont);
        window.CONCURSO.registrar(r.id, true, 30);
        window.CONCURSO.terminarRonda(r.id, 50);
        mostrarFinalRonda(cont, r, true);
        return;
      }
      const reto = window.CONCURSO.generarReto();
      if (!reto) return;
      zona.innerHTML = "";
      zona.appendChild(el("h3", "subtitulo", "Pregunta " + (aciertos + 1) + " · ¡Acierta para avanzar!"));
      if (conReloj) {
        crono = barraCrono(15);
        zona.appendChild(crono.caja);
        arrancarCrono(crono, () => {
          /* Se acabó el tiempo: cuenta como fallo (solo con reloj).
             El niño sigue en la carrera: no se pierde nada. */
          C.Sfx.mal();
          pasoZipa++;
          window.CONCURSO.registrar(r.id, false, 0);
          situar();
          C.Guia.habla("¡Se acabó el tiempo! Pero puedes seguir, inténtalo otra vez.");
          siguientePregunta();
        });
      }
      mostrarReto(
        zona,
        reto,
        (acierto) => {
          pararCrono(crono);
          crono = null;
          if (acierto) {
            pasoYo++;
            aciertos++;
            window.CONCURSO.registrar(r.id, true, 10);
            C.Guia.habla("¡Bien! " + r.rival.nombre + " se queda atrás.");
          }
          situar();
          if (pasoYo >= TOTAL) {
            C.Sfx.bien();
            C.celebrar(cont);
            window.CONCURSO.terminarRonda(r.id, 50);
            mostrarFinalRonda(cont, r, true);
          } else {
            siguientePregunta();
          }
        },
        () => {
          /* Fallo: Zipa avanza un paso, pero el niño puede repetir */
          pasoZipa++;
          window.CONCURSO.registrar(r.id, false, 0);
          situar();
          C.Guia.habla(r.rival.nombre + " avanza un poquito. ¡Tú puedes! Inténtalo otra vez.");
        }
      );
    }

    siguientePregunta();
  }

  /* ---------------------------------------------------------
     RONDA 2: LA RULETA
     Gira y el azar elige el desafío.
     --------------------------------------------------------- */
  function pintarRondaRuleta(cont, r) {
    const conReloj = window.CONCURSO.conReloj();
    const desafios = window.CONCURSO.desafios();
    const R = 6;
    let girando = false;

    const cajaRuleta = el("div", "caja-ruleta");
    const rueda = el("div", "ruleta");
    const centro = el("span", "ruleta-centro", "🎯");

    /* Sectores con color (sin coma final: si no, el CSS es inválido) */
    const colores = ["#2f80ed", "#f2994a", "#9b51e0", "#06d6a0", "#eb5757", "#ffd166"];
    const sectores = [];
    for (let i = 0; i < R; i++) {
      const ini = (i / R) * 360;
      const fin = ((i + 1) / R) * 360;
      sectores.push(colores[i % colores.length] + " " + ini + "deg " + fin + "deg");
    }
    rueda.style.background = "conic-gradient(" + sectores.join(", ") + ")";

    /* Etiquetas alrededor */
    for (let i = 0; i < R; i++) {
      const d = desafios[i % desafios.length];
      const et = el("span", "ruleta-etiqueta", d.icono);
      const ang = (360 / R) * i + 360 / R / 2;
      et.style.transform = "rotate(" + ang + "deg) translateY(-108px) rotate(-" + ang + "deg)";
      rueda.appendChild(et);
    }
    rueda.appendChild(centro);
    cajaRuleta.appendChild(rueda);
    cajaRuleta.appendChild(el("span", "ruleta-flecha", "▼"));
    cont.appendChild(cajaRuleta);

    const zona = el("div", "zona-ronda");
    cont.appendChild(zona);

    const bGirar = el("button", "btn grande primario", "🎡 Girar la ruleta");
    cont.appendChild(bGirar);

    function girar() {
      if (girando) return;
      girando = true;
      bGirar.disabled = true;
      const elegido = Math.floor(Math.random() * R);
      const vueltas = 4 + Math.floor(Math.random() * 3);
      /* Cada sector ocupa 360/R grados; el sector 0 está arriba */
      const angulo = vueltas * 360 + (360 - elegido * (360 / R) - 360 / R / 2);
      rueda.style.transform = "rotate(" + angulo + "deg)";
      const d = desafios[elegido % desafios.length];
      setTimeout(() => {
        girando = false;
        bGirar.disabled = false;
        bGirar.textContent = "🎡 Girar otra vez";
        C.Guia.habla("¡Ha salido " + (d.etiqueta || "un desafío") + "!");
        presentarReto(d.id);
      }, 2200);
    }
    bGirar.onclick = () => {
      C.Sfx.clic();
      girar();
    };

    function presentarReto(tipo) {
      const reto = window.CONCURSO.generarReto(tipo);
      if (!reto) return;
      zona.innerHTML = "";
      zona.appendChild(el("h3", "subtitulo", (reto.iconoDesafio || "🎯") + " " + (reto.etiqueta || "Desafío")));
      let crono = null;
      if (conReloj) {
        crono = barraCrono(20);
        zona.appendChild(crono.caja);
        arrancarCrono(crono, () => {
          C.Sfx.mal();
          window.CONCURSO.registrar(r.id, false, 0);
          C.Guia.habla("¡Se acabó el tiempo! Puedes girar la ruleta otra vez.");
          zona.innerHTML = "";
        });
      }
      mostrarReto(zona, reto, (acierto) => {
        pararCrono(crono);
        if (acierto) {
          window.CONCURSO.registrar(r.id, true, 15);
          const nuevas = window.CONCURSO.progreso(r.id);
          if (nuevas.aciertos >= 5) {
            window.CONCURSO.terminarRonda(r.id, 40);
            mostrarFinalRonda(cont, r, true);
          } else {
            C.Guia.habla("¡Muy bien! Te quedan " + (5 - nuevas.aciertos) + " para ganar la ronda.");
          }
        }
      });
    }
  }

  /* ---------------------------------------------------------
     RONDA 3: EL RELOJ
     Los objetos aparecen uno a uno; hay que contarlos.
     --------------------------------------------------------- */
  function pintarRondaReloj(cont, r) {
    const conReloj = window.CONCURSO.conReloj();
    const emojis = ["🍎", "⭐", "🍬", "🎈", "🐤", "🌸"];
    const e = emojis[Math.floor(Math.random() * emojis.length)];
    const total = 4 + Math.floor(Math.random() * 5);

    cont.appendChild(el("h3", "subtitulo", "Cuenta los " + e + " que van apareciendo"));

    const escena = el("div", "escena-aparicion");
    cont.appendChild(escena);

    const opciones = el("div", "opciones-candado");
    cont.appendChild(opciones);

    const crono = conReloj ? barraCrono(25) : null;
    if (crono) cont.appendChild(crono.caja);

    let mostrados = 0;
    let respondido = false;
    let timer = null;

    function aparecer() {
      /* Si el niño se ha ido a otra pantalla, paramos la animación */
      if (!escena.isConnected) return;
      if (mostrados >= total) {
        if (conReloj) {
          arrancarCrono(crono, () => {
            if (!respondido) {
              C.Sfx.mal();
              window.CONCURSO.registrar(r.id, false, 0);
              C.Guia.habla("¡Se acabó el tiempo! Mira bien y cuenta otra vez.");
              responder(0, true);
            }
          });
        }
        return;
      }
      const d = el("div", "objeto-aparece", e);
      escena.appendChild(d);
      mostrados++;
      timer = setTimeout(aparecer, 550);
    }

    function responder(n, tiempoAgotado) {
      if (respondido) return;
      respondido = true;
      if (timer) clearTimeout(timer);
      pararCrono(crono);
      const correcto = n === total;
      if (correcto) {
        C.Sfx.bien();
        C.celebrar(escena);
        window.CONCURSO.registrar(r.id, true, 20);
        C.Guia.habla("¡Correcto! Eran " + total + ".");
        const nuevas = window.CONCURSO.progreso(r.id);
        if (nuevas.aciertos >= 4) {
          window.CONCURSO.terminarRonda(r.id, 40);
          mostrarFinalRonda(cont, r, true);
        } else {
          C.Guia.habla("Te quedan " + (4 - nuevas.aciertos) + " rondas más.");
        }
      } else {
        C.Sfx.mal();
        window.CONCURSO.registrar(r.id, false, 0);
        C.Guia.habla(
          tiempoAgotado
            ? "Se acabó el tiempo. Respira y vuelve a intentarlo."
            : "No era esa cantidad. Mira los objetos otra vez y cuenta despacio."
        );
        respondido = false;
        mostrados = 0;
        escena.innerHTML = "";
        if (crono) {
          crono.relleno.style.width = "100%";
          crono.restante = crono.total;
        }
        setTimeout(() => {
          aparecer();
        }, 900);
      }
    }
    

    /* Opciones de cantidad */
    const nats = new Set([total]);
    while (nats.size < 4) nats.add(Math.max(1, total + (Math.floor(Math.random() * 4) - 2)));
    Array.from(nats)
      .sort((a, b) => a - b)
      .forEach((n) => {
        const b = el("button", "btn grande opcion-candado", String(n));
        b.onclick = () => {
          if (respondido) return;
          C.Sfx.clic();
          responder(n, false);
        };
        opciones.appendChild(b);
      });

    aparecer();
  }

  /* ---------------------------------------------------------
     RONDA 4: LA MEMORIA
     Parejas: la palabra y su letra inicial.
     --------------------------------------------------------- */
  function pintarRondaMemoria(cont, r) {
    const data = window.CONCURSO.generarMemoria(6);
    if (!data) return;
    cont.appendChild(el("h3", "subtitulo", "Encuentra las parejas: la palabra con su letra"));

    const tablero = el("div", "tablero-memoria");
    cont.appendChild(tablero);

    let primera = null;
    let bloqueo = false;
    let encontrados = 0;

    data.cartas.forEach((c) => {
      const b = el("button", "carta-memoria");
      b.dataset.par = String(c.par);
      b.dataset.lado = c.lado;
      b.innerHTML = "<span class='carta-cara'>❓</span>";
      b.onclick = () => {
        if (bloqueo || b.classList.contains("abierta") || b.classList.contains("hecha")) return;
        C.Sfx.clic();
        b.classList.add("abierta");
        b.innerHTML =
          "<span class='carta-cara'>" + (c.emoji || "") + "</span>" +
          "<span class='carta-texto'>" + c.txt + "</span>";
        if (!primera) {
          primera = b;
          return;
        }
        if (primera.dataset.par === b.dataset.par) {
          /* ¡Pareja! */
          bloqueo = true;
          primera.classList.add("hecha");
          b.classList.add("hecha");
          C.Sfx.bien();
          encontrados++;
          window.CONCURSO.registrar(r.id, true, 15);
          if (typeof actualizarContador === "function") actualizarContador();
          setTimeout(() => {
            primera = null;
            bloqueo = false;
            if (encontrados >= data.pares) {
              window.CONCURSO.terminarRonda(r.id, 50);
              mostrarFinalRonda(cont, r, true);
            }
          }, 550);
        } else {
          /* No son pareja: se vuelven a tapar */
          bloqueo = true;
          C.Sfx.mal();
          setTimeout(() => {
            primera.classList.remove("abierta");
            primera.innerHTML = "<span class='carta-cara'>❓</span>";
            b.classList.remove("abierta");
            b.innerHTML = "<span class='carta-cara'>❓</span>";
            primera = null;
            bloqueo = false;
          }, 900);
        }
      };
      tablero.appendChild(b);
    });

    const contador = el("div", "progreso-invento");
    contador.innerHTML = "<span class='progreso-texto'>🧠 Parejas encontradas: 0 de " + data.pares + "</span>";
    cont.appendChild(contador);

    /* El contador se actualiza en el momento (sin temporizadores
       que puedan quedar activos si el niño se va a otra pantalla). */
    const actualizarContador = () => {
      const c = tablero.querySelectorAll(".carta-memoria.hecha").length / 2;
      contador.innerHTML =
        "<span class='progreso-texto'>🧠 Parejas encontradas: " + c + " de " + data.pares + "</span>";
    };
  }

  /* ---------------------------------------------------------
     RONDA 5: EL DESAFÍO FINAL
     Alterna lectura y matemáticas.
     --------------------------------------------------------- */
  function pintarRondaFinal(cont, r) {
    const NECESARIOS = 4;
    const tipos = ["inicial", "silaba", "suma", "cuenta", "forma", "sonido", "imagen", "serie", "problema", "mayus"];
    let ronda = 0;

    const marcador = el("div", "marcador-concurso");
    cont.appendChild(marcador);

    const zona = el("div", "zona-ronda");
    cont.appendChild(zona);

    function pintarMarcador() {
      const p = window.CONCURSO.progreso(r.id);
      marcador.innerHTML =
        "<span class='marcador-item'>👑 " + p.aciertos + " de " + NECESARIOS + "</span>" +
        "<span class='marcador-item'>🏆 " + p.puntos + " pts</span>";
    }
    pintarMarcador();

    function siguiente() {
      /* Alterna lectura y matemáticas */
      const esMate = ronda % 2 === 1;
      const tiposMate = ["suma", "cuenta", "serie", "problema"];
      const tiposLectura = ["inicial", "silaba", "sonido", "imagen", "forma", "mayus"];
      const lista = esMate ? tiposMate : tiposLectura;
      const tipo = lista[Math.floor(Math.random() * lista.length)];
      const reto = window.CONCURSO.generarReto(tipo);
      if (!reto) return;
      zona.innerHTML = "";
      zona.appendChild(
        el("h3", "subtitulo", "Desafío " + (ronda + 1) + " de " + NECESARIOS + (esMate ? " · 🔢 Matemáticas" : " · 📖 Lectura"))
      );
      mostrarReto(zona, reto, (acierto) => {
        if (acierto) {
          window.CONCURSO.registrar(r.id, true, 20);
          ronda++;
          pintarMarcador();
          if (ronda >= NECESARIOS) {
            window.CONCURSO.terminarRonda(r.id, 60);
            mostrarFinalRonda(cont, r, true);
          } else {
            C.Guia.habla("¡Muy bien! Vamos con el siguiente desafío.");
            siguiente();
          }
        }
      });
    }
    siguiente();
  }

  /* Muestra el final de una ronda ganada */
  function mostrarFinalRonda(cont, r, ganada) {
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    const p = window.CONCURSO.progreso(r.id);
    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", ganada ? "🏆 ¡Ronda ganada!" : "🌟 ¡Ronda terminada!"));
    cuerpo.appendChild(
      el("p", "", ganada ? "¡Enhorabuena! Superaste " + r.nombre + "." : "Lo intentaste y aprendiste mucho.")
    );
    cuerpo.appendChild(
      el("p", "mascota-extra", "⭐ " + p.aciertos + " aciertos · 🏆 " + p.puntos + " puntos")
    );
    /* Ayuda a la mascota */
    if (window.MASCOTA && window.MASCOTA.tiene()) {
      const subio = window.MASCOTA.sumarPuntos(2);
      if (subio) pintarGuia();
    }
    cerrarCon(cuerpo, [
      {
        t: "🎡 Siguiente ronda",
        fn: () => {
          overlay.classList.remove("visible");
          const sig = window.CONCURSO.siguiente();
          if (sig) C.Nav.reemplazar("ronda", { id: sig.id });
          else C.Nav.reemplazar("concurso");
        },
      },
      {
        t: "🏠 Menú",
        fn: () => {
          overlay.classList.remove("visible");
          C.Nav.reemplazar("home");
        },
      },
    ]);
    overlay.classList.add("visible");
  }

  /* =========================================================
     Pantalla: Laboratorio de sonidos y palabras
     Menú de los 6 experimentos.
     ========================================================= */
  window.pantalla_laboratorio = function () {
    const cont = $("#contenido-laboratorio");
    cont.innerHTML = "";
    cont.appendChild(cabecera("🔬 Laboratorio de sonidos", "Escucha, pronuncia y juega con el ritmo"));
    cont.appendChild(bannerCaratula("img/s-laboratorio.webp", "Matraces con burbujas de colores"));

    cont.appendChild(
      el(
        "p",
        "taller-intro",
        "Aquí el laboratorio reproduce sonidos y palabras. Escucha con atención, repite en voz alta y toca las palmadas para separar las sílabas."
      )
    );

    const rejilla = el("div", "rejilla-inventos");
    window.LABORATORIO.ACTIVIDADES.forEach((a) => {
      const p = window.LABORATORIO.progreso(a.id);
      const card = el("button", "tarjeta-invento");
      card.style.setProperty("--c", "#2d9cdb");
      card.innerHTML =
        "<span class='invento-icono'>" + a.icono + "</span>" +
        "<span class='invento-nombre'>" + a.nombre + "</span>" +
        "<span class='invento-info'>" + a.desc + "</span>" +
        "<span class='invento-barra'><i style='width:" + Math.min(100, p.aciertos * 10) + "%;background:#2d9cdb'></i></span>";
      vozBoton(card, a.nombre + ". " + a.desc);
      card.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("experimento", { id: a.id });
      };
      rejilla.appendChild(card);
    });
    cont.appendChild(rejilla);

    /* Marcador del laboratorio */
    const marcador = el("div", "marcador-concurso");
    marcador.innerHTML =
      "<span class='marcador-item'>✅ " + window.LABORATORIO.totalAciertos() + " aciertos</span>" +
      "<span class='marcador-item'>🎤 " + window.LABORATORIO.lecturasHechas() + " lecturas grabadas</span>";
    cont.appendChild(marcador);

    /* Aviso sobre el micrófono */
    const puedeEscuchar = window.LABORATORIO.soportaEscucha();
    const puedeGrabar = window.LABORATORIO.soportaGrabacion();
    const aviso = el("div", "aviso-micro");
    if (puedeEscuchar || puedeGrabar) {
      aviso.innerHTML =
        "🎤 <strong>Tu dispositivo puede escuchar tu voz.</strong> En «Mi lectura» el micrófono se activa solo cuando pulses el botón.";
    } else {
      aviso.innerHTML =
        "🎤 <strong>Este dispositivo no tiene micrófono disponible.</strong> No pasa nada: puedes repetir la palabra en voz alta igualmente.";
    }
    cont.appendChild(aviso);

    const volver = el("button", "btn grande", "🏠 Menú");
    volver.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("home");
    };
    cont.appendChild(volver);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla("El laboratorio de sonidos. Toca un experimento para empezar.");
    }
  };

  /* =========================================================
     Pantalla: un experimento del laboratorio
     ========================================================= */
  window.pantalla_experimento = function (datos) {
    const cont = $("#contenido-experimento");
    const act = datos && datos.id ? window.LABORATORIO.ACTIVIDADES.filter((a) => a.id === datos.id)[0] : null;
    if (!act) {
      C.Nav.reemplazar("laboratorio");
      return;
    }
    cont.innerHTML = "";
    cont.appendChild(cabecera(act.icono + " " + act.nombre, act.desc));

    if (act.id === "voz") pintarExperimentoVoz(cont, act);
    else if (act.id === "silabas") pintarExperimentoSilabas(cont, act);
    else pintarExperimentoNormal(cont, act);
  };

  /* ---------------------------------------------------------
     Experimentos de opción múltiple (sonido, letra, parecidas, rima)
     --------------------------------------------------------- */
  function pintarExperimentoNormal(cont, act) {
    const reto = window.LABORATORIO.generarReto(act.id);
    if (!reto) {
      cont.appendChild(el("p", "consigna", "Ahora mismo no hay retos disponibles. ¡Vuelve en un momento!"));
      return;
    }

    const zona = el("div", "zona-ronda");
    cont.appendChild(zona);

    /* Botón de escuchar (siempre disponible) */
    const bEscuchar = el("button", "btn grande primario", "🔊 Escuchar");
    bEscuchar.onclick = () => {
      C.Sfx.clic();
      C.Voz.decir(reto.hablar);
    };
    cont.appendChild(bEscuchar);
    if (C.Voz && !C.Voz.silenciado) C.Voz.decir(reto.hablar);

    /* Tarjeta con el estímulo */
    const tarjeta = el("div", "tarjeta-explorar");
    let extra = "";
    if (reto.tipo === "sonido") {
      extra = "<div class='explorar-emoji'>🔊</div>";
    } else if (reto.tipo === "sonido-inverso") {
      extra = "<div class='explorar-emoji'>" + reto.emoji + "</div><div class='explorar-texto'>" + reto.nombre + "</div>";
    } else if (reto.tipo === "letra") {
      extra = "<div class='explorar-texto grande'>«" + reto.sonido + "»</div>";
    } else {
      extra = "<div class='explorar-emoji'>" + (reto.emoji || "❓") + "</div>";
    }
    tarjeta.innerHTML = extra;
    zona.appendChild(tarjeta);

    const consigna = el("p", "consigna", reto.hablar);
    zona.appendChild(consigna);

    /* Pista */
    const cajaPista = el("div", "caja-pista vacia");
    cajaPista.innerHTML = "💡 <strong>Pista:</strong> Toca «Pedir pista» si necesitas ayuda.";
    zona.appendChild(cajaPista);
    const bPista = el("button", "btn grande", "💡 Pedir pista");
    bPista.onclick = () => {
      C.Sfx.clic();
      cajaPista.classList.remove("vacia");
      cajaPista.innerHTML = "💡 <strong>Pista:</strong> " + reto.pista;
      C.Guia.habla(reto.pista);
    };
    zona.appendChild(bPista);

    /* Opciones */
    const salida = el("div", "opciones-candado");
    zona.appendChild(salida);
    let resueltos = 0;

    reto.opciones.forEach((op) => {
      const b = el("button", "btn grande opcion-candado");
      if (reto.tipo === "sonido-inverso") {
        b.innerHTML = "<span class='opcion-texto'>" + op.s + "</span>";
      } else if (op.emoji) {
        b.innerHTML = "<span class='opcion-emoji'>" + op.emoji + "</span><span class='opcion-texto'>" + op.n + "</span>";
      } else {
        b.textContent = String(op);
      }
      b.onclick = () => {
        if (b.classList.contains("usada")) return;
        C.Sfx.clic();
        const ok = op === reto.objetivo || op.n === reto.objetivo || op.s === reto.objetivo;
        if (ok) {
          C.Sfx.bien();
          C.celebrar(zona);
          b.classList.add("usada");
          resueltos++;
          window.LABORATORIO.registrar(act.id, true);
          C.Guia.habla("¡Correcto!");
          if (resueltos >= 5) {
            setTimeout(() => {
              const p = window.LABORATORIO.progreso(act.id);
              C.Guia.habla("¡Muy bien! Has acertado " + p.aciertos + " veces en " + act.nombre + ".");
              window.pantalla_experimento({ id: act.id });
            }, 1200);
          } else {
            setTimeout(() => {
              window.pantalla_experimento({ id: act.id });
            }, 1400);
          }
        } else {
          C.Sfx.mal();
          b.classList.add("usada");
          window.LABORATORIO.registrar(act.id, false);
          C.Guia.habla("Ese no es. Escucha otra vez y prueba con otro.");
          zona.classList.add("temblor");
          setTimeout(() => zona.classList.remove("temblor"), 600);
        }
      };
      salida.appendChild(b);
    });

    /* Pie */
    const fila = el("div", "fila-botones");
    const bSalir = el("button", "btn grande", "⬅️ Otros experimentos");
    bSalir.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("laboratorio");
    };
    fila.appendChild(bSalir);
    cont.appendChild(fila);
  }

  /* ---------------------------------------------------------
     Experimento ESTRELLA: sílabas con palmadas
     1) Escucha la palabra y da una palmada por sílaba.
     2) Ordena las sílabas para reconstruirla.
     --------------------------------------------------------- */
  function pintarExperimentoSilabas(cont, act) {
    const reto = window.LABORATORIO.generarReto("silabas");
    if (!reto) return;

    const zona = el("div", "zona-ronda");
    cont.appendChild(zona);

    /* Fase 1: las palmadas */
    const consigna = el("p", "consigna", "Escucha la palabra y da <strong>una palmada por cada sílaba</strong>.");
    zona.appendChild(consigna);

    const bEscuchar = el("button", "btn grande primario", "🔊 Escuchar la palabra");
    bEscuchar.onclick = () => {
      C.Sfx.clic();
      C.Voz.decir(reto.palabra);
    };
    zona.appendChild(bEscuchar);
    if (C.Voz && !C.Voz.silenciado) C.Voz.decir(reto.palabra);

    const palms = el("div", "palms-palmadas");
    zona.appendChild(palms);

    let fase = 1;
    let contadas = 0;
    const silabas = reto.silabas.slice();

    const bPalmada = el("button", "btn grande palmada-btn", "👏 Palma");
    bPalmada.onclick = () => {
      if (fase !== 1) return;
      C.Sfx.clic();
      if (contadas >= silabas.length) return;
      const s = silabas[contadas];
      contadas++;
      const marca = el("span", "palmada-silaba", s);
      palms.appendChild(marca);
      /* Cada palmada dice su sílaba */
      C.Voz.decir(s);
      if (contadas >= silabas.length) {
        fase = 2;
        setTimeout(() => {
          C.Guia.habla("¡Muy bien! La palabra " + reto.palabra + " tiene " + silabas.length + " sílabas. Ahora ordénalas.");
          pintarOrden();
        }, 900);
      }
    };
    zona.appendChild(bPalmada);

    const pistaPalm = el("p", "ayuda-texto", "Las palmadas ya están: " + silabas.length + " sílabas.");
    zona.appendChild(pistaPalm);

    /* Fase 2: ordenar las sílabas */
    function pintarOrden() {
      zona.innerHTML = "";
      zona.appendChild(el("h3", "subtitulo", "Ahora ordena las sílabas para formar " + reto.palabra));
      const orden = el("div", "slas-orden");
      zona.appendChild(orden);

      const elegida = [];
      const botones = el("div", "opciones-candado");
      zona.appendChild(botones);

      reto.barajadas.forEach((s, i) => {
        const b = el("button", "btn grande opcion-candado silaba-opcion", s);
        b.onclick = () => {
          if (b.classList.contains("usada") || fase !== 2) return;
          C.Sfx.clic();
          b.classList.add("usada");
          elegida.push({ s: s, i: i });
          const chip = el("span", "slas-chip", s);
          orden.appendChild(chip);
          if (elegida.length === silabas.length) {
            const esCorrecto = elegida.every((x, k) => x.s === silabas[k]);
            if (esCorrecto) {
              C.Sfx.bien();
              C.celebrar(zona);
              window.LABORATORIO.registrar(act.id, true);
              const chipOk = el("div", "slas-resultado");
              chipOk.innerHTML = "<strong>" + reto.emoji + " " + reto.palabra + "</strong> — ¡lo lograste!";
              zona.appendChild(chipOk);
              C.Voz.decir(reto.palabra);
              setTimeout(() => window.pantalla_experimento({ id: act.id }), 2000);
            } else {
              C.Sfx.mal();
              window.LABORATORIO.registrar(act.id, false);
              zona.classList.add("temblor");
              setTimeout(() => zona.classList.remove("temblor"), 600);
              C.Guia.habla("Ese orden no forma la palabra. Prueba otra vez.");
              setTimeout(() => {
                elegida.length = 0;
                orden.innerHTML = "";
                botones.querySelectorAll(".usada").forEach((x) => x.classList.remove("usada"));
              }, 700);
            }
          }
        };
        botones.appendChild(b);
      });
    }

    const fila = el("div", "fila-botones");
    const bSalir = el("button", "btn grande", "⬅️ Otros experimentos");
    bSalir.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("laboratorio");
    };
    fila.appendChild(bSalir);
    cont.appendChild(fila);
  }

  /* ---------------------------------------------------------
     Experimento: MI LECTURA (grabar la voz)
     Usa el micrófono si el dispositivo lo permite; si no,
     ofrece escuchar y repetir.
     --------------------------------------------------------- */
  function pintarExperimentoVoz(cont, act) {
    const palabras = window.LABORATORIO.PALABRAS.filter((p) => p.syl.length <= 2);
    const p = palabras[Math.floor(Math.random() * palabras.length)];

    const zona = el("div", "zona-ronda");
    cont.appendChild(zona);

    const tarjeta = el("div", "tarjeta-explorar");
    tarjeta.innerHTML =
      "<div class='explorar-emoji'>" + p.emoji + "</div><div class='explorar-texto grande'>" + p.w + "</div>";
    zona.appendChild(tarjeta);

    const consigna = el("p", "consigna", "Lee en voz alta: <strong>" + p.w + "</strong>");
    zona.appendChild(consigna);

    const bEscuchar = el("button", "btn grande", "🔊 Escuchar cómo se dice");
    bEscuchar.onclick = () => {
      C.Sfx.clic();
      C.Voz.decir(p.w);
    };
    zona.appendChild(bEscuchar);
    if (C.Voz && !C.Voz.silenciado) C.Voz.decir(p.w);

    const puedeEscuchar = window.LABORATORIO.soportaEscucha();
    const puedeGrabar = window.LABORATORIO.soportaGrabacion();

    const cajaEstado = el("div", "caja-pista");
    cajaEstado.innerHTML =
      "🎤 " + (puedeEscuchar || puedeGrabar ? "Toca el botón para usar el micrófono." : "Aquí puedes repetir la palabra en voz alta.");
    zona.appendChild(cajaEstado);

    let parador = null;

    const bGrabar = el("button", "btn grande primario", "🎤 Grabar mi lectura");
    bGrabar.onclick = () => {
      if (parador) {
        parador();
        parador = null;
        bGrabar.textContent = "🎤 Grabar mi lectura";
        return;
      }
      C.Sfx.clic();
      if (puedeEscuchar) {
        cajaEstado.classList.remove("vacia");
        cajaEstado.innerHTML = "🎤 <strong>Escuchando…</strong> Di la palabra en voz alta.";
        bGrabar.textContent = "⏹️ Detener";
        parador = window.LABORATORIO.escuchar(
          (texto) => {
            parador = null;
            bGrabar.textContent = "🎤 Grabar mi lectura";
            if (!texto) {
              cajaEstado.innerHTML = "🎤 No te oí. ¡Inténtalo otra vez!";
              return;
            }
            window.LABORATORIO.sumarLectura();
            const pct = window.LABORATORIO.parecido(texto, p.w);
            if (pct >= window.LABORATORIO.UMBRAL_BIEN) {
              C.Sfx.bien();
              C.celebrar(zona);
              window.LABORATORIO.registrar(act.id, true);
              cajaEstado.innerHTML = "🎤 <strong>¡Perfecto!</strong> Te oí decir «" + texto + "». ¡Muy bien leído!";
              C.Guia.habla("¡Muy bien! Lo leíste perfecto.");
            } else {
              C.Sfx.mal();
              cajaEstado.innerHTML =
                "🎤 Te oí decir «" + texto + "». ¡Casi! Escucha otra vez e inténtalo: <strong>" + p.w + "</strong>";
              C.Guia.habla("Casi. Escucha otra vez cómo se dice e inténtalo de nuevo.");
            }
          },
          (err) => {
            parador = null;
            bGrabar.textContent = "🎤 Grabar mi lectura";
            const msg =
              err === "not-allowed" || err === "permiso-denegado"
                ? "No se pudo usar el micrófono. Puedes repetir la palabra en voz alta."
                : err === "no-speech"
                ? "No te oí. ¡Inténtalo otra vez!"
                : "No se pudo escuchar. Puedes repetir la palabra en voz alta.";
            cajaEstado.innerHTML = "🎤 " + msg;
          }
        );
      } else if (puedeGrabar) {
        cajaEstado.classList.remove("vacia");
        cajaEstado.innerHTML = "🎤 <strong>Grabando…</strong> Lee la palabra en voz alta.";
        bGrabar.textContent = "⏹️ Detener";
        parador = window.LABORATORIO.grabar(
          (url) => {
            parador = null;
            bGrabar.textContent = "🎤 Grabar mi lectura";
            window.LABORATORIO.sumarLectura();
            window.LABORATORIO.registrar(act.id, true);
            const bAudio = el("button", "btn grande", "▶️ Escuchar mi voz");
            bAudio.onclick = () => {
              C.Sfx.clic();
              const a = new Audio(url);
              a.play().catch(() => {});
            };
            zona.appendChild(bAudio);
            cajaEstado.innerHTML = "🎤 <strong>¡Grabado!</strong> Pulsa «Escuchar mi voz» para oírte.";
          },
          () => {
            parador = null;
            bGrabar.textContent = "🎤 Grabar mi lectura";
            cajaEstado.innerHTML = "🎤 No se pudo grabar. Puedes repetir la palabra en voz alta.";
          }
        );
      } else {
        cajaEstado.innerHTML =
          "🎤 Este dispositivo no tiene micrófono. Repite la palabra en voz alta: <strong>" + p.w + "</strong>";
        C.Guia.habla("Repite la palabra en voz alta: " + p.w);
      }
    };
    zona.appendChild(bGrabar);

    /* Cuenta de lecturas */
    const lecturas = el("div", "progreso-invento");
    lecturas.innerHTML =
      "<span class='progreso-texto'>🎤 Lecturas grabadas: " + window.LABORATORIO.lecturasHechas() + "</span>";
    cont.appendChild(lecturas);
    cont.appendChild(zona);

    const fila = el("div", "fila-botones");
    const bOtra = el("button", "btn grande", "🔄 Otra palabra");
    bOtra.onclick = () => {
      C.Sfx.clic();
      window.pantalla_experimento({ id: act.id });
    };
    fila.appendChild(bOtra);
    const bSalir = el("button", "btn grande", "⬅️ Otros experimentos");
    bSalir.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("laboratorio");
    };
    fila.appendChild(bSalir);
    cont.appendChild(fila);
  }

  /* =========================================================
     Motores 3D activos
     El navegador solo admite unos pocos contextos WebGL a la
     vez, así que al cambiar de pantalla hay que soltar los
     anteriores. core.js llama a window.AV_LIMPIAR_3D().
     ========================================================= */
  const motores3d = [];

  function registrarMotor3d(motor) {
    if (motor) motores3d.push(motor);
    return motor;
  }

  function liberarMotores3d() {
    while (motores3d.length) {
      const m = motores3d.pop();
      try {
        m.liberar();
      } catch (e) {
        try {
          m.detener();
        } catch (e2) {}
      }
    }
  }

  window.AV_LIMPIAR_3D = liberarMotores3d;
  /* El guia se refresca al cambiar de pantalla (lo llama core.js) */
  window.AV_REFRESCAR_GUIA = function () {
    pintarGuia();
  };

  /* Monta el personaje 3D (WebGL o SVG de respaldo) y activa el giro */
  function montarAventurero(contenedor, equipado, opciones) {
    opciones = opciones || {};
    /* Si la pantalla se vuelve a dibujar sin cambiar de pantalla, el
       motor anterior sigue vivo y el navegador se queda sin contextos
       WebGL (solo admite unos pocos). Se sueltan antes del nuevo. */
    if (opciones.liberarAntes !== false) liberarMotores3d();
    /* El personaje es el modelo 3D del usuario */
    if (opciones.modeloUrl === undefined) {
      opciones.modeloUrl = window.AV_MODELO_URL || null;
    }
    if (opciones.piel === undefined) {
      opciones.piel = tonoPielActual();
    }
    if (opciones.colores === undefined) {
      opciones.colores = coloresGuardados();
    }
    const m = window.AV_PERSONAJE.montar3d(equipado, contenedor, opciones);
    if (m && m.motor) {
      registrarMotor3d(m.motor);
      /* Se recuerda la perspectiva que eligio el niño */
      const v = (C.Store.data.aventurero || {}).vista;
      if (v && m.motor.moverVista) m.motor.moverVista(v.giro, v.altura);
      if (m.motor.alCambiarVista) {
        m.motor.alCambiarVista((vv) => {
          if (!C.Store.data.aventurero) return;
          C.Store.data.aventurero.vista = vv;
          C.Store.save();
        });
      }
    }
    return m;
  }

  /* Pequeño rebote del personaje al cambiar la ropa: se nota el
     cambio sin que el nino tenga que mirarlo con atencion. */
  function rebotePersonaje() {
    const lienzo = document.querySelector(
      ".pantalla.activa .av-lienzo3d, .pantalla.activa .panel-aventurero-figura .av-lienzo3d"
    );
    if (!lienzo) return;
    lienzo.classList.remove("con-rebote");
    /* forzamos el reflow para que la animacion vuelva a empezar */
    void lienzo.offsetWidth;
    lienzo.classList.add("con-rebote");
    setTimeout(() => lienzo.classList.remove("con-rebote"), 650);
    /* y un estallido de chispas de luz */
    const figura = document.querySelector(
      ".pantalla.activa .aventurero-figura, .pantalla.activa .panel-aventurero-figura"
    );
    const motor = figura ? figura._motor3d : null;
    if (motor && motor.estallidoChispas) motor.estallidoChispas(26);
  }

  /* =========================================================
     Controles de perspectiva
     ---------------------------------------------------------
     El personaje se queda quieto mirando al frente. El niño
     cambia el punto de vista arrastrndolo o con estos botones.
     ========================================================= */
  function pintarControlesVista(destino, figura) {
    const motor = figura && figura._motor3d;
    if (!motor) return;
    const caja = el("div", "controles-vista");

    const bIzq = el("button", "btn-3d", "◀");
    bIzq.title = "Mirar desde un lado";
    bIzq.setAttribute("aria-label", "Girar a la izquierda");
    bIzq.onclick = () => {
      C.Sfx.clic();
      const v = motor.vistaActual();
      motor.moverVista(v.giro - 30, v.altura);
    };

    const bFrente = el("button", "btn-3d btn-3d-texto", "🧍 Mirar al frente");
    bFrente.onclick = () => {
      C.Sfx.clic();
      motor.mirarAlFrente();
    };

    const bDer = el("button", "btn-3d", "▶");
    bDer.title = "Mirar desde el otro lado";
    bDer.setAttribute("aria-label", "Girar a la derecha");
    bDer.onclick = () => {
      C.Sfx.clic();
      const v = motor.vistaActual();
      motor.moverVista(v.giro + 30, v.altura);
    };

    const bArriba = el("button", "btn-3d", "🔍");
    bArriba.title = "Ver desde arriba";
    bArriba.setAttribute("aria-label", "Ver desde arriba");
    bArriba.onclick = () => {
      C.Sfx.clic();
      const v = motor.vistaActual();
      motor.moverVista(v.giro, v.altura - 12);
    };

    const bAbajo = el("button", "btn-3d", "🔎");
    bAbajo.title = "Ver desde abajo";
    bAbajo.setAttribute("aria-label", "Ver desde abajo");
    bAbajo.onclick = () => {
      C.Sfx.clic();
      const v = motor.vistaActual();
      motor.moverVista(v.giro, v.altura + 12);
    };

    caja.appendChild(bIzq);
    caja.appendChild(bArriba);
    caja.appendChild(bFrente);
    caja.appendChild(bAbajo);
    caja.appendChild(bDer);

    const pista = el("div", "pista-vista", "👆 Arrastra el personaje para mirarlo desde otro lado");
    caja.appendChild(pista);
    destino.appendChild(caja);
  }

  /* =========================================================
     Color de piel
     ---------------------------------------------------------
     Se guarda el TONO (no el color exacto) para que siga siendo
     valido aunque se cambie el archivo 3D del usuario. El tono
     "modelo" significa "dejar el color que trae el archivo".
     ========================================================= */
  function tonoPielGuardado() {
    const d = C.Store.data;
    return (d.aventurero && d.aventurero.piel) || null;
  }

  function tonoPielActual() {
    const id = tonoPielGuardado();
    if (!id) return null;
    if (id === "modelo") return null;
    const lista = window.AV_MODELO.TONOS || [];
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) return lista[i].hex;
    }
    return null;
  }

  function guardarTonoPiel(id) {
    if (!C.Store.data.aventurero) {
      C.Store.data.aventurero = { v: 1, desbloqueados: [], equipado: {}, favorito: null, misiones: {}, panelAbierto: true };
    }
    C.Store.data.aventurero.piel = id;
    C.Store.save();
  }

  /* =========================================================
     VER EL PERSONAJE EN GRANDE
     Una pantalla con el personaje a tamaño grande para poder
     girarlo y mirar bien cómo ha quedado vestido.
     ========================================================= */
  function abrirPersonajeGrande() {
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.classList.add("cuerpo-avatar");

    const lienzo = document.createElement("canvas");
    lienzo.className = "av-lienzo3d grande";
    cuerpo.appendChild(lienzo);

    const motor = window.AV_MOTOR3D ? window.AV_MOTOR3D.crear(lienzo) : null;
    if (!motor) {
      cuerpo.classList.remove("cuerpo-avatar");
      const aviso = el("p", "aviso", "No se puede ver el personaje en 3D en este dispositivo.");
      cuerpo.appendChild(aviso);
      overlay.classList.add("visible");
      return;
    }
    registrarMotor3d(motor);
    lienzo._motor3d = motor;
    motor.iniciar();

    /* se carga el modelo con las prendas puestas, como en la pantalla */
    const url = window.AV_MODELO_URL || null;
    if (url) {
      motor.cargarModelo(url).then((g) => {
        if (!g) return;
        try {
          const ejes = motor.detectarEjes();
          motor.encuadrarModelo(1.02);
          motor.tintePiel(tonoPielActual() || null);
          const ids = Object.keys(window.AVENTURERO.equipado() || {});
          const promesas = ids.map((cat) => {
            const id = window.AVENTURERO.equipado()[cat];
            const ruta = window.AV_ACCESORIOS.url3D(id);
            if (!ruta) return Promise.resolve(null);
            return window.AV_GLTF.cargar(ruta)
              .then((acc) => {
                if (acc) {
                  motor.anadirModelo(acc, window.AV_ACCESORIOS.ajuste3D(id));
                  const col = window.AV_ACCESORIOS.colorDe(id, coloresGuardados());
                  if (col) motor.colorAccesorio(acc, col);
                }
                return acc;
              })
              .catch(() => null);
          });
          Promise.all(promesas).then(() => {
            motor.encuadrarModelo(1.05);
            motor.iniciar();
          });
        } catch (e) {}
      });
    }

    const pista = el("p", "nota-adulto", "👆 Arrastra para girar el personaje");
    cuerpo.appendChild(pista);

    const fila = el("div", "fila-botones");
    const bFrente = el("button", "btn grande primario", "🧍 Mirar al frente");
    bFrente.onclick = () => {
      C.Sfx.clic();
      motor.mirarAlFrente();
    };
    fila.appendChild(bFrente);
    const bCerrar = el("button", "btn grande", "✖️ Cerrar");
    bCerrar.onclick = () => {
      C.Sfx.clic();
      motor.detener();
      /* se suelta el contexto WebGL: si no, el navegador se queda
         sin contextos y la web deja de pintar en 3D */
      try { motor.liberar(); } catch (e) {}
      if (lienzo.parentNode) lienzo.parentNode.removeChild(lienzo);
      overlay.classList.remove("visible");
      cuerpo.classList.remove("cuerpo-avatar");
    };
    fila.appendChild(bCerrar);
    cuerpo.appendChild(fila);

    overlay.classList.add("visible");
  }

  /* =========================================================
     PANEL DE UN ACCESORIO
     ---------------------------------------------------------
     Al tocar un accesorio puesto se abre este panel: se ve su
     nombre, se puede cambiar de color y se puede quitar.
     ========================================================= */
  /* El motor 3D del personaje visible en la pantalla actual */
  function motorEnPantalla() {
    const fig = document.querySelector(
      ".pantalla.activa .aventurero-figura, .pantalla.activa .panel-aventurero-figura"
    );
    return fig ? fig._motor3d : null;
  }

  function abrirPanelAccesorio(id, motor) {
    const info = window.AV_ACCESORIOS.info(id);
    if (!info) return;
    if (!motor) motor = motorEnPantalla();
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    const equipado = window.AVENTURERO.equipado();
    const puesto = equipado[info.categoria] === id;
    const paleta = window.AV_ACCESORIOS.PALETA || [];
    const colores = coloresGuardados();
    const actual = colores[id] || null;

    cuerpo.innerHTML = "";
    const cat = window.AV_ACCESORIOS.categoria(info.categoria);
    cuerpo.appendChild(el("h2", "", (cat ? cat.icono : "👕") + " " + info.nombre));
    cuerpo.appendChild(el("p", "", info.descripcion));

    /* Color actual */
    const cajaColor = el("div", "selector-piel");
    const titulo = el("div", "selector-piel-titulo");
    titulo.innerHTML = "🎨 <strong>Color</strong><small>Toca un color</small>";
    cajaColor.appendChild(titulo);
    const fila = el("div", "fila-tonos");
    paleta.forEach((col) => {
      const b = el("button", "tono-piel");
      if (col.hex) {
        b.style.background = col.hex;
      } else {
        b.classList.add("original");
        b.innerHTML = "🎨";
      }
      b.title = col.nombre;
      b.setAttribute("aria-label", info.nombre + " en " + col.nombre);
      if ((actual || "") === (col.hex || "")) b.classList.add("elegido");
      b.onclick = () => {
        C.Sfx.clic();
        guardarColor(id, col.hex);
        /* se pinta al instante, sin recargar la pantalla */
        if (motor && motor.tintarAccesorio) motor.tintarAccesorio(id, col.hex || null);
        fila.querySelectorAll(".tono-piel").forEach(function (x) {
          x.classList.remove("elegido");
        });
        b.classList.add("elegido");
      };
      fila.appendChild(b);
    });
    cajaColor.appendChild(fila);
    cuerpo.appendChild(cajaColor);

    /* Acciones */
    const acciones = el("div", "fila-botones");
    if (puesto) {
      const bQuitar = el("button", "btn grande", "🧺 Quitar");
      bQuitar.onclick = () => {
        C.Sfx.clic();
        window.AVENTURERO.quitar(id);
        overlay.classList.remove("visible");
        C.Guia.habla("Te has quitado " + info.nombre + ".");
        window.pantalla_aventurero();
      };
      acciones.appendChild(bQuitar);
    } else {
      const bPoner = el("button", "btn grande primario", "👕 Poner");
      bPoner.onclick = () => {
        C.Sfx.clic();
        window.AVENTURERO.equipar(id);
        overlay.classList.remove("visible");
        C.Guia.habla("Te has puesto " + info.nombre + ".");
        window.pantalla_aventurero();
      };
      acciones.appendChild(bPoner);
    }
    const bCerrar = el("button", "btn grande", "✖️ Cerrar");
    bCerrar.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
    };
    acciones.appendChild(bCerrar);
    cuerpo.appendChild(acciones);

    overlay.classList.add("visible");
  }

  /* Dibuja la fila de tonos de piel */
  function pintarTonosPiel(destino) {
    const lista = window.AV_MODELO.TONOS || [];
    if (!lista.length) return;
    const actual = tonoPielGuardado();
    const caja = el("div", "selector-piel");
    const titulo = el("div", "selector-piel-titulo");
    titulo.innerHTML = "🎨 <strong>Color de piel</strong><small>Toca un tono</small>";
    caja.appendChild(titulo);
    const fila = el("div", "fila-tonos");
    lista.forEach((t) => {
      const b = el("button", "tono-piel");
      b.style.background = t.hex;
      b.title = t.nombre;
      b.setAttribute("aria-label", "Color de piel " + t.nombre);
      if ((actual || "modelo") === t.id) b.classList.add("elegido");
      b.onclick = () => {
        C.Sfx.clic();
        guardarTonoPiel(t.id);
        window.pantalla_aventurero();
      };
      fila.appendChild(b);
    });
    caja.appendChild(fila);
    destino.appendChild(caja);
  }

  /* =========================================================
     COLORES DE LAS PRENDAS
     ---------------------------------------------------------
     Cada accesorio puesto tiene su propia fila de colores.
     El color elegido se guarda con el perfil.
     ========================================================= */
  function coloresGuardados() {
    const d = C.Store.data;
    if (!d.aventurero) return {};
    if (!d.aventurero.colores || typeof d.aventurero.colores !== "object") d.aventurero.colores = {};
    return d.aventurero.colores;
  }

  function guardarColor(id, hex) {
    const colores = coloresGuardados();
    if (hex) colores[id] = hex;
    else delete colores[id];
    C.Store.save();
  }

  function pintarColoresPrendas(destino, equipado, figura) {
    const ids = Object.keys(equipado || {});
    if (!ids.length) return;
    const paleta = window.AV_ACCESORIOS.PALETA || [];
    const colores = coloresGuardados();
    const motor = figura && figura._motor3d;
    const caja = el("div", "selector-piel");
    const titulo = el("div", "selector-piel-titulo");
    titulo.innerHTML = "🖌️ <strong>Colores de la ropa</strong><small>Toca un color para pintarlo</small>";
    caja.appendChild(titulo);

    ids.forEach((cat) => {
      const id = equipado[cat];
      const info = window.AV_ACCESORIOS.info(id);
      if (!info) return;
      const fila = el("div", "fila-color-prenda");
      const nombre = el("span", "nombre-prenda", info.nombre);
      fila.appendChild(nombre);

      /* Las prendas de la espalda no se ven de frente: se avisa */
      if (window.AV_ACCESORIOS.vaDetras(id)) {
        const detras = el("span", "detras-aviso", "🔙 Se ve al girar");
        fila.appendChild(detras);
      }

      /* Boton para abrir el panel de esa prenda (color y quitar) */
      const bPanel = el("button", "boton-prenda", "🎨");
      bPanel.title = "Cambiar el color o quitar " + info.nombre;
      bPanel.setAttribute("aria-label", "Cambiar " + info.nombre);
      bPanel.onclick = () => {
        C.Sfx.clic();
        abrirPanelAccesorio(id);
      };
      fila.appendChild(bPanel);

      const swatches = el("div", "fila-tonos compacta");
      paleta.forEach((col) => {
        const b = el("button", "tono-piel");
        if (col.hex) {
          b.style.background = col.hex;
        } else {
          b.classList.add("original");
          b.innerHTML = "🎨";
        }
        b.title = col.nombre;
        b.setAttribute("aria-label", info.nombre + " en " + col.nombre);
        if ((colores[id] || "") === (col.hex || "")) b.classList.add("elegido");
        b.onclick = () => {
          C.Sfx.clic();
          guardarColor(id, col.hex);
          /* Se pinta al instante, sin recargar la pantalla entera */
          if (motor && motor.tintarAccesorio) motor.tintarAccesorio(id, col.hex || null);
          swatches.querySelectorAll(".tono-piel").forEach(function (x) {
            x.classList.remove("elegido");
          });
          b.classList.add("elegido");
        };
        swatches.appendChild(b);
      });
      fila.appendChild(swatches);

      /* Quitar esta prenda */
      const bQuitar = el("button", "boton-prenda quitar", "🧺");
      bQuitar.title = "Quitar " + info.nombre;
      bQuitar.setAttribute("aria-label", "Quitar " + info.nombre);
      bQuitar.onclick = () => {
        C.Sfx.clic();
        window.AVENTURERO.quitar(id);
        C.Guia.habla("Te has quitado " + info.nombre + ".");
        window.pantalla_aventurero();
      };
      fila.appendChild(bQuitar);

      caja.appendChild(fila);
    });
    destino.appendChild(caja);
  }

  /* =========================================================
     Modelo 3D propio del usuario (glTF / GLB)
     ---------------------------------------------------------
     Si en la carpeta "modelo" hay un archivo .glb o .gltf, se usa
     como personaje. Se busca una vez al arrancar y se puede
     activar o desactivar desde la pantalla del aventurero.
     ========================================================= */
  window.AV_MODELO_URL = null;

  async function buscarModeloPropio() {
    if (!window.AV_GLTF || !window.AV_GLTF.buscar) return null;
    try {
      return await window.AV_GLTF.buscar();
    } catch (e) {
      return null;
    }
  }

  function arrancarBusquedaModelo() {
    buscarModeloPropio().then((u) => {
      if (!u) return;
      window.AV_MODELO_URL = u;
      if (typeof window.AV_MODELO_ENCONTRADO === "function") window.AV_MODELO_ENCONTRADO(u);
    });
  }

  /* Cuando aparece el modelo se repinta la pantalla que este abierta
     para que se vea enseguida (la portada se dibuja antes de que la
     busqueda termine). */
  window.AV_MODELO_ENCONTRADO = function () {
    if (!C.Nav) return;
    if (C.Nav.actual === "aventurero") {
      window.pantalla_aventurero();
    } else if (C.Nav.actual === "home") {
      window.pantalla_home();
    } else if (C.Nav.actual === "armario") {
      window.pantalla_armario(null);
    }
  };



  /* =========================================================
     Pantalla: Mi Aventurero
     El personaje del niño: se ve completo, con su armario y
     el acceso a las misiones.
     ========================================================= */
  window.pantalla_aventurero = function () {
    const cont = $("#contenido-aventurero");
    cont.innerHTML = "";
    const res = window.AVENTURERO.resumen();

    cont.appendChild(cabecera("🚀 Mi Aventurero", "Tu personaje, tu armario y tus misiones"));

    /* ---- Personaje grande (escena 3D) ---- */
    const escena = el("div", "escena-aventurero");
    const figura = el("div", "aventurero-figura");
    const montaje = montarAventurero(figura, window.AVENTURERO.equipado(), {});
    escena.appendChild(figura);
    

    /* Pistas: el nombre del niño */
    const nombre = C.Store.data.nombre || "Amiguito";
    const chapa = el("div", "chapa-nombre", nombre);
    escena.appendChild(chapa);
    cont.appendChild(escena);

    /* ---- Controles de perspectiva ---- */
    pintarControlesVista(cont, figura);

    /* ---- Ver el personaje en grande ---- */
    const bGrande = el("button", "btn grande", "🔍 Ver en grande");
    bGrande.onclick = () => {
      C.Sfx.clic();
      abrirPersonajeGrande();
    };
    cont.appendChild(bGrande);

    /* ---- Color de piel ---- */
    pintarTonosPiel(cont);

    /* ---- Colores de las prendas ---- */
    pintarColoresPrendas(cont, window.AVENTURERO.equipado(), figura);

    /* ---- Resumen ---- */
    const resumen = el("div", "marcador-concurso");
    resumen.innerHTML =
      "<span class='marcador-item'>🎒 " + res.desbloqueados + " de " + res.total + " accesorios</span>" +
      "<span class='marcador-item'>🏅 " + res.misionesHechas + " de " + res.misiones + " misiones</span>" +
      "<span class='marcador-item'>✨ " + res.equipado + " puestos</span>";
    cont.appendChild(resumen);

    /* ---- Botones principales ---- */
    const fila = el("div", "fila-botones");

    const bArmario = el("button", "btn grande primario", "👕 Abrir el armario");
    bArmario.onclick = () => {
      C.Sfx.clic();
      C.Nav.ir("armario");
    };
    fila.appendChild(bArmario);

    const bMisiones = el("button", "btn grande", "🏅 Mis misiones");
    bMisiones.onclick = () => {
      C.Sfx.clic();
      C.Nav.ir("misiones-av");
    };
    fila.appendChild(bMisiones);

    const bQuitar = el("button", "btn grande", "🧺 Quitar todo");
    bQuitar.onclick = () => {
      C.Sfx.clic();
      window.AVENTURERO.quitarTodo();
      C.Guia.habla("Tu personaje vuelve a su estado original.");
      window.pantalla_aventurero();
    };
    fila.appendChild(bQuitar);

    cont.appendChild(fila);

    /* ---- Siguiente misión sugerida ---- */
    if (res.siguiente) {
      const m = res.siguiente;
      const prog = window.AVENTURERO.progresoMision(m.id);
      const caja = el("div", "mision-sugerida");
      caja.innerHTML =
        "<span class='mision-icono'>" + m.icono + "</span>" +
        "<div class='mision-texto'><strong>" + m.titulo + "</strong><br>" +
        "<small>" + (prog.texto || "") + "</small></div>";
      const bIr = el("button", "btn grande primario", "➡️ Vamos");
      bIr.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("misiones-av");
      };
      caja.appendChild(bIr);
      cont.appendChild(caja);
    }

    const volver = el("button", "btn grande", "🏠 Menú");
    volver.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("home");
    };
    cont.appendChild(volver);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla("Este es tu aventurero. Toca el armario para vestirte.");
    }
  };

  /* =========================================================
     Pantalla: el armario
     El personaje se ve siempre. Abajo, las categorías y la
     cuadrícula de objetos (desbloqueados y bloqueados).
     ========================================================= */
  window.pantalla_armario = function (datos) {
    const cont = $("#contenido-armario");
    cont.innerHTML = "";
    const catActual = (datos && datos.cat) || window.AV_ACCESORIOS.categorias()[0].id;

    cont.appendChild(cabecera("👕 El armario", "Toca un objeto para ponértelo"));
    cont.appendChild(bannerCaratula("img/s-armario.webp", "Perchero con capas, sombreros y mochilas"));

    /* ---- Personaje visible (escena 3D) ---- */
    const escena = el("div", "escena-aventurero pequena");
    const figura = el("div", "aventurero-figura");
    const montajeArm = montarAventurero(figura, window.AVENTURERO.equipado(), {});
    escena.appendChild(figura);

    cont.appendChild(escena);

    /* ---- Aviso: las prendas se colocan sobre el modelo 3D ---- */
    /* ---- Color de piel ---- */
    pintarTonosPiel(cont);

    /* ---- Controles de perspectiva ---- */
    pintarControlesVista(cont, figura);

    /* ---- Acciones del personaje ---- */
    const acciones = el("div", "fila-botones");
    const bFav = el("button", "btn grande", window.AVENTURERO.hayFavorito() ? "⭐ Mi combinación" : "⭐ Guardar combinación");
    bFav.onclick = () => {
      C.Sfx.clic();
      if (window.AVENTURERO.hayFavorito()) {
        window.AVENTURERO.usarFavorito();
        C.Guia.habla("Te has puesto tu combinación favorita.");
      } else {
        window.AVENTURERO.guardarFavorito();
        C.Guia.habla("¡Combinación guardada!");
      }
      window.pantalla_armario({ cat: catActual });
    };
    acciones.appendChild(bFav);

    const bQuitar = el("button", "btn grande", "🧺 Quitar todo");
    bQuitar.onclick = () => {
      C.Sfx.clic();
      window.AVENTURERO.quitarTodo();
      window.pantalla_armario({ cat: catActual });
    };
    acciones.appendChild(bQuitar);

    const bVolver = el("button", "btn grande primario", "⬅️ Mi aventurero");
    bVolver.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("aventurero");
    };
    acciones.appendChild(bVolver);
    cont.appendChild(acciones);

    /* ---- Pestañas de categorías ---- */
    const pestanas = el("div", "pestanas-armario");
    window.AV_ACCESORIOS.categorias().forEach((c) => {
      const lista = window.AV_ACCESORIOS.deCategoria(c.id);
      const total = lista.length;
      const tengo = lista.filter((a) => window.AVENTURERO.estaDesbloqueado(a.id)).length;
      const b = el("button", "pestana-armario" + (c.id === catActual ? " activa" : ""));
      b.innerHTML =
        "<span class='pestana-icono'>" + c.icono + "</span>" +
        "<span class='pestana-nombre'>" + c.nombre + "</span>" +
        "<span class='pestana-cuenta'>" + tengo + "/" + total + "</span>";
      b.onclick = () => {
        C.Sfx.clic();
        window.pantalla_armario({ cat: c.id });
      };
      pestanas.appendChild(b);
    });
    cont.appendChild(pestanas);

    /* ---- Cuadrícula de objetos ---- */
    const cat = window.AV_ACCESORIOS.categoria(catActual);
    cont.appendChild(el("h3", "subtitulo", cat ? cat.nombre : "Objetos"));
    const rejilla = el("div", "rejilla-armario");
    window.AV_ACCESORIOS.deCategoria(catActual).forEach((acc) => {
      const info = window.AVENTURERO.estadoAccesorio(acc.id);
      const celda = el("button", "celda-armario" + (info.desbloqueado ? "" : " bloqueada") + (info.equipado ? " puesto" : ""));
      const rareza = window.AV_ACCESORIOS.rareza(acc.rareza);

      const miniatura = el("span", "miniatura-acc");
      /* Miniatura 3D del accesorio: se usa su archivo propio (GLB) */
      const lienzoMini = document.createElement("canvas");
      lienzoMini.width = 200;
      lienzoMini.height = 300;
      lienzoMini.className = "lienzo-mini3d";
      miniatura.appendChild(lienzoMini);
      const rutaMini = window.AV_ACCESORIOS.url3D(acc.id);
      if (rutaMini && window.AV_MOTOR3D && window.AV_MOTOR3D.miniaturaGLB) {
        window.AV_MOTOR3D.miniaturaGLB(lienzoMini, rutaMini, {
          angulo: 20,
          ajuste: window.AV_ACCESORIOS.ajuste3D(acc.id),
        }).then((ok) => {
          if (!ok) {
            lienzoMini.remove();
            miniatura.innerHTML = window.AV_PERSONAJE.mini(acc);
          }
        });
      } else {
        miniatura.innerHTML = window.AV_PERSONAJE.mini(acc);
      }
      celda.appendChild(miniatura);

      const nombre = el("span", "nombre-acc");
      nombre.textContent = acc.nombre;
      celda.appendChild(nombre);

      const marca = el("span", "marca-acc");
      if (info.equipado) {
        marca.textContent = "✓ Puesto";
        marca.className = "marca-acc puesta";
        /* Boton para elegir esa prenda: cambiar su color o quitarla */
        const bPanel = el("span", "boton-prenda en-celda", "🎨");
        bPanel.title = "Cambiar el color o quitar " + acc.nombre;
        bPanel.setAttribute("role", "button");
        bPanel.setAttribute("tabindex", "0");
        bPanel.setAttribute("aria-label", "Cambiar o quitar " + acc.nombre);
        const abrir = (e) => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          C.Sfx.clic();
          abrirPanelAccesorio(acc.id);
        };
        bPanel.onclick = abrir;
        bPanel.onkeydown = (e) => {
          if (e.key === "Enter" || e.key === " ") abrir(e);
        };
        marca.appendChild(bPanel);
      } else if (info.desbloqueado) {
        marca.textContent = "Tocar para poner";
        marca.className = "marca-acc disponible";
      } else {
        marca.textContent = "🔒";
        marca.className = "marca-acc bloqueada";
        marca.title = window.AVENTURERO.comoConseguir(acc.id);
      }
      celda.appendChild(marca);

      const cinta = el("span", "cinta-rareza");
      cinta.style.background = rareza.color;
      cinta.title = rareza.nombre;
      celda.appendChild(cinta);

      celda.onclick = () => {
        if (!info.desbloqueado) {
          C.Sfx.mal();
          C.Guia.habla("Para conseguir " + acc.nombre + ": " + window.AVENTURERO.comoConseguir(acc.id));
          return;
        }
        C.Sfx.clic();
        if (info.equipado) {
          window.AVENTURERO.quitar(acc.id);
          C.Guia.habla("Te has quitado " + acc.nombre + ".");
        } else {
          window.AVENTURERO.equipar(acc.id);
          C.Guia.habla("¡Te has puesto " + acc.nombre + "!");
        }
        window.pantalla_armario({ cat: catActual });
        rebotePersonaje();
      };

      rejilla.appendChild(celda);
    });
    cont.appendChild(rejilla);

    /* Explicación de los bloqueados */
    const bloqueados = window.AV_ACCESORIOS.deCategoria(catActual).filter(
      (a) => !window.AVENTURERO.estaDesbloqueado(a.id)
    );
    if (bloqueados.length) {
      const caja = el("div", "caja-pista");
      caja.innerHTML =
        "🔒 <strong>Para desbloquearlos:</strong> " +
        bloqueados
          .slice(0, 3)
          .map((a) => a.nombre + " → " + window.AVENTURERO.comoConseguir(a.id))
          .join(" · ");
      cont.appendChild(caja);
    }
  };

  /* =========================================================
     Pantalla: las misiones del aventurero
     ========================================================= */
  /* =========================================================
     DESTINO DE UNA MISIÓN
     ---------------------------------------------------------
     Busca dónde puede hacer el niño el objetivo de la misión,
     para poder llevarle allí con un botón.
     Devuelve: { pantalla, nivel, actividad, juego, titulo }
     ========================================================= */
  function destinoDeMision(m) {
    const cond = m.objetivo || (m.recompensa ? condicionDeAccesorio(m.recompensa) : null);
    if (!cond) return null;
    const tipo = cond.tipo;

    /* 1) un nivel concreto (m1..m6) */
    if (tipo === "nivel") {
      const info = C.Niveles.info(cond.id);
      if (!info) return null;
      return { pantalla: "nivel", nivel: cond.id, titulo: info.nombre, zona: info.nombre };
    }

    /* 2) una actividad con ciertas claves: primero los juegos,
          despues las lecciones de los mundos */
    const claves = cond.claves || [];
    if (claves.length) {
      const cat = JUEGOS.CATALOGO || [];
      for (let i = 0; i < claves.length; i++) {
        for (let j = 0; j < cat.length; j++) {
          if (cat[j].id === claves[i]) {
            return {
              pantalla: "juego",
              juego: cat[j].id,
              titulo: cat[j].nombre,
              zona: "Juego: " + cat[j].nombre,
            };
          }
        }
      }
      const areas = m.area === "mate" ? ["mate"] : ["lectura", "mate"];
      for (let a = 0; a < areas.length; a++) {
        const niveles = C.Niveles.deArea(areas[a]);
        for (let n = 0; n < niveles.length; n++) {
          const lista = lecciones(niveles[n].id);
          for (let i = 0; i < lista.length; i++) {
            /* las lecciones base son la descripcion en si misma; los
               refuerzos la llevan dentro de "desc" */
            const d = lista[i].desc || lista[i] || {};
            /* una actividad puede tener varias claves (la propia y
               el tipo, que a veces es mas general: "inicial-B" es de
               tipo "letter-object") */
            const candidatas = [];
            if (d.clave) candidatas.push(d.clave);
            if (d.tipo && candidatas.indexOf(d.tipo) === -1) candidatas.push(d.tipo);
            for (let c = 0; c < claves.length; c++) {
              const k = claves[c];
              for (let q = 0; q < candidatas.length; q++) {
                const cd = candidatas[q];
                if (cd === k || cd.indexOf(k + "-") === 0 || k.indexOf(cd + "-") === 0) {
                  return {
                    pantalla: "nivel",
                    nivel: niveles[n].id,
                    actividad: i,
                    titulo: lista[i].titulo,
                    zona: niveles[n].nombre,
                  };
                }
              }
            }
          }
        }
      }
    }

    /* 3) segun el tipo de objetivo */
    if (tipo === "actividades") {
      return { pantalla: "aprender", area: cond.area, titulo: cond.area === "mate" ? "Matemáticas" : "Lectura y letras" };
    }
    if (tipo === "trazos") {
      return { pantalla: "juego", juego: "trace", titulo: "Escribir las letras", zona: "Práctica de escritura" };
    }
    if (tipo === "estrellas") {
      return { pantalla: "aventura", titulo: "Aventura", zona: "Aventura" };
    }
    if (tipo === "misiones") {
      return { pantalla: "misiones_av", titulo: "Mis misiones", zona: "Misiones" };
    }
    if (tipo === "aciertos") {
      return { pantalla: "aprender", titulo: "Seguir aprendiendo", zona: "Aprender" };
    }
    return null;
  }

  /* Condición de desbloqueo de un accesorio (la misma que usa la misión) */
  function condicionDeAccesorio(id) {
    const info = window.AV_ACCESORIOS.info(id);
    if (!info) return null;
    return info.condicion || null;
  }

  /* =========================================================
     Pantalla: Mis misiones
     Cada misión se puede tocar para ver el detalle y empezar
     la actividad que la completa.
     ========================================================= */
  window.pantalla_misiones_av = function () {
    const cont = $("#contenido-misiones_av");
    cont.innerHTML = "";
    cont.appendChild(cabecera("🏅 Mis misiones", "Completa objetivos reales para ganar accesorios"));

    const areas = [
      { id: "lectura", nombre: "Lectura y letras", icono: "📖" },
      { id: "mate", nombre: "Matemáticas", icono: "🔢" },
      { id: "razonamiento", nombre: "Memoria y lógica", icono: "🧠" },
      { id: "aventura", nombre: "Aventura", icono: "🧭" },
      { id: "repaso", nombre: "Repaso (lo que te cuesta)", icono: "🔁" },
    ];

    const todas = window.AV_MISIONES.todas();

    areas.forEach((a) => {
      const lista = todas.filter((m) => m.area === a.id);
      if (!lista.length) return;
      cont.appendChild(el("h3", "subtitulo", a.icono + " " + a.nombre));
      const rejilla = el("div", "rejilla-misiones-av");
      lista.forEach((m) => {
        const hecha = window.AVENTURERO.misionCompletada(m.id);
        const disponible = window.AV_MISIONES.disponible(m.id);
        const prog = window.AVENTURERO.progresoMision(m.id);
        const rec = m.recompensa ? window.AV_ACCESORIOS.info(m.recompensa) : null;

        const card = el("button", "tarjeta-mision-av" + (hecha ? " hecha" : "") + (disponible ? "" : " bloqueada"));
        const pct = prog.total ? Math.round((prog.actual / prog.total) * 100) : 0;
        const destino = disponible && !hecha ? destinoDeMision(m) : null;

        card.innerHTML =
          "<span class='mision-av-icono'>" + m.icono + "</span>" +
          "<span class='mision-av-titulo'>" + m.titulo + "</span>" +
          "<span class='mision-av-desc'>" + m.descripcion + "</span>" +
          "<span class='mision-av-prog'>" +
          (hecha ? "✅ ¡Completada!" : disponible ? prog.texto : "🔒 Todavía no disponible") +
          "</span>" +
          "<span class='mision-av-barra'><i style='width:" + (hecha ? 100 : pct) + "%'></i></span>" +
          "<span class='mision-av-recompensa'>" +
          (rec ? "🎁 " + rec.nombre : "🌟 Felicitación") +
          "</span>" +
          (destino
            ? "<span class='mision-av-donde'>▶️ Toca para ir: " + (destino.zona || destino.titulo || "la actividad") + "</span>"
            : "");

        if (disponible) {
          vozBoton(card, m.titulo + ". " + m.descripcion);
          card.onclick = () => {
            C.Sfx.clic();
            mostrarDetalleMisionAv(m);
          };
        } else {
          card.onclick = () => {
            C.Sfx.mal();
            C.Guia.habla("Esta misión todavía no está disponible.");
          };
        }
        rejilla.appendChild(card);
      });
      cont.appendChild(rejilla);
    });

    const volver = el("button", "btn grande", "⬅️ Mi aventurero");
    volver.onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("aventurero");
    };
    cont.appendChild(volver);
  };

  /* Detalle de una misión con su objetivo y su recompensa */
  function mostrarDetalleMisionAv(m) {
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    const prog = window.AVENTURERO.progresoMision(m.id);
    const hecha = window.AVENTURERO.misionCompletada(m.id);
    const rec = m.recompensa ? window.AV_ACCESORIOS.info(m.recompensa) : null;

    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", m.icono + " " + m.titulo));
    cuerpo.appendChild(el("p", "", m.descripcion));

    const caja = el("div", "detalle-objetivo");
    caja.innerHTML =
      "<div class='detalle-obj-titulo'>" + (hecha ? "✅ Objetivo cumplido" : "🎯 Objetivo") + "</div>" +
      "<div class='detalle-obj-texto'>" + prog.texto + "</div>" +
      "<div class='detalle-obj-barra'><i style='width:" + (prog.total ? Math.round((prog.actual / prog.total) * 100) : 0) + "%'></i></div>";
    cuerpo.appendChild(caja);

    if (rec) {
      const r = el("div", "detalle-recompensa");
      r.innerHTML =
        "<div class='detalle-rec-titulo'>🎁 Recompensa</div>" +
        "<div class='detalle-rec-cuerpo'>" +
        "<span class='miniatura-acc grande'>" + window.AV_PERSONAJE.mini(rec) + "</span>" +
        "<span><strong>" + rec.nombre + "</strong><br><small>" + rec.descripcion + "</small></span>" +
        "</div>";
      cuerpo.appendChild(r);
    }

    const fila = el("div", "fila-botones");
    const destino = destinoDeMision(m);

    /* Botón para ir a la actividad que completa la misión */
    if (destino && !hecha) {
      const bIr = el("button", "btn grande primario", "▶️ Ir a la actividad");
      bIr.onclick = () => {
        C.Sfx.clic();
        overlay.classList.remove("visible");
        irAdestino(destino);
      };
      fila.appendChild(bIr);
    }

    const bSeguir = el("button", "btn grande" + (destino && !hecha ? "" : " primario"), "🏅 Ver mis misiones");
    bSeguir.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("misiones_av");
    };
    fila.appendChild(bSeguir);

    const bArmario = el("button", "btn grande", "👕 Ver mi armario");
    bArmario.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("armario");
    };
    fila.appendChild(bArmario);
    cuerpo.appendChild(fila);

    /* Dónde se hace: se lo decimos al niño */
    if (destino && !hecha) {
      const pista = el("p", "nota-adulto");
      pista.innerHTML =
        "📍 <strong>Dónde se hace:</strong> " + (destino.zona || destino.titulo || "") +
        (destino.titulo && destino.zona && destino.titulo !== destino.zona ? " · " + destino.titulo : "");
      cuerpo.appendChild(pista);
    }

    overlay.classList.add("visible");
  }

  /* Lleva al niño a donde puede hacer la misión */
  function irAdestino(destino) {
    if (!destino) return;
    if (destino.pantalla === "nivel") {
      if (destino.actividad !== undefined && destino.actividad !== null) {
        C.Nav.ir("nivel", { nivel: destino.nivel, actividad: destino.actividad });
      } else {
        C.Nav.ir("nivel", { nivel: destino.nivel });
      }
      return;
    }
    if (destino.pantalla === "juego") {
      /* el juego concreto se arranca directamente */
      const cat = JUEGOS.CATALOGO || [];
      let juego = null;
      for (let i = 0; i < cat.length; i++) {
        if (cat[i].id === destino.juego) { juego = cat[i]; break; }
      }
      if (juego) {
        lanzarJuegoLibre(juego, 0);
      } else {
        C.Nav.ir("jugar");
      }
      return;
    }
    if (destino.pantalla === "aprender") {
      C.Nav.ir("aprender", { area: destino.area });
      return;
    }
    if (destino.pantalla === "aventura") {
      C.Nav.ir("aventura", {});
      return;
    }
    if (destino.pantalla === "misiones_av") {
      C.Nav.ir("misiones_av");
      return;
    }
    C.Nav.ir("home");
  }

  /* =========================================================
     Pantalla: Mi mascota (criatura que crece con el aprendizaje)
     El niño elige un dragón, gato, dinosaurio o búho que
     evoluciona al aprender. NUNCA baja ni se pone triste.
     ========================================================= */
  window.pantalla_mascota = function () {
    const cont = $("#contenido-mascota");
    cont.innerHTML = "";

    /* -------- 1) Todavía no hay criatura: elegir una -------- */
    if (!window.MASCOTA.tiene()) {
      cont.appendChild(cabecera("Elige tu mascota", "Va a crecer contigo mientras aprendes"));
      const intro = el(
        "p",
        "mascota-intro",
        "Escoge una criatura. Nacerá de un huevo y crecerá cada vez que aprendas: le darás de comer, le enseñarás palabras y le construirás su casa. ¡Nunca se pone triste!"
      );
      cont.appendChild(intro);

      const rejilla = el("div", "rejilla-criaturas");
      window.MASCOTA.CRIATURAS.forEach((c) => {
        const card = el("button", "tarjeta-criatura");
        card.style.setProperty("--c", c.color);
        card.style.setProperty("--claro", c.colorClaro);
        card.innerHTML =
          "<span class='criatura-figura'>" +
          (window.DIBUJOCRIATURA ? window.DIBUJOCRIATURA.svg(c.id, 1, c.nombre + " cría") : "<span class='criatura-emoji'>" + c.fases[1] + "</span>") +
          "</span>" +
          "<span class='criatura-nombre'>" + c.nombre + "</span>" +
          "<span class='criatura-sonido'>" + c.sonido + "</span>" +
          "<span class='criatura-fases'>" +
          "<small class='fases-nota'>Nace de un huevo y crece hasta ser legendaria</small>" +
          "</span>";
        vozBoton(card, "Elegir a la mascota " + c.nombre);
        card.onclick = () => {
          C.Sfx.clic();
          window.MASCOTA.elegir(c.id);
          pintarGuia();
          C.Guia.habla("¡Elegiste al " + c.nombre + "! Cuídalo mucho, va a crecer contigo.");
          window.pantalla_mascota();
        };
        rejilla.appendChild(card);
      });
      cont.appendChild(rejilla);
      return;
    }

    /* -------- 2) Ya hay criatura: el hogar de la mascota -------- */
    const inf = window.MASCOTA.info();
    const cri = inf.criatura;
    const nombreFase = window.MASCOTA.nombreFase(cri.id, inf.etapaId);
    cont.appendChild(
      cabecera(
        cri.nombre + " " + nombreFase,
        "Etapa " + inf.etapa.nombre + " · tu mascota crece cuando aprendes"
      )
    );

    /* Tarjeta grande de la mascota con su barra de crecimiento */
    const hogar = el("div", "hogar-mascota");
    hogar.style.setProperty("--c", cri.color);
    hogar.style.setProperty("--claro", cri.colorClaro);

    const escena = el("div", "mascota-escena");
    escena.appendChild(el("span", "mascota-suelo", ""));
    const bicho = el("div", "mascota-bicho");
    bicho.style.setProperty("--escala", inf.etapa.escala);
    /* Ilustración detallada de la criatura (mismo estilo que Kiko) */
    const figura = el("div", "mascota-figura");
    figura.innerHTML = window.DIBUJOCRIATURA
      ? window.DIBUJOCRIATURA.svg(cri.id, inf.etapaId, nombreFase)
      : "<span class='mascota-emoji'>" + window.MASCOTA.emojiFase(cri.id, inf.etapaId) + "</span>";
    bicho.appendChild(figura);
    const dfz = window.MASCOTA.disfrazActivo();
    if (dfz && dfz.id !== "ninguno") {
      bicho.appendChild(el("span", "mascota-disfraz", dfz.icono));
    }
    bicho.onclick = () => {
      C.Sfx.clic();
      C.Guia.habla(cri.sonido + " " + window.MASCOTA.frase());
    };
    escena.appendChild(bicho);
    hogar.appendChild(escena);

    const globo = el("div", "mascota-globo");
    globo.innerHTML = "<strong>" + nombreFase + "</strong><p>" + inf.etapa.desc + "</p>";
    hogar.appendChild(globo);

    /* Barra de crecimiento hacia la siguiente etapa */
    const crece = el("div", "mascota-crece");
    const pct = inf.etapaId >= 3 ? 100 : Math.min(100, Math.round((inf.puntos / inf.umbral) * 100));
    crece.innerHTML =
      "<div class='mascota-barra'><i style='width:" + pct + "%;background:" + cri.color + "'></i></div>" +
      "<small>" +
      (inf.etapaId >= 3
        ? "¡Llegó a su forma legendaria! 🎉"
        : "Cariño: " + inf.puntos + " de " + inf.umbral + " para ser " + window.MASCOTA.ETAPAS[inf.etapaId + 1].nombre) +
      "</small>";
    hogar.appendChild(crece);
    cont.appendChild(hogar);

    /* -------- Acciones de cuidado (4 botones grandes) -------- */
    cont.appendChild(el("h3", "subtitulo", "Cuida a tu mascota"));
    const rejillaAcc = el("div", "rejilla-cuidados");
    [
      { id: "comida", icono: "🍽️", nombre: "Darle de comer", desc: "Resuelve sumas" },
      { id: "palabras", icono: "💬", nombre: "Enseñarle palabras", desc: "Toca y escucha" },
      { id: "disfraces", icono: "🎀", nombre: "Disfraces", desc: "Al leer bien" },
      { id: "casa", icono: "🏠", nombre: "Su casa", desc: "Con materiales" },
    ].forEach((a) => {
      const b = el("button", "tarjeta-cuidado");
      b.innerHTML =
        "<span class='cuidado-icono'>" + a.icono + "</span>" +
        "<span class='cuidado-nombre'>" + a.nombre + "</span>" +
        "<span class='cuidado-desc'>" + a.desc + "</span>";
      vozBoton(b, a.nombre + ". " + a.desc);
      b.onclick = () => {
        C.Sfx.clic();
        if (a.id === "comida") abrirComidaMascota();
        else if (a.id === "palabras") abrirPalabrasMascota();
        else if (a.id === "disfraces") abrirDisfracesMascota();
        else abrirCasaMascota();
      };
      rejillaAcc.appendChild(b);
    });
    cont.appendChild(rejillaAcc);

    /* -------- Resumen de lo conseguido -------- */
    const resumen = el("div", "mascota-resumen");
    const cs = window.MASCOTA.casa();
    resumen.innerHTML =
      "<span class='mascota-dato'>🍽️ " + _mascotaDato("comida") + " comidas</span>" +
      "<span class='mascota-dato'>💬 " + window.MASCOTA.palabrasEnsenadas().length + " palabras</span>" +
      "<span class='mascota-dato'>✍️ " + inf.aciertos + " aciertos</span>" +
      "<span class='mascota-dato'>🏠 " + cs.hechas + " de " + cs.total + " de la casa</span>";
    cont.appendChild(resumen);

    if (C.Voz && !C.Voz.silenciado) {
      C.Guia.habla(
        "Esta es tu mascota, el " + cri.nombre.toLowerCase() + " " + inf.etapa.nombre.toLowerCase() + ". " + window.MASCOTA.frase()
      );
    }
  };

  function _mascotaDato(k) {
    const m = C.Store.data.mascota || {};
    return m[k] || 0;
  }

  /* --- Minijuego: alimentar resolviendo sumas --- */
  function abrirComidaMascota() {
    const cri = window.MASCOTA.info().criatura;
    const suma = { a: 1 + Math.floor(Math.random() * 5), b: 1 + Math.floor(Math.random() * 5) };
    const total = suma.a + suma.b;
    const comida = cri.comida[Math.floor(Math.random() * cri.comida.length)];

    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", "🍽️ " + comida + " ¡A comer!"));

    const reto = el("p", "consigna", "Resuelve la suma para darle la comida:");
    cuerpo.appendChild(reto);

    const cuadro = el("div", "comida-suma");
    cuadro.innerHTML = "<span>" + suma.a + "</span><span>+</span><span>" + suma.b + "</span><span>=</span><span class='comida-incognita'>?</span>";
    cuerpo.appendChild(cuadro);

    const opciones = el("div", "comida-opciones");
    const vals = [];
    for (let i = -2; i <= 2; i++) {
      const v = total + i;
      if (v > 0 && vals.indexOf(v) === -1 && vals.length < 4) vals.push(v);
    }
    if (vals.indexOf(total) === -1) vals[vals.length - 1] = total;
    shuffle(vals).forEach((v) => {
      const b = el("button", "btn grande", String(v));
      b.onclick = () => {
        if (v === total) {
          C.Sfx.bien();
          const subio = window.MASCOTA.alimentar();
          const mat = window.MASCOTA.ganarMaterial();
          if (subio) pintarGuia();
          cuerpo.innerHTML = "";
          cuerpo.appendChild(el("h2", "", "😋 ¡Qué rico!"));
          cuerpo.appendChild(el("p", "", "Tu " + cri.nombre.toLowerCase() + " comió " + comida + " y está muy contenta. " + cri.sonido));
          cuerpo.appendChild(el("p", "mascota-extra", "Ganaste un material: " + mat.icono + " " + mat.nombre));
          if (subio) cuerpo.appendChild(el("p", "mascota-extra", "✨ ¡Tu mascota creció a " + subio.nombre + "!"));
          cerrarCon(cuerpo, [
            { t: "🍽️ Otra comida", fn: abrirComidaMascota },
            { t: "🏠 Ver mi mascota", fn: () => { overlay.classList.remove("visible"); C.Nav.reemplazar("mascota"); } },
          ]);
          C.celebrar(cuerpo);
          C.Guia.habla("¡Muy bien! Tu mascota comió y creció un poquito.");
        } else {
          C.Sfx.mal();
          b.classList.add("mal");
          setTimeout(() => b.classList.remove("mal"), 800);
          C.Guia.habla("Casi. Cuenta otra vez con calma.");
        }
      };
      opciones.appendChild(b);
    });
    cuerpo.appendChild(opciones);

    const salir = el("button", "btn grande", "⬅️ Volver");
    salir.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("mascota");
    };
    cuerpo.appendChild(salir);
    overlay.classList.add("visible");
    C.Guia.habla("Resuelve la suma para darle de comer a tu mascota.");
  }

  /* --- Enseñarle palabras nuevas --- */
  function abrirPalabrasMascota() {
    const cri = window.MASCOTA.info().criatura;
    const pool = D.palabras.length ? D.palabras : [];
    if (!pool.length) return;
    const p = pool[Math.floor(Math.random() * pool.length)];

    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", "💬 Enséñale una palabra"));
    const card = el("div", "tarjeta-explorar mini");
    card.innerHTML = "<div class='explorar-emoji'>" + p.emoji + "</div>";
    cuerpo.appendChild(card);
    cuerpo.appendChild(el("p", "consigna", "Toca la palabra para escucharla y mostrársela a tu mascota."));

    const bPalabra = el("button", "btn grande primario", "🔊 " + p.w);
    bPalabra.onclick = () => {
      C.Sfx.clic();
      C.Voz.decir(p.w);
      const r = window.MASCOTA.ensenarPalabra(p.w);
      window.MASCOTA.ganarMaterial();
      if (r.subio) pintarGuia();
      cuerpo.innerHTML = "";
      cuerpo.appendChild(el("h2", "", "📚 ¡Ya se la sabe!"));
      cuerpo.appendChild(el("p", "", "Le enseñaste «" + p.w + "» a tu " + cri.nombre.toLowerCase() + ". " +
        (r.nueva ? "¡Era una palabra nueva y ganaste cariño!" : "Ya la conocía, ¡pero le encanta repetirla!")));
      if (r.subio) cuerpo.appendChild(el("p", "mascota-extra", "✨ ¡Tu mascota creció a " + r.subio.nombre + "!"));
      cerrarCon(cuerpo, [
        { t: "💬 Otra palabra", fn: abrirPalabrasMascota },
        { t: "🏠 Ver mi mascota", fn: () => { overlay.classList.remove("visible"); C.Nav.reemplazar("mascota"); } },
      ]);
      C.celebrar(cuerpo);
    };
    cuerpo.appendChild(bPalabra);

    const salir = el("button", "btn grande", "⬅️ Volver");
    salir.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("mascota");
    };
    cuerpo.appendChild(salir);
    overlay.classList.add("visible");
    C.Guia.habla("Toca la palabra para escucharla y enseñársela a tu mascota.");
  }

  /* --- Disfraces desbloqueados al leer bien --- */
  function abrirDisfracesMascota() {
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", "🎀 Disfraces de tu mascota"));
    cuerpo.appendChild(el("p", "", "Se desbloquean cuando lees bien. ¡Sigue practicando para abrir más!"));

    const rejilla = el("div", "rejilla-disfraces");
    window.MASCOTA.disfraces().forEach((d) => {
      const b = el("button", "disfraz-chip" + (d.activo ? " activo" : "") + (d.abierto ? "" : " bloqueado"));
      b.innerHTML =
        "<span class='disfraz-icono'>" + (d.abierto ? d.icono : "🔒") + "</span>" +
        "<span class='disfraz-nombre'>" + d.nombre + "</span>" +
        "<small>" + (d.abierto ? (d.activo ? "Puesto" : "Tocar para poner") : d.aciertos + " aciertos") + "</small>";
      b.onclick = () => {
        if (!d.abierto) {
          C.Sfx.mal();
          C.Guia.habla("Todavía no. Lee bien " + d.aciertos + " veces y se abre.");
          return;
        }
        C.Sfx.clic();
        window.MASCOTA.ponerDisfraz(d.id);
        pintarGuia();
        abrirDisfracesMascota();
      };
      rejilla.appendChild(b);
    });
    cuerpo.appendChild(rejilla);

    const salir = el("button", "btn grande", "⬅️ Volver");
    salir.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("mascota");
    };
    cuerpo.appendChild(salir);
    overlay.classList.add("visible");
  }

  /* --- Construir su casa con materiales --- */
  function abrirCasaMascota() {
    const cri = window.MASCOTA.info().criatura;
    const overlay = $("#overlay-recompensa");
    const cuerpo = $("#recompensa-cuerpo");
    cuerpo.innerHTML = "";
    cuerpo.appendChild(el("h2", "", cri.casa.icono + " La casa de tu mascota"));
    cuerpo.appendChild(el("p", "", "Gana materiales al terminar actividades y construye su hogar paso a paso."));

    /* Materiales que tiene */
    const mats = el("div", "rejilla-materiales");
    window.MASCOTA.materiales().forEach((m) => {
      const chip = el("span", "material-chip" + (m.tiene ? "" : " vacio"));
      chip.innerHTML = "<span>" + m.icono + "</span> " + m.nombre + " ×" + m.tiene;
      mats.appendChild(chip);
    });
    cuerpo.appendChild(mats);

    /* Plan de construcción */
    const plan = el("div", "plan-casa");
    window.MASCOTA.planCasa().forEach((p) => {
      const fila = el("div", "cuarto" + (p.construido ? " hecho" : "") + (p.disponible && !p.construido ? " ahora" : ""));
      const pide = Object.keys(p.pide)
        .map((k) => {
          const mat = window.MASCOTA.MATERIALES.find((x) => x.id === k);
          const tiene = (window.MASCOTA.materiales().find((x) => x.id === k) || {}).tiene || 0;
          return (tiene >= p.pide[k] ? "✅ " : "• ") + mat.icono + " " + p.pide[k];
        })
        .join("   ");
      fila.innerHTML =
        "<span class='cuarto-icono'>" + (p.construido ? p.icono : p.disponible ? p.icono : "🔒") + "</span>" +
        "<span class='cuarto-info'><strong>" + p.nombre + "</strong><small>" + (p.construido ? "¡Construido!" : pide) + "</small></span>";
      if (p.disponible && !p.construido) {
        const b = el("button", "btn " + (p.alcanza ? "primario" : ""), p.alcanza ? "🔨 Construir" : "Faltan");
        b.onclick = () => {
          const r = window.MASCOTA.construir(p.id);
          if (r.ok) {
            C.Sfx.bien();
            C.celebrar(cuerpo);
            if (r.subio) pintarGuia();
            C.Guia.habla("¡Construiste " + r.pieza.nombre + "! Qué bonita queda.");
            if (r.subio) C.Guia.habla("Tu mascota creció a " + r.subio.nombre + ".");
            abrirCasaMascota();
          } else {
            C.Sfx.mal();
            C.Guia.habla("Necesitas más materiales. ¡Sigue aprendiendo y los consigues!");
          }
        };
        fila.appendChild(b);
      }
      plan.appendChild(fila);
    });
    cuerpo.appendChild(plan);

    const salir = el("button", "btn grande", "⬅️ Volver");
    salir.onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
      C.Nav.reemplazar("mascota");
    };
    cuerpo.appendChild(salir);
    overlay.classList.add("visible");
  }

  /* Botones de cierre reutilizables dentro del overlay */
  function cerrarCon(cuerpo, botones) {
    const fila = el("div", "fila-botones");
    botones.forEach((b) => {
      const btn = el("button", "btn grande" + (fila.children.length === 0 ? " primario" : ""), b.t);
      btn.onclick = () => {
        C.Sfx.clic();
        if (b.fn) b.fn();
      };
      fila.appendChild(btn);
    });
    cuerpo.appendChild(fila);
  }

  /* =========================================================
     Perfiles: ¿quién está jugando?
     Cada niño o niña tiene su perfil con su propio progreso.
     ========================================================= */
  /* Devuelve el HTML del avatar de un perfil: su foto o un dibujo si
     los tiene, y si no el animalito elegido. */
  function avatarInner(p) {
    if (p && p.foto) return "<img class='perfil-foto' src='" + p.foto + "' alt=''>";
    return (p && p.avatar) || "🙂";
  }

  function avatarHTML(p, clase) {
    return "<span class='" + (clase || "perfil-avatar") + "'>" + avatarInner(p) + "</span>";
  }

  function pintarPerfilChip() {
    const p = C.Store.perfilActivo;
    const av = $("#btn-perfil-avatar");
    const no = $("#btn-perfil-nombre");
    const b = $("#btn-perfil");
    if (av) av.innerHTML = avatarInner(p);
    if (no) no.textContent = p ? p.nombre : "Crear perfil";
    if (b) b.title = p ? "Perfil de " + p.nombre : "Crear un perfil";
  }

  /* Reduce una foto a 200x200 y la guarda como texto (data URL) para
     que quepa sin problemas en el almacenamiento del navegador. */
  function procesarArchivoFoto(file, listo) {
    if (!file || (file.type && !/^image\//.test(file.type))) {
      alert("Elige un archivo de imagen (una foto).");
      return;
    }
    const lector = new FileReader();
    lector.onload = () => {
      const img = new Image();
      img.onload = () => {
        const lado = 200;
        const lienzo = document.createElement("canvas");
        lienzo.width = lado;
        lienzo.height = lado;
        const ctx = lienzo.getContext("2d");
        ctx.fillStyle = "#fffdf4";
        ctx.fillRect(0, 0, lado, lado);
        const escala = Math.max(lado / img.width, lado / img.height);
        const w = img.width * escala;
        const h = img.height * escala;
        ctx.drawImage(img, (lado - w) / 2, (lado - h) / 2, w, h);
        try {
          listo(lienzo.toDataURL("image/jpeg", 0.82));
        } catch (e) {
          alert("No pude usar esa foto. Prueba con otra.");
        }
      };
      img.onerror = () => alert("No pude abrir esa imagen. Prueba con otra.");
      img.src = lector.result;
    };
    lector.onerror = () => alert("No pude leer el archivo. Prueba con otro.");
    lector.readAsDataURL(file);
  }

  /* Lienzo para dibujar el avatar */
  let dibujoPintando = false;
  let dibujoColor = "#ef476f";
  let dibujoAlGuardar = null;

  function abrirDibujo(alGuardar) {
    const overlay = $("#overlay-dibujo");
    const lienzo = $("#lienzo-avatar");
    const cajaColores = $("#dibujo-colores");
    if (!overlay || !lienzo) return;
    const ctx = lienzo.getContext("2d");
    dibujoAlGuardar = alGuardar;
    ctx.fillStyle = "#fffdf4";
    ctx.fillRect(0, 0, lienzo.width, lienzo.height);
    ctx.lineWidth = 11;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = dibujoColor;

    const paleta = ["#ef476f", "#ff9f1c", "#ffd166", "#06d6a0", "#118ab2", "#8338ec", "#6b4f3a", "#2d3142"];
    cajaColores.innerHTML = "";
    paleta.forEach((c, i) => {
      const b = el("button", "dibujo-color" + (c === dibujoColor || (!i && !dibujoColor) ? " activo" : ""));
      b.type = "button";
      b.style.background = c;
      b.setAttribute("aria-label", "Color " + (i + 1));
      b.onclick = () => {
        dibujoColor = c;
        ctx.strokeStyle = c;
        C.Sfx.clic();
        Array.prototype.forEach.call(cajaColores.children, (x) => x.classList.remove("activo"));
        b.classList.add("activo");
      };
      cajaColores.appendChild(b);
    });

    const pos = (ev) => {
      const r = lienzo.getBoundingClientRect();
      return {
        x: ((ev.clientX - r.left) / r.width) * lienzo.width,
        y: ((ev.clientY - r.top) / r.height) * lienzo.height,
      };
    };
    lienzo.onpointerdown = (ev) => {
      ev.preventDefault();
      dibujoPintando = true;
      const p = pos(ev);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + 0.1, p.y + 0.1);
      ctx.stroke();
    };
    lienzo.onpointermove = (ev) => {
      if (!dibujoPintando) return;
      ev.preventDefault();
      const p = pos(ev);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };
    lienzo.onpointerup = () => {
      dibujoPintando = false;
    };
    lienzo.onpointerleave = () => {
      dibujoPintando = false;
    };
    lienzo.onpointercancel = () => {
      dibujoPintando = false;
    };

    $("#dibujo-borrar").onclick = () => {
      C.Sfx.clic();
      ctx.fillStyle = "#fffdf4";
      ctx.fillRect(0, 0, lienzo.width, lienzo.height);
      ctx.strokeStyle = dibujoColor;
    };
    $("#dibujo-cancelar").onclick = () => {
      C.Sfx.clic();
      overlay.classList.remove("visible");
    };
    $("#dibujo-listo").onclick = () => {
      C.Sfx.bien();
      overlay.classList.remove("visible");
      const chico = document.createElement("canvas");
      chico.width = 240;
      chico.height = 240;
      const ctx2 = chico.getContext("2d");
      ctx2.fillStyle = "#fffdf4";
      ctx2.fillRect(0, 0, 240, 240);
      ctx2.drawImage(lienzo, 0, 0, 240, 240);
      let datos = "";
      try {
        datos = chico.toDataURL("image/jpeg", 0.85);
      } catch (e) {
        datos = "";
      }
      if (datos && typeof dibujoAlGuardar === "function") dibujoAlGuardar(datos);
    };

    overlay.classList.add("visible");
    C.Voz.decir("Dibuja tu cara con el dedo o con el ratón. Elige el color que más te guste.");
  }

  function fechaCorta(ms) {
    if (!ms) return "—";
    try {
      return new Date(ms).toLocaleString("es-CO", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (e) {
      return new Date(ms).toLocaleString();
    }
  }

  /* Contenidos flojos de un perfil cualquiera (no solo el que está en uso) */
  function debilesDe(datos, nivelId) {
    const pref = "n" + nivelId + ":";
    const deb = (datos && datos.debil) || {};
    return Object.keys(deb)
      .filter((k) => k.indexOf(pref) === 0 && deb[k] >= 1)
      .map((k) => k.slice(pref.length))
      .sort((a, b) => deb[pref + b] - deb[pref + a]);
  }

  let avatarElegido = "";
  let avatarFoto = null;

  window.pantalla_perfil = function (datos) {
    datos = datos || {};
    const cont = $("#contenido-perfil");
    if (!cont) return;
    cont.innerHTML = "";

    const hay = C.Store.hayPerfiles();
    const editando = datos.editar ? C.Store.perfilPorId(datos.editar) : null;
    const formulario = !!editando || !!datos.crear || !hay;

    cont.appendChild(
      cabecera(
        formulario ? (editando ? "✏️ Editar perfil" : "🌟 ¡Crea tu perfil!") : "👋 ¿Quién está jugando?",
        formulario
          ? "Escribe tu nombre y elige un animalito, una foto o un dibujo."
          : "Toca tu nombre para seguir aprendiendo."
      )
    );
    if (!formulario) {
      cont.appendChild(bannerCaratula("img/s-perfil.webp", "Niños y niñas con morrales listos para aprender"));
    }

    if (formulario) {
      const caja = el("div", "perfil-form");

      const campo = el("label", "campo-perfil");
      campo.appendChild(el("span", "", "✏️ ¿Cómo te llamas?"));
      const input = document.createElement("input");
      input.className = "input-perfil";
      input.type = "text";
      input.maxLength = 15;
      input.placeholder = "Escribe tu nombre aquí";
      input.value = (editando && editando.nombre) || datos.nombre || "";
      campo.appendChild(input);
      caja.appendChild(campo);
      caja.appendChild(el("h3", "subtitulo", "🎨 Elige tu animal"));
      const rejillaAv = el("div", "avatar-rejilla");
      avatarElegido =
        (editando && editando.avatar) ||
        (C.Store.perfilActivo && C.Store.perfilActivo.avatar) ||
        C.Store.avatares[0];
      avatarFoto = (editando && editando.foto) || null;

      /* Piezas del avatar con foto o dibujo (creadas antes para poder
         refrescar la vista previa desde los botones de animalitos) */
      const zonaAvatar = el("div", "zona-avatar");
      const previa = el("div", "avatar-previa");
      const filaAvatar = el("div", "fila-avatar-especial");
      const btnSinFoto = el("button", "btn-avatar-especial", "❌ Quitar");
      btnSinFoto.type = "button";
      const refrescarAvatar = () => {
        previa.innerHTML = avatarFoto ? "<img src='" + avatarFoto + "' alt=''>" : avatarElegido;
        btnSinFoto.style.display = avatarFoto ? "" : "none";
      };

      C.Store.avatares.forEach((a) => {
        const b = el("button", "avatar-btn" + (a === avatarElegido && !avatarFoto ? " activo" : ""), a);
        b.type = "button";
        b.setAttribute("aria-label", "Elegir " + a);
        b.onclick = () => {
          avatarElegido = a;
          avatarFoto = null;
          C.Sfx.clic();
          $$(".avatar-btn").forEach((x) => x.classList.remove("activo"));
          b.classList.add("activo");
          refrescarAvatar();
        };
        rejillaAv.appendChild(b);
      });
      caja.appendChild(rejillaAv);

      /* Foto o dibujo en lugar del animalito */
      caja.appendChild(el("h3", "subtitulo", "📸 O pon tu foto o un dibujo"));
      const btnFoto = el("button", "btn-avatar-especial", "📷 Usar una foto");
      btnFoto.type = "button";
      btnFoto.onclick = () => {
        C.Sfx.clic();
        $("#archivo-foto").click();
      };
      const btnDibujo = el("button", "btn-avatar-especial", "🎨 Hacer un dibujo");
      btnDibujo.type = "button";
      btnDibujo.onclick = () => {
        C.Sfx.clic();
        abrirDibujo((datosDibujo) => {
          avatarFoto = datosDibujo;
          $$(".avatar-btn").forEach((x) => x.classList.remove("activo"));
          refrescarAvatar();
          C.Guia.habla("¡Qué dibujo tan bonito! Va a ser tu nueva cara.");
        });
      };
      btnSinFoto.onclick = () => {
        avatarFoto = null;
        C.Sfx.clic();
        refrescarAvatar();
        C.Guia.habla("Listo, vuelves a tener tu animalito.");
      };
      filaAvatar.appendChild(btnFoto);
      filaAvatar.appendChild(btnDibujo);
      filaAvatar.appendChild(btnSinFoto);
      zonaAvatar.appendChild(previa);
      zonaAvatar.appendChild(filaAvatar);
      caja.appendChild(zonaAvatar);

      /* La foto elegida se reduce y se guarda como texto (data URL) */
      const campoArchivo = $("#archivo-foto");
      campoArchivo.onchange = (e) => {
        const archivo = e.target.files && e.target.files[0];
        const entrada = e.target;
        if (!archivo) return;
        procesarArchivoFoto(archivo, (datosFoto) => {
          avatarFoto = datosFoto;
          $$(".avatar-btn").forEach((x) => x.classList.remove("activo"));
          refrescarAvatar();
          C.Guia.habla("¡Qué foto tan linda! La voy a usar en tu perfil.");
        });
        entrada.value = "";
      };
      refrescarAvatar();

      const fila = el("div", "fila-botones");
      const listo = el(
        "button",
        "btn grande primario",
        editando ? "💾 Guardar cambios" : "✅ ¡Empezar a jugar!"
      );
      listo.onclick = () => {
        const nombre = input.value.trim() || "Amiguito";
        C.Sfx.bien();
        if (editando) {
          C.Store.renombrarPerfil(editando.id, nombre, avatarElegido, avatarFoto);
          pintarPerfilChip();
          C.Guia.habla("Listo, guardé el perfil de " + nombre + ".");
          C.Nav.reemplazar("perfil");
        } else {
          C.Store.crearPerfil(nombre, avatarElegido, avatarFoto);
          pintarPerfilChip();
          C.Guia.habla("¡Hola, " + nombre + "! Soy Kiko 🦜 ¡Vamos a aprender!");
          C.Nav.reemplazar("home");
        }
      };
      fila.appendChild(listo);
      if (hay) {
        const volver = el("button", "btn grande", "⬅️ Volver");
        volver.onclick = () => {
          C.Sfx.clic();
          C.Nav.reemplazar("perfil");
        };
        fila.appendChild(volver);
      }
      caja.appendChild(fila);
      cont.appendChild(caja);
    } else {
      const rejilla = el("div", "perfil-rejilla");
      C.Store.perfiles.forEach((p) => {
        const dp = C.Store.leerProgreso(p.id);
        const activo = C.Store.perfilActivo && C.Store.perfilActivo.id === p.id;
        const b = el("button", "perfil-tarjeta" + (activo ? " en-uso" : ""));
        b.innerHTML =
          avatarHTML(p) +
          "<strong>" +
          p.nombre +
          "</strong><small>⭐ " +
          (dp.estrellas || 0) +
          " · 🎒 " +
          (dp.practicas || 0) +
          "</small>" +
          (activo ? "<em>Jugando ahora</em>" : "");
        b.onclick = () => {
          C.Sfx.clic();
          C.Store.cambiarPerfil(p.id);
          pintarPerfilChip();
          C.Guia.habla("¡Hola, " + p.nombre + "! Seguimos donde quedamos.");
          C.Nav.reemplazar("home");
        };
        rejilla.appendChild(b);
      });
      const nuevo = el(
        "button",
        "perfil-tarjeta nuevo",
        "<span class='perfil-avatar'>➕</span><strong>Nuevo perfil</strong><small>Crear otro</small>"
      );
      nuevo.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("perfil", { crear: true });
      };
      rejilla.appendChild(nuevo);
      cont.appendChild(rejilla);

      /* Cuenta con respaldo de progreso (opcional, la maneja el adulto) */
      if (window.CUENTAS) {
        const ses = window.CUENTAS.sesion();
        const bCta = el(
          "button",
          "btn grande",
          ses ? "👤 Mi cuenta de usuario («" + ses.usuario + "»)" : "👤 Iniciar sesión"
        );
        bCta.onclick = () => {
          C.Sfx.clic();
          C.Nav.ir("cuenta");
        };
        cont.appendChild(bCta);
      }

      const volver = el("button", "btn grande", "🏠 Volver al inicio");
      volver.onclick = () => {
        C.Sfx.clic();
        C.Nav.reemplazar("home");
      };
      cont.appendChild(volver);
    }

    C.Voz.decir(
      formulario
        ? "Vamos a crear tu perfil. Escribe tu nombre y elige tu animal favorito."
        : "¿Quién está jugando? Toca tu nombre."
    );
  };

  /* =========================================================
     Informe de progreso para imprimir o guardar en PDF
     ========================================================= */
  function exportarProgreso(perfil, datos) {
    const caja = $("#informe-impresion");
    if (!caja) return;
    const minutos = Math.round((datos.tiempoMs || 0) / 60000);

    const filas = C.Niveles.todos()
      .map((n) => {
        const info = (datos.niveles && datos.niveles[n.id]) || { hechas: [] };
        const listaN = rutaDe(n.id);
        const total = listaN.length;
        const hechas = info.hechas.filter((h) => listaN.some((l) => l.id === h)).length;
        const pct = total ? Math.round((hechas / total) * 100) : 0;
        return (
          "<tr><td>" +
          n.icono +
          " " +
          n.nombre +
          "</td><td>" +
          hechas +
          " de " +
          total +
          "</td><td>" +
          pct +
          "%</td></tr>"
        );
      })
      .join("");

    const logros = (datos.insignias || [])
      .map((id) => {
        const ins = (D.insignias || []).filter((x) => x.id === id)[0];
        return ins ? "<li>" + ins.icono + " <strong>" + ins.nombre + "</strong>: " + ins.desc + "</li>" : "";
      })
      .join("");

    const debiles = [];
    C.Niveles.todos().forEach((n) => {
      debilesDe(datos, n.id).forEach((d) => debiles.push(n.nombre + ": " + d));
    });

    caja.innerHTML =
      "<h1>Informe de progreso</h1>" +
      "<p class='fila-info'><strong>" +
      perfil.nombre +
      "</strong>" +
      (perfil.foto ? " · con foto" : " · " + (perfil.avatar || "")) +
      "</p>" +
      "<p class='fila-info'>Fecha del informe: " +
      fechaCorta(Date.now()) +
      "</p>" +
      "<p class='fila-info'>Última actividad: " +
      fechaCorta(datos.actualizado) +
      "</p>" +
      "<h2>Resumen</h2>" +
      "<table><tr><td>⭐ Estrellas</td><td>" +
      (datos.estrellas || 0) +
      "</td></tr><tr><td>🎒 Actividades completadas</td><td>" +
      (datos.practicas || 0) +
      "</td></tr><tr><td>⏱️ Tiempo de uso</td><td>" +
      minutos +
      " minutos</td></tr><tr><td>👂 Escuchas</td><td>" +
      (datos.escuchas || 0) +
      "</td></tr><tr><td>✍️ Trazos</td><td>" +
      (datos.trazos || 0) +
      "</td></tr><tr><td>🏅 Logros</td><td>" +
      (datos.insignias || []).length +
      "</td></tr><tr><td>🐲 Misiones</td><td>" +
      (datos.misiones ? Object.keys(datos.misiones).length : 0) +
      "</td></tr><tr><td>🔐 Escape rooms</td><td>" +
      (datos.escape ? Object.keys(datos.escape).filter((k) => datos.escape[k] && datos.escape[k].abierta).length : 0) +
      "</td></tr><tr><td>🛠️ Inventos construidos</td><td>" +
      (datos.taller ? Object.keys(datos.taller).filter((k) => datos.taller[k] && datos.taller[k].terminado).length : 0) +
      "</td></tr><tr><td>🕵️ Casos resueltos</td><td>" +
      (datos.detective ? Object.keys(datos.detective).filter((k) => datos.detective[k] && datos.detective[k].etapasResueltas >= 3).length : 0) +
      "</td></tr><tr><td>🏆 Rondas de concurso</td><td>" +
      (datos.concurso && datos.concurso.rondas
        ? Object.keys(datos.concurso.rondas).filter((k) => datos.concurso.rondas[k] && datos.concurso.rondas[k].terminada).length +
          " de 5 · " +
          Object.keys(datos.concurso.rondas).reduce((s, k) => s + ((datos.concurso.rondas[k] && datos.concurso.rondas[k].puntos) || 0), 0) +
          " pts"
        : "0 de 5 · 0 pts") +
      "</td></tr><tr><td>🔬 Aciertos del laboratorio</td><td>" +
      (datos.laboratorio
        ? Object.keys(datos.laboratorio.actividades || {}).reduce(
            (s, k) => s + ((datos.laboratorio.actividades[k] && datos.laboratorio.actividades[k].aciertos) || 0),
            0
          ) + " · 🎤 " + (datos.laboratorio.lecturas || 0) + " lecturas"
        : "0 · 🎤 0 lecturas") +
      "</td></tr></table>" +
      "<h2>Avance por nivel</h2>" +
      "<table><thead><tr><th>Mundo</th><th>Actividades</th><th>Logro</th></tr></thead><tbody>" +
      filas +
      "</tbody></table>" +
      "<h2>Logros conseguidos</h2>" +
      (logros ? "<ul>" + logros + "</ul>" : "<p>Todavía no ha conseguido logros.</p>") +
      "<h2>Contenidos por reforzar</h2>" +
      (debiles.length
        ? "<ul>" +
          debiles
            .slice(0, 10)
            .map((x) => "<li>" + x + "</li>")
            .join("") +
          "</ul>"
        : "<p>Sin dificultades destacadas.</p>") +
      "<h2>Observaciones de la familia o del colegio</h2>" +
      "<p class='linea'></p><p class='linea'></p><p class='linea'></p>" +
      "<p class='pie'>Algebrario — informe generado automáticamente.</p>";

    window.print();
  }

  /* =========================================================
     Pantalla: Panel de la persona adulta
     ========================================================= */
  /* ---- Reportes para el docente (Fase 3) ----
   Los reportes imprimibles viven en reportes-docente/ junto a la app;
   si están disponibles (con conexión o en precache) se muestran los
   accesos en el panel adulto, en otra pestaña listos para imprimir. */
function montarReportesDocente(cont2) {
  const REPORTES = [
    {
      archivo: "reporte-duplicados.html",
      titulo: "🖨 Preguntas repetidas entre temas",
      desc: "Para decidir si cada frase repetida queda como refuerzo o se cambia.",
    },
    {
      archivo: "validacion-unidades.html",
      titulo: "🖨 Validación de las 150 unidades",
      desc: "Marcar Sí/No del título, objetivo y DBA de cada unidad.",
    },
  ];
  (async function () {
    try {
      const resp2 = await fetch("reportes-docente/" + REPORTES[0].archivo, { method: "HEAD" })
        .catch(function () { return null; });
      if (!resp2 || !resp2.ok) return;

      const frag = document.createDocumentFragment();
      frag.appendChild(el("h3", "subtitulo", "\u{1F4C4} Reportes para el docente"));
      const caja = el("div", "caja-reportes");
      REPORTES.forEach(function (rep, i) {
        const b = el("button", "tarjeta-reporte" + (i === 0 ? " c-duplicados" : " c-unidades"));
        b.type = "button";
        b.title = rep.desc;
        b.innerHTML =
          "<span class='tr-icono'>" + (i === 0 ? "🔁" : "📋") + "</span>" +
          "<span class='tr-texto'><strong>" + rep.titulo.replace(/^🖨 /, "") + "</strong>" +
          "<small>" + rep.desc + "</small></span>" +
          "<span class='tr-ir' aria-hidden='true'>Abrir ➜</span>";
        b.onclick = function () {
          C.Sfx.clic();
          window.open("reportes-docente/" + rep.archivo, "_blank");
        };
        caja.appendChild(b);
      });
      frag.appendChild(caja);
      frag.appendChild(
        el(
          "p",
          "nota-adulto",
          "Se abren en otra pestaña, listos para imprimir. El primero lista las "
            + "preguntas repetidas ENTRE temas distintos; el segundo es la hoja "
            + "para validar títulos, objetivos y DBA de las 150 unidades."
        )
      );

      /* insertar antes de "Logros conseguidos" para conservar el orden */
      let ancla = null;
      cont2.querySelectorAll("h3.subtitulo").forEach(function (h) {
        if (ancla) return;
        if (/Logros/.test(h.textContent || "")) ancla = h;
      });
      if (ancla) cont2.insertBefore(frag, ancla); else cont2.appendChild(frag);
    } catch (e) { /* sin reportes: no se muestra la sección */ }
  })();
}

window.pantalla_adulto = function (datos) {
    datos = datos || {};
    const cont = $("#contenido-adulto");
    cont.innerHTML = "";
    cont.appendChild(
      cabecera("🔧 Panel para personas adultas", "Consulta aquí el progreso de cada niña o niño.")
    );

    /* ---- Selector de perfiles (solo consulta) ---- */
    const perfiles = C.Store.perfiles;
    let visto = C.Store.perfilPorId(datos.perfil);
    if (!visto) visto = C.Store.perfilActivo || perfiles[0] || null;
    const d = visto ? C.Store.leerProgreso(visto.id) : C.Store.data;
    const esActivo = !!(visto && C.Store.perfilActivo && C.Store.perfilActivo.id === visto.id);

    if (perfiles.length) {
      const fila = el("div", "selector-perfiles");
      perfiles.forEach((p) => {
        const dp = C.Store.leerProgreso(p.id);
        const b = el("button", "chip-perfil" + (visto && visto.id === p.id ? " activo" : ""));
        b.innerHTML =
          avatarHTML(p, "chip-avatar") +
          "<span class='chip-nombre'>" +
          p.nombre +
          "</span><small>⭐ " +
          (dp.estrellas || 0) +
          "</small>";
        b.onclick = () => {
          C.Sfx.clic();
          C.Nav.reemplazar("adulto", { perfil: p.id });
        };
        fila.appendChild(b);
      });
      const nuevo = el("button", "chip-perfil nuevo", "➕ Nuevo perfil");
      nuevo.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("perfil", { crear: true });
      };
      fila.appendChild(nuevo);
      cont.appendChild(fila);
    }

    if (!visto) {
      cont.appendChild(el("p", "nota-adulto", "Todavía no hay perfiles creados."));
      const b = el("button", "btn grande primario", "➕ Crear el primer perfil");
      b.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("perfil", { crear: true });
      };
      cont.appendChild(b);
      montarReportesDocente(cont);
      /* Las cuentas se pueden crear antes que los perfiles */
      if (window.CUENTAS) window.CUENTAS.panelAdulto(cont);
      cont.appendChild(volverAtras("🏠 Volver al menú"));
      return;
    }

    /* ---- Ficha del perfil ---- */
    const ficha = el("div", "ficha-perfil");
    ficha.innerHTML =
      avatarHTML(visto, "ficha-avatar") +
      "<div class='ficha-datos'><strong>" +
      visto.nombre +
      (esActivo ? " <em>(en uso)</em>" : "") +
      "</strong><small>Creado: " +
      fechaCorta(visto.creado) +
      "</small><small>Última actividad: " +
      fechaCorta(d.actualizado) +
      "</small></div>";
    cont.appendChild(ficha);

    if (!esActivo) {
      const usar = el("button", "btn grande primario", "✅ Que " + visto.nombre + " siga aprendiendo");
      usar.onclick = () => {
        C.Store.usarPerfil(visto.id);
        pintarPerfilChip();
        C.Sfx.bien();
        C.Nav.reemplazar("adulto", { perfil: visto.id });
      };
      cont.appendChild(usar);
    }

    /* ---- Estadísticas ---- */
    const minutos = Math.round((d.tiempoMs || 0) / 60000);
    const tarjetas = el("div", "fila-estadisticas");
    [
      ["⭐ Estrellas", d.estrellas || 0],
      ["🎒 Actividades", d.practicas || 0],
      ["⏱️ Minutos", minutos],
      ["👂 Escuchas", d.escuchas || 0],
      ["✍️ Trazos", d.trazos || 0],
      ["🏅 Logros", (d.insignias || []).length],
    ].forEach((x) => {
      const t = el("div", "tarjeta-stat");
      t.innerHTML = "<span>" + x[0] + "</span><strong>" + x[1] + "</strong>";
      tarjetas.appendChild(t);
    });
    cont.appendChild(tarjetas);

    cont.appendChild(el("h3", "subtitulo", "📈 Avance por nivel"));
    const tabla = el("div", "tabla-adulto");
    C.Niveles.todos().forEach((n) => {
      const info = d.niveles[n.id] || { hechas: [], total: 0, dominio: 0 };
      const listaN = rutaDe(n.id);
      const total = listaN.length;
      const hechas = info.hechas.filter((h) => listaN.some((l) => l.id === h)).length;
      const pct = total ? Math.round((hechas / total) * 100) : 0;
      const fila = el("div", "fila-adulto");
      fila.innerHTML =
        "<span class='nom'>" +
        n.icono +
        " " +
        n.nombre +
        "</span><span class='barra'><i style='width:" +
        pct +
        "%;background:" +
        n.color +
        "'></i></span><span class='pct'>" +
        pct +
        "%</span>";
      tabla.appendChild(fila);
    });
    cont.appendChild(tabla);

    /* ---- Progreso escolar (currículo DBA por materia) ---- */
    if (
      window.CURRICULO &&
      window.CURRICULO_UI &&
      typeof window.CURRICULO.gradoPorId === "function" &&
      visto.grado
    ) {
      const CUR = window.CURRICULO;
      const CUI = window.CURRICULO_UI;
      const gInfo = CUR.gradoPorId(visto.grado);
      if (gInfo) {
        cont.appendChild(
          el("h3", "subtitulo", "📚 Materias del colegio · " + gInfo.nombre)
        );
        const elegidas = CUI.materiasActuales ? CUI.materiasActuales() : [] ;
        const tablaMate = el("div", "tabla-adulto");
        let primeraPendiente = null;
        CUR.MATERIAS.forEach((m) => {
          if (elegidas.indexOf(m.id) < 0) return;
          const pr = CUI.progresoMateria(visto.grado, m.id);
          if (!primeraPendiente && pr.pct < 100) primeraPendiente = m;
          const filaM = el("button", "fila-adulto fila-adulto-clic");
          filaM.type = "button";
          filaM.innerHTML =
            "<span class='nom'>" +
            (m.icono || "📘") +
            " " +
            m.nombre +
            "</span><span class='barra'><i style='width:" +
            pr.pct +
            "%'></i></span><span class='pct'>" +
            pr.hechos +
            " de " +
            pr.total +
            "</span>";
          filaM.title = "Abrir las lecciones de " + m.nombre;
          filaM.onclick = () => {
            C.Sfx.clic();
            C.Nav.ir("materia", { grado: visto.grado, materia: m.id });
          };
          tablaMate.appendChild(filaM);
        });
        cont.appendChild(tablaMate);
        if (primeraPendiente) {
          const nota = el(
            "p",
            "nota-adulto",
            "Sugerencia: empieza por " +
              primeraPendiente.nombre +
              " (primer tema sin completar del grado " +
              gInfo.nombre.toLowerCase() +
              ")."
          );
          cont.appendChild(nota);
        } else {
          cont.appendChild(
            el("p", "nota-adulto", "¡Tema por tema completados en las materias de este grado!")
          );
        }
      }
    }

    /* ---- Unidades didácticas y repasos (Fase 2) ---- */
    try {
      if (window.CURRICULO && window.UNID && typeof window.UNID.unidadesDe === "function" && visto.grado) {
        const CURR2 = window.CURRICULO;
        const UNIDP = window.UNID;
        const CUIP = window.CURRICULO_UI;
        cont.appendChild(
          el("h3", "subtitulo", "\u{1F4D8} Unidades y repasos")
        );
        const elegidasUni = CUIP.materiasActuales ? CUIP.materiasActuales() : [];
        const lineasMaterias = [];
        CURR2.MATERIAS.forEach((mm) => {
          if (elegidasUni.indexOf(mm.id) < 0) return;
          const unis = UNIDP.unidadesDe(visto.grado, mm.id);
          if (!unis) return;
          unis.forEach(function (u, i) {
            const pctU = Math.round((u.hechos * 100) / Math.max(1, u.total));
            lineasMaterias.push(
              (mm.icono || "\u{1F3EB}") + " " + (mm.corto || mm.nombre) + " — U" + (i + 1) + " \u00AB" + u.titulo + "\u00BB: " +
              u.hechos + "/" + u.total +
              (UNIDP.unidadCompleta(u) ? " \u2714 completa" : " (" + pctU + "%)")
            );
          });
        });
        if (lineasMaterias.length) {
          const listaUni = el("ul", "lista-debil");
          lineasMaterias.forEach(function (l) { listaUni.appendChild(el("li", "", l)); });
          cont.appendChild(listaUni);
        } else {
          cont.appendChild(
            el("p", "nota-adulto", "Cuando se completen temas aparecer\u00E1 aqu\u00ED el avance de cada unidad did\u00E1ctica.")
          );
        }
        /* Repasos guardados (mejor nota por unidad y por materia) */
        const evsP = d.evaluaciones || {};
        const clavesEv = Object.keys(evsP).sort(function (a, b) {
          return (evsP[b].fecha || 0) - (evsP[a].fecha || 0);
        });
        if (clavesEv.length) {
          cont.appendChild(el("h4", "sub-sub", "\u{1F3C5} Repasos tomados"));
          const tablaRep = el("div", "tabla-adulto");
          clavesEv.forEach(function (k) {
            const e2 = evsP[k];
            const pct2 = e2.total ? Math.round((e2.nota * 100) / e2.total) : 0;
            let who = k;
            if (k.indexOf("materia:") === 0) {
              const mid = k.slice(8).split("-")[1];
              const mmx = CURR2.MATERIAS.filter(function (x) { return x.id === mid; })[0];
              who = "Repaso de " + (mmx ? (mmx.corto || mmx.nombre) : mid);
            } else if (k.indexOf("unidad:") === 0) {
              const pid = k.slice(7).split("-");
              const mmx2 = CURR2.MATERIAS.filter(function (x) { return x.id === pid[2]; })[0];
              const unis2 = UNIDP.unidadesDe(pid[1], pid[2]);
              const uu = unis2 && unis2[parseInt(pid[0].slice(1), 10) - 1];
              who = "Repaso de unidad " + (uu ? "\u00AB" + uu.titulo + "\u00BB" : "") + (mmx2 ? " — " + (mmx2.corto || mmx2.nombre) : "");
            }
            const filaE = el("div", "fila-adulto");
            filaE.innerHTML =
              "<span class='nom'>" + who +
              "</span><span class='barra'><i style='width:" + pct2 +
              "%;background:" + (pct2 >= 70 ? "#2dc653" : "#ef476f") +
              "'></i></span><span class='pct'>" + pct2 + "% (" +
              e2.nota + "/" + e2.total + ")</span>";
            filaE.title = "Mejor nota registrada el " + fechaCorta(e2.fecha);
            tablaRep.appendChild(filaE);
          });
          cont.appendChild(tablaRep);
          cont.appendChild(
            el("p", "nota-adulto", "Se guarda la mejor nota de cada repaso. Con 70% o m\u00E1s se considera aprobado.")
          );
        }
      }
    } catch (e) {}

    /* Sección que vive arriba; se llamó montarReportesDocente para
       obtener contenido conectado a los archivos reales. */
    montarReportesDocente(cont);

    /* ---- Logros conseguidos ---- */
    cont.appendChild(el("h3", "subtitulo", "🏅 Logros conseguidos"));
    const insigs = d.insignias || [];
    if (insigs.length) {
      const rejLogros = el("div", "rejilla-logros");
      insigs.forEach((id) => {
        const ins = (D.insignias || []).filter((x) => x.id === id)[0];
        if (!ins) return;
        const t = el("div", "logro");
        t.innerHTML =
          "<span>" + ins.icono + "</span><strong>" + ins.nombre + "</strong><small>" + ins.desc + "</small>";
        rejLogros.appendChild(t);
      });
      cont.appendChild(rejLogros);
    } else {
      cont.appendChild(
        el("p", "nota-adulto", "Todavía no ha conseguido logros. ¡Llegarán con la práctica!")
      );
    }

    /* Contenidos por reforzar */
    cont.appendChild(el("h3", "subtitulo", "💡 Sugerencias de refuerzo"));
    const debilesGlobales = [];
    C.Niveles.todos().forEach((n) => {
      debilesDe(d, n.id).forEach((k) => debilesGlobales.push(n.icono + " " + n.nombre + ": " + k));
    });
    if (debilesGlobales.length) {
      const lista = el("ul", "lista-debil");
      debilesGlobales.slice(0, 12).forEach((x) => lista.appendChild(el("li", "", x)));
      cont.appendChild(lista);
      cont.appendChild(
        el(
          "p",
          "nota-adulto",
          "La plataforma ya está agregando actividades extra con estos contenidos al comienzo de cada nivel."
        )
      );
    } else {
      cont.appendChild(el("p", "nota-adulto", "No se detectaron contenidos difíciles por el momento. El sistema los identificará automáticamente."));
    }

    /* Configuración */
    cont.appendChild(el("h3", "subtitulo", "⚙️ Sonido y ayuda"));
    const config = el("div", "config-adulto");

    const chkAyuda = el("label", "chk");
    chkAyuda.innerHTML = "<input type='checkbox' " + (d.configuracion.ayudaAuto ? "checked" : "") + "> Reexplicar la tarea si el niño se queda quieto";
    chkAyuda.querySelector("input").onchange = (e) => {
      d.configuracion.ayudaAuto = e.target.checked;
      C.Store.save();
    };
    config.appendChild(chkAyuda);

    const chkSilencio = el("label", "chk");
    chkSilencio.innerHTML = "<input type='checkbox' " + (d.configuracion.silencio ? "checked" : "") + "> Silenciar todas las voces";
    chkSilencio.querySelector("input").onchange = (e) => {
      d.configuracion.silencio = e.target.checked;
      C.Voz.silenciado = e.target.checked;
      C.Store.save();
      refrescarBotonSilencio();
    };
    config.appendChild(chkSilencio);

    const volLabel = el("label", "", "Volumen de la voz: ");
    const vol = el("input", "");
    vol.type = "range";
    vol.min = 0;
    vol.max = 1;
    vol.step = 0.1;
    vol.value = d.configuracion.volumen;
    vol.oninput = (e) => {
      d.configuracion.volumen = parseFloat(e.target.value);
      C.Voz.volumen = d.configuracion.volumen;
      C.Store.save();
    };
    volLabel.appendChild(vol);
    config.appendChild(volLabel);

    cont.appendChild(config);

    /* ---- Informe para el colegio ---- */
    cont.appendChild(el("h3", "subtitulo", "🖨️ Informe para el colegio"));
    const btnInforme = el("button", "btn grande primario", "🖨️ Exportar el progreso (imprimir o PDF)");
    btnInforme.onclick = () => {
      C.Sfx.clic();
      exportarProgreso(visto, d);
    };
    cont.appendChild(btnInforme);
    cont.appendChild(
      el(
        "p",
        "nota-adulto",
        "Se abre la ventana de impresión: elige «Guardar como PDF» para enviarlo por correo o llevarlo impreso."
      )
    );

    /* ---- Seguridad (PIN de adulto) ---- */
    cont.appendChild(el("h3", "subtitulo", "🔒 Seguridad"));
    const seg = el("div", "config-adulto");
    const hayPin = C.Pin.hay();

    const btnPin = el("button", "btn grande", hayPin ? "🔑 Cambiar el PIN de adulto" : "🔑 Crear un PIN de adulto");
    btnPin.onclick = () => {
      C.Sfx.clic();
      C.abrirPin("crear", () => {
        C.Sfx.bien();
        alert("PIN guardado. La próxima vez se pedirá para entrar a este panel.");
        C.Nav.reemplazar("adulto", { perfil: visto.id });
      });
    };
    seg.appendChild(btnPin);

    if (hayPin) {
      const btnQuitar = el("button", "btn grande peligro", "🔓 Quitar el PIN");
      btnQuitar.onclick = () => {
        if (confirm("¿Quitar el PIN? Cualquier persona podrá abrir el área de adultos.")) {
          C.Pin.quitar();
          C.Sfx.clic();
          C.Nav.reemplazar("adulto", { perfil: visto.id });
        }
      };
      seg.appendChild(btnQuitar);
    }
    cont.appendChild(seg);
    cont.appendChild(
      el(
        "p",
        "nota-adulto",
        hayPin
          ? "El PIN protege este panel para que sea solo para personas adultas."
          : "Sin PIN, cualquier persona puede abrir este panel. Puedes crear uno cuando quieras."
      )
    );

    /* ---- Cuentas de usuario (respaldo del progreso) ---- */
    if (window.CUENTAS) window.CUENTAS.panelAdulto(cont, visto);

    /* ---- Gestión de perfiles ---- */
    cont.appendChild(el("h3", "subtitulo", "🧒 Perfiles"));
    const gestion = el("div", "config-adulto");

    const editar = el("button", "btn grande", "✏️ Cambiar nombre o animal de " + visto.nombre);
    editar.onclick = () => {
      C.Sfx.clic();
      C.Nav.ir("perfil", { editar: visto.id });
    };
    gestion.appendChild(editar);

    /* Papelera: recuperar perfiles borrados por accidente */
    const papelN = C.Store.papeleraContar ? C.Store.papeleraContar() : 0;
    if (papelN > 0) {
      const zonaPapel = el("div", "zona-continuar");
      const cardPapel = el("button", "tarjeta-continuar");
      cardPapel.style.setProperty("--c", "#f2994a");
      cardPapel.innerHTML =
        "<div class='continuar-info'>" +
        "<strong>♻️ " + papelN + (papelN === 1 ? " perfil borrado" : " perfiles borrados") + " en la papelera</strong>" +
        "<small>Se pueden recuperar con todo su progreso.</small>" +
        "</div><span class='btn-continuar'>Recuperar ➜</span>";
      cardPapel.onclick = () => {
        C.Sfx.clic();
        const lista = C.Store.papeleraEntradas();
        const nom = lista.map((x, i) => (i + 1) + ". " + x.nombre).join("  ·  ");
        const idx = prompt("Papelera: " + nom + "\n\nEscribe el número del perfil a recuperar (1, 2 o 3):", "1");
        if (idx === null) return;
        const n = parseInt(idx, 10);
        if (isNaN(n) || n < 1 || n > lista.length) {
          alert("Número no válido.");
          return;
        }
        const rec = C.Store.recuperarPerfil(n - 1);
        if (rec) {
          alert("Perfil recuperado: " + rec.nombre);
          C.Nav.reemplazar("adulto", { perfil: visto.id });
        } else {
          alert("No se pudo recuperar ese perfil.");
        }
      };
      gestion.appendChild(cardPapel);
    }

    const btnReiniciar = el("button", "btn grande peligro", "🧹 Borrar el progreso de " + visto.nombre);
    btnReiniciar.onclick = () => {
      if (
        confirm(
          "¿Borrar el progreso de " + visto.nombre + "? El perfil se conserva, pero vuelve a empezar de cero."
        )
      ) {
        C.Store.reiniciarPerfil(visto.id);
        pintarPerfilChip();
        C.Sfx.bien();
        C.Guia.habla("Progreso borrado. ¡Empezamos de nuevo!");
        C.Nav.reemplazar("adulto", { perfil: visto.id });
      }
    };
    gestion.appendChild(btnReiniciar);

    const btnEliminar = el("button", "btn grande peligro", "🗑️ Eliminar el perfil de " + visto.nombre);
    btnEliminar.onclick = () => {
      if (
        confirm(
          "¿Eliminar el perfil de " +
            visto.nombre +
            "? Se borra el perfil y todo su progreso. Esta acción no se puede deshacer."
        )
      ) {
        C.Store.eliminarPerfil(visto.id);
        pintarPerfilChip();
        C.Sfx.clic();
        C.Nav.reemplazar("adulto", {});
      }
    };
    gestion.appendChild(btnEliminar);
    cont.appendChild(gestion);

    cont.appendChild(volverAtras("🏠 Volver al menú"));
    C.Voz.decir("Este panel es para la persona adulta.");
  };

  /* =========================================================
     Utilidades de interfaz
     ========================================================= */
  function cabecera(titulo, sub) {
    const c = el("div", "cabecera-pantalla");
    c.appendChild(el("h1", "", titulo));
    if (sub) c.appendChild(el("p", "", sub));
    return c;
  }

  /* Imagen ilustrada decorativa para las secciones */
  function bannerSeccion(src, alt) {
    const img = document.createElement("img");
    img.className = "img-seccion";
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    return img;
  }

  function volverAtras(texto) {
    const b = el("button", "btn grande", texto || "⬅️ Volver");
    b.onclick = () => {
      C.Sfx.clic();
      C.Nav.atras();
    };
    return b;
  }

  /* Cuando el ratón pasa por encima de un botón (o el teclado lo enfoca),
     Kiko lee en voz alta qué hace. Muy útil para quien aún no lee solo. */
  function vozBoton(btn, texto) {
    if (!btn || !texto) return;
    const decir = () => {
      if (C.Voz.silenciado) return;
      C.Voz.decir(texto, { pitch: 1.45 });
    };
    btn.addEventListener("pointerenter", decir);
    btn.addEventListener("focus", decir);
  }

  /* Personaje guía dibujado en SVG (Kiko, rediseñado y animado)
     Si el niño eligió una mascota, Kiko se transforma en esa
     criatura y crece con ella (bebé → joven → legendaria).     */
  let guiaEstado = "";
  function pintarGuia() {
    const acc = C.Store.data.accesorio || "ninguno";

    /* Transformación: la mascota reemplaza al loro */
    if (window.MASCOTA && window.MASCOTA.tiene()) {
      const inf = window.MASCOTA.info();
      const dfz = window.MASCOTA.disfrazActivo();
      const guiaM = $("#guia-svg");
      if (guiaM) {
        /* Si la mascota no ha cambiado, no se rehace el dibujo */
        const estado = inf.criatura.id + ":" + inf.etapaId + ":" + (dfz ? dfz.id : "-");
        if (guiaEstado === estado) return;
        guiaEstado = estado;
        /* Primero se limpia lo anterior (incluido un motor 3D viejo) */
        if (guiaM._motor3d) {
          guiaM._motor3d.liberar();
          guiaM._motor3d = null;
        }
        guiaM.innerHTML = "";
        const extra = dfz && dfz.id !== "ninguno" ? "<span class='guia-disfraz'>" + dfz.icono + "</span>" : "";
        const figura = window.DIBUJOCRIATURA
          ? window.DIBUJOCRIATURA.svg(inf.criatura.id, inf.etapaId, window.MASCOTA.nombreFase(inf.criatura.id, inf.etapaId))
          : "<span class='guia-mascota-emoji'>" + window.MASCOTA.emojiFase(inf.criatura.id, inf.etapaId) + "</span>";
        guiaM.innerHTML =
          "<div class='guia-mascota' style='--tam:" + inf.etapa.escala + "'>" +
          figura +
          extra +
          "</div>";
      }
      return;
    }

    /* Sin mascota: vuelve a ser Kiko el loro (SVG con sombrero) */
    if (guiaEstado !== "kiko") {
      guiaEstado = "kiko";
      const guiaV = $("#guia-svg");
      if (guiaV) {
        if (guiaV._motor3d) {
          guiaV._motor3d.liberar();
          guiaV._motor3d = null;
        }
        guiaV.innerHTML = "";
      }
    }

    /* Sombreros reposicionados sobre la cabeza de Kiko
       (cabeza: centro 110,78 — radio 52) */
    const sombreros = {
      gorro: '<path d="M66 40 q44 -34 88 0 z" fill="#ef476f"/><rect x="56" y="38" width="108" height="10" rx="5" fill="#d62f57"/>',
      sombrero: '<rect x="72" y="16" width="76" height="28" fill="#2d3142"/><ellipse cx="110" cy="20" rx="74" ry="8" fill="#2d3142"/>',
      flor: '<circle cx="142" cy="24" r="9" fill="#ffd166"/><circle cx="154" cy="32" r="9" fill="#ef476f"/><circle cx="134" cy="34" r="9" fill="#4cc9f0"/>',
      estrella: '<polygon points="110,2 120,26 146,26 125,42 133,68 110,52 87,68 95,42 74,26 100,26" fill="#ffd166" stroke="#e0a800" stroke-width="2"/>',
      corona: '<path d="M60 46 L72 16 L92 38 L110 10 L128 38 L148 16 L160 46 Z" fill="#ffd166" stroke="#e0a800" stroke-width="2"/>',
    };
    const svg =
      '<svg viewBox="0 0 220 244" role="img" aria-label="Kiko el loro">' +
      '<defs>' +
      '<linearGradient id="kgCuerpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0ec98f"/><stop offset="1" stop-color="#06a379"/></linearGradient>' +
      '<radialGradient id="kgCabeza" cx="0.5" cy="0.28" r="0.85"><stop offset="0" stop-color="#14d397"/><stop offset="1" stop-color="#079e74"/></radialGradient>' +
      '<radialGradient id="kgBarriga" cx="0.5" cy="0.4" r="0.75"><stop offset="0" stop-color="#fff8dc"/><stop offset="1" stop-color="#fce9b8"/></radialGradient>' +
      '<linearGradient id="kgPico" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc95e"/><stop offset="1" stop-color="#e88f1f"/></linearGradient>' +
      '</defs>' +
      '<ellipse cx="110" cy="234" rx="54" ry="9" fill="rgba(0,0,0,.12)"/>' +
      /* cola: tres plumas largas con raquis (M150 168...) */
      '<g class="kiko-cola"><path d="M142 154 Q202 166 215 226 Q184 226 146 200 Z" fill="#e63946" stroke="#b02339" stroke-width="2" stroke-linejoin="round"/><path d="M150 164 Q192 178 208 222" stroke="rgba(255,255,255,.28)" stroke-width="2" fill="none" stroke-linecap="round"/></g>' +
      '<g class="kiko-cola"><path d="M148 162 Q196 182 204 230 Q170 222 150 204 Z" fill="#059d78" stroke="#047f68" stroke-width="2" stroke-linejoin="round"/><path d="M154 172 Q184 190 196 226" stroke="rgba(255,255,255,.22)" stroke-width="2" fill="none" stroke-linecap="round"/></g>' +
      '<g class="kiko-cola"><path d="M153 172 Q182 194 190 234 Q161 224 152 210 Z" fill="#35a7e8" stroke="#1f88c6" stroke-width="2" stroke-linejoin="round"/><path d="M157 182 Q172 198 180 228" stroke="rgba(255,255,255,.25)" stroke-width="2" fill="none" stroke-linecap="round"/></g>' +
      /* cuerpo: torso con barriga implumada y patas con garras */
      '<g class="kiko-cuerpo">' +
      '<path d="M110 112 C72 114 60 150 64 184 C68 214 86 226 110 228 C134 226 152 214 156 184 C160 150 148 114 110 112 Z" fill="url(#kgCuerpo)" stroke="#048070" stroke-width="2.5"/>' +
      '<ellipse cx="110" cy="180" rx="38" ry="46" fill="url(#kgBarriga)"/>' +
      '<path d="M80 166 q15 12 30 0 q15 12 30 0" stroke="#e6d69d" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.75"/>' +
      '<path d="M83 190 q13.5 11 27 0 q13.5 11 27 0" stroke="#e6d69d" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.75"/>' +
      '<path d="M92 210 q-13 7 -10 18 q6 6 14 5 q8 1 13 -4 q4 -10 -3 -17 q-7 -4 -14 -2 z" fill="#f6ae2d" stroke="#e09b2d" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M85 233 l-3 4 M93 235 v4 M101 232 l3 4" stroke="#d9822b" stroke-width="2" stroke-linecap="round" fill="none"/>' +
      '<path d="M126 210 q13 7 10 18 q-6 6 -14 5 q-8 1 -13 -4 q-4 -10 3 -17 q7 -4 14 -2 z" fill="#f6ae2d" stroke="#e09b2d" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M116 233 l-3 4 M124 235 v4 M132 232 l3 4" stroke="#d9822b" stroke-width="2" stroke-linecap="round" fill="none"/>' +
      "</g>" +
      /* alas plegadas con plumas que se apartan (aletean al hablar) */
      '<g class="kiko-ala-izq">' +
      '<path d="M64 128 Q26 148 34 196 Q52 216 86 206 Q74 168 78 132 Z" fill="#059d78" stroke="#047f68" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M52 148 Q42 172 50 198" stroke="#04806b" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M64 150 Q60 176 70 202" stroke="#04806b" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M40 188 q10 16 28 13 q-16 -4 -22 -19 z" fill="#35a7e8" opacity="0.9"/>' +
      "</g>" +
      '<g class="kiko-ala-der">' +
      '<path d="M156 128 Q194 148 186 196 Q168 216 134 206 Q146 168 142 132 Z" fill="#059d78" stroke="#047f68" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M168 148 Q178 172 170 198" stroke="#04806b" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M156 150 Q160 176 150 202" stroke="#04806b" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M180 188 q-10 16 -28 13 q16 -4 22 -19 z" fill="#35a7e8" opacity="0.9"/>' +
      "</g>" +
      /* cabeza con penacho de plumas curvadas hacia atrás */
      '<circle cx="110" cy="78" r="52" fill="url(#kgCabeza)" stroke="#048070" stroke-width="2.5"/>' +
      '<g class="kiko-penacho">' +
      '<path d="M88 36 Q80 12 96 4 Q94 20 102 32 Z" fill="#059d78" stroke="#04806b" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M106 30 Q108 6 124 2 Q116 16 118 30 Z" fill="#0bb18b" stroke="#04806b" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M124 32 Q134 10 152 6 Q142 22 138 34 Z" fill="#ffd166" stroke="#e0a800" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M92 28 Q90 18 95 10 M112 24 Q115 12 120 6 M132 26 Q138 16 146 10" stroke="rgba(255,255,255,.35)" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
      "</g>" +
      /* cara de amazona: máscara clara alrededor de ojos y pico */
      '<ellipse cx="86" cy="82" rx="24" ry="26" fill="#eefbe9" stroke="#d5e8cf" stroke-width="2"/>' +
      '<ellipse cx="134" cy="82" rx="24" ry="26" fill="#eefbe9" stroke="#d5e8cf" stroke-width="2"/>' +
      '<rect x="86" y="64" width="48" height="24" rx="12" fill="#eefbe9"/>' +
      /* ojos reales: esclerótica, iris ámbar, pupila y dos brillos */
      '<circle cx="86" cy="76" r="15" fill="#fff" stroke="#cfe3c8" stroke-width="1.5"/>' +
      '<circle cx="134" cy="76" r="15" fill="#fff" stroke="#cfe3c8" stroke-width="1.5"/>' +
      '<circle cx="86" cy="76" r="9.5" fill="#f2a93b" stroke="#c97b1c" stroke-width="2"/>' +
      '<circle cx="134" cy="76" r="9.5" fill="#f2a93b" stroke="#c97b1c" stroke-width="2"/>' +
      '<circle cx="86" cy="76" r="5" fill="#2d3142"/><circle cx="134" cy="76" r="5" fill="#2d3142"/>' +
      '<circle cx="88.5" cy="73" r="2.6" fill="#fff"/><circle cx="136.5" cy="73" r="2.6" fill="#fff"/>' +
      '<circle cx="82.5" cy="79" r="1.3" fill="#fff"/><circle cx="130.5" cy="79" r="1.3" fill="#fff"/>' +
      '<ellipse class="kiko-parpado" cx="86" cy="76" rx="16.5" ry="15.5" fill="#0ec98f"/>' +
      '<ellipse class="kiko-parpado kiko-parpado-2" cx="134" cy="76" rx="16.5" ry="15.5" fill="#0ec98f"/>' +
      '<path d="M74 61 q12 -7 24 -1 M122 60 q12 -6 24 1" stroke="#078f6e" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      /* cachetes */
      '<circle cx="68" cy="100" r="7.5" fill="#ef476f" opacity="0.32"/>' +
      '<circle cx="152" cy="100" r="7.5" fill="#ef476f" opacity="0.32"/>' +
      /* cere con fosas nasales y pico curvo en dos partes */
      '<path d="M86 92 Q110 100 134 92 Q139 98 134 104 Q110 111 86 104 Q81 98 86 92 Z" fill="#cfe4f2" stroke="#a9c8dd" stroke-width="2" stroke-linejoin="round"/>' +
      '<circle cx="100" cy="100" r="2.2" fill="#8fb4c9"/><circle cx="120" cy="100" r="2.2" fill="#8fb4c9"/>' +
      '<path d="M88 100 Q110 108 132 100 Q142 110 134 121 Q124 129 110 129 Q96 129 90 119 Q85 109 88 100 Z" fill="url(#kgPico)" stroke="#d97b1a" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M96 117 Q110 125 124 117" stroke="#c47214" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M100 127 q10 7 20 0 q-4 7 -10 7 q-6 0 -10 -7 z" fill="#e08b1f" stroke="#d97b1a" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M95 104 Q104 110 114 107" stroke="rgba(255,255,255,.55)" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      (sombreros[acc] || "") +
      "</svg>";
    const guia = $("#guia-svg");
    if (guia) guia.innerHTML = svg;
  }

  function refrescarBotonSilencio() {
    const b = $("#btn-silencio");
    if (!b) return;
    b.textContent = C.Voz.silenciado ? "🔇" : "🔊";
    b.title = C.Voz.silenciado ? "Activar sonido" : "Silenciar";
    b.classList.toggle("apagado", !!C.Voz.silenciado);
  }

  /* Botón del encabezado para cambiar la forma de las letras */
  function refrescarBotonLetra() {
    const b = $("#btn-letra");
    if (!b) return;
    const f = C.Fuente.info(C.Fuente.actual());
    b.textContent = f.icono;
    b.title = "Forma de las letras: " + f.nombre;
    b.setAttribute("aria-label", "Forma de las letras: " + f.nombre + ". Toca para cambiar.");
    b.classList.toggle("apagado", f.id !== "imprenta");
  }

  /* =========================================================
     Arranque
     ========================================================= */
  function iniciar() {
    C.Store.load();
    /* Cuentas: si el progreso del equipo se perdió (actualización del
       sitio, cambio de dirección, limpieza del navegador) pero había
       sesión de cuenta abierta, la copia devuelta el progreso. */
    if (window.CUENTAS) window.CUENTAS.recuperarSiHaceFalta();
    C.Voz.init();
    C.Fuente.aplicar();

    /* Se busca un modelo 3D propio del usuario (si hay) */
    arrancarBusquedaModelo();

    pintarGuia();
    refrescarBotonSilencio();
    refrescarBotonLetra();
    pintarPerfilChip();

    /* botones globales */
    $("#btn-inicio").onclick = () => {
      C.Sfx.clic();
      C.Nav.reemplazar("home");
    };
    $("#btn-perfil").onclick = () => {
      C.Sfx.clic();
      C.Nav.ir("perfil");
    };
    $("#btn-silencio").onclick = () => {
      const s = C.Voz.alternarSilencio();
      C.Store.data.configuracion.silencio = s;
      C.Store.save();
      refrescarBotonSilencio();
      if (!s) C.Guia.habla("Sonido activado.");
    };
    $("#btn-letra").onclick = () => {
      C.Sfx.clic();
      const f = C.Fuente.siguiente();
      refrescarBotonLetra();
      C.Guia.habla("Ahora las letras son " + f.nombre.toLowerCase() + ". " + f.desc + ".");
      /* Si estamos escribiendo, redibujamos el trazo con la nueva letra */
      const canvas = $("#actividad-cuerpo .lienzo-trazo");
      if (canvas && typeof window.repintarTrazo === "function") window.repintarTrazo();
    };

    const btnAventuraBarra = $("#btn-aventura");
    if (btnAventuraBarra) {
      btnAventuraBarra.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("aventura");
      };
      vozBoton(btnAventuraBarra, "Mi aventura. Mira tus estrellas y lo que has aprendido.");
    }

    const btnAventureroBarra = $("#btn-aventurero");
    if (btnAventureroBarra) {
      btnAventureroBarra.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("aventurero");
      };
      vozBoton(btnAventureroBarra, "Mi personaje: tu aventurero y sus accesorios.");
    }

    /* Encabezado: todas las funciones globales viven aquí */
    const btnAdultoBarra = $("#btn-adulto");
    if (btnAdultoBarra) {
      btnAdultoBarra.onclick = () => {
        C.Sfx.clic();
        C.abrirPanelAdulto();
      };
    }

    /* Kiko lee en voz alta qué hace cada botón del encabezado */
    vozBoton($("#btn-inicio"), "Inicio");
    vozBoton($("#btn-adulto"), "Área de adultos");
    vozBoton($("#btn-perfil"), "Mi perfil");
    vozBoton($("#btn-silencio"), "Sonido");
    vozBoton($("#btn-letra"), "Cambiar la forma de las letras");

    $("#guia").onclick = () => {
      C.Voz.repetir();
    };

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        C.Nav.atras();
      }
    });

    /* primera interacción: necesario para que el navegador permita hablar */
    const desbloquearVoz = () => {
      C.Voz.desbloquear();
      window.removeEventListener("pointerdown", desbloquearVoz);
    };
    window.addEventListener("pointerdown", desbloquearVoz);

    C.Nav.reemplazar(
      window.CUENTAS
        ? window.CUENTAS.arranque()
        : C.Store.hayPerfiles()
        ? "home"
        : "perfil"
    );

    /* Mascota: lleva la cuenta de la visita (sin castigos). Si el
       niño vuelve después de días, se alegra y le da un extra.  */
    if (window.MASCOTA && window.MASCOTA.tiene()) {
      const v = window.MASCOTA.saludoVuelta();
      if (v.vuelve) {
        setTimeout(() => C.Guia.habla(v.texto), 2600);
      }
    }

    /* Service worker para funcionar sin conexión (si se sirve por http) */
    if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }

    /* Aviso de pausa cada 12 minutos (cuidado de los ojos).
       Nunca interrumpe: solo habla si la guía está en silencio. */
    setInterval(() => {
      if (C.Nav.actual === "actividad" && !C.Voz.hablando()) {
        C.Guia.habla("Bueno, llevamos un rato aprendiendo. ¿Tomamos un respiro y seguimos?");
      }
    }, 12 * 60 * 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
