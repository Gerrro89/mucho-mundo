/* =========================================================
   WEB LEER — Mi Aventurero: catálogo de accesorios
   ---------------------------------------------------------
   Datos puros (sin lógica ni DOM) para poder ampliar el
   personaje añadiendo objetos aquí y nada más.

   Cada accesorio:
     id          identificador único
     nombre      nombre corto para el niño
     categoria   a qué capa pertenece
     descripcion texto breve y amable
     svg         ilustración en el mismo espacio de
                coordenadas que el personaje (viewBox 0 0 200 300)
     rareza      solo decorativa: comun | especial | legendario
     condicion   cómo se desbloquea (la evalúa AV_MISIONES)

   Las coordenadas de todas las piezas están calculadas sobre
   el personaje base: cabeza (100,68) r38, torso 66..134 x
   106..200, piernas 72..128 x 190..278, manos (54,192) y
   (146,192), pies (84,276) y (116,276).
   ========================================================= */

window.AV_ACCESORIOS = (function () {
  "use strict";

  /* ---------------------------------------------------------
     Categorías. `capa` = orden de dibujo (menor = detrás).
     `exclusivo` = solo uno de esa categoría a la vez.
     --------------------------------------------------------- */
  const CATEGORIAS = [
    { id: "mochila", nombre: "Mochilas", icono: "🎒", capa: 1 },
    { id: "capa", nombre: "Capas", icono: "🧣", capa: 2 },
    { id: "inferior", nombre: "Pantalones", icono: "👖", capa: 3 },
    { id: "superior", nombre: "Camisetas", icono: "👕", capa: 4 },
    { id: "zapatos", nombre: "Zapatos", icono: "👟", capa: 5 },
    { id: "pelo", nombre: "Pelo", icono: "💇", capa: 6 },
    { id: "gafas", nombre: "Gafas", icono: "👓", capa: 7 },
    { id: "sombrero", nombre: "Sombreros", icono: "🎩", capa: 8 },
    { id: "especial", nombre: "Especiales", icono: "✨", capa: 9 },
    { id: "decorativo", nombre: "Decoración", icono: "🌟", capa: 10 },
  ];

  const RAREZAS = {
    comun: { nombre: "Común", color: "#8fb3c9" },
    especial: { nombre: "Especial", color: "#f2994a" },
    legendario: { nombre: "Legendario", color: "#9b51e0" },
  };

  /* Condiciones de desbloqueo admitidas (las evalúa AV_MISIONES):
     { tipo:"misiones", n }                 misiones del aventurero completadas
     { tipo:"aciertos", claves:[], n }       aciertos en esas actividades
     { tipo:"nivel", id, dominio }          dominio real de un nivel
     { tipo:"trazos", n }                   letras trazadas
     { tipo:"escuchas", n }                 frases/cuentos escuchados
     { tipo:"estrellas", n }                estrellas del perfil
     { tipo:"areas", areas:[], n }          misiones de áreas distintas
     { tipo:"repaso", clave, n }            aciertos en una clave que le cuesta
  */

  /* ---------------------------------------------------------
     Catálogo
     --------------------------------------------------------- */
  const LISTA = [
    /* ---------------- MOCHILAS (capa 1, detrás) ---------------- */
    {
      id: "mochila-simple",
      nombre: "Mochila",
      categoria: "mochila",
      descripcion: "Una mochilita para llevar tus cosas.",
      rareza: "comun",
      condicion: { tipo: "actividades", area: "lectura", n: 2 },
      svg:
        '<rect x="22" y="120" width="34" height="58" rx="13" fill="#f2994a"/>' +
        '<rect x="29" y="134" width="20" height="15" rx="6" fill="#e08b2e"/>' +
        '<path d="M36 120 q0 -12 10 -12" stroke="#c9761f" stroke-width="5" fill="none" stroke-linecap="round"/>',
    },
    {
      id: "mochila-explorador",
      nombre: "Mochila de explorador",
      categoria: "mochila",
      descripcion: "Con rolledo y una brújula. ¡Lista para largas rutas!",
      rareza: "legendario",
      condicion: { tipo: "nivel", id: 4, dominio: 0.7 },
      svg:
        '<rect x="18" y="122" width="38" height="60" rx="14" fill="#8b5e3c"/>' +
        '<rect x="26" y="138" width="22" height="16" rx="6" fill="#6b4630"/>' +
        '<rect x="24" y="108" width="26" height="12" rx="6" fill="#ffd166"/>' +
        '<path d="M32 122 q0 -14 12 -14" stroke="#6b4630" stroke-width="5" fill="none" stroke-linecap="round"/>',
    },

    /* ---------------- CAPAS (capa 2, detrás del cuerpo) ---------------- */
    {
      id: "capa-roja",
      nombre: "Capa roja",
      categoria: "capa",
      descripcion: "Capa de héroe para los días grandes.",
      rareza: "comun",
      condicion: { tipo: "misiones", n: 5, excluirArea: "aventura" },
      svg:
        '<path d="M74 108 q26 12 52 0 l16 146 q-42 14 -84 0z" fill="#ef476f" opacity="0.95"/>' +
        '<path d="M100 118 l10 136 h-20z" fill="#d62f57" opacity="0.6"/>',
    },
    {
      id: "capa-azul",
      nombre: "Capa azul",
      categoria: "capa",
      descripcion: "Azul como el cielo de las estrellas.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["story"], n: 8 },
      svg:
        '<path d="M74 108 q26 12 52 0 l16 146 q-42 14 -84 0z" fill="#2f80ed" opacity="0.95"/>' +
        '<path d="M100 118 l10 136 h-20z" fill="#1f5fae" opacity="0.6"/>',
    },
    {
      id: "capa-alada",
      nombre: "Capa alada",
      categoria: "capa",
      descripcion: "Con alas. ¡Vuelas si te lo propones!",
      rareza: "legendario",
      condicion: { tipo: "aciertos", claves: ["problem", "missing", "pattern"], n: 12 },
      svg:
        '<path d="M64 126 q-34 -22 -44 4 q22 10 34 26z" fill="#ffffff" stroke="#cfe3f0" stroke-width="2"/>' +
        '<path d="M136 126 q34 -22 44 4 q-22 10 -34 26z" fill="#ffffff" stroke="#cfe3f0" stroke-width="2"/>' +
        '<path d="M74 108 q26 12 52 0 l16 146 q-42 14 -84 0z" fill="#ffd166" opacity="0.92"/>',
    },

    /* ---------------- PANTALONES (capa 3) ---------------- */
    {
      id: "pantalon",
      nombre: "Pantalón",
      categoria: "inferior",
      descripcion: "El pantalón de siempre, cómodo y fácil.",
      rareza: "comun",
      condicion: { tipo: "misiones", n: 2, excluirArea: "aventura" },
      svg:
        '<path d="M70 186 h60 v40 l-7 52 h-20 l-3 -38 -3 38 h-20 l-7 -52z" fill="#2d3142"/>',
    },
    {
      id: "vaqueros",
      nombre: "Vaqueros",
      categoria: "inferior",
      descripcion: "Jeans con pespunte y muchos bolsillos.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["count", "tenframe", "shapecount"], n: 12 },
      svg:
        '<path d="M70 186 h60 v40 l-7 52 h-20 l-3 -38 -3 38 h-20 l-7 -52z" fill="#4cc9f0"/>' +
        '<path d="M100 190 v34" stroke="#2f80ed" stroke-width="3"/>' +
        '<rect x="74" y="196" width="14" height="12" rx="3" fill="#2f80ed"/>' +
        '<rect x="112" y="196" width="14" height="12" rx="3" fill="#2f80ed"/>',
    },
    {
      id: "falda",
      nombre: "Falda",
      categoria: "inferior",
      descripcion: "Falda con vuelo. ¡Muy cómoda para correr!",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["compare", "ordernums", "beforeafter", "numberline"], n: 10 },
      svg:
        '<path d="M66 186 h68 l12 48 q-46 12 -92 0z" fill="#eb5757"/>' +
        '<path d="M66 186 h68 v10 h-68z" fill="#c7433c"/>',
    },

    /* ---------------- CAMISETAS (capa 4) ---------------- */
    {
      id: "camiseta-verde",
      nombre: "Camiseta verde",
      categoria: "superior",
      descripcion: "La camiseta de siempre, verde y comfy.",
      rareza: "comun",
      condicion: { tipo: "misiones", n: 1, excluirArea: "aventura" },
      svg:
        '<rect x="44" y="112" width="24" height="46" rx="12" fill="#06d6a0"/>' +
        '<rect x="132" y="112" width="24" height="46" rx="12" fill="#06d6a0"/>' +
        '<rect x="64" y="104" width="72" height="98" rx="20" fill="#06d6a0"/>' +
        '<path d="M86 104 q14 14 28 0" stroke="#04a87f" stroke-width="4" fill="none"/>',
    },
    {
      id: "camiseta-azul",
      nombre: "Camiseta azul",
      categoria: "superior",
      descripcion: "Azul celeste, como un día sin nubes.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["explorar", "find-letter", "letter-object"], n: 12 },
      svg:
        '<rect x="44" y="112" width="24" height="46" rx="12" fill="#4cc9f0"/>' +
        '<rect x="132" y="112" width="24" height="46" rx="12" fill="#4cc9f0"/>' +
        '<rect x="64" y="104" width="72" height="98" rx="20" fill="#4cc9f0"/>' +
        '<circle cx="100" cy="140" r="13" fill="#e8f7ff"/>',
    },
    {
      id: "chaleco-explorador",
      nombre: "Chaleco de explorador",
      categoria: "superior",
      descripcion: "Con bolsillos para llevar mapas y lápices.",
      rareza: "especial",
      condicion: { tipo: "aciertos", claves: ["build-word", "fill-word", "order-syl"], n: 12 },
      svg:
        '<rect x="44" y="112" width="24" height="46" rx="12" fill="#f2994a"/>' +
        '<rect x="132" y="112" width="24" height="46" rx="12" fill="#f2994a"/>' +
        '<rect x="64" y="104" width="72" height="98" rx="20" fill="#f2994a"/>' +
        '<rect x="70" y="146" width="24" height="20" rx="5" fill="#e08b2e"/>' +
        '<rect x="106" y="146" width="24" height="20" rx="5" fill="#e08b2e"/>' +
        '<rect x="74" y="114" width="52" height="8" rx="4" fill="#e08b2e"/>',
    },
    {
      id: "sudadera",
      nombre: "Sudadera",
      categoria: "superior",
      descripcion: "Con capucha y mangas largas. Abriga muchísimo.",
      rareza: "comun",
      condicion: { tipo: "trazos", n: 8 },
      svg:
        '<rect x="42" y="110" width="26" height="62" rx="13" fill="#9b51e0"/>' +
        '<rect x="132" y="110" width="26" height="62" rx="13" fill="#9b51e0"/>' +
        '<rect x="64" y="104" width="72" height="98" rx="20" fill="#9b51e0"/>' +
        '<path d="M78 106 q22 -18 44 0 q-22 12 -44 0z" fill="#7c3aad"/>' +
        '<rect x="86" y="164" width="28" height="18" rx="6" fill="#7c3aad"/>',
    },

    /* ---------------- ZAPATOS (capa 5) ---------------- */
    {
      id: "zapatillas",
      nombre: "Zapatillas",
      categoria: "zapatos",
      descripcion: "Ligeras y cómodas para correr mucho.",
      rareza: "comun",
      condicion: { tipo: "misiones", n: 3, excluirArea: "aventura" },
      svg:
        '<path d="M68 258 h30 q8 0 8 9 v10 q0 6 -8 6 h-30 q-6 0 -6 -6 v-13q0 -6 6 -6z" fill="#ffffff" stroke="#cfe3f0" stroke-width="2"/>' +
        '<path d="M132 258 h-30 q-8 0 -8 9 v10 q0 6 8 6 h30 q6 0 6 -6 v-13q0 -6 -6 -6z" fill="#ffffff" stroke="#cfe3f0" stroke-width="2"/>' +
        '<path d="M74 264 h20" stroke="#4cc9f0" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M126 264 h-20" stroke="#4cc9f0" stroke-width="4" stroke-linecap="round"/>',
    },
    {
      id: "botas",
      nombre: "Botas",
      categoria: "zapatos",
      descripcion: "Botas marrones que aguantan el barro.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["add", "addvisual", "sub", "subvisual"], n: 15 },
      svg:
        '<path d="M70 240 h26 v34 q0 9 -10 9 h-20 q-6 0 -6 -6 v-27q0 -10 10 -10z" fill="#8b5e3c"/>' +
        '<path d="M130 240 h-26 v34 q0 9 10 9 h20 q6 0 6 -6 v-27q0 -10 -10 -10z" fill="#8b5e3c"/>' +
        '<rect x="68" y="248" width="30" height="7" rx="3" fill="#6b4630"/>' +
        '<rect x="102" y="248" width="30" height="7" rx="3" fill="#6b4630"/>',
    },
    {
      id: "botas-aventurero",
      nombre: "Botas de aventurero",
      categoria: "zapatos",
      descripcion: "Botas altas con cordones y hebillas.",
      rareza: "especial",
      condicion: { tipo: "nivel", id: "m3", dominio: 0.7 },
      svg:
        '<path d="M70 232 h26 v42 q0 9 -10 9 h-20 q-6 0 -6 -6 v-35q0 -10 10 -10z" fill="#f2994a"/>' +
        '<path d="M130 232 h-26 v42 q0 9 10 9 h20 q6 0 6 -6 v-35q0 -10 -10 -10z" fill="#f2994a"/>' +
        '<path d="M72 244 h22M72 254 h22" stroke="#c9761f" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M128 244 h-22M128 254 h-22" stroke="#c9761f" stroke-width="4" stroke-linecap="round"/>' +
        '<rect x="74" y="228" width="18" height="8" rx="3" fill="#ffd166"/>' +
        '<rect x="108" y="228" width="18" height="8" rx="3" fill="#ffd166"/>',
    },
    {
      id: "sandalias",
      nombre: "Sandalias",
      categoria: "zapatos",
      descripcion: "Frescas y cómodas para los días de sol.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["shapes"], n: 12 },
      svg:
        '<path d="M66 272 h34 q6 0 6 6 q0 5 -6 5 h-34 q-5 0 -5 -5 q0 -6 5 -6z" fill="#ffd166"/>' +
        '<path d="M134 272 h-34 q-6 0 -6 6 q0 5 6 5 h34 q5 0 5 -5 q0 -6 -5 -6z" fill="#ffd166"/>' +
        '<path d="M74 272 l10 -12" stroke="#e0a800" stroke-width="5" stroke-linecap="round"/>' +
        '<path d="M126 272 l-10 -12" stroke="#e0a800" stroke-width="5" stroke-linecap="round"/>',
    },

    /* ---------------- PELO (capa 6) ---------------- */
    {
      id: "pelo-corto",
      nombre: "Pelo corto",
      categoria: "pelo",
      descripcion: "Corto y fácil de peinar.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["letter-object"], n: 10 },
      svg:
        '<path d="M62 70 q0 -44 38 -44 q38 0 38 44 q-4 -22 -16 -28 q-4 16 -22 16 q-20 0 -24 -14 q-8 6 -14 26z" fill="#4a3728"/>',
    },
    {
      id: "pelo-largo",
      nombre: "Pelo largo",
      categoria: "pelo",
      descripcion: "Largo hasta los hombros.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["syllable-listen", "letter-object", "pick-image"], n: 12 },
      svg:
        '<path d="M62 70 q0 -44 38 -44 q38 0 38 44 q-4 -22 -16 -28 q-4 16 -22 16 q-20 0 -24 -14 q-8 6 -14 26z" fill="#8b5e3c"/>' +
        '<path d="M60 66 q-6 44 2 64 q-12 -6 -14 -30 q-2 -20 12 -34z" fill="#8b5e3c"/>' +
        '<path d="M140 66 q6 44 -2 64 q12 -6 14 -30 q2 -20 -12 -34z" fill="#8b5e3c"/>',
    },
    {
      id: "pelo-rizos",
      nombre: "Pelo rizado",
      categoria: "pelo",
      descripcion: "Rizado y con mucho volumen.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["bd", "follow"], n: 10 },
      svg:
        '<circle cx="68" cy="52" r="14" fill="#2d3142"/>' +
        '<circle cx="86" cy="34" r="15" fill="#2d3142"/>' +
        '<circle cx="108" cy="28" r="15" fill="#2d3142"/>' +
        '<circle cx="130" cy="38" r="14" fill="#2d3142"/>' +
        '<circle cx="140" cy="58" r="12" fill="#2d3142"/>' +
        '<circle cx="58" cy="72" r="11" fill="#2d3142"/>',
    },
    {
      id: "pelo-trenzas",
      nombre: "Trenzas",
      categoria: "pelo",
      descripcion: "Dos trenzas con lazadas.",
      rareza: "especial",
      condicion: { tipo: "aciertos", claves: ["type-word"], n: 12 },
      svg:
        '<path d="M62 70 q0 -44 38 -44 q38 0 38 44 q-4 -22 -16 -28 q-4 16 -22 16 q-20 0 -24 -14 q-8 6 -14 26z" fill="#c9761f"/>' +
        '<circle cx="56" cy="82" r="9" fill="#c9761f"/><circle cx="56" cy="98" r="8" fill="#c9761f"/>' +
        '<circle cx="58" cy="112" r="7" fill="#c9761f"/><circle cx="60" cy="124" r="6" fill="#c9761f"/>' +
        '<circle cx="144" cy="82" r="9" fill="#c9761f"/><circle cx="144" cy="98" r="8" fill="#c9761f"/>' +
        '<circle cx="142" cy="112" r="7" fill="#c9761f"/><circle cx="140" cy="124" r="6" fill="#c9761f"/>',
    },

    /* ---------------- GAFAS (capa 7) ---------------- */
    {
      id: "gafas-redondas",
      nombre: "Gafas redondas",
      categoria: "gafas",
      descripcion: "Redondas, de las de detective.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["initial-sound", "final-sound"], n: 12 },
      svg:
        '<circle cx="85" cy="64" r="11" fill="#d8f1ff" stroke="#2d3142" stroke-width="2.6"/>' +
        '<circle cx="115" cy="64" r="11" fill="#d8f1ff" stroke="#2d3142" stroke-width="2.6"/>' +
        '<path d="M96 63 q4 -3 8 0" stroke="#2d3142" stroke-width="2.6" fill="none"/>' +
        '<path d="M74 62 l-9 -3M126 62 l9 -3" stroke="#2d3142" stroke-width="2.6" stroke-linecap="round"/>',
    },
    {
      id: "gafas-sol",
      nombre: "Gafas de sol",
      categoria: "gafas",
      descripcion: "Oscuritas para los días de sol.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["pick-image"], n: 10 },
      svg:
        '<rect x="70" y="54" width="30" height="20" rx="8" fill="#2d3142"/>' +
        '<rect x="100" y="54" width="30" height="20" rx="8" fill="#2d3142"/>' +
        '<path d="M100 60 q0 -3 0 -6M100 62 h0" stroke="#2d3142" stroke-width="3"/>' +
        '<path d="M74 58 l12 8" stroke="#4cc9f0" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M106 58 l12 8" stroke="#4cc9f0" stroke-width="3" stroke-linecap="round"/>',
    },
    {
      id: "gafas-aventurero",
      nombre: "Gafas de aventurero",
      categoria: "gafas",
      descripcion: "Con visera para el sol del desierto.",
      rareza: "especial",
      condicion: { tipo: "aciertos", claves: ["shapes", "shapecount", "pattern"], n: 12 },
      svg:
        '<rect x="68" y="52" width="34" height="22" rx="9" fill="#a8e6ff" stroke="#2f80ed" stroke-width="3"/>' +
        '<rect x="98" y="52" width="34" height="22" rx="9" fill="#a8e6ff" stroke="#2f80ed" stroke-width="3"/>' +
        '<path d="M66 50 h68 q4 0 4 4 t-4 4 h-68 q-4 0 -4 -4 t4 -4z" fill="#ffd166"/>',
    },

    /* ---------------- SOMBREROS (capa 8) ---------------- */
    {
      id: "gorro-explorador",
      nombre: "Gorro de explorador",
      categoria: "sombrero",
      descripcion: "El gorro clásico de las expediciones.",
      rareza: "comun",
      condicion: { tipo: "misiones", n: 4, excluirArea: "aventura" },
      svg:
        '<path d="M64 46 q36 -36 72 0z" fill="#ef476f"/>' +
        '<rect x="52" y="42" width="96" height="12" rx="6" fill="#d62f57"/>' +
        '<circle cx="100" cy="12" r="9" fill="#ffd166"/>',
    },
    {
      id: "sombrero-aventurero",
      nombre: "Sombrero de aventurero",
      categoria: "sombrero",
      descripcion: "Ancho, para el sol y la aventura.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["problem", "missing"], n: 10 },
      svg:
        '<ellipse cx="100" cy="46" rx="62" ry="11" fill="#8b5e3c"/>' +
        '<path d="M76 44 q24 -38 48 0z" fill="#a9714b"/>' +
        '<rect x="78" y="30" width="44" height="11" fill="#f2994a"/>',
    },
    {
      id: "casco",
      nombre: "Casco",
      categoria: "sombrero",
      descripcion: "Casco de obra. ¡Cuidado con la cabeza!",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["add", "sub", "missing"], n: 12 },
      svg:
        '<path d="M62 68 a38 38 0 0 1 76 0z" fill="#4cc9f0"/>' +
        '<rect x="58" y="62" width="84" height="10" rx="5" fill="#2f80ed"/>' +
        '<path d="M100 30 v38" stroke="#2f80ed" stroke-width="4"/>',
    },
    {
      id: "gorro-lana",
      nombre: "Gorro de lana",
      categoria: "sombrero",
      descripcion: "Calentito para los días de frío.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["memory"], n: 10 },
      svg:
        '<path d="M64 48 q0 -34 36 -34 q36 0 36 34z" fill="#06d6a0"/>' +
        '<rect x="58" y="42" width="84" height="14" rx="7" fill="#04a87f"/>' +
        '<circle cx="100" cy="12" r="9" fill="#ffd166"/>',
    },
    {
      id: "corona-estrella",
      nombre: "Corona de estrellas",
      categoria: "sombrero",
      descripcion: "La corona de las misiones completas.",
      rareza: "legendario",
      condicion: { tipo: "misiones", n: 8, excluirArea: "aventura" },
      svg:
        '<path d="M62 44 L72 14 L90 34 L100 6 L110 34 L128 14 L138 44 Z" fill="#ffd166" stroke="#e0a800" stroke-width="2" stroke-linejoin="round"/>' +
        '<circle cx="100" cy="36" r="6" fill="#ef476f"/>' +
        '<circle cx="76" cy="38" r="4" fill="#4cc9f0"/>' +
        '<circle cx="124" cy="38" r="4" fill="#4cc9f0"/>',
    },

    /* ---------------- ESPECIALES (capa 9) ---------------- */
    {
      id: "bufanda",
      nombre: "Bufanda",
      categoria: "especial",
      descripcion: "Bufanda calentita para el invierno.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["sentence-listen", "sentence-read", "story"], n: 12 },
      svg:
        '<path d="M74 100 q26 16 52 0 q6 16 -4 22 q-22 10 -44 0 q-10 -6 -4 -22z" fill="#eb5757"/>' +
        '<path d="M112 118 q14 22 8 44 q-8 -2 -12 -12 q-4 -18 4 -32z" fill="#c7433c"/>',
    },
    {
      id: "llave-aventura",
      nombre: "Llave de la aventura",
      categoria: "especial",
      descripcion: "Una llave que abre puertas misteriosas.",
      rareza: "especial",
      condicion: { tipo: "aciertos", claves: ["quiz", "sopa", "sopa-buscar"], n: 12 },
      svg:
        '<g transform="rotate(-18 100 150)">' +
        '<circle cx="86" cy="146" r="15" fill="none" stroke="#ffd166" stroke-width="7"/>' +
        '<path d="M99 154 l30 30 l8 -8 l-6 -6 l6 -6 l-8 -8 l-6 6 l-6 -6z" fill="#ffd166"/>' +
        "</g>",
    },
    {
      id: "alas",
      nombre: "Alas",
      categoria: "especial",
      descripcion: "¡Alas para volar alto!",
      rareza: "legendario",
      condicion: { tipo: "nivel", id: 6, dominio: 0.7 },
      svg:
        '<path d="M64 128 q-36 -26 -48 4 q26 12 40 30z" fill="#ffffff" stroke="#cfe3f0" stroke-width="2"/>' +
        '<path d="M136 128 q36 -26 48 4 q-26 12 -40 30z" fill="#ffffff" stroke="#cfe3f0" stroke-width="2"/>' +
        '<path d="M62 130 q-24 -14 -32 6 q18 6 28 18z" fill="#e8f7ff"/>' +
        '<path d="M138 130 q24 -14 32 6 q-18 6 -28 18z" fill="#e8f7ff"/>',
    },

    /* ---------------- DECORATIVOS (capa 10) ---------------- */
    {
      id: "estrellas",
      nombre: "Estrellas",
      categoria: "decorativo",
      descripcion: "Te rodean estrellas brillantes.",
      rareza: "especial",
      condicion: { tipo: "estrellas", n: 100 },
      svg:
        '<path d="M28 60 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4z" fill="#ffd166"/>' +
        '<path d="M172 96 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3z" fill="#ffd166"/>' +
        '<path d="M46 224 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3z" fill="#ffd166"/>' +
        '<path d="M158 214 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2z" fill="#ffd166"/>',
    },
    {
      id: "burbujas",
      nombre: "Burbujas",
      categoria: "decorativo",
      descripcion: "Burbujas de colores flotando.",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["count", "tenframe"], n: 12 },
      svg:
        '<circle cx="34" cy="96" r="10" fill="#8ad9ff" opacity="0.75"/>' +
        '<circle cx="50" cy="60" r="6" fill="#b8ecff" opacity="0.8"/>' +
        '<circle cx="168" cy="140" r="8" fill="#8ad9ff" opacity="0.7"/>' +
        '<circle cx="152" cy="42" r="5" fill="#b8ecff" opacity="0.8"/>',
    },
    {
      id: "confeti",
      nombre: "Confeti",
      categoria: "decorativo",
      descripcion: "¡Fiesta de colores a tu alrededor!",
      rareza: "comun",
      condicion: { tipo: "aciertos", claves: ["quiz", "story"], n: 10 },
      svg:
        '<rect x="30" y="80" width="8" height="12" rx="3" fill="#ef476f" transform="rotate(-20 34 86)"/>' +
        '<rect x="162" y="60" width="8" height="12" rx="3" fill="#4cc9f0" transform="rotate(25 166 66)"/>' +
        '<rect x="46" y="200" width="8" height="12" rx="3" fill="#ffd166" transform="rotate(35 50 206)"/>' +
        '<rect x="150" y="196" width="8" height="12" rx="3" fill="#06d6a0" transform="rotate(-30 154 202)"/>',
    },
  ];

  /* ---------------------------------------------------------
     Índices y utilidades
     --------------------------------------------------------- */
  const porId = {};
  LISTA.forEach((a) => (porId[a.id] = a));

  const porCategoria = {};
  LISTA.forEach((a) => {
    if (!porCategoria[a.categoria]) porCategoria[a.categoria] = [];
    porCategoria[a.categoria].push(a);
  });

  function todos() {
    return LISTA;
  }
  function info(id) {
    return porId[id] || null;
  }
  function deCategoria(cat) {
    return porCategoria[cat] || [];
  }
  function categoria(id) {
    return CATEGORIAS.filter((c) => c.id === id)[0] || null;
  }
  function categorias() {
    return CATEGORIAS;
  }
  function rareza(id) {
    return RAREZAS[id] || RAREZAS.comun;
  }

  /* Acessorios que se pueden llevar a la vez en la misma
     categoría (exclusividad por ranura). */
  function slotDe(cat) {
    return cat;
  }

  /* Ruta del archivo 3D del accesorio (carpeta "accesorios3d").
     Los 34 archivos se llaman igual que el id del catalogo. */
  function url3D(id) {
    if (!id) return null;
    return "accesorios3d/" + id + ".glb";
  }

  /* =========================================================
     AJUSTE DE CADA PRENDA AL CUERPO
     ---------------------------------------------------------
     Los archivos .glb de "accesorios3d" ya vienen colocados en
     el espacio del personaje (Z arriba, -Y al frente). Estos
     valores son el ultimo retoque, medidos contra las medidas
     reales del cuerpo:

       torso   x ±0.53   y -0.30..0.32   z 2.18..3.48
       caderas  x ±0.47   y -0.28..0.31   z 1.84..2.52
       piernas x ±0.54   y -0.19..0.22   z 0.19..2.38
       pies    x ±0.54   y -0.52..0.28   z 0.00..0.32
       cabeza  x ±0.34   y -0.31..0.29   z 3.45..4.31

       escala: [x, y, z] multiplica la prenda
       desp:  [x, y, z] la mueve (y = hacia atras, z = arriba)
     ========================================================= */
  /* =========================================================
     AJUSTE DE CADA PRENDA AL CUERPO
     ---------------------------------------------------------
     Los archivos .glb de "accesorios3d" ya vienen colocados en
     el espacio del personaje (Z arriba, -Y al frente). Estos
     valores son el ultimo retoque, medidos contra las medidas
     reales del cuerpo, y ademásesehen la ropa un poco POR
     ENCIMA de la piel (holgura de 0.04) para que la piel no
     asome por ningun sitio ni parpadee con la ropa.

       torso   x ±0.53   y -0.32..0.32   z 2.18..3.48
       caderas  x ±0.47   y -0.28..0.31   z 1.84..2.52
       piernas x ±0.54   y -0.19..0.22   z 0.19..2.38
       pies    x ±0.54   y -0.52..0.28   z 0.00..0.32
       cuello  x ±0.15   y -0.15..0.15   z 3.21..3.73
       cabeza  x ±0.34   y -0.31..0.29   z 3.45..4.31

       escala: [x, y, z] multiplica la prenda
       desp:  [x, y, z] la mueve (y = hacia atras, z = arriba)
     ========================================================= */
  const AJUSTE_3D = {
    /* --- ropa superior: holgura moderada para seguir el torso sin
           sobresalir demasiado ni parecer una caja. --- */
    "camiseta-verde": { escala: [0.96, 1.15, 1.22], desp: [0, -0.015, -0.075] },
    "camiseta-azul": { escala: [0.96, 1.15, 1.22], desp: [0, -0.015, -0.075] },
    "sudadera": { escala: [0.98, 1.18, 1.22], desp: [0, -0.015, -0.075] },
    "chaleco-explorador": { escala: [0.96, 1.12, 1.22], desp: [0, -0.015, -0.075] },

    /* --- pantalones: anchura controlada para envolver ambas piernas,
           con largo suficiente sin ensancharse en exceso. --- */
    pantalon: { escala: [1.20, 1.12, 1.51], desp: [0, 0.005, -0.285] },
    vaqueros: { escala: [1.20, 1.12, 1.51], desp: [0, 0.005, -0.285] },
    falda: { escala: [1.3, 1.0, 1.15], desp: [0, 0.01, 0.20] },

    /* --- calzado: ajustado al ancho de los pies, con volumen moderado
           y elevacion suficiente en las botas. --- */
    zapatillas: { escala: [1.0, 1.08, 1.18], desp: [0, -0.035, -0.015] },
    botas: { escala: [1.0, 1.08, 1.18], desp: [0, -0.035, -0.015] },
    "botas-aventurero": { escala: [1.0, 1.08, 1.18], desp: [0, -0.035, -0.015] },
    sandalias: { escala: [1.0, 1.05, 1.05], desp: [0, -0.025, 0] },

    /* --- bufanda: rodea el cuello --- */
    bufanda: { escala: [1.27, 1.0, 1.16], desp: [0, 0, 0.03] },

    /* --- pelo: algo mas ancho que la cabeza (0.68) para que la
           cabeza no asome por los lados --- */
    "pelo-corto": { escala: [1.08, 1.1, 1.0] },
    "pelo-largo": { escala: [1.05, 1.08, 1.0] },
    "pelo-rizos": { escala: [1.04, 1.0, 1.0] },
    "pelo-trenzas": { escala: [1.06, 1.08, 1.0] },

    /* --- gafas: se conservan cerca del ancho original para que no
           sobresalgan excesivamente de la cara. --- */
    "gafas-redondas": { escala: [0.98, 1.0, 1.0], desp: [0, -0.035, 0] },
    "gafas-sol": { escala: [0.98, 1.0, 1.0], desp: [0, -0.035, 0] },
    "gafas-aventurero": { escala: [0.98, 1.0, 1.0], desp: [0, -0.035, 0] },

    /* --- sombreros: mas anchos que la cabeza para que no la
           dejen al descubierto por los lados --- */
    "gorro-explorador": { escala: [1.06, 1.02, 1.0] },
    "gorro-lana": { escala: [1.18, 1.08, 1.0] },
    "sombrero-aventurero": { escala: [1.04, 1.0, 1.0] },
    casco: { escala: [1.1, 1.04, 1.0] },
    "corona-estrella": { escala: [1.12, 1.08, 1.0] },

    /* --- cosas de la espalda: la espalda del torso llega a y=0.32,
           asi que van un poco mas atras. Ademas se ensanchan para
           que se vean por los lados del cuerpo --- */
    "capa-roja": { escala: [1.2, 1.32, 1.0], desp: [0, 0.2, 0] },
    "capa-azul": { escala: [1.2, 1.32, 1.0], desp: [0, 0.2, 0] },
    "capa-alada": { escala: [1.14, 1.32, 1.0], desp: [0, 0.2, 0] },
    alas: { escala: [1.08, 1.0, 1.0], desp: [0, 0.15, 0] },
    /* --- mochilas: volumen visible sin sobresalir demasiado por los
           costados; se mantienen detrás de la espalda. --- */
    "mochila-simple": { escala: [1.25, 1.0, 1.05], desp: [0, 0.12, 0.025] },
    "mochila-explorador": { escala: [1.25, 1.0, 1.05], desp: [0, 0.12, 0.025] },

    /* --- la llave cuelga del costado, no pegada a la pierna --- */
    "llave-aventura": { escala: [1.0, 1.0, 1.0], desp: [0.14, 0, 0] },

    /* --- decoracion: rodea al personaje, por delante del pecho --- */
    estrellas: { escala: [1.5, 1.0, 1.45], desp: [0, -0.25, 0] },
    burbujas: { escala: [1.5, 1.0, 1.45], desp: [0, -0.25, 0] },
    confeti: { escala: [1.5, 1.0, 1.45], desp: [0, -0.25, 0] },
  };

  /* Ajuste de una prenda (null si no necesita ajuste) */
  function ajuste3D(id) {
    return AJUSTE_3D[id] || null;
  }

  /* =========================================================
     MOLDEADO DE LAS PRENDAS
     ---------------------------------------------------------
     Cada prenda se ajusta a la forma real del cuerpo. El margen
     es lo que separa la ropa de la piel: pequeno = ceñida,
     grande = holgada.

     zonas:   que partes del cuerpo la prenda debe seguir
     margen: separacion con la piel
     alcance: hasta donde se estira el ajuste (mas = mas moldeado)
     capazo:  (opcional) redondeo extra del hombro para que la
              manga corta cierre por encima del deltoides y no
              asome piel. Sus campos: x0, z0, z1, margen, alcance
              y zonas (por defecto, los dos brazos).
     ========================================================= */
  const MOLDEAR_3D = {
    /* --- ropa de arriba: se curva sobre el torso --- */
    "camiseta-verde": { zonas: ["torso", "caderas", "brazoIzq", "brazoDer"], margen: 0.05, alcance: 0.30, capazo: { x0: 0.30, z0: 2.95, z1: 3.12, margen: 0.045, alcance: 0.42 } },
    "camiseta-azul": { zonas: ["torso", "caderas", "brazoIzq", "brazoDer"], margen: 0.05, alcance: 0.30, capazo: { x0: 0.30, z0: 2.95, z1: 3.12, margen: 0.045, alcance: 0.42 } },
    /* La sudadera lleva mangas largas hechas en el propio cuerpo
       (AV_GLTF.mangas), asi que ya no necesita el redondeo del
       capazo: las mangas cierran el deltoides y el capazo solo
       deformaba las aletas del hombro en pinchos. Ademas el
       cuello entra en las zonas para que la capucha abrace el
       cuello en vez de desparramarse sobre el pecho (era lo que
       dejaba puntitos junto al cuello). */
    sudadera: { zonas: ["torso", "caderas", "cuello", "brazoIzq", "brazoDer"], margen: 0.06, alcance: 0.30, mangas: { margen: 0.05, zArriba: 3.42, zAbajo: 2.06 }, relieve: 0.024 },
    "chaleco-explorador": { zonas: ["torso", "brazoIzq", "brazoDer"], margen: 0.05, alcance: 0.28, capazo: { x0: 0.30, z0: 2.95, z1: 3.12, margen: 0.045, alcance: 0.42 } },

    /* --- ropa de abajo: sigue la cadera y las dos piernas --- */
    pantalon: { zonas: ["caderas", "musloIzq", "musloDer", "espinIzq", "espinDer"], margen: 0.045, alcance: 0.30 },
    vaqueros: { zonas: ["caderas", "musloIzq", "musloDer", "espinIzq", "espinDer"], margen: 0.045, alcance: 0.30 },
    falda: { zonas: ["caderas", "musloIzq", "musloDer"], margen: 0.05, alcance: 0.26 },

    /* --- zapatos: moldeados al pie --- */
    zapatillas: { zonas: ["pieIzq", "pieDer"], margen: 0.035, alcance: 0.20 },
    botas: { zonas: ["pieIzq", "pieDer", "espinIzq", "espinDer"], margen: 0.04, alcance: 0.22 },
    "botas-aventurero": { zonas: ["pieIzq", "pieDer", "espinIzq", "espinDer"], margen: 0.04, alcance: 0.22 },
    sandalias: { zonas: ["pieIzq", "pieDer"], margen: 0.035, alcance: 0.18 },

    /* --- bufanda: rodea el cuello --- */
    bufanda: { zonas: ["cuello"], margen: 0.03, alcance: 0.18 },

    /* --- pelo: abraza la cabeza --- */
    "pelo-corto": { zonas: ["cabeza"], margen: 0.025, alcance: 0.18 },
    "pelo-largo": { zonas: ["cabeza"], margen: 0.025, alcance: 0.18 },
    "pelo-rizos": { zonas: ["cabeza"], margen: 0.03, alcance: 0.18 },
    "pelo-trenzas": { zonas: ["cabeza"], margen: 0.025, alcance: 0.18 },

    /* --- gorros: la copa se redondea, el ala se queda plana --- */
    "gorro-explorador": { zonas: ["cabeza"], margen: 0.02, alcance: 0.14 },
    "gorro-lana": { zonas: ["cabeza"], margen: 0.02, alcance: 0.14 },
    "sombrero-aventurero": { zonas: ["cabeza"], margen: 0.02, alcance: 0.14 },
    casco: { zonas: ["cabeza"], margen: 0.02, alcance: 0.14 },
    "corona-estrella": { zonas: ["cabeza"], margen: 0.02, alcance: 0.14 },

    /* --- gafas: apoyadas en la cara --- */
    "gafas-redondas": { zonas: ["cabeza"], margen: 0.02, alcance: 0.11 },
    "gafas-sol": { zonas: ["cabeza"], margen: 0.02, alcance: 0.11 },
    "gafas-aventurero": { zonas: ["cabeza"], margen: 0.02, alcance: 0.11 },

    /* --- mochila, capas y alas: con forma, sin pegarse al cuerpo --- */
    "llave-aventura": { zonas: ["caderas"], margen: 0.06, alcance: 0.14 },
  };

  function moldearDe(id) {
    return MOLDEAR_3D[id] || null;
  }

  /* =========================================================
     COLORES DE LAS PRENDAS
     ---------------------------------------------------------
     Paleta con la que el niño puede pintar cada accesorio.
     Se aplica al material principal de la prenda; los adornos
     (cordones, botones, ribetes) conservan su color.
     ========================================================= */
  const PALETA = [
    { id: "original", nombre: "Original", hex: null },
    { id: "rojo", nombre: "Rojo", hex: "#ef476f" },
    { id: "naranja", nombre: "Naranja", hex: "#f7844b" },
    { id: "amarillo", nombre: "Amarillo", hex: "#ffd166" },
    { id: "verde", nombre: "Verde", hex: "#06d6a0" },
    { id: "azul", nombre: "Azul", hex: "#118ab2" },
    { id: "morado", nombre: "Morado", hex: "#9b5de5" },
    { id: "rosa", nombre: "Rosa", hex: "#ff8fa8" },
    { id: "marron", nombre: "Marron", hex: "#8b5e3c" },
    { id: "beige", nombre: "Beige", hex: "#e8c9a0" },
    { id: "gris", nombre: "Gris", hex: "#8d99ae" },
    { id: "negro", nombre: "Negro", hex: "#2b2d42" },
    { id: "blanco", nombre: "Blanco", hex: "#f5f5f5" },
  ];

  /* Color elegido de una prenda (hex o null = el del archivo) */
  function colorDe(id, guardados) {
    if (!guardados) return null;
    const hex = guardados[id];
    if (!hex) return null;
    for (let i = 0; i < PALETA.length; i++) {
      if (PALETA[i].hex === hex) return hex;
    }
    return null;
  }

  /* Prendas que van por detras del cuerpo: desde delante no se ven
     bien, asi que se avisa al niño de que hay que girar. */
  const DETRAS = {
    "mochila-simple": true,
    "mochila-explorador": true,
    "capa-roja": true,
    "capa-azul": true,
    "capa-alada": true,
    alas: true,
  };

  function vaDetras(id) {
    return !!DETRAS[id];
  }

  return {
    CATEGORIAS,
    RAREZAS,
    LISTA,
    todos,
    info,
    deCategoria,
    categoria,
    categorias,
    rareza,
    slotDe,
    url3D,
    ajuste3D,
    AJUSTE_3D,
    PALETA,
    colorDe,
    vaDetras,
    moldearDe,
    MOLDEAR_3D,
  };
})();
