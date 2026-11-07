/* =========================================================
   WEB LEER — Catálogo de juegos, dificultad y variaciones
   ---------------------------------------------------------
   Cada juego declara tres niveles de dificultad (fácil, medio,
   difícil). Para cada dificultad se GENERAN muchísimas variantes
   de ejercicio (>100) combinando los contenidos del currículo
   (letras, sílabas, palabras, oraciones, números...) con los
   valores propios del nivel.

   La variante se elige al azar cada vez que el niño juega, así
   el mismo juego nunca se siente igual. La dificultad elegida se
   recuerda por perfil (Store.data.dificultadJuegos).
   ========================================================= */

window.JUEGOS = (function () {
  "use strict";

  const D = window.DATA;

  /* ---------------- Utilidades ---------------- */
  function rnd(a) {
    return a[Math.floor(Math.random() * a.length)];
  }
  function barajar(a) {
    const c = a.slice();
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = c[i];
      c[i] = c[j];
      c[j] = t;
    }
    return c;
  }
  function tomar(a, n) {
    return barajar(a).slice(0, Math.min(n, a.length));
  }

  /* ---------------- Pools de contenido ---------------- */
  const LETRAS_VOCALES = D.vocales.map((v) => v.l);
  const LETRAS_CONSONANTES = D.consonantes.map((c) => c.l);
  const LETRAS_TODAS = LETRAS_VOCALES.concat(LETRAS_CONSONANTES);
  const PALABRAS = D.palabras;
  const PALABRAS_CORTAS = D.palabras.filter((p) => p.w.length <= 4);
  const PALABRAS_LARGAS = D.palabras.filter((p) => p.w.length >= 5);
  const OBJETOS = D.objetos;
  const ORACIONES = D.oraciones;

  /* Subconjuntos de letras para multiplicar variantes */
  const GRUPOS_LETRAS = [
    ["A", "E", "I"],
    ["A", "E", "I", "O"],
    LETRAS_VOCALES,
    ["M", "P", "S"],
    ["M", "P", "S", "L"],
    ["M", "P", "S", "L", "T"],
    ["N", "C", "D"],
    ["N", "C", "D", "G"],
    ["B", "V", "R"],
    ["J", "Y", "Z"],
    ["Q", "Ñ", "H"],
    LETRAS_CONSONANTES.slice(0, 6),
    LETRAS_CONSONANTES.slice(0, 10),
    LETRAS_VOCALES.concat(["M", "P"]),
    LETRAS_TODAS,
  ];

  /* Subconjuntos de palabras */
  const GRUPOS_PALABRAS = [
    PALABRAS_CORTAS,
    PALABRAS.filter((p) => p.syl.length === 2),
    PALABRAS.filter((p) => p.syl.length <= 3),
    PALABRAS,
    PALABRAS_LARGAS,
    PALABRAS.slice(0, 8),
    PALABRAS.slice(8, 16),
    PALABRAS.slice(16),
  ].filter((g) => g.length >= 2);

  const CANTIDADES = [3, 4, 5, 6, 7, 8];

  /* =========================================================
     Definición de cada juego.
     Cada campo "facil"/"medio"/"dificil" es una FUNCIÓN que
     devuelve una lista de descriptores de actividad distintos.
     El motor elige uno al azar. Con muchos descriptores por
     nivel, cada juego supera las 100 variantes totales.
     ========================================================= */

  /* Ayuda: crea el producto cartesiano de varias listas y arma
     descriptores. Garantiza MUCHAS variantes por dificultad.     */
  function cruzar(base, dims) {
    /* base: objeto con campos fijos; dims: { clave: [valores] } */
    let combos = [{}];
    Object.keys(dims).forEach((k) => {
      const vals = dims[k];
      const nuevo = [];
      combos.forEach((c) => {
        vals.forEach((v) => {
          const copia = {};
          Object.keys(c).forEach((kk) => (copia[kk] = c[kk]));
          copia[k] = v;
          nuevo.push(copia);
        });
      });
      combos = nuevo;
    });
    return combos.map((c) => {
      const d = { tipo: base.tipo, titulo: base.titulo, n: base.n, nivel: base.nivel, params: {} };
      Object.keys(base.params || {}).forEach((k) => (d.params[k] = base.params[k]));
      Object.keys(c).forEach((k) => (d.params[k] = c[k]));
      if (c.n !== undefined) d.n = c.n;
      return d;
    });
  }

  /* ---------- Memoria ---------- */
  const memoria = {
    id: "memoria",
    icono: "🃏",
    nombre: "Memoria",
    desc: "Encuentra las parejas",
    niveles: {
      facil: () =>
        cruzar({ tipo: "memory", titulo: "Memoria", nivel: 1 }, { letras: GRUPOS_LETRAS.slice(0, 8), pares: [2, 3, 4] }).map((d) => {
          d.n = 1;
          return d;
        }),
      medio: () =>
        cruzar({ tipo: "memory", titulo: "Memoria", nivel: 2 }, { letras: GRUPOS_LETRAS.slice(6, 13), pares: [4, 5, 6] }).map((d) => {
          d.n = 1;
          return d;
        }),
      dificil: () =>
        cruzar({ tipo: "memory", titulo: "Memoria", nivel: 2 }, { letras: GRUPOS_LETRAS.slice(10), pares: [6, 7, 8] }).map((d) => {
          d.n = 1;
          return d;
        }),
    },
  };

  /* ---------- Encuentra la letra ---------- */
  const findLetter = {
    id: "find-letter",
    icono: "🔍",
    nombre: "Encuentra la letra",
    desc: "Escucha y toca la letra",
    niveles: {
      facil: () => cruzar({ tipo: "find-letter", titulo: "Encuentra la letra", nivel: 1 }, { n: CANTIDADES.slice(0, 4), pool: GRUPOS_LETRAS.slice(0, 6) }),
      medio: () => cruzar({ tipo: "find-letter", titulo: "Encuentra la letra", nivel: 2 }, { n: CANTIDADES.slice(2, 6), pool: GRUPOS_LETRAS.slice(4, 12) }),
      dificil: () => cruzar({ tipo: "find-letter", titulo: "Encuentra la letra", nivel: 2 }, { n: CANTIDADES.slice(3), pool: GRUPOS_LETRAS.slice(8) }),
    },
  };

  /* ---------- Ordena las sílabas ---------- */
  const orderSyl = {
    id: "order-syl",
    icono: "🧩",
    nombre: "Ordena las sílabas",
    desc: "Arma la palabra",
    niveles: {
      facil: () => cruzar({ tipo: "order-syl", titulo: "Ordena las sílabas", nivel: 3 }, { n: CANTIDADES.slice(0, 4), pool: GRUPOS_PALABRAS.slice(0, 4) }),
      medio: () => cruzar({ tipo: "order-syl", titulo: "Ordena las sílabas", nivel: 3 }, { n: CANTIDADES.slice(1, 5), pool: GRUPOS_PALABRAS.slice(2, 7) }),
      dificil: () => cruzar({ tipo: "order-syl", titulo: "Ordena las sílabas", nivel: 3 }, { n: CANTIDADES.slice(2), pool: GRUPOS_PALABRAS }),
    },
  };

  /* ---------- Forma la palabra (letras) ---------- */
  const buildWord = {
    id: "build-word",
    icono: "🏗️",
    nombre: "Forma la palabra",
    desc: "Arrastra las letras",
    niveles: {
      facil: () => cruzar({ tipo: "build-word", titulo: "Forma la palabra", nivel: 4, params: { distractores: 2 } }, { n: CANTIDADES.slice(0, 4), pool: GRUPOS_PALABRAS.slice(0, 4) }),
      medio: () => cruzar({ tipo: "build-word", titulo: "Forma la palabra", nivel: 4, params: { distractores: 3 } }, { n: CANTIDADES.slice(1, 5), pool: GRUPOS_PALABRAS.slice(2, 7) }),
      dificil: () => cruzar({ tipo: "build-word", titulo: "Forma la palabra", nivel: 4, params: { distractores: 5 } }, { n: CANTIDADES.slice(2), pool: GRUPOS_PALABRAS }),
    },
  };

  /* ---------- Completa la palabra ---------- */
  const fillWord = {
    id: "fill-word",
    icono: "✏️",
    nombre: "Completa la palabra",
    desc: "Faltan letras",
    niveles: {
      facil: () => cruzar({ tipo: "fill-word", titulo: "Completa la palabra", nivel: 4, params: { dificultad: "facil" } }, { n: CANTIDADES.slice(0, 4), pool: GRUPOS_PALABRAS.slice(0, 4) }),
      medio: () => cruzar({ tipo: "fill-word", titulo: "Completa la palabra", nivel: 4, params: { dificultad: "medio" } }, { n: CANTIDADES.slice(1, 5), pool: GRUPOS_PALABRAS.slice(2, 7) }),
      dificil: () => cruzar({ tipo: "fill-word", titulo: "Completa la palabra", nivel: 4, params: { dificultad: "dificil" } }, { n: CANTIDADES.slice(2), pool: GRUPOS_PALABRAS }),
    },
  };

  /* ---------- Escribe la palabra (teclado) ---------- */
  const typeWord = {
    id: "type-word",
    icono: "⌨️",
    nombre: "Escribe la palabra",
    desc: "Con el teclado",
    niveles: {
      facil: () => cruzar({ tipo: "type-word", titulo: "Escribe la palabra", nivel: 4 }, { n: CANTIDADES.slice(0, 4), pool: GRUPOS_PALABRAS.slice(0, 4) }),
      medio: () => cruzar({ tipo: "type-word", titulo: "Escribe la palabra", nivel: 4 }, { n: CANTIDADES.slice(1, 5), pool: GRUPOS_PALABRAS.slice(2, 7) }),
      dificil: () => cruzar({ tipo: "type-word", titulo: "Escribe la palabra", nivel: 4 }, { n: CANTIDADES.slice(2), pool: GRUPOS_PALABRAS }),
    },
  };

  /* ---------- b o d ---------- */
  const CONF = D.confundibles;
  const GRUPOS_CONF = [
    CONF.slice(0, 2),
    CONF.slice(0, 3),
    CONF.slice(1, 4),
    CONF,
  ];
  const bd = {
    id: "bd",
    icono: "🆚",
    nombre: "b o d",
    desc: "Letras que se parecen",
    niveles: {
      facil: () => cruzar({ tipo: "bd", titulo: "b o d", nivel: 2 }, { n: [3, 4, 5, 6, 7, 8], pares: GRUPOS_CONF.slice(0, 3) }),
      medio: () => cruzar({ tipo: "bd", titulo: "b o d", nivel: 2 }, { n: [4, 5, 6, 7, 8, 10], pares: GRUPOS_CONF }),
      dificil: () => cruzar({ tipo: "bd", titulo: "b o d", nivel: 2 }, { n: [6, 8, 10, 12], pares: GRUPOS_CONF }),
    },
  };

  /* ---------- Sigue al animal ---------- */
  const follow = {
    id: "follow",
    icono: "🦘",
    nombre: "Sigue al animal",
    desc: "Haz lo que te digo",
    niveles: {
      facil: () => cruzar({ tipo: "follow", titulo: "Sigue al animal", nivel: 2, params: { pool: OBJETOS } }, { n: CANTIDADES.slice(0, 4), letras: GRUPOS_LETRAS.slice(0, 6) }),
      medio: () => cruzar({ tipo: "follow", titulo: "Sigue al animal", nivel: 2, params: { pool: OBJETOS } }, { n: CANTIDADES.slice(1, 5), letras: GRUPOS_LETRAS.slice(4, 12) }),
      dificil: () => cruzar({ tipo: "follow", titulo: "Sigue al animal", nivel: 2, params: { pool: OBJETOS } }, { n: CANTIDADES.slice(2), letras: GRUPOS_LETRAS.slice(8) }),
    },
  };

  /* ---------- Pinta letras (trazo) ---------- */
  const trace = {
    id: "trace",
    icono: "🎨",
    nombre: "Pinta letras",
    desc: "Trazo libre con el ratón",
    niveles: {
      facil: () => cruzar({ tipo: "trace", titulo: "Pinta letras", nivel: 1 }, { letras: GRUPOS_LETRAS.slice(0, 8) }),
      medio: () => cruzar({ tipo: "trace", titulo: "Pinta letras", nivel: 1 }, { letras: GRUPOS_LETRAS.slice(6, 13) }),
      dificil: () => cruzar({ tipo: "trace", titulo: "Pinta letras", nivel: 1 }, { letras: GRUPOS_LETRAS.slice(10) }),
    },
  };

  /* ---------- Sopa de letras ---------- */
  const sopa = {
    id: "sopa",
    icono: "🔎",
    nombre: "Sopa de letras",
    desc: "Encuentra las palabras escondidas",
    niveles: {
      facil: () => cruzar({ tipo: "sopa", titulo: "Sopa de letras", nivel: 4, params: { dificultad: "facil" } }, { palabras: GRUPOS_PALABRAS.slice(0, 4) }),
      medio: () => cruzar({ tipo: "sopa", titulo: "Sopa de letras", nivel: 4, params: { dificultad: "medio" } }, { palabras: GRUPOS_PALABRAS.slice(2, 7) }),
      dificil: () => cruzar({ tipo: "sopa", titulo: "Sopa de letras", nivel: 4, params: { dificultad: "dificil" } }, { palabras: GRUPOS_PALABRAS }),
    },
  };

  /* ---------- Cuenta los animales ---------- */
  const count = {
    id: "count",
    icono: "🔢",
    nombre: "Cuenta los animales",
    desc: "¿Cuántos ves?",
    niveles: {
      facil: () =>
        cruzar({ tipo: "count", titulo: "Cuenta los animales", nivel: "m1" }, { n: CANTIDADES.slice(1, 5), rango: [[1, 5], [1, 8], [1, 10]], conjunto: ["animales", "frutas", "juguetes"] }).map((d) => {
          d.params.sustantivo = d.params.conjunto;
          return d;
        }),
      medio: () =>
        cruzar({ tipo: "count", titulo: "Cuenta los animales", nivel: "m1" }, { n: CANTIDADES.slice(2, 6), rango: [[1, 10], [5, 15], [1, 12]], conjunto: ["animales", "frutas", "juguetes"] }).map((d) => {
          d.params.sustantivo = d.params.conjunto;
          return d;
        }),
      dificil: () =>
        cruzar({ tipo: "count", titulo: "Cuenta los animales", nivel: "m1" }, { n: CANTIDADES.slice(3), rango: [[10, 20], [5, 20], [12, 25]], conjunto: ["animales", "frutas", "juguetes"] }).map((d) => {
          d.params.sustantivo = d.params.conjunto;
          return d;
        }),
    },
  };

  /* ---------- Sumas con frutas ---------- */
  const addvisual = {
    id: "addvisual",
    icono: "➕",
    nombre: "Sumas con frutas",
    desc: "Junta y cuenta",
    niveles: {
      facil: () => cruzar({ tipo: "addvisual", titulo: "Sumas con frutas", nivel: "m3" }, { n: CANTIDADES.slice(0, 4), maxTotal: [5, 7, 8, 10] }),
      medio: () => cruzar({ tipo: "addvisual", titulo: "Sumas con frutas", nivel: "m3" }, { n: CANTIDADES.slice(1, 5), maxTotal: [10, 12, 14, 15] }),
      dificil: () => cruzar({ tipo: "addvisual", titulo: "Sumas con frutas", nivel: "m3" }, { n: CANTIDADES.slice(2), maxTotal: [20, 25, 28, 30] }),
    },
  };

  /* ---------- Restas rápidas ---------- */
  const subvisual = {
    id: "subvisual",
    icono: "➖",
    nombre: "Restas rápidas",
    desc: "¿Cuántos quedan?",
    niveles: {
      facil: () => cruzar({ tipo: "subvisual", titulo: "Restas rápidas", nivel: "m4" }, { n: CANTIDADES.slice(0, 4), maxTotal: [5, 7, 8, 10] }),
      medio: () => cruzar({ tipo: "subvisual", titulo: "Restas rápidas", nivel: "m4" }, { n: CANTIDADES.slice(1, 5), maxTotal: [10, 12, 14, 15] }),
      dificil: () => cruzar({ tipo: "subvisual", titulo: "Restas rápidas", nivel: "m4" }, { n: CANTIDADES.slice(2), maxTotal: [20, 25, 28, 30] }),
    },
  };

  /* ---------- Formas geométricas ---------- */
  const FIG_IDS = D.figuras.map((f) => f.id);
  const GRUPOS_FIGURAS = [
    FIG_IDS.slice(0, 3),
    FIG_IDS.slice(0, 4),
    FIG_IDS.slice(0, 5),
    FIG_IDS,
    FIG_IDS.filter((x) => x !== "estrella"),
    FIG_IDS.filter((x) => x !== "rombo"),
  ];
  const shapes = {
    id: "shapes",
    icono: "🔷",
    nombre: "Formas geométricas",
    desc: "Círculo, cuadrado, triángulo...",
    niveles: {
      facil: () => cruzar({ tipo: "shapes", titulo: "Formas geométricas", nivel: "m5" }, { n: CANTIDADES.slice(0, 5), pool: GRUPOS_FIGURAS.slice(0, 3) }),
      medio: () => cruzar({ tipo: "shapes", titulo: "Formas geométricas", nivel: "m5" }, { n: CANTIDADES.slice(1, 6), pool: GRUPOS_FIGURAS.slice(2, 5) }),
      dificil: () => cruzar({ tipo: "shapes", titulo: "Formas geométricas", nivel: "m5" }, { n: CANTIDADES.slice(2), pool: GRUPOS_FIGURAS }),
    },
  };

  /* ---------- Recta numérica ---------- */
  const numberline = {
    id: "numberline",
    icono: "🔟",
    nombre: "Recta numérica",
    desc: "Toca el número",
    niveles: {
      facil: () => cruzar({ tipo: "numberline", titulo: "Recta numérica", nivel: "m2" }, { n: CANTIDADES.slice(0, 5), max: [10, 15, 20] }),
      medio: () => cruzar({ tipo: "numberline", titulo: "Recta numérica", nivel: "m2" }, { n: CANTIDADES.slice(1, 6), max: [20, 30, 50] }),
      dificil: () => cruzar({ tipo: "numberline", titulo: "Recta numérica", nivel: "m2" }, { n: CANTIDADES.slice(2), max: [50, 80, 100] }),
    },
  };

  /* ---------- Patrones ---------- */
  const PATRON_GRUPOS = [
    D.patronesElem.slice(0, 3),
    D.patronesElem.slice(0, 4),
    D.patronesElem.slice(0, 5),
    D.patronesElem,
  ];
  const pattern = {
    id: "pattern",
    icono: "🧩",
    nombre: "Patrones",
    desc: "¿Qué viene después?",
    niveles: {
      facil: () => cruzar({ tipo: "pattern", titulo: "Patrones", nivel: "m5" }, { n: CANTIDADES.slice(0, 5), largo: [2, 3], elementos: PATRON_GRUPOS.slice(0, 2) }),
      medio: () => cruzar({ tipo: "pattern", titulo: "Patrones", nivel: "m5" }, { n: CANTIDADES.slice(1, 6), largo: [3, 4], elementos: PATRON_GRUPOS.slice(1, 3) }),
      dificil: () => cruzar({ tipo: "pattern", titulo: "Patrones", nivel: "m5" }, { n: CANTIDADES.slice(2), largo: [4, 5], elementos: PATRON_GRUPOS }),
    },
  };

  /* ---------- Reconozco letras (practicar) ---------- */
  const reconocer = {
    id: "reconocer",
    icono: "🔤",
    nombre: "Reconozco letras",
    desc: "Encuentra la letra que dicen",
    niveles: {
      facil: () => cruzar({ tipo: "find-letter", titulo: "Reconozco letras", nivel: 1 }, { n: CANTIDADES.slice(0, 4), pool: GRUPOS_LETRAS.slice(0, 6) }),
      medio: () => cruzar({ tipo: "find-letter", titulo: "Reconozco letras", nivel: 1 }, { n: CANTIDADES.slice(2, 6), pool: GRUPOS_LETRAS.slice(4, 12) }),
      dificil: () => cruzar({ tipo: "find-letter", titulo: "Reconozco letras", nivel: 1 }, { n: CANTIDADES.slice(3), pool: GRUPOS_LETRAS.slice(8) }),
    },
  };

  /* ---------- Leo oraciones ---------- */
  const leerOraciones = {
    id: "leer-oraciones",
    icono: "💬",
    nombre: "Leo oraciones",
    desc: "Toca cada palabra",
    niveles: {
      facil: () => cruzar({ tipo: "sentence-read", titulo: "Leo oraciones", nivel: 5 }, { n: CANTIDADES.slice(0, 4), pool: [ORACIONES.slice(0, 3), ORACIONES.slice(0, 5), ORACIONES] }),
      medio: () => cruzar({ tipo: "sentence-read", titulo: "Leo oraciones", nivel: 5 }, { n: CANTIDADES.slice(1, 5), pool: [ORACIONES] }),
      dificil: () => cruzar({ tipo: "sentence-read", titulo: "Leo oraciones", nivel: 5 }, { n: CANTIDADES.slice(2), pool: [ORACIONES] }),
    },
  };

  /* ---------- Catálogo completo ---------- */
  const CATALOGO = [
    memoria,
    findLetter,
    orderSyl,
    buildWord,
    fillWord,
    typeWord,
    bd,
    follow,
    trace,
    sopa,
    count,
    addvisual,
    subvisual,
    shapes,
    numberline,
    pattern,
    reconocer,
    leerOraciones,
  ];

  const porId = {};
  CATALOGO.forEach((j) => (porId[j.id] = j));

  function info(id) {
    return porId[id] || null;
  }

  function existe(id) {
    return !!porId[id];
  }

  /* Dificultad guardada por juego (o "facil" si no hay) */
  function dificultad(id) {
    try {
      const g = CORE.Store.data.dificultadJuegos || {};
      return g[id] || "facil";
    } catch (e) {
      return "facil";
    }
  }

  function guardarDificultad(id, d) {
    try {
      if (!CORE.Store.data.dificultadJuegos) CORE.Store.data.dificultadJuegos = {};
      CORE.Store.data.dificultadJuegos[id] = d;
      CORE.Store.save();
    } catch (e) {}
  }

  /* Devuelve un descriptor de actividad listo para el motor */
  function variante(id, d) {
    const j = porId[id];
    if (!j) return null;
    const nivel = j.niveles[d] || j.niveles.facil;
    const lista = nivel();
    return rnd(lista);
  }

  /* Número de formas distintas de elegir n elementos de un conjunto
     de tamaño m (combinaciones). Se usa para estimar cuántos
     ejercicios DISTINTOS puede producir un descriptor: la variante
     elige, con el mismo descriptor, un contenido distinto cada vez. */
  function combinaciones(m, n) {
    if (!m || m < 1) return 1;
    if (!n || n > m) n = m;
    /* C(m, n) sin desbordar: acumula dividiendo en cada paso */
    let r = 1;
    for (let i = 1; i <= n; i++) {
      r = (r * (m - n + i)) / i;
      if (r > 1e9) return 1e9;
    }
    return Math.round(r);
  }

  /* Espacio real de contenidos de un descriptor: cuántos ejercicios
     distintos puede generar según cuántos ítems elige del pool. */
  function espacioContenido(desc) {
    const p = desc.params || {};
    const n = desc.n || 1;
    let m = 1;
    let unidades = true; // el pool son ítems finales (palabras), no subgrupos
    /* Pools de contenido reconocidos */
    if (Array.isArray(p.pool)) {
      /* Si el pool contiene arrays (subgrupos de letras), cuenta todas
         las letras distintas; si son elementos finales, cuenta sus ítems. */
      if (p.pool.length && Array.isArray(p.pool[0])) {
        unidades = false;
        const set = {};
        p.pool.forEach((g) => (g || []).forEach((x) => (set[x] = 1)));
        m *= Object.keys(set).length;
      } else {
        m *= p.pool.length;
      }
    }
    if (Array.isArray(p.palabras)) {
      m *= p.palabras.length;
    }
    if (Array.isArray(p.objetos)) {
      m *= p.objetos.length;
    }
    if (Array.isArray(p.pares)) {
      /* pares puede ser lista de grupos o lista de pares finales */
      if (p.pares.length && Array.isArray(p.pares[0])) {
        const set = {};
        p.pares.forEach((g) => (g || []).forEach((x) => (set[x] = 1)));
        m *= Object.keys(set).length;
      } else {
        m *= p.pares.length;
      }
    }
    if (Array.isArray(p.letras)) {
      m *= p.letras.length;
    }
    if (Array.isArray(p.elementos)) {
      if (p.elementos.length && Array.isArray(p.elementos[0])) {
        const set = {};
        p.elementos.forEach((g) => (g || []).forEach((x) => (set[x] = 1)));
        m *= Object.keys(set).length;
      } else {
        m *= p.elementos.length;
      }
    }
    if (Array.isArray(p.largo)) {
      m *= p.largo.length;
    }
    if (Array.isArray(p.rango)) {
      const a = p.rango[0],
        b = p.rango[1];
      if (typeof a === "number" && typeof b === "number") m *= Math.max(1, b - a + 1);
    }
    if (typeof p.max === "number") m *= p.max;
    if (typeof p.maxTotal === "number") m *= p.maxTotal;
    /* Cuántos ítems se toman de ese pool */
    const k = typeof p.pares === "number" ? p.pares : n;
    /* Si el pool está formado por elementos finales y el descriptor
       arma con ellos un ejercicio (palabra/sílaba), cada elección ya
       es un ejercicio distinto: no hace falta combinar. */
    if (unidades) {
      return Math.max(1, m) * Math.max(1, n);
    }
    const comb = combinaciones(m, Math.min(k, m));
    return Math.max(1, comb) * Math.max(1, n);
  }

  /* Cuántos ejercicios DISTINTOS puede dar un juego en una dificultad:
     descriptores × su espacio de contenido. */
  function totalVariantes(id, d) {
    const j = porId[id];
    if (!j) return 0;
    const nivel = j.niveles[d] || j.niveles.facil;
    const lista = nivel();
    return lista.reduce((s, desc) => s + espacioContenido(desc), 0);
  }

  /* Suma de variantes en las tres dificultades */
  function totalVariantesTodas(id) {
    return ["facil", "medio", "dificil"].reduce((s, d) => s + totalVariantes(id, d), 0);
  }

  return {
    CATALOGO,
    info,
    existe,
    dificultad,
    guardarDificultad,
    variante,
    totalVariantes,
    totalVariantesTodas,
    barajar,
    tomar,
  };
})();
