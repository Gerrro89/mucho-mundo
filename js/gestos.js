/* GESTOS — deslizar, arrastrar y carruseles (ronda 3).

   Principios:
   · Un gesto es un ATAJO de lo que ya existe: ejecuta los mismos botones y
     manejadores (click) de cada ejercicio. No cambia la lógica ni el progreso.
   · Siempre hay alternativa sin gesto: los botones originales y el teclado.
   · No se interrumpe el desplazamiento vertical: las zonas deslizables usan
     touch-action: pan-y; en las piezas arrastrables, el arrastre táctil se
     activa tras mantener pulsado ~180 ms (si el dedo se mueve antes, la página
     se desplaza con normalidad).
   · Pointer Events: táctil, ratón y lápiz. Un solo puntero a la vez.
   · Movimiento solo con transform/translate/scale/opacity; sin variables CSS
     que cambien por fotograma. */
(function () {
  "use strict";

  var A = (window.ALGEB = window.ALGEB || {});
  var G = (A.gestos = {});
  var SALE = "cubic-bezier(0.23, 1, 0.32, 1)";

  function reducido() { return typeof A.reducido === "function" ? A.reducido() : false; }
  function animable() { return typeof Element !== "undefined" && typeof Element.prototype.animate === "function"; }
  function ahora() { return typeof performance !== "undefined" ? performance.now() : Date.now(); }
  function qsa(raiz, sel) { return Array.prototype.slice.call(raiz.querySelectorAll(sel)); }
  function seguro(fn) { try { fn(); } catch (e) { /* un gesto nunca rompe el ejercicio */ } }

  /* ---------- Clasificación de un deslizamiento (función pura) ----------
     Distancia ≥ 56 px, o distancia ≥ 24 px con velocidad > 0,11 px/ms.
     Debe ser claramente horizontal (|dx| ≥ 1,5·|dy|). */
  G.clasificarSwipe = function (dx, dy, dt, o) {
    var c = { distancia: 56, rapido: 24, velocidad: 0.11, razon: 1.5 };
    if (o) for (var k in c) if (typeof o[k] === "number") c[k] = o[k];
    var ax = Math.abs(dx);
    var ay = Math.abs(dy);
    if (ax < ay * c.razon) return null;
    var v = ax / Math.max(dt, 1);
    if (ax >= c.distancia || (ax >= c.rapido && v > c.velocidad)) return dx < 0 ? "izquierda" : "derecha";
    return null;
  };

  /* Tras un gesto, el navegador dispara un clic: se anula una sola vez */
  function suprimirClic(el) {
    /* solo el clic REAL del usuario; los clics programáticos (.click() que usan los gestos) pasan */
    var sup = function (ev) {
      if (ev.isTrusted === false) return;
      ev.stopPropagation();
      ev.preventDefault();
    };
    el.addEventListener("click", sup, true);
    setTimeout(function () { el.removeEventListener("click", sup, true); }, 60);
  }

  /* ---------- Deslizar para cambiar de elemento ----------
     cfg: { siguiente(), anterior(), puede(cual) }   cual = "siguiente" | "anterior"
     Deslizar a la izquierda = siguiente; a la derecha = anterior.
     Teclado: flecha derecha = siguiente, izquierda = anterior. */
  G.swipe = function (el, cfg) {
    if (el.getAttribute("data-gestos-swipe")) return;
    el.setAttribute("data-gestos-swipe", "1");
    el.style.touchAction = "pan-y";
    var IGNORA = "input, textarea, select, canvas, [data-sin-gestos]";
    var s = null;

    function puede(cual) { return !cfg.puede || cfg.puede(cual); }
    function ejecutar(cual) {
      if (!puede(cual)) return false;
      (cual === "siguiente" ? cfg.siguiente : cfg.anterior)();
      return true;
    }

    el.addEventListener("pointerdown", function (e) {
      if (s || e.isPrimary === false) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (e.target && e.target.closest && e.target.closest(IGNORA)) return;
      s = { id: e.pointerId, x: e.clientX, y: e.clientY, t: ahora(), activo: false, perdido: false };
    });
    el.addEventListener("pointermove", function (e) {
      if (!s || e.pointerId !== s.id || s.perdido) return;
      var dx = e.clientX - s.x;
      var dy = e.clientY - s.y;
      if (!s.activo) {
        /* un gesto vertical es de la página: no se toca */
        if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) { s.perdido = true; return; }
        if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy) * 1.3) {
          s.activo = true;
          try { el.setPointerCapture(e.pointerId); } catch (_) {}
          el.classList.add("deslizando");
        } else return;
      }
      /* el contenido acompaña al dedo, amortiguado (propiedad individual, sin variables) */
      el.style.translate = Math.max(-90, Math.min(90, dx * 0.35)) + "px 0";
    });
    function fin(e, cancelado) {
      if (!s || e.pointerId !== s.id) return;
      var st = s;
      s = null;
      try { el.releasePointerCapture(e.pointerId); } catch (_) {}
      if (!st.activo) return;
      el.classList.remove("deslizando");
      var desde = el.style.translate;
      el.style.translate = "";
      suprimirClic(el);
      var dir = cancelado ? null : G.clasificarSwipe(e.clientX - st.x, e.clientY - st.y, ahora() - st.t, cfg);
      var cual = dir === "izquierda" ? "siguiente" : dir === "derecha" ? "anterior" : null;
      if (cual && ejecutar(cual)) {
        /* el contenido nuevo entra desde el lado hacia el que se deslizó */
        if (animable() && !reducido())
          el.animate(
            [
              { opacity: 0.6, translate: (cual === "siguiente" ? 22 : -22) + "px 0" },
              { opacity: 1, translate: "0 0" },
            ],
            { duration: 200, easing: SALE }
          );
      } else if (desde && animable() && !reducido()) {
        el.animate([{ translate: desde }, { translate: "0 0" }], { duration: 180, easing: SALE });
      }
    }
    el.addEventListener("pointerup", function (e) { fin(e, false); });
    el.addEventListener("pointercancel", function (e) { fin(e, true); });
    el.addEventListener("keydown", function (e) {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.target && e.target.closest && e.target.closest("input, textarea, select")) return;
      if (e.key === "ArrowRight" && ejecutar("siguiente")) e.preventDefault();
      else if (e.key === "ArrowLeft" && ejecutar("anterior")) e.preventDefault();
    });
  };

  /* ---------- Carrusel: arrastrar con ratón/lápiz + teclado ----------
     En táctil se usa el desplazamiento nativo (más fluido y con inercia). */
  G.carrusel = function (el) {
    if (el.getAttribute("data-gestos-carrusel")) return;
    el.setAttribute("data-gestos-carrusel", "1");
    if (!el.hasAttribute("tabindex")) el.tabIndex = 0;
    if (!el.getAttribute("role")) el.setAttribute("role", "group");
    if (!el.getAttribute("aria-label")) el.setAttribute("aria-label", "Desliza para ver más");
    var s = null;
    el.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "touch" || e.button !== 0 || s) return;
      if (e.target && e.target.closest && e.target.closest("input, textarea, select")) return;
      s = { id: e.pointerId, x: e.clientX, left: el.scrollLeft, activo: false, v: 0, ult: e.clientX, tu: ahora() };
    });
    el.addEventListener("pointermove", function (e) {
      if (!s || e.pointerId !== s.id) return;
      var dx = e.clientX - s.x;
      if (!s.activo) {
        if (Math.abs(dx) < 6) return;
        s.activo = true;
        el.classList.add("arrastrando-carrusel");
        try { el.setPointerCapture(e.pointerId); } catch (_) {}
      }
      el.scrollLeft = s.left - dx;
      var t = ahora();
      s.v = (e.clientX - s.ult) / Math.max(1, t - s.tu);
      s.ult = e.clientX;
      s.tu = t;
    });
    function fin(e) {
      if (!s || e.pointerId !== s.id) return;
      var st = s;
      s = null;
      try { el.releasePointerCapture(e.pointerId); } catch (_) {}
      if (!st.activo) return;
      el.classList.remove("arrastrando-carrusel");
      suprimirClic(el);
      if (Math.abs(st.v) > 0.4 && !reducido() && el.scrollBy) el.scrollBy({ left: -st.v * 220, behavior: "smooth" });
    }
    el.addEventListener("pointerup", fin);
    el.addEventListener("pointercancel", fin);
    el.addEventListener("keydown", function (e) {
      if (e.defaultPrevented || !el.scrollBy) return;
      if (e.target && e.target.closest && e.target.closest("input, textarea, select")) return;
      var paso = Math.max(120, el.clientWidth * 0.8);
      var comportamiento = reducido() ? "auto" : "smooth";
      if (e.key === "ArrowRight") { el.scrollBy({ left: paso, behavior: comportamiento }); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { el.scrollBy({ left: -paso, behavior: comportamiento }); e.preventDefault(); }
    });
  };

  /* ---------- Arrastrar y soltar con una pieza que sigue al dedo ----------
     cfg: { piezas:[el], puede(pieza), validos(pieza)->[el], soltar(pieza, destino) }
     Ratón/lápiz: el arrastre empieza al mover 6 px. Táctil: al mantener ~180 ms.
     Siempre queda la alternativa original (tocar la pieza y luego el destino). */
  var enCurso = []; /* limpiadores de arrastres activos */
  G.limpiarArrastres = function () {
    var l = enCurso.slice();
    enCurso = [];
    l.forEach(function (f) { seguro(f); });
  };

  G.arrastrar = function (cfg) {
    cfg.piezas.forEach(function (p) {
      if (p.getAttribute("data-gestos-arrastre")) return;
      p.setAttribute("data-gestos-arrastre", "1");
      enlazar(p, cfg);
    });
  };

  function enlazar(p, cfg) {
    var s = null;

    function bloquearScroll(ev) { if (s && s.activo && ev.cancelable) ev.preventDefault(); }

    function limpiarEstado() {
      if (!s) return null;
      var st = s;
      s = null;
      clearTimeout(st.timer);
      if (st.raf && typeof cancelAnimationFrame === "function") cancelAnimationFrame(st.raf);
      document.removeEventListener("touchmove", bloquearScroll, { passive: false });
      p.classList.remove("arrastrado-origen");
      if (st.validos) st.validos.forEach(function (v) { v.classList.remove("destino-valido", "destino-sobre"); });
      document.body.classList.remove("arrastrando-pieza");
      try { p.releasePointerCapture(st.id); } catch (_) {}
      var i = enCurso.indexOf(st.limpiador);
      if (i !== -1) enCurso.splice(i, 1);
      return st;
    }
    function cancelar() {
      var st = limpiarEstado();
      if (st && st.fantasma) st.fantasma.remove();
    }

    function destinoBajo(st) {
      var el = document.elementFromPoint(st.x, st.y);
      if (!el) return null;
      for (var i = 0; i < st.validos.length; i++) if (st.validos[i] === el || st.validos[i].contains(el)) return st.validos[i];
      return null;
    }
    function programar() {
      if (!s || s.raf) return;
      s.raf = requestAnimationFrame(function () {
        if (!s) return;
        s.raf = 0;
        s.fantasma.style.transform = "translate3d(" + (s.x - s.ox) + "px," + (s.y - s.oy) + "px,0) scale(1.06)";
        var d = destinoBajo(s);
        if (d !== s.sobre) {
          if (s.sobre) s.sobre.classList.remove("destino-sobre");
          if (d) d.classList.add("destino-sobre");
          s.sobre = d;
        }
      });
    }

    function activar() {
      if (!s || s.activo) return;
      s.activo = true;
      clearTimeout(s.timer);
      var r = p.getBoundingClientRect();
      s.rect = r;
      s.ox = s.x0 - r.left;
      s.oy = s.y0 - r.top;
      /* la pieza que sigue al dedo es una copia; la original queda atenuada en su sitio */
      var g = p.cloneNode(true);
      g.removeAttribute("id");
      g.removeAttribute("data-gestos-arrastre");
      g.classList.add("fantasma-arrastre");
      g.setAttribute("aria-hidden", "true");
      g.style.width = r.width + "px";
      g.style.height = r.height + "px";
      g.style.transform = "translate3d(" + r.left + "px," + r.top + "px,0)";
      document.body.appendChild(g);
      s.fantasma = g;
      p.classList.add("arrastrado-origen");
      s.validos = cfg.validos(p) || [];
      s.validos.forEach(function (v) { v.classList.add("destino-valido"); });
      document.body.classList.add("arrastrando-pieza");
      try { p.setPointerCapture(s.id); } catch (_) {}
      s.limpiador = cancelar;
      enCurso.push(cancelar);
      marcarVisto(); /* ya sabe arrastrar: no hace falta enseñarlo */
      if (A.anuncia) A.anuncia("Pieza levantada. Suéltala sobre una zona marcada, o usa el toque.");
      programar();
    }

    function volar(g, de, a, ms, alTerminar) {
      if (!animable() || reducido()) { g.remove(); alTerminar && alTerminar(); return; }
      var anim = g.animate([de, a], { duration: ms, easing: SALE, fill: "forwards" });
      var listo = false;
      var fin = function () { if (listo) return; listo = true; g.remove(); alTerminar && alTerminar(); };
      anim.onfinish = fin;
      anim.oncancel = fin;
      setTimeout(fin, ms + 250);
    }

    function soltar(cancelado) {
      var st = s;
      var destino = !cancelado && st.validos ? destinoBajo(st) : null;
      var actual = "translate3d(" + (st.x - st.ox) + "px," + (st.y - st.oy) + "px,0) scale(1.06)";
      var g = st.fantasma;
      limpiarEstado();
      suprimirClic(p);
      if (destino) {
        var rd = destino.getBoundingClientRect();
        var tx = rd.left + rd.width / 2 - st.rect.width / 2;
        var ty = rd.top + rd.height / 2 - st.rect.height / 2;
        volar(g, { transform: actual, opacity: 1 }, { transform: "translate3d(" + tx + "px," + ty + "px,0) scale(0.9)", opacity: 0 }, 180);
        /* se ejecuta la misma lógica que el toque original */
        seguro(function () { cfg.soltar(p, destino); });
        if (animable() && !reducido() && destino.animate)
          destino.animate([{ scale: "1" }, { scale: "1.04", offset: 0.4 }, { scale: "1" }], { duration: 220, easing: SALE });
      } else {
        /* suelta fuera de una zona válida: la pieza vuelve a su sitio, sin castigo */
        volar(g, { transform: actual, opacity: 1 }, { transform: "translate3d(" + st.rect.left + "px," + st.rect.top + "px,0) scale(1)", opacity: 0.9 }, 220);
        if (A.anuncia && !cancelado) A.anuncia("La pieza volvió a su lugar. Prueba sobre una zona marcada.");
      }
    }

    /* mantener pulsado en Android abre a veces el menú contextual: durante el arrastre se evita */
    p.addEventListener("contextmenu", function (e) { if (s && s.tipo === "touch") e.preventDefault(); });
    p.addEventListener("pointerdown", function (e) {
      if (s || e.isPrimary === false) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (p.disabled || (cfg.puede && !cfg.puede(p))) return;
      s = { id: e.pointerId, tipo: e.pointerType, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, activo: false, timer: 0, raf: 0, validos: null, sobre: null };
      if (s.tipo === "touch") {
        document.addEventListener("touchmove", bloquearScroll, { passive: false });
        s.timer = setTimeout(function () { if (s && !s.activo) activar(); }, 180);
      }
    });
    p.addEventListener("pointermove", function (e) {
      if (!s || e.pointerId !== s.id) return;
      s.x = e.clientX;
      s.y = e.clientY;
      if (!s.activo) {
        var d = Math.sqrt(Math.pow(s.x - s.x0, 2) + Math.pow(s.y - s.y0, 2));
        if (s.tipo === "touch") { if (d > 8) cancelar(); return; } /* se movió antes de mantener: es un desplazamiento */
        if (d <= 6) return;
        activar();
      }
      programar();
    });
    p.addEventListener("pointerup", function (e) {
      if (!s || e.pointerId !== s.id) return;
      if (!s.activo) { cancelar(); return; }
      s.x = e.clientX;
      s.y = e.clientY;
      soltar(false);
    });
    p.addEventListener("pointercancel", function (e) {
      if (!s || e.pointerId !== s.id) return;
      if (s.activo) soltar(true); else cancelar();
    });
  }

  /* ---------- Descubribilidad: una demostración, una sola vez en el dispositivo ----------
     Si el niño no toca nada durante unos segundos, la primera pieza se levanta y se
     acerca a su destino una vez. Se detiene para siempre cuando alguien arrastra o
     cuando ya se mostró. Con "reducir movimiento" solo queda el texto de ayuda. */
  G.ayudaMs = 4000;
  function visto() { try { return window.localStorage.getItem("alg-arrastre-visto") === "1"; } catch (e) { return false; } }
  function marcarVisto() { try { window.localStorage.setItem("alg-arrastre-visto", "1"); } catch (e) {} }
  function muestra(zona, piezaInicial, destinoDe) {
    if (visto() || reducido() || !animable()) return;
    var tocado = false;
    var alTocar = function () { tocado = true; };
    zona.addEventListener("pointerdown", alTocar);
    setTimeout(function () {
      zona.removeEventListener("pointerdown", alTocar);
      if (tocado || visto() || !document.body.contains(zona)) return;
      var p = piezaInicial();
      var d = p && destinoDe(p);
      if (!p || !d || !p.animate) return;
      var a = p.getBoundingClientRect();
      var b = d.getBoundingClientRect();
      var dx = b.left + b.width / 2 - (a.left + a.width / 2);
      var dy = b.top + b.height / 2 - (a.top + a.height / 2);
      var k = Math.min(1, 90 / (Math.sqrt(dx * dx + dy * dy) || 1)); /* como mucho 90 px hacia el destino */
      p.animate(
        [
          { translate: "0 0", scale: "1" },
          { translate: "0 -6px", scale: "1.06", offset: 0.2 },
          { translate: dx * k + "px " + dy * k + "px", scale: "1.06", offset: 0.7 },
          { translate: "0 0", scale: "1" },
        ],
        { duration: 1300, easing: "ease-in-out" }
      );
      d.classList.add("destino-valido");
      setTimeout(function () { d.classList.remove("destino-valido"); }, 1300);
      marcarVisto();
    }, G.ayudaMs);
  }

  /* ---------- Vincular a las actividades existentes ---------- */
  function pista(zona) {
    var ayuda = zona.querySelector(".cur-ayuda-texto");
    if (ayuda) ayuda.setAttribute("aria-live", "polite"); /* los avisos del ejercicio llegan a lectores de pantalla */
    if (zona.querySelector(".cur-ayuda-arrastre")) return;
    var p = document.createElement("p");
    p.className = "cur-ayuda-arrastre";
    p.textContent = "👆 También puedes mantener pulsada una pieza y arrastrarla.";
    if (ayuda && ayuda.parentNode) ayuda.parentNode.insertBefore(p, ayuda.nextSibling);
    else zona.insertBefore(p, zona.firstChild);
  }

  var SEL = ".cur-chips, .cur-secuencia, .cur-dos-columnas, .pagina-cuento, .tira-misiones, .fila-materias";

  G.vincular = function (raiz) {
    if (!raiz || !raiz.querySelectorAll) return;
    var hay = (raiz.matches && raiz.matches(SEL)) || raiz.querySelector(SEL);
    if (!hay) return;
    var todos = qsa(raiz, SEL);
    if (raiz.matches && raiz.matches(SEL)) todos.unshift(raiz);

    todos.forEach(function (n) {
      seguro(function () {
        if (n.matches(".cur-chips")) {
          /* clasificar: arrastrar un elemento hasta su categoría = tocar el elemento y luego la categoría */
          var zona = n.parentElement;
          var cajas = qsa(zona, ".cur-cat-caja");
          G.arrastrar({
            piezas: qsa(n, ".cur-chip"),
            puede: function (p) { return !p.disabled && !p.classList.contains("colocado"); },
            validos: function () { return cajas; },
            soltar: function (p, caja) {
              p.click();
              var b = caja.querySelector(".cur-cat");
              if (b) b.click();
            },
          });
          pista(zona);
          muestra(zona, function () { return qsa(n, ".cur-chip").filter(function (c) { return !c.disabled && !c.classList.contains("colocado"); })[0]; }, function () { return cajas[0]; });
        } else if (n.matches(".cur-secuencia")) {
          /* ordenar: soltar el paso en la zona de resultados = tocarlo */
          var zonaO = n.parentElement;
          var destino = zonaO.querySelector(".cur-secuencia-hecha");
          if (!destino) return;
          G.arrastrar({
            piezas: qsa(n, ".cur-chip"),
            puede: function (p) { return !p.disabled; },
            validos: function () { return [destino]; },
            soltar: function (p) { p.click(); },
          });
          pista(zonaO);
          muestra(zonaO, function () { return qsa(n, ".cur-chip").filter(function (c) { return !c.disabled; })[0]; }, function () { return destino; });
        } else if (n.matches(".cur-dos-columnas")) {
          /* emparejar: soltar una palabra sobre su pareja = tocar una y luego la otra */
          var cols = qsa(n, ".cur-col");
          if (cols.length < 2) return;
          G.arrastrar({
            piezas: qsa(n, ".cur-par"),
            puede: function (p) { return !p.disabled; },
            validos: function (p) {
              var otra = p.closest(".cur-col") === cols[0] ? cols[1] : cols[0];
              return qsa(otra, ".cur-par").filter(function (b) { return !b.disabled; });
            },
            soltar: function (p, d) {
              if (p.closest(".cur-col") === cols[0]) { p.click(); d.click(); }
              else { d.click(); p.click(); }
            },
          });
          pista(n.parentElement);
          muestra(n.parentElement, function () { return qsa(cols[0], ".cur-par").filter(function (c) { return !c.disabled; })[0]; }, function () { return qsa(cols[1], ".cur-par").filter(function (c) { return !c.disabled; })[0]; });
        } else if (n.matches(".pagina-cuento")) {
          /* cuentos: deslizar = Adelante / Atrás (los botones siguen ahí) */
          var zonaC = n.parentElement;
          var botones = function () { return qsa(zonaC, ".fila-botones button"); };
          G.swipe(zonaC, {
            siguiente: function () { var b = botones(); if (b.length) b[b.length - 1].click(); },
            anterior: function () { var b = botones(); if (b.length) b[0].click(); },
            puede: function (cual) {
              var b = botones();
              if (b.length < 2) return false;
              if (cual === "anterior") return !b[0].disabled;
              var ult = b[b.length - 1];
              /* en la última página no se "termina" por accidente al deslizar */
              return !ult.disabled && !/^✅/.test((ult.textContent || "").trim());
            },
          });
        } else if (n.matches(".tira-misiones, .fila-materias")) {
          G.carrusel(n);
        }
      });
    });
  };

  /* ---------- Fichas (arrastre que ya existía): zonas, aterrizaje y regreso ---------- */
  var fich = { ficha: null, rect: null, ranuras: [], sobre: null, mover: null };
  function pulsoRanura(r) {
    if (r && animable() && !reducido() && r.animate)
      r.animate([{ scale: "1" }, { scale: "1.05", offset: 0.4 }, { scale: "1" }], { duration: 220, easing: SALE });
  }
  function iniciarFicha(f) {
    fich.ficha = f;
    fich.rect = f.getBoundingClientRect();
    fich.ranuras = qsa(document, ".ranura");
    fich.ranuras.forEach(function (r) { r.classList.add("destino-valido"); });
    fich.mover = function (e) {
      if (!fich.ficha) return;
      fich.rect = fich.ficha.getBoundingClientRect();
      var sobre = null;
      for (var i = 0; i < fich.ranuras.length; i++) {
        var b = fich.ranuras[i].getBoundingClientRect();
        if (e.clientX >= b.left && e.clientX <= b.right && e.clientY >= b.top && e.clientY <= b.bottom) { sobre = fich.ranuras[i]; break; }
      }
      if (sobre !== fich.sobre) {
        if (fich.sobre) fich.sobre.classList.remove("destino-sobre");
        if (sobre) sobre.classList.add("destino-sobre");
        fich.sobre = sobre;
      }
    };
    document.addEventListener("pointermove", fich.mover);
  }
  function terminarFicha(f) {
    if (fich.mover) document.removeEventListener("pointermove", fich.mover);
    fich.ranuras.forEach(function (r) { r.classList.remove("destino-valido", "destino-sobre"); });
    var antes = fich.rect;
    fich.ficha = null;
    fich.mover = null;
    fich.sobre = null;
    fich.ranuras = [];
    /* la ficha se desliza desde donde se soltó hasta su sitio final (FLIP) */
    if (antes && animable() && !reducido() && f.getBoundingClientRect) {
      var n = f.getBoundingClientRect();
      var dx = antes.left - n.left;
      var dy = antes.top - n.top;
      if (Math.abs(dx) + Math.abs(dy) > 3 && f.animate)
        f.animate([{ translate: dx + "px " + dy + "px" }, { translate: "0 0" }], { duration: 220, easing: SALE });
    }
    if (f.parentElement && f.parentElement.classList && f.parentElement.classList.contains("ranura")) pulsoRanura(f.parentElement);
  }
  if (A.alCambiarClase) {
    A.alCambiarClase(function (t, ahoraCls, antesCls) {
      if (!/(^|\s)ficha(\s|$)/.test(ahoraCls)) return;
      var tenia = /(^|\s)arrastrando(\s|$)/.test(antesCls);
      var tiene = /(^|\s)arrastrando(\s|$)/.test(ahoraCls);
      if (!tenia && tiene) iniciarFicha(t);
      else if (tenia && !tiene && fich.ficha === t) terminarFicha(t);
    });
  }

  /* ---------- Enganche y limpieza ---------- */
  if (A.alAnadir) A.alAnadir(function (n) { G.vincular(n); });
  document.addEventListener("nav:cambio", function () { G.limpiarArrastres(); });
  document.addEventListener("visibilitychange", function () { if (document.hidden) G.limpiarArrastres(); });
  seguro(function () { G.vincular(document); });
})();
