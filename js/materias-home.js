/* =========================================================
   MATERIAS EN EL INICIO — Mucho Mundo (Aventura de Letras y Números)
   Añade a la página de inicio:
     1. La franja del grado actual (con botón para cambiarlo).
     2. El catálogo visual de las 10 materias del colegio.
     3. La recomendación del siguiente tema del colegio.
   Además crea la pantalla "grados" para elegir o cambiar el
   grado de primaria (1° a 5°).

   No reemplaza ninguna pantalla: usa el currículo DBA y el
   progreso que ya existen (CURRICULO y CURRICULO_UI).
   ========================================================= */

window.MATERIAS_HOME = (function () {
  "use strict";

  const C = window.CORE;
  const CUR = window.CURRICULO;

  /* Grado elegido por el niño (se guarda en el progreso del perfil) */
  function gradoActual() {
    const d = C.Store.data;
    return d.grado || null;
  }

  /* Materias activadas en el perfil (por defecto, todas) */
  function materiasElegidas() {
    const d = C.Store.data;
    if (d.materias && d.materias.length) return d.materias.slice();
    return CUR.MATERIAS.map(function (m) { return m.id; });
  }

  /* Tema pendiente nº1 de este grado en cualquiera de las materias */
  function siguienteTemaColegio() {
    const grado = gradoActual();
    if (!grado || !window.CURRICULO_UI) return null;
    const CUI = window.CURRICULO_UI;
    const elegidas = materiasElegidas();
    for (let i = 0; i < elegidas.length; i++) {
      const tema = CUI.siguienteTemaPendiente(grado, elegidas[i]);
      if (tema) return tema;
    }
    return null;
  }

  /* =========================================================
     FRANJA DEL GRADO — siempre visible bajo los indicadores
     ========================================================= */
  function seccionGrado(cont) {
    const grado = gradoActual();
    const franja = document.createElement("div");
    franja.className = "franja-grado card-suave";

    if (!grado) {
      franja.innerHTML =
        "<span class='franja-grado-icono' aria-hidden='true'>🎓</span>" +
        "<span class='franja-grado-texto'><strong>Elige tu grado</strong>" +
        "<small>Así abres las materias de tu colegio: primero, segundo, tercero, cuarto o quinto.</small></span>";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn grande primario";
      btn.textContent = "🎯 Elegir mi grado";
      btn.onclick = function () {
        C.Sfx.clic();
        C.Voz.decir("Elige tu grado de primaria.");
        C.Nav.ir("grados");
      };
      franja.appendChild(btn);
      cont.appendChild(franja);
      return;
    }

    const g = CUR.gradoPorId(grado);
    const nombre = g ? g.nombre : null;
    /* ¿Cuántos temas tiene el grado? ¿Cuántos están hechos? */
    let hechos = 0, total = 0;
    try {
      materiasElegidas().forEach(function (m) {
        const pr = window.CURRICULO_UI.progresoMateria(grado, m);
        hechos += pr.hechos;
        total += pr.total;
      });
    } catch (e) {}

    franja.innerHTML =
      "<span class='franja-grado-icono' aria-hidden='true'>🎓</span>" +
      "<span class='franja-grado-texto'><strong>" + (nombre || "Mi grado") + " de primaria</strong>" +
      "<small>" + hechos + " de " + total + " temas del colegio completados</small></span>";

    const btnVer = document.createElement("button");
    btnVer.type = "button";
    btnVer.className = "btn mediano";
    btnVer.textContent = "📚 Ver materias";
    btnVer.onclick = function () {
      C.Sfx.clic();
      C.Nav.ir("materias");
    };
    franja.appendChild(btnVer);

    const btnCambiar = document.createElement("button");
    btnCambiar.type = "button";
    btnCambiar.className = "btn mediano";
    btnCambiar.textContent = "🔄 Cambiar grado";
    btnCambiar.onclick = function () {
      C.Sfx.clic();
      C.Nav.ir("grados");
    };
    franja.appendChild(btnCambiar);

    cont.appendChild(franja);
  }

  /* =========================================================
     CATÁLOGO DE MATERIAS — las 10 asignaturas a la vista
     ========================================================= */
  function seccionMaterias(cont) {
    const grado = gradoActual();
    if (!grado) return; /* sin grado, la franja guía al niño */

    const enc = document.createElement("h2");
    enc.className = "subtitulo";
    enc.textContent = "🏫 Materias de tu grado — toca una para aprender";
    cont.appendChild(enc);

    const rejilla = document.createElement("div");
    rejilla.className = "rejilla-materias-home";
    const elegidas = materiasElegidas();

    CUR.MATERIAS.forEach(function (m) {
      if (elegidas.indexOf(m.id) < 0) return;
      const pr = window.CURRICULO_UI.progresoMateria(grado, m.id);
      const tarjeta = document.createElement("button");
      tarjeta.type = "button";
      tarjeta.className = "tarjeta-materia-home";
      tarjeta.style.setProperty("--mc", m.color || "#4cc9f0");
      tarjeta.setAttribute("aria-label", m.nombre + ". " + m.desc);
      tarjeta.onmouseenter = function () {
        C.Voz.decir("Materia " + m.nombre + ". " + m.desc);
      };
      tarjeta.innerHTML =
        "<span class='materia-home-icono' aria-hidden='true'>" + (m.icono || "📘") + "</span>" +
        "<span class='materia-home-nombre'>" + (m.corto || m.nombre) + "</span>" +
        "<span class='barra barra-mini'><i style='width:" + pr.pct + "%'></i></span>" +
        "<small>" + (pr.hechos ? pr.hechos + " de " + pr.total + " temas" : "¡Empieza hoy!") + "</small>";
      tarjeta.onclick = function () {
        C.Sfx.clic();
        C.Nav.ir("materia", { grado: grado, materia: m.id });
      };
      rejilla.appendChild(tarjeta);
    });

    cont.appendChild(rejilla);

    /* Recomendación concreta: el primer tema pendiente del grado */
    const tema = siguienteTemaColegio();
    if (tema) {
      /* listaConId devuelve temas sin campo materia: se deduce del id */
      const idMateria = (typeof tema.id === "string" ? tema.id.split("-")[1] : "") || tema.materia;
      const m = CUR.materiaPorId(idMateria);
      const rec = document.createElement("button");
      rec.type = "button";
      rec.className = "recomendacion-colegio card-suave";
      rec.innerHTML =
        "<span class='reco-icono' aria-hidden='true'>🚀</span>" +
        "<span class='reco-texto'><strong>Siguiente tema para ti</strong>" +
        "<small>" + (m ? m.nombre : "") + " · " + tema.nombre + "</small></span>" +
        "<span class='btn-continuar'>Continuar ➜</span>";
      rec.onmouseenter = function () {
        C.Voz.decir("Tu siguiente tema es " + tema.nombre + " de " + (m ? m.nombre : "una materia") + ".");
      };
      rec.onclick = function () {
        C.Sfx.clic();
        C.Nav.ir("tema", { id: tema.id });
      };
      cont.appendChild(rec);
    }
  }

  /* =========================================================
     PANTALLA GRADOS — elegir o cambiar el grado
     ========================================================= */
  function pantalla_grados() {
    const cuerpo = document.getElementById("contenido-grados");
    if (!cuerpo) return;
    cuerpo.innerHTML = "";

    const actual = gradoActual();

    const cab = document.createElement("div");
    cab.className = "cabecera-pantalla";
    cab.innerHTML = "<h1>🎓 Mi grado</h1><p>Elige en qué curso de primaria estás. Puedes cambiarlo cuando quieras.</p>";
    cuerpo.appendChild(cab);

    const rejilla = document.createElement("div");
    rejilla.className = "rejilla-grados";

    CUR.GRADOS.forEach(function (g) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tarjeta-grado" + (actual === g.id ? " activa" : "");
      btn.style.setProperty("--c", g.color || "#06d6a0");
      btn.setAttribute("aria-label", "Grado " + g.n + " de primaria. " + (g.desc || ""));
      btn.innerHTML =
        "<span class='grado-icono' aria-hidden='true'>" + (g.icono || "🎒") + "</span>" +
        "<strong>" + g.titulo + "</strong>" +
        "<small>" + (g.desc || "") + "</small>" +
        (actual === g.id ? "<span class='chip-grado-actual'>Actual ✔</span>" : "");
      btn.onclick = function () {
        C.Sfx.clic();
        if (gradoActual() !== g.id) {
          C.Store.data.grado = g.id;
          /* mantener el perfil sincronizado con lo que ve el panel adulto */
          if (C.Store.perfilActivo && C.Store.perfilActivo.grado !== g.id) {
            C.Store.perfilActivo.grado = g.id;
          }
          C.Store.save();
        }
        C.Voz.decir("Estás en " + g.titulo + ". Aquí están tus materias.");
        C.Nav.reemplazar("materias");
      };
      rejilla.appendChild(btn);
    });

    cuerpo.appendChild(rejilla);

    const volver = document.createElement("button");
    volver.type = "button";
    volver.className = "btn mediano";
    volver.textContent = "← Volver";
    volver.onclick = function () {
      C.Sfx.clic();
      C.Nav.atras();
    };
    cuerpo.appendChild(volver);
  }

  /* Enter del botón principal del inicio: primero el colegio,
     después la aventura de lectura y números (comportamiento de
     antes: no se pierde nada). */
  function botónPrincipal() {
    const tema = siguienteTemaColegio();
    if (tema) return "tema:" + tema.id;
    return null;
  }

  /* =========================================================
     CONTINUAR LA ÚLTIMA LECCIÓN DEL COLEGIO — tarjeta que sigue
     el hilo del último tema terminado: propone el siguiente tema
     pendiente de esa misma materia (o el primero del grado).
     ========================================================= */
  function anexarContinuacion(cont) {
    if (!window.CURRICULO_UI) return false;
    const CUI = window.CURRICULO_UI;
    const d = C.Store.data;
    const grado = gradoActual();
    if (!grado) return false;

    let objetivo = null;
    const ultimo = d.ultimoTema;
    if (ultimo && typeof ultimo === "string") {
      const lt = CUR.temaPorId(ultimo);
      if (lt && lt.grado === grado) {
        /* el siguiente paso dentro de la misma materia */
        objetivo = CUI.siguienteTemaPendiente(lt.grado, lt.materia);
      }
    }
    if (!objetivo) objetivo = siguienteTemaColegio();
    if (!objetivo) return false;

    const idMateria = (typeof objetivo.id === "string" ? objetivo.id.split("-")[1] : "") || objetivo.materia;
    const m = CUR.materiaPorId(idMateria);
    const pr = CUI.progresoMateria(grado, idMateria);

    const enc = document.createElement("h2");
    enc.className = "subtitulo";
    enc.textContent = "🎓 ¡Sigamos tu lección del colegio!";
    cont.appendChild(enc);

    const zona = document.createElement("div");
    zona.className = "zona-continuar";
    const card = document.createElement("button");
    card.type = "button";
    card.className = "tarjeta-continuar";
    card.style.setProperty("--c", m ? m.color : "#4cc9f0");
    card.onmouseenter = function () {
      C.Voz.decir("Continuar " + objetivo.nombre + " de " + (m ? m.nombre : "una materia") + ".");
    };
    card.innerHTML =
      "<div class='continuar-info'>" +
      "<strong>" + (m ? m.icono : "📘") + " " + objetivo.nombre + "</strong>" +
      "<small>" + (m ? m.nombre : "") + " · " + pr.hechos + " temas de " + pr.total + "</small>" +
      "<div class='barra'><i style='width:" + pr.pct + "%'></i></div>" +
      "</div>" +
      "<span class='btn-continuar'>Continuar ➜</span>";
    card.onclick = function () {
      C.Sfx.clic();
      C.Nav.ir("tema", { id: objetivo.id });
    };
    zona.appendChild(card);
    cont.appendChild(zona);
    return true;
  }

  window.pantalla_grados = pantalla_grados;

  return {
    render: function (cont) {
      seccionGrado(cont);
      seccionMaterias(cont);
    },
    anexarContinuacion: anexarContinuacion,
    siguienteTemaColegio: siguienteTemaColegio,
    botónPrincipal: botónPrincipal,
  };
})();
