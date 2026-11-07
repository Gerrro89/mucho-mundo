/* =========================================================
   WEB LEER — Datos del currículo
   Español colombiano. Contenido separado de la lógica para
   poder agregar letras, palabras, sílabas y cuentos nuevos
   sin tocar el motor de actividades.
   ========================================================= */

window.DATA = (function () {
  "use strict";

  /* ---------- VOCALES ---------- */
  const vocales = [
    { l: "A", low: "a", emoji: "✈️", word: "avión", sound: "aaa" },
    { l: "E", low: "e", emoji: "🐘", word: "elefante", sound: "eee" },
    { l: "I", low: "i", emoji: "🏝️", word: "isla", sound: "iii" },
    { l: "O", low: "o", emoji: "🐻", word: "oso", sound: "ooo" },
    { l: "U", low: "u", emoji: "🍇", word: "uva", sound: "uuu" },
  ];

  /* ---------- CONSONANTES ----------
     sound: texto breve del sonido (para la interfaz).
     tipo:
       - "continua": el sonido se puede prolongar (m, s, l, n, f, r, ñ, z, y).
       - "oclusiva": sonido breve y seco (p, t, d, b, g, v, j, q, k, w).
         Enseñar SIEMPRE con ejemplos de sílabas (PA, PE, PI...) para que el
         niño no añada una vocal al final ("puh" → "p... como en PA").
       - "variable": cambia según la vocal (C y G).
         C: con A, O, U suena K (CA, CO, CU); con E, I suena S (CE, CI).
         G: con A, O, U suena G fuerte (GA, GO, GU); con E, I suena J (GE, GI).
         En español de Colombia la C y la Z suenan igual que la S (seseo).
     Ejemplo: M se llama "eme" pero suena "mmm".            */
  const consonantes = [
    { l: "M", low: "m", sound: "mmm", tipo: "continua", word: "mono", emoji: "🐵", grupo: 1 },
    { l: "P", low: "p", sound: "p", tipo: "oclusiva", word: "patito", emoji: "🦆", grupo: 1 },
    { l: "S", low: "s", sound: "sss", tipo: "continua", word: "sol", emoji: "☀️", grupo: 1 },
    { l: "L", low: "l", sound: "lll", tipo: "continua", word: "luna", emoji: "🌙", grupo: 1 },
    { l: "T", low: "t", sound: "t", tipo: "oclusiva", word: "tigre", emoji: "🐯", grupo: 1 },

    { l: "N", low: "n", sound: "nnn", tipo: "continua", word: "nube", emoji: "☁️", grupo: 2 },
    {
      l: "C",
      low: "c",
      sound: "k o s",
      tipo: "variable",
      nota: "Con A, O, U suena ca, co, cu. Con E, I suena ce, ci, igual que la S.",
      word: "casa",
      emoji: "🏠",
      grupo: 2,
    },
    { l: "D", low: "d", sound: "d", tipo: "oclusiva", word: "dado", emoji: "🎲", grupo: 2 },
    {
      l: "G",
      low: "g",
      sound: "g o j",
      tipo: "variable",
      nota: "Con A, O, U suena ga, go, gu, fuerte. Con E, I suena ge, gi, como la J.",
      word: "gato",
      emoji: "🐱",
      grupo: 2,
    },
    { l: "F", low: "f", sound: "fff", tipo: "continua", word: "flor", emoji: "🌸", grupo: 2 },

    { l: "V", low: "v", sound: "b", tipo: "oclusiva", word: "vaca", emoji: "🐄", grupo: 3 },
    { l: "B", low: "b", sound: "b", tipo: "oclusiva", word: "beso", emoji: "👄", grupo: 3 },
    { l: "R", low: "r", sound: "rrr", tipo: "continua", word: "rana", emoji: "🐸", grupo: 3 },
    { l: "J", low: "j", sound: "j", tipo: "oclusiva", word: "jirafa", emoji: "🦒", grupo: 3 },
    { l: "Y", low: "y", sound: "y", tipo: "continua", word: "yoyo", emoji: "🎾", grupo: 3 },

    { l: "Z", low: "z", sound: "sss", tipo: "continua", word: "zapato", emoji: "👟", grupo: 4 },
    { l: "Ñ", low: "ñ", sound: "ñññ", tipo: "continua", word: "ñame", emoji: "🍠", grupo: 4 },
    { l: "Q", low: "q", sound: "k", tipo: "oclusiva", word: "queso", emoji: "🧀", grupo: 4 },
    { l: "H", low: "h", sound: "no suena", tipo: "silenciosa", word: "helado", emoji: "🍦", grupo: 4 },
    { l: "X", low: "x", sound: "kss", tipo: "oclusiva", word: "xilófono", emoji: "🎵", grupo: 4 },
    { l: "K", low: "k", sound: "k", tipo: "oclusiva", word: "koala", emoji: "🐨", grupo: 4 },
    { l: "W", low: "w", sound: "w", tipo: "oclusiva", word: "waffle", emoji: "🧇", grupo: 4 },
  ];

  /* Letras visualmente parecidas para el juego de diferenciación */
  const confundibles = [
    { par: ["b", "d"], muestra: "b" },
    { par: ["p", "q"], muestra: "p" },
    { par: ["m", "n"], muestra: "m" },
    { par: ["u", "v"], muestra: "u" },
  ];

  /* ---------- SÍLABAS ---------- */
  /* familias: cada consonante con sus 5 combinaciones */
  const familias = [
    { cons: "M", silabas: ["MA", "ME", "MI", "MO", "MU"] },
    { cons: "P", silabas: ["PA", "PE", "PI", "PO", "PU"] },
    { cons: "S", silabas: ["SA", "SE", "SI", "SO", "SU"] },
    { cons: "L", silabas: ["LA", "LE", "LI", "LO", "LU"] },
    { cons: "T", silabas: ["TA", "TE", "TI", "TO", "TU"] },
    { cons: "N", silabas: ["NA", "NE", "NI", "NO", "NU"] },
    {
      cons: "C",
      silabas: ["CA", "CE", "CI", "CO", "CU"],
      nota: "La C cambia de sonido: con A, O, U suena ca, co, cu. Con E, I suena ce, ci.",
    },
    { cons: "D", silabas: ["DA", "DE", "DI", "DO", "DU"] },
    {
      cons: "G",
      silabas: ["GA", "GE", "GI", "GO", "GU"],
      nota: "La G cambia de sonido: con A, O, U suena ga, go, gu, fuerte. Con E, I suena ge, gi, como la J.",
    },
    { cons: "R", silabas: ["RA", "RE", "RI", "RO", "RU"] },
    { cons: "V", silabas: ["VA", "VE", "VI", "VO", "VU"] },
    { cons: "F", silabas: ["FA", "FE", "FI", "FO", "FU"] },
  ];

  /* Sílabas inversas (vocal + consonante) y trabadas */
  const silabasInversas = ["AS", "ES", "IS", "OS", "US", "AL", "EL", "IL", "OL", "UL", "AN", "EN", "IN", "ON", "UN"];
  const silabasTrabadas = ["SOL", "SAL", "PAN", "MAR", "PES", "TAL", "DON", "COL", "FLOR", "NIDO", "PERRO"];
  /* Combinaciones de dos consonantes */
  const combinaciones = [
    { base: "BR", silabas: ["BRA", "BRE", "BRI", "BRO", "BRU"] },
    { base: "PL", silabas: ["PLA", "PLE", "PLI", "PLO", "PLU"] },
    { base: "TR", silabas: ["TRA", "TRE", "TRI", "TRO", "TRU"] },
    { base: "CL", silabas: ["CLA", "CLE", "CLI", "CLO", "CLU"] },
    { base: "GR", silabas: ["GRA", "GRE", "GRI", "GRO", "GRU"] },
  ];

  /* ---------- PALABRAS (nivel 4) ----------
     syl: sílabas para construir; tilt: tilde en la palabra      */
  const palabras = [
    { w: "MAMÁ", syl: ["MA", "MÁ"], emoji: "👩", s: "mi mamá" },
    { w: "PAPÁ", syl: ["PA", "PÁ"], emoji: "👨", s: "mi papá" },
    { w: "MESA", syl: ["ME", "SA"], emoji: "🍽️", s: "una mesa" },
    { w: "MAPA", syl: ["MA", "PA"], emoji: "🗺️", s: "un mapa" },
    { w: "PATO", syl: ["PA", "TO"], emoji: "🦆", s: "un pato" },
    { w: "GATO", syl: ["GA", "TO"], emoji: "🐱", s: "un gato" },
    { w: "LUNA", syl: ["LU", "NA"], emoji: "🌙", s: "la luna" },
    { w: "CASA", syl: ["CA", "SA"], emoji: "🏠", s: "una casa" },
    { w: "SOL", syl: ["SOL"], emoji: "☀️", s: "el sol" },
    { w: "PAN", syl: ["PAN"], emoji: "🍞", s: "el pan" },
    { w: "AGUA", syl: ["A", "GUA"], emoji: "💧", s: "el agua" },
    { w: "PERRO", syl: ["PE", "RRO"], emoji: "🐕", s: "un perro" },
    { w: "FLOR", syl: ["FLOR"], emoji: "🌸", s: "una flor" },
    { w: "TAZA", syl: ["TA", "ZA"], emoji: "☕", s: "una taza" },
    { w: "MANO", syl: ["MA", "NO"], emoji: "✋", s: "mi mano" },
    { w: "NIÑO", syl: ["NI", "ÑO"], emoji: "👦", s: "un niño" },
    { w: "QUESO", syl: ["QUE", "SO"], emoji: "🧀", s: "el queso" },
    { w: "RANA", syl: ["RA", "NA"], emoji: "🐸", s: "una rana" },
    { w: "VACA", syl: ["VA", "CA"], emoji: "🐄", s: "una vaca" },
    { w: "DADO", syl: ["DA", "DO"], emoji: "🎲", s: "un dado" },
    { w: "CAMA", syl: ["CA", "MA"], emoji: "🛏️", s: "mi cama" },
    { w: "SOPA", syl: ["SO", "PA"], emoji: "🍲", s: "la sopa" },
    { w: "LOMA", syl: ["LO", "MA"], emoji: "⛰️", s: "una loma" },
    { w: "COCO", syl: ["CO", "CO"], emoji: "🥥", s: "un coco" },
    { w: "ESCUELA", syl: ["ES", "CUE", "LA"], emoji: "🏫", s: "la escuela" },
    { w: "PELO", syl: ["PE", "LO"], emoji: "💇", s: "el pelo" },
    { w: "DULCE", syl: ["DUL", "CE"], emoji: "🍬", s: "un dulce" },
    { w: "GLOBOS", syl: ["GLO", "BOS"], emoji: "🎈", s: "los globos" },
    { w: "PLATO", syl: ["PLA", "TO"], emoji: "🍚", s: "un plato" },
    { w: "TREN", syl: ["TREN"], emoji: "🚂", s: "el tren" },
    { w: "BRAZO", syl: ["BRA", "ZO"], emoji: "💪", s: "mi brazo" },
    { w: "CABELLO", syl: ["CA", "BEL", "LO"], emoji: "🧑", s: "el cabello" },
  ];

  /* ---------- ORACIONES (nivel 5) ---------- */
  const oraciones = [
    {
      t: "Mi mamá me ama.",
      emoji: "👪",
      q: "¿Quién ama al niño?",
      opts: ["Mamá 🙋", "Pato 🦆", "Luna 🌙"],
      a: 0,
    },
    {
      t: "El gato toma leche.",
      emoji: "🐱🥛",
      q: "¿Qué toma el gato?",
      opts: ["Leche 🥛", "Sopa 🍲", "Agua 💧"],
      a: 0,
    },
    {
      t: "La luna está en el cielo.",
      emoji: "🌙☁️",
      q: "¿Dónde está la luna?",
      opts: ["En la casa 🏠", "En el cielo ☁️", "En el agua 🌊"],
      a: 1,
    },
    {
      t: "El pato nada en el agua.",
      emoji: "🦆🌊",
      q: "¿Qué hace el pato?",
      opts: ["Duerme 😴", "Nada 🏊", "Vuela 🐦"],
      a: 1,
    },
    {
      t: "Mi perro corre en el parque.",
      emoji: "🐕🌳",
      q: "¿Dónde corre el perro?",
      opts: ["En el parque 🌳", "En la luna 🌙", "En el plato 🍽️"],
      a: 0,
    },
    {
      t: "El niño come pan.",
      emoji: "👦🍞",
      q: "¿Qué come el niño?",
      opts: ["Un zapato 👟", "Pan 🍞", "Una flor 🌸"],
      a: 1,
    },
    {
      t: "La vaca come hierba.",
      emoji: "🐄🌿",
      q: "¿Qué come la vaca?",
      opts: ["Queso 🧀", "Caramelos 🍬", "Hierba 🌿"],
      a: 2,
    },
    {
      t: "Mi mamá me llama.",
      emoji: "🎤",
      q: "¿Quién llama al niño?",
      opts: ["Mi mamá 👩", "El gato 🐱", "El pato 🦆"],
      a: 0,
    },
    {
      t: "El sol es muy grande.",
      emoji: "☀️",
      q: "¿Cómo es el sol?",
      opts: ["Grande ☀️", "Pequeñito 🌱", "Frío 🧊"],
      a: 0,
    },
    {
      t: "Papá lee un cuento.",
      emoji: "👨📖",
      q: "¿Qué hace papá?",
      opts: ["Duerme 😴", "Lee un cuento 📖", "Corre 🏃"],
      a: 1,
    },
  ];

  /* ---------- CUENTOS (nivel 6) ---------- */
  const cuentos = [
    {
      id: "patito",
      titulo: "El patito que no quería dormir",
      emoji: "🦆",
      paginas: [
        { t: "En una casita azul vivía un patito llamado Pío.", e: "🏠🦆" },
        { t: "Pío no quería dormir. Miraba la luna por la ventana.", e: "🦆🌙" },
        { t: "Su mamá le cantó una canción suave y bonita.", e: "🦆🎵" },
        { t: "Pío cerró los ojos y soñó con el río y los peces.", e: "😴🐟" },
        { t: "Al día siguiente jugó feliz con sus hermanos.", e: "🦆🦆🐥" },
      ],
      preguntas: [
        { q: "¿Cómo se llamaba el patito?", opts: ["Pío 🦆", "Paco 🐔", "Luna 🌙"], a: 0 },
        { q: "¿Qué miraba Pío por la ventana?", opts: ["El sol ☀️", "La luna 🌙", "Una flor 🌸"], a: 1 },
        { q: "¿Qué hizo su mamá?", opts: ["Le cantó 🎵", "Lo regañó 😠", "Se fue 🚪"], a: 0 },
      ],
    },
    {
      id: "gato",
      titulo: "El gato de la casa azul",
      emoji: "🐱",
      paginas: [
        { t: "Tomás era un gato gris que vivía en una casa azul.", e: "🐱🏠" },
        { t: "Un día vio un pájaro pequeño en el jardín.", e: "🐦🌿" },
        { t: "Tomás caminó despacio, muy despacio, hacia el pájaro.", e: "🐱🤫" },
        { t: "Pero el pájaro voló y Tomás solo vio sus plumas.", e: "🕊️😮" },
        { t: "Tomás volvió a casa y comió su comida.", e: "🐱🍲" },
      ],
      preguntas: [
        { q: "¿Quién aparece en el cuento?", opts: ["Un perro 🐕", "Tomás el gato 🐱", "Una vaca 🐄"], a: 1 },
        { q: "¿Qué vio Tomás en el jardín?", opts: ["Un pájaro 🐦", "Un pez 🐟", "Un tren 🚂"], a: 0 },
        { q: "¿Qué pasó al final?", opts: ["Tomás voló 🐦", "El pájaro se fue y Tomás comió 🍲", "Tomás se cayó 💥"], a: 1 },
      ],
    },
    {
      id: "maria",
      titulo: "María y la flor amarilla",
      emoji: "🌼",
      paginas: [
        { t: "María salió a jugar a la loma con su perro.", e: "👧🐕⛰️" },
        { t: "Allí encontró una flor amarilla muy bonita.", e: "🌼💛" },
        { t: "La cortó para regalársela a su abuela.", e: "👧💐" },
        { t: "Su abuela la abrazó y le dijo gracias.", e: "👵👧" },
        { t: "María quedó feliz en su casa.", e: "😊🏠" },
      ],
      preguntas: [
        { q: "¿Qué encontró María?", opts: ["Una flor amarilla 🌼", "Un pájaro 🐦", "Un dado 🎲"], a: 0 },
        { q: "¿Para quién fue la flor?", opts: ["Para su abuela 👵", "Para su perro 🐕", "Para el gato 🐱"], a: 0 },
        { q: "¿Cómo quedó María?", opts: ["Triste 😢", "Feliz 😊", "Enojada 😠"], a: 1 },
      ],
    },
    {
      id: "rana",
      titulo: "La rana saltadora",
      emoji: "🐸",
      paginas: [
        { t: "Rita era una rana verde que saltaba todo el día.", e: "🐸💚" },
        { t: "Saltaba sobre las piedras del río.", e: "🐸⛰️" },
        { t: "Un día se encontró con una tortuga lenta.", e: "🐢" },
        { t: "Rita aprendió a ir despacio y a mirar el mundo.", e: "🐸🌳" },
        { t: "Al final, saltó contenta a su loma.", e: "🐸⛰️" },
      ],
      preguntas: [
        { q: "¿Qué hacía Rita todo el día?", opts: ["Saltaba 🐸", "Dormía 😴", "Volaba 🐦"], a: 0 },
        { q: "¿A quién encontró?", opts: ["Un pato 🦆", "Una tortuga 🐢", "Un gato 🐱"], a: 1 },
        { q: "¿Qué aprendió Rita?", opts: ["A comer 🍽️", "A ir despacio y mirar 🌳", "A gritar 📢"], a: 1 },
      ],
    },
  ];

  /* ---------- PALABRAS PARA JUEGOS DE SONIDO ---------- */
  const objetos = [
    { w: "MESA", emoji: "🍽️" },
    { w: "GATO", emoji: "🐱" },
    { w: "PATO", emoji: "🦆" },
    { w: "LUNA", emoji: "🌙" },
    { w: "CASA", emoji: "🏠" },
    { w: "SOL", emoji: "☀️" },
    { w: "PERRO", emoji: "🐕" },
    { w: "FLOR", emoji: "🌸" },
    { w: "QUESO", emoji: "🧀" },
    { w: "RANA", emoji: "🐸" },
    { w: "VACA", emoji: "🐄" },
    { w: "DADO", emoji: "🎲" },
    { w: "NUBE", emoji: "☁️" },
    { w: "MANO", emoji: "✋" },
    { w: "PAN", emoji: "🍞" },
    { w: "AGUA", emoji: "💧" },
    { w: "TAZA", emoji: "☕" },
    { w: "PLATO", emoji: "🍚" },
    { w: "TREN", emoji: "🚂" },
    { w: "GLOBOS", emoji: "🎈" },
    { w: "ZAPATO", emoji: "👟" },
    { w: "CAMA", emoji: "🛏️" },
    { w: "MANZANA", emoji: "🍎" },
    { w: "ELEFANTE", emoji: "🐘" },
    { w: "OSO", emoji: "🐻" },
    { w: "UVA", emoji: "🍇" },
    { w: "ISLA", emoji: "🏝️" },
    { w: "KOALA", emoji: "🐨" },
    { w: "JIRAFA", emoji: "🦒" },
    { w: "HELADO", emoji: "🍦" },
  ];

  /* ---------- NIVELES / MUNDOS ---------- */
  const niveles = [
    {
      id: 1,
      key: "vocales",
      nombre: "Bosque de las Vocales",
      icono: "🌳",
      color: "#3fa34d",
      colorClaro: "#e3f6e6",
      descripcion: "A, E, I, O, U",
      min: 0.7,
    },
    {
      id: 2,
      key: "consonantes",
      nombre: "Montaña de las Consonantes",
      icono: "⛰️",
      color: "#2f80ed",
      colorClaro: "#e2edfd",
      descripcion: "M, P, S, L, T y las demás letras",
      min: 0.7,
    },
    {
      id: 3,
      key: "silabas",
      nombre: "Fábrica de las Sílabas",
      icono: "🏭",
      color: "#f2994a",
      colorClaro: "#fdefe1",
      descripcion: "MA, ME, MI, MO, MU...",
      min: 0.7,
    },
    {
      id: 4,
      key: "palabras",
      nombre: "Ciudad de las Palabras",
      icono: "🏙️",
      color: "#bb6bd9",
      colorClaro: "#f5e9fb",
      descripcion: "MAMÁ, PAPÁ, MESA, PATO...",
      min: 0.7,
    },
    {
      id: 5,
      key: "oraciones",
      nombre: "Camino de las Oraciones",
      icono: "🛤️",
      color: "#eb5757",
      colorClaro: "#fde8e8",
      descripcion: "Leer y entender frases",
      min: 0.7,
    },
    {
      id: 6,
      key: "cuentos",
      nombre: "Biblioteca Mágica",
      icono: "📚",
      color: "#2d9cdb",
      colorClaro: "#e2f3fd",
      descripcion: "Cuentos con preguntas",
      min: 0.7,
    },
  ];

  /* ---------- REDES, INSIGNIAS Y FRASES ---------- */
  /* ----------------------------------------------------------
     MATEMÁTICAS
     Currículo propio con progreso SEPARADO de lectura: los ids
     son "m1".."m6" para que nunca se mezclen con los niveles
     de lectura (1..6) en el mapa de progreso del navegador.
     ---------------------------------------------------------- */
  const mateNiveles = [
    {
      id: "m1",
      key: "numeros1",
      nombre: "Isla de los Números",
      icono: "🔢",
      color: "#4cc9f0",
      colorClaro: "#e2f4fd",
      descripcion: "Contar y reconocer los números del 1 al 5",
    },
    {
      id: "m2",
      key: "numeros2",
      nombre: "Playa de los Números",
      icono: "🏖️",
      color: "#06d6a0",
      colorClaro: "#ddf7ef",
      descripcion: "Los números del 6 al 10 y la recta numérica",
    },
    {
      id: "m3",
      key: "sumas",
      nombre: "Bosque de las Sumas",
      icono: "🌴",
      color: "#f79d3c",
      colorClaro: "#fdefdd",
      descripcion: "Sumar juntando objetos paso a paso",
    },
    {
      id: "m4",
      key: "restas",
      nombre: "Cascada de las Restas",
      icono: "💦",
      color: "#3f8ede",
      colorClaro: "#e1edfb",
      descripcion: "Restar quitando objetos",
    },
    {
      id: "m5",
      key: "figuras",
      nombre: "Castillo de las Figuras",
      icono: "🏰",
      color: "#a45fd0",
      colorClaro: "#f3e7fb",
      descripcion: "Figuras geométricas y patrones",
    },
    {
      id: "m6",
      key: "desafios",
      nombre: "Puente de los Desafíos",
      icono: "🌉",
      color: "#ef476f",
      colorClaro: "#fce5eb",
      descripcion: "Sumas, restas y problemas hasta el 10",
    },
  ];

  /* Emojis para contar y representar cantidades (frutas, animales,
     objetos cotidianos: todos familiares para un niño de 7 años) */
  const emojisMate = {
    frutas: ["🍎", "🍐", "🍊", "🍓", "🍌", "🍇", "🍉", "🥝"],
    animales: ["🐶", "🐱", "🐰", "🐸", "🐻", "🐼", "🦁", "🐮"],
    objetos: ["🎈", "⚽", "🧸", "🚗", "🎈", "🎨", "🚩", "🔑"],
  };
  const emojisMateTodos = emojisMate.frutas.concat(emojisMate.animales, emojisMate.objetos);

  /* Figuras geométricas: SVG simple sobre viewBox 0 0 80 80.
     Todas se dibujan con el mismo grosor y color por CSS para
     que el niño compare FORMAS, no colores.                    */
  const figuras = [
    { id: "circulo", nombre: "círculo", svg: '<circle cx="40" cy="40" r="31" />' },
    { id: "cuadrado", nombre: "cuadrado", svg: '<rect x="10" y="10" width="60" height="60" />' },
    { id: "triangulo", nombre: "triángulo", svg: '<polygon points="40,9 73,71 7,71" />' },
    { id: "rectangulo", nombre: "rectángulo", svg: '<rect x="4" y="20" width="72" height="40" />' },
    { id: "estrella", nombre: "estrella", svg: '<polygon points="40,6 49,30 74,30 54,45 61,70 40,55 19,70 26,45 6,30 31,30" />' },
    { id: "rombo", nombre: "rombo", svg: '<polygon points="40,6 74,40 40,74 6,40" />' },
  ];

  /* Elementos para armar patrones visuales */
  const patronesElem = ["🔴", "🔵", "🟡", "🟢", "🟣", "⭐"];

  /* Personajes y objetos de los problemas (situaciones cotidianas) */
  const problemasMate = [
    { quien: "Sara", objeto: "🍎", nombreObj: "manzanas" },
    { quien: "Tomás", objeto: "🐶", nombreObj: "cachorros" },
    { quien: "Luna", objeto: "🎈", nombreObj: "globos" },
    { quien: "Nico", objeto: "🍓", nombreObj: "fresas" },
    { quien: "Vale", objeto: "⚽", nombreObj: "balones" },
    { quien: "Simón", objeto: "🦆", nombreObj: "paticos" },
  ];

  const elogios = [
    "¡Muy bien! Lo hiciste excelente.",
    "¡Qué bien! Eres increíble.",
    "¡Excelente! Sigue así.",
    "¡Muy bien! Estás aprendiendo muy rápido.",
    "¡Perfecto! Lo lograste.",
    "¡Eso es! Eres un campeón.",
  ];

  const animos = [
    "No pasa nada, vamos a intentarlo otra vez.",
    "Casi lo tienes, escucha otra vez con atención.",
    "Ups, esa no era. Vamos otra vez, tú puedes.",
    "No te preocupes, equivocarse también se aprende.",
    "Tranquilo, respira hondo y prueba otra vez.",
  ];

  const pistas = [
    "Mira con calma, todas las opciones están ahí.",
    "Escucha el audio otra vez, te va a ayudar.",
    "Piensa en la imagen que viste antes.",
    "Prueba poco a poco, sin prisa.",
  ];

  /* Insignias por hitos */
  const insignias = [
    { id: "vocales", nombre: "Guardián de las Vocales", icono: "🌳", desc: "Terminó el Bosque de las Vocales" },
    { id: "consonantes", nombre: "Escalador de Letras", icono: "⛰️", desc: "Terminó la Montaña de las Consonantes" },
    { id: "silabas", nombre: "Maestro de Sílabas", icono: "🏭", desc: "Terminó la Fábrica de las Sílabas" },
    { id: "palabras", nombre: "Constructor de Palabras", icono: "🏙️", desc: "Terminó la Ciudad de las Palabras" },
    { id: "oraciones", nombre: "Lector de Oraciones", icono: "🛤️", desc: "Terminó el Camino de las Oraciones" },
    { id: "cuentos", nombre: "Cuentacuentos", icono: "📚", desc: "Terminó la Biblioteca Mágica" },
    { id: "estrellas50", nombre: "Medalla de 50 estrellas", icono: "🌟", desc: "Reunió 50 estrellas" },
    { id: "estrellas100", nombre: "Medalla de 100 estrellas", icono: "🏆", desc: "Reunió 100 estrellas" },
    { id: "escriba", nombre: "Escriba Dedicado", icono: "✍️", desc: "Completó 10 trazos de letras" },
    { id: "oyente", nombre: "Oído de Oro", icono: "👂", desc: "Respondió 20 actividades de escucha" },
    { id: "numeros1", nombre: "Explorador de Números", icono: "🔢", desc: "Terminó la Isla de los Números" },
    { id: "numeros2", nombre: "Nadador de Cifras", icono: "🏖️", desc: "Terminó la Playa de los Números" },
    { id: "sumas", nombre: "Maestro de las Sumas", icono: "🌴", desc: "Terminó el Bosque de las Sumas" },
    { id: "restas", nombre: "Salto de la Cascada", icono: "💦", desc: "Terminó la Cascada de las Restas" },
    { id: "figuras", nombre: "Arquitecto de Formas", icono: "🏰", desc: "Terminó el Castillo de las Figuras" },
    { id: "desafios", nombre: "Campeón del Puente", icono: "🌉", desc: "Terminó el Puente de los Desafíos" },
  ];

  /* Animales que se desbloquean con estrellas */
  const animales = [
    { id: "rd", nombre: "Ratón Danilo", icono: "🐭", costo: 0 },
    { id: "pp", nombre: "Patito Pepito", icono: "🦆", costo: 5 },
    { id: "gg", nombre: "Gatito Guapo", icono: "🐱", costo: 12 },
    { id: "ll", nombre: "Loro Lulo", icono: "🦜", costo: 25 },
    { id: "oo", nombre: "Oso Omid", icono: "🐻", costo: 40 },
    { id: "jj", nombre: "Jirafa Julia", icono: "🦒", costo: 60 },
    { id: "ee", nombre: "Elefante Emilio", icono: "🐘", costo: 85 },
    { id: "bb", nombre: "Ballena Bella", icono: "🐳", costo: 110 },
  ];

  /* Sombreros / accesorios para personalizar al guía */
  const accesorios = [
    { id: "ninguno", nombre: "Sin sombrero", icono: "—" },
    { id: "gorro", nombre: "Gorro rojo", icono: "🧢" },
    { id: "sombrero", nombre: "Sombrero", icono: "🎩" },
    { id: "flor", nombre: "Flor", icono: "🌸" },
    { id: "estrella", nombre: "Estrella", icono: "⭐" },
    { id: "corona", nombre: "Corona", icono: "👑" },
  ];

  /* Instrucciones habladas reutilizables */
  const frases = {
    bienvenida: "¡Hola! Soy Kiko, tu amigo loro. Hoy vamos a descubrir letras, números y nuevas ideas jugando. ¡Tú marcas el ritmo! Toca el botón grande cuando quieras comenzar.",
    bienvenida2: "¡Qué alegría verte otra vez! Tu aventura continúa justo donde la dejaste. ¡Vamos por el siguiente descubrimiento!",
    escucha: "¡Orejas atentas! Escucha y luego inténtalo tú.",
    repetirAudio: "¿Lo escuchamos otra vez? Toca aquí y lo repetimos juntos.",
    ayuda: "¿Quieres una pista? Mírala con calma: equivocarse también es aprender.",
    ejemplo: "Mira este ejemplo y después prueba con tus propias ideas.",
    casi: "¡Casi, casi! Vamos a mirar la pista y a probar una vez más.",
    finActividad: "¡Reto cumplido! Ganaste una estrella por tu esfuerzo.",
    pausa: "¿Listo para continuar? Respira, sonríe y toca el botón.",
  };

  /* ----------------------------------------------------------
     Ayudas para hablar correctamente el sonido de cada letra.
     Evita que el niño añada una vocal al final («puh» → «p»)
     y explica las letras que cambian de sonido (C y G).
     ---------------------------------------------------------- */
  function buscarInfo(l) {
    return vocales.find((v) => v.l === l) || consonantes.find((c) => c.l === l) || null;
  }

  /* Texto corto: cómo suena la letra, de forma clara y breve */
  function textoSonido(l) {
    const info = buscarInfo(l);
    if (!info) return "";
    if (info.tipo === "oclusiva") {
      /* Importante: la vocal se pega a la sílaba, no se añade al sonido.
         Ejemplo: P suena dentro de PA, PE, PI... cortito.          */
      return "Suena cortito y pegado a la vocal. No le agregues otra vocal: se une a la sílaba y ya.";
    }
    if (info.tipo === "variable") {
      return info.nota || info.sound;
    }
    if (info.tipo === "silenciosa") {
      return "Esta letra no suena. Solo está ahí dentro de la palabra.";
    }
    return "Suena " + info.sound + ".";
  }

  /* Audio completo de una letra para la actividad «explorar» */
  function audioLetra(l) {
    const info = buscarInfo(l);
    if (!info) return "";
    const partes = ["La letra " + info.l + "."];
    if (info.tipo === "oclusiva" || info.tipo === "variable") {
      /* Demostración con sílabas: la forma correcta de enseñar estas letras.
         Para variable, textoSonido ya incluye la nota (C y G), no repetir. */
      const fam = familiaDe(info.l);
      partes.push(textoSonido(l));
      if (fam) partes.push("Escucha la letra con cada vocal: " + fam.silabas.join(", ") + ".");
    } else {
      partes.push(textoSonido(l));
    }
    partes.push("Como en " + info.word + ".");
    if (info.l !== info.low) partes.push("En minúscula es " + info.low + ".");
    return partes.join(" ");
  }

  function familiaDe(cons) {
    const fam = familias.find((f) => f.cons === cons);
    if (fam) return fam;
    /* Sílabas generadas para las consonantes sin familia propia */
    if (cons === "H") return null; // la H no suena, no tiene sílabas propias
    if (cons === "Q") return { cons: "Q", silabas: ["QUE", "QUI"], generada: true };
    if (cons === "G") return familias.find((f) => f.cons === "G");
    return { cons: cons, silabas: ["A", "E", "I", "O", "U"].map((v) => cons + v), generada: true };
  }

  return {
    vocales,
    consonantes,
    confundibles,
    familias,
    silabasInversas,
    silabasTrabadas,
    combinaciones,
    palabras,
    oraciones,
    cuentos,
    objetos,
    niveles,
    mateNiveles,
    emojisMate,
    emojisMateTodos,
    figuras,
    patronesElem,
    problemasMate,
    elogios,
    animos,
    pistas,
    insignias,
    animales,
    accesorios,
    frases,
    textoSonido,
    audioLetra,
    familiaDe,
  };
})();
