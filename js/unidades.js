/* =========================================================
   UNIDADES DIDÁCTICAS
   Agrupa los temas de cada materia/grado en unidades con
   título, objetivo e icono. Cada unidad toma un número de
   temas consecutivos del listado; las cantidades suman
   exactamente el total de temas de esa materia en el grado
   (unidadesDe lo verifica: si no cuadra, devuelve null y la
   pantalla muestra el listado clásico).
   Nota: los objetivos resumen los objetivos de los temas de
   la unidad. Pendiente de validación docente (ver TODO.md).
   ========================================================= */
window.UNID = (function () {
  "use strict";

  /* Cada unidad: [icono, título, objetivo, número de temas] */
  const DEF = {
    lenguaje: {
      g1: [
        ["🔤", "Mis primeras letras", "Reconozco las vocales, la M, la P y la S, armo mis primeras sílabas, leo mis primeras palabras, escribo con orden y entiendo lo que escucho.", 6],
        ["🎵", "Sueno y rimo", "Escucho el sonido inicial y final de las palabras, juego con rimas y leo frases cortas.", 4],
        ["🌟", "Escribo y comprendo", "Uso mayúsculas y puntos, escribo mis ideas, nombro mis emociones y entiendo lo que leo.", 5],
        ["✈️", "El avioncito que no sabía volar", "Vivo el cuento del avioncito: comprendo sus frases, invento mi propio cuento y lo escribo paso a paso.", 4],
      ],
      g2: [
        ["📖", "Leo mejor cada día", "Leo con fluidez, sigo a los personajes y reconozco el inicio, el nudo y el desenlace.", 3],
        ["🇨🇴", "Cuentos y fábulas de mi tierra", "Leo cuentos y fábulas colombianos, deduzco la moraleja y escribo con mayúscula y signos.", 5],
        ["✨", "Creo y comprendo", "Invento un cuento, juego con versos que riman y hallo la idea principal de lo que leo.", 5],
      ],
      g3: [
        ["📰", "Textos que informan", "Reconozco textos informativos, hallo su tema, título y datos clave, y la idea principal.", 4],
        ["✏️", "Escribo mis primeros párrafos", "Uso conectores, ordeno oraciones y escribo un párrafo con sentido.", 4],
        ["🗣️", "Comprendo y debato", "Respondo quién, qué, cuándo, dónde y por qué; uso el contexto y debato con respeto.", 4],
      ],
      g4: [
        ["🔍", "Leo entre líneas", "Comprendo e infiero, distingo hechos de opiniones y deduzco el significado de palabras nuevas.", 4],
        ["🎭", "El lenguaje con imágenes", "Reconozco metáforas y comparaciones, y elijo adjetivos precisos para describir.", 5],
        ["🏞️", "Describo y ordeno", "Escribo descripciones de personas y lugares, y ordeno mis ideas con conectores.", 4],
      ],
      g5: [
        ["🧭", "Leo con ojo crítico", "Distingo hechos de opiniones, evalúo fuentes, resumo y reviso mis propios textos.", 4],
        ["⚖️", "Argumento con evidencias", "Defiendo una idea con razones y ejemplos, conecto ideas y puntuo con sentido.", 5],
        ["✒️", "Pulido y debate", "Uso tildes diacríticas y signos de tono, corrijo con lista de cotejo y debato con respeto.", 4],
      ],
    },

    mate: {
      g1: [
        ["🔢", "Cuento y comparo", "Cuento hasta 20, escribo los números y comparo cantidades mientras sumo y resto con objetos.", 5],
        ["🔀", "Patrones y números grandes", "Reconozco figuras y patrones, cuento hasta el 100 y completo secuencias de números.", 5],
        ["➕", "Sumo, resto y mido", "Sumo y resto hasta 10, resuelvo problemas diarios, reconozco figuras planas y mido con clips y tapas.", 5],
        ["📊", "Barras, posición y simetría", "Represento cantidades con barras y cuadros, ubico objetos en el espacio y descubro simetrías.", 3],
      ],
      g2: [
        ["🔢", "Números, sumas y restas", "Conozco las centenas, sumo y resto con reagrupación y empiezo a multiplicar.", 4],
        ["📏", "Medir, comparar y operar", "Organizo datos con medidas y domino las centenas comparando, sumando y restando.", 5],
        ["📊", "Multiplico y resuelvo", "Practico las tablas, leo pictogramas, uso monedas y sigo patrones para resolver problemas.", 5],
      ],
      g3: [
        ["✖️", "Multiplico y divido", "Aplico las tablas, reparto en partes iguales y descubro el residuo de una división.", 5],
        ["🍰", "Las primeras fracciones", "Comparo fracciones con dibujos y hallo la mitad, el tercio o el cuarto de una cantidad.", 5],
        ["📐", "Áreas y gráficos", "Mido y comparo áreas en cuadrículas e interpreto gráficos de barras.", 4],
      ],
      g4: [
        ["🤝", "Multiplico, divido y simplifico", "Resuelvo multiplicaciones y divisiones, transformo fracciones y las comparo.", 5],
        ["🍰", "Fracciones y decimales", "Convierto fracciones en decimales y sumo y resto fracciones y decimales en compras.", 5],
        ["🎲", "Geometría y azar", "Clasifico ángulos y polígonos y registro experimentos con dados y monedas.", 4],
      ],
      g5: [
        ["🧠", "Números en acción", "Respeto la jerarquía de operaciones, domino fracciones y decimales y uso porcentajes.", 5],
        ["🏗️", "Áreas, perímetros y promedio", "Calculo áreas y perímetros de figuras compuestas y hallo el promedio de unos datos.", 5],
        ["🧩", "Datos, primos y propiedades", "Identifico mediana y moda, descompongo con números primos y uso potencias.", 4],
      ],
    },

    cnaturales: {
      g1: [
        ["🧒", "Mi cuerpo y mis sentidos", "Reconozco los seres vivos, nombro las partes de mi cuerpo, cuido el planeta y observo con la vista.", 5],
        ["👂", "Oído, olfato, gusto y tacto", "Uso mis oídos, mi nariz, mi lengua y mis manos para conocer el mundo.", 4],
        ["🌱", "¿Vivo o no vivo?", "Sé qué necesitan los seres vivos y distingo lo vivo de los objetos inertes.", 3],
        ["💡", "Luz, sonido y cuerpo", "Descubro las luces y los sonidos de mi alrededor y aprendo hábitos para cuidar mi cuerpo.", 3],
        ["🧪", "Materia y recursos", "Clasifico sólidos, líquidos y gases y cuido los recursos naturales de mi entorno.", 2],
      ],
      g2: [
        ["🌿", "Plantas, materiales y movimientos", "Describo plantas y animales, propiedades de los materiales y movimientos de objetos.", 3],
        ["🐣", "Nacer y crecer", "Describo el ciclo de la rana, de la semilla a la flor, y los tres estados de la materia.", 4],
        ["💧", "El agua, la luz y el sonido", "Describo cómo el agua cambia de estado, cómo se forman las sombras y cómo viaja el sonido.", 5],
      ],
      g3: [
        ["🌍", "Vida y materia", "Describo ciclos de vida, ecosistemas, cambios de la materia, la luz y el sonido.", 4],
        ["🐛", "Animales y plantas", "Reconozco grupos de animales con y sin esqueleto, las partes de las plantas y los insectos.", 4],
        ["🧲", "Cuidar el agua y las fuerzas", "Protejo el agua y la tierra de la contaminación, y describo las fuerzas, la gravedad y los imanes.", 5],
      ],
      g4: [
        ["🫀", "Cuerpo, ecosistemas y energía", "Describo los sistemas del cuerpo, las adaptaciones de los ecosistemas y las formas de energía.", 4],
        ["🦅", "Cadenas de la vida", "Armo cadenas y redes tróficas y distingo la masa del peso.", 5],
        ["⚖️", "Materia y funciones vitales", "Mido el volumen y describo la nutrición, la relación y la reproducción de los seres vivos.", 4],
      ],
      g5: [
        ["🧬", "Vida y sistemas", "Describo los sistemas del cuerpo, la reproducción, los ecosistemas y la corriente eléctrica.", 4],
        ["🫁", "El cuerpo por dentro", "Sigo la digestión, la circulación de la sangre, el sistema nervioso y a los huesos con los músculos.", 4],
        ["🥃", "Mezclas y circuitos", "Separo mezclas por filtración, tamizado y decantación, y comparo circuitos en serie y paralelo.", 5],
      ],
    },
    csociales: {
      g1: [
        ["🏠", "Mi familia y mi casa", "Reconozco mi familia y sus normas, ayudo en casa y cuido mi escuela con los símbolos patrios.", 5],
        ["🤝", "Vivir juntos en el salón", "Me presento, cumplo las normas del salón, comparto el juego y uso por favor y gracias.", 4],
        ["🗺️", "Mi camino y mi barrio", "Recorro seguro mi camino, me ubico con derecha e izquierda y conozco los lugares de mi barrio.", 3],
      ],
      g2: [
        ["🧒", "Mi historia y mi comunidad", "Cuento mi historia familiar y comparo cómo se vive en el campo y en la ciudad.", 4],
        ["🏥", "Servicios y derechos", "Conozco los servicios de mi comunidad y los derechos que protegen mi educación, mi juego y mi descanso.", 4],
        ["🧭", "Me ubico y cuido mis derechos", "Pido ayuda cuando alguien no respeta mis derechos y me guío con los puntos cardinales y el sol.", 4],
      ],
      g3: [
        ["🏘️", "Mi municipio y mi mapa", "Reconozco mi municipio, la diversidad de Colombia, sus mapas y sus instituciones.", 4],
        ["🏔️", "Relieves, ríos y climas", "Diferencio montañas y llanuras, ubico costas y ríos y conozco las zonas térmicas y los pueblos indígenas.", 4],
        ["🎉", "Culturas de mi país", "Valoro las comunidades afrocolombianas, las fiestas y tradiciones regionales y ubico mi lugar en Colombia.", 4],
      ],
      g4: [
        ["🇨🇴", "Colombia de hoy", "Reconozco las regiones, el trabajo de la gente y los derechos de todos los colombianos.", 4],
        ["🏛️", "El país y sus poderes", "Describo el relieve y los ríos de Colombia y entiendo cómo se organiza el Estado.", 5],
        ["📜", "Historia y autoridades", "Reconozco cómo se eligen las autoridades y repaso la época indígena, la conquista y la Colonia.", 4],
      ],
      g5: [
        ["🗺️", "Colombia en el mapa", "Recorro la historia y el territorio de Colombia y ubico sus departamentos y capitales.", 4],
        ["☕", "El país moderno", "Identifico fronteras y ciudades, y explico los cambios del siglo XX y el papel del café.", 4],
        ["✊", "Ciudadanía de la infancia", "Explico la Constitución de 1991, los derechos de la niñez y los Derechos Humanos.", 4],
      ],
    },
    ingles: {
      g1: [
        ["👋", "Hello! Saludos y presentaciones", "Saludo en inglés, nombro colores y números, y pregunto cómo estoy.", 5],
        ["🎨", "Colours y cosas del salón", "Me despido, nombro los colores y los objetos de mi salón en inglés.", 4],
        ["👂", "Escucho y actúo", "Entiendo y sigo instrucciones sencillas en inglés: escuchar, abrir, mirar y señalar.", 3],
        ["🌍", "Módulos del Currículo Sugerido", "En inglés cuido mi cuerpo, valoro nuestras diferencias, cuido mi escuela y colaboro en mi casa.", 4],
      ],
      g2: [
        ["👨‍👩‍👧", "Mi familia y yo", "Presento a mi familia, nombro alimentos, colores y juguetes en inglés.", 4],
        ["🐄", "Animales y familias", "Digo quién es cada familiar con he y she, y nombro animales de la granja y de Colombia.", 4],
        ["🎒", "Cosas del salón", "Reconozco sonidos de animales, nombro objetos del salón y los describo con adjetivos.", 4],
      ],
      g3: [
        ["👕", "Instrucciones y ropa", "Sigo instrucciones, describo rutinas y nombro la ropa en inglés.", 4],
        ["👀", "Colores y descripciones", "Digo qué color llevo puesto y describo cabello y ojos con have.", 4],
        ["🛍️", "Gustos y compras", "Pregunto por gustos con like, elijo mi favorito y actúo en una tienda en inglés.", 4],
      ],
      g4: [
        ["⏰", "Mi día", "Describo lugares, mis rutinas y escribo mi día en inglés.", 4],
        ["🍎", "Mi mundo", "Presento a mi familia, mi escuela, mi horario y mis comidas saludables en inglés.", 4],
        ["📖", "Leo y pregunto", "Comprendo textos ilustrados y hago preguntas con Who, What, Where y Do.", 4],
      ],
      g5: [
        ["💬", "Conversar con confianza", "Mantengo conversaciones cortas: saludo, participo en clase y digo mi opinión en inglés.", 4],
        ["🏫", "Mi mundo en inglés", "Participo en clase, pido lo que necesito con cortesía y empiezo a usar el pasado simple.", 4],
        ["🕰️", "El pasado y los cuentos", "Uso pasados irregulares, narro lo que hice en vacaciones y leo una fábula en inglés.", 4],
      ],
    },
    tecnologia: {
      g1: [
        ["💻", "Conozco el computador", "Reconozco el computador, su monitor y pantalla, el ratón y el teclado, y aprendo a cuidarlos.", 5],
        ["🔌", "Electricidad con cuidado", "Distingo aparatos con y sin electricidad, y pido ayuda a un adulto con pilas y enchufes.", 4],
        ["📷", "Aparatos de casa y salón", "Reconozco aparatos que me comunican, tomo fotos y pido ayuda si un aparato se daña.", 4],
      ],
      g2: [
        ["💾", "Creo y cuido mis archivos", "Creo archivos, cuido mi información privada y uso el teclado con la tablet.", 4],
        ["🖱️", "Uso la computadora", "Enciendo el computador, muevo el mouse, abro programas y dibujo en la pantalla.", 4],
        ["🧰", "Ayudo en casa y en la escuela", "Uso el volumen con calma, cuido los aparatos de la casa y la escuela, y reviso mis cuentas con la calculadora.", 5],
      ],
      g3: [
        ["🧩", "Pienso en pasos", "Organizo información y aprendo a seguir y crear secuencias con cuidado.", 4],
        ["⌨️", "Escribo con el computador", "Escribo en el procesador, copio, pego, guardo y doy formato a mi texto.", 5],
        ["🛡️", "Uso la tecnología con cabeza", "Reconozco cómo la tecnología ayuda, y aprendo a usarla con descanso y escepticismo.", 4],
      ],
      g4: [
        ["🔐", "Pienso digital", "Diseño presentaciones, entiendo algoritmos y patrones, y cuido mis datos y contraseñas.", 4],
        ["🔎", "Investigo con cuidado", "Uso palabras clave y sitios confiables, y cito la fuente de las imágenes que uso.", 5],
        ["🎬", "Mi presentación ante todos", "Organizo una presentación con imágenes y conclusiones, y la presento con voz clara.", 4],
      ],
      g5: [
        ["🏗️", "Programo mis proyectos", "Creo proyectos digitales con algoritmos, condicionales y tablas de datos.", 4],
        ["📧", "Me comunico por correo", "Redacto correos con adjuntos, uso la netiqueta y creo contraseñas seguras.", 5],
        ["🌐", "Ciudadano digital", "Cuido mi privacidad, busco información confiable y uso los equipos de la escuela con responsabilidad.", 4],
      ],
    },
    artistica: {
      g1: [
        ["🖍️", "Colores, líneas y ritmos", "Uso líneas y formas, pinto colores cálidos y fríos, mezclo colores y sigo el ritmo.", 5],
        ["🖌️", "Creo con mis herramientas", "Dibujo con libertad, exploro texturas, pinto con pincel y expreso con mi cuerpo.", 4],
        ["🖼️", "Mi arte me retrata", "Hago collages, pinto el día y la noche, y me retrato yo y mi familia.", 4],
      ],
      g2: [
        ["🎨", "Colores, formas y ritmo", "Exploro formas, colores y texturas, mezclo colores y sigo ritmos de música.", 4],
        ["✂️", "Recorto, pego y canto", "Creo composiciones recortando y pegando, pinto con otras herramientas y canto en grupo.", 5],
        ["🧑‍🤝‍🧑", "Expreso mi arte", "Reproduzco sonidos con mi voz, represento personajes y creamos un mural con mi grupo.", 4],
      ],
      g3: [
        ["🖌️", "Mi arte primero", "Combino técnicas de dibujo, música y danza, y compongo mi propio dibujo.", 4],
        ["🧊", "Pinto y modelo", "Pinto con pincel y acuarela, mezclo colores y modelo con plastilina y arcilla.", 5],
        ["🎶", "Figuras y ritmos de Colombia", "Creo figuras con formas y reconozco la cumbia, el bambuco y la gaita.", 4],
      ],
      g4: [
        ["🎭", "El arte que me rodea", "Uso perspectiva, aprecio las obras de mi comunidad y exploro melodías e historias del arte.", 4],
        ["🗿", "Volumen y profundidad", "Modelo volúmenes, aplico sombras y ubico los objetos cerca y lejos.", 4],
        ["🎬", "A la escena", "Uso líneas de fuga y preparo una obra teatral con guion, improvisación, voz y público.", 5],
      ],
      g5: [
        ["🏗️", "Creo con las tres artes", "Diseño proyectos que combinan dibujo, perspectiva y música.", 4],
        ["🏛️", "Patrimonio y color", "Valoro monumentos y paisajes de Colombia, y aplico el color y la técnica en una obra.", 5],
        ["🪘", "Ritmo y escenario", "Invento mi ritmo, bailo con mi grupo y celebro el festival respetando el patrimonio.", 4],
      ],
    },
    efisica: {
      g1: [
        ["🏃", "Mi cuerpo en movimiento", "Cambio entre caminar, correr y detenerme, cuido mi higiene y juego con reglas.", 5],
        ["🤸", "Equilibrio y rondas", "Mantengo el equilibrio, distingo mi derecha y mi izquierda, y participo en rondas y circuitos.", 4],
        ["🤝", "Retos en equipo", "Gateo, subo y bajo con cuidado, me apoyo en el equipo y termino estirando.", 4],
      ],
      g2: [
        ["🦘", "Cuerpo ágil", "Lanzo y atrapo, corro con resistencia, salto la cuerda y cuido mi descanso.", 5],
        ["⚽", "Pelota y desplazamientos", "Esquivo, conduzco el balón con los pies, paso en relevos y me desplazo por el suelo.", 4],
        ["🙌", "Juego en equipo", "Reboto con control, juego en parejas, animo a mi equipo y me caliento antes de jugar.", 4],
      ],
      g3: [
        ["🎯", "Me preparo y juego justo", "Me coordino, juego con reglas y me preparo para las actividades.", 4],
        ["🏅", "Atletismo con técnica", "Corro con técnica, salto lejos y alto, lanzo con precisión y atrapo el balón.", 5],
        ["🏐", "Deportes de conjunto", "Practico el pase, el tiro al aro y el saque del voleibol, y juego como equipo.", 4],
      ],
      g4: [
        ["💪", "Cuerpo sano y activo", "Planifico estrategias de juego, practico atletismo y cuido mi alimentación y descanso.", 4],
        ["🔥", "Me preparo para el esfuerzo", "Explico el calentamiento, corro con técnica y practico el pase y el lanzamiento.", 5],
        ["🤾", "Cierro bien y juego limpio", "Salto con aterrizaje seguro, mido mi pulso y practico el fair play.", 4],
      ],
      g5: [
        ["📋", "Juegos y hábitos", "Practico juegos adaptados y adopto hábitos saludables para toda la vida.", 4],
        ["🏋️", "Me entreno con metas", "Diseño mi rutina semanal de ejercicio, caliento y escucho las señales de mi cuerpo.", 5],
        ["🥇", "Tácticas y juego limpio", "Busco el espacio, doy pases y apoyos, decido a tiempo y juego con reglas.", 4],
      ],
    },
    etica: {
      g1: [
        ["😊", "Me reconozco y convivo", "Reconozco mis emociones, espero mi turno, digo la verdad y saludo con cariño.", 5],
        ["🧑‍🤝‍🧑", "Amistades con respeto", "Cuido mis amistades, uso por favor y gracias, y respeto las diferencias sin burlas.", 4],
        ["🤲", "Ayudo y pido perdón", "Cuido lo de todos, ayudo a quien necesita y pido perdón cuando me equivoco.", 4],
      ],
      g2: [
        ["💜", "Yo y los demás", "Practico la empatía, coopero, valoro que todos somos distintos y digo lo que siento.", 4],
        ["💎", "Actúo con honestidad", "Digo la verdad, reconozco mis errores, juego sin trampas y cuido los bienes comunes.", 5],
        ["🤸", "En equipo está mejor", "Reparto las tareas, acepto ganar y perder, incluyo al que está solo y no me burlo.", 4],
      ],
      g3: [
        ["🧍", "Me comprometo", "Asumo mis responsabilidades, acuerdo en equipo y participo en la escuela.", 4],
        ["🧠", "Mis emociones y mis promesas", "Nombro mis emociones, pido perdón de verdad, cumplo lo que prometo y cuido lo de todos.", 5],
        ["🕊️", "Ayudo y siembro paz", "Propongo ayudas para mi comunidad, siembro paz y reconozco el valor de cada persona.", 4],
      ],
      g4: [
        ["💬", "Convivimos en diálogo", "Argumento con respeto, proyecto con mi grupo, respetamos normas justas y rechazo la discriminación.", 4],
        ["🦸", "Liderazgo y empatía", "Lidero escuchando, doy el ejemplo, invito a participar y me pongo en el lugar del otro.", 5],
        ["🤲", "Resuelvo conflictos con paz", "Respiro antes de reaccionar, sigo los pasos del diálogo, busco soluciones justas y pido perdón.", 4],
      ],
      g5: [
        ["🧭", "Mis derechos y yo", "Pienso dilemas, cuido la convivencia y decido con valores, previniendo el conflicto.", 4],
        ["📏", "Igualdad sin etiquetas", "Conozco los derechos de la infancia, rechazo la discriminación y los estereotipos, y sé a quién pedir ayuda.", 5],
        ["🗳️", "Participo y decido", "Participo en elecciones y asambleas, opino con argumentos y actúo frente a la injusticia.", 4],
      ],
    },
    religiosa: {
      g1: [
        ["🌼", "Mi entorno y mi familia", "Cuido la naturaleza, comparto con mi familia y vivo las celebraciones con valores.", 4],
        ["💝", "Pequeños gestos de amor", "Doy gracias, perdono y demuestro amor con pequeños gestos.", 4],
        ["🤗", "Convivo con todos", "Respeto lo que otros creen, valoro mi barrio y hago amigos sin excluir a nadie.", 3],
      ],
      g2: [
        ["🏘️", "Vivo en comunidad", "Participo en mi comunidad, pido y doy perdón y reconstruyo las amistades.", 4],
        ["🙏", "Doy una mano y celebro", "Ayudo a quien lo necesita, conozco las celebraciones y respeto las creencias ajenas.", 4],
        ["🫂", "Comparto y acompaño", "Agradezco lo que recibo, comparto con quien lo necesita y acompaño a quien está triste.", 3],
      ],
      g3: [
        ["🎖️", "Celebramos y servimos", "Participo en manifestaciones y fiestas, y reconozco a personas que sirven a los demás.", 4],
        ["🕊️", "Valores de mi corazón", "Amo al prójimo con gestos, comparto el perdón y la gratitud, y valoro los valores comunes.", 4],
        ["🤝", "Respeto y fraternidad", "Respeto las creencias ajenas, actúo con solidaridad y practico el buen trato.", 3],
      ],
      g4: [
        ["🕯️", "Símbolos y relatos", "Conozco relatos de paz y comprendo qué son los ritos y los símbolos.", 4],
        ["🪔", "Celebraciones con sentido", "Entiendo cómo las convicciones organizan el tiempo, y practico la gratitud, el perdón y el servicio.", 4],
        ["🕌", "Mi comunidad de convicción", "Reconozco las expresiones de fe de mi entorno y respeto las diferencias de convicción.", 3],
      ],
      g5: [
        ["🕊️", "Pluralidad con respeto", "Reconozco la pluralidad de creencias en Colombia y respeto las fiestas y los lugares de culto.", 4],
        ["🪞", "Gratitud y proyecto de vida", "Practico la gratitud y el perdón, y empiezo a construir mi proyecto de vida.", 4],
        ["🌳", "Raíces y fraternidad", "Conozco mis raíces y mi historia, y vivo la fraternidad cuidando a los demás.", 3],
      ],
    },
  };

  const estadoTema = function (id) {
    const C = window.CORE;
    if (!C || !C.Store || !C.Store.data) return null;
    return (C.Store.data.curriculo || {})[id] || null;
  };

  function unidadesDe(gid, mid) {
    const por = DEF[mid] || {};
    const defs = por[gid] || null;
    const lista = window.CURRICULO.listaConId(gid, mid);
    if (!defs || !lista.length) return null;
    let idx = 0;
    const unidades = [];
    for (let i = 0; i < defs.length; i++) {
      const n = parseInt(defs[i][3], 10);
      if (!n || n < 1) break;
      const temas = lista.slice(idx, idx + n);
      if (!temas.length) break;
      const hechos = temas.filter(function (t) {
        const e = estadoTema(t.id);
        return !!(e && e.hecho);
      }).length;
      unidades.push({
        id: "u" + (i + 1) + "-" + gid + "-" + mid,
        indice: i,
        icono: String(defs[i][0] || "GET").trim() || "📚",
        titulo: defs[i][1],
        objetivo: defs[i][2],
        desde: idx + 1,
        hasta: idx + temas.length,
        temas: temas.map(function (t) { return { id: t.id, nombre: t.nombre }; }),
        hechos: hechos,
        total: temas.length,
      });
      idx += temas.length;
    }
    /* Si la división no cuadra con el total real de temas,
       mejor no inventar unidades: se devuelve null y la
       pantalla cae al listado clásico. */
    if (idx !== lista.length) return null;
    return unidades;
  }

  function unidadDeTema(idTema) {
    const partes = String(idTema || "").split("-");
    if (partes.length < 3) return null;
    const unis = unidadesDe(partes[0], partes[1]);
    if (!unis) return null;
    for (let i = 0; i < unis.length; i++) {
      const dentro = unis[i].temas.some(function (t) { return t.id === idTema; });
      if (dentro) return { unidad: unis[i], indice: i, unidades: unis };
    }
    return null;
  }

  function completa(u) {
    return !!u && u.hechos === u.total;
  }

  function progresoGeneral(gid, mid) {
    const lista = window.CURRICULO.listaConId(gid, mid);
    if (!lista.length) return { hechos: 0, total: 0, pct: 0 };
    const hechos = lista.filter(function (t) {
      const e = estadoTema(t.id);
      return !!(e && e.hecho);
    }).length;
    return { hechos: hechos, total: lista.length, pct: Math.round((hechos * 100) / lista.length) };
  }

  window.UNID = {
    unidadesDe: unidadesDe,
    unidadDeTema: unidadDeTema,
    unidadCompleta: completa,
    progresoGeneral: progresoGeneral,
    _DEF: DEF,
  };
  return window.UNID;
})();
