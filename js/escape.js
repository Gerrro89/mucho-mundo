/* =========================================================
   WEB LEER — Escape rooms educativos
   ---------------------------------------------------------
   Cada SALA es una pequeña habitación con un misterio que
   solo se resuelve superando retos. El niño:

     1. Explora el escenario y toca objetos que BRILLAN para
        descubrir PISTAS escondidas (habladas, sin leer solas).
     2. Resuelve CANDADOS (números, letras, sílabas, palabras)
        tocando opciones grandes.
     3. Los retos van de fácil a difícil dentro de la sala.
     4. Un candado FINAL combina lo aprendido y abre la puerta.

   Aprendizaje: razonamiento lógico, memoria y aplicación de
   conocimientos en situaciones nuevas.

   Nunca hay castigo: si falla, se le anima y puede repetir.
   El progreso se guarda por perfil en Store.data.escape.
   ========================================================= */

window.ESCAPE = (function () {
  "use strict";

  const D = window.DATA;

  /* ---------------------------------------------------------
     Helpers de contenido (reutilizan el currículo existente)
     --------------------------------------------------------- */
  const VOCALES = D.vocales.map((v) => v.l);
  const CONSONANTES = D.consonantes.map((c) => c.l);

  const palabrasDe = (n) => D.palabras.filter((p) => p.syl.length === n);
  const objetosConLetra = (l) => D.objetos.filter((o) => o.w.charAt(0) === l);

  /* Genera un candado de SUMA (opciones grandes). */
  function candadoSuma(max, id, pista) {
    return {
      id: id,
      tipo: "suma",
      pista: pista,
      generar() {
        const a = 1 + Math.floor(Math.random() * (max - 1));
        const b = 1 + Math.floor(Math.random() * (max - 1));
        const total = a + b;
        const opciones = new Set([total]);
        let guard = 0;
        while (opciones.size < 4 && guard++ < 60) {
          const v = total + (Math.floor(Math.random() * 5) - 2);
          if (v >= 1 && v <= max * 2) opciones.add(v);
        }
        return {
          enunciado: a + " + " + b + " = ?",
          hablar: "¿Cuánto es " + a + " más " + b + "?",
          opciones: Array.from(opciones),
          correcto: total,
        };
      },
    };
  }

  /* Candado de ORDENAR NÚMEROS: el niño toca los números de menor
     a mayor. Se valida la secuencia completa. */
  function candadoOrden(id, max, cuantos, pista) {
    return {
      id: id,
      tipo: "orden",
      pista: pista,
      generar() {
        const nums = [];
        while (nums.length < cuantos) {
          const v = 1 + Math.floor(Math.random() * max);
          if (nums.indexOf(v) === -1) nums.push(v);
        }
        const correcto = nums.slice().sort((x, y) => x - y);
        return {
          enunciado: "Toca los números de menor a mayor",
          hablar: "Toca los números en orden, del más pequeño al más grande.",
          opciones: nums.slice(),
          correcto: correcto,
          secuencia: true,
        };
      },
    };
  }

  /* Candado de LETRA INICIAL: muestra un emoji/palabra y hay que
     elegir con qué letra empieza. */
  function candadoLetra(letras, id, pista) {
    return {
      id: id,
      tipo: "letra",
      pista: pista,
      generar() {
        const pool = D.objetos.filter((o) => letras.indexOf(o.w.charAt(0)) !== -1);
        const obj = pool[Math.floor(Math.random() * pool.length)] || D.objetos[0];
        const correcto = obj.w.charAt(0);
        const opciones = new Set([correcto]);
        let guard = 0;
        while (opciones.size < 4 && guard++ < 60) {
          const l = letras[Math.floor(Math.random() * letras.length)];
          opciones.add(l);
        }
        return {
          enunciado: "¿Con qué letra empieza?",
          emoji: obj.emoji,
          muestra: obj.w,
          hablar: "Esto es " + obj.w + ". ¿Con qué letra empieza?",
          opciones: Array.from(opciones),
          correcto: correcto,
        };
      },
    };
  }

  /* Candado de SÍLABAS: hay que ordenar las sílabas de una palabra. */
  function candadoSilaba(id, pista) {
    return {
      id: id,
      tipo: "silaba",
      pista: pista,
      generar() {
        const pool = D.palabras.filter((p) => p.syl.length === 2);
        const p = pool[Math.floor(Math.random() * pool.length)];
        const correcto = p.syl.slice();
        const mezcla = correcto.slice().reverse();
        return {
          enunciado: "Ordena las sílabas para formar la palabra",
          emoji: p.emoji,
          hablar: "Ordena las sílabas para formar la palabra " + p.w + ".",
          opciones: mezcla,
          correcto: correcto,
          secuencia: true,
        };
      },
    };
  }

  /* Candado de PALABRA ESCONDIDA: elegir el nombre correcto de una imagen. */
  function candadoPalabra(id, pista) {
    return {
      id: id,
      tipo: "palabra",
      pista: pista,
      generar() {
        const obj = D.objetos[Math.floor(Math.random() * D.objetos.length)];
        const correcto = obj.w;
        const opciones = new Set([correcto]);
        let guard = 0;
        while (opciones.size < 3 && guard++ < 60) {
          const o = D.objetos[Math.floor(Math.random() * D.objetos.length)];
          opciones.add(o.w);
        }
        return {
          enunciado: "¿Qué es? Toca la palabra correcta",
          emoji: obj.emoji,
          hablar: "Mira el dibujo. ¿Qué palabra es?",
          opciones: Array.from(opciones),
          correcto: correcto,
        };
      },
    };
  }

  /* ---------------------------------------------------------
     DEFINICIÓN DE LAS SALAS
     Cada sala tiene:
       · escenario: lista de objetos donde se esconden pistas.
       · pistas: la pista que suelta cada objeto brillante.
       · candados: retos de dificultad progresiva.
       · final: el candado que combina lo aprendido y abre la puerta.
     --------------------------------------------------------- */
  const LISTA = [
    /* ---------- SALA 1: El templo de los números ---------- */
    {
      id: "s1",
      nivel: 1,
      icono: "🏛️",
      nombre: "El templo de los números",
      color: "#c4650a",
      intro:
        "La puerta del templo está cerrada con tres candados. Detrás vive un tesoro de números. ¿Te atreves a entrar?",
      exito: "¡El templo se abrió! Los números brillan y el tesoro es tuyo. ¡Eres un gran explorador!",
      escenario: ["🗿", "🏺", "🕯️", "🗝️"],
      pistas: [
        "Las piedras susurran: «cuenta con calma, uno por uno».",
        "En la vasija hay una nota: «el número más pequeño va primero».",
        "La vela ilumina una marca: «suma despacio y no te apures».",
        "La llave dorada dice: «la respuesta abre la puerta».",
      ],
      candados: [
        candadoOrden("c1", 9, 4, "Ordena cuatro números del más pequeño al más grande."),
        candadoSuma(5, "c2", "Resuelve la suma para mover el primer cerrojo."),
        candadoLetra(VOCALES, "c3", "Las vocales también guardan el templo: mira con qué letra empieza."),
      ],
      final: candadoSuma(6, "cf", "El candado final junta dos sumas. ¡Piensa bien!"),
    },

    /* ---------- SALA 2: La biblioteca de las letras ---------- */
    {
      id: "s2",
      nivel: 2,
      icono: "📚",
      nombre: "La biblioteca de las letras",
      color: "#2f80ed",
      intro:
        "Un viento travieso mezcló los libros de la biblioteca. Para salir hay que ordenar las letras y las palabras otra vez.",
      exito: "¡La biblioteca quedó ordenada! Los libros flotan contentos y la puerta se abre sola.",
      escenario: ["📖", "🕰️", "🔍", "🛋️"],
      pistas: [
        "Un libro abierto dice: «cada palabra empieza por una letra».",
        "El reloj marca: «siempre de la A a la Z».",
        "La lupa revela: «mira bien la primera letra».",
        "La silla tiene un papel: «no corras, escucha el sonido».",
      ],
      candados: [
        candadoLetra(CONSONANTES.slice(0, 8), "c1", "Escucha la palabra y busca su primera letra."),
        candadoSilaba("c2", "Ordena las dos sílabas y la palabra aparecerá."),
        candadoPalabra("c3", "Mira el dibujo y elige la palabra correcta."),
      ],
      final: candadoSilaba("cf", "El libro secreto esconde una palabra más. ¡Ordénala!"),
    },

    /* ---------- SALA 3: La cueva de las sumas ---------- */
    {
      id: "s3",
      nivel: 3,
      icono: "🕳️",
      nombre: "La cueva de las sumas",
      color: "#9b51e0",
      intro:
        "En la cueva, los murciélagos guardan piedras de cristal. Cada piedra tiene una suma. Solo el que sume bien llega a la salida.",
      exito: "¡Saliste de la cueva! Las piedras de cristal brillan y te dejan pasar al sol.",
      escenario: ["🦇", "💎", "⛰️", "🔥"],
      pistas: [
        "El murciélago chilla: «cuenta los dedos de las manos».",
        "El cristal brilla con una pista: «junta las dos cantidades».",
        "La roca pesa y dice: «primero el número mayor».",
        "El fuego calienta: «suma y respira, tú puedes».",
      ],
      candados: [
        candadoSuma(6, "c1", "Calienta motores con esta suma."),
        candadoOrden("c2", 12, 4, "Ordena los cristales del más pequeño al mayor."),
        candadoSuma(9, "c3", "Esta suma es un poquito más grande."),
      ],
      final: candadoSuma(10, "cf", "El candado de salida pide una suma grande. ¡Tú puedes!"),
    },

    /* ---------- SALA 4: El castillo de las palabras ---------- */
    {
      id: "s4",
      nivel: 4,
      icono: "🏰",
      nombre: "El castillo de las palabras",
      color: "#eb5757",
      intro:
        "El castillo tiene un dragón guardián que solo deja pasar a quien lea bien. Hay que descifrar tres palabras para llegar a la torre.",
      exito: "¡El dragón se hizo tu amigo! Te dejó subir a la torre y ver todo el reino desde arriba.",
      escenario: ["🐉", "🛡️", "👑", "🗡️"],
      pistas: [
        "El dragón ruge: «lee despacio y con valentía».",
        "El escudo tiene un dibujo: «mira la imagen antes de elegir».",
        "La corona dice: «las sílabas se juntan para formar palabras».",
        "La espada señala: «la palabra correcta brilla».",
      ],
      candados: [
        candadoPalabra("c1", "El primer guardián pide el nombre de un dibujo."),
        candadoSilaba("c2", "El segundo guardián desordenó una palabra."),
        candadoLetra(CONSONANTES, "c3", "El tercer guardián pregunta por la primera letra."),
      ],
      final: candadoPalabra("cf", "El dragón pide una última palabra para dejarnos pasar. ¡Mírala bien!"),
    },

    /* ---------- SALA 5: La torre maestra (combina todo) ---------- */
    {
      id: "s5",
      nivel: 5,
      icono: "🗼",
      nombre: "La torre maestra",
      color: "#219653",
      intro:
        "La torre más alta guarda el gran misterio. Aquí se junta todo lo aprendido: números, letras, sílabas, palabras y sumas. ¡Es el reto final!",
      exito: "¡Corona de maestro! Abriste la torre maestra combinando números, letras y palabras. ¡Increíble trabajo!",
      escenario: ["🌈", "⭐", "🔮", "🎇"],
      pistas: [
        "El arcoíris dice: «has aprendido mucho, confía en ti».",
        "La estrella brilla: «cada reto usa algo que ya sabes».",
        "La bola mágica muestra: «une todo lo que aprendiste».",
        "El fuego artificial estalla: «¡ya casi lo logras!».",
      ],
      candados: [
        candadoOrden("c1", 15, 4, "Mezcla de números: ordénalos de menor a mayor."),
        candadoLetra(VOCALES.concat(CONSONANTES.slice(0, 6)), "c2", "Mezcla de letras: mira con qué empieza."),
        candadoSuma(10, "c3", "Mezcla de sumas: resuélvela con calma."),
        candadoPalabra("c4", "Mezcla de palabras: elige la palabra correcta."),
      ],
      final: candadoSilaba("cf", "El candado maestro junta sílabas y palabras. ¡Último esfuerzo!"),
    },
  ];

  const porId = {};
  LISTA.forEach((r) => (porId[r.id] = r));

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
      if (!d.escape) d.escape = {};
      return d;
    } catch (e) {
      return { escape: {} };
    }
  }

  /* Total de cerrojos de una sala (candados + final) */
  function totalCerrojos(sala) {
    return sala.candados.length + 1;
  }

  function abierta(id) {
    const d = _data();
    return !!(d.escape[id] && d.escape[id].abierta);
  }

  function resueltos(id) {
    const d = _data();
    return (d.escape[id] && d.escape[id].cerrojos) || 0;
  }

  /* Una sala está disponible si la anterior está abierta. */
  function disponible(id) {
    const idx = LISTA.findIndex((r) => r.id === id);
    if (idx <= 0) return true;
    return abierta(LISTA[idx - 1].id);
  }

  /* Avanza un cerrojo. Devuelve el número de cerrojos resueltos y
     si la sala acaba de abrirse. */
  function avanzarCerrojo(id) {
    const sala = porId[id];
    if (!sala) return { resueltos: 0, abierta: false };
    const d = _data();
    if (!d.escape[id]) d.escape[id] = { cerrojos: 0, abierta: false, pistas: [] };
    const reg = d.escape[id];
    const total = totalCerrojos(sala);
    if (reg.cerrojos < total) reg.cerrojos++;
    const fin = reg.cerrojos >= total;
    const recienAbierta = fin && !reg.abierta;
    if (fin) reg.abierta = true;
    CORE.Store.save();
    return { resueltos: reg.cerrojos, total: total, abierta: fin, recienAbierta: recienAbierta };
  }

  /* Pistas descubiertas de una sala (índices). */
  function pistasVistas(id) {
    const d = _data();
    return (d.escape[id] && d.escape[id].pistas) || [];
  }

  function marcarPista(id, idx) {
    const d = _data();
    if (!d.escape[id]) d.escape[id] = { cerrojos: 0, abierta: false, pistas: [] };
    const vistas = d.escape[id].pistas;
    if (vistas.indexOf(idx) === -1) {
      vistas.push(idx);
      CORE.Store.save();
      return true;
    }
    return false;
  }

  function salasAbiertas() {
    return LISTA.filter((r) => abierta(r.id)).length;
  }

  /* Siguiente sala disponible y sin abrir, o null */
  function siguiente() {
    return LISTA.find((r) => disponible(r.id) && !abierta(r.id)) || null;
  }

  /* Reinicia los cerrojos de una sala (para repetirla, sin perder
     las salas ya abiertas ni las pistas). */
  function reiniciarSala(id) {
    const d = _data();
    if (!d.escape[id]) return;
    d.escape[id].cerrojos = 0;
    d.escape[id].abierta = false;
    CORE.Store.save();
  }

  return {
    LISTA,
    todas,
    info,
    abierta,
    disponible,
    resueltos,
    totalCerrojos,
    avanzarCerrojo,
    pistasVistas,
    marcarPista,
    salasAbiertas,
    siguiente,
    reiniciarSala,
  };
})();
