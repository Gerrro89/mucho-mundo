/* =========================================================
   WEB LEER — Taller de inventos
   ---------------------------------------------------------
   Un taller donde cada RESPUESTA CORRECTA consigue una PIEZA
   y el niño la COLOCA en el lugar correcto del invento.

   Cómo funciona cada invento:

     1. RETOS: se resuelven retos (sumas, contar, ordenar,
        series, formas...) para conseguir las piezas.
     2. PIEZAS: cada acierto entrega una pieza (con su forma,
        su nombre y su sitio en el invento).
     3. COLOCAR: el niño arrastra/toca la pieza y la lleva al
        hueco correcto de la cuadrícula siguiendo la
        instrucción hablada («pon el tornillo arriba»).
     4. INVENTO: al colocar todas las piezas, el invento se
        enciende y se mueve. ¡Lo construyó él mismo!

   Aprendizaje: matemáticas aplicadas, secuenciación,
   orientación espacial y pensamiento computacional inicial.

   Nunca hay castigo: si falla, se le anima y puede repetir.
   El progreso se guarda por perfil en Store.data.taller.
   ========================================================= */

window.TALLER = (function () {
  "use strict";

  const D = window.DATA;

  /* ---------------------------------------------------------
     Utilidades
     --------------------------------------------------------- */
  function mezclar(a) {
    const c = a.slice();
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = c[i];
      c[i] = c[j];
      c[j] = t;
    }
    return c;
  }

  function enteros(n, max) {
    const v = [];
    let guard = 0;
    while (v.length < n && guard++ < 200) {
      const x = 1 + Math.floor(Math.random() * max);
      if (v.indexOf(x) === -1) v.push(x);
    }
    return v;
  }

  /* ---------------------------------------------------------
     Generadores de RETOS (el niño los resuelve para conseguir
     una pieza). Todos devuelven opciones grandes para tocar.
     --------------------------------------------------------- */

  /* Suma sencilla: a + b = ? */
  function retoSuma(max) {
    const a = 1 + Math.floor(Math.random() * max);
    const b = 1 + Math.floor(Math.random() * max);
    const total = a + b;
    const opciones = new Set([total]);
    let guard = 0;
    while (opciones.size < 4 && guard++ < 80) {
      const v = total + (Math.floor(Math.random() * 5) - 2);
      if (v >= 1 && v <= max * 2 + 2) opciones.add(v);
    }
    return {
      tipo: "suma",
      enunciado: a + " + " + b + " = ?",
      hablar: "¿Cuánto es " + a + " más " + b + "?",
      opciones: mezclar(Array.from(opciones)),
      correcto: total,
      pista: "Junta las dos cantidades y cuenta el total.",
    };
  }

  /* Contar objetos: mira el emoji repetido y di cuántos hay */
  function retoContar(emoji, max, cuantos) {
    const n = cuantos || 2 + Math.floor(Math.random() * (max - 1));
    const opciones = new Set([n]);
    let guard = 0;
    while (opciones.size < 4 && guard++ < 80) {
      const v = n + (Math.floor(Math.random() * 5) - 2);
      if (v >= 1 && v <= max + 3) opciones.add(v);
    }
    return {
      tipo: "contar",
      enunciado: "¿Cuántos hay?",
      emojis: Array(n).fill(emoji),
      hablar: "Cuenta cuántos " + emoji + " hay. ¿Cuántos son?",
      opciones: mezclar(Array.from(opciones)),
      correcto: n,
      pista: "Toca cada dibujo con el dedo mientras cuentas.",
    };
  }

  /* Ordenar números de menor a mayor (secuencia) */
  function retoOrden(max, cuantos) {
    const nums = enteros(cuantos || 4, max);
    const correcto = nums.slice().sort((a, b) => a - b);
    return {
      tipo: "orden",
      enunciado: "Toca los números de menor a mayor",
      hablar: "Toca los números en orden, del más pequeño al más grande.",
      opciones: mezclar(nums.slice()),
      correcto: correcto,
      secuencia: true,
      pista: "El más pequeño primero y el más grande al final.",
    };
  }

  /* Resta sencilla: a - b = ? (nunca queda negativo) */
  function retoResta(max) {
    const a = 2 + Math.floor(Math.random() * (max - 1));
    const b = 1 + Math.floor(Math.random() * (a - 1));
    const total = a - b;
    const opciones = new Set([total]);
    let guard = 0;
    while (opciones.size < 4 && guard++ < 80) {
      const v = total + (Math.floor(Math.random() * 5) - 2);
      if (v >= 0 && v <= max) opciones.add(v);
    }
    return {
      tipo: "resta",
      enunciado: a + " − " + b + " = ?",
      hablar: "¿Cuánto es " + a + " menos " + b + "?",
      opciones: mezclar(Array.from(opciones)),
      correcto: total,
      pista: "Quita " + b + " al número " + a + " y cuenta lo que queda.",
    };
  }

  /* Doble o mitad: el doble de 4, o la mitad de 8 */
  function retoDoble(max) {
    const esDoble = Math.random() < 0.5;
    if (esDoble) {
      const n = 1 + Math.floor(Math.random() * max);
      const total = n * 2;
      const opciones = new Set([total]);
      let guard = 0;
      while (opciones.size < 4 && guard++ < 80) {
        const v = total + (Math.floor(Math.random() * 5) - 2);
        if (v > 0) opciones.add(v);
      }
      return {
        tipo: "doble",
        enunciado: "El doble de " + n,
        hablar: "¿Cuál es el doble de " + n + "? El doble es dos veces el mismo número.",
        opciones: mezclar(Array.from(opciones)),
        correcto: total,
        pista: "Suma el número consigo mismo: " + n + " más " + n + ".",
      };
    }
    return retoMitad(max);
  }

  /* La mitad de un número (siempre par) */
  function retoMitad(max) {
    const mitad = 1 + Math.floor(Math.random() * max);
    const n = mitad * 2;
    const total = mitad;
    const opciones = new Set([total]);
    let guard = 0;
    while (opciones.size < 4 && guard++ < 80) {
      const v = total + (Math.floor(Math.random() * 5) - 2);
      if (v > 0 && v !== total) opciones.add(v);
    }
    return {
      tipo: "mitad",
      enunciado: "La mitad de " + n,
      hablar: "¿Cuál es la mitad de " + n + "? La mitad es repartir en dos partes iguales.",
      opciones: mezclar(Array.from(opciones)),
      correcto: total,
      pista: "¿Qué número sumado consigo mismo da " + n + "?",
    };
  }

  /* Contar de 2 en 2 (o de otro paso): 2, 4, 6, ? */
  function retoSalto(paso) {
    const p = paso || 2;
    const inicio = p;
    const saltos = 3;
    const s = [];
    for (let i = 0; i < saltos; i++) s.push(inicio + i * p);
    const falta = inicio + saltos * p;
    const opciones = new Set([falta]);
    let guard = 0;
    while (opciones.size < 4 && guard++ < 80) {
      const v = falta + (Math.floor(Math.random() * (p * 2 + 1)) - p);
      if (v > 0 && v !== falta) opciones.add(v);
    }
    return {
      tipo: "salto",
      enunciado: s.join(" → ") + " → ?",
      hablar: "Cuenta de " + p + " en " + p + ". ¿Qué número sigue?",
      opciones: mezclar(Array.from(opciones)),
      correcto: falta,
      pista: "Suma " + p + " al último número: " + s[s.length - 1] + " más " + p + ".",
    };
  }

  /* Completar la serie: 2, 4, 6, ? (de 2 en 2) */
  function retoSerie(inicio, paso, saltos) {
    const s = [];
    for (let i = 0; i < (saltos || 3); i++) s.push(inicio + i * paso);
    const falta = inicio + (saltos || 3) * paso;
    const opciones = new Set([falta]);
    let guard = 0;
    while (opciones.size < 4 && guard++ < 80) {
      const v = falta + (Math.floor(Math.random() * 5) - 2);
      if (v > 0) opciones.add(v);
    }
    return {
      tipo: "serie",
      enunciado: s.join(", ") + ", ?",
      hablar: "La serie va de " + paso + " en " + paso + ". ¿Qué número sigue?",
      opciones: mezclar(Array.from(opciones)),
      correcto: falta,
      pista: "Suma " + paso + " al último número.",
    };
  }

  /* Formas: elegir la figura que se pide. Se muestra una figura en
     SVG y el niño toca su nombre (o el dibujo) entre varias. */
  function retoForma() {
    const pool = D.figuras || [];
    if (!pool.length) {
      return {
        tipo: "forma",
        enunciado: "¿Cuál es un círculo?",
        hablar: "Busca la figura: círculo.",
        opciones: ["círculo", "cuadrado", "triángulo"],
        correcto: "círculo",
        pista: "Mira bien los lados y las esquinas de cada figura.",
      };
    }
    const elegida = pool[Math.floor(Math.random() * pool.length)];
    const opciones = [elegida.nombre];
    const otros = pool.filter((f) => f.nombre !== elegida.nombre);
    mezclar(otros).forEach((f) => {
      if (opciones.length < 4) opciones.push(f.nombre);
    });
    /* Mapa nombre -> svg para dibujar cada opción como figura */
    const svgDe = {};
    pool.forEach((f) => (svgDe[f.nombre] = f.svg));
    return {
      tipo: "forma",
      enunciado: "¿Cuál es un " + elegida.nombre + "?",
      hablar: "Busca la figura: " + elegida.nombre + ".",
      opciones: mezclar(opciones),
      svgOpcion: svgDe,
      correcto: elegida.nombre,
      pista: "Mira bien los lados y las esquinas de cada figura.",
    };
  }

  /* ---------------------------------------------------------
     "Colocar la pieza": adivinar DÓNDE va la pieza. Es el paso
     de orientación espacial. Cada pieza trae su casilla.
     --------------------------------------------------------- */
  function instruccionCelda(fila, col, filas, cols) {
    const posV = filas === 1 ? "en el medio" : fila === 0 ? "arriba" : fila === filas - 1 ? "abajo" : "en el centro";
    const posH = cols === 1 ? "" : col === 0 ? " a la izquierda" : col === cols - 1 ? " a la derecha" : " en medio";
    const sitio = (posV + posH).trim();
    return "Coloca la pieza " + sitio + ".";
  }

  /* Crea la rejilla del invento a partir de la lista de piezas.
     Cada pieza tiene: id, nombre, icono, fila, col (0-based). */
  function crearPlan(piezas, filas, cols, fondo) {
    return { piezas: piezas, filas: filas, cols: cols, fondo: fondo || "" };
  }

  /* ---------------------------------------------------------
     INVENTOS: piezas con su sitio y su forma de conseguirlas
     --------------------------------------------------------- */

  /* --- 1) Robot ayudante (5 piezas) --- */
  const robot = {
    id: "robot",
    nivel: 1,
    icono: "🤖",
    nombre: "Robot Ayudante",
    color: "#2f80ed",
    intro: "¡Bienvenido al taller! Vamos a construir un robot con piezas. Resuelve los retos para conseguir cada pieza y colócala en su sitio.",
    exito: "¡El Robot Ayudante está listo! Se mueve y saluda. ¡Lo construiste tú!",
    filas: 3,
    cols: 3,
    fondo: "🔧",
    piezas: [
      { id: "cabeza", nombre: "la cabeza", icono: "🙂", fila: 0, col: 1, reto: () => retoContar("🔩", 6) },
      { id: "brazo", nombre: "el brazo izquierdo", icono: "💪", fila: 1, col: 0, reto: () => retoSuma(5) },
      { id: "cuerpo", nombre: "el cuerpo", icono: "📦", fila: 1, col: 1, reto: () => retoOrden(9, 4) },
      { id: "brazo2", nombre: "el brazo derecho", icono: "🦾", fila: 1, col: 2, reto: () => retoSuma(6) },
      { id: "piernas", nombre: "las piernas", icono: "🦿", fila: 2, col: 1, reto: () => retoSerie(2, 2, 3) },
    ],
  };

  /* --- 2) Cohete espacial (6 piezas) --- */
  const cohete = {
    id: "cohete",
    nivel: 2,
    icono: "🚀",
    nombre: "Cohete Espacial",
    color: "#9b51e0",
    intro: "Este cohete quiere viajar a las estrellas, pero le faltan piezas. ¡Consíguelas con tus cuentas y móntalo para despegar!",
    exito: "¡Despegue! El cohete sube al cielo y se pierde entre las estrellas. ¡Gran ingeniero!",
    filas: 4,
    cols: 3,
    fondo: "🌌",
    piezas: [
      { id: "punta", nombre: "la punta", icono: "🔺", fila: 0, col: 1, reto: () => retoForma() },
      { id: "ala1", nombre: "el ala izquierda", icono: "🕊️", fila: 2, col: 0, reto: () => retoSuma(7) },
      { id: "fuselaje", nombre: "el cuerpo del cohete", icono: "🛢️", fila: 1, col: 1, reto: () => retoOrden(12, 4) },
      { id: "ventana", nombre: "la ventana", icono: "🌬️", fila: 2, col: 1, reto: () => retoContar("⭐", 7) },
      { id: "ala2", nombre: "el ala derecha", icono: "🕊️", fila: 2, col: 2, reto: () => retoSuma(8) },
      { id: "motor", nombre: "el motor", icono: "🔥", fila: 3, col: 1, reto: () => retoSerie(5, 5, 3) },
    ],
  };

  /* --- 3) Puente fuerte (5 piezas) --- */
  const puente = {
    id: "puente",
    nivel: 3,
    icono: "🌉",
    nombre: "Puente Fuerte",
    color: "#eb5757",
    intro: "Hay un río y los animalitos no pueden cruzar. Construye un puente fuerte para que pasen. ¡Cada pieza aguanta más si aciertas!",
    exito: "¡El puente aguanta! Los animalitos cruzan saltando de alegría. ¡Eres un gran constructor!",
    filas: 3,
    cols: 4,
    fondo: "🌊",
    piezas: [
      { id: "pilar1", nombre: "el pilar izquierdo", icono: "🏛️", fila: 1, col: 0, reto: () => retoSuma(6) },
      { id: "tabla1", nombre: "la primera tabla", icono: "🟫", fila: 0, col: 0, reto: () => retoSerie(1, 1, 4) },
      { id: "tabla2", nombre: "la tabla del medio", icono: "🟫", fila: 0, col: 1, reto: () => retoOrden(10, 4) },
      { id: "tabla3", nombre: "la última tabla", icono: "🟫", fila: 0, col: 2, reto: () => retoSuma(7) },
      { id: "pilar2", nombre: "el pilar derecho", icono: "🏛️", fila: 1, col: 3, reto: () => retoContar("⛰️", 6) },
    ],
  };

  /* --- 4) Máquina fantástica (6 piezas) --- */
  const maquina = {
    id: "maquina",
    nivel: 4,
    icono: "🎠",
    nombre: "Máquina Fantástica",
    color: "#219653",
    intro: "¡El reto final del taller! Esta máquina hace magia si la montas bien. Usa todo lo que sabes: cuentas, series y formas.",
    exito: "¡La Máquina Fantástica gira y hace magia! Brillan las luces y salen estrellas. ¡Eres inventor de verdad!",
    filas: 3,
    cols: 4,
    fondo: "✨",
    piezas: [
      { id: "base", nombre: "la base", icono: "⬛", fila: 1, col: 0, reto: () => retoForma() },
      { id: "engranaje", nombre: "el engranaje", icono: "⚙️", fila: 0, col: 1, reto: () => retoSuma(9) },
      { id: "tubo", nombre: "el tubo", icono: "🧪", fila: 2, col: 1, reto: () => retoSerie(10, 10, 3) },
      { id: "palanca", nombre: "la palanca", icono: "🕹️", fila: 0, col: 2, reto: () => retoOrden(15, 5) },
      { id: "rueda", nombre: "la rueda", icono: "🎡", fila: 2, col: 2, reto: () => retoContar("🎈", 8) },
      { id: "luz", nombre: "la luz mágica", icono: "💡", fila: 0, col: 3, reto: () => retoSuma(10) },
    ],
  };

  /* --- 5) Casita de campo (6 piezas) --- */
  const casa = {
    id: "casa",
    nivel: 5,
    icono: "🏠",
    nombre: "Casita de Campo",
    color: "#f2994a",
    intro: "Vamos a construir una casita con jardín y chimenea. Resuelve los retos para conseguir cada pieza y monta la casa para que alguien viva en ella.",
    exito: "¡La casita está terminada! Tiene tejado, ventana y humo en la chimenea. ¡Qué acogedora!",
    filas: 3,
    cols: 3,
    fondo: "🌳",
    piezas: [
      { id: "tejado", nombre: "el tejado", icono: "🔺", fila: 0, col: 1, reto: () => retoSuma(8) },
      { id: "chimenea", nombre: "la chimenea", icono: "🏭", fila: 0, col: 2, reto: () => retoResta(8) },
      { id: "pared", nombre: "la pared", icono: "🧱", fila: 1, col: 1, reto: () => retoOrden(11, 4) },
      { id: "ventana", nombre: "la ventana", icono: "🌬️", fila: 1, col: 0, reto: () => retoDoble(6) },
      { id: "puerta", nombre: "la puerta", icono: "🚪", fila: 1, col: 2, reto: () => retoSalto(2) },
      { id: "jardin", nombre: "el jardín", icono: "🌷", fila: 2, col: 1, reto: () => retoContar("🌼", 8) },
    ],
  };

  /* --- 6) Auto veloz (6 piezas) --- */
  const auto = {
    id: "auto",
    nivel: 6,
    icono: "🚗",
    nombre: "Auto Veloz",
    color: "#eb5757",
    intro: "¡Un auto de carreras sin ruedas no puede andar! Consigue las piezas con tus cuentas y móntalo para correr por la pista.",
    exito: "¡El Auto Veloz está listo! Arranca el motor y corre por la pista dejando una nube de polvo. ¡Zuum!",
    filas: 3,
    cols: 4,
    fondo: "🏁",
    piezas: [
      { id: "aleron", nombre: "el alerón", icono: "🕊️", fila: 0, col: 3, reto: () => retoResta(9) },
      { id: "carroceria", nombre: "la carrocería", icono: "🚙", fila: 0, col: 1, reto: () => retoSuma(9) },
      { id: "parabrisas", nombre: "el parabrisas", icono: "🌬️", fila: 0, col: 2, reto: () => retoSalto(2) },
      { id: "rueda1", nombre: "la rueda delantera", icono: "⚫", fila: 1, col: 1, reto: () => retoDoble(7) },
      { id: "rueda2", nombre: "la rueda trasera", icono: "⚫", fila: 1, col: 3, reto: () => retoMitad(10) },
      { id: "motor", nombre: "el motor", icono: "🔧", fila: 2, col: 2, reto: () => retoContar("🏁", 9) },
    ],
  };

  /* --- 7) Barco pirata (6 piezas) --- */
  const barco = {
    id: "barco",
    nivel: 7,
    icono: "⛵",
    nombre: "Barco Pirata",
    color: "#2d9cdb",
    intro: "Este barco quiere zarpar a buscar un tesoro, pero le faltan piezas y velas. ¡Constrúyelo con retos y hazlo navegar!",
    exito: "¡El Barco Pirata zarpa! Las velas se hinchan con el viento y el tesoro te espera en la isla. ¡Gran capitán!",
    filas: 3,
    cols: 4,
    fondo: "🌊",
    piezas: [
      { id: "bandera", nombre: "la bandera pirata", icono: "🏴", fila: 0, col: 1, reto: () => retoSuma(10) },
      { id: "vela", nombre: "la vela grande", icono: "⛵", fila: 0, col: 2, reto: () => retoMitad(12) },
      { id: "palo", nombre: "el mástil", icono: "🌲", fila: 1, col: 1, reto: () => retoOrden(14, 5) },
      { id: "timon", nombre: "el timón", icono: "🎡", fila: 1, col: 3, reto: () => retoDoble(8) },
      { id: "casco", nombre: "el casco", icono: "🚢", fila: 2, col: 1, reto: () => retoResta(10) },
      { id: "ancla", nombre: "el ancla", icono: "⚓", fila: 2, col: 2, reto: () => retoSalto(5) },
    ],
  };

  /* --- 8) INVENTO SECRETO: se desbloquea al terminar los 7 ---
     No aparece en la lista hasta que el niño completa el Barco.
     Sus piezas exigen 3 retos: es el reto final del taller. */
  const secreto = {
    id: "secreto",
    nivel: 8,
    icono: "🌟",
    nombre: "Invento Secreto",
    color: "#9b51e0",
    secreto: true,
    intro:
      "¡Entraste al almacén secreto del taller! Aquí se guardan las piezas que nunca se enseñan. Este invento pide TRES retos por pieza. ¿Te atreves?",
    exito:
      "¡El Invento Secreto se ha construido! Es una máquina de los sueños: hace palpable lo que imaginas. ¡Eres un inventor legendary!",
    filas: 4,
    cols: 4,
    fondo: "🌌",
    piezas: [
      { id: "nucleo", nombre: "el núcleo", icono: "⚛️", fila: 1, col: 1, reto: () => retoSuma(12) },
      { id: "antena", nombre: "la antena", icono: "📡", fila: 0, col: 2, reto: () => retoResta(12) },
      { id: "ala", nombre: "el ala de luz", icono: "🕊️", fila: 1, col: 2, reto: () => retoDoble(9) },
      { id: "propulsor", nombre: "el propulsor", icono: "🚀", fila: 2, col: 1, reto: () => retoSalto(3) },
      { id: "bateria", nombre: "la batería", icono: "🔋", fila: 2, col: 2, reto: () => retoContar("🔋", 9) },
      { id: "cristal", nombre: "el cristal mágico", icono: "💎", fila: 3, col: 1, reto: () => retoOrden(18, 5) },
      { id: "ojo", nombre: "el ojo de la máquina", icono: "👁️", fila: 1, col: 3, reto: () => retoForma() },
      { id: "base2", nombre: "la base de luz", icono: "💠", fila: 3, col: 2, reto: () => retoMitad(14) },
    ],
  };

  const LISTA = [robot, cohete, puente, maquina, casa, auto, barco, secreto];
  const porId = {};
  LISTA.forEach((t) => (porId[t.id] = t));

  /* Cuántos retos pide cada pieza para conseguirla:
     1 reto en los inventos fáciles, 2 en los avanzados y 3 en el
     invento secreto (el reto final del taller). */
  LISTA.forEach((t) => {
    t.piezas.forEach((p) => {
      p.retos = 1;
      if (t.id === "casa" || t.id === "auto" || t.id === "barco") p.retos = 2;
      if (t.id === "secreto") p.retos = 3;
    });
  });

  function todas() {
    return LISTA;
  }
  function info(id) {
    return porId[id] || null;
  }

  /* Total de piezas de un invento */
  function totalPiezas(t) {
    return t.piezas.length;
  }

  /* ---------------------------------------------------------
     Progreso guardado por perfil
     --------------------------------------------------------- */
  function _data() {
    try {
      const d = CORE.Store.data;
      if (!d.taller) d.taller = {};
      return d;
    } catch (e) {
      return { taller: {} };
    }
  }

  /* Estado de un invento:
     { conseguidas: [ids], colocadas: [ids], terminado: bool } */
  function estado(id) {
    const d = _data();
    if (!d.taller[id]) d.taller[id] = { conseguidas: [], colocadas: [], terminado: false };
    return d.taller[id];
  }

  function guardar() {
    try {
      CORE.Store.save();
    } catch (e) {}
  }

  /* Consigue una pieza (al acertar un reto). Devuelve la pieza
     o null si ya la tenía. */
  function conseguirPieza(id) {
    const t = porId[id];
    if (!t) return null;
    const e = estado(id);
    const siguiente = t.piezas.find((p) => e.conseguidas.indexOf(p.id) === -1);
    if (!siguiente) return null;
    e.conseguidas.push(siguiente.id);
    guardar();
    return siguiente;
  }

  /* Pieza pendiente de colocar (conseguida pero no colocada) */
  function piezaPendiente(id) {
    const t = porId[id];
    if (!t) return null;
    const e = estado(id);
    return t.piezas.find((p) => e.conseguidas.indexOf(p.id) !== -1 && e.colocadas.indexOf(p.id) === -1) || null;
  }

  /* Coloca una pieza en su sitio. Devuelve true si es correcta. */
  function colocarPieza(id, piezaId) {
    const t = porId[id];
    if (!t) return false;
    const pieza = t.piezas.find((p) => p.id === piezaId);
    if (!pieza) return false;
    const e = estado(id);
    if (e.colocadas.indexOf(piezaId) !== -1) return false;
    e.colocadas.push(piezaId);
    if (e.colocadas.length >= t.piezas.length) e.terminado = true;
    guardar();
    return true;
  }

  function colocadas(id) {
    return estado(id).colocadas.slice();
  }
  function conseguidas(id) {
    return estado(id).conseguidas.slice();
  }
  function terminado(id) {
    return !!estado(id).terminado;
  }

  /* Un invento está disponible si el anterior está terminado.
     El invento SECRETO solo se desbloquea cuando los 7 normales
     están terminados. */
  function terminadosNormales() {
    return LISTA.filter((t) => !t.secreto && terminado(t.id)).length;
  }

  function totalNormales() {
    return LISTA.filter((t) => !t.secreto).length;
  }

  function secretoDesbloqueado() {
    return terminadosNormales() >= totalNormales();
  }

  function disponible(id) {
    const t = porId[id];
    if (!t) return false;
    if (t.secreto) return secretoDesbloqueado();
    const idx = LISTA.findIndex((x) => x.id === id);
    if (idx <= 0) return true;
    return terminado(LISTA[idx - 1].id);
  }

  function terminados() {
    return LISTA.filter((t) => terminado(t.id)).length;
  }

  function siguiente() {
    return LISTA.find((t) => disponible(t.id) && !terminado(t.id)) || null;
  }

  /* Lista visible en el taller: el secreto NO se muestra hasta
     que se desbloquea (para que sea una sorpresa). */
  function visibles() {
    return LISTA.filter((t) => !t.secreto || secretoDesbloqueado() || terminado(t.id));
  }

  /* Reinicia un invento para volver a construirlo (sin perder
     los inventos ya terminados). */
  function reiniciar(id) {
    const d = _data();
    if (!d.taller[id]) return;
    d.taller[id] = { conseguidas: [], colocadas: [], terminado: false };
    guardar();
  }

  /* Instrucción hablada para colocar la pieza pendiente */
  function instruccion(id) {
    const t = porId[id];
    if (!t) return "";
    const p = piezaPendiente(id);
    if (!p) return "";
    return instruccionCelda(p.fila, p.col, t.filas, t.cols);
  }

  return {
    LISTA,
    todas,
    info,
    totalPiezas,
    estado,
    conseguirPieza,
    piezaPendiente,
    colocarPieza,
    colocadas,
    conseguidas,
    terminado,
    disponible,
    terminados,
    terminadosNormales,
    totalNormales,
    secretoDesbloqueado,
    visibles,
    siguiente,
    reiniciar,
    instruccion,
    instruccionCelda,
  };
})();
