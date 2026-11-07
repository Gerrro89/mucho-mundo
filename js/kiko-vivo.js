/* KIKO VIVO — reacciones con propósito educativo (ronda 3).
   Kiko no se mueve solo: reacciona a algo que el niño hizo o a algo que el
   sistema dice. Solo animación visual (no habla por su cuenta).
   Una sola animación a la vez sobre #guia (se cancela la anterior), y ninguna
   si el sistema pide menos movimiento.

   · saluda   — una vez por sesión, al entrar.
   · salta    — acierto.
   · ladea    — error (suave, sin castigo).
   · curioso  — cuando aparece una pista.
   · anima    — cuando el mensaje invita a intentarlo otra vez.
   · celebra  — recompensa.
   · senala   — dirige la mirada al botón principal si el niño no ha tocado nada
                durante un rato en la portada (una vez por visita). */
(function () {
  "use strict";

  var A = (window.ALGEB = window.ALGEB || {});
  var RESORTE = "cubic-bezier(0.34, 1.56, 0.64, 1)";
  var SALE = "cubic-bezier(0.23, 1, 0.32, 1)";
  var K = (A.kiko = {});
  var actual = null;

  function sin() { return typeof A.sinMovimiento === "function" ? A.sinMovimiento() : false; }
  function seguro(fn) { try { fn(); } catch (e) { /* adorno */ } }
  function guia() { return document.getElementById("guia"); }

  /* una sola animación a la vez: la nueva reemplaza a la anterior */
  function reproducir(cuadros, opciones) {
    var g = guia();
    if (!g || sin() || !g.animate) return;
    if (actual) { try { actual.cancel(); } catch (e) {} }
    actual = g.animate(cuadros, opciones);
    var esta = actual;
    var limpiar = function () { if (actual === esta) actual = null; };
    esta.onfinish = limpiar;
    esta.oncancel = limpiar;
  }

  K.salta = function () {
    reproducir(
      [
        { translate: "0 0", scale: "1 1" },
        { translate: "0 -22px", scale: "0.97 1.07", offset: 0.38 },
        { translate: "0 0", scale: "1.07 0.93", offset: 0.72 },
        { translate: "0 0", scale: "1 1" },
      ],
      { duration: 440, easing: RESORTE }
    );
  };
  K.ladea = function () {
    reproducir(
      [{ rotate: "0deg" }, { rotate: "-7deg", offset: 0.3 }, { rotate: "5deg", offset: 0.65 }, { rotate: "0deg" }],
      { duration: 380, easing: "ease-in-out" }
    );
  };
  K.curioso = function () {
    reproducir(
      [
        { rotate: "0deg", translate: "0 0" },
        { rotate: "-10deg", translate: "-3px -4px", offset: 0.4 },
        { rotate: "-6deg", translate: "-2px -2px", offset: 0.75 },
        { rotate: "0deg", translate: "0 0" },
      ],
      { duration: 620, easing: SALE }
    );
  };
  K.anima = function () {
    reproducir(
      [
        { translate: "0 0" },
        { translate: "0 5px", offset: 0.25 },
        { translate: "0 0", offset: 0.5 },
        { translate: "0 4px", offset: 0.75 },
        { translate: "0 0" },
      ],
      { duration: 480, easing: "ease-in-out" }
    );
  };
  K.celebra = function () {
    reproducir(
      [
        { translate: "0 0", scale: "1 1", rotate: "0deg" },
        { translate: "0 -28px", scale: "0.96 1.08", rotate: "-6deg", offset: 0.22 },
        { translate: "0 0", scale: "1.08 0.92", rotate: "0deg", offset: 0.42 },
        { translate: "0 -18px", scale: "0.98 1.05", rotate: "6deg", offset: 0.66 },
        { translate: "0 0", scale: "1.04 0.96", rotate: "0deg", offset: 0.86 },
        { translate: "0 0", scale: "1 1", rotate: "0deg" },
      ],
      { duration: 900, easing: RESORTE }
    );
  };
  K.saluda = function () {
    reproducir(
      [
        { rotate: "0deg", translate: "0 0" },
        { rotate: "12deg", translate: "0 -6px", offset: 0.25 },
        { rotate: "-9deg", translate: "0 -2px", offset: 0.5 },
        { rotate: "8deg", translate: "0 -4px", offset: 0.75 },
        { rotate: "0deg", translate: "0 0" },
      ],
      { duration: 900, easing: SALE }
    );
  };

  /* Señalar: un anillo que late 3 veces alrededor del elemento (transform + opacity) */
  var senalado = null;
  K.senala = function (el) {
    if (!el || !el.classList) return;
    if (senalado) senalado.classList.remove("senalado");
    senalado = el;
    el.classList.add("senalado");
    K.curioso();
    setTimeout(function () {
      if (el.classList) el.classList.remove("senalado");
      if (senalado === el) senalado = null;
    }, 2600);
  };

  /* ---------- Saludo: una vez por sesión, cuando la pantalla de carga termina ---------- */
  function saludoUnaVez() {
    seguro(function () {
      var ya = false;
      try { ya = window.sessionStorage.getItem("alg-saludo") === "1"; } catch (e) {}
      if (ya) return;
      try { window.sessionStorage.setItem("alg-saludo", "1"); } catch (e) {}
      setTimeout(K.saluda, 700);
    });
  }
  if (document.readyState === "complete") saludoUnaVez();
  else window.addEventListener("load", saludoUnaVez);

  /* ---------- Lo que Kiko dice decide cómo reacciona ---------- */
  var burbuja = document.getElementById("burbuja-guia");
  var ultimoTexto = "";
  function reaccionarAlTexto() {
    if (!burbuja || !burbuja.classList.contains("visible")) return;
    var t = (burbuja.textContent || "").trim();
    if (!t || t === ultimoTexto) return;
    ultimoTexto = t;
    if (/pista|💡|fíjate|fijate|piensa/i.test(t)) K.curioso();
    else if (/otra vez|intenta|casi|no pasa nada|ánimo|animo|vuelve a/i.test(t)) K.anima();
  }
  if (burbuja && typeof MutationObserver === "function") {
    new MutationObserver(function () { seguro(reaccionarAlTexto); }).observe(burbuja, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      characterData: true,
      subtree: true,
    });
    /* cuando se cierra, la próxima frase igual vuelve a contar */
    new MutationObserver(function () {
      if (!burbuja.classList.contains("visible")) ultimoTexto = "";
    }).observe(burbuja, { attributes: true, attributeFilter: ["class"] });
  }

  /* ---------- Portada: si pasa un rato sin tocar nada, Kiko señala el botón principal ---------- */
  var reposo = null;
  function armarReposo() {
    clearTimeout(reposo);
    reposo = null;
    if (document.body.getAttribute("data-pantalla") !== "home") return;
    reposo = setTimeout(function () {
      reposo = null;
      if (document.hidden || document.body.getAttribute("data-pantalla") !== "home") return;
      var cta = document.querySelector("#contenido-home .btn-huge.primario");
      if (cta) K.senala(cta);
    }, 15000);
  }
  function actividad() { clearTimeout(reposo); reposo = null; }
  document.addEventListener("pointerdown", actividad, { passive: true });
  document.addEventListener("keydown", actividad, { passive: true });
  document.addEventListener("nav:cambio", function () {
    /* una vez por visita: se arma al entrar y se desarma con cualquier toque */
    setTimeout(armarReposo, 400);
  });
  armarReposo();

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (actual) { try { actual.cancel(); } catch (e) {} }
      clearTimeout(reposo);
      reposo = null;
    }
  });
})();
