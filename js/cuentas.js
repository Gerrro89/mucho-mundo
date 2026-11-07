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

   La cuenta es LOCAL: vive en `webleer_cuentas_v1` y nunca
   envía datos por internet. Crear una cuenta exige el ACEPTO
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

  /* Producto y formato del archivo de respaldo
     (sirve para rechazar archivos que no son de esta app) */
  const TIPO_ARCHIVO = "algebrario-respaldo";
  const FORMATO = 1;

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

  /* En qué pantalla comienza la app:
     login de cuenta cuando hay cuentas pero nadie inició sesión. */
  function arranque() {
    if (hay() && !sesion()) return "cuenta";
    return C.Store.hayPerfiles() ? "home" : "perfil";
  }

  /* ---------------- operaciones ---------------- */
  function crear(usuario, pin) {
    const o = leer();
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
      web: "Aventura de Letras y Números",
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
      e.tipo !== TIPO_ARCHIVO ||
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
     Pantalla: cuenta de usuario
     vista: (nada)=entrar · "registrar"=aviso+registro · con sesión=panel
     ========================================================= */
  window.pantalla_cuenta = function (datos) {
    if (!$("#pantalla-cuenta")) return;
    /* El estado de esta pantalla vive aquí entre renders */
    window.CUENTAS_estado = window.CUENTAS_estado || { vista: "entrar", usuario: "", avisoOk: false };
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
      cont.appendChild(
        minCabc(
          "🔐 Iniciar sesión",
          "La cuenta guarda el progreso con una copia automática."
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
      } else {
        caja.appendChild(
          el(
            "p",
            "",
            "En este equipo todavía no hay cuentas. Puedes crear una " +
              "(con un adulto) o importar una copia que hayas descargado."
          )
        );
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

      const bSeguir = el("button", "btn grande", "➡️ Usar sin cuenta");
      bSeguir.onclick = () => {
        C.Sfx.clic();
        C.Store.load();
        C.Nav.reemplazar(C.Store.hayPerfiles() ? "home" : "perfil");
      };
      fila2.appendChild(bSeguir);
      caja.appendChild(fila2);

      caja.appendChild(
        nota(
          "La cuenta es local: se guarda en este equipo y no viaja por internet. " +
            "Con la copia de respaldo puedes devolver el progreso " +
            "a este u otro equipo cuando quieras."
        )
      );
      cont.appendChild(caja);
      C.Voz.decir("Escribe tu usuario para entrar en tu cuenta, o crea una con un adulto.");
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
          estado.vista = "datos";
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

    /* ----------------- vista: CUENTA CREADA ----------------- */
    if (estado.vista === "creada") {
      cont.appendChild(
        minCabc("✅ Cuenta creada", estado.usuario)
      );
      const caja = el("div", "perfil-form");
      caja.appendChild(
        el(
          "p",
          "",
          "La cuenta quedó con sesión abierta. Ahora soy responsable de hacer " +
            "la copia del progreso cada vez que la app guarda."
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
            "Sin cuenta, el progreso sigue guardándose normal en los perfiles."
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
