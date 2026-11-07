/* =========================================================
   CURRICULO — Aventura de Letras y Números
   Contenido por GRADO (1° a 5° de primaria) y por MATERIA,
   organizado como lo piden los Derechos Básicos de Aprendizaje
   (DBA) del Ministerio de Educación Nacional de Colombia:

     grado  →  materia  →  tema  →  objetivo (DBA)
                          →  descubrir / practicar / jugar / demostrar

   Todo funciona SIN CONEXIÓN: no hay ni una petición de red.
   Los emojis se usan solo como iconos; nunca como ilustración
   del contenido.
   ========================================================= */

window.CURRICULO = (function () {
  "use strict";

  /* ======================= GRADOS ======================= */
  const GRADOS = [
    {
      id: "g1", n: 1, nombre: "Primero", titulo: "1° de primaria",
      icono: "🐣", color: "#06d6a0",
      desc: "Vocales, sílabas, números hasta 20 y el mundo que me rodea.",
    },
    {
      id: "g2", n: 2, nombre: "Segundo", titulo: "2° de primaria",
      icono: "🐥", color: "#2f80ed",
      desc: "Leo con más fluidez, cuento y opero hasta 100.",
    },
    {
      id: "g3", n: 3, nombre: "Tercero", titulo: "3° de primaria",
      icono: "🦉", color: "#bb6bd9",
      desc: "Multiplico, divido, comprendo textos y exploro ecosistemas.",
    },
    {
      id: "g4", n: 4, nombre: "Cuarto", titulo: "4° de primaria",
      icono: "🦊", color: "#f2994a",
      desc: "Fracciones, decimales, textos con estructura y el mapa de Colombia.",
    },
    {
      id: "g5", n: 5, nombre: "Quinto", titulo: "5° de primaria",
      icono: "🦅", color: "#ef476f",
      desc: "Problemas combinados, porcentajes, investigación y camino a la secundaria.",
    },
  ];

  /* ======================= MATERIAS =======================
     Las cuatro primeras tienen DBA oficiales publicados por el
     MEN; Inglés usa referentes propios; las demás se organizan
     con lineamientos y estándares. */
  const MATERIAS = [
    { id: "lenguaje", nombre: "Lenguaje y comunicación", corto: "Lenguaje", icono: "📖", color: "#3fa34d", desc: "Leer, escribir, escuchar y hablar mejor cada día." },
    { id: "mate", nombre: "Matemáticas", corto: "Matemáticas", icono: "🔢", color: "#4cc9f0", desc: "Números, operaciones, formas y problemas de la vida." },
    { id: "cnaturales", nombre: "Ciencias Naturales", corto: "Ciencias", icono: "🌱", color: "#2ec4b6", desc: "Seres vivos, materia, energía y cuidar el planeta." },
    { id: "csociales", nombre: "Ciencias Sociales", corto: "Sociales", icono: "🌎", color: "#e07a5f", desc: "Mi comunidad, Colombia, la historia y la convivencia." },
    { id: "ingles", nombre: "Inglés", corto: "Inglés", icono: "🗣️", color: "#8338ec", desc: "Escuchar, jugar y hablar en inglés." },
    { id: "tecnologia", nombre: "Tecnología e Informática", corto: "Tecnología", icono: "💻", color: "#06d6a0", desc: "Computador, pasos, algoritmos y seguridad digital." },
    { id: "artistica", nombre: "Educación Artística", corto: "Artística", icono: "🎨", color: "#ff9dc0", desc: "Colores, formas, ritmo y creatividad." },
    { id: "efisica", nombre: "Educación Física", corto: "Ed. Física", icono: "⚽", color: "#ffd166", desc: "Cuerpo en movimiento, juegos y hábitos saludables." },
    { id: "etica", nombre: "Ética y Valores", corto: "Ética", icono: "💛", color: "#f2994a", desc: "Emociones, respeto, diálogo y convivencia." },
    { id: "religiosa", nombre: "Educación Religiosa", corto: "Religiosa", icono: "🕊️", color: "#a855f7", desc: "Tradiciones, valores y respeto por las creencias." },
  ];

  /* ======================= CONSTRUCTORES =======================
     Helpers compactos para escribir el contenido sin repetir
     estructura. Todas las actividades terminan en "done" y el
     motor (ACT) se encarga de estrellas, aciertos y guardado. */

  /* Pregunta de opción múltiple con explicación que enseña:
     si falla, se lee y se muestra el porqué, y queda una pista. */
  function P(p, op, ok, exp, pista) {
    return { p: p, op: op, ok: ok, exp: exp || "", pista: pista || "" };
  }

  /* Tema completo */
  function T(nombre, objetivo, dba, descubrir, practicar, demostrar, juego) {
    return {
      nombre: nombre,
      objetivo: objetivo,
      dba: dba,
      descubrir: descubrir,
      practicar: practicar,
      demostrar: demostrar,
      juego: juego || null,
    };
  }

  /* Tarjeta de "descubrir" (pantalla de explicación) */
  function D(t, x, i) {
    return { t: t, x: x, i: i || "💡" };
  }

  /* Ronda completa de preguntas con explicación (fase demostrar) */
  function EXP(titulo, preguntas) {
    return {
      tipo: "explica",
      titulo: titulo,
      n: preguntas.length,
      instr: "Lee la pregunta y elige. Si te equivocas, aprenderás el porqué.",
      params: { preguntas: preguntas },
    };
  }

  /* =========================================================
     PRIMERO DE PRIMARIA
     Fundamentos de lectura, escritura, números y exploración
     del entorno.
     ========================================================= */
  const G1 = {};

  /* ---------------- Lenguaje ---------------- */
  G1.lenguaje = [
    T(
      "Las cinco vocales",
      "Reconoce las cinco vocales, su forma y su sonido.",
      "Reconoce los sonidos de las letras y los relaciona con su forma.",
      [
        D("Son cinco", "Las vocales son A, E, I, O y U. Aparecen en todas las palabras.", "🅰️"),
        D("Escucha su sonido", "La A suena «aaa» como en AVIÓN. La E suena «eee» como en ELEFANTE.", "👂"),
        D("Todas tienen sonido", "A, E, I, O y U suenan solas. Por eso las encontramos en casi todas las palabras.", "⭐"),
      ],
      [
        { id: "g1-l-1a", tipo: "find-letter", titulo: "Encuentra la vocal", n: 5, instr: "Escucha la vocal y tócala entre las letras.", params: { pool: ["A", "E", "I", "O", "U"] } },
        { id: "g1-l-1b", tipo: "trace", titulo: "Trazo las vocales", n: 3, instr: "Arrastra el dedo sobre la letra punteada. Empieza por el punto verde.", params: { letras: ["A", "E", "O"] } },
      ],
      [
        EXP("¿Qué sé de las vocales?", [
          P("¿Cuántas vocales hay?", ["Tres", "Cuatro", "Cinco", "Seis"], 2, "Son cinco: A, E, I, O y U.", "Cuenta con los dedos: A, E, I, O, U."),
          P("Toca la vocal con la que empieza ELEFANTE.", ["A", "E", "I", "O"], 1, "Elefante empieza con E: «eee-lefante».", "Escucha el principio de la palabra."),
          P("¿Cuál de estas letras NO es vocal?", ["I", "U", "O", "M"], 3, "M es consonante. Las vocales son A, E, I, O y U.", "Las vocales suenan solas."),
          P("La vocal que suena «ooo» es...", ["O", "U", "A", "E"], 0, "La O suena «ooo», como en OSO.", ""),
        ]),
      ],
      { id: "g1-l-1j", tipo: "memory", titulo: "Memoria de vocales", n: 1, instr: "Voltea dos cartas y busca las parejas: letra con su letra chica.", params: { letras: ["A", "E", "I", "O", "U"] } }
    ),
    T(
      "Las letras M, P y S",
      "Relaciona las letras M, P y S con su sonido al inicio de las palabras.",
      "Relaciona letras con sonidos en palabras del entorno.",
      [
        D("La M", "La M suena «mmm». Empieza MONO, MAMÁ y MESA.", "🔤"),
        D("La P", "La P suena «p», seca y corta. Empieza PATO y PAPÁ.", "🔤"),
        D("La S", "La S suena «sss» larga, como el aire. Empieza SOL y SAL.", "🔤"),
      ],
      [
        { id: "g1-l-2a", tipo: "initial-sound", titulo: "¿Con qué letra empieza?", n: 4, instr: "Escucha la palabra y toca la letra con que empieza.", params: {} },
        { id: "g1-l-2b", tipo: "letter-object", titulo: "Letra inicial", n: 4, instr: "Mira la palabra y toca su letra inicial.", params: { pool: window.DATA.consonantes.filter(function (c) { return ["M", "P", "S"].indexOf(c.l) >= 0; }) } },
      ],
      [
        EXP("Sonidos iniciales", [
          P("MONO empieza con...", ["M", "P", "S", "L"], 0, "Mono empieza con M: «mmm-ono».", "Escucha el primer sonido."),
          P("SOL empieza con...", ["P", "S", "M", "T"], 1, "Sol empieza con S: «sss-ol».", "Es un sonido largo de aire."),
          P("¿Cuál empieza con P?", ["MESA", "PATO", "SOL", "LUNA"], 1, "Pato empieza con P: «p-ato».", "Busca el sonido seco «p»."),
          P("La M suena...", ["«sss»", "«mmm»", "«t»", "«lll»"], 1, "La M suena «mmm», como cuando cerramos los labios.", ""),
        ]),
      ],
      null
    ),
    T(
      "Mis primeras sílabas",
      "Forma y reconoce sílabas directas: ma, me, mi, mo, mu y pa, pe, pi, po, pu.",
      "Lee sílabas y palabras combinando consonante y vocal.",
      [
        D("Una sílaba", "Una sílaba es un pedacito de palabra que se puede golpear con la mano: MA-PI-TO.", "👏"),
        D("Sílabas con M", "MA, ME, MI, MO, MU. Como en MA-MÁ, ME-SA y MO-NO.", "🧩"),
        D("Sílabas con P", "PA, PE, PI, PO, PU. Como en PA-TO y PA-PÁ.", "🧩"),
      ],
      [
        { id: "g1-l-3a", tipo: "syllable-listen", titulo: "Escucho la sílaba", n: 5, instr: "Escucha la sílaba y tócala.", params: { pool: ["MA", "ME", "MI", "MO", "MU", "PA", "PE", "PI", "PO", "PU"] } },
        { id: "g1-l-3b", tipo: "build-word", titulo: "Construyo la palabra", n: 3, instr: "Arrastra o toca las sílabas para formar la palabra.", params: { pool: undefined } },
      ],
      [
        EXP("Sílabas", [
          P("MESA se divide en...", ["ME-SA", "ME-S", "M-ESA", "MES-A"], 0, "MESA tiene dos sílabas: ME y SA. Golpea las dos.", "Golpea la palabra: ME... SA."),
          P("¿Cuál palabra tiene la sílaba MU?", ["MESA", "MÚSICA", "MAPA", "MAMÁ"], 1, "MÚSICA empieza con MU.", "Escucha el principio."),
          P("PATITO empieza con la sílaba...", ["PA", "PI", "TO", "TI"], 0, "Pa-to-to: la primera sílaba es PA.", "Golpea: PA-TI-TO."),
          P("¿Cuántas sílabas tiene MAMÁ?", ["Una", "Dos", "Tres", "Cuatro"], 1, "MA-MÁ tiene dos sílabas.", "Golpea con la mano."),
        ]),
      ],
      null
    ),
    T(
      "Leo mis primeras palabras",
      "Lee palabras de dos sílabas reconociendo sus sílabas conocidas.",
      "Lee sílabas y palabras sencillas de su entorno.",
      [
        D("Se juntan las sílabas", "Cuando juntamos sílabas, obtenemos una palabra: MA + PA = MAPA.", "🔤"),
        D("Lee despacio", "Primero lee cada sílaba y después léela completa: LU-NA... LUNA.", "🐢"),
        D("Practica en voz alta", "Leer en voz alta te ayuda a recordar mejor. Escúchate y corrige.", "🎙️"),
      ],
      [
        { id: "g1-l-4a", tipo: "fill-word", titulo: "Completo la palabra", n: 4, instr: "Escucha la palabra y completa la letra o sílaba que falta.", params: { pool: undefined } },
        { id: "g1-l-4b", tipo: "order-syl", titulo: "Ordeno las sílabas", n: 3, instr: "Ordena las sílabas para formar la palabra.", params: { pool: undefined } },
      ],
      [
        EXP("Lectura de palabras", [
          P("¿Qué palabra es? LU + NA", ["LUNA", "MANA", "NULA", "LAMA"], 0, "LU y NA juntas forman LUNA.", "Lee cada sílaba y después la palabra."),
          P("¿Cuál es la palabra correcta?", ["MOPA", "POMA", "MAPA", "PAMA"], 0, "MOPA se escribe con la sílaba MO al principio.", "Empieza escuchando el sonido inicial."),
          P("Si cambio MA por PA en MAMÁ, queda...", ["PAPÁ", "MAMÁ", "MAPA", "PAMA"], 0, "PA + PÁ forman PAPÁ.", "Cambia solo la primera sílaba."),
          P("Para leer PATO debo juntar...", ["PA + TO", "PA + TA", "TA + PO", "PA"], 0, "PA y TO forman PATO.", "Golpea: PA-TO."),
        ]),
      ],
      null
    ),
    T(
      "Escribo con orden",
      "Escribe palabras y oraciones sencillas iniciando con mayúscula y terminando con punto.",
      "Escribe el nombre, palabras y oraciones sencillas.",
      [
        D("Mayúscula al principio", "Toda oración empieza con letra mayúscula. «Mi gato duerme.»", "🅰️"),
        D("Punto al final", "Cuando terminas la idea, pones un punto. «El pato nada.»", "⏺️"),
        D("Espacio entre palabras", "Deja un pequeño espacio para que las palabras no se junten demasiado.", "↔️"),
      ],
      [
        { id: "g1-l-5a", tipo: "escribir", titulo: "Escribo una oración", n: 1, instr: "Escribe una oración corta sobre algo que te guste.", params: { consigna: "Escribe una oración corta. Por ejemplo: «Me gusta jugar.»", min: 3, ejemplo: "Me gusta jugar." } },
        { id: "g1-l-5b", tipo: "type-word", titulo: "Escribo la palabra", n: 4, instr: "Escribe la palabra con el teclado o con los botones.", params: { pool: undefined } },
      ],
      [
        EXP("Cómo escribo", [
          P("¿Cómo empieza la oración «mi perro corre»?", ["Con mayúscula", "Con punto", "Con espacio", "Con la letra M chica"], 0, "Toda oración empieza con mayúscula: «Mi perro corre.»", "Mira el ejemplo: Mi..."),
          P("¿Qué va al final de «yo leo un cuento»?", ["!", "?", ".", "Nada"], 2, "Al final de la idea se pone un punto.", ""),
          P("¿Cuál está bien escrita?", ["hola como estas", "Hola, ¿cómo estás?", "HOLA como estas", "hola Como estas"], 1, "Empieza con mayúscula y tiene signos de pregunta.", "Revisa mayúsculas y puntos."),
          P("Para escribir «SOL» uso...", ["SO + L", "SOL", "SO + LO", "S + OL"], 1, "SOL se escribe junto: S, O, L.", ""),
        ]),
      ],
      null
    ),
    T(
      "Entiendo lo que escucho",
      "Comprende oraciones sencillas y responde preguntas sobre ellas.",
      "Comprende instrucciones y cuentos cortos; escucha y expresa ideas.",
      [
        D("Escuchar es aprender", "Cuando escuchas con atención, puedes recordar lo que pasó.", "👂"),
        D("Preguntas sobre el texto", "Después de escuchar, pregúntate: ¿quién?, ¿qué pasó?, ¿dónde?", "❓"),
        D("Oraciones del día", "«Mi mamá me llama.» «El gato duerme.» Son ideas completas.", "💬"),
      ],
      [
        { id: "g1-l-6a", tipo: "sentence-listen", titulo: "Escucho y respondo", n: 4, instr: "Escucha la oración y responde la pregunta.", params: { pool: undefined } },
        { id: "g1-l-6b", tipo: "story", titulo: "Leo un cuento", n: 1, instr: "Toca las flechas para pasar la página y escuchar.", params: { cuento: null } },
      ],
      [
        EXP("Comprensión", [
          P("En «El patito nada en el lago», ¿quién nada?", ["El patito", "El lago", "La mamá", "Nadie"], 0, "El patito es quien realiza la acción: él nada.", "Busca quién hace la acción."),
          P("Si la oración dice «Mi gato duerme», entonces...", ["El gato está durmiendo", "El gato come", "El gato corre", "El gato vuela"], 0, "«Duerme» significa que está durmiendo.", "Piensa en lo que significa la palabra clave."),
          P("¿Dónde nada el patito?", ["En el lago", "En la mesa", "En el cielo", "En la escuela"], 0, "«En el lago» nos dice el lugar donde nada.", "El lugar suele ir después de «en»."),
          P("Cuando escuchas con atención...", ["Te distraes menos", "No aprendes", "Hablas más fuerte", "Olvidas todo"], 0, "Escuchar con atención ayuda a recordar y entender.", ""),
        ]),
      ],
      null
    ),
  ];

  /* ---------------- Matemáticas ---------------- */
  G1.mate = [
    T(
      "Contar hasta diez",
      "Cuenta objetos de uno en uno y asocia cada cantidad con su número.",
      "Contar, leer y escribir números hasta el 10.",
      [
        D("Contar es señalar", "Al contar, señalas UN objeto por cada número: uno, dos, tres...", "☝️"),
        D("El último número es la cantidad", "Si señalaste hasta el cinco, entonces hay CINCO objetos.", "🖐️"),
        D("Los números ordenan", "1, 2, 3, 4, 5... siempre van en el mismo orden.", "🔢"),
      ],
      [
        { id: "g1-m-1a", tipo: "count", titulo: "Cuento objetos", n: 5, instr: "Cuenta los objetos y toca el número correcto.", params: { rango: [1, 10], sustantivo: "manzanas" } },
        { id: "g1-m-1b", tipo: "tenframe", titulo: "Marco de diez", n: 4, instr: "Cuenta los puntos del marco y toca el número.", params: { max: 10 } },
      ],
      [
        EXP("Contar", [
          P("Si cuento 1, 2, 3, 4... ¿cuántos objetos hay?", ["3", "4", "5", "2"], 1, "El último número que dijiste fue el 4: hay cuatro objetos.", "Cuenta de nuevo, uno por uno."),
          P("¿Cuál número viene DESPUÉS del 5?", ["4", "6", "7", "3"], 1, "Después del 5 viene el 6.", "Cuenta: 4, 5, 6."),
          P("¿Cuál número viene ANTES del 3?", ["2", "4", "5", "1"], 0, "Antes del 3 viene el 2.", "Cuenta hacia atrás: 3, 2, 1."),
          P("¿Cómo se llama el número 7?", ["Siete", "Seis", "Diez", "Ocho"], 0, "El 7 se llama siete.", "Repítelo: siiete."),
        ]),
      ],
      null
    ),
    T(
      "Números hasta el 20",
      "Lee, escribe y ordena números del 1 al 20.",
      "Leer y escribir números; ordenar números.",
      [
        D("Decenas y unidades", "El 14 tiene un 1 (que es una decena) y un 4 (unidades): catorce.", "🔟"),
        D("La recta numérica", "En la recta, los números crecen hacia la derecha.", "📏"),
        D("Escribir números", "El 12 se escribe con un 1 y un 2: doce.", "✍️"),
      ],
      [
        { id: "g1-m-2a", tipo: "numberline", titulo: "Toco el número", n: 5, instr: "Toca el número en la recta numérica.", params: { max: 20 } },
        { id: "g1-m-2b", tipo: "ordernums", titulo: "Ordeno números", n: 4, instr: "Toca los números de menor a mayor.", params: { rango: [1, 20], cuantos: 4 } },
      ],
      [
        EXP("Números del 1 al 20", [
          P("¿Cuál número está entre el 9 y el 11?", ["10", "12", "8", "20"], 0, "El 10 está justo entre el 9 y el 11.", "Cuenta: 9, 10, 11."),
          P("¿Cómo se escribe «quince»?", ["14", "15", "50", "16"], 1, "Quince se escribe 15.", "Escucha: quince = 1 y 5."),
          P("¿Cuál es el mayor?", ["11", "7", "18", "9"], 2, "El 18 es el más grande de todos.", "Mira primero la decena: 18 tiene decena y unidades."),
          P("Después del 19 viene...", ["17", "20", "21", "18"], 1, "Después del 19 viene el 20.", "Cuenta: 18, 19, 20."),
        ]),
      ],
      null
    ),
    T(
      "Comparar cantidades",
      "Compara y ordena cantidades usando los términos más que, menos que, igual que, mayor y menor.",
      "Comparar cantidades y ordenar números.",
      [
        D("Más y menos", "Si un grupo tiene más objetos que otro, es el grupo con MAYOR cantidad.", "⚖️"),
        D("Igual", "Dos grupos son IGUALES si tienen la misma cantidad.", "🟰"),
        D("Ordenar", "De menor a mayor: 2, 5, 9. El más pequeño va primero.", "📈"),
      ],
      [
        { id: "g1-m-3a", tipo: "compare", titulo: "¿Cuál tiene más?", n: 4, instr: "Mira los dos grupos y toca el que tenga más.", params: { rango: [1, 10] } },
        { id: "g1-m-3b", tipo: "beforeafter", titulo: "Antes y después", n: 4, instr: "Toca el número que viene antes o después.", params: { rango: [2, 19] } },
      ],
      [
        EXP("Comparar", [
          P("Si un grupo tiene 8 y otro 5, ¿cuál tiene más?", ["El de 5", "El de 8", "Los dos igual", "Ninguno"], 1, "8 es mayor que 5, así que el grupo de 8 tiene más.", "Compara los números: 8 y 5."),
          P("¿Cuál número es menor?", ["9", "6", "8", "7"], 1, "El 6 es el más pequeño de la lista.", "Busca el número que está más abajo en la recta."),
          P("¿Qué número es igual a 3 + 3?", ["5", "6", "7", "4"], 1, "3 más 3 es 6.", "Junta los dos grupos de tres."),
          P("Ordenados de menor a mayor: 4, 7, 2. ¿Cuál va primero?", ["7", "4", "2", "Ninguno"], 2, "El 2 es el menor, va primero.", ""),
        ]),
      ],
      null
    ),
    T(
      "Sumo con objetos",
      "Resuelve sumas hasta el 10 usando objetos o dibujos para representar la cantidad.",
      "Sumar con material concreto y representar cantidades.",
      [
        D("Sumar es juntar", "Si tienes 2 canicas y juntas 3 más, ahora tienes todas juntas: 5.", "➕"),
        D("Cuenta todas", "Para saber el resultado, cuenta el primer grupo, el segundo y luego todos juntos.", "🔢"),
        D("Ejemplo", "4 + 1 = 5. Empieza en 4 y cuenta uno más: 5.", "🍎"),
      ],
      [
        { id: "g1-m-4a", tipo: "addvisual", titulo: "Sumo con dibujos", n: 5, instr: "Junta los objetos, cuenta todos y toca el resultado.", params: { maxTotal: 10 } },
        { id: "g1-m-4b", tipo: "add", titulo: "Sumas de letra", n: 4, instr: "Suma los números y toca el resultado.", params: { maxTotal: 10 } },
      ],
      [
        EXP("Sumas hasta el 10", [
          P("¿Cuánto es 2 + 3?", ["4", "5", "6", "3"], 1, "2 más 3 son 5. Junta los dos grupos y cuenta.", "Cuenta: dos... tres más."),
          P("¿Cuánto es 4 + 4?", ["6", "7", "8", "9"], 2, "4 más 4 son 8.", "Cuenta a partir de 4: 5, 6, 7, 8."),
          P("Si tengo 6 globos y me dan 1 más, ¿cuántos tengo?", ["6", "7", "8", "5"], 1, "6 más 1 es 7.", "Empieza en 6 y cuenta uno más."),
          P("¿Cuál suma da 10?", ["5 + 5", "3 + 3", "2 + 2", "1 + 1"], 0, "5 + 5 = 10. Es la suma de los dos dedos de una mano.", ""),
        ]),
      ],
      null
    ),
    T(
      "Resto cantidades",
      "Resuelve restas hasta el 10 quitando objetos y contando lo que queda.",
      "Restar con material concreto y representar cantidades.",
      [
        D("Restar es quitar", "Si tienes 5 chocolates y comes 2, se van 2 y quedan menos.", "➖"),
        D("Cuenta lo que queda", "Quita los objetos y cuenta los que siguen en la mesa.", "🧮"),
        D("Ejemplo", "7 - 2 = 5. Empieza en 7 y quita dos: 6, 5.", "🍬"),
      ],
      [
        { id: "g1-m-5a", tipo: "subvisual", titulo: "Resto con dibujos", n: 5, instr: "Cuenta los objetos que quedan y toca el resultado.", params: { maxTotal: 10 } },
        { id: "g1-m-5b", tipo: "sub", titulo: "Restas de letra", n: 4, instr: "Resta los números y toca el resultado.", params: { maxTotal: 10 } },
      ],
      [
        EXP("Restas hasta el 10", [
          P("¿Cuánto es 5 - 2?", ["2", "3", "4", "1"], 1, "A 5 le quito 2 y quedan 3.", "Quita dos dedos de la mano de cinco."),
          P("Si tenía 8 canicas y perdí 3, ¿cuántas me quedan?", ["5", "6", "4", "7"], 0, "8 menos 3 son 5.", "Cuenta hacia atrás: 8, 7, 6, 5."),
          P("¿Cuál resta da 0?", ["3 - 3", "4 - 1", "5 - 2", "2 - 1"], 0, "Si quitas todo lo que tienes, quedan 0.", "Si tomas todo, no queda nada."),
          P("¿Cuánto es 10 - 5?", ["4", "5", "6", "3"], 1, "La mitad de 10 es 5; 10 menos 5 es 5.", ""),
        ]),
      ],
      null
    ),
    T(
      "Figuras y patrones",
      "Reconoce figuras geométricas básicas y continúa patrones sencillos.",
      "Reconocer figuras geométricas y identificar patrones.",
      [
        D("Figuras básicas", "El círculo no tiene puntas; el cuadrado tiene 4 lados iguales; el triángulo tiene 3 puntas.", "🔷"),
        D("Contar lados", "El cuadrado tiene 4 lados. El triángulo, 3.", "📐"),
        D("Patrones", "Un patrón es algo que se repite: estrella, círculo, estrella, círculo...", "🌟"),
      ],
      [
        { id: "g1-m-6a", tipo: "shapes", titulo: "Toco la figura", n: 4, instr: "Escucha el nombre y toca la figura correcta.", params: { pool: ["circulo", "cuadrado", "triangulo"] } },
        { id: "g1-m-6b", tipo: "pattern", titulo: "Sigo el patrón", n: 4, instr: "Mira el patrón y toca el elemento que viene.", params: {} },
      ],
      [
        EXP("Figuras y patrones", [
          P("¿Cuántos lados tiene el cuadrado?", ["3", "4", "5", "1"], 1, "El cuadrado tiene 4 lados iguales.", "Cuenta sus lados."),
          P("¿Cuál figura no tiene puntas?", ["Triángulo", "Cuadrado", "Círculo", "Ninguna"], 2, "El círculo es redondo y no tiene puntas.", "Pasa el dedo por su borde."),
          P("En el patrón «estrella, círculo, estrella...», ¿qué sigue?", ["Estrella", "Círculo", "Triángulo", "Nada"], 1, "Se repite el grupo completo: estrella, círculo.", "Mira qué se repite desde el principio."),
          P("¿Cuántas puntas tiene el triángulo?", ["4", "2", "3", "5"], 2, "El triángulo tiene 3 lados y 3 puntas.", "Cuenta sus puntas."),
        ]),
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Naturales ---------------- */
  G1.cnaturales = [
    T(
      "Seres vivos y objetos",
      "Distingue seres vivos de objetos inertes y da ejemplos de cada uno.",
      "Reconocer seres vivos y objetos inertes.",
      [
        D("Seres vivos", "Los seres vivos crecen, se mueven y necesitan agua y comida: un perro, una planta, tú.", "🌱"),
        D("Objetos inertes", "Los objetos no crecen ni se mueven solos: una silla, una pelota, un lápiz.", "🛋️"),
        D("¿Cómo diferenciarlos?", "Pregúntate: ¿crece?, ¿se mueve solo?, ¿necesita comida? Si sí, es ser vivo.", "🔍"),
      ],
      [
        { id: "g1-c-1a", tipo: "clasificar", titulo: "¿Vivo o no vivo?", n: 1, instr: "Toca un nombre y después la categoría donde va.", params: {
          categorias: [{ id: "vivo", n: "Seres vivos", icono: "🌱" }, { id: "obj", n: "Objetos", icono: "🛋️" }],
          items: [
            { t: "PERRO", cat: "vivo" }, { t: "MESA", cat: "obj" }, { t: "FLOR", cat: "vivo" },
            { t: "LÁPIZ", cat: "obj" }, { t: "GATO", cat: "vivo" }, { t: "PELOTA", cat: "obj" },
          ],
        } },
        { id: "g1-c-1b", tipo: "explica", titulo: "¿Qué aprendí?", n: 3, instr: "Responde; si fallas aprenderás el porqué.", params: { preguntas: [
          P("¿Cuál es ser vivo?", ["SILLA", "PERRO", "MESA", "PELOTA"], 1, "El perro crece, se mueve y come: es un ser vivo.", "¿Crece y se mueve solo?"),
          P("¿Cuál es un objeto?", ["ÁRBOL", "GATO", "LÁPIZ", "PEZ"], 2, "El lápiz no crece ni se mueve: es un objeto.", ""),
          P("¿Por qué una planta es ser vivo?", ["Porque es verde", "Porque crece y necesita agua", "Porque es bonita", "Porque es un objeto"], 1, "Las plantas crecen y necesitan agua y luz.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Mi cuerpo y mis sentidos",
      "Identifica las partes principales del cuerpo y los cinco sentidos.",
      "Identificar partes del cuerpo y sentidos.",
      [
        D("Mi cuerpo", "Cabeza, tronco, brazos y piernas son las partes principales de mi cuerpo.", "🧍"),
        D("Los sentidos", "Veo con los ojos, escucho con los oídos, huelo con la nariz, gusto con la boca y toco con las manos.", "👃"),
        D("Cuido mi cuerpo", "Me lavo las manos, como sano y descanso para cuidar mi cuerpo.", "🧼"),
      ],
      [
        { id: "g1-c-2a", tipo: "emparejar", titulo: "¿Con qué lo siento?", n: 1, instr: "Toca un sentido y después el órgano con que lo usamos.", params: {
          parejas: [
            { a: "VER", b: "OJOS" }, { a: "ESCUCHAR", b: "OÍDOS" }, { a: "OLER", b: "NARIZ" },
            { a: "GUSTAR", b: "BOCA" }, { a: "TOCAR", b: "MANOS" },
          ],
        } },
        { id: "g1-c-2b", tipo: "explica", titulo: "Mi cuerpo", n: 3, instr: "Piensa y responde.", params: { preguntas: [
          P("¿Con qué parte del cuerpo caminas?", ["Brazos", "Piernas", "Cabeza", "Ojos"], 1, "Las piernas nos sirven para caminar y correr.", ""),
          P("¿Con qué sentido hueles la comida?", ["Oído", "Vista", "Olfato", "Tacto"], 2, "El olfato es el sentido del olor: lo usamos con la nariz.", "Usas la nariz."),
          P("¿Cuántos sentidos tenemos?", ["Tres", "Cuatro", "Cinco", "Diez"], 2, "Son cinco: vista, oído, olfato, gusto y tacto.", "Cuenta con los dedos."),
        ] } },
      ],
      null
    ),
    T(
      "Cuidamos el planeta",
      "Identifica hábitos sencillos para cuidar el agua, la basura y los seres vivos.",
      "Identificar hábitos de cuidado del ambiente.",
      [
        D("No desperdiciar agua", "Cierra el llave mientras te lavas los dientes. Así ahorras agua.", "💧"),
        D("Tirar la basura", "La basura va en el cesto. Si la reciclamos, ayudamos a la tierra.", "🗑️"),
        D("Cuidar a los seres vivos", "No rompemos las plantas ni molestamos a los animales.", "🌳"),
      ],
      [
        { id: "g1-c-3a", tipo: "clasificar", titulo: "Acciones que ayudan", n: 1, instr: "Toca una acción y después dónde va: ayuda o daña.", params: {
          categorias: [{ id: "si", n: "Ayuda al planeta", icono: "💚" }, { id: "no", n: "Le hace daño", icono: "⚠️" }],
          items: [
            { t: "CERRAR LA LLAVE", cat: "si" }, { t: "TIRAR BASURA AL RÍO", cat: "no" },
            { t: "RECYCLAR EL PAPEL", cat: "si" }, { t: "ROMPER FLORES", cat: "no" },
            { t: "APAGAR LA LUZ", cat: "si" },
          ],
        } },
        { id: "g1-c-3b", tipo: "explica", titulo: "Cuidar el ambiente", n: 3, instr: "Responde pensando en el planeta.", params: { preguntas: [
          P("¿Dónde va la basura?", ["Al piso", "Al cesto", "Al agua", "A la mesa"], 1, "La basura siempre va al cesto o al contenedor.", ""),
          P("¿Qué acción ahorra agua?", ["Dejar la llave abierta", "Cerrar la llave al lavarse", "Tirar juguetes al río", "Jugar con la manguera"], 1, "Cerrar la llave mientras no usas el agua la ahorra.", ""),
          P("¿Por qué no debemos romper las plantas?", ["Porque son verdes", "Porque son seres vivos y ayudan al ambiente", "Porque son feas", "Porque son objetos"], 1, "Las plantas son seres vivos; dan aire limpio y son parte del ecosistema.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Sociales ---------------- */
  G1.csociales = [
    T(
      "Mi familia y mi casa",
      "Reconoce a los miembros de su familia y las actividades que comparten.",
      "Reconocer su familia, escuela y comunidad.",
      [
        D("Mi familia", "La familia es el grupo de personas que nos quieren y cuidan: papá, mamá, hermanos, abuelos.", "👪"),
        D("Distintas familias", "Hay familias grandes y pequeñas; algunas viven juntas y otras no. Todas son valiosas.", "💛"),
        D("En casa", "En casa descansamos, comemos y compartimos con quienes nos quieren.", "🏠"),
      ],
      [
        { id: "g1-s-1a", tipo: "explica", titulo: "Mi familia", n: 3, instr: "Piensa en tu familia y responde.", params: { preguntas: [
          P("¿Quiénes forman la familia de una niña?", ["Solo su mamá", "Las personas que la quieren y cuidan", "Solo sus juguetes", "Sus maestros"], 1, "La familia son las personas que cuidan y quieren al niño o a la niña.", ""),
          P("¿Qué hacemos en casa?", ["Dormimos y compartimos", "Solo trabajamos", "No hacemos nada", "Solo jugamos en la calle"], 0, "En casa descansamos, comemos y compartimos con la familia.", ""),
          P("¿Cómo son las familias?", ["Todas iguales", "Hay distintas y todas son valiosas", "Solo hay una", "Ninguna"], 1, "Hay familias grandes y pequeñas; todas son importantes.", ""),
        ] } },
        { id: "g1-s-1b", tipo: "clasificar", titulo: "¿Dónde lo hacemos?", n: 1, instr: "Toca la actividad y el lugar donde se hace.", params: {
          categorias: [{ id: "casa", n: "En casa", icono: "🏠" }, { id: "esc", n: "En la escuela", icono: "🏫" }],
          items: [
            { t: "DORMIR", cat: "casa" }, { t: "APRENDER A LEER", cat: "esc" },
            { t: "COMER EN FAMILIA", cat: "casa" }, { t: "JUGAR EN EL PATIO", cat: "esc" },
            { t: "BAÑARSE", cat: "casa" },
          ],
        } },
      ],
      null
    ),
    T(
      "Normas de convivencia",
      "Reconoce normas sencillas para convivir en la casa y la escuela.",
      "Identificar normas de convivencia.",
      [
        D("¿Qué es una norma?", "Una norma es una regla que nos ayuda a vivir bien juntos.", "📏"),
        D("Ejemplos", "Esperar el turno, levantar la mano, escuchar al otro y compartir.", "🤝"),
        D("Cuando hay conflicto", "Si discutimos, podemos hablar con calma y pedir ayuda a un adulto.", "💬"),
      ],
      [
        { id: "g1-s-2a", tipo: "explica", titulo: "Normas", n: 3, instr: "Piensa en cómo convivimos y responde.", params: { preguntas: [
          P("¿Por qué esperamos el turno?", ["Porque nos obligan", "Para convivir bien con los demás", "Porque es aburrido", "No hay razón"], 1, "Esperar el turno nos permite jugar juntos sin pelearnos.", ""),
          P("En clase, cuando quiero hablar...", ["Grito", "Levanto la mano", "Corto al maestro", "No digo nada"], 1, "Levantar la mano es la norma para pedir la palabra.", ""),
          P("Si quiero un juguete que usa otro compañero...", ["Lo quito", "Pido esperar mi turno o pido prestado", "Lloro", "Golpeo"], 1, "Pedir con calma o esperar el turno es la mejor opción.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Mi escuela y los símbolos patrios",
      "Reconoce su escuela y los símbolos patrios de Colombia.",
      "Ubicarse en espacios cotidianos; identificar símbolos patrios.",
      [
        D("Mi escuela", "En la escuela aprendo, juego y hago amigos. Tiene salón, patio y biblioteca.", "🏫"),
        D("Símbolos patrios", "Son los símbolos del país: la bandera, el escudo y el himno.", "🌺"),
        D("La bandera", "La bandera de Colombia es amarilla, azul y roja. Aparece en escuelas y actos oficiales.", "🚩"),
      ],
      [
        { id: "g1-s-3a", tipo: "explica", titulo: "Mi escuela y mi país", n: 4, instr: "Responde sobre tu escuela y tus símbolos.", params: { preguntas: [
          P("¿Dónde aprendes cada día?", ["En la tienda", "En la escuela", "En el parque", "En el hospital"], 1, "La escuela es el lugar donde aprendemos.", ""),
          P("¿Cuáles son los colores de la bandera de Colombia?", ["Verde y blanco", "Azul y negro", "Amarilla, azul y roja", "Roja y verde"], 2, "La bandera colombiana es amarilla, azul y roja.", "Son tres franjas."),
          P("¿Qué es un símbolo patrio?", ["Un juguete", "Un símbolo del país, como la bandera", "Una comida", "Un animal"], 1, "Los símbolos patrios representan al país: bandera, escudo e himno.", ""),
          P("¿Dónde jugamos en la escuela?", ["En el patio", "En la cocina", "En el río", "En el cielo"], 0, "El patio es el lugar del recreo.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Inglés ---------------- */
  G1.ingles = [
    T(
      "Greetings — Saludos",
      "Comprende y usa saludos básicos en inglés: hello, hi, goodbye.",
      "Inglés: saludar y presentarse.",
      [
        D("Hello / Hi", "«Hello» y «hi» significan hola. Se usan al encontrarse con alguien.", "👋"),
        D("Goodbye", "«Goodbye» significa adiós. Se dice al despedirse.", "👋"),
        D("How are you?", "«How are you?» pregunta cómo estás. Se responde «I'm fine, thank you».", "💬"),
      ],
      [
        { id: "g1-i-1a", tipo: "emparejar", titulo: "Match the greetings", n: 1, instr: "Toca la palabra en inglés y después su significado.", params: {
          voz: "en",
          parejas: [
            { a: "HELLO", b: "HOLA", audio: "hello" }, { a: "GOODBYE", b: "ADIOS", audio: "goodbye" },
            { a: "PLEASE", b: "POR FAVOR", audio: "please" }, { a: "THANK YOU", b: "GRACIAS", audio: "thank you" },
          ],
        } },
        { id: "g1-i-1b", tipo: "explica", titulo: "Greetings", n: 3, instr: "Escucha con atención y responde.", params: { preguntas: [
          P("Si alguien te dice «Hello», ¿qué significa?", ["Adiós", "Hola", "Gracias", "Por favor"], 1, "«Hello» es hola.", "", "en"),
          P("¿Cómo te despides en inglés?", ["Hello", "Goodbye", "Thank you", "Yes"], 1, "«Goodbye» es adiós.", "", "en"),
          P("Escucha: «Thank you». ¿Qué significa?", ["Por favor", "Gracias", "Hola", "No"], 1, "«Thank you» es gracias.", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Colors — Colores",
      "Reconoce y nombra los colores básicos en inglés: red, blue, yellow, green.",
      "Inglés: reconocer colores.",
      [
        D("Colores básicos", "Red es rojo, blue es azul, yellow es amarillo y green es verde.", "🎨"),
        D("Repite el sonido", "«Red» suena «red». «Blue» suena «blu». Repite en voz alta.", "🗣️"),
        D("En la frase", "«The ball is red» significa la pelota es roja.", "💬"),
      ],
      [
        { id: "g1-i-2a", tipo: "emparejar", titulo: "Match the colors", n: 1, instr: "Toca el color en inglés y su significado en español.", params: {
          voz: "en",
          parejas: [
            { a: "RED", b: "ROJO", audio: "red" }, { a: "BLUE", b: "AZUL", audio: "blue" },
            { a: "YELLOW", b: "AMARILLO", audio: "yellow" }, { a: "GREEN", b: "VERDE", audio: "green" },
            { a: "BLACK", b: "NEGRO", audio: "black" },
          ],
        } },
        { id: "g1-i-2b", tipo: "explica", titulo: "Colors", n: 3, instr: "Piensa en el color y responde.", params: { preguntas: [
          P("¿Qué significa «red»?", ["Azul", "Rojo", "Verde", "Amarillo"], 1, "Red es rojo.", "", "en"),
          P("El cielo es de color...", ["Red", "Blue", "Black", "Green"], 1, "El cielo es azul: «blue».", "", "en"),
          P("¿Cómo se dice amarillo?", ["Green", "Blue", "Yellow", "Red"], 2, "Yellow es amarillo.", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Numbers — Números",
      "Reconoce y cuenta en inglés del uno al diez: one to ten.",
      "Inglés: reconocer números.",
      [
        D("One to ten", "One, two, three, four, five, six, seven, eight, nine, ten.", "🔢"),
        D("Cuenta en inglés", "One finger, two fingers... cuenta con los dedos en inglés.", "☝️"),
        D("How many?", "«How many?» pregunta cuántos. Se responde con números: three, five...", "❓"),
      ],
      [
        { id: "g1-i-3a", tipo: "explica", titulo: "Numbers", n: 4, instr: "Escucha el número y responde.", params: { preguntas: [
          P("Escucha: «three». ¿Cuál número es?", ["3", "5", "2", "4"], 0, "Three es tres.", "", "en"),
          P("¿Cómo se dice 5 en inglés?", ["Four", "Five", "Six", "Ten"], 1, "Five es cinco.", "", "en"),
          P("One, two, ... ¿qué sigue?", ["Five", "Four", "Three", "Six"], 2, "Después de two viene three.", "", "en"),
          P("¿Cómo se dice diez?", ["Nine", "Eight", "Ten", "Seven"], 2, "Ten es diez.", "", "en"),
        ] } },
        { id: "g1-i-3b", tipo: "count", titulo: "Count in English", n: 3, instr: "Cuenta los objetos y toca el número.", params: { rango: [1, 10], sustantivo: "apples" } },
      ],
      null
    ),
  ];

  /* ---------------- Tecnología ---------------- */
  G1.tecnologia = [
    T(
      "Conozco el computador",
      "Identifica las partes básicas del computador y su función.",
      "Tecnología: identificar dispositivos y funciones básicas.",
      [
        D("Sus partes", "El computador tiene pantalla, teclado, ratón y CPU. Cada parte tiene una función.", "💻"),
        D("La pantalla", "La pantalla muestra lo que hacemos: letras, dibujos y juegos.", "🖥️"),
        D("Ratón y teclado", "El ratón sirve para señalar y elegir; el teclado, para escribir letras y números.", "🖱️"),
      ],
      [
        { id: "g1-t-1a", tipo: "explica", titulo: "Partes del computador", n: 3, instr: "Piensa en las partes y responde.", params: { preguntas: [
          P("¿Para qué sirve la pantalla?", ["Ver lo que hacemos", "Para comer", "Para dormir", "Para escribir con la mano"], 0, "La pantalla muestra letras, dibujos y juegos.", ""),
          P("¿Con qué parte señalamos y elegimos?", ["Teclado", "Ratón", "Pantalla", "CPU"], 1, "Con el ratón señalamos y hacemos clic.", ""),
          P("¿Con qué parte escribimos letras?", ["Teclado", "Ratón", "Pantalla", "Silla"], 0, "El teclado tiene letras y números para escribir.", ""),
        ] } },
        { id: "g1-t-1b", tipo: "ordenar", titulo: "¿Qué parte es?", n: 1, instr: "Ordena las partes de menor a mayor importancia para empezar.", params: { consigna: "Toca en orden las partes que usamos para escribir una palabra.", items: ["RATÓN: señalar", "TECLADO: escribir letras", "PANTALLA: ver lo que escribimos"] } },
      ],
      null
    ),
    T(
      "Uso el ratón y el teclado",
      "Practica los movimientos básicos del ratón y la escritura de letras con el teclado.",
      "Tecnología: usar el ratón y el teclado.",
      [
        D("Clic", "Clic significa presionar el botón del ratón una vez para elegir algo.", "🖱️"),
        D("Escribir", "Con el teclado escribimos letras, números y signos.", "⌨️"),
        D("Practica", "Escribe tu nombre con el teclado. Despacio y con cuidado.", "✍️"),
      ],
      [
        { id: "g1-t-2a", tipo: "type-word", titulo: "Escribo con el teclado", n: 3, instr: "Escribe la palabra usando el teclado.", params: { pool: undefined } },
        { id: "g1-t-2b", tipo: "explica", titulo: "Hábitos de uso", n: 2, instr: "Piensa en cómo usas el computador.", params: { preguntas: [
          P("¿Cómo debo sentarme al usar el computador?", ["Encorvado", "Derecho y cómodo", "Acostado", "De pie en la mesa"], 1, "Sentarse derecho y a una distancia cómoda cuida la vista y la espalda.", ""),
          P("¿Qué hago cuando no sé qué tecla usar?", ["Golpeo el teclado", "Pido ayuda", "Apago todo", "Lloro"], 1, "Pedir ayuda es siempre una buena opción.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Cuido los aparatos",
      "Explica cómo cuidar el computador y otros aparatos de la casa.",
      "Tecnología: cuidado de equipos tecnológicos.",
      [
        D("Manos limpias", "Antes de tocar el computador me lavo las manos: la mugre entra entre las teclas.", "🧼"),
        D("Comida aparte", "La comida o la bebida cerca del computador pueden derramarse y romperlo.", "🍎"),
        D("Apagar bien", "Apagar con el botón correcto y con calma cuida el aparato.", "⏻"),
      ],
      [
        { id: "g1-t-3a", tipo: "explica", titulo: "Cuidado de aparatos", n: 3, instr: "Piensa en cómo cuidas los aparatos y responde.", params: { preguntas: [
          P("¿Qué hago antes de usar el computador?", ["Me lavo las manos", "Como encima del teclado", "No lavo nada", "Juego con barro"], 0, "Las manos limpias cuidan las teclas y la pantalla.", ""),
          P("¿Puedo poner el vaso de jugo sobre el escritorio, junto al computador?", ["Sí, con cuidado", "No: si se derrama lo daña", "Solo un poquito", "Si es agua sí"], 1, "Los líquidos y los aparatos no se llevan bien.", "Imagina que alguien tropieza con el vaso."),
          P("¿Cómo limpio la pantalla?", ["Con agua y jabón", "Con un paño suave y seco", "Con la manga", "Con papel mojado"], 1, "Un paño suave y seco deja la pantalla limpia y sin rayones.", ""),
        ] } },
        { id: "g1-t-3b", tipo: "ordenar", titulo: "Uso con cuidado", n: 1, instr: "Ordena los pasos del uso cuidadoso del computador.", params: {
          consigna: "Ordena: 1) me lavo las manos, 2) enciendo con calma, 3) uso y cierro, 4) apago y guardo.",
          items: ["Me lavo las manos", "Enciendo con calma", "Uso y cierro lo que abrí", "Apago y guardo"],
        } },
      ],
      [EXP("Cuidamos los aparatos", [
        P("¿Por qué no debo comer cerca del computador?", ["Porque no me gusta", "Porque la comida o el líquido pueden dañarlo", "Porque es sucio nomás", "Porque prohíben"], 1, "Las migas tapan las teclas y los líquidos pueden romper el aparato entero.", ""),
        P("¿Qué hago cuando termino de usarlo?", ["Lo dejo encendido", "Apago con el botón y lo guardo", "Lo tapo con una cobija", "Lo empujo al suelo"], 1, "Apagar bien y guardarlo con calma alarga la vida del aparato.", ""),
        P("¿Quién me ayuda si un aparato se daña?", ["Nadie, lo escondo", "Un adulto de confianza", "Lo tiro a la basura", "Lo golpeo"], 1, "Si algo falla, busco ayuda de un adulto; nunca abro los aparatos yo solo.", ""),
      ]) ],
      null
    ),
    T(
      "Dispositivos de mi casa",
      "Reconoce dispositivos tecnológicos de la casa y para qué sirven.",
      "Tecnología: identificar dispositivos y funciones.",
      [
        D("Celular y tablet", "Sirven para comunicarnos y aprender, siempre con permiso de un adulto.", "📱"),
        D("Tele y radio", "La televisión y la radio informan y entretienen; se usan con moderación.", "📻"),
        D("También la nevera", "La nevera conserva los alimentos y la lavadora limpia la ropa: también son tecnología.", "🧊"),
      ],
      [
        { id: "g1-t-4a", tipo: "clasificar", titulo: "¿Para qué sirve?", n: 1, instr: "Toca la categoría y después cada aparato.", params: {
          categorias: [
            { id: "com", n: "PARA COMUNICARNOS", icono: "📞" },
            { id: "hog", n: "DEL HOGAR", icono: "🏠" },
          ],
          items: [
            { t: "CELULAR", cat: "com" }, { t: "NEVERA", cat: "hog" },
            { t: "RADIO", cat: "com" }, { t: "LAVADORA", cat: "hog" },
            { t: "TABLET", cat: "com" }, { t: "HORNO", cat: "hog" },
          ],
        } },
        { id: "g1-t-4b", tipo: "explica", titulo: "Aparatos útiles", n: 2, instr: "Responde sobre los aparatos de la casa.", params: { preguntas: [
          P("¿Para qué sirve principalmente el celular?", ["Para aplastar hormigas", "Para comunicarnos y buscar información", "Para cocinar", "Para dormir"], 1, "El celular nos comunica y nos ayuda a aprender, con acompañamiento.", ""),
          P("¿Los electrodomésticos también son tecnología?", ["No, son cosas viejas", "Sí: ayudan en las tareas diarias de la casa", "Solo la televisión", "Solo la lavadora"], 1, "Tecnología es todo lo que creamos para solucionar necesidades, hasta la nevera.", ""),
        ] } },
      ],
      [EXP("Dispositivos alrededor", [
        P("¿Qué hago si quiero usar la tablet?", ["La tomo sin preguntar", "Pido permiso y acordamos el tiempo", "La escondo", "Lloro hasta que me la den"], 1, "El uso acompañado y con tiempo acordado cuida mis ojos y mi descanso.", ""),
        P("¿Cuál de estos aparatos ayuda a conservar la comida?", ["La nevera", "La radio", "El celular", "La televisión"], 0, "La nevera mantiene los alimentos frescos por más tiempo.", ""),
        P("¿Con qué aparato escuchamos noticias y música por la radio?", ["Con la nevera", "Con el televisor", "Con la radio", "Con la lavadora"], 2, "La radio recibe señales y reproduce sonidos: informa y entretiene.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Artística ---------------- */
  G1.artistica = [
    T(
      "Líneas, formas y colores",
      "Explora líneas, formas y colores para crear dibujos sencillos.",
      "Educación artística: explorar líneas, formas y colores.",
      [
        D("Tipos de línea", "Hay línea recta, curva, quebrada y circular. Con ellas construimos todo.", "〰️"),
        D("Formas", "Con círculos, cuadrados y triángulos podemos dibujar casas, soles y animales.", "🔶"),
        D("Colores", "Mezclar colores crea otros nuevos: azul + amarillo = verde.", "🎨"),
      ],
      [
        { id: "g1-a-1a", tipo: "explica", titulo: "Arte básico", n: 3, instr: "Mira, piensa y responde.", params: { preguntas: [
          P("¿Cuál línea no tiene curvas?", ["Recta", "Curva", "Quebrada", "Circular"], 0, "La línea recta va derecha, sin curvas.", ""),
          P("Si mezclo azul y amarillo, ¿qué color obtengo?", ["Rojo", "Verde", "Morado", "Naranja"], 1, "Azul con amarillo produce verde.", "Imagínalos juntos."),
          P("¿Con qué figura dibujo un sol?", ["Cuadrado", "Círculo", "Triángulo", "Rectángulo"], 1, "El sol se dibuja con un círculo.", ""),
        ] } },
        { id: "g1-a-1b", tipo: "clasificar", titulo: "A qué categoría pertenece", n: 1, instr: "Toca la palabra y la categoría artística.", params: {
          categorias: [{ id: "lin", n: "Líneas", icono: "〰️" }, { id: "fig", n: "Figuras", icono: "🔷" }],
          items: [
            { t: "RECTA", cat: "lin" }, { t: "CURVA", cat: "lin" }, { t: "CÍRCULO", cat: "fig" },
            { t: "CUADRADO", cat: "fig" }, { t: "QUEBRADA", cat: "lin" },
          ],
        } },
      ],
      null
    ),
    T(
      "Ritmo y movimiento",
      "Reconoce ritmos sencillos y los acompaña con el cuerpo.",
      "Educación artística: explorar ritmo y canciones.",
      [
        D("¿Qué es el ritmo?", "El ritmo es el patrón de sonidos en el tiempo: pa, pa, pa.", "🥁"),
        D("Mi cuerpo hace ritmo", "Puedes palmas, pies o tocar una mesa para hacer ritmo.", "👏"),
        D("Canciones", "Las canciones tienen ritmo y palabras; cantar ayuda a aprender.", "🎵"),
      ],
      [
        { id: "g1-a-2a", tipo: "ordenar", titulo: "Sigo el ritmo", n: 1, instr: "Ordena los pasos del ritmo.", params: { consigna: "Toca en orden cómo acompañamos el ritmo.", items: ["PALMAS (pa)", "PIES (pa)", "PALMAS (pa)", "SILENCIO"] } },
        { id: "g1-a-2b", tipo: "explica", titulo: "Ritmo", n: 2, instr: "Piensa en el ritmo y responde.", params: { preguntas: [
          P("¿Qué es el ritmo?", ["Un color", "El patrón de sonidos en el tiempo", "Un dibujo", "Una comida"], 1, "El ritmo es la repetición ordenada de sonidos.", ""),
          P("¿Con qué puedo hacer ritmo?", ["Solo con instrumentos", "Con palmas, pies o una mesa", "Nunca", "Solo cantando"], 1, "El cuerpo y los objetos cotidianos también hacen ritmo.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Colores cálidos y fríos",
      "Diferencia colores cálidos y fríos y asocia sensaciones con los colores.",
      "Educación artística: exploración del color y su expresión.",
      [
        D("Cálidos", "Rojo, naranja y amarillo son cálidos: recuerdan el sol, el fuego y la alegría.", "🔥"),
        D("Fríos", "Azul, verde y morado son fríos: recuerdan el agua, el hielo y la calma.", "❄️"),
        D("Los dos juntos", "Juntar colores cálidos y fríos hace dibujos con más vida y contraste.", "🎨"),
      ],
      [
        { id: "g1-a-3a", tipo: "clasificar", titulo: "Cálido o frío", n: 1, instr: "Toca la categoría y después cada color.", params: {
          categorias: [
            { id: "cal", n: "COLOR CÁLIDO", icono: "🔥" },
            { id: "fri", n: "COLOR FRÍO", icono: "❄️" },
          ],
          items: [
            { t: "ROJO", cat: "cal" }, { t: "AZUL", cat: "fri" },
            { t: "AMARILLO", cat: "cal" }, { t: "VERDE", cat: "fri" },
            { t: "NARANJA", cat: "cal" }, { t: "MORADO", cat: "fri" },
          ],
        } },
        { id: "g1-a-3b", tipo: "explica", titulo: "Sensaciones del color", n: 2, instr: "Piensa en lo que sientes con cada color.", params: { preguntas: [
          P("¿Cuál de estos es un color cálido?", ["El naranja", "El azul", "El verde", "El morado"], 0, "Naranja, rojo y amarillo son cálidos; traen a la memoria el sol y el fuego.", ""),
          P("¿Con qué colores pintarías una escena de agua y calma?", ["Rojo y naranja", "Azul y verde", "Amarillo", "Naranja y rojo"], 1, "Los colores fríos transmiten frescura y tranquilidad.", ""),
        ] } },
      ],
      [EXP("El color y lo que siento", [
        P("Si quiero un dibujo alegre como el sol, uso colores...", ["cálidos", "fríos", "gris solo", "negros"], 0, "Los cálidos (rojo, naranja, amarillo) despiertan alegría y energía.", ""),
        P("Pintar una noche de luna tranquila me sirven...", ["rojo y naranja", "azul y morado", "naranja", "amarillo"], 1, "Los fríos acalmantan la mirada y sirven para noches y agua.", ""),
        P("¿Qué pasa si mezclo cálidos y fríos en un cuadro?", ["Queda peor siempre", "Puede quedar más vivo y con contraste", "Se hace negro", "No se puede"], 1, "El contraste entre cálidos y fríos da vida y movimiento al dibujo.", ""),
      ]) ],
      null
    ),
    T(
      "Creo con formas y volumen",
      "Reconoce formas con volumen (esfera, cubo, cilindro) en objetos reales.",
      "Educación artística: formas y volúmenes del entorno.",
      [
        D("Esfera", "La pelota y la naranja son esferas: redondas por todos lados.", "⚽"),
        D("Cubo", "La caja de regalo y el dado son cubos: tienen caras cuadradas.", "🎲"),
        D("Cilindro", "El vaso y la lata son cilindros: redondos arriba y abajo.", "🥫"),
      ],
      [
        { id: "g1-a-4a", tipo: "clasificar", titulo: "¿Qué forma tiene?", n: 1, instr: "Toca la forma y después cada objeto.", params: {
          categorias: [
            { id: "esf", n: "ESFERA", icono: "⚽" },
            { id: "cub", n: "CUBO", icono: "🎲" },
            { id: "cil", n: "CILINDRO", icono: "🥫" },
          ],
          items: [
            { t: "PELOTA", cat: "esf" }, { t: "DADO", cat: "cub" },
            { t: "VASO", cat: "cil" }, { t: "NARANJA", cat: "esf" },
            { t: "CAJA DE TÉ", cat: "cub" }, { t: "LATA DE JUGO", cat: "cil" },
          ],
        } },
        { id: "g1-a-4b", tipo: "explica", titulo: "Volumen en objetos", n: 2, instr: "Mira los objetos de tu casa y responde.", params: { preguntas: [
          P("¿Qué forma tiene una pelota?", ["Cuadrada", "Esfera", "Triangular", "Plana"], 1, "La esfera es redonda en toda su superficie; rueda por eso.", ""),
          P("¿Cuál de estos es un cilindro?", ["El dado", "El vaso", "La pelota", "La servilleta"], 1, "El cilindro tiene dos bases redondas y el cuerpo recto.", ""),
        ] } },
      ],
      [EXP("Formas con volumen", [
        P("Un cubo tiene caras...", ["redondas", "cuadradas", "triangulares", "curvas"], 1, "El cubo tiene 6 caras iguales, todas cuadradas.", ""),
        P("La esfera...", ["rueda porque es redonda", "tiene puntas", "es plana", "tiene asas"], 0, "Por su redondez, la esfera rueda en cualquier dirección.", ""),
        P("El vaso de la cocina se parece a un...", ["cubo", "cilindro", "esfera", "plano"], 1, "Tiene base redonda y cuerpo recto: es un cilindro.", "Fíjate en la lata de atún."),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Física ---------------- */
  G1.efisica = [
    T(
      "Me muevo con seguridad",
      "Practica desplazamientos, saltos y equilibrios con seguridad.",
      "Educación física: desplazamientos, saltos y equilibrio.",
      [
        D("Desplazamientos", "Caminar, correr, saltar y arrastrarse son formas de desplazarme.", "🏃"),
        D("Equilibrio", "Mejorar el equilibrio es pararse en un pie y mantenerse sin caer.", "⚖️"),
        D("Seguridad", "Antes de moverme miro si el espacio está libre de obstáculos.", "⚠️"),
      ],
      [
        { id: "g1-f-1a", tipo: "explica", titulo: "Me muevo", n: 3, instr: "Piensa en tu cuerpo y responde.", params: { preguntas: [
          P("¿Qué hago antes de correr en un espacio?", ["Miro si está libre", "Cierro los ojos", "Corro sin mirar", "Nada"], 0, "Mirar el espacio evita choques y caídas.", ""),
          P("¿Cómo mejoro el equilibrio?", ["Parándome en un pie", "Dormido", "Sentado siempre", "Comiendo"], 0, "Practicar pararse en un pie mejora el equilibrio.", ""),
          P("¿Cuál NO es un desplazamiento?", ["Caminar", "Saltar", "Dormir", "Rodar"], 2, "Dormir no es desplazarse; el cuerpo está quieto.", ""),
        ] } },
        { id: "g1-f-1b", tipo: "ordenar", titulo: "Secuencia de movimientos", n: 1, instr: "Ordena los movimientos de la rutina.", params: { consigna: "Ordena la rutina de movimiento.", items: ["CALIENTO: estirar", "ME MUEVO: caminar o correr", "ENFRIO: respirar y estirar", "DESCANSO: tomo agua"] } },
      ],
      null
    ),
    T(
      "Higiene y cuidado del cuerpo",
      "Identifica hábitos de higiene y su importancia para la salud.",
      "Educación física: hábitos de higiene.",
      [
        D("Lavarse las manos", "Me lavo las manos antes de comer y después de ir al baño.", "🧼"),
        D("Comer sano", "Frutas y verduras me dan energía para jugar y aprender.", "🍎"),
        D("Descansar", "Dormir bien ayuda a crecer y a aprender mejor.", "😴"),
      ],
      [
        { id: "g1-f-2a", tipo: "ordenar", titulo: "Lavado de manos", n: 1, instr: "Ordena los pasos para lavarse bien las manos.", params: { consigna: "Toca en orden los pasos del lavado de manos.", items: ["ME MOJO LAS MANOS", "ME PONGO JABÓN", "ME FRICCO BIEN", "ME ENJUGO CON LA TOALLA"] } },
        { id: "g1-f-2b", tipo: "explica", titulo: "Cuidado del cuerpo", n: 2, instr: "Piensa en tus hábitos y responde.", params: { preguntas: [
          P("¿Cuándo debo lavarme las manos?", ["Solo a veces", "Antes de comer y después del baño", "Nunca", "Solo los domingos"], 1, "Lavarse las manos en esos momentos evita enfermedades.", ""),
          P("¿Qué me da energía para jugar?", ["Comer solo dulces", "Frutas y comidas sanas", "No comer", "Dormir poco"], 1, "Las frutas y las comidas sanas dan energía de verdad.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Juegos con reglas",
      "Comprende por qué las reglas hacen el juego justo y aprende a cooperar.",
      "Educación física: juegos tradicionales y cooperativos.",
      [
        D("Las reglas", "Las reglas se acuerdan antes y hacen que el juego sea justo para todos.", "📜"),
        D("Ganar y perder", "Ganar es divertido y perder también enseña a mejorar sin enojarse.", "🏅"),
        D("Jugar juntos", "En los juegos cooperativos todos ganamos si nos ayudamos.", "🤝"),
      ],
      [
        { id: "g1-f-3a", tipo: "ordenar", titulo: "Antes y después del juego", n: 1, instr: "Ordena los pasos de un juego con reglas.", params: {
          consigna: "Ordena: 1) escucho las reglas, 2) juego respetándolas, 3) gano o pierdo con calma, 4) recojo con el equipo.",
          items: ["Escucho las reglas", "Juego respetándolas", "Gano o pierdo con calma", "Recojo con el equipo"],
        } },
        { id: "g1-f-3b", tipo: "explica", titulo: "Juego justo", n: 2, instr: "Piensa en cómo es un buen juego.", params: { preguntas: [
          P("¿Qué hago si pierdo y me enojo un poco?", ["Grito y paro el juego", "Respiro, felicito al que ganó y sigo", "Hago trampa", "Me voy sin avisar"], 1, "Perder con calma nos hace más fuertes y el juego sigue siendo divertido.", ""),
          P("¿Puedo cambiar las reglas a mitad del juego porque me conviene?", ["Sí, siempre", "No: se acuerdan antes", "Solo si soy el más rápido", "Da igual"], 1, "Las reglas se acuerdan al empezar; cambiarlas a conveniencia no es justo.", ""),
        ] } },
      ],
      [EXP("Juego limpio y cooperativo", [
        P("Las reglas de un juego sirven para...", ["hacerlo más largo", "que sea justo para todos", "confundir", "aburrir"], 1, "Las reglas ordenan el juego y protegen a todos los jugadores.", ""),
        P("Si mi equipo pierde, yo...", ["me burlo de quien falló", "animo y sigo jugando", "trampa", "no juego más"], 1, "El ánimo del equipo hace que todos mejoren y sigamos disfrutando.", ""),
        P("En un juego cooperativo ganamos...", ["solo el más rápido", "todos si nos ayudamos", "nadie", "quien grita más"], 1, "Cooperar es trabajar juntos por la misma meta.", ""),
      ]) ],
      null
    ),
    T(
      "Salto, lanzo y atrapo",
      "Practica saltos, lanzamientos y recepciones con seguridad.",
      "Educación física: habilidades motrices básicas.",
      [
        D("Salto", "Salgo con los dos pies juntos y caigo suave, primero en puntas de pie.", "🦘"),
        D("Lanzamiento", "Lanzo suave y nunca doy la espalda a mis compañeros.", "🤾"),
        D("Atrapada", "Atrapo con las dos manos y me quedo quieto al recibir.", "🙌"),
      ],
      [
        { id: "g1-f-4a", tipo: "ordenar", titulo: "Mi cuerpo se mueve", n: 1, instr: "Ordena la secuencia de movimientos.", params: {
          consigna: "Ordena: 1) miro que el espacio esté libre, 2) salgo en el lugar, 3) lanzo la pelota, 4) la atropo.",
          items: ["Miro que el espacio esté libre", "Salgo en el lugar", "Lanzo la pelota", "La atropo"],
        } },
        { id: "g1-f-4b", tipo: "explica", titulo: "Me muevo con seguridad", n: 3, instr: "Responde antes de jugar.", params: { preguntas: [
          P("¿Qué miro antes de saltar?", ["El piso y que no haya gente cerca", "Mi celular", "El reloj", "Nada"], 0, "Revisar el espacio evita choques y torpezas.", ""),
          P("¿Lanzo la pelota si hay alguien justo enfrente?", ["Sí, fuerte", "No: la lanzo donde esté libre y suave", "Solo si es pequeño", "Da igual"], 1, "Lanzar con cuidado y hacia un lugar libre evita lastimar.", ""),
          P("¿Cómo atrapo la pelota?", ["Con un solo dedo", "Con las dos manos", "Con la barriga", "Con los pies"], 1, "Las dos manos juntas sujetan mejor la pelota.", ""),
        ] } },
      ],
      [EXP("Me muevo seguro", [
        P("Antes de saltar debo...", ["cerrar los ojos", "revisar que el espacio esté libre", "correr sin mirar", "gritar"], 1, "La seguridad siempre va primero que la velocidad.", ""),
        P("Caigo al saltar...", ["de rodillas secas", "en puntas de pie y suave", "sentado", "de espaldas"], 1, "Caer en puntas y con rodillas blandas amortigua el golpe.", ""),
        P("Si la pelota se va hacia la calle...", ["corro detrás sin pensar", "espero a un adulto", "la pateo", "grito y sigo"], 1, "Nunca corremos hacia el peligro: pedimos ayuda.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Ética y Valores ---------------- */
  G1.etica = [
    T(
      "Reconozco mis emociones",
      "Identifica emociones básicas y las nombra correctamente.",
      "Ética: reconocer emociones.",
      [
        D("Emociones", "Alegría, tristeza, enojo y miedo son emociones que todos sentimos.", "😊"),
        D("Nombrarlas ayuda", "Cuando nombro lo que siento, se siente más fácil de manejar.", "💬"),
        D("Todas sirven", "Ninguna emoción es mala; a veces nos avisan algo importante.", "💛"),
      ],
      [
        { id: "g1-e-1a", tipo: "clasificar", titulo: "¿Qué emoción es?", n: 1, instr: "Toca la situación y la emoción que describe.", params: {
          categorias: [{ id: "ale", n: "Alegría", icono: "😊" }, { id: "tri", n: "Tristeza", icono: "😢" }, { id: "eno", n: "Enojo", icono: "😠" }],
          items: [
            { t: "GANÉ UN JUEGO", cat: "ale" }, { t: "PERDÍ MI PELOTA", cat: "tri" },
            { t: "ME QUITARON EL JUGUETE", cat: "eno" }, { t: "VISITÉ A MI AMIGO", cat: "ale" },
            { t: "ME CAÍ Y ME LASTIMÉ", cat: "tri" },
          ],
        } },
        { id: "g1-e-1b", tipo: "explica", titulo: "Mis emociones", n: 2, instr: "Piensa en lo que sientes y responde.", params: { preguntas: [
          P("¿Qué hago cuando siento enojo?", ["Golpeo", "Respiro y hablo con calma", "Grito", "Me encierro"], 1, "Respirar y hablar con calma ayuda a manejar el enojo.", ""),
          P("¿Está bien sentir tristeza?", ["No, nunca", "Sí, todas las emociones son normales", "Solo los adultos", "Solo de noche"], 1, "Todas las emociones son normales y nos enseñan algo.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Compartir y pedir turnos",
      "Practica la espera del turno, el compartir y el pedido de ayuda.",
      "Ética: respetar turnos, compartir y pedir ayuda.",
      [
        D("Turnos", "Esperar el turno hace que todos podamos jugar y aprender.", "⏳"),
        D("Compartir", "Compartir es usar algo con otros, no solo para mí.", "🤝"),
        D("Pedir ayuda", "Pedir ayuda no es malo; es una forma inteligente de aprender.", "🙋"),
      ],
      [
        { id: "g1-e-2a", tipo: "explica", titulo: "Convivir", n: 3, instr: "Piensa en cómo convives y responde.", params: { preguntas: [
          P("Un compañero tiene el juguete que quiero. ¿Qué hago?", ["Lo quito", "Pido esperar mi turno", "Lloro", "Grito"], 1, "Pedir el turno con calma es la mejor opción.", ""),
          P("¿Es bueno compartir?", ["Sí, nos permite jugar juntos", "No, es perder", "Solo con la familia", "Solo si me obligan"], 0, "Compartir crea amistades y alegría.", ""),
          P("Cuando no entiendo una tarea...", ["Me quedo callado", "Pido ayuda al maestro", "Copio sin entender", "Me rindo"], 1, "Pedir ayuda es una forma inteligente de aprender.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Digo la verdad",
      "Reconoce la importancia de ser veraz y de pedir perdón al equivocarse.",
      "Ética: honestidad y perdón.",
      [
        D("La verdad", "Aunque sea difícil, decir la verdad construye confianza.", "🌟"),
        D("La mentira duele", "Las mentiras lastiman a los demás y luego son difíciles de recordar.", "💭"),
        D("Pido perdón", "Si me equivoco, pido perdón y trato de enmendarlo.", "🙏"),
      ],
      [
        { id: "g1-e-3a", tipo: "explica", titulo: "Ser veraz", n: 3, instr: "Piensa en situaciones y responde.", params: { preguntas: [
          P("Sin que nadie te viera, rompiste un jarrón. ¿Qué hago?", ["Digo la verdad y pido perdón", "Escondo los pedazos", "Culpo a mi hermano", "No digo nada"], 0, "Decir la verdad aunque sea difícil es lo honesto; el perdón repara.", ""),
          P("¿Mentir alguna vez es mejor que decir la verdad?", ["Sí, siempre", "No: lastima la confianza", "Si es chiquita", "Si nadie se entera"], 1, "La confianza se construye con la verdad, incluso cuando cuesta.", ""),
          P("Ya mintí y me siento mal. ¿Qué puedo hacer?", ["Seguir mintiendo", "Pedir perdón y decir la verdad", "Esconderme", "Culpar a otro"], 1, "Reconocer el error y pedir perdón repara el daño.", ""),
        ] } },
        { id: "g1-e-3b", tipo: "clasificar", titulo: "¿Qué hago en cada caso?", n: 1, instr: "Toca la acción correcta para cada situación.", params: {
          categorias: [
            { id: "ver", n: "DIGO LA VERDAD", icono: "🌟" },
            { id: "per", n: "PIDO PERDÓN", icono: "🙏" },
          ],
          items: [
            { t: "QUEBRÉ EL VASO", cat: "ver" },
            { t: "ME BURLÉ DE MI COMPAÑERO", cat: "per" },
            { t: "VI CÓMO PASÓ", cat: "ver" },
            { t: "NO DEJÉ JUGAR A OTROS", cat: "per" },
          ],
        } },
      ],
      [EXP("La verdad y el perdón", [
        P("Decir la verdad...", ["es fácil siempre", "construye confianza", "no sirve", "es aburrido"], 1, "La confianza de los demás se gana siendo sincero.", ""),
        P("Si lastimé a alguien con mis palabras...", ["fingo que no pasó", "pido perdón de verdad", "cambio de tema", "me río"], 1, "Pedir perdón de verdad repara el daño y mejora la amistad.", ""),
        P("Un amigo me pide que mienta por él. Yo...", ["miento", "le digo que no y lo ayudo de otra forma", "me enojo", "lo ignoro"], 1, "Ser buen amigo no es mentir: es ayudar a hacer lo correcto.", ""),
      ]) ],
      null
    ),
    T(
      "Respeto a los mayores, cuido a los pequeños",
      "Practica el respeto hacia los adultos y el cuidado hacia los más pequeños.",
      "Ética: respeto y cuidado del otro.",
      [
        D("Saludo y escucho", "Saludo a los mayores y escucho cuando hablan, sin interrumpir.", "👋"),
        D("Ayudo", "Ayudo a los más pequeños cuando lo necesitan, sin burlarme.", "🤗"),
        D("Todos iguales", "Nadie se burla de los demás: cada persona merece el mismo respeto.", "💛"),
      ],
      [
        { id: "g1-e-4a", tipo: "explica", titulo: "Respeto diario", n: 3, instr: "Piensa en cómo tratas a los demás.", params: { preguntas: [
          P("Un adulto me está hablando. ¿Qué hago?", ["Lo interrumpo", "Lo escucho sin cortar", "Me voy", "Grito más fuerte"], 1, "Escuchar sin interrumpir muestra respeto y atención.", ""),
          P("Mi hermanito pequeño se cayó. ¿Qué hago?", ["Me río", "Lo ayudo y busco un adulto", "Sigo jugando", "Le quito el juguete"], 1, "Cuidar al más pequeño es un acto de respeto y cariño.", ""),
          P("¿Puedo burlarme de cómo habla un compañero?", ["Sí, es chistoso", "No: todos merecen respeto", "Solo si es amigo", "Si él también se ríe"], 1, "Las burlas lastiman; respetar las diferencias nos hace mejores.", ""),
        ] } },
        { id: "g1-e-4b", tipo: "clasificar", titulo: "Respeto o cuidado", n: 1, instr: "Toca la categoría y después cada acción.", params: {
          categorias: [
            { id: "res", n: "RESPECTO", icono: "👏" },
            { id: "cui", n: "CUIDADO", icono: "🤗" },
          ],
          items: [
            { t: "SALUDO A MI MAESTRA", cat: "res" },
            { t: "AYUDO A MI HERMANITO", cat: "cui" },
            { t: "ESCUCHO SIN INTERRUMPIR", cat: "res" },
            { t: "COMPARTO EL ALMUERZO", cat: "cui" },
          ],
        } },
      ],
      [EXP("Respeto y cuidado", [
        P("Cuando un adulto habla, yo...", ["grito", "escucho con calma", "me tapo los oídos", "hablo por él"], 1, "La escucha atenta es una forma de respeto.", ""),
        P("Ayudar a los pequeños...", ["es cosa de tontos", "nos hace comunidad", "está prohibido", "solo lo hace la maestra"], 1, "Cuidar a los demás crea una comunidad amable.", ""),
        P("Todos merecemos...", ["el mismo respeto", "más que otros", "nada", "solo los que ganan"], 0, "El respeto no depende de quién seas: todos lo merecemos.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Religiosa ---------------- */
  G1.religiosa = [
    T(
      "Celebraciones y valores",
      "Reconoce celebraciones y valores de su comunidad con respeto.",
      "Educación religiosa: explorar celebraciones y valores (según el currículo institucional).",
      [
        D("Celebraciones", "Las comunidades celebran fechas especiales con música, comida y palabras bonitas.", "🎉"),
        D("Valores", "El respeto, la solidaridad y el perdón son valores que todas las tradiciones comparten.", "💛"),
        D("Respeto", "Aunque no todos creemos igual, nos respetamos y escuchamos con atención.", "🤝"),
      ],
      [
        { id: "g1-r-1a", tipo: "explica", titulo: "Valores", n: 3, instr: "Piensa en los valores y responde.", params: { preguntas: [
          P("¿Qué hago cuando alguien tiene una creencia distinta a la mía?", ["Lo burlo", "Lo respeto y escucho", "Lo peleo", "Lo ignoro"], 1, "El respeto es el valor que nos permite convivir a todos.", ""),
          P("¿Qué es un valor?", ["Una comida", "Una forma de actuar buena, como ayudar", "Un juguete", "Una materia"], 1, "Los valores son formas de actuar buenas que nos hacen convivir mejor.", ""),
          P("En una celebración comunitaria...", ["Ayudo y participo con respeto", "Golpeo", "No participo jamás", "Molesto a los demás"], 0, "Participar con respeto enriquece la celebración.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Mi familia y sus tradiciones",
      "Reconoce las tradiciones y celebraciones de su familia y comunidad con respeto.",
      "Educación religiosa: tradiciones familiares y comunitarias (según el currículo institucional).",
      [
        D("Fiestas familiares", "Cada familia celebra fechas especiales a su manera, con comida, música o palabras.", "🎊"),
        D("Costumbres", "Las costumbres se aprenden de los abuelos y se guardan con cariño.", "👴"),
        D("Respeto", "Las tradiciones de otras familias también merecen respeto, aunque sean distintas.", "🤝"),
      ],
      [
        { id: "g1-r-2a", tipo: "explica", titulo: "Tradiciones", n: 3, instr: "Piensa en tu familia y responde.", params: { preguntas: [
          P("¿Qué es una tradición?", ["Una costumbre que se repite con el tiempo", "Un examen", "Un juguete", "Una canción de cartoon"], 0, "Las tradiciones son costumbres que se transmiten de generación en generación.", ""),
          P("¿De quién aprendo las costumbres de mi familia?", ["De los abuelos y padres", "De la televisión", "De nadie", "De los vecinos solamente"], 0, "La familia enseña sus costumbres con cariño y paciencia.", ""),
          P("Si otra familia celebra distinto a la mía...", ["me burlo", "la respeto", "les digo que está mal", "no hablo con ellos"], 1, "El respeto por las tradiciones ajenas nos hace convivir mejor.", ""),
        ] } },
        { id: "g1-r-2b", tipo: "escribir", titulo: "Mi tradición", n: 1, instr: "Escribe una tradición de tu familia.", params: { consigna: "Escribe una tradición o celebración de tu familia. Por ejemplo: «En mi casa cantamos...».", min: 3, ejemplo: "En mi familia celebramos con comida y música." } },
      ],
      [EXP("Familia y tradiciones", [
        P("Una tradición...", ["se inventó ayer", "se repite con el tiempo", "es un examen", "no existe"], 1, "Las tradiciones atraviesan el tiempo y unen a las familias.", ""),
        P("Aprendo costumbres sobre todo de...", ["los abuelos y padres", "nadie", "los videojuegos", "los anuncios"], 0, "Los mayores transmiten sus costumbres con paciencia y cariño.", ""),
        P("Celebrar distinto a otros es...", ["malo", "ok: cada familia tiene lo suyo", "prohibido", "gracioso"], 1, "La diversidad de tradiciones enriquece la convivencia.", ""),
      ]) ],
      null
    ),
  ];

  /* =========================================================
     SEGUNDO DE PRIMARIA
     Consolidación de la lectura, la escritura y las operaciones
     básicas.
     ========================================================= */
  const G2 = {};

  /* ---------------- Lenguaje ---------------- */
  G2.lenguaje = [
    T(
      "Leo con mayor fluidez",
      "Lee palabras y textos cortos con mayor fluidez y reconocimiento de sílabas complejas.",
      "Leer en voz alta con mayor fluidez; reconocer sílabas y palabras.",
      [
        D("Sílabas trabadas", "Dos consonantes juntas: BR-A, CR-A, FL-O... como en FLOR y BRAVO.", "🧩"),
        D("Leer sin parar", "Al leer, agrupa las sílabas en vez de una por una: FLOR, no F-L-O-R.", "🐢"),
        D("Repasar", "Si te trabas, respira y vuelve a leer la palabra con calma.", "🔁"),
      ],
      [
        { id: "g2-l-1a", tipo: "fill-word", titulo: "Completo palabras", n: 4, instr: "Escucha la palabra y completa lo que falta.", params: { pool: undefined } },
        { id: "g2-l-1b", tipo: "type-word", titulo: "Escribo la palabra", n: 4, instr: "Escribe la palabra con el teclado o con los botones.", params: { pool: undefined } },
      ],
      [
        EXP("Fluidez", [
          P("Al leer FLOR, ¿cómo lo hago?", ["Letra por letra", "De corrido, reconociendo la palabra", "Muy rápido sin pensar", "En silencio"], 1, "Leer de corrido mejora la comprensión y la velocidad.", "Agrupa FLOR en una sola palabra."),
          P("¿Cuántas sílabas tiene BRAVO?", ["Una", "Dos", "Tres", "Cuatro"], 2, "BRA-VO... son BRA, VO. Dos. (¡BRA-VO!) Golpea las sílabas.", "Golpea: BRA-VO."),
          P("¿Cuál palabra tiene la sílaba PLA?", ["PLANETA", "MESA", "GATO", "LUNA"], 0, "PLANETA empieza con PLA.", "Escucha el principio de la palabra."),
          P("Si me trabo al leer...", ["Debo dejar de leer", "Respiro y lo intento de nuevo", "Cambio de texto", "Espero ayuda de otro"], 1, "Respirar e intentarlo otra vez es lo que hace un buen lector.", ""),
        ]),
      ],
      null
    ),
    T(
      "Cuentos: personajes y secuencias",
      "Identifica personajes, lugares y el orden de los acontecimientos en un cuento.",
      "Comprender cuentos; identificar personajes y secuencias.",
      [
        D("Personajes", "Son quienes participan en el cuento: el patito, la mamá, el lobo...", "🎭"),
        D("Secuencia", "Primero, después, al final. El orden cuenta la historia completa.", "1️⃣"),
        D("Recuerda", "Después de leer, cuenta con tus palabras qué pasó.", "💬"),
      ],
      [
        { id: "g2-l-2a", tipo: "story", titulo: "Leo un cuento", n: 1, instr: "Toca las flechas para pasar la página y escuchar el cuento.", params: { cuento: null } },
        { id: "g2-l-2b", tipo: "sentence-listen", titulo: "Escucho y respondo", n: 4, instr: "Escucha la oración y responde la pregunta.", params: { pool: undefined } },
      ],
      [
        EXP("Cuentos", [
          P("«Primero llovió, después salió el sol.» ¿Qué pasó primero?", ["Salió el sol", "Llovió", "No pasó nada", "Amaneció"], 1, "La palabra «primero» nos dice qué ocurrió al inicio.", "Busca «primero» y «después»."),
          P("Los personajes de un cuento son...", ["Los colores", "Quienes participan en la historia", "Las páginas", "El título"], 1, "Los personajes son quienes hacen y dicen cosas en el cuento.", ""),
          P("Si al final el patito durmió tranquilo...", ["El cuento no terminó", "Esa es la última parte", "Ese es el principio", "Fue el título"], 1, "«Al final» señala la última parte de la secuencia.", ""),
          P("¿Para qué sirve contar el cuento con mis palabras?", ["Para aburrir", "Para comprobar que lo entendí", "Para no leer", "Para gastar tiempo"], 1, "Recontar es una forma de demostrar comprensión.", ""),
        ]),
      ],
      null
    ),
    T(
      "Escribo párrafos cortos",
      "Escribe párrafos cortos narrando experiencias con orden y puntuación básica.",
      "Escribir párrafos cortos y narrar experiencias.",
      [
        D("Un párrafo", "Un párrafo es un grupo de oraciones que hablan de lo mismo.", "📝"),
        D("Orden", "Primero presento la idea, luego los detalles y al final cierro.", "🔢"),
        D("Puntuación", "Uso mayúsculas, punto y coma para que se entienda.", "⏺️"),
      ],
      [
        { id: "g2-l-3a", tipo: "escribir", titulo: "Escribo un párrafo", n: 1, instr: "Escribe un párrafo corto (al menos 4 palabras por idea).", params: { consigna: "Escribe un párrafo corto sobre tu día. Ejemplo: «Hoy fui a la escuela. Vi a mis amigos. Jugué en el patio.»", min: 4, ejemplo: "Hoy fui a la escuela. Vi a mis amigos." } },
        { id: "g2-l-3b", tipo: "sentence-read", titulo: "Leo y verifico", n: 3, instr: "Lee la oración tocando cada palabra y responde.", params: { pool: undefined } },
      ],
      [
        EXP("Escribir mejor", [
          P("¿Cómo empieza un párrafo?", ["Con punto", "Con mayúscula", "Con espacio", "Con dibujos"], 1, "Toda idea nueva empieza con mayúscula.", ""),
          P("¿Qué signos ayudan a entender?", ["Los puntos y comas", "Solo los dibujos", "Ninguno", "Las tildes únicamente"], 0, "La puntuación separa las ideas y hace más claro el texto.", ""),
          P("Para narrar mi día, lo mejor es...", ["Escribir sin orden", "Ordenar lo que pasó primero, después y al final", "Copiar a otro", "Escribir una sola palabra"], 1, "Narrar exige orden: primero, después, al final.", ""),
          P("¿Qué hago después de escribir?", ["Nada", "Revisar si se entiende y corregir", "Borrar todo", "Entregar sin leer"], 1, "Revisar el borrador mejora el texto.", ""),
        ]),
      ],
      null
    ),
    T(
      "Textos informativos simples",
      "Lee textos informativos sencillos y extrae datos importantes.",
      "Comprender textos informativos y extraer información.",
      [
        D("Texto informativo", "Informa hechos reales: «El agua hierve a 100 grados». No es un cuento.", "📰"),
        D("Datos importantes", "Busco nombres, números y lugares: los datos que responden el qué y el dónde.", "🔎"),
        D("Comparar", "El cuento inventa; el texto informativo informa.", "⚖️"),
      ],
      [
        { id: "g2-l-4a", tipo: "explica", titulo: "Información útil", n: 4, instr: "Lee y elige la mejor respuesta.", params: { preguntas: [
          P("«Los elefantes son los mamíferos más grandes.» ¿Es un dato o un cuento?", ["Un dato real", "Un cuento", "Una canción", "Una receta"], 0, "Informa un hecho verificable: es texto informativo.", ""),
          P("En un texto informativo busco...", ["Dibujos bonitos", "Números, nombres y lugares", "Rimas", "Personajes inventados"], 1, "Los datos clave suelen ser números, nombres y lugares.", ""),
          P("¿Cuál es texto informativo?", ["Había una vez un dragón...", "El agua está formada por hidrógeno y oxígeno.", "Cantaba el pájaro feliz.", "Corrió rápido el conejo."], 1, "Esa oración describe un hecho real sobre el agua.", ""),
          P("Leer primero las ideas principales me ayuda a...", ["No leer nada", "Entender mejor el texto", "Escribir menos", "Olvidar"], 1, "Ir de lo general a lo particular facilita la comprensión.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Matemáticas ---------------- */
  G2.mate = [
    T(
      "Valor posicional",
      "Comprende el valor posicional de las decenas y las unidades.",
      "Comprender el valor posicional; comparar números.",
      [
        D("Decenas y unidades", "En el 34: el 3 vale 30 (decenas) y el 4 vale 4 (unidades).", "🔟"),
        D("Diez unidades = una decena", "10 unidades se juntan y forman 1 decena.", "🔟"),
        D("Lectura", "El 135 se lee ciento treinta y cinco: centenas, decenas y unidades.", "📖"),
      ],
      [
        { id: "g2-m-1a", tipo: "missing", titulo: "¿Qué falta?", n: 4, instr: "¿Qué número falta? Tócalo.", params: { maxTotal: 20 } },
        { id: "g2-m-1b", tipo: "ordernums", titulo: "Ordeno números", n: 4, instr: "Toca los números de menor a mayor.", params: { rango: [1, 100], cuantos: 4 } },
      ],
      [
        EXP("Valor posicional", [
          P("En el número 47, ¿cuánto vale el 4?", ["4", "40", "7", "47"], 1, "El 4 está en las decenas: vale 40.", "Mira la posición: es la decena."),
          P("¿Cuántas decenas tiene 63?", ["6", "3", "63", "9"], 0, "El 6 está en las decenas: hay 6 decenas.", ""),
          P("¿Cuál es mayor: 58 o 85?", ["58", "85", "Son iguales", "No se puede saber"], 1, "85 tiene 8 decenas; 58 solo 5: 85 es mayor.", "Compara primero las decenas."),
          P("10 unidades forman...", ["1 unidad", "1 decena", "1 centena", "100"], 1, "Diez unidades se agrupan en una decena.", ""),
        ]),
      ],
      null
    ),
    T(
      "Números hasta 1000",
      "Lee, escribe, compara y ordena números hasta el 1000.",
      "Comparar y ordenar números de mayor magnitud.",
      [
        D("Centenas", "El 300 tiene 3 centenas. El 350 tiene 3 centenas y 5 decenas.", "💯"),
        D("Leer grandes", "405 se lee cuatrocientos cinco.", "🔊"),
        D("Comparar", "Primero comparo centenas; si son iguales, decenas y después unidades.", "⚖️"),
      ],
      [
        { id: "g2-m-2a", tipo: "numberline", titulo: "Recta numérica", n: 5, instr: "Toca el número en la recta numérica.", params: { max: 100 } },
        { id: "g2-m-2b", tipo: "compare", titulo: "¿Cuál es mayor?", n: 4, instr: "Compara y toca el número mayor.", params: { rango: [10, 99] } },
      ],
      [
        EXP("Números hasta 1000", [
          P("¿Cómo se lee 405?", ["Cuarenta y cinco", "Cuatrocientos cinco", "Cuatro mil cinco", "Cuatrocientos cincuenta"], 1, "405 = cuatrocientos cinco.", "Mira: 4 centenas, 0 decenas, 5 unidades."),
          P("¿Cuál es mayor?", ["399", "400", "350", "309"], 1, "400 tiene 4 centenas; los demás, 3.", "Compara las centenas primero."),
          P("El número entre 250 y 252 es...", ["251", "249", "253", "260"], 0, "El 251 está justo entre 250 y 252.", "Cuenta: 250, 251, 252."),
          P("¿Cuántas centenas tiene 700?", ["7", "0", "70", "100"], 0, "700 tiene 7 centenas.", ""),
        ]),
      ],
      null
    ),
    T(
      "Sumas y restas con reagrupación",
      "Resuelve sumas y restas hasta 1000 con reagrupación de decenas y unidades.",
      "Resolver sumas y restas.",
      [
        D("Reagrupar", "Cuando las unidades suman más de 10, llevo una decena al lugar de las decenas.", "🔁"),
        D("Restar con desglose", "En las restas a veces «quito» una decena para poder restar las unidades.", "➖"),
        D("Comprueba", "Vuelvo a sumar el resultado: si da el inicial, acerté.", "✅"),
      ],
      [
        { id: "g2-m-3a", tipo: "add", titulo: "Sumas", n: 5, instr: "Suma los números y toca el resultado.", params: { maxTotal: 90 } },
        { id: "g2-m-3b", tipo: "sub", titulo: "Restas", n: 5, instr: "Resta los números y toca el resultado.", params: { maxTotal: 90 } },
      ],
      [
        EXP("Reagrupar", [
          P("¿Cuánto es 27 + 15?", ["32", "42", "45", "35"], 1, "7+5=12 (llevo 1 decena): 20+10+12 = 42.", "Primero suma las unidades."),
          P("¿Cuánto es 60 - 25?", ["35", "45", "25", "85"], 0, "60 menos 20 = 40; 40 menos 5 = 35.", "Resta decenas y luego unidades."),
          P("Si sumo 46 + 38 y las unidades dan 14...", ["No pasa nada", "Llevo una decena", "Borro todo", "Sumo otra vez"], 1, "Cuando las unidades pasan de 9, se lleva una decena.", ""),
          P("¿Cuál es el resultado de 100 - 40?", ["60", "50", "70", "40"], 0, "100 menos 40 es 60.", "Quita 4 decenas de 10 decenas."),
        ]),
      ],
      null
    ),
    T(
      "Multiplicar: grupos iguales",
      "Comprende la multiplicación como grupos iguales y usa las tablas básicas.",
      "Iniciarse en la multiplicación como grupos iguales.",
      [
        D("Grupos iguales", "3 grupos de 4 = 4 + 4 + 4 = 12. Eso es 3 × 4.", "✖️"),
        D("Tablas", "2×2=4, 2×3=6, 5×5=25... repetirlas las vuelve rápidas.", "🎵"),
        D("Patrón", "En la tabla del 5 los resultados terminan en 5 o 0: 5, 10, 15, 20...", "🔁"),
      ],
      [
        { id: "g2-m-4a", tipo: "addvisual", titulo: "Grupos iguales", n: 4, instr: "Junta los objetos, cuenta todos y toca el resultado.", params: { maxTotal: 20 } },
        { id: "g2-m-4b", tipo: "explica", titulo: "Tablas de multiplicar", n: 5, instr: "Responde recordando las tablas.", params: { preguntas: [
          P("¿Cuánto es 2 × 3?", ["5", "6", "8", "4"], 1, "2 × 3 = 6. Dos grupos de tres son seis.", "Cuenta: 3, 6."),
          P("¿Cuánto es 5 × 4?", ["15", "20", "25", "10"], 1, "5 × 4 = 20. Cuatro grupos de cinco.", "Cuenta de cinco en cinco."),
          P("3 × 3 es...", ["6", "9", "12", "3"], 1, "3 × 3 = 9.", ""),
          P("Si tengo 2 canastas con 6 manzanas cada una...", ["6", "8", "12", "18"], 2, "2 grupos de 6 = 12 manzanas.", "Suma 6 + 6."),
          P("10 × 2 es...", ["10", "12", "20", "22"], 2, "10 × 2 = 20.", "Dos veces diez es veinte."),
        ] } },
      ],
      null
    ),
    T(
      "Medir y organizar datos",
      "Mide longitudes con unidades sencillas e interpreta pictogramas.",
      "Medir longitudes y organizar datos sencillos.",
      [
        D("Unidades", "Mido con centímetros o con dedos, cuadernos o pasos.", "📏"),
        D("Comparar largos", "Un objeto largo mide más; uno corto, menos.", "⚖️"),
        D("Pictograma", "Un gráfico con dibujos: cada dibujo representa una cantidad.", "📊"),
      ],
      [
        { id: "g2-m-5a", tipo: "explica", titulo: "Medir y graficar", n: 4, instr: "Piensa en la medición y el gráfico.", params: { preguntas: [
          P("¿Con qué mido en centímetros?", ["Cinta métrica", "Plato", "Reloj", "Balanza"], 0, "La cinta métrica (regla) mide en centímetros.", ""),
          P("Si una vara mide más que otra...", ["Es más larga", "Es más corta", "Miden igual", "No se puede saber"], 0, "Más longitud = más largo.", ""),
          P("En un pictograma, cada dibujo representa...", ["Una historia", "Una cantidad", "Un color", "Nada"], 1, "Cada dibujo equivale a un número de unidades.", ""),
          P("Más dibujos en la columna significa...", ["Menos", "Igual", "Más cantidad", "Nada"], 2, "Más símbolos = mayor cantidad.", ""),
        ] } },
        { id: "g2-m-5b", tipo: "count", titulo: "Cuento para el gráfico", n: 4, instr: "Cuenta los objetos y toca el número.", params: { rango: [1, 20], sustantivo: "figuras" } },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Naturales ---------------- */
  G2.cnaturales = [
    T(
      "Plantas y animales",
      "Describe características y necesidades básicas de plantas y animales.",
      "Estudiar características y necesidades de los seres vivos.",
      [
        D("Las plantas", "Tienen raíz, tallo, hojas y flores. Necesitan agua, luz y tierra.", "🌱"),
        D("Los animales", "Se mueven, comen y respiran. Algunos comen plantas; otros, carne.", "🐾"),
        D("Semejanzas", "Plantas y animales son seres vivos: crecen y se reproducen.", "🤝"),
      ],
      [
        { id: "g2-c-1a", tipo: "clasificar", titulo: "Plantas y animales", n: 1, instr: "Toca el nombre y la categoría.", params: {
          categorias: [{ id: "planta", n: "Plantas", icono: "🌱" }, { id: "animal", n: "Animales", icono: "🐾" }],
          items: [
            { t: "ROSA", cat: "planta" }, { t: "ÁGUILA", cat: "animal" }, { t: "HELECHO", cat: "planta" },
            { t: "TORTUGA", cat: "animal" }, { t: "MAÍZ", cat: "planta" }, { t: "DOLFIN", cat: "animal" },
          ],
        } },
        { id: "g2-c-1b", tipo: "explica", titulo: "Necesidades de los seres vivos", n: 3, instr: "Piensa en lo que necesitan y responde.", params: { preguntas: [
          P("¿Qué necesita una planta para vivir?", ["Solo sombra", "Agua, luz y tierra", "Leche", "Carne"], 1, "Las plantas necesitan agua, luz y tierra.", ""),
          P("¿Todos los animales comen plantas?", ["Sí, todos", "No: algunos comen plantas y otros carne", "Ninguno", "Solo los pájaros"], 1, "Hay herbívoros, carnívoros y omnívoros.", ""),
          P("¿Qué tienen en común una rosa y un colibrí?", ["Nada", "Son seres vivos: crecen y respiran", "Son minerales", "No se mueven"], 1, "Ambos son seres vivos con necesidades básicas.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Materiales y sus propiedades",
      "Clasifica materiales según propiedades observables como la dureza, la flexibilidad y la absorción.",
      "Propiedades observables de materiales.",
      [
        D("Propiedades", "Un material puede ser duro, blando, flexible, rígido o absorbente.", "🧱"),
        D("Observar", "Toco, doblo, golpeo con suavidad: así descubro sus propiedades.", "🔍"),
        D("Para qué sirve", "Elijo el material según lo que quiero hacer.", "🛠️"),
      ],
      [
        { id: "g2-c-2a", tipo: "clasificar", titulo: "Propiedades", n: 1, instr: "Toca el material y su propiedad.", params: {
          categorias: [{ id: "duro", n: "Duro / rígido", icono: "⛰️" }, { id: "flex", n: "Flexible", icono: "📏" }, { id: "abs", n: "Absorbente", icono: "🧽" }],
          items: [
            { t: "PIEDRA", cat: "duro" }, { t: "HULE", cat: "flex" }, { t: "ESPONJA", cat: "abs" },
            { t: "MADERA", cat: "duro" }, { t: "PAPEL", cat: "abs" }, { t: "CABLE", cat: "flex" },
          ],
        } },
        { id: "g2-c-2b", tipo: "explica", titulo: "Elegir materiales", n: 3, instr: "Piensa para qué sirve cada material.", params: { preguntas: [
          P("Para limpiar un charco, ¿qué material uso?", ["Piedra", "Esponja", "Vidrio", "Clavo"], 1, "La esponja absorbe el agua.", "¿Cuál absorbe?"),
          P("¿Cuál material es flexible?", ["Roca", "Hule", "Ladrillo", "Hierro"], 1, "El hule se dobla sin romperse.", ""),
          P("¿Por qué una mesa es de madera o metal?", ["Porque son duros y soportan peso", "Porque son blandos", "Porque flotan", "Porque son líquidos"], 0, "Los materiales duros sostienen lo que se pone encima.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Movimientos y cambios",
      "Reconoce tipos de movimiento y cambios observables en la naturaleza.",
      "El movimiento y los cambios observables del entorno.",
      [
        D("Tipos de movimiento", "Rotación (gira), traslación (se desplaza) y oscilación (va y viene).", "🔄"),
        D("Cambios de estado", "El agua se vuelve hielo con frío y vapor con calor.", "❄️"),
        D("Observar cambios", "Las hojas cambian de color; la semilla se hace planta.", "🍂"),
      ],
      [
        { id: "g2-c-3a", tipo: "clasificar", titulo: "Tipo de movimiento", n: 1, instr: "Toca el ejemplo y su tipo de movimiento.", params: {
          categorias: [{ id: "rot", n: "Rotación", icono: "🔄" }, { id: "tras", n: "Traslación", icono: "🚗" }, { id: "osc", n: "Oscilación", icono: "↔️" }],
          items: [
            { t: "RUEDA DE BICICLETA", cat: "rot" }, { t: "CARRO EN LA CARRETERA", cat: "tras" },
            { t: "PÉNDULO DEL RELOJ", cat: "osc" }, { t: "TIERRA CUIDANDO EL SOL", cat: "rot" },
            { t: "PELOTA RODANDO EN EL PISO", cat: "tras" }, { t: "CUERDA DE GUITARRA", cat: "osc" },
          ],
        } },
        { id: "g2-c-3b", tipo: "explica", titulo: "Cambios", n: 3, instr: "Piensa en los cambios y responde.", params: { preguntas: [
          P("Si el agua se congela, se vuelve...", ["Vapor", "Hielo", "Piedra", "Nada"], 1, "Con frío, el agua se convierte en hielo.", ""),
          P("La semilla que brota...", ["Se hace planta", "Desaparece", "Se hace piedra", "Nada"], 0, "La semilla germina y se convierte en planta.", ""),
          P("¿Qué movimiento hace la Tierra al girar sobre sí misma?", ["Traslación", "Rotación", "Oscilación", "Ninguno"], 1, "Sobre su propio eje, la Tierra rota (por eso hay día y noche).", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Sociales ---------------- */
  G2.csociales = [
    T(
      "Mi historia y mi familia",
      "Construye una línea de tiempo simple de su historia personal y familiar.",
      "Reconocer la historia personal y familiar.",
      [
        D("Línea de tiempo", "Es una línea donde marco cuándo pasaron las cosas: nacimiento, primer día de escuela...", "📅"),
        D("Antes y ahora", "Antes no había tantas computadoras; ahora hay tabletas y celulares.", "⏳"),
        D("Mi historia", "Cada persona tiene una historia única y valiosa.", "📖"),
      ],
      [
        { id: "g2-s-1a", tipo: "ordenar", titulo: "Mi línea de tiempo", n: 1, instr: "Ordena los momentos de mi vida.", params: { consigna: "Toca en orden los momentos de tu vida.", items: ["NACÍ", "DI MIS PRIMEROS PASOS", "ENTRÉ A LA ESCUELA", "ESTOY APRENDIENDO AHORA"] } },
        { id: "g2-s-1b", tipo: "explica", titulo: "Antes y ahora", n: 3, instr: "Piensa en cómo cambian las cosas.", params: { preguntas: [
          P("¿Qué es una línea de tiempo?", ["Un dibujo de animales", "Una forma de ordenar hechos en el tiempo", "Un juego", "Un mapa"], 1, "La línea de tiempo ordena los hechos: primero, después...", ""),
          P("Antes, para hablar a distancia se usaba...", ["Videochat", "Cartas y telégrafo", "Internet", "Nada"], 1, "Antes las cartas tardaban días; hoy hablamos al instante.", ""),
          P("¿Quién escribe su historia personal?", ["Solo los maestros", "Cada persona", "Nadie", "Los gobiernos"], 1, "Tu historia la construyes tú con tus vivencias.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Paisajes rural y urbano",
      "Compara paisajes rurales y urbanos y describe sus características.",
      "Comparar paisajes rurales y urbanos.",
      [
        D("Paisaje rural", "Campo, casas bajas, sembradíos, animales y más naturaleza.", "🌾"),
        D("Paisaje urbano", "Ciudad: edificios, calles, transporte y más gente.", "🏙️"),
        D("Ambos son útiles", "La ciudad consume lo que el campo produce; se necesitan mutuamente.", "🤝"),
      ],
      [
        { id: "g2-s-2a", tipo: "clasificar", titulo: "¿Dónde queda?", n: 1, instr: "Toca la descripción y el paisaje al que pertenece.", params: {
          categorias: [{ id: "rural", n: "Paisaje rural (campo)", icono: "🌾" }, { id: "urbano", n: "Paisaje urbano (ciudad)", icono: "🏙️" }],
          items: [
            { t: "SEMBRADÍOS DE MAÍZ", cat: "rural" }, { t: "EDIFICIOS ALTOS", cat: "urbano" },
            { t: "GANADO EN LA FINCA", cat: "rural" }, { t: "TRÁNSITO DE CARROS", cat: "urbano" },
            { t: "ÁRBOLES Y RÍOS", cat: "rural" }, { t: "BUSES Y TRENES", cat: "urbano" },
          ],
        } },
        { id: "g2-s-2b", tipo: "explica", titulo: "Rural y urbano", n: 3, instr: "Compara ambos paisajes.", params: { preguntas: [
          P("En el paisaje rural hay...", ["Muchos edificios", "Sembradíos y animales", "Aeropuertos", "Fábricas grandes"], 1, "El campo se caracteriza por la agricultura y los animales.", ""),
          P("¿Qué se produce en el campo y se lleva a la ciudad?", ["Edificios", "Alimentos", "Carreteras", "Internet"], 1, "Los alimentos del campo llegan a la ciudad.", ""),
          P("¿Cuál es una característica de la ciudad?", ["Menos gente", "Más edificios y transporte", "Solo árboles", "Sin servicios"], 1, "La ciudad concentra viviendas altas, vías y servicios.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Normas y diversidad",
      "Comprende la función de las normas y reconoce la diversidad cultural de su comunidad.",
      "Comprender la función de las normas; reconocer la diversidad cultural.",
      [
        D("Las normas protegen", "Las normas permiten que todos convivamos con seguridad y respeto.", "🛡️"),
        D("Diversidad", "En mi comunidad hay costumbres, comidas, trajes y músicas distintas.", "🎶"),
        D("Diferentes, no mejores ni peores", "Ser distintos enriquece la comunidad; nos aprendemos de los demás.", "🌍"),
      ],
      [
        { id: "g2-s-3a", tipo: "explica", titulo: "Normas y diversidad", n: 4, instr: "Piensa en la convivencia y responde.", params: { preguntas: [
          P("¿Para qué sirven las normas?", ["Para castigar", "Para convivir con seguridad y respeto", "Para aburrir", "No sirven"], 1, "Las normas organizan la convivencia de todos.", ""),
          P("Si mi vecino tiene otra cultura...", ["Lo discrimino", "Lo conozco y lo respeto", "Lo ignoro", "Lo molesto"], 1, "Conocer y respetar otras culturas enriquece la comunidad.", ""),
          P("¿Qué hago si veo una norma incumplida?", ["La incumplo también", "Lo digo con respeto o pido ayuda", "Golpeo", "Me río"], 1, "Informar o pedir ayuda con respeto es lo correcto.", ""),
          P("La diversidad cultural significa que...", ["Todos somos iguales", "Hay distintas costumbres y formas de vivir", "No hay costumbres", "Solo hay una música"], 1, "Diversidad = muchas formas distintas de vivir y celebrar.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Inglés ---------------- */
  G2.ingles = [
    T(
      "My family and me",
      "Se presenta y pregunta por la familia con frases sencillas en inglés.",
      "Inglés: preguntas personales y la familia.",
      [
        D("What's your name?", "«What's your name?» = ¿Cómo te llamas? Respuesta: My name is...", "🗣️"),
        D("This is my family", "This is my mother (mamá), my father (papá), my sister (hermana).", "👪"),
        D("How many?", "How many brothers do you have? = ¿Cuántos hermanos tienes?", "❓"),
      ],
      [
        { id: "g2-i-1a", tipo: "emparejar", titulo: "My family", n: 1, instr: "Toca la palabra en inglés y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "MOTHER", b: "MAMÁ", audio: "mother" }, { a: "FATHER", b: "PAPÁ", audio: "father" },
            { a: "SISTER", b: "HERMANA", audio: "sister" }, { a: "BROTHER", b: "HERMANO", audio: "brother" },
            { a: "FAMILY", b: "FAMILIA", audio: "family" },
          ],
        } },
        { id: "g2-i-1b", tipo: "explica", titulo: "Talking about family", n: 3, instr: "Escucha y responde.", params: { preguntas: [
          P("¿Cómo preguntas el nombre de alguien?", ["What's your name?", "How old are you?", "Where are you?", "Who are you?"], 0, "«What's your name?» = ¿Cómo te llamas?", "", "en"),
          P("«Sister» significa...", ["Hermano", "Hermana", "Prima", "Madre"], 1, "Sister es hermana; brother es hermano.", "", "en"),
          P("My name is Ana. ¿Qué significa?", ["Mi nombre es Ana", "Tengo años", "Soy de Ana", "Ana es mi mamá"], 0, "«My name is...» = Mi nombre es...", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Food — Alimentos",
      "Reconoce y nombra alimentos básicos en inglés.",
      "Inglés: vocabulario de alimentos.",
      [
        D("Comida", "Bread (pan), milk (leche), apple (manzana), water (agua).", "🍽️"),
        D("I like / I don't like", "«I like apples» = me gustan las manzanas. «I don't like...» = no me gustan.", "💬"),
        D("En la mesa", "«Can I have water, please?» = ¿me das agua, por favor?", "🧉"),
      ],
      [
        { id: "g2-i-2a", tipo: "emparejar", titulo: "Food", n: 1, instr: "Toca el alimento en inglés y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "BREAD", b: "PAN", audio: "bread" }, { a: "MILK", b: "LECHE", audio: "milk" },
            { a: "APPLE", b: "MANZANA", audio: "apple" }, { a: "WATER", b: "AGUA", audio: "water" },
            { a: "EGG", b: "HUEVO", audio: "egg" },
          ],
        } },
        { id: "g2-i-2b", tipo: "explica", titulo: "Food sentences", n: 3, instr: "Comprende las frases y responde.", params: { preguntas: [
          P("«I like milk» significa...", ["No me gusta la leche", "Me gusta la leche", "Tengo leche", "Doy leche"], 1, "«I like...» expresa lo que te gusta.", "", "en"),
          P("¿Cómo pides agua con cortesía?", ["Water now!", "Can I have water, please?", "Give!", "I want!"], 1, "«Can I have water, please?» es la forma educada.", "", "en"),
          P("«Bread» es...", ["Pan", "Leche", "Huevo", "Manzana"], 0, "Bread es pan.", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Colours, numbers and toys",
      "Combina colores, números y vocabulario de juguetes en frases simples.",
      "Inglés: números, colores y juguetes.",
      [
        D("Numbers 11-20", "Eleven, twelve, thirteen... hasta twenty (20).", "🔢"),
        D("Toys", "Ball (pelota), doll (muñeca), car (carro), kite (cometa).", "🧸"),
        D("Describe", "«The ball is blue» = la pelota es azul.", "💬"),
      ],
      [
        { id: "g2-i-3a", tipo: "emparejar", titulo: "Toys", n: 1, instr: "Toca la palabra y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "BALL", b: "PELOTA", audio: "ball" }, { a: "DOLL", b: "MUÑECA", audio: "doll" },
            { a: "CAR", b: "CARRO", audio: "car" }, { a: "KITE", b: "COMETA", audio: "kite" },
            { a: "BOOK", b: "LIBRO", audio: "book" },
          ],
        } },
        { id: "g2-i-3b", tipo: "explica", titulo: "Numbers and colours", n: 4, instr: "Escucha y responde.", params: { preguntas: [
          P("¿Cómo se dice 15?", ["Fiveteen", "Fifteen", "Fifty", "Five"], 1, "Fifteen es quince.", "", "en"),
          P("«Green» es el color...", ["Verde", "Rojo", "Gris", "Negro"], 0, "Green es verde.", "", "en"),
          P("«The car is red» significa...", ["El carro es verde", "El carro es rojo", "El carro corre", "Quiero un carro"], 1, "«is red» = es rojo.", "", "en"),
          P("¿Qué viene después de twelve (12)?", ["Thirteen", "Eleven", "Twenty", "Ten"], 0, "Thirteen es 13; sigue a twelve.", "", "en"),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Tecnología ---------------- */
  G2.tecnologia = [
    T(
      "Creo y guardo un archivo",
      "Crea un dibujo o texto sencillo, lo guarda y lo vuelve a abrir.",
      "Tecnología: crear y guardar archivos sencillos.",
      [
        D("Crear", "Puedo escribir un texto o dibujar con el programa de dibujos.", "🖌️"),
        D("Guardar", "Guardar es dejar el trabajo en el computador para no perderlo.", "💾"),
        D("Abrir de nuevo", "Con doble clic en el archivo, lo abro cuando lo necesite.", "📂"),
      ],
      [
        { id: "g2-t-1a", tipo: "ordenar", titulo: "Guardar un trabajo", n: 1, instr: "Ordena los pasos para crear y guardar.", params: { consigna: "Toca en orden los pasos para no perder mi trabajo.", items: ["ABRO EL PROGRAMA", "ESCRIBO O DIBUJO", "PRESIONO GUARDAR", "CIERRO EL PROGRAMA"] } },
        { id: "g2-t-1b", tipo: "explica", titulo: "Archivos", n: 3, instr: "Piensa en cómo organizas tu trabajo.", params: { preguntas: [
          P("¿Para qué sirve guardar?", ["Para borrar", "Para conservar el trabajo y volver a abrirlo", "Para imprimir siempre", "Para jugar"], 1, "Guardar conserva el archivo en el computador.", ""),
          P("¿Qué hago si quiero seguir trabajando ayer?", ["Lo recuerdo de memoria", "Abro el archivo guardado", "Empiezo de cero siempre", "No se puede"], 1, "Los archivos permiten continuar después.", ""),
          P("Un archivo con nombre propio...", ["Se confunde con otros", "Es más fácil de encontrar", "No sirve", "Se borra solo"], 1, "Poner nombres claros ayuda a organizar.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Información privada y seguridad",
      "Identifica información personal que no debe compartirse en internet.",
      "Tecnología: reconocer información que no debe compartirse.",
      [
        D("Datos privados", "Nombre completo, dirección, teléfono, escuela y contraseñas son privados.", "🔒"),
        D("Nada con desconocidos", "En internet no comparto datos ni hablo con personas desconocidas.", "🚫"),
        D("Pregunto a un adulto", "Si algo me incomoda en la pantalla, le cuento a un adulto de confianza.", "🧑"),
      ],
      [
        { id: "g2-t-2a", tipo: "clasificar", titulo: "¿Privado o se puede compartir?", n: 1, instr: "Toca el dato y si es privado o se puede compartir.", params: {
          categorias: [{ id: "priv", n: "Dato privado", icono: "🔒" }, { id: "puede", n: "Se puede compartir", icono: "✅" }],
          items: [
            { t: "MI DIRECCIÓN", cat: "priv" }, { t: "MI COLOR FAVORITO", cat: "puede" },
            { t: "MI CONTRASEÑA", cat: "priv" }, { t: "MI EQUIPO FAVORITO", cat: "puede" },
            { t: "EL TELÉFONO DE CASA", cat: "priv" }, { t: "MI APODO EN EL JUEGO", cat: "puede" },
          ],
        } },
        { id: "g2-t-2b", tipo: "explica", titulo: "Seguridad digital", n: 3, instr: "Piensa en tu seguridad y responde.", params: { preguntas: [
          P("Un desconocido en internet me pide mi dirección. ¿Qué hago?", ["Se la doy", "No respondo y le aviso a un adulto", "Le doy otra", "Lo ignoro y sigo jugando sin avisar"], 1, "Nunca se comparten datos con desconocidos; siempre se avisa a un adulto.", ""),
          P("¿Mi contraseña la comparto?", ["Sí, con amigos", "No, es privada", "Sí, en internet", "Con cualquiera"], 1, "La contraseña es como la llave de casa: es privada.", ""),
          P("Si un mensaje me hace sentir mal...", ["Respondo ofendiendo", "Le cuento a un adulto de confianza", "Borro la pantalla y digo nada", "Sigo la conversación"], 1, "Contarlo a un adulto es siempre la mejor decisión.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Escribo con el teclado",
      "Escribe letras, números y palabras con el teclado con más seguridad.",
      "Tecnología: escritura con teclado.",
      [
        D("Mayúsculas", "La tecla MAYÚS hace letras grandes al empezar nombres y oraciones.", "🔤"),
        D("Espacio", "La barra espaciadora separa las palabras: sin ella, todo se junta.", "␣"),
        D("Borrar", "La tecla RETROCEDER borra la última letra si me equivoco.", "⌫"),
      ],
      [
        { id: "g2-t-3a", tipo: "type-word", titulo: "Escribo palabras", n: 4, instr: "Escribe cada palabra con el teclado o con los botones.", params: { pool: undefined } },
        { id: "g2-t-3b", tipo: "explica", titulo: "Teclas que me ayudan", n: 2, instr: "Piensa en las teclas y responde.", params: { preguntas: [
          P("¿Para qué sirve la barra espaciadora?", ["Para borrar", "Para separar palabras", "Para saltar", "Para encender"], 1, "La barra espaciadora deja un espacio entre palabras.", ""),
          P("¿Cómo empiezo una oración correctamente?", ["Con MAYÚS", "En minúscula", "Con un número", "Con un emoji"], 0, "Al empezar una oración o un nombre usamos mayúscula.", ""),
        ] } },
      ],
      [EXP("Escribo mejor con teclado", [
        P("La tecla MAYÚS sirve para...", ["borrar", "hacer letras grandes", "saltar la página", "apagar"], 1, "MAYÚS levanta la letra: la hace grande al empezar frases o nombres.", ""),
        P("Si escribo una letra de más, uso...", ["el ratón", "RETROCEDER", "MAYÚS", "el delete de la puerta"], 1, "RETROCEDER borra la letra anterior para corregirme.", ""),
        P("Entre cada palabra debo dejar...", ["un espacio", "un punto", "nada", "una línea"], 0, "Sin espacios las palabras se apilan y no se leen.", ""),
      ]) ],
      null
    ),
    T(
      "La tablet y el celular",
      "Reconoce gestos táctiles y usa los dispositivos con acompañamiento.",
      "Tecnología: dispositivos táctiles y uso acompañado.",
      [
        D("Tocar", "Con un dedo toco para elegir algo en la pantalla.", "☝️"),
        D("Arrastrar", "Arrastro para mover dibujos o pasar de página.", "👉"),
        D("Con acompañamiento", "Uso la tablet y el celular con permiso y con tiempo acordado.", "👨"),
      ],
      [
        { id: "g2-t-4a", tipo: "ordenar", titulo: "Uso la tablet bien", n: 1, instr: "Ordena los pasos del uso de la tablet.", params: {
          consigna: "Ordena: 1) pido permiso, 2) elijo con un toque, 3) arrastro para mover, 4) la devuelvo al acordar.",
          items: ["Pido permiso", "Elijo con un toque", "Arrastro para mover o pasar", "La devuelvo al terminar el tiempo"],
        } },
        { id: "g2-t-4b", tipo: "explica", titulo: "Gestos táctiles", n: 2, instr: "Responde sobre los gestos y el uso acompañado.", params: { preguntas: [
          P("¿Con qué gesto muevo un dibujo en la pantalla?", ["Lo toco una vez y ya", "Lo arrastro con el dedo", "Grito", "Lo apago"], 1, "El arrastre mueve elementos o pasa de página.", ""),
          P("¿Uso la tablet cuando quiero y el tiempo que quiero?", ["Sí siempre", "No: con permiso y tiempo acordado", "Solo de noche", "Si tengo hambre"], 1, "El uso acompañado cuida mis ojos, mi descanso y mis actividades.", ""),
        ] } },
      ],
      [EXP("Tablet y celular con cuidado", [
        P("Antes de tomar un dispositivo...", ["lo escondo", "pido permiso", "lo apago", "lo rompo"], 1, "El permiso y el acuerdo de tiempo evitan conflictos y cuidan la vista.", ""),
        P("Para abrir una app...", ["la arrastro todo el rato", "la toco una vez", "golpeo la pantalla", "la sopló"], 1, "Un toque firme y breve abre lo que elegimos.", ""),
        P("Cuando se acuerda el tiempo...", ["sigo porque estoy jugando", "lo dejo y lo devuelvo", "lo escondo", "lo apago y no digo nada"], 1, "Cumplir el acuerdo enseña responsabilidad y confianza.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Artística ---------------- */
  G2.artistica = [
    T(
      "Formas, colores y texturas",
      "Crea composiciones combinando formas, colores y texturas.",
      "Educación artística: crear composiciones con formas, colores y texturas.",
      [
        D("Composición", "Componer es colocar formas y colores con un orden que se vea bien.", "🖼️"),
        D("Texturas", "Una textura es lo que se siente al tocar: áspera, suave, lisa.", "🖐️"),
        D("Contraste", "Colores claros y oscuros juntos hacen resaltar las figuras.", "🌗"),
      ],
      [
        { id: "g2-a-1a", tipo: "clasificar", titulo: "Texturas", n: 1, instr: "Toca el objeto y su textura.", params: {
          categorias: [{ id: "suave", n: "Suave", icono: "☁️" }, { id: "aspe", n: "Áspera", icono: "🧽" }, { id: "lisa", n: "Lisa", icono: "👁️" }],
          items: [
            { t: "ALGODÓN", cat: "suave" }, { t: "LIJA", cat: "aspe" }, { t: "VIDRIO", cat: "lisa" },
            { t: "PLUMA", cat: "suave" }, { t: "CORCHO", cat: "aspe" }, { t: "MESA PULIDA", cat: "lisa" },
          ],
        } },
        { id: "g2-a-1b", tipo: "explica", titulo: "Composición", n: 3, instr: "Piensa en tu obra y responde.", params: { preguntas: [
          P("¿Qué es componer una obra?", ["Borrar todo", "Organizar formas y colores con un orden", "Dibujar solo líneas", "Usar un color"], 1, "La composición organiza los elementos de la obra.", ""),
          P("Una lija se siente...", ["Lisa", "Áspera", "Suave", "Fría"], 1, "La lija tiene textura áspera.", ""),
          P("¿Puedo combinar varios colores en una obra?", ["No", "Sí, con intención y armonía", "Solo dos", "Solo colores primarios"], 1, "Combinar colores con intención produce obras interesantes.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Represento historias",
      "Representa historias mediante dibujos, gestos y dramatizaciones breves.",
      "Educación artística: representar historias mediante dibujos y dramatizaciones.",
      [
        D("Actuar", "Dramatizar es actuar con el cuerpo y la voz lo que pasa en la historia.", "🎭"),
        D("Expresión", "La cara y las manos comunican emociones sin palabras.", "😊"),
        D("Personajes", "Elijo un personaje y lo represento con gestos y voz.", "🕴️"),
      ],
      [
        { id: "g2-a-2a", tipo: "ordenar", titulo: "Armo la escena", n: 1, instr: "Ordena los pasos para representar una historia.", params: { consigna: "Toca en orden los pasos para armar mi dramatización.", items: ["ELIJO EL CUENTO", "ESCOJO MI PERSONAJE", "ENSAYO GESTOS Y VOZ", "REPRESENTO PARA OTROS"] } },
        { id: "g2-a-2b", tipo: "explica", titulo: "Dramatizar", n: 2, instr: "Piensa en la expresión y responde.", params: { preguntas: [
          P("¿Qué parte del cuerpo ayuda a mostrar emociones al actuar?", ["Solo los pies", "La cara y las manos", "El estómago", "Nada"], 1, "La expresión facial y los gestos transmiten emociones.", ""),
          P("Dramatizar una historia me ayuda a...", ["Olvidarla", "Entenderla mejor y expresarme", "No leer", "Escribir menos"], 1, "Representar el texto profundiza su comprensión.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Colores primarios y secundarios",
      "Mezcla los colores primarios para obtener los secundarios.",
      "Educación artística: teoría del color.",
      [
        D("Primarios", "Rojo, azul y amarillo son primarios: no se crean mezclando otros.", "🔴"),
        D("Secundarios", "Rojo + amarillo = naranja. Azul + amarillo = verde. Rojo + azul = morado.", "🟠"),
        D("Proporción", "Si cambio cuánto echo de cada color, el tono también cambia.", "⚖️"),
      ],
      [
        { id: "g2-a-3a", tipo: "emparejar", titulo: "Mezcla de colores", n: 1, instr: "Toca la mezcla y después el color que sale.", params: {
          parejas: [
            { a: "ROJO + AMARILLO", b: "NARANJA" },
            { a: "AZUL + AMARILLO", b: "VERDE" },
            { a: "ROJO + AZUL", b: "MORADO" },
          ],
        } },
        { id: "g2-a-3b", tipo: "explica", titulo: "Primarios y secundarios", n: 2, instr: "Responde sobre las mezclas de color.", params: { preguntas: [
          P("¿Cuál es un color primario?", ["El verde", "El rojo", "El naranja", "El morado"], 1, "Los primarios son rojo, azul y amarillo; de ellos salen los demás.", ""),
          P("¿Cómo obtengo el verde?", ["Rojo + amarillo", "Azul + amarillo", "Rojo + azul", "Solo con blanco"], 1, "Mezclando azul y amarillo obtenemos verde.", ""),
        ] } },
      ],
      [EXP("El color se mezcla", [
        P("Los colores primarios son...", ["rojo, azul y amarillo", "verde y morado", "negro y blanco", "naranja y rosa"], 0, "Con los tres primarios podemos crear casi todos los colores.", ""),
        P("Rojo + azul da...", ["verde", "morado", "naranja", "gris"], 1, "La mezcla de rojo y azul produce morado.", ""),
        P("Si echo más amarillo que rojo al naranja...", ["queda más anaranjado claro", "queda morado", "queda negro", "no cambia"], 0, "La proporción de cada primario define el tono del secundario.", ""),
      ]) ],
      null
    ),
    T(
      "Ritmos de la música",
      "Reconoce ritmos sencillos, tempo y figuras rítmicas básicas.",
      "Educación artística: ritmo y tempo.",
      [
        D("Tempo", "El tempo es qué tan rápido o lento va la música.", "⏩"),
        D("Compás", "El compás agrupa los tiempos: UN-dos-tres-cuatro, UN-dos-tres-cuatro.", "🥁"),
        D("Silencio", "El silencio también es música: da pausa y resalta lo que viene después.", "🤫"),
      ],
      [
        { id: "g2-a-4a", tipo: "ordenar", titulo: "Patrón rítmico", n: 1, instr: "Ordena el patrón de palmas y silencio.", params: {
          consigna: "Ordena el patrón: palmas dobles, palmas sola, silencio, palmas dobles.",
          items: ["Palmas dobles: ¡pa-pa!", "Palmas sola: ¡pa!", "Silencio: shh", "Palmas dobles: ¡pa-pa!"],
        } },
        { id: "g2-a-4b", tipo: "explica", titulo: "Tempo y compás", n: 2, instr: "Responde sobre el ritmo.", params: { preguntas: [
          P("¿Qué es el tempo?", ["El nombre de la canción", "Qué tan rápido o lento va", "El volumen", "El instrumento"], 1, "El tempo marca la velocidad con que avanza la música.", ""),
          P("El compás sirve para...", ["agrupar los tiempos", "hacer más ruido", "escribir letras", "apagar el instrumento"], 0, "El compás ordena los tiempos en grupos regulares.", ""),
        ] } },
      ],
      [EXP("Siento el ritmo", [
        P("Si la música va muy rápida, el tempo es...", ["rápido", "lento", "silencioso", "grave"], 0, "El tempo rápido acelera los pulsos de la música.", ""),
        P("Contar UN-dos-tres-cuatro ayuda a...", ["dormir", "marcar el compás", "cantar fuerte", "tocar más alto"], 1, "Contar nos da el pulso del compás para no salirnos del ritmo.", ""),
        P("El silencio en una canción...", ["la arruina", "da pausa y resalta lo que viene", "la apaga", "no existe"], 1, "Los silencios también son parte del ritmo y le dan dramatismo.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Física ---------------- */
  G2.efisica = [
    T(
      "Lanzar y atrapar",
      "Combina lanzamientos y recepciones con objetos de distintos tamaños.",
      "Educación física: lanzar y atrapar objetos.",
      [
        D("Lanzar", "Lanzo siguiendo una trayectoria: hacia adelante y con control.", "🤾"),
        D("Atrapar", "Atrapo con las dos manos y llevo el objeto al cuerpo.", "🤲"),
        D("Coordinación", "Mirar el objeto mientras viaja mejora la coordinación ojo-mano.", "👁️"),
      ],
      [
        { id: "g2-f-1a", tipo: "explica", titulo: "Lanzar y atrapar", n: 3, instr: "Piensa en la técnica y responde.", params: { preguntas: [
          P("Para atrapar bien, debo...", ["Mirar hacia otro lado", "Mirar el objeto hasta que llegue", "Cerrar los ojos", "Cruzar los brazos"], 1, "Seguir el objeto con la vista mejora la recepción.", ""),
          P("¿Con qué parte atrapo la pelota?", ["Con la cabeza", "Con las dos manos", "Con un pie", "Con los ojos"], 1, "Las dos manos forman una red segura.", ""),
          P("Antes de lanzar, ¿qué observo?", ["Nada", "Hacia dónde lanzo y si hay personas", "El cielo", "Mis pies siempre"], 1, "Mirar el destino y el espacio evita accidentes.", ""),
        ] } },
        { id: "g2-f-1b", tipo: "ordenar", titulo: "Secuencia motriz", n: 1, instr: "Ordena la secuencia de lanzamiento y recepción.", params: { consigna: "Ordena los pasos del lanzamiento y la recepción.", items: ["PREPARO EL AGARRE", "MIRA MI DESTINO", "LANZO CON CONTROL", "ATRAPO CON LAS DOS MANOS"] } },
      ],
      null
    ),
    T(
      "Juegos con reglas y descanso",
      "Participa en juegos colectivos respetando reglas y reconoce la importancia del descanso.",
      "Educación física: juegos con reglas colectivas; descanso y actividad física.",
      [
        D("Reglas", "Las reglas hacen el juego justo y divertido para todos.", "📏"),
        D("Trabajo en equipo", "Ganar juntos se siente mejor que ganar solo.", "🤝"),
        D("Descanso", "Después de jugar, tomo agua y descanso para recuperar energía.", "💧"),
      ],
      [
        { id: "g2-f-2a", tipo: "explica", titulo: "Jugar con otros", n: 4, instr: "Piensa en cómo jugamos juntos.", params: { preguntas: [
          P("Si un equipo no respeta las reglas...", ["Gana siempre", "El juego deja de ser justo", "No pasa nada", "Se aburre"], 1, "Las reglas garantizan la equidad del juego.", ""),
          P("Después de jugar fuerte...", ["No tomo nada", "Tomo agua y descanso", "Sigo sin parar", "Duermo en el patio"], 1, "Hidratarse y descansar son parte del hábito saludable.", ""),
          P("Un buen compañero de equipo...", ["Excluye a otros", "Escucha y coopera", "Hace trampa", "No deja jugar"], 1, "Cooperar y escuchar mejora el juego de todos.", ""),
          P("¿Cada cuánto conviene hacer actividad física?", ["Nunca", "Con frecuencia, casi todos los días", "Solo en fiestas", "Una vez al año"], 1, "La actividad física frecuente cuida el cuerpo y la mente.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Corro y resisto",
      "Practica carreras continuas y reconoce la importancia de la resistencia.",
      "Educación física: resistencia y carrera.",
      [
        D("Resistencia", "La resistencia es poder moverme durante más tiempo sin cansarme rápido.", "🏃"),
        D("Respiro parejo", "Al correr largo, respiro parejo por la nariz y la boca.", "😮"),
        D("Paso a paso", "Si me canso, paso al trote y sigo: no me detengo de golpe.", "👣"),
      ],
      [
        { id: "g2-f-3a", tipo: "ordenar", titulo: "Corro con cuidado", n: 1, instr: "Ordena la rutina de carrera.", params: {
          consigna: "Ordena: 1) caliento caminando, 2) corro a mi ritmo, 3) paso al trote si me canso, 4) respiro y estiro.",
          items: ["Caliento caminando", "Corro a mi ritmo", "Paso al trote si me canso", "Respiro y estiro"],
        } },
        { id: "g2-f-3b", tipo: "explica", titulo: "Resistencia", n: 3, instr: "Responde sobre correr sin parar.", params: { preguntas: [
          P("¿Qué es la resistencia?", ["Correr muy rápido un segundo", "Moverme más tiempo sin cansarme rápido", "Saltar alto", "Ganar siempre"], 1, "La resistencia es la capacidad de mantener la actividad más tiempo.", ""),
          P("Si me canso a mitad de la carrera...", ["me detengo tirado", "paso al trote y sigo", "corro más rápido", "me enojo"], 1, "Bajar el ritmo gradualmente permite terminar la carrera.", ""),
          P("¿Cómo respiro al correr largo?", ["Contengo el aire", "Respiro parejo por nariz y boca", "Respiro muy rápido", "No respiro"], 1, "La respiración parejo da oxígeno al cuerpo y alarga el esfuerzo.", ""),
        ] } },
      ],
      [EXP("Cuerpo resistente", [
        P("La resistencia me ayuda a...", ["dormir más", "jugar más tiempo sin cansarme", "comer más", "ser más alto"], 1, "Con más resistencia, el cuerpo rinde más tiempo.", ""),
        P("Si paro de golpe después de correr...", ["me siento mejor", "me mareo más fácil", "duermo", "corro más"], 1, "Bajar el ritmo poco a poco evita mareos.", ""),
        P("Entrenar seguido hace que...", ["cante mejor", "resista más", "corra peor", "no cambie nada"], 1, "La resistencia mejora practicando con constancia.", ""),
      ]) ],
      null
    ),
    T(
      "Equilibrio y reacción",
      "Mejora el equilibrio estático y la rapidez de reacción.",
      "Educación física: equilibrio y coordinación.",
      [
        D("Equilibrio", "Pararme en un pie, primero con apoyo y luego sin él, mejora el equilibrio.", "🧘"),
        D("Reacción", "Reaccionar es responder rápido a una señal: ¡ya! y me muevo.", "⚡"),
        D("Coordinación", "Coordinar es usar ojos, manos y pies juntos con precisión.", "👀"),
      ],
      [
        { id: "g2-f-4a", tipo: "ordenar", titulo: "Juego de reacción", n: 1, instr: "Ordena los pasos del juego de reacción.", params: {
          consigna: "Ordena: 1) me pongo en puntas, 2) contengo y espero la señal, 3) reacciono a la señal, 4) vuelvo al lugar.",
          items: ["Me pongo en puntas y me acomodo", "Contengo y espero la señal", "Reacciono apenas suena", "Vuelvo al lugar con calma"],
        } },
        { id: "g2-f-4b", tipo: "explica", titulo: "Equilibrio y reacción", n: 3, instr: "Responde sobre estas habilidades.", params: { preguntas: [
          P("¿Qué me ayuda a mantener el equilibrio en un pie?", ["Cerrar los ojos de golpe", "Mirar un punto fijo y activar el core", "Respirar muy rápido", "Saltar"], 1, "Mirar un punto fijo y tensar suavemente el centro del cuerpo estabiliza.", ""),
          P("Reaccionar rápido depende de...", ["la señal que percibo y mi atención", "la suerte", "el color de mi ropa", "la hora"], 0, "Atender la señal y anticipar la respuesta mejora la reacción.", ""),
          P("Coordinar significa...", ["usar solo los brazos", "usar ojos, manos y pies juntos", "correr recto", "saltar alto"], 1, "La coordinación sincroniza varias partes del cuerpo con precisión.", ""),
        ] } },
      ],
      [EXP("Mi cuerpo responde", [
        P("Para equilibrarme en un pie, primero...", ["miro un punto fijo", "cierro los oidos", "me siento", "corro"], 0, "Un punto de apoyo visual ayuda al cuerpo a estabilizarse.", ""),
        P("Cuando suena la señal, debo...", ["esperar más", "reaccionar rápido", "contar hasta diez", "correr sin escuchar"], 1, "La reacción rápida entrena la atención y los reflejos.", ""),
        P("La coordinación mejora con...", ["la práctica", "la prisa", "la pereza", "nada"], 0, "Repetir movimientos afina la sincronía entre ojos y músculos.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Ética y Valores ---------------- */
  G2.etica = [
    T(
      "Empatía",
      "Reconoce sentimientos ajenos y responde con empatía ante situaciones cotidianas.",
      "Ética: practicar empatía y respeto por las diferencias.",
      [
        D("¿Qué es empatía?", "Es ponerse en el lugar del otro: ¿cómo se sentiría en mi lugar?", "💞"),
        D("Escuchar", "Escuchar al otro con calma es el primer paso de la empatía.", "👂"),
        D("Ayudar", "Si alguien está triste, puedo acompañarlo o pedir ayuda por él.", "🤝"),
      ],
      [
        { id: "g2-e-1a", tipo: "explica", titulo: "Empatía", n: 4, instr: "Piensa en cómo se siente el otro y responde.", params: { preguntas: [
          P("Un nuevo compañero no conoce a nadie. ¿Qué hago?", ["Lo ignoro", "Lo invito a jugar", "Me río", "Le digo que se vaya"], 1, "Incluir al nuevo es actuar con empatía.", ""),
          P("Empatía significa...", ["Ganar siempre", "Entender cómo se siente el otro", "Hablar fuerte", "Tener razón"], 1, "Ponerse en el lugar del otro es la empatía.", ""),
          P("Si un amigo llora porque perdió...", ["Me río", "Lo consuelo o le ofrezco jugar", "Lo culpo", "Me voy"], 1, "Acompañar en el dolor es una muestra de empatía.", ""),
          P("Escuchar al otro...", ["Es perder el tiempo", "Me ayuda a entenderlo", "Es solo para adultos", "No sirve"], 1, "Escuchar con atención permite comprender al otro.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Cooperación y diálogo",
      "Practica la cooperación, el diálogo y la solución pacífica de conflictos.",
      "Ética: cooperación, diálogo y solución pacífica de conflictos.",
      [
        D("Cooperar", "Cooperar es trabajar juntos hacia una meta común.", "🤝"),
        D("Dialogar", "Dialogar es decir lo que pienso con calma y escuchar al otro.", "💬"),
        D("Paz", "Los conflictos se resuelven hablando, nunca con golpes.", "🕊️"),
      ],
      [
        { id: "g2-e-2a", tipo: "explica", titulo: "Resolver conflictos", n: 4, instr: "Elige la mejor forma de resolver.", params: { preguntas: [
          P("Yo y mi amigo queremos el mismo libro. ¿Qué hacemos?", ["Lo tiramos al piso", "Dialogamos y acordamos cuándo lo usamos", "Golpeamos", "Lo escondemos"], 1, "El diálogo permite acuerdos justos para todos.", ""),
          P("¿Qué significa cooperar?", ["Trabajar solo", "Trabajar juntos para una meta", "Ganar sin esfuerzo", "No participar"], 1, "Cooperar es sumar esfuerzos.", ""),
          P("Si alguien me ofende con palabras...", ["Lo golpeo", "Le digo con calma que no me gusta y busco ayuda", "Le respondo peor", "Me vengo enojado para siempre"], 1, "Expresar el disgusto con calma y pedir ayuda evita la violencia.", ""),
          P("Para dialogar debo...", ["Escuchar y hablar con respeto", "Gritar", "Interrumpir", "Cerrar los oídos"], 0, "Escuchar y hablar con respeto son las claves del diálogo.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Todos somos distintos y valiosos",
      "Reconoce la diversidad y valora las diferencias de las personas.",
      "Ética: respeto a la diversidad.",
      [
        D("Diferentes", "Tenemos distintos colores de piel, gustos y maneras de ser; eso nos enriquece.", "🌍"),
        D("Igualitos en derechos", "Todos merecemos el mismo respeto y las mismas oportunidades.", "⚖️"),
        D("Sin burlas", "Burlarse de la diferencia lastima; celebrarla nos hace mejores.", "🎉"),
      ],
      [
        { id: "g2-e-3a", tipo: "clasificar", titulo: "Respeto o burla", n: 1, instr: "Toca la categoría y después cada acción.", params: {
          categorias: [
            { id: "res", n: "ES RESPETO", icono: "🤝" },
            { id: "bur", n: "ES BURLA", icono: "🚫" },
          ],
          items: [
            { t: "«ME GUSTA TU PELO RIZADO»", cat: "res" },
            { t: "«TE BURLAS DE MI ACENTO»", cat: "bur" },
            { t: "«TE INVITO A JUGAR»", cat: "res" },
            { t: "«IMITAS MI MANERA DE HABLAR»", cat: "bur" },
          ],
        } },
        { id: "g2-e-3b", tipo: "explica", titulo: "Valorar la diversidad", n: 2, instr: "Responde sobre las diferencias.", params: { preguntas: [
          P("Un compañero llega de otra región y habla distinto. ¿Qué hago?", ["Lo imito para reírnos", "Lo saludo y le enseño nuestros juegos", "Lo ignoro", "Le cambio el nombre"], 1, "Recibir al nuevo y ayudarlo integra y mejora la convivencia.", ""),
          P("¿Todos merecen el mismo respeto?", ["No, solo los mayores", "Sí, todos por igual", "Solo los que juegan bien", "Solo los ricos"], 1, "El respeto no depende de las diferencias: es para todos.", ""),
        ] } },
      ],
      [EXP("Diversidad que enriquece", [
        P("Las diferencias entre las personas...", ["nos separan", "nos enriquecen", "no existen", "son malas"], 1, "Cada persona aporta algo único al grupo.", ""),
        P("Burlarme de un acento...", ["es chistoso", "lastima", "es normal", "enseña"], 1, "Las burlas hieren y excluyen; nunca son divertidas para el otro.", ""),
        P("Si veo que excluyen a alguien, yo...", ["también lo excluyo", "lo invito a jugar", "me callo", "me río"], 1, "Incluir al que falta es un acto de valentía amable.", ""),
      ]) ],
      null
    ),
    T(
      "Hablo lo que siento",
      "Expresa emociones con palabras y escucha a los demás sin interrumpir.",
      "Ética: comunicación asertiva y escucha.",
      [
        D("Yo siento...", "Decir «me siento triste cuando...» ayuda más que gritar o llorar.", "💬"),
        D("Escucho", "Escuchar es dejar terminar al otro y luego responder con calma.", "👂"),
        D("Sin interrumpir", "Interrumpir hace que el otro no se sienta escuchado.", "🤐"),
      ],
      [
        { id: "g2-e-4a", tipo: "ordenar", titulo: "Hablamos y resolvemos", n: 1, instr: "Ordena los pasos para expresarse bien.", params: {
          consigna: "Ordena: 1) escucho sin cortar, 2) digo cómo me siento, 3) pienso una solución, 4) la acuerdo con el otro.",
          items: ["Escucho sin cortar", "Digo cómo me siento con calma", "Pienso una solución", "La acuerdo con el otro"],
        } },
        { id: "g2-e-4b", tipo: "explica", titulo: "Expresión y escucha", n: 2, instr: "Responde sobre cómo comunicarnos.", params: { preguntas: [
          P("¿Cómo expreso que algo me trae mal?", ["Gritando", "Diciendo con calma qué siento y por qué", "Llorando sin parar", "Callándome para siempre"], 1, "Nombrar la emoción con palabras busca solución y evita gritos.", ""),
          P("Mientras un compañero habla, yo...", ["lo interrumpo", "lo escucho y espero mi turno", "me voy", "le corto la frase"], 1, "Escuchar completo al otro permite entenderlo y responder mejor.", ""),
        ] } },
      ],
      [EXP("Comunicación amable", [
        P("Decir «me siento...» con palabras...", ["es de tontos", "ayuda a que el otro me entienda", "no sirve", "es peor que gritar"], 1, "Las palabras describen lo que sentimos y abren el diálogo.", ""),
        P("Interrumpir al que habla...", ["le ayuda", "hace que no se sienta escuchado", "es correcto", "es un juego"], 1, "La escucha pacienciosa es el corazón del diálogo.", ""),
        P("Cuando nos calamos y gritamos, la solución...", ["llega antes", "se complica", "no importa", "es mejor"], 1, "Los gritos tapan el problema; la calma lo ilumina.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Religiosa ---------------- */
  G2.religiosa = [
    T(
      "Expresiones de mi comunidad",
      "Reconoce expresiones culturales y religiosas de su entorno con respeto.",
      "Educación religiosa: reconocer expresiones culturales y religiosas del entorno.",
      [
        D("Tradiciones", "Cada comunidad celebra con cantos, comidas y fechas propias.", "🎊"),
        D("Respeto", "Puedo conocer las tradiciones de otros sin burlarme.", "🤝"),
        D("Aprender de todos", "Las tradiciones cuentan la historia de las personas.", "📖"),
      ],
      [
        { id: "g2-r-1a", tipo: "explica", titulo: "Tradiciones", n: 3, instr: "Piensa en tu comunidad y responde.", params: { preguntas: [
          P("Si un compañero celebra una festividad distinta...", ["Lo burlo", "Le pregunto con respeto y aprendo", "Le digo que está mal", "Lo excluyo"], 1, "Preguntar con respeto nos enriquece culturalmente.", ""),
          P("Las tradiciones...", ["No sirven", "Cuentan la historia de un pueblo", "Son solo comida", "Solo existen en los libros"], 1, "Las tradiciones expresan la identidad de una comunidad.", ""),
          P("¿Qué hago si no comparto una creencia?", ["Molesto", "Respeto y escucho", "Discuto", "Me río"], 1, "El respeto permite convivir con creencias distintas.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "La escuela y la comunidad",
      "Reconoce valores compartidos en la escuela y en la comunidad.",
      "Educación religiosa: valores de convivencia (según el currículo institucional).",
      [
        D("En la escuela", "La escuela vive valores como el respeto, la honestidad y la ayuda mutua.", "🏫"),
        D("En la comunidad", "Las comunidades se organizan con fiestas, trabajo conjunto y cuidado del entorno.", "🏘️"),
        D("Vivir los valores", "Los valores se aprenden observando y practicándolos cada día.", "🌱"),
      ],
      [
        { id: "g2-r-2a", tipo: "clasificar", titulo: "Escuela o comunidad", n: 1, instr: "Toca el lugar y después cada acción.", params: {
          categorias: [
            { id: "esc", n: "EN LA ESCUELA", icono: "🏫" },
            { id: "com", n: "EN LA COMUNIDAD", icono: "🏘️" },
          ],
          items: [
            { t: "SALUDO A MI MAESTRA", cat: "esc" },
            { t: "PARTICIPO EN LA FIESTA DEL BARRIO", cat: "com" },
            { t: "AYUDO A UN COMPAÑERO", cat: "esc" },
            { t: "LIMPIO EL PARQUE CON OTROS", cat: "com" },
          ],
        } },
        { id: "g2-r-2b", tipo: "explica", titulo: "Valores compartidos", n: 2, instr: "Responde sobre los valores.", params: { preguntas: [
          P("¿Dónde aprendo valores como el respeto y la ayuda?", ["Solo en la televisión", "En la escuela, la familia y la comunidad", "En ningún lado", "Solo en los juegos"], 1, "Los valores se cultivan en todos los espacios donde convivimos.", ""),
          P("¿Los valores se practican o solo se memorizan?", ["Se memorizan y ya", "Se practican cada día", "No existen", "Sirven para exámenes"], 1, "Un valor se vuelve parte de uno cuando se vive en acciones.", ""),
        ] } },
      ],
      [EXP("Valores que conviven", [
        P("El respeto se ve cuando...", ["gritamos", "escuchamos y tratamos bien a todos", "corremos", "callamos"], 1, "El respeto se demuestra en gestos diarios.", ""),
        P("La ayuda mutua significa...", ["cada quien lo suyo", "nos apoyamos cuando alguien lo necesita", "solo ayudo si me conviene", "ayudar una vez al año"], 1, "Ayudarnos fortalece la comunidad.", ""),
        P("Practicar un valor cada día...", ["no cambia nada", "lo hace real en mí", "es imposible", "es solo para adultos"], 1, "La práctica constante transforma hábitos y convivencia.", ""),
      ]) ],
      null
    ),
  ];

  /* =========================================================
     TERCERO DE PRIMARIA
     Comprensión lectora, operaciones, razonamiento y explicación
     de fenómenos.
     ========================================================= */
  const G3 = {};

  /* ---------------- Lenguaje ---------------- */
  G3.lenguaje = [
    T(
      "La idea principal",
      "Identifica la idea principal de textos narrativos e informativos cortos.",
      "Identificar ideas principales y comprender textos.",
      [
        D("Idea principal", "Es lo más importante del texto: de qué habla todo el párrafo.", "🎯"),
        D("Ideas de apoyo", "Son los detalles que explican o ejemplifican la idea principal.", "🧾"),
        D("Truco", "Si me preguntan de qué trata, respondo con una oración corta.", "💡"),
      ],
      [
        { id: "g3-l-1a", tipo: "explica", titulo: "Idea principal", n: 4, instr: "Lee y elige qué es lo más importante.", params: { preguntas: [
          P("«Los elefantes viven en manadas y se protegen entre ellos.» ¿De qué trata?", ["De los elefantes y cómo viven en grupo", "De los leones", "De la comida", "Del clima"], 0, "Todo el texto habla de cómo viven los elefantes: esa es la idea principal.", "Busca qué se repite como tema."),
          P("La idea principal de un texto es...", ["La más larga", "Lo más importante: de qué habla", "La última oración siempre", "Un dibujo"], 1, "Es el tema central que une al resto del texto.", ""),
          P("Los detalles sirven para...", ["Alargar el texto", "Explicar y ejemplificar la idea principal", "Confundir", "Nada"], 1, "Los detalles apoyan la idea principal con datos.", ""),
          P("«La abeja poliniza flores. Gracias a ella hay frutos.» Idea principal:", ["Hay muchas flores", "La abeja es importante para las plantas", "Los frutos son caros", "Las abejas vuelan"], 1, "El texto resalta la importancia de la abeja en las plantas.", ""),
        ] } },
        { id: "g3-l-1b", tipo: "sentence-read", titulo: "Leo y extraigo datos", n: 3, instr: "Lee la oración tocando cada palabra y responde.", params: { pool: undefined } },
      ],
      null
    ),
    T(
      "Escribo con estructura",
      "Escribe textos narrativos y descriptivos organizados usando puntuación básica.",
      "Escribir historias y descripciones organizadas; usar puntuación básica.",
      [
        D("Estructura", "Inicio (quién y dónde), desarrollo (qué pasó) y final (cómo terminó).", "🏗️"),
        D("Conectores", "Primero, luego, además, sin embargo... ordenan las ideas.", "🔗"),
        D("Puntuación", "Punto, coma y signos de pregunta hacen claro el texto.", "⏺️"),
      ],
      [
        { id: "g3-l-2a", tipo: "escribir", titulo: "Escribo una historia", n: 1, instr: "Escribe una historia corta con inicio, desarrollo y final.", params: { consigna: "Escribe una historia corta (mínimo 3 oraciones) con inicio, desarrollo y final.", min: 3, ejemplo: "Un día encontré un perrito. Lo llevé a casa. Luego lo cuidamos juntos." } },
        { id: "g3-l-2b", tipo: "explica", titulo: "Puntuación", n: 3, instr: "Elige la puntuación correcta.", params: { preguntas: [
          P("¿Dónde va el signo de pregunta?", ["Al principio de la oración", "Al final de la pregunta", "En medio de cada palabra", "No se usa"], 1, "Las preguntas terminan con «?».", ""),
          P("Para separar ideas dentro de una misma oración uso...", ["Coma", "Raya", "Nada", "Espacio doble"], 0, "La coma separa elementos y da pausa.", ""),
          P("¿Cuál está bien puntuada?", ["hoy fui a la escuela.", "Hoy fui a la escuela.", "HOY fui A la escuela", "hoy FUI a la ESCUELA."], 1, "Mayúscula inicial y punto final: oración correcta.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Participo y expongo",
      "Prepara y presenta ideas brevemente con un orden claro y vocabulario adecuado.",
      "Participar en exposiciones breves.",
      [
        D("Preparar", "Antes de exponer, anoto las 3 ideas principales de mi tema.", "📋"),
        D("Hablar claro", "Hablo despacio, con voz firme y miro al público.", "🎤"),
        D("Escuchar", "Al terminar, escucho las preguntas y respondo con calma.", "👂"),
      ],
      [
        { id: "g3-l-3a", tipo: "ordenar", titulo: "Preparo mi exposición", n: 1, instr: "Ordena los pasos para exponer.", params: { consigna: "Toca en orden los pasos de una buena exposición.", items: ["ELIJO EL TEMA", "ANOTO 3 IDEAS CLAVE", "ENSAYO EN VOZ ALTA", "EXPUONGO Y ESCUCHO PREGUNTAS"] } },
        { id: "g3-l-3b", tipo: "explica", titulo: "Exponer mejor", n: 3, instr: "Piensa en cómo expones y responde.", params: { preguntas: [
          P("Antes de exponer, lo mejor es...", ["No preparar nada", "Anotar las ideas principales", "Memorizar todo de corrido", "Llevar un papel en blanco"], 1, "Tener las ideas claras da seguridad y orden.", ""),
          P("Mientras expongo, debo...", ["Mirar el piso", "Hablar claro y mirar al público", "Susurrar", "Correr"], 1, "La voz clara y el contacto visual conectan con la audiencia.", ""),
          P("Si me preguntan algo y no sé...", ["Invento", "Digo con honestidad que no lo sé y lo averiguo", "Me enojo", "Me voy"], 1, "Reconocer lo que falta y averiguarlo es de buenos expositores.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Matemáticas ---------------- */
  G3.mate = [
    T(
      "Tablas de multiplicar",
      "Resuelve multiplicaciones con las tablas del 1 al 10 con seguridad.",
      "Fortalecer las tablas de multiplicar; resolver multiplicaciones.",
      [
        D("Repetir", "Multiplicar es repetir: 4 × 3 = 4 + 4 + 4 = 12.", "✖️"),
        D("Tabla del 1", "Multiplicar por 1 deja el número igual: 7 × 1 = 7.", "1️⃣"),
        D("Tabla del 0", "Cualquier número por 0 es 0: 9 × 0 = 0.", "0️⃣"),
      ],
      [
        { id: "g3-m-1a", tipo: "explica", titulo: "Multiplicar", n: 5, instr: "Resuelve usando las tablas.", params: { preguntas: [
          P("¿Cuánto es 6 × 4?", ["20", "24", "28", "18"], 1, "6 × 4 = 24. Cuenta de seis en seis cuatro veces.", "6, 12, 18, 24."),
          P("¿Cuánto es 9 × 3?", ["27", "21", "24", "30"], 0, "9 × 3 = 27.", ""),
          P("¿Cuánto es 8 × 0?", ["8", "0", "16", "1"], 1, "Multiplicar por cero siempre da cero.", ""),
          P("Si tengo 5 filas con 7 niños cada una...", ["10", "12", "35", "30"], 2, "5 × 7 = 35 niños.", "Son grupos iguales."),
          P("¿Cuánto es 7 × 7?", ["42", "49", "56", "44"], 1, "7 × 7 = 49.", ""),
        ] } },
        { id: "g3-m-1b", tipo: "addvisual", titulo: "Grupos iguales", n: 4, instr: "Junta los objetos, cuenta todos y toca el resultado.", params: { maxTotal: 25 } },
      ],
      null
    ),
    T(
      "División: repartir en partes iguales",
      "Resuelve divisiones como reparto en partes iguales y como resta repetida.",
      "Resolver divisiones en situaciones apropiadas al grado.",
      [
        D("Repartir", "12 dulces entre 3 niños: a cada uno le tocan 4. Eso es 12 ÷ 3 = 4.", "🍬"),
        D("Resta repetida", "Dividir es preguntar cuántas veces cabe el divisor.", "🔁"),
        D("Comprobar", "Multiplico cociente por divisor y sumo el resto: debo obtener el dividendo.", "✅"),
      ],
      [
        { id: "g3-m-2a", tipo: "problem", titulo: "Problemas de reparto", n: 5, instr: "Escucha el problema y toca la respuesta.", params: { maxTotal: 20, op: "resta" } },
        { id: "g3-m-2b", tipo: "explica", titulo: "Dividir", n: 4, instr: "Piensa el reparto y responde.", params: { preguntas: [
          P("¿Cuánto es 15 ÷ 3?", ["3", "5", "6", "45"], 1, "15 entre 3 = 5. Tres grupos de cinco son quince.", "Multiplica mentalmente: 3 × 5 = 15."),
          P("Reparto 8 galletas entre 2 amigos. ¿A cuántos llega cada uno?", ["2", "4", "8", "16"], 1, "8 ÷ 2 = 4 galletas.", ""),
          P("¿Cuánto es 20 ÷ 4?", ["5", "4", "6", "10"], 0, "20 ÷ 4 = 5.", ""),
          P("Si 24 cuadernos se reparten en 6 mochilas por igual...", ["6", "4", "18", "30"], 1, "24 ÷ 6 = 4 cuadernos por mochila.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Fracciones sencillas",
      "Comprende fracciones sencillas como partes de un entero (1/2, 1/3, 1/4).",
      "Comprender fracciones sencillas.",
      [
        D("Partes iguales", "Fracción = partes IGUALES de un entero. Si no son iguales, no vale.", "🍕"),
        D("Numerador y denominador", "En 1/2: el 2 dice en cuántas partes se cortó; el 1, cuánto tomamos.", "🔢"),
        D("Mitad, tercio, cuarto", "1/2 es medio, 1/3 tercio, 1/4 cuarto.", "✂️"),
      ],
      [
        { id: "g3-m-3a", tipo: "explica", titulo: "Fracciones", n: 4, instr: "Piensa en las partes y responde.", params: { preguntas: [
          P("Si corto una pizza en 2 partes iguales y tomo 1...", ["Comí 1/2", "Comí 1/1", "Comí 2/2", "No comí nada"], 0, "Tomé 1 de 2 partes: un medio (1/2).", "El denominador son las partes totales."),
          P("En la fracción 3/4, ¿qué significa el 4?", ["Los trozos que tomé", "En cuántas partes se dividió el entero", "El número de pizzas", "Nada"], 1, "El denominador indica las partes iguales del entero.", ""),
          P("¿Cuál es la mitad de 10?", ["2", "5", "4", "20"], 1, "La mitad es 1/2 de 10 = 5.", ""),
          P("Si tomo 4/4 de un entero...", ["Tomé la mitad", "Tomé todo el entero", "Tomé nada", "Tomé un tercio"], 1, "4 de 4 partes = todo el entero.", ""),
        ] } },
        { id: "g3-m-3b", tipo: "shapes", titulo: "Figuras para partes", n: 3, instr: "Escucha el nombre y toca la figura.", params: { pool: ["circulo", "cuadrado", "triangulo", "rectangulo"] } },
      ],
      null
    ),
    T(
      "Perímetro y longitud",
      "Calcula el perímetro de figuras y resuelve problemas de longitud.",
      "Medir perímetros y longitudes.",
      [
        D("Perímetro", "Es la suma de todos los lados de una figura (el contorno).", "📐"),
        D("Unidades", "Mido en centímetros (cm) y metros (m).", "📏"),
        D("Calcular", "Cuadrado de lado 4: 4 + 4 + 4 + 4 = 16.", "🧮"),
      ],
      [
        { id: "g3-m-4a", tipo: "explica", titulo: "Perímetro", n: 4, instr: "Calcula el contorno y responde.", params: { preguntas: [
          P("Un cuadrado de lado 5 cm. ¿Cuánto mide su perímetro?", ["10 cm", "15 cm", "20 cm", "25 cm"], 2, "5+5+5+5 = 20 cm.", "Son 4 lados iguales."),
          P("El perímetro es...", ["El espacio de adentro", "La suma de todos los lados", "Solo un lado", "El área"], 1, "El perímetro mide el contorno.", ""),
          P("Un rectángulo de 6 cm y 3 cm tiene perímetro...", ["9 cm", "18 cm", "12 cm", "24 cm"], 1, "6+3+6+3 = 18 cm.", ""),
          P("¿En qué unidad mido una habitación?", ["Centímetros solamente", "Metros", "Gramos", "Litros"], 1, "Los metros sirven para largos grandes.", ""),
        ] } },
        { id: "g3-m-4b", tipo: "numberline", titulo: "Recta numérica", n: 4, instr: "Toca el número en la recta.", params: { max: 50 } },
      ],
      null
    ),
    T(
      "Tablas y gráficos",
      "Interpreta tablas y gráficos de barras sencillos para responder preguntas.",
      "Interpretar tablas y gráficos.",
      [
        D("Tabla", "Organiza datos en filas y columnas para leerlos fácil.", "📊"),
        D("Gráfico de barras", "Más alto = más cantidad; más bajo = menos.", "📶"),
        D("Comparar", "Con el gráfico comparo rápidamente qué grupo es el mayor.", "⚖️"),
      ],
      [
        { id: "g3-m-5a", tipo: "explica", titulo: "Leer gráficos", n: 4, instr: "Interpreta los datos y responde.", params: { preguntas: [
          P("En un gráfico de barras, la barra más alta representa...", ["Menos cantidad", "Más cantidad", "Nada", "El color"], 1, "La altura proporcional representa la cantidad.", ""),
          P("Una tabla organiza datos en...", ["Filas y columnas", "Solo colores", "Un párrafo", "Una canción"], 0, "Filas y columnas permiten ubicar cada dato.", ""),
          P("Si la barra de fútbol es más alta que la de natación...", ["Más eligen fútbol", "Más eligen natación", "Empatan", "No se sabe nada"], 0, "La barra más alta indica mayor cantidad de respuestas.", ""),
          P("¿Para qué sirven los gráficos?", ["Para decorar", "Para comparar cantidades de un vistazo", "Para escribir cuentos", "Para medir temperatura siempre"], 1, "Visualizar facilita la comparación inmediata.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Naturales ---------------- */
  G3.cnaturales = [
    T(
      "Ciclos de vida",
      "Describe ciclos de vida de plantas y animales y sus etapas.",
      "Estudiar ciclos de vida de los seres vivos.",
      [
        D("Ciclo", "Todo ser vivo nace, crece, se reproduce y muere: es su ciclo.", "🔄"),
        D("Plantas", "Semilla → brote → planta adulta → flor → nueva semilla.", "🌱"),
        D("Animales", "Huevos o crías, crecimiento y etapa adulta.", "🐣"),
      ],
      [
        { id: "g3-c-1a", tipo: "ordenar", titulo: "Ciclo de la planta", n: 1, instr: "Ordena las etapas del ciclo.", params: { consigna: "Ordena las etapas del ciclo de vida de una planta.", items: ["SEMILLA", "BROTE", "PLANTA JOVEN", "FLOR", "NUEVAS SEMILLAS"] } },
        { id: "g3-c-1b", tipo: "explica", titulo: "Ciclos de vida", n: 3, instr: "Piensa en las etapas y responde.", params: { preguntas: [
          P("¿En qué etapa empieza el ciclo de una planta?", ["Flor", "Semilla", "Fruto", "Hoja"], 1, "Todo empieza con la semilla germinando.", ""),
          P("La metamorfosis del sapo es...", ["Nada especial", "Huevo → renacuajo → sapo", "Sapo → huevo", "Siempre sapo"], 1, "Los anfibios cambian de forma durante su crecimiento.", ""),
          P("¿Por qué se llama «ciclo»?", ["Porque termina en medio", "Porque se repite: lo que nace deja nuevas vidas", "Porque es corto", "Porque es un juego"], 1, "Las etapas se repiten de generación en generación.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Ecosistemas y cadenas alimentarias",
      "Identifica componentes de un ecosistema y construye cadenas alimentarias sencillas.",
      "Ecosistemas y cadenas alimentarias sencillas.",
      [
        D("Ecosistema", "Es el conjunto de seres vivos y su ambiente (agua, tierra, luz).", "🌍"),
        D("Cadena alimentaria", "Quién come a quién: hierba → conejo → zorro → águila.", "🔗"),
        D("Productores y consumidores", "Las plantas producen su alimento; los animales consumen.", "🌱"),
      ],
      [
        { id: "g3-c-2a", tipo: "ordenar", titulo: "Cadena alimentaria", n: 1, instr: "Ordena la cadena de menor a mayor nivel.", params: { consigna: "Ordena la cadena alimentaria desde el inicio.", items: ["HIERBA (productora)", "CONEJO (come hierba)", "ZORRO (come conejos)", "ÁGUILA (depredadora final)"] } },
        { id: "g3-c-2b", tipo: "clasificar", titulo: "Rol en el ecosistema", n: 1, instr: "Toca el organismo y su rol.", params: {
          categorias: [{ id: "prod", n: "Productor", icono: "🌱" }, { id: "cons", n: "Consumidor", icono: "🐾" }, { id: "des", n: "Descomponedor", icono: "🍄" }],
          items: [
            { t: "ÁRBOL", cat: "prod" }, { t: "CONEJO", cat: "cons" }, { t: "HONGOS", cat: "des" },
            { t: "CEBOLLA", cat: "prod" }, { t: "HAWK", cat: "cons" }, { t: "BACTERIAS", cat: "des" },
          ],
        } },
        { id: "g3-c-2c", tipo: "explica", titulo: "Ecosistemas", n: 3, instr: "Piensa en el ecosistema y responde.", params: { preguntas: [
          P("Si desaparece la hierba...", ["No pasa nada", "Los herbívoros sufren y se afecta toda la cadena", "Hay más zorros", "Todo mejora"], 1, "Cada eslabón sostiene a los demás.", ""),
          P("Las plantas en una cadena alimentaria son...", ["Consumidoras", "Productoras", "Depredadoras", "Ninguna"], 1, "Producen su alimento con la luz del sol.", ""),
          P("Un ecosistema incluye...", ["Solo animales", "Seres vivos y su ambiente", "Solo plantas", "Solo el agua"], 1, "Biótico (vivo) + abiótico (ambiente) = ecosistema.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Materia y sus cambios",
      "Diferencia propiedades de la materia y cambios físicos sencillos.",
      "Propiedades de la materia.",
      [
        D("Estados", "Sólido, líquido y gaseoso. El hielo, el agua y el vapor son agua.", "💧"),
        D("Propiedades", "Color, textura, dureza, transparencia y estado.", "🎨"),
        D("Cambios", "Mezclar, cortar o derretir son cambios; si cambia de vuelta, es físico.", "🧪"),
      ],
      [
        { id: "g3-c-3a", tipo: "clasificar", titulo: "Estados de la materia", n: 1, instr: "Toca el material y su estado.", params: {
          categorias: [{ id: "sol", n: "Sólido", icono: "🧊" }, { id: "liq", n: "Líquido", icono: "💧" }, { id: "gas", n: "Gaseoso", icono: "💨" }],
          items: [
            { t: "MADERA", cat: "sol" }, { t: "ACEITE", cat: "liq" }, { t: "VAPOR", cat: "gas" },
            { t: "HIELO", cat: "sol" }, { t: "AGUA", cat: "liq" }, { t: "AIRE", cat: "gas" },
          ],
        } },
        { id: "g3-c-3b", tipo: "explica", titulo: "Cambios de la materia", n: 3, instr: "Piensa en los cambios y responde.", params: { preguntas: [
          P("Si el hielo se derrite...", ["Se hace agua", "Desaparece para siempre", "Se hace piedra", "Se hace vapor siempre"], 0, "El hielo (sólido) se convierte en agua (líquido).", ""),
          P("Cortar un papel es un cambio...", ["Químico", "Físico (reversible con pegamento)", "Imposible", "Total"], 1, "Se puede volver a unir: es un cambio físico.", ""),
          P("¿Qué propiedad NO es visible?", ["Color", "Textura", "Masa (se mide)", "Transparencia"], 2, "La masa no se ve: se mide con una balanza.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Luz, sonido y movimiento",
      "Explora propiedades de la luz, el sonido y describe movimientos.",
      "Luz, sonido y movimiento.",
      [
        D("Luz", "La luz viaja en línea recta; los objetos la bloquean y proyectan sombra.", "💡"),
        D("Sonido", "El sonido vibra: lo produce un cuerpo que tiembla y viaja por el aire.", "🔔"),
        D("Movimiento", "Todo movimiento se describe con dirección y velocidad.", "🏎️"),
      ],
      [
        { id: "g3-c-4a", tipo: "explica", titulo: "Luz y sonido", n: 4, instr: "Piensa en los fenómenos y responde.", params: { preguntas: [
          P("La sombra se forma cuando...", ["Hay mucha luz", "Un objeto bloquea la luz", "El objeto brilla", "Está nublado"], 1, "Sin luz que pase, se proyecta la sombra.", ""),
          P("El sonido necesita para viajar...", ["Solo el vacío", "Un medio como el aire o el agua", "Siempre electricidad", "Nada"], 1, "Las vibraciones se transmiten por medios materiales.", ""),
          P("Un objeto que hace mucha sombra...", ["Bloquea más la luz", "No bloquea nada", "Es transparente", "Es un espejo"], 0, "Cuanto más opaco y grande, más sombra proyecta.", ""),
          P("Si aprieto más la cuerda de una guitarra...", ["Suena más grave", "Suena más agudo", "No suena", "Se rompe"], 1, "Más tensión = vibración más rápida = sonido más agudo.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Sociales ---------------- */
  G3.csociales = [
    T(
      "Colombia: diversidad y regiones",
      "Reconoce la diversidad geográfica y cultural de Colombia y sus regiones.",
      "Reconocer la diversidad geográfica y cultural de Colombia.",
      [
        D("Regiones", "Caribe, Andina, Pacífica, Amazonía y Orinoquía.", "🌺"),
        D("Relieve", "Costas, valles, cordilleras, llanuras y selvas.", "⛰️"),
        D("Gente diversa", "Cada región tiene comida, música y costumbres propias.", "🎶"),
      ],
      [
        { id: "g3-s-1a", tipo: "clasificar", titulo: "Regiones", n: 1, instr: "Toca el rasgo y la región donde se encuentra.", params: {
          categorias: [{ id: "car", n: "Caribe", icono: "🏖️" }, { id: "and", n: "Andina", icono: "⛰️" }, { id: "amo", n: "Amazonía", icono: "🌴" }],
          items: [
            { t: "PLAYAS Y CÁLIDO", cat: "car" }, { t: "MONTAÑAS Y CLIMA FRÍO", cat: "and" },
            { t: "SELVA TROPICAL", cat: "amo" }, { t: "CÉSAR Y MAGDALENA", cat: "car" },
            { t: "BOGOTÁ Y MEDELLÍN", cat: "and" }, { t: "RÍOS Y SELVA", cat: "amo" },
          ],
        } },
        { id: "g3-s-1b", tipo: "explica", titulo: "Diversidad de Colombia", n: 3, instr: "Piensa en las regiones y responde.", params: { preguntas: [
          P("¿Cuántas regiones naturales principales tiene Colombia según lo estudiado?", ["Una", "Cinco", "Diez", "Dos"], 1, "Caribe, Andina, Pacífica, Amazonía y Orinoquía.", ""),
          P("En la región andina el clima es...", ["Muy caliente de costa", "Más frío por la altura", "Siempre húmedo de selva", "Desértico"], 1, "La altura hace el clima más fresco.", ""),
          P("La diversidad cultural significa...", ["Que todos hacemos lo mismo", "Que hay muchas formas de vivir, comer y bailar", "Que no hay costumbres", "Que solo hay una comida"], 1, "Cada región aporta sus tradiciones.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Mapas y ubicación",
      "Interpreta mapas sencillos: elementos, símbolos, puntos cardinales y ubicación de lugares.",
      "Interpretar mapas sencillos y ubicar lugares.",
      [
        D("Elementos del mapa", "Título, leyenda, escala y rosa de los vientos.", "🗺️"),
        D("Puntos cardinales", "Norte, sur, oriente y occidente.", "🧭"),
        D("Simbología", "La leyenda explica qué significa cada color o símbolo.", "🔑"),
      ],
      [
        { id: "g3-s-2a", tipo: "explica", titulo: "Leer un mapa", n: 4, instr: "Interpreta el mapa y responde.", params: { preguntas: [
          P("¿Qué nos explica la leyenda del mapa?", ["El clima", "Qué significa cada símbolo o color", "La historia", "Nada"], 1, "La leyenda traduce los símbolos del mapa.", ""),
          P("La rosa de los vientos indica...", ["El viento real", "Los puntos cardinales", "La escala", "Los ríos"], 1, "Marca norte, sur, oriente y occidente.", ""),
          P("Si el norte está arriba, el sur queda...", ["Arriba", "Abajo", "A la derecha", "Detrás"], 1, "El sur se ubica en la parte opuesta al norte.", ""),
          P("La escala del mapa sirve para...", ["Colorear", "Calcular distancias reales", "Escribir el título", "Marcar el clima"], 1, "Relaciona el tamaño en el mapa con la distancia real.", ""),
        ] } },
        { id: "g3-s-2b", tipo: "ordenar", titulo: "Orientación", n: 1, instr: "Ordena los pasos para ubicarme en un mapa.", params: { consigna: "Ordena los pasos para ubicar un lugar en el mapa.", items: ["BUSCO EL TÍTULO", "LEO LA LEYENDA", "ORIENTO CON LA ROSA DE LOS VIENTOS", "UBICO EL LUGAR"] } },
      ],
      null
    ),
    T(
      "Mi comunidad y sus instituciones",
      "Estudia la historia de su comunidad y reconoce instituciones y normas.",
      "Estudiar la historia de su comunidad; comprender instituciones y normas.",
      [
        D("Mi comunidad", "Barrio, vereda o ciudad con historia, gente y lugares propios.", "🏘️"),
        D("Instituciones", "Escuela, hospital, biblioteca, policía: cumplen funciones para todos.", "🏛️"),
        D("Las normas", "Las normas y leyes protegen derechos y hacen posible la convivencia.", "⚖️"),
      ],
      [
        { id: "g3-s-3a", tipo: "clasificar", titulo: "Instituciones y funciones", n: 1, instr: "Toca la institución y su función.", params: {
          categorias: [{ id: "apre", n: "Me ayuda a aprender", icono: "📚" }, { id: "salud", n: "Me cuida la salud", icono: "🏥" }, { id: "ord", n: "Cuida el orden", icono: "👮" }],
          items: [
            { t: "ESCUELA", cat: "apre" }, { t: "BIBLIOTECA", cat: "apre" }, { t: "HOSPITAL", cat: "salud" },
            { t: "CENTRO DE SALUD", cat: "salud" }, { t: "COMANDANCIA", cat: "ord" }, { t: "JUZGADO", cat: "ord" },
          ],
        } },
        { id: "g3-s-3b", tipo: "explica", titulo: "Convivencia e instituciones", n: 3, instr: "Piensa en tu comunidad y responde.", params: { preguntas: [
          P("La policía y los juzgados...", ["Venden cosas", "Cuidan el orden público y aplican las normas", "Dan clases", "Nada"], 1, "Son instituciones que garantizan seguridad y justicia.", ""),
          P("Para conocer la historia de mi barrio puedo...", ["No saber nada", "Consultar la biblioteca o hablar con los abuelos", "Inventar", "Esperar"], 1, "Las fuentes locales conservan la memoria comunitaria.", ""),
          P("Las leyes y normas...", ["Sirven para castigar solo", "Protegen derechos y permiten la convivencia", "No sirven", "Son para adultos"], 1, "El marco normativo hace posible vivir juntos en paz.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Inglés ---------------- */
  G3.ingles = [
    T(
      "Instructions — Instrucciones",
      "Comprende y sigue instrucciones básicas en inglés.",
      "Inglés: comprender instrucciones.",
      [
        D("Imperativos", "Stand up (levántate), sit down (siéntate), open (abre), close (cierra).", "👂"),
        D("Please", "Agregamos «please» para ser cortés: «Close the door, please».", "🙏"),
        D("In class", "«Listen to the teacher» = escucha al maestro.", "🏫"),
      ],
      [
        { id: "g3-i-1a", tipo: "emparejar", titulo: "Instructions", n: 1, instr: "Toca la instrucción y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "STAND UP", b: "LEVÁNTATE", audio: "stand up" }, { a: "SIT DOWN", b: "SIÉNTATE", audio: "sit down" },
            { a: "OPEN THE BOOK", b: "ABRE EL LIBRO", audio: "open the book" }, { a: "LISTEN", b: "ESCUCHA", audio: "listen" },
            { a: "WRITE YOUR NAME", b: "ESCRIBE TU NOMBRE", audio: "write your name" },
          ],
        } },
        { id: "g3-i-1b", tipo: "explica", titulo: "Following instructions", n: 3, instr: "Escucha la instrucción y elige la acción.", params: { preguntas: [
          P("«Open your book» significa...", ["Cierra tu libro", "Abre tu libro", "Escribe tu libro", "Lee tu libro"], 1, "«Open» es abrir; «close» es cerrar.", "", "en"),
          P("Si el maestro dice «stand up»...", ["Me siento", "Me levanto", "Corro", "Grito"], 1, "Stand up = levantarse.", "", "en"),
          P("Para pedir con cortesía, agrego...", ["please", "no", "sorry siempre", "thanks"], 0, "«Please» suaviza la instrucción.", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Describing — Describir personas y animales",
      "Describe personas y animales con adjetivos básicos en inglés.",
      "Inglés: describir personas, animales y objetos.",
      [
        D("Adjetivos", "Tall (alto), short (bajo), big (grande), small (pequeño).", "📏"),
        D("Colores y pelo", "Curly hair (pelo rizado), straight hair (liso), blonde (rubio).", "💇"),
        D("Posición", "«She is tall» = ella es alta. «It is small» = es pequeño.", "💬"),
      ],
      [
        { id: "g3-i-2a", tipo: "emparejar", titulo: "Adjectives", n: 1, instr: "Toca el adjetivo y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "TALL", b: "ALTO", audio: "tall" }, { a: "SHORT", b: "BAJO", audio: "short" },
            { a: "BIG", b: "GRANDE", audio: "big" }, { a: "SMALL", b: "PEQUEÑO", audio: "small" },
            { a: "HAPPY", b: "FELIZ", audio: "happy" }, { a: "FAST", b: "RÁPIDO", audio: "fast" },
          ],
        } },
        { id: "g3-i-2b", tipo: "explica", titulo: "Describing", n: 3, instr: "Completa la descripción.", params: { preguntas: [
          P("«The giraffe is ...» (la jirafa es alta)", ["short", "tall", "small", "slow"], 1, "Tall describe a lo alto.", "", "en"),
          P("¿Cómo digo «mi hermano es pequeño»?", ["My brother is big", "My brother is small", "My brother is tall", "My brother is happy"], 1, "Small = pequeño.", "", "en"),
          P("«Happy» significa...", ["Triste", "Feliz", "Cansado", "Enojado"], 1, "Happy es feliz.", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Routines and likes — Rutinas y gustos",
      "Habla de rutinas diarias y gustos con frases sencillas.",
      "Inglés: hablar de rutinas y expresar gustos.",
      [
        D("Every day", "I wake up every day (me despierto cada día).", "⏰"),
        D("Like / love", "I like drawing (me gusta dibujar). I love soccer (me encanta el fútbol).", "💛"),
        D("Presente", "She likes cats = a ella le gustan los gatos (agrega -s al verbo).", "➕"),
      ],
      [
        { id: "g3-i-3a", tipo: "emparejar", titulo: "Daily routine", n: 1, instr: "Toca la rutina y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "I WAKE UP", b: "ME DESPIERTO", audio: "i wake up" }, { a: "I EAT BREAKFAST", b: "DESAYUNO", audio: "i eat breakfast" },
            { a: "I GO TO SCHOOL", b: "VOY A LA ESCUELA", audio: "i go to school" }, { a: "I DO MY HOMEWORK", b: "HAGO LA TAREA", audio: "i do my homework" },
            { a: "I GO TO BED", b: "ME ACUESTO", audio: "i go to bed" },
          ],
        } },
        { id: "g3-i-3b", tipo: "explica", titulo: "Likes and routines", n: 4, instr: "Completa la frase correcta.", params: { preguntas: [
          P("«I ... soccer» (me gusta el fútbol)", ["like", "likes", "am like", "liking"], 0, "Con I usamos «like» sin -s.", "", "en"),
          P("«She likes cats» significa...", ["Ella no le gustan", "A ella le gustan los gatos", "Ella tiene gatos", "Ella ve gatos"], 1, "«Likes» expresa el gusto de tercera persona.", "", "en"),
          P("Every morning I ... breakfast", ["eat", "eats", "eating", "am eat"], 0, "En presente con I usamos la forma base del verbo.", "", "en"),
          P("«I love my family» significa...", ["Odio a mi familia", "Amo a mi familia", "Veo a mi familia", "Tengo familia"], 1, "Love = amar.", "", "en"),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Tecnología ---------------- */
  G3.tecnologia = [
    T(
      "Organizo información",
      "Crea documentos sencillos y organiza información en listas y cuadros.",
      "Tecnología: crear documentos y presentaciones; organizar información.",
      [
        D("Documento", "Un texto escrito en el computador que puedo editar e imprimir.", "📄"),
        D("Organizar", "Listas y cuadros ordenan la información para entenderla mejor.", "🗂️"),
        D("Pasos", "Antes de crear, defino para qué sirve mi documento.", "🧭"),
      ],
      [
        { id: "g3-t-1a", tipo: "ordenar", titulo: "Creo un documento", n: 1, instr: "Ordena los pasos para crear y organizar.", params: { consigna: "Ordena los pasos para crear un documento organizado.", items: ["PIENSO QUÉ NECESITO ESCRIBIR", "ABRO EL PROCESADOR DE TEXTO", "ESCRIBO Y ORGANIZO EN LISTAS", "GUARDO Y REVISO"] } },
        { id: "g3-t-1b", tipo: "explica", titulo: "Organizar datos", n: 3, instr: "Piensa en cómo organizas la información.", params: { preguntas: [
          P("¿Cuál forma organiza mejor una lista de tareas?", ["Texto todo junto", "Una lista con viñetas", "Un párrafo largo", "Sin títulos"], 1, "Las listas permiten ver cada tarea por separado.", ""),
          P("Guardar con un nombre claro...", ["No importa", "Ayuda a encontrar el archivo después", "Lo hace más grande", "Lo imprime"], 1, "La nomenclatura clara facilita localizar archivos.", ""),
          P("Antes de escribir debo...", ["Escribir cualquier cosa", "Definir el objetivo del documento", "Borrar", "Esperar"], 1, "Tener el propósito claro ordena el contenido.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Secuencias y programación por bloques",
      "Ordena pasos para resolver un problema e introduce secuencias de programación por bloques.",
      "Tecnología: pasos para resolver problemas; secuencias y programación por bloques.",
      [
        D("Algoritmo", "Es una lista ordenada de pasos para lograr algo: una receta.", "🧾"),
        D("Secuencia", "El orden importa: si cambio los pasos, cambia el resultado.", "🔢"),
        D("Depurar", "Si el programa falla, busco el paso equivocado y lo corrijo. (bug = falla)", "🐞"),
      ],
      [
        { id: "g3-t-2a", tipo: "ordenar", titulo: "Armo la secuencia", n: 1, instr: "Ordena los pasos del algoritmo.", params: { consigna: "Ordena los pasos para que el robot llegue a la meta.", items: ["AVANZAR 2 PASOS", "GIRAR A LA DERECHA", "AVANZAR 3 PASOS", "LLEGAR A LA META"] } },
        { id: "g3-t-2b", tipo: "explica", titulo: "Algoritmos", n: 3, instr: "Piensa en el orden de los pasos.", params: { preguntas: [
          P("Un algoritmo es...", ["Un videojuego", "Una secuencia ordenada de pasos para resolver algo", "Una computadora", "Un error"], 1, "Los algoritmos son recetas exactas que sigue la máquina.", ""),
          P("Si cambio el orden de los pasos...", ["No pasa nada", "Puede cambiar el resultado", "Se borra todo", "Funciona igual siempre"], 1, "El orden determina el resultado de la secuencia.", ""),
          P("Cuando un programa falla, lo mejor es...", ["Borrar todo", "Buscar el paso incorrecto y corregirlo", "Gritar", "Usar otro programa"], 1, "Depurar es parte de programar: corregir errores.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Sigo pasos en orden",
      "Comprende y construye secuencias de pasos para resolver tareas (algoritmos).",
      "Tecnología: pensamiento computacional, algoritmos.",
      [
        D("Algoritmo", "Un algoritmo es una lista de pasos en orden para lograr algo.", "📋"),
        D("Sin pasos de más", "Si falta un paso o está fuera de lugar, el resultado sale mal.", "🧩"),
        D("Los doy a diario", "Recetar, atarse los zapatos y jugar son algoritmos que uso siempre.", "🔁"),
      ],
      [
        { id: "g3-t-3a", tipo: "ordenar", titulo: "Preparo una arepa", n: 1, instr: "Ordena los pasos para preparar una arepa.", params: {
          consigna: "Ordena: 1) prendo el agua, 2) pongo la arepa en la mesa, 3) la doy vuelta, 4) la sirvo.",
          items: ["Prendo el agua", "Pongo la arepa en la mesa", "La doy vuelta al otro lado", "La sirvo y listo"],
        } },
        { id: "g3-t-3b", tipo: "explica", titulo: "Algoritmos del día a día", n: 3, instr: "Piensa en los pasos que sigues siempre.", params: { preguntas: [
          P("¿Qué es un algoritmo?", ["Un videojuego", "Una secuencia de pasos en orden para lograr algo", "Una aplicación", "Un error"], 1, "Los algoritmos ordenan pasos para llegar a un resultado.", ""),
          P("Si cambio el orden de los pasos de una receta...", ["sale igual", "puede salir mal el resultado", "no pasa nada", "se mejora"], 1, "El orden importa: computar como se debe depende de seguir la secuencia.", ""),
          P("¿Cuál de estos es un algoritmo que usas todos los días?", ["Atarse los zapatos", "Mirar el techo", "Respirar sin más", "Parpadear"], 0, "Atarse los zapatos tiene pasos fijos y en orden: es un algoritmo cotidiano.", ""),
        ] } },
      ],
      [EXP("Paso a paso", [
        P("Un algoritmo claro tiene pasos...", ["al azar", "en orden", "mezclados", "al revés"], 1, "La secuencia ordenada es la esencia del algoritmo.", ""),
        P("Para armar un rompecabezas, primero...", ["miro las piezas y armo el borde", "las escondo", "las rompo", "las mezclo"], 0, "Planear y ordenar los pasos facilita cualquier tarea.", ""),
        P("Si un paso falla, lo que hago es...", ["seguir igual", "revisar y corregir ese paso", "empezar de cero sin pensar", "echar la culpa a otro"], 1, "Detectar y corregir el paso equivocado es parte del pensamiento computacional.", ""),
      ]) ],
      null
    ),
    T(
      "Cuido mi información",
      "Reconoce datos personales y la importancia de protegerlos.",
      "Tecnología: seguridad digital e información personal.",
      [
        D("Datos personales", "Mi nombre completo, dirección, colegio y teléfono son datos personales.", "📇"),
        D("Nunca solo", "En internet no doy mis datos ni fotos sin permiso de un adulto.", "🙅"),
        D("Contraseña", "La contraseña es privada: no la comparto ni la dejo escrita para todos.", "🔑"),
      ],
      [
        { id: "g3-t-4a", tipo: "clasificar", titulo: "Dato o no", n: 1, instr: "Toca la categoría y después cada dato.", params: {
          categorias: [
            { id: "per", n: "DATO PERSONAL", icono: "🔒" },
            { id: "pub", n: "NO ES SECRETO", icono: "🌐" },
          ],
          items: [
            { t: "MI DIRECCIÓN", cat: "per" },
            { t: "MI COLOR FAVORITO", cat: "pub" },
            { t: "EL TELÉFONO DE MI CASA", cat: "per" },
            { t: "ME GUSTA EL FÚTBOL", cat: "pub" },
          ],
        } },
        { id: "g3-t-4b", tipo: "explica", titulo: "Protejo mis datos", n: 3, instr: "Responde sobre seguridad en internet.", params: { preguntas: [
          P("Un juego en línea me pide mi dirección. ¿Qué hago?", ["La escribo", "No la escribo y le aviso a un adulto", "Invento otra", "Pregunto a un amigo"], 1, "Los adultos pueden decidir qué información es segura compartir.", ""),
          P("¿Mi contraseña debo compartirla con mis amigos?", ["Sí, para todo", "No: es privada", "Solo con el mejor", "Solo en el colegio"], 1, "La contraseña es como la llave de tu casa: no se presta.", ""),
          P("¿Puedo publicar fotos mías sin permiso?", ["Sí, siempre", "No: pido permiso antes de publicar", "Solo si son bonitas", "Da igual"], 1, "Las fotos también son datos que deben protegerse con acompañamiento.", ""),
        ] } },
      ],
      [EXP("Información protegida", [
        P("Un dato personal es...", ["mi dirección", "mi comida favorita", "el color del aula", "mi juguete"], 0, "Los datos personales identifican tu vida privada y familiar.", ""),
          P("Si alguien online me pide datos, yo...", ["respondo todo", "no respondo y aviso a un adulto", "invento", "me enojo"], 1, "Avisar a un adulto es siempre la mejor acción.", ""),
        P("Mi contraseña...", ["la escribo en el pupitre", "es privada y no la comparto", "la cambio a diario", "la digo en voz alta"], 1, "Cuidar la contraseña protege tus cuentas y tu información.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Artística ---------------- */
  G3.artistica = [
    T(
      "Técnicas de dibujo y pintura",
      "Combina técnicas de dibujo y pintura para expresar ideas y emociones.",
      "Educación artística: combinar técnicas de dibujo, pintura y expresión.",
      [
        D("Técnicas", "Lápiz, témpera, acuarela y carboncillo tienen resultados distintos.", "🖌️"),
        D("Expresar emociones", "Los colores cálidos transmiten energía; los fríos, calma.", "🎭"),
        D("Composición", "Organizo el dibujo con primer plano, fondo y punto focal.", "🖼️"),
      ],
      [
        { id: "g3-a-1a", tipo: "clasificar", titulo: "Técnicas y expresión", n: 1, instr: "Toca la idea y la técnica o recurso.", params: {
          categorias: [{ id: "cal", n: "Transmite energía (cálidos)", icono: "🔥" }, { id: "fri", n: "Transmite calma (fríos)", icono: "❄️" }],
          items: [
            { t: "ROJO", cat: "cal" }, { t: "NARANJA", cat: "cal" }, { t: "AZUL", cat: "fri" },
            { t: "AMARILLO", cat: "cal" }, { t: "VERDE", cat: "fri" },
          ],
        } },
        { id: "g3-a-1b", tipo: "explica", titulo: "Arte y emociones", n: 3, instr: "Piensa en la expresión artística.", params: { preguntas: [
          P("La acuarela se caracteriza por...", ["Ser opaca y gruesa", "Ser transparente y diluida", "Ser solo negra", "No usarse con agua"], 1, "El agua diluye el pigmento y da transparencia.", ""),
          P("Los colores fríos suelen transmitir...", ["Agitación máxima", "Calma y tranquilidad", "Hambre", "Ruido"], 1, "Azul, verde y violeta se asocian a la calma.", ""),
          P("Elegir una técnica según lo que quiero expresar es...", ["Una decisión artística", "Azar", "Obligatorio", "Incorrecto"], 0, "Cada técnica aporta una expresión distinta.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Música, danza y teatro",
      "Combina recursos de música, danza y teatro para expresar ideas y emociones.",
      "Educación artística: música, danza y teatro.",
      [
        D("Música", "Ritmo, melodía y armonía construyen una canción.", "🎵"),
        D("Danza", "El cuerpo expresa historias y emociones con el movimiento.", "💃"),
        D("Teatro", "Representamos situaciones con voz, gestos y escenografía.", "🎭"),
      ],
      [
        { id: "g3-a-2a", tipo: "emparejar", titulo: "Artes", n: 1, instr: "Toca el elemento y a qué arte pertenece.", params: {
          parejas: [
            { a: "RITMO", b: "MÚSICA" }, { a: "COREOGRAFÍA", b: "DANZA" }, { a: "PERSONAJE", b: "TEATRO" },
            { a: "MELODÍA", b: "MÚSICA" }, { a: "ESCENA", b: "TEATRO" },
          ],
        } },
        { id: "g3-a-2b", tipo: "explica", titulo: "Expresión artística", n: 3, instr: "Piensa en cada arte y responde.", params: { preguntas: [
          P("La coreografía es...", ["Un tipo de pintura", "La secuencia de pasos de una danza", "Un instrumento", "Un texto"], 1, "La coreografía organiza el movimiento.", ""),
          P("En el teatro, el personaje...", ["Es el escenario", "Es quien la historia representa", "Es el público", "Es el título"], 1, "El actor da vida al personaje.", ""),
          P("Combinar música, danza y teatro se llama...", ["Arte total o performance", "Solo dibujo", "Nada", "Deporte"], 0, "Las artes escénicas integran varios lenguajes.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Ritmos de mi tierra",
      "Reconoce ritmos y danzas tradicionales de Colombia.",
      "Educación artística: música y danza colombiana.",
      [
        D("Cumbia", "La cumbia nació en la costa: tambora, gaita y movimiento de falda.", "🥁"),
        D("Bambuco", "El bambuco es alegre y saltarín, de la región andina; se baila en pareja.", "🎶"),
        D("Guabina", "La guabina y la carranga son música de guitarra de la tierra fría.", "🎸"),
      ],
      [
        { id: "g3-a-3a", tipo: "emparejar", titulo: "De dónde viene", n: 1, instr: "Toca el ritmo y después su región.", params: {
          parejas: [
            { a: "CUMBIA", b: "COSTA" },
            { a: "BAMBUCO", b: "REGIÓN ANDINA" },
            { a: "GUABINA", b: "TIERRA FRÍA" },
          ],
        } },
        { id: "g3-a-3b", tipo: "explica", titulo: "Música colombiana", n: 3, instr: "Responde sobre los ritmos de Colombia.", params: { preguntas: [
          P("¿En qué región nació la cumbia?", ["En la costa", "En la selva", "En la tierra fría", "En la ciudad"], 0, "La cumbia es un ritmo de la costa caribeña y pacífica.", ""),
          P("El bambuco se caracteriza por ser...", ["lento y triste", "alegre y saltarín", "silencioso", "solo instrumental"], 1, "El bambuco andino invita al movimiento y al salto.", ""),
          P("¿Por qué conocer los ritmos de Colombia es importante?", ["Para aprobar", "Porque son parte de nuestra identidad cultural", "Para olvidarlos", "Solo para cantar"], 1, "La música tradicional expresa la historia y la identidad de cada región.", ""),
        ] } },
      ],
      [EXP("Colombia canta", [
        P("La cumbia usa instrumentos como...", ["la tambora y la gaita", "el piano", "la guitarra eléctrica", "el saxofón"], 0, "Tambores y gaitas marcan el compás cumbiambero.", ""),
        P("El bambuco es típico de...", ["la costa", "la región andina", "la amazonía", "Europa"], 1, "Nació en los Andes colombianos y lleva el sello saltarín de la tierra alta.", ""),
        P("Cada región de Colombia tiene...", ["la misma música", "ritmos y danzas propios", "ninguna música", "solo ruido"], 1, "La diversidad musical refleja la diversidad cultural del país.", ""),
      ]) ],
      null
    ),
    T(
      "Compongo mi dibujo",
      "Organiza elementos en una composición con centro, equilibrio y armonía.",
      "Educación artística: composición plástica.",
      [
        D("Centro", "El centro del dibujo es donde quiero que se fije primero la mirada.", "🎯"),
        D("Equilibrio", "Equilibrio es repartir los elementos para que un lado no quede vacío.", "⚖️"),
        D("Armonía", "Armonía es que los colores y las formas se lleven bien entre sí.", "🎼"),
      ],
      [
        { id: "g3-a-4a", tipo: "ordenar", titulo: "Armo mi composición", n: 1, instr: "Ordena los pasos para componer un dibujo.", params: {
          consigna: "Ordena: 1) elijo mi tema, 2) pongo lo importante en el centro, 3) reparto lo demás en equilibrio, 4) coloro con armonía.",
          items: ["Elijo mi tema", "Pongo lo más importante en el centro", "Reparto lo demás en equilibrio", "Coloro con armonía"],
        } },
        { id: "g3-a-4b", tipo: "explica", titulo: "Centro, equilibrio y armonía", n: 3, instr: "Responde sobre la composición.", params: { preguntas: [
          P("¿Qué es el centro de una composición?", ["El borde", "El lugar donde la mirada se fija primero", "La firma", "El marco"], 1, "El centro organiza la atención del que mira el dibujo.", ""),
          P("Si un lado de mi dibujo queda muy vacío...", ["queda equilibrado", "pierde equilibrio", "está bien", "es más moderno"], 1, "Repartir los elementos equilibra la composición.", ""),
          P("La armonía se logra con...", ["colores que se llevan bien", "todos los colores juntos sin orden", "solo negro", "líneas torcidas"], 0, "Elegir colores y formas que combinen aporta armonía.", ""),
        ] } },
      ],
      [EXP("Composición con intención", [
        P("Para llamar la mirada al centro...", ["dejo vacío el centro", "ubico ahí lo más importante", "pinto todo de un color", "uso solo bordes"], 1, "El centro es el punto de partida de la mirada.", ""),
        P("Equilibrio significa...", ["llenar todo", "repartir bien los elementos", "dibujar solo de un lado", "usar un solo color"], 1, "Un buen equilibrio evita que la composición se caiga hacia un lado.", ""),
        P("Armonía es...", ["que todo choque", "que los colores y formas combinen", "usar muchos colores", "dibujar rápido"], 1, "La armonía nace de la combinación coherente de elementos.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Física ---------------- */
  G3.efisica = [
    T(
      "Coordinación y habilidades",
      "Desarrolla coordinación, equilibrio y habilidades deportivas básicas.",
      "Educación física: coordinación, equilibrio y habilidades deportivas iniciales.",
      [
        D("Coordinación", "Es hacer trabajar juntos a ojos, manos y pies.", "🤸"),
        D("Equilibrio", "Mantener el cuerpo estable en distintas posiciones.", "⚖️"),
        D("Habilidades", "Driblar, patear, lanzar y atrapar son habilidades básicas.", "⚽"),
      ],
      [
        { id: "g3-f-1a", tipo: "emparejar", titulo: "Habilidades", n: 1, instr: "Toca la habilidad y a qué deporte pertenece más.", params: {
          parejas: [
            { a: "DRIBLAR", b: "FÚTBOL" }, { a: "LANZAR Y ATRAPAR", b: "BÉISBOL" },
            { a: "REMOYAR", b: "NATACIÓN" }, { a: "SALTAR LA CUERDA", b: "APROVECHAMIENTO MOTRIZ" },
          ],
        } },
        { id: "g3-f-1b", tipo: "explica", titulo: "Capacidades físicas", n: 3, instr: "Piensa en tu cuerpo y responde.", params: { preguntas: [
          P("La resistencia es la capacidad de...", ["Correr muy rápido siempre", "Mantener la actividad más tiempo sin cansarse", "Saltar alto", "Estirarse"], 1, "La resistencia sostiene el esfuerzo a lo largo del tiempo.", ""),
          P("Para mejorar la coordinación...", ["Nada", "Practico ejercicios que combinan vista y movimiento", "Solo miro", "Duermo"], 1, "La práctica repetida afina la coordinación.", ""),
          P("Antes de hacer ejercicio debo...", ["Estirar y calentar", "Comer mucho", "Correr sin calentar", "No hacer nada"], 0, "Calentar previene lesiones.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Juego justo y cooperación",
      "Participa en juegos cooperativos respetando reglas y valorando el esfuerzo.",
      "Educación física: cooperación y respeto por las reglas.",
      [
        D("Juego limpio", "Ganar sin trampa y respetar al rival se llama juego limpio.", "🤝"),
        D("Reglas", "Conocer y aplicar las reglas hace el juego seguro.", "📏"),
        D("Todos participan", "En el equipo, todos tienen un rol importante.", "👥"),
      ],
      [
        { id: "g3-f-2a", tipo: "explica", titulo: "Juego limpio", n: 4, instr: "Elige la conducta correcta.", params: { preguntas: [
          P("Un rival se cae durante el juego...", ["Aprovecho para ganar", "Pido que lo ayuden y espero", "Me río", "Sigo jugando contra él"], 1, "El juego limpio se antepone a la victoria.", ""),
          P("Hacer trampa...", ["Ayuda a aprender", "Distorsiona el juego y el esfuerzo de todos", "Es estrategia", "No importa"], 1, "La trampa anula el mérito y la diversión.", ""),
          P("Si mi equipo pierde...", ["Culpo a otros", "Reconozco el esfuerzo y sigo practicando", "No juego más", "Golpeo"], 1, "Perder con respeto también es aprender.", ""),
          P("Todos en el equipo deben...", ["Tocar siempre", "Participar y apoyarse", "Mirar", "Descansar"], 1, "Cada miembro aporta al objetivo común.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Juegos predeportivos",
      "Practica recepción, pasarela y lanzamiento como base de los deportes.",
      "Educación física: habilidades predeportivas.",
      [
        D("Recepción", "Recibir el balón con las manos o los pies, sin que se me escape lejos.", "🤲"),
        D("Pasarela", "Pasar es dar el balón a un compañero con precisión y al pecho.", "⚽"),
        D("Lanzamiento", "Lanzar es botar o entregar el balón hacia otro lugar u objetivo.", "🤾"),
      ],
      [
        { id: "g3-f-3a", tipo: "ordenar", titulo: "Juego con el balón", n: 1, instr: "Ordena la secuencia del juego.", params: {
          consigna: "Ordena: 1) caliento, 2) recibo el balón, 3) lo paso a mi compañero, 4) lo lanzo al objetivo.",
          items: ["Caliento y me acomodo", "Recibo el balón", "Lo paso a mi compañero", "Lo lanzo al objetivo"],
        } },
        { id: "g3-f-3b", tipo: "explica", titulo: "Habilidades con balón", n: 3, instr: "Responde sobre recepción, pase y lanzamiento.", params: { preguntas: [
          P("¿Cómo recibo bien el balón?", ["Con las manos o los pies listos, amortiguando", "Dejándome llevar", "Con un solo dedo", "Gritando"], 0, "Amortiguar la recepción evita que el balón se me escape.", ""),
          P("¿A quién paso el balón?", ["A un compañero libre", "A nadie", "Al rival", "Al aire"], 0, "El pase va a quien puede continuar la jugada.", ""),
          P("Antes de lanzar, ¿qué miro?", ["El objetivo y el espacio libre", "El cielo", "Mis zapatos", "Nada"], 0, "La orientación del lanzamiento aumenta la precisión.", ""),
        ] } },
      ],
      [EXP("Preparado para el deporte", [
        P("La recepción consiste en...", ["botar el balón", "recibirlo controlando", "correr", "saltar"], 1, "Controlar el balón al recibir sostiene la jugada.", ""),
        P("Un buen pase es...", ["al pecho del compañero libre", "al rival", "muy fuerte siempre", "al aire"], 0, "Un pase al pecho y con ritmo facilita la continuación.", ""),
        P("Lanzar con precisión requiere...", ["mirar el objetivo", "cerrar los ojos", "girar sin rumbo", "usar solo los dedos"], 0, "La mirada al objetivo guía el lanzamiento.", ""),
      ]) ],
      null
    ),
    T(
      "Preparación y recuperación",
      "Comprende la importancia del calentamiento, el estiramiento y la hidratación.",
      "Educación física: prevención y cuidado del cuerpo.",
      [
        D("Calentamiento", "Antes de jugar intenso, caliento 5 a 10 minutos para no lastimarme.", "🔥"),
        D("Estiramiento", "Después de jugar estiro para que los músculos vuelvan a su lugar.", "🧘"),
        D("Agua", "Tomar agua antes, durante y después del ejercicio mantiene el cuerpo hidratado.", "💧"),
      ],
      [
        { id: "g3-f-4a", tipo: "clasificar", titulo: "Antes o después", n: 1, instr: "Toca la etapa y después cada acción.", params: {
          categorias: [
            { id: "ant", n: "ANTES DE JUGAR", icono: "🔥" },
            { id: "des", n: "DESPUÉS DE JUGAR", icono: "🧘" },
          ],
          items: [
            { t: "CAMINO RÁPIDO Y ACTIVO PIERNAS", cat: "ant" },
            { t: "ESTIRO LAS PIERNAS SUAVE", cat: "des" },
            { t: "ROTO BRAZOS Y CADERAS", cat: "ant" },
            { t: "RESPIRO Y ME RELAJO", cat: "des" },
          ],
        } },
        { id: "g3-f-4b", tipo: "explica", titulo: "Cuido mi cuerpo", n: 3, instr: "Responde sobre calentamiento e hidratación.", params: { preguntas: [
          P("¿Por qué caliento antes de jugar intenso?", ["Para gastar el tiempo", "Para preparar músculos y articulaciones y evitar lesiones", "Para cansarme", "Porque es obligatorio"], 1, "El calentamiento prepara al cuerpo y previene lesiones.", ""),
          P("¿Cuándo debo tomar agua?", ["Solo al final", "Antes, durante y después", "Solo si tengo sed", "Nunca"], 1, "La hidratación constante sostiene el rendimiento.", ""),
          P("¿Para qué sirve estirar después de jugar?", ["Para marearme", "Para que los músculos vuelvan a su lugar y se recuperen", "Para perder tiempo", "Para sudar más"], 1, "El estiramiento final acelera la recuperación muscular.", ""),
        ] } },
      ],
      [EXP("Cuerpo bien cuidado", [
        P("El calentamiento dura aproximadamente...", ["5 a 10 minutos", "1 hora", "1 segundo", "todo el día"], 0, "Un calentamiento corto y progresivo prepara el cuerpo.", ""),
        P("Sin calentar, el riesgo de...", ["mejorar", "lesionarme", "volar", "dormir mejor"], 1, "Los músculos fríos son más propensos a lastimarse.", ""),
        P("Estirar después de jugar...", ["no sirve", "mejora la recuperación", "lastima", "es solo para adultos"], 1, "La recuperación activa mantiene el cuerpo flexible.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Ética y Valores ---------------- */
  G3.etica = [
    T(
      "Responsabilidad y consecuencias",
      "Asume responsabilidades y reconoce las consecuencias de sus decisiones.",
      "Ética: asumir responsabilidades y reconocer consecuencias.",
      [
        D("Soy responsable", "Hacer la tarea, cuidar los materiales y cumplir lo prometido.", "📋"),
        D("Consecuencias", "Cada decisión tiene un efecto: positivo o negativo.", "💰"),
        D("Asumir", "Reconocer el error y repararlo es de personas responsables.", "🛠️"),
      ],
      [
        { id: "g3-e-1a", tipo: "explica", titulo: "Responsabilidad", n: 4, instr: "Piensa en las consecuencias y responde.", params: { preguntas: [
          P("Olvidé mi tarea. ¿Qué hago?", ["Se la oculto al maestro", "Pido la fecha y la entrego lo antes posible", "Digo que mi mamá la hizo", "No digo nada"], 1, "Asumir y reparar es la acción responsable.", ""),
          P("Las consecuencias de mis decisiones...", ["No existen", "Afectan a mí y a los demás", "Solo afectan a otros", "Solo son buenas"], 1, "Toda decisión produce efectos comprobables.", ""),
          P("Cuidar los útiles escolares es...", ["Tarea de la escuela", "Mi responsabilidad", "De mis padres siempre", "Innecesario"], 1, "El cuidado de los bienes es una responsabilidad personal.", ""),
          P("Si rompo algo sin querer...", ["Lo escondo", "Lo reconozco y ayudo a repararlo", "Culpo a otro", "Me río"], 1, "Reconocer el daño y repararlo es ser responsable.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Acuerdos en equipo",
      "Trabaja en equipo, propone y cumple acuerdos para resolver problemas.",
      "Ética: trabajar en equipo y proponer acuerdos.",
      [
        D("Acuerdo", "Es lo que decidimos juntos y que cada uno se compromete a cumplir.", "🤝"),
        D("Proponer", "Dar ideas propias con respeto ayuda a encontrar la mejor solución.", "💡"),
        D("Cumplir", "Un acuerdo sin cumplimiento no vale; la palabra compromete.", "✅"),
      ],
      [
        { id: "g3-e-2a", tipo: "explica", titulo: "Acuerdos", n: 4, instr: "Elige la mejor forma de trabajar en equipo.", params: { preguntas: [
          P("En un trabajo en equipo, ¿cómo se toma una decisión?", ["Grita el más fuerte", "Todos proponen y se acuerda por consenso", "Decide solo el líder", "Nadie decide"], 1, "El consenso busca una solución aceptable para todos.", ""),
          P("Un acuerdo se cumple porque...", ["Obligan", "Todos nos comprometemos libremente", "Da miedo", "No sirve"], 1, "El compromiso voluntario sostiene el acuerdo.", ""),
          P("Si no estoy de acuerdo con algo...", ["Lo rompo sin decir", "Expreso mi idea con respeto y escucho las demás", "Me salgo", "Golpeo la mesa"], 1, "Disentir con respeto enriquece el proceso.", ""),
          P("Mi palabra comprometida significa...", ["Puedo prometer y fallar sin más", "Debo esforzarme por cumplir", "Es solo decorativa", "Nada"], 1, "La confianza se construye cumpliendo lo dicho.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Hablamos y resolvemos",
      "Aplica pasos del diálogo para resolver conflictos con los compañeros.",
      "Ética: diálogo y resolución pacífica de conflictos.",
      [
        D("Primero escucho", "Antes de responder, escucho al otro por completo para entender su punto.", "👂"),
        D("Hablo con calma", "Decir lo que pienso sin gritar ni insultar hace posible el acuerdo.", "🗨️"),
        D("Buscamos solución", "No busco ganar yo solo: buscamos una solución donde ambos estemos bien.", "🤝"),
      ],
      [
        { id: "g3-e-3a", tipo: "ordenar", titulo: "Pasos del diálogo", n: 1, instr: "Ordena los pasos para resolver un conflicto.", params: {
          consigna: "Ordena: 1) paro y respiro, 2) escucho al otro, 3) digo cómo me siento y qué quiero, 4) pensamos un acuerdo.",
          items: ["Paro y respiro", "Escucho al otro", "Digo cómo me siento y qué quiero", "Pensamos un acuerdo juntos"],
        } },
        { id: "g3-e-3b", tipo: "explica", titulo: "Diálogo que resuelve", n: 3, instr: "Responde sobre el diálogo.", params: { preguntas: [
          P("¿Qué hago primero cuando hay un conflicto?", ["Grito", "Escucho al otro completo", "Me voy", "Empujo"], 1, "La escucha inicial permite entender el problema real.", ""),
          P("¿Qué significa buscar una solución donde ambos estemos bien?", ["Que gane yo solo", "Que gane el otro", "Un acuerdo mutuo", "Que nadie diga nada"], 2, "El diálogo busca acuerdos, no ganadores ni perdedores.", ""),
          P("Si me siento muy enojado, ¿qué hago?", ["Actúo de inmediato", "Respiro y me calmo antes de hablar", "Grito más", "Rompo algo"], 1, "La pausa previa evita palabras y acciones que empeoran el conflicto.", ""),
        ] } },
      ],
      [EXP("Conflictos con diálogo", [
        P("Escuchar al otro...", ["es perder el tiempo", "ayuda a entender el conflicto", "es debilidad", "no sirve"], 1, "La comprensión es el primer paso para resolver.", ""),
        P("Gritar en un conflicto...", ["ayuda", "empeora las cosas", "lo resuelve", "es valiente"], 1, "Los gritos elevan la tensión en vez de bajarla.", ""),
        P("Un buen acuerdo...", ["solo me favorece a mí", "beneficia a ambos", "no existe", "lo impone el más fuerte"], 1, "Los acuerdos justos perduran porque todos los aceptan.", ""),
      ]) ],
      null
    ),
    T(
      "Mi escuela, mis derechos",
      "Reconoce derechos y responsabilidades dentro de la escuela.",
      "Ética: derechos y deberes.",
      [
        D("Derecho a aprender", "Todos tenemos derecho a estudiar en un lugar seguro y a ser escuchados.", "📖"),
        D("Derecho a ser tratado bien", "Nadie me puede golpear, insultar ni burlarse de mí.", "🛡️"),
        D("Con responsabilidad", "Con mis derechos vienen responsabilidades: cuidar el aula y respetar.", "⚖️"),
      ],
      [
        { id: "g3-e-4a", tipo: "clasificar", titulo: "Derecho o responsabilidad", n: 1, instr: "Toca la categoría y después cada elemento.", params: {
          categorias: [
            { id: "der", n: "ES UN DERECHO", icono: "🛡️" },
            { id: "res", n: "ES UNA RESPONSABILIDAD", icono: "📚" },
          ],
          items: [
            { t: "SER ESCUCHADO", cat: "der" },
            { t: "CUIDAR EL SALÓN", cat: "res" },
            { t: "NO SUFRIR BURLAS", cat: "der" },
            { t: "ENTREGAR LAS TAREAS", cat: "res" },
          ],
        } },
        { id: "g3-e-4b", tipo: "explica", titulo: "Derechos y deberes", n: 2, instr: "Responde sobre derechos y responsabilidades.", params: { preguntas: [
          P("¿Qué hago si alguien me insulta en la escuela?", ["Lo insulto igual", "Pido ayuda a un adulto de confianza", "Me callo siempre", "Me vengo solo"], 1, "Pedir ayuda no es debilidad: es usar nuestro derecho a ser tratado bien.", ""),
          P("¿Mis derechos van sin responsabilidades?", ["Sí", "No: se acompañan", "Depende", "Solo para mayores"], 1, "Cuidar el espacio y respetar al otro completa el ejercicio de los derechos.", ""),
        ] } },
      ],
      [EXP("Escuela digna para todos", [
        P("Tengo derecho a...", ["ser escuchado", "gritar siempre", "no estudiar", "burlarme"], 0, "El derecho a aprender y ser escuchado sostiene la vida escolar.", ""),
        P("Si golpo a un compañero...", ["no pasa nada", "vulnero sus derechos", "es un juego", "gané"], 1, "Nadie tiene derecho a agredir; es una falta grave.", ""),
        P("Cuidar el salón es...", ["una responsabilidad compartida", "una obligación de la maestra", "opcional", "un castigo"], 0, "El cuidado del espacio común nos corresponde a todos.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Religiosa ---------------- */
  G3.religiosa = [
    T(
      "Manifestaciones culturales y religiosas",
      "Conoce manifestaciones religiosas y culturales de su contexto desde el respeto y el diálogo.",
      "Educación religiosa: conocer manifestaciones de su contexto con respeto y diálogo.",
      [
        D("Expresiones", "Cantos, fiestas, símbolos y relatos expresan la fe de un pueblo.", "🕊️"),
        D("Diálogo", "Dialogar es escuchar al otro sin intentar imponer nada.", "💬"),
        D("Compartir valores", "Todas las tradiciones enseñan a cuidar, ayudar y respetar.", "💛"),
      ],
      [
        { id: "g3-r-1a", tipo: "explica", titulo: "Diálogo interreligioso", n: 3, instr: "Piensa y responde con respeto.", params: { preguntas: [
          P("Ante una manifestación religiosa distinta a la mía...", ["La critico", "Observo con respeto y pregunto con cortesía", "Me burlo", "Me alejo sin saludar"], 1, "El diálogo requiere apertura y respeto mutuo.", ""),
          P("Un valor compartido por casi todas las tradiciones es...", ["La competencia desleal", "El cuidado del prójimo", "El egoísmo", "La indiferencia"], 1, "La solidaridad y el cuidado son transversales.", ""),
          P("El diálogo religioso busca...", ["Imponer una idea", "Comprender y convivir", "Ganar una discusión", "Nada"], 1, "Comprender al otro permite convivir en diversidad.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Fiestas y valores de mi región",
      "Reconoce cómo las celebraciones regionales expresan valores de la comunidad.",
      "Educación religiosa: celebraciones regionales y valores (según el currículo institucional).",
      [
        D("Fiestas de pueblo", "Las fiestas patronales, los carnavales y las ferias reúnen a la comunidad.", "🎪"),
        D("Detrás hay valores", "Detrás de cada fiesta hay valores: unión, gratitud, ayuda y alegría.", "💛"),
        D("Yo participo", "Puedo participar con mi familia, cuidando el espacio y respetando a todos.", "🙋"),
      ],
      [
        { id: "g3-r-2a", tipo: "explica", titulo: "Fiestas con sentido", n: 3, instr: "Responde sobre las celebraciones.", params: { preguntas: [
          P("¿Qué son las fiestas patronales?", ["Celebraciones de un pueblo en honor a su patrono o tradición", "Un examen", "Un mercado", "Un juego individual"], 0, "Reúnen a la comunidad en torno a una tradición con arraigo.", ""),
          P("¿Qué valores viven las fiestas?", ["La unión y la gratitud", "La envidia", "La competencia", "El individualismo"], 0, "Detrás de las celebraciones hay valores compartidos.", ""),
          P("¿Cómo participo yo?", ["Cuidando el espacio y respetando a todos", "Gritando y corriendo", "Escondiendo cosas", "Molestando"], 0, "Participar con respeto honra la tradición y cuida la convivencia.", ""),
        ] } },
        { id: "g3-r-2b", tipo: "clasificar", titulo: "Fiesta o valor", n: 1, instr: "Toca la categoría y después cada elemento.", params: {
          categorias: [
            { id: "fie", n: "ES UNA FIESTA", icono: "🎉" },
            { id: "val", n: "ES UN VALOR", icono: "💛" },
          ],
          items: [
            { t: "PROCESIÓN DEL PUEBLO", cat: "fie" },
            { t: "AYUDAR A LOS VECINOS", cat: "val" },
            { t: "CARNAVAL", cat: "fie" },
            { t: "GRATITUD", cat: "val" },
          ],
        } },
      ],
      [EXP("Celebrar con valores", [
        P("Una fiesta comunitaria...", ["no significa nada", "expresa valores compartidos", "es solo ruido", "está prohibida"], 1, "Las celebraciones reflejan la identidad y los valores de un pueblo.", ""),
        P("Participar con respeto...", ["enriquece la tradición", "lastima", "es opcional", "es aburrido"], 0, "El respeto hace que las tradiciones perduren con sentido.", ""),
        P("Las tradiciones de otras comunidades...", ["se burlan", "se respetan", "se ignoran", "se prohíben"], 1, "El respeto por la diversidad cultural fortalece la convivencia.", ""),
      ]) ],
      null
    ),
  ];

  /* =========================================================
     CUARTO DE PRIMARIA
     Mayor autonomía, análisis de información y resolución de
     problemas.
     ========================================================= */
  const G4 = {};

  /* ---------------- Lenguaje ---------------- */
  G4.lenguaje = [
    T(
      "Comprendo e infiero",
      "Comprende textos de distintos tipos e infiere información no escrita directamente.",
      "Comprender textos de distintos tipos; inferir información.",
      [
        D("Inferir", "Inferir es deducir algo que no está escrito, usando pistas del texto y lo que ya sé.", "🧩"),
        D("Entre líneas", "Muchas veces el autor da pistas sin decirlo de forma directa.", "🕵️"),
        D("Ejemplo", "«Se puso el abrigo y salió». Inferimos que hace frío.", "🧥"),
      ],
      [
        { id: "g4-l-1a", tipo: "explica", titulo: "Inferencias", n: 4, instr: "Lee y deduce lo que el texto no dice de forma directa.", params: { preguntas: [
          P("«María cerró el paraguas y guardó la ropa mojada.» ¿Qué inferimos?", ["Hacía sol", "Dejó de llover", "Hacía mucho frío", "Estaba en la playa"], 1, "Cerrar el paraguas y guardar la ropa mojada sugiere que la lluvia cesó.", "Busca las acciones que dan pistas."),
          P("Inferir significa...", ["Copiar el texto", "Deducir información usando pistas y lo que sé", "Leer muy rápido", "Traducir palabras"], 1, "La inferencia combina el texto con el conocimiento previo.", ""),
          P("«Se llevó la bolsa con libros y saludó a la bibliotecaria.» ¿A dónde va?", ["A la tienda", "A la biblioteca", "Al parque", "A casa"], 1, "Los libros y la bibliotecaria son pistas del lugar.", ""),
          P("Leer con atención las pistas me ayuda a...", ["Escribir más rápido", "Entender lo que no se dice de forma explícita", "Olvidar", "Traducir"], 1, "La comprensión profunda incluye leer entre líneas.", ""),
        ] } },
        { id: "g4-l-1b", tipo: "sentence-read", titulo: "Leo y deduzco", n: 3, instr: "Lee la oración tocando cada palabra y responde.", params: { pool: undefined } },
      ],
      null
    ),
    T(
      "Hechos y opiniones",
      "Distingue hechos verificables de opiniones personales y reconoce conectores.",
      "Distinguir hechos y opiniones; identificar conectores.",
      [
        D("Hecho", "Es algo verificable: «Bogotá es la capital de Colombia». Se puede comprobar.", "✅"),
        D("Opinión", "Es lo que alguien piensa o siente: «La pizza es la mejor comida».", "💭"),
        D("Conectores", "Pero, y, porque, además, luego: unen y ordenan las ideas.", "🔗"),
      ],
      [
        { id: "g4-l-2a", tipo: "clasificar", titulo: "Hecho u opinión", n: 1, instr: "Toca la oración y si es hecho u opinión.", params: {
          categorias: [{ id: "hecho", n: "Hecho (verificable)", icono: "✅" }, { id: "opin", n: "Opinión", icono: "💭" }],
          items: [
            { t: "EL AGUA HIERVE A 100 °C", cat: "hecho" }, { t: "LA CHOCOLATE ESTÁ RICO", cat: "opin" },
            { t: "COLOMBIA TIENE COSTA EN EL PACÍFICO", cat: "hecho" }, { t: "MI MASCOTA ES LA MEJOR", cat: "opin" },
            { t: "EL SOL ES UNA ESTRELLA", cat: "hecho" }, { t: "ME GUSTA MÁS EL VERANO", cat: "opin" },
          ],
        } },
        { id: "g4-l-2b", tipo: "explica", titulo: "Conectores", n: 3, instr: "Elige el conector que mejor une las ideas.", params: { preguntas: [
          P("«Quiero salir ___ está lloviendo.»", ["porque", "pero", "además", "luego"], 1, "«Pero» marca oposición entre las dos ideas.", ""),
          P("«Estudié mucho ___ aprobé el examen.»", ["pero", "porque", "sino", "aunque"], 1, "«Porque» indica causa: estudié → aprobé.", ""),
          P("Un conector sirve para...", ["Decorar el texto", "Unir y ordenar ideas con sentido", "Cambiar el significado siempre", "Alargar el párrafo"], 1, "Los conectores dan coherencia y orden al texto.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Escribo textos organizados",
      "Escribe textos con estructura clara, justificando interpretaciones con ejemplos.",
      "Escribir textos con estructura y justificar interpretaciones.",
      [
        D("Estructura", "Título, introducción, desarrollo y cierre hacen un texto claro.", "🏗️"),
        D("Justificar", "Justificar es dar razones o ejemplos de lo que afirmo.", "🧭"),
        D("Revisar", "Reviso ortografía, puntuación y claridad antes de entregar.", "🔍"),
      ],
      [
        { id: "g4-l-3a", tipo: "escribir", titulo: "Escribo con estructura", n: 1, instr: "Escribe un texto corto con introducción, desarrollo y cierre.", params: { consigna: "Escribe un texto sobre un tema que te guste. Empieza con una idea clara, da dos ejemplos y cierra con una reflexión.", min: 5, ejemplo: "Me gustan los animales. Mi perro es mi favorito porque me acompaña. Por eso cuido mucho a los animales." } },
        { id: "g4-l-3b", tipo: "explica", titulo: "Revisión", n: 3, instr: "Piensa en cómo revisas tu escritura.", params: { preguntas: [
          P("Antes de entregar un texto, debo...", ["Nada", "Revisar ortografía, puntuación y claridad", "Solo mirar el largo", "Copiarlo de nuevo"], 1, "La revisión del borrador mejora el texto.", ""),
          P("Justificar una idea consiste en...", ["Decir que sí", "Dar razones o ejemplos que la sostengan", "Gritar", "Escribir más grande"], 1, "Las razones dan solidez a la interpretación.", ""),
          P("¿Qué orden le da claridad a un texto?", ["Aleatorio", "Introducción, desarrollo y cierre", "Cierre primero", "Sin títulos"], 1, "La estructura clara facilita la lectura.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Escuchar y exponer con claridad",
      "Escucha, resume y presenta ideas propias con vocabulario adecuado.",
      "Escuchar y expresar ideas; participar en exposiciones.",
      [
        D("Escuchar activamente", "Escuchar activamente es atender, hacer preguntas y responder.", "👂"),
        D("Resumir", "Un buen resumen conserva solo lo esencial con mis palabras.", "📝"),
        D("Presentar", "Presento ideas con orden, voz clara y ejemplos.", "🎤"),
      ],
      [
        { id: "g4-l-4a", tipo: "ordenar", titulo: "Preparo un buen resumen", n: 1, instr: "Ordena los pasos para resumir un texto.", params: { consigna: "Ordena los pasos para hacer un buen resumen.", items: ["LEO EL TEXTO COMPLETO", "MARCO LAS IDEAS CLAVE", "ESCRIBO LO ESENCIAL CON MIS PALABRAS", "REVISO QUE SEA CORTO Y CLARO"] } },
        { id: "g4-l-4b", tipo: "explica", titulo: "Escuchar y resumir", n: 3, instr: "Piensa en cómo escuchas y resumes.", params: { preguntas: [
          P("Un resumen debe...", ["Copiar el texto entero", "Conservar solo las ideas principales con mis palabras", "Tener más palabras que el original", "Incluir opiniones ajenas"], 1, "Resumir es seleccionar lo esencial y reformularlo.", ""),
          P("Escuchar activamente significa...", ["Pensar en otra cosa", "Atender, preguntar y responder", "Solo mirar", "Interrumpir siempre"], 1, "La escucha activa mejora el diálogo y el aprendizaje.", ""),
          P("Al exponer, conviene...", ["Hablar muy rápido", "Usar ejemplos claros", "Leer sin mirar al público", "No decir el tema"], 1, "Los ejemplos hacen comprensible la exposición.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Matemáticas ---------------- */
  G4.mate = [
    T(
      "Multiplicación y división",
      "Opera con números naturales: multiplica y divide con seguridad y verifica el resultado.",
      "Operar con números naturales; fortalecer multiplicación y división.",
      [
        D("Multipliquar grande", "Por ejemplo 24 × 3 = 72: descompongo 20 × 3 + 4 × 3.", "✖️"),
        D("Dividir con resto", "A veces sobra: 17 ÷ 5 = 3 y sobran 2.", "➗"),
        D("Comprobar", "Multiplico cociente × divisor + resto = dividendo.", "✅"),
      ],
      [
        { id: "g4-m-1a", tipo: "explica", titulo: "Operar", n: 5, instr: "Resuelve y verifica.", params: { preguntas: [
          P("¿Cuánto es 24 × 3?", ["64", "72", "62", "82"], 1, "20×3 = 60 y 4×3 = 12; total 72.", "Descomponer ayuda a calcular."),
          P("¿Cuánto es 84 ÷ 7?", ["12", "14", "10", "11"], 0, "84 ÷ 7 = 12.", ""),
          P("¿Cuánto es 144 ÷ 12?", ["10", "12", "14", "11"], 1, "144 ÷ 12 = 12.", ""),
          P("17 dulces se reparten en bolsas de 5. ¿Cuántas bolsas y cuántos sobran?", ["3 bolsas, sobran 2", "4 bolsas, sobran 1", "5 bolsas, sobran 2", "3 bolsas, sobran 1"], 0, "5+5+5 = 15; sobran 2: 3 bolsas.", ""),
          P("¿Cuál es la comprobación correcta de 56 ÷ 8 = 7?", ["8 × 7 = 56", "8 + 7 = 56", "56 × 8 = 7", "7 + 8 = 56"], 0, "Cociente × divisor = dividendo.", ""),
        ] } },
        { id: "g4-m-1b", tipo: "addvisual", titulo: "Grupos grandes", n: 4, instr: "Junta los objetos, cuenta todos y toca el resultado.", params: { maxTotal: 30 } },
      ],
      null
    ),
    T(
      "Fracciones equivalentes y comparación",
      "Compara fracciones sencillas y reconoce equivalencias como 1/2 = 2/4.",
      "Comprender fracciones según la secuencia curricular.",
      [
        D("Equivalentes", "1/2 = 2/4 = 4/8: representan la misma parte del entero.", "🔀"),
        D("Comparar", "Si los denominadores son iguales, gana el mayor numerador.", "⚖️"),
        D("Mismo entero", "Al comparar fracciones, los enteros deben ser iguales.", "🍕"),
      ],
      [
        { id: "g4-m-2a", tipo: "explica", titulo: "Fracciones", n: 4, instr: "Compara y encuentra equivalencias.", params: { preguntas: [
          P("¿Cuál fracción es equivalente a 1/2?", ["2/4", "1/3", "3/4", "2/3"], 0, "2/4 se simplifica a 1/2: misma cantidad.", "Multiplica o divide numerador y denominador."),
          P("Entre 3/5 y 4/5, ¿cuál es mayor?", ["3/5", "4/5", "Son iguales", "No se puede saber"], 1, "Mismo denominador: gana el mayor numerador.", ""),
          P("¿Cuál es mayor: 1/3 o 1/4?", ["1/4", "1/3", "Son iguales", "No se puede saber"], 1, "Más partes = partes más pequeñas: 1/3 es mayor.", "Si cortas en menos trozos, cada uno es más grande."),
          P("¿Cuánto es 1/4 + 1/4?", ["1/2", "2/8", "1/4", "2/4 y es lo mismo que 1/2"], 3, "1/4 + 1/4 = 2/4, que equivale a 1/2.", ""),
        ] } },
        { id: "g4-m-2b", tipo: "shapes", titulo: "Fracciones de figuras", n: 3, instr: "Escucha el nombre y toca la figura.", params: { pool: ["circulo", "cuadrado", "triangulo", "rectangulo"] } },
      ],
      null
    ),
    T(
      "Números decimales",
      "Comprende y opera con números decimales en contextos cotidianos.",
      "Comprender números decimales según la secuencia curricular.",
      [
        D("Décimos y centésimos", "El 3,5 tiene 3 unidades y 5 décimos. El 0,25 tiene 25 centésimos.", "🔢"),
        D("Dinero", "En Colombia $1.500,50: la coma separa los decimales (50 centavos).", "💵"),
        D("Comparar", "Primero comparo unidades; si son iguales, los décimos.", "⚖️"),
      ],
      [
        { id: "g4-m-3a", tipo: "explica", titulo: "Decimales", n: 4, instr: "Opera con decimales.", params: { preguntas: [
          P("¿Cuánto es 2,5 + 1,3?", ["3,8", "3,2", "4,8", "2,8"], 0, "Sumo unidades y décimos: 2+1=3 y 5+3=8 décimos.", ""),
          P("¿Cuál es mayor?", ["4,7", "4,07", "4,9", "4,009"], 2, "4,9 tiene 9 décimos; los demás tienen menos.", "Compara los décimos."),
          P("¿Cuánto es 1,2 × 10?", ["12", "1,2", "0,12", "120"], 0, "Multiplicar por 10 desplaza la coma un lugar.", ""),
          P("La parte decimal del número 7,46 se llama...", ["Décimos y centésimos", "Unidades", "Centenas", "Miles"], 0, "4 décimos y 6 centésimos.", ""),
        ] } },
        { id: "g4-m-3b", tipo: "compare", titulo: "Comparar cantidades", n: 4, instr: "Compara y toca el mayor.", params: { rango: [10, 99] } },
      ],
      null
    ),
    T(
      "Área, perímetro, ángulos y polígonos",
      "Calcula área y perímetro de figuras y clasifica ángulos y polígonos.",
      "Calcular perímetros y áreas sencillas; reconocer ángulos y polígonos.",
      [
        D("Área", "Es el espacio de adentro de una figura; se mide en cm² o m².", "🟩"),
        D("Ángulos", "Agudo (< 90°), recto (= 90°) y obtuso (> 90°).", "📐"),
        D("Polígonos", "Triángulo (3 lados), cuadrilátero (4), pentágono (5), hexágono (6).", "🔷"),
      ],
      [
        { id: "g4-m-4a", tipo: "explica", titulo: "Área y ángulos", n: 5, instr: "Calcula y clasifica.", params: { preguntas: [
          P("Un rectángulo de 5 cm de base y 3 de altura tiene área...", ["15 cm²", "8 cm²", "16 cm²", "5 cm²"], 0, "Área = base × altura = 5 × 3 = 15 cm².", ""),
          P("Su perímetro es...", ["15 cm", "16 cm", "8 cm", "30 cm"], 1, "5+3+5+3 = 16 cm.", ""),
          P("Un ángulo de 45° es...", ["Recto", "Agudo", "Obtuso", "Llano"], 1, "Menor de 90° es agudo.", ""),
          P("¿Cuántos lados tiene un hexágono?", ["5", "6", "8", "4"], 1, "Hexágono = 6 lados.", ""),
          P("La unidad del área es...", ["cm", "cm²", "grados", "litros"], 1, "El área se mide en unidades cuadradas.", ""),
        ] } },
        { id: "g4-m-4b", tipo: "shapes", titulo: "Polígonos", n: 4, instr: "Escucha el nombre y toca la figura.", params: { pool: ["triangulo", "cuadrado", "rectangulo", "circulo"] } },
      ],
      null
    ),
    T(
      "Múltiplos, divisores y datos",
      "Identifica múltiplos y divisores y analiza gráficos y tablas.",
      "Explorar múltiplos y divisores; medir y analizar gráficos.",
      [
        D("Múltiplos", "Son los resultados de multiplicar: 4, 8, 12, 16... son múltiplos de 4.", "🔁"),
        D("Divisores", "Divisores de 12: 1, 2, 3, 4, 6 y 12 (dan resto cero).", "🧮"),
        D("Datos", "Los gráficos permiten comparar y tomar decisiones.", "📊"),
      ],
      [
        { id: "g4-m-5a", tipo: "explica", titulo: "Múltiplos y datos", n: 4, instr: "Piensa y responde.", params: { preguntas: [
          P("¿Cuál NO es múltiplo de 3?", ["9", "12", "14", "15"], 2, "14 entre 3 sobra 2; no es múltiplo.", ""),
          P("Los divisores de 10 son...", ["1, 2, 5, 10", "1, 3, 10", "2, 4", "Solo 10"], 0, "10 se divide exacto entre 1, 2, 5 y 10.", ""),
          P("Un divisor deja...", ["Resto cero", "Resto uno", "Siempre 2", "Decimal"], 0, "Si el resto es cero, es divisor exacto.", ""),
          P("Para decidir qué deporte apoyar en la escuela, lo mejor es...", ["Elegir el mío", "Mirar la encuesta y comparar los datos", "Preguntar a uno solo", "Adivinar"], 1, "Los datos permiten decisiones informadas.", ""),
        ] } },
        { id: "g4-m-5b", tipo: "numberline", titulo: "Recta numérica", n: 4, instr: "Toca el número en la recta.", params: { max: 100 } },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Naturales ---------------- */
  G4.cnaturales = [
    T(
      "Órganos y sistemas del cuerpo",
      "Relaciona órganos con sistemas y describe funciones básicas del cuerpo humano.",
      "Comprender relaciones entre órganos y sistemas.",
      [
        D("Sistemas", "Digestivo, respiratorio, circulatorio y nervioso trabajan juntos.", "❤️"),
        D("Órganos", "Cada órgano tiene una función: el corazón bombea sangre.", "🌬️"),
        D("Cuidarlos", "Comer bien, moverse y dormir ayudan a que funcionen.", "🍎"),
      ],
      [
        { id: "g4-c-1a", tipo: "emparejar", titulo: "Órgano y sistema", n: 1, instr: "Toca el órgano y el sistema al que pertenece.", params: {
          parejas: [
            { a: "CORAZÓN", b: "CIRCULATORIO" }, { a: "PULMONES", b: "RESPIRATORIO" },
            { a: "ESTÓMAGO", b: "DIGESTIVO" }, { a: "CEREBRO", b: "NERVIOSO" },
            { a: "INTESTINOS", b: "DIGESTIVO" }, { a: "RIÑONES", b: "EXCRETOR" },
          ],
        } },
        { id: "g4-c-1b", tipo: "explica", titulo: "Funciones del cuerpo", n: 4, instr: "Relaciona órganos y funciones.", params: { preguntas: [
          P("¿Qué función cumple el corazón?", ["Digerir", "Bombear sangre por el cuerpo", "Respirar", "Pensar"], 1, "El corazón impulsa la sangre a todo el organismo.", ""),
          P("Los pulmones sirven para...", ["Comer", "Intercambiar oxígeno y dióxido de carbono", "Ver", "Oler"], 1, "En los alvéolos entra oxígeno y sale CO₂.", ""),
          P("El sistema digestivo...", ["Respira", "Descompone los alimentos para absorber", "Nada", "Mueve el cuerpo"], 1, "Descompone los alimentos y absorbe nutrientes.", ""),
          P("¿Qué hábito cuida mejor todos los sistemas?", ["Dormir poco", "Alimentación variada, ejercicio y descanso", "No moverse", "Saltar comidas"], 1, "Los hábitos saludables sostienen el funcionamiento integral.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Ecosistemas y adaptaciones",
      "Estudia ecosistemas, adaptaciones de los seres vivos y el equilibrio ambiental.",
      "Ecosistemas y adaptaciones; relación sociedad-ambiente.",
      [
        D("Adaptación", "Es una característica que ayuda a sobrevivir en su ambiente.", "🦎"),
        D("Equilibrio", "Si falta una especie, toda la red se afecta.", "⚖️"),
        D("Biomas", "Desierto, selva, páramo y océano tienen condiciones propias.", "🗺️"),
      ],
      [
        { id: "g4-c-2a", tipo: "clasificar", titulo: "Adaptaciones", n: 1, instr: "Toca el animal y su adaptación.", params: {
          categorias: [{ id: "cam", n: "Camello", icono: "🐫" }, { id: "oso", n: "Oso polar", icono: "🐻" }, { id: "pez", n: "Pez", icono: "🐟" }],
          items: [
            { t: "JIBA PARA RESERVAR AGUA", cat: "cam" }, { t: "PELAJE DENSO Y GRASA", cat: "oso" },
            { t: "BRANQUIAS PARA RESPIRAR", cat: "pez" }, { t: "PATAS PARA CAMINAR EN LA ARENA", cat: "cam" },
            { t: "COLOR BLANCO PARA CAMUFLARSE", cat: "oso" }, { t: "VEJIGA NATATORIA", cat: "pez" },
          ],
        } },
        { id: "g4-c-2b", tipo: "explica", titulo: "Equilibrio ecológico", n: 3, instr: "Piensa en las relaciones del ecosistema.", params: { preguntas: [
          P("Si desaparecen los polinizadores...", ["No pasa nada", "Disminuyen frutos y se afectan otras especies", "Aumentan los árboles", "Todo mejora"], 1, "La polinización sostiene la reproducción de muchas plantas.", ""),
          P("Una adaptación...", ["Es aprendida al nacer", "Ayuda al organismo a sobrevivir en su ambiente", "Es solo color", "Solo sirve para decorar"], 1, "Las adaptaciones surgen por selección natural a lo largo de generaciones.", ""),
          P("El páramo andino se caracteriza por...", ["Calor intenso", "Frío, viento y neblina", "Humedad de selva", "Aridad extrema"], 1, "La altura produce condiciones frías y húmedas.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Fuerzas y máquinas simples",
      "Investiga propiedades de materiales, fuerzas y máquinas simples.",
      "Fuerzas y máquinas simples; explicaciones a partir de observaciones.",
      [
        D("Fuerzas", "Empujar, jalar, fricción y gravedad son fuerzas que cambian el movimiento.", "💪"),
        D("Máquinas simples", "Palanca, plano inclinado, polea, rueda y eje, cuña y tornillo.", "⚙️"),
        D("Facilitar", "Las máquinas simples no hacen menos trabajo: lo hacen más fácil.", "🛠️"),
      ],
      [
        { id: "g4-c-3a", tipo: "emparejar", titulo: "Máquinas simples", n: 1, instr: "Toca el ejemplo y su máquina simple.", params: {
          parejas: [
            { a: "BASCULA", b: "PALANCA" }, { a: "RAMPAS", b: "PLANO INCLINADO" },
            { a: "CUERDA Y POLEA", b: "POLEA" }, { a: "RUEDA DEL CARRO", b: "RUEDA Y EJE" },
            { a: "TIJERAS", b: "CUÑAS" },
          ],
        } },
        { id: "g4-c-3b", tipo: "explica", titulo: "Fuerzas", n: 3, instr: "Analiza las fuerzas en juego.", params: { preguntas: [
          P("Una rampa es un...", ["Pulmón", "Plano inclinado", "Circuito", "Imán"], 1, "El plano inclinado facilita subir cargas.", ""),
          P("La fricción...", ["Siempre ayuda", "Se opone al movimiento", "No existe", "Solo actúa en el agua"], 1, "La fuerza de rozamiento se opone al desplazamiento.", ""),
          P("Al subir la palanca del juguete, ¿qué obtienes?", ["Menos fuerza pero más distancia", "Más fuerza y más distancia", "Nada", "Peso"], 0, "La palanca intercambia fuerza por distancia.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Energía y sus formas",
      "Reconoce formas de energía, sus transformaciones y formas de ahorrarla.",
      "Analizar energía y sus transformaciones.",
      [
        D("Formas", "Solar, eléctrica, química, térmica, cinética y sonora.", "⚡"),
        D("Transformación", "En una linterna: eléctrica → luz y calor.", "🔄"),
        D("Ahorrar", "Apagar luces y usar eficientemente la energía cuida el planeta y el bolsillo.", "💡"),
      ],
      [
        { id: "g4-c-4a", tipo: "clasificar", titulo: "Formas de energía", n: 1, instr: "Toca el ejemplo y su forma de energía.", params: {
          categorias: [{ id: "sol", n: "Solar", icono: "☀️" }, { id: "ele", n: "Eléctrica", icono: "⚡" }, { id: "qui", n: "Química", icono: "🔋" }, { id: "cin", n: "Cinética", icono: "🏃" }],
          items: [
            { t: "PANEL SOLAR", cat: "sol" }, { t: "LÁMPARA", cat: "ele" },
            { t: "COMIDA", cat: "qui" }, { t: "BICICLETA EN MOVIMIENTO", cat: "cin" },
            { t: "BATERÍA", cat: "qui" }, { t: "EL SOL", cat: "sol" }, { t: "PELOTA QUE RODA", cat: "cin" },
          ],
        } },
        { id: "g4-c-4b", tipo: "explica", titulo: "Energía", n: 3, instr: "Piensa en las transformaciones.", params: { preguntas: [
          P("En una pila, la energía almacenada es...", ["Térmica", "Química", "Solar", "Nuclear"], 1, "Las pilas guardan energía química.", ""),
          P("Al encender una bombilla, la energía eléctrica se transforma en...", ["Solo luz", "Luz y calor", "Sonido", "Nada"], 1, "Se transforma en luz y se disipa calor.", ""),
          P("¿Cuál acción ahorra energía?", ["Dejar luces encendidas", "Apagar los aparatos que no uso", "Cargar toda la noche", "Usar muchas lámparas"], 1, "El consumo consciente reduce el desperdicio.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Sociales ---------------- */
  G4.csociales = [
    T(
      "Regiones de Colombia",
      "Interpreta el mapa de Colombia y reconoce las regiones y sus características.",
      "Interpretar mapas y regiones de Colombia.",
      [
        D("Cinco regiones", "Caribe, Pacífica, Andina, Orinoquía y Amazonía.", "🌺"),
        D("Relieve y clima", "Costa, cordillera, llano y selva generan climas distintos.", "🌤️"),
        D("Economía regional", "Cada región produce según su geografía: banano, café, petróleo, ganadería.", "🌾"),
      ],
      [
        { id: "g4-s-1a", tipo: "clasificar", titulo: "Regiones y productos", n: 1, instr: "Toca el producto y su región.", params: {
          categorias: [{ id: "car", n: "Caribe", icono: "🏖️" }, { id: "and", n: "Andina", icono: "⛰️" }, { id: "amo", n: "Amazonía", icono: "🌴" }, { id: "ori", n: "Orinoquía", icono: "🐄" }],
          items: [
            { t: "BANANO", cat: "car" }, { t: "CAFÉ", cat: "and" }, { t: "CAUCHO", cat: "amo" }, { t: "GANADERÍA", cat: "ori" },
            { t: "ARROZ", cat: "car" }, { t: "FLORES", cat: "and" }, { t: "MADERA", cat: "amo" }, { t: "PETRÓLEO", cat: "ori" },
          ],
        } },
        { id: "g4-s-1b", tipo: "explica", titulo: "Regiones", n: 3, instr: "Interpreta las características regionales.", params: { preguntas: [
          P("La Orinoquía se caracteriza por...", ["Selva densa", "Llanos con ganadería y petróleo", "Playas", "Cordillera nevada"], 1, "Los llanos orientales son zona de pastoreo y petróleo.", ""),
          P("La Sierra Nevada de Santa Marta está en la región...", ["Andina", "Caribe", "Amazonía", "Pacífica"], 1, "Es un macizo cercano a la costa caribeña.", ""),
          P("¿Por qué el café se cultiva sobre todo en la Andes?", ["Porque no hay en otras regiones", "Porque el clima de altura le conviene", "Porque es una ley", "Porque crece en agua"], 1, "La altitud y temperatura del altiplano son ideales.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Procesos históricos de Colombia",
      "Estudia momentos clave de la historia de Colombia y aportes de personajes.",
      "Estudiar procesos históricos y culturales.",
      [
        D("Línea de tiempo", "Ordeno eventos históricos: prehistoria, colonia, república e independencia.", "📜"),
        D("Independencia", "1810-1819: líderes como Nariño, Boyacá y Bolívar marcaron el camino.", "🗽"),
        D("Personajes", "Cada época tuvo personas que aportaron al país.", "👥"),
      ],
      [
        { id: "g4-s-2a", tipo: "ordenar", titulo: "Línea de tiempo", n: 1, instr: "Ordena los acontecimientos históricos.", params: { consigna: "Ordena los acontecimientos de la historia de Colombia.", items: ["PREHISTORIA Y PRIMEROS POBLADORES", "PERÍODO COLONIAL", "INDEPENDENCIA (1810-1819)", "REPÚBLICA Y CONSOLIDACIÓN NACIONAL"] } },
        { id: "g4-s-2b", tipo: "explica", titulo: "Historia", n: 3, instr: "Relaciona personajes y hechos.", params: { preguntas: [
          P("La independencia de Colombia se logró a inicios del siglo...", ["XIX (1800s)", "XVIII (1700s)", "XX (1900s)", "XXI"], 0, "Entre 1810 y 1819 se consolidó la emancipación.", ""),
          P("El Grito de Independencia ocurrió en...", ["Cartagena", "Bogotá", "Santa Marta", "Pasto"], 1, "El 20 de julio de 1810 en Bogotá.", ""),
          P("Estudiar historia sirve para...", ["Entender el presente y decidir mejor", "Solo aprobar", "Nada", "Repetir errores"], 0, "La historia explica el presente y orienta el futuro.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Actividades económicas y ambiente",
      "Reconoce actividades económicas y su relación con el ambiente y la sociedad.",
      "Comprender actividades económicas; relación sociedad y ambiente.",
      [
        D("Economía", "Producir, intercambiar y consumir bienes y servicios.", "💱"),
        D("Impacto", "Cada actividad económica deja huella en el ambiente.", "🏭"),
        D("Desarrollo sostenible", "Crecer sin dañar el ambiente para las próximas generaciones.", "♻️"),
      ],
      [
        { id: "g4-s-3a", tipo: "clasificar", titulo: "Actividades económicas", n: 1, instr: "Toca la actividad y su sector.", params: {
          categorias: [{ id: "pri", n: "Primario (naturaleza)", icono: "🌾" }, { id: "seg", n: "Secundario (industria)", icono: "🏭" }, { id: "ter", n: "Terciario (servicios)", icono: "🏪" }],
          items: [
            { t: "AGRICULTURA", cat: "pri" }, { t: "PESCA", cat: "pri" }, { t: "FÁBRICA DE TEJIDOS", cat: "seg" },
            { t: "ELABORAR ALIMENTOS", cat: "seg" }, { t: "ENSEÑAR", cat: "ter" }, { t: "ATENDER EN UNA TIENDA", cat: "ter" },
          ],
        } },
        { id: "g4-s-3b", tipo: "explica", titulo: "Economía y ambiente", n: 3, instr: "Analiza la relación entre economía y ambiente.", params: { preguntas: [
          P("El desarrollo sostenible busca...", ["Crecer sin dañar el ambiente", "Crecer rápido a costa del ambiente", "No producir", "Consumir más"], 0, "Equilibra necesidades actuales y futuras.", ""),
          P("Una fábrica que contamina el río afecta...", ["Solo a la fábrica", "A la comunidad y los ecosistemas", "A nadie", "Solo a los animales"], 1, "La contaminación impacta la salud y la biodiversidad.", ""),
          P("El sector terciario se caracteriza por...", ["Vender recursos naturales", "Producir en fábricas", "Ofrecer servicios", "No existir"], 2, "Los servicios atienden necesidades de personas.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Derechos, deberes e instituciones",
      "Conoce derechos, deberes y la organización del Estado en Colombia.",
      "Conocer derechos, deberes e instituciones.",
      [
        D("Derechos", "Todo niño tiene derecho a la educación, la salud y la protección.", "⚖️"),
        D("Deberes", "Con derechos vienen deberes: respetar, cumplir y participar.", "📜"),
        D("El Estado", "Se organiza en ramas: legislativa, ejecutiva y judicial.", "🏛️"),
      ],
      [
        { id: "g4-s-4a", tipo: "clasificar", titulo: "Derechos y deberes", n: 1, instr: "Toca el enunciado y si es derecho o deber.", params: {
          categorias: [{ id: "der", n: "Derecho", icono: "✅" }, { id: "deb", n: "Deber", icono: "📌" }],
          items: [
            { t: "IR A LA ESCUELA", cat: "der" }, { t: "RESPETAR A LOS MAYORES", cat: "deb" },
            { t: "SER PROTEGIDO", cat: "der" }, { t: "CUIDAR EL AMBIENTE", cat: "deb" },
            { t: "SER ESCUCHADO", cat: "der" }, { t: "CUMPLIR LAS NORMAS", cat: "deb" },
          ],
        } },
        { id: "g4-s-4b", tipo: "explica", titulo: "Estado y convivencia", n: 4, instr: "Piensa en la organización del Estado y la convivencia.", params: { preguntas: [
          P("¿Qué rama del Estado hace las leyes?", ["Ejecutiva", "Legislativa", "Judicial", "Municipal"], 1, "El Congreso legisla.", ""),
          P("¿Qué rama administra el gobierno?", ["Ejecutiva", "Legislativa", "Judicial", "Ninguna"], 0, "El gobierno ejecuta las políticas públicas.", ""),
          P("Si un derecho no se respeta...", ["Nada se puede hacer", "Se puede pedir ayuda a las autoridades", "Hay que pelear", "Se pierde todo"], 1, "Las instituciones existen para garantizar los derechos.", ""),
          P("Con mis derechos también tengo...", ["Beneficios", "Deberes", "Ventajas", "Nada"], 1, "Derechos y deberes se complementan en la convivencia.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Inglés ---------------- */
  G4.ingles = [
    T(
      "Describing places",
      "Describe lugares con adjetivos y preposiciones básicas en inglés.",
      "Inglés: describir personas y lugares.",
      [
        D("Prepositions", "In (en), on (sobre), next to (al lado de), behind (detrás).", "📍"),
        D("Places", "School (escuela), park (parque), library (biblioteca), store (tienda).", "🏫"),
        D("Describing", "The park is big and green. Mi parque es grande y verde.", "💬"),
      ],
      [
        { id: "g4-i-1a", tipo: "emparejar", titulo: "Places", n: 1, instr: "Toca el lugar y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "PARK", b: "PARQUE", audio: "park" }, { a: "LIBRARY", b: "BIBLIOTECA", audio: "library" },
            { a: "STORE", b: "TIENDA", audio: "store" }, { a: "HOSPITAL", b: "HOSPITAL", audio: "hospital" },
            { a: "NEXT TO", b: "AL LADO DE", audio: "next to" }, { a: "BEHIND", b: "DETRÁS DE", audio: "behind" },
          ],
        } },
        { id: "g4-i-1b", tipo: "explica", titulo: "Prepositions", n: 3, instr: "Completa con la preposición correcta.", params: { preguntas: [
          P("The book is ___ the table (sobre la mesa)", ["on", "in", "under", "next"], 0, "«On» indica apoyo sobre una superficie.", "", "en"),
          P("«Behind the house» significa...", ["Al frente de la casa", "Detrás de la casa", "Dentro de la casa", "Cerca de la casa"], 1, "Behind = detrás.", "", "en"),
          P("Mi biblioteca es grande y tranquila. En inglés:", ["My library is big and quiet", "My library is small and loud", "The library is no", "I am library"], 0, "Sujeto + is + adjetivos.", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Routines and preferences",
      "Habla de rutinas en presente simple y expresa preferencias con razones.",
      "Inglés: rutinas y preferencias.",
      [
        D("Present simple", "I go, he goes (agrega -s en tercera persona).", "🔄"),
        D("Frequency", "Always, usually, sometimes, never (siempre, a veces, nunca).", "⏰"),
        D("Because", "«I like math because it is fun»: dar razones con because.", "💬"),
      ],
      [
        { id: "g4-i-2a", tipo: "emparejar", titulo: "Frequency", n: 1, instr: "Toca la palabra de frecuencia y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "ALWAYS", b: "SIEMPRE", audio: "always" }, { a: "USUALLY", b: "NORMALMENTE", audio: "usually" },
            { a: "SOMETIMES", b: "A VECES", audio: "sometimes" }, { a: "NEVER", b: "NUNCA", audio: "never" },
            { a: "BECAUSE", b: "PORQUE", audio: "because" },
          ],
        } },
        { id: "g4-i-2b", tipo: "explica", titulo: "Present simple", n: 4, instr: "Elige la forma correcta.", params: { preguntas: [
          P("He ___ to school every day", ["go", "goes", "going", "gone"], 1, "Con he/she/it agregamos -s: goes.", "", "en"),
          P("«I never eat junk food» significa...", ["Siempre como chatarra", "Nunca como comida chatarra", "A veces como", "Como mucho"], 1, "Never = nunca.", "", "en"),
          P("¿Cómo doy una razón?", ["with", "because", "but", "or"], 1, "«Because» introduce la causa.", "", "en"),
          P("They ___ football on Sundays", ["plays", "play", "playing", "is play"], 1, "Con they/usamos la forma base sin -s.", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Reading short texts",
      "Lee y comprende textos breves en inglés y responde preguntas.",
      "Inglés: comprender textos breves y formular preguntas.",
      [
        D("Short text", "Un texto corto tiene palabras conocidas; busco el contexto.", "📖"),
        D("Guessing meaning", "Si no sé una palabra, la deduzco por el texto.", "🧩"),
        D("Questions", "Pregunto con «Do you...?», «What...?» o «Where...?».", "❓"),
      ],
      [
        { id: "g4-i-3a", tipo: "explica", titulo: "Comprehension", n: 4, instr: "Lee y comprende el texto corto.", params: { preguntas: [
          P("«Tom has a dog. Its name is Max. Tom walks Max every morning.» ¿Cuándo pasea Tom a Max?", ["At night", "Every morning", "On Sundays", "Never"], 1, "«Every morning» indica la rutina.", "", "en"),
          P("En ese texto, «its» se refiere a...", ["Tom", "The dog", "The morning", "A cat"], 1, "«Its» es posesivo del animal (Max).", "", "en"),
          P("Si no entiendo una palabra, puedo...", ["Detenerme siempre", "Deducirla por el contexto", "Saltar el texto entero", "Adivinar sin pensar"], 1, "El contexto da pistas del significado.", "", "en"),
          P("«Where do you live?» pregunta por...", ["La hora", "El lugar", "El nombre", "La comida"], 1, "«Where» pregunta lugar.", "", "en"),
        ] } },
        { id: "g4-i-3b", tipo: "emparejar", titulo: "Question words", n: 1, instr: "Toca la pregunta y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "WHAT", b: "QUÉ", audio: "what" }, { a: "WHERE", b: "DÓNDE", audio: "where" },
            { a: "WHEN", b: "CUÁNDO", audio: "when" }, { a: "WHO", b: "QUIÉN", audio: "who" },
            { a: "WHY", b: "POR QUÉ", audio: "why" },
          ],
        } },
      ],
      null
    ),
  ];

  /* ---------------- Tecnología ---------------- */
  G4.tecnologia = [
    T(
      "Presentaciones y datos",
      "Produce documentos y presentaciones y organiza datos de proyectos digitales.",
      "Tecnología: producir documentos y presentaciones; organizar datos.",
      [
        D("Presentación", "Diapositivas con título, imágenes y datos claros.", "🖼️"),
        D("Organizar datos", "Tablas y gráficos hacen legible la información.", "📊"),
        D("Diseñar", "Menos texto y más claridad comunican mejor.", "✨"),
      ],
      [
        { id: "g4-t-1a", tipo: "ordenar", titulo: "Creo una presentación", n: 1, instr: "Ordena los pasos para presentar un tema.", params: { consigna: "Ordena los pasos para crear una presentación clara.", items: ["ELIJO EL TEMA Y EL OBJETIVO", "REUNO DATOS E IMÁGENES", "DISEÑO LAS DIAPOSITIVAS", "ENSAYO Y PRESENTO"] } },
        { id: "g4-t-1b", tipo: "explica", titulo: "Presentaciones", n: 3, instr: "Piensa en cómo comunicas datos.", params: { preguntas: [
          P("Una buena diapositiva...", ["Tiene mucho texto", "Resume con títulos, datos e imágenes", "Solo tiene colores", "No tiene título"], 1, "La claridad visual favorece la comprensión.", ""),
          P("¿Cómo organizo datos comparativos?", ["Con una tabla o gráfico", "En un párrafo largo", "Sin orden", "Con canciones"], 0, "Las tablas permiten comparar valores rápidamente.", ""),
          P("Antes de presentar, debo...", ["Ensayar", "No preparar nada", "Ocultar el tema", "Hablar más fuerte"], 0, "El ensayo mejora la claridad y la confianza.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Algoritmos y proyectos digitales",
      "Desarrolla proyectos digitales creando algoritmos sencillos y evaluando tecnologías.",
      "Tecnología: desarrollar proyectos digitales; crear algoritmos sencillos.",
      [
        D("Proyecto", "Un proyecto une un objetivo, recursos, pasos y un resultado.", "🚀"),
        D("Algoritmo", "Secuencia lógica de pasos que resuelve un problema.", "🧾"),
        D("Beneficios y riesgos", "La tecnología aporta mucho, pero también exige cuidado.", "⚖️"),
      ],
      [
        { id: "g4-t-2a", tipo: "ordenar", titulo: "Mi proyecto digital", n: 1, instr: "Ordena las fases del proyecto.", params: { consigna: "Ordena las fases de un proyecto digital.", items: ["DEFINO QUÉ PROBLEMA RESUELVO", "PLANEO LOS PASOS Y LOS RECURSOS", "CREO Y PRUEBO MI SOLUCIÓN", "EVALÚO Y MEJORO"] } },
        { id: "g4-t-2b", tipo: "explica", titulo: "Tecnología con criterio", n: 4, instr: "Piensa en los efectos de la tecnología.", params: { preguntas: [
          P("Un algoritmo eficiente...", ["Tiene pasos repetidos de más", "Resuelve el problema con pasos claros y ordenados", "No tiene pasos", "Es muy largo"], 1, "La eficiencia busca resultados con menos recursos.", ""),
          P("Antes de usar una aplicación nueva, debo...", ["Dar mis datos sin leer", "Leer qué datos pide y para qué", "Compartirla con todos", "Instalar varias veces"], 1, "La privacidad exige revisar permisos.", ""),
          P("¿Por qué debo probar mi proyecto?", ["Para gastar tiempo", "Para detectar errores y mejorarlo", "Para no usarlo", "Para copiar"], 1, "La prueba y depuración mejoran la calidad.", ""),
          P("La tecnología...", ["Solo trae beneficios", "Trae beneficios y riesgos que debemos manejar", "No influye", "Solo trae riesgos"], 1, "El uso crítico permite aprovecharla responsablemente.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Patrones y secuencias",
      "Identifica patrones regulares y los usa para predecir y organizar información.",
      "Tecnología: pensamiento computacional, patrones.",
      [
        D("Patrón", "Un patrón es algo que se repite en el mismo orden: rojo, azul, rojo, azul...", "🔴"),
        D("Predecir", "Si hay patrón, puedo adivinar qué viene después sin mirar.", "🔮"),
        D("En la vida", "Los días de la semana, las estaciones y la música tienen patrones.", "📅"),
      ],
      [
        { id: "g4-t-3a", tipo: "ordenar", titulo: "Descubro el patrón", n: 1, instr: "Ordena los pasos para identificar un patrón.", params: {
          consigna: "Ordena: 1) observo lo que se repite, 2) descubro el orden, 3) adivino qué viene, 4) verifico si acerté.",
          items: ["Observo lo que se repite", "Descubro el orden", "Adivino qué viene después", "Verifico si acerté"],
        } },
        { id: "g4-t-3b", tipo: "explica", titulo: "Patrones", n: 3, instr: "Responde sobre patrones y secuencias.", params: { preguntas: [
          P("El patrón «rojo, azul, rojo, azul...» ¿qué sigue?", ["Verde", "Rojo", "Amarillo", "Blanco"], 1, "El patrón alterna rojo y azul: después de azul viene rojo.", ""),
          P("¿Dónde encuentro patrones?", ["Solo en el cuaderno", "En la semana, las estaciones y la música", "En ninguna parte", "Solo en internet"], 1, "Los patrones aparecen en muchos fenómenos naturales y culturales.", ""),
          P("¿Para qué sirve reconocer un patrón?", ["Para predecir y organizar", "Para aburrir", "Para perder tiempo", "Para copiar"], 0, "Los patrones permiten anticipar lo que viene y ordenar información.", ""),
        ] } },
      ],
      [EXP("El mundo tiene patrones", [
        P("Un patrón...", ["no se repite", "sigue un orden que se repite", "es al azar", "solo es de colores"], 1, "La repetición con orden es la clave del patrón.", ""),
        P("Si el patrón es «2, 4, 6, 8...» ¿qué sigue?", ["10", "9", "3", "12"], 0, "Son los pares ascendentes: el siguiente es 10.", ""),
        P("Los días de la semana...", ["no tienen orden", "son un patrón: lunes, martes... se repiten", "cambian cada mes", "son aleatorios"], 1, "La semana es un patrón cíclico que se repite siempre.", ""),
      ]) ],
      null
    ),
    T(
      "Protejo mis datos y mi contraseña",
      "Aplica hábitos de seguridad digital: contraseñas fuertes y navegación acompañada.",
      "Tecnología: ciberseguridad para niños.",
      [
        D("Contraseña fuerte", "Una contraseña fuerte mezcla letras y números, y no es mi nombre ni mi edad.", "🔐"),
        D("No la comparto", "Ni siquiera la comparto con amigos: cada quien tiene la suya.", "🙅"),
        D("Sitios con adulto", "Navego solo en sitios permitidos y con acompañamiento de un adulto.", "👪"),
      ],
      [
        { id: "g4-t-4a", tipo: "clasificar", titulo: "Seguro o no", n: 1, instr: "Toca la categoría y después cada práctica.", params: {
          categorias: [
            { id: "seg", n: "ES SEGURO", icono: "🔒" },
            { id: "rie", n: "NO ES SEGURO", icono: "🚨" },
          ],
          items: [
            { t: "CONTRASEÑA CON LETRAS Y NÚMEROS", cat: "seg" },
            { t: "MI FECHA DE NACIMIENTO COMO CLAVE", cat: "rie" },
            { t: "PEDIR PERMISO ANTES DE ENTRAR", cat: "seg" },
            { t: "ENTRAR A CUALQUIER SITIO QUE APARECE", cat: "rie" },
          ],
        } },
        { id: "g4-t-4b", tipo: "explica", titulo: "Ciberseguridad", n: 3, instr: "Responde sobre protección en línea.", params: { preguntas: [
          P("¿Cuál es una contraseña fuerte?", ["123456", "MiNombre2018", "Luna7perro", "Soyyo"], 2, "Mezclar letras y números sin datos personales la hace más segura.", ""),
          P("Un desconocido online me pide reunirnos. ¿Qué hago?", ["Le doy mi dirección", "Aviso a un adulto y no voy", "Voy solo", "Le mando una foto"], 1, "Nunca quedamos con desconocidos: avisar a un adulto es la acción correcta.", ""),
          P("¿Puedo compartir mi contraseña con mi mejor amigo?", ["Sí, siempre", "No: es privada", "Solo en vacaciones", "Da igual"], 1, "Las contraseñas no se comparten con nadie, por más confianza que haya.", ""),
        ] } },
      ],
      [EXP("Navego seguro", [
        P("Una contraseña fuerte...", ["es mi nombre", "mezcla letras y números", "es 1234", "la gritan todos"], 1, "La entropía de la contraseña la hace difícil de adivinar.", ""),
        P("Si veo algo que me asusta online...", ["lo escondo", "aviso a un adulto de confianza", "respondo", "sigo solo"], 1, "Los adultos pueden ayudarte a manejar situaciones incómodas.", ""),
        P("Los datos personales se protegen porque...", ["son aburridos", "pueden usarse en mi contra", "no valen nada", "son de papel"], 1, "Proteger la información personal evita fraudes y riesgos.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Artística ---------------- */
  G4.artistica = [
    T(
      "Perspectiva y proyectos creativos",
      "Planifica y crea obras incorporando perspectiva inicial y técnicas combinadas.",
      "Educación artística: planear obras, perspectiva y técnicas.",
      [
        D("Perspectiva", "Los objetos lejanos se ven más pequeños; los cercanos, más grandes.", "🌆"),
        D("Planear", "Antes de crear, hago bocetos y elijo materiales.", "✏️"),
        D("Combinar técnicas", "Mezclar lápiz, témpera y collage enriquece la obra.", "🎨"),
      ],
      [
        { id: "g4-a-1a", tipo: "explica", titulo: "Perspectiva", n: 3, instr: "Piensa en cómo se ve la profundidad.", params: { preguntas: [
          P("En perspectiva, los objetos lejanos se ven...", ["Más grandes", "Más pequeños y cerca del horizonte", "Iguales", "No se ven"], 1, "La disminución de tamaño genera profundidad.", ""),
          P("La línea del horizonte en un paisaje...", ["No existe", "Marca el punto de vista", "Siempre está arriba", "Es el marco"], 1, "El horizonte sitúa la altura del observador.", ""),
          P("Antes de una obra grande, conviene...", ["Empezar sin plan", "Hacer un boceto y elegir materiales", "Borrar todo", "Copiar a otro"], 1, "La planificación mejora el resultado.", ""),
        ] } },
        { id: "g4-a-1b", tipo: "clasificar", titulo: "Materiales artísticos", n: 1, instr: "Toca el material y su técnica.", params: {
          categorias: [{ id: "dibujo", n: "Dibujo", icono: "✏️" }, { id: "pint", n: "Pintura", icono: "🖌️" }, { id: "col", n: "Collage", icono: "🧻" }],
          items: [
            { t: "LÁPIZ Y CARBONCILLO", cat: "dibujo" }, { t: "TÉMPERA", cat: "pint" },
            { t: "PAPEL RECORTADO", cat: "col" }, { t: "ACUARELA", cat: "pint" },
            { t: "MARCADORES", cat: "dibujo" }, { t: "TELAS Y BOTONES", cat: "col" },
          ],
        } },
      ],
      null
    ),
    T(
      "Aprecio arte de mi comunidad",
      "Crea proyectos combinando técnicas y aprecia expresiones artísticas de comunidades.",
      "Educación artística: analizar expresiones artísticas de comunidades.",
      [
        D("Arquitectura y comunidad", "Las casas, templos y plazas cuentan la historia de un lugar.", "🏛️"),
        D("Músicas y danzas", "Cada región tiene ritmos propios: cumbia, currulao, guabina.", "🥁"),
        D("Apreciar", "Apreciar es observar, escuchar y explicar por qué algo es valioso.", "👁️"),
      ],
      [
        { id: "g4-a-2a", tipo: "emparejar", titulo: "Artes de Colombia", n: 1, instr: "Toca el arte o manifestación y su región o categoría.", params: {
          parejas: [
            { a: "CUMBIA", b: "MÚSICA COSTEÑA" }, { a: "CURRULAO", b: "MÚSICA DEL PACÍFICO" },
            { a: "GUABINA", b: "MÚSICA ANDINA" }, { a: "ARRIMO", b: "ARTE POPULAR" },
            { a: "TEJIDOS WAYUU", b: "ARTE INDÍGENA" },
          ],
        } },
        { id: "g4-a-2b", tipo: "explica", titulo: "Apreciación", n: 3, instr: "Piensa en el valor de las expresiones artísticas.", params: { preguntas: [
          P("Apreciar una obra implica...", ["Decir si me gusta o no", "Observar, escuchar y explicar su valor", "Copiarla", "Callarse"], 1, "La apreciación analiza intención, técnica y contexto.", ""),
          P("Las manifestaciones artísticas de una comunidad...", ["No tienen importancia", "Expresan su identidad e historia", "Son solo decorativas", "Desaparecen rápido"], 1, "El arte es memoria viva de un pueblo.", ""),
          P("¿Cómo puedo conocer el arte local?", ["Solo por internet", "Visitando museos, ferias y preguntando a los mayores", "No conociendo", "Solo en libros"], 1, "Las fuentes locales enriquecen la apreciación.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Melodía y armonía",
      "Diferencia melodía, armonía y ritmo en una pieza musical.",
      "Educación artística: elementos de la música.",
      [
        D("Melodía", "La melodía es la línea de notas que cantamos o silbamos.", "🎤"),
        D("Armonía", "La armonía es cuando varios sonidos suenan juntos y concuerdan.", "🎹"),
        D("Ritmo", "El ritmo es el pulso que marca el tiempo de la música.", "🥁"),
      ],
      [
        { id: "g4-a-3a", tipo: "emparejar", titulo: "Elementos de la música", n: 1, instr: "Toca el elemento y después su descripción.", params: {
          parejas: [
            { a: "MELODÍA", b: "LÍNEA DE NOTAS QUE CANTAMOS" },
            { a: "ARMONÍA", b: "VARIOS SONIDOS QUE CONCUERDAN" },
            { a: "RITMO", b: "PULSO QUE MARCA EL TIEMPO" },
          ],
        } },
        { id: "g4-a-3b", tipo: "explica", titulo: "Escucho con atención", n: 3, instr: "Responde sobre los elementos de la música.", params: { preguntas: [
          P("¿Qué es la melodía?", ["El volumen", "La línea de notas que se canta o se silba", "El nombre de la canción", "El instrumento"], 1, "La melodía es la parte que tarareamos de una canción.", ""),
          P("¿Cuándo hay armonía?", ["Cuando suena un solo sonido", "Cuando varios sonidos suenan juntos y concuerdan", "Cuando hay silencio", "Cuando hay ruido"], 1, "La armonía combina notas complementarias al mismo tiempo.", ""),
          P("Si canto fuera del compás...", ["queda mejor", "rompo el ritmo", "no pasa nada", "mejora la armonía"], 1, "El ritmo sostiene la canción: salirse del compás la desordena.", ""),
        ] } },
      ],
      [EXP("La música se compone", [
        P("La melodía es...", ["el pulso", "la línea de notas que cantamos", "los acordes", "el silencio"], 1, "La melodía es el alma cantable de la pieza.", ""),
        P("La armonía suena cuando...", ["suena una nota sola", "varias notas concuerdan juntas", "hay solo percusión", "todo se calla"], 1, "La armonía aporta profundidad y color a la melodía.", ""),
        P("El ritmo...", ["no importa", "marca el pulso del tiempo musical", "es solo ruido", "es opcional"], 1, "El ritmo organiza el tiempo y guía el movimiento.", ""),
      ]) ],
      null
    ),
    T(
      "El arte cuenta historias",
      "Reconoce el mural y el arte colombiano como formas de contar lo que somos.",
      "Educación artística: arte colombiano y expresión.",
      [
        D("Murales", "Los murales son pinturas grandes en muros que cuentan historias de la comunidad.", "🖼️"),
        D("Botero", "Fernando Botero pintó personajes grandes y redondos: es un maestro colombiano.", "🎨"),
        D("Mi historia", "Yo también puedo contar lo mío con un dibujo o un mini mural del salón.", "✏️"),
      ],
      [
        { id: "g4-a-4a", tipo: "explica", titulo: "Arte que cuenta", n: 3, instr: "Responde sobre murales y arte colombiano.", params: { preguntas: [
          P("¿Qué es un mural?", ["Un dibujo pequeño", "Una pintura grande en un muro que cuenta una historia", "Un cartel", "Una escultura"], 1, "Los murales convierten los muros en historias compartidas.", ""),
          P("¿Quién es Fernando Botero?", ["Un cantante", "Un pintor colombiano famoso por sus formas redondas", "Un escritor", "Un científico"], 1, "Botero es uno de los artistas colombianos más reconocidos del mundo.", ""),
          P("¿Por qué el arte cuenta historias?", ["Porque usa color y forma para expresar ideas", "Porque es obligatorio", "Porque es caro", "Porque hace ruido"], 0, "El arte es un lenguaje que comunica lo que sentimos y vivimos.", ""),
        ] } },
        { id: "g4-a-4b", tipo: "escribir", titulo: "Mi mural", n: 1, instr: "Escribe qué contarías en un mural de tu escuela.", params: { consigna: "Escribe qué historia contarías en un mural de tu escuela y con qué colores.", min: 4, ejemplo: "Contaría la historia de mi comunidad con colores alegres." } },
      ],
      [EXP("Arte que expresa", [
        P("Los murales...", ["son pequeños y privados", "cuentan historias en muros públicos", "no son arte", "solo son anuncios"], 1, "El mural es arte al servicio de la comunidad.", ""),
        P("Botero es reconocido por...", ["sus personajes de formas grandes y redondas", "sus fotos", "sus danzas", "sus recetas"], 0, "El «volumen» boteriano es su sello inconfundible.", ""),
        P("Yo puedo crear arte...", ["solo si soy profesional", "con lo que tengo y lo que siento", "nunca", "solo con pintura cara"], 1, "El arte nace de la expresión, no del material.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Física ---------------- */
  G4.efisica = [
    T(
      "Estrategias en juegos",
      "Aplica estrategias sencillas en juegos y reconoce capacidades corporales.",
      "Educación física: estrategias sencillas en juegos y capacidades corporales.",
      [
        D("Estrategia", "Planear cómo atacar o defender mejora el juego colectivo.", "🧠"),
        D("Capacidades", "Fuerza, velocidad, flexibilidad y resistencia se entrenan.", "💪"),
        D("Seguridad", "Elijo ejercicios acordes a mi condición para evitar lesiones.", "🛡️"),
      ],
      [
        { id: "g4-f-1a", tipo: "explica", titulo: "Estrategia y capacidades", n: 4, instr: "Analiza el juego y el cuerpo.", params: { preguntas: [
          P("Una estrategia de equipo consiste en...", ["Gritar más", "Distribuir roles y comunicarse", "Ganar solo", "No correr"], 1, "La coordinación colectiva potencia el rendimiento.", ""),
          P("La flexibilidad es...", ["Correr rápido", "Amplitud de movimiento de las articulaciones", "Fuerza máxima", "Respirar"], 1, "Se entrena con estiramientos.", ""),
          P("Si siento dolor durante el ejercicio...", ["Sigo igual", "Paro y aviso al docente", "Aumento el ritmo", "Me estiro sin más"], 1, "Escuchar al cuerpo previene lesiones.", ""),
          P("Para mejorar la velocidad...", ["Nada", "Practico sprints y cambios de ritmo", "Solo miro", "Duermo más"], 1, "El entrenamiento específico mejora la velocidad.", ""),
        ] } },
        { id: "g4-f-1b", tipo: "ordenar", titulo: "Plan de entrenamiento", n: 1, instr: "Ordena las fases de una sesión deportiva.", params: { consigna: "Ordena las fases de una sesión deportiva segura.", items: ["CALIENTO Y ESTIRO", "ACTIVIDAD PRINCIPAL (JUEGO O EJERCICIO)", "ENFRIAMIENTO Y ESTIRAMIENTO", "HIDRATACIÓN Y DESCANSO"] } },
      ],
      null
    ),
    T(
      "Actividad física segura y saludable",
      "Reconoce la importancia de la actividad física frecuente y los hábitos saludables.",
      "Educación física: reconocer capacidades corporales y actividad física segura.",
      [
        D("Frecuencia", "La OMS recomienda al menos 60 minutos de actividad diaria.", "⏰"),
        D("Hábitos", "Dormir bien, hidratarse y alimentarse sano sostienen el rendimiento.", "🍎"),
        D("Seguridad", "Calentar, usar protección y respetar los límites evita accidentes.", "🦺"),
      ],
      [
        { id: "g4-f-2a", tipo: "explica", titulo: "Hábitos saludables", n: 4, instr: "Elige la opción más saludable.", params: { preguntas: [
          P("¿Cuánta actividad física diaria se recomienda a niños y niñas?", ["10 minutos", "60 minutos aproximadamente", "Ninguna", "3 horas"], 1, "Alrededor de una hora diaria mantiene la salud.", ""),
          P("Para recuperarme después de jugar...", ["No tomo nada", "Me hidrato y descanso", "Sigo sin parar", "Como mucho azúcar"], 1, "La hidratación y el descanso son parte del entrenamiento.", ""),
          P("Dormir poco afecta...", ["Solo el humor", "El rendimiento y la salud", "Nada", "Solo los pies"], 1, "El descanso es esencial para el aprendizaje y el cuerpo.", ""),
          P("¿Qué hago antes de correr una carrera?", ["Nada", "Caliento y estiro", "Como mucho", "Me acuesto"], 1, "Calentar prepara músculos y articulaciones.", ""),
        ] } },
        { id: "g4-f-2b", tipo: "clasificar", titulo: "Hábitos", n: 1, instr: "Toca el hábito y si es saludable o no.", params: {
          categorias: [{ id: "si", n: "Saludable", icono: "💚" }, { id: "no", n: "No es saludable", icono: "⚠️" }],
          items: [
            { t: "TOMAR MUCHA AGUA", cat: "si" }, { t: "DORMIR 9 HORAS", cat: "si" }, { t: "COMER MUCHA CHATARRA", cat: "no" },
            { t: "JUGAR AL AIRE LIBRE", cat: "si" }, { t: "PASAR MUCHAS HORAS EN PANTALLA", cat: "no" },
          ],
        } },
      ],
      null
    ),
  
    T(
      "Atletismo: pruebas básicas",
      "Practica carrera, salto y lanzamiento como en las competencias del atletismo.",
      "Educación física: atletismo.",
      [
        D("Carrera", "En la carrera llego erguido, con brazos activos y zancada pareja.", "🏃"),
        D("Salto", "En el salto impulso con las piernas y caigo con seguridad.", "🦘"),
        D("Lanzamiento", "Lanzar se hace girando el cuerpo, no solo con el brazo.", "🥎"),
      ],
      [
        { id: "g4-f-3a", tipo: "ordenar", titulo: "Rutina de atletismo", n: 1, instr: "Ordena la rutina de entrenamiento.", params: {
          consigna: "Ordena: 1) caliento y estiro, 2) hago la prueba, 3) respiro y recupero, 4) registro mi intento.",
          items: ["Caliento y estiro", "Hago la prueba con técnica", "Respiro y recupero", "Registro mi intento"],
        } },
        { id: "g4-f-3b", tipo: "explica", titulo: "Técnica atlética", n: 3, instr: "Responde sobre carrera, salto y lanzamiento.", params: { preguntas: [
          P("¿Cómo es una buena carrera?", ["Encorvado", "Erguido, con brazos activos y zancada pareja", "Con las manos en los bolsillos", "Mirando el suelo"], 1, "La postura erguida y el trabajo de brazos impulsan la carrera.", ""),
          P("En el lanzamiento, ¿qué parte del cuerpo trabaja?", ["Solo el brazo", "Todo el cuerpo: tronco, piernas y brazo", "Solo la mano", "Solo la cabeza"], 1, "La rotación del tronco y el impulso de piernas dan potencia.", ""),
          P("¿Qué hago después de competir?", ["Me tiro sin más", "Respiro y recupero", "Corro otra vez de inmediato", "Me voy"], 1, "La recuperación post-esfuerzo completa el entrenamiento.", ""),
        ] } },
      ],
      [EXP("Atletismo con técnica", [
        P("La zancada pareja en la carrera...", ["frena", "sostiene la velocidad", "no importa", "lastima"], 1, "Un ritmo de zancada constante mantiene la velocidad.", ""),
        P("Saltar bien requiere...", ["impulso y caída segura", "cerrar los ojos", "saltar de un solo pie siempre", "correr muy lento"], 0, "El impulso y la técnica de caída evitan lesiones y mejoran el salto.", ""),
        P("Registrar mis intentos...", ["no sirve", "me permite ver mi progreso", "es perder tiempo", "es solo para ganar"], 1, "El registro objetivo muestra la evolución y motiva.", ""),
      ]) ],
      null
    ),
    T(
      "Me alimento y descanso para rendir",
      "Relaciona alimentación, descanso y actividad física con el rendimiento.",
      "Educación física: hábitos saludables.",
      [
        D("Combino", "Para rendir combino comida sana, agua, juego y sueño suficiente.", "🥗"),
        D("Sueño", "Dormir entre 8 y 10 horas ayuda a que el cuerpo y la mente se recuperen.", "😴"),
        D("Pantallas", "Las pantallas antes de dormir quitan sueño: las dejo a un lado.", "📴"),
      ],
      [
        { id: "g4-f-4a", tipo: "clasificar", titulo: "Me ayuda o no", n: 1, instr: "Toca la categoría y después cada hábito.", params: {
          categorias: [
            { id: "ayu", n: "ME AYUDA", icono: "🟢" },
            { id: "noa", n: "NO ME AYUDA", icono: "🔴" },
          ],
          items: [
            { t: "DORMIR 9 HORAS CADA NOCHE", cat: "ayu" },
            { t: "DESPERTAR CON LA TELE ENCENDIDA", cat: "noa" },
            { t: "TOMAR AGUA TODO EL DÍA", cat: "ayu" },
            { t: "CENAR MUY TARDE FRENTE A LA PANTALLA", cat: "noa" },
          ],
        } },
        { id: "g4-f-4b", tipo: "explica", titulo: "Descanso y rendimiento", n: 3, instr: "Responde sobre sueño y alimentación.", params: { preguntas: [
          P("¿Cuántas horas conviene dormir a un niño?", ["4 horas", "Entre 8 y 10 horas", "12 horas", "Depende del día"], 1, "El sueño suficiente repara el cuerpo y fija lo aprendido.", ""),
          P("¿Por qué las pantallas antes de dormir afectan el sueño?", ["Su luz retrasa el sueño", "No afectan", "Porque gastan batería", "Porque hacen ruido"], 0, "La luz de las pantallas retrasa la señal de sueño del cerebro.", ""),
          P("¿Qué alimento conviene antes de entrenar?", ["Comida ligera y agua", "Nada de nada", "Dulces en exceso", "Bebidas muy frías"], 0, "Una comida ligera e hidratación adecuada sostienen el esfuerzo.", ""),
        ] } },
      ],
      [EXP("Rendimiento saludable", [
        P("Dormir bien...", ["no influye", "mejora mi atención y energía", "es pérdida de tiempo", "solo sirve para crecer"], 1, "El descanso es parte del entrenamiento: repara y enfoca.", ""),
        P("Un desayuno saludable...", ["me da energía para aprender", "no importa", "es opcional", "solo sirve los domingos"], 0, "La energía de la mañana arranca el rendimiento físico e intelectual.", ""),
        P("Mantenerme hidratado durante el día...", ["no cambia nada", "mejora mi rendimiento", "lastima", "solo importa si corro"], 1, "La hidratación constante sostiene todas las funciones del cuerpo.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Ética y Valores ---------------- */
  G4.etica = [
    T(
      "Argumentar con respeto",
      "Argumenta decisiones, reconoce prejuicios y respeta las diferencias.",
      "Ética: argumentar decisiones; reconocer prejuicios.",
      [
        D("Argumentar", "Es dar razones para sostener lo que pienso sin ofender.", "💬"),
        D("Prejuicio", "Es opinar de alguien antes de conocerlo. No es justo.", "🚫"),
        D("Diferencias", "Las diferencias enriquecen; no hacen a nadie mejor o peor.", "🌈"),
      ],
      [
        { id: "g4-e-1a", tipo: "explica", titulo: "Argumentar y prejuicios", n: 4, instr: "Elige la opción más justa.", params: { preguntas: [
          P("Argumentar bien consiste en...", ["Decir que sí fuerte", "Dar razones claras escuchando al otro", "Interrumpir", "Gritar"], 1, "La argumentación exige razones y respeto.", ""),
          P("Un prejuicio es...", ["Una opinión fundamentada", "Un juicio previo sin conocer a la persona", "Una norma", "Un dato"], 1, "Los prejuicios distorsionan la realidad.", ""),
          P("Si alguien tiene otra cultura...", ["Lo juzgo", "Lo conozco y valoro sus diferencias", "Lo excluyo", "Lo imito siempre"], 1, "Reconocer la diversidad es base de la convivencia.", ""),
          P("Discrepar con respeto significa...", ["Callarse siempre", "Expresar mi idea sin ofender y escuchar", "Golpear la mesa", "Irse"], 1, "El respeto sostiene el diálogo democrático.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Diálogo y proyectos colectivos",
      "Maneja desacuerdos mediante el diálogo y participa en proyectos colectivos.",
      "Ética: manejar desacuerdos mediante el diálogo y participar en proyectos colectivos.",
      [
        D("Diálogo", "Hablar y escuchar para entenderse, buscando acuerdos.", "🤝"),
        D("Proyecto colectivo", "Es una acción común con meta compartida: una huerta, un mural.", "🌱"),
        D("Participación", "Participar es aportar ideas y cumplir tareas del grupo.", "🙋"),
      ],
      [
        { id: "g4-e-2a", tipo: "explica", titulo: "Diálogo y participación", n: 4, instr: "Elige la mejor forma de actuar en grupo.", params: { preguntas: [
          P("Si mi grupo no se pone de acuerdo...", ["Impongo mi idea", "Propongo que cada uno dé razones y busquemos consenso", "Me salgo", "Grito"], 1, "El consenso respeta las voces del grupo.", ""),
          P("En un proyecto colectivo, mi rol es...", ["No hacer nada", "Aportar ideas y cumplir mis tareas", "Controlar a otros", "Copiar"], 1, "La corresponsabilidad sostiene el proyecto.", ""),
          P("Las emociones fuertes se manejan...", ["Golpeando", "Respirando, nombrándolas y buscando ayuda", "Ignorándolas", "Castigando"], 1, "La regulación emocional permite mejores decisiones.", ""),
          P("Una decisión justa es aquella que...", ["Beneficia solo a unos", "Considera el bienestar de todos los implicados", "Se toma sin escuchar", "Es la más rápida"], 1, "La justicia mira el bien común.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Convivimos con normas justas",
      "Comprende para qué sirven las normas y cómo se construyen de forma justa.",
      "Ética: normas y convivencia.",
      [
        D("Para todos", "Una norma justa aplica para todos, sin excepciones ni favoritismos.", "⚖️"),
        D("Se acuerdan", "Las normas se acuerdan escuchando a todos, no se imponen a escondidas.", "🗣️"),
        D("Ayudan a vivir mejor", "Las normas protegen a las personas y hacen el espacio más amable.", "🌱"),
      ],
      [
        { id: "g4-e-3a", tipo: "ordenar", titulo: "Creamos una norma", n: 1, instr: "Ordena los pasos para acordar una norma justa.", params: {
          consigna: "Ordena: 1) identificamos el problema, 2) escuchamos a todos, 3) acordamos la norma, 4) la cuidamos entre todos.",
          items: ["Identificamos el problema", "Escuchamos a todos", "Acordamos la norma", "La cuidamos entre todos"],
        } },
        { id: "g4-e-3b", tipo: "explica", titulo: "Normas justas", n: 3, instr: "Responde sobre normas y convivencia.", params: { preguntas: [
          P("¿Para qué sirven las normas?", ["Para castigar", "Para proteger a las personas y ordenar la convivencia", "Para aburrir", "Para crear favoritos"], 1, "Las normas crean ambientes seguros y previsibles.", ""),
          P("¿Cómo se crea una norma justa?", ["Imponiéndola", "Escuchando a todos y acordando", "Al azar", "Copiándola"], 1, "El acuerdo entre todos da legitimidad a la norma.", ""),
          P("Si una norma me perjudica a mí solo...", ["la rompo", "propongo conversarla y ajustarla", "me enojo", "la escondo"], 1, "Las normas pueden revisarse por los canales del diálogo.", ""),
        ] } },
      ],
      [EXP("Convivir con acuerdos", [
        P("Una norma justa...", ["aplica solo a algunos", "aplica a todos por igual", "es la que yo digo", "no existe"], 1, "La igualdad ante la norma es su justicia.", ""),
        P("Cuando todos participan en el acuerdo...", ["la norma se respeta más", "no sirve", "tarda", "no cambia nada"], 0, "Participar genera compromiso con lo acordado.", ""),
        P("Las normas nos ayudan a...", ["vivir mejor juntos", "competir", "discutir", "castigar"], 0, "Su propósito es fortalecer la convivencia, no el castigo.", ""),
      ]) ],
      null
    ),
    T(
      "No a la discriminación",
      "Reconoce y rechaza actitudes discriminatorias por cualquier diferencia.",
      "Ética: no discriminación e inclusión.",
      [
        D("Discriminar", "Discriminar es tratar peor a alguien por cómo es o de dónde viene.", "🚫"),
        D("Incluir", "Incluir es invitar, escuchar y dar el mismo lugar a todos.", "🤝"),
        D("Puedo actuar", "Si veo discriminación, puedo pedir ayuda y apoyar a quien la sufre.", "🦸"),
      ],
      [
        { id: "g4-e-4a", tipo: "clasificar", titulo: "Discriminación o inclusión", n: 1, instr: "Toca la categoría y después cada actitud.", params: {
          categorias: [
            { id: "dis", n: "ES DISCRIMINACIÓN", icono: "🚫" },
            { id: "inc", n: "ES INCLUSIÓN", icono: "🤝" },
          ],
          items: [
            { t: "«NO JUEGAS PORQUE ERES BAJITO»", cat: "dis" },
            { t: "«TE INVITAMOS AL EQUIPO»", cat: "inc" },
            { t: "«TU NOMBRE ES RARO»", cat: "dis" },
            { t: "«TE ESCUCHAMOS TU IDEA»", cat: "inc" },
          ],
        } },
        { id: "g4-e-4b", tipo: "explica", titulo: "Actúo contra la discriminación", n: 2, instr: "Responde sobre inclusión.", params: { preguntas: [
          P("Si veo que excluyen a un compañero, ¿qué hago?", ["Me quedo mirando", "Lo invito a participar y pido ayuda si es necesario", "Me río", "Lo excluyo también"], 1, "Incluir y pedir apoyo cambia la situación de quien sufre.", ""),
          P("¿Es correcto tratar peor a alguien por su apariencia?", ["Sí, a veces", "No: todos merecemos el mismo trato", "Depende", "Solo si él es diferente"], 1, "La dignidad de cada persona es igual, sin importar las diferencias.", ""),
        ] } },
      ],
      [EXP("Incluyo y respeto", [
        P("Discriminar es...", ["tratar peor por la diferencia", "invitar a jugar", "escuchar", "ayudar"], 0, "La discriminación degrada al otro por lo que es.", ""),
        P("Incluir significa...", ["dar el mismo lugar a todos", "excluir a los distintos", "callar", "separar"], 0, "La inclusión reconoce el valor de cada integrante.", ""),
        P("Si presencio discriminación...", ["actúo y pido ayuda", "me callo", "aplaudo", "lo grabo"], 0, "Actuar rompe el ciclo; el silencio lo alimenta.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Religiosa ---------------- */
  G4.religiosa = [
    T(
      "Relatos, prácticas y valores",
      "Analiza relatos, prácticas y valores de tradiciones religiosas de su contexto.",
      "Educación religiosa: analizar relatos, prácticas y valores según el currículo institucional.",
      [
        D("Relatos fundacionales", "Las tradiciones conservan relatos que enseñan valores.", "📜"),
        D("Prácticas", "Oración, servicio, celebración y ayuno expresan la fe.", "🕯️"),
        D("Diálogo", "Conocer lo propio y lo ajeno fortalece la convivencia.", "💬"),
      ],
      [
        { id: "g4-r-1a", tipo: "explica", titulo: "Tradiciones y valores", n: 3, instr: "Piensa en los valores compartidos.", params: { preguntas: [
          P("Un valor presente en casi todas las tradiciones es...", ["La envidia", "El servicio a los demás", "El egoísmo", "La indiferencia"], 1, "Ayudar al prójimo es transversal a las tradiciones.", ""),
          P("Los relatos tradicionales...", ["Solo entretienen", "Transmiten valores e identidad", "No sirven", "Son solo historia"], 1, "Narran el origen de las prácticas y la identidad.", ""),
          P("Para dialogar con alguien de otra tradición...", ["Debo convencerlo", "Escucho con respeto y comparto lo mío", "Lo critico", "Lo evito"], 1, "El diálogo exige apertura mutua.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Símbolos de paz y convivencia",
      "Reconoce símbolos y prácticas de paz en distintas tradiciones.",
      "Educación religiosa: paz y convivencia (según el currículo institucional).",
      [
        D("La paloma", "La paloma es un símbolo universal de paz en muchas culturas.", "🕊️"),
        D("Las manos", "Las manos abiertas representan ayuda, diálogo y no violencia.", "🤝"),
        D("La paz se practica", "La paz se construye cada día: disculparse, escuchar y cuidar.", "🌍"),
      ],
      [
        { id: "g4-r-2a", tipo: "emparejar", titulo: "Símbolos de paz", n: 1, instr: "Toca el símbolo y después su significado.", params: {
          parejas: [
            { a: "PALOMA", b: "PAZ" },
            { a: "MANOS ABIERTAS", b: "AYUDA Y DIÁLOGO" },
            { a: "ESCUCHAR", b: "COMPRENSIÓN" },
          ],
        } },
        { id: "g4-r-2b", tipo: "explica", titulo: "Paz que se vive", n: 2, instr: "Responde sobre la paz.", params: { preguntas: [
          P("¿Qué significa la paloma como símbolo?", ["La guerra", "La paz", "El miedo", "El ruido"], 1, "La paloma con rama es un emblema universal de paz.", ""),
          P("¿Cómo se construye la paz en el día a día?", ["Con disculpas, escucha y cuidado", "Esperando", "Con gritos", "Nada"], 0, "La paz se teje con gestos concretos de convivencia.", ""),
        ] } },
      ],
      [EXP("Paz en acción", [
        P("Un símbolo de paz...", ["es solo un dibujo", "expresa un ideal compartido", "no significa nada", "es un castigo"], 1, "Los símbolos recuerdan valores que las comunidades persiguen.", ""),
        P("Escuchar al otro...", ["es una forma de violencia", "es una práctica de paz", "no importa", "es debilidad"], 1, "La comprensión nace de la escucha respetuosa.", ""),
        P("La paz se construye...", ["solo con discursos", "con actos diarios de cuidado", "por los gobiernos únicamente", "nunca"], 1, "Cada gesto cotidiano aporta a la convivencia pacífica.", ""),
      ]) ],
      null
    ),
  ];

  /* =========================================================
     QUINTO DE PRIMARIA
     Pensamiento crítico, comunicación, investigación y
     preparación para secundaria.
     ========================================================= */
  const G5 = {};

  /* ---------------- Lenguaje ---------------- */
  G5.lenguaje = [
    T(
      "Interpretar y comparar textos",
      "Interpreta y compara textos, reconociendo intenciones comunicativas.",
      "Interpretar y comparar textos; reconocer intenciones comunicativas.",
      [
        D("Intención", "Informar, persuadir, entretener o conmover: cada texto tiene un propósito.", "🎯"),
        D("Comparar", "Busco semejanzas y diferencias entre dos textos sobre un tema.", "⚖️"),
        D("Perspectiva", "El autor mira desde su propia experiencia; por eso hay versiones distintas.", "👓"),
      ],
      [
        { id: "g5-l-1a", tipo: "explica", titulo: "Interpretación", n: 4, instr: "Analiza la intención del texto.", params: { preguntas: [
          P("Un texto que busca convencer de comprar algo tiene intención...", ["Informativa", "Publicitaria o persuasiva", "Narrativa", "Científica"], 1, "La publicidad persuade mediante argumentos y emociones.", ""),
          P("Comparar dos textos sobre el mismo tema implica...", ["Elegir el más corto", "Buscar semejanzas y diferencias", "Copiar ambos", "Ninguna"], 1, "La comparación exige criterios comunes.", ""),
          P("Si dos autores escriben distinto sobre un suceso...", ["Uno miente siempre", "Pueden tener perspectivas distintas", "No escribieron", "Es imposible"], 1, "La perspectiva explica las diferencias de interpretación.", ""),
          P("La intención comunicativa es...", ["El tamaño del texto", "El propósito del autor con el lector", "El color", "La ortografía"], 1, "Cada texto busca algo con su audiencia.", ""),
        ] } },
        { id: "g5-l-1b", tipo: "sentence-read", titulo: "Leo con análisis", n: 3, instr: "Lee la oración y responde.", params: { pool: undefined } },
      ],
      null
    ),
    T(
      "Argumentar con evidencias",
      "Sostiene interpretaciones con evidencias del texto y reconoce afirmaciones débiles.",
      "Justificar interpretaciones con evidencias; argumentar.",
      [
        D("Evidencia", "Es una cita o dato del texto que sostiene lo que afirmo.", "📎"),
        D("Afirmación vs evidencia", "Decir «es el mejor» no basta; hay que mostrar por qué.", "🧱"),
        D("Refutar", "Contrarrestar un argumento con razones, sin ofender.", "🛡️"),
      ],
      [
        { id: "g5-l-2a", tipo: "explica", titulo: "Evidencias", n: 4, instr: "Distingue afirmaciones y evidencias.", params: { preguntas: [
          P("«El cuento es triste» sin razones es...", ["Una evidencia", "Una afirmación sin sustento", "Una cita", "Un dato"], 1, "Las interpretaciones requieren evidencia textual.", ""),
          P("Una buena evidencia...", ["Es un dato o cita del texto", "Es una opinión mía", "Es un dato inventado", "Es un adjetivo"], 0, "La evidencia se apoya en el texto.", ""),
          P("Para refutar un argumento debo...", ["Insultar", "Presentar razones contrarias respetuosamente", "Gritar", "Callarme siempre"], 1, "La refutación es parte del diálogo argumentativo.", ""),
          P("«El autor afirma X en la línea 4» es...", ["Una evidencia citada", "Una opinión", "Un título", "Un error"], 0, "Citar la fuente refuerza la evidencia.", ""),
        ] } },
        { id: "g5-l-2b", tipo: "escribir", titulo: "Escribo un texto expositivo", n: 1, instr: "Escribe un texto expositivo claro con datos y cierre.", params: { consigna: "Escribe un texto expositivo (al menos 4 oraciones) sobre un tema que domines, con datos y un cierre.", min: 4, ejemplo: "Los ecosistemas están formados por seres vivos y su ambiente. Si una especie desaparece, la cadena alimentaria se afecta." } },
      ],
      null
    ),
    T(
      "Resumir con precisión",
      "Resume información de distintas fuentes y presenta ideas de forma oral u escrita.",
      "Resumir información; presentar ideas oralmente.",
      [
        D("Extraer", "Selecciono lo esencial y descarto repeticiones y ejemplos de más.", "✂️"),
        D("Síntesis", "Un buen resumen usa menos palabras pero conserva el sentido.", "🧬"),
        D("Presentar", "Puedo presentar mi resumen oralmente con claridad y orden.", "🎤"),
      ],
      [
        { id: "g5-l-3a", tipo: "ordenar", titulo: "Sintetizo", n: 1, instr: "Ordena los pasos de una síntesis eficaz.", params: { consigna: "Ordena los pasos para sintetizar un texto.", items: ["LEO Y COMPRENDO EL TEXTO", "SELECCIONO LAS IDEAS CLAVE", "REESCRIBO CON MIS PALABRAS", "REVISO QUE CONSERVE EL SENTIDO"] } },
        { id: "g5-l-3b", tipo: "explica", titulo: "Resumir mejor", n: 3, instr: "Piensa en cómo sintetizas.", params: { preguntas: [
          P("Un resumen eficaz...", ["Copia el texto", "Conserva el sentido con menos palabras", "Agrega opiniones", "Es más largo"], 1, "La síntesis reduce sin distorsionar.", ""),
          P("Presentar ideas oralmente exige...", ["Hablar rápido", "Orden, claridad y ritmo adecuado", "Leer sin mirar", "No decir nada"], 1, "La comunicación oral requiere estructura y contacto.", ""),
          P("Si la fuente es larga, conviene...", ["Resumirla por partes", "Ignorarla", "Copiarla entera", "Traducirla"], 0, "Trabajar por secciones facilita la síntesis.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Reviso y mejoro mi escritura",
      "Revisa borradores, aplica criterios de corrección y mejora sus textos.",
      "Revisar borradores; escribir textos expositivos y narrativos coherentes.",
      [
        D("Criterios", "Contenido, organización, coherencia, léxico y ortografía.", "📋"),
        D("Borrador", "El primer escrito es un borrador: se puede y se debe mejorar.", "📝"),
        D("Pares", "Leer el texto de otro y dar retroalimentación útil mejora a ambos.", "👥"),
      ],
      [
        { id: "g5-l-4a", tipo: "escribir", titulo: "Reviso mi borrador", n: 1, instr: "Escribe un borrador y revísalo con los criterios.", params: { consigna: "Escribe un borrador (mínimo 5 oraciones) y luego revísalo: ¿se entiende? ¿está ordenado? ¿está bien escrito?", min: 5, ejemplo: "Primero preparé la receta. Luego mezclé los ingredientes. Al final horneamos y compartimos con la familia." } },
        { id: "g5-l-4b", tipo: "explica", titulo: "Criterios de revisión", n: 4, instr: "Aplica criterios de corrección.", params: { preguntas: [
          P("Al revisar, primero reviso...", ["El color de la letra", "Si el contenido se entiende y está ordenado", "La portada", "El largo"], 1, "La claridad y el orden son prioritarios.", ""),
          P("Una coherencia débil se nota porque...", ["El texto es corto", "Las ideas no se conectan entre sí", "Tiene tildes", "Tiene título"], 1, "La coherencia enlaza las ideas con sentido.", ""),
          P("La retroalimentación útil...", ["Solo critica", "Señala logros y aspectos a mejorar con ejemplos", "Ignora el texto", "Es genérica"], 1, "La retroalimentación específica orienta la mejora.", ""),
          P("Revisar la ortografía evita...", ["Nada", "Errores que afectan la credibilidad", "Escribir más", "Perder tiempo"], 1, "La corrección ortográfica sostiene la confianza del lector.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Matemáticas ---------------- */
  G5.mate = [
    T(
      "Operaciones combinadas",
      "Resuelve problemas con operaciones combinadas respetando la jerarquía de operaciones.",
      "Resolver problemas con operaciones combinadas.",
      [
        D("Jerarquía", "Primero paréntesis, luego potencias, multiplicaciones/divisiones y al final sumas/restas.", "🔢"),
        D("Problema", "Identifico los datos y lo que piden antes de operar.", "🧭"),
        D("Verificar", "Reviso si el resultado tiene sentido en el contexto.", "✅"),
      ],
      [
        { id: "g5-m-1a", tipo: "explica", titulo: "Combinadas", n: 5, instr: "Aplica la jerarquía de operaciones.", params: { preguntas: [
          P("¿Cuánto es 3 + 4 × 2?", ["14", "11", "10", "12"], 1, "Primero 4×2=8, luego 3+8=11.", "Multiplicar va antes que sumar."),
          P("¿Cuánto es (6 + 2) × 3?", ["24", "14", "12", "18"], 0, "Primero el paréntesis: 8×3=24.", ""),
          P("¿Cuánto es 20 ÷ 4 + 6?", ["11", "9", "16", "26"], 0, "20÷4=5; 5+6=11.", ""),
          P("¿Cuánto es 2 × (10 - 3)?", ["17", "7", "14", "23"], 2, "10-3=7; 2×7=14.", ""),
          P("Para verificar un problema...", ["Entrego sin revisar", "Reviso si el resultado tiene sentido", "Cambio el enunciado", "Adivino"], 1, "La verificación detecta errores de procedimiento.", ""),
        ] } },
        { id: "g5-m-1b", tipo: "problem", titulo: "Problemas", n: 4, instr: "Escucha el problema y toca la respuesta.", params: { maxTotal: 20, op: "suma" } },
      ],
      null
    ),
    T(
      "Fracciones y decimales",
      "Opera fracciones con denominadores iguales y convierte entre fracciones y decimales.",
      "Fracciones y decimales.",
      [
        D("Sumar fracciones", "Con denominadores iguales, sumo numeradores: 2/5 + 1/5 = 3/5.", "➕"),
        D("Convertir", "1/2 = 0,5; 1/4 = 0,25; 3/10 = 0,3.", "🔁"),
        D("Decimales a fracción", "0,75 = 75/100 = 3/4.", "🔄"),
      ],
      [
        { id: "g5-m-2a", tipo: "explica", titulo: "Fracciones y decimales", n: 4, instr: "Opera y convierte.", params: { preguntas: [
          P("¿Cuánto es 3/8 + 2/8?", ["5/16", "5/8", "6/8", "1/8"], 1, "Mismo denominador: 3+2 = 5/8.", ""),
          P("¿Cuánto es 1/2 en decimal?", ["0,25", "0,5", "0,2", "1,5"], 1, "1 entre 2 = 0,5.", ""),
          P("0,25 como fracción es...", ["1/4", "1/2", "2/5", "1/5"], 0, "25 centésimos = 1/4.", ""),
          P("¿Cuánto es 7/10 - 3/10?", ["4/10", "4/20", "10/10", "1/4"], 0, "7-3 = 4; queda 4/10.", ""),
        ] } },
        { id: "g5-m-2b", tipo: "compare", titulo: "Comparar", n: 4, instr: "Compara y toca el mayor.", params: { rango: [10, 99] } },
      ],
      null
    ),
    T(
      "Porcentajes y proporcionalidad",
      "Calcula porcentajes iniciales y resuelve situaciones de proporcionalidad sencilla.",
      "Porcentajes en contextos iniciales; proporcionalidad sencilla.",
      [
        D("Por ciento", "50% = 50 de cada 100 = 1/2. 10% es la décima parte.", "💯"),
        D("Descuentos", "Un 20% de descuento reduce el precio en esa proporción.", "🏷️"),
        D("Proporcionalidad", "Si 3 cuadernos cuestan $9.000, 6 cuestan $18.000 (doble).", "⚖️"),
      ],
      [
        { id: "g5-m-3a", tipo: "explica", titulo: "Porcentajes", n: 4, instr: "Calcula porcentajes y proporciones.", params: { preguntas: [
          P("¿Cuánto es 50% de 40?", ["10", "20", "25", "40"], 1, "50% es la mitad: 20.", ""),
          P("¿Cuánto es 10% de 200?", ["10", "20", "2", "100"], 1, "10% es la décima parte: 20.", ""),
          P("Un precio de $20.000 con 20% de descuento queda en...", ["$16.000", "$18.000", "$4.000", "$22.000"], 0, "20% de 20.000 = 4.000; 20.000 - 4.000 = 16.000.", ""),
          P("Si 2 lápices cuestan $1.000, ¿cuánto cuestan 6?", ["$2.000", "$3.000", "$6.000", "$1.500"], 1, "Es el triple: $3.000.", ""),
        ] } },
        { id: "g5-m-3b", tipo: "addvisual", titulo: "Represento", n: 3, instr: "Junta los objetos, cuenta todos y toca el resultado.", params: { maxTotal: 20 } },
      ],
      null
    ),
    T(
      "Área, perímetro y probabilidad",
      "Calcula área y perímetro y se inicia en la probabilidad intuitiva.",
      "Área y perímetro; probabilidad intuitiva.",
      [
        D("Área del rectángulo", "Base × altura. Del cuadrado: lado × lado.", "🟩"),
        D("Probabilidad", "Qué tan probable es que algo pase: imposible, posible o seguro.", "🎲"),
        D("Casos", "Entre más resultados posibles hay, menor es la probabilidad de uno.", "🔢"),
      ],
      [
        { id: "g5-m-4a", tipo: "explica", titulo: "Área y probabilidad", n: 5, instr: "Calcula y razona.", params: { preguntas: [
          P("Un rectángulo de 8 cm × 4 cm tiene área...", ["12 cm²", "32 cm²", "24 cm²", "16 cm²"], 1, "8 × 4 = 32 cm².", ""),
          P("El área del cuadrado de lado 6 es...", ["12 cm²", "24 cm²", "36 cm²", "30 cm²"], 2, "6 × 6 = 36 cm².", ""),
          P("Lanzar una moneda: cara o cruz. La probabilidad de cara es...", ["Imposible", "1 de 2 (50%)", "Segura", "1 de 4"], 1, "Dos resultados igualmente probables.", ""),
          P("Sacar un 7 de un dado de 6 caras es...", ["Seguro", "Imposible", "Posible", "1 de 6"], 1, "El dado no tiene 7: es imposible.", ""),
          P("Entre una bolsa con 10 canicas rojas y otra con 1 roja, ¿dónde es más probable sacar roja?", ["En la de 10 rojas", "En la de 1 roja", "Igual", "Ninguna"], 0, "Mayor proporción de rojas = mayor probabilidad.", ""),
        ] } },
        { id: "g5-m-4b", tipo: "shapes", titulo: "Figuras y áreas", n: 3, instr: "Escucha el nombre y toca la figura.", params: { pool: ["cuadrado", "rectangulo", "triangulo", "circulo"] } },
      ],
      null
    ),
    T(
      "Patrones y expresiones numéricas",
      "Reconoce patrones numéricos y utiliza expresiones sencillas para representarlos.",
      "Patrones y expresiones numéricas.",
      [
        D("Patrón", "Una regla que se repite: 2, 4, 6, 8... (sumo 2).", "🔁"),
        D("Expresión", "Uso letras para la regla: n + 2, 2 × n.", "🔣"),
        D("Generalizar", "Encontrar la regla permite predecir cualquier término.", "🔮"),
      ],
      [
        { id: "g5-m-5a", tipo: "explica", titulo: "Patrones", n: 4, instr: "Descubre la regla y predice.", params: { preguntas: [
          P("En la secuencia 3, 6, 9, 12... la regla es...", ["Sumar 2", "Sumar 3", "Multiplicar por 2", "Sumar 1"], 1, "Cada término aumenta en 3: son múltiplos de 3.", ""),
          P("El siguiente término de 5, 10, 15, 20 es...", ["21", "25", "30", "24"], 1, "Se suma 5 cada vez: 25.", ""),
          P("Si la regla es 2 × n, para n = 7 el término es...", ["9", "14", "12", "16"], 1, "2 × 7 = 14.", ""),
          P("Generalizar permite...", ["Escribir más", "Predecir cualquier término de la secuencia", "Nada", "Copiar"], 1, "La regla permite calcular todos los términos.", ""),
        ] } },
        { id: "g5-m-5b", tipo: "pattern", titulo: "Sigo el patrón", n: 4, instr: "Mira el patrón y toca el elemento que viene.", params: {} },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Naturales ---------------- */
  G5.cnaturales = [
    T(
      "Sistemas del cuerpo humano",
      "Describe sistemas del cuerpo humano y su interacción para mantener la salud.",
      "Estudiar sistemas del cuerpo humano.",
      [
        D("Sistemas", "Circulatorio, respiratorio, digestivo, nervioso, óseo y muscular.", "❤️"),
        D("Interacción", "Los sistemas trabajan en conjunto: el corazón bombea, los pulmones oxigenan.", "🤝"),
        D("Salud", "Alimentación, ejercicio y descanso mantienen el equilibrio del cuerpo.", "🍎"),
      ],
      [
        { id: "g5-c-1a", tipo: "emparejar", titulo: "Sistemas", n: 1, instr: "Toca el sistema y su función principal.", params: {
          parejas: [
            { a: "CIRCULATORIO", b: "TRANSPORTA SANGRE" }, { a: "RESPIRATORIO", b: "INTERCAMBIA GASES" },
            { a: "DIGESTIVO", b: "PROCESA ALIMENTOS" }, { a: "NERVIOSO", b: "COORDINA LAS RESPUESTAS" },
            { a: "ÓSEO", b: "SOPORTA Y PROTEGE" }, { a: "MUSCULAR", b: "PERMITE EL MOVIMIENTO" },
          ],
        } },
        { id: "g5-c-1b", tipo: "explica", titulo: "Salud integral", n: 3, instr: "Relaciona hábitos y sistemas.", params: { preguntas: [
          P("El sistema nervioso...", ["Difiere las cosas", "Coordina las respuestas del cuerpo", "Dige alimentos", "Transporta sangre"], 1, "El cerebro y los nervios coordinan todo el organismo.", ""),
          P("Para mantener sano el sistema circulatorio conviene...", ["Sedentarismo", "Actividad física y alimentación equilibrada", "Comer grasa en exceso", "Dormir poco"], 1, "El ejercicio fortalece el corazón y mejora la circulación.", ""),
          P("Los huesos forman el sistema...", ["Nervioso", "Óseo", "Digestivo", "Respiratorio"], 1, "El esqueleto sostiene y protege órganos.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Reproducción y ciclos de vida",
      "Comprende reproducción de plantas y animales y su relación con los ciclos de vida.",
      "Reproducción y ciclos de vida.",
      [
        D("Reproducción", "Sexuada (semillas, huevos) y asexual (esquejes, yemas).", "🌱"),
        D("Polinización", "El polen viaja de la flor a la flor gracias a insectos y viento.", "🐝"),
        D("Ciclos", "Nacer, crecer, reproducirse y morir: el ciclo de todo ser vivo.", "🔄"),
      ],
      [
        { id: "g5-c-2a", tipo: "clasificar", titulo: "Tipos de reproducción", n: 1, instr: "Toca el ejemplo y su tipo de reproducción.", params: {
          categorias: [{ id: "sex", n: "Sexuada", icono: "🥚" }, { id: "asex", n: "Asexual", icono: "🌱" }],
          items: [
            { t: "HUEVO DE PAJARO", cat: "sex" }, { t: "ESQUEJE DE PLANTA", cat: "asex" },
            { t: "SEMILLA FERTILIZADA", cat: "sex" }, { t: "YEMA QUE BROTA", cat: "asex" },
            { t: "FRUTO CON SEMILLAS", cat: "sex" }, { t: "DIVISIÓN CELULAR", cat: "asex" },
          ],
        } },
        { id: "g5-c-2b", tipo: "explica", titulo: "Reproducción", n: 3, instr: "Analiza los procesos reproductivos.", params: { preguntas: [
          P("La polinización consiste en...", ["Cortar la flor", "Transportar polen de la antera al pistilo", "Regar la planta", "Podar"], 1, "Permite la fecundación de la flor.", ""),
          P("La reproducción asexual no requiere...", ["Agua", "Unión de gametos", "Luz", "Nutrientes"], 1, "Se genera un organismo genéticamente similar.", ""),
          P("Los polinizadores más importantes son...", ["Insectos y aves", "Piedras", "Viento solo", "Nada"], 0, "Abejas, mariposas y colibríes son claves.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Ecosistemas y equilibrio ambiental",
      "Analiza ecosistemas, su equilibrio y los problemas ambientales con explicaciones.",
      "Ecosistemas y equilibrio ambiental.",
      [
        D("Ciclos", "Agua, carbono y nitrógeno recorren el ecosistema.", "💧"),
        D("Impacto humano", "Contaminación, deforestación y sobreexplotación alteran el equilibrio.", "🏭"),
        D("Cuidados", "Reciclar, ahorrar agua y energía, y proteger especies cuidan el planeta.", "♻️"),
      ],
      [
        { id: "g5-c-3a", tipo: "clasificar", titulo: "Problemas ambientales", n: 1, instr: "Toca el problema y su causa o solución.", params: {
          categorias: [{ id: "pro", n: "Problema", icono: "⚠️" }, { id: "sol", n: "Solución", icono: "💚" }],
          items: [
            { t: "DEFORESTACIÓN", cat: "pro" }, { t: "CONTAMINACIÓN DEL AIRE", cat: "pro" },
            { t: "REFORESTAR", cat: "sol" }, { t: "USAR ENERGÍA LIMPIA", cat: "sol" },
            { t: "SOBREEXLOTACIÓN PESQUERA", cat: "pro" }, { t: "PROTEGER ÁREAS NATURALES", cat: "sol" },
          ],
        } },
        { id: "g5-c-3b", tipo: "explica", titulo: "Equilibrio ambiental", n: 4, instr: "Explica las relaciones ecológicas.", params: { preguntas: [
          P("El ciclo del agua depende de...", ["Solo la lluvia", "Evaporación, condensación y precipitación", "Los animales", "Nada"], 1, "Las tres etapas sostienen el ciclo.", ""),
          P("La deforestación...", ["No afecta el clima", "Aumenta la erosión y altera el clima", "Mejora el suelo", "Atrae lluvia"], 1, "Sin raíces, el suelo se erosiona y se pierde biodiversidad.", ""),
          P("La biodiversidad aporta...", ["Problemas", "Alimentos, medicinas y equilibrio ecológico", "Contaminación", "Nada"], 1, "Los ecosistemas diversos son más resilientes.", ""),
          P("Para cuidar un río, es importante...", ["Tirar basura", "Evitar contaminar y reforestar la ribera", "Pescar más", "Extraer arena"], 1, "La ribera protege la calidad del agua.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Circuitos, fuerzas e investigación",
      "Construye circuitos eléctricos sencillos y aplica el método de investigación científica.",
      "Circuitos eléctricos; fuerzas; procesos de investigación científica.",
      [
        D("Circuito", "Fuente, conductores y consumo (bombilla) forman un circuito cerrado.", "💡"),
        D("Series y paralelo", "En serie va uno tras otro; en paralelo, cada uno tiene su camino.", "🔌"),
        D("Investigación", "Observar, preguntar, hipotetizar, experimentar y concluir.", "🔬"),
      ],
      [
        { id: "g5-c-4a", tipo: "ordenar", titulo: "Método científico", n: 1, instr: "Ordena las etapas de la investigación.", params: { consigna: "Ordena las etapas de un proceso de investigación científica.", items: ["OBSERVO Y PREGUNTO", "FORMULO UNA HIPÓTESIS", "DISEÑO Y REALIZO EL EXPERIMENTO", "ANALIZO RESULTADOS Y CONCLUYO"] } },
        { id: "g5-c-4b", tipo: "explica", titulo: "Circuitos y ciencia", n: 4, instr: "Analiza circuitos y método.", params: { preguntas: [
          P("Para que una bombilla encienda, el circuito debe estar...", ["Abierto", "Cerrado", "Roto", "Sin cable"], 1, "La corriente necesita un camino cerrado.", ""),
          P("Si una lámpara se apaga en paralelo, las demás...", ["Se apagan", "Siguen encendidas", "Se queman", "No importa"], 1, "Cada componente tiene su camino independiente.", ""),
          P("La hipótesis es...", ["Un resultado", "Una explicación tentativa que puedo probar", "Un error", "Una medida"], 1, "Se contrasta con evidencia experimental.", ""),
          P("Una variable controlada es...", ["La que cambio", "La que mantengo fija", "La que mido al final", "Ninguna"], 1, "Controlar variables permite comparar resultados.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Ciencias Sociales ---------------- */
  G5.csociales = [
    T(
      "Historia de Colombia",
      "Analiza etapas y procesos históricos de Colombia según la secuencia curricular.",
      "Estudiar etapas y procesos de la historia de Colombia.",
      [
        D("Etapas", "Poblamiento prehispánico, conquista, colonia, independencia y república.", "📜"),
        D("Conflicto y paz", "El país ha transitado por el conflicto armado hacia procesos de paz.", "🕊️"),
        D("Memoria", "Conocer la historia permite construir un futuro más justo.", "🧠"),
      ],
      [
        { id: "g5-s-1a", tipo: "ordenar", titulo: "Etapas históricas", n: 1, instr: "Ordena las etapas de la historia de Colombia.", params: { consigna: "Ordena las etapas de la historia de Colombia.", items: ["POBLAMIENTO PREHISPÁNICO", "CONQUISTA ESPAÑOLA", "PERÍODO COLONIAL", "INDEPENDENCIA (1810-1819)", "REPÚBLICA Y CONSTITUCIÓN DE 1991"] } },
        { id: "g5-s-1b", tipo: "explica", titulo: "Historia y memoria", n: 3, instr: "Analiza procesos históricos.", params: { preguntas: [
          P("La Constitución de 1991 se caracteriza por...", ["Ser colonial", "Ser un Estado social de derecho con derechos amplios", "No existir", "Ser monárquica"], 1, "Reconoce derechos fundamentales y la diversidad cultural.", ""),
          P("Estudiar la historia del conflicto permite...", ["Olvidar", "Comprender causas y construir paz", "Repetir", "Justificar la violencia"], 1, "La memoria contribuye a la no repetición.", ""),
          P("Los pueblos indígenas...", ["No tuvieron cultura", "Tuvon organización, lengua y conocimiento propios", "Eran solo nómadas", "Desaparecieron antes de la colonia"], 1, "Aportaron conocimiento agrícola y espiritual al país.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Territorio y diversidad cultural",
      "Interpreta mapas, comprende la diversidad cultural y territorial y sus desafíos.",
      "Interpretar mapas; comprender diversidad cultural y territorial.",
      [
        D("Territorio", "El espacio donde se asientan las comunidades, con recursos y límites.", "🗺️"),
        D("Mestizaje", "Indígena, africana y europea se mezclaron en la cultura colombiana.", "🎭"),
        D("Desafíos", "Desigualdad, acceso a servicios y protección del territorio.", "⛰️"),
      ],
      [
        { id: "g5-s-2a", tipo: "clasificar", titulo: "Aportes culturales", n: 1, instr: "Toca el aporte y su raíz cultural.", params: {
          categorias: [{ id: "ind", n: "Raíz indígena", icono: "🌽" }, { id: "afr", n: "Raíz africana", icono: "🥁" }, { id: "eur", n: "Raíz europea", icono: "🏰" }],
          items: [
            { t: "MAÍZ Y YUCA", cat: "ind" }, { t: "CUMBIA", cat: "afr" }, { t: "LENGUA CASTELLANA", cat: "eur" },
            { t: "POTAJE Y CERÁMICA", cat: "ind" }, { t: "RASGOS MUSICALES DEL PACÍFICO", cat: "afr" }, { t: "ARQUITECTURA COLONIAL", cat: "eur" },
          ],
        } },
        { id: "g5-s-2b", tipo: "explica", titulo: "Territorio y cultura", n: 3, instr: "Analiza la relación entre territorio y cultura.", params: { preguntas: [
          P("La diversidad cultural colombiana se explica por...", ["Una sola raíz", "Aportes indígenas, afros y europeos", "Solo migración reciente", "El clima"], 1, "El mestizaje cultural es resultado de la historia.", ""),
          P("Un desafío territorial actual es...", ["No tener mapas", "La desigualdad en el acceso a servicios", "Tener mucha costa", "Poca población"], 1, "La equidad territorial sigue siendo un reto.", ""),
          P("El mapa permite...", ["Solo decorar", "Visualizar la distribución del territorio y sus recursos", "Medir clima", "Nada"], 1, "La cartografía apoya la planificación y el estudio.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Estado y participación ciudadana",
      "Conoce la organización del Estado y practica formas de participación ciudadana.",
      "Conocer la organización del Estado y practicar participación ciudadana.",
      [
        D("Constitución", "Es la norma superior: todo el Estado se rige por ella.", "📜"),
        D("Ramas", "Legislativa hace leyes, ejecutiva gobierna, judicial aplica justicia.", "🏛️"),
        D("Participar", "Voz, voto, proyectos comunitarios y control ciudadano.", "🙋"),
      ],
      [
        { id: "g5-s-3a", tipo: "emparejar", titulo: "Ramal del Estado", n: 1, instr: "Toca la rama y su función.", params: {
          parejas: [
            { a: "LEGISLATIVA", b: "HACE LAS LEYES" }, { a: "EJECUTIVA", b: "ADMINISTRA Y GOBIERNA" },
            { a: "JUDICIAL", b: "APLICA LA JUSTICIA" }, { a: "CONSTITUCIÓN", b: "NORMA SUPERIOR" },
            { a: "PARTICIPACIÓN", b: "VOZ Y VOTO CIUDADANO" },
          ],
        } },
        { id: "g5-s-3b", tipo: "explica", titulo: "Participación", n: 3, instr: "Piensa en cómo participar en tu comunidad.", params: { preguntas: [
          P("Participar ciudadanamente es...", ["Esperar que otros decidan", "Aportar ideas, votar y vigilar el bien común", "Quejarse en redes", "Nada"], 1, "La ciudadanía activa fortalece la democracia.", ""),
          P("Una junta de acción comunal...", ["No hace nada", "Gestiona mejoras para el barrio", "Es del gobierno nacional", "Es privada"], 1, "Organiza la comunidad local.", ""),
          P("Si la administración no cumple...", ["Nada se puede hacer", "Puedo pedir cuentas mediante mecanismos de participación", "Debo esperar siempre", "Hay que romper"], 1, "El control ciudadano es un derecho.", ""),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Inglés ---------------- */
  G5.ingles = [
    T(
      "Short texts and conversations",
      "Comprende textos y conversaciones breves sobre temas familiares.",
      "Inglés: comprender textos y conversaciones breves.",
      [
        D("Conversation", "Escucho el saludo, la pregunta y la respuesta para entender.", "🗣️"),
        D("Key words", "Las palabras clave me guían aunque no entienda cada palabra.", "🔑"),
        D("Short text", "Leo con preguntas claras: quién, qué, dónde, cuándo.", "📖"),
      ],
      [
        { id: "g5-i-1a", tipo: "explica", titulo: "Comprehension", n: 4, instr: "Lee y responde sobre el texto.", params: { preguntas: [
          P("«Anna: Hi Pedro! How are you? Pedro: I'm fine, thanks. Let's play soccer.» ¿Qué propone Pedro?", ["Estudiar", "Jugar fútbol", "Comer", "Irse"], 1, "«Let's play soccer» es una propuesta.", "", "en"),
          P("«Let's...» sirve para...", ["Preguntar la hora", "Proponer hacer algo juntos", "Despedirse", "Negar"], 1, "«Let's» introduce una sugerencia.", "", "en"),
          P("Si el texto dice «It's sunny and hot», el clima es...", ["Frío y nublado", "Soleado y caluroso", "Lluvioso", "Nevado"], 1, "Sunny = soleado; hot = caluroso.", "", "en"),
          P("Antes de responder, conviene...", ["Leer bien el texto", "Adivinar", "No leer", "Contar palabras"], 0, "La lectura atenta reduce errores.", "", "en"),
        ] } },
        { id: "g5-i-1b", tipo: "emparejar", titulo: "Weather", n: 1, instr: "Toca la palabra del clima y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "SUNNY", b: "SOLEADO", audio: "sunny" }, { a: "CLOUDY", b: "NUBLADO", audio: "cloudy" },
            { a: "RAINY", b: "LLUVIOSO", audio: "rainy" }, { a: "WINDY", b: "VENTOSO", audio: "windy" },
            { a: "COLD", b: "FRÍO", audio: "cold" }, { a: "HOT", b: "CALUROSO", audio: "hot" },
          ],
        } },
      ],
      null
    ),
    T(
      "Experiences and routines — Experiencias",
      "Habla de experiencias y rutinas con verbos en pasado simple.",
      "Inglés: describir experiencias y rutinas.",
      [
        D("Past simple", "I played (jugué), she visited (visitó). Los verbos regulares agregan -ed.", "⏪"),
        D("Irregular verbs", "Go→went, eat→ate, see→saw. Se aprenden practicando.", "🧩"),
        D("Time markers", "Yesterday, last week, when I was young indican pasado.", "📅"),
      ],
      [
        { id: "g5-i-2a", tipo: "emparejar", titulo: "Past verbs", n: 1, instr: "Toca el verbo en pasado y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "WENT", b: "FUI (go)", audio: "went" }, { a: "ATE", b: "COMÍ (eat)", audio: "ate" },
            { a: "SAW", b: "VI (see)", audio: "saw" }, { a: "PLAYED", b: "JUGUÉ (play)", audio: "played" },
            { a: "VISITED", b: "VISITÉ (visit)", audio: "visited" },
          ],
        } },
        { id: "g5-i-2b", tipo: "explica", titulo: "Past simple", n: 4, instr: "Completa con el pasado correcto.", params: { preguntas: [
          P("Yesterday I ___ to the park", ["go", "went", "gone", "goed"], 1, "«Went» es el pasado irregular de go.", "", "en"),
          P("She ___ a delicious cake", ["eat", "ate", "eated", "eaten"], 1, "«Ate» es el pasado de eat.", "", "en"),
          P("We ___ our friends last week", ["visit", "visited", "visiting", "visits"], 1, "Los verbos regulares agregan -ed.", "", "en"),
          P("¿Cuál marca el pasado?", ["tomorrow", "yesterday", "now", "always"], 1, "«Yesterday» indica un hecho anterior.", "", "en"),
        ] } },
      ],
      null
    ),
    T(
      "Opinions and paragraphs — Opiniones",
      "Expresa opiniones sencillas y escribe párrafos básicos en inglés.",
      "Inglés: expresar opiniones y escribir párrafos básicos.",
      [
        D("Opinions", "I think... (pienso que), I believe... (creo que), In my opinion... (en mi opinión).", "💭"),
        D("Agree / disagree", "I agree (estoy de acuerdo), I disagree (no estoy de acuerdo).", "🤝"),
        D("Paragraph", "Presento la idea, doy razones y cierro.", "📝"),
      ],
      [
        { id: "g5-i-3a", tipo: "emparejar", titulo: "Opinions", n: 1, instr: "Toca la frase y su significado.", params: {
          voz: "en",
          parejas: [
            { a: "I THINK", b: "PIENSO QUE", audio: "i think" }, { a: "IN MY OPINION", b: "EN MI OPINIÓN", audio: "in my opinion" },
            { a: "I AGREE", b: "ESTOY DE ACUERDO", audio: "i agree" }, { a: "I DISAGREE", b: "NO ESTOY DE ACUERDO", audio: "i disagree" },
            { a: "BECAUSE", b: "PORQUE", audio: "because" },
          ],
        } },
        { id: "g5-i-3b", tipo: "escribir", titulo: "My paragraph", n: 1, instr: "Escribe un párrafo corto en inglés.", params: { consigna: "Escribe un párrafo corto en inglés sobre tu rutina o tu opinión (mínimo 3 frases).", min: 3, ejemplo: "I like sports because they are fun. I play soccer on Saturdays. My team is very good." } },
        { id: "g5-i-3c", tipo: "explica", titulo: "Opinion sentences", n: 3, instr: "Completa la opinión correcta.", params: { preguntas: [
          P("«In my opinion, reading is...»", ["boring always", "interesting", "no", "I go"], 1, "La opinión se completa con un adjetivo.", "", "en"),
          P("Para dar una razón uso...", ["because", "yesterday", "where", "who"], 0, "«Because» introduce la causa.", "", "en"),
          P("«I disagree» significa...", ["Estoy de acuerdo", "No estoy de acuerdo", "No sé", "Me voy"], 1, "Disagree expresa desacuerdo.", "", "en"),
        ] } },
      ],
      null
    ),
  ];

  /* ---------------- Tecnología ---------------- */
  G5.tecnologia = [
    T(
      "Proyectos y programación",
      "Resuelve necesidades mediante proyectos digitales y programa secuencias por bloques.",
      "Tecnología: proyectos; programar secuencias y eventos por bloques.",
      [
        D("Bloques", "Arrastro bloques de acciones, ciclos y eventos para crear programas.", "🧱"),
        D("Eventos", "Un evento dispara una acción: al presionar bandera, ejecutar.", "🏁"),
        D("Iterar", "Repetir bloques evita escribir lo mismo muchas veces.", "🔁"),
      ],
      [
        { id: "g5-t-1a", tipo: "ordenar", titulo: "Secuencia del programa", n: 1, instr: "Ordena los bloques para que el personaje llegue a la meta.", params: { consigna: "Ordena los bloques del programa.", items: ["AL PRESIONAR LA BANDERA", "AVANZAR 100 PASOS", "REPETIR 3 VECES: GIRAR 90°", "DECIR «LLEGUÉ»"] } },
        { id: "g5-t-1b", tipo: "explica", titulo: "Programación por bloques", n: 3, instr: "Razona sobre la secuencia.", params: { preguntas: [
          P("El bloque «repetir 4 veces» permite...", ["Ejecutar 4 acciones distintas", "Repetir el mismo bloque varias veces sin escribirlo otra vez", "Borrar el programa", "Detener el juego"], 1, "Los ciclos ahorran trabajo y evitan errores.", ""),
          P("Si pongo «girar 90°» cuatro veces...", ["Vuelvo al inicio de la orientación", "Giro más", "Nada", "Se rompe"], 0, "4 × 90° = 360°: vuelta completa.", ""),
          P("Un evento es...", ["Un error", "Un disparador que inicia la acción", "Un color", "Un sonido siempre"], 1, "Los eventos conectan entrada del usuario y programa.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Fuentes y ciudadanía digital",
      "Evalúa fuentes digitales, crea contenidos y practica privacidad y seguridad.",
      "Tecnología: evaluar fuentes; seguridad, privacidad y ciudadanía digital.",
      [
        D("Fuentes confiables", "Revisan autor, fecha y evidencias antes de publicar.", "🔎"),
        D("Ciberbullying", "Nadie debe ser humillado en línea; hay que actuar.", "🛡️"),
        D("Huella digital", "Lo que publico queda y define mi reputación online.", "👣"),
      ],
      [
        { id: "g5-t-2a", tipo: "clasificar", titulo: "Fuentes y prácticas", n: 1, instr: "Toca la práctica y si es confiable o riesgosa.", params: {
          categorias: [{ id: "conf", n: "Confiable / segura", icono: "✅" }, { id: "ries", n: "Riesgosa", icono: "⚠️" }],
          items: [
            { t: "VER AUTOR Y FECHA", cat: "conf" }, { t: "COMPARTIR DATOS PERSONALES", cat: "ries" },
            { t: "CRUZAR INFORMACIÓN EN DOS FUENTES", cat: "conf" }, { t: "CREAR CONTRASEÑAS FÁCILES", cat: "ries" },
            { t: "AVISAR A UN ADULTO ANTE UNA AMENAZA", cat: "conf" },
          ],
        } },
        { id: "g5-t-2b", tipo: "explica", titulo: "Ciudadanía digital", n: 4, instr: "Piensa en tu conducta en línea.", params: { preguntas: [
          P("Antes de compartir una noticia, debo...", ["Compartirla rápido", "Verificar autor, fecha y fuentes", "Cambiarle el título", "No leerla"], 1, "La verificación combate la desinformación.", ""),
          P("Si recibo mensajes que me insultan...", ["Respondo igual", "Guardo evidencia y aviso a un adulto", "Me quedo en silencio", "Borro mi cuenta"], 1, "El ciberacoso debe reportarse.", ""),
          P("Una contraseña segura...", ["Es «1234»", "Combina letras, números y signos", "La comparto", "Es mi nombre"], 1, "La seguridad de la cuenta depende de ella.", ""),
          P("Mi huella digital...", ["Desaparece siempre", "Permanece y afecta mi reputación", "No existe", "Solo la ve yo"], 1, "Publicar con criterio protege el futuro.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Condicionales: si... entonces...",
      "Comprende decisiones tipo «si... entonces...» en algoritmos y en la vida.",
      "Tecnología: pensamiento computacional, condicionales.",
      [
        D("Si pasa esto...", "Un condicional evalúa algo: si llueve, entonces...", "🌧️"),
        D("Entonces hago esto", "Cada condición tiene su acción: si llueve, entonces me pongo el impermeable.", "🧥"),
        D("Lo uso a diario", "«Si suena el timbre, entonces abro la puerta»: es un condicional.", "🔔"),
      ],
      [
        { id: "g5-t-3a", tipo: "ordenar", titulo: "Decido con si... entonces", n: 1, instr: "Ordena los pasos de una decisión condicional.", params: {
          consigna: "Ordena: 1) leo la condición («si llueve»), 2) evalúo si se cumple, 3) elijo la acción («entonces...»), 4) ejecuto.",
          items: ["Leo la condición: «si llueve»", "Evalúo si se cumple", "Elijo la acción: «entonces...»", "Ejecuto la acción elegida"],
        } },
        { id: "g5-t-3b", tipo: "explica", titulo: "Condicionales", n: 3, instr: "Responde sobre decisiones condicionales.", params: { preguntas: [
          P("En «si termino la tarea, entonces juego», ¿qué es la condición?", ["Juego", "Termino la tarea", "El recreo", "Ninguna"], 1, "La condición es lo que debe cumplirse antes de pasar a la acción.", ""),
          P("Si NO se cumple la condición...", ["ejecuto la acción igual", "busco la alternativa", "el programa se rompe", "no hay nada que hacer nunca"], 1, "Los condicionales también tienen ruta alternativa (lo «si no»).", ""),
          P("¿Dónde usas condicionales en la vida?", ["Solo en la computadora", "Al decidir según la situación", "En ningún lugar", "Solo en los exámenes"], 1, "Decidir según lo que pasa es algo que hacemos todo el tiempo.", ""),
        ] } },
      ],
      [EXP("Pienso con condicionales", [
        P("Un condicional evalúa...", ["una condición", "un color", "una canción", "un dibujo"], 0, "Evaluar si algo se cumple abre el camino a la acción correcta.", ""),
        P("«Si practico, entonces mejoro» significa que...", ["el esfuerzo tiene recompensa", "nada importa", "mejoro sin hacer nada", "practicar estorba"], 0, "La relación causa-consecuencia guía decisiones útiles.", ""),
        P("Cuando cambio la condición...", ["cambia la acción", "nada cambia", "todo se rompe", "se pierde"], 0, "Distinta condición, distinta acción: así se ramifica un algoritmo.", ""),
      ]) ],
      null
    ),
    T(
      "Tablas y datos",
      "Organiza información en tablas sencillas y las interpreta.",
      "Tecnología: organización de datos.",
      [
        D("Tabla", "Una tabla guarda información en filas y columnas para leerla fácil.", "📊"),
        D("Columnas", "Las columnas dicen qué dato es: nombre, color, cantidad.", "🧾"),
        D("Interpretar", "Interpretar es leer la tabla y sacar conclusiones.", "🔍"),
      ],
      [
        { id: "g5-t-4a", tipo: "clasificar", titulo: "Nombre o cantidad", n: 1, instr: "Toca el tipo de dato y después cada celda.", params: {
          categorias: [
            { id: "nom", n: "NOMBRE", icono: "🏷️" },
            { id: "can", n: "CANTIDAD", icono: "🔢" },
          ],
          items: [
            { t: "ANA", cat: "nom" },
            { t: "5 LÁPICES", cat: "can" },
            { t: "LUIS", cat: "nom" },
            { t: "3 CANICAS", cat: "can" },
          ],
        } },
        { id: "g5-t-4b", tipo: "explica", titulo: "Leo tablas", n: 3, instr: "Responde sobre tablas de datos.", params: { preguntas: [
          P("¿Qué son las columnas de una tabla?", ["Los renglones", "Las categorías de dato", "Los colores", "Los títulos"], 1, "Cada columna clasifica un tipo de dato.", ""),
          P("¿Para qué sirve una tabla?", ["Para ordenar y comparar información", "Para dibujar", "Para jugar", "Para decorar"], 0, "La tabla ordena datos y facilita sacar conclusiones.", ""),
          P("Si quiero saber qué color es el más frecuente...", ["miro la columna de color y cuento", "no se puede", "miro el nombre", "adivino"], 0, "Contar frecuencias en la columna revela patrones.", ""),
        ] } },
      ],
      [EXP("Datos que hablan", [
        P("Una tabla organiza datos en...", ["filas y columnas", "párrafos", "dibujos", "oraciones"], 0, "La estructura de filas y columnas es la clave de la tabla.", ""),
        P("Interpretar una tabla es...", ["dibujarla", "leerla y sacar conclusiones", "borrarla", "copiarla"], 1, "La interpretación convierte datos en información útil.", ""),
        P("Los datos bien organizados...", ["no sirven", "ayudan a decidir mejor", "confunden", "ocupan espacio"], 1, "Organizar datos es el primer paso del pensamiento analítico.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Artística ---------------- */
  G5.artistica = [
    T(
      "Proyectos creativos combinados",
      "Desarrolla proyectos creativos combinando técnicas y mensajes intencionales.",
      "Educación artística: desarrollar proyectos creativos; combinar técnicas.",
      [
        D("Intención", "El arte puede comunicar ideas: pienso qué quiero decir antes de crear.", "💭"),
        D("Técnicas combinadas", "Dibujo + pintura + collage dan profundidad a la obra.", "🎨"),
        D("Proceso", "Boceto, producción, ajustes y presentación.", "🔄"),
      ],
      [
        { id: "g5-a-1a", tipo: "ordenar", titulo: "Proceso creativo", n: 1, instr: "Ordena las fases de un proyecto artístico.", params: { consigna: "Ordena las fases de un proyecto artístico.", items: ["DEFINO EL MENSAJE", "HAGO BOCETOS", "PRODUZCO LA OBRA CON TÉCNICAS COMBINADAS", "EVALÚO Y PRESENTO"] } },
        { id: "g5-a-1b", tipo: "explica", titulo: "Arte con intención", n: 3, instr: "Analiza decisiones artísticas.", params: { preguntas: [
          P("Una obra con intención...", ["Surge sin plan", "Comunica un mensaje elegido por el autor", "Es solo decorativa", "No tiene técnica"], 1, "La intención guía las decisiones formales.", ""),
          P("Combinar técnicas permite...", ["Nada nuevo", "Lograr texturas y profundidad", "Gastar más", "Reducir la obra"], 1, "El mixed media enriquece el resultado.", ""),
          P("Evaluar mi obra implica...", ["Borrarla siempre", "Comparar el resultado con la intención y ajustar", "No revisarla", "Entregar sin más"], 1, "La metacreativa mejora la producción.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Aprecio y explicación de obras",
      "Aprecia obras de distintas épocas y comunidades y explica sus decisiones creativas.",
      "Educación artística: apreciar obras y explicar decisiones.",
      [
        D("Obras y contexto", "Cada obra refleja su época, comunidad e intención.", "🖼️"),
        D("Explicar", "Puedo explicar por qué una obra me gusta usando conceptos aprendidos.", "💬"),
        D("Comunidades", "El arte de las comunidades locales expresa identidad y memoria.", "🌍"),
      ],
      [
        { id: "g5-a-2a", tipo: "explica", titulo: "Apreciación artística", n: 4, instr: "Analiza obras y comunidades.", params: { preguntas: [
          P("Apreciar una obra implica...", ["Decir si es bonita", "Analizar técnica, intención y contexto", "Copiarla", "Ignorarla"], 1, "La apreciación usa criterios conceptuales.", ""),
          P("El arte de una comunidad refleja...", ["Solo estética", "Su identidad, historia y valores", "Modas globales únicamente", "Nada"], 1, "La expresión artística es patrimonio vivo.", ""),
          P("Explicar una decisión creativa ayuda a...", ["No", "Comprender el proceso y comunicar mejor", "Perder tiempo", "Copiar"], 1, "Explicitar decisiones fortalece el pensamiento crítico.", ""),
          P("Las épocas artísticas...", ["No influyen", "Condicionan técnicas y temas", "Son iguales", "No existen"], 1, "El contexto histórico permea la creación.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Composición con perspectiva",
      "Representa cerca y lejos en un dibujo usando tamaño y posición.",
      "Educación artística: perspectiva en la composición.",
      [
        D("Cerca se ve grande", "Lo que está cerca lo dibujo más grande y hacia abajo.", "⛰️"),
        D("Lejos se ve pequeño", "Lo lejeno va arriba y más pequeño, casi en el horizonte.", "🏔️"),
        D("Superposición", "Si un objeto tapa a otro, el que tapa está más cerca.", "🧱"),
      ],
      [
        { id: "g5-a-3a", tipo: "ordenar", titulo: "Armo mi paisaje", n: 1, instr: "Ordena los pasos para dibujar con perspectiva.", params: {
          consigna: "Ordena: 1) dibujo el fondo lejano, 2) añado lo intermedio, 3) pongo lo más cerca y grande, 4) coloro y sombrea.",
          items: ["Dibujo el fondo lejano", "Añado los elementos intermedios", "Pongo lo más cerca, más grande", "Coloro y sombreo para dar volumen"],
        } },
        { id: "g5-a-3b", tipo: "explica", titulo: "Perspectiva", n: 3, instr: "Responde sobre cerca y lejos en el dibujo.", params: { preguntas: [
          P("¿Cómo dibujas algo que está lejos?", ["Más grande y abajo", "Más pequeño y arriba", "Igual siempre", "Sin tocar el papel"], 1, "Lo lejano se representa más pequeño y más arriba en la hoja.", ""),
          P("Si una montaña tapa un árbol...", ["el árbol está más cerca", "la montaña está más cerca", "están igual", "no se sabe"], 1, "La superposición indica quién está más adelante.", ""),
          P("¿Qué da sensación de profundidad?", ["Dejar todo igual", "Tamaño y posición variables", "Un solo color", "Bordes gruesos"], 1, "Variar tamaño y posición crea la ilusión de profundidad.", ""),
        ] } },
      ],
      [EXP("Dibujo con profundidad", [
        P("Lo cercano se dibuja...", ["pequeño", "grande y abajo", "arriba", "difuso"], 1, "El tamaño grande y la posición baja simulan cercanía.", ""),
        P("El horizonte marca...", ["el borde de la hoja", "el punto donde lo lejano se encuentra", "el color", "la firma"], 1, "El horizonte separa tielo tierra y organiza la profundidad.", ""),
        P("Sombrear ayuda a...", ["perder el dibujo", "dar volumen", "apurar", "confundir"], 1, "La luz y la sombra modelan las formas con volumen.", ""),
      ]) ],
      null
    ),
    T(
      "La música que cuenta quiénes somos",
      "Reconoce cómo la música y la danza expresan la identidad cultural.",
      "Educación artística: identidad y cultura.",
      [
        D("Música de identidad", "Cada región tiene su música: es parte de su identidad y de su historia.", "🌎"),
        D("Danza y vestuario", "Los vestuarios y los pasos de la danza cuentan de dónde venimos.", "💃"),
        D("Yo creo", "También puedo crear ritmos y pasos que cuenten mi propia historia.", "✨"),
      ],
      [
        { id: "g5-a-4a", tipo: "emparejar", titulo: "Ritmo y región", n: 1, instr: "Toca el ritmo y después su región.", params: {
          parejas: [
            { a: "CUMBIA", b: "COSTA COLOMBIANA" },
            { a: "BAMBUCO", b: "REGIÓN ANDINA" },
            { a: "JOROPO", b: "LLANOS" },
          ],
        } },
        { id: "g5-a-4b", tipo: "explica", titulo: "Música e identidad", n: 2, instr: "Responde sobre música y cultura.", params: { preguntas: [
          P("¿Por qué la música expresa la identidad?", ["Porque describe la historia y los sentimientos de un pueblo", "Porque hace ruido", "Porque es larga", "Porque usa instrumentos"], 0, "La música recoge vivencias, lenguaje y memoria de una comunidad.", ""),
          P("Si quiero contar mi historia con música...", ["invento ritmos y letras propias", "no puedo", "copio sin más", "espero"], 0, "Crear es una forma legítima de expresar quién soy.", ""),
        ] } },
      ],
      [EXP("Cultura que suena", [
        P("Cada región de Colombia tiene...", ["la misma música", "ritmos propios que expresan su identidad", "ninguna música", "solo ruido"], 1, "La diversidad musical refleja la diversidad de su gente.", ""),
        P("El joropo es danza de...", ["los llanos", "la costa", "la selva", "Europa"], 0, "El joropo llanero es danza y música de gran arraigo.", ""),
        P("Crear ritmos propios...", ["es imposible", "es una forma de contar quién soy", "está prohibido", "es solo para músicos"], 1, "La creación musical comunica identidad y emociones.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Física ---------------- */
  G5.efisica = [
    T(
      "Juegos deportivos adaptados",
      "Participa en juegos deportivos adaptados, comprendiendo estrategias básicas.",
      "Educación física: participar en juegos deportivos adaptados; estrategias básicas.",
      [
        D("Adaptados", "Los juegos se ajustan a las capacidades de todos para incluir.", "🤝"),
        D("Estrategia", "Posiciones, pases y tiempos definen el juego colectivo.", "🧠"),
        D("Inclusión", "Todos deben poder jugar y disfrutar.", "🌈"),
      ],
      [
        { id: "g5-f-1a", tipo: "explica", titulo: "Deporte y estrategia", n: 4, instr: "Piensa en el juego colectivo.", params: { preguntas: [
          P("Un juego adaptado busca...", ["Excluir", "Incluir a todos ajustando las reglas", "Ganar siempre", "Nada"], 1, "La inclusión es el objetivo pedagógico.", ""),
          P("Una estrategia colectiva requiere...", ["Individualismo", "Comunicación y distribución de roles", "Ruido", "Suerte"], 1, "La coordinación mejora el rendimiento.", ""),
          P("Después de un partido conviene...", ["No estirarse", "Enfriar, estirar e hidratarse", "Comer chatarra", "Dormir enseguida"], 1, "La recuperación es parte del entrenamiento.", ""),
          P("Respetar al rival significa...", ["Ignorarlo", "Saludar, jugar limpio y aceptar el resultado", "Ganar a toda costa", "No jugar"], 1, "El respeto sostiene el juego.", ""),
        ] } },
        { id: "g5-f-1b", tipo: "ordenar", titulo: "Partido seguro", n: 1, instr: "Ordena las fases de un encuentro deportivo.", params: { consigna: "Ordena las fases de un encuentro deportivo seguro.", items: ["CALENTAMIENTO", "REGLAS Y EQUIPOS", "JUEGO O PARTIDO", "ENFRIAMIENTO Y EVALUACIÓN"] } },
      ],
      null
    ),
    T(
      "Hábitos saludables para toda la vida",
      "Comprende hábitos saludables, cuida el cuerpo y respeta la diversidad de habilidades.",
      "Educación física: hábitos saludables; cuidar el cuerpo; respetar la diversidad.",
      [
        D("Hábitos", "Actividad, alimentación, sueño e higiene sostienen la salud.", "🍎"),
        D("Prevención", "Prevenir lesiones y enfermedades es más fácil que curarlas.", "🛡️"),
        D("Diversidad", "Hay capacidades distintas; todas merecen respeto y participación.", "🌈"),
      ],
      [
        { id: "g5-f-2a", tipo: "explica", titulo: "Salud y respeto", n: 4, instr: "Elige la opción más saludable y respetuosa.", params: { preguntas: [
          P("Un hábito saludable sostenible...", ["Es un esfuerzo aislado", "Se practica con frecuencia y se integra a la vida", "Es una dieta", "No existe"], 1, "Los hábitos duraderos se construyen con constancia.", ""),
          P("Si un compañero tiene una discapacidad...", ["No debe jugar", "Se adapta la actividad para que participe", "Se burlan", "No se le ve"], 1, "La adaptación garantiza el derecho a la actividad.", ""),
          P("Para prevenir lesiones...", ["Caliento y uso protección", "Juego sin calentar", "Ignoro el dolor", "No hago nada"], 1, "La prevención protege el cuerpo.", ""),
          P("El descanso...", ["Es pérdida de tiempo", "Permite la recuperación y el aprendizaje", "Solo es para niños", "Nunca es necesario"], 1, "El cuerpo se repara durante el descanso.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Entrenamiento y metas",
      "Diseña una rutina sencilla de ejercicio y fija metas personales.",
      "Educación física: entrenamiento y autocuidado.",
      [
        D("Meta", "Una meta es algo concreto que quiero lograr: «correr 10 minutos sin parar».", "🎯"),
        D("Rutina", "Una rutina es mi plan de ejercicio: qué hago, cuánto y cada cuándo.", "🗓️"),
        D("Progreso", "Anotar mi progreso me motiva y me muestra cuánto he mejorado.", "📈"),
      ],
      [
        { id: "g5-f-3a", tipo: "ordenar", titulo: "Planifico mi entrenamiento", n: 1, instr: "Ordena los pasos para entrenar con meta.", params: {
          consigna: "Ordena: 1) fijo mi meta, 2) armo mi rutina, 3) la pongo en práctica, 4) anoto mi progreso.",
          items: ["Fijo mi meta", "Armo mi rutina", "La pongo en práctica", "Anoto mi progreso"],
        } },
        { id: "g5-f-3b", tipo: "explica", titulo: "Metas alcanzables", n: 3, instr: "Responde sobre metas y rutinas.", params: { preguntas: [
          P("¿Cuál es una buena meta personal?", ["«Volverme campeón mañana»", "«Correr 10 minutos sin parar en un mes»", "«No hacer nada»", "«Ganarle a todos»"], 1, "Una meta concreta y alcanzable motiva y orienta el esfuerzo.", ""),
          P("¿Qué es una rutina de ejercicio?", ["Mi plan de qué hago y cada cuándo", "Un partido", "Un descanso total", "Un castigo"], 0, "La rutina ordena el entrenamiento con constancia.", ""),
          P("¿Por qué anoto mi progreso?", ["Para compararme con otros", "Para ver mi evolución y motivarme", "Porque me obligan", "No sirve"], 1, "El registro personal muestra avances y sostiene la constancia.", ""),
        ] } },
      ],
      [EXP("Entreno con intención", [
        P("Fijar metas...", ["no cambia nada", "orienta mi esfuerzo", "aburre", "es para adultos"], 1, "Las metas convierten el ejercicio en un camino con rumbo.", ""),
        P("Si mi meta se ve lejos, la divido en...", ["nada", "metas pequeñas y cercanas", "otras más lejanas", "excusas"], 1, "Las metas por etapas hacen el logro posible y celebrable.", ""),
        P("La constancia se logra...", ["esperando el ánimo", "entrenando con regularidad", "de un solo intento", "olvidando la meta"], 1, "La práctica regular transforma el cuerpo y la mente.", ""),
      ]) ],
      null
    ),
    T(
      "Deporte y juego colectivo",
      "Participa en juegos colectivos aplicando estrategias y valores del deporte.",
      "Educación física: deporte y valores.",
      [
        D("Estrategia", "En equipo acordamos un plan: quién defiende, quién ataca, quién pasa.", "🧠"),
        D("Juego limpio", "Juego limpio es aceptar al árbitro, no hacer trampa y felicitar al rival.", "🤝"),
        D("Todos juegan", "En el equipo todos participan, no solo los más habilidosos.", "👥"),
      ],
      [
        { id: "g5-f-4a", tipo: "clasificar", titulo: "Estrategia o juego limpio", n: 1, instr: "Toca la categoría y después cada acción.", params: {
          categorias: [
            { id: "est", n: "ES ESTRATEGIA", icono: "🧠" },
            { id: "lim", n: "ES JUEGO LIMPIO", icono: "🤝" },
          ],
          items: [
            { t: "ACUERDAMOS QUIÉN PASA Y QUIÉN ATACA", cat: "est" },
            { t: "ACEPTO LA DECISIÓN DEL ÁRBITRO", cat: "lim" },
            { t: "NOS REPARTIMOS LAS POSICIONES", cat: "est" },
            { t: "FELICITO AL RIVAL AL TERMINAR", cat: "lim" },
          ],
        } },
        { id: "g5-f-4b", tipo: "explica", titulo: "Deporte con valores", n: 3, instr: "Responde sobre estrategia y valores.", params: { preguntas: [
          P("¿Por qué acordar una estrategia ayuda al equipo?", ["Porque ordena el juego y aprovecha a cada jugador", "Porque aburre", "Porque enoja", "No ayuda"], 0, "El plan colectivo convierte talentos individuales en equipo.", ""),
          P("Si el árbitro marca algo que no me gusta...", ["protesto y juego", "acepto su decisión y sigo", "me voy", "hago trampa"], 1, "Respetar al árbitro sostiene el juego justo.", ""),
          P("En un buen equipo...", ["juegan solo los mejores", "todos participan", "nadie pasa el balón", "se ríen del novato"], 1, "El deporte colectivo incluye y hace crecer a todos.", ""),
        ] } },
      ],
      [EXP("Juego que educa", [
        P("La estrategia de equipo...", ["es perder el tiempo", "aprovecha los talentos de cada jugador", "solo sirve en la final", "no existe"], 1, "Planear juntos multiplica las posibilidades.", ""),
        P("Felicitar al rival después de perder...", ["es de tontos", "es juego limpio y respeto", "no sirve", "es humillante"], 1, "El respeto al rival dignifica la competencia.", ""),
        P("Hacer trampa...", ["ayuda a ganar de verdad", "lastima el juego y al equipo", "es hábil", "es normal"], 1, "La trampa destruye la confianza y el sentido del deporte.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Ética y Valores ---------------- */
  G5.etica = [
    T(
      "Dilemas y derechos humanos",
      "Analiza dilemas cotidianos y reconoce derechos humanos universales.",
      "Ética: analizar dilemas; reconocer derechos humanos.",
      [
        D("Dilema", "Situación donde dos opciones tienen razones a favor y en contra.", "⚖️"),
        D("Derechos humanos", "Son universales: dignidad, educación, salud, libertad.", "📜"),
        D("Argumentar", "En un dilema, lo importante es razonar con principios éticos.", "💬"),
      ],
      [
        { id: "g5-e-1a", tipo: "explica", titulo: "Dilemas", n: 4, instr: "Analiza dilemas y derechos.", params: { preguntas: [
          P("Un amigo me pide copiar la tarea. ¿Qué hago?", ["Le copio", "Le explico cómo resolverlo sin copiar", "Lo reto", "Lo grabo"], 1, "Ayudar sin resolver por el otro es la opción justa.", ""),
          P("Los derechos humanos...", ["Son solo locales", "Son universales e inalienables", "Son para algunos", "Son recientes"], 1, "Pertenecen a toda persona por el solo hecho de existir.", ""),
          P("Al analizar un dilema, debo...", ["Decidir rápido", "Considerar a todos los involucrados", "Ignorar consecuencias", "Imponer"], 1, "El análisis ético mira el bienestar común.", ""),
          P("La dignidad humana significa...", ["Tener cosas", "Que cada persona merece respeto", "Ganar", "Tener poder"], 1, "Es el fundamento de los derechos.", ""),
        ] } },
      ],
      null
    ),
    T(
      "Convivencia y compromiso",
      "Propone soluciones a problemas de convivencia y asume compromisos verificables.",
      "Ética: proponer soluciones a problemas de convivencia.",
      [
        D("Convivencia", "Vivir juntos requiere acuerdos, respeto y reparación.", "🤝"),
        D("Compromiso", "Un compromiso claro es específico, verificable y con plazo.", "📌"),
        D("Reparar", "Reparar el daño es parte de asumir responsabilidades.", "🛠️"),
      ],
      [
        { id: "g5-e-2a", tipo: "explica", titulo: "Compromisos", n: 4, instr: "Propón soluciones justas.", params: { preguntas: [
          P("Un buen compromiso es...", ["Vago", "Específico y verificable", "Imposible", "Solo mío"], 1, "Los acuerdos claros permiten evaluar su cumplimiento.", ""),
          P("Si dañé algo de otro, debo...", ["Esconderlo", "Reconocerlo, pedir perdón y reparar el daño", "Culpar a otro", "Olvidarlo"], 1, "La reparación restaura la confianza.", ""),
          P("Para resolver un conflicto de convivencia...", ["Golpear", "Dialogar, buscar acuerdos y cumplirlos", "Vengarme", "Irme"], 1, "El diálogo y el acuerdo sostienen la convivencia.", ""),
          P("Escuchar al otro con paciencia...", ["Es perder", "Mejora la comprensión y evita malentendidos", "No sirve", "Es debilidad"], 1, "La escucha es el primer paso del diálogo.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Decido pensando en valores",
      "Aplica un proceso para tomar decisiones considerando valores y consecuencias.",
      "Ética: toma de decisiones.",
      [
        D("Paro a pensar", "Antes de decidir, paro: no actúo por puro impulso del momento.", "⏸️"),
        D("Veo consecuencias", "Pienso qué pasará después, para mí y para los demás.", "💭"),
        D("Elijo con valores", "Elijo la opción más honesta, justa y amable, aunque sea difícil.", "💛"),
      ],
      [
        { id: "g5-e-3a", tipo: "ordenar", titulo: "Mi proceso para decidir", n: 1, instr: "Ordena los pasos para decidir bien.", params: {
          consigna: "Ordena: 1) paro y respiro, 2) pienso en opciones, 3) veo consecuencias, 4) elijo con valores y asumo.",
          items: ["Paro y respiro", "Pienso en las opciones posibles", "Veo las consecuencias para todos", "Elijo con valores y asumo la decisión"],
        } },
        { id: "g5-e-3b", tipo: "explica", titulo: "Decisiones con valores", n: 3, instr: "Responde sobre toma de decisiones.", params: { preguntas: [
          P("¿Qué hago primero ante una decisión difícil?", ["Actúo ya", "Paro y pienso antes de actuar", "Pregunto al más grande", "Improviso"], 1, "La pausa reflexiva evita decisiones impulsivas.", ""),
          P("¿Qué debo considerar además de lo que quiero yo?", ["Nada", "Las consecuencias para los demás", "Solo mi comodidad", "La opinión más ruidosa"], 1, "Una decisión ética pondera el impacto en los demás.", ""),
          P("A veces lo correcto es...", ["lo más fácil", "lo más difícil pero justo", "lo que todos hacen", "lo que me conviene solo"], 1, "Elegir lo justo puede costar, pero sostiene la dignidad.", ""),
        ] } },
      ],
      [EXP("Decido con principios", [
        P("Decidir con valores requiere...", ["impulso", "reflexión previa", "prisa", "indiferencia"], 1, "La reflexión alinea la acción con lo que valoro.", ""),
        P("Ver consecuencias significa...", ["pensar qué pasará después para todos", "no pensar nada", "solo lo inmediato", "esperar suerte"], 0, "Anticipar el impacto es madurez ética.", ""),
        P("Si la decisión correcta es difícil...", ["la elijo igual", "busco la fácil", "la evito", "delego"], 0, "La coherencia con los valores fortalece el carácter.", ""),
      ]) ],
      null
    ),
    T(
      "Prevengo el conflicto y cuido la convivencia",
      "Identifica señales tempranas de conflicto y acciones para prevenirlos.",
      "Ética: prevención y convivencia.",
      [
        D("Señales", "Señales de conflicto: voces altas, empujones, burlas, exclusión.", "⚠️"),
        D("Actúo pronto", "Si detecto señales, busco ayuda o hablo con calma antes de que crezca.", "⛵"),
        D("Reparo", "Si algo salió mal, reparo: disculparme y ayudar arregla más que callar.", "💧"),
      ],
      [
        { id: "g5-e-4a", tipo: "clasificar", titulo: "Señal o acción que ayuda", n: 1, instr: "Toca la categoría y después cada elemento.", params: {
          categorias: [
            { id: "sen", n: "SEÑAL DE CONFLICTO", icono: "⚠️" },
            { id: "ayu", n: "ACCIÓN QUE AYUDA", icono: "⛵" },
          ],
          items: [
            { t: "VOCES ALTAS Y EMPUJONES", cat: "sen" },
            { t: "BUSCO A UN ADULTO DE CONFIANZA", cat: "ayu" },
            { t: "EXCLUIR A ALGUIEN DEL GRUPO", cat: "sen" },
            { t: "PIDO DISCULPAS Y AYUDO A REPARAR", cat: "ayu" },
          ],
        } },
        { id: "g5-e-4b", tipo: "explica", titulo: "Prevención que funciona", n: 3, instr: "Responde sobre prevención de conflictos.", params: { preguntas: [
          P("¿Cuál es una señal temprana de conflicto?", ["Hablar con calma", "Voces altas y empujones", "Escuchar", "Cooperar"], 1, "Detectar señales a tiempo permite intervenir pronto.", ""),
          P("Si veo que un conflicto empieza a crecer...", ["me quedo a ver", "busco ayuda de un adulto", "grito más", "me uno"], 1, "Pedir apoyo temprano evita que la situación escale.", ""),
          P("Después de un conflicto, reparar implica...", ["callarme", "disculparme y ayudar a arreglar", "esperar que pase", "culpar"], 1, "La reparación activa cierra el conflicto con dignidad.", ""),
        ] } },
      ],
      [EXP("Convivencia que se cuida", [
        P("Prevenir es...", ["actuar antes de que el conflicto crezca", "esperar", "castigar", "olvidar"], 0, "La prevención es más eficaz que la corrección tardía.", ""),
        P("Pedir ayuda a un adulto...", ["es de cobardes", "es una acción responsable", "no sirve", "empeora todo"], 1, "Los adultos pueden mediar con experiencia y cuidado.", ""),
        P("Reparar un daño...", ["no cambia nada", "restaura la confianza", "es opcional", "es humillante"], 1, "Disculparse y reparar fortalece los vínculos después del error.", ""),
      ]) ],
      null
    ),
  ];

  /* ---------------- Educación Religiosa ---------------- */
  G5.religiosa = [
    T(
      "Tradiciones y aportes a la comunidad",
      "Comprende diferentes tradiciones, sus expresiones culturales y sus aportes.",
      "Educación religiosa: comprender tradiciones y sus aportes a la comunidad.",
      [
        D("Tradiciones", "Cada tradición aporta valores, arte y prácticas de servicio.", "🕊️"),
        D("Aportes", "Obras sociales, educación y cultura enriquecen la comunidad.", "🏘️"),
        D("Convivencia", "La diversidad de creencias exige diálogo y respeto mutuo.", "🤝"),
      ],
      [
        { id: "g5-r-1a", tipo: "explica", titulo: "Tradición y comunidad", n: 3, instr: "Piensa en los aportes y la convivencia.", params: { preguntas: [
          P("Un aporte de las tradiciones a la comunidad es...", ["La división", "El servicio social y la educación", "El ruido", "Nada"], 1, "Muchas instituciones educativas y de salud nacieron de tradiciones religiosas.", ""),
          P("La convivencia entre creencias requiere...", ["Imponer", "Diálogo, respeto y colaboración", "Ignorar", "Competir"], 1, "El diálogo evita conflictos y construye paz.", ""),
          P("Respetar una tradición ajena significa...", ["Rirse", "Escuchar con apertura sin necesidad de adoptarla", "Discutir siempre", "Evitarla"], 1, "El respeto no exige abandonar la propia convicción.", ""),
        ] } },
      ],
      null
    ),
  
    T(
      "Diálogo entre creencias",
      "Reconoce el diálogo interreligioso como camino de paz.",
      "Educación religiosa: diálogo y paz (según el currículo institucional).",
      [
        D("Escuchar otras creencias", "Escuchar cómo creen otros amplía mi comprensión y me hace más respetuoso.", "👂"),
        D("Lo que compartimos", "Casi todas las tradiciones valoran la honestidad, la compasión y el perdón.", "💛"),
        D("Paz en acción", "La paz entre creencias se vive en actos concretos: ayudar juntos al vecindario.", "🌍"),
      ],
      [
        { id: "g5-r-2a", tipo: "emparejar", titulo: "Valores compartidos", n: 1, instr: "Toca el valor y después su sentido.", params: {
          parejas: [
            { a: "HONESTIDAD", b: "DECIR Y HACER LA VERDAD" },
            { a: "COMPASIÓN", b: "CUIDAR AL QUE SUFRE" },
            { a: "PERDÓN", b: "REPARAR Y SEGUIR ADELANTE" },
          ],
        } },
        { id: "g5-r-2b", tipo: "explica", titulo: "Diálogo que une", n: 3, instr: "Responde sobre diálogo y respeto.", params: { preguntas: [
          P("¿Qué es el diálogo interreligioso?", ["Una competencia", "Una conversación respetuosa entre creencias distintas", "Un debate", "Una imposición"], 1, "El diálogo busca comprenderse y cooperar, no ganar.", ""),
          P("¿Qué ganan las comunidades cuando dialogan?", ["Paz y cooperación", "Ruido", "Conflicto", "Nada"], 0, "El diálogo construye confianza y proyectos comunes.", ""),
          P("Si un amigo cree distinto a mí...", ["lo alejo", "lo escucho con respeto", "lo convierto a la fuerza", "me burlo"], 1, "Escuchar con respeto fortalece la amistad sin borrar las diferencias.", ""),
        ] } },
      ],
      [EXP("Paz entre creencias", [
        P("El diálogo respeta...", ["solo mi creencia", "las diferencias y busca lo común", "a los más fuertes", "nada"], 1, "Reconocer lo común sin borrar lo distinto es diálogo real.", ""),
        P("La compasión...", ["es debilidad", "es cuidar a quien sufre", "es opcional", "es solo para algunos"], 1, "La compasión trasciende credos y une comunidades.", ""),
        P("La paz se construye...", ["esperando", "con actos concretos de ayuda y respeto", "solo con leyes", "nunca"], 1, "Los gestos diarios tejen la convivencia pacífica.", ""),
      ]) ],
      null
    ),
  ];

  /* =========================================================
     TEMAS DBA GENERADOS (js/curriculo-dba-g1..g5.js)
     Esos archivos definen window.CURRICULO_DBA.gN.<materia> con
     datos compactos { n, o, d, t, q, cl, em, or, e }; aquí se
     convierten en temas con el mismo contrato del currículo:
     descubrir (3 tarjetas) → practicar → demostrar.
     ========================================================= */
  const LETRA_M = {
    lenguaje: "l", mate: "m", cnaturales: "c", csociales: "s", ingles: "i",
    tecnologia: "t", artistica: "a", efisica: "f", etica: "e", religiosa: "r",
  };
  const MAPA_G = { g1: G1, g2: G2, g3: G3, g4: G4, g5: G5 };
  (function anexarTemasDBA() {
    const SUF = ["a", "b", "c", "d", "e", "f", "g"];
    const DBA = window.CURRICULO_DBA || {};
    Object.keys(MAPA_G).forEach(function (gid) {
      const porMateria = DBA[gid];
      if (!porMateria) return;
      Object.keys(porMateria).forEach(function (mid) {
        const destino = MAPA_G[gid] && MAPA_G[gid][mid];
        const datos = porMateria[mid];
        if (!destino || !Array.isArray(datos)) return;
        const letra = LETRA_M[mid] || mid.charAt(0);
        datos.forEach(function (d) {
          if (!d || !d.n || !Array.isArray(d.t) || !d.t.length) return;
          const k = destino.length + 1;
          const preguntas = (Array.isArray(d.q) ? d.q : []).map(function (x) {
            return P(x[0], x[1], x[2], x[3] || "", x[4] || "");
          });
          const descubrir = d.t.map(function (x) {
            return D(x[0], x[1], x[2] || "💡");
          });
          const prac = [];
          function meter(tipo, titulo, instr, params) {
            prac.push({
              tipo: tipo, titulo: titulo,
              n: tipo === "explica" ? params.preguntas.length : 1,
              instr: instr, params: params,
            });
          }
          if (preguntas.length >= 1) {
            meter("explica", d.n, "Responde; si fallas aprenderás el porqué.",
              { preguntas: preguntas.slice(0, 3) });
          }
          if (preguntas.length >= 4) {
            meter("explica", "Más práctica: " + d.n, "Responde; si fallas aprenderás el porqué.",
              { preguntas: preguntas.slice(3, 6) });
          }
          if (d.cl && d.cl.c && d.cl.i && d.cl.c.length && d.cl.i.length) {
            meter("clasificar", "Clasifica: " + d.n, "Toca un elemento y después su categoría.", {
              categorias: d.cl.c.map(function (c) {
                return { id: c[0], n: c[1], icono: c[2] || "📌" };
              }),
              items: d.cl.i.map(function (it) { return { t: it[0], cat: it[1] }; }),
            });
          }
          if (Array.isArray(d.em) && d.em.length) {
            meter("emparejar", "Empareja: " + d.n, "Toca una palabra y después su pareja.", {
              parejas: d.em.map(function (p) { return { a: p[0], b: p[1] }; }),
            });
          }
          if (Array.isArray(d.or) && d.or.length) {
            meter("ordenar", "Ordena: " + d.n, "Toca los pasos en el orden correcto.", {
              consigna: "Ordena estos pasos correctamente.",
              items: d.or.slice(),
            });
          }
          if (Array.isArray(d.e) && d.e[0]) {
            meter("escribir", "Escribe: " + d.n, String(d.e[0]), {
              consigna: String(d.e[0]),
              min: parseInt(d.e[2], 10) || 3,
              ejemplo: String(d.e[1] || ""),
            });
          }
          prac.forEach(function (a, i) {
            a.id = gid + "-" + letra + "-" + k + (SUF[i] !== undefined ? SUF[i] : i);
          });
          const demo = [];
          if (preguntas.length >= 7) demo.push(EXP("Repaso: " + d.n, preguntas.slice(6, 9)));
          if (preguntas.length >= 10) demo.push(EXP("Reto final: " + d.n, preguntas.slice(9, 12)));
          destino.push(T(d.n, d.o || "", d.d || "", descubrir, prac, demo, null));
        });
      });
    });
  })();

  /* ======================= API ======================= */
  const CONTENIDOS = {
    g1: G1, g2: G2, g3: G3, g4: G4, g5: G5,
  };

  function gradoPorId(id) {
    return GRADOS.filter((g) => g.id === id)[0] || null;
  }
  function materiaPorId(id) {
    return MATERIAS.filter((m) => m.id === id)[0] || null;
  }
  function temasDe(gradoId, materiaId) {
    const c = CONTENIDOS[gradoId];
    return (c && c[materiaId]) || [];
  }
  /* Garantiza el contrato de fases de una lección:
     descubrir → practicar → (jugar) → demostrar.
     Algunos temas se escribieron con la actividad de evaluación
     dentro de "practicar"; aquí se separa para que siempre
     existan las cuatro fases. */
  /* Varía las preguntas de demostrar que son copia literal de una de
     practicar del MISMO tema: la copia queda con las opciones rotadas
     una posición (y "ok" recomputado), de modo que la respuesta
     correcta no aparezca donde el niño la memorizó en practicar.
     Es una variación automática y sin contenido nuevo; las preguntas
     repetidas ENTRE temas distintos no se tocan aquí: las revisa el
     docente con el reporte imprimible.
     Devuelve un array NUEVO; los actos que cambian son clones propios
     porque los datos a veces comparten el MISMO acto (normalizarFases
     presta a demostrar la última actividad de practicar) o el mismo
     array de preguntas entre las dos fases. */
  function variarCopiasDePracticar(de, pr) {
    if (!Array.isArray(de) || !Array.isArray(pr)) return de || [];
    const okEnPract = Object.create(null);
    pr.forEach(function (act) {
      const ps = act && act.params && act.params.preguntas;
      if (!Array.isArray(ps)) return;
      ps.forEach(function (q) {
        const k = q ? String(q.p || "").trim() : "";
        if (k && !(k in okEnPract) && Array.isArray(q.op)) okEnPract[k] = true;
      });
    });
    let cambio = false;
    const copia = de.map(function (act) {
      const ps = act && act.params && act.params.preguntas;
      if (!Array.isArray(ps)) return act;
      const variadas = ps.map(function (q) {
        if (!q || !Array.isArray(q.op) || q.op.length < 2) return q;
        const k = String(q.p || "").trim();
        if (!(k in okEnPract)) return q; /* pregunta propia: se queda igual */
        const n = q.op.length;
        return {
          p: q.p,
          op: q.op.slice(1).concat(q.op.slice(0, 1)),
          ok: (q.ok - 1 + n) % n,
          exp: q.exp || "",
          pista: q.pista || "",
        };
      });
      if (!variadas.some(function (q, i) { return q !== ps[i]; })) return act;
      cambio = true;
      return Object.assign({}, act, {
        params: Object.assign({}, act.params, { preguntas: variadas }),
      });
    });
    return cambio ? copia : de;
  }

  function normalizarFases(t) {
    const pr = (t.practicar || []).slice();
    let de = (t.demostrar || []).slice();
    if (!de.length && pr.length > 1) de = [pr.pop()];
    else if (!de.length && pr.length === 1) de = [pr[0]];
    de = variarCopiasDePracticar(de, pr);
    return {
      descubrir: (t.descubrir || []).slice(),
      practicar: quitarPreguntasDuplicadas(pr),
      demostrar: quitarPreguntasDuplicadas(de),
      juego: t.juego || null,
    };
  }

  /* Control de calidad automático: en la data había fases con la
     MISMA pregunta escrita dos veces (el niño la respondía dos
     veces seguidas). Aquí se conserva la primera de cada texto.
     Se deduplica por fase: repetir una pregunta entre practicar
     y demostrar SÍ es válido (práctica y luego comprobación). */
  function quitarPreguntasDuplicadas(fase) {
    if (!Array.isArray(fase)) return fase || [];
    const vistos = Object.create(null);
    fase.forEach(function (act) {
      if (!act || !act.params || !Array.isArray(act.params.preguntas)) return;
      act.params.preguntas = act.params.preguntas.filter(function (q) {
        const k = q ? String(q.p || "").trim() : "";
        if (!k) return true;
        if (vistos[k]) return false;
        vistos[k] = true;
        return true;
      });
      if (typeof act.n === "number" && act.params.preguntas.length) act.n = act.params.preguntas.length;
    });
    return fase.filter(function (act) {
      return !!act && !(act.params && Array.isArray(act.params.preguntas) && !act.params.preguntas.length);
    });
  }
  function temaPorId(id) {
    const partes = String(id || "").split("-");
    if (partes.length < 3) return null;
    const gradoId = partes[0];
    const materiaId = partes[1];
    const idx = parseInt(partes[2], 10) - 1;
    const lista = temasDe(gradoId, materiaId);
    if (!lista[idx]) return null;
    const t = lista[idx];
    const f = normalizarFases(t);
    return {
      id: id, grado: gradoId, materia: materiaId, indice: idx,
      nombre: t.nombre, objetivo: t.objetivo, dba: t.dba,
      descubrir: f.descubrir, practicar: f.practicar,
      demostrar: f.demostrar, juego: f.juego,
    };
  }
  /* Lista completa de temas de un grado, con su id calculado */
  function listaConId(gradoId, materiaId) {
    return temasDe(gradoId, materiaId).map(function (t, i) {
      const f = normalizarFases(t);
      return {
        id: gradoId + "-" + materiaId + "-" + (i + 1),
        nombre: t.nombre, objetivo: t.objetivo, dba: t.dba,
        descubrir: f.descubrir, practicar: f.practicar,
        demostrar: f.demostrar, juego: f.juego,
      };
    });
  }
  function totalTemas() {
    let n = 0;
    GRADOS.forEach(function (g) {
      MATERIAS.forEach(function (m) {
        n += temasDe(g.id, m.id).length;
      });
    });
    return n;
  }

  return {
    GRADOS: GRADOS,
    MATERIAS: MATERIAS,
    P: P, T: T, D: D,
    gradoPorId: gradoPorId,
    materiaPorId: materiaPorId,
    temasDe: temasDe,
    listaConId: listaConId,
    temaPorId: temaPorId,
    totalTemas: totalTemas,
  };
})();
