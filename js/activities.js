/* =========================================================
   WEB LEER — Motor de actividades y juegos
   Cada tipo de actividad recibe un contenedor, un estado
   común (api) y sus parámetros. El estado común se encarga
   de la retroalimentación, las estrellas, el registro de
   aciertos/errores y la señal de terminación.
   ========================================================= */

window.ACT = (function () {
  "use strict";

  const C = CORE;
  const $ = C.$;
  const el = C.el;
  const rand = C.rand;
  const shuffle = C.shuffle;
  const shuffleFrom = C.shuffleFrom;

  function normalizar(s) {
    return String(s || "")
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  let S = null; // estado de la actividad actual

  /* ---------------------------------------------------------
     Marco común
     --------------------------------------------------------- */
  function ejecutar(desc, done) {
    const cuerpo = $("#actividad-cuerpo");
    cuerpo.innerHTML = "";
    C.detenerVigilancia();

    S = {
      desc: desc,
      done: done,
      errores: 0,
      ronda: 0,
      n: desc.n || 5,
      activo: true,
      instruccion: desc.instr || instruccionPorTipo(desc),
      inicio: Date.now(),
      terminado: false,
      clave: desc.clave || desc.tipo,
      extras: {},
    };

    $("#act-titulo").textContent = desc.titulo || "";

    /* Botones de la barra de actividad */
    $("#btn-repetir").onclick = () => {
      C.Sfx.clic();
      C.Voz.decir(S.instruccion);
    };
    $("#btn-ayuda").onclick = () => {
      C.Sfx.clic();
      C.Guia.habla(rand(DATA.pistas));
      if (typeof S.pistaVisual === "function") S.pistaVisual();
    };
    $("#btn-volver-act").onclick = () => {
      C.Sfx.clic();
      C.detenerVigilancia();
      C.Nav.atras();
    };

    const fn = TIPOS[desc.tipo];
    if (!fn) {
      cuerpo.appendChild(el("p", "aviso", "Actividad no disponible."));
      return;
    }
    fn(cuerpo, api(), desc.params || {});
    C.Guia.habla(S.instruccion);
    reiniciarVigilancia();
  }

  function reiniciarVigilancia() {
    if (!S || S.terminado) return;
    C.vigilarInactividad(
      S.instruccion || DATA.frases.ayuda,
      typeof S.pistaVisual === "function" ? () => S.pistaVisual() : null
    );
  }

  function instruccionPorTipo(d) {
    const t = d.tipo;
    const map = {
      explorar: "Mira las letras con calma. Toca el altavoz para escucharlas.",
      "find-letter": "Escucha la letra y tócala entre las opciones.",
      "pick-image": "Escucha la palabra y toca la imagen correcta.",
      "letter-object": "Mira la imagen y toca la letra con que empieza la palabra.",
      "initial-sound": "Escucha la palabra y toca la letra con que empieza.",
      "final-sound": "Escucha la palabra y toca la letra con que termina.",
      "syllable-listen": "Escucha la sílaba y tócala.",
      "order-syl": "Ordena las sílabas para formar la palabra.",
      "build-word": "Arrastra o toca las letras para formar la palabra.",
      "fill-word": "Completa la palabra con las letras que faltan.",
      memory: "Encuentra las parejas iguales. Voltea dos cartas.",
      bd: "Escucha la letra y toca la que te dicen.",
      follow: "Escucha con atención y haz lo que te pido.",
      trace: "Arrastra el ratón sobre la letra punteada. Empieza por el punto verde.",
      "type-word": "Escribe la palabra con el teclado o con los botones.",
      "sentence-listen": "Escucha la oración y responde la pregunta.",
      "sentence-read": "Lee la oración tocando cada palabra. Luego responde.",
      story: "Vamos a leer un cuento. Toca las flechas para pasar la página.",
      quiz: "Este es el reto final del nivel. ¡Tú puedes!",
      count: "Cuenta los objetos y toca el número correcto.",
      tenframe: "Cuenta los puntos del marco y toca el número.",
      numberline: "Toca el número en la recta numérica.",
      compare: "Mira los dos grupos y toca el que te digo.",
      ordernums: "Toca los números de menor a mayor.",
      beforeafter: "Toca el número que viene antes o después.",
      addvisual: "Junta los objetos, cuenta todos y toca el resultado.",
      subvisual: "Cuenta los objetos que quedan y toca el resultado.",
      add: "Suma los números y toca el resultado.",
      sub: "Resta los números y toca el resultado.",
      missing: "¿Qué número falta? Tócalo.",
      shapes: "Escucha el nombre y toca la figura correcta.",
      shapecount: "Cuenta cuántas figuras iguales hay y toca el número.",
      pattern: "Mira el patrón y toca el elemento que viene.",
      problem: "Escucha el problema y toca la respuesta correcta.",
      sopa: "Busca las palabras escondidas en la sopa de letras.",
    };
    return map[t] || "Vamos a jugar y a aprender.";
  }

  /* ---------------------------------------------------------
     API que reciben las actividades
     --------------------------------------------------------- */
  function api() {
    const obj = {
      get nivel() {
        return S.desc.nivel || 1;
      },
      get errores() {
        return S.errores;
      },
      get ronda() {
        return S.ronda;
      },
      get n() {
        return S.n;
      },
      instr(texto, inmediato) {
        S.instruccion = texto;
        C.Guia.habla(texto);
        if (inmediato) return;
      },
      hablar(texto) {
        C.Guia.habla(texto);
      },
      zona() {
        return $("#zona-actividad");
      },
      /* respuesta correcta */
      bien(btn, clave, texto) {
        responder(btn, true, clave || S.clave, texto);
      },
      /* respuesta incorrecta */
      mal(btn, clave, textoCorrecto) {
        responder(btn, false, clave || S.clave, textoCorrecto);
      },
      avanzar() {
        avanzar();
      },
      terminar() {
        terminar();
      },
      pistaVisual(fn) {
        S.pistaVisual = fn;
      },
      registrarResultado(ok, clave) {
        C.Store.registrar(S.desc.nivel || 1, clave || S.clave, ok);
      },
      /* Pintor de rondas para tipos definidos fuera de este archivo:
         el motor lo llama cada vez que avanza a la siguiente ronda. */
      pintar(fn) {
        S.pintarExterno = typeof fn === "function" ? fn : null;
      },
    };
    /* pistaVisual debe funcionar tanto como método: api.pistaVisual(fn)
       como por asignación: api.pistaVisual = fn (como lo usan los juegos) */
    Object.defineProperty(obj, "pistaVisual", {
      set(fn) {
        S.pistaVisual = fn;
      },
      get() {
        return S.pistaVisual || function () {};
      },
      configurable: true,
    });
    return obj;
  }

  function responder(btn, ok, clave, textoCorrecto) {
    if (!S || S.terminado) return;
    if (!S.activo) return;
    S.activo = false;

    if (ok) {
      C.Sfx.bien();
      C.celebrar($("#actividad-cuerpo"));
      if (btn) btn.classList.add("correcto");
      C.Guia.habla(rand(DATA.elogios));
      C.Store.registrar(S.desc.nivel || 1, clave, true);
      if (S.desc.tipo === "sentence-listen" || S.desc.tipo === "sentence-read" || S.desc.tipo === "story") {
        C.Store.data.escuchas++;
      }
      /* Leer bien hace crecer a la mascota: desbloquea disfraces */
      if (window.MASCOTA && window.MASCOTA.tiene()) window.MASCOTA.registrarAcierto();
      C.Store.save();
      setTimeout(() => {
        if (!S || S.terminado) return;
        if (btn) btn.classList.remove("correcto");
        S.activo = true;
        avanzar();
      }, 1500);
    } else {
      C.Sfx.mal();
      S.errores++;
      if (btn) {
        btn.classList.add("mal");
        setTimeout(() => btn && btn.classList.remove("mal"), 900);
      }
      C.Store.registrar(S.desc.nivel || 1, clave, false);
      const frase =
        S.errores === 1 ? rand(DATA.animos) : textoCorrecto ? textoCorrecto : DATA.frases.casi;
      C.Guia.habla(frase);
      setTimeout(() => {
        if (!S || S.terminado) return;
        S.activo = true;
        if (S.errores >= 2 && typeof S.pistaVisual === "function") S.pistaVisual();
        reiniciarVigilancia();
      }, 1300);
    }
  }

  function pintarRonda() {
    if (typeof S.pintar === "function") S.pintar();
    else if (typeof S.pintarExterno === "function") S.pintarExterno();
    reiniciarVigilancia();
  }

  function avanzar() {
    if (S.desc && S.desc.tipo === "quiz") {
      /* en el quiz, cada "avanzar" salta al siguiente reto */
      S.ronda++;
      if (S.ronda >= S.n) {
        terminar();
      } else {
        pintarRonda();
      }
      return;
    }
    S.ronda++;
    if (S.ronda >= S.n) {
      terminar();
    } else {
      pintarRonda();
    }
  }

  function terminar() {
    if (S.terminado) return;
    S.terminado = true;
    C.detenerVigilancia();
    limpiarTecladoPrevio();
    const estrellas = S.errores === 0 ? 3 : S.errores <= 2 ? 2 : 1;
    const ms = Date.now() - S.inicio;
    C.Store.data.tiempoMs += ms;
    if (S.desc.tipo === "trace") C.Store.data.trazos = (C.Store.data.trazos || 0) + 1;
    C.Store.marcarHecha(S.desc.nivel || 1, S.desc.id || S.desc.tipo, estrellas);
    C.Guia.habla(DATA.frases.finActividad);
    C.Sfx.estrella();
    const cb = S.done;
    setTimeout(() => {
      if (cb) cb(estrellas, S);
    }, 700);
  }

  /* ---------------------------------------------------------
     Utilidades visuales
     --------------------------------------------------------- */
  function pintarZona(container) {
    container.innerHTML = "";
    const zona = el("div", "zona");
    zona.id = "zona-actividad";
    container.appendChild(zona);
    return zona;
  }

  /* Tablero de opciones estándar.
     textoAccesible: función opcional para dar un nombre real al
     botón en lectores de pantalla (así el pictograma es solo la
     imagen y la palabra no se repite encima como texto). */
  function opciones(zona, valores, render, alTocar, textoAccesible) {
    const caja = el("div", "tablero-opciones");
    const botones = [];
    valores.forEach((v, i) => {
      const b = el("button", "opcion");
      b.innerHTML = render(v, i);
      b.dataset.tecla = i + 1;
      b.setAttribute(
        "aria-label",
        textoAccesible ? textoAccesible(v, i) : typeof v === "string" ? v : "opción " + (i + 1)
      );
      b.onclick = () => {
        C.Sfx.clic();
        alTocar(v, b, i);
      };
      botones.push(b);
      caja.appendChild(b);
    });
    zona.appendChild(caja);
    /* teclado: 1..9 */
    const handler = (e) => {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= botones.length && botones[n - 1]) {
        botones[n - 1].click();
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        C.Voz.repetir();
      }
    };
    document.addEventListener("keydown", handler);
    S.limpiarTeclado = () => document.removeEventListener("keydown", handler);
    return caja;
  }

  function limpiarTecladoPrevio() {
    if (S && typeof S.limpiarTeclado === "function") S.limpiarTeclado();
    if (S) S.limpiarTeclado = null;
    window.repintarTrazo = null;
  }

  function etiquetaLetra(l) {
    return '<span class="letra-grande">' + l + "</span>";
  }

  /* ---------------------------------------------------------
     Tipos de actividad
     --------------------------------------------------------- */
  const TIPOS = {};

  /* ---- 1. Explorar contenido (letra + imagen) ---- */
  TIPOS.explorar = function (container, api2, params) {
    const objs = params.objetos || [];
    S.n = objs.length;
    S.ronda = 0;
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      const o = objs[S.ronda];
      const card = el("div", "tarjeta-explorar");
      card.innerHTML =
        '<div class="explorar-emoji">' +
        (o.emoji || "") +
        '</div><div class="explorar-letra">' +
        (o.grande || o.l || "") +
        '</div><div class="explorar-texto">' +
        (o.texto || "") +
        "</div>";
      /* La tarjeta también habla al tocarla: así el niño no necesita
         leer para saber qué hacer con ella. */
      const decirTarjeta = () => {
        C.Sfx.clic();
        api2.hablar(o.audio || o.texto || "");
      };
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", "Escuchar " + (o.grande || o.l || "") + (o.texto ? ": " + o.texto : ""));
      card.onclick = decirTarjeta;
      card.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          decirTarjeta();
        }
      };
      const btnSon = el("button", "btn grande", "🔊 Escuchar");
      btnSon.onclick = () => {
        C.Sfx.clic();
        api2.hablar(o.audio || o.texto || "");
      };
      const btnMas = el("button", "btn grande primario", S.ronda === objs.length - 1 ? "✅ Terminar" : "➡️ Seguir");
      btnMas.onclick = () => {
        C.Sfx.clic();
        api2.avanzar();
      };
      const fila = el("div", "fila-botones");
      fila.appendChild(btnSon);
      fila.appendChild(btnMas);
      zona.appendChild(card);
      zona.appendChild(fila);
      setTimeout(() => api2.hablar(o.audio || o.texto || ""), 250);
      api2.pistaVisual = () => {
        card.classList.add("pista");
        setTimeout(() => card.classList.remove("pista"), 2200);
      };
    };
    S.pintar();
  };

  /* ---- 2. Encontrar la letra que dicen ---- */
  TIPOS["find-letter"] = function (container, api2, params) {
    const pool = params.pool || ["A", "E", "I", "O", "U"];
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let objetivo = rand(pool.filter((x) => usados.indexOf(x) === -1) || pool);
      if (!objetivo) {
        usados.length = 0;
        objetivo = rand(pool);
      }
      usados.push(objetivo);
      S.extras.objetivo = objetivo;
      const info =
        DATA.vocales.find((v) => v.l === objetivo) ||
        DATA.consonantes.find((v) => v.l === objetivo) ||
        null;
      const pista = info ? DATA.textoSonido(objetivo) : "";
      const opcionesPool = pool.length >= 4 ? pool : pool.concat(["A", "E", "I", "O", "U", "M", "P", "S", "L", "T"]).slice(0, 8);
      const vals = shuffleFrom(objetivo, opcionesPool, Math.max(4, Math.min(6, opcionesPool.length)));

      const consigna = el("p", "consigna", "Encuentra la letra");
      const altavoz = el("button", "btn-altavoz grande", "🔊");
      altavoz.onclick = () => {
        C.Sfx.clic();
        api2.hablar("Toca la letra " + objetivo + ". " + pista);
      };
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      opciones(
        zona,
        vals,
        (v) => etiquetaLetra(v),
        (v, b) => {
          if (v === objetivo) {
            api2.bien(b, "letra-" + objetivo, "¡Sí! Esa es la letra " + objetivo + ".");
          } else {
            api2.mal(b, "letra-" + objetivo, "No es esa. Era la " + objetivo + ".");
          }
        }
      );

      api2.pistaVisual = () => {
        const btns = C.$$(".opcion", zona);
        btns.forEach((b) => {
          if (b.textContent.trim() === objetivo) b.classList.add("pista");
        });
        setTimeout(() => btns.forEach((b) => b.classList.remove("pista")), 2500);
      };

      setTimeout(() => {
        if (S && !S.terminado) api2.hablar("Toca la letra " + objetivo + ". " + pista);
      }, 700);
    };
    S.pintar();
  };

  /* ---- 3. Escuchar palabra → elegir imagen ---- */
  TIPOS["pick-image"] = function (container, api2, params) {
    const pool = params.pool || DATA.objetos;
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = pool.filter((o) => usados.indexOf(o.w) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = pool;
      }
      const obj = rand(libres);
      usados.push(obj.w);
      S.extras.obj = obj;

      const consigna = el("p", "consigna", "¿Cuál es " + obj.w + "?");
      const altavoz = el("button", "btn-altavoz grande", "🔊");
      const decir = () => api2.hablar(obj.w);
      altavoz.onclick = () => {
        C.Sfx.clic();
        decir();
      };
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const vals = shuffleFrom(obj, pool, 4);
      opciones(
        zona,
        vals,
        (o) => '<span class="emoji-opcion">' + o.emoji + "</span>",
        (o, b) => {
          if (o.w === obj.w) {
            api2.bien(b, "palabra-" + obj.w, "¡Muy bien! Encontraste " + obj.w + ".");
          } else {
            api2.mal(b, "palabra-" + obj.w, "Esa imagen no. Era " + obj.w + ".");
          }
        },
        (o) => o.w
      );

      api2.pistaVisual = () => {
        C.$$(".opcion", zona).forEach((b) => {
          if (b.querySelector(".emoji-opcion") && b.textContent.indexOf(obj.emoji) !== -1) b.classList.add("pista");
        });
        setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
      };

      setTimeout(() => {
        if (S && !S.terminado) {
          api2.hablar("Escucha la palabra y toca la imagen.");
          setTimeout(() => {
            if (S && !S.terminado) decir();
          }, 1400);
        }
      }, 300);
    };
    S.pintar();
  };

  /* ---- 4. Imagen → letra inicial ---- */
  TIPOS["letter-object"] = function (container, api2, params) {
    const items = params.pool || DATA.consonantes;
    const letras = items.map((i) => i.l);
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = items.filter((i) => usados.indexOf(i.l) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = items;
      }
      const it = rand(libres);
      usados.push(it.l);
      S.extras.it = it;

      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML =
        '<div class="explorar-emoji">' + it.emoji + '</div><div class="explorar-texto">' + it.word + "</div>";
      zona.appendChild(card);

      const consigna = el("p", "consigna", "¿Con qué letra empieza?");
      const altavoz = el("button", "btn-altavoz", "🔊");
      altavoz.onclick = () => {
        C.Sfx.clic();
        api2.hablar(it.word);
      };
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const vals = shuffleFrom(it.l, letras, Math.min(6, Math.max(4, letras.length)));
      opciones(
        zona,
        vals,
        (v) => etiquetaLetra(v),
        (v, b) => {
          if (v === it.l) api2.bien(b, "inicial-" + it.l, "¡Bien! " + it.word + " empieza con " + it.l + ".");
          else api2.mal(b, "inicial-" + it.l, it.word + " empieza con " + it.l + ".");
        }
      );
      api2.pistaVisual = () => {
        C.$$(".opcion", zona).forEach((b) => {
          if (b.textContent.trim() === it.l) b.classList.add("pista");
        });
        setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
      };
      setTimeout(() => {
        if (S && !S.terminado) api2.hablar("¿Con qué letra empieza " + it.word + "?");
      }, 600);
    };
    S.pintar();
  };

  /* ---- 5. Sonido inicial escuchado ---- */
  TIPOS["initial-sound"] = function (container, api2, params) {
    const items = params.pool || DATA.objetos;
    const letrasPool = params.letras || DATA.consonantes.map((c) => c.l).concat(["A", "E", "I", "O", "U"]);
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = items.filter((i) => usados.indexOf(i.w) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = items;
      }
      const it = rand(libres);
      usados.push(it.w);
      S.extras.it = it;

      const consigna = el("p", "consigna", "¿Con qué letra empieza lo que vas a oír?");
      const altavoz = el("button", "btn-altavoz grande", "🔊");
      altavoz.onclick = () => {
        C.Sfx.clic();
        api2.hablar(it.w);
      };
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const ini = it.w.charAt(0);
      const vals = shuffleFrom(ini, letrasPool, 4);
      opciones(
        zona,
        vals,
        (v) => etiquetaLetra(v),
        (v, b) => {
          if (v === ini) {
            api2.bien(b, "inicial-" + ini, "¡Muy bien! " + it.w + " empieza con " + ini + ".");
          } else {
            api2.mal(b, "inicial-" + ini, "Escucha otra vez. " + it.w + " empieza con " + ini + ".");
            setTimeout(() => {
              if (S && !S.terminado) mostrarImagen(it);
            }, 900);
          }
        }
      );
      api2.pistaVisual = () => mostrarImagen(it);
      function mostrarImagen(o) {
        let extra = zona.querySelector(".imagen-pista");
        if (!extra) {
          extra = el("div", "imagen-pista");
          zona.appendChild(extra);
        }
        extra.innerHTML = '<span class="emoji-opcion">' + o.emoji + "</span> " + o.w;
      }
      setTimeout(() => {
        if (S && !S.terminado) {
          api2.hablar("Escucha la palabra.");
          setTimeout(() => {
            if (S && !S.terminado) api2.hablar(it.w);
          }, 1500);
        }
      }, 300);
    };
    S.pintar();
  };

  /* ---- 6. Sonido final ---- */
  TIPOS["final-sound"] = function (container, api2, params) {
    const items = (params.pool || DATA.objetos).filter((o) => o.w.length >= 3);
    const letrasPool = params.letras || DATA.consonantes.map((c) => c.l).concat(["A", "E", "I", "O", "U"]);
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = items.filter((i) => usados.indexOf(i.w) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = items;
      }
      const it = rand(libres);
      usados.push(it.w);
      S.extras.it = it;
      const fin = it.w.charAt(it.w.length - 1);

      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML = '<div class="explorar-emoji">' + it.emoji + "</div>";
      zona.appendChild(card);
      const consigna = el("p", "consigna", "¿Con qué letra termina " + it.w + "?");
      const altavoz = el("button", "btn-altavoz", "🔊");
      altavoz.onclick = () => api2.hablar(it.w);
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const vals = shuffleFrom(fin, letrasPool, 4);
      opciones(
        zona,
        vals,
        (v) => etiquetaLetra(v),
        (v, b) => {
          if (v === fin) api2.bien(b, "final-" + fin, "¡Exacto! " + it.w + " termina en " + fin + ".");
          else api2.mal(b, "final-" + fin, it.w + " termina en " + fin + ".");
        }
      );
      setTimeout(() => {
        if (S && !S.terminado) api2.hablar(it.w);
      }, 700);
    };
    S.pintar();
  };

  /* ---- 7. Escuchar sílaba ---- */
  TIPOS["syllable-listen"] = function (container, api2, params) {
    const pool = params.pool || ["MA", "ME", "MI", "MO", "MU", "PA", "PE", "PI", "PO", "PU"];
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = pool.filter((p) => usados.indexOf(p) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = pool;
      }
      const sil = rand(libres);
      usados.push(sil);
      S.extras.sil = sil;

      const consigna = el("p", "consigna", "Escucha la sílaba");
      const altavoz = el("button", "btn-altavoz grande", "🔊");
      const decir = () => api2.hablar("Lee conmigo: " + sil.split("").join(" ") + ". " + sil);
      altavoz.onclick = decir;
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const vals = shuffleFrom(sil, pool, 4);
      opciones(
        zona,
        vals,
        (v) => '<span class="silaba-grande">' + v + "</span>",
        (v, b) => {
          if (v === sil) api2.bien(b, "silaba-" + sil, "¡Muy bien! Esa es la sílaba " + sil + ".");
          else api2.mal(b, "silaba-" + sil, "Era " + sil + ".");
        }
      );
      api2.pistaVisual = () => {
        C.$$(".opcion", zona).forEach((b) => {
          if (b.textContent.trim() === sil) b.classList.add("pista");
        });
        setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
      };
      setTimeout(() => {
        if (S && !S.terminado) decir();
      }, 600);
    };
    S.pintar();
  };

  /* ---------------------------------------------------------
     Colocación de fichas (arrastrar con el ratón o tocar)
     --------------------------------------------------------- */
  function ficha(texto, cls) {
    const f = el("div", "ficha " + (cls || ""), texto);
    f.tabIndex = 0;
    return f;
  }

  function hacerArrastrable(fichaEl, alSoltar) {
    let arrastrando = false;
    let movido = 0;
    let ox = 0;
    let oy = 0;

    fichaEl.addEventListener("pointerdown", (e) => {
      arrastrando = true;
      movido = 0;
      const r = fichaEl.getBoundingClientRect();
      ox = e.clientX - r.left;
      oy = e.clientY - r.top;
      fichaEl.setPointerCapture(e.pointerId);
      fichaEl.classList.add("arrastrando");
      fichaEl.style.width = r.width + "px";
    });

    fichaEl.addEventListener("pointermove", (e) => {
      if (!arrastrando) return;
      movido++;
      if (fichaEl.style.position !== "fixed") {
        /* se ancla a la esquina una sola vez; después solo se mueve con transform (sin recalcular el diseño) */
        fichaEl.style.position = "fixed";
        fichaEl.style.left = "0px";
        fichaEl.style.top = "0px";
        fichaEl.style.zIndex = "999";
      }
      fichaEl.style.transform = "translate3d(" + (e.clientX - ox) + "px," + (e.clientY - oy) + "px,0)";
    });

    const soltar = (e) => {
      if (!arrastrando) return;
      arrastrando = false;
      fichaEl.classList.remove("arrastrando");
      const x = e.clientX;
      const y = e.clientY;
      fichaEl.style.position = "";
      fichaEl.style.left = "";
      fichaEl.style.top = "";
      fichaEl.style.transform = "";
      fichaEl.style.zIndex = "";
      fichaEl.style.width = "";
      const destino = document.elementFromPoint(x, y);
      if (movido <= 2) {
        alSoltar(null, fichaEl, true); // tratado como clic
      } else {
        alSoltar(destino, fichaEl, false);
      }
    };
    fichaEl.addEventListener("pointerup", soltar);
    fichaEl.addEventListener("pointercancel", () => {
      arrastrando = false;
      fichaEl.classList.remove("arrastrando");
      fichaEl.style.position = "";
      fichaEl.style.left = "";
      fichaEl.style.top = "";
      fichaEl.style.transform = "";
      fichaEl.style.zIndex = "";
      fichaEl.style.width = "";
    });
  }

  /* Tablero con bandeja de fichas y ranuras */
  function tableroFichas(zona, opcionesFichas, cantidadRanuras, alCompletar) {
    const ranuras = [];
    const bandeja = el("div", "bandeja");
    const filaRanuras = el("div", "ranuras");
    opcionesFichas.forEach((t) => {
      const f = ficha(t);
      bandeja.appendChild(f);
    });
    for (let i = 0; i < cantidadRanuras; i++) {
      const r = el("div", "ranura");
      r.dataset.i = i;
      filaRanuras.appendChild(r);
      ranuras.push(r);
    }
    zona.appendChild(filaRanuras);
    zona.appendChild(el("p", "ayuda-texto", "Arrastra la ficha a la casilla, o toca la ficha y luego la casilla."));
    zona.appendChild(bandeja);

    let seleccionada = null;

    function colocar(ranura, f) {
      const ocupada = ranura.querySelector(".ficha");
      const origen = f.parentElement;
      if (ocupada && ocupada !== f) {
        /* intercambiar: regresar la que estaba a su lugar */
        if (origen && origen.classList.contains("ranura")) {
          origen.appendChild(ocupada);
        } else {
          bandeja.appendChild(ocupada);
        }
      }
      ranura.appendChild(f);
      f.classList.remove("seleccionada");
      seleccionada = null;
      C.Sfx.clic();
      revisar();
    }

    function revisar() {
      const llenas = ranuras.filter((r) => r.querySelector(".ficha"));
      if (llenas.length === cantidadRanuras) {
        const valores = ranuras.map((r) => r.querySelector(".ficha").textContent);
        alCompletar(valores, { colocar, bandeja, ranuras, limpiar });
      }
    }

    function limpiar() {
      ranuras.forEach((r) => {
        const f = r.querySelector(".ficha");
        if (f) bandeja.appendChild(f);
      });
    }

    C.$$(".ficha", bandeja).concat(C.$$(".ficha", filaRanuras)).forEach((f) => {
      hacerArrastrable(f, (destino, fichaEl) => {
        const ranura = destino && destino.closest ? destino.closest(".ranura") : null;
        if (ranura) {
          colocar(ranura, fichaEl);
          return;
        }
        /* clic: seleccionar / devolver */
        if (destino === null) {
          if (fichaEl.parentElement.classList.contains("ranura")) {
            bandeja.appendChild(fichaEl);
            C.Sfx.clic();
            revisar();
          } else {
            C.$$(".ficha.seleccionada").forEach((x) => x.classList.remove("seleccionada"));
            fichaEl.classList.add("seleccionada");
            seleccionada = fichaEl;
            C.Sfx.clic();
          }
        } else {
          bandeja.appendChild(fichaEl);
          revisar();
        }
      });
    });

    /* tocar una ranura con la ficha seleccionada */
    ranuras.forEach((r) => {
      r.addEventListener("click", () => {
        if (seleccionada) colocar(r, seleccionada);
      });
    });

    return { colocar, bandeja, ranuras, limpiar };
  }

  /* ---- 8. Ordenar sílabas ---- */
  TIPOS["order-syl"] = function (container, api2, params) {
    const palabras = params.pool || DATA.palabras;
    const usados = [];
    S.n = Math.min(params.n || 4, palabras.length);
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = palabras.filter((p) => usados.indexOf(p.w) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = palabras;
      }
      const p = rand(libres.filter((x) => x.syl.length > 1) || libres);
      const palabra = p || rand(libres);
      usados.push(palabra.w);
      S.extras.palabra = palabra; // expone la respuesta actual (útil para pruebas y accesibilidad)

      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML = '<div class="explorar-emoji">' + palabra.emoji + "</div>";
      zona.appendChild(card);
      const consigna = el("p", "consigna", "Ordena las sílabas de " + palabra.s);
      const altavoz = el("button", "btn-altavoz", "🔊");
      altavoz.onclick = () => api2.hablar(palabra.w);
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const fichas = shuffle(palabra.syl);
      tableroFichas(zona, fichas, palabra.syl.length, (valores, tab) => {
        const ok = normalizar(valores.join("")) === normalizar(palabra.w);
        if (ok) {
          api2.bien(null, "palabra-" + palabra.w, "¡Muy bien! Leíste " + palabra.w + ".");
          setTimeout(() => api2.hablar(palabra.w), 400);
        } else {
          api2.mal(null, "palabra-" + palabra.w, "Mira la imagen: es " + palabra.w + ".");
          setTimeout(() => tab.limpiar(), 1000);
        }
      });
      api2.pistaVisual = () => {
        const t = zona.querySelector(".ranuras");
        if (t) {
          t.classList.add("pista");
          setTimeout(() => t.classList.remove("pista"), 2500);
        }
      };
      setTimeout(() => {
        if (S && !S.terminado) api2.hablar("Ordena las sílabas de " + palabra.w);
      }, 400);
    };
    S.pintar();
  };

  /* ---- 9. Construir palabra con letras ---- */
  TIPOS["build-word"] = function (container, api2, params) {
    const palabras = params.pool || DATA.palabras;
    const usados = [];
    S.n = Math.min(params.n || 4, palabras.length);
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = palabras.filter((p) => usados.indexOf(p.w) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = palabras;
      }
      const palabra = rand(libres);
      usados.push(palabra.w);
      S.extras.palabra = palabra;

      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML =
        '<div class="explorar-emoji">' + palabra.emoji + '</div><div class="explorar-texto">' + palabra.s + "</div>";
      zona.appendChild(card);
      const consigna = el("p", "consigna", "Forma la palabra " + palabra.w.replace(/[AEIOUÁÉÍÓÚ]/g, "•"));
      const altavoz = el("button", "btn-altavoz", "🔊");
      altavoz.onclick = () => api2.hablar(palabra.w);
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const letras = palabra.w.split("");
      const distractores = shuffle(
        DATA.vocales.map((v) => v.l).concat(DATA.consonantes.map((c) => c.l)).filter((l) => letras.indexOf(l) === -1)
      ).slice(0, 3);
      const fichas = shuffle(letras.concat(distractores));

      tableroFichas(zona, fichas, letras.length, (valores, tab) => {
        const ok = normalizar(valores.join("")) === normalizar(palabra.w);
        if (ok) {
          api2.bien(null, "palabra-" + palabra.w, "¡Perfecto! Formaste " + palabra.w + ".");
          setTimeout(() => api2.hablar(palabra.w), 400);
        } else {
          api2.mal(null, "palabra-" + palabra.w, "Casi. La palabra es " + palabra.w + ".");
          setTimeout(() => tab.limpiar(), 1100);
        }
      });
      setTimeout(() => {
        if (S && !S.terminado) api2.hablar("Forma la palabra " + palabra.w);
      }, 400);
    };
    S.pintar();
  };

  /* ---- 10. Completar la palabra ---- */
  TIPOS["fill-word"] = function (container, api2, params) {
    const palabras = (params.pool || DATA.palabras).filter((p) => p.w.length >= 3 && p.w.length <= 6);
    const usados = [];
    S.n = Math.min(params.n || 4, palabras.length);
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = palabras.filter((p) => usados.indexOf(p.w) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = palabras;
      }
      const palabra = rand(libres);
      usados.push(palabra.w);

      const letras = palabra.w.split("");
      const ocultasSel = shuffle(letras.map((l, i) => i)).slice(0, Math.max(1, Math.floor(letras.length / 2)));
      const ocultas = ocultasSel.slice().sort((a, b) => a - b);
      const escondidas = letras.map((l, i) => (ocultas.indexOf(i) !== -1 ? "_" : l));
      S.extras.palabra = palabra;
      S.extras.letras = letras;
      S.extras.ocultas = ocultas;

      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML = '<div class="explorar-emoji">' + palabra.emoji + "</div>";
      zona.appendChild(card);

      const consigna = el("p", "consigna", "Completa la palabra con las letras que faltan.");
      const altavoz = el("button", "btn-altavoz", "🔊");
      altavoz.onclick = () => api2.hablar("Completa la palabra con las letras que faltan.");
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const panel = el("div", "palabra-incompleta");
      const ranuras = [];
      const estado = []; /* { caja, letra } por hueco */
      let huecoActivo = 0;
      escondidas.forEach((c) => {
        if (c === "_") {
          const caja = el("div", "caja-letra vacia");
          caja.textContent = "";
          panel.appendChild(caja);
          const info = { caja: caja, letra: null };
          ranuras.push(caja);
          estado.push(info);
          /* El niño puede tocar un hueco para elegirlo antes de la letra */
          caja.onclick = () => {
            if (info.letra) return;
            C.Sfx.clic();
            huecoActivo = estado.indexOf(info);
            pintarHuecos();
          };
        } else {
          const caja = el("div", "caja-letra");
          caja.textContent = c;
          panel.appendChild(caja);
        }
      });
      zona.appendChild(panel);

      function pintarHuecos() {
        estado.forEach((e, i) => {
          e.caja.classList.toggle("activo", i === huecoActivo && !e.letra);
        });
      }
      function primerHuecoLibre() {
        for (let i = 0; i < estado.length; i++) if (!estado[i].letra) return i;
        return -1;
      }

      const correctas = ocultas.map((i) => letras[i]);
      /* El pool base NO trae vocales con tilde (Á, É, Í, Ó, Ú). Si un hueco
         espera una, la añadimos explícitamente para que siempre exista una
         opción válida y el niño no quede atascado. */
      const poolLetras = DATA.vocales.map((v) => v.l).concat(DATA.consonantes.map((c) => c.l));
      const distractores = shuffle(poolLetras.filter((l) => correctas.indexOf(l) === -1)).slice(0, 3);
      const vals = shuffle(correctas.concat(distractores));
      correctas.forEach((c) => {
        if (vals.indexOf(c) === -1) vals.push(c);
      });
      while (vals.length > 6) vals.pop();

      pintarHuecos();

      function revisarFin() {
        if (primerHuecoLibre() !== -1) return false;
        api2.bien(null, "palabra-" + palabra.w, "¡Muy bien! Has completado la palabra " + palabra.w + "!");
        setTimeout(() => api2.hablar(palabra.w), 500);
        return true;
      }

      opciones(
        zona,
        vals,
        (v) => etiquetaLetra(v),
        (v, b) => {
          if (primerHuecoLibre() === -1) return;
          /* Si el niño no eligió un hueco, usamos el primero libre.
             Así da igual el orden en que toque las letras. */
          let objetivo = huecoActivo;
          if (objetivo < 0 || objetivo >= estado.length || estado[objetivo].letra) {
            objetivo = primerHuecoLibre();
          }
          const esperada = estado[objetivo].letra === null ? letras[ocultas[objetivo]] : null;
          if (esperada && normalizar(v) === normalizar(esperada)) {
            /* Mostramos SIEMPRE la letra correcta de la palabra (con su
               tilde o Ñ), aunque el niño haya tocado su versión sin tilde. */
            estado[objetivo].letra = esperada;
            estado[objetivo].caja.textContent = esperada;
            estado[objetivo].caja.classList.remove("vacia", "activo");
            estado[objetivo].caja.classList.add("bien");
            huecoActivo = primerHuecoLibre();
            pintarHuecos();
            C.Sfx.bien();
            C.Guia.habla("¡Muy bien!");
            b.classList.add("correcto");
            setTimeout(() => b.classList.remove("correcto"), 500);
            revisarFin();
          } else {
            /* Indicamos al niño qué letra espera el hueco elegido */
            const deseada = letras[ocultas[objetivo]];
            api2.mal(b, "palabra-" + palabra.w, "No es esa. En ese espacio va la letra " + deseada + ".");
            const vp = String(v).toUpperCase();
            const ep = String(deseada).toUpperCase();
            if ((vp === "B" && ep === "D") || (vp === "D" && ep === "B") || (vp === "P" && ep === "Q") || (vp === "Q" && ep === "P") || (vp === "M" && ep === "N") || (vp === "N" && ep === "M")) {
              C.Store.agregarConfusion(vp + "-" + ep);
            }
          }
        }
      );
      api2.pistaVisual = () => {
        const libre = primerHuecoLibre();
        if (libre >= 0) {
          huecoActivo = libre;
          pintarHuecos();
          estado[libre].caja.classList.add("pista");
          setTimeout(() => estado[libre] && estado[libre].caja.classList.remove("pista"), 2500);
        }
      };
      setTimeout(() => {
        if (S && !S.terminado) api2.hablar("Completa la palabra con las letras que faltan.");
      }, 400);
    };
    S.pintar();
  };

  /* ---- 11. Juego de memoria ---- */
  TIPOS.memory = function (container, api2, params) {
    const letras = params.letras || ["A", "E", "I", "O", "U", "M"];
    const parejas = [];
    letras.forEach((l) => {
      const info = DATA.vocales.find((v) => v.l === l) || DATA.consonantes.find((v) => v.l === l);
      parejas.push({ id: l, v: l });
      parejas.push({ id: l, v: info ? info.low : l.toLowerCase() });
    });
    const cartas = shuffle(parejas).slice(0, Math.min(12, parejas.length));
    S.n = 1;
    S.ronda = 0;
    let descubiertas = 0;
    let abiertas = [];
    let bloqueado = false;
    let intentos = 0;

    const zona = pintarZona(container);
    const consigna = el("p", "consigna", "Encuentra las parejas: la letra en grande y la letra pequeña.");
    const altavoz = el("button", "btn-altavoz", "🔊");
    altavoz.onclick = () => api2.hablar("Voltea dos cartas y busca las que sean iguales.");
    const fila = el("div", "fila-consigna");
    fila.appendChild(consigna);
    fila.appendChild(altavoz);
    zona.appendChild(fila);

    const rejilla = el("div", "memoria");
    cartas.forEach((c, i) => {
      const card = el("button", "carta");
      card.innerHTML = '<span class="atras">?</span><span class="frente">' + c.v + "</span>";
      card.dataset.i = i;
      card.onclick = () => {
        if (bloqueado || card.classList.contains("volteada")) return;
        C.Sfx.clic();
        card.classList.add("volteada");
        abiertas.push(card);
        if (abiertas.length === 2) {
          bloqueado = true;
          intentos++;
          const [a, b] = abiertas;
          const igual = cartas[a.dataset.i].id === cartas[b.dataset.i].id;
          if (igual) {
            C.Sfx.bien();
            a.classList.add("par");
            b.classList.add("par");
            descubiertas++;
            abiertas = [];
            bloqueado = false;
            C.Guia.habla("¡Bien! Encontraste una pareja.");
            if (descubiertas >= cartas.length / 2) {
              api2.bien(null, "memoria", "¡Terminaste el juego de memoria!");
            }
          } else {
            C.Sfx.mal();
            C.Guia.habla("No son iguales. Volteamos otra vez.");
            S.errores++;
            setTimeout(() => {
              a.classList.remove("volteada");
              b.classList.remove("volteada");
              abiertas = [];
              bloqueado = false;
            }, 1100);
          }
        }
      };
      rejilla.appendChild(card);
    });
    zona.appendChild(rejilla);
    api2.pistaVisual = () => {
      C.$$(".carta:not(.volteada)", rejilla).forEach((c, i) => {
        if (i < 2) c.classList.add("pista");
      });
      setTimeout(() => C.$$(".carta", rejilla).forEach((c) => c.classList.remove("pista")), 2500);
    };
    setTimeout(() => api2.hablar("Voltea dos cartas y busca las que sean iguales."), 300);
  };

  /* ---- 12. Letras parecidas b/d, p/q, m/n ---- */
  TIPOS.bd = function (container, api2, params) {
    const pares = params.pares || DATA.confundibles;
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = pares.filter((p) => usados.indexOf(p.muestra) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = pares;
      }
      const p = rand(libres);
      usados.push(p.muestra);
      const objetivo = rand(p.par);
      S.extras.objetivo = objetivo;

      const consigna = el("p", "consigna", "Cuidado con las letras parecidas");
      const altavoz = el("button", "btn-altavoz grande", "🔊");
      const decir = () => api2.hablar("Toca la letra " + objetivo);
      altavoz.onclick = decir;
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const vals = shuffle(p.par);
      opciones(
        zona,
        vals,
        (v) => etiquetaLetra(v),
        (v, b) => {
          if (v === objetivo) api2.bien(b, "letra-" + objetivo, "¡Muy bien! Esa es la " + objetivo + ".");
          else api2.mal(b, "letra-" + objetivo, "Mira bien: era la " + objetivo + ".");
        }
      );
      api2.pistaVisual = () => {
        C.$$(".opcion", zona).forEach((b) => {
          if (b.textContent.trim() === objetivo) b.classList.add("pista");
        });
        setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
      };
      setTimeout(() => {
        if (S && !S.terminado) decir();
      }, 500);
    };
    S.pintar();
  };

  /* ---- 13. Seguir instrucciones habladas ---- */
  TIPOS.follow = function (container, api2, params) {
    const letras = params.letras || ["M", "P", "S", "L", "T"];
    const objetos = params.pool || DATA.objetos;
    const modos = ["letra", "inicial", "imagen"];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      const modo = rand(modos);

      if (modo === "letra") {
        const objetivo = rand(letras);
        S.extras.objetivo = objetivo;
        S.extras.modo = "letra";
        const consigna = el("p", "consigna", "Haz lo que te digo");
        const altavoz = el("button", "btn-altavoz grande", "🔊");
        const decir = () => api2.hablar("Toca la letra " + objetivo);
        altavoz.onclick = decir;
        const fila = el("div", "fila-consigna");
        fila.appendChild(consigna);
        fila.appendChild(altavoz);
        zona.appendChild(fila);
        const vals = shuffleFrom(objetivo, letras, Math.max(4, letras.length));
        opciones(
          zona,
          vals,
          (v) => etiquetaLetra(v),
          (v, b) => {
            if (v === objetivo) api2.bien(b, "letra-" + objetivo, "¡Muy bien! Tocaste la " + objetivo + ".");
            else api2.mal(b, "letra-" + objetivo, "Yo te pedí la " + objetivo + ".");
          }
        );
        setTimeout(() => {
          if (S && !S.terminado) decir();
        }, 500);
      } else if (modo === "inicial") {
        const candidatos = objetos.filter((o) => letras.indexOf(o.w.charAt(0)) !== -1);
        const obj = rand(candidatos.length ? candidatos : objetos);
        S.extras.obj = obj;
        S.extras.modo = "inicial";
        const consigna = el("p", "consigna", "Haz lo que te digo");
        const altavoz = el("button", "btn-altavoz grande", "🔊");
        const decir = () => api2.hablar("Toca la imagen que empieza con " + obj.w.charAt(0));
        altavoz.onclick = decir;
        const fila = el("div", "fila-consigna");
        fila.appendChild(consigna);
        fila.appendChild(altavoz);
        zona.appendChild(fila);
        const buenos = objetos.filter((o) => o.w.charAt(0) === obj.w.charAt(0));
        const vals = shuffleFrom(obj, objetos, 4);
        opciones(
          zona,
          vals,
          (o) => '<span class="emoji-opcion">' + o.emoji + "</span>",
          (o, b) => {
            if (o.w === obj.w) api2.bien(b, "inicial-" + obj.w.charAt(0), "¡Exacto! " + obj.w + ".");
            else api2.mal(b, "inicial-" + obj.w.charAt(0), "Yo dije la que empieza con " + obj.w.charAt(0) + ".");
          },
          (o) => o.w
        );
        api2.pistaVisual = () => {
          C.$$(".opcion", zona).forEach((b) => {
            if (b.textContent.indexOf(obj.emoji) !== -1) b.classList.add("pista");
          });
          setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
        };
        setTimeout(() => {
          if (S && !S.terminado) decir();
        }, 500);
      } else {
        const obj = rand(objetos);
        S.extras.obj = obj;
        S.extras.modo = "imagen";
        const consigna = el("p", "consigna", "Haz lo que te digo");
        const altavoz = el("button", "btn-altavoz grande", "🔊");
        const decir = () => api2.hablar("Toca " + obj.s || obj.w);
        altavoz.onclick = decir;
        const fila = el("div", "fila-consigna");
        fila.appendChild(consigna);
        fila.appendChild(altavoz);
        zona.appendChild(fila);
        const vals = shuffleFrom(obj, objetos, 4);
        opciones(
          zona,
          vals,
          (o) => '<span class="emoji-opcion">' + o.emoji + "</span>",
          (o, b) => {
            if (o.w === obj.w) api2.bien(b, "imagen-" + obj.w, "¡Muy bien!");
            else api2.mal(b, "imagen-" + obj.w, "Yo dije " + obj.w + ".");
          },
          (o) => o.w
        );
        setTimeout(() => {
          if (S && !S.terminado) decir();
        }, 500);
      }
    };
    S.pintar();
  };

  /* ---- 14. Trazo de letras con el ratón ---- */
  TIPOS.trace = function (container, api2, params) {
    const letras = params.letras || ["A", "E", "I"];
    S.n = letras.length;
    S.ronda = 0;
    let puntos = [];

    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      const letra = letras[S.ronda];
      const info = DATA.vocales.find((v) => v.l === letra) || DATA.consonantes.find((v) => v.l === letra);
      puntos = [];

      const consigna = el("p", "consigna", "Trazo " + (S.ronda + 1) + " de " + letras.length + ": letra " + letra);
      const altavoz = el("button", "btn-altavoz", "🔊");
      altavoz.onclick = () => api2.hablar("Arrastra el ratón sobre la letra " + letra + ", empezando por el punto verde.");
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const lienzo = el("canvas", "lienzo-trazo");
      lienzo.width = 640;
      lienzo.height = 420;
      zona.appendChild(lienzo);

      const barra = el("div", "barra-trazo");
      const relleno = el("i");
      barra.appendChild(relleno);
      zona.appendChild(barra);
      const aviso = el("p", "ayuda-texto", "Empieza por el punto verde y sigue la flecha.");
      zona.appendChild(aviso);

      const botones = el("div", "fila-botones");
      const borrar = el("button", "btn", "🧽 Borrar");
      borrar.onclick = () => {
        puntos = [];
        dibujar();
        relleno.style.width = "0%";
        C.Sfx.clic();
      };
      const saltar = el("button", "btn", "➡️ Otra letra");
      saltar.onclick = () => {
        C.Sfx.clic();
        avanzar();
      };
      botones.appendChild(borrar);
      botones.appendChild(saltar);
      zona.appendChild(botones);

      const ctx = lienzo.getContext("2d");
      let guiaPixel = null;

      /* ¿Toca dibujar el renglón (líneas guía de cuaderno)?
         Solo tiene sentido con letra cursiva o caligrafía. */
      function modoRenglon() {
        const m = C.Fuente ? C.Fuente.actual() : "imprenta";
        return m === "cursiva" || m === "script";
      }

      /* Renglón de cuaderno: línea superior, línea media (punteada)
         y línea base, más una franja suave. Así el niño ve dónde
         empieza, dónde sube y dónde apoya cada letra. */
      function dibujarRenglon(metricas) {
        const w = lienzo.width;
        const { base, xheight, ascendente } = metricas;
        const margen = 70;

        /* franja del renglón */
        ctx.save();
        ctx.fillStyle = "#f2faff";
        ctx.fillRect(0, ascendente, w, base - ascendente);
        /* zona de las letras bajas (x-height) un poco más clara */
        ctx.fillStyle = "#e8f6ff";
        ctx.fillRect(0, xheight, w, base - xheight);
        ctx.restore();

        const linea = (y, color, ancho, guiones) => {
          ctx.save();
          ctx.beginPath();
          ctx.setLineDash(guiones || []);
          ctx.lineWidth = ancho;
          ctx.strokeStyle = color;
          ctx.moveTo(margen * 0.35, y);
          ctx.lineTo(w - margen * 0.35, y);
          ctx.stroke();
          ctx.restore();
        };

        /* superior (techo), media (punteada) y base (fuerte) */
        linea(ascendente, "#9fd0ee", 3);
        linea(xheight, "#f4a259", 3, [12, 10]);
        linea(base, "#2f80ed", 4);

        /* margen izquierdo punteado, como en los cuadernos */
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([8, 8]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ef476f";
        ctx.moveTo(margen * 0.35, ascendente - 6);
        ctx.lineTo(margen * 0.35, base + 6);
        ctx.stroke();
        ctx.restore();
      }

      function dibujarGuia() {
        ctx.clearRect(0, 0, lienzo.width, lienzo.height);
        /* fondo suave */
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, lienzo.width, lienzo.height);

        const off = document.createElement("canvas");
        off.width = lienzo.width;
        off.height = lienzo.height;
        const octx = off.getContext("2d");
        /* La letra guía usa la MISMA forma de letra que el niño eligió
           (imprenta, cursiva o caligrafía) para que practique esa. */
        const familia = C.Fuente ? C.Fuente.familia() : '"Trebuchet MS", "Segoe UI", Verdana, sans-serif';
        const tamano = 240;
        octx.font = 'bold ' + tamano + 'px ' + familia;
        octx.textAlign = "center";
        octx.textBaseline = "middle";
        octx.fillStyle = "#000";

        /* Centro vertical donde se dibuja la letra (mismo siempre) */
        const centro = lienzo.height / 2 + 10;

        /* --- Renglón: se dibuja ANTES de la letra para que quede detrás --- */
        if (modoRenglon()) {
          /* Métricas reales de la fuente para alinear las líneas guía
             con la letra: base = donde apoya, xheight = altura de las
             letras bajas (minúsculas), techo = cima de las altas. */
          const m = octx.measureText(letra);
          const asc =
            m.fontBoundingBoxAscent || m.actualBoundingBoxAscent || tamano * 0.78;
          const desc =
            m.fontBoundingBoxDescent || m.actualBoundingBoxDescent || tamano * 0.22;
          const alturaTotal = asc + desc;
          /* centro vertical de la caja de la fuente, con un pequeño
             ajuste para que el cuerpo de la letra apoye en la base */
          const top = centro - alturaTotal / 2 + asc * 0.16;
          const base = top + asc;
          const xheight = base - asc * 0.5;
          dibujarRenglon({ base: base, xheight: xheight, ascendente: top });
        }

        octx.fillText(letra, lienzo.width / 2, centro);

        /* sombra de la letra */
        ctx.save();
        ctx.globalAlpha = 0.16;
        ctx.font = octx.font;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#2f80ed";
        ctx.fillText(letra, lienzo.width / 2, centro);
        ctx.restore();

        /* contorno punteado */
        ctx.save();
        ctx.font = octx.font;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.setLineDash([14, 12]);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#2f80ed";
        ctx.strokeText(letra, lienzo.width / 2, centro);
        ctx.restore();

        /* punto de inicio: pixel superior de la letra */
        const datos = octx.getImageData(0, 0, off.width, off.height).data;
        let startX = -1;
        let startY = -1;
        const paso = 4;
        for (let y = 0; y < off.height && startY < 0; y += paso) {
          for (let x = 0; x < off.width; x += paso) {
            if (datos[(y * off.width + x) * 4 + 3] > 128) {
              startX = x;
              startY = y;
              break;
            }
          }
        }
        guiaPixel = { datos: datos, w: off.width, h: off.height };
        if (startX > 0) {
          ctx.beginPath();
          ctx.arc(startX, startY, 16, 0, Math.PI * 2);
          ctx.fillStyle = "#06d6a0";
          ctx.fill();
          ctx.lineWidth = 4;
          ctx.strokeStyle = "#047a4f";
          ctx.stroke();
          ctx.fillStyle = "#047a4f";
          ctx.font = "bold 22px sans-serif";
          ctx.textAlign = "left";
          ctx.fillText("¡Empieza aquí!", startX + 24, startY + 8);
        }
        relleno.style.width = "0%";
      }

      function dibujar() {
        dibujarGuia();
        ctx.save();
        ctx.strokeStyle = "#ef476f";
        ctx.lineWidth = 18;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 1; i < puntos.length; i++) {
          ctx.beginPath();
          ctx.moveTo(puntos[i - 1].x, puntos[i - 1].y);
          ctx.lineTo(puntos[i].x, puntos[i].y);
          ctx.stroke();
        }
        if (puntos.length === 1) {
          ctx.beginPath();
          ctx.arc(puntos[0].x, puntos[0].y, 9, 0, Math.PI * 2);
          ctx.fillStyle = "#ef476f";
          ctx.fill();
        }
        ctx.restore();
      }

      function cobertura() {
        if (!guiaPixel || puntos.length < 3) return 0;
        const datos = guiaPixel.datos;
        let total = 0;
        let cubiertos = 0;
        const paso = 6;
        const radio2 = 18 * 18;
        for (let y = 0; y < guiaPixel.h; y += paso) {
          for (let x = 0; x < guiaPixel.w; x += paso) {
            if (datos[(y * guiaPixel.w + x) * 4 + 3] > 128) {
              total++;
              for (let i = 0; i < puntos.length; i++) {
                const dx = puntos[i].x - x;
                const dy = puntos[i].y - y;
                if (dx * dx + dy * dy <= radio2) {
                  cubiertos++;
                  break;
                }
              }
            }
          }
        }
        return total ? cubiertos / total : 0;
      }

      let dibujando = false;
      function pos(e) {
        const r = lienzo.getBoundingClientRect();
        return {
          x: ((e.clientX - r.left) * lienzo.width) / r.width,
          y: ((e.clientY - r.top) * lienzo.height) / r.height,
        };
      }
      lienzo.addEventListener("pointerdown", (e) => {
        dibujando = true;
        lienzo.setPointerCapture(e.pointerId);
        puntos.push(pos(e));
        dibujar();
      });
      lienzo.addEventListener("pointermove", (e) => {
        if (!dibujando) return;
        const p = pos(e);
        const ult = puntos[puntos.length - 1];
        if (!ult || Math.abs(p.x - ult.x) + Math.abs(p.y - ult.y) > 2) {
          puntos.push(p);
          dibujar();
        }
      });
      const fin = () => {
        if (!dibujando) return;
        dibujando = false;
        const c = cobertura();
        relleno.style.width = Math.round(c * 100) + "%";
        if (c >= 0.55) {
          C.Sfx.bien();
          C.celebrar(zona);
          C.Guia.habla("¡Muy bien! Trazaste la letra " + letra + ".");
          C.Store.registrar(S.desc.nivel || 1, "trazo-" + letra, true);
          setTimeout(() => {
            if (S && !S.terminado) avanzar();
          }, 1400);
        } else if (puntos.length > 5) {
          C.Guia.habla("Sigue la línea punteada, ve poco a poco.");
        }
      };
      lienzo.addEventListener("pointerup", fin);
      lienzo.addEventListener("pointerleave", fin);

      api2.pistaVisual = () => {
        aviso.classList.add("pista");
        setTimeout(() => aviso.classList.remove("pista"), 3000);
      };

      /* Permite que el botón 🅰️ del encabezado redibuje la letra guía
         con la nueva forma de letra, sin perder lo que el niño ya trazó. */
      window.repintarTrazo = () => {
        if (puntos.length) dibujar();
        else dibujarGuia();
      };

      dibujar();
      setTimeout(() => {
        if (S && !S.terminado)
          api2.hablar("Arrastra el ratón sobre la letra " + letra + ", empezando por el punto verde.");
      }, 300);
    };
    S.pintar();
  };

  /* ---- 15. Escribir la palabra (teclado) ---- */
  TIPOS["type-word"] = function (container, api2, params) {
    const palabras = (params.pool || DATA.palabras).filter((p) => p.w.length <= 6);
    const usados = [];
    S.n = Math.min(params.n || 4, palabras.length);
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = palabras.filter((p) => usados.indexOf(p.w) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = palabras;
      }
      const palabra = rand(libres);
      usados.push(palabra.w);
      S.extras.palabra = palabra;

      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML = '<div class="explorar-emoji">' + palabra.emoji + "</div>";
      zona.appendChild(card);
      const consigna = el("p", "consigna", "Escribe: " + palabra.w);
      const altavoz = el("button", "btn-altavoz", "🔊");
      altavoz.onclick = () => api2.hablar(palabra.w);
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const panel = el("div", "palabra-incompleta");
      const cajas = [];
      palabra.w.split("").forEach((l) => {
        const c = el("div", "caja-letra vacia");
        panel.appendChild(c);
        cajas.push(c);
      });
      zona.appendChild(panel);

      /* Abecedario español completo (incluye Ñ): sin Q ni Ñ el niño
         quedaría atrapado en palabras como QUESO o NIÑO. */
      const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
      const teclado = el("div", "teclado-letras");
      let idx = 0;

      function pintarCajas() {
        cajas.forEach((c, i) => {
          c.textContent = i < idx ? palabra.w[i] : "";
          c.classList.toggle("vacia", i >= idx);
        });
      }

      function letra(l) {
        if (idx >= palabra.w.length) return;
        const esperada = palabra.w[idx];
        const normalizada = quitarTilde(l).toUpperCase();
        if (normalizada === quitarTilde(esperada).toUpperCase()) {
          cajas[idx].textContent = esperada;
          cajas[idx].classList.remove("vacia");
          cajas[idx].classList.add("bien");
          idx++;
          C.Sfx.clic();
          /* Acierto por letra: registra la MISMA clave que usa el
             error ("escribir-X") para que una letra floja sí se pueda
             superar con la práctica (antes solo se registraba la
             palabra completa y la clave floja quedaba marcada para
             siempre). */
          C.Store.registrar(S.desc.nivel || 1, "escribir-" + esperada, true);
          if (idx >= palabra.w.length) {
            api2.bien(null, "escribir-" + palabra.w, "¡Escribiste " + palabra.w + "!");
            setTimeout(() => api2.hablar(palabra.w), 500);
          } else {
            S.activo = true;
            C.Guia.habla("¡Bien! Sigue con la siguiente letra.");
          }
        } else {
          C.Sfx.mal();
          S.errores++;
          C.Store.registrar(S.desc.nivel || 1, "escribir-" + esperada, false);
          C.Guia.habla("Casi. Ahora va la letra " + esperada + ".");
          cajas[idx].classList.add("mal");
          setTimeout(() => cajas[idx].classList.remove("mal"), 800);
          S.activo = true;
        }
      }

      abecedario.forEach((l) => {
        const b = el("button", "tecla", l);
        b.onclick = () => letra(l);
        teclado.appendChild(b);
      });
      zona.appendChild(teclado);

      const handler = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          C.Voz.repetir();
          return;
        }
        if (e.key.length === 1 && /[a-zA-ZáéíóúñÁÉÍÓÚÑ]/.test(e.key)) letra(e.key);
      };
      document.addEventListener("keydown", handler);
      S.limpiarTeclado = () => document.removeEventListener("keydown", handler);

      api2.pistaVisual = () => {
        if (idx < cajas.length) {
          cajas[idx].classList.add("pista");
          setTimeout(() => cajas[idx] && cajas[idx].classList.remove("pista"), 2500);
        }
      };
      pintarCajas();
      setTimeout(() => {
        if (S && !S.terminado) api2.hablar("Escribe la palabra " + palabra.w);
      }, 400);
    };
    function quitarTilde(s) {
      /* Quita tildes (también en MAYÚSCULAS, como MAMÁ) y equipara Ñ
         con N: así todas las teclas del teclado sirven y el niño nunca
         queda atascado en palabras como MAMÁ, PAPÁ, NIÑO o QUESO. */
      try {
        return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      } catch (e) {
        return s;
      }
    }
    S.pintar();
  };

  /* ---- 16. Escuchar oración y responder ---- */
  TIPOS["sentence-listen"] = function (container, api2, params) {
    const oraciones = params.pool || DATA.oraciones;
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = oraciones.filter((o) => usados.indexOf(o.t) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = oraciones;
      }
      const o = rand(libres);
      usados.push(o.t);
      S.extras.o = o;

      const card = el("div", "tarjeta-explorar mini");
      card.innerHTML = '<div class="explorar-emoji">' + o.emoji + "</div>";
      zona.appendChild(card);
      const consigna = el("p", "consigna", "Escucha y responde");
      const altavoz = el("button", "btn-altavoz grande", "🔊");
      altavoz.onclick = () => api2.hablar(o.t);
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const p = el("p", "pregunta", o.q);
      zona.appendChild(p);
      opciones(
        zona,
        o.opts,
        (v) => '<span class="texto-opcion">' + v + "</span>",
        (v, b) => {
          if (v === o.opts[o.a]) api2.bien(b, "comp-" + o.t, "¡Muy bien! " + o.t);
          else api2.mal(b, "comp-" + o.t, "Escucha otra vez: " + o.t);
        }
      );
      api2.pistaVisual = () => {
        C.$$(".opcion", zona).forEach((b) => {
          if (b.textContent.trim() === o.opts[o.a]) b.classList.add("pista");
        });
        setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
      };
      setTimeout(() => {
        if (S && !S.terminado) {
          api2.hablar("Escucha la oración.");
          setTimeout(() => {
            if (S && !S.terminado) api2.hablar(o.t);
          }, 1500);
        }
      }, 300);
    };
    S.pintar();
  };

  /* ---- 17. Leer oración palabra por palabra ---- */
  TIPOS["sentence-read"] = function (container, api2, params) {
    const oraciones = params.pool || DATA.oraciones;
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let libres = oraciones.filter((o) => usados.indexOf(o.t) === -1);
      if (!libres.length) {
        usados.length = 0;
        libres = oraciones;
      }
      const o = rand(libres);
      usados.push(o.t);
      S.extras.o = o;

      const consigna = el("p", "consigna", "Toca cada palabra para oírla");
      const altavoz = el("button", "btn-altavoz", "🔊 Toda");
      altavoz.onclick = () => api2.hablar(o.t);
      const fila = el("div", "fila-consigna");
      fila.appendChild(consigna);
      fila.appendChild(altavoz);
      zona.appendChild(fila);

      const linea = el("div", "oracion");
      o.t.split(" ").forEach((pal) => {
        const w = el("button", "palabra", pal);
        w.onclick = () => {
          C.Sfx.clic();
          C.Voz.decir(pal);
          w.classList.add("activa");
          setTimeout(() => w.classList.remove("activa"), 700);
        };
        linea.appendChild(w);
      });
      zona.appendChild(linea);

      const ilus = el("div", "explorar-emoji", o.emoji);
      zona.appendChild(ilus);

      const btnOk = el("button", "btn grande primario", "✅ Ya la leí");
      btnOk.onclick = () => {
        C.Sfx.clic();
        const p = el("p", "pregunta", o.q);
        zona.appendChild(p);
        opciones(
          zona,
          o.opts,
          (v) => '<span class="texto-opcion">' + v + "</span>",
          (v, b) => {
            if (v === o.opts[o.a]) api2.bien(b, "comp-" + o.t, "¡Muy bien!");
            else api2.mal(b, "comp-" + o.t, "Escucha la oración otra vez.");
          }
        );
        btnOk.remove();
        C.Guia.habla(o.q);
      };
      const fila2 = el("div", "fila-botones");
      fila2.appendChild(btnOk);
      zona.appendChild(fila2);

      setTimeout(() => {
        if (S && !S.terminado) api2.hablar("Toca cada palabra para escucharla. " + o.t);
      }, 300);
    };
    S.pintar();
  };

  /* ---- 18. Cuento ---- */
  TIPOS.story = function (container, api2, params) {
    const cuentos = DATA.cuentos;
    const cuento = params.cuento || rand(cuentos);
    let pagina = 0;
    S.n = 1;
    S.ronda = 0;

    const zona = pintarZona(container);
    const titulo = el("h2", "titulo-cuento", cuento.emoji + " " + cuento.titulo);
    zona.appendChild(titulo);

    const paginaDiv = el("div", "pagina-cuento");
    zona.appendChild(paginaDiv);

    const progreso = el("p", "progreso-cuento", "");
    zona.appendChild(progreso);

    const botones = el("div", "fila-botones");
    const bAtras = el("button", "btn grande", "⬅️ Atrás");
    const bAudio = el("button", "btn grande", "🔊 Escuchar");
    const bAdelante = el("button", "btn grande primario", "Adelante ➡️");
    botones.appendChild(bAtras);
    botones.appendChild(bAudio);
    botones.appendChild(bAdelante);
    zona.appendChild(botones);

    function pintarPagina() {
      const p = cuento.paginas[pagina];
      paginaDiv.innerHTML = '<div class="emoji-cuento">' + p.e + "</div><p class='texto-cuento'>" + p.t + "</p>";
      progreso.textContent = "Página " + (pagina + 1) + " de " + cuento.paginas.length;
      bAtras.disabled = pagina === 0;
      bAdelante.textContent = pagina === cuento.paginas.length - 1 ? "✅ Terminé de leer" : "Adelante ➡️";
      setTimeout(() => api2.hablar(p.t), 250);
    }

    bAtras.onclick = () => {
      if (pagina > 0) {
        pagina--;
        C.Sfx.clic();
        pintarPagina();
      }
    };
    bAudio.onclick = () => {
      C.Sfx.clic();
      api2.hablar(cuento.paginas[pagina].t);
    };
    bAdelante.onclick = () => {
      C.Sfx.clic();
      if (pagina < cuento.paginas.length - 1) {
        pagina++;
        pintarPagina();
      } else {
        /* preguntas de comprensión */
        paginaDiv.innerHTML = "";
        progreso.textContent = "";
        botones.remove();
        titulo.textContent = "🤔 " + cuento.titulo;
        hacerPreguntas(0);
      }
    };

    function hacerPreguntas(i) {
      if (i >= cuento.preguntas.length) {
        api2.bien(null, "cuento-" + cuento.id, "¡Terminaste el cuento!");
        return;
      }
      const q = cuento.preguntas[i];
      const p = el("p", "pregunta", q.q);
      zona.appendChild(p);
      const caja = opciones(
        zona,
        q.opts,
        (v) => '<span class="texto-opcion">' + v + "</span>",
        (v, b, idx) => {
          if (idx === q.a) {
            /* Retroalimentación inmediata SIN avanzar: el cuento tiene
               varias preguntas y solo debe terminar cuando se contesten
               todas (api2.bien al final, en el primer `if`).        */
            C.Sfx.bien();
            C.celebrar(zona);
            C.Guia.habla("¡Muy bien!");
            C.Store.registrar(S.desc.nivel || 1, "cuento-" + cuento.id, true);
            p.remove();
            caja.remove();
            setTimeout(() => hacerPreguntas(i + 1), 900);
          } else {
            api2.mal(b, "cuento-" + cuento.id, "La respuesta era: " + q.opts[q.a]);
          }
        }
      );
      setTimeout(() => {
        if (S && !S.terminado) api2.hablar(q.q);
      }, 400);
    }

    pintarPagina();
    api2.pistaVisual = () => {
      paginaDiv.classList.add("pista");
      setTimeout(() => paginaDiv.classList.remove("pista"), 2500);
    };
  };

  /* ---- 19. Evaluación del nivel (mezcla de retos) ---- */
  TIPOS.quiz = function (container, api2, params) {
    const pasos = params.pasos || [];
    S.n = pasos.length;
    S.ronda = 0;

    S.pintar = function () {
      limpiarTecladoPrevio();
      if (S.ronda >= pasos.length) {
        api2.terminar();
        return;
      }
      const paso = pasos[S.ronda];
      const cont = el("div", "paso-quiz");
      cont.innerHTML = '<p class="consigna">Reto ' + (S.ronda + 1) + " de " + pasos.length + "</p>";
      const interno = el("div", "interno");
      cont.appendChild(interno);
      container.innerHTML = "";
      container.appendChild(cont);

      /* api intermedio: reutiliza la retroalimentación global,
         pero la sub-actividad siempre tiene 1 pregunta            */
      const subApi = {
        get nivel() {
          return api2.nivel;
        },
        get errores() {
          return S.errores;
        },
        get ronda() {
          return 0;
        },
        get n() {
          return 1;
        },
        instr: (t) => api2.hablar(t),
        hablar: (t) => api2.hablar(t),
        zona: () => interno,
        bien: (b, clave, texto) => responder(b, true, clave, texto),
        mal: (b, clave, texto) => responder(b, false, clave, texto),
        avanzar: () => {}, // lo maneja responder() -> avanzar()
        terminar: () => {
          S.ronda++;
          if (S.ronda >= pasos.length) terminar();
          else S.pintar();
        },
        pistaVisual: (fn) => {
          api2.pistaVisual = fn;
        },
        registrarResultado: (ok, clave) => api2.registrarResultado(ok, clave),
      };

      const fn = TIPOS[paso.tipo];
      if (fn) fn(interno, subApi, paso.params || {});
    };

    S.pintar();
  };

  /* =========================================================
     MATEMÁTICAS
     Actividades de número, cantidad, forma y patrón. Todas
     reutilizan el mismo marco común (instrucción hablada y
     escrita, pistas, reintento sin castigo y registro de la
     respuesta en S.extras para pruebas y accesibilidad).
     ========================================================= */

  function randInt(a, b) {
    return a + Math.floor(Math.random() * (b - a + 1));
  }

  /* Consigna con botón de audio (patrón común de las actividades) */
  function consignaAudio(zona, api2, texto, decir) {
    const consigna = el("p", "consigna", texto);
    const altavoz = el("button", "btn-altavoz", "🔊");
    altavoz.onclick = () => {
      C.Sfx.clic();
      decir();
    };
    const fila = el("div", "fila-consigna");
    fila.appendChild(consigna);
    fila.appendChild(altavoz);
    zona.appendChild(fila);
    return consigna;
  }

  /* Tablero de números grandes alrededor de la respuesta */
  function numerosOpciones(zona, respuesta, min, max, alTocar) {
    const set = [respuesta];
    let guard = 0;
    while (set.length < 4 && guard++ < 80) {
      const v = respuesta + randInt(-2, 2);
      if (v >= min && v <= max && set.indexOf(v) === -1) set.push(v);
    }
    for (let v = min; set.length < 4 && v <= max; v++) {
      if (set.indexOf(v) === -1) set.push(v);
    }
    return opciones(zona, shuffle(set), (v) => '<span class="num-grande">' + v + "</span>", alTocar);
  }

  /* Fila de objetos para contar */
  function filaObjetos(emoji, cantidad, clase) {
    const f = el("div", "fila-objetos" + (clase ? " " + clase : ""));
    for (let i = 0; i < cantidad; i++) f.appendChild(el("span", "objeto-emoji", emoji));
    return f;
  }

  /* Marco de diez con N puntos llenos (herramienta visual) */
  function marcoDeDiez(llenos) {
    const m = el("div", "marco10");
    for (let i = 0; i < 10; i++) m.appendChild(el("span", "celda10" + (i < llenos ? " llena" : "")));
    return m;
  }

  /* Recta numérica clicable de 0 a max */
  function rectaNumerica(zona, max, alTocar) {
    const r = el("div", "recta-num");
    for (let i = 0; i <= max; i++) {
      const b = el("button", "casilla-recta", String(i));
      b.setAttribute("aria-label", "Número " + i);
      b.onclick = () => {
        C.Sfx.clic();
        alTocar(i, b);
      };
      r.appendChild(b);
    }
    zona.appendChild(r);
    return r;
  }

  /* Figura geométrica en SVG (todas del mismo color: se comparan FORMAS) */
  function svgFigura(fig, size) {
    const s = size || 84;
    return '<svg class="svg-figura" viewBox="0 0 80 80" width="' + s + '" height="' + s + '" aria-hidden="true">' + fig.svg + "</svg>";
  }

  /* Destaca la opción que coincide con el texto dado */
  function pistaOpcionNumerica(zona, valor) {
    C.$$(".opcion", zona).forEach((b) => {
      if (b.textContent.trim() === String(valor)) b.classList.add("pista");
    });
    setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
  }

  /* ---- 20. Contar objetos ---- */
  TIPOS.count = function (container, api2, params) {
    const rango = params.rango || [1, 10];
    const pool = params.pool || null; // números fijados (lección o refuerzo)
    const sust = params.sustantivo || "objetos";
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let n;
      if (pool && pool.length) {
        n = Number(pool[usados.length % pool.length]);
        usados.push(n);
      } else {
        let g = 0;
        do {
          n = randInt(rango[0], rango[1]);
        } while (usados.indexOf(n) !== -1 && g++ < 20);
        usados.push(n);
      }
      S.extras.n = n;
      S.extras.respuesta = n;

      const conjunto =
        params.conjunto && DATA.emojisMate[params.conjunto]
          ? DATA.emojisMate[params.conjunto]
          : rand([DATA.emojisMate.frutas, DATA.emojisMate.animales, DATA.emojisMate.objetos]);
      const emoji = rand(conjunto);
      consignaAudio(zona, api2, "¿Cuántos " + sust + " ves?", () => api2.hablar("Cuenta con calma, uno por uno, y toca el número correcto."));
      const fila = filaObjetos(emoji, n);
      zona.appendChild(fila);
      numerosOpciones(zona, n, Math.max(0, rango[0]), rango[1], (v, b) => {
        if (v === n) api2.bien(b, "cant-" + n, "¡Muy bien! Hay " + n + " " + sust + ".");
        else api2.mal(b, "cant-" + n, "Hay " + n + " " + sust + ". Cuenta otra vez, uno por uno.");
      });
      api2.pistaVisual = () => {
        fila.classList.add("contada"); // numeración auxiliar sobre cada objeto
        pistaOpcionNumerica(zona, n);
        setTimeout(() => fila.classList.remove("contada"), 4000);
      };
    };
    S.pintar();
  };

  /* ---- 21. Marco de diez ---- */
  TIPOS.tenframe = function (container, api2, params) {
    const max = params.max || 10;
    const pool = params.pool || null;
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let n;
      if (pool && pool.length) {
        n = Number(pool[usados.length % pool.length]);
        usados.push(n);
      } else {
        let g = 0;
        do {
          n = randInt(1, max);
        } while (usados.indexOf(n) !== -1 && g++ < 20);
        usados.push(n);
      }
      S.extras.n = n;
      S.extras.respuesta = n;
      consignaAudio(zona, api2, "¿Cuántos puntos ves en el marco?", () => api2.hablar("Cuenta los puntos llenos del marco de diez y toca el número."));
      zona.appendChild(marcoDeDiez(n));
      numerosOpciones(zona, n, 0, 10, (v, b) => {
        if (v === n) api2.bien(b, "marco-" + n, "¡Exacto! El marco tiene " + n + " puntos llenos.");
        else api2.mal(b, "marco-" + n, "El marco tiene " + n + " puntos. Cuenta uno por uno.");
      });
      api2.pistaVisual = () => pistaOpcionNumerica(zona, n);
    };
    S.pintar();
  };

  /* ---- 22. Recta numérica ---- */
  TIPOS.numberline = function (container, api2, params) {
    const max = params.max || 10;
    const pool = params.pool || null;
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let n;
      if (pool && pool.length) {
        n = Number(pool[usados.length % pool.length]);
        usados.push(n);
      } else {
        let g = 0;
        do {
          n = randInt(0, max);
        } while (usados.indexOf(n) !== -1 && g++ < 20);
        usados.push(n);
      }
      S.extras.n = n;
      S.extras.respuesta = n;
      consignaAudio(zona, api2, "Toca el número " + n + " en la recta numérica.", () => api2.hablar("Recorre la recta con la mirada, empezando en el cero, y toca el número " + n + "."));
      rectaNumerica(zona, max, (v, b) => {
        if (v === n) api2.bien(b, "recta-" + n, "¡Sí! Aquí está el " + n + ".");
        else api2.mal(b, "recta-" + n, "Ese es el " + v + ". El " + n + " está más " + (v < n ? "a la derecha." : "a la izquierda."));
      });
      api2.pistaVisual = () => {
        C.$$(".casilla-recta", zona).forEach((b) => {
          if (b.textContent === String(n)) b.classList.add("pista");
        });
        setTimeout(() => C.$$(".casilla-recta", zona).forEach((b) => b.classList.remove("pista")), 2500);
      };
    };
    S.pintar();
  };

  /* ---- 23. Comparar cantidades ---- */
  TIPOS.compare = function (container, api2, params) {
    const rango = params.rango || [1, 6];
    const fijar = params.fijar || null; // [[a, b]...]
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let a, b;
      if (fijar && fijar.length) {
        const f = fijar[usados.length % fijar.length];
        a = f[0];
        b = f[1];
        usados.push(1);
      } else {
        a = randInt(rango[0], rango[1]);
        do {
          b = randInt(rango[0], rango[1]);
        } while (b === a);
        usados.push(1);
      }
      const sentido = params.sentido || (Math.random() < 0.5 ? "mas" : "menos");
      S.extras.a = a;
      S.extras.b = b;
      S.extras.sentido = sentido;
      const consigna = sentido === "mas" ? "¿Cuál grupo tiene MÁS?" : "¿Cuál grupo tiene MENOS?";
      consignaAudio(zona, api2, consigna, () => api2.hablar(consigna + " Toca el grupo correcto."));
      const grupos = el("div", "comparar-grupos");
      const datos = [
        { n: a, lado: "izquierdo" },
        { n: b, lado: "derecho" },
      ];
      datos.forEach((g) => {
        g.emoji = rand(DATA.emojisMateTodos);
        const card = el("button", "grupo-comparar");
        card.setAttribute("aria-label", "Grupo " + g.lado);
        card.appendChild(filaObjetos(g.emoji, g.n));
        card.onclick = () => {
          C.Sfx.clic();
          const esMax = g.n === Math.max(a, b);
          const gano = sentido === "mas" ? esMax : !esMax;
          if (gano) api2.bien(card, "comparar", "¡Correcto! Ese grupo es el que tiene " + (sentido === "mas" ? "más." : "menos."));
          else api2.mal(card, "comparar", "Cuenta cada grupo con calma y compara otra vez.");
        };
        grupos.appendChild(card);
      });
      zona.appendChild(grupos);
      api2.pistaVisual = () => {
        const max = Math.max(a, b);
        let visto = 0;
        C.$$(".grupo-comparar", zona).forEach((card) => {
          const n = card.querySelector(".fila-objetos").children.length;
          const gano = sentido === "mas" ? n === max : n !== max;
          if (gano && !visto++) card.classList.add("pista");
        });
        setTimeout(() => C.$$(".grupo-comparar", zona).forEach((card) => card.classList.remove("pista")), 2500);
      };
    };
    S.pintar();
  };

  /* ---- 24. Ordenar números de menor a mayor ---- */
  TIPOS.ordernums = function (container, api2, params) {
    const rango = params.rango || [1, 5];
    const cuantos = params.cuantos || 3;
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      const elegidos = [];
      let g = 0;
      while (elegidos.length < cuantos && g++ < 60) {
        const v = randInt(rango[0], rango[1]);
        if (elegidos.indexOf(v) === -1) elegidos.push(v);
      }
      const orden = elegidos.slice().sort((x, y) => x - y);
      S.extras.orden = orden;
      let esperado = orden[0];
      let aciertos = 0;
      consignaAudio(zona, api2, "Toca los números de MENOR a MAYOR.", () => api2.hablar("Toca los números de menor a mayor, empezando por el más pequeño."));
      const caja = el("div", "tablero-opciones");
      shuffle(elegidos).forEach((v) => {
        const b = el("button", "opcion");
        b.innerHTML = '<span class="num-grande">' + v + "</span>";
        b.onclick = () => {
          if (b.classList.contains("elegida") || !S.activo) return;
          C.Sfx.clic();
          if (v === esperado) {
            b.classList.add("elegida");
            b.disabled = true;
            aciertos++;
            const sig = orden[aciertos];
            if (sig === undefined) {
              api2.bien(b, "orden", "¡Muy bien! " + orden.join(", ") + ", de menor a mayor.");
            } else {
              esperado = sig;
              api2.hablar("Muy bien. Ahora toca el siguiente número, el que sigue.");
            }
          } else {
            api2.mal(b, "orden", "Ese no es el siguiente. El más pequeño viene primero.");
          }
        };
        caja.appendChild(b);
      });
      zona.appendChild(caja);
      api2.pistaVisual = () => {
        C.$$(".opcion", zona).forEach((b) => {
          if (b.textContent.trim() === String(esperado)) b.classList.add("pista");
        });
        setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
      };
    };
    S.pintar();
  };

  /* ---- 25. Número anterior / posterior ---- */
  TIPOS.beforeafter = function (container, api2, params) {
    const fijar = params.fijar || null; // [{n, modo}]
    const rango = params.rango || [2, 9];
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let n, modo;
      if (fijar && fijar.length) {
        const f = fijar[usados.length % fijar.length];
        n = f.n;
        modo = f.modo;
        usados.push(1);
      } else {
        modo = params.modo || (Math.random() < 0.5 ? "anterior" : "siguiente");
        let g = 0;
        do {
          n = randInt(rango[0], rango[1]);
        } while ((modo === "anterior" ? n - 1 < 0 : n + 1 > 10) && g++ < 30);
        usados.push(1);
      }
      const resp = modo === "anterior" ? n - 1 : n + 1;
      const clave = (modo === "anterior" ? "anterior-" : "siguiente-") + n;
      S.extras.n = n;
      S.extras.modo = modo;
      S.extras.respuesta = resp;
      const consigna = modo === "anterior" ? "¿Qué número viene ANTES del " + n + "?" : "¿Qué número viene DESPUÉS del " + n + "?";
      consignaAudio(zona, api2, consigna, () => api2.hablar(consigna));
      const central = el("div", "tarjeta-num-central");
      central.innerHTML = '<span class="num-grande destello">' + n + "</span>";
      zona.appendChild(central);
      numerosOpciones(zona, resp, 0, 10, (v, b) => {
        if (v === resp) api2.bien(b, clave, "¡Sí! El " + n + " está entre el " + (n - 1) + " y el " + (n + 1) + ".");
        else api2.mal(b, clave, "El número que buscamos es el " + resp + ". Cuenta desde el " + (modo === "anterior" ? n - 1 : n + 1) + ".");
      });
      api2.pistaVisual = () => pistaOpcionNumerica(zona, resp);
    };
    S.pintar();
  };

  /* ---- 26. Suma con objetos ---- */
  TIPOS.addvisual = function (container, api2, params) {
    const maxTotal = params.maxTotal || 10;
    const fijar = params.fijar || null; // [[a, b]...]
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let a, b;
      if (fijar && fijar.length) {
        const f = fijar[usados.length % fijar.length];
        a = f[0];
        b = f[1];
        usados.push(1);
      } else {
        a = randInt(1, Math.max(1, maxTotal - 1));
        b = randInt(1, Math.max(1, maxTotal - a));
        if (a + b > maxTotal) b = Math.max(1, maxTotal - a);
        usados.push(1);
      }
      S.extras.a = a;
      S.extras.b = b;
      S.extras.respuesta = a + b;
      const emoji = rand(DATA.emojisMateTodos);
      consignaAudio(zona, api2, "Junta los dos grupos y cuenta todos.", () => api2.hablar(a + " más " + b + ". Junta los dos grupos y cuenta el total."));
      const cuenta = el("div", "cuenta-operacion");
      cuenta.appendChild(filaObjetos(emoji, a));
      cuenta.appendChild(el("span", "signo-operacion", "+"));
      cuenta.appendChild(filaObjetos(emoji, b));
      cuenta.appendChild(el("span", "signo-operacion", "= ?"));
      zona.appendChild(cuenta);
      numerosOpciones(zona, a + b, 0, maxTotal, (v, bk) => {
        if (v === a + b) api2.bien(bk, "suma-" + a + "-" + b, "¡Exacto! " + a + " más " + b + " es " + (a + b) + ".");
        else api2.mal(bk, "suma-" + a + "-" + b, "Son " + (a + b) + ". Junta los dos grupos y cuenta todos, despacio.");
      });
      api2.pistaVisual = () => {
        zona.appendChild(marcoDeDiez(a + b));
        pistaOpcionNumerica(zona, a + b);
      };
    };
    S.pintar();
  };

  /* ---- 27. Resta con objetos ---- */
  TIPOS.subvisual = function (container, api2, params) {
    const maxTotal = params.maxTotal || 10;
    const fijar = params.fijar || null; // [[a, b]...]
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let a, b;
      if (fijar && fijar.length) {
        const f = fijar[usados.length % fijar.length];
        a = f[0];
        b = f[1];
        usados.push(1);
      } else {
        a = randInt(2, maxTotal);
        b = randInt(1, a - 1);
        usados.push(1);
      }
      S.extras.a = a;
      S.extras.b = b;
      S.extras.respuesta = a - b;
      const emoji = rand(DATA.emojisMateTodos);
      consignaAudio(zona, api2, "Se quitan los objetos tachados. ¿Cuántos quedan?", () => api2.hablar("Había " + a + " y se quitaron " + b + ". Cuenta los que quedan sin tachar."));
      const cuenta = el("div", "cuenta-operacion");
      const fila = filaObjetos(emoji, a);
      for (let i = a - b; i < a; i++) fila.children[i].classList.add("tachado");
      cuenta.appendChild(fila);
      cuenta.appendChild(el("span", "signo-operacion", "= ?"));
      zona.appendChild(cuenta);
      numerosOpciones(zona, a - b, 0, maxTotal, (v, bk) => {
        if (v === a - b) api2.bien(bk, "resta-" + a + "-" + b, "¡Sí! Quedan " + (a - b) + " " + (params.sustantivo || "objetos") + ".");
        else api2.mal(bk, "resta-" + a + "-" + b, "Quedan " + (a - b) + ". Cuenta solo los que no están tachados.");
      });
      api2.pistaVisual = () => pistaOpcionNumerica(zona, a - b);
    };
    S.pintar();
  };

  /* ---- 28. Suma con números ---- */
  TIPOS.add = function (container, api2, params) {
    const maxTotal = params.maxTotal || 10;
    const fijar = params.fijar || null; // [[a, b]...]
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let a, b;
      if (fijar && fijar.length) {
        const f = fijar[usados.length % fijar.length];
        a = f[0];
        b = f[1];
        usados.push(1);
      } else {
        a = randInt(1, Math.max(1, maxTotal - 1));
        b = randInt(1, Math.max(1, maxTotal - a));
        if (a + b > maxTotal) b = Math.max(1, maxTotal - a);
        usados.push(1);
      }
      S.extras.a = a;
      S.extras.b = b;
      S.extras.respuesta = a + b;
      consignaAudio(zona, api2, "Suma y toca el resultado.", () => api2.hablar(a + " más " + b + ". Toca el resultado."));
      const cuenta = el("div", "cuenta-operacion");
      cuenta.innerHTML = '<span class="num-grande">' + a + '</span><span class="signo-operacion">+</span><span class="num-grande">' + b + '</span><span class="signo-operacion">= ?</span>';
      zona.appendChild(cuenta);
      numerosOpciones(zona, a + b, 0, maxTotal, (v, bk) => {
        if (v === a + b) api2.bien(bk, "suma-" + a + "-" + b, "¡Sí! " + a + " más " + b + " es " + (a + b) + ".");
        else api2.mal(bk, "suma-" + a + "-" + b, "La respuesta es " + (a + b) + ". Empieza en " + a + " y cuenta " + b + " más.");
      });
      api2.pistaVisual = () => {
        const ayuda = el("div", "cuenta-operacion pista-objetos");
        ayuda.appendChild(filaObjetos("🟡", a));
        ayuda.appendChild(el("span", "signo-operacion", "+"));
        ayuda.appendChild(filaObjetos("🟡", b));
        zona.appendChild(ayuda);
        pistaOpcionNumerica(zona, a + b);
      };
    };
    S.pintar();
  };

  /* ---- 29. Resta con números ---- */
  TIPOS.sub = function (container, api2, params) {
    const maxTotal = params.maxTotal || 10;
    const fijar = params.fijar || null; // [[a, b]...]
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let a, b;
      if (fijar && fijar.length) {
        const f = fijar[usados.length % fijar.length];
        a = f[0];
        b = f[1];
        usados.push(1);
      } else {
        a = randInt(2, maxTotal);
        b = randInt(1, a - 1);
        usados.push(1);
      }
      S.extras.a = a;
      S.extras.b = b;
      S.extras.respuesta = a - b;
      consignaAudio(zona, api2, "Resta y toca el resultado.", () => api2.hablar(a + " menos " + b + ". Toca el resultado."));
      const cuenta = el("div", "cuenta-operacion");
      cuenta.innerHTML = '<span class="num-grande">' + a + '</span><span class="signo-operacion">−</span><span class="num-grande">' + b + '</span><span class="signo-operacion">= ?</span>';
      zona.appendChild(cuenta);
      numerosOpciones(zona, a - b, 0, maxTotal, (v, bk) => {
        if (v === a - b) api2.bien(bk, "resta-" + a + "-" + b, "¡Sí! " + a + " menos " + b + " es " + (a - b) + ".");
        else api2.mal(bk, "resta-" + a + "-" + b, "La respuesta es " + (a - b) + ". Cuenta hacia atrás desde " + a + ".");
      });
      api2.pistaVisual = () => {
        const ayuda = el("div", "cuenta-operacion pista-objetos");
        const fila = filaObjetos("🟡", a);
        for (let i = a - b; i < a; i++) fila.children[i].classList.add("tachado");
        ayuda.appendChild(fila);
        zona.appendChild(ayuda);
        pistaOpcionNumerica(zona, a - b);
      };
    };
    S.pintar();
  };

  /* ---- 30. Completar la cantidad (descomposición) ---- */
  TIPOS.missing = function (container, api2, params) {
    const maxTotal = params.maxTotal || 10;
    const fijar = params.fijar || null; // [[a, b]...] donde a + b = total
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let a, b;
      if (fijar && fijar.length) {
        const f = fijar[usados.length % fijar.length];
        a = f[0];
        b = f[1];
        usados.push(1);
      } else {
        const c = randInt(2, maxTotal);
        a = randInt(1, c - 1);
        b = c - a;
        usados.push(1);
      }
      const c = a + b;
      S.extras.a = a;
      S.extras.b = b;
      S.extras.respuesta = b;
      consignaAudio(zona, api2, "¿Qué número falta para llegar al " + c + "?", () => api2.hablar("Empieza en " + a + " y cuenta hasta " + c + ". ¿Cuántos faltan?"));
      const cuenta = el("div", "cuenta-operacion");
      cuenta.innerHTML = '<span class="num-grande">' + a + '</span><span class="signo-operacion">+ ? =</span><span class="num-grande">' + c + "</span>";
      zona.appendChild(cuenta);
      numerosOpciones(zona, b, 0, maxTotal, (v, bk) => {
        if (v === b) api2.bien(bk, "completa-" + a + "-" + b, "¡Sí! " + a + " más " + b + " es " + c + ".");
        else api2.mal(bk, "completa-" + a + "-" + b, "Faltan " + b + ". Cuenta desde " + a + " hasta " + c + ".");
      });
      api2.pistaVisual = () => {
        const ayuda = el("div", "cuenta-operacion pista-objetos");
        ayuda.appendChild(filaObjetos("🟡", a));
        ayuda.appendChild(el("span", "signo-operacion", "+"));
        ayuda.appendChild(filaObjetos("🟡", b, "faltantes"));
        zona.appendChild(ayuda);
        pistaOpcionNumerica(zona, b);
      };
    };
    S.pintar();
  };

  /* ---- 31. Figuras geométricas ---- */
  TIPOS.shapes = function (container, api2, params) {
    const pool = (params.pool || DATA.figuras.map((f) => f.id)).filter((id) => DATA.figuras.some((f) => f.id === id));
    const fijar = params.fijar || null; // ids de figuras
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let fig;
      if (fijar && fijar.length) {
        const id = fijar[usados.length % fijar.length];
        fig = DATA.figuras.find((f) => f.id === id) || rand(DATA.figuras);
        usados.push(1);
      } else {
        let libres = pool.filter((id) => usados.indexOf(id) === -1);
        if (!libres.length) {
          usados.length = 0;
          libres = pool;
        }
        const id = rand(libres);
        fig = DATA.figuras.find((f) => f.id === id);
        usados.push(id);
      }
      S.extras.figura = fig.id;
      consignaAudio(zona, api2, "Toca el " + fig.nombre + ".", () => api2.hablar("Toca el " + fig.nombre + "."));
      const disponibles = DATA.figuras.filter((f) => f.id !== fig.id);
      const vals = shuffleFrom(fig, disponibles, 4);
      const caja = el("div", "tablero-opciones");
      vals.forEach((f) => {
        const b = el("button", "opcion");
        b.innerHTML = svgFigura(f, 84);
        b.dataset.fig = f.id;
        b.setAttribute("aria-label", f.nombre);
        b.onclick = () => {
          C.Sfx.clic();
          if (f.id === fig.id) api2.bien(b, "figura-" + fig.id, "¡Sí! Ese es el " + fig.nombre + ".");
          else api2.mal(b, "figura-" + fig.id, "Ese es un " + f.nombre + ". Buscábamos el " + fig.nombre + ".");
        };
        caja.appendChild(b);
      });
      zona.appendChild(caja);
      api2.pistaVisual = () => {
        C.$$(".opcion", zona).forEach((b) => {
          if (b.dataset.fig === fig.id) b.classList.add("pista");
        });
        setTimeout(() => C.$$(".opcion", zona).forEach((b) => b.classList.remove("pista")), 2500);
      };
    };
    S.pintar();
  };

  /* ---- 32. Contar figuras ---- */
  TIPOS.shapecount = function (container, api2, params) {
    const fijar = params.fijar || null; // ids de figuras
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let fig;
      if (fijar && fijar.length) {
        const id = fijar[usados.length % fijar.length];
        fig = DATA.figuras.find((f) => f.id === id) || rand(DATA.figuras);
        usados.push(1);
      } else {
        fig = rand(DATA.figuras);
        usados.push(fig.id);
      }
      const cuantos = randInt(2, 5);
      const otros = randInt(1, 4);
      S.extras.figura = fig.id;
      S.extras.n = cuantos;
      S.extras.respuesta = cuantos;
      const plural = fig.nombre + "s"; // todas las figuras terminan en vocal
      consignaAudio(zona, api2, "¿Cuántos " + plural + " hay?", () => api2.hablar("Busca solo los " + plural + " y cuántalos."));
      const grupo = el("div", "grupo-figuras");
      const lista = [];
      for (let i = 0; i < cuantos; i++) lista.push(fig);
      for (let i = 0; i < otros; i++) {
        let otra = rand(DATA.figuras);
        let g = 0;
        while (otra.id === fig.id && g++ < 10) otra = rand(DATA.figuras);
        if (otra.id !== fig.id) lista.push(otra);
      }
      shuffle(lista).forEach((f) => {
        const c = el("span", "item-figura" + (f.id === fig.id ? " objetivo" : ""));
        c.innerHTML = svgFigura(f, 56);
        grupo.appendChild(c);
      });
      zona.appendChild(grupo);
      numerosOpciones(zona, cuantos, 1, 9, (v, b) => {
        if (v === cuantos) api2.bien(b, "contarfigura-" + fig.id, "¡Sí! Hay " + cuantos + " " + plural + ".");
        else api2.mal(b, "contarfigura-" + fig.id, "Hay " + cuantos + " " + plural + ". Cuenta solo esos.");
      });
      api2.pistaVisual = () => {
        C.$$(".item-figura.objetivo", zona).forEach((s) => s.classList.add("pista"));
        setTimeout(() => C.$$(".item-figura", zona).forEach((s) => s.classList.remove("pista")), 3000);
        pistaOpcionNumerica(zona, cuantos);
      };
    };
    S.pintar();
  };

  /* ---- 33. Patrones visuales ---- */
  TIPOS.pattern = function (container, api2, params) {
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      const elems = shuffle(DATA.patronesElem).slice(0, 3);
      const p = randInt(2, 3);
      const secuencia = [];
      for (let i = 0; i < 6; i++) secuencia.push(elems[i % p]);
      const siguiente = elems[6 % p];
      S.extras.siguiente = siguiente;
      consignaAudio(zona, api2, "Mira el patrón y toca lo que viene después.", () => api2.hablar("Mira cómo se repite el grupo del principio y toca el elemento que viene."));
      const fila = el("div", "patron-fila");
      secuencia.forEach((e) => fila.appendChild(el("span", "celda-patron", e)));
      fila.appendChild(el("span", "celda-patron interrogante", "?"));
      zona.appendChild(fila);
      const otras = shuffle(DATA.patronesElem.filter((e) => e !== siguiente)).slice(0, 2);
      opciones(zona, shuffle([siguiente].concat(otras)), (e) => '<span class="emoji-patron">' + e + "</span>", (e, b) => {
        if (e === siguiente) api2.bien(b, "patron", "¡Sí! El patrón repite este grupo: " + secuencia.slice(0, p).join(" ") + ".");
        else api2.mal(b, "patron", "Mira cómo se repite el grupo de " + p + " elementos y prueba otra vez.");
      });
      api2.pistaVisual = () => {
        C.$$(".celda-patron", zona).slice(0, p).forEach((c) => c.classList.add("pista-bloque"));
        pistaOpcionNumerica(zona, siguiente);
        setTimeout(() => C.$$(".celda-patron", zona).forEach((c) => c.classList.remove("pista-bloque")), 3000);
      };
    };
    S.pintar();
  };

  /* ---- 34. Problemas de la vida diaria ---- */
  TIPOS.problem = function (container, api2, params) {
    const maxTotal = params.maxTotal || 10;
    const fijar = params.fijar || null; // [{op, a, b}]
    const usados = [];
    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      let op, a, b;
      if (fijar && fijar.length) {
        const f = fijar[usados.length % fijar.length];
        op = f.op;
        a = f.a;
        b = f.b;
        usados.push(1);
      } else {
        op = params.op || (Math.random() < 0.5 ? "suma" : "resta");
        if (op === "suma") {
          a = randInt(1, Math.max(1, maxTotal - 1));
          b = randInt(1, Math.max(1, maxTotal - a));
          if (a + b > maxTotal) b = Math.max(1, maxTotal - a);
        } else {
          a = randInt(2, maxTotal);
          b = randInt(1, a - 1);
        }
        usados.push(1);
      }
      const p = rand(DATA.problemasMate);
      const resp = op === "suma" ? a + b : a - b;
      S.extras.op = op;
      S.extras.a = a;
      S.extras.b = b;
      S.extras.respuesta = resp;
      const texto =
        op === "suma"
          ? p.quien + " tiene " + a + " " + p.nombreObj + " y encuentra " + b + " más. ¿Cuántos tiene ahora?"
          : p.quien + " tiene " + a + " " + p.nombreObj + " y regala " + b + ". ¿Cuántos le quedan?";
      consignaAudio(zona, api2, texto, () => api2.hablar(texto));
      const apoyo = el("div", "apoyo-problema");
      const f1 = filaObjetos(p.objeto, a);
      if (op === "resta") {
        for (let i = a - b; i < a; i++) f1.children[i].classList.add("tachado");
        apoyo.appendChild(f1);
      } else {
        apoyo.appendChild(f1);
        apoyo.appendChild(el("span", "signo-operacion", "+"));
        apoyo.appendChild(filaObjetos(p.objeto, b));
      }
      zona.appendChild(apoyo);
      numerosOpciones(zona, resp, 0, maxTotal, (v, bk) => {
        if (v === resp) api2.bien(bk, "problema-" + op, "¡Sí! " + p.quien + " tiene " + resp + " " + p.nombreObj + ".");
        else api2.mal(bk, "problema-" + op, "La respuesta es " + resp + ". " + (op === "suma" ? "Junta los dos grupos y cuenta." : "Cuenta los que quedan sin tachar."));
      });
      api2.pistaVisual = () => pistaOpcionNumerica(zona, resp);
    };
    S.pintar();
  };

  /* ---- 26. Sopa de letras ----
     El niño toca la primera letra de una palabra y luego la última.
     Si la línea recta entre las dos forma una de las palabras de la
     lista, la palabra queda marcada. Cuando encuentra todas, termina.
     Tiene tres dificultades: cuanto más difícil, más palabras, más
     largas y más escondidas (al revés, en diagonal y rodeadas de
     letras parecidas). */
  TIPOS.sopa = function (container, api2, params) {
    const ACENTOS = {
      Á: "A", À: "A", Ä: "A", Â: "A",
      É: "E", È: "E", Ë: "E", Ê: "E",
      Í: "I", Ì: "I", Ï: "I", Î: "I",
      Ó: "O", Ò: "O", Ö: "O", Ô: "O",
      Ú: "U", Ù: "U", Ü: "U", Û: "U",
    };
    const normal = (w) =>
      String(w || "")
        .toUpperCase()
        .split("")
        .map((ch) => ACENTOS[ch] || ch)
        .join("");

    /* Tres niveles: cuanto más difícil, las palabras son más largas y
       están más escondidas (al revés, en diagonal y rodeadas de letras
       parecidas para que cueste encontrarlas). */
    const NIVELES = {
      facil: {
        etiqueta: "Fácil",
        icono: "🌱",
        min: 3,
        max: 4,
        cuantas: 3,
        extra: 2,
        diagonal: false,
        reves: 0,
        relleno: "AEIOUMSLT",
      },
      medio: {
        etiqueta: "Medio",
        icono: "⭐",
        min: 4,
        max: 5,
        cuantas: 3,
        extra: 2,
        diagonal: false,
        reves: 0.25,
        relleno: "AEIOUMSLTRDNCBPG",
      },
      dificil: {
        etiqueta: "Difícil",
        icono: "🔥",
        min: 5,
        max: 8,
        cuantas: 4,
        extra: 1,
        diagonal: true,
        reves: 0.4,
        relleno: "AEIOUMSLTRDNCBPG",
      },
    };
    const ORDEN = ["facil", "medio", "dificil"];

    /* Todas las palabras disponibles, sin acentos y sin repetir */
    const disponibles = [];
    (params.palabras && params.palabras.length ? params.palabras : DATA.palabras).forEach((p) => {
      const w = normal(typeof p === "string" ? p : p.w || p.palabra || "");
      if (w.length >= 3 && disponibles.indexOf(w) === -1) disponibles.push(w);
    });
    if (disponibles.length < 2) disponibles.push("SOL", "PAN", "CASA");

    /* Elegimos palabras del largo que pide el nivel. Si no hay bastantes,
       completamos con las más parecidas para que el juego siga. */
    const elegirPalabras = (cfg) => {
      const enRango = shuffle(disponibles.filter((w) => w.length >= cfg.min && w.length <= cfg.max));
      if (enRango.length >= cfg.cuantas) return enRango.slice(0, cfg.cuantas);
      const fuera = disponibles
        .filter((w) => enRango.indexOf(w) === -1)
        .sort((a, b) => Math.abs(a.length - cfg.max) - Math.abs(b.length - cfg.max));
      return enRango.concat(fuera).slice(0, Math.min(cfg.cuantas, disponibles.length));
    };

    const tableroVacio = (lado) => {
      const rejilla = [];
      for (let r = 0; r < lado; r++) rejilla.push(new Array(lado).fill(""));
      return rejilla;
    };

    /* Intenta encajar una palabra: recta (y diagonal en difícil),
       del derecho o al revés. */
    const colocar = (rejilla, lado, dirs, palabra, probReves) => {
      const L = palabra.length;
      for (let intento = 0; intento < 160; intento++) {
        const d = dirs[randInt(0, dirs.length - 1)];
        const dr = d[0];
        const dc = d[1];
        const alReves = Math.random() < probReves;
        const rMin = Math.max(0, -dr * (L - 1));
        const rMax = Math.min(lado - 1, lado - 1 - dr * (L - 1));
        const cMin = Math.max(0, -dc * (L - 1));
        const cMax = Math.min(lado - 1, lado - 1 - dc * (L - 1));
        if (rMax < rMin || cMax < cMin) continue;
        const r0 = randInt(rMin, rMax);
        const c0 = randInt(cMin, cMax);
        const celdas = [];
        let libre = true;
        for (let k = 0; k < L; k++) {
          const paso = alReves ? L - 1 - k : k;
          const rr = r0 + dr * paso;
          const cc = c0 + dc * paso;
          const actual = rejilla[rr][cc];
          if (actual && actual !== palabra[k]) {
            libre = false;
            break;
          }
          celdas.push([rr, cc]);
        }
        if (!libre) continue;
        celdas.forEach((celda, k) => {
          rejilla[celda[0]][celda[1]] = palabra[k];
        });
        return true;
      }
      return false;
    };

    /* Construimos el tablero dándole varias vueltas hasta que entren
       todas las palabras (primero las largas, que son las más difíciles). */
    const generar = (palabras, cfg) => {
      const largo = Math.max.apply(null, palabras.map((w) => w.length));
      const lado = Math.max(largo + cfg.extra, 5);
      const dirs = cfg.diagonal ? [[0, 1], [1, 0], [1, 1], [1, -1]] : [[0, 1], [1, 0]];
      const largasPrimero = palabras.slice().sort((a, b) => b.length - a.length);
      let rejilla = tableroVacio(lado);
      let puestas = [];
      for (let vuelta = 0; vuelta < 30; vuelta++) {
        rejilla = tableroVacio(lado);
        puestas = [];
        let todasEntran = true;
        for (let i = 0; i < largasPrimero.length; i++) {
          if (!colocar(rejilla, lado, dirs, largasPrimero[i], cfg.reves)) {
            todasEntran = false;
            break;
          }
          puestas.push(largasPrimero[i]);
        }
        if (todasEntran) return { rejilla: rejilla, lado: lado, puestas: puestas };
      }
      /* Si de verdad no cupieron, dejamos al menos dos para jugar */
      rejilla = tableroVacio(lado);
      puestas = [];
      largasPrimero.slice(0, 2).forEach((w) => {
        if (colocar(rejilla, lado, dirs, w, cfg.reves)) puestas.push(w);
      });
      return { rejilla: rejilla, lado: lado, puestas: puestas };
    };

    const rellenar = (rejilla, lado, cfg, palabras) => {
      /* En difícil el relleno usa letras parecidas a las de las palabras,
         así cuesta más encontrarlas. */
      const relleno = cfg.diagonal ? palabras.join("") + "AEIOUMNSLT" : cfg.relleno;
      for (let r = 0; r < lado; r++) {
        for (let c = 0; c < lado; c++) {
          if (!rejilla[r][c]) rejilla[r][c] = relleno.charAt(randInt(0, relleno.length - 1));
        }
      }
    };

    /* ---- estado de la partida ---- */
    const recordado = C.Store.data.sopaNivel;
    let nivel = NIVELES[params.dificultad] ? params.dificultad : NIVELES[recordado] ? recordado : "facil";
    let datos = null;
    let celdas = [];
    let chips = {};
    let inicio = null;
    let encontradas = [];

    const montar = () => {
      const cfg = NIVELES[nivel];
      datos = generar(elegirPalabras(cfg), cfg);
      rellenar(datos.rejilla, datos.lado, cfg, datos.puestas);
      celdas = [];
      chips = {};
      inicio = null;
      encontradas = [];
    };
    montar();

    S.n = 1;
    S.ronda = 0;

    /* Cada nivel avisa de dónde están escondidas las palabras */
    const consignaNivel = () =>
      nivel === "facil"
        ? "Las palabras están derechitas: de izquierda a derecha o de arriba a abajo."
        : nivel === "medio"
        ? "Cuidado: algunas palabras están escritas al revés."
        : "¡Es un reto! Las palabras están en diagonal y algunas al revés.";

    const yaEsta = (w) => encontradas.indexOf(w) !== -1;

    const limpiarMarca = () => {
      celdas.forEach((x) => x.classList.remove("marcando"));
      inicio = null;
    };

    /* Celdas entre dos puntos si van en línea recta
       (horizontal, vertical o diagonal). */
    const linea = (a, b) => {
      const dr = b.r - a.r;
      const dc = b.c - a.c;
      if (dr === 0 && dc === 0) return null;
      if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;
      const pasos = Math.max(Math.abs(dr), Math.abs(dc));
      const sr = dr === 0 ? 0 : dr / Math.abs(dr);
      const sc = dc === 0 ? 0 : dc / Math.abs(dc);
      const res = [];
      for (let k = 0; k <= pasos; k++) res.push([a.r + sr * k, a.c + sc * k]);
      return res;
    };

    function tocar(r, c) {
      if (S.terminado || !S.activo || !datos) return;
      const lado = datos.lado;
      const rejilla = datos.rejilla;
      const btn = celdas[r * lado + c];
      if (!inicio) {
        limpiarMarca();
        inicio = { r: r, c: c };
        btn.classList.add("marcando");
        api2.hablar("Empiezas en la letra " + rejilla[r][c] + ". Ahora toca la última letra de la palabra.");
        return;
      }
      if (inicio.r === r && inicio.c === c) {
        limpiarMarca();
        return;
      }
      const camino = linea(inicio, { r: r, c: c });
      if (!camino) {
        limpiarMarca();
        api2.hablar("Las palabras van en línea recta. Toca otra vez la primera letra.");
        return;
      }
      const texto = camino.map((p) => rejilla[p[0]][p[1]]).join("");
      const alReves = texto.split("").reverse().join("");
      const hallada = datos.puestas.filter((w) => !yaEsta(w) && (w === texto || w === alReves))[0];

      if (hallada) {
        encontradas.push(hallada);
        camino.forEach((p) => celdas[p[0] * lado + p[1]].classList.add("encontrada"));
        if (chips[hallada]) chips[hallada].classList.add("encontrada");
        C.Sfx.bien();
        C.celebrar($("#actividad-cuerpo"));
        C.Store.registrar(S.desc.nivel || 4, "sopa-" + hallada, true);
        limpiarMarca();

        if (datos.puestas.every(yaEsta)) {
          /* Si lo hizo casi sin fallar, la próxima sopa sube de nivel */
          const siguiente = ORDEN[ORDEN.indexOf(nivel) + 1];
          const sube = !!siguiente && S.errores <= 1;
          if (sube) {
            C.Store.data.sopaNivel = siguiente;
            C.Store.save();
          }
          api2.hablar(
            "¡Muy bien! Encontraste todas las palabras." +
              (sube ? " La próxima sopa de letras será un poco más difícil." : "")
          );
          setTimeout(() => {
            if (S && !S.terminado) api2.terminar();
          }, sube ? 2200 : 1500);
          return;
        }
        api2.hablar(rand(DATA.elogios) + " Encontraste " + hallada + ".");
        return;
      }

      S.errores++;
      C.Sfx.mal();
      C.Store.registrar(S.desc.nivel || 4, "sopa-buscar", false);
      api2.hablar(S.errores === 1 ? rand(DATA.animos) : "Esa no es la palabra. Búscala otra vez.");
      camino.forEach((p) => celdas[p[0] * lado + p[1]].classList.add("mal"));
      const marcadas = camino.map((p) => celdas[p[0] * lado + p[1]]);
      setTimeout(() => marcadas.forEach((x) => x.classList.remove("mal")), 700);
      limpiarMarca();
    }

    S.pintar = function () {
      limpiarTecladoPrevio();
      const zona = pintarZona(container);
      consignaAudio(zona, api2, "Encuentra las palabras escondidas", () =>
        api2.hablar(
          "Busca las palabras escondidas. Toca la primera letra y después la última letra de la palabra. " +
            consignaNivel()
        )
      );

      /* Selector de dificultad: fácil, medio o difícil */
      const filaNiveles = el("div", "sopa-niveles");
      ORDEN.forEach((k) => {
        const cfg = NIVELES[k];
        const b = el("button", "sopa-nivel" + (k === nivel ? " activo" : ""), cfg.icono + " " + cfg.etiqueta);
        b.type = "button";
        b.dataset.n = k;
        b.setAttribute("aria-pressed", k === nivel ? "true" : "false");
        b.onclick = () => {
          if (k === nivel) return;
          C.Sfx.clic();
          nivel = k;
          C.Store.data.sopaNivel = k;
          C.Store.save();
          montar();
          S.pintar();
        };
        filaNiveles.appendChild(b);
      });
      zona.appendChild(filaNiveles);

      const lista = el("div", "sopa-palabras");
      chips = {};
      datos.puestas.forEach((w) => {
        const ch = el("span", "sopa-chip", w);
        chips[w] = ch;
        lista.appendChild(ch);
      });
      zona.appendChild(lista);

      const rejilla = datos.rejilla;
      const lado = datos.lado;
      const tablero = el("div", "sopa-tablero");
      tablero.style.gridTemplateColumns = "repeat(" + lado + ", 1fr)";
      celdas = [];
      for (let r = 0; r < lado; r++) {
        for (let c = 0; c < lado; c++) {
          const b = el("button", "sopa-celda", rejilla[r][c]);
          b.type = "button";
          b.setAttribute("aria-label", "Letra " + rejilla[r][c] + ", fila " + (r + 1) + ", columna " + (c + 1));
          b.onclick = () => tocar(r, c);
          celdas.push(b);
          tablero.appendChild(b);
        }
      }
      zona.appendChild(tablero);
      zona.appendChild(el("p", "sopa-ayuda", "Toca la primera letra y después la última de la palabra."));

      /* Ayuda si el niño se queda atascado: señala la primera letra */
      api2.pistaVisual = () => {
        const falta = datos.puestas.filter((w) => !yaEsta(w))[0];
        if (!falta) return;
        api2.hablar("Te ayudo. Busca la palabra " + falta + ". Empieza con la letra " + falta.charAt(0) + ".");
        celdas.forEach((x) => x.classList.remove("pista"));
        celdas.forEach((x) => {
          if (x.textContent === falta.charAt(0)) x.classList.add("pista");
        });
      };
    };

    S.pintar();
  };

  return {
    ejecutar: ejecutar,
    tipos: TIPOS,
    estado: () => S,
  };
})();
