/* =========================================================
   WEB LEER — Mi Aventurero: progreso y recompensas
   ---------------------------------------------------------
   Une el personaje, el armario y las misiones:

     · Guarda por perfil el personaje equipado, los accesorios
       desbloqueados, la combinación favorita y el progreso
       de las misiones (todo en Store.data.aventurero).
     · Equipa y quita accesorios respetando que en cada
       categoría solo cabe uno.
     · Al terminar una actividad revisa las misiones y
       concede la recompensa SI Y SÓLO SI no estaba entregada
       ya (idempotente: nunca se duplica).
     · Valida los datos guardados (pueden venir de una
       versión anterior o estar corruptos).

   No toca ninguna clave de almacenamiento existente.
   ========================================================= */

window.AVENTURERO = (function () {
  "use strict";

  const VERSION_ESQUEMA = 1;

  /* ---------------------------------------------------------
     Datos y validación
     --------------------------------------------------------- */
  function _d() {
    try {
      const d = CORE.Store.data;
      if (!d) return null;
      if (!d.aventurero || typeof d.aventurero !== "object") {
        d.aventurero = { v: VERSION_ESQUEMA, desbloqueados: [], equipado: {}, favorito: null, misiones: {}, panelAbierto: true };
      }
      const a = d.aventurero;
      if (!Array.isArray(a.desbloqueados)) a.desbloqueados = [];
      if (!a.equipado || typeof a.equipado !== "object") a.equipado = {};
      if (!a.misiones || typeof a.misiones !== "object") a.misiones = {};
      if (a.panelAbierto === undefined) a.panelAbierto = true;
      if (a.v !== VERSION_ESQUEMA) a.v = VERSION_ESQUEMA;
      /* Descarta ids de accesorios que ya no existen */
      a.desbloqueados = a.desbloqueados.filter((id) => !!window.AV_ACCESORIOS.info(id));
      /* Descarta equips inválidos o bloqueados */
      Object.keys(a.equipado).forEach((cat) => {
        const acc = window.AV_ACCESORIOS.info(a.equipado[cat]);
        if (!acc || acc.categoria !== cat || a.desbloqueados.indexOf(a.equipado[cat]) === -1) {
          delete a.equipado[cat];
        }
      });
      return a;
    } catch (e) {
      return null;
    }
  }

  function guardar() {
    try {
      CORE.Store.save();
      return true;
    } catch (e) {
      return false;
    }
  }

  /* ---------------------------------------------------------
     Estado del personaje
     --------------------------------------------------------- */
  function equipado() {
    const a = _d();
    /* Devuelve una COPIA: desde fuera no se puede tocar el estado
       real (ni saltarse la comprobación de bloqueados). */
    if (!a) return {};
    return JSON.parse(JSON.stringify(a.equipado || {}));
  }

  function desbloqueados() {
    const a = _d();
    return a ? a.desbloqueados.slice() : [];
  }

  function estaDesbloqueado(id) {
    return desbloqueados().indexOf(id) !== -1;
  }

  function estaEquipado(id) {
    const a = _d();
    if (!a) return false;
    return Object.keys(a.equipado).some((cat) => a.equipado[cat] === id);
  }

  /* ---------------------------------------------------------
     Equipar / quitar
     --------------------------------------------------------- */
  function equipar(id) {
    const acc = window.AV_ACCESORIOS.info(id);
    if (!acc) return { ok: false, motivo: "no-existe" };
    const a = _d();
    if (!a) return { ok: false, motivo: "sin-datos" };
    /* Un accesorio bloqueado NO se puede equipar (ni por Trickery) */
    if (a.desbloqueados.indexOf(id) === -1) return { ok: false, motivo: "bloqueado" };
    /* Una sola pieza por categoría: se cambia la de esa ranura */
    a.equipado[acc.categoria] = id;
    guardar();
    return { ok: true, accesorio: acc };
  }

  function quitar(id) {
    const acc = window.AV_ACCESORIOS.info(id);
    if (!acc) return { ok: false };
    const a = _d();
    if (!a) return { ok: false };
    if (a.equipado[acc.categoria] === id) delete a.equipado[acc.categoria];
    guardar();
    return { ok: true };
  }

  function quitarTodo() {
    const a = _d();
    if (!a) return { ok: false };
    a.equipado = {};
    guardar();
    return { ok: true };
  }

  /* Guardar la combinación actual como favorita */
  function guardarFavorito() {
    const a = _d();
    if (!a) return { ok: false };
    a.favorito = JSON.parse(JSON.stringify(a.equipado));
    guardar();
    return { ok: true, favorito: a.favorito };
  }

  function hayFavorito() {
    const a = _d();
    return !!(a && a.favorito && Object.keys(a.favorito).length);
  }

  /* Ponerse la combinación guardada */
  function usarFavorito() {
    const a = _d();
    if (!a || !a.favorito) return { ok: false };
    const eq = {};
    Object.keys(a.favorito).forEach((cat) => {
      const id = a.favorito[cat];
      if (a.desbloqueados.indexOf(id) !== -1 && window.AV_ACCESORIOS.info(id)) eq[cat] = id;
    });
    a.equipado = eq;
    guardar();
    return { ok: true, equipado: eq };
  }

  /* ---------------------------------------------------------
     Recompensas
     --------------------------------------------------------- */
  /* Concede un accesorio. Devuelve:
       { ok, nuevo:true/false, accesorio }               */
  function desbloquear(id) {
    const acc = window.AV_ACCESORIOS.info(id);
    if (!acc) return { ok: false, nuevo: false };
    const a = _d();
    if (!a) return { ok: false, nuevo: false };
    if (a.desbloqueados.indexOf(id) !== -1) {
      /* YA LO TENÍA: no se concede otra vez (idempotente) */
      return { ok: true, nuevo: false, accesorio: acc };
    }
    a.desbloqueados.push(id);
    guardar();
    return { ok: true, nuevo: true, accesorio: acc };
  }

  /* ---------------------------------------------------------
     Misiones
     --------------------------------------------------------- */
  function misionCompletada(id) {
    return window.AV_MISIONES.estaCompletada(id);
  }

  function misionesCompletadas() {
    return window.AV_MISIONES.misionesCompletadas();
  }

  function progresoMision(id) {
    return window.AV_MISIONES.progresoMision(id);
  }

  /* Marca una misión como completada y concede la recompensa.
     ES IDEMPOTENTE: si ya estaba completada, no vuelve a dar
     el accesorio. Devuelve la info de la recompensa.        */
  function completarMision(id) {
    const m = window.AV_MISIONES.info(id);
    if (!m) return null;
    const a = _d();
    if (!a) return null;

    const yaHecha = !!(a.misiones && a.misiones[id]);
    if (yaHecha) {
      /* No se vuelve a conceder nada */
      return { mission: m, yaCompletada: true, recompensa: null, nuevo: false };
    }

    a.misiones[id] = { fecha: Date.now() };
    let resRec = null;
    if (m.recompensa) {
      resRec = desbloquear(m.recompensa);
    }
    guardar();
    return {
      mission: m,
      yaCompletada: false,
      recompensa: resRec ? resRec.accesorio : null,
      nuevo: resRec ? resRec.nuevo : false,
    };
  }

  /* ---------------------------------------------------------
     Misiones completadas a la espera de mostrar
     (para poder celebrar justo después de la actividad)
     --------------------------------------------------------- */
  let pendientes = [];

  function pendientesMisiones() {
    return pendientes.slice();
  }

  function limpiarPendientes() {
    pendientes = [];
  }

  /* ---------------------------------------------------------
     Revisión periódica de las misiones
     Se llama al terminar cada actividad (desde core.js) para
     comprobar si algún objetivo ya se cumple.
     ES IDEMPOTENTE: completar una misión ya completada no
     concede nada nuevo.
     Devuelve la lista de misiones recién completadas.
     --------------------------------------------------------- */
  function revisarMisiones() {
    const nuevos = [];
    const fijas = window.AV_MISIONES.LISTA;
    const dinamicas = window.AV_MISIONES.repasoDinamicas();
    const todas = fijas.concat(dinamicas);

    todas.forEach((m) => {
      if (!window.AV_MISIONES.disponible(m.id)) return;
      if (misionCompletada(m.id)) return;
      const prog = window.AV_MISIONES.progresoMision(m.id);
      if (!prog.cumplida) return;
      const r = completarMision(m.id);
      if (r && !r.yaCompletada) {
        nuevos.push(r);
        pendientes.push(r);
      }
    });

    return nuevos;
  }

  /* ---------------------------------------------------------
     Vista de una pieza: estado + cómo conseguirla
     --------------------------------------------------------- */
  function estadoAccesorio(id) {
    const acc = window.AV_ACCESORIOS.info(id);
    if (!acc) return null;
    const desbloq = estaDesbloqueado(id);
    const cond = acc.condicion || null;
    const prog = cond ? window.AV_MISIONES.evaluar(cond) : null;
    return {
      accesorio: acc,
      desbloqueado: desbloq,
      equipado: estaEquipado(id),
      condicion: cond,
      progreso: prog,
    };
  }

  /* Texto corto que explica cómo conseguir un accesorio */
  function comoConseguir(id) {
    const acc = window.AV_ACCESORIOS.info(id);
    if (!acc) return "";
    const cond = acc.condicion;
    if (!cond) return "Vuelve pronto.";
    if (cond.tipo === "aciertos") return "Acierta " + cond.n + " veces en " + cond.claves.join(", ") + ".";
    if (cond.tipo === "misiones") return "Termina " + cond.n + (cond.n === 1 ? " misión del aventurero" : " misiones del aventurero") + ".";
    if (cond.tipo === "nivel") return "Domina el nivel " + cond.id + " hasta llegar al " + Math.round((cond.dominio || 0.7) * 100) + "%.";
    if (cond.tipo === "trazos") return "Traza " + cond.n + " letras.";
    if (cond.tipo === "escuchas") return "Escucha " + cond.n + " frases o cuentos.";
    if (cond.tipo === "estrellas") return "Consigue " + cond.n + " estrellas.";
    if (cond.tipo === "actividades") return "Completa " + cond.n + " actividades de " + (cond.area === "mate" ? "matemáticas" : "lectura") + ".";
    return "Sigue practicando.";
  }

  /* ---------------------------------------------------------
     Estado general para la pantalla principal
     --------------------------------------------------------- */
  function resumen() {
    const total = window.AV_ACCESORIOS.LISTA.length;
    const tengo = desbloqueados().length;
    const misiones = window.AV_MISIONES.LISTA.length;
    const hechas = misionesCompletadas();
    return {
      total: total,
      desbloqueados: tengo,
     equipado: Object.keys(equipado()).length,
      misiones: misiones,
      misionesHechas: hechas,
      siguiente: window.AV_MISIONES.LISTA.filter(
        (m) => window.AV_MISIONES.disponible(m.id) && !misionCompletada(m.id)
      )[0] || null,
    };
  }

  return {
    VERSION_ESQUEMA,
    estado: _d,
    equipado,
    desbloqueados,
    estaDesbloqueado,
    estaEquipado,
    equipar,
    quitar,
    quitarTodo,
    guardarFavorito,
    hayFavorito,
    usarFavorito,
    desbloquear,
    misionCompletada,
    misionesCompletadas,
    progresoMision,
    completarMision,
    revisarMisiones,
    pendientesMisiones,
    limpiarPendientes,
    estadoAccesorio,
    comoConseguir,
    resumen,
  };
})();
