/* =========================================================
   WEB LEER — Laboratorio de sonidos y palabras
   ---------------------------------------------------------
   Un laboratorio donde el niño ESCUCHA, IDENTIFICA palabras
   y juega con el RITMO de las sílabas:

     1. 🎧 SONIDOS MISTERIOSOS: adivinar sonidos de animales
        y de objetos (el laboratorio los reproduce con voz).
     2. 🔊 SONIDOS DE LETRAS: ¿qué letra suena «mmm»?
        (conciencia fonológica).
     3. 👯 PALABRAS PARECIDAS: distinguir dos palabras que
        se parecen mucho (mesa/cama, gato/pato...).
     4. 👏 SÍLABAS CON PALMADAS: escuchar «mariposa», marcar
        sus sílabas con palmadas y después ordenarlas para
        reconstruir la palabra.
     5. 🎵 RIMAS: completar rimas sencillas.
     6. 🎤 MI LECTURA: grabar la voz del niño y compararla
        con la palabra (si el dispositivo lo permite).

   Aprendizaje: escucha activa, pronunciación, ritmo y
   conciencia fonológica.

   La grabación es OPCIONAL: si el dispositivo no tiene
   micrófono o no lo permite, la actividad lo explica con
   calma y ofrece alternativas (escuchar y repetir).
   ========================================================= */

window.LABORATORIO = (function () {
  "use strict";

  const D = window.DATA;

  /* ---------------------------------------------------------
     Vocabulario del laboratorio
     Cada palabra lleva sus sílabas y un emoji.
     La clave de rima se calcula sola (última vocal + cola).
     --------------------------------------------------------- */
  const PALABRAS = [
    // --- Rima "O" ---
    { w: "GATO", syl: ["GA", "TO"], emoji: "🐱" },
    { w: "PATO", syl: ["PA", "TO"], emoji: "🦆" },
    { w: "PLATO", syl: ["PLA", "TO"], emoji: "🍚" },
    { w: "MANO", syl: ["MA", "NO"], emoji: "✋" },
    { w: "PELO", syl: ["PE", "LO"], emoji: "💇" },
    { w: "DADO", syl: ["DA", "DO"], emoji: "🎲" },
    { w: "QUESO", syl: ["QUE", "SO"], emoji: "🧀" },
    { w: "BRAZO", syl: ["BRA", "ZO"], emoji: "💪" },
    { w: "OSO", syl: ["O", "SO"], emoji: "🐻" },
    { w: "COCO", syl: ["CO", "CO"], emoji: "🥥" },
    { w: "PERRO", syl: ["PE", "RRO"], emoji: "🐕" },
    { w: "LIBRO", syl: ["LI", "BRO"], emoji: "📕" },
    { w: "SAPO", syl: ["SA", "PO"], emoji: "🐸" },
    { w: "CARRO", syl: ["CA", "RRO"], emoji: "🛒" },
    { w: "FARO", syl: ["FA", "RO"], emoji: "🗼" },
    { w: "MONO", syl: ["MO", "NO"], emoji: "🐵" },
    { w: "POLLO", syl: ["PO", "LLO"], emoji: "🍗" },
    { w: "CERO", syl: ["CE", "RO"], emoji: "0️⃣" },
    { w: "ROBOT", syl: ["RO", "BOT"], emoji: "🤖" },
    { w: "TREN", syl: ["TREN"], emoji: "🚂" },

    // --- Rima "A" ---
    { w: "MESA", syl: ["ME", "SA"], emoji: "🍽️" },
    { w: "CASA", syl: ["CA", "SA"], emoji: "🏠" },
    { w: "LUNA", syl: ["LU", "NA"], emoji: "🌙" },
    { w: "RANA", syl: ["RA", "NA"], emoji: "🐸" },
    { w: "MAMA", syl: ["MA", "MA"], emoji: "👩" },
    { w: "CAMA", syl: ["CA", "MA"], emoji: "🛏️" },
    { w: "TAZA", syl: ["TA", "ZA"], emoji: "☕" },
    { w: "VACA", syl: ["VA", "CA"], emoji: "🐄" },
    { w: "MAPA", syl: ["MA", "PA"], emoji: "🗺️" },
    { w: "SOPA", syl: ["SO", "PA"], emoji: "🍲" },
    { w: "ISLA", syl: ["IS", "LA"], emoji: "🏝️" },
    { w: "UVA", syl: ["U", "VA"], emoji: "🍇" },
    { w: "KOALA", syl: ["KO", "A", "LA"], emoji: "🐨" },
    { w: "JIRAFA", syl: ["JI", "RA", "FA"], emoji: "🦒" },
    { w: "BOLA", syl: ["BO", "LA"], emoji: "⚽" },
    { w: "PATA", syl: ["PA", "TA"], emoji: "🐾" },
    { w: "MANTA", syl: ["MAN", "TA"], emoji: "🛏️" },
    { w: "ARENA", syl: ["A", "RE", "NA"], emoji: "🏖️" },
    { w: "PALA", syl: ["PA", "LA"], emoji: "🦺" },
    { w: "VIOLIN", syl: ["VIO", "LIN"], emoji: "🎻" },
    { w: "MARIPOSA", syl: ["MA", "RI", "PO", "SA"], emoji: "🦋" },
    { w: "PESCADO", syl: ["PES", "CA", "DO"], emoji: "🐟" },
    { w: "ELEFANTE", syl: ["E", "LE", "FAN", "TE"], emoji: "🐘" },
    { w: "MANZANA", syl: ["MAN", "ZA", "NA"], emoji: "🍎" },
    { w: "HELADO", syl: ["HE", "LA", "DO"], emoji: "🍦" },
    { w: "ESCUELA", syl: ["ES", "CUE", "LA"], emoji: "🏫" },
    { w: "DULCE", syl: ["DUL", "CE"], emoji: "🍬" },
    { w: "SOMBRERO", syl: ["SOM", "BRE", "RO"], emoji: "🎩" },
    { w: "COHETE", syl: ["CO", "HE", "TE"], emoji: "🚀" },
    { w: "FLOR", syl: ["FLOR"], emoji: "🌸" },
    { w: "NUBE", syl: ["NU", "BE"], emoji: "☁️" },
    { w: "PAN", syl: ["PAN"], emoji: "🍞" },
    { w: "AGUA", syl: ["A", "GUA"], emoji: "💧" },
    { w: "GLOBO", syl: ["GLO", "BO"], emoji: "🎈" },
    { w: "NINO", syl: ["NI", "NO"], emoji: "👦" },
    { w: "BOCA", syl: ["BO", "CA"], emoji: "👄" },
    { w: "BESO", syl: ["BE", "SO"], emoji: "💋" },
    { w: "PESO", syl: ["PE", "SO"], emoji: "⚖️" },
    { w: "OSA", syl: ["O", "SA"], emoji: "🐻" },
    { w: "META", syl: ["ME", "TA"], emoji: "⏱️" },
    { w: "NIDO", syl: ["NI", "DO"], emoji: "🍃" },
    { w: "LOBO", syl: ["LO", "BO"], emoji: "🐺" },
    { w: "LUZ", syl: ["LUZ"], emoji: "💡" },
    { w: "VOZ", syl: ["VOZ"], emoji: "🗣️" },
  ];

  /* Clave de rima: desde la última vocal hasta el final */
  function claveRima(p) {
    const ult = p.syl[p.syl.length - 1] || p.w;
    for (let i = 0; i < ult.length; i++) {
      const c = ult.charAt(i);
      if ("AEIOU".indexOf(c) !== -1) return ult.slice(i);
    }
    return ult;
  }

  /* Palabras que suenan parecido (el niño debe distinguirlas) */
  const PARECIDAS = [
    ["GATO", "PATO"],
    ["CASA", "CAMA"],
    ["MAMA", "MAPA"],
    ["PATA", "PATO"],
    ["SOPA", "SAPO"],
    ["BESO", "PESO"],
    ["OSO", "OSA"],
    ["LUNA", "LOBO"],
    ["PAN", "MANO"],
    ["RANA", "LUNA"],
    ["FLOR", "NUBE"],
    ["TAZA", "CASA"],
  ];

  /* ---------------------------------------------------------
     Sonidos de animales y objetos
     El texto es lo que el laboratorio "reproduce" con voz.
     --------------------------------------------------------- */
  const SONIDOS = [
    { n: "GATO", e: "🐱", s: "Miau miau", t: "animal" },
    { n: "PERRO", e: "🐕", s: "Guau guau", t: "animal" },
    { n: "PATO", e: "🦆", s: "Pio pio", t: "animal" },
    { n: "VACA", e: "🐄", s: "Muu muu", t: "animal" },
    { n: "GALLINA", e: "🐔", s: "Cocoricó", t: "animal" },
    { n: "CABRA", e: "🐐", s: "Me me me", t: "animal" },
    { n: "BUHO", e: "🦉", s: "Bu bu", t: "animal" },
    { n: "ABEJA", e: "🐝", s: "Zumb zumb", t: "animal" },
    { n: "RANA", e: "🐸", s: "Croac croac", t: "animal" },
    { n: "OVEJA", e: "🐑", s: "Beee bee", t: "animal" },
    { n: "RELOJ", e: "⏰", s: "Tic tac", t: "objeto" },
    { n: "BICICLETA", e: "🚲", s: "Trin trin", t: "objeto" },
    { n: "TELEFONO", e: "☎️", s: "Ring ring", t: "objeto" },
    { n: "AGUA", e: "💧", s: "Plof plof", t: "objeto" },
    { n: "GALLETA", e: "🍪", s: "Ñam ñam", t: "objeto" },
    { n: "TREN", e: "🚂", s: "Pito pito", t: "objeto" },
    { n: "PUERTA", e: "🚪", s: "Toc toc", t: "objeto" },
    { n: "CAMPANA", e: "🔔", s: "Ding dong", t: "objeto" },
    { n: "LAVADORA", e: "🧺", s: "Splish splash", t: "objeto" },
    { n: "MOTOR", e: "🏍️", s: "Brumm brumm", t: "objeto" },
    { n: "PARACAIDAS", e: "✈️", s: "Fiu fiu", t: "objeto" },
  ];

  /* ---------------------------------------------------------
     Utilidades
     --------------------------------------------------------- */
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

  function quitarAcentos(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  /* Distancia de Levenshtein: cuántos cambios hay que hacer
     para pasar de una palabra a otra. */
  function levenshtein(a, b) {
    const m = a.length;
    const n = b.length;
    if (!m) return n;
    if (!n) return m;
    let anterior = new Array(n + 1);
    let actual = new Array(n + 1);
    for (let j = 0; j <= n; j++) anterior[j] = j;
    for (let i = 1; i <= m; i++) {
      actual[0] = i;
      for (let j = 1; j <= n; j++) {
        const coste = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        actual[j] = Math.min(actual[j - 1] + 1, anterior[j] + 1, anterior[j - 1] + coste);
      }
      const tmp = anterior;
      anterior = actual;
      actual = tmp;
    }
    return anterior[n];
  }

  /* Comparación tolerante entre lo que dijo el niño y la palabra.
     1.00 = idéntica · 0.95 = la dijo dentro de una frase
     ~0.75 = se parece mucho pero falta algo · bajo = otra palabra */
  function parecido(a, b) {
    const x = quitarAcentos(a).replace(/[^a-zñ]/g, "");
    const y = quitarAcentos(b).replace(/[^a-zñ]/g, "");
    if (!x || !y) return 0;
    if (x === y) return 1;
    /* ¿La dijo dentro de una frase? ("la mariposa") */
    if (x.indexOf(y) !== -1) return 0.95;
    if (y.indexOf(x) !== -1) return 0.95;
    const dist = levenshtein(x, y);
    const sim = 1 - dist / Math.max(x.length, y.length);
    return sim < 0 ? 0 : sim;
  }

  /* Umbral para considerar que la lectura fue correcta */
  const UMBRAL_BIEN = 0.85;

  function porPalabra(w) {
    const clave = String(w || "").toUpperCase();
    return PALABRAS.filter((p) => p.w === clave)[0] || null;
  }

  /* ---------------------------------------------------------
     Generadores de reto por actividad
     --------------------------------------------------------- */

  /* 1) Adivinar el sonido (suena -> cuál es) */
  function retoSonido() {
    const s = SONIDOS[Math.floor(Math.random() * SONIDOS.length)];
    const mismos = SONIDOS.filter((x) => x.t === s.t && x.n !== s.n);
    const otros = SONIDOS.filter((x) => x.t !== s.t);
    const distract = barajar(mismos.concat(otros)).slice(0, 3);
    const opciones = barajar([s].concat(distract));
    return {
      tipo: "sonido",
      objetivo: s.n,
      emoji: s.e,
      sonido: s.s,
      esObjeto: s.t === "objeto",
      opciones: opciones,
      hablar: "Escucha: " + s.s + ". ¿Qué hace ese sonido?",
      pista: "Escucha otra vez y piensa en quién hace ese ruido.",
    };
  }

  /* 2) Adivinar el sonido de un objeto (imagen -> sonido) */
  function retoSonidoInverso() {
    const s = SONIDOS[Math.floor(Math.random() * SONIDOS.length)];
    const mismos = SONIDOS.filter((x) => x.t === s.t && x.n !== s.n);
    const distract = barajar(mismos).slice(0, 3);
    const opciones = barajar([s].concat(distract));
    return {
      tipo: "sonido-inverso",
      objetivo: s.s,
      emoji: s.e,
      nombre: s.n,
      opciones: opciones,
      hablar: "Mira: " + s.n + ". ¿Qué ruido hace?",
      pista: "Piensa en el ruido que hace esta cosa.",
    };
  }

  /* 3) El sonido de una letra */
  function retoLetra() {
    const pool = (D.consonantes || []).filter((c) => c.sound && c.sound !== "no suena");
    if (!pool.length) return null;
    const c = pool[Math.floor(Math.random() * pool.length)];
    /* OJO: hay letras que suenan igual (S y Z son «sss», Ñ y N «nnn»).
       Se descartan de las distractoras para que la respuesta sea
       siempre única: si no, el niño podría marcar dos correctas. */
    const otros = pool.filter((x) => x.l !== c.l && x.sound !== c.sound).map((x) => x.l);
    const distract = barajar(otros).slice(0, 3);
    return {
      tipo: "letra",
      sonido: c.sound,
      objetivo: c.l,
      palabra: c.word,
      emoji: c.emoji,
      opciones: barajar([c.l].concat(distract)),
      hablar: "Escucha el sonido: " + c.sound + ". ¿Qué letra es?",
      pista: "El sonido de esta letra aparece en la palabra " + c.word + ".",
    };
  }

  /* 4) Palabras parecidas */
  function retoParecidas() {
    const par = PARECIDAS[Math.floor(Math.random() * PARECIDAS.length)];
    const a = porPalabra(par[0]);
    const b = porPalabra(par[1]);
    if (!a || !b) return null;
    /* Cuál de las dos se dice */
    const primero = Math.random() < 0.5 ? a : b;
    const segundo = primero === a ? b : a;
    const otros = PALABRAS.filter((p) => p.w !== a.w && p.w !== b.w);
    const distract = barajar(otros).slice(0, 2).map((p) => p.w);
    return {
      tipo: "parecidas",
      objetivo: primero.w,
      emoji: primero.emoji,
      sonido: primero.w,
      opciones: barajar([primero.w, segundo.w].concat(distract)),
      hablar: "Escucha con cuidado: " + primero.w + ". ¿Cuál es esa palabra?",
      pista: "Las dos se parecen mucho. Cierra los ojos y escucha la diferencia.",
    };
  }

  /* 5) Separar en sílabas (la actividad estrella) */
  function retoSilabas() {
    const conVarias = PALABRAS.filter((p) => p.syl.length >= 2);
    if (!conVarias.length) return null;
    const p = conVarias[Math.floor(Math.random() * conVarias.length)];
    return {
      tipo: "silabas",
      palabra: p.w,
      emoji: p.emoji,
      silabas: p.syl.slice(),
      barajadas: barajar(p.syl.slice()),
      hablar: "Escucha: " + p.w + ". ¿Cuántas palmadas tiene?",
      pista: "Escucha la palabra y da una palmada por cada sílaba.",
    };
  }

  /* 6) Completar la rima */
  function retoRima() {
    /* Agrupa por clave de rima y busca un grupo con 2+ palabras */
    const grupos = {};
    PALABRAS.forEach((p) => {
      const k = claveRima(p);
      if (!grupos[k]) grupos[k] = [];
      grupos[k].push(p);
    });
    const candidatos = Object.keys(grupos).filter((k) => grupos[k].length >= 2);
    if (!candidatos.length) return null;
    const k = candidatos[Math.floor(Math.random() * candidatos.length)];
    const grupo = grupos[k];
    const elegida = grupo[Math.floor(Math.random() * grupo.length)];
    const otras = grupo.filter((p) => p.w !== elegida.w);
    const intrusos = PALABRAS.filter((p) => claveRima(p) !== k);
    const distract = barajar(intrusos).slice(0, 2).map((p) => p.w);
    /* Una palabra que sí rima + las intrusas que no riman */
    const pareja = otras.map((p) => p.w).slice(0, 1);
    const opciones = barajar([elegida.w].concat(pareja).concat(distract));
    return {
      tipo: "rima",
      objetivo: elegida.w,
      emoji: elegida.emoji,
      rima: k,
      opciones: opciones,
      hablar: "Busca la palabra que rima. Piensa en cómo suena al final.",
      pista: "Las dos palabras suenan casi igual al final.",
    };
  }

  /* ---------------------------------------------------------
     GRABACIÓN DE LA VOZ (opcional)
     --------------------------------------------------------- */

  /* ¿El dispositivo puede ESCUCHAR al niño? (reconocimiento) */
  function soportaEscucha() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  /* ¿El dispositivo puede GRABAR audio? */
  function soportaGrabacion() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  }

  /* Escucha lo que dice el niño.
     alTexto(texto|null, error|null)  ·  devuelve la función parar */
  function escuchar(alTexto, alError) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      if (alError) alError("Este dispositivo no puede escuchar.");
      return null;
    }
    let rec;
    try {
      rec = new SR();
    } catch (e) {
      if (alError) alError("No se pudo activar el micrófono.");
      return null;
    }
    rec.lang = "es-ES";
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.continuous = false;
    let terminado = false;
    rec.onresult = (ev) => {
      terminado = true;
      let mejor = "";
      let mejorPunt = 0;
      for (let i = 0; i < ev.results.length; i++) {
        for (let j = 0; j < ev.results[i].length; j++) {
          const alt = ev.results[i][j];
          const punt = alt.confidence || 0;
          if (punt > mejorPunt) {
            mejorPunt = punt;
            mejor = alt.transcript;
          }
        }
      }
      if (alTexto) alTexto(String(mejor || "").trim());
    };
    rec.onerror = (ev) => {
      terminado = true;
      const code = ev && ev.error ? ev.error : "error";
      if (alError) alError(code);
    };
    rec.onend = () => {
      if (!terminado && alError) alError("sin-voz");
    };
    try {
      rec.start();
    } catch (e) {
      if (alError) alError("No se pudo activar el micrófono.");
      return null;
    }
    return () => {
      try {
        rec.stop();
      } catch (e) {}
    };
  }

  /* Graba audio para que el niño lo escuche después.
     alAudio(urlAudio|null, error|null)  ·  devuelve la función parar */
  function grabar(alAudio, alError) {
    if (!soportaGrabacion()) {
      if (alError) alError("Este dispositivo no tiene micrófono.");
      return null;
    }
    let stream = null;
    let rec = null;
    let trozos = [];
    let terminado = false;
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((s) => {
        stream = s;
        try {
          rec = new MediaRecorder(s);
        } catch (e) {
          if (alError) alError("No se pudo grabar.");
          return;
        }
        trozos = [];
        rec.ondataavailable = (ev) => {
          if (ev.data && ev.data.size) trozos.push(ev.data);
        };
        rec.onstop = () => {
          terminado = true;
          if (stream) stream.getTracks().forEach((t) => t.stop());
          if (!trozos.length) {
            if (alError) alError("No se grabó nada.");
            return;
          }
          const blob = new Blob(trozos, { type: trozos[0].type || "audio/webm" });
          if (alAudio) alAudio(URL.createObjectURL(blob));
        };
        rec.start();
      })
      .catch(() => {
        terminado = true;
        if (alError) alError("permiso-denegado");
      });
    return () => {
      if (rec && rec.state !== "inactive") {
        try {
          rec.stop();
        } catch (e) {}
      }
      if (!terminado && !rec) {
        if (stream) stream.getTracks().forEach((t) => t.stop());
        if (alError) alError("permiso-denegado");
      }
    };
  }

  /* ---------------------------------------------------------
     Progreso guardado por perfil
     --------------------------------------------------------- */
  function _data() {
    try {
      const d = CORE.Store.data;
      if (!d.laboratorio) d.laboratorio = { actividades: {}, lecturas: 0 };
      if (!d.laboratorio.actividades) d.laboratorio.actividades = {};
      return d;
    } catch (e) {
      return { laboratorio: { actividades: {}, lecturas: 0 } };
    }
  }

  function guardar() {
    try {
      CORE.Store.save();
    } catch (e) {}
  }

  function progreso(actividad) {
    const d = _data();
    if (!d.laboratorio.actividades[actividad]) {
      d.laboratorio.actividades[actividad] = { aciertos: 0, fallos: 0 };
    }
    return d.laboratorio.actividades[actividad];
  }

  function registrar(actividad, acierto) {
    const p = progreso(actividad);
    if (acierto) p.aciertos++;
    else p.fallos++;
    guardar();
    return p;
  }

  function totalAciertos() {
    const d = _data();
    let t = 0;
    Object.keys(d.laboratorio.actividades).forEach((k) => {
      t += d.laboratorio.actividades[k].aciertos || 0;
    });
    return t;
  }

  function lecturasHechas() {
    return _data().laboratorio.lecturas || 0;
  }

  function sumarLectura() {
    const d = _data();
    d.laboratorio.lecturas = (d.laboratorio.lecturas || 0) + 1;
    guardar();
  }

  /* ---------------------------------------------------------
     API pública
     --------------------------------------------------------- */
  const ACTIVIDADES = [
    { id: "sonido", icono: "🎧", nombre: "Sonidos", desc: "Adivina animales y objetos por su sonido" },
    { id: "letra", icono: "🔊", nombre: "Sonido de letra", desc: "¿Qué letra suena así?" },
    { id: "parecidas", icono: "👯", nombre: "Palabras parecidas", desc: "Distingue las que se parecen" },
    { id: "silabas", icono: "👏", nombre: "Sílabas", desc: "Palmadas y ordena sílabas" },
    { id: "rima", icono: "🎵", nombre: "Rimas", desc: "Completa la palabra que rima" },
    { id: "voz", icono: "🎤", nombre: "Mi lectura", desc: "Graba y lee en voz alta" },
  ];

  function actividades() {
    return ACTIVIDADES;
  }

  function generarReto(actividad) {
    if (actividad === "sonido") return Math.random() < 0.5 ? retoSonido() : retoSonidoInverso();
    if (actividad === "letra") return retoLetra();
    if (actividad === "parecidas") return retoParecidas();
    if (actividad === "silabas") return retoSilabas();
    if (actividad === "rima") return retoRima();
    return null;
  }

  return {
    ACTIVIDADES,
    PALABRAS,
    PARECIDAS,
    SONIDOS,
    actividades,
    generarReto,
    claveRima,
    porPalabra,
    quitarAcentos,
    parecido,
    levenshtein,
    UMBRAL_BIEN,
    soportaEscucha,
    soportaGrabacion,
    escuchar,
    grabar,
    progreso,
    registrar,
    totalAciertos,
    lecturasHechas,
    sumarLectura,
  };
})();
