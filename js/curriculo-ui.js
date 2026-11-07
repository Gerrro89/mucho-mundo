/* =========================================================
   CURRICULO — Interfaz (grados, materias y lecciones)
   Añade a la app las pantallas de materias por grado y el
   flujo de lección Descubrir → Practicar → Jugar → Demostrar.
   También registra tipos de actividad nuevos en ACT.tipos.

   TODO funciona SIN CONEXIÓN.
   ========================================================= */

window.CURRICULO_UI = (function () {
  "use strict";

  const C = CORE;
  const $ = C.$;
  const el = C.el;
  const CUR = window.CURRICULO;

  /* =========================================================
     1. PROGRESO DEL CURRICULO
     Se guarda en data.curriculo[idTema] = {hecho, estrellas...}
     ========================================================= */
  function progreso() {
    const d = C.Store.data;
    if (!d.curriculo || typeof d.curriculo !== "object") d.curriculo = {};
    return d.curriculo;
  }
  function estadoTema(id) {
    return progreso()[id] || null;
  }
  function temaListo(id) {
    const e = estadoTema(id);
    return !!(e && e.hecho);
  }
  function marcarTema(id, estrellas) {
    const p = progreso();
    const prev = p[id] || { intentos: 0, estrellas: 0 };
    prev.hecho = true;
    prev.intentos = (prev.intentos || 0) + 1;
    prev.estrellas = Math.max(prev.estrellas || 0, estrellas);
    prev.fecha = Date.now();
    p[id] = prev;
    C.Store.data.ultimoTema = id;
    C.Store.data.estrellas = (C.Store.data.estrellas || 0) + estrellas;
    C.Store.save();
  }
  /* Registro por fase (aditivo): pinta el caminito de la lección
     con las paradas que el niño ya completó. data.curriculo[idTema]
     .fases = { descubrir: ts, practicar: ts, ... } */
  function marcarFase(idTema, fase) {
    const p = progreso();
    const e = p[idTema] = p[idTema] || {};
    e.fases = e.fases || {};
    e.fases[fase] = Date.now();
    C.Store.save();
  }
  function gradoActual() {
    return C.Store.data.grado || null;
  }
  function materiasActuales() {
    const m = C.Store.data.materias;
    if (m && m.length) return m.slice();
    return CUR.MATERIAS.map((x) => x.id);
  }
  function progresoMateria(grado, materia) {
    const lista = CUR.listaConId(grado, materia);
    const hechos = lista.filter((t) => temaListo(t.id)).length;
    return {
      total: lista.length,
      hechos: hechos,
      pct: lista.length ? Math.round((hechos * 100) / lista.length) : 0,
    };
  }
  function temaDisponible(grado, materia, indice) {
    if (indice <= 0) return true;
    const lista = CUR.listaConId(grado, materia);
    return temaListo(lista[indice - 1].id);
  }
  function siguienteTemaPendiente(grado, materia) {
    const lista = CUR.listaConId(grado, materia);
    for (let i = 0; i < lista.length; i++) {
      if (!temaListo(lista[i].id)) return lista[i];
    }
    return null;
  }

  /* =========================================================
     2. UTILIDADES
     ========================================================= */
  function cabecera(titulo, sub) {
    const c = el("div", "cabecera-pantalla");
    c.appendChild(el("h1", "", titulo));
    if (sub) c.appendChild(el("p", "", sub));
    return c;
  }
  function boton(texto, clase, alTocar) {
    const b = el("button", clase || "btn grande", texto);
    b.type = "button";
    b.onclick = () => {
      C.Sfx.clic();
      alTocar();
    };
    return b;
  }
  /* Habla un texto en inglés: usa una voz en-US del sistema si la
     hay; si no, cae a la voz normal de la app. */
  let vozEn = undefined;
  function decirEn(texto) {
    if (!texto) return;
    try {
      const sint = window.speechSynthesis;
      if (!sint) return C.Voz.decir(texto);
      if (vozEn === undefined) {
        vozEn = sint.getVoices().filter((v) => /^en/i.test(v.lang || ""))[0] || null;
        sint.onvoiceschanged = () => {
          vozEn = sint.getVoices().filter((v) => /^en/i.test(v.lang || ""))[0] || null;
        };
      }
      if (!vozEn) return C.Voz.decir(texto);
      sint.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.voice = vozEn;
      u.lang = vozEn.lang || "en-US";
      u.rate = 0.92;
      u.pitch = 1.15;
      setTimeout(() => {
        try {
          sint.speak(u);
        } catch (e) {}
      }, 55);
    } catch (e) {
      C.Voz.decir(texto);
    }
  }

  /* Aviso pequeño en pantalla (además de que Kiko lo diga) */
  let timerAviso = null;
  function avisar(texto, hablar) {
    let t = document.getElementById("cur-aviso");
    if (!t) {
      t = el("div", "cur-aviso");
      t.id = "cur-aviso";
      document.body.appendChild(t);
    }
    t.textContent = texto;
    t.classList.add("visible");
    clearTimeout(timerAviso);
    timerAviso = setTimeout(() => t.classList.remove("visible"), 2800);
    if (hablar !== false) C.Guia.habla(texto);
  }
  function celebrar() {
    C.Sfx.estrella();
    C.celebrar(document.getElementById("pantalla-" + C.Nav.actual) || document.body);
  }

  /* =========================================================
     3. TIPOS DE ACTIVIDAD NUEVOS (se suman a ACT.tipos)
     ========================================================= */
  const TIPOS = (window.ACT && window.ACT.tipos) || {};

  function pintarBase(container) {
    container.innerHTML = "";
    const zona = el("div", "zona zona-cur");
    container.appendChild(zona);
    return zona;
  }
  function normalizar(s) {
    return String(s || "")
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  /* ---- Pregunta que enseña: opción múltiple con explicación ---- */
  TIPOS.explica = function (container, api2, params) {
    const preguntas = params.preguntas || [];

    function pintarPregunta() {
      const idx = Math.min(api2.ronda, preguntas.length - 1);
      const q = preguntas[idx];
      if (!q) {
        api2.terminar();
        return;
      }
      const zona = pintarBase(container);

      const contador = el("p", "cur-contador", "Pregunta " + (idx + 1) + " de " + preguntas.length);
      zona.appendChild(contador);

      if (q.voz) decirEn(q.p);
      const pregunta = el("h2", "cur-pregunta", q.p);
      zona.appendChild(pregunta);

      const altavoz = boton("🔊 Escuchar", "btn mediano", () => {
        if (q.voz) decirEn(q.p);
        else api2.hablar(q.p);
      });
      zona.appendChild(altavoz);

      const ops = el("div", "cur-opciones");
      const botones = (q.op || []).map((texto, i) => {
        const b = el("button", "cur-op", texto);
        b.type = "button";
        b.onclick = () => {
          if (b.disabled) return;
          C.Sfx.clic();
          if (i === q.ok) {
            botones.forEach((x) => (x.disabled = true));
            api2.bien(b, "cur:" + (q.clave || "explica"));
          } else {
            api2.mal(b, "cur:" + (q.clave || "explica"), q.exp || "");
            mostrarAyuda(zona, q, api2);
          }
        };
        ops.appendChild(b);
        return b;
      });
      zona.appendChild(ops);

      const ayuda = el("div", "cur-ayuda");
      zona.appendChild(ayuda);

      api2.pistaVisual = () => {
        if (!q.pista) return;
        ayuda.innerHTML = "";
        ayuda.appendChild(el("p", "cur-pista", "💡 " + q.pista));
      };
    }

    function mostrarAyuda(zona, q, api2) {
      const ayuda = zona.querySelector(".cur-ayuda");
      if (!ayuda) return;
      ayuda.innerHTML = "";
      if (q.exp) ayuda.appendChild(el("p", "cur-explicacion", "💡 " + q.exp));
      if (q.pista) ayuda.appendChild(el("p", "cur-pista", "👉 " + q.pista));
    }

    api2.pintar(pintarPregunta);
    pintarPregunta();
  };

  /* ---- Tarjetas de "descubrir": se leen una a una ---- */
  TIPOS.tarjetas = function (container, api2, params) {
    const cartas = params.cartas || [];

    function pintarCarta() {
      const i = Math.min(api2.ronda, cartas.length - 1);
      const c = cartas[i];
      if (!c) {
        api2.terminar();
        return;
      }
      const zona = pintarBase(container);
      zona.appendChild(el("p", "cur-contador", "Tarjeta " + (i + 1) + " de " + cartas.length));

      const carta = el("div", "cur-carta");
      carta.appendChild(el("span", "cur-carta-icono", c.i || "💡"));
      carta.appendChild(el("h2", "cur-carta-titulo", c.t || ""));
      carta.appendChild(el("p", "cur-carta-texto", c.x || ""));
      zona.appendChild(carta);

      const filas = el("div", "cur-fila-botones");
      const bEscuchar = boton("🔊 Escuchar", "btn mediano", () => {
        api2.hablar(c.x || c.t || "");
      });
      const bSiguiente = boton(
        i === cartas.length - 1 ? "✅ Ya las leí" : "Siguiente ▶️",
        "btn grande primario",
        () => {
          api2.hablar(c.x || c.t || "");
          api2.avanzar();
        }
      );
      filas.appendChild(bEscuchar);
      filas.appendChild(bSiguiente);
      zona.appendChild(filas);
    }

    api2.pintar(pintarCarta);
    pintarCarta();
  };

  /* ---- Memoria: voltea cartas y junta conceptos con su pareja ---- */
  TIPOS.memoria = function (container, api2, params) {
    const parejas = (params.parejas || []).slice(0, 6);
    const cartas = [];
    parejas.forEach(function (p, i) {
      cartas.push({ id: i, texto: p.a });
      cartas.push({ id: i, texto: p.b });
    });
    const mesa = C.shuffle ? C.shuffle(cartas) : cartas;
    const zona = pintarBase(container);
    zona.appendChild(el("p", "cur-consigna", params.consigna || "Voltea las cartas y junta cada concepto con su pareja."));
    const ayuda = el("p", "cur-ayuda-texto", "Toca dos cartas para ver qué esconden.");
    zona.appendChild(ayuda);
    const tablero = el("div", "cur-memoria");
    zona.appendChild(tablero);

    let abiertas = [];
    let bloqueado = false;
    let encontradas = 0;
    const total = parejas.length;

    mesa.forEach(function (c) {
      const b = el("button", "cur-memo-carta");
      b.type = "button";
      const cara = el("span", "cur-memo-cara", c.texto);
      cara.style.visibility = "hidden";
      b.appendChild(cara);
      b.onclick = function () {
        if (bloqueado || b.disabled || b.classList.contains("ok") || b.classList.contains("volteada")) return;
        C.Sfx.clic();
        cara.style.visibility = "visible";
        b.classList.add("volteada");
        if (c.texto.length <= 50) api2.hablar(c.texto);
        abiertas.push({ b: b, id: c.id });
        if (abiertas.length < 2) return;
        bloqueado = true;
        const x = abiertas[0];
        const y = abiertas[1];
        if (x.id === y.id) {
          setTimeout(function () {
            x.b.classList.add("ok");
            y.b.classList.add("ok");
            encontradas++;
            abiertas = [];
            bloqueado = false;
            ayuda.textContent = encontradas < total
              ? "¡Pareja correcta! Te faltan " + (total - encontradas) + "."
              : "¡Encontraste todas las parejas!";
            if (encontradas >= total) api2.bien(null, "cur:memoria");
          }, 420);
        } else {
          api2.mal(x.b, "cur:memoria", "Esas cartas no son pareja. Intenta con otras.");
          ayuda.textContent = "No son pareja. Vuelve a mirar las cartas.";
          setTimeout(function () {
            if (x.b.classList.contains("ok")) return;
            x.b.classList.remove("volteada");
            y.b.classList.remove("volteada");
            x.b.querySelector(".cur-memo-cara").style.visibility = "hidden";
            y.b.querySelector(".cur-memo-cara").style.visibility = "hidden";
            abiertas = [];
            bloqueado = false;
          }, 1000);
        }
      };
      tablero.appendChild(b);
    });

    api2.pistaVisual = function () {
      tablero.querySelectorAll(".cur-memo-carta").forEach(function (c) {
        if (!c.classList.contains("ok") && !c.classList.contains("volteada")) {
          c.classList.add("pista-memoria");
          setTimeout(function () {
            c.classList.remove("pista-memoria");
          }, 1200);
        }
      });
    };
  };

  /* ---- Reto rápido: preguntas con 3 vidas y combo ---- */
  TIPOS.reto = function (container, api2, params) {
    const preguntas = params.preguntas || [];
    let vidas = 3;

    function pintarRonda() {
      const idx = Math.min(api2.ronda, preguntas.length - 1);
      const q = preguntas[idx];
      if (!q) {
        api2.terminar();
        return;
      }
      const zona = pintarBase(container);
      const barra = el("p", "cur-vidas", "❤️".repeat(vidas) + (vidas < 3 ? "🤍".repeat(3 - vidas) : "") + "   Reto " + (idx + 1) + " de " + preguntas.length);
      zona.appendChild(barra);
      zona.appendChild(el("h2", "cur-pregunta", q.p));
      const altavoz = boton("🔊 Escuchar", "btn mediano", () => api2.hablar(q.p));
      zona.appendChild(altavoz);

      const ops = el("div", "cur-opciones");
      const botones = (q.op || []).map(function (texto, i) {
        const b = el("button", "cur-op", texto);
        b.type = "button";
        b.onclick = function () {
          if (b.disabled) return;
          C.Sfx.clic();
          if (i === q.ok) {
            botones.forEach(function (xx) { xx.disabled = true; });
            api2.bien(b, "cur:reto");
          } else {
            vidas--;
            barra.textContent = "❤️".repeat(Math.max(0, vidas)) + (vidas < 3 ? "🤍".repeat(3 - Math.max(0, vidas)) : "") + "   Reto " + (idx + 1) + " de " + preguntas.length;
            botones.forEach(function (xx) { xx.disabled = true; });
            ops.children[q.ok].classList.add("cur-op-bien");
            b.classList.add("cur-op-mal");
            if (q.exp) {
              const ayuda = el("p", "cur-explicacion", "💡 " + q.exp);
              zona.appendChild(ayuda);
              api2.hablar(q.exp);
            }
            api2.mal(b, "cur:reto", q.exp || "");
            if (vidas <= 0) {
              setTimeout(function () {
                api2.hablar("¡Otra vez será! Repasa el tema y vuelve al reto.");
                api2.terminar();
              }, 1600);
            } else {
              setTimeout(function () {
                pintarRonda();
              }, 2100);
            }
          }
        };
        ops.appendChild(b);
        return b;
      });
      zona.appendChild(ops);
      api2.pistaVisual = function () {
        if (!q.pista) return;
        zona.appendChild(el("p", "cur-pista", "👉 " + q.pista));
      };
    }

    api2.pintar(pintarRonda);
    pintarRonda();
  };

  /* ---- Clasificar en categorías ---- */
  TIPOS.clasificar = function (container, api2, params) {
    const cats = params.categorias || [];
    const items = (params.items || []).slice();
    let quedan = items.length;
    let elegido = null;

    const zona = pintarBase(container);
    zona.appendChild(el("p", "cur-consigna", params.consigna || "Toca un elemento y después la categoría donde va."));
    const ayuda = el("p", "cur-ayuda-texto", "Primero toca el elemento…");
    zona.appendChild(ayuda);

    const contChips = el("div", "cur-chips");
    const contCats = el("div", "cur-cats");
    zona.appendChild(contChips);
    zona.appendChild(contCats);

    const chips = {};
    items.forEach((it) => {
      const c = el("button", "cur-chip", it.t);
      c.type = "button";
      c.onclick = () => {
        C.Sfx.clic();
        if (c.classList.contains("colocado")) return;
        Object.keys(chips).forEach((k) => chips[k].classList.remove("elegido"));
        elegido = it;
        c.classList.add("elegido");
        ayuda.textContent = "Ahora toca la categoría de «" + it.t + "».";
      };
      chips[it.t] = c;
      contChips.appendChild(c);
    });

    const zonas = {};
    cats.forEach((cat) => {
      const z = el("button", "cur-cat");
      z.type = "button";
      z.innerHTML = '<span class="cur-cat-icono">' + (cat.icono || "📦") + "</span>" + "<span>" + cat.n + "</span>";
      z.onclick = () => {
        C.Sfx.clic();
        if (!elegido) {
          ayuda.textContent = "Elige primero un elemento de la lista.";
          return;
        }
        if (elegido.cat === cat.id) {
          const chip = chips[elegido.t];
          chip.classList.remove("elegido");
          chip.classList.add("colocado", "ok");
          chip.disabled = true;
          zonas[cat.id].appendChild(el("span", "cur-vasija", elegido.t));
          elegido = null;
          quedan--;
          ayuda.textContent = quedan ? "¡Correcto! Quedan " + quedan + "." : "¡Muy bien! Clasificaste todo.";
          if (!quedan) api2.bien(null, "cur:clasificar", "¡Excelente clasificación!");
        } else {
          api2.mal(chips[elegido.t], "cur:clasificar", "Revisa bien a qué categoría pertenece.");
          ayuda.textContent = "Ese elemento no va ahí. Piénsalo otra vez.";
        }
      };
      zonas[cat.id] = el("div", "cur-vasijas");
      const caja = el("div", "cur-cat-caja");
      caja.appendChild(z);
      caja.appendChild(zonas[cat.id]);
      contCats.appendChild(caja);
    });
  };

  /* ---- Emparejar pares ---- */
  TIPOS.emparejar = function (container, api2, params) {
    const parejas = (params.parejas || []).slice();
    const enIngles = params.voz === "en";
    let elegido = null;
    let quedan = parejas.length;

    const zona = pintarBase(container);
    zona.appendChild(el("p", "cur-consigna", params.consigna || "Toca una palabra y después su pareja."));
    const ayuda = el("p", "cur-ayuda-texto", "Toca la primera palabra.");
    zona.appendChild(ayuda);

    const colA = el("div", "cur-col");
    const colB = el("div", "cur-col");
    const cont = el("div", "cur-dos-columnas");
    cont.appendChild(colA);
    cont.appendChild(colB);
    zona.appendChild(cont);

    const usados = {};
    const botonesA = {};
    parejas.forEach((p, i) => {
      const b = el("button", "cur-par", p.a);
      b.type = "button";
      b.onclick = () => {
        if (b.disabled) return;
        C.Sfx.clic();
        if (enIngles) decirEn(p.audio || p.a);
        Object.keys(botonesA).forEach((k) => botonesA[k].classList.remove("elegido"));
        elegido = p;
        b.classList.add("elegido");
        ayuda.textContent = "Ahora toca la pareja de «" + p.a + "».";
      };
      botonesA[i] = b;
      colA.appendChild(b);
    });
    const mezcladas = C.shuffle(parejas.slice());
    const botonesB = {};
    mezcladas.forEach((p) => {
      const b = el("button", "cur-par", p.b);
      b.type = "button";
      b.onclick = () => {
        if (b.disabled) return;
        C.Sfx.clic();
        if (!elegido) {
          ayuda.textContent = "Elige primero la palabra de la izquierda.";
          return;
        }
        if (elegido === p) {
          const a = botonesA[parejas.indexOf(p)];
          a.disabled = true;
          b.disabled = true;
          a.classList.add("ok");
          b.classList.add("ok");
          elegido = null;
          quedan--;
          ayuda.textContent = quedan ? "¡Correcto! Faltan " + quedan + "." : "¡Completaste todos!";
          if (!quedan) api2.bien(null, "cur:emparejar", "¡Muy bien!");
        } else {
          api2.mal(b, "cur:emparejar", "Esas dos no son pareja. Intenta otra vez.");
          ayuda.textContent = "No coinciden. Vuelve a intentarlo.";
        }
      };
      botonesB[p.b] = b;
      colB.appendChild(b);
    });
    void usados;
  };

  /* ---- Ordenar en secuencia ---- */
  TIPOS.ordenar = function (container, api2, params) {
    const items = (params.items || []).slice();
    let cursor = 0;

    const zona = pintarBase(container);
    zona.appendChild(el("p", "cur-consigna", params.consigna || "Toca los elementos en el orden correcto."));
    const ayuda = el("p", "cur-ayuda-texto", "Toca el primero de la secuencia.");
    zona.appendChild(ayuda);

    const cont = el("div", "cur-secuencia");
    const hechos = el("div", "cur-secuencia-hecha");
    zona.appendChild(hechos);
    zona.appendChild(cont);

    const botones = items.map((txt, i) => {
      const b = el("button", "cur-chip", txt);
      b.type = "button";
      b.onclick = () => {
        if (b.disabled) return;
        C.Sfx.clic();
        if (i === cursor) {
          b.disabled = true;
          b.classList.add("ok");
          hechos.appendChild(el("div", "cur-paso", (i + 1) + ". " + txt));
          cursor++;
          ayuda.textContent = cursor < items.length ? "¡Bien! Ahora el siguiente." : "¡Secuencia completa!";
          if (cursor >= items.length) api2.bien(b, "cur:ordenar", "¡Muy bien!");
        } else {
          api2.mal(b, "cur:ordenar", "Ese paso no va en ese lugar. Repasa el orden.");
          ayuda.textContent = "Revisa: ¿qué paso viene primero?";
        }
      };
      cont.appendChild(b);
      return b;
    });
    void botones;
  };

  /* ---- Escribir (autoevaluado) ---- */
  TIPOS.escribir = function (container, api2, params) {
    const min = params.min || 3;
    const zona = pintarBase(container);
    zona.appendChild(el("p", "cur-consigna", params.consigna || "Escribe con tus palabras."));

    const ta = document.createElement("textarea");
    ta.className = "cur-textarea";
    ta.rows = 4;
    ta.setAttribute("aria-label", "Escribe aquí tu respuesta");
    zona.appendChild(ta);

    const contador = el("p", "cur-contador-palabras", "0 palabras");
    zona.appendChild(contador);

    const ayuda = el("p", "cur-ayuda-texto", "Escribe al menos " + min + " palabras.");
    zona.appendChild(ayuda);

    const filas = el("div", "cur-fila-botones");
    const bLeer = boton("🔊 Leer en voz alta", "btn mediano", () => {
      if (!ta.value.trim()) {
        ayuda.textContent = "Primero escribe algo para poder leerlo.";
        return;
      }
      decirEn(ta.value);
    });
    const bListo = boton("✅ Ya lo escribí", "btn grande primario", () => {
      const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      if (n < min) {
        ayuda.textContent = "Te faltan palabras: llevas " + n + " y necesitas al menos " + min + ".";
        C.Sfx.mal();
        return;
      }
      if (params.ejemplo) {
        ayuda.innerHTML = "";
        ayuda.appendChild(el("p", "cur-explicacion", "Ejemplo: " + params.ejemplo));
      }
      api2.bien(bListo, "cur:escribir", "¡Buen trabajo escribiendo!");
    });
    filas.appendChild(bLeer);
    filas.appendChild(bListo);
    zona.appendChild(filas);

    if (params.ejemplo) {
      const verEj = boton("👀 Ver un ejemplo", "btn mediano", () => {
        ayuda.innerHTML = "";
        ayuda.appendChild(el("p", "cur-explicacion", params.ejemplo));
      });
      filas.insertBefore(verEj, bLeer);
    }

    ta.addEventListener("input", () => {
      const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      contador.textContent = n + (n === 1 ? " palabra" : " palabras");
      contador.classList.toggle("listo", n >= min);
    });
    setTimeout(() => ta.focus(), 60);
  };

  /* =========================================================
     4. PANTALLAS
     ========================================================= */

  /* 4.1 Lista de materias del grado */
  function pantalla_materias() {
    const cuerpo = $("#contenido-materias");
    if (!cuerpo) return;
    cuerpo.innerHTML = "";

    const grado = gradoActual();
    if (!grado) {
      cuerpo.appendChild(cabecera("📚 Mis materias", "Primero elige tu grado de primaria (puedes cambiarlo después)."));
      const ir = boton("🎓 Elegir mi grado", "btn grande primario", () => C.Nav.ir("grados"));
      cuerpo.appendChild(ir);
      return;
    }

    const g = CUR.gradoPorId(grado);
    cuerpo.appendChild(cabecera("📚 " + g.nombre, "Materias de tu grado · Toca una para aprender"));

    /* Resumen del avance del grado (todo salido del progreso real:
       temas completados, unidades enteras terminadas y repasos aprobados). */
    try {
      const UNIDE = window.UNID;
      if (UNIDE) {
        const elegidasResumen = materiasActuales();
        let hechos = 0, total = 0, unidadesOk = 0, unidadesTodas = 0, repasosOk = 0;
        elegidasResumen.forEach((mid) => {
          const pr = progresoMateria(grado, mid);
          hechos += pr.hechos;
          total += pr.total;
          const unis = UNIDE.unidadesDe(grado, mid);
          if (unis) unis.forEach((u) => {
            unidadesTodas++;
            if (UNIDE.unidadCompleta(u)) unidadesOk++;
          });
        });
        const evs = C.Store.data.evaluaciones || {};
        Object.keys(evs).forEach((k) => {
          const e = evs[k];
          if (!e || !e.total) return;
          const pct = Math.round((e.nota * 100) / e.total);
          const esDeGrado = k.indexOf("materia:" + grado + "-") === 0 || k.indexOf("-" + grado + "-") !== -1;
          if (pct >= 70 && esDeGrado) repasosOk++;
        });
        const pctGrado = total ? Math.round((hechos * 100) / total) : 0;
        const resumen = el("div", "resumen-progreso");
        [
          ["\u{1F680}", pctGrado + "%", "de tu grado terminado"],
          ["\u{1F4E6}", unidadesOk + " de " + unidadesTodas, "unidades completas"],
          ["\u{1F396}\u{FE0F}", String(repasosOk), "repasos aprobados"],
        ].forEach((x) => {
          const mini = el("div", "mini-stat");
          mini.innerHTML = "<span class='ms-icono'>" + x[0] + "</span><strong>" + x[1] + "</strong><small>" + x[2] + "</small>";
          resumen.appendChild(mini);
        });
        cuerpo.appendChild(resumen);
      }
    } catch (e) {}

    const malla = el("div", "malla-materias");
    const elegidas = materiasActuales();
    CUR.MATERIAS.forEach((m) => {
      if (elegidas.indexOf(m.id) < 0) return;
      const pr = progresoMateria(grado, m.id);
      const t = el("button", "tarjeta-area tarjeta-materia");
      t.type = "button";
      t.innerHTML =
        '<span class="materia-icono">' + (m.icono || "📘") + "</span>" +
        "<span><strong>" + m.nombre + "</strong>" +
        '<span class="materia-progreso">' + pr.hechos + " de " + pr.total + " temas</span></span>";
      const barra = el("div", "barra barra-mini");
      const relleno = el("span", "");
      relleno.style.width = pr.pct + "%";
      barra.appendChild(relleno);
      t.appendChild(barra);
      t.onclick = () => {
        C.Sfx.clic();
        C.Nav.ir("materia", { grado: grado, materia: m.id });
      };
      malla.appendChild(t);
    });
    cuerpo.appendChild(malla);

    const btnEditar = boton("⚙️ Cambiar mis materias", "btn mediano", () => C.Nav.ir("perfil"));
    cuerpo.appendChild(btnEditar);
  }

  /* 4.2 Temas de una materia */
  function pantalla_materia(prms) {
    const cuerpo = $("#contenido-materia");
    if (!cuerpo) return;
    cuerpo.innerHTML = "";
    const grado = (prms && prms.grado) || gradoActual();
    const materia = prms && prms.materia;
    const g = CUR.gradoPorId(grado);
    const m = CUR.materiaPorId(materia);
    if (!g || !m) return C.Nav.reemplazar("materias");

    const cabeceraMat = cabecera((m.icono || "📘") + " " + m.nombre, g.nombre + " · " + (m.desc || ""));
    /* Cada materia deja su color en la cabecera: barra de acento */
    cabeceraMat.classList.add("cabecera-materia");
    cabeceraMat.style.setProperty("--c-materia", m.color || "#3fa34d");
    cuerpo.appendChild(cabeceraMat);

    /* Repaso general de la materia (luego de completar la mitad) */
    const evsMat = evaluacionesDelPerfil();
    const prevMat = evsMat["materia:" + grado + "-" + materia];
    const fila_repaso = el("div", "repaso-materia-fila");
    const rotuloMat = prevMat
      ? "🏅 Repaso de la materia (tu nota: " + prevMat.nota + "/" + prevMat.total + ")"
      : "🏅 Repaso de la materia";
    const btnMat = boton(rotuloMat, "btn mediano repaso-materia", () =>
      C.Nav.ir("repaso", { g: grado, m: materia, todo: true })
    );
    fila_repaso.appendChild(btnMat);
    if (window.PROFE && typeof window.PROFE.tocarAhora === "function") {
      const pendiente = CUR.listaConId(grado, materia).find((t2) => !temaListo(t2.id)) || CUR.listaConId(grado, materia)[0];
      fila_repaso.appendChild(boton("🧑‍🏫 Pídeme un consejo", "btn mediano btn-profe", () =>
        window.PROFE.tocarAhora(pendiente)
      ));
    }
    cuerpo.appendChild(fila_repaso);

    const lista = CUR.listaConId(grado, materia);
    const unidades = (window.UNID && window.UNID.unidadesDe(grado, materia)) || null;

    /* Índice de unidades: pastillas para saltar a cada unidad sin
       recorrer casi 3.400px de lista. Solo si hay unidades. */
    if (unidades && unidades.length > 1) {
      const indice = el("div", "indice-unidades");
      unidades.forEach(function (u) {
        const pct = Math.round((u.hechos * 100) / Math.max(1, u.total));
        const chip = el("button", "chip-unidad" + (pct === 100 ? " completa" : pct > 0 ? " empezada" : ""));
        chip.type = "button";
        chip.title = "Ir a la Unidad " + (u.indice + 1) + " · " + u.titulo;
        chip.innerHTML =
          "<span class='chip-unidad-icono' aria-hidden='true'>" + (u.icono || "📚") + "</span>" +
          "<span class='chip-unidad-nombre'>U" + (u.indice + 1) + " · " + u.titulo + "</span>" +
          "<span class='chip-unidad-prog'>" + u.hechos + "/" + u.total + "</span>";
        chip.onclick = function () {
          C.Sfx.clic();
          const cabeza = document.getElementById("unidad-cabeza-" + grado + "-" + materia + "-" + u.indice);
          if (!cabeza) return;
          cabeza.scrollIntoView({ behavior: "smooth", block: "start" });
          cabeza.classList.remove("destello-unidad");
          /* reinicia la animación de destello por si ya estaba */
          void cabeza.offsetWidth;
          cabeza.classList.add("destello-unidad");
        };
        indice.appendChild(chip);
      });
      cuerpo.appendChild(indice);
    }

    const cont = el("div", "lista-temas");
    lista.forEach((t, i) => {
      const numero = i + 1;
      if (unidades) {
        const u = unidades.find(function (x) { return numero >= x.desde && numero <= x.hasta; });
        if (u && u.desde === numero) {
          const cabeza = cabezaUnidad(grado, materia, u);
          cabeza.id = "unidad-cabeza-" + grado + "-" + materia + "-" + u.indice;
          cont.appendChild(cabeza);
        }
      }
      const est = estadoTema(t.id);
      const libre = temaDisponible(grado, materia, i);
      const tarj = el("button", "tarjeta-area tarjeta-tema");
      tarj.type = "button";
      if (!libre) tarj.classList.add("bloqueada");

      const estrellas = el("span", "estrellas-mini");
      estrellas.textContent = est && est.hecho ? "★".repeat(est.estrellas || 1) + "☆".repeat(3 - (est.estrellas || 1)) : "☆☆☆";
      const icono = el("span", "tema-icono", est && est.hecho ? "✅" : libre ? "🔓" : "🔒");
      const texto = el("span", "tema-texto");
      texto.appendChild(el("strong", "", t.nombre));
      texto.appendChild(el("span", "tema-objetivo", t.objetivo || ""));
      tarj.appendChild(icono);
      tarj.appendChild(texto);
      tarj.appendChild(estrellas);

      tarj.onclick = () => {
        if (!libre) {
          C.Sfx.mal();
          avisar("Termina primero el tema anterior 🌟");
          return;
        }
        C.Sfx.clic();
        C.Nav.ir("tema", { id: t.id });
      };
      cont.appendChild(tarj);
    });
    cuerpo.appendChild(cont);
  }

  /* 4.3 Lección de un tema */
  function pantalla_tema(prms) {
    const cuerpo = $("#contenido-tema");
    if (!cuerpo) return;
    cuerpo.innerHTML = "";
    const info = prms && CUR.temaPorId(prms.id);
    if (!info) return C.Nav.reemplazar("materias");
    /* temaPorId devuelve el tema con sus fases ya normalizadas */
    const t = info;
    const m = CUR.materiaPorId(info.materia);
    const g = CUR.gradoPorId(info.grado);
    const est = estadoTema(t.id);

    /* el tema hereda el color de su materia en la cabecera */
    const cabeceraTema = cabecera(t.nombre, (m.icono || "📘") + " " + m.nombre + " · " + g.nombre);
    cabeceraTema.classList.add("cabecera-materia");
    cabeceraTema.style.setProperty("--c-materia", m.color || "#3fa34d");
    cuerpo.appendChild(cabeceraTema);
    if (est && est.hecho) {
      cuerpo.appendChild(el("p", "tema-completado", "🌟 Tema completado (" + "★".repeat(est.estrellas || 1) + ")"));
      /* Recomendación para continuar: el próximo tema de la misma
         materia, o el aviso de que ya completó todas las lecciones. */
      const siguiente = siguienteTemaPendiente(info.grado, info.materia);
      if (siguiente) {
        const btnSig = boton("➜ Siguiente tema: " + siguiente.nombre, "btn grande primario", () =>
          C.Nav.reemplazar("tema", { id: siguiente.id })
        );
        cuerpo.appendChild(btnSig);
      } else {
        cuerpo.appendChild(el("p", "tema-completado", "🎉 ¡Completaste todas las lecciones de esta materia!"));
      }
    }

    const caja = el("div", "tarjeta-area tarjeta-leccion");
    if (t.objetivo) caja.appendChild(el("p", "leccion-objetivo", "🎯 " + t.objetivo));
    if (t.dba) caja.appendChild(el("p", "leccion-dba", "🧾 " + t.dba));

    const pasos = [
      { fase: "descubrir", icono: "📖", nombre: "Descubrir" },
      { fase: "practicar", icono: "✏️", nombre: "Practicar" },
      { fase: "juego", icono: "🎮", nombre: "Jugar" },
      { fase: "demostrar", icono: "🌟", nombre: "Demostrar" },
    ];
    const listaPasos = el("div", "leccion-pasos");
    const hayPreguntas = [].concat(t.practicar || [], t.demostrar || []).some(
      (a) => a && a.params && Array.isArray(a.params.preguntas) && a.params.preguntas.length >= 3
    );
    let numPaso = 0;
    pasos.forEach((p) => {
      if (p.fase === "juego" && !t.juego) {
        /* Juego automático: armar con tarjetas de descubrir o con las
           preguntas del tema (memoria, sopa, reto). */
        if (!((Array.isArray(t.descubrir) && t.descubrir.length >= 2) || hayPreguntas)) return;
      } else {
        const fase = t[p.fase];
        if (!fase) return;
        const hay = Array.isArray(fase) ? fase.length > 0 : !!fase;
        if (!hay) return;
      }
      numPaso++;
      /* Botón de la ruta de la lección con su número de paso: el niño
         ve las cuatro paradas como un caminito ordenado. Las paradas
         ya hechas se pintan con ✓ para mostrar hasta dónde llegó. */
      const faseHecha = !!(est && est.fases && est.fases[p.fase]);
      const btn = el("button", "btn grande paso-" + p.fase + (faseHecha ? " paso-hecho" : ""));
      btn.type = "button";
      if (faseHecha) {
        btn.setAttribute("aria-label", "Paso " + numPaso + " ya hecho: " + p.nombre + ". Toca para repetirlo");
        btn.title = "Ya la hiciste. Puedes repetirla 🌟";
      }
      btn.innerHTML =
        "<span class='paso-num' aria-hidden='true'>" + (faseHecha ? "✓" : numPaso) + "</span>" +
        "<span class='paso-nombre'>" + p.icono + " " + p.nombre + "</span>";
      btn.onclick = () => {
        C.Sfx.clic();
        abrirFase(t, p.fase);
      };
      listaPasos.appendChild(btn);
    });
    caja.appendChild(listaPasos);
    cuerpo.appendChild(caja);

    /* Profesor virtual: bienvenida con su voz y botón de ayuda */
    if (window.PROFE && typeof window.PROFE.bienvenida === "function") {
      window.PROFE.bienvenida(info);
      cuerpo.appendChild(boton("🧑‍🏫 ¿Cómo lo hago?", "btn mediano btn-profe", () =>
        window.PROFE.comoSeHace(info)
      ));
    }

    const btnVolver = boton("⬅️ Volver a " + m.nombre, "btn mediano", () =>
      C.Nav.reemplazar("materia", { grado: info.grado, materia: info.materia })
    );
    cuerpo.appendChild(btnVolver);
  }

  /* =========================================================
     4.4 UNIDADES DIDÁCTICAS
     Cabeza de cada unidad dentro de pantalla_materia y
     evaluación de repaso por unidad (pantalla_repaso).
     ========================================================= */
  function anotarHistorial(tipo, texto) {
    try {
      const d = C.Store.data;
      if (!Array.isArray(d.historial)) d.historial = [];
      d.historial.push({ fecha: Date.now(), tipo: tipo, texto: texto });
      if (d.historial.length > 60) d.historial = d.historial.slice(-60);
      C.Store.save();
    } catch (e) {}
  }
  function evaluacionesDelPerfil() {
    const d = C.Store.data;
    if (!d.evaluaciones || typeof d.evaluaciones !== "object") d.evaluaciones = {};
    return d.evaluaciones;
  }

  function cabezaUnidad(grado, materia, u) {
    const cabeza = el("div", "cabeza-unidad");
    const fila = el("div", "unidad-fila");
    fila.appendChild(el("span", "unidad-icono", u.icono || "📚"));
    const info = el("div", "unidad-info");
    info.appendChild(el("strong", "", "Unidad " + (u.indice + 1) + " · " + u.titulo));
    if (u.objetivo) info.appendChild(el("span", "unidad-objetivo", "🎯 " + u.objetivo));
    fila.appendChild(info);
    fila.appendChild(el("span", "unidad-progreso", u.hechos + "/" + u.total));
    cabeza.appendChild(fila);
    const barra = el("div", "unidad-barra");
    const relleno = el("i");
    relleno.style.width = Math.round((u.hechos * 100) / Math.max(1, u.total)) + "%";
    barra.appendChild(relleno);
    cabeza.appendChild(barra);

    const evs = evaluacionesDelPerfil();
    const prev = evs["unidad:" + u.id];
    if (u.hechos >= u.total) {
      const btn = boton("🏆 Repaso de la unidad", "btn mediano unidad-repaso", () =>
        C.Nav.ir("repaso", { g: grado, m: materia, u: u.indice })
      );
      if (prev) {
        const linea = el("span", "unidad-nota", "Tu último repaso: " + prev.nota + " de " + prev.total + " correctas " + (prev.nota >= Math.ceil(prev.total * 0.7) ? "🌟" : "💪"));
        cabeza.appendChild(linea);
      }
      cabeza.appendChild(btn);
    } else {
      cabeza.appendChild(el("span", "unidad-hint", " Completa los " + u.total + " temas de la unidad para desbloquear su repaso 🌱"));
    }
    return cabeza;
  }

  /* ---- Evaluación de repaso por unidad ---- */
  function preguntasDeRepaso(u) {
    const preguntas = [];
    const yaEscogidas = [];
    u.temas.forEach(function (tema) {
      const t = CUR.temaPorId(tema.id);
      if (!t) return;
      let sacadas = 0;
      const fuentes = [].concat(t.practicar || [], t.demostrar || []);
      fuentes.forEach(function (act) {
        if (sacadas >= 2) return;
        const qs = act && act.params && act.params.preguntas;
        if (!Array.isArray(qs)) return;
        qs.forEach(function (q) {
          if (sacadas >= 2 || !q || !Array.isArray(q.op) || q.op.length < 2) return;
          /* la misma pregunta no sale dos veces en un mismo repaso */
          if (yaEscogidas.indexOf(q.p) !== -1) return;
          yaEscogidas.push(q.p);
          preguntas.push({
            p: q.p, op: q.op, ok: typeof q.ok === "number" ? q.ok : 0,
            exp: q.exp || "", pista: q.pista || "",
            temaId: tema.id, temaNombre: tema.nombre,
          });
          sacadas++;
        });
      });
    });
    return (C.shuffle ? C.shuffle(preguntas) : preguntas).slice(0, 10);
  }

  function pantalla_repaso(prms) {
    const cuerpo = $("#contenido-repaso");
    if (!cuerpo) return;
    cuerpo.innerHTML = "";
    const grado = (prms && prms.g) || gradoActual();
    const materia = prms && prms.m;
    const unidades = (window.UNID && window.UNID.unidadesDe(grado, materia)) || null;
    const esMateria = prms && prms.todo;

    /* Modo materia: repaso general con temas de todas las unidades */
    const listaTemas = esMateria
      ? CUR.listaConId(grado, materia).map(function (t) { return { id: t.id, nombre: t.nombre }; })
      : (unidades && prms && unidades[prms.u] ? unidades[prms.u].temas : null);
    if (!listaTemas) return C.Nav.reemplazar("materia", { grado: grado, materia: materia });
    const u = unidades && prms && !esMateria ? unidades[prms.u] : {
      id: "todo-" + grado + "-" + materia,
      indice: -1,
      icono: "🏅",
      titulo: "Repaso de la materia",
      objetivo: "Recordar lo aprendido en toda la materia antes de pasar de página.",
    };
    const nombreMateria = (CUR.materiaPorId(materia) || {}).nombre || materia;

    const preguntas = preguntasDeRepaso({ temas: listaTemas });
    const m = CUR.materiaPorId(materia);
    const tituloCab = esMateria
      ? "🏅 Repaso de " + (m ? m.nombre : materia)
      : "🏆 Repaso: " + (u.icono || "") + " " + u.titulo;
    cuerpo.appendChild(cabecera(tituloCab, CUR.gradoPorId(grado).nombre));

    /* Clave para guardar el resultado */
    const claveEv = esMateria ? "materia:" + grado + "-" + materia : "unidad:" + u.id;

    if (preguntas.length < 3) {
      cuerpo.appendChild(el("p", "tema-completado", "Este repaso aún no tiene preguntas disponibles. ¡Practica los temas y vuelve!"));
      cuerpo.appendChild(boton("⬅️ Volver", "btn mediano", () => C.Nav.reemplazar("materia", { grado: grado, materia: materia })));
      return;
    }

    const estado = { i: 0, bien: 0, temasBien: [], temasMal: [] };

    function terminar() {
      cuerpo.innerHTML = "";
      const total = preguntas.length;
      const pct = Math.round((estado.bien * 100) / total);
      const pasaste = estado.bien >= Math.ceil(total * 0.7);
      const buena = estado.bien >= total * 0.9;

      /* guarda resultado */
      const evs = evaluacionesDelPerfil();
      const antes = evs[claveEv];
      const primeraVez = !antes;
      evs[claveEv] = {
        nota: Math.max(estado.bien, (antes && antes.nota) || 0),
        total: total,
        fecha: Date.now(),
      };
      if (pasaste && primeraVez) {
        const estrellasGanadas = buena ? 3 : 2;
        C.Store.data.estrellas = (C.Store.data.estrellas || 0) + estrellasGanadas;
        cabezaAnimo("¡Ganaste " + estrellasGanadas + " estrellas!");
      }
      anotarHistorial("repaso", (esMateria ? "Repaso de " + nombreMateria : u.titulo) + ": " + estado.bien + "/" + total + " correctas");
      C.Store.save();
      if (typeof C.Store.revisarInsignias === "function") C.Store.revisarInsignias();
      if (window.AVENTURERO && typeof window.AVENTURERO.revisarMisiones === "function") {
        try { window.AVENTURERO.revisarMisiones(); } catch (e) {}
      }

      cuerpo.appendChild(cabecera(pasaste ? (buena ? "🌟 ¡Excelente!" : "🎉 ¡Pasaste el repaso!") : "💪 ¡Casi lo tienes!", u.titulo));
      const caja = el("div", "tarjeta-area tarjeta-leccion");
      caja.appendChild(el("p", "repaso-nota", "Acertaste " + estado.bien + " de " + total + " preguntas (" + pct + "%)."));
      caja.appendChild(el("p", "repaso-explica", pasaste
        ? "Ya conoces bien esta unidad. Puedes seguir con la siguiente."
        : "Repasa estos temas y vuelve a intentar el repaso: cada intento cuenta."));

      if (estado.temasMal.length) {
        caja.appendChild(el("p", "repaso-sub", "📚 Para reforzar:"));
        const fila = el("div", "repaso-refuerzos");
        estado.temasMal.forEach(function (tid) {
          const info = CUR.temaPorId(tid);
          if (!info) return;
          const b = boton("🎯 " + info.nombre, "btn mediano repaso-refuerzo", function () {
            C.Nav.reemplazar("tema", { id: tid });
          });
          fila.appendChild(b);
        });
        caja.appendChild(fila);
      }
      cuerpo.appendChild(caja);
      const volver = boton("⬅️ Volver a la materia", "btn grande primario", () =>
        C.Nav.reemplazar("materia", { grado: grado, materia: materia })
      );
      cuerpo.appendChild(volver);
      celebrar();
      if (window.PROFE && typeof window.PROFE.consejoFinal === "function") {
        const nombresMal = [];
        estado.temasMal.forEach(function (tid) {
          const inf = CUR.temaPorId(tid);
          if (inf && nombresMal.indexOf(inf.nombre) < 0) nombresMal.push(inf.nombre);
        });
        window.PROFE.consejoFinal(cuerpo, pasaste, nombresMal);
      }
      C.Guia.habla(pasaste ? "¡Lo hiciste muy bien!" : "Buen intento. Repasa y vuelve a probar.");
    }

    function pintarPregunta() {
      cuerpo.innerHTML = "";
      const q = preguntas[estado.i];
      const zona = el("div", "tarjeta-area tarjeta-leccion");
      zona.appendChild(el("p", "cur-contador", "Pregunta " + (estado.i + 1) + " de " + preguntas.length));
      zona.appendChild(el("h2", "cur-pregunta", q.p));
      zona.appendChild(boton("🔊 Escuchar la pregunta", "btn mediano", () => C.Guia.habla(q.p)));

      let respondio = false;
      const ops = el("div", "cur-opciones");
      q.op.forEach(function (texto, idx) {
        const b = el("button", "cur-op", texto);
        b.type = "button";
        b.onclick = function () {
          if (respondio) return;
          respondio = true;
          const bien = idx === q.ok;
          if (bien) {
            estado.bien++;
            if (estado.temasBien.indexOf(q.temaId) < 0) estado.temasBien.push(q.temaId);
            b.classList.add("cur-op-bien");
            C.Sfx.bien();
          } else {
            b.classList.add("cur-op-mal");
            ops.children[q.ok].classList.add("cur-op-bien");
            C.Sfx.mal();
            if (estado.temasMal.indexOf(q.temaId) < 0) estado.temasMal.push(q.temaId);
          }
          const retro = el("p", "cur-retro " + (bien ? "retro-bien" : "retro-mal"), bien
            ? "✔ ¡Eso es! " + (q.exp || "Muy bien.")
            : "✏️ " + (q.exp || ("La respuesta correcta era: " + q.op[q.ok] + ".")));
          zona.appendChild(retro);
          const sig = boton("➜ Siguiente", "btn grande primario", function () {
            estado.i++;
            if (estado.i >= preguntas.length) terminar();
            else pintarPregunta();
          });
          zona.appendChild(sig);
          if (bien) C.Guia.habla("¡Bien!");
          else if (q.exp) C.Guia.habla(q.exp);
        };
        ops.appendChild(b);
      });
      zona.appendChild(ops);
      cuerpo.appendChild(zona);
      cuerpo.appendChild(boton("⬅️ Dejar el repaso", "btn mediano", () =>
        C.Nav.reemplazar("materia", { grado: grado, materia: materia })
      ));
      C.Guia.habla(q.p);
    }
    pintarPregunta();
  }

  /* Mensaje breve de estrellas ganadas (usado al terminar el repaso) */
  function cabezaAnimo(texto) {
    const av = el("p", "repaso-estrellas", "⭐ " + texto);
    document.getElementById("contenido-repaso").appendChild(av);
  }

  /* Juego automático por tema. Elige entre los motores disponibles
     según los datos que tenga el tema y un orden estable por id:
     - "sopa": si las respuestas correctas son palabras cortas.
     - "memoria": con parejas pregunta↔respuesta o concepto↔resumen.
     - "reto": preguntas del tema con 3 vidas.
     - "emparejar": con las tarjetas de descubrir (clásico). */
  function acortar(texto, max) {
    const t = String(texto || "").trim();
    if (t.length <= max) return t;
    return t.slice(0, max - 1).replace(/[,.;:\s]\s*\S*$/, "") + "…";
  }
  function juegoAutomatico(t) {
    const qs = [];
    (t.practicar || []).concat(t.demostrar || []).forEach(function (a) {
      const lista = a && a.params && a.params.preguntas;
      if (Array.isArray(lista)) {
        lista.forEach(function (q) {
          if (q && Array.isArray(q.op) && q.op.length > 1 && typeof q.ok === "number") {
            qs.push({ p: String(q.p || ""), op: q.op, ok: q.ok, exp: q.exp || "", pista: q.pista || "" });
          }
        });
      }
    });
    const cartas = (t.descubrir || []).slice();

    /* Palabras cortas (respuestas correctas) para la sopa de letras */
    const palabras = [];
    qs.forEach(function (q) {
      const r = String(q.op[q.ok] || "").trim();
      if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{3,9}$/.test(r) && palabras.indexOf(r.toUpperCase()) < 0) {
        palabras.push(r.toUpperCase());
      }
    });

    /* Parejas de memoria: pregunta corta ↔ respuesta, o concepto ↔ idea clave */
    const parejasQ = [];
    qs.forEach(function (q) {
      const r = String(q.op[q.ok] || "").trim();
      if (q.p.length <= 46 && r.length > 0 && r.length <= 30) {
        parejasQ.push({ a: acortar(q.p, 46), b: r });
      }
    });
    const cartasMemo = [];
    cartas.forEach(function (c) {
      const texto = String(c.x || "").trim();
      if (!texto || !c.t) return;
      cartasMemo.push({ a: (c.i || "📘") + " " + c.t, b: (c.i || "") + " " + acortar(texto, 38) });
    });

    const opciones = [];
    if (palabras.length >= 4) opciones.push("sopa");
    if (parejasQ.length >= 4 || cartasMemo.length >= 3) opciones.push("memoria");
    if (qs.length >= 4) opciones.push("reto");
    if (cartas.length >= 2) opciones.push("emparejar");
    if (!opciones.length) return null;

    /* Orden estable: el mismo tema siempre cae con el mismo juego */
    let h = 0;
    for (let i = 0; i < t.id.length; i++) h = (h * 31 + t.id.charCodeAt(i)) >>> 0;
    const tipo = opciones[h % opciones.length];

    if (tipo === "sopa") {
      const gid = String(t.id).split("-")[0] || "g3";
      return {
        tipo: "sopa",
        titulo: "Sopa de letras de " + t.nombre,
        instr: "Encuentra las palabras escondidas con lo que aprendiste en el tema.",
        n: 1,
        params: {
          palabras: (C.shuffle ? C.shuffle(palabras.slice()) : palabras.slice()).slice(0, 6),
          dificultad: gid === "g1" || gid === "g2" ? "facil" : "medio",
        },
      };
    }
    if (tipo === "memoria") {
      const base = parejasQ.length >= 4 ? parejasQ : cartasMemo;
      const parejas = (C.shuffle ? C.shuffle(base.slice()) : base.slice()).slice(0, 5);
      return {
        tipo: "memoria",
        titulo: "Memoria de " + t.nombre,
        instr: "Voltea dos cartas y busca cada concepto con su pareja.",
        n: 1,
        params: {
          consigna: "Voltea las cartas y junta lo que van juntos.",
          parejas: parejas,
        },
      };
    }
    if (tipo === "reto") {
      const preguntaReto = (C.shuffle ? C.shuffle(qs.slice()) : qs.slice()).slice(0, 8);
      return {
        tipo: "reto",
        titulo: "Reto de " + t.nombre,
        instr: "Responde rápido y sin perder tus 3 vidas. ¡Puedes escuchar cada pregunta!",
        n: preguntaReto.length,
        params: { preguntas: preguntaReto },
      };
    }
    /* emparejar clásico con las tarjetas */
    const mezcla = (C.shuffle ? C.shuffle(cartas) : cartas).slice(0, Math.min(cartas.length, 6));
    return {
      tipo: "emparejar",
      titulo: "Relaciona lo que aprendiste en " + t.nombre,
      instr: "Toca un concepto y luego la pareja que le corresponde.",
      n: mezcla.length,
      params: {
        consigna: "Cada tarjeta va con su explicación. ¡Encuentra todas las parejas!",
        parejas: mezcla.map(function (c) {
          const texto = String(c.x || "").trim();
          return { a: c.t, b: (c.i || "📘") + " " + acortar(texto, 44) };
        }),
      },
    };
  }

  /* Prepara la lista de actividades de una fase:
     - descubrir: tarjetas para leer (tipo propio "tarjetas")
     - practicar / demostrar: las actividades escritas en el currículo
     - juego: la actividad recreativa del tema */
  function actividadesDeFase(t, fase) {
    const prefijo = { descubrir: "d", practicar: "p", juego: "j", demostrar: "m" }[fase] || "x";
    const etiqueta = {
      descubrir: "📖 Descubrir: ",
      practicar: "✏️ Practicar: ",
      juego: "🎮 Jugar: ",
      demostrar: "🌟 Demostrar: ",
    }[fase] || "";

    if (fase === "descubrir") {
      const cartas = t.descubrir || [];
      if (!cartas.length) return [];
      return [
        {
          id: t.id + "-d",
          tipo: "tarjetas",
          titulo: etiqueta + t.nombre,
          instr: "Lee las tarjetas con calma. Toca el altavoz si quieres escucharlas.",
          n: cartas.length,
          nivel: 3,
          params: { cartas: cartas },
        },
      ];
    }

    if (fase === "juego") {
      let j = t.juego;
      /* Juego automático: si el currículo no trae un juego para el
         tema, se elige uno con los datos del propio tema (respuestas
         cortas → sopa; conceptos → memoria; preguntas → reto rápido
         con vidas; tarjetas → emparejar clásico). El turno del juego
         es estable (se calcula con el id del tema) para que cada tema
         siempre toque con el mismo juego, pero no todos al mismo. */
      if (!j) j = juegoAutomatico(t);
      if (!j) return [];
      return [
        {
          id: t.id + "-j",
          tipo: j.tipo,
          titulo: etiqueta + (j.titulo || t.nombre),
          instr: j.instr || "¡A jugar!",
          n: j.n || 1,
          params: j.params || {},
          nivel: 3,
        },
      ];
    }

    const lista = (fase === "practicar" ? t.practicar : t.demostrar) || [];
    return lista.map((a, i) => ({
      id: t.id + "-" + prefijo + (lista.length > 1 ? "-" + (i + 1) : ""),
      tipo: a.tipo,
      titulo: etiqueta + (a.titulo || t.nombre),
      instr: a.instr || "",
      n: a.n || 1,
      params: a.params || {},
      nivel: 3,
    }));
  }

  /* Ejecuta las actividades de la fase una tras otra. La primera se
     apila (para poder volver) y las demás reemplazan. */
  function correrSecuencia(descs, alTerminarFase) {
    let i = 0;
    let menor = 3;
    function siguiente(primera) {
      if (i >= descs.length) {
        if (alTerminarFase) alTerminarFase(menor);
        return;
      }
      const d = descs[i++];
      const ultima = i >= descs.length;
      const navegar = primera ? C.Nav.ir.bind(C.Nav) : C.Nav.reemplazar.bind(C.Nav);
      navegar("actividad", {
        desc: d,
        alTerminar: (estrellas) => {
          if (typeof estrellas === "number") menor = Math.min(menor, estrellas);
          if (ultima) {
            if (alTerminarFase) alTerminarFase(menor);
          } else {
            avisar("¡Muy bien! Seguimos ➡️", false);
            setTimeout(() => siguiente(false), 1200);
          }
        },
      });
    }
    siguiente(true);
  }

  function abrirFase(t, fase) {
    const descs = actividadesDeFase(t, fase);
    if (!descs.length) {
      /* Fase sin actividad escrita: se propone un juego de repaso */
      avisar("¡A jugar para practicar! 🎮");
      C.Nav.reemplazar("juegos");
      return;
    }
    correrSecuencia(descs, (estrellas) => {
      celebrar();
      /* Guarda la fase como hecha: el caminito del tema la pinta
         con ✓. En demostrar ya se marca también el tema entero. */
      marcarFase(t.id, fase);
      if (fase === "demostrar") {
        /* El tema queda hecho al completar la fase de demostrar */
        marcarTema(t.id, estrellas || 3);
        avisar("¡Tema completado! 🌟", false);
      } else if (fase === "juego") {
        avisar("¡Qué divertido! 🎉", false);
      } else {
        avisar("¡Fase completa! 🌟", false);
      }
      /* Volver a la pantalla del tema para ver el avance (antes el
         niño quedaba atascado en la actividad terminada sin saber
         qué hacer). */
      C.Nav.reemplazar("tema", { id: t.id });
    });
  }

  /* =========================================================
     5. ENGANCHES: perfil e inicio
     ========================================================= */

  /* 5.1 Selector de grado y materias dentro del formulario de perfil */
  let extraPendiente = null;

  function parchearStore() {
    /* crearPerfil y renombrarPerfil reciben el extra (grado y
       materias) como último argumento; estos envoltorios lo agregan
       automáticamente cuando el formulario de perfil lo preparó. */
    const origCrear = C.Store.crearPerfil;
    C.Store.crearPerfil = function (nombre, avatar, foto, extra) {
      return origCrear.call(C.Store, nombre, avatar, foto, extra || extraPendiente);
    };
    const origRenombrar = C.Store.renombrarPerfil;
    C.Store.renombrarPerfil = function (id, nombre, avatar, foto, extra) {
      return origRenombrar.call(C.Store, id, nombre, avatar, foto, extra || extraPendiente);
    };
  }

  function engancharFormularioPerfil() {
    const original = window.pantalla_perfil;
    if (typeof original !== "function") return;
    window.pantalla_perfil = function (datos) {
      original(datos);
      datos = datos || {};
      const cont = $("#contenido-perfil");
      if (!cont) return;
      const caja = cont.querySelector(".perfil-form");
      if (!caja) return;

      const editando = datos.editar ? C.Store.perfilPorId(datos.editar) : null;
      const gradoSel = (editando && editando.grado) || gradoActual() || "g1";
      const materiasSel = (editando && editando.materias) || materiasActuales();

      const fs = document.createElement("fieldset");
      fs.className = "campo-selector";
      const leyenda = document.createElement("legend");
      leyenda.textContent = "🏫 Mi grado y mis materias";
      fs.appendChild(leyenda);

      const selGrado = document.createElement("select");
      selGrado.className = "selector-grado";
      selGrado.setAttribute("aria-label", "Elige tu grado de primaria");
      CUR.GRADOS.forEach((gr) => {
        const op = document.createElement("option");
        op.value = gr.id;
        op.textContent = gr.nombre;
        if (gr.id === gradoSel) op.selected = true;
        selGrado.appendChild(op);
      });
      fs.appendChild(selGrado);

      fs.appendChild(el("p", "aviso-materias", "Toca las materias que practicarás. Si dejas todas, verás las 10."));

      const malla = el("div", "malla-materias malla-mini");
      const casillas = {};
      CUR.MATERIAS.forEach((m) => {
        const label = document.createElement("label");
        label.className = "casilla-materia";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = m.id;
        input.checked = materiasSel.indexOf(m.id) >= 0;
        casillas[m.id] = input;
        label.appendChild(input);
        label.appendChild(el("span", "materia-icono-mini", m.icono || "📘"));
        label.appendChild(el("span", "materia-nombre-mini", m.nombre));
        malla.appendChild(label);
      });
      fs.appendChild(malla);

      const filaMini = el("div", "cur-fila-botones");
      const btnTodas = el("button", "btn-mini", "✅ Todas");
      btnTodas.type = "button";
      btnTodas.onclick = () => {
        C.Sfx.clic();
        CUR.MATERIAS.forEach((m) => (casillas[m.id].checked = true));
      };
      const btnNinguna = el("button", "btn-mini", "⬜ Ninguna");
      btnNinguna.type = "button";
      btnNinguna.onclick = () => {
        C.Sfx.clic();
        CUR.MATERIAS.forEach((m) => (casillas[m.id].checked = false));
      };
      filaMini.appendChild(btnTodas);
      filaMini.appendChild(btnNinguna);
      fs.appendChild(filaMini);

      /* Inserta el selector justo antes de los botones de guardado */
      const filaBotones = caja.querySelector(".fila-botones");
      if (filaBotones) caja.insertBefore(fs, filaBotones);
      else caja.appendChild(fs);

      /* Prepara el extra y deja que el guardado original siga a cargo */
      const btnGuardar = caja.querySelector(".fila-botones .primario");
      if (!btnGuardar) return;
      const originalGuardar = btnGuardar.onclick;
      btnGuardar.onclick = function () {
        const materias = CUR.MATERIAS.filter((m) => casillas[m.id].checked).map((m) => m.id);
        extraPendiente = { grado: selGrado.value, materias: materias };
        try {
          originalGuardar();
        } finally {
          setTimeout(() => {
            extraPendiente = null;
          }, 0);
        }
      };
    };
  }

  /* 5.2 Sección de materias en la pantalla de inicio.
     (Desactivada: el catálogo completo de materias con franja de
     grado, progreso y recomendación vive ahora en js/materias-home.js,
     que se engancha directamente dentro de pantalla_home en app.js.
     Se conserva buscarPendiente porque la usa la paleta de revision.) */
  function engancharInicio() {
    return;
  }

  function buscarPendiente(grado, elegidas) {
    for (let i = 0; i < elegidas.length; i++) {
      const t = siguienteTemaPendiente(grado, elegidas[i]);
      if (t) return { materia: elegidas[i], tema: t };
    }
    return null;
  }

  /* =========================================================
     6. INSTALACIÓN
     ========================================================= */
  function instalar() {
    if (!window.CURRICULO || !Array.isArray(window.CURRICULO.MATERIAS)) {
      console.warn("CURRICULO no está disponible.");
      return;
    }
    /* Nuevas pantallas: Nav las resuelve por window["pantalla_" + id] */
    window.pantalla_materias = pantalla_materias;
    window.pantalla_materia = pantalla_materia;
    window.pantalla_tema = pantalla_tema;
    window.pantalla_repaso = pantalla_repaso;
    /* Guarda grado y materias junto con el perfil */
    parchearStore();
    /* Secciones nuevas dentro de pantallas existentes */
    if (typeof window.pantalla_home === "function") engancharInicio();
    if (typeof window.pantalla_perfil === "function") engancharFormularioPerfil();
    window.CURRICULO_UI_LISTO = true;
  }

  return {
    progreso: progreso,
    estadoTema: estadoTema,
    temaListo: temaListo,
    marcarTema: marcarTema,
    gradoActual: gradoActual,
    materiasActuales: materiasActuales,
    progresoMateria: progresoMateria,
    temaDisponible: temaDisponible,
    siguienteTemaPendiente: siguienteTemaPendiente,
    decirEn: decirEn,
    avisar: avisar,
    instalar: instalar,
  };
})();

/* Se instala sola al cargar. Va después de app.js en el index, así
   que window.pantalla_home / pantalla_perfil ya existen y pueden
   envolverse antes del primer pintado. */
window.CURRICULO_UI.instalar();
