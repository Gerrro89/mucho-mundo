/* TEMA INFANTIL — motor de movimiento (ronda 3).
   Un solo observador de cambios y un registro (window.ALGEB) al que se
   enganchan gestos.js y kiko-vivo.js. Solo presentación: no toca la lógica de
   los ejercicios, el progreso ni la navegación.

   Puerta de frecuencia (animate / find-animation-opportunities):
   · Pantallas, opciones, barras: casi imperceptible (≤220–420 ms, ease-out).
   · Acierto, recompensa, Kiko: ahí vive el deleite, con ráfagas cortas.
   Con prefers-reduced-motion: solo desvanecimientos, sin desplazamiento. */
(function () {
  "use strict";

  var raiz = document.documentElement;
  var SALE = "cubic-bezier(0.23, 1, 0.32, 1)";       /* --ease-out */
  var RESORTE = "cubic-bezier(0.34, 1.56, 0.64, 1)";  /* easeOutBack: solo juego/celebración */
  var puedeAnimar = typeof Element !== "undefined" && typeof Element.prototype.animate === "function";
  var mq = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

  function reducido() { return !!(mq && mq.matches); }
  function sinMovimiento() { return !puedeAnimar || reducido(); }
  function seguro(fn) { try { fn(); } catch (e) { /* un adorno nunca rompe la app */ } }

  /* ---------- Modo ligero (teléfonos modestos o ahorro de datos) ----------
     Menos partículas y sin decoración animada. Se puede forzar:
     localStorage "alg-ligero" = "1" (activar) o "0" (desactivar). */
  function esLigero(nav, almacen) {
    try {
      var forzado = almacen && almacen.getItem("alg-ligero");
      if (forzado === "1") return true;
      if (forzado === "0") return false;
    } catch (e) { /* sin almacenamiento */ }
    if (!nav) return false;
    if (nav.connection && nav.connection.saveData) return true;
    if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return true;
    if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 2) return true;
    return false;
  }
  var almacenLocal = null;
  try { almacenLocal = window.localStorage; } catch (e) {}
  var ligero = esLigero(typeof navigator !== "undefined" ? navigator : null, almacenLocal);
  var MAX_CHISPAS = ligero ? 10 : 36;
  if (ligero) raiz.classList.add("modo-ligero");

  /* ---------- Registro compartido ---------- */
  var A = (window.ALGEB = window.ALGEB || {});
  A.esLigero = esLigero;
  A.ligero = ligero;
  A.SALE = SALE;
  A.RESORTE = RESORTE;
  A.reducido = reducido;
  A.sinMovimiento = sinMovimiento;
  A.seguro = seguro;
  A.puedeAnimar = function () { return puedeAnimar; };
  var ganchosNodo = [];
  var ganchosClase = [];
  A.alAnadir = function (fn) { ganchosNodo.push(fn); };
  A.alCambiarClase = function (fn) { ganchosClase.push(fn); };

  /* Anuncio para lectores de pantalla (no depende del color ni del movimiento) */
  var sr = null;
  A.anuncia = function (texto) {
    seguro(function () {
      if (!sr) {
        sr = document.createElement("div");
        sr.id = "anuncio-sr";
        sr.className = "sr-solo";
        sr.setAttribute("role", "status");
        sr.setAttribute("aria-live", "polite");
        document.body.appendChild(sr);
      }
      sr.textContent = "";
      setTimeout(function () { sr.textContent = texto; }, 40);
    });
  };

  /* ---------- Pantalla activa y dirección (para el CSS y la entrada) ---------- */
  var hist = [];
  var dir = 1;
  function direccion(id) {
    if (id === "home") { hist = ["home"]; dir = 1; return; }
    var n = hist.length;
    if (n > 1 && hist[n - 2] === id) { hist.pop(); dir = -1; }
    else { if (hist[n - 1] !== id) hist.push(id); dir = 1; }
    if (hist.length > 20) hist.shift();
  }
  function marcar(id) {
    if (!document.body) return;
    document.body.setAttribute("data-pantalla", id || "home");
    document.body.setAttribute("data-dir", dir < 0 ? "atras" : "adelante");
  }
  marcar("home");
  A.direccion = function () { return dir; };

  /* Con la pestaña oculta, el fondo animado se pausa */
  document.addEventListener("visibilitychange", function () {
    raiz.classList.toggle("pausa-ambiente", document.hidden);
  });

  /* El profe se anuncia a lectores de pantalla */
  var burbuja = document.getElementById("burbuja-guia");
  if (burbuja) {
    burbuja.setAttribute("aria-live", "polite");
    burbuja.setAttribute("aria-atomic", "true");
  }

  /* ---------- Capa de chispas (con tope) ---------- */
  var capa = null;
  var activas = 0;
  var FORMAS = ["⭐", "✨", "💛", "🔵", "🟢", "🟣", "🌟", "🔴"];
  function capaChispas() {
    if (!capa) {
      capa = document.createElement("div");
      capa.id = "chispas";
      capa.setAttribute("aria-hidden", "true");
      document.body.appendChild(capa);
    }
    return capa;
  }
  function chispa(x, y, dist, sube) {
    if (sinMovimiento() || activas > MAX_CHISPAS) return;
    var n = document.createElement("span");
    n.className = "chispa";
    n.textContent = FORMAS[Math.floor(Math.random() * FORMAS.length)];
    n.style.left = x + "px";
    n.style.top = y + "px";
    n.style.fontSize = 14 + Math.random() * 12 + "px";
    capaChispas().appendChild(n);
    activas++;
    var ang = Math.random() * Math.PI * 2;
    var d = dist * (0.6 + Math.random() * 0.8);
    var dx = Math.cos(ang) * d;
    var dy = Math.sin(ang) * d - (sube || 0);
    var giro = Math.round(Math.random() * 160 - 80);
    var a = n.animate(
      [
        { transform: "translate(-50%, -50%) scale(0.6)", opacity: 1 },
        { transform: "translate(calc(-50% + " + dx + "px), calc(-50% + " + dy + "px)) scale(1.1) rotate(" + giro + "deg)", opacity: 1, offset: 0.6 },
        { transform: "translate(calc(-50% + " + dx + "px), calc(-50% + " + (dy + 28) + "px)) scale(0.7) rotate(" + giro * 1.3 + "deg)", opacity: 0 },
      ],
      { duration: 450 + Math.random() * 250, easing: SALE }
    );
    var fin = function () { activas--; n.remove(); };
    a.onfinish = fin;
    a.oncancel = fin;
  }
  function rafaga(el, cuantas, dist) {
    if (!el || !el.getBoundingClientRect) return;
    var r = el.getBoundingClientRect();
    if (ligero) cuantas = Math.ceil(cuantas / 2);
    for (var i = 0; i < cuantas; i++) chispa(r.left + r.width / 2, r.top + r.height / 2, dist || 64, 20);
  }
  A.chispa = chispa;
  A.rafaga = rafaga;

  /* Descubrimiento: tocar el logo, la tarjeta de bienvenida o a Kiko suelta chispas */
  document.addEventListener(
    "pointerdown",
    function (e) {
      seguro(function () {
        if (sinMovimiento()) return;
        if (e.pointerType === "mouse" && e.button !== 0) return;
        var t = e.target;
        if (t && t.closest && t.closest(".logo, .hero-inicio, #guia")) {
          for (var i = 0; i < 5; i++) chispa(e.clientX, e.clientY, 46, 10);
        }
      });
    },
    { passive: true }
  );

  /* ---------- Entradas casi imperceptibles ---------- */
  /* propósito: evitar un cambio brusco; horizontal = de dónde viene la pantalla */
  function entra(el, i, max, dx) {
    if (!puedeAnimar || !el.animate) return;
    if (reducido()) {
      el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 150, easing: "ease", fill: "backwards" });
      return;
    }
    el.animate(
      [
        { opacity: 0, translate: dx ? dx + "px 0" : "0 10px" },
        { opacity: 1, translate: "0 0" },
      ],
      { duration: 220, delay: Math.min(i, max) * 30, easing: SALE, fill: "backwards" }
    );
  }
  function entrada(id) {
    var cont = document.getElementById("contenido-" + id);
    if (!cont) return;
    var hijos = cont.children;
    for (var i = 0; i < hijos.length && i < 6; i++) entra(hijos[i], i, 5, dir * 14);
  }

  /* ---------- Contadores: suben solo cuando el valor es mayor que la última vez ---------- */
  var vistos = {};
  var contRaf = 0;
  function contar() {
    if (contRaf && typeof cancelAnimationFrame === "function") cancelAnimationFrame(contRaf);
    contRaf = 0;
    var chips = document.querySelectorAll("#contenido-home .indicadores-inicio .chip-indicador");
    var items = [];
    for (var i = 0; i < chips.length; i++) {
      var s = chips[i].querySelector("strong");
      if (!s) continue;
      var txt = (s.textContent || "").trim();
      if (!/^\d+$/.test(txt)) continue;
      var clave = (chips[i].textContent || "").replace(/\d+/g, "").replace(/\s+/g, " ").trim();
      var fin = parseInt(txt, 10);
      var ini = Object.prototype.hasOwnProperty.call(vistos, clave) ? vistos[clave] : 0;
      vistos[clave] = fin;
      if (fin > ini && !reducido()) items.push({ s: s, ini: ini, fin: fin });
    }
    if (!items.length) return;
    var t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
    var dur = 600;
    (function paso() {
      var ahora = typeof performance !== "undefined" ? performance.now() : Date.now();
      var p = Math.min(1, (ahora - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      for (var k = 0; k < items.length; k++) items[k].s.textContent = String(Math.round(items[k].ini + (items[k].fin - items[k].ini) * e));
      if (p < 1) contRaf = requestAnimationFrame(paso);
      else for (var q = 0; q < items.length; q++) items[q].s.textContent = String(items[q].fin);
    })();
  }

  document.addEventListener("nav:cambio", function (e) {
    var id = e && e.detail && e.detail.id;
    direccion(id);
    marcar(id);
    /* el módulo de la pantalla pinta justo después del evento */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        seguro(function () {
          entrada(id);
          if (id === "home") contar();
        });
      });
    });
  });

  /* ---------- Un solo observador: piezas nuevas, respuestas y ganchos ---------- */
  var PIEZAS = ".opcion, .cur-op, .caja-letra, .carta-memoria, .tarjeta-explorar, .opcion-candado";
  var lote = 0;
  var loteTimer = null;
  function aparecePieza(n) {
    var i = lote++;
    clearTimeout(loteTimer);
    loteTimer = setTimeout(function () { lote = 0; }, 60);
    entra(n, i, 4, 0);
  }
  function kiko(nombre) {
    var k = A.kiko;
    if (k && typeof k[nombre] === "function") k[nombre]();
  }

  var main = document.querySelector("main.contenedor");
  function alMutar(lista) {
    seguro(function () {
      for (var k = 0; k < lista.length; k++) {
        var m = lista[k];
        if (m.type === "attributes") {
          var t = m.target;
          var ahora = (t.getAttribute && t.getAttribute("class")) || "";
          var antes = m.oldValue || "";
          if (/(^|\s)correcto(\s|$)/.test(ahora) && !/(^|\s)correcto(\s|$)/.test(antes)) {
            rafaga(t, 6, 64);
            kiko("salta");
            A.anuncia("Correcto");
          } else if (/(^|\s)mal(\s|$)/.test(ahora) && !/(^|\s)mal(\s|$)/.test(antes)) {
            kiko("ladea");
            A.anuncia("Inténtalo otra vez");
          }
          for (var g = 0; g < ganchosClase.length; g++) seguro(function () { ganchosClase[g](t, ahora, antes); });
        } else if (m.type === "childList") {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var nodo = m.addedNodes[j];
            if (nodo.nodeType !== 1) continue;
            if (nodo.matches && nodo.matches(PIEZAS)) aparecePieza(nodo);
            else if (nodo.querySelectorAll && nodo.closest && nodo.closest("#pantalla-actividad")) {
              var hijos = nodo.querySelectorAll(PIEZAS);
              for (var q = 0; q < hijos.length && q < 8; q++) aparecePieza(hijos[q]);
            }
            for (var h = 0; h < ganchosNodo.length; h++) seguro(function () { ganchosNodo[h](nodo); });
          }
        }
      }
    });
  }
  if (main && typeof MutationObserver === "function") {
    new MutationObserver(alMutar).observe(main, {
      attributes: true,
      attributeFilter: ["class"],
      attributeOldValue: true,
      subtree: true,
      childList: true,
    });
  }
  A._alMutar = alMutar; /* para las pruebas */


  /* ---------- Insignias nuevas: se "desbloquean" la primera vez que se ven ----------
     Se recuerda por perfil qué insignias ya se mostraron. La primera vez que se abre la
     galería solo se registran (no se anima todo lo que ya estaba ganado). */
  function almacenaje(k, v) {
    try {
      if (v === undefined) return JSON.parse(window.localStorage.getItem(k) || "null");
      window.localStorage.setItem(k, JSON.stringify(v));
    } catch (e) { /* sin almacenamiento */ }
    return null;
  }
  function claveVistas() {
    var id = "x";
    try {
      var C = window.CORE;
      if (C && C.Store && C.Store.perfilActivo && C.Store.perfilActivo.id) id = C.Store.perfilActivo.id;
    } catch (e) {}
    return "alg-ins-vistas-" + id;
  }
  function desbloqueos(nodo) {
    var rej = nodo.matches && nodo.matches(".rejilla-insignias") ? nodo : nodo.querySelector && nodo.querySelector(".rejilla-insignias");
    if (!rej) return;
    var items = rej.querySelectorAll(".insignia.ganada");
    if (!items.length) return;
    var clave = claveVistas();
    var vistas = almacenaje(clave);
    var nombres = [];
    var nuevas = [];
    for (var i = 0; i < items.length; i++) {
      var n = items[i].querySelector(".nombre-insignia");
      var nombre = ((n || items[i]).textContent || "").trim();
      nombres.push(nombre);
      if (vistas && vistas.indexOf(nombre) === -1) nuevas.push({ el: items[i], nombre: nombre });
    }
    almacenaje(clave, nombres.concat((vistas || []).filter(function (v) { return nombres.indexOf(v) === -1; })));
    if (!vistas || !nuevas.length) return;
    A.anuncia("Insignia nueva: " + nuevas.map(function (x) { return x.nombre; }).join(", "));
    if (sinMovimiento()) return;
    nuevas.forEach(function (x, k) {
      var retraso = 200 + k * 200;
      x.el.animate(
        [
          { opacity: 0, scale: "0.85" },
          { opacity: 1, scale: "1.08", offset: 0.6 },
          { opacity: 1, scale: "1" },
        ],
        { duration: 520, delay: retraso, easing: RESORTE, fill: "backwards" }
      );
      setTimeout(function () { rafaga(x.el, 6, 56); }, retraso + 250);
    });
  }
  A.alAnadir(desbloqueos);
  A._desbloqueos = desbloqueos;

  /* ---------- Cartel de recompensa (momento raro) ---------- */
  function lluvia() {
    if (sinMovimiento()) return;
    var ancho = window.innerWidth;
    var alto = window.innerHeight;
    for (var i = 0, total = ligero ? 8 : 20; i < total; i++) {
      (function () {
        var n = document.createElement("span");
        n.className = "chispa";
        n.textContent = FORMAS[Math.floor(Math.random() * FORMAS.length)];
        n.style.left = Math.random() * ancho + "px";
        n.style.top = "0px";
        n.style.fontSize = 18 + Math.random() * 16 + "px";
        capaChispas().appendChild(n);
        activas++;
        var giro = Math.round(Math.random() * 360 - 180);
        var a = n.animate(
          [
            { transform: "translate(0, -40px) rotate(0deg)", opacity: 1 },
            { transform: "translate(" + (Math.random() * 80 - 40) + "px, " + (alto + 40) + "px) rotate(" + giro + "deg)", opacity: 1 },
          ],
          { duration: 1500 + Math.random() * 1000, delay: Math.random() * 500, easing: "linear", fill: "backwards" }
        );
        var fin = function () { activas--; n.remove(); };
        a.onfinish = fin;
        a.oncancel = fin;
      })();
    }
  }
  /* Las estrellas del cartel aparecen una a una (objetivo cumplido) */
  function estrellasEscalonadas(cartel) {
    var e = cartel.querySelector(".estrellas-grandes");
    if (!e || e.getAttribute("data-alg")) return;
    var t = e.textContent || "";
    if (!/^[\s⭐🌟★☆✨\uFE0F]+$/u.test(t)) return;
    var simbolos = Array.from(t.replace(/[\s\uFE0F]/g, ""));
    if (!simbolos.length) return;
    var llenas = 0;
    e.textContent = "";
    var spans = [];
    simbolos.forEach(function (c) {
      var s = document.createElement("span");
      s.className = "est";
      s.textContent = c;
      if (c !== "☆") llenas++;
      e.appendChild(s);
      spans.push(s);
    });
    e.setAttribute("data-alg", "1");
    e.setAttribute("role", "img");
    e.setAttribute("aria-label", llenas + " de " + simbolos.length + " estrellas");
    if (sinMovimiento()) return;
    spans.forEach(function (s, i) {
      s.animate(
        [
          { opacity: 0, scale: "0.85" },
          { opacity: 1, scale: "1" },
        ],
        { duration: 360, delay: 250 + i * 140, easing: RESORTE, fill: "backwards" }
      );
    });
  }
  var cartel = document.getElementById("overlay-recompensa");
  if (cartel && typeof MutationObserver === "function") {
    new MutationObserver(function (lista) {
      seguro(function () {
        for (var i = 0; i < lista.length; i++) {
          var antes = lista[i].oldValue || "";
          if (cartel.classList.contains("visible") && !/(^|\s)visible(\s|$)/.test(antes)) {
            estrellasEscalonadas(cartel);
            lluvia();
            kiko("celebra");
          }
        }
      });
    }).observe(cartel, { attributes: true, attributeFilter: ["class"], attributeOldValue: true });
  }
})();
