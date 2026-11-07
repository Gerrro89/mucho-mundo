/* =========================================================
   WEB LEER — Mundo de Aventuras con misiones
   ---------------------------------------------------------
   En vez de entrar directo a un juego suelto, el niño explora
   un mundo donde cada MISIÓN cuenta una pequeña historia y
   requiere aprender algo para ayudar a un personaje.

   Cada misión:
     - tiene una historia (un personaje pide ayuda),
     - encadena 3 actividades ("etapas") que enseñan lo necesario,
     - al completarlas abre una ZONA SECRETA del mapa y da una
       recompensa.

   El progreso se guarda por perfil en Store.data.misiones y
   Store.data.zonas.
   ========================================================= */

window.MISIONES = (function () {
  "use strict";

  const D = window.DATA;

  /* Helpers de contenido */
  const VOCALES = D.vocales.map((v) => v.l);
  const CONSONANTES = D.consonantes.map((c) => c.l);
  const palabrasCon = (letra) =>
    D.palabras.filter((p) => p.w.charAt(0) === letra);
  const objetosCon = (letra) =>
    D.objetos.filter((o) => o.w.charAt(0) === letra);
  const oracionesCortas = () =>
    D.oraciones.filter((o) => o.t.length <= 22);
  const cuentoPorId = (id) => D.cuentos.find((c) => c.id === id) || D.cuentos[0];

  /* Construye los objetos que necesita la actividad "explorar"
     (una tarjeta por letra con su emoji, su nombre y su audio). */
  const explorarLetras = (letras) =>
    letras.map((l) => {
      const info = D.vocales.find((v) => v.l === l) || D.consonantes.find((v) => v.l === l);
      return {
        grande: info.l + " " + info.low,
        emoji: info.emoji,
        texto: info.word,
        audio: D.audioLetra(info.l),
      };
    });

  /* =========================================================
     Definición de las misiones.
     Cada etapa es un descriptor de actividad listo para ACT.ejecutar.
     `relato` es el texto que dice el personaje antes de la etapa.
     ========================================================= */
  const LISTA = [
    /* ---------- MISIÓN 1: El dragón Dodo y las vocales ---------- */
    {
      id: "m1",
      nivel: 1,
      mundo: "Bosque de las Vocales",
      icono: "🐲",
      titulo: "El dragón que perdió su nombre",
      personaje: { nombre: "Dodo el dragón", emoji: "🐲" },
      img: "img/z1-dragon.webp",
      color: "#3fa34d",
      intro:
        "Dodo el dragón estornudó tan fuerte que las vocales de su nombre salieron volando. Sin ellas, ya no puede rugir. ¡Ayúdalo a encontrarlas!",
      exito:
        "¡Dodo volvió a rugir! Las vocales están completas y su nombre brilló otra vez.",
      zona: {
        id: "z1",
        nombre: "Cueva Brillante",
        icono: "💎",
        relato: "Al rugir otra vez, se abrió una cueva llena de piedritas que brillan.",
      },
      etapas: [
        {
          relato: "Primero, mira las vocales con calma. Toca cada una y escúchala.",
          desc: { id: "m1-e1", tipo: "explorar", titulo: "Las vocales de Dodo", n: VOCALES.length, nivel: 1, params: { objetos: explorarLetras(VOCALES) } },
        },
        {
          relato: "Cuando el viento se lleva una vocal, Dodo la necesita. Toca la que te diga.",
          desc: { id: "m1-e2", tipo: "find-letter", titulo: "Encuentra la vocal", n: 5, nivel: 1, params: { pool: VOCALES } },
        },
        {
          relato: "Ahora Dodo quiere recordar cómo suenan las vocales dentro de las palabras.",
          desc: {
            id: "m1-e3",
            tipo: "initial-sound",
            titulo: "Con qué vocal empieza",
            n: 5,
            nivel: 1,
            params: { pool: objetosCon("A").concat(objetosCon("E"), objetosCon("I"), objetosCon("O"), objetosCon("U")), letras: VOCALES },
          },
        },
      ],
    },

    /* ---------- MISIÓN 2: La marmota Marta y la letra M ---------- */
    {
      id: "m2",
      nivel: 2,
      mundo: "Montaña de las Consonantes",
      icono: "🦫",
      titulo: "La marmota sin la letra M",
      personaje: { nombre: "Marta la marmota", emoji: "🦫" },
      img: "img/z7-bosque.webp",
      color: "#2f80ed",
      intro:
        "Marta la marmota guardó su nombre tan bien que ya no recuerda con qué letra empieza. Para ayudarla, hay que buscar la letra M por toda la montaña.",
      exito:
        "¡Marta ya sabe su letra! Encontró la M, la escribió y hasta armó palabras con ella.",
      zona: {
        id: "z2",
        nombre: "Cascada de Cristal",
        icono: "🌊",
        relato: "Al encontrar la M, una cascada de agua clara apareció entre las piedras.",
      },
      etapas: [
        {
          relato: "Mira estas letras de la montaña. Marta quiere saber cómo suenan.",
          desc: {
            id: "m2-e1",
            tipo: "explorar",
            titulo: "Letras de la montaña",
            n: 4,
            nivel: 2,
            params: { objetos: explorarLetras(["M", "P", "S", "L"]) },
          },
        },
        {
          relato: "Busca la letra correcta entre todas las de la montaña.",
          desc: { id: "m2-e2", tipo: "find-letter", titulo: "Encuentra la consonante", n: 6, nivel: 2, params: { pool: CONSONANTES.slice(0, 8) } },
        },
        {
          relato: "Marta encontró palabras con M. Escucha y toca la imagen correcta.",
          desc: {
            id: "m2-e3",
            tipo: "pick-image",
            titulo: "La palabra escondida",
            n: 5,
            nivel: 2,
            params: { pool: objetosCon("M").concat(objetosCon("P"), objetosCon("S"), objetosCon("L"), objetosCon("C")) },
          },
        },
      ],
    },

    /* ---------- MISIÓN 3: Los robots y las sílabas ---------- */
    {
      id: "m3",
      nivel: 3,
      mundo: "Fábrica de las Sílabas",
      icono: "🤖",
      titulo: "Los robots mezclaron las sílabas",
      personaje: { nombre: "Bipo el robot", emoji: "🤖" },
      img: "img/z9-rio.webp",
      color: "#f2994a",
      intro:
        "En la fábrica, Bipo el robot resbaló y desordenó todas las sílabas. Ahora las palabras salen al revés. ¡Ayúdalo a ordenarlas!",
      exito:
        "¡La fábrica vuelve a sonar bien! Las sílabas están en su lugar y las palabras se entienden.",
      zona: {
        id: "z3",
        nombre: "Taller de Engranajes",
        icono: "⚙️",
        relato: "Con la fábrica arreglada, se encendió un taller lleno de engranajes de colores.",
      },
      etapas: [
        {
          relato: "Escucha la sílaba y tócala. Bipo quiere asegurarse de oírla bien.",
          desc: {
            id: "m3-e1",
            tipo: "syllable-listen",
            titulo: "Escucha la sílaba",
            n: 5,
            nivel: 3,
            params: { pool: ["MA", "ME", "MI", "MO", "MU", "PA", "PE", "PI", "PO", "PU", "LA", "LE", "LI", "LO", "LU"] },
          },
        },
        {
          relato: "Ahora ordena las sílabas para formar la palabra que se desarmó.",
          desc: { id: "m3-e2", tipo: "order-syl", titulo: "Ordena las sílabas", n: 5, nivel: 3, params: { pool: D.palabras.filter((p) => p.syl.length === 2) } },
        },
        {
          relato: "Con las sílabas ordenadas, arma tú mismo la palabra con las letras.",
          desc: { id: "m3-e3", tipo: "build-word", titulo: "Forma la palabra", n: 5, nivel: 3, params: { pool: D.palabras.filter((p) => p.syl.length === 2) } },
        },
      ],
    },

    /* ---------- MISIÓN 4: El cartero Bruno y las cartas ---------- */
    {
      id: "m4",
      nivel: 4,
      mundo: "Ciudad de las Palabras",
      icono: "📮",
      titulo: "El cartero que perdió las letras",
      personaje: { nombre: "Bruno el cartero", emoji: "📮" },
      img: "img/z6-tesoro.webp",
      color: "#bb6bd9",
      intro:
        "Bruno el cartero lleva cartas por toda la ciudad, pero la lluvia borró algunas letras de las direcciones. Sin esas letras, no sabe a dónde ir.",
      exito:
        "¡Todas las cartas llegaron! Bruno ya sabe completar las palabras y escribirlas solo.",
      zona: {
        id: "z4",
        nombre: "Plaza de las Luces",
        icono: "🎆",
        relato: "Cuando llegó la última carta, la plaza de la ciudad se iluminó con luces de colores.",
      },
      etapas: [
        {
          relato: "Mira la palabra y toca la letra que falta para que la dirección quede completa.",
          desc: { id: "m4-e1", tipo: "fill-word", titulo: "Completa la dirección", n: 5, nivel: 4, params: { pool: D.palabras.filter((p) => p.w.length <= 5) } },
        },
        {
          relato: "Arma otra palabra tocando sus letras en orden, como escribe Bruno.",
          desc: { id: "m4-e2", tipo: "build-word", titulo: "Forma la palabra", n: 5, nivel: 4, params: { pool: D.palabras } },
        },
        {
          relato: "Ahora escribe tú la palabra con el teclado, como un cartero experto.",
          desc: { id: "m4-e3", tipo: "type-word", titulo: "Escribe la palabra", n: 4, nivel: 4, params: { pool: D.palabras.filter((p) => p.w.length <= 5) } },
        },
      ],
    },

    /* ---------- MISIÓN 5: La búho Sabia y las oraciones ---------- */
    {
      id: "m5",
      nivel: 5,
      mundo: "Camino de las Oraciones",
      icono: "🦉",
      titulo: "La búho que lee de noche",
      personaje: { nombre: "Sabia la búho", emoji: "🦉" },
      img: "img/z8-noche.webp",
      color: "#f2b705",
      intro:
        "Sabia la búho lee cartas por la noche, pero hoy la luna se escondió y las oraciones se ven borrosas. Ayúdala a leerlas completas.",
      exito:
        "¡Sabia volvió a leer! Entendió cada oración y ya puede contar lo que pasa en cada una.",
      zona: {
        id: "z5",
        nombre: "Mirador de la Luna",
        icono: "🌙",
        relato: "Al terminar de leer, la luna salió y abrió un mirador para ver todo el camino.",
      },
      etapas: [
        {
          relato: "Escucha la oración con cuidado y responde la pregunta de Sabia.",
          desc: { id: "m5-e1", tipo: "sentence-listen", titulo: "Escucha y responde", n: 3, nivel: 5, params: { pool: oracionesCortas() } },
        },
        {
          relato: "Lee la oración palabra por palabra, tocando cada una.",
          desc: { id: "m5-e2", tipo: "sentence-read", titulo: "Leo oraciones", n: 2, nivel: 5, params: { pool: oracionesCortas() } },
        },
        {
          relato: "Demuestra que entendiste: responde sobre la oración que leíste.",
          desc: { id: "m5-e3", tipo: "sentence-listen", titulo: "Comprendo lo que leo", n: 3, nivel: 5, params: { pool: D.oraciones } },
        },
      ],
    },

    /* ---------- MISIÓN 6: El libro encantado ---------- */
    {
      id: "m6",
      nivel: 6,
      mundo: "Biblioteca Mágica",
      icono: "📚",
      titulo: "El libro que se quedó dormido",
      personaje: { nombre: "El Libro Encantado", emoji: "📖" },
      img: "img/z10-meta.webp",
      color: "#e07b39",
      intro:
        "En la Biblioteca Mágica hay un libro que lleva siglos callado. Para despertarlo, alguien tiene que leerlo en voz alta y entender su cuento.",
      exito:
        "¡El libro despertó! Leyó su cuento contigo y ahora quiere contar más historias.",
      zona: {
        id: "z6",
        nombre: "Sala de los Cuentos",
        icono: "✨",
        relato: "Al despertar el libro, una sala secreta se llenó de cuentos que flotan y brillan.",
      },
      etapas: [
        {
          relato: "Abre el libro y lee su cuento. Toca «Escuchar» si quieres ayuda.",
          desc: { id: "m6-e1", tipo: "story", titulo: "El cuento del libro", nivel: 6, params: { cuento: cuentoPorId("patito") } },
        },
        {
          relato: "Ahora lee tú una oración del cuento, palabra por palabra.",
          desc: { id: "m6-e2", tipo: "sentence-read", titulo: "Leo el cuento", n: 2, nivel: 6, params: { pool: D.oraciones } },
        },
        {
          relato: "Para despertarlo del todo, escucha y demuestra que entendiste el cuento.",
          desc: { id: "m6-e3", tipo: "sentence-listen", titulo: "Entiendo la historia", n: 3, nivel: 6, params: { pool: D.oraciones } },
        },
      ],
    },

    /* =========================================================
       CAPÍTULO 2: MISIONES DEL REINO DE LOS NÚMEROS
       Mismas reglas: cada misión enseña algo (contar, comparar,
       sumar y restar, figuras) y, al completarla, abre una zona
       secreta. El progreso queda guardado por perfil.
       ========================================================= */

    /* ---------- MISIÓN 7: la ballena que contó mal su familia ---------- */
    {
      id: "m7",
      nivel: 7,
      mundo: "Isla de los Números",
      icono: "🐳",
      titulo: "La ballena que contó mal su familia",
      personaje: { nombre: "Nube la ballena", emoji: "🐳" },
      img: "img/z2-ballena.webp",
      color: "#4cc9f0",
      intro:
        "Nube la ballena nadó tan rápido que ya no sabe cuántos son en su familia. Sin contar bien, no encuentra el camino a casa. ¡Ayúdala a contar!",
      exito:
        "¡Nube encontró a toda su familia! Contar uno por uno la llevó de vuelta a la isla.",
      zona: {
        id: "z7",
        nombre: "Laguna de Perlas",
        icono: "💦",
        relato: "Al llegar a casa, la laguna se llenó de burbujas con perlas que brillan.",
      },
      etapas: [
        {
          relato: "Primero, cuenta los peces de la isla con calma, uno por uno.",
          desc: { id: "m7-e1", tipo: "count", titulo: "Cuenta los peces", n: 5, nivel: 7, params: { rango: [3, 10], sustantivo: "peces" } },
        },
        {
          relato: "Nube quiere marcar su ruta. Encuentra cada número en la recta.",
          desc: { id: "m7-e2", tipo: "numberline", titulo: "La recta de la laguna", n: 5, nivel: 7, params: { max: 10 } },
        },
        {
          relato: "Por último, cuenta los puntos del marco que deja su cola.",
          desc: { id: "m7-e3", tipo: "tenframe", titulo: "Marco de la familia", n: 5, nivel: 7, params: { max: 10 } },
        },
      ],
    },

    /* ---------- MISIÓN 8: el ratón del mercado ---------- */
    {
      id: "m8",
      nivel: 8,
      mundo: "Mercado de los Números",
      icono: "🐭",
      titulo: "El ratón que mezcló los precios",
      personaje: { nombre: "Chispa la ratona", emoji: "🐭" },
      img: "img/z3-raton.webp",
      color: "#f2994a",
      intro:
        "Chispa la ratona tiene una tienda en el mercado, pero hoy revolvió todas las canastas y ya no sabe qué grupo tiene más ni qué número viene primero. ¡Ayúdala a ordenar el mercado!",
      exito:
        "¡El mercado quedó ordenado! Chispa ya sabe comparar y ordenar los números de sus canastas.",
      zona: {
        id: "z8",
        nombre: "Plaza del Sol",
        icono: "🌻",
        relato: "Con el orden agradable, la plaza del mercado se llenó de girasoles dorados.",
      },
      etapas: [
        {
          relato: "Dos canastas se volvieron a mezclar. Toca la que te pidan.",
          desc: { id: "m8-e1", tipo: "compare", titulo: "Comparar canastas", n: 5, nivel: 8, params: { rango: [1, 9] } },
        },
        {
          relato: "Ahora ordena los números de las canastas de menor a mayor.",
          desc: { id: "m8-e2", tipo: "ordernums", titulo: "Ordenar los precios", n: 4, nivel: 8, params: { rango: [1, 10], cuantos: 3 } },
        },
        {
          relato: "A Chispa le falta el vecino de cada número. Encuéntralo.",
          desc: { id: "m8-e3", tipo: "beforeafter", titulo: "Vecinos de los números", n: 5, nivel: 8, params: { rango: [2, 9] } },
        },
      ],
    },

    /* ---------- MISIÓN 9: el tren de las sumas ---------- */
    {
      id: "m9",
      nivel: 9,
      mundo: "Taller de las Sumas",
      icono: "🚂",
      titulo: "El tren que perdió sus vagones",
      personaje: { nombre: "Tomás el maquinista", emoji: "🔧" },
      img: "img/z4-tren.webp",
      color: "#9b5de5",
      intro:
        "Tomás el maquinista quiere armar su tren, pero los vagones quedaron separados. Para unirlos hay que juntar grupos y contar el total. ¡A poner sumas en acción!",
      exito:
        "¡El tren salió con todos sus vagones! Juntar grupos y contar hizo posible el viaje.",
      zona: {
        id: "z9",
        nombre: "Andén Brillante",
        icono: "🚉",
        relato: "Al partir el tren, el andén se llenó de luces que celebran el viaje.",
      },
      etapas: [
        {
          relato: "Junta los dos grupos de vagones y cuenta el total.",
          desc: { id: "m9-e1", tipo: "addvisual", titulo: "Unir los vagones", n: 5, nivel: 9, params: { maxTotal: 10 } },
        },
        {
          relato: "Tomás repartió las cajas. Cuenta cuántas quedan.",
          desc: { id: "m9-e2", tipo: "subvisual", titulo: "Repartir las cajas", n: 5, nivel: 9, params: { maxTotal: 10, sustantivo: "cajas" } },
        },
        {
          relato: "Ahora cuenta a los pasajeros que faltan en cada estación.",
          desc: { id: "m9-e3", tipo: "missing", titulo: "Pasajeros que faltan", n: 5, nivel: 9, params: { maxTotal: 10 } },
        },
      ],
    },

    /* ---------- MISIÓN 10: el jardín de las figuras ---------- */
    {
      id: "m10",
      nivel: 10,
      mundo: "Jardín de las Figuras",
      icono: "🦋",
      titulo: "El escultor que perdió sus moldes",
      personaje: { nombre: "Ugo el escultor", emoji: "🎨" },
      img: "img/z5-escultor.webp",
      color: "#3fa34d",
      intro:
        "Ugo el escultor estaba creando esculturas de figuras para su jardín, pero perdió los moldes. Reconocer cada figura es lo que hará crecer su jardín. ¡Ayúdalo!",
      exito:
        "¡El jardín floreció con las esculturas de Ugo! Cada figura volvió a su sitio.",
      zona: {
        id: "z10",
        nombre: "Corredor de Esculturas",
        icono: "🗿",
        relato: "Las esculturas terminadas dibujaron un corredor lleno de arte y colores.",
      },
      etapas: [
        {
          relato: "Primero, encuentra la figura que Ugo te pida.",
          desc: { id: "m10-e1", tipo: "shapes", titulo: "Encuentra la figura", n: 5, nivel: 10, params: {} },
        },
        {
          relato: "Cuenta cuántas figuras de cada clase hay en el jardín.",
          desc: { id: "m10-e2", tipo: "shapecount", titulo: "Contar esculturas", n: 4, nivel: 10, params: {} },
        },
        {
          relato: "Para terminar, sigue el patrón de flores del corredor.",
          desc: { id: "m10-e3", tipo: "pattern", titulo: "El patrón del jardín", n: 5, nivel: 10, params: {} },
        },
      ],
    },
  ];

  const porId = {};
  LISTA.forEach((m) => (porId[m.id] = m));

  function todas() {
    return LISTA;
  }
  function info(id) {
    return porId[id] || null;
  }

  /* ---------------- Progreso guardado por perfil ---------------- */
  function _data() {
    try {
      const d = CORE.Store.data;
      if (!d.misiones) d.misiones = {};
      if (!d.zonas) d.zonas = {};
      return d;
    } catch (e) {
      return { misiones: {}, zonas: {} };
    }
  }

  /* Una misión está completa cuando todas sus etapas están hechas. */
  function completada(id) {
    const m = porId[id];
    if (!m) return false;
    const d = _data();
    const hechas = d.misiones[id] || [];
    return m.etapas.every((e) => hechas.indexOf(e.desc.id) !== -1);
  }

  /* Una misión está disponible si la anterior está completa. */
  function disponible(id) {
    const idx = LISTA.findIndex((m) => m.id === id);
    if (idx <= 0) return true;
    return completada(LISTA[idx - 1].id);
  }

  function etapasHechas(id) {
    const d = _data();
    const hechas = d.misiones[id] || [];
    const m = porId[id];
    if (!m) return 0;
    return m.etapas.filter((e) => hechas.indexOf(e.desc.id) !== -1).length;
  }

  /* Marca una etapa como hecha y, si corresponde, abre la zona secreta. */
  function marcarEtapa(misionId, etapaId) {
    const d = _data();
    if (!d.misiones[misionId]) d.misiones[misionId] = [];
    if (d.misiones[misionId].indexOf(etapaId) !== -1) return false;
    d.misiones[misionId].push(etapaId);
    CORE.Store.save();
    return true;
  }

  function abrirZona(misionId) {
    const m = porId[misionId];
    if (!m) return null;
    const d = _data();
    if (!d.zonas[m.zona.id]) {
      d.zonas[m.zona.id] = { nombre: m.zona.nombre, icono: m.zona.icono, de: m.id };
      CORE.Store.save();
      return m.zona; // zona recién abierta
    }
    return null;
  }

  function zonasAbiertas() {
    const d = _data();
    return Object.keys(d.zonas).map((k) => d.zonas[k]);
  }

  /* Total de zonas del mundo, para mostrar el progreso */
  function totalZonas() {
    return LISTA.length;
  }

  function misionesCompletadas() {
    return LISTA.filter((m) => completada(m.id)).length;
  }

  /* Siguiente misión disponible y sin completar, o null */
  function siguiente() {
    return LISTA.find((m) => disponible(m.id) && !completada(m.id)) || null;
  }

  return {
    todas,
    info,
    completada,
    disponible,
    etapasHechas,
    marcarEtapa,
    abrirZona,
    zonasAbiertas,
    totalZonas,
    misionesCompletadas,
    siguiente,
  };
})();
