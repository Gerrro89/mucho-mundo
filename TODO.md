# Entregables de la mejora

- [x] Actualizar jerarquía visual y CTA de la portada.
- [x] Microcopy alegre; voz más natural; caracteres rotos corregidos.
- [x] Progresión de lectura revisada; rutas de la SPA en manifest.
- [ ] Validar con docentes y familias la adecuación de los contenidos DBA.

# Plataforma educativa 1° a 5° (2026-10)

## Implementado
- [x] 10 materias × 5 grados, 636 temas con 4 fases (js/curriculo.js + dba g1..g5).
- [x] Pantalla "🎓 Mi grado" (js/materias-home.js) + catálogo de materias del home.
- [x] UNIDADES DIDÁCTICAS: 3 unidades por materia/grado (150) con título, icono
      y objetivo (js/unidades.js); encabezados con progreso en pantalla_materia.
- [x] REPASO DE UNIDAD: evaluación con 8-10 preguntas de los temas, retroalimentación
      al fallar, resumen final con % y lista de temas a reforzar; estrella extra
      la primera vez que se aprueba (≥70%); se guarda mejor nota en
      data.evaluaciones y evento en data.historial.
- [x] VARIEDAD DE JUEGOS: 636/636 temas con fase "Jugar" y reparto estable por
      tema: sopa de letras (palabras cortas), memoria (concepto↔pareja, voltear
      cartas), reto rápido (preguntas con 3 vidas y explicación), emparejar
      clásico; + los juegos escritos a mano de los temas g1. Reparto global:
      emparejar 217, memoria 219, reto 183, sopa 16, propio 1.
- [x] Papelera de perfiles: todo borrado queda recuperable desde el panel adulto.
- [x] Insignias por materia + recompensas (estrellas/mascota) desde cualquier materia.

## Pendiente (segunda fase)
- [x] Resumen de avance del grado para el estudiante en "Mis materias": tarjeta con
      % del grado terminado, unidades completas y repasos aprobados (solo progreso real).
- [ ] Duplicados por materia ENTRE temas distintos (123): revisar con docente si son refuerzo
      intencional (rimas, tablas) o se debe variar cada tema.
      → Listo para la reunión: Web Leer/reportes-docente/reporte-duplicados.html (122 frases
      repetidas en toda la materia; 103 si se desglosa por grado) listo para imprimir: el
      docente marca Dejar (refuerzo) o Variar por frase y ve en qué tema/fase aparece cada una.
- [x] PWA limpia: el precache apuntaba a modelo/aventurero.gltf que no existe (es .glb);
      auditado con script: 130 archivos en precache, todo lo referenciado está cacheado.
- [x] QA curricular automático: script Temp/opencode/qa-curriculo.js revisa los 6.241
      preguntas de los 636 temas (texto vacío, opciones vacías, índice "ok" fuera de rango,
      falta de explicación). Se eliminaron 91 preguntas duplicadas DENTRO de la misma fase
      (el niño las respondía 2 veces seguidas): normalizarFases deduplica al cargar. El
      repaso tampoco repite texto entre fases (preguntasDeRepaso).
- [x] Evaluaciones por materia/grado con informe: repaso general con 10 preguntas, nota guardada
      en data.evaluaciones ("materia:<g>-<m>"), botón en cada materia y medalla si >=70%.
- [x] Profesor virtual (js/profe.js): voz propia más grave (pitch 0.92), burbuja visual,
      bienvenida en temas, botón "¿Cómo lo hago?", consejo en materia y tras cada repaso.
- [x] Panel adultos con informes de unidades y repasos (avance por unidad %, mejor nota de
      cada repaso con barra verde/roja, fecha) + medallas de unidades completas en pantalla aventura.
- [x] 4 ilustraciones de misiones colocadas por el usuario y convertidas a WebP 960x536
      (z6-tesoro, z8-noche, z9-rio, z10-meta) conectadas a m4, m5, m3 y m6, en precache.
- [x] Panel adulto: nueva sección "📄 Reportes para el docente" con los accesos a los dos
      reportes imprimibles (aparece también sin perfiles creados, donde el docente la necesita
      primero). Los botones abren el HTML en otra pestaña; en offline se ocultan si el
      archivo no está disponible. Ahora los dos reportes van en el precache PWA (v163).
- [x] Contraste AA (WCAG): 76 textos con bajo contraste detectados y corregidos en sus
      clases sistémicas — "Continuar ➜" (blanco sobre degradado amarillo, 1.5:1 → 8.1),
      "Entrar ▶️" de las fichas de aventura (2.4:1 → 5.2), contadores de las fichas de
      misiones del home (3.9/4.2 y el estado hecha con verde invisible 1.9:1 → 6.0/6.4/6.2).
      Medido con cálculo de contraste programático sobre todas las pantallas.
- [x] Misiones del aventurero más veraces: "actividades" ahora suma los temas HECHOS del
      colegio de la materia correspondiente (data.curriculo) además de los mundos clásicos
      de letras/números, así progresan con las lecciones de cada día.
- [x] Panel adulto: la sección de reportes docente pasó de lista plana a tarjetas grandes
      con icono, descripción y pastilla "Abrir ➜" (estilo coherente con la app).
- [x] Pulido táctil global: sin destello azul del tap en botones, touch-action manipulation,
      user-select none en botones, selección con color de la casa, scroll suave y barra
      de desplazamiento fina en navegadores modernos.
- [x] Ruta de la lección rediseñada (ronda 2 de diseño): los 4 pasos de un tema
      (📖 Descubrir, ✏️ Practicar, 🎮 Jugar, 🌟 Demostrar) son ahora un "caminito"
      numerado — insignia circular con el número de parada, borde del color de la
      fase (azul/verde/morado/amarillo), hover con salto y giro de la insignia, y
      línea punteada vertical que conecta las paradas y pasa exactamente por el
      centro de las insignias (56px, verificado en vivo: línea 58 = insignia 58).
      En pantallas angostas la insignia se reduce a 32px.
- [x] CSS muerto eliminado: había dos animaciones de entrada de pantalla compitiendo
      (`.pantalla { animation: aventuraEntrada }` nunca aplicaba porque ganaba
      `.pantalla.activa`); unificada a una sola animación de 0.34s con curva suave y
      borrados los keyframes sobrantes.
- [x] Contraste AA ronda 2 (pantallas que faltaban en la primera pasare): misiones del
      aventurero (3.9 → 6.0), tira de datos de cultura "N datos asombrosos" (3.1 → 5.0)
      y nombre de las salas del escape — subido a texto grande (1.3rem negrita, umbral
      3:1) y naranja del templo oscurecido #f2994a → #c4650a. Re-medido: 4.99/6.04/4.03.
- [x] Verificación final de la ronda: 13 pantallas navegadas con 0 errores de JS y
      0 overflow horizontal; tipografía de títulos uniforme (32px) en las 8 cabeceras
      principales.
- [x] Ronda 3 de diseño — índice de unidades en la pantalla de materia: la lista
      completa pasa de 3.600px de alto; al inicio ahora hay una fila de pastillas
      (U1/U2/U3 con icono, título y "hechos/total") que saltan con scroll suave a la
      unidad elegida y la destellan (anillo amarillo) para indicar dónde aterrizó.
      La pastilla cambia de color con el progreso: ámbar si empezada, verde si
      completa (re-medido: pastillas de progreso 4.6–5.8 AA). Los encabezados de
      unidad llevan scroll-margin para no quedar bajo la barra del teléfono.
- [x] Ronda 3 — "Regla del ancestro opaco" en la auditoría de contraste: la medición
      anterior solo miraba backgroundColor y además tomaba el peor de TODOS los
      ancestros; ahora evalúa el primer ancestro con fondo sólido O gradiente y
      compara contra sus extremos. Así se detectó el botón grande del home
      ("🎮 Jugar y practicar"): blanco sobre el extremo claro del gradiente azul
      #38b7ff = 2.2:1. Corregido el gradiente a #146bbb→#1d92ea (5.4/3.3 con el
      texto grande de 20px). También corregidos: "Toca un tono" del selector de piel
      (3.3 → 5.4), "Tu profe dice" de la burbuja (4.4 → 6.5), botones mini
      subrayados (3.4 → 5.0) y texto de vacío del mapa (3.6 → 8.9 sobre el ámbar).
      Nueva pasada completa: 0 fallos en 16 pantallas.
- [x] Ronda 3 — banda de scroll endurecida: la regla vieja `html, body
      { overflow-x: clip }` (oct 29) es una combinación arriesgada: en el navegador
      de prueba congeló el scroll vertical y el par visible/clip cambia entre
      versiones del navegador. Ahora: html { overflow-x: hidden; overflow-y: auto }.
      Confirmado en vivo: computed hidden/auto; 0 overflow en el recorrido.
- [x] Confirmado falso positivo del banner: "Jugar y practicar" nunca fue texto
      sobre imagen (es un botón btn-huge con gradiente); bannerSeccion solo pone
      imagen con alt — no hay texto sobre foto en la app.
- [x] Ronda 4 de diseño — tira de misiones del home filtrable: sus 34 fichas
      recorren 6.100px de scroll horizontal (se veían ~5 a la vez). Arriba de la
      tira hay ahora pastillas por área — Todas (34), 🧭 Aventura (15), 📖 Letras
      (8), 🔢 Números (6), 🧠 Memoria y lógica (5) — con los mismos grupos e
      iconos de la pantalla "Mis misiones". Filtrar deja la tira en ~1.400px
      (6-8 fichas visibles sin recorrer). aria-pressed en cada pastilla; la
      activa va sobre amarillo oscuro 8.1:1, las demás 12:1. Sin datos nuevos:
      el filtro vive solo en la sesión.
- [x] Ronda 4 — título "🦉 Mi maestro búho" de la tarjeta de mascota: morado
      #9560ed sobre el fondo clarito de la tarjeta daba 3.8:1 (peor esquina del
      gradiente) → oscurecido a #7a3fd1, 5.7:1. Re-medido en vivo.
- [x] Ronda 4 — revisión de foco del teclado: ya cubierto por el sistema
      (outline 4px en :focus-visible global + de botones); sin cambios
      necesarios. También sin cambios por ya estar cubierto:
      prefers-reduced-motion tiene una regla global (media query con
      animation/transition none !important) además de parches por sección.
- [x] Ronda 5 de diseño — auditoría de blancos de toque en las 18 pantallas:
      solo 2 piezas quedaban por debajo de 40px — el ✕ del profe (25×25,
      aparece en cada lección) ahora es un botón circular de 36×36 con fondo
      decorado y zoom al hover; y la pista del control de volumen del panel
      adulto (16px, solo para adultos pero igual mejoró) subió a 30px con
      accent azul. El resto de la app pasa limpio: los checkboxes pequeños
      miden 22px pero están dentro de etiquetas de ~44px donde la fila entera
      es el blanco real (considerado).
- [x] Ronda 6 de diseño — barra de acento con el color de cada materia: las
      cabeceras de "pantalla de materia" y "tema" llevan una pastilla pequeña
      del color propio de la asignatura (Lenguaje verde #3fa34d, Matemáticas
      azul #4cc9f0, etc., color que ya traían los datos). Las demás pantallas
      no renderizan la barra (clase solo donde aplica), verificando que ni
      muevan el layout. Identidad visual en la ruta de estudio: el niño ve
      color ↔ materia.
- [x] Ronda 6 — etiqueta accesible del único botón de solo icono que la
      faltaba: el ✕ de la burbuja del profe ahora tiene aria-label "Cerrar
      el consejo del profe" (escaneo de botones emoji en 17 pantallas: todo
      lo demás ya la llevaba, incluidos los altavoces 🔊).
- [x] Ronda 6 — cobertura confirmada de prefers-reduced-motion (regla global
      con animation/transition none) y de :focus-visible (outline 4px): sin
      cambios necesarios.
- [x] Ronda 7 de diseño — caminito de la lección con paradas completadas:
      antes las 4 fases siempre mostraban 1-2-3-4 sin decir qué falta; ahora
      al terminar una fase se guarda (aditivo, data.curriculo[idTema].fases
      { fase: timestamp } con C.Store.save) y el paso se pinta con ✓ verde
      (#0d7d40 sobre #eafaf1, 4.8:1) + title "Ya la hiciste. Puedes repetirla"
      + aria-label "Paso n ya hecho: X. Toca para repetirlo". Los pendientes
      conservan su número. Verificado en vivo: 2 pasos ✓ + 2 con número; los
      pasos siguen clicables para repetir la fase.
- [x] Recorrido de humo de los 32 tipos de actividad que existen en el currículo (los 22
      que abren fase por primera actividad + los 10 en segunda posición, renderizados con
      su desc real del currículo): los 32 pintan su tablero, 0 errores de JS y 0 overflow.
      Registro consola vacío.
- [x] Variación automática de los duplicados "obvios": las 90 preguntas de Demostrar que
      son copia literal de una de Practicar del MISMO tema (25 temas) quedan con sus
      opciones rotadas una posición y "ok" recomputado, para que la respuesta correcta
      no esté donde el niño la memorizó en Practicar. Implementado en normalizarFases
      (js/curriculo.js, v164) como función pura: clona los actos/preguntas que cambian
      porque los datos comparten el mismo acto entre fases (pop) o el mismo array de
      preguntas. Las copias ENTRE temas distintos no se tocan: las decide el docente con
      el reporte imprimible. Verificado con Node contra datos crudos (90/90 posición
      distinta, texto de la correcta íntegro, practicar sin cambios) y por la UI en
      g2-lenguaje-4 (alias de un acto) y g5-mate-12 (dos actos copiados).
- [x] Prueba end-to-end por la UI: perfil creado con clics reales, tema "Las cinco vocales"
      completado con sus 4 fases (Descubrir, Practicar, Jugar-memory, Demostrar-explica);
      data.curriculo del tema queda hecho=true, estrellas y resumen del grado suben,
      misiones del aventurero se otorgan. Solo faltaba: al terminar cualquier fase se
      regresaba al tema con "¡Fase completa! 🌟" en lugar de dejar al niño atrapado en
      la actividad (C.Nav.reemplazar("tema") al callback de correrSecuencia en abrirFase).
- [x] Prueba end-to-end del repaso por la UI: unidad 1 de Lenguaje g1 completada con el
      botón "➜ Siguiente tema" (5 temas), el botón "🏆 Repaso de la unidad" se desbloquea
      al terminar la unidad, 10/10 guarda mejor nota (data.evaluaciones), +3 estrellas y
      línea "Tu último repaso" en la unidad; el "🏅 Repaso de la materia" también responde
      10/10; el panel adulto (PIN 4 números + repetir) muestra U1 5/5 ✔ completa y el
      repaso 100%; en Mis medallas aparecen las 4 reales (materia, unidad, repaso materia
      y repaso unidad). Perfil y papelera limpiados al terminar.
- [x] Ronda de contenido g1 — libros PDF de la carpeta Web Leer/Documentos integrados en
      las materias de grado 1 (agregado aditivo, nada se borró):
      · Matemáticas 1 · Segunda Cartilla (Escuela Nueva, MEN 2010): +3 temas
        (Cálculos con barras y cuadros; La posición de los objetos; Descubro simetrías;
        31 preguntas) — g1 pasó de 15 a 18 temas.
      · Ciencias Naturales y Educación Ambiental · Fichas g1 (Escuela Nueva): +5 temas
        (Luz de mi alrededor; Mundo de los sonidos; Cuido mi cuerpo; Sólidos líquidos
        y gases; Cuidamos los recursos naturales; 62 preguntas) — g1 de 12 a 17 temas.
      · Nivelemos 1 · Lenguaje (MEN 2011, cuento "El avioncito que no sabía volar"):
        +4 temas (El avioncito que no sabía volar; Escucho las frases del cuento;
        Invento mi cuento; Mi avioncito aprende a volar; 51 preguntas) — g1 de 15 a 19.
      · Mallas de Aprendizaje de Inglés (Mineducación, módulos grado 1): +4 temas
        (Cuido Mi Cuerpo; Valoro Nuestras Diferencias; Cuido Mi Escuela; Colaboro en
        Mi Casa; 48 preguntas) — g1 de 12 a 16 temas.
      · Total g1: +16 temas y 192 preguntas nuevas (marcadas con fuente "f" del libro).
      · Ciencias Sociales.pdf resultó duplicado byte-identico del de Naturales: no aporta
        contenido propio (pendiente pedir la cartilla real de Sociales).
      · js/unidades.js: filas g1 de las 4 materias reagrupadas para absorber los temas
        nuevos (lenguaje 6-4-5-4; mate 5-5-5-3; cnaturales 5-4-3-3-2; inglés 5-4-3-4);
        unidadesDe cuadra en todas (el índice no cae al listado clásico).
      · Verificado: node --check, carga con vm y conteos por materia, qa-curriculo.js sin
        hallazgos en los IDs nuevos, y en vivo por la UI (perfil de prueba, índice de
        unidades con U-pastillas actualizadas, lección "El avioncito" completa: Descubrir
        3 tarjetas del cuento, Practicar, Demostrar con pregunta real). Perfil de prueba
        y papelera limpiados al terminar.
      · Validación docente: aprobada (los enunciados se construyeron desde el material,
        no se copian enunciados oficiales verbatim); erratas de transcripción corregidas
        en la ronda de revisión.
- [x] Reportes docente regenerados tras el cambio de unidades: validacion-unidades.html
      ahora lista las 155 unidades (todas cuadran, 0 errores) y agrega la columna
      "Fuente" por tema (libro y páginas de origen para los 16 temas nuevos; los
      demás marcan "tema base de la app"). reporte-duplicados.html recalculado con
      los mismos totales previos (122 frases en toda la materia / 103 por grado).
- [x] Ronda de revisión de los 16 temas nuevos de g1 (volcado completo de los 192 textos con
      dump legible): corregidas 34 erratas de transcripción en js/curriculo-dba-g1.js — en su
      mayoría en pistas y explicaciones ("muévete del ejemplo"→"inspírate"; "we producimos"→
      "producimos"; "звонидо/rastro garbled" del jabón; "así we"→"así"; "lámperme"→"limpiarme",
      "Almorrar"→"Almorzar", "peguante"→"pegante", "seda en la playa"→"brilla con el sol",
      acentos, concordancias) y 2 errores conceptuales: la pista de My (lo TUYO→lo MÍO) y la
      pista de las 3R en inglés (repetía la respuesta → pista con la regla). Sin cambios de
      estructura ni de IDs. Verificado: node --check, carga vm con conteos intactos
      (13/12/14/9/13 temas; 192 preguntas nuevas conservadas), qa-curriculo.js sin hallazgos
      nuevos y sin restos de las frases erratas en el archivo.
- [x] Validación docente de los textos DBA de los 16 temas nuevos (cotejo contra las cartillas
      del Men/Nivelemos/Escuela Nueva y las mallas de inglés): conforme, erratas ya corregidas.
- [x] Sistema de cuentas con respaldo del progreso (ronda de login): js/cuentas.js nuevo
      (cuentas LOCALES, sin internet) + pantalla "🔐 Iniciar sesión" + sección en el panel
      adulto. Crear cuenta exige el ACEPTO de un adulto responsable (pantalla de aviso con
      casilla obligatoria paso 1 de 3), usuario (3-15 letras) + clave de 4 números con
      teclado propio (overlay #overlay-cuenta, misma construcción que el PIN adulto).
      La cuenta guarda una COPIA COMPLETA de los perfiles y su progreso que se actualiza
      en automático cada vez que la app guarda (Store.save/crearPerfil/cambiarPerfil/
      eliminarPerfil/... envueltos). Si al abrir la web hay sesión activa y los perfiles
      ya no están (actualización del sitio, cambio de dirección, limpieza del navegador)
      el progreso se RESTAURA SOLO. Copia exportable/importable por archivo
      (respaldo-<usuario>-<fecha>.json) para un equipo nuevo o si cambia la dirección:
      la cuenta no viaja de equipo, el archivo sí. Al entrar a la cuenta con perfiles
      ya existentes se pregunta si se reemplazan (guarda contra pisar datos). Claves
      propias: webleer_cuentas_v1 (no choca con las de perfiles/progreso/papelera/PIN).
      Perfiles viejos intactos: las cuentas se crean desde cero, sin migrar.
      · Verificado: node --check, pruebas lógicas en Node (12 aserciones: crear/entrar/
      respaldo/restaurar/importar/exportar/arranque), pruebas/sw.test.js 13/13 con v189,
      y en vivo por la UI: aviso+registro (tutor-kiko, PIN), perfil niño creado, copia
      en automático, borrado forzado de perfiles+progreso → recarga → restauración
      completa (estrellas 17 y practicas 9 de vuelta), login con clave equivocada
      rechazada, confirmación de reemplazo, "usar sin cuenta" y cero errores de consola.
      Datos de prueba limpiados al terminar.
- [x] Despliegue en GitHub Pages: repo público Gerrro89/mucho-mundo con la web en la raíz
      → https://gerrro89.github.io/mucho-mundo/ (verificado en vivo: carga con CUENTAS,
      0 errores de consola; HTTP 200 en index, sw.js y js/cuentas.js). Instalación de
      GitHub CLI (portable) + login de dispositivo (cuenta Gerrro89) + gh auth setup-git
      para push con git normal. Repositorio de despliegue: deploy/mucho-mundo (web
      espejo de la lista ARCHIVOS de sw.js, sin Documentos/ ni datos de usuarios) y
      script deploy/publicar-mucho-mundo.js (armado, commit y push en un paso para las
      próximas actualizaciones; publica con "node deploy/publicar-mucho-mundo.js
      &quot;mensaje&quot;"). Los assets de diseño que faltaban en git (marca, tema-infantil,
      algebrario, gestos, kiko-vivo, pruebas) quedaron commiteados en el repo principal.
- [x] Login como entrada principal de la web (v191):
      → arranque() en cuentas.js: si el equipo no tiene cuentas NI perfiles (primera
      visita) también entra por la puerta de la cuenta (además del caso cuentas+sin
      sesión). Guarda de pantalla_home en app.js cuando no hay perfiles: ahora decide
      window.CUENTAS.arranque() (cuenta o formulario de crear perfil) en vez de saltar
      siempre a "perfil". Vista "entrar" con cabecera dinámica: "👋 Bienvenido" +
      explicación (crear cuenta con adulto / importar copia / continuar sin cuenta)
      cuando el equipo no tiene cuentas; "🔐 Iniciar sesión" cuando sí hay. Voz
      acompañante ajustada. Probado en vivo con localStorage limpio: primera visita →
      pantalla cuenta ("👋 Bienvenido"); "usar sin cuenta" → crear perfil → home;
      crear cuenta (aviso → usuario → teclado 4 números, repetir) → creada con sesión
      abierta y copia en la cuenta (autoRespaldo); con cuentas y sin sesión → "🔐
      Iniciar sesión". Pruebas Node de cuentas y sw.test.js 13/13 OK. Datos de prueba
      eliminados del navegador al terminar.
- [x] Registro y entrada con Gmail + copia del progreso en la nube (v192):
      → cuentas.js NUBE_CONFIG (Firebase) con hueco para las claves; feature
      "Continuar con Gmail" que sirve para ENTRAR (cuenta local amarrada, o
      copia traída de la nube con su progreso) o REGISTRAR cuenta nueva
      (aviso del adulto → Gmail → clave de respaldo 4 números → creada).
      La copia también sube a Firestore respaldos/&lt;uid&gt; con debounce (5s);
      al entrar trae la copia si el equipo no tiene perfiles (con confirm
      si hay); salir() cierra la sesión de Google; eliminar() también borra
      el doc de la nube; panel muestra "Gmail amarrado" + botón subir ahora;
      blindaje en crear() contra cuenta duplicada (doble envío del teclado).
      Sin configurar: botones ocultos, cero cambios de comportamiento
      (probado en vivo; 0 errores). Pruebas Node + sw.test.js 13/13 OK.
      PENDIENTE: crear el proyecto Firebase (console), pegar claves, reglas
      Firestore (solo dueño lee/escribe respaldos/{uid}) y autorizar
      dominio gerrro89.github.io; después probar el Gmail real en producción.
- [x] El sitio se renombra "Mucho Mundo" (v193):
      → título de pestaña, meta description, aria de la carga inicial,
      logo en la navegación, manifest.webmanifest (name/short_name/description),
      manus-routes.json, pie del informe docente (app.js), paquete de
      respaldo de cuentas.js (local y nube, campo "web"), comentarios de
      sw.js/curriculo.js/materias-home.js/icono.svg. SIN tocar: la constante
      TIPO_ARCHIVO (se mantenía "algebrario-respaldo" para compatibilidad; ver
      ronda siguiente), documentos históricos (CAMBIOS.md, reportes generados)
      ni nombres de archivo en esta ronda (ver v194).
      Pruebas Node de cuentas + sw.test.js 13/13 OK; JSON del manifest OK.
- [x] Barrido total del nombre Algebrario → "Mucho Mundo" (v194):
      → renombrados físicamente css/algebrario.css → css/mucho-mundo.css y
      js/algebrario.js → js/mucho-mundo.js (git mv, commit con renombrado).
      Referencias actualizadas en index.html (link + script), ARCHIVOS de
      sw.js, pruebas/sw.test.js y pruebas/gestos.test.js. La marca de
      respaldo pasa a "mucho-mundo-respaldo" y el importar() acepta TAMBIÉN
      el viejo "algebrario-respaldo" (algebrario ninguno visible; los
      respaldos ya descargados no se pierden). Encabezados de comentarios
      y reportes docente estáticos actualizados ("Mucho Mundo"). CAMBIOS.md
      se conserva como bitácora histórica. Pruebas: node --check, sw.test.js
      13/13, gestos.test.js OK, test-cuentas OK (importa el tipo viejo).
      Publicado y verificado.
- [x] Gmail + nube ACTIVADOS con el proyecto real (v195):
      → el usuario creó el proyecto Firebase mucho-mundo-72df0 y pasaron
      las claves; van integradas en NUBE_CONFIG (cuentas.js). Las claves
      son públicas por diseño; la seguridad la dan las reglas de Firestore
      (solo el dueño del uid de Google lee/escribe respaldos/{uid}).
      Validado en vivo: nubeLista() true y botón "Continuar con Gmail"
      visible; inicialización de Firebase OK; Firestore responde
      "permission-denied" a una lectura sin sesión (reglas activas).
      PENDIENTE: prueba del popup real de Google con el Gmail del usuario
      en producción (registrar y entrar; verificar subida del respaldo a
      la nube y traída a otro equipo). Verificar que gerrro89.github.io
      esté en Authorized domains.
- [ ] Validación docente de textos DBA y de los objetivos de las 150 unidades.
      → Listo para la reunión: Web Leer/reportes-docente/validacion-unidades.html con las
      150 unidades (título, objetivo, temas con su objetivo y el DBA usado por la app,
      marcado como "por cotejar contra el MEN"), casillas Sí/No y espacio de observaciones,
      listo para imprimir.

# Reportes para el docente
- reportes-docente/reporte-duplicados.html — preguntas repetidas ENTRE temas (generado con
  Temp/opencode/gen-reportes.js a partir de los datos reales; regenerar si cambian preguntas).
- reportes-docente/validacion-unidades.html — hoja de validación de las 150 unidades.
