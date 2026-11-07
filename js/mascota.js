/* =========================================================
   WEB LEER — Mascota que crece con el aprendizaje
   ---------------------------------------------------------
   El niño elige una criatura (dragón, gato, dinosaurio o
   búho) que EMPIEZA siendo un huevo/bebé y evoluciona al
   aprender. No es un juguete decorativo: cada acción educa.

     · Alimentarla  → resolviendo sumas.
     · Enseñarle palabras nuevas → toca y escucha la palabra.
     · Desbloquear disfraces → al leer correctamente.
     · Construirle una casa → con materiales ganados.

   REGLA DE ORO: la mascota NUNCA baja de nivel, nunca se
   pone triste y nunca castiga si el niño pasa días sin
   jugar. Al volver, se alegra y le regala un extra.

   El progreso se guarda por perfil en Store.data.mascota.
   ========================================================= */

window.MASCOTA = (function () {
  "use strict";

  const D = window.DATA;

  /* ---------------------------------------------------------
     ETAPAS: cada criatura pasa por 4 fases de crecimiento.
     `nombre` es el nombre de la fase (para hablar), `emoji`
     es el dibujo grande y `escala` lo que crece en pantalla.
     Cada especie tiene ademas sus propias fases, para que el
     nombre coincida SIEMPRE con el dibujo (nada de que un
     gato se convierta en leon).
     --------------------------------------------------------- */
  const ETAPAS = [
    { id: 0, nombre: "Huevo", escala: 0.6, desc: "Aún está dentro del huevo, escuchándote." },
    { id: 1, nombre: "Cría", escala: 0.78, desc: "¡Ya salió del cascarón! Es pequeñita." },
    { id: 2, nombre: "Joven", escala: 0.92, desc: "Creció y quiere aprender más contigo." },
    { id: 3, nombre: "Legendaria", escala: 1.08, desc: "¡Es una criatura fuerte, sabia y feliz!" },
  ];

  /* ---------------------------------------------------------
     CRIATURAS: cada una tiene su color y sus fases.
     `fases` son los emojis de cada etapa (0..3) y deben
     corresponder a la misma especie.
     `nombreFases` son los nombres propios de cada fase, para
     que el texto y el dibujo digan lo mismo.
     El modelo 3D de cada criatura esta en js/aventurero/modelo.js
     (AV_MODELO.MASCOTAS_3D).
     --------------------------------------------------------- */
  const CRIATURAS = [
    {
      id: "dragon",
      nombre: "Dragón",
      color: "#3fa34d",
      colorClaro: "#e6f7ea",
      fases: ["🥚", "🐲", "🐉", "🐲"],
      nombreFases: ["Huevo de dragón", "Cría de dragón", "Dragón joven", "Dragón ancestral"],
      sonido: "¡Grrr!",
      comida: ["🍎", "🍖", "🧁", "🍇"],
      casa: { icono: "🏰", nombre: "Castillo de nubes" },
    },
    {
      id: "gato",
      nombre: "Gato",
      color: "#f2994a",
      colorClaro: "#fdf0e3",
      fases: ["🥚", "🐱", "🐈", "🐈"],
      nombreFases: ["Huevo de gato", "Cría de gato", "Gato joven", "Gato Wild"],
      sonido: "¡Miau!",
      comida: ["🐟", "🥛", "🍗", "🧶"],
      casa: { icono: "🏠", nombre: "Casita de lana" },
    },
    {
      id: "dino",
      nombre: "Dinosaurio",
      color: "#2f80ed",
      colorClaro: "#e5efff",
      fases: ["🥚", "🦕", "🦕", "🦖"],
      nombreFases: ["Huevo de dinosaurio", "Cría de dinosaurio", "Dinosaurio joven", "Dinosaurio titán"],
      sonido: "¡Roooar!",
      comida: ["🍃", "🌿", "🥦", "🍉"],
      casa: { icono: "🌋", nombre: "Cueva del volcán" },
    },
    {
      id: "buho",
      nombre: "Búho",
      color: "#bb6bd9",
      colorClaro: "#f4e9fb",
      fases: ["🥚", "🦉", "🦉", "🦉"],
      nombreFases: ["Huevo de búho", "Cría de búho", "Búho joven", "Búho sabio"],
      sonido: "¡Uu-uu!",
      comida: ["🐛", "🌰", "🍒", "🥕"],
      casa: { icono: "🌳", nombre: "Casa del árbol" },
    },
    {
      id: "conejo",
      nombre: "Conejo",
      color: "#ef7fa8",
      colorClaro: "#fdeef3",
      fases: ["🥚", "🐰", "🐇", "🐇"],
      nombreFases: ["Huevo de conejo", "Conejito", "Conejo joven", "Conejo lunar"],
      sonido: "¡Boing!",
      comida: ["🥕", "🥬", "🍎", "🌼"],
      casa: { icono: "🏡", nombre: "Madriguera acogedora" },
    },
    {
      id: "zorro",
      nombre: "Zorro",
      color: "#ff8552",
      colorClaro: "#fff1e8",
      fases: ["🥚", "🦊", "🦊", "🦊"],
      nombreFases: ["Huevo de zorro", "Zorrito", "Zorro joven", "Zorro astuto"],
      sonido: "¡Ring ring!",
      comida: ["🍓", "🍗", "🍇", "🍯"],
      casa: { icono: "🏕️", nombre: "Cueva del bosque" },
    },
    {
      id: "panda",
      nombre: "Panda",
      color: "#4b5a68",
      colorClaro: "#f2f4f7",
      fases: ["🥚", "🐼", "🐼", "🐼"],
      nombreFases: ["Huevo de panda", "Panda bebé", "Panda joven", "Panda gigante"],
      sonido: "¡Ñam ñam!",
      comida: ["🎋", "🎍", "🍎", "🫐"],
      casa: { icono: "🎋", nombre: "Bosque de bambú" },
    },
    {
      id: "unicornio",
      nombre: "Unicornio",
      color: "#b78cec",
      colorClaro: "#f6efff",
      fases: ["🥚", "🦄", "🦄", "🦄"],
      nombreFases: ["Huevo de unicornio", "Potrillo", "Unicornio joven", "Unicornio arcoíris"],
      sonido: "¡Niiii!",
      comida: ["🍎", "🌈", "🍭", "🧁"],
      casa: { icono: "🌈", nombre: "Arcoíris de las nubes" },
    },
    {
      id: "perrito",
      nombre: "Perrito",
      color: "#c98d5f",
      colorClaro: "#fdf3e7",
      fases: ["🥚", "🐶", "🐕", "🐕"],
      nombreFases: ["Huevo de perrito", "Perrito bebé", "Cachorro joven", "Perro fiel"],
      sonido: "¡Guau guau!",
      comida: ["🦴", "🍖", "🥎", "🍎"],
      casa: { icono: "🛖", nombre: "Casita de madera" },
    },
    {
      id: "pinguino",
      nombre: "Pingüino",
      color: "#3b4a63",
      colorClaro: "#eef3f8",
      fases: ["🥚", "🐧", "🐧", "🐧"],
      nombreFases: ["Huevo de pingüino", "Polluelo", "Pingüino joven", "Pingüino emperador"],
      sonido: "¡Onk onk!",
      comida: ["🐟", "🦐", "🧊", "🍉"],
      casa: { icono: "🧊", nombre: "Iglú del hielo" },
    },
    {
      id: "leon",
      nombre: "León",
      color: "#e8963c",
      colorClaro: "#fdf0dd",
      fases: ["🥚", "🦁", "🦁", "🦁"],
      nombreFases: ["Huevo de león", "Leoncito", "León joven", "Rey del rugido"],
      sonido: "¡Rraaau!",
      comida: ["🍖", "🍗", "🥩", "🍉"],
      casa: { icono: "🌿", nombre: "Sabana soleada" },
    },
    {
      id: "tortuga",
      nombre: "Tortuga",
      color: "#7db56a",
      colorClaro: "#eff7ec",
      fases: ["🥚", "🐢", "🐢", "🐢"],
      nombreFases: ["Huevo de tortuga", "Tortugita", "Tortuga joven", "Tortuga centenaria"],
      sonido: "¡Pium!",
      comida: ["🥬", "🍃", "🍓", "🌺"],
      casa: { icono: "🌸", nombre: "Estanque de flores" },
    },
    {
      id: "osito",
      nombre: "Osito",
      color: "#b07b46",
      colorClaro: "#f8f1e6",
      fases: ["🥚", "🐻", "🐻", "🐻"],
      nombreFases: ["Huevo de osito", "Osito mielero", "Oso joven", "Oso del bosque"],
      sonido: "¡Urrr!",
      comida: ["🍯", "🐟", "🍎", "🫐"],
      casa: { icono: "🍯", nombre: "Cueva de la miel" },
    },
    {
      id: "koala",
      nombre: "Koala",
      color: "#9aa6b0",
      colorClaro: "#f2f5f7",
      fases: ["🥚", "🐨", "🐨", "🐨"],
      nombreFases: ["Huevo de koala", "Koala bebé", "Koala joven", "Koala del eucalipto"],
      sonido: "¡Brrum!",
      comida: ["🍃", "🌿", "🍎", "💧"],
      casa: { icono: "🍃", nombre: "Bosque de eucalipto" },
    },
    {
      id: "elefante",
      nombre: "Elefante",
      color: "#7f97a8",
      colorClaro: "#eef4f7",
      fases: ["🥚", "🐘", "🐘", "🐘"],
      nombreFases: ["Huevo de elefante", "Elefantito", "Elefante joven", "Elefante sabio"],
      sonido: "¡Pruuu!",
      comida: ["🥜", "🍃", "🍉", "🌾"],
      casa: { icono: "💧", nombre: "Laguna de agua fresca" },
    },
    {
      id: "jirafa",
      nombre: "Jirafa",
      color: "#e2a63c",
      colorClaro: "#fdf5e6",
      fases: ["🥚", "🦒", "🦒", "🦒"],
      nombreFases: ["Huevo de jirafa", "Jirafita", "Jirafa joven", "Jirafa miratodo"],
      sonido: "¡Hummm!",
      comida: ["🍂", "🌾", "🥬", "🌻"],
      casa: { icono: "🌻", nombre: "Pradera alta" },
    },
    {
      id: "mapache",
      nombre: "Mapache",
      color: "#6f7a84",
      colorClaro: "#f1f4f6",
      fases: ["🥚", "🦝", "🦝", "🦝"],
      nombreFases: ["Huevo de mapache", "Mapachito", "Mapache joven", "Mapache pillo"],
      sonido: "¡Chirp chirp!",
      comida: ["🌽", "🍇", "🥚", "🌰"],
      casa: { icono: "🌙", nombre: "Refugio del claro" },
    },
    {
      id: "cerdito",
      nombre: "Cerdito",
      color: "#f492b6",
      colorClaro: "#fdeef3",
      fases: ["🥚", "🐷", "🐷", "🐷"],
      nombreFases: ["Huevo de cerdito", "Puerquito", "Cerdito joven", "Cerdito campeón"],
      sonido: "¡Oinc oinc!",
      comida: ["🍎", "🌽", "🥕", "🌰"],
      casa: { icono: "🚜", nombre: "Granja del barro" },
    },
    {
      id: "pollito",
      nombre: "Pollito",
      color: "#f5c33f",
      colorClaro: "#fff9e3",
      fases: ["🥚", "🐥", "🐤", "🐤"],
      nombreFases: ["Huevo de pollito", "Pollito chiquito", "Pollo joven", "Gallo del corral"],
      sonido: "¡Pío pío!",
      comida: ["🌽", "🌾", "🐛", "🥬"],
      casa: { icono: "🌾", nombre: "Granero calientito" },
    },
    {
      id: "pulpo",
      nombre: "Pulpo",
      color: "#ff8f6a",
      colorClaro: "#fff0ea",
      fases: ["🥚", "🐙", "🐙", "🐙"],
      nombreFases: ["Huevo de pulpo", "Pulpito", "Pulpo joven", "Pulpo de las tintas"],
      sonido: "¡Glub glub!",
      comida: ["🦐", "🦀", "🐟", "🌊"],
      casa: { icono: "🐚", nombre: "Arrecife de colores" },
    },
  ];

  /* ---------------------------------------------------------
     PUNTOS DE CRECIMIENTO
     Cada acción buena suma "puntos de cariño". Cuando llegas
     al umbral, sube de etapa. Nunca se resta.
     --------------------------------------------------------- */
  const UMBRAL = [0, 6, 16, 30]; // puntos necesarios para cada etapa

  /* Disfraces: se desbloquean al leer correctamente (aciertos) */
  const DISFRACES = [
    { id: "ninguno", nombre: "Sin disfraz", icono: "—", aciertos: 0 },
    { id: "gorro", nombre: "Gorrito de fiesta", icono: "🎉", aciertos: 8 },
    { id: "lazo", nombre: "Moño brillante", icono: "🎀", aciertos: 20 },
    { id: "corona", nombre: "Corona dorada", icono: "👑", aciertos: 35 },
    { id: "capa", nombre: "Capa de héroe", icono: "🦸", aciertos: 55 },
    { id: "gafas", nombre: "Gafas de sabio", icono: "🤓", aciertos: 80 },
    { id: "varita", nombre: "Varita mágica", icono: "✨", aciertos: 110 },
  ];

  /* Materiales de la casa: se ganan en las actividades */
  const MATERIALES = [
    { id: "madera", nombre: "Madera", icono: "🌲" },
    { id: "piedra", nombre: "Piedra", icono: "⛰️" },
    { id: "teja", nombre: "Teja", icono: "🧱" },
    { id: "flor", nombre: "Flor", icono: "🌷" },
    { id: "lampara", nombre: "Lámpara", icono: "🏮" },
    { id: "bandera", nombre: "Bandera", icono: "🚩" },
  ];

  /* Cuántos materiales pide cada cuarto de la casa (en orden) */
  const PLAN_CASA = [
    { id: "cimientos", nombre: "Cimientos", icono: "🧱", pide: { piedra: 3 } },
    { id: "paredes", nombre: "Paredes", icono: "🧱", pide: { madera: 4, piedra: 2 } },
    { id: "techo", nombre: "Techo", icono: "🏠", pide: { teja: 4, madera: 2 } },
    { id: "jardin", nombre: "Jardín", icono: "🌷", pide: { flor: 3, madera: 1 } },
    { id: "luz", nombre: "Luz", icono: "🏮", pide: { lampara: 2, piedra: 1 } },
    { id: "bandera", nombre: "Bandera", icono: "🚩", pide: { bandera: 1, teja: 1, flor: 1 } },
  ];

  /* ---------------------------------------------------------
     AYUDAS INTERNAS
     --------------------------------------------------------- */
  const porId = {};
  CRIATURAS.forEach((c) => (porId[c.id] = c));

  function criatura(id) {
    return porId[id] || CRIATURAS[0];
  }

  /* Progreso de la mascota guardado por perfil */
  function _d() {
    const d = CORE.Store.data;
    if (!d.mascota) {
      d.mascota = {
        especie: null, // id de la criatura elegida
        puntos: 0, // cariño acumulado (nunca baja)
        etapa: 0,
        aciertos: 0, // aciertos de lectura (disfraces)
        disfraz: "ninguno",
        disfraces: ["ninguno"],
        materiales: {}, // id -> cantidad
        casa: [], // cuartos construidos
        palabras: [], // ids de palabras enseñadas
        comida: 0, // veces alimentada
        ultimaVisita: null, // para el saludo de bienvenida
        bienvenidaDada: false,
      };
    }
    const m = d.mascota;
    if (!m.materiales) m.materiales = {};
    if (!Array.isArray(m.casa)) m.casa = [];
    if (!Array.isArray(m.palabras)) m.palabras = [];
    if (!Array.isArray(m.disfraces)) m.disfraces = ["ninguno"];
    return m;
  }

  function tiene() {
    return !!_d().especie;
  }

  function elegir(especie) {
    const m = _d();
    if (!porId[especie]) return false;
    const primera = !m.especie;
    m.especie = especie;
    if (primera) {
      m.etapa = 0;
      m.puntos = 0;
    }
    CORE.Store.save();
    return true;
  }

  function etapa() {
    return ETAPAS[Math.max(0, Math.min(3, _d().etapa))];
  }

  /* Nombre de la fase segun la especie: siempre coincide con el
     dibujo (un gato nunca se llama leon). */
  function nombreFase(especieId, etapaId) {
    const c = criatura(especieId);
    if (c && c.nombreFases && c.nombreFases[etapaId]) return c.nombreFases[etapaId];
    const e = ETAPAS[Math.max(0, Math.min(3, etapaId))];
    return e ? e.nombre : "";
  }

  /* Emoji de la fase segun la especie */
  function emojiFase(especieId, etapaId) {
    const c = criatura(especieId);
    if (c && c.fases && c.fases[etapaId]) return c.fases[etapaId];
    return "🥚";
  }

  function info() {
    const m = _d();
    return {
      especie: m.especie,
      criatura: m.especie ? criatura(m.especie) : null,
      etapa: etapa(),
      etapaId: m.etapa,
      puntos: m.puntos,
      siguiente: m.etapa < 3 ? UMBRAL[m.etapa + 1] - m.puntos : 0,
      umbral: m.etapa < 3 ? UMBRAL[m.etapa + 1] : m.puntos,
      aciertos: m.aciertos,
    };
  }

  /* Suma cariño y sube de etapa si toca. Devuelve la etapa nueva
     si hubo evolución, o null. */
  function sumarPuntos(n) {
    const m = _d();
    m.puntos += Math.max(0, n || 0);
    let subio = null;
    while (m.etapa < 3 && m.puntos >= UMBRAL[m.etapa + 1]) {
      m.etapa++;
      subio = etapa();
    }
    CORE.Store.save();
    return subio;
  }

  /* ---------------------------------------------------------
     ACCIÓN 1: ALIMENTAR resolviendo sumas.
     Se llama desde el minijuego de comida al acertar.
     --------------------------------------------------------- */
  function alimentar() {
    const m = _d();
    m.comida++;
    return sumarPuntos(1);
  }

  /* ---------------------------------------------------------
     ACCIÓN 2: ENSEÑAR PALABRAS NUEVAS.
     Cada palabra distinta suma cariño la primera vez.
     --------------------------------------------------------- */
  function ensenarPalabra(palabra) {
    const m = _d();
    const clave = String(palabra || "").toUpperCase();
    if (!clave) return { nueva: false, subio: null };
    if (m.palabras.indexOf(clave) !== -1) {
      return { nueva: false, subio: null };
    }
    m.palabras.push(clave);
    const subio = sumarPuntos(1);
    return { nueva: true, subio: subio };
  }

  function palabrasEnsenadas() {
    return _d().palabras.slice();
  }

  /* ---------------------------------------------------------
     ACCIÓN 3: LEER BIEN desbloquea disfraces.
     Se llama desde el motor de actividades en cada acierto.
     --------------------------------------------------------- */
  function registrarAcierto() {
    const m = _d();
    m.aciertos++;
    let nuevo = null;
    DISFRACES.forEach((d) => {
      if (m.aciertos >= d.aciertos && m.disfraces.indexOf(d.id) === -1) {
        m.disfraces.push(d.id);
        nuevo = d;
      }
    });
    /* Leer bien también da un poquito de cariño (cada 2 aciertos) */
    let subio = null;
    if (m.aciertos % 2 === 0) subio = sumarPuntos(1);
    else CORE.Store.save();
    return { nuevo: nuevo, subio: subio };
  }

  function disfraces() {
    const m = _d();
    return DISFRACES.map((d) => ({
      id: d.id,
      nombre: d.nombre,
      icono: d.icono,
      aciertos: d.aciertos,
      abierto: m.disfraces.indexOf(d.id) !== -1,
      activo: m.disfraz === d.id,
    }));
  }

  function ponerDisfraz(id) {
    const m = _d();
    if (m.disfraces.indexOf(id) === -1) return false;
    m.disfraz = id;
    CORE.Store.save();
    return true;
  }

  function disfrazActivo() {
    const m = _d();
    return DISFRACES.find((d) => d.id === m.disfraz) || DISFRACES[0];
  }

  /* ---------------------------------------------------------
     ACCIÓN 4: CONSTRUIR LA CASA con materiales ganados.
     Cada actividad completada suelta material al azar.
     --------------------------------------------------------- */
  function ganarMaterial() {
    const m = _d();
    const mat = MATERIALES[Math.floor(Math.random() * MATERIALES.length)];
    m.materiales[mat.id] = (m.materiales[mat.id] || 0) + 1;
    CORE.Store.save();
    return mat;
  }

  function materiales() {
    const m = _d();
    return MATERIALES.map((x) => ({
      id: x.id,
      nombre: x.nombre,
      icono: x.icono,
      tiene: m.materiales[x.id] || 0,
    }));
  }

  function planCasa() {
    const m = _d();
    return PLAN_CASA.map((p, i) => {
      const construido = m.casa.indexOf(p.id) !== -1;
      const disponible = i === 0 || m.casa.indexOf(PLAN_CASA[i - 1].id) !== -1;
      const alcanza = Object.keys(p.pide).every(
        (k) => (m.materiales[k] || 0) >= p.pide[k]
      );
      return {
        id: p.id,
        nombre: p.nombre,
        icono: p.icono,
        pide: p.pide,
        construido: construido,
        disponible: disponible,
        alcanza: alcanza,
      };
    });
  }

  function construir(id) {
    const m = _d();
    const idx = PLAN_CASA.findIndex((p) => p.id === id);
    if (idx === -1) return { ok: false, motivo: "no-existe" };
    const p = PLAN_CASA[idx];
    if (m.casa.indexOf(p.id) !== -1) return { ok: false, motivo: "ya" };
    if (idx > 0 && m.casa.indexOf(PLAN_CASA[idx - 1].id) === -1) {
      return { ok: false, motivo: "orden" };
    }
    const falta = Object.keys(p.pide).filter(
      (k) => (m.materiales[k] || 0) < p.pide[k]
    );
    if (falta.length) return { ok: false, motivo: "materiales", falta: falta };
    Object.keys(p.pide).forEach((k) => {
      m.materiales[k] -= p.pide[k];
    });
    m.casa.push(p.id);
    const subio = sumarPuntos(2);
    return { ok: true, pieza: p, subio: subio };
  }

  function casa() {
    const m = _d();
    return {
      hechas: m.casa.length,
      total: PLAN_CASA.length,
      cuartos: PLAN_CASA.map((p) => ({
        id: p.id,
        nombre: p.nombre,
        icono: p.icono,
        construido: m.casa.indexOf(p.id) !== -1,
      })),
    };
  }

  /* ---------------------------------------------------------
     BIENVENIDA SIN CASTIGO
     Si el niño vuelve después de días, la mascota se alegra
     y le regala cariño extra. Nunca hay penalización.
     --------------------------------------------------------- */
  function saludoVuelta() {
    const m = _d();
    const hoy = new Date().toDateString();
    let extra = 0;
    if (m.ultimaVisita && m.ultimaVisita !== hoy) {
      extra = 1; // regalito de bienvenida, siempre positivo
      m.puntos += extra;
      const subio = subirSiToca();
      m.ultimaVisita = hoy;
      CORE.Store.save();
      return {
        vuelve: true,
        extra: extra,
        subio: subio,
        texto:
          "¡Qué alegría verte otra vez! Te guardé un abrazo y un poquito de cariño. " +
          "Tu " +
          (m.especie ? criatura(m.especie).nombre.toLowerCase() : "mascota") +
          " te estaba esperando.",
      };
    }
    m.ultimaVisita = hoy;
    CORE.Store.save();
    return { vuelve: false, extra: 0, texto: "" };
  }

  function subirSiToca() {
    const m = _d();
    let subio = null;
    while (m.etapa < 3 && m.puntos >= UMBRAL[m.etapa + 1]) {
      m.etapa++;
      subio = etapa();
    }
    return subio;
  }

  /* ---------------------------------------------------------
     FRASES AMABLES de la mascota (nunca regaña)
     --------------------------------------------------------- */
  const FRASES = [
    "¡Me encanta aprender contigo!",
    "Cada letra que aprendes me hace más fuerte.",
    "¿Jugamos otro poquito? ¡Me divierto mucho!",
    "Estoy orgullosa de ti, lo estás haciendo genial.",
    "Cuando lees bien, a mí me salen chispitas de alegría.",
    "No hay prisa. Aprender despacito también cuenta.",
  ];

  function frase() {
    return FRASES[Math.floor(Math.random() * FRASES.length)];
  }

  return {
    ETAPAS,
    CRIATURAS,
    nombreFase: nombreFase,
    emojiFase: emojiFase,
    DISFRACES,
    MATERIALES,
    PLAN_CASA,
    tiene,
    elegir,
    info,
    etapa,
    criatura,
    sumarPuntos,
    alimentar,
    ensenarPalabra,
    palabrasEnsenadas,
    registrarAcierto,
    disfraces,
    ponerDisfraz,
    disfrazActivo,
    ganarMaterial,
    materiales,
    planCasa,
    construir,
    casa,
    saludoVuelta,
    frase,
  };
})();
