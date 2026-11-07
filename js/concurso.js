/* =========================================================
   WEB LEER — Concurso de minijuegos
   ---------------------------------------------------------
   Una experiencia RÁPIDA que cambia de mecánica para que
   ninguna actividad se sienta igual a la anterior:

     1. 🏁 LA CARRERA: compites contra un personaje ficticio
        (Tortuga Zipa). Tú avanzas cuando ACIERTAS; Zipa
        avanza cuando FALLAS. Nunca por tiempo.
     2. 🎡 LA RULETA: una rueda elige el tipo de desafío.
     3. ⏳ EL RELOJ: una animación va apareciendo y hay que
        responder antes de que termine.
     4. 🧠 LA MEMORIA: encuentra las parejas escondidas.
     5. 👑 EL DESAFÍO FINAL: mezcla lectura y matemáticas.

   Aprendizaje: recuperación de conocimientos (recuerdas lo
   aprendido y lo usas) y flexibilidad mental (cada ronda
   cambia de reglas).

   EL TIEMPO ES OPCIONAL: el reloj está DESACTIVADO por
   defecto. Sin reloj, el niño puede pensar todo el tiempo
   que necesite. Con reloj, es un reto extra para quien quiera.
   ========================================================= */

window.CONCURSO = (function () {
  "use strict";

  const D = window.DATA;

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

  function enteros(n, max) {
    const v = [];
    let guard = 0;
    while (v.length < n && guard++ < 200) {
      const x = 1 + Math.floor(Math.random() * max);
      if (v.indexOf(x) === -1) v.push(x);
    }
    return v;
  }

  /* Cuatro opciones, siempre con la correcta dentro */
  function opcionesCon(correcto, distractores, cuantas) {
    const set = new Set([correcto]);
    const max = Math.max(2, Math.min(cuantas || 4, distractores.length + 1));
    let guard = 0;
    while (set.size < max && guard++ < 90) {
      set.add(distractores[Math.floor(Math.random() * distractores.length)]);
    }
    return barajar(Array.from(set));
  }

  /* ---------------------------------------------------------
     GENERADORES DE RETOS
     Cada reto trae: enunciado, hablar, opciones, correcto.
     --------------------------------------------------------- */

  /* ¿Con qué letra empieza este objeto? */
  function retoInicial() {
    const pool = D.objetos && D.objetos.length ? D.objetos : [];
    if (!pool.length) return null;
    const obj = pool[Math.floor(Math.random() * pool.length)];
    const letra = obj.w.charAt(0);
    const letras = ["M", "P", "L", "C", "S", "G", "T", "A", "R", "V", "D", "N"];
    const distractoras = letras.filter((l) => l !== letra);
    return {
      tipo: "inicial",
      etiqueta: "Inicial",
      enunciado: "¿Con qué letra empieza?",
      hablar: "Este es " + obj.w.toLowerCase() + ". ¿Con qué letra empieza?",
      emoji: obj.emoji,
      opciones: opcionesCon(letra, distractoras),
      correcto: letra,
      pista: "Escucha bien el sonido del principio de la palabra.",
    };
  }

  /* Ordena las sílabas de una palabra */
  function retoSilaba() {
    const pool = (D.palabras || []).filter((p) => p.syl && p.syl.length >= 2 && p.syl.length <= 3);
    if (!pool.length) return null;
    const p = pool[Math.floor(Math.random() * pool.length)];
    return {
      tipo: "silaba",
      etiqueta: "Sílabas",
      enunciado: "Toca las sílabas en orden",
      hablar: "Ordena las sílabas para formar la palabra: " + p.syl.join(", ") + ".",
      emoji: p.emoji,
      opciones: barajar(p.syl.slice()),
      correcto: p.syl.slice(),
      secuencia: true,
      pista: "Piensa en cómo se pronuncia la palabra poco a poco.",
    };
  }

  /* Suma */
  function retoSuma() {
    const a = 1 + Math.floor(Math.random() * 8);
    const b = 1 + Math.floor(Math.random() * 8);
    const total = a + b;
    const distract = [];
    for (let i = 0; i < 10; i++) distract.push(total + (Math.floor(Math.random() * 5) - 2));
    return {
      tipo: "suma",
      etiqueta: "Suma",
      enunciado: a + " + " + b + " = ?",
      hablar: "¿Cuánto es " + a + " más " + b + "?",
      opciones: opcionesCon(total, distract.filter((v) => v >= 1)),
      correcto: total,
      pista: "Junta las dos cantidades y cuenta el total.",
    };
  }

  /* Resta (nunca negativa) */
  function retoResta() {
    const a = 3 + Math.floor(Math.random() * 8);
    const b = 1 + Math.floor(Math.random() * (a - 1));
    const total = a - b;
    const distract = [];
    for (let i = 0; i < 10; i++) distract.push(total + (Math.floor(Math.random() * 5) - 2));
    return {
      tipo: "resta",
      etiqueta: "Resta",
      enunciado: a + " − " + b + " = ?",
      hablar: "¿Cuánto es " + a + " menos " + b + "?",
      opciones: opcionesCon(total, distract.filter((v) => v >= 0)),
      correcto: total,
      pista: "Quita " + b + " al número " + a + " y cuenta lo que queda.",
    };
  }

  /* Cuenta cuántos hay */
  function retoCuenta() {
    const emojis = ["🍎", "⭐", "🍬", "🎈", "🍪", "🧁", "🐤", "🌸"];
    const e = emojis[Math.floor(Math.random() * emojis.length)];
    const n = 2 + Math.floor(Math.random() * 6);
    const distract = [];
    for (let i = 0; i < 8; i++) distract.push(Math.max(1, n + (Math.floor(Math.random() * 4) - 2)));
    return {
      tipo: "cuenta",
      etiqueta: "Cuenta",
      enunciado: "¿Cuántos hay?",
      hablar: "Cuenta cuántos hay. Toca uno a uno mientras cuentas.",
      emojis: Array(n).fill(e),
      opciones: opcionesCon(n, distract),
      correcto: n,
      pista: "Cuenta despacio, uno, dos, tres…",
    };
  }

  /* ¿Cuál es esta figura? (se dibuja en SVG) */
  function retoForma() {
    const pool = D.figuras || [];
    if (!pool.length) return null;
    const f = pool[Math.floor(Math.random() * pool.length)];
    const svgDe = {};
    pool.forEach((x) => (svgDe[x.nombre] = x.svg));
    const otros = pool.filter((x) => x.nombre !== f.nombre).map((x) => x.nombre);
    return {
      tipo: "forma",
      etiqueta: "Figura",
      enunciado: "¿Cuál es un " + f.nombre + "?",
      hablar: "Busca la figura: " + f.nombre + ".",
      opciones: opcionesCon(f.nombre, otros),
      svgOpcion: svgDe,
      correcto: f.nombre,
      pista: "Mira los lados y las esquinas de cada figura.",
    };
  }

  /* ¿Qué letra hace ese sonido? (conciencia fonológica) */
  function retoSonido() {
    const pool = (D.consonantes || []).filter((c) => c.sound && c.sound !== "no suena");
    if (!pool.length) return null;
    const c = pool[Math.floor(Math.random() * pool.length)];
    const otros = pool.filter((x) => x.l !== c.l).map((x) => x.l);
    return {
      tipo: "sonido",
      etiqueta: "Sonido",
      enunciado: "¿Qué letra hace «" + c.sound + "»?",
      hablar: "Escucha el sonido: " + c.sound + ". ¿Qué letra lo hace?",
      opciones: opcionesCon(c.l, otros),
      correcto: c.l,
      pista: "Mira las letras y di cuál suena con ese sonido.",
    };
  }

  /* Elige la palabra del dibujo */
  function retoImagen() {
    const pool = D.palabras || [];
    if (!pool.length) return null;
    const p = pool[Math.floor(Math.random() * pool.length)];
    const otros = pool.filter((x) => x.w !== p.w).map((x) => x.w);
    return {
      tipo: "imagen",
      etiqueta: "Palabra",
      enunciado: "¿Qué palabra es este dibujo?",
      hablar: "¿Qué palabra es este dibujo?",
      emoji: p.emoji,
      opciones: opcionesCon(p.w, otros),
      correcto: p.w,
      pista: "Mira el dibujo y di la palabra en voz alta.",
    };
  }

  /* Completa la serie de números */
  function retoSerie() {
    const paso = [1, 2, 5, 10][Math.floor(Math.random() * 4)];
    const inicio = paso;
    const s = [];
    for (let i = 0; i < 3; i++) s.push(inicio + i * paso);
    const falta = inicio + 3 * paso;
    const distract = [];
    for (let i = 0; i < 8; i++) distract.push(falta + (Math.floor(Math.random() * (paso * 2 + 1)) - paso));
    return {
      tipo: "serie",
      etiqueta: "Serie",
      enunciado: s.join(", ") + ", ?",
      hablar: "La serie va de " + paso + " en " + paso + ". ¿Qué número sigue?",
      opciones: opcionesCon(falta, distract.filter((v) => v > 0 && v !== falta)),
      correcto: falta,
      pista: "Suma " + paso + " al último número.",
    };
  }

  /* Problema de la vida real: lectura + matemáticas */
  function retoProblema() {
    const pool = D.problemasMate || [];
    if (!pool.length) return null;
    const p = pool[Math.floor(Math.random() * pool.length)];
    const total = 3 + Math.floor(Math.random() * 6);
    const quitan = 1 + Math.floor(Math.random() * (total - 1));
    const quedan = total - quitan;
    const distract = [];
    for (let i = 0; i < 8; i++) distract.push(Math.max(0, quedan + (Math.floor(Math.random() * 5) - 2)));
    return {
      tipo: "problema",
      etiqueta: "Problema",
      enunciado:
        p.quien + " tiene " + total + " " + p.nombreObj + " y da " + quitan + ". ¿Cuántas le quedan?",
      hablar:
        p.quien + " tiene " + total + " " + p.nombreObj + " y da " + quitan + ". ¿Cuántas le quedan?",
      emojis: [p.objeto],
      opciones: opcionesCon(quedan, distract),
      correcto: quedan,
      pista: "Cuenta las que quedan después de dar.",
    };
  }

  /* Mayúscula o minúscula */
  function retoMayus() {
    const letras = (D.vocales || []).map((v) => v.l).concat((D.consonantes || []).map((c) => c.l));
    if (!letras.length) return null;
    const l = letras[Math.floor(Math.random() * letras.length)];
    const esMayus = Math.random() < 0.5;
    const correcta = esMayus ? l.toUpperCase() : l.toLowerCase();
    const distract = [];
    letras.forEach((x) => {
      if (x.toUpperCase() !== correcta) distract.push(esMayus ? x.toLowerCase() : x.toUpperCase());
    });
    return {
      tipo: "mayus",
      etiqueta: "Mayús",
      enunciado: "¿Cómo se escribe esta letra?",
      hablar: "¿Esta letra se escribe en mayúscula o en minúscula?",
      letras: [esMayus ? l.toUpperCase() : l.toLowerCase()],
      opciones: opcionesCon(correcta, distract),
      correcto: correcta,
      pista: "Mira si la letra es grande o pequeña.",
    };
  }

  /* Catálogo de desafíos para la ruleta */
  const DESAFIOS = [
    { id: "inicial", icono: "🔤", reto: retoInicial },
    { id: "silaba", icono: "🧩", reto: retoSilaba },
    { id: "suma", icono: "➕", reto: retoSuma },
    { id: "cuenta", icono: "🔢", reto: retoCuenta },
    { id: "forma", icono: "⭐", reto: retoForma },
    { id: "sonido", icono: "🔊", reto: retoSonido },
    { id: "imagen", icono: "🖼️", reto: retoImagen },
    { id: "serie", icono: "🔢", reto: retoSerie },
    { id: "problema", icono: "🧠", reto: retoProblema },
    { id: "mayus", icono: "🔠", reto: retoMayus },
  ];

  /* Genera un reto del tipo pedido (o uno al azar) */
  function generarReto(tipo) {
    const encontrados = DESAFIOS.filter((d) => d.id === tipo);
    const lista = encontrados.length ? encontrados : DESAFIOS;
    for (let i = 0; i < 25; i++) {
      const d = lista[Math.floor(Math.random() * lista.length)];
      const r = d.reto();
      if (r) {
        r.desafio = d.id;
        r.iconoDesafio = d.icono;
        return r;
      }
    }
    return null;
  }

  /* ---------------------------------------------------------
     RONDAS DEL CONCURSO
     --------------------------------------------------------- */
  const RONDAS = [
    {
      id: "r1",
      numero: 1,
      nombre: "La Carrera",
      icono: "🏁",
      color: "#2f80ed",
      tipo: "carrera",
      desc: "Corre contra Tortuga Zipa. Tú avanzas cuando aciertas.",
      rival: { nombre: "Tortuga Zipa", emoji: "🐢", frase: "¡Zumba! Aunque parece lenta, llega la primera." },
    },
    {
      id: "r2",
      numero: 2,
      nombre: "La Ruleta",
      icono: "🎡",
      color: "#f2994a",
      tipo: "ruleta",
      desc: "Gira la rueda y el azar decide tu desafío.",
    },
    {
      id: "r3",
      numero: 3,
      nombre: "El Reloj",
      icono: "⏳",
      color: "#eb5757",
      tipo: "animacion",
      desc: "Los objetos van apareciendo. ¿Cuántos hay cuando pare?",
    },
    {
      id: "r4",
      numero: 4,
      nombre: "La Memoria",
      icono: "🧠",
      color: "#9b51e0",
      tipo: "memoria",
      desc: "Encuentra las parejas: la palabra con su letra.",
    },
    {
      id: "r5",
      numero: 5,
      nombre: "El Desafío Final",
      icono: "👑",
      color: "#219653",
      tipo: "final",
      desc: "Lectura y matemáticas mezcladas. ¡El último reto!",
    },
  ];

  const porId = {};
  RONDAS.forEach((r) => (porId[r.id] = r));

  function rondas() {
    return RONDAS;
  }
  function info(id) {
    return porId[id] || null;
  }
  function totalRondas() {
    return RONDAS.length;
  }
  function desafios() {
    return DESAFIOS;
  }

  /* ---------------------------------------------------------
     Progreso guardado por perfil
     --------------------------------------------------------- */
  function _data() {
    try {
      const d = CORE.Store.data;
      if (!d.concurso) d.concurso = { rondas: {}, reloj: false };
      if (!d.concurso.rondas) d.concurso.rondas = {};
      return d;
    } catch (e) {
      return { concurso: { rondas: {}, reloj: false } };
    }
  }

  function guardar() {
    try {
      CORE.Store.save();
    } catch (e) {}
  }

  function progreso(id) {
    const d = _data();
    if (!d.concurso.rondas[id]) d.concurso.rondas[id] = { aciertos: 0, fallos: 0, puntos: 0, terminada: false };
    return d.concurso.rondas[id];
  }

  function rondasHechas() {
    const d = _data();
    return RONDAS.filter((r) => d.concurso.rondas[r.id] && d.concurso.rondas[r.id].terminada).length;
  }

  /* Una ronda está disponible si la anterior está terminada. */
  function disponible(id) {
    const idx = RONDAS.findIndex((r) => r.id === id);
    if (idx <= 0) return true;
    const d = _data();
    const prev = d.concurso.rondas[RONDAS[idx - 1].id];
    return !!(prev && prev.terminada);
  }

  function siguiente() {
    return RONDAS.find((r) => disponible(r.id) && !progreso(r.id).terminada) || null;
  }

  /* Registra un acierto o fallo y suma puntos */
  function registrar(id, acierto, puntos) {
    const p = progreso(id);
    if (acierto) {
      p.aciertos++;
      p.puntos += puntos || 10;
    } else {
      p.fallos++;
    }
    guardar();
    return p;
  }

  function terminarRonda(id, puntos) {
    const p = progreso(id);
    p.terminada = true;
    if (puntos) p.puntos += puntos;
    guardar();
    return p;
  }

  function puntosTotales() {
    const d = _data();
    let t = 0;
    RONDAS.forEach((r) => {
      const p = d.concurso.rondas[r.id];
      if (p) t += p.puntos || 0;
    });
    return t;
  }

  function reiniciar(id) {
    const d = _data();
    d.concurso.rondas[id] = { aciertos: 0, fallos: 0, puntos: 0, terminada: false };
    guardar();
  }

  function reiniciarTodo() {
    const d = _data();
    d.concurso.rondas = {};
    guardar();
  }

  /* ---------------------------------------------------------
     EL RELOJ ES OPCIONAL
     --------------------------------------------------------- */
  function conReloj() {
    const d = _data();
    return !!d.concurso.reloj;
  }

  function setReloj(v) {
    const d = _data();
    d.concurso.reloj = !!v;
    guardar();
    return d.concurso.reloj;
  }

  /* ---------------------------------------------------------
     RONDA DE MEMORIA: parejas palabra ↔ letra
     --------------------------------------------------------- */
  function generarMemoria(cuantas) {
    const n = cuantas || 6;
    const pool = (D.objetos || []).filter((o) => o.w && o.w.length > 1);
    if (pool.length < n) return null;
    const elegidos = barajar(pool).slice(0, n);
    const cartas = [];
    elegidos.forEach((o, i) => {
      const letra = o.w.charAt(0);
      cartas.push({ id: "a" + i, par: i, lado: "palabra", txt: o.w, emoji: o.emoji });
      cartas.push({ id: "b" + i, par: i, lado: "letra", txt: letra, emoji: "" });
    });
    return { cartas: barajar(cartas), pares: n };
  }

  return {
    RONDAS,
    DESAFIOS,
    rondas,
    info,
    totalRondas,
    desafios,
    generarReto,
    generarMemoria,
    progreso,
    rondasHechas,
    disponible,
    siguiente,
    registrar,
    terminarRonda,
    puntosTotales,
    reiniciar,
    reiniciarTodo,
    conReloj,
    setReloj,
  };
})();
