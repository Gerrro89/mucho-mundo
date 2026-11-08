/* =========================================================
   CUENTAS DE USUARIO (locales, con respaldo del progreso)
   =========================================================
   ¿Por qué existe este módulo? Cuando el sitio se actualiza
   (o se publica en otra dirección, o se limpia el navegador)
   pueden perderse los perfiles guardados en localStorage.
   La cuenta actúa como una COPIA DE SEGURIDAD cuidada por un
   adulto responsable:

     · Cada vez que la app guarda (Store.save), la cuenta hace
       una copia completa de todos los perfiles y su progreso.
     · Si al abrir la web hay sesión activa y los perfiles ya
       no están, la copia se restaura sola.
     · La copia puede DESCARGARSE en un archivo y VOLVERSE
       A IMPORTAR (por ejemplo, en un equipo nuevo o cuando
       cambia la dirección del sitio: ahí la cuenta no viaja,
       pero el archivo sí).

   La cuenta es LOCAL: vive en `webleer_cuentas_v1`. Opcionalmente
   se AMPARRA a un Gmail del adulto (entrando/registrándose con
   Google): ahí la copia del progreso también se guarda en la
   nube del proyecto (Firestore) con reglas que solo permiten
   leer/escribir al dueño de esa cuenta de Google.
   Crear una cuenta exige el ACEPTO
   de un adulto responsable (pantalla de registro).

   Claves propias (no chocan con las de core.js):
     webleer_cuentas_v1   · cuenta(s) y sesión
     webleer_perfiles_v1  · lista de perfiles (misma que core.js)
     webleer_progreso_v3  · progreso por perfil (misma que core.js)
     webleer_papelera_v1  · papelera de perfiles (misma que core.js)
   ------------------------------------------------------------- */
window.CUENTAS = (function () {
  "use strict";
  const C = window.CORE;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) =>
    Array.prototype.slice.call((root || document).querySelectorAll(sel));
  const el = C.el;

  const CLAVE = "webleer_cuentas_v1";
  const K_PERFILES = "webleer_perfiles_v1";
  const K_PROGRESO = "webleer_progreso_v3";
  const K_PAPELERA = "webleer_papelera_v1";

  /* Logo oficial de Gmail (img/marca/gmail-logo.svg, en precache) */
  const LOGO_GMAIL =
    '<img src="img/marca/gmail-logo.svg" alt="Gmail" ' +
    'style="height:1.15em;width:auto;vertical-align:-0.22em;margin-right:2px" />';

  /* Producto y formato del archivo de respaldo
     (sirve para rechazar archivos que no son de esta app).
     El tipo nuevo es mucho-mundo-respaldo; se sigue aceptando
     el viejo (algebrario-respaldo) para que los respaldos
     descargados antes del cambio de nombre sigan entrando. */
  const TIPO_ARCHIVO = "mucho-mundo-respaldo";
  const TIPO_ARCHIVO_VIEJO = "algebrario-respaldo";
  const FORMATO = 1;

  /* ---------------- nube (Firebase) + Gmail --------------
     Las cuentas son locales, pero si el adulto lo prefiere
     puede amarrar la cuenta a su Gmail: entonces la copia del
     progreso TAMBIÉN se guarda en la nube del proyecto
     (Firestore), protegida con reglas que solo permiten leer
     y escribir al dueño de la cuenta de Google.
     Las claves de abajo son PÚBLICAS por diseño (Firebase las
     da para pegarlas en webs); la seguridad real la dan las
     reglas de Firestore. Con esto vacío, los botones de Gmail
     no aparecen y la web funciona igual que siempre.        */
  window.NUBE_CONFIG = window.NUBE_CONFIG || {
    apiKey: "AIzaSyDtzBs0LpD0BS2Vx_ojEjAV04yh44P-oSs",
    authDomain: "mucho-mundo-72df0.firebaseapp.com",
    projectId: "mucho-mundo-72df0",
    appId: "1:387097286593:web:a01cc05148521c44be0140",
  };

  /* ---------------- bodega ---------------- */
  function leer() {
    try {
      const raw = localStorage.getItem(CLAVE);
      if (raw) {
        const o = JSON.parse(raw);
        if (o && Array.isArray(o.lista)) {
          if (o.sesion === undefined) o.sesion = null;
          return o;
        }
      }
    } catch (e) {
      /* sin almacenamiento */
    }
    return { lista: [], sesion: null };
  }

  function escribir(o) {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(o));
      return true;
    } catch (e) {
      return false;
    }
  }

  const hay = () => leer().lista.length > 0;

  const porUsuario = (u) =>
    leer().lista.filter(
      (c) => String(c.usuario || "").toLowerCase() === String(u || "").toLowerCase()
    )[0] || null;

  /* La cuenta con sesión activa (o null). Si la sesión quedó
     apuntando a una cuenta eliminada, se limpia. */
  function sesion() {
    const o = leer();
    if (!o.sesion) return null;
    const c = porUsuario(o.sesion);
    if (!c) {
      o.sesion = null;
      escribir(o);
      return null;
    }
    return c;
  }

  /* ---------------- clave secreta (PIN de 4 números) ----------
     Igual que el PIN de adulto: ofuscación simple, no
     seguridad real. Solo ordena el uso.                      */
  function hashPin(pin) {
    const s = "webleer:cuenta:" + String(pin);
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = (((h << 5) + h) ^ s.charCodeAt(i)) >>> 0;
    return "h" + h.toString(36) + "x" + s.length;
  }

  function validarUsuario(u) {
    u = String(u || "").trim();
    if (u.length < 3) return "El usuario necesita al menos 3 letras.";
    if (u.length > 15) return "El usuario puede tener máximo 15 letras.";
    try {
      if (!/^[\p{L}\p{N} .\-_]+$/u.test(u))
        return "Usa letras, números, punto, guion o espacio.";
    } catch (e) {
      /* navegador viejo: validación suave */
    }
    return null;
  }

  /* ---------------- respaldo y restauración ---------------- */
  const clone = (x) => JSON.parse(JSON.stringify(x));

  function snapshot() {
    const meta = (() => {
      try {
        const raw = localStorage.getItem(K_PERFILES);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return null;
    })();
    const lista = meta && Array.isArray(meta.lista) ? clone(meta.lista) : [];
    const progresos = {};
    lista.forEach((p) => {
      try {
        const raw = localStorage.getItem(K_PROGRESO + ":" + p.id);
        if (raw) progresos[p.id] = raw;
      } catch (e) {}
    });
    let papelera = null;
    try {
      papelera = localStorage.getItem(K_PAPELERA);
    } catch (e) {}
    return {
      v: FORMATO,
      fecha: Date.now(),
      perfiles: lista,
      progresos: progresos,
      activo: (meta && meta.activo) || null,
      papelera: papelera || null,
    };
  }

  function restaurar(shot) {
    if (!shot || !Array.isArray(shot.perfiles)) return false;
    try {
      const lista = clone(shot.perfiles);
      localStorage.setItem(
        K_PERFILES,
        JSON.stringify({
          activo: shot.activo || (lista.length ? lista[lista.length - 1].id : null),
          lista: lista,
        })
      );
      Object.keys(shot.progresos || {}).forEach((id) => {
        if (typeof shot.progresos[id] === "string")
          localStorage.setItem(K_PROGRESO + ":" + id, shot.progresos[id]);
      });
      if (shot.papelera && typeof shot.papelera === "string")
        localStorage.setItem(K_PAPELERA, shot.papelera);
      else localStorage.removeItem(K_PAPELERA);
      C.Store.load();
      return true;
    } catch (e) {
      return false;
    }
  }

  /* Copia cada persistencia de la app a la cuenta activa */
  function autoRespaldo() {
    const o = leer();
    if (!o.sesion) return;
    const c = o.lista.filter(
      (x) => String(x.usuario).toLowerCase() === String(o.sesion).toLowerCase()
    )[0];
    if (!c) return;
    c.respaldo = snapshot();
    c.guardado = Date.now();
    escribir(o);
    /* si la cuenta está amarrada a un Gmail, la copia también
       viaja a la nube (con retardo; offline no pasa nada) */
    try {
      if (c.google) programarSubidaNube(5000);
    } catch (e) {}
  }

  /* Al abrir la web con sesión activa: si los perfiles ya no
     están (actualización, cambio de dirección del sitio,
     limpieza del navegador) los devuelve de la copia.   */
  function recuperarSiHaceFalta() {
    const c = sesion();
    if (!c || !c.respaldo || !c.respaldo.perfiles) return false;
    C.Store.load();
    if (C.Store.perfiles.length > 0) return false;
    const ok = restaurar(c.respaldo);
    if (ok) C.Store.save();
    return ok;
  }

  /* En qué pantalla comienza la app: LA CUENTA ES OBLIGATORIA.
     Sin sesión abierta, SIEMPRE se entra por la puerta de la
     cuenta (crear con adulto, entrar o importar copia). Con
     sesión abierta: home si hay perfiles, o crear el primero. */
  function arranque() {
    if (!sesion()) return "cuenta";
    return C.Store.hayPerfiles() ? "home" : "perfil";
  }

  /* ---------------- operaciones ---------------- */
  function crear(usuario, pin) {
    const o = leer();
    /* blindaje contra doble envío (teclado automático + botón):
       si ya existe, no duplica: solo reabre su sesión */
    const ya = porUsuario(usuario);
    if (ya) {
      o.sesion = ya.usuario;
      escribir(o);
      autoRespaldo();
      return ya;
    }
    const c = {
      usuario: String(usuario).trim(),
      hash: hashPin(pin),
      creado: Date.now(),
      guardado: 0,
      respaldo: null,
    };
    o.lista.push(c);
    o.sesion = c.usuario;
    escribir(o);
    autoRespaldo();
    return c;
  }

  function entrar(usuario, pin) {
    const c = porUsuario(usuario);
    if (!c) return false;
    if (String(c.hash) !== hashPin(pin)) return false;
    const o = leer();
    o.sesion = c.usuario;
    escribir(o);
    return true;
  }

  function salir() {
    const o = leer();
    o.sesion = null;
    escribir(o);
    /* también cerrar la sesión de Google en la web (la nube ya
       recibió su copia al día) */
    try {
      if (nubeEstado.auth) nubeEstado.auth.signOut();
      nubeEstado.usuario = null;
    } catch (e) {}
  }

  function eliminar(usuario, eliminarPerfiles) {
    const c = porUsuario(usuario);
    if (!c) return false;
    const o = leer();
    o.lista = o.lista.filter((x) => x !== c);
    if (o.sesion && o.sesion.toLowerCase() === c.usuario.toLowerCase()) o.sesion = null;
    escribir(o);
    if (eliminarPerfiles && c.respaldo && Array.isArray(c.respaldo.perfiles)) {
      const ids = c.respaldo.perfiles.map((p) => p.id);
      ids.forEach((id) => {
        try {
          localStorage.removeItem(K_PROGRESO + ":" + id);
        } catch (e) {}
      });
    }
    /* la copia de la nube también se borra, si este es su dueño */
    try {
      if (
        c.google &&
        nubeEstado.init &&
        nubeEstado.usuario &&
        nubeEstado.usuario.uid === c.google.uid
      ) {
        nubeEstado.db.collection("respaldos").doc(c.google.uid).delete();
      }
    } catch (e) {}
    return true;
  }

  /* ---------------- archivo de respaldo ---------------- */
  function nombreArchivo(c) {
    const f = new Date(Date.now());
    const p2 = (n) => String(n).padStart(2, "0");
    return (
      "respaldo-" +
      String(c.usuario).replace(/[^\p{L}\p{N}]+/gu, "-") +
      "-" +
      f.getFullYear() +
      p2(f.getMonth() + 1) +
      p2(f.getDate()) +
      ".json"
    );
  }

  function descargar(c) {
    const paquete = {
      tipo: TIPO_ARCHIVO,
      formato: FORMATO,
      web: "Mucho Mundo",
      cuenta: clone(c),
    };
    paquete.cuenta.respaldo = snapshot();
    paquete.cuenta.guardado = Date.now();
    try {
      const blob = new Blob([JSON.stringify(paquete)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = nombreArchivo(c);
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.remove();
      }, 400);
      return true;
    } catch (e) {
      return false;
    }
  }

  function importar(paquete) {
    let e = paquete;
    if (typeof e === "string") {
      try {
        e = JSON.parse(e);
      } catch (err) {
        return { ok: false, msg: "El archivo no es un JSON válido." };
      }
    }
    if (
      !e ||
      (e.tipo !== TIPO_ARCHIVO && e.tipo !== TIPO_ARCHIVO_VIEJO) ||
      !e.cuenta ||
      !e.cuenta.usuario ||
      !e.cuenta.hash
    ) {
      return { ok: false, msg: "El archivo no parece una copia de esta web." };
    }
    const c = e.cuenta;
    c.usuario = String(c.usuario).trim();
    if (!c.usuario) return { ok: false, msg: "El usuario de la copia está vacío." };
    const o = leer();
    const golpe = o.lista.filter(
      (x) => x.usuario.toLowerCase() === c.usuario.toLowerCase()
    )[0];
    if (golpe) o.lista[o.lista.indexOf(golpe)] = c;
    else o.lista.push(c);
    escribir(o);

    /* Si este equipo no tiene perfiles, la copia se aplica ya y se
       abre la sesión. Si SÍ tiene, se pregunta: sería reemplazar los
       perfiles de este equipo, y solo con la aceptación del adulto
       se abre la sesión (así el siguiente guardado no pisa la copia
       recién importada). */
    let restaurado = false;
    C.Store.load();
    if (C.Store.perfiles.length === 0 && c.respaldo) {
      restaurado = restaurar(c.respaldo);
      if (restaurado) {
        o.sesion = c.usuario;
        escribir(o);
        C.Store.save();
      }
    } else if (c.respaldo && confirm(
      "En este equipo ya hay perfiles guardados.\n\n" +
        "¿Reemplazarlos por la copia de la cuenta «" +
        c.usuario +
        "» (" + fhc(c.respaldo.fecha) + ")?"
    )) {
      const okRest = restaurar(c.respaldo);
      if (okRest) {
        restaurado = true;
        o.sesion = c.usuario;
        escribir(o);
        C.Store.save();
      }
    }
    return {
      ok: true,
      restauro: restaurado,
      entry: c,
      msg: restaurado
        ? "Cuenta importada y progreso restaurado en este equipo."
        : "Cuenta guardada en este equipo. Para aplicar su copia de progreso, restaúrala desde «Mi cuenta».",
    };
  }

  function leerArchivoImportar(file, alTerminar) {
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => alTerminar(String(fr.result || ""));
    fr.onerror = () => alTerminar(null);
    fr.readAsText(file);
  }

  /* ---------------- fecha corta ---------------- */
  function fhc(ts) {
    if (!ts) return "—";
    const d = new Date(ts);
    const p2 = (n) => String(n).padStart(2, "0");
    return d.getDate() + "/" + p2(d.getMonth() + 1) + "/" + d.getFullYear() + " " + p2(d.getHours()) + ":" + p2(d.getMinutes());
  }

  /* =========================================================
     Interfaz del teclado de PIN propio (cuenta)
     ========================================================= */
  function abrirTeclado(opts) {
    const overlay = $("#overlay-cuenta");
    if (!overlay) return;
    const titulo = $("#cte-titulo");
    const msg = $("#cte-msg");
    const puntos = $$("#cte-puntos i");
    const teclado = $("#cte-teclado");
    const btnA = $("#cte-aceptar");
    const btnC = $("#cte-cerrar");
    const zonaAgree = $("#cte-agree");
    const zonaPin = $("#cte-zona");

    let entrada = "";
    let primero = "";
    let paso = opts.modo === "crear" ? "crear" : "entrar";

    zonaAgree.style.display = "none";
    zonaPin.style.display = "";

    const pintarPuntos = () => {
      puntos.forEach((p, i) => p.classList.toggle("lleno", i < entrada.length));
    };

    const pintarTextos = () => {
      if (paso === "entrar") {
        titulo.textContent = opts.titulo || "🔑 Clave secreta de la cuenta";
        msg.textContent = opts.mensaje || "Escribe los 4 números de la cuenta.";
        btnA.textContent = opts.aceptar || "✅ Entrar";
        btnC.textContent = "↩️ Volver";
      } else if (paso === "crear") {
        titulo.textContent = opts.titulo || "🔑 Crea la clave";
        msg.textContent = "Elige 4 números. Que solo los conozcan los del hogar.";
        btnA.textContent = "✅ Continuar";
        btnC.textContent = "↩️ Cancelar";
      } else {
        titulo.textContent = "🔁 Repite la clave";
        msg.textContent = "Otra vez, para confirmar.";
        btnA.textContent = "✅ Guardar";
        btnC.textContent = "↩️ Cancelar";
      }
    };

    const fallo = (texto) => {
      msg.textContent = texto;
      entrada = "";
      pintarPuntos();
      const caja = overlay.querySelector(".pin-caja");
      if (caja) {
        caja.classList.remove("sacudir");
        void caja.offsetWidth;
        caja.classList.add("sacudir");
      }
      C.Sfx.mal();
    };

    const cerrar = () => overlay.classList.remove("visible");

    const listo = () => {
      cerrar();
      if (typeof opts.listo === "function") opts.listo();
    };

    const intentar = () => {
      if (entrada.length !== 4) {
        msg.textContent = "La clave tiene 4 números.";
        return;
      }
      if (paso === "entrar") {
        const r = opts.entrar ? opts.entrar(entrada) : false;
        if (r === true) listo();
        else fallo(r && r.msg ? r.msg : "Clave incorrecta. Inténtalo otra vez.");
      } else if (paso === "crear") {
        primero = entrada;
        entrada = "";
        paso = "repetir";
        pintarPuntos();
        pintarTextos();
      } else if (entrada === primero) {
        const r = opts.crear ? opts.crear(entrada) : true;
        if (r !== false) listo();
        else fallo("No se pudo crear la clave. Inténtalo otra vez.");
      } else {
        paso = "crear";
        primero = "";
        pintarTextos();
        fallo("Los números no coinciden. Empecemos otra vez.");
      }
    };

    const agregar = (d) => {
      if (entrada.length >= 4) return;
      entrada += d;
      C.Sfx.clic();
      pintarPuntos();
      if (entrada.length === 4) setTimeout(intentar, 200);
    };

    teclado.innerHTML = "";
    ["7", "8", "9", "4", "5", "6", "1", "2", "3"].forEach((d) => {
      const b = el("button", "", d);
      b.onclick = () => agregar(d);
      teclado.appendChild(b);
    });
    const borrar = el("button", "", "⌫");
    borrar.setAttribute("aria-label", "Borrar");
    borrar.onclick = () => {
      C.Sfx.clic();
      entrada = entrada.slice(0, -1);
      pintarPuntos();
    };
    teclado.appendChild(borrar);
    const lt = el("button", "", "0");
    lt.onclick = () => agregar("0");
    teclado.appendChild(lt);
    const vaciar = el("button", "", "🧹");
    vaciar.setAttribute("aria-label", "Borrar todo");
    vaciar.onclick = () => {
      C.Sfx.clic();
      entrada = "";
      pintarPuntos();
    };
    teclado.appendChild(vaciar);

    btnA.onclick = intentar;
    btnC.onclick = () => {
      C.Sfx.clic();
      cerrar();
      if (typeof opts.alCancelar === "function") opts.alCancelar();
      if (typeof opts.onCerrar === "function") opts.onCerrar();
    };

    pintarPuntos();
    pintarTextos();
    overlay.classList.add("visible");
  }

  function cerrarTeclado() {
    const overlay = $("#overlay-cuenta");
    if (overlay) overlay.classList.remove("visible");
  }

  /* =========================================================
     NUBE (Firebase) + GMAIL
     - "Continuar con Gmail": sirve para ENTRAR (si la cuenta
       ya existe en este equipo o en la nube) o para
       REGISTRAR una cuenta nueva amarrada al Gmail del adulto.
     - Con sesión de cuenta con Gmail, cada autoRespaldo también
       sube la copia a Firestore (respaldos/<uid de Google>),
       con retardo para no escribir en cada clic.
     - Sin configuración (NUBE_CONFIG vacío) todo queda local
       y los botones de Gmail no se muestran.
     ========================================================= */
  const NUBE = window.NUBE_CONFIG;
  const nubeLista = () =>
    !!(NUBE && NUBE.apiKey && NUBE.projectId);

  const nubeEstado = {
    sdk: false, /* scripts cargados */
    init: false, /* app inicializada */
    auth: null,
    db: null,
    usuario: null, /* firebase.User actual */
    ultimaSubida: 0,
    temporizador: null,
    subiendo: false,
  };

  function mensajeGoogle(e) {
    const c = String((e && (e.code || e.message)) || "");
    if (c.indexOf("popup-blocked") >= 0)
      return "Tu navegador bloqueó la ventana de Google. Permite las ventanas emergentes de esta web y vuelve a intentarlo.";
    if (c.indexOf("popup-closed-by-user") >= 0 || c.indexOf("cancelled-popup") >= 0)
      return "Cerraste la ventana de Google sin terminar.";
    if (c.indexOf("network") >= 0)
      return "No hay internet ahora. Usa la entrada con usuario y clave de 4 números.";
    if (c.indexOf("unauthorized-domain") >= 0)
      return "Este dominio todavía no está autorizado en el proyecto de Google. (En Authentication → Settings → Authorized domains agrégalo.)";
    if (c.indexOf("operation-not-allowed") >= 0)
      return "El ingreso con Google está desactivado en el proyecto. (En Authentication → Sign-in method, activa Google.)";
    return "No se pudo conectar con Google. Usa la entrada con usuario y clave de 4 números.";
  }

  function cargarFirebase(alListo, alFallo) {
    if (nubeEstado.sdk) return alListo();
    const base = "https://www.gstatic.com/firebasejs/10.14.1/";
    const fuentes = [
      "firebase-app-compat.js",
      "firebase-auth-compat.js",
      "firebase-firestore-compat.js",
    ];
    let i = 0;
    const siguiente = () => {
      if (i >= fuentes.length) {
        if (!window.firebase) return alFallo("No se pudieron cargar los módulos de Google.");
        nubeEstado.sdk = true;
        return alListo();
      }
      const s = document.createElement("script");
      s.src = base + fuentes[i];
      s.async = true;
      s.onload = () => { i++; siguiente(); };
      s.onerror = () => alFallo("No hay internet para usar Gmail ahora. Usa tu clave de 4 números.");
      document.head.appendChild(s);
    };
    siguiente();
  }

  function nubeIniciar(alListo, alFallo) {
    if (!nubeLista()) return alFallo("Gmail no está preparado todavía (falta la configuración de la nube).");
    if (nubeEstado.init && nubeEstado.auth && nubeEstado.db) return alListo();
    cargarFirebase(() => {
      try {
        if (!nubeEstado.init) {
          firebase.initializeApp(NUBE);
          nubeEstado.auth = firebase.auth();
          nubeEstado.db = firebase.firestore();
          nubeEstado.auth.onAuthStateChanged((u) => {
            nubeEstado.usuario = u || null;
            if (u) {
              /* tal vez la sesión local de cuenta también venga:
                 si coincide con la cuenta amarrada, sincroniza */
              programarSubidaNube(1500);
            }
          });
          nubeEstado.init = true;
        }
        return alListo();
      } catch (e) {
        return alFallo(mensajeGoogle(e));
      }
    }, alFallo);
  }

  const huellaGoogle = (u) => ({
    uid: u.uid,
    email: String(u.email || "").toLowerCase(),
    nombre: u.displayName || "",
    foto: u.photoURL || "",
  });

  /* Cuenta local amarrada a ese Google (por uid o correo) */
  function porGoogle(g) {
    if (!g) return null;
    const o = leer();
    return (
      o.lista.filter(
        (c) =>
          c.google &&
          ((c.google.uid && c.google.uid === g.uid) ||
            (c.google.email && c.google.email === g.email))
      )[0] || null
    );
  }

  function abrirSesion(c) {
    const o = leer();
    o.sesion = c.usuario;
    escribir(o);
  }

  function nubeSubir() {
    if (!nubeEstado.init || nubeEstado.subiendo) return;
    if (!nubeEstado.usuario) return;
    const c = sesion();
    if (!c || !c.google || c.google.uid !== nubeEstado.usuario.uid) return;
    nubeEstado.subiendo = true;
    const paquete = {
      tipo: TIPO_ARCHIVO,
      formato: FORMATO,
      web: "Mucho Mundo",
      cuenta: {
        usuario: c.usuario,
        hash: c.hash,
        creado: c.creado,
        google: clone(c.google),
      },
      respaldo: snapshot(),
      guardado: Date.now(),
    };
    try {
      nubeEstado.db
        .collection("respaldos")
        .doc(nubeEstado.usuario.uid)
        .set(paquete)
        .then(() => {
          nubeEstado.subiendo = false;
          nubeEstado.ultimaSubida = Date.now();
          c.guardadoNube = nubeEstado.ultimaSubida;
          escribir(leer());
        })
        .catch(() => { nubeEstado.subiendo = false; });
    } catch (e) {
      nubeEstado.subiendo = false;
    }
  }

  /* Debounce: la app guarda muchas veces seguidas; subimos una
     sola vez cuando se calme el juego. Si la nube no está
     inicializada (recién abierta la web), la inicializa. */
  function programarSubidaNube(ms) {
    if (!nubeLista()) return;
    if (nubeEstado.temporizador) return;
    nubeEstado.temporizador = setTimeout(() => {
      nubeEstado.temporizador = null;
      try {
        if (nubeEstado.init) return nubeSubir();
        const c = sesion();
        if (!c || !c.google) return;
        nubeIniciar(
          () => {
            /* onAuthStateChanged repondrá el usuario; darle un
               respiro y subir cuando esté listo */
            const esperar = () => {
              if (nubeEstado.usuario) return nubeSubir();
              nubeEstado.temporizador = setTimeout(() => {
                nubeEstado.temporizador = null;
                programarSubidaNube(4000);
              }, 3000);
            };
            esperar();
          },
          () => {} /* offline: nada, la copia local ya está */
        );
      } catch (e) {}
    }, ms || 5000);
  }

  function nubeLeer(alListo, alFallo) {
    nubeIniciar(() => {
      if (!nubeEstado.usuario) return alFallo("La sesión de Google no está abierta.");
      nubeEstado.db
        .collection("respaldos")
        .doc(nubeEstado.usuario.uid)
        .get()
        .then((doc) => alListo(doc.exists ? doc.data() : null))
        .catch(() => alFallo("La nube no respondió. Puedes crear la cuenta o entrar con la clave de 4 números."));
    }, alFallo);
  }

  /* La cuenta nueva creada con Gmail: usuario = el correo */
  function crearConGoogle(g, pin) {
    const o = leer();
    const c = {
      usuario: g.email,
      hash: hashPin(pin),
      creado: Date.now(),
      guardado: 0,
      guardadoNube: 0,
      respaldo: null,
      google: clone(g),
    };
    o.lista.push(c);
    o.sesion = c.usuario;
    escribir(o);
    autoRespaldo();
    return c;
  }

  /* Decide qué hacer al continuar con Gmail:
     1) cuenta local amarrada → entrar y sincronizar,
     2) copia de esa cuenta en la nube → traerla a este equipo,
     3) ninguna → registrar cuenta nueva (con aviso y clave). */
  function flujoGmail(googleYaAbierto) {
    if (!nubeLista()) {
      estadoError(
        "Gmail todavía no está preparado en esta web. Puedes crear la cuenta con usuario y clave de 4 números."
      );
      return;
    }
    const listoGmail = (g) => {
      const local = porGoogle(g);
      if (local) {
        abrirSesion(local);
        despuesEntrarLocal(local);
        return;
      }
      nubeLeer(
        (doc) => {
          if (doc && doc.cuenta && doc.respaldo && doc.cuenta.usuario) {
            /* esta cuenta ya existe en la nube: traerla aquí */
            const o = leer();
            const entrada = clone(doc.cuenta);
            if (!entrada.creado) entrada.creado = Date.now();
            if (!entrada.google) entrada.google = clone(g);
            /* si ya existe en este equipo, reemplazarla en vez de duplicar */
            const golpe = porUsuario(entrada.usuario) || porGoogle(g);
            if (golpe) o.lista[o.lista.indexOf(golpe)] = entrada;
            else o.lista.push(entrada);
            escribir(o);
            abrirSesion(porGoogle(g) || porUsuario(entrada.usuario) || entrada);
            despuesEntrarConNube(doc.respaldo);
            return;
          }
          /* cuenta nueva: registrar (aviso → clave → creada) */
          const e = window.CUENTAS_estado;
          e.google = g;
          e.rutaGmail = true;
          e.error = "";
          e.vista = "aviso";
          window.pantalla_cuenta({ vista: "aviso" });
        },
        (err) => estadoError(err)
      );
    };
    if (googleYaAbierto && nubeEstado.usuario) {
      return listoGmail(huellaGoogle(nubeEstado.usuario));
    }
    nubeIniciar(() => {
      const prov = new firebase.auth.GoogleAuthProvider();
      prov.setCustomParameters({ prompt: "select_account" });
      nubeEstado.auth
        .signInWithPopup(prov)
        .then((r) => {
          nubeEstado.usuario = r.user;
          listoGmail(huellaGoogle(r.user));
        })
        .catch((e) => estadoError(mensajeGoogle(e)));
    }, (err) => estadoError(err));
  }

  /* Después de entrar localmente a una cuenta con Gmail:
     si este equipo no tiene perfiles, pide la copia de la
     nube; si hay, pregunta antes de reemplazar. */
  function despuesEntrarLocal(local) {
    const aplicarNube = (doc) => {
      if (doc && doc.respaldo && Array.isArray(doc.respaldo.perfiles)) {
        C.Store.load();
        if (C.Store.perfiles.length === 0) {
          restaurar(doc.respaldo);
          C.Store.save();
          alert("Progreso traído de la nube de tu Gmail.");
        } else {
          const aplicar = confirm(
            "La nube tiene una copia de esta cuenta (" +
              fhc(doc.respaldo.fecha) + ").\n\n" +
              "¿Reemplazar los perfiles de este equipo por esa copia?"
          );
          if (aplicar) {
            restaurar(doc.respaldo);
            C.Store.save();
          }
        }
        programarSubidaNube(2000);
      }
      irPanelCuenta(local.usuario);
    };
    nubeLeer(aplicarNube, () => irPanelCuenta(local.usuario));
  }

  function despuesEntrarConNube(respaldo) {
    C.Store.load();
    if (respaldo && Array.isArray(respaldo.perfiles)) {
      if (C.Store.perfiles.length === 0) {
        restaurar(respaldo);
        C.Store.save();
        alert("Cuenta traída de la nube, con su progreso.");
      } else {
        const aplicar = confirm(
          "Se trajo la cuenta desde la nube. ¿Reemplazar los perfiles de este equipo por el progreso guardado en la nube?"
        );
        if (aplicar) {
          restaurar(respaldo);
          C.Store.save();
        }
      }
    }
    programarSubidaNube(2000);
    irPanelCuenta(sesion() ? sesion().usuario : "");
  }

  function irPanelCuenta(usuario) {
    const e = window.CUENTAS_estado;
    e.vista = "panel";
    e.usuario = usuario || "";
    e.error = "";
    e.google = null;
    e.rutaGmail = false;
    window.pantalla_cuenta({ vista: "panel" });
  }

  function estadoError(texto) {
    const e = window.CUENTAS_estado;
    if (!e) {
      alert(texto);
      return;
    }
    e.error = texto;
    if (e.vista === "aviso" || e.vista === "clave-google") {
      /* conservar la vista para que el adulto reintente */
    } else {
      e.vista = "entrar";
    }
    window.pantalla_cuenta({ vista: e.vista });
  }

  /* =========================================================
     Pantalla: cuenta de usuario
     vista: (nada)=entrar · "registrar"=aviso+registro · con sesión=panel
     ========================================================= */
  window.pantalla_cuenta = function (datos) {
    if (!$("#pantalla-cuenta")) return;
    /* El estado de esta pantalla vive aquí entre renders */
    window.CUENTAS_estado = window.CUENTAS_estado || {
      vista: "entrar",
      usuario: "",
      avisoOk: false,
      google: null,
      rutaGmail: false,
    };
    const estado = window.CUENTAS_estado;

    if (datos && datos.vista) {
      estado.vista = datos.vista;
      if (datos.usuario !== undefined) estado.usuario = datos.usuario;
    }

    const conSesion = sesion();

    /* Con sesión activa manda la vista "panel" salvo que pidan otra */
    if (conSesion && estado.vista === "entrar") estado.vista = "panel";
    if (!conSesion && estado.vista === "panel") estado.vista = "entrar";

    const cont = $("#contenido-cuenta");
    if (!cont) return;
    cont.innerHTML = "";

    function minCabc(titulo, sub) {
      const c = el("div", "cabecera-pantalla");
      c.appendChild(el("h1", "", titulo));
      if (sub) c.appendChild(el("p", "", sub));
      return c;
    }

    function nota(texto) {
      return el("p", "nota-adulto", texto);
    }

    /* Botón de Gmail: solo cuando la nube está configurada con
       sus claves; si no, no se muestra y todo queda local. */
    function botonGmail(compact) {
      const b = el("button", "btn grande" + (compact ? "" : " primario"));
      b.innerHTML = LOGO_GMAIL + " Continuar con Gmail (adulto)";
      b.onclick = () => {
        C.Sfx.clic();
        flujoGmail(false);
      };
      return b;
    }

    function avisoAdulto(msj) {
      const caja = el("div", "config-adulto");
      caja.appendChild(
        el(
          "h3",
          "subtitulo",
          "👨‍👩‍👧 Esta cuenta la crea y cuida un adulto responsable"
        )
      );
      caja.appendChild(
        el(
          "p",
          "",
          "Para crear la cuenta hace falta el permiso y la supervisión de " +
            "un adulto (madre, padre, docente o cuidador). El adulto queda " +
            "responsable de la cuenta, de su clave secreta y del cuidado de " +
            "los datos del niño o niña (nombre, avatar y progreso)."
        )
      );
      caja.appendChild(
        el(
          "p",
          "",
          "Todo se guarda solo en este equipo: la web no envía datos por " +
            "internet. Para proteger el progreso use la copia de respaldo " +
            "de la cuenta (se guarda en automático y se puede descargar " +
            "en un archivo)."
        )
      );
      const fila = el("label", "fila-aviso-cuenta");
      fila.style.display = "flex";
      fila.style.alignItems = "center";
      fila.style.gap = "10px";
      fila.style.marginTop = "10px";
      const chk = el("input", "");
      chk.id = "cte-agr-check";
      chk.type = "checkbox";
      chk.style.width = "24px";
      chk.style.height = "24px";
      const txt = el(
        "span",
        "",
        " Soy el adulto responsable y acepto cuidar esta cuenta y su respaldo."
      );
      fila.appendChild(chk);
      fila.appendChild(txt);
      caja.appendChild(fila);
      caja.appendChild(el("p", "nota-adulto", "Este aviso es obligatorio: sin el acepto del adulto, no se crea la cuenta."));
      return { caja: caja, chk: chk };
    }

    /* ----------------- vista: ENTRAR ----------------- */
    if (estado.vista === "entrar") {
      const o = leer();
      const sinCuentas = !o.lista.length;
      cont.appendChild(
        minCabc(
          sinCuentas ? "👋 Bienvenido" : "🔐 Iniciar sesión",
          sinCuentas
            ? "Aquí empieza la aventura: para entrar hay que crear una " +
              "cuenta con un adulto o importar una copia."
          : "La cuenta guarda el progreso con una copia automática."
        )
      );
      const caja = el("div", "perfil-form");
      if (o.lista.length) {
        const campo = el("label", "campo-perfil");
        campo.appendChild(el("span", "", "👤 Usuario"));
        const input = document.createElement("input");
        input.className = "input-perfil";
        input.type = "text";
        input.maxLength = 15;
        input.autocomplete = "off";
        input.placeholder = "Escribe tu usuario";
        input.value = estado.usuario;
        campo.appendChild(input);
        caja.appendChild(campo);

        const error = el("p", "nota-adulto", "");
        error.style.display = estado.error ? "" : "none";
        error.textContent = estado.error || "";
        error.style.color = "#b3261e";
        caja.appendChild(error);

        const fila = el("div", "fila-botones");
        const btn = el("button", "btn grande primario", "✅ Entrar");
        btn.onclick = () => {
          estado.error = "";
          const usuario = input.value.trim();
          if (!usuario) {
            estado.error = "Escribe primero tu usuario.";
            repintar();
            return;
          }
          const c = porUsuario(usuario);
          if (!c) {
            estado.error =
              "No hay una cuenta con ese usuario en este equipo. ¿La vas a crear o importar?";
            repintar();
            return;
          }
          estado.usuario = usuario;
          abrirTeclado({
            modo: "entrar",
            titulo: "🔐 Clave de " + usuario,
            mensaje: "Escribe los 4 números de la cuenta.",
            entrar: (pin) => {
              if (entrar(usuario, pin)) {
                estado.vista = "panel";
                return true;
              }
              return false;
            },
            listo: () => {
              /* Con la sesión abierta: si este equipo no tiene
                 perfiles, la copia vuelve sin pedir nada más. */
              let restauro = false;
              C.Store.load();
              if (C.Store.perfiles.length === 0 && c.respaldo) {
                restauro = restaurar(c.respaldo);
                if (restauro) C.Store.save();
              } else if (c.respaldo) {
                const aplicar = confirm(
                  "En este equipo ya hay perfiles guardados.\n\n" +
                    "¿Los reemplazas por la copia guardada en la cuenta \"" +
                    usuario +
                    "\" (" +
                    fhc(c.respaldo.fecha) +
                    ")?"
                );
                if (aplicar) {
                  restauro = restaurar(c.respaldo);
                  if (restauro) C.Store.save();
                }
              }
              estado.vista = "panel";
              estado.usuario = usuario;
              estado.error = "";
              repintar();
              if (restauro) alert("Progreso restaurado desde la copia de la cuenta.");
            },
          });
        };
        fila.appendChild(btn);
        caja.appendChild(fila);
        if (nubeLista()) {
          caja.appendChild(el("p", "", "— o —"));
          caja.appendChild(botonGmail(true));
        }
      } else {
        caja.appendChild(
          el(
            "p",
            "",
            "En este equipo todavía no hay cuentas. Puedes crear una " +
              "(con un adulto) o importar una copia que hayas descargado."
          )
        );
        if (nubeLista()) {
          caja.appendChild(
            el("p", "", "— la manera más fácil: con el Gmail del adulto —")
          );
          caja.appendChild(botonGmail(true));
        }
      }

      const fila2 = el("div", "fila-botones");
      const bCrear = el("button", "btn grande primario", "🆕 Crear una cuenta");
      bCrear.onclick = () => {
        C.Sfx.clic();
        estado.error = "";
        estado.vista = "aviso";
        estado.usuario = "";
        repintar();
      };
      fila2.appendChild(bCrear);

      const bImport = el("button", "btn grande", "⬆️ Importar una copia");
      bImport.onclick = () => {
        C.Sfx.clic();
        $("#archivo-cuenta").click();
      };
      fila2.appendChild(bImport);

      caja.appendChild(fila2);

      caja.appendChild(
        nota(
          "La cuenta es local: se guarda en este equipo y no viaja por internet. " +
            "Con la copia de respaldo puedes devolver el progreso " +
            "a este u otro equipo cuando quieras."
        )
      );
      cont.appendChild(caja);
      C.Voz.decir(
        sinCuentas
          ? "¡Bienvenido! Un adulto puede crear la cuenta con su Gmail, o con usuario y clave de cuatro números."
          : "Escribe tu usuario para entrar en tu cuenta, o crea una con un adulto."
      );
    }

    /* ----------------- vista: AVISO (+ registro) ----------------- */
    if (estado.vista === "aviso" || estado.vista === "datos") {
      cont.appendChild(
        minCabc(
          "🆕 Crear una cuenta",
          "Paso " + (estado.vista === "aviso" ? "1 de 3: " : "2 de 3: ") +
            (estado.vista === "aviso" ? "aviso del adulto responsable" : "usuario y clave")
        )
      );

      if (estado.vista === "aviso") {
        const avisel = avisoAdulto(null);
        const caja = el("div", "perfil-form");
        caja.appendChild(avisel.caja);
        if (estado.rutaGmail && estado.google) {
          caja.appendChild(
            nota(
              "Esta cuenta se amarrará al Gmail " + estado.google.email +
                ". La copia del progreso también se guardará en la nube " +
                "(solo la verás con este Gmail). Además eliges una clave " +
                "de 4 números para entrar en equipos donde el popup de " +
                "Google falle."
            )
          );
        }
        const fila = el("div", "fila-botones");
        const bContinuar = el("button", "btn grande primario", "➡️ Continuar");
        bContinuar.disabled = !avisel.chk.checked;
        if (bContinuar.disabled) bContinuar.style.opacity = "0.6";
        avisel.chk.onchange = () => {
          bContinuar.disabled = !avisel.chk.checked;
          bContinuar.style.opacity = bContinuar.disabled ? "0.6" : "";
        };
        bContinuar.onclick = () => {
          if (!avisel.chk.checked) return;
          C.Sfx.bien();
          if (estado.rutaGmail && estado.google) {
            estado.vista = "clave-google";
          } else {
            estado.vista = "datos";
          }
          repintar();
        };
        fila.appendChild(bContinuar);
        const bVolver = el("button", "btn grande", "⬅️ Volver");
        bVolver.onclick = () => {
          C.Sfx.clic();
          estado.vista = "entrar";
          repintar();
        };
        fila.appendChild(bVolver);
        caja.appendChild(fila);
        cont.appendChild(caja);
        C.Voz.decir(
          "Esta cuenta la crea y cuida un adulto responsable. Si eres el adulto, acepta el aviso y continúa."
        );
      } else {
        /* paso 2: usuario */
        const caja = el("div", "perfil-form");
        const campo = el("label", "campo-perfil");
        campo.appendChild(el("span", "", "👤 Elige el usuario"));
        const input = document.createElement("input");
        input.className = "input-perfil";
        input.type = "text";
        input.maxLength = 15;
        input.autocomplete = "off";
        input.placeholder = "Ej. tutor-de-pedro";
        input.value = estado.usuario;
        campo.appendChild(input);
        caja.appendChild(campo);

        const error = el("p", "nota-adulto", "");
        error.style.color = "#b3261e";
        error.style.display = estado.error ? "" : "none";
        error.textContent = estado.error || "";
        caja.appendChild(error);

        const fila = el("div", "fila-botones");
        const bClave = el("button", "btn grande primario", "🔑 Crear la clave (4 números)");
        bClave.onclick = () => {
          estado.error = "";
          const usuario = input.value.trim();
          const mal = validarUsuario(usuario) || (porUsuario(usuario) ? "Ese usuario ya existe en este equipo." : null);
          if (mal) {
            estado.error = mal;
            repintar();
            return;
          }
          estado.usuario = usuario;
          repintar();
          abrirTeclado({
            modo: "crear",
            titulo: "🔑 Clave de " + usuario,
            crear: (pin) => {
              try {
                crear(usuario, pin);
                estado.vista = "creada";
                return true;
              } catch (e) {
                return false;
              }
            },
            listo: () => repintar(),
          });
        };
        fila.appendChild(bClave);
        const bVolver2 = el("button", "btn grande", "⬅️ Volver");
        bVolver2.onclick = () => {
          C.Sfx.clic();
          estado.vista = "aviso";
          repintar();
        };
        fila.appendChild(bVolver2);
        caja.appendChild(fila);

        caja.appendChild(
          nota(
            "La clave es la misma para entrar a la cuenta. " +
              "Truco: que sea la misma en todas las cuentas del mismo hogar o salón."
          )
        );
        cont.appendChild(caja);
        C.Voz.decir("El usuario para entrar, escrito por el adulto. Luego se crea la clave de 4 números.");
      }
    }

    /* --------- vista: CLAVE PARA CUENTA CON GMAIL ---------- */
    /* (la cuenta nueva amarrada al Gmail necesita clave de
       respaldo de 4 números) */
    if (estado.vista === "clave-google") {
      const g = estado.google || {};
      cont.appendChild(
        minCabc(
          "🔴 Cuenta con Gmail",
          "Registrada como " + g.email +
            ". Falta la clave de respaldo para entrar sin Google."
        )
      );
      const caja = el("div", "perfil-form");
      const chip = el("div", "perfil-form");
      chip.style.textAlign = "center";
      const lineaChip = el("p", "");
      lineaChip.innerHTML =
        (g.foto
          ? '<img src="' + String(g.foto).replace(/"/g, "") + '" alt=" " style="height:1.5em;width:auto;vertical-align:-0.4em;border-radius:50%" /> '
          : LOGO_GMAIL + " ") +
        (g.nombre || "Adulto") + " · " + g.email;
      chip.appendChild(lineaChip);
      caja.appendChild(chip);

      const error = el("p", "nota-adulto", "");
      error.style.color = "#b3261e";
      error.style.display = estado.error ? "" : "none";
      error.textContent = estado.error || "";
      caja.appendChild(error);

      const fila = el("div", "fila-botones");
      const bClave = el(
        "button",
        "btn grande primario",
        "🔑 Crear la clave de respaldo (4 números)"
      );
      bClave.onclick = () => {
        estado.error = "";
        abrirTeclado({
          modo: "crear",
          titulo: "🔑 Clave de " + g.email,
          crear: (pin) => {
            try {
              crearConGoogle(g, pin);
              estado.vista = "creada";
              estado.usuario = g.email;
              return true;
            } catch (e) {
              return false;
            }
          },
          listo: () => repintar(),
        });
      };
      fila.appendChild(bClave);
      const bOtra = el("button", "btn grande", "↩️ Usar otro Gmail");
      bOtra.onclick = () => {
        C.Sfx.clic();
        estado.google = null;
        estado.rutaGmail = false;
        estado.vista = "entrar";
        repintar();
      };
      fila.appendChild(bOtra);
      caja.appendChild(fila);
      caja.appendChild(
        nota(
          "Con esta cuenta la copia del progreso va al equipo y también " +
            "a la nube amarrada a tu Gmail: si cambias de equipo, entra " +
            "con el mismo Gmail y el progreso regresa solo."
        )
      );
      cont.appendChild(caja);
      C.Voz.decir(
        "Ahora se crea la clave de respaldo de cuatro números. La guarda el adulto."
      );
    }

    /* ----------------- vista: CUENTA CREADA ----------------- */
    if (estado.vista === "creada") {
      cont.appendChild(
        minCabc("✅ Cuenta creada", estado.usuario)
      );
      const caja = el("div", "perfil-form");
      const conGoogle = (sesion() || {}).google;
      caja.appendChild(
        el(
          "p",
          "",
          "La cuenta quedó con sesión abierta. Ahora soy responsable de hacer " +
            "la copia del progreso cada vez que la app guarda" +
            (conGoogle ? " (equipo y nube de tu Gmail)." : ".")
        )
      );
      const fila = el("div", "fila-botones");
      const bPerfil = el("button", "btn grande primario", "🧒 Crear el perfil del niño");
      bPerfil.onclick = () => {
        C.Sfx.clic();
        C.Nav.reemplazar("perfil", { crear: true });
      };
      fila.appendChild(bPerfil);
      const bHome = el("button", "btn grande", "🏠 Ir al inicio");
      bHome.onclick = () => {
        C.Sfx.clic();
        C.Nav.reemplazar(C.Store.hayPerfiles() ? "home" : "perfil");
      };
      fila.appendChild(bHome);
      caja.appendChild(fila);

      caja.appendChild(
        nota(
          "Importante: para que la copia del progreso funcione en otro equipo " +
            "(o cuando la dirección de la web cambie) descarga tu copia con " +
            "el botón «Descargar respaldo» y guárdala en el equipo del adulto."
        )
      );
      cont.appendChild(caja);
      C.Voz.decir("Cuenta creada. Ahora puedes crear el perfil del niño y empezar a practicar.");
    }

    /* ----------------- vista: PANEL (con sesión) ----------------- */
    if (estado.vista === "panel") {
      const c = sesion();
      cont.appendChild(
        minCabc(
          "👤 Mi cuenta: " + c.usuario,
          "Sesión abierta en este equipo. La copia del progreso se hace automática."
        )
      );
      const caja = el("div", "config-adulto");

      caja.appendChild(
        el(
          "p",
          "",
          "Copia guardada: " + (c.guardado ? fhc(c.guardado) : "todavía ninguna") +
            " · Creado: " + fhc(c.creado) +
            (c.respaldo ? " · Perfiles en la copia: " + c.respaldo.perfiles.length : "")
        )
      );

      /* Gmail amarrado a la cuenta */
      if (c.google) {
        const lineaGoogle = el("p", "");
        lineaGoogle.innerHTML =
          LOGO_GMAIL +
          " Gmail amarrado: " + c.google.email +
          " · ☁️ Copia en la nube: " +
          (c.guardadoNube ? "última subida " + fhc(c.guardadoNube) : "pendiente");
        caja.appendChild(lineaGoogle);
        if (nubeLista()) {
          const bSub = el("button", "btn grande", "☁️ Subir a la nube ahora");
          bSub.onclick = () => {
            C.Sfx.clic();
            nubeIniciar(() => {
              nubeSubir();
              alert("La copia va camino a la nube (puede tardar unos segundos).");
            }, () => alert("No se pudo conectar con la nube: " + "revisa el internet. La copia local ya está guardada."));
          };
          caja.appendChild(bSub);
        }
      }

      if (c.respaldo) {
        const bRest = el("button", "btn grande primario", "🔄 Restaurar el progreso con esta copia");
        bRest.onclick = () => {
          C.Sfx.clic();
          if (
            c.respaldo &&
            confirm(
              "Restaurar reemplaza TODOS los perfiles y progreso de este equipo\n" +
                "con la copia de la cuenta (" + fhc(c.respaldo.fecha) + ").\n\n" +
                "¿Reponer el progreso desde la copia?"
            )
          ) {
            if (restaurar(c.respaldo)) {
              C.Store.save();
              alert("Progreso restaurado desde la copia de la cuenta.");
              C.Nav.reemplazar(C.Store.hayPerfiles() ? "home" : "perfil");
            } else {
              alert("No se pudo restaurar la copia.");
            }
          }
        };
        caja.appendChild(bRest);
      } else {
        caja.appendChild(nota("La copia aparece cuando la app guarda el progreso del niño."));
      }

      const bDesc = el("button", "btn grande", "⬇️ Descargar copia (archivo de respaldo)");
      bDesc.onclick = () => {
        C.Sfx.clic();
        if (descargar(c)) alert("Se descargó el archivo de respaldo. Guarda ese archivo en el equipo del adulto.");
        else alert("El navegador no permitió descargar. Usa otro navegador o copia los datos manualmente.");
      };
      caja.appendChild(bDesc);

      const bImport = el("button", "btn grande", "⬆️ Importar copia desde archivo");
      bImport.onclick = () => {
        C.Sfx.clic();
        $("#archivo-cuenta").click();
      };
      caja.appendChild(bImport);

      const bCambiar = el("button", "btn grande", "🔑 Cambiar la clave");
      bCambiar.onclick = () => {
        C.Sfx.clic();
        abrirTeclado({
          modo: "crear",
          titulo: "🔑 Nueva clave de " + c.usuario,
          crear: (pin) => {
            const o = leer();
            c.hash = hashPin(pin);
            escribir(o);
            return true;
          },
          listo: () => repintar(),
        });
      };
      caja.appendChild(bCambiar);

      const bSalir = el("button", "btn grande", "🚪 Cerrar sesión");
      bSalir.onclick = () => {
        C.Sfx.clic();
        salir();
        estado.vista = "entrar";
        C.Store.load();
        C.Nav.reemplazar(C.Store.hayPerfiles() ? "home" : "perfil");
      };
      caja.appendChild(bSalir);

      const bEliminar = el("button", "btn grande peligro", "🗑️ Eliminar cuenta");
      bEliminar.onclick = () => {
        C.Sfx.clic();
        const chico = confirm(
          "Eliminar la cuenta de " + c.usuario + "?\n\n" +
            "Los perfiles de ESTE equipo no se tocan (siguen aquí). " +
            "La copia guardada en la cuenta sí se borra."
        );
        if (!chico) return;
        eliminar(c.usuario, !confirm("¿También quitar de este equipo los perfiles " +
          "que venían dentro de la copia de la cuenta?"));
        estado.vista = "entrar";
        C.Store.load();
        C.Nav.reemplazar(C.Store.hayPerfiles() ? "home" : "perfil");
      };
      caja.appendChild(bEliminar);

      caja.appendChild(
        nota(
          "La copia vive en este equipo. Si va a borrar el navegador o " +
            "va a cambiar de equipo/dirección de esta web, primero descarga el respaldo. " +
            "Sin sesión de cuenta abierta no se puede entrar: la web " +
              "queda en la puerta de la cuenta."
        )
      );
      cont.appendChild(caja);
      const bp = el("button", "btn grande", "🏠 Volver al inicio");
      bp.onclick = () => {
        C.Sfx.clic();
        C.Nav.reemplazar(C.Store.hayPerfiles() ? "home" : "perfil");
      };
      cont.appendChild(bp);
      C.Voz.decir("Tu cuenta está abierta y el progreso se está guardando con copia automática.");
    }

    function repintar() {
      window.pantalla_cuenta({
        vista: estado.vista,
        usuario: estado.usuario,
        error: estado.error,
      });
    }

    /* Repintar justo una vez al abrir (para que los datos capturados
       arriba con los closures se usen de una) */
    if (estado.error) {
      /* los errores ya se muestran inline: no repintamos en bucle */
    }
  };

  /* =========================================================
     Sección del PANEL ADULTO
     (la llama app.js dentro de pantalla_adulto)
     ========================================================= */
  function panelAdulto(cont) {
    const s = sesion();
    cont.appendChild(el("h3", "subtitulo", "👤 Cuentas de usuario"));
    const caja = el("div", "config-adulto");

    if (s) {
      caja.appendChild(
        el(
          "p",
          "",
          "Sesión abierta: <strong>" + s.usuario + "</strong> · copia automática: " +
            (s.guardado ? fhc(s.guardado) : "pendiente")
        )
      );
      caja.appendChild(
        el(
          "p",
          "nota-adulto",
          "Si el sitio se actualiza y los perfiles desaparecen, entra con el usuario y la copia devuelve el progreso."
        )
      );
      const bCambio = el("button", "btn grande", "👤 Ver la cuenta");
      bCambio.onclick = () => {
        C.Sfx.clic();
        C.Nav.reemplazar("cuenta", { vista: "panel" });
      };
      caja.appendChild(bCambio);

      const bMess = el("button", "btn grande", "🚪 Cerrar sesión");
      bMess.onclick = () => {
        C.Sfx.clic();
        salir();
        C.Store.load();
        C.Nav.reemplazar("adulto");
      };
      caja.appendChild(bMess);
    } else {
      caja.appendChild(
        el(
          "p",
          "",
          "Sin sesión. Con una cuenta activa la web guarda una copia " +
            "del progreso a medida que se juega: si se pierde, se restaura."
        )
      );
    }

    const bCrear = el("button", "btn grande", "➕ Crear una cuenta (con acepto de adulto)");
    bCrear.onclick = () => {
      C.Sfx.clic();
      if (s && !confirm("Ya tienes la sesión de " + s.usuario + ". ¿La cierras y creas otra cuenta?")) return;
      if (s) salir();
      C.Nav.reemplazar("cuenta", { vista: "aviso" });
    };
    caja.appendChild(bCrear);

    const bImport = el("button", "btn grande", "⬆️ Importar cuenta desde archivo");
    bImport.onclick = () => {
      C.Sfx.clic();
      $("#archivo-cuenta").click();
    };
    caja.appendChild(bImport);

    /* Cuentas con Gmail (solo si la nube está configurada) */
    if (nubeLista && nubeLista()) {
      const bGmail = el("button", "btn grande");
      bGmail.innerHTML = LOGO_GMAIL + " Continuar con Gmail";
      bGmail.onclick = () => {
        C.Sfx.clic();
        const preg = s
          ? confirm("Ya hay la sesión de " + s.usuario + ". ¿La cierras y continuas con tu Gmail?")
          : true;
        if (!preg) return;
        if (s) salir();
        C.Nav.reemplazar("cuenta", { vista: "entrar" });
        /* Popup de Google dentro del mismo clic (para que el
           navegador no lo bloquee) */
        window.CUENTAS.continuarConGmail(false);
      };
      caja.appendChild(bGmail);
    }

    if (leer().lista.length) {
      const bBaja = el("button", "btn grande peligro", "📋 Cuadro de cuentas");
      bBaja.onclick = () => {
        C.Sfx.clic();
        C.Nav.reemplazar("cuenta", { vista: "panel" });
      };
      caja.appendChild(bBaja);
    }

    caja.appendChild(
      el(
        "p",
        "nota-adulto",
        "Cuentas y progresos: datos LOCALES, sin internet. Para mover a otro equipo: descargar la copia de la cuenta e importarla ahí."
      )
    );

    cont.appendChild(caja);
  }

  return {
    leer: leer,
    escribir: escribir,
    hay: hay,
    porUsuario: porUsuario,
    sesion: sesion,
    crear: crear,
    entrar: entrar,
    salir: salir,
    eliminar: eliminar,
    snapshot: snapshot,
    restaurar: restaurar,
    autoRespaldo: autoRespaldo,
    recuperarSiHaceFalta: recuperarSiHaceFalta,
    arranque: arranque,
    importar: importar,
    descargar: descargar,
    panelAdulto: panelAdulto,
    abrirTeclado: abrirTeclado,
    cerrarTeclado: cerrarTeclado,
    validarUsuario: validarUsuario,
    /* nube + gmail */
    nubeLista: nubeLista,
    continuarConGmail: flujoGmail,
  };
})();

/* ---------------- Enlaza el guarda de la app al respaldo ----------
   Cada vez que Store.save() escribe el progreso, también se
   actualiza la copia de la cuenta con sesión (si la hay). Igual
   para las operaciones que cambian la lista de perfiles.       */
(function () {
  const C = window.CORE;
  const Lista = window.CUENTAS;
  const metodos = ["crearPerfil", "cambiarPerfil", "eliminarPerfil", "renombrarPerfil", "recuperarPerfil", "reiniciarPerfil"];
  const guardarOriginal = C.Store.save;
  C.Store.save = function () {
    guardarOriginal.apply(this, arguments);
    try {
      Lista.autoRespaldo();
    } catch (e) {
      /* nunca interrumpe el guardado real */
    }
  };
  metodos.forEach((m) => {
    const original = C.Store[m];
    if (typeof original !== "function") return;
    C.Store[m] = function () {
      const r = original.apply(this, arguments);
      try {
        Lista.autoRespaldo();
      } catch (e) {}
      return r;
    };
  });
})();
