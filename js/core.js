/* =========================================================
   WEB LEER — Núcleo
   Voz del profesor, guardado de progreso, utilidades de
   interfaz y navegación básica.
   ========================================================= */

window.CORE = (function () {
  "use strict";

  /* ---------------- Utilidades ---------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined && html !== null) n.innerHTML = html;
    return n;
  }

  function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  /* Baraja pero garantiza que el correcto no quede siempre en el mismo lugar */
  function shuffleFrom(correct, pool, size) {
    const others = shuffle(pool.filter((x) => x !== correct)).slice(0, (size || 4) - 1);
    return shuffle([correct].concat(others));
  }

  /* ---------------- Voz (profesor virtual) ----------------
     Voz infantil MUY alegre y entusiasmada. Se elige la mejor voz
     española disponible, se habla con tono agudo (de niño) y ritmo
     vivo, y las frases con admiración suenan todavía más animadas. */
  const Voz = {
    disponible: "speechSynthesis" in window,
    voz: null,
    volumen: 0.95,
    tono: 1.28, /* tono cálido y alegre, sin sonar estridente */
    rapido: false,
    silenciado: false,
    _ultimo: "",
    _cola: null,
    _suena: false,
    _recon: null,

    disponibleReconocimiento() {
      return ("webkitSpeechRecognition" in window || "SpeechRecognition" in window);
    },

    /* Voces que suenan más cálidas y alegres (Windows / Chrome) */
    _preferidas: [
      "sabina",
      "helena",
      "laura",
      "paulina",
      "mónica",
      "monica",
      "elvira",
      "dalia",
      "google español",
      "microsoft sabina",
      "microsoft helena",
      "microsoft laura",
    ],

    init() {
      if (!this.disponible) return;
      const cargar = () => {
        let voces = [];
        try {
          voces = window.speechSynthesis.getVoices() || [];
        } catch (e) {
          voces = [];
        }
        if (!voces.length) return;
        const espanol = voces.filter((v) => /^es/i.test(v.lang || ""));
        if (!espanol.length) {
          this.voz = null;
          return;
        }
        const puntuar = (v) => {
          let puntos = 0;
          const lang = (v.lang || "").toLowerCase();
          const nombre = (v.name || "").toLowerCase();
          if (/^es[-_]co/.test(lang)) puntos += 60;
          else if (/^es[-_](mx|us|419)/.test(lang)) puntos += 45;
          else if (/^es[-_]/.test(lang)) puntos += 35;
          if (/microsoft/.test(nombre)) puntos += 14;
          if (/google/.test(nombre)) puntos += 12;
          if (/natural|online|neural/.test(nombre)) puntos += 10;
          this._preferidas.forEach((pref, i) => {
            if (nombre.indexOf(pref) !== -1) puntos += 30 - i;
          });
          return puntos;
        };
        espanol.sort((a, b) => puntuar(b) - puntuar(a));
        this.voz = espanol[0];
      };
      cargar();
      window.speechSynthesis.onvoiceschanged = cargar;
      /* Algunos navegadores tardan en cargar la lista de voces:
         reintentamos unos segundos para poder elegir la mejor. */
      let intentos = 0;
      const esperar = setInterval(() => {
        intentos++;
        cargar();
        if (this.voz || intentos >= 12) clearInterval(esperar);
      }, 400);
    },

    /* Se llama con el primer clic o toque: los navegadores exigen
       un gesto del usuario antes de permitir hablar. */
    desbloquear() {
      if (!this.disponible) return;
      try {
        /* Un texto muy corto y sin volumen: despierta la voz del sistema
           sin que el niño oiga nada raro. */
        const u = new SpeechSynthesisUtterance(".");
        u.volume = 0;
        u.rate = 1.3;
        window.speechSynthesis.speak(u);
      } catch (e) {}
      /* También intenta preparar reconocimiento de voz si existe */
      try {
        if (this.disponibleReconocimiento()) {
          const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
          this._recon = new SR();
          this._recon.lang = "es-CO";
          this._recon.continuous = false;
          this._recon.interimResults = false;
          this._recon.maxAlternatives = 1;
          this._recon.onstart = () => {};
          this._recon.onend = () => {};
        }
      } catch (e) {}
    },

    decir(texto, opc) {
      opc = opc || {};
      texto = String(texto === undefined || texto === null ? "" : texto);
      if (texto.trim()) this._ultimo = texto;
      if (!this.disponible || this.silenciado) return;
      const sint = window.speechSynthesis;
      try {
        sint.cancel();
        const u = new SpeechSynthesisUtterance(texto);
        if (this.voz) u.voice = this.voz;
        u.lang = (this.voz && this.voz.lang) || "es-CO";
        /* Voz alegre y entusiasmada: tono agudo, ritmo vivo y algo de
           variación para que no suene monótona. */
        const animado = /[¡!]/.test(texto);
        u.rate = (opc.rapido || this.rapido ? 1.10 : animado ? 1.04 : 0.98) + (Math.random() - 0.5) * 0.04;
        u.pitch = (opc.pitch || this.tono) + (animado ? 0.10 : 0) + (Math.random() - 0.5) * 0.08;
        u.volume = Math.max(0.1, Math.min(1, this.volumen));
        u.onstart = () => {
          this._suena = true;
          try {
            Guia.animar();
          } catch (e) {}
        };
        u.onend = () => {
          this._suena = false;
        };
        u.onerror = () => {
          this._suena = false;
        };
        /* Pequeña espera tras cancel(): evita el fallo de Chrome que
           descarta la frase si se habla de inmediato. */
        clearTimeout(this._cola);
        this._cola = setTimeout(() => {
          try {
            if (sint.paused) sint.resume();
            sint.speak(u);
          } catch (e) {}
        }, 55);
      } catch (e) {
        /* silencio si el navegador no lo permite */
      }
    },

    /* Repite el último mensaje (botón "repetir") */
    repetir() {
      if (this._ultimo) this.decir(this._ultimo);
    },

    /* Reconocimiento de voz opcional (no garantizado offline) */
    reconocer(textoEsperado, tiempo) {
      if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
        return Promise.resolve(null);
      }
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recon = new SR();
      recon.lang = "es-CO";
      recon.continuous = false;
      recon.interimResults = false;
      recon.maxAlternatives = 1;
      const t = tiempo || 4000;
      return new Promise((resolve) => {
        let terminado = false;
        const timeout = setTimeout(() => {
          if (terminado) return;
          terminado = true;
          try { recon.stop(); } catch (e) {}
          resolve(null);
        }, t + 1000);
        recon.onresult = (ev) => {
          if (terminado) return;
          const tr = ev.results && ev.results[0] && ev.results[0][0] && ev.results[0][0].transcript;
          if (tr) {
            terminado = true;
            clearTimeout(timeout);
            try { recon.stop(); } catch (e) {}
            resolve(tr);
          }
        };
        recon.onerror = () => {
          if (terminado) return;
          terminado = true;
          clearTimeout(timeout);
          try { recon.stop(); } catch (e) {}
          resolve(null);
        };
        recon.onend = () => {
          if (terminado) return;
          terminado = true;
          clearTimeout(timeout);
          resolve(null);
        };
        try {
          recon.start();
        } catch (e) {
          terminado = true;
          clearTimeout(timeout);
          resolve(null);
        }
      });
    },

    /* ¿Está hablando ahora mismo? (para no interrumpirle nunca) */
    hablando() {
      if (!this.disponible || this.silenciado) return false;
      try {
        return window.speechSynthesis.speaking || !!this._suena;
      } catch (e) {
        return !!this._suena;
      }
    },

    parar() {
      if (!this.disponible) return;
      clearTimeout(this._cola);
      this._suena = false;
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    },

    alternarSilencio() {
      this.silenciado = !this.silenciado;
      if (this.silenciado) this.parar();
      return this.silenciado;
    },
  };

  /* Sonidos cortos con WebAudio (sin archivos externos) */
  const Sfx = {
    ctx: null,
    activo: true,
    _get() {
      if (!this.activo) return null;
      if (!this.ctx) {
        try {
          const AC = window.AudioContext || window.webkitAudioContext;
          if (!AC) return null;
          this.ctx = new AC();
        } catch (e) {
          return null;
        }
      }
      if (this.ctx.state === "suspended") this.ctx.resume();
      return this.ctx;
    },
    _tone(f, dur, tipo, vol, retardo) {
      const ctx = this._get();
      if (!ctx) return;
      const t0 = ctx.currentTime + (retardo || 0);
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = tipo || "sine";
      osc.frequency.setValueAtTime(f, t0);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol || 0.15, t0 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.05);
    },
    bien() {
      /* Arpegio mayor ascendente: suena alegre y celebrador */
      this._tone(659, 0.12, "sine", 0.13, 0);
      this._tone(880, 0.12, "sine", 0.13, 0.09);
      this._tone(1109, 0.12, "sine", 0.12, 0.18);
      this._tone(1319, 0.22, "sine", 0.12, 0.27);
    },
    mal() {
      this._tone(320, 0.16, "triangle", 0.1, 0);
      this._tone(240, 0.22, "triangle", 0.1, 0.14);
    },
    clic() {
      this._tone(520, 0.07, "square", 0.06, 0);
    },
    estrella() {
      this._tone(880, 0.1, "sine", 0.12, 0);
      this._tone(1109, 0.1, "sine", 0.12, 0.09);
      this._tone(1319, 0.1, "sine", 0.12, 0.18);
      this._tone(1760, 0.26, "triangle", 0.11, 0.27);
    },
    letra(texto) {
      /* pequeño tono distintivo por actividad */
      const base = 400 + (texto.charCodeAt(0) % 12) * 30;
      this._tone(base, 0.12, "sine", 0.1, 0);
    },
  };

  /* ---------------- Perfiles y progreso (localStorage) ----------------
     Cada niña o niño tiene su propio perfil y su propio progreso.
     La persona adulta puede consultar el progreso de cualquier perfil.
     `Store.data` siempre apunta al progreso del perfil que está en uso,
     por eso el resto del programa no necesita cambios.               */
  const CLAVE_PERFILES = "webleer_perfiles_v1";
  const CLAVE_PROGRESO = "webleer_progreso_v3";
  const CLAVE_VIEJA = "webleer_progreso_v2";

  const AVATARES = [
    "🦊", "🐼", "🐯", "🐸", "🐵", "🦄", "🐶", "🐱",
    "🐰", "🐨", "🦁", "🐷", "🐙", "🐢", "🐝", "🦋",
  ];
  const NOMBRE_POR_DEFECTO = "Amiguito";

  function nuevoIdPerfil() {
    return "p" + Date.now().toString(36) + Math.floor(Math.random() * 46656).toString(36);
  }

  const Store = {
    data: null,
    perfiles: [],
    perfilActivo: null,
    avatares: AVATARES,

    _defaults() {
      return {
        nombre: "",
        creado: Date.now(),
        actualizado: Date.now(),
        ultimo: null, // {nivel, indice}
        estrellas: 0,
        niveles: {}, // id -> {hechas:[ids], total:n, dominio:0-1}
        practicas: 0, // total de actividades completadas
        tiempoMs: 0,
        debil: {}, // clave de contenido -> errores
        fuerte: {}, // clave -> aciertos
        confusiones: {}, // confusiones frecuentes (B/D, P/Q, M/N)
        insignias: [],
        animales: ["rd"],
        animalActivo: "rd",
        accesorio: "ninguno",
        trazos: 0,
        escuchas: 0,
        sopaNivel: "facil", // dificultad recordada de la sopa de letras
        dificultadJuegos: {}, // id de juego -> "facil" | "medio" | "dificil"
        misiones: {}, // id de misión -> [ids de etapas hechas]
        zonas: {}, // id de zona secreta -> {nombre, icono, de}
        mascota: null, // criatura que crece con el aprendizaje (ver js/mascota.js)
        escape: {}, // id de sala -> {cerrojos, abierta, pistas}
        taller: {}, // id de invento -> {conseguidas, colocadas, terminado}
        detective: {}, // id de detective -> {casos, aciertos, fallos}
        concurso: { rondas: {}, reloj: false }, // concurso de minijuegos (el reloj es opcional)
        laboratorio: { actividades: {}, lecturas: 0 }, // laboratorio de sonidos y palabras
        aventurero: {
          v: 1, // versión del esquema de datos
          desbloqueados: [], // ids de accesorios del personaje
          equipado: {}, // categoría -> id de accesorio puesto
          favorito: null, // combinación guardada
          misiones: {}, // id de misión -> {fecha}
        },
        configuracion: { volumen: 0.9, silencio: false, ayudaAuto: true, letra: "imprenta" },
        historial: [], // últimas actividades para estadísticas
        /* Currículo por grado y materias (ver js/curriculo.js) */
        grado: null, // "g1".."g5"
        materias: null, // [ids de materias] o null = todas
        curriculo: {}, // id de tema -> {hecho, estrellas, intentos, fecha}
        ultimoTema: null, // id del último tema abierto
      };
    },

    /* ---- claves de almacenamiento ---- */
    _clave(id) {
      return CLAVE_PROGRESO + ":" + id;
    },

    _leerPerfiles() {
      try {
        const raw = localStorage.getItem(CLAVE_PERFILES);
        if (raw) {
          const o = JSON.parse(raw);
          if (o && Array.isArray(o.lista)) return o;
        }
      } catch (e) {
        /* sin almacenamiento: seguimos en memoria */
      }
      return null;
    },

    _escribirPerfiles() {
      try {
        localStorage.setItem(
          CLAVE_PERFILES,
          JSON.stringify({
            activo: this.perfilActivo ? this.perfilActivo.id : null,
            lista: this.perfiles,
          })
        );
      } catch (e) {
        /* modo privado */
      }
    },

    _leerProgresoGuardado(id) {
      try {
        const raw = localStorage.getItem(this._clave(id));
        if (raw) return Object.assign(this._defaults(), JSON.parse(raw));
      } catch (e) {
        /* ignore */
      }
      return null;
    },

    _escribirProgreso(id, datos) {
      try {
        localStorage.setItem(this._clave(id), JSON.stringify(datos));
      } catch (e) {
        /* ignore */
      }
    },

    /* ---- perfiles ---- */
    cargarPerfiles() {
      let meta = this._leerPerfiles();
      if (!meta) {
        /* Migración desde la versión de un solo perfil */
        let viejo = null;
        try {
          const raw = localStorage.getItem(CLAVE_VIEJA);
          if (raw) viejo = JSON.parse(raw);
        } catch (e) {
          viejo = null;
        }
        if (viejo) {
          const p = {
            id: "p" + Date.now().toString(36),
            nombre: String(viejo.nombre || "").trim() || "Perfil 1",
            avatar: AVATARES[0],
            creado: viejo.creado || Date.now(),
          };
          this.perfiles = [p];
          this.perfilActivo = p;
          this._escribirPerfiles();
          this._escribirProgreso(p.id, Object.assign(this._defaults(), viejo, { nombre: p.nombre }));
          return;
        }
        meta = { activo: null, lista: [] };
      }
      this.perfiles = meta.lista;
      this.perfilActivo = this.perfiles.filter((p) => p.id === meta.activo)[0] || null;
      if (!this.perfilActivo && this.perfiles.length) this.perfilActivo = this.perfiles[0];
    },

    hayPerfiles() {
      return this.perfiles.length > 0;
    },

    crearPerfil(nombre, avatar, foto, extra) {
      const p = {
        id: "p" + Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36),
        nombre: String(nombre || "").trim() || "Amiguito",
        avatar: avatar || AVATARES[0],
        creado: Date.now(),
      };
      if (foto) p.foto = foto;
      this.perfiles.push(p);
      this.perfilActivo = p;
      this.data = this._defaults();
      this.data.nombre = p.nombre;
      this._aplicarGradoMaterias(p, extra);
      this._escribirPerfiles();
      this.save();
      return p;
    },

    /* Guarda grado y materias elegidos al crear o editar un perfil.
       `afectaData` evita escribir en el progreso en uso cuando se
       edita el perfil de otra persona. */
    _aplicarGradoMaterias(p, extra, afectaData) {
      if (!extra) return;
      const alData = afectaData !== false;
      if (extra.grado) {
        p.grado = extra.grado;
        if (alData) this.data.grado = extra.grado;
      }
      if (extra.materias && extra.materias.length) {
        p.materias = extra.materias.slice();
        if (alData) this.data.materias = p.materias.slice();
      } else if (extra.materias && !extra.materias.length) {
        /* lista vacía = todas las materias */
        delete p.materias;
        if (alData) this.data.materias = null;
      }
    },

    cambiarPerfil(id) {
      const p = this.perfiles.filter((x) => x.id === id)[0];
      if (!p) return false;
      this.save();
      this.perfilActivo = p;
      const guardado = this._leerProgresoGuardado(p.id);
      this.data = guardado || this._defaults();
      if (!this.data.nombre) this.data.nombre = p.nombre;
      Voz.volumen = this.data.configuracion.volumen;
      Voz.silenciado = this.data.configuracion.silencio;
      this._escribirPerfiles();
      return true;
    },

    renombrarPerfil(id, nombre, avatar, foto, extra) {
      const p = this.perfiles.filter((x) => x.id === id)[0];
      if (!p) return;
      const nuevo = String(nombre || "").trim();
      if (nuevo) p.nombre = nuevo;
      if (avatar) p.avatar = avatar;
      if (foto) p.foto = foto;
      else delete p.foto;
      const activo = this.perfilActivo && this.perfilActivo.id === id;
      this._aplicarGradoMaterias(p, extra, activo);
      if (activo) {
        this.data.nombre = p.nombre;
        this.save();
      }
      this._escribirPerfiles();
    },

    /* Papelera de perfiles: antes de borrar algo de verdad, el perfil
       y su progreso se guardan aquí para poder recuperarlos desde el
       panel adulto (protege contra borrados accidentales). */
    _papeleraLeer() {
      try {
        const lista = JSON.parse(localStorage.getItem("webleer_papelera_v1") || "[]");
        return Array.isArray(lista) ? lista : [];
      } catch (e) {
        return [];
      }
    },
    _papeleraEscribir(lista) {
      try {
        localStorage.setItem("webleer_papelera_v1", JSON.stringify(lista.slice(-3)));
      } catch (e) {
        /* ignore */
      }
    },
    papeleraContar() {
      return this._papeleraLeer().length;
    },
    papeleraEntradas() {
      return this._papeleraLeer().map(function (e) {
        return {
          nombre: e.perfil ? e.perfil.nombre : "Perfil",
          borrado: e.fecha || 0,
        };
      });
    },
    recuperarPerfil(indice) {
      const papel = this._papeleraLeer();
      const entrada = papel.splice(indice, 1)[0];
      if (!entrada || !entrada.perfil) return false;
      this.perfiles.push(entrada.perfil);
      try {
        if (entrada.datos) {
          localStorage.setItem(this._clave(entrada.perfil.id), JSON.stringify(entrada.datos));
        }
      } catch (e) {
        /* ignore */
      }
      this._escribirPerfiles();
      this._papeleraEscribir(papel);
      return entrada.perfil;
    },

    eliminarPerfil(id) {
      /* copia de seguridad ANTES de borrar (perfil + progreso) */
      const p = this.perfiles.filter((x) => x.id === id)[0];
      if (p) {
        let datos = null;
        try {
          const raw = localStorage.getItem(this._clave(id));
          if (raw) datos = JSON.parse(raw);
        } catch (e) {
          datos = null;
        }
        const papel = this._papeleraLeer();
        papel.push({ perfil: JSON.parse(JSON.stringify(p)), datos: datos, fecha: Date.now() });
        this._papeleraEscribir(papel);
      }
      this.perfiles = this.perfiles.filter((x) => x.id !== id);
      try {
        localStorage.removeItem(this._clave(id));
      } catch (e) {
        /* ignore */
      }
      if (this.perfilActivo && this.perfilActivo.id === id) {
        this.perfilActivo = this.perfiles[0] || null;
        this.data = this.perfilActivo
          ? this._leerProgresoGuardado(this.perfilActivo.id) || this._defaults()
          : this._defaults();
      }
      this._escribirPerfiles();
    },

    /* Marca el perfil como "en uso" (el que verá el niño o la niña). */
    usarPerfil(id) {
      return this.cambiarPerfil(id);
    },

    /* Lee el progreso de un perfil SIN cambiar el que está en uso. */
    leerProgreso(id) {
      if (this.perfilActivo && this.perfilActivo.id === id) return this.data;
      return this._leerProgresoGuardado(id) || this._defaults();
    },

    /* Borra el progreso de un perfil pero conserva el perfil. */
    reiniciarPerfil(id) {
      const p = this.perfiles.filter((x) => x.id === id)[0];
      if (this.perfilActivo && this.perfilActivo.id === id) {
        this.data = this._defaults();
        this.data.nombre = p ? p.nombre : "";
        this.save();
        return;
      }
      if (!p) return;
      const base = this._defaults();
      base.nombre = p.nombre;
      this._escribirProgreso(id, base);
    },

    perfilPorId(id) {
      return this.perfiles.filter((x) => x.id === id)[0] || null;
    },

    load() {
      this.cargarPerfiles();
      const guardado = this.perfilActivo ? this._leerProgresoGuardado(this.perfilActivo.id) : null;
      this.data = guardado || this._defaults();
      if (!this.data.configuracion) this.data.configuracion = this._defaults().configuracion;
      if (!this.data.configuracion.letra) this.data.configuracion.letra = "imprenta";
      if (!this.data.confusiones) this.data.confusiones = {};
      if (!this.data.dificultadJuegos) this.data.dificultadJuegos = {};
      if (!this.data.misiones) this.data.misiones = {};
      if (!this.data.zonas) this.data.zonas = {};
      if (!this.data.escape) this.data.escape = {};
      if (!this.data.taller) this.data.taller = {};
      if (!this.data.detective) this.data.detective = {};
      if (!this.data.concurso) this.data.concurso = { rondas: {}, reloj: false };
      if (!this.data.concurso.rondas) this.data.concurso.rondas = {};
      if (this.data.concurso.reloj === undefined) this.data.concurso.reloj = false;
      if (!this.data.laboratorio) this.data.laboratorio = { actividades: {}, lecturas: 0 };
      if (!this.data.laboratorio.actividades) this.data.laboratorio.actividades = {};
      if (this.data.laboratorio.lecturas === undefined) this.data.laboratorio.lecturas = 0;
      if (!this.data.aventurero || typeof this.data.aventurero !== "object") {
        this.data.aventurero = this._defaults().aventurero;
      }
      if (!this.data.aventurero.desbloqueados) this.data.aventurero.desbloqueados = [];
      if (!this.data.aventurero.equipado) this.data.aventurero.equipado = {};
      if (!this.data.aventurero.misiones) this.data.aventurero.misiones = {};
      if (this.data.aventurero.v === undefined) this.data.aventurero.v = 1;
      if (this.perfilActivo && !this.data.nombre) this.data.nombre = this.perfilActivo.nombre;
      Voz.volumen = this.data.configuracion.volumen;
      Voz.silenciado = this.data.configuracion.silencio;
      return this.data;
    },

    save() {
      this.data.actualizado = Date.now();
      const id = this.perfilActivo ? this.perfilActivo.id : "temporal";
      this._escribirProgreso(id, this.data);
    },

    reset() {
      const nombre = this.perfilActivo ? this.perfilActivo.nombre : "";
      this.data = this._defaults();
      this.data.nombre = nombre;
      this.save();
    },

    /* ---- niveles ---- */
    nivelInfo(id) {
      if (!this.data.niveles[id]) {
        this.data.niveles[id] = { hechas: [], total: 0, dominio: 0 };
      }
      return this.data.niveles[id];
    },

    nivelDesbloqueado(id) {
      /* Funciona para lectura (ids 1..6) y matemáticas (ids "m1".."m6"):
         cada área tiene su propia cadena de desbloqueo.             */
      const s = String(id);
      const esMate = s.charAt(0) === "m";
      const n = parseInt(esMate ? s.slice(1) : s, 10);
      if (!n || n <= 1) return true;
      const prev = esMate ? "m" + (n - 1) : n - 1;
      const ant = this.data.niveles[prev];
      if (!ant || !ant.total) return false;
      /* Maestría primero: el dominio penaliza los contenidos flojos.
         El atajo por "solo completar" exige además no tener contenidos
         flojos (2+ errores) en el nivel anterior. Los refuerzos
         adaptativos no cuentan como actividades del nivel.          */
      const hechasBase = (ant.hechas || []).filter((h) => String(h).indexOf("refuerzo-") !== 0).length;
      if (ant.dominio >= 0.7) return true;
      const pref = "n" + prev + ":";
      const flojos = Object.keys(this.data.debil || {}).filter(
        (k) => k.indexOf(pref) === 0 && this.data.debil[k] >= 2
      ).length;
      return flojos === 0 && hechasBase >= Math.ceil(ant.total * 0.7);
    },

    /* Repaso inteligente: confusiones frecuentes */
    agregarConfusion(clave) {
      if (!this.data.confusiones) this.data.confusiones = {};
      this.data.confusiones[clave] = (this.data.confusiones[clave] || 0) + 1;
      this.save();
    },

    repasoConfusiones() {
      if (!this.data.confusiones) return [];
      return Object.keys(this.data.confusiones).filter((k) => this.data.confusiones[k] >= 2);
    },

    marcarHecha(nivelId, actId, estrellas) {
      const info = this.nivelInfo(nivelId);
      if (info.hechas.indexOf(actId) === -1) {
        info.hechas.push(actId);
        this.data.practicas++;
        this.data.estrellas += estrellas;
        this.estimarDominio(nivelId);
        this.revisarInsignias();
        /* Cada actividad completada por primera vez suelta un
           material para construir la casa de la mascota.       */
        if (window.MASCOTA && window.MASCOTA.tiene()) {
          this.data.ultimoMaterial = window.MASCOTA.ganarMaterial();
        }
        /* Al terminar una actividad se revisan las misiones del
           aventurero: si algún objetivo ya se cumple, se conceden
           las recompensas (una sola vez por misión).           */
        if (window.AVENTURERO && typeof window.AVENTURERO.revisarMisiones === "function") {
          try {
            window.AVENTURERO.revisarMisiones();
          } catch (e) {
            /* nunca debe romper la actividad */
          }
        }
      }
      this.save();
    },

    estimarDominio(nivelId) {
      const info = this.nivelInfo(nivelId);
      if (!info.total) return;
      /* Solo cuentan las actividades base del nivel: los refuerzos
         adaptativos son práctica extra, no currículo.               */
      const hechasBase = (info.hechas || []).filter((h) => String(h).indexOf("refuerzo-") !== 0).length;
      const avance = Math.min(1, hechasBase / info.total);
      const claves = Object.keys(this.data.debil || {});
      const debilesNivel = claves.filter((k) => k.indexOf("n" + nivelId + ":") === 0 && this.data.debil[k] >= 2).length;
      /* Tope de 0.7: así, terminar TODO el nivel siempre alcanza
         0.7 de dominio y el niño nunca queda bloqueado sin salida. */
      const bonus = Math.max(0.7, 1 - debilesNivel * 0.15);
      info.dominio = Math.min(1, avance * bonus);
      this.save();
    },

    /* Registro de aciertos / errores por contenido (aprendizaje adaptativo) */
    registrar(nivelId, clave, ok) {
      const k = "n" + nivelId + ":" + clave;
      if (ok) {
        this.data.fuerte[k] = (this.data.fuerte[k] || 0) + 1;
        if (this.data.fuerte[k] >= 3 && this.data.debil[k]) {
          delete this.data.debil[k];
        }
      } else {
        this.data.debil[k] = (this.data.debil[k] || 0) + 1;
        /* Repaso inteligente para confusiones comunes */
        const cc = String(clave || "").toLowerCase();
        if (cc === "b-d" || cc === "b" || cc === "d" || cc === "p" || cc === "q" || cc === "m" || cc === "n") {
          this.agregarConfusion(cc);
        }
        this.agregarConfusion("nivel-" + nivelId);
      }
      this.save();
    },

    contenidosDebiles(nivelId) {
      const pref = "n" + nivelId + ":";
      return Object.keys(this.data.debil || {})
        .filter((k) => k.indexOf(pref) === 0 && this.data.debil[k] >= 1)
        .map((k) => k.slice(pref.length))
        .sort((a, b) => this.data.debil[pref + b] - this.data.debil[pref + a]);
    },

    revisarInsignias() {
      const d = this.data;
      const add = (id) => {
        if (d.insignias.indexOf(id) === -1) d.insignias.push(id);
      };
      DATA.niveles.forEach((n) => {
        const info = d.niveles[n.id];
        if (info && info.dominio >= 0.7) add(n.key);
      });
      DATA.mateNiveles.forEach((n) => {
        const info = d.niveles[n.id];
        if (info && info.dominio >= 0.7) add(n.key);
      });
      if (d.estrellas >= 50) add("estrellas50");
      if (d.estrellas >= 100) add("estrellas100");
      if (d.trazos >= 10) add("escriba");
      if (d.escuchas >= 20) add("oyente");

      /* Insignias del colegio: se ganan completando temas de
         CUALQUIER materia del currículo (no solo letras y números).
         cur_<materia>: primer tema de esa materia.
         cur5_<materia>: cinco temas de esa materia. */
      try {
        const CURR = window.CURRICULO;
        if (CURR && CURR.MATERIAS) {
          const porMateria = {};
          Object.keys(d.curriculo || {}).forEach(function (idT) {
            const e = d.curriculo[idT];
            if (e && e.hecho && typeof idT === "string") {
              const matId = idT.split("-")[1];
              if (matId) porMateria[matId] = (porMateria[matId] || 0) + 1;
            }
          });
          CURR.MATERIAS.forEach(function (m) {
            const n = porMateria[m.id] || 0;
            if (n >= 1) add("cur_" + m.id);
            if (n >= 5) add("cur5_" + m.id);
          });
        }
      } catch (e) {}

      /* animales desbloqueados por estrellas */
      DATA.animales.forEach((a) => {
        if (d.estrellas >= a.costo && d.animales.indexOf(a.id) === -1) {
          d.animales.push(a.id);
        }
      });
    },
  };

  /* ---------------- Guía (personaje) ---------------- */
  const Guia = {
    _temporizador: null,
    habla(texto, opc) {
      const burbuja = $("#burbuja-guia");
      if (burbuja) {
        burbuja.textContent = texto;
        burbuja.title = "Toca aquí para cerrar";
        burbuja.setAttribute("role", "button");
        burbuja.classList.add("visible");
        if (this._temporizador) clearTimeout(this._temporizador);
        this._temporizador = setTimeout(() => {
          burbuja.classList.remove("visible");
          this._temporizador = null;
        }, 9000);
      }
      Voz.decir(texto, opc);
    },
    callar() {
      const burbuja = $("#burbuja-guia");
      if (burbuja) burbuja.classList.remove("visible");
      if (this._temporizador) clearTimeout(this._temporizador);
      Voz.parar();
    },
    animar() {
      const g = $("#guia");
      if (!g) return;
      g.classList.remove("hablando");
      void g.offsetWidth;
      g.classList.add("hablando");
    },
  };

  /* La burbuja se cierra con un toque: el niño retoma el juego sin esperar */
  document.addEventListener("click", (ev) => {
    const b = ev.target.closest ? ev.target.closest("#burbuja-guia") : null;
    if (b) {
      b.classList.remove("visible");
      Voz.parar();
    }
  });

  /* Ambiente: burbujitas que suben por la pantalla, bien suavecitas */
  (function () {
    try {
      const capa = document.createElement("div");
      capa.id = "burbujas-ambiente";
      capa.setAttribute("aria-hidden", "true");
      for (let i = 0; i < 7; i++) capa.appendChild(document.createElement("span"));
      document.body.appendChild(capa);
    } catch (e) {
      /* sin ambiente: la web sigue igual */
    }
  })();

  /* ---------------- Confeti moderado ---------------- */
  function celebrar(contenedor) {
    /* Cuando se celebra una recompensa, se aprovecha para enseñar
       un dato de cultura general (lo pintará app.js si puede). */
    if (typeof window.inyectarDatoCultura === "function") {
      try { window.inyectarDatoCultura(contenedor); } catch (e) {}
    }
    const capa = $("#confeti");
    if (!capa) return;

    /* Onda expansiva: anuncia la celebración desde el centro */
    const onda = el("i", "onda-fiesta");
    capa.appendChild(onda);
    setTimeout(() => onda.remove(), 950);

    /* Emojis que explotan y giran hacia los lados */
    const avisos = ["⭐", "✨", "🎉", "💖", "🌈"];
    for (let i = 0; i < 10; i++) {
      const q = el("i", "explota-emoji");
      q.textContent = avisos[i % avisos.length];
      const ang = (Math.PI * 2 * i) / 10 + Math.random() * 0.5;
      const dist = 16 + Math.random() * 15;
      q.style.setProperty("--x", Math.cos(ang) * dist + "vw");
      q.style.setProperty("--y", Math.sin(ang) * dist * 0.8 + "vh");
      q.style.setProperty("--r", Math.round(Math.random() * 360 - 180) + "deg");
      q.style.fontSize = 1.3 + Math.random() * 1.2 + "rem";
      capa.appendChild(q);
      setTimeout(() => q.remove(), 1600);
    }

    /* Lluvia de confeti, ahora con cintas mezcladas */
    const colores = ["#ffd166", "#06d6a0", "#4cc9f0", "#f4a261", "#ef476f"];
    for (let i = 0; i < 24; i++) {
      const p = el("i", "ponto-confeti" + (i % 3 === 2 ? " cinta" : ""));
      p.style.background = colores[i % colores.length];
      p.style.left = 12 + Math.random() * 76 + "%";
      p.style.top = 12 + Math.random() * 34 + "%";
      p.style.animationDelay = Math.random() * 0.3 + "s";
      capa.appendChild(p);
      setTimeout(() => p.remove(), 1700);
    }
  }

  /* ---------------- Navegación ---------------- */
  const Nav = {
    actual: "home",
    pila: [],
    ir(id, datos) {
      this.pila.push({ id: this.actual, datos: this._datosActuales });
      this._datosActuales = datos || null;
      this.mostrar(id, datos);
    },
    reemplazar(id, datos) {
      this._datosActuales = datos || null;
      this.mostrar(id, datos);
    },
    atras() {
      const prev = this.pila.pop();
      if (prev) {
        this._datosActuales = prev.datos || null;
        this.mostrar(prev.id, prev.datos);
      } else {
        this.mostrar("home", null);
      }
    },
    mostrar(id, datos) {
      /* avisa a los módulos (p. ej. el profesor virtual) de que
         cambió la pantalla: podrán limpiar sus fijaciones */
      try {
        document.dispatchEvent(new CustomEvent("nav:cambio", { detail: { id: id } }));
      } catch (e) {}
      Voz.parar();
      /* Libera los recursos 3D de la pantalla anterior: el navegador
         limita a un puñado de contextos WebGL vivos a la vez. */
      if (typeof window.AV_LIMPIAR_3D === "function") {
        try {
          window.AV_LIMPIAR_3D();
        } catch (e) {}
      }
      $$(".pantalla").forEach((p) => p.classList.remove("activa"));
      const destino = $("#pantalla-" + id);
      if (destino) destino.classList.add("activa");
      this.actual = id;
      /* Si dejamos una pantalla con un cartel abierto, se cierra al
         cambiar de pantalla (evita que tape el contenido nuevo). */
      const overlay = $("#overlay-recompensa");
      if (overlay) overlay.classList.remove("visible");
      /* Kiko se agranda en la pantalla de inicio */
      const guia = document.getElementById("guia");
      if (guia) guia.classList.toggle("grande", id === "home");
      if (typeof window["pantalla_" + id] === "function") {
        window["pantalla_" + id](datos);
      }
      /* Refresca el personaje guia: puede haber cambiado la mascota
         o su etapa, y su dibujo 3D se libera al cambiar de pantalla. */
      if (typeof window.AV_REFRESCAR_GUIA === "function") {
        try {
          window.AV_REFRESCAR_GUIA();
        } catch (e) {}
      }
      window.scrollTo(0, 0);
    },
    _datosActuales: null,
  };

  /* ---------------- Ayuda / re-explicación por inactividad ---------------- */
  let timerInactividad = null;

  function vigilarInactividad(texto, demostrar) {
    clearTimeout(timerInactividad);
    if (!Store.data.configuracion.ayudaAuto) return;
    timerInactividad = setTimeout(function () {
      if (Nav.actual !== "actividad") return;
      Guia.habla(texto || DATA.frases.ayuda);
      if (typeof demostrar === "function") demostrar();
    }, 18000);
  }

  function detenerVigilancia() {
    clearTimeout(timerInactividad);
  }

  /* ---------------- Área adulta protegida con PIN ----------------
     Un PIN de 4 números evita que el niño o la niña entre al panel
     de seguimiento. No es seguridad real (los datos viven en este
     equipo), solo una puerta para ordenar el uso.                   */
  const CLAVE_PIN = "webleer_pin_v1";

  function hashPin(pin) {
    /* Ofuscación simple: evita ver el PIN a simple vista en localStorage */
    const s = "webleer:" + String(pin);
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = (((h << 5) + h) ^ s.charCodeAt(i)) >>> 0;
    return "h" + h.toString(36) + "x" + s.length;
  }

  const Pin = {
    leer() {
      try {
        const raw = localStorage.getItem(CLAVE_PIN);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },
    hay() {
      const p = this.leer();
      return !!(p && p.hash);
    },
    guardar(pin) {
      try {
        localStorage.setItem(CLAVE_PIN, JSON.stringify({ hash: hashPin(pin), creado: Date.now() }));
      } catch (e) {}
    },
    quitar() {
      try {
        localStorage.removeItem(CLAVE_PIN);
      } catch (e) {}
    },
    verificar(pin) {
      const p = this.leer();
      return !!(p && p.hash === hashPin(pin));
    },
  };

  let tecladoPinListo = false;

  /* Puerta del área adulta.
     modo: "entrar" | "crear"  ·  alEntrar: se llama al pasar la puerta */
  function abrirPin(modo, alEntrar) {
    const overlay = $("#overlay-adulto");
    if (!overlay) return;
    const teclado = $("#pin-teclado");
    const puntos = $$("#pin-puntos i");
    const msg = $("#gate-msg");
    const titulo = $("#pin-titulo");
    const btnAceptar = $("#gate-aceptar");
    const btnCerrar = $("#gate-cerrar");
    const btnOlvido = $("#gate-olvido");

    let estado = modo || (Pin.hay() ? "entrar" : "crear");
    let entrada = "";
    let primero = "";

    const pintarPuntos = () => {
      puntos.forEach((p, i) => p.classList.toggle("lleno", i < entrada.length));
    };

    const pintarTextos = () => {
      if (estado === "entrar") {
        titulo.textContent = "🔒 Área para personas adultas";
        msg.textContent = "Escribe el PIN de 4 números.";
        btnAceptar.textContent = "✅ Entrar";
        btnOlvido.textContent = "🔑 Olvidé el PIN";
      } else if (estado === "crear") {
        titulo.textContent = "🔑 Crea tu PIN de adulto";
        msg.textContent = "Elige 4 números que solo sepas tú.";
        btnAceptar.textContent = "✅ Guardar";
        btnOlvido.textContent = "⬅️ Cancelar";
      } else {
        titulo.textContent = "🔁 Repite el PIN";
        msg.textContent = "Escríbelo otra vez para confirmar.";
        btnAceptar.textContent = "✅ Guardar";
        btnOlvido.textContent = "⬅️ Cancelar";
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
      Sfx.mal();
    };

    const entrar = () => {
      cerrar();
      if (typeof alEntrar === "function") alEntrar();
    };

    const intentar = () => {
      if (entrada.length !== 4) {
        msg.textContent = "El PIN tiene 4 números.";
        return;
      }
      if (estado === "entrar") {
        if (Pin.verificar(entrada)) entrar();
        else fallo("PIN incorrecto. Inténtalo otra vez.");
      } else if (estado === "crear") {
        primero = entrada;
        entrada = "";
        estado = "repetir";
        pintarPuntos();
        pintarTextos();
      } else if (entrada === primero) {
        Pin.guardar(entrada);
        entrar();
      } else {
        estado = "crear";
        primero = "";
        pintarTextos();
        fallo("Los números no coinciden. Empecemos otra vez.");
      }
    };

    const agregar = (d) => {
      if (entrada.length >= 4) return;
      entrada += d;
      Sfx.clic();
      pintarPuntos();
      if (entrada.length === 4) setTimeout(intentar, 200);
    };

    const borrar = () => {
      entrada = entrada.slice(0, -1);
      Sfx.clic();
      pintarPuntos();
    };

    const alTeclado = (e) => {
      if (!overlay.classList.contains("visible")) return;
      if (/^[0-9]$/.test(e.key)) {
        agregar(e.key);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        borrar();
      } else if (e.key === "Enter") {
        e.preventDefault();
        intentar();
      } else if (e.key === "Escape") {
        cerrar();
      }
    };

    function cerrar() {
      overlay.classList.remove("visible");
      document.removeEventListener("keydown", alTeclado);
      entrada = "";
      pintarPuntos();
    }

    /* El teclado se vuelve a enlazar en cada apertura: los botones deben
       usar el estado (entrada/estado) de ESTA puerta, no el anterior. */
    if (teclado) {
      teclado.innerHTML = "";
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "borrar"].forEach((k) => {
        if (!k) {
          teclado.appendChild(el("span", "pin-hueco"));
          return;
        }
        const b = el("button", "pin-tecla" + (k === "borrar" ? " borrar" : ""), k === "borrar" ? "⌫" : k);
        b.type = "button";
        b.setAttribute("aria-label", k === "borrar" ? "Borrar" : "Número " + k);
        b.onclick = () => (k === "borrar" ? borrar() : agregar(k));
        teclado.appendChild(b);
      });
      tecladoPinListo = true;
    }

    btnAceptar.onclick = intentar;
    btnCerrar.onclick = cerrar;
    btnOlvido.onclick = () => {
      if (estado === "entrar") {
        if (
          confirm(
            "¿Olvidaste el PIN? Puedes crear uno nuevo, pero ten en cuenta que así cualquiera podría entrar al área de adultos."
          )
        ) {
          estado = "crear";
          primero = "";
          entrada = "";
          pintarPuntos();
          pintarTextos();
        }
      } else {
        cerrar();
      }
    };

    pintarTextos();
    pintarPuntos();
    overlay.classList.add("visible");
    document.addEventListener("keydown", alTeclado);
    Voz.parar();
  }

  /* ---------------- Panel de progreso (adulto) ---------------- */
  function abrirPanelAdulto(opciones) {
    opciones = opciones || {};
    const alEntrar = opciones.alEntrar || function () {
      Nav.ir("adulto");
    };
    if (opciones.modo === "crear" || !Pin.hay()) {
      abrirPin("crear", alEntrar);
    } else {
      abrirPin("entrar", alEntrar);
    }
  }

  /* ---------------- Forma de las letras (imprenta / cursiva / script) ----------------
     El niño puede elegir con qué "forma de escribir" quiere aprender.
     Se aplica añadiendo una clase al <body>; el CSS decide entonces
     qué tipografía usan las letras, palabras y trazos.             */
  const FUENTES = [
    { id: "imprenta", nombre: "De imprenta", desc: "Letra redonda y clara", icono: "🅰️" },
    { id: "cursiva", nombre: "Cursiva", desc: "Letra enlazada para escribir a mano", icono: "✍️" },
    { id: "script", nombre: "Caligrafía", desc: "Letra de cuaderno, más elegante", icono: "🖋️" },
  ];

  const Fuente = {
    /* CSS font-family de cada modo (para canvas y estilos en línea) */
    familias: {
      imprenta: '"Comic Sans MS", "Comic Neue", "Chalkboard SE", "Trebuchet MS", "Segoe UI", Verdana, sans-serif',
      cursiva: '"Segoe Script", "Lucida Handwriting", "Comic Sans MS", cursive',
      script: '"Lucida Handwriting", "Segoe Print", "Bradley Hand ITC", cursive',
    },
    lista() {
      return FUENTES;
    },
    info(id) {
      return FUENTES.find((f) => f.id === id) || FUENTES[0];
    },
    actual() {
      try {
        return Store.data.configuracion.letra || "imprenta";
      } catch (e) {
        return "imprenta";
      }
    },
    familia(id) {
      return this.familias[id || this.actual()] || this.familias.imprenta;
    },
    /* Aplica la clase al body para que el CSS cambie las letras */
    aplicar(id) {
      const modo = this.info(id || this.actual()).id;
      const b = document.body;
      if (!b) return modo;
      b.classList.remove("letra-imprenta", "letra-cursiva", "letra-script");
      b.classList.add("letra-" + modo);
      try {
        Store.data.configuracion.letra = modo;
      } catch (e) {}
      return modo;
    },
    /* Cambia al siguiente modo y devuelve su info */
    siguiente() {
      const idx = FUENTES.findIndex((f) => f.id === this.actual());
      const nxt = FUENTES[(idx + 1) % FUENTES.length];
      this.aplicar(nxt.id);
      try {
        Store.save();
      } catch (e) {}
      return nxt;
    },
  };

  /* ---------------- Niveles (lectura + matemáticas) ----------------
     Ayuda centralizada para trabajar con las dos áreas sin duplicar
     código en la interfaz. */
  const Niveles = {
    todos() {
      return DATA.niveles.concat(DATA.mateNiveles);
    },
    info(id) {
      const s = String(id);
      return this.todos().find((n) => String(n.id) === s) || DATA.niveles[0];
    },
    area(id) {
      return String(id).charAt(0) === "m" ? "mate" : "lectura";
    },
    deArea(area) {
      return area === "mate" ? DATA.mateNiveles : DATA.niveles;
    },
  };

  return {
    $,
    $$,
    el,
    rand,
    shuffle,
    shuffleFrom,
    Voz,
    Sfx,
    Store,
    Guia,
    Nav,
    Niveles,
    Fuente,
    celebrar,
    vigilarInactividad,
    detenerVigilancia,
    abrirPanelAdulto,
    abrirPin,
    Pin,
  };
})();
