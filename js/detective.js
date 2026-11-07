/* =========================================================
   WEB LEER — Detectives de letras y números
   ---------------------------------------------------------
   El niño recibe una MISIÓN y debe investigar un ESCENARIO
   para encontrar pistas y resolver el caso:

     1. ESCENARIO: una cuadrícula con objetos OCULTOS.
     2. MISIÓN: hay que encontrar ciertos objetos (por ejemplo,
        todos los que empiezan por M, o las tres cantidades
        que suman ocho).
     3. PISTAS: visuales (💡 se ve una pista) y auditivas
        (🔊 el detective explica la misión).
     4. CLASIFICACIÓN: en algunas etapas hay que separar
        elementos en dos grupos.
     5. VARIAS ETAPAS: cada caso tiene varias acertijos, de
        fácil a difícil. Al resolverlos todos, el caso se cierra.

   Aprendizaje: atención, conciencia fonológica (letra ↔ sonido),
   conteo, clasificación y resolución de problemas.

   Nunca hay castigo: si falla, se le anima y puede repetir.
   El progreso se guarda por perfil en Store.data.detective.
   ========================================================= */

window.DETECTIVE = (function () {
  "use strict";

  const D = window.DATA;

  /* ---------------------------------------------------------
     POOL DE PALABRAS (para buscar iniciales y sonidos)
     --------------------------------------------------------- */
  const POOL = (function () {
    const visto = {};
    const out = [];
    const add = (w, emoji) => {
      const clave = String(w || "").toUpperCase();
      if (!clave || visto[clave]) return;
      visto[clave] = 1;
      out.push({ w: clave, minus: clave.toLowerCase(), emoji: emoji || "❔" });
    };
    (D.palabras || []).forEach((p) => add(p.w, p.emoji));
    (D.objetos || []).forEach((o) => add(o.w, o.emoji));
    return out;
  })();

  /* Elementos extra para clasificar (no están en el currículo) */
  const EXTRA = {
    animales: [
      { n: "GATO", e: "🐱" },
      { n: "PATO", e: "🦆" },
      { n: "PERRO", e: "🐕" },
      { n: "RANA", e: "🐸" },
      { n: "VACA", e: "🐄" },
      { n: "OSO", e: "🐻" },
    ],
    cosas: [
      { n: "MESA", e: "🍽️" },
      { n: "TAZA", e: "☕" },
      { n: "DADO", e: "🎲" },
      { n: "LUNA", e: "🌙" },
      { n: "FLOR", e: "🌸" },
      { n: "QUESO", e: "🧀" },
    ],
    frutas: [
      { n: "MANZANA", e: "🍎" },
      { n: "UVA", e: "🍇" },
      { n: "COCO", e: "🥥" },
      { n: "LIMON", e: "🍋" },
      { n: "PERA", e: "🍐" },
      { n: "CEREZA", e: "🍒" },
    ],
    KEYS: ["frutas", "cosas"],
  };

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

  /* Letras que tienen al menos n palabras en el pool */
  function letrasCon(n) {
    const cuenta = {};
    POOL.forEach((p) => {
      const l = p.w.charAt(0);
      cuenta[l] = (cuenta[l] || 0) + 1;
    });
    return Object.keys(cuenta).filter((l) => cuenta[l] >= n);
  }

  /* Consonante con su sonido (para la etapa de conciencia fonológica) */
  function consonanteDe(letra) {
    return (D.consonantes || []).find((c) => c.l === letra) || null;
  }

  /* ---------------------------------------------------------
     GENERADORES DE ETAPAS (cada caso tiene varias)
     --------------------------------------------------------- */

  /* Etapa 1: encontrar todos los objetos con cierta INICIAL */
  function etapaInicial(op) {
    const letra = op.letra;
    const cuantos = op.cuantos || 2;
    const conLetra = POOL.filter((p) => p.w.charAt(0) === letra);
    if (conLetra.length < cuantos) return null;
    const objetivos = barajar(conLetra).slice(0, cuantos);
    const otras = barajar(POOL.filter((p) => p.w.charAt(0) !== letra)).slice(0, op.distractores || 5);
    const items = barajar(objetivos.concat(otras)).map((p, i) => ({
      id: "i" + i,
      emoji: p.emoji,
      nombre: p.w,
      letra: p.w.charAt(0),
      ok: objetivos.indexOf(p) !== -1,
    }));
    const cons = consonanteDe(letra);
    const pistaSonido = cons
      ? "Escucha: «" + cons.sound + "». Esa es la letra " + letra + "."
      : "Piensa en cómo suena la letra " + letra + ".";
    return {
      tipo: "inicial",
      titulo: op.titulo || "Los objetos con " + letra,
      mission: op.mission || "Encuentra todos los objetos cuyo nombre empieza por " + letra + ".",
      hablar: op.hablar || "Encuentra todos los objetos cuyo nombre empieza por la letra " + letra + ".",
      pistas: [pistaSonido, "Los objetos escondidos tienen un dibujo y un nombre. Tócalos para verlos."],
      objetivo: "marcar",
      cuantosObjetivo: cuantos,
      items: items,
      correctos: items.filter((x) => x.ok).map((x) => x.id),
    };
  }

  /* Etapa 2: encontrar las CANTIDADES que suman un número */
  function etapaSuma(op) {
    const target = op.target;
    const cuantos = op.cuantos || 3;
    const emojis = ["🍎", "🍐", "🍊", "🍓", "🍇", "🍌", "🥕", "🌽", "🍩", "🍪", "🧁", "🥨", "🎈"];
    const usados = [];
    const items = [];
    /* Construimos una combinación que sume el objetivo */
    const partes = [];
    let resto = target;
    for (let i = 0; i < cuantos; i++) {
      const esUltimo = i === cuantos - 1;
      const min = 1;
      const max = esUltimo ? resto : Math.max(min, resto - (cuantos - i - 1));
      let v = min + Math.floor(Math.random() * Math.max(1, max - min + 1));
      if (esUltimo) v = resto;
      if (v < 1) v = 1;
      partes.push(v);
      resto -= v;
      if (resto < 0) return null;
    }
    /* Asignamos emojis distintos */
    let poolEmoji = barajar(emojis);
    partes.forEach((v, i) => {
      const e = poolEmoji[i % poolEmoji.length];
      usados.push(e + v);
      items.push({ id: "s" + i, emoji: e, cantidad: v, ok: true });
    });
    /* Distractores con cantidades que no forman la respuesta */
    const distract = barajar(emojis.filter((e) => usados.indexOf(e + 1) === -1)).slice(0, op.distractores || 4);
    distract.forEach((e, i) => {
      let v = 1 + Math.floor(Math.random() * Math.max(2, target));
      if (partes.indexOf(v) !== -1) v = v + 1;
      items.push({ id: "d" + i, emoji: e, cantidad: v, ok: false });
    });
    return {
      tipo: "suma",
      titulo: op.titulo || "Las cantidades que suman " + target,
      mission: op.mission || "Busca " + cuantos + " cantidades que sumen " + target + ".",
      hablar: op.hablar || "Toca " + cuantos + " cantidades que juntas sumen " + target + ".",
      pistas: [
        "Suma los números de cada dibujo: " + partes.join(" + ") + " = " + target + ".",
        "Puedes probar distintas cantidades hasta que la suma llegue a " + target + ".",
      ],
      objetivo: "sumar",
      target: target,
      cuantosObjetivo: cuantos,
      items: barajar(items),
      correctos: [],
    };
  }

  /* Etapa 3: contar cuántos hay de un tipo y elegir el número */
  function etapaContar(op) {
    const emoji = op.emoji || "🍎";
    const cuantos = op.cuantos || 4;
    const items = [];
    for (let i = 0; i < cuantos; i++) items.push({ id: "c" + i, emoji: emoji, ok: false });
    /* Relleno con otros objetos para que el escenario sea real */
    const otros = barajar(POOL.filter((p) => p.emoji !== emoji)).slice(0, op.distractores || 3);
    otros.forEach((p, i) => items.push({ id: "o" + i, emoji: p.emoji, nombre: p.w, ok: false }));
    const opciones = new Set([cuantos]);
    let guard = 0;
    while (opciones.size < 4 && guard++ < 60) {
      const v = Math.max(1, cuantos + (Math.floor(Math.random() * 4) - 2));
      opciones.add(v);
    }
    return {
      tipo: "contar",
      titulo: op.titulo || "¿Cuántos " + emoji + " hay?",
      mission: op.mission || "Cuenta cuántos " + emoji + " hay en el escenario y toca el número correcto.",
      hablar: op.hablar || "Cuenta cuántos " + emoji + " hay en el escenario. Después toca el número correcto.",
      pistas: ["Toca cada " + emoji + " mientras cuentas, sin saltarte ninguno.", "Cuenta uno, dos, tres… despacio."],
      objetivo: "numero",
      numeroCorrecto: cuantos,
      opciones: barajar(Array.from(opciones)),
      items: barajar(items),
      correctos: [],
    };
  }

  /* Etapa 4: continuar una serie de colores */
  function etapaSerie(op) {
    const series = [
      { patron: ["🔴", "🔵", "🔴", "🔵"], sigue: "🔴" },
      { patron: ["⭐", "🌙", "⭐", "🌙"], sigue: "⭐" },
      { patron: ["🟢", "🟢", "🔴", "🟢", "🟢"], sigue: "🔴" },
      { patron: ["🐱", "🐶", "🐱", "🐶"], sigue: "🐱" },
      { patron: ["🍎", "🍐", "🍇", "🍎", "🍐"], sigue: "🍇" },
      { patron: ["🔺", "🔷", "🔺", "🔺"], sigue: "🔷" },
    ];
    const s = op.serie ? series[op.serie % series.length] : barajar(series)[0];
    const distractores = ["🔶", "🟣", "🌟", "🔵", "🟠", "🟡"].filter((e) => e !== s.sigue);
    const opciones = barajar([s.sigue].concat(barajar(distractores).slice(0, 3)));
    const items = opciones.map((e, i) => ({ id: "p" + i, emoji: e, ok: e === s.sigue }));
    return {
      tipo: "serie",
      titulo: op.titulo || "Continúa la serie",
      mission: op.mission || "Mira el patrón y toca el dibujo que viene después.",
      hablar: op.hablar || "Mira bien el patrón. Toca el dibujo que continúa la serie.",
      pistas: ["El patrón se repite: " + s.patron.join(" ") + "…", "Fíjate en qué dibujo vuelve después del último."],
      objetivo: "elegir",
      patron: s.patron,
      items: items,
      correctos: items.filter((x) => x.ok).map((x) => x.id),
    };
  }

  /* Etapa 5: clasificar elementos en dos grupos */
  function etapaClasificar(op) {
    const g1 = op.grupo1;
    const g2 = op.grupo2;
    const n1 = op.porGrupo || 3;
    const fuente1 = EXTRA[g1] || [];
    const fuente2 = EXTRA[g2] || [];
    if (fuente1.length < n1 || fuente2.length < n1) return null;
    const e1 = barajar(fuente1).slice(0, n1);
    const e2 = barajar(fuente2).slice(0, n1);
    const items = barajar(
      e1.map((x) => ({ n: x.n, e: x.e, grupo: 0 })).concat(e2.map((x) => ({ n: x.n, e: x.e, grupo: 1 })))
    ).map((x, i) => ({
      id: "k" + i,
      emoji: x.e,
      nombre: x.n,
      grupo: x.grupo,
      ok: false,
    }));
    return {
      tipo: "clasificar",
      titulo: op.titulo || "Separa en dos grupos",
      mission: op.mission || "Toca un objeto y luego el grupo donde pertenece.",
      hablar: op.hablar || "Toca un objeto y después toca el grupo donde va. Un grupo es " + op.nombre1 + " y el otro " + op.nombre2 + ".",
      pistas: ["Piensa qué cosas son " + op.nombre1 + " y cuáles no.", "Mira bien el dibujo de cada objeto."],
      objetivo: "clasificar",
      grupos: [
        { id: 0, nombre: op.nombre1, emoji: op.emoji1 },
        { id: 1, nombre: op.nombre2, emoji: op.emoji2 },
      ],
      items: items,
      correctos: [],
    };
  }

  /* Etapa 6: acertijo final — elegir la respuesta */
  function etapaRiddle(op) {
    const riddles = [
      {
        r: "Soy verde, soy redonda y tengo una semilla dentro. ¿Quién soy?",
        o: ["🍎", "🍐", "🍌", "🍇"],
        a: "🍎",
      },
      {
        r: "Tengo cuatro patas, digo guau y trabajo contigo. ¿Quién soy?",
        o: ["🐕", "🐈", "🐄", "🐸"],
        a: "🐕",
      },
      {
        r: "Me pintan de colores, tengo un pincel y vivo en la clase. ¿Quién soy?",
        o: ["🖌️", "📏", "🎒", "✂️"],
        a: "🖌️",
      },
      {
        r: "Brillo en el cielo de noche y no hago ruido. ¿Quién soy?",
        o: ["🌙", "☀️", "⛅", "🌧️"],
        a: "🌙",
      },
      {
        r: "Tengo muchas ruedas, huelo a gasolina y me gusta la velocidad. ¿Quién soy?",
        o: ["🚗", "🚂", "🚲", "🚢"],
        a: "🚗",
      },
      {
        r: "Me llena de agua, me beben los niños y a veces me usa la abuela. ¿Quién soy?",
        o: ["🥛", "🍯", "🧃", "☕"],
        a: "🥛",
      },
    ];
    const rd = op.riddle != null ? riddles[op.riddle % riddles.length] : barajar(riddles)[0];
    const opciones = barajar(rd.o);
    const items = opciones.map((e, i) => ({ id: "r" + i, emoji: e, ok: e === rd.a }));
    return {
      tipo: "riddle",
      titulo: op.titulo || "El acertijo final",
      mission: op.mission || rd.r,
      hablar: rd.r,
      pistas: ["Escucha con atención las pistas del acertijo.", "Piensa en lo que te dice cada frase."],
      objetivo: "elegir",
      items: items,
      correctos: items.filter((x) => x.ok).map((x) => x.id),
    };
  }

  /* ---------------------------------------------------------
     CASOS (cada uno con varias etapas)
     --------------------------------------------------------- */
  const CASOS = [
    {
      id: "d1",
      nivel: 1,
      icono: "🕵️",
      nombre: "El Mercado de las Letras",
      color: "#2f80ed",
      detective: "Inspectora Lupa",
      intro:
        "¡Lupa necesita tu ayuda! En el mercado han desaparecido todas las cosas que empiezan por la misma letra. Investiga el puesto y encuentra cada objeto.",
      exito: "¡Caso resuelto! La inspectora Lupa te da las gracias y el mercado vuelve a estar en orden.",
      etapas: [
        () => etapaInicial({ letra: "M", cuantos: 2, distractores: 5 }),
        () => etapaInicial({ letra: "P", cuantos: 2, distractores: 5 }),
        () => etapaInicial({ letra: "C", cuantos: 2, distractores: 4, mission: "Encuentra los objetos que empiezan con la C y con la S." }),
      ],
    },
    {
      id: "d2",
      nivel: 2,
      icono: "🔢",
      nombre: "La Panadería Misteriosa",
      color: "#f2994a",
      detective: "Profesor Bochini",
      intro:
        "En la panadería las bandejas se han mezclado. El profesor Bochini necesita saber cuántas cosas hay en cada una. ¡Cuenta y suma como un buen detective!",
      exito: "¡Excelente trabajo! El profesor Bochini ordena las bandejas y te da un pahuelo.",
      etapas: [
        () => etapaContar({ emoji: "🍎", cuantos: 4, distractores: 3 }),
        () => etapaSuma({ target: 8, cuantos: 3, distractores: 4 }),
        () => etapaContar({ emoji: "🧁", cuantos: 6, distractores: 4 }),
      ],
    },
    {
      id: "d3",
      nivel: 3,
      icono: "🕵️",
      nombre: "La Bodega de las Formas",
      color: "#9b51e0",
      detective: "Chef Figura",
      intro:
        "El chef Figura ha perdido el orden de su bodega. Hay que seguir los patrones y separar las cosas en su sitio. ¡Cuidado con las trampas!",
      exito: "¡Bodega en orden! El chef Figura prepara un banquete especial para los detectives.",
      etapas: [
        () => etapaSerie({}),
        () => etapaClasificar({ grupo1: "animales", grupo2: "cosas", porGrupo: 3, nombre1: "animales", nombre2: "cosas", emoji1: "🐾", emoji2: "🛋️" }),
        () => etapaSerie({ serie: 4 }),
      ],
    },
    {
      id: "d4",
      nivel: 4,
      icono: "🐶",
      nombre: "El Caso Maestro del Riddle",
      color: "#219653",
      detective: "Comisaria Canina",
      intro:
        "El caso más difícil del archivo. La comisaria Canina necesita un gran detective: iniciales, cantidades, clasificar y un acertijo final. ¿Preparado?",
      exito: "¡Caso maestro resuelto! Eres un detective de las letras y los números. ¡La comisaria Canina te da una medalla!",
      etapas: [
        () => etapaInicial({ letra: "L", cuantos: 2, distractores: 5 }),
        () => etapaSuma({ target: 10, cuantos: 3, distractores: 5 }),
        () => etapaClasificar({ grupo1: "frutas", grupo2: "cosas", porGrupo: 3, nombre1: "frutas", nombre2: "cosas", emoji1: "🍎", emoji2: "🧰" }),
        () => etapaRiddle({}),
      ],
    },
  ];

  const porId = {};
  CASOS.forEach((c) => (porId[c.id] = c));

  function todas() {
    return CASOS;
  }
  function info(id) {
    return porId[id] || null;
  }
  function totalEtapas(id) {
    const c = porId[id];
    return c ? c.etapas.length : 0;
  }

  /* ---------------------------------------------------------
     Progreso guardado por perfil
     --------------------------------------------------------- */
  function _data() {
    try {
      const d = CORE.Store.data;
      if (!d.detective) d.detective = {};
      return d;
    } catch (e) {
      return { detective: {} };
    }
  }

  function estado(id) {
    const d = _data();
    if (!d.detective[id]) d.detective[id] = { etapasResueltas: 0, pistas: 0 };
    return d.detective[id];
  }

  function guardar() {
    try {
      CORE.Store.save();
    } catch (e) {}
  }

  function etapasResueltas(id) {
    return estado(id).etapasResueltas || 0;
  }

  function terminado(id) {
    return etapasResueltas(id) >= totalEtapas(id);
  }

  /* Un caso está disponible si el anterior está terminado. */
  function disponible(id) {
    const idx = CASOS.findIndex((c) => c.id === id);
    if (idx <= 0) return true;
    return terminado(CASOS[idx - 1].id);
  }

  function casosResueltos() {
    return CASOS.filter((c) => terminado(c.id)).length;
  }

  /* Genera la etapa pedida (nueva cada vez, para que no se repita) */
  function generarEtapa(id, indice) {
    const c = porId[id];
    if (!c) return null;
    const gen = c.etapas[indice];
    if (!gen) return null;
    for (let intento = 0; intento < 30; intento++) {
      const e = gen();
      if (e) return e;
    }
    return null;
  }

  /* Marca la etapa como superada */
  function avanzarEtapa(id) {
    const c = porId[id];
    if (!c) return 0;
    const e = estado(id);
    if (e.etapasResueltas < c.etapas.length) e.etapasResueltas++;
    guardar();
    return e.etapasResueltas;
  }

  /* Cuenta las pistas que se han pedido (dato curioso para el perfil) */
  function marcarPista(id) {
    const e = estado(id);
    e.pistas = (e.pistas || 0) + 1;
    guardar();
    return e.pistas;
  }

  function pistasUsadas(id) {
    return estado(id).pistas || 0;
  }

  /* Reinicia un caso (para repetirlo) */
  function reiniciar(id) {
    const d = _data();
    if (!d.detective[id]) return;
    d.detective[id] = { etapasResueltas: 0, pistas: 0 };
    guardar();
  }

  return {
    CASOS,
    todas,
    info,
    totalEtapas,
    etapasResueltas,
    terminado,
    disponible,
    casosResueltos,
    generarEtapa,
    avanzarEtapa,
    marcarPista,
    pistasUsadas,
    reiniciar,
  };
})();
