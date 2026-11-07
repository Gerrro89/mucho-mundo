/* =========================================================
   WEB LEER — Mi Aventurero: misiones educativas
   ---------------------------------------------------------
   Cada misión tiene un OBJETIVO MEDIBLE evaluado contra los
   datos reales que ya registra la web:

     · actividades completadas   -> data.niveles[].hechas
     · aciertos por contenido    -> data.fuerte["n<nivel>:<tipo>"]
     · errores por contenido     -> data.debil["n<nivel>:<tipo>"]
     · dominio de un nivel       -> data.niveles[].dominio
     · letras trazadas           -> data.trazos
     · frases escuchadas         -> data.escuchas
     · estrellas                 -> data.estrellas

   La condición de desbloqueo de cada ACCESORIO vive en
   js/aventurero/accesorios.js. Cada misión que da una
   recompensa usa esa misma condición como objetivo, de modo
   que el armario y la misión cuentan siempre lo mismo.

   Las misiones de REPASO se generan a partir de los errores
   reales del niño (data.debil), nunca al azar.
   ========================================================= */

window.AV_MISIONES = (function () {
  "use strict";

  /* ---------------------------------------------------------
     Tipos de actividad que registran aciertos. Se usan para
     saber qué claves de data.fuerte/data.debil son reales.
     --------------------------------------------------------- */
  const TIPOS_LECTURA = [
    "explorar", "find-letter", "pick-image", "letter-object", "initial-sound",
    "final-sound", "syllable-listen", "order-syl", "build-word", "fill-word",
    "memory", "bd", "follow", "trace", "type-word", "sentence-listen",
    "sentence-read", "story", "quiz", "sopa", "sopa-buscar",
  ];
  const TIPOS_MATE = [
    "count", "tenframe", "numberline", "compare", "ordernums", "beforeafter",
    "addvisual", "subvisual", "add", "sub", "missing", "shapes", "shapecount",
    "pattern", "problem",
  ];
  const TIPOS_CONOCIDOS = TIPOS_LECTURA.concat(TIPOS_MATE);

  /* Niveles de lectura (1..6) y de matemáticas (m1..m6) */
  const NIVELES_LECTURA = [1, 2, 3, 4, 5, 6];
  const NIVELES_MATE = ["m1", "m2", "m3", "m4", "m5", "m6"];

  /* ---------------------------------------------------------
     Lectura de datos reales
     --------------------------------------------------------- */
  function datos() {
    try {
      return CORE.Store.data || {};
    } catch (e) {
      return {};
    }
  }

  /* Una clave "n3:order-syl" corresponde al tipo "order-syl".
     También valen las sub-claves: "trazo-A" -> "trazo". */
  function tipoDeClave(clave) {
    const k = String(clave || "");
    if (TIPOS_CONOCIDOS.indexOf(k) !== -1) return k;
    if (k.indexOf("sopa-") === 0) return "sopa";
    const i = k.indexOf("-");
    if (i > 0) return k.slice(0, i);
    return k;
  }

  /* Una clave de data.fuerte/data.debil pertenece al tipo `tipo`
     si coincide exactamente o si empieza por "tipo-". */
  function clavePertenece(clave, tipo) {
    const k = String(clave || "");
    return k === tipo || k.indexOf(tipo + "-") === 0;
  }

  /* Suma de aciertos de los tipos indicados (en todos los niveles) */
  function aciertosDe(tipos) {
    const d = datos();
    const fuerte = d.fuerte || {};
    let total = 0;
    Object.keys(fuerte).forEach((k) => {
      const tipo = tipoDeClave(k.slice(k.indexOf(":") + 1));
      if (tipos.indexOf(tipo) !== -1) total += fuerte[k] || 0;
    });
    return total;
  }

  /* Suma de errores de los tipos indicados */
  function erroresDe(tipos) {
    const d = datos();
    const debil = d.debil || {};
    let total = 0;
    Object.keys(debil).forEach((k) => {
      const tipo = tipoDeClave(k.slice(k.indexOf(":") + 1));
      if (tipos.indexOf(tipo) !== -1) total += debil[k] || 0;
    });
    return total;
  }

  /* Actividades de lectura completadas (excluye refuerzos) */
  function actividadesLectura() {
    return actividadesLecturaMundos() + temasColegioHechos("lenguaje");
  }

  function actividadesMate() {
    return actividadesMateMundos() + temasColegioHechos("mate");
  }

  /* Conteos de los mundos clásicos de letras y números */
  function actividadesLecturaMundos() {
    const d = datos();
    const niveles = d.niveles || {};
    let total = 0;
    NIVELES_LECTURA.forEach((id) => {
      const info = niveles[id];
      if (!info || !info.hechas) return;
      total += info.hechas.filter((h) => String(h).indexOf("refuerzo-") !== 0).length;
    });
    return total;
  }

  function actividadesMateMundos() {
    const d = datos();
    const niveles = d.niveles || {};
    let total = 0;
    NIVELES_MATE.forEach((id) => {
      const info = niveles[id];
      if (!info || !info.hechas) return;
      total += info.hechas.filter((h) => String(h).indexOf("refuerzo-") !== 0).length;
    });
    return total;
  }

  /* Temas completados del COLEGIO (currículo por grados) de una
     materia; los ids son "g2-mate-3" y así los contamos por materia.
     Con esta mejora, las misiones del aventurero también progresan
     con las lecciones de cada día del colegio, no solo con los
     mundos clásicos de letras y números. */
  function temasColegioHechos(materia) {
    let total = 0;
    try {
      const cur = datos().curriculo || {};
      Object.keys(cur).forEach((id) => {
        if (!cur[id] || !cur[id].hecho) return;
        if (id.split("-")[1] === materia) total++;
      });
    } catch (e) { /* sin datos: 0 */ }
    return total;
  }

  function dominioDe(id) {
    const d = datos();
    const info = (d.niveles || {})[id];
    return info && info.dominio ? info.dominio : 0;
  }

  /* ---------------------------------------------------------
     EVALUACIÓN DE CONDICIONES
     Devuelve { actual, total, cumplida, texto }
     --------------------------------------------------------- */
  function evaluar(cond) {
    if (!cond) return { actual: 0, total: 0, cumplida: false, texto: "" };
    const d = datos();

    if (cond.tipo === "aciertos") {
      const actual = aciertosDe(cond.claves || []);
      const total = cond.n || 0;
      return {
        actual: Math.min(actual, total),
        total: total,
        cumplida: actual >= total,
        texto: "Aciertos: " + actual + " de " + total,
      };
    }
    if (cond.tipo === "repaso") {
      const tipos = [cond.clave];
      const a = aciertosDe(tipos);
      const e = erroresDe(tipos);
      const total = e + (cond.margen || 2);
      return {
        actual: Math.min(a, total),
        total: total,
        cumplida: a >= total,
        texto: "Aciertos: " + a + " de " + total + " (fallaste " + e + ")",
      };
    }
    if (cond.tipo === "misiones") {
      /* Se pueden excluir las misiones de un área para que la cadena
         de "aventura" no se complete en cascada consigo misma. */
      const actual = misionesCompletadas(cond.excluirArea);
      const total = cond.n || 1;
      return {
        actual: Math.min(actual, total),
        total: total,
        cumplida: actual >= total,
        texto: "Misiones: " + actual + " de " + total,
      };
    }
    if (cond.tipo === "nivel") {
      const dom = dominioDe(cond.id);
      const objetivo = cond.dominio || 0.7;
      return {
        actual: Math.round(dom * 100),
        total: Math.round(objetivo * 100),
        cumplida: dom >= objetivo,
        texto: "Dominio: " + Math.round(dom * 100) + "% de " + Math.round(objetivo * 100) + "%",
      };
    }
    if (cond.tipo === "trazos") {
      const actual = d.trazos || 0;
      const total = cond.n || 0;
      return {
        actual: Math.min(actual, total),
        total: total,
        cumplida: actual >= total,
        texto: "Trazos: " + actual + " de " + total,
      };
    }
    if (cond.tipo === "escuchas") {
      const actual = d.escuchas || 0;
      const total = cond.n || 0;
      return {
        actual: Math.min(actual, total),
        total: total,
        cumplida: actual >= total,
        texto: "Escuchas: " + actual + " de " + total,
      };
    }
    if (cond.tipo === "estrellas") {
      const actual = d.estrellas || 0;
      const total = cond.n || 0;
      return {
        actual: Math.min(actual, total),
        total: total,
        cumplida: actual >= total,
        texto: "Estrellas: " + actual + " de " + total,
      };
    }
    if (cond.tipo === "areas") {
      const areas = areasCompletadas();
      const total = cond.n || 1;
      return {
        actual: Math.min(areas.length, total),
        total: total,
        cumplida: areas.length >= total,
        texto: "Áreas: " + areas.length + " de " + total,
      };
    }
    /* "lectura" / "mate": actividades completadas de un área */
    if (cond.tipo === "actividades") {
      const actual = cond.area === "mate" ? actividadesMate() : actividadesLectura();
      const total = cond.n || 0;
      return {
        actual: Math.min(actual, total),
        total: total,
        cumplida: actual >= total,
        texto: "Actividades: " + actual + " de " + total,
      };
    }
    return { actual: 0, total: 0, cumplida: false, texto: "" };
  }

  /* ---------------------------------------------------------
     Definición de las misiones
     `objetivo` puede omitirse: si hay `recompensa`, se toma
     la condición de desbloqueo de ese accesorio.
     --------------------------------------------------------- */
  const LISTA = [
    /* ---------- A. LECTURA Y LETRAS ---------- */
    {
      id: "av-l1",
      area: "lectura",
      icono: "🔎",
      titulo: "Letras exploradoras",
      descripcion: "Completa actividades de lectura para empezar la aventura.",
      objetivo: { tipo: "actividades", area: "lectura", n: 2 },
      recompensa: "mochila-simple",
      mensaje: "¡Ya tienes tu mochila! Los buenos exploradores llevan todo lo que necesitan.",
    },
    {
      id: "av-l2",
      area: "lectura",
      icono: "👂",
      titulo: "Ojo de lince",
      descripcion: "Reconoce el sonido inicial y final de muchas palabras.",
      recompensa: "gafas-redondas",
      mensaje: "¡Con estas gafas oirás hasta el ruido de las letras!",
    },
    {
      id: "av-l3",
      area: "lectura",
      icono: "🧩",
      titulo: "Constructor de palabras",
      descripcion: "Forma palabras, completa las que faltan y ordena sílabas.",
      recompensa: "chaleco-explorador",
      mensaje: "¡Chaleco con bolsillos para llevar mapas y lápices!",
    },
    {
      id: "av-l4",
      area: "lectura",
      icono: "🎵",
      titulo: "Melodía de letras",
      descripcion: "Escucha sílabas y une letras con sus dibujos.",
      recompensa: "pelo-largo",
      mensaje: "¡Qué pelo! Ahora te pareces a un explorador de verdad.",
    },
    {
      id: "av-l5",
      area: "lectura",
      icono: "✍️",
      titulo: "Escritor valiente",
      descripcion: "Traza letras con el dedo o el ratón.",
      objetivo: { tipo: "trazos", n: 8 },
      recompensa: "sudadera",
      mensaje: "¡Una sudadera con capucha! Te abriga cuando hace falta.",
    },
    {
      id: "av-l6",
      area: "lectura",
      icono: "📚",
      titulo: "Lector de cuentos",
      descripcion: "Escucha y lee frases y cuentos.",
      recompensa: "bufanda",
      mensaje: "¡Bufanda calentita para las aventuras de invierno!",
    },
    {
      id: "av-l7",
      area: "lectura",
      icono: "🌃",
      titulo: "La Ciudad de las Palabras",
      descripcion: "Domina el mundo de las palabras.",
      objetivo: { tipo: "nivel", id: 4, dominio: 0.7 },
      recompensa: "mochila-explorador",
      mensaje: "¡La mochila grande! Con rolledo y brújula, para rutas largas.",
    },
    {
      id: "av-l8",
      area: "lectura",
      icono: "🔤",
      titulo: "Buscador de letras",
      descripcion: "Explora letras y encuentra la que buscas.",
      recompensa: "camiseta-azul",
      mensaje: "¡Camiseta azul de cielo despejado!",
    },

    /* ---------- B. MATEMÁTICAS ---------- */
    {
      id: "av-m1",
      area: "mate",
      icono: "🔢",
      titulo: "Contador de estrellas",
      descripcion: "Cuenta objetos y figuras hasta acertar muchas veces.",
      recompensa: "vaqueros",
      mensaje: "¡Vaqueros con pespunte y bolsillos!",
    },
    {
      id: "av-m2",
      area: "mate",
      icono: "➕",
      titulo: "Calculador veloz",
      descripcion: "Resuelve sumas y restas hasta acertar muchas veces.",
      recompensa: "botas",
      mensaje: "¡Botas marrones para no cansarse!",
    },
    {
      id: "av-m3",
      area: "mate",
      icono: "⚖️",
      titulo: "Pensador numérico",
      descripcion: "Compara cantidades y ordena números.",
      recompensa: "falda",
      mensaje: "¡Falda con vuelo para correr libre!",
    },
    {
      id: "av-m4",
      area: "mate",
      icono: "🧠",
      titulo: "Solucionador de problemas",
      descripcion: "Resuelve problemas, series y números que faltan.",
      recompensa: "capa-alada",
      mensaje: "¡Capa con alas! Dicen que con ella se vuela.",
    },
    {
      id: "av-m5",
      area: "mate",
      icono: "🧱",
      titulo: "Maestro de las cuentas",
      descripcion: "Sumas, restas y números que faltan.",
      recompensa: "casco",
      mensaje: "¡Casco de obra! Cuidado con la cabeza… pero te queda genial.",
    },
    {
      id: "av-m6",
      area: "mate",
      icono: "🐢",
      titulo: "El mundo de los números",
      descripcion: "Domina el mundo de las cuentas.",
      objetivo: { tipo: "nivel", id: "m3", dominio: 0.7 },
      recompensa: "botas-aventurero",
      mensaje: "¡Botas de aventurero con cordones y hebillas!",
    },

    /* ---------- C. MEMORIA Y RAZONAMIENTO ---------- */
    {
      id: "av-r1",
      area: "razonamiento",
      icono: "🧠",
      titulo: "Memoria de oro",
      descripcion: "Encuentra las parejas y no se te olvida nada.",
      recompensa: "gorro-lana",
      mensaje: "¡Gorro de lana calentito!",
    },
    {
      id: "av-r2",
      area: "razonamiento",
      icono: "🔁",
      titulo: "No te confundas",
      descripcion: "Distingue letras parecidas y sigue el camino correcto.",
      recompensa: "pelo-rizos",
      mensaje: "¡Rizos con mucho volumen!",
    },
    {
      id: "av-r3",
      area: "razonamiento",
      icono: "🔷",
      titulo: "Ojo geométrico",
      descripcion: "Reconoce figuras y completa patrones.",
      recompensa: "gafas-aventurero",
      mensaje: "¡Gafas con visera para el sol del desierto!",
    },
    {
      id: "av-r4",
      area: "razonamiento",
      icono: "🗝️",
      titulo: "Llave maestra",
      descripcion: "Supera retos variados y encuentra letras escondidas.",
      recompensa: "llave-aventura",
      mensaje: "¡Una llave que abre puertas misteriosas!",
    },
    {
      id: "av-r5",
      area: "razonamiento",
      icono: "✍️",
      titulo: "Trenzas de lana",
      descripcion: "Escribe palabras con el teclado y encuentra letras en la sopa.",
      objetivo: { tipo: "aciertos", claves: ["type-word"], n: 12 },
      recompensa: "pelo-trenzas",
      mensaje: "¡Dos trenzas con lazadas!",
    },

    /* ---------- D. AVENTURA ---------- */
    {
      id: "av-x1",
      area: "aventura",
      icono: "🎽",
      titulo: "¡Primera expedición!",
      descripcion: "Termina tu primera misión del aventurero.",
      objetivo: { tipo: "misiones", n: 1, excluirArea: "aventura" },
      recompensa: "camiseta-verde",
      mensaje: "¡La camiseta verde del aventurero!",
    },
    {
      id: "av-x2",
      area: "aventura",
      icono: "👖",
      titulo: "Listo para todo",
      descripcion: "Termina dos misiones del aventurero.",
      objetivo: { tipo: "misiones", n: 2, excluirArea: "aventura" },
      recompensa: "pantalon",
      mensaje: "¡El pantalón cómodo del aventurero!",
    },
    {
      id: "av-x3",
      area: "aventura",
      icono: "👟",
      titulo: "Zapatillas de correr",
      descripcion: "Termina tres misiones del aventurero.",
      objetivo: { tipo: "misiones", n: 3, excluirArea: "aventura" },
      recompensa: "zapatillas",
      mensaje: "¡Zapatillas ligeras para correr mucho!",
    },
    {
      id: "av-x4",
      area: "aventura",
      icono: "🧭",
      titulo: "Explorador oficial",
      descripcion: "Termina cuatro misiones del aventurero.",
      objetivo: { tipo: "misiones", n: 4, excluirArea: "aventura" },
      recompensa: "gorro-explorador",
      mensaje: "¡El gorro clásico de las expediciones!",
    },
    {
      id: "av-x5",
      area: "aventura",
      icono: "👑",
      titulo: "Aventurero legendario",
      descripcion: "Termina ocho misiones del aventurero.",
      objetivo: { tipo: "misiones", n: 8, excluirArea: "aventura" },
      recompensa: "corona-estrella",
      mensaje: "¡La corona de las misiones completas! Eres un aventurero de leyenda.",
    },
    {
      id: "av-x6",
      area: "aventura",
      icono: "🕊️",
      titulo: "Vuelas alto",
      descripcion: "Domina el mundo de los cuentos.",
      objetivo: { tipo: "nivel", id: 6, dominio: 0.7 },
      recompensa: "alas",
      mensaje: "¡Alas para volar alto!",
    },
    {
      id: "av-x7",
      area: "aventura",
      icono: "🌟",
      titulo: "Cielo de estrellas",
      descripcion: "Consigue 100 estrellas en toda la web.",
      objetivo: { tipo: "estrellas", n: 100 },
      recompensa: "estrellas",
      mensaje: "¡Te rodean estrellas brillantes!",
    },
    {
      id: "av-x8",
      area: "aventura",
      icono: "💦",
      titulo: "Burbujas de agua",
      descripcion: "Cuenta muchos objetos y tenframes.",
      objetivo: { tipo: "aciertos", claves: ["count", "tenframe"], n: 12 },
      recompensa: "burbujas",
      mensaje: "¡Burbujas de colores flotando!",
    },
    {
      id: "av-x9",
      area: "aventura",
      icono: "🎊",
      titulo: "Fiesta de colores",
      descripcion: "Supera retos de preguntas y cuentos.",
      objetivo: { tipo: "aciertos", claves: ["quiz", "story"], n: 10 },
      recompensa: "confeti",
      mensaje: "¡Confeti a tu alrededor!",
    },
    {
      id: "av-x10",
      area: "aventura",
      icono: "🎩",
      titulo: "Sombrero de aventurero",
      descripcion: "Resuelve problemas y números que faltan.",
      objetivo: { tipo: "aciertos", claves: ["problem", "missing"], n: 10 },
      recompensa: "sombrero-aventurero",
      mensaje: "¡Sombrero ancho para el sol y la aventura!",
    },
    {
      id: "av-x11",
      area: "aventura",
      icono: "👟",
      titulo: "Sandalias de sol",
      descripcion: "Reconoce muchas figuras.",
      objetivo: { tipo: "aciertos", claves: ["shapes"], n: 12 },
      recompensa: "sandalias",
      mensaje: "¡Sandalias frescas para los días de sol!",
    },
    {
      id: "av-x12",
      area: "aventura",
      icono: "🧣",
      titulo: "Capa de héroe",
      descripcion: "Termina cinco misiones del aventurero.",
      objetivo: { tipo: "misiones", n: 5, excluirArea: "aventura" },
      recompensa: "capa-roja",
      mensaje: "¡Capa roja de héroe para los días grandes!",
    },
    {
      id: "av-x13",
      area: "aventura",
      icono: "🌌",
      titulo: "Capa del cielo",
      descripcion: "Escucha y lee muchos cuentos.",
      objetivo: { tipo: "aciertos", claves: ["story"], n: 8 },
      recompensa: "capa-azul",
      mensaje: "¡Capa azul como el cielo de las estrellas!",
    },
    {
      id: "av-x14",
      area: "aventura",
      icono: "💇",
      titulo: "Peinado fácil",
      descripcion: "Une letras con sus dibujos muchas veces.",
      objetivo: { tipo: "aciertos", claves: ["letter-object"], n: 10 },
      recompensa: "pelo-corto",
      mensaje: "¡Pelo corto y fácil de peinar!",
    },
    {
      id: "av-x15",
      area: "aventura",
      icono: "🕶️",
      titulo: "Gafas de sol",
      descripcion: "Elige la imagen correcta muchas veces.",
      objetivo: { tipo: "aciertos", claves: ["pick-image"], n: 10 },
      recompensa: "gafas-sol",
      mensaje: "¡Gafas de sol para los días de sol!",
    },
  ];

  const porId = {};
  LISTA.forEach((m) => (porId[m.id] = m));

  /* ---------------------------------------------------------
     Objetivos de las misiones
     Si la misión no define objetivo, se toma el de la
     recompensa (una sola fuente de verdad).
     --------------------------------------------------------- */
  function objetivoDe(m) {
    if (m.objetivo) return m.objetivo;
    if (m.recompensa && window.AV_ACCESORIOS) {
      const acc = window.AV_ACCESORIOS.info(m.recompensa);
      if (acc && acc.condicion) return acc.condicion;
    }
    return null;
  }

  /* ---------------------------------------------------------
     Progreso y estado
     --------------------------------------------------------- */
  function progresoMision(id) {
    const m = porId[id];
    if (!m) return { actual: 0, total: 0, cumplida: false, texto: "" };
    return evaluar(objetivoDe(m));
  }

  function estaCompletada(id) {
    const m = porId[id];
    if (!m) return false;
    const est = estado();
    return !!(est.misiones && est.misiones[id]);
  }

  function estado() {
    try {
      const d = CORE.Store.data;
      if (!d.aventurero) d.aventurero = { v: 1, desbloqueados: [], equipado: {}, favorito: null, misiones: {} };
      if (!d.aventurero.misiones) d.aventurero.misiones = {};
      return d.aventurero;
    } catch (e) {
      return { v: 1, desbloqueados: [], equipado: {}, favorito: null, misiones: {} };
    }
  }

  function misionesCompletadas(excluirArea) {
    const est = estado();
    return LISTA.filter((m) => {
      if (excluirArea && m.area === excluirArea) return false;
      return est.misiones && est.misiones[m.id];
    }).length;
  }

  function areasCompletadas() {
    const est = estado();
    const areas = [];
    LISTA.forEach((m) => {
      if (est.misiones && est.misiones[m.id] && areas.indexOf(m.area) === -1) areas.push(m.area);
    });
    return areas;
  }

  /* Una misión está disponible si no tiene requisito o si el
     requisito ya se cumple. */
  function disponible(id) {
    const m = porId[id];
    if (!m) return false;
    if (m.requisito && m.requisito.tipo === "mision") {
      if (!estaCompletada(m.requisito.id)) return false;
    }
    return true;
  }

  /* ---------------------------------------------------------
     Misiones de REPASO (dinámicas, según errores reales)
     --------------------------------------------------------- */
  function repasoDinamicas() {
    const d = datos();
    const debil = d.debil || {};
    const mapa = {};
    Object.keys(debil).forEach((k) => {
      const tipo = tipoDeClave(k.slice(k.indexOf(":") + 1));
      if (TIPOS_CONOCIDOS.indexOf(tipo) === -1) return;
      if (!mapa[tipo]) mapa[tipo] = 0;
      mapa[tipo] += debil[k] || 0;
    });
    const flojos = Object.keys(mapa).filter((t) => mapa[t] >= 2);
    /* Solo las 3 más problemáticas, para no agobiar */
    flojos.sort((a, b) => mapa[b] - mapa[a]);
    return flojos.slice(0, 3).map((tipo) => ({
      id: "repaso-" + tipo,
      area: "repaso",
      icono: "🔁",
      titulo: "Repaso de " + etiquetaTipo(tipo),
      descripcion:
        "Lo que más se te cuesta es " + etiquetaTipo(tipo) + ". Practica hasta acertarlo más veces de las que fallas.",
      objetivo: { tipo: "repaso", clave: tipo, margen: 2 },
      recompensa: null,
      requisito: null,
      mensaje: "¡Lo has mejorado! Ahora lo controlas mucho mejor.",
      dinamica: true,
    }));
  }

  const ETIQUETAS = {
    "initial-sound": "el sonido inicial",
    "final-sound": "el sonido final",
    "syllable-listen": "las sílabas",
    "order-syl": "ordenar sílabas",
    "build-word": "formar palabras",
    "fill-word": "completar palabras",
    "type-word": "escribir palabras",
    "letter-object": "unir letras con dibujos",
    "pick-image": "elegir la imagen correcta",
    "explorar": "explorar las letras",
    "find-letter": "encontrar la letra",
    "memory": "la memoria",
    bd: "las letras parecidas",
    follow: "seguir el camino",
    trace: "trazar letras",
    "sopa": "la sopa de letras",
    quiz: "los retos de preguntas",
    story: "los cuentos",
    "sentence-read": "leer frases",
    "sentence-listen": "escuchar frases",
    count: "contar objetos",
    tenframe: "contar con la retícula",
    numberline: "la recta numérica",
    compare: "comparar cantidades",
    ordernums: "ordenar números",
    beforeafter: "antes y después",
    addvisual: "sumar con dibujos",
    subvisual: "restar con dibujos",
    add: "las sumas",
    sub: "las restas",
    missing: "el número que falta",
    shapes: "las figuras",
    shapecount: "contar figuras",
    pattern: "los patrones",
    problem: "los problemas",
  };

  function etiquetaTipo(t) {
    return ETIQUETAS[t] || t;
  }

  /* Todas las misiones: fijas + repaso dinámicas */
  function todas() {
    const extra = repasoDinamicas();
    const ids = {};
    extra.forEach((m) => (ids[m.id] = m));
    return LISTA.concat(extra.filter((m) => !porId[m.id]));
  }

  function info(id) {
    return porId[id] || null;
  }

  return {
    LISTA,
    TIPOS_LECTURA,
    TIPOS_MATE,
    TIPOS_CONOCIDOS,
    NIVELES_LECTURA,
    NIVELES_MATE,
    todas,
    info,
    objetivoDe,
    progresoMision,
    estaCompletada,
    estado,
    misionesCompletadas,
    areasCompletadas,
    disponible,
    repasoDinamicas,
    evaluar,
    aciertosDe,
    erroresDe,
    tipoDeClave,
    etiquetaTipo,
  };
})();
