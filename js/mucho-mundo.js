/* MUCHO MUNDO - identidad y navegación (entrega A)
   · Iconos ilustrados (SVG) para las 10 materias, con el emoji como respaldo.
   · Navegación inferior en móvil: reutiliza los botones y la navegación que
     ya existen; no duplica pantallas ni lógica.
   · Pantalla de carga.
   Solo presentación: no toca ejercicios, progreso ni rutas. */
(function () {
  "use strict";
  var NS = 'xmlns="http://www.w3.org/2000/svg"';
  var T = 'stroke="#26364a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';

  /* ---------- Iconos de las 10 materias (cuadrícula 64×64) ---------- */
  var ICONOS = {
    lenguaje:
      '<path d="M3 17v39c10-4 19-3 29 2 10-5 19-6 29-2V17" fill="#3fa34d" ' + T + '/>' +
      '<path d="M6 14c9-3 18-2 26 3v37c-8-5-17-6-26-3z" fill="#fff6dc" ' + T + '/>' +
      '<path d="M58 14c-9-3-18-2-26 3v37c8-5 17-6 26-3z" fill="#fffdf4" ' + T + '/>' +
      '<path d="M12 25c5-1 10 0 14 2M12 33c5-1 10 0 14 2M38 27c4-2 9-3 14-2M38 35c4-2 9-3 14-2" fill="none" stroke="#9bb5c9" stroke-width="2.6" stroke-linecap="round"/>',
    mate:
      '<g transform="rotate(-7 20 44)"><rect x="5" y="30" width="30" height="28" rx="7" fill="#4cc9f0" ' + T + '/><text x="20" y="52" text-anchor="middle" font-family="Arial Rounded MT Bold,Trebuchet MS,sans-serif" font-weight="900" font-size="22" fill="#fff" stroke="#26364a" stroke-width="1.2">1</text></g>' +
      '<g transform="rotate(7 46 44)"><rect x="32" y="30" width="28" height="28" rx="7" fill="#ffd23f" ' + T + '/><text x="46" y="52" text-anchor="middle" font-family="Arial Rounded MT Bold,Trebuchet MS,sans-serif" font-weight="900" font-size="22" fill="#fff" stroke="#26364a" stroke-width="1.2">2</text></g>' +
      '<g transform="rotate(-3 32 18)"><rect x="18" y="4" width="28" height="26" rx="7" fill="#ff6b8b" ' + T + '/><text x="32" y="25" text-anchor="middle" font-family="Arial Rounded MT Bold,Trebuchet MS,sans-serif" font-weight="900" font-size="22" fill="#fff" stroke="#26364a" stroke-width="1.2">+</text></g>',
    cnaturales:
      '<path d="M32 40c0-6-1-10-2-14" fill="none" stroke="#2e8b57" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M32 38C32 26 26 18 13 16c-1 12 5 21 19 22z" fill="#5fd068" ' + T + '/>' +
      '<path d="M32 32C33 21 40 14 52 13c1 11-5 19-20 19z" fill="#8be56d" ' + T + '/>' +
      '<path d="M16 40h32l-4 18H20z" fill="#e07a5f" ' + T + '/>' +
      '<ellipse cx="32" cy="40" rx="16" ry="4.5" fill="#7a4c2c" ' + T + '/>',
    csociales:
      '<circle cx="32" cy="32" r="25" fill="#4cc9f0" ' + T + '/>' +
      '<path d="M16 22c4-5 10-5 12-2 2 3-2 5 0 8s-3 6-6 5-7-4-6-11z" fill="#5fd068" stroke="#26364a" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M37 34c4-3 10-2 12 2s-1 9-5 11-5-1-6-4 -2-6-1-9z" fill="#8be56d" stroke="#26364a" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M34 10c-5 6-5 12-3 17" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>',
    ingles:
      '<path d="M8 12h42a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6H30l-12 11v-11H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="#a679ff" ' + T + '/>' +
      '<text x="29" y="36" text-anchor="middle" font-family="Arial Rounded MT Bold,Trebuchet MS,sans-serif" font-weight="900" font-size="20" fill="#fff" stroke="#26364a" stroke-width="1">Hi!</text>',
    tecnologia:
      '<rect x="9" y="10" width="46" height="32" rx="6" fill="#3b4a60" ' + T + '/>' +
      '<rect x="14" y="15" width="36" height="22" rx="3" fill="#06d6a0"/>' +
      '<path d="M23 21l-5 5 5 5M41 21l5 5-5 5" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M3 46h58l-4 8a4 4 0 0 1-3.6 2H10.6A4 4 0 0 1 7 54z" fill="#c9d6e2" ' + T + '/>',
    artistica:
      '<path d="M32 6C16 6 4 17 4 31c0 13 10 24 23 24 6 0 7-3 5-6-2-3 0-7 5-7h9c10 0 18-6 18-14C64 16 50 6 32 6z" fill="#ffe2b8" ' + T + '/>' +
      '<circle cx="19" cy="30" r="5" fill="#ff6b8b" stroke="#26364a" stroke-width="2.2"/>' +
      '<circle cx="28" cy="17" r="5" fill="#ffd23f" stroke="#26364a" stroke-width="2.2"/>' +
      '<circle cx="43" cy="17" r="5" fill="#4cc9f0" stroke="#26364a" stroke-width="2.2"/>' +
      '<circle cx="52" cy="29" r="5" fill="#5fd068" stroke="#26364a" stroke-width="2.2"/>',
    efisica:
      '<circle cx="32" cy="32" r="26" fill="#ffffff" ' + T + '/>' +
      '<polygon points="32,20 43,28 39,41 25,41 21,28" fill="#26364a" stroke="#26364a" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M32 20V8M43 28l11-4M39 41l7 10M25 41l-7 10M21 28L10 24" fill="none" stroke="#26364a" stroke-width="2.6" stroke-linecap="round"/>',
    etica:
      '<path d="M32 57C9 41 4 30 4 21 4 13 10 8 17 8c6 0 11 4 15 10 4-6 9-10 15-10 7 0 13 5 13 13 0 9-5 20-28 36z" fill="#ff7a8a" ' + T + '/>' +
      '<path d="M15 20c1-4 4-6 8-5" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>',
    religiosa:
      '<path d="M26 40C30 20 41 12 54 10c-3 14-10 25-22 34z" fill="#e7ddff" ' + T + '/>' +
      '<ellipse cx="30" cy="40" rx="19" ry="11" transform="rotate(-14 30 40)" fill="#ffffff" ' + T + '/>' +
      '<path d="M13 44L3 53l15-3z" fill="#ffffff" ' + T + '/>' +
      '<circle cx="48" cy="27" r="8.5" fill="#ffffff" ' + T + '/>' +
      '<path d="M55 25l8 3-8 3z" fill="#f2994a" stroke="#26364a" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<circle cx="50" cy="25" r="1.9" fill="#26364a"/>',
  };
  var EMOJI = {
    "📖": "lenguaje", "🔢": "mate", "🌱": "cnaturales", "🌎": "csociales", "🗣": "ingles",
    "💻": "tecnologia", "🎨": "artistica", "⚽": "efisica", "💛": "etica", "🕊": "religiosa",
  };
  var SEL = ".materia-home-icono, .materia-icono, .materia-icono-mini";

  function svgDe(id) {
    return '<svg class="ico-svg" ' + NS + ' viewBox="0 0 64 64" aria-hidden="true" focusable="false">' + ICONOS[id] + "</svg>";
  }
  function mejorar(raiz) {
    if (!raiz || !raiz.querySelectorAll) return;
    var lista = raiz.matches && raiz.matches(SEL) ? [raiz] : [];
    var hijos = raiz.querySelectorAll(SEL);
    for (var i = 0; i < hijos.length; i++) lista.push(hijos[i]);
    for (var j = 0; j < lista.length; j++) {
      var n = lista[j];
      if (n.getAttribute("data-alg")) continue;
      var id = EMOJI[(n.textContent || "").replace(/\uFE0F/g, "").trim()];
      if (!id) continue;
      n.innerHTML = svgDe(id);
      n.setAttribute("data-alg", "1");
      n.classList.add("con-svg");
      n.setAttribute("aria-hidden", "true");
    }
  }

  var pendientes = [];
  var programado = false;
  function encolar(n) {
    pendientes.push(n);
    if (programado) return;
    programado = true;
    requestAnimationFrame(function () {
      programado = false;
      var lote = pendientes;
      pendientes = [];
      try { for (var i = 0; i < lote.length; i++) mejorar(lote[i]); } catch (e) {}
    });
  }
  /* un solo observador en toda la app: se engancha al registro de tema-infantil.js */
  var main = document.querySelector("main.contenedor");
  if (window.ALGEB && typeof window.ALGEB.alAnadir === "function") {
    window.ALGEB.alAnadir(function (n) { encolar(n); });
  } else if (main && typeof MutationObserver === "function") {
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++)
        for (var j = 0; j < ms[i].addedNodes.length; j++)
          if (ms[i].addedNodes[j].nodeType === 1) encolar(ms[i].addedNodes[j]);
    }).observe(main, { childList: true, subtree: true });
  }
  try { mejorar(document); } catch (e) {}

  /* ---------- Navegación inferior (móvil) ---------- */
  var S = 'stroke="#26364a" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"';
  var NAV = [
    {
      id: "inicio", texto: "Inicio", f: "#fff1c2", c: "#e8a900",
      pantallas: ["home"],
      svg: '<path d="M4 15L16 4l12 11v13H4z" fill="#ffd23f" ' + S + '/><rect x="13" y="18" width="7" height="10" rx="2" fill="#ff8a3c" ' + S + '/>',
      ir: function () { var b = document.getElementById("btn-inicio"); if (b) b.click(); },
    },
    {
      id: "mundos", texto: "Mundos", f: "#dcf4ff", c: "#2f80ed",
      pantallas: ["grados", "materias", "materia", "tema", "repaso"],
      svg: '<circle cx="16" cy="16" r="9" fill="#4cc9f0" ' + S + '/><ellipse cx="16" cy="16" rx="14" ry="4.5" transform="rotate(-20 16 16)" fill="none" ' + S + '/><circle cx="26" cy="9" r="2.4" fill="#ff6b8b"/>',
      ir: function () {
        var C = window.CORE;
        if (C && C.Store && C.Store.hayPerfiles && !C.Store.hayPerfiles()) {
          var p = document.getElementById("btn-perfil");
          if (p) p.click();
          return;
        }
        if (C && C.Nav) { if (C.Sfx && C.Sfx.clic) C.Sfx.clic(); C.Nav.ir("materias"); }
      },
    },
    {
      id: "aventura", texto: "Aventura", f: "#ffe9d6", c: "#e8590c",
      pantallas: ["aventura", "mundo", "mision", "misiones_av"],
      svg: '<path d="M3 8l8-3 10 3 8-3v19l-8 3-10-3-8 3z" fill="#fff6dc" ' + S + '/><path d="M11 5v19M21 8v19" fill="none" ' + S + '/><circle cx="16" cy="14" r="2.6" fill="#ef476f"/>',
      ir: function () { var b = document.getElementById("btn-aventura"); if (b) b.click(); },
    },
    {
      id: "personaje", texto: "Mi personaje", f: "#efe1ff", c: "#8a4fe0",
      pantallas: ["aventurero", "armario"],
      svg: '<circle cx="16" cy="16" r="12" fill="#ffd9a8" ' + S + '/><circle cx="12" cy="14" r="1.8" fill="#26364a"/><circle cx="20" cy="14" r="1.8" fill="#26364a"/><path d="M11 19c3 4 7 4 10 0" fill="none" ' + S + '/><path d="M5 11c2-8 20-8 22 0z" fill="#a855f7" ' + S + '/>',
      ir: function () { var b = document.getElementById("btn-aventurero"); if (b) b.click(); },
    },
  ];

  var indiceActivo = 0;
  /* La pastilla se coloca midiendo el botón activo (más fiable que calcular con porcentajes
     en cualquier ancho, tipografía u orientación). Sin JS queda el cálculo de respaldo del CSS. */
  function posicionarPastilla() {
    var barra = document.getElementById("nav-inferior");
    if (!barra) return;
    var b = barra.querySelectorAll("button")[indiceActivo];
    if (!b || !b.offsetWidth) return; /* la barra está oculta: se mide al volver a mostrarse */
    barra.style.setProperty("--px", b.offsetLeft + "px");
    barra.style.setProperty("--pw", b.offsetWidth + "px");
  }
  function marcarNav(id) {
    var barra = document.getElementById("nav-inferior");
    if (!barra) return;
    var botones = barra.querySelectorAll("button");
    for (var i = 0; i < NAV.length; i++) {
      var activo = NAV[i].pantallas.indexOf(id) !== -1;
      if (activo) {
        botones[i].setAttribute("aria-current", "page");
        indiceActivo = i;
        /* la pastilla de color se desliza hasta el botón activo (solo transform en el CSS) */
        barra.style.setProperty("--i", String(i));
        barra.style.setProperty("--pf", NAV[i].f);
        barra.style.setProperty("--pc", NAV[i].c);
      } else botones[i].removeAttribute("aria-current");
    }
    posicionarPastilla();
  }
  var midiendo = false;
  function medirLuego() {
    if (midiendo) return;
    midiendo = true;
    requestAnimationFrame(function () { midiendo = false; posicionarPastilla(); });
  }
  window.addEventListener("resize", medirLuego);
  window.addEventListener("orientationchange", medirLuego);
  if (document.fonts && document.fonts.ready && document.fonts.ready.then) document.fonts.ready.then(medirLuego);
  function construirNav() {
    if (document.getElementById("nav-inferior")) return;
    var nav = document.createElement("nav");
    nav.id = "nav-inferior";
    nav.setAttribute("aria-label", "Navegación principal");
    NAV.forEach(function (it) {
      var b = document.createElement("button");
      b.type = "button";
      b.style.setProperty("--f", it.f);
      b.style.setProperty("--c", it.c);
      b.innerHTML = '<svg ' + NS + ' viewBox="0 0 32 32" aria-hidden="true" focusable="false">' + it.svg + "</svg><span>" + it.texto + "</span>";
      b.addEventListener("click", it.ir);
      nav.appendChild(b);
    });
    document.body.appendChild(nav);
    document.body.classList.add("con-nav-inferior");
    marcarNav("home");
  }
  construirNav();
  document.addEventListener("nav:cambio", function (e) {
    marcarNav(e && e.detail && e.detail.id);
  });

  /* ---------- Actualización suave ----------
     Cuando llega una versión nueva (el service worker toma el control), la página se
     recarga sola la próxima vez que se vuelve a la portada: nunca en medio de un
     ejercicio, y el progreso ya está guardado. La primera instalación no recarga. */
  if (typeof navigator !== "undefined" && navigator.serviceWorker) {
    var teniaControl = !!navigator.serviceWorker.controller;
    var recargaPendiente = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (!teniaControl) { teniaControl = true; return; }
      recargaPendiente = true;
    });
    document.addEventListener("nav:cambio", function (e) {
      if (recargaPendiente && e && e.detail && e.detail.id === "home") {
        recargaPendiente = false;
        window.location.reload();
      }
    });
  }

  /* ---------- Pantalla de carga ---------- */
  function quitarCarga() {
    var c = document.getElementById("carga-inicial");
    if (!c) return;
    c.classList.add("salida");
    setTimeout(function () { if (c.parentNode) c.parentNode.removeChild(c); }, 450);
  }
  if (document.readyState === "complete") quitarCarga();
  else window.addEventListener("load", quitarCarga);
  setTimeout(quitarCarga, 6000);
})();
