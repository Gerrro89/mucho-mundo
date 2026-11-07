/* =========================================================
   PROFESOR VIRTUAL
   Compañero docente que acompaña al niño en las lecciones de
   currículo (temas, unidades y repasos). No es IA externa:
   usa la síntesis de voz del navegador ya configurada en el
   proyecto, con una VOZ PROPIA (más grave y tranquila que la
   de la mascota) y una burbujita de texto para quien no
   pueda oír o tenga el sonido apagado.
   ---------------------------------------------------------
   API:
     PROFE.decir(texto)          habla con su voz
     PROFE.burbuja(zona, texto)  muestra la burbujita
     PROFE.mensajito(zona, txt)  burbuja + voz
     PROFE.bienvenida(t)         al entrar a un tema
     PROFE.comoSeHace(t)         explica las 4 fases
     PROFE.tocaAhora(zona)       sugerencia en pantalla_materia
     PROFE.consejoFinal(zona, pasaste, refuerzos)
   ========================================================= */
window.PROFE = (function () {
  "use strict";
  const C = window.CORE;

  let tarjeta = null;
  let temporizador = null;

  function decir(texto, opc) {
    opc = opc || {};
    try {
      Voz.decir(String(texto || ""), Object.assign({ pitch: 0.92 }, opc));
    } catch (e) {}
  }

  function quitar() {
    if (tarjeta && tarjeta.parentNode) tarjeta.parentNode.removeChild(tarjeta);
    tarjeta = null;
    if (temporizador) {
      clearTimeout(temporizador);
      temporizador = null;
    }
  }

  /* burbujita visual dentro de una pantalla */
  function burbuja(zona, texto) {
    if (!zona) return null;
    quitar();
    tarjeta = document.createElement("div");
    tarjeta.className = "profe-burbuja";
    const cara = document.createElement("span");
    cara.className = "profe-cara";
    cara.textContent = "🧑‍🏫";
    const cuerpo = document.createElement("div");
    cuerpo.className = "profe-cuerpo";
    cuerpo.appendChild(document.createElement("strong")).textContent = "Tu profe dice";
    const p = document.createElement("p");
    p.textContent = String(texto || "");
    cuerpo.appendChild(p);
    const cerrar = document.createElement("button");
    cerrar.type = "button";
    cerrar.className = "profe-cerrar";
    cerrar.textContent = "✕";
    cerrar.setAttribute("aria-label", "Cerrar el consejo del profe");
    cerrar.onclick = function () {
      quitar();
    };
    tarjeta.appendChild(cara);
    tarjeta.appendChild(cuerpo);
    tarjeta.appendChild(cerrar);
    /* al inicio de la zona de contenido */
    zona.insertBefore(tarjeta, zona.firstChild);
    /* se queda un rato largo: los niños leen despacio */
    temporizador = setTimeout(quitar, 12000);
    return tarjeta;
  }

  function mensajito(zona, texto, hablarDirecto) {
    burbuja(zona, texto);
    decir(hablarDirecto || texto);
  }

  /* ---------- Ayudas pedagógicas ---------- */

  function bienvenida(t) {
    const cuerpo = document.getElementById("contenido-tema");
    if (!cuerpo || !t) return;
    const frases = [
      "Hola. Hoy vamos a aprender: " + (t.objetivo || t.nombre) + ". Primero lee las tarjetas con calma.",
      "Este tema se llama «" + t.nombre + "». La meta es: " + (t.objetivo || "") + " Vamos paso a paso.",
    ];
    const f = frases[Math.floor(Math.random() * frases.length)];
    mensajito(cuerpo, f);
  }

  function comoSeHace(t) {
    const cuerpo = document.getElementById("contenido-tema");
    if (!cuerpo) return;
    const texto =
      "Así se trabaja el tema «" + t.nombre + "»: 1) Descubrir: lee las tarjetas nuevas. " +
      "2) Practicar: haz los ejercicios. 3) Jugar: un juego con lo aprendido. " +
      "4) Demostrar: responde la evaluación para ganar tus estrellas. Puedes hacer las fases en orden.";
    mensajito(cuerpo, texto);
  }

  function tocarAhora(t) {
    const cuerpo = document.getElementById("contenido-materia");
    if (!cuerpo || !t) return;
    mensajito(cuerpo, "Mi recomendación: empieza por «" + t.nombre + "». Cuando lo termines, sigue con el siguiente.");
  }

  function consejoFinal(zona, pasaste, refuerzos) {
    if (!zona) return;
    let texto;
    if (pasaste) {
      texto = refuerzos && refuerzos.length
        ? "¡Muy bien! Aunque salió casi todo perfecto, repasa «" + refuerzos[0] + "» para dominar el tema completo."
        : "¡Excelente trabajo! Dominas esta unidad. Puedes avanzar con confianza.";
    } else {
      const nombre = refuerzos && refuerzos.length ? refuerzos.slice(0, 2).join(" y ") : "";
      texto = "Buen intento. Para mejorar: repasa " + nombre + " y vuelve al repaso. ¡Los errores ayudan a aprender!";
    }
    mensajito(zona, texto);
  }

  document.addEventListener("nav:cambio", quitar);
  /* La navegación emite un evento en core.js; además la burbuja
     muere sola con su temporizador de 12 segundos. */

  return {
    decir: decir,
    burbuja: burbuja,
    mensajito: mensajito,
    bienvenida: bienvenida,
    comoSeHace: comoSeHace,
    tocarAhora: tocarAhora,
    consejoFinal: consejoFinal,
    quitar: quitar,
  };
})();
