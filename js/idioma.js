/* Idioma de la interfaz: español (por defecto) e inglés.
   Traduce por sustitución EXACTA de frases usando un diccionario:
   nodos de texto completos y atributos title / aria-label /
   placeholder. El contenido pedagógico (currículo, unidades,
   datos) nunca entra al diccionario y no se traduce. */
(function () {
  "use strict";

  const CLAVE = "webleer_idioma_v1";
  const ATRIBUTOS = ["title", "aria-label", "placeholder"];

  /* Diccionario ES → EN. La clave es la frase EXACTA tal como
     aparece en el código (normalizada: espacios colapsados y sin
     extremos). El valor es la traducción. Solo entra la interfaz:
     botones, menús, encabezados, instrucciones, avisos y estados
     vacíos. NO entran nombres de lecciones, misiones, mundos,
     accesorios, libros, materias, grados ni descripciones
     curriculares (esos textos vienen de data.js / currículo). */
  const DICC = {
    /* Barra superior y menú (index.html / core.js) */
    "Aprende jugando": "Learn by playing",
    "🔒 Área para personas adultas": "🔒 Adults area",
    "Escribe el PIN de 4 números.": "Enter the 4-digit PIN.",
    "✅ Entrar": "✅ Enter",
    "↩️ Volver": "↩️ Back",
    "🔑 Olvidé el PIN": "🔑 I forgot the PIN",
    "🔑 Clave de la cuenta": "🔑 Account key",
    "Escribe los 4 números de la cuenta.": "Enter the account's 4 numbers.",
    "🎨 Dibuja tu cara": "🎨 Draw your face",
    "✅ Usar mi dibujo": "✅ Use my drawing",
    "🧽 Borrar todo": "🧽 Clear all",
    "↩️ Cancelar": "↩️ Cancel",
    "Inicio": "Home",
    "Mundos": "Worlds",
    "Aventura": "Adventure",
    "Mi personaje": "My character",
    "Ir al inicio": "Go to home",
    "Mi aventura y mi progreso": "My adventure and my progress",
    "Forma de las letras: De imprenta": "Letter style: Print",
    "Forma de las letras: De imprenta. Toca para cambiar.": "Letter style: Print. Tap to change.",
    "Silenciar": "Mute",
    "Activar o silenciar el sonido": "Turn sound on or off",
    "Cambiar a la apariencia de noche": "Switch to night look",
    "Cambiar a la apariencia de día": "Switch to day look",
    "Apariencia de noche activada. Mira cómo cambió el cielo.": "Night look on. Look how the sky changed.",
    "Apariencia de día activada. Ya salió el sol.": "Day look on. The sun is out now.",
    "Cerrar la sesión de la cuenta": "Sign out of the account",
    "Mi perfil": "My profile",
    "Tócame para escuchar otra vez": "Tap me to listen again",
    /* Tarjeta del búho en Inicio */
    "🦉 Mi maestro búho": "🦉 My teacher owl",
    "Tócame: consejos y datos curiosos": "Tap me: tips and fun facts",
    "Toca aquí para cerrar": "Tap here to close",
    "Navegación principal": "Main navigation",

    /* Inicio */
    "Descubre, practica y celebra cada pequeño logro. ¡Aquí aprender es una aventura!": "Discover, practice and celebrate every small achievement. Here, learning is an adventure!",
    "📚 Ver materias": "📚 See subjects",
    "🔄 Cambiar grado": "🔄 Change grade",
    "🏫 Materias de tu grado — toca una para aprender": "🏫 Subjects for your grade — tap one to learn",
    "Siguiente tema para ti": "Next topic for you",
    "Continuar ➜": "Continue ➜",
    "¡Empezar mi misión!": "Start my mission!",
    "Jugar y practicar": "Play and practice",
    "¿Qué te gustaría descubrir hoy?": "What would you like to discover today?",
    "Mundo de las letras": "World of letters",
    "Vocales, sílabas, palabras, cuentos y escritura": "Vowels, syllables, words, stories and writing",
    "Entrar ▶️": "Enter ▶️",
    "Reino de los números": "Kingdom of numbers",
    "Contar, sumar, restar, figuras y problemas": "Counting, adding, subtracting, shapes and problems",
    "Mapa de aventuras": "Adventure map",
    "Zonas, misiones y desafíos con historia": "Zones, missions and challenges with a story",
    "Mundo de la cultura": "World of culture",
    "Datos asombrosos, galería e imágenes": "Amazing facts, gallery and pictures",
    "¡Descubre, escucha y aprende!": "Discover, listen and learn!",
    "Vístelo con los accesorios que ganas": "Dress it with the accessories you earn",
    "🎓 ¡Sigamos tu lección del colegio!": "🎓 Let's follow your school lesson!",
    "🏆 ¡Mira todo lo que ya lograste!": "🏆 Look at everything you have achieved!",
    "Completa una lección y pronto verás tu primer logro aquí. ¡Tú puedes! 🌟": "Complete a lesson and soon you will see your first achievement here. You can do it! 🌟",
    "🎪 Más formas de aprender jugando": "🎪 More ways to learn by playing",
    "Aprender": "Learn",
    "Lecciones ordenadas": "Ordered lessons",
    "Escuchar": "Listen",
    "Sonidos y palabras": "Sounds and words",
    "Jugar": "Play",
    "Minijuegos": "Mini-games",
    "Practicar": "Practice",
    "Trazos y palabras": "Strokes and words",
    "Aventuras": "Adventures",
    "Misiones con historia": "Story missions",
    "Cultura": "Culture",
    "Datos con imágenes": "Facts with pictures",
    "Mi mascota": "My pet",
    "Cuidado y cariño": "Care and affection",
    "Misterios y candados": "Mysteries and locks",
    "Taller de inventos": "Invention workshop",
    "Construye con retos": "Build with challenges",
    "Investiga y resuelve casos": "Investigate and solve cases",
    "Concurso": "Contest",
    "5 minijuegos distintos": "5 different mini-games",
    "Laboratorio": "Lab",
    "Sonidos y sílabas": "Sounds and syllables",
    "Mi Aventurero": "My Adventurer",
    "Tu personaje y tus misiones": "Your character and your missions",
    "Mi aventura": "My adventure",
    "Mis estrellas": "My stars",
    "🚀 Mi Aventurero": "🚀 My Adventurer",
    "👆 Ocultar": "👆 Hide",
    "👆 Gana tu primera misión": "👆 Earn your first mission",
    "Desliza para ver más": "Swipe to see more",
    "Tu animalito. Cuando ganes una misión vestirás a tu Aventurero.": "Your little animal. When you win a mission you will dress your Adventurer.",

    /* Perfiles y cuenta */
    "👋 ¿Quién está jugando?": "👋 Who is playing?",
    "Toca tu nombre para seguir aprendiendo.": "Tap your name to keep learning.",
    "Jugando ahora": "Playing now",
    "Nuevo perfil": "New profile",
    "Crear otro": "Create another",
    "🏠 Volver al inicio": "🏠 Back to home",
    "Sesión abierta en este equipo. La copia del progreso se hace automática.": "Session open on this device. Your progress is backed up automatically.",
    "🔄 Restaurar el progreso con esta copia": "🔄 Restore progress from this backup",
    "⬇️ Descargar copia (archivo de respaldo)": "⬇️ Download backup (backup file)",
    "⬆️ Importar copia desde archivo": "⬆️ Import backup from file",
    "🔑 Cambiar la clave": "🔑 Change the key",
    "🚪 Cerrar sesión": "🚪 Sign out",
    "🗑️ Eliminar cuenta": "🗑️ Delete account",

    /* Grados y materias */
    "🎓 Mi grado": "🎓 My grade",
    "Elige en qué curso de primaria estás. Puedes cambiarlo cuando quieras.": "Choose which primary grade you are in. You can change it whenever you want.",
    "Actual ✔": "Current ✔",
    "← Volver": "← Back",
    "Materias de tu grado · Toca una para aprender": "Subjects for your grade · Tap one to learn",
    "de tu grado terminado": "of your grade completed",
    "unidades completas": "units completed",
    "repasos aprobados": "reviews passed",
    "⚙️ Cambiar mis materias": "⚙️ Change my subjects",

    /* Aprender */
    "📖 Aprender a leer": "📖 Learn to read",
    "Elige el mundo al que quieres ir.": "Choose the world you want to go to.",
    "📖 Letras": "📖 Letters",
    "🔢 Números": "🔢 Numbers",
    "⬅️ Volver": "⬅️ Back",

    /* Nivel */
    "Comenzar": "Start",

    /* Escuchar */
    "👂 Escuchar": "👂 Listen",
    "Entrena tu oído con sonidos, palabras e historias.": "Train your ear with sounds, words and stories.",
    "Letras y sonidos": "Letters and sounds",
    "Escucha una letra y encuéntrala": "Listen to a letter and find it",
    "🌱 Fácil": "🌱 Easy",
    "⭐ Medio": "⭐ Medium",
    "🔥 Difícil": "🔥 Hard",
    "Palabra e imagen": "Word and picture",
    "Escucha y toca la imagen": "Listen and tap the picture",
    "Sonido al principio": "Sound at the beginning",
    "¿Con qué letra empieza?": "Which letter does it start with?",
    "Sonido al final": "Sound at the end",
    "¿Con qué letra termina?": "Which letter does it end with?",
    "Haz lo que te digo": "Do what I say",
    "Sigue instrucciones habladas": "Follow spoken instructions",
    "Escucho una oración": "I listen to a sentence",
    "Escucha y responde": "Listen and answer",
    "Un cuento": "A story",
    "Escucha un cuento bonito": "Listen to a lovely story",

    /* Jugar y practicar */
    "🎮 Jugar": "🎮 Play",
    "Minijuegos para practicar lo que aprendes.": "Mini-games to practice what you learn.",
    "Memoria": "Memory",
    "Encuentra las parejas": "Find the matching pairs",
    "Encuentra la letra": "Find the letter",
    "Escucha y toca la letra": "Listen and tap the letter",
    "Ordena las sílabas": "Order the syllables",
    "Arma la palabra": "Build the word",
    "Forma la palabra": "Make the word",
    "Arrastra las letras": "Drag the letters",
    "Completa la palabra": "Complete the word",
    "Faltan letras": "Letters are missing",
    "Escribe la palabra": "Write the word",
    "Con el teclado": "With the keyboard",
    "Letras que se parecen": "Letters that look alike",
    "Sigue al animal": "Follow the animal",
    "Pinta letras": "Paint letters",
    "Trazo libre con el ratón": "Free drawing with the mouse",
    "Sopa de letras": "Word search",
    "Encuentra las palabras escondidas": "Find the hidden words",
    "Cuenta los animales": "Count the animals",
    "¿Cuántos ves?": "How many do you see?",
    "Sumas con frutas": "Addition with fruit",
    "Junta y cuenta": "Put together and count",
    "Restas rápidas": "Quick subtraction",
    "¿Cuántos quedan?": "How many are left?",
    "Formas geométricas": "Geometric shapes",
    "Círculo, cuadrado, triángulo...": "Circle, square, triangle...",
    "Recta numérica": "Number line",
    "Toca el número": "Tap the number",
    "Patrones": "Patterns",
    "¿Qué viene después?": "What comes next?",
    "Reconozco letras": "I recognize letters",
    "Encuentra la letra que dicen": "Find the letter they say",
    "Leo oraciones": "I read sentences",
    "Toca cada palabra": "Tap each word",
    "✍️ Practicar": "✍️ Practice",
    "Escribe, ordena y repasa letras y palabras.": "Write, order and review letters and words.",

    /* Mi aventura */
    "🗺️ Mi aventura": "🗺️ My adventure",
    "Mira todo lo que has aprendido.": "See everything you have learned.",
    "¡Nuevo!": "New!",
    "🏅 Mis medallas": "🏅 My medals",
    "🐾 Mis animales": "🐾 My animals",
    "¡Contigo ahora!": "With you now!",

    /* Mundo de aventuras */
    "Mundo de aventuras": "World of adventures",
    "Ayuda a los personajes en sus misiones": "Help the characters with their missions",
    "🔒 Necesita la misión anterior": "🔒 Needs the previous mission",
    "Zonas descubiertas": "Discovered zones",
    "Aún no hay zonas secretas. ¡Completa una misión para descubrir la primera!": "There are no secret zones yet. Complete a mission to discover the first one!",

    /* Mascota */
    "Elige tu mascota": "Choose your pet",
    "Va a crecer contigo mientras aprendes": "It will grow with you as you learn",

    /* Cultura */
    "🌍 Mundo de la cultura": "🌍 World of culture",
    "72 datos asombrosos, imágenes y retos": "72 amazing facts, pictures and challenges",
    "🔁 Otro dato": "🔁 Another fact",
    "🏛️ ¿Qué quieres descubrir?": "🏛️ What do you want to discover?",
    "🖼️ Galería con imágenes": "🖼️ Picture gallery",
    "🎯 Reto cultural": "🎯 Culture challenge",

    /* Escape rooms */
    "Resuelve el misterio de cada habitación": "Solve the mystery of each room",
    "Se abre al terminar la anterior": "Opens when you finish the previous one",
    "🏠 Menú": "🏠 Menu",

    /* Taller de inventos */
    "🛠️ Taller de inventos": "🛠️ Invention workshop",
    "Resuelve retos y construye cosas increíbles": "Solve challenges and build amazing things",
    "Se abre al terminar el anterior": "Opens when the previous one is finished",

    /* Detectives */
    "🕵️ Detectives de letras y números": "🕵️ Letter and number detectives",
    "Investiga, encuentra pistas y resuelve el caso": "Investigate, find clues and solve the case",
    "Se abre al resolver el caso anterior": "Opens when you solve the previous case",

    /* Concurso */
    "🏆 Concurso de minijuegos": "🏆 Mini-game contest",
    "Cinco rondas distintas. Cada una cambia de juego": "Five different rounds. Each one changes the game",
    "⏱️ ¿Quieres el reloj?": "⏱️ Do you want the timer?",
    "El reloj está": "The timer is",
    "APAGADO": "OFF",
    "ENCENDIDO": "ON",
    ". Puedes pensar todo el tiempo que necesites. Nadie te corre. ¡Así es más justo!": ". You can think as long as you need. Nobody is rushing you. That is fairer!",
    ". Tendrás un poco de tiempo para responder. ¡Se puede apagar!": ". You'll have a little time to answer. You can turn it off!",
    "⏱️ Encender el reloj": "⏱️ Turn on the timer",
    "La Carrera": "The Race",
    "La Ruleta": "The Wheel",
    "Se abre al ganar la anterior": "Opens when you win the previous one",
    "El Reloj": "The Clock",
    "La Memoria": "The Memory",
    "El Desafío Final": "The Final Challenge",
    ": avanzas cuando aciertas. 🐢": ": you move forward when you get it right. 🐢",
    "solo avanza si te equivocas.": "only moves forward if you get it wrong.",
    ": el azar elige el desafío. ⏳": ": chance picks the challenge. ⏳",
    ": cuenta los objetos que aparecen. 🧠": ": count the objects that appear. 🧠",
    ": encuentra las parejas. 👑": ": find the matching pairs. 👑",
    ": lectura y matemáticas juntas.": ": reading and math together.",

    /* Laboratorio de sonidos */
    "🔬 Laboratorio de sonidos": "🔬 Sound lab",
    "Escucha, pronuncia y juega con el ritmo": "Listen, pronounce and play with rhythm",
    "Sonidos": "Sounds",
    "Adivina animales y objetos por su sonido": "Guess animals and objects by their sound",
    "Sonido de letra": "Letter sound",
    "¿Qué letra suena así?": "Which letter sounds like this?",
    "Palabras parecidas": "Similar words",
    "Distingue las que se parecen": "Tell apart the ones that look alike",
    "Sílabas": "Syllables",
    "Palmadas y ordena sílabas": "Clap and order syllables",
    "Rimas": "Rhymes",
    "Completa la palabra que rima": "Complete the rhyming word",
    "Mi lectura": "My reading",
    "Graba y lee en voz alta": "Record and read aloud",
    "Tu dispositivo puede escuchar tu voz.": "Your device can listen to your voice.",
    "En «Mi lectura» el micrófono se activa solo cuando pulses el botón.": "In «My reading» the microphone only turns on when you press the button.",

    /* Mi Aventurero */
    "Tu personaje, tu armario y tus misiones": "Your character, your wardrobe and your missions",
    "🧍 Mirar al frente": "🧍 Look straight ahead",
    "👆 Arrastra el personaje para mirarlo desde otro lado": "👆 Drag the character to look at it from another side",
    "🔍 Ver en grande": "🔍 View larger",
    "Color de piel": "Skin color",
    "Toca un tono": "Tap a shade",
    "👕 Abrir el armario": "👕 Open the wardrobe",
    "🏅 Mis misiones": "🏅 My missions",
    "🧺 Quitar todo": "🧺 Remove everything",
    "➡️ Vamos": "➡️ Let's go",
    "Mi aventurero en 3D": "My adventurer in 3D",
    "Mirar desde un lado": "Look from the side",
    "Girar a la izquierda": "Turn left",
    "Ver desde arriba": "View from above",
    "Ver desde abajo": "View from below",
    "Mirar desde el otro lado": "Look from the other side",
    "Girar a la derecha": "Turn right",

    /* El armario */
    "👕 El armario": "👕 The wardrobe",
    "Toca un objeto para ponértelo": "Tap an item to put it on",
    "⭐ Guardar combinación": "⭐ Save outfit",
    "⬅️ Mi aventurero": "⬅️ My adventurer",
    "Para desbloquearlos:": "To unlock them:",

    /* Mis misiones del aventurero */
    "Completa objetivos reales para ganar accesorios": "Complete real goals to earn accessories",
    "📖 Lectura y letras": "📖 Reading and letters",
    "🧠 Memoria y lógica": "🧠 Memory and logic",
    "🧭 Aventura": "🧭 Adventure",

    /* Panel para personas adultas */
    "🔧 Panel para personas adultas": "🔧 Adults panel",
    "Consulta aquí el progreso de cada niña o niño.": "Check each child's progress here.",
    "➕ Nuevo perfil": "➕ New profile",
    "(en uso)": "(in use)",
    "⭐ Estrellas": "⭐ Stars",
    "🎒 Actividades": "🎒 Activities",
    "⏱️ Minutos": "⏱️ Minutes",
    "👂 Escuchas": "👂 Listening",
    "✍️ Trazos": "✍️ Strokes",
    "🏅 Logros": "🏅 Achievements",
    "📈 Avance por nivel": "📈 Progress by level",
    "📚 Materias del colegio · Cuarto": "📚 School subjects · Cuarto",
    "📘 Unidades y repasos": "📘 Units and reviews",
    "🏅 Logros conseguidos": "🏅 Achievements earned",
    "Todavía no ha conseguido logros. ¡Llegarán con la práctica!": "No achievements yet. They will come with practice!",
    "💡 Sugerencias de refuerzo": "💡 Reinforcement suggestions",
    "No se detectaron contenidos difíciles por el momento. El sistema los identificará automáticamente.": "No difficult content detected yet. The system will identify it automatically.",
    "⚙️ Sonido y ayuda": "⚙️ Sound and help",
    "Reexplicar la tarea si el niño se queda quieto": "Re-explain the task if the child stays still",
    "Silenciar todas las voces": "Mute all voices",
    "Volumen de la voz:": "Voice volume:",
    "🖨️ Informe para el colegio": "🖨️ School report",
    "🖨️ Exportar el progreso (imprimir o PDF)": "🖨️ Export progress (print or PDF)",
    "Se abre la ventana de impresión: elige «Guardar como PDF» para enviarlo por correo o llevarlo impreso.": "The print window opens: choose «Save as PDF» to email it or take it printed.",
    "🔒 Seguridad": "🔒 Security",
    "🔑 Crear un PIN de adulto": "🔑 Create an adult PIN",
    "Sin PIN, cualquier persona puede abrir este panel. Puedes crear uno cuando quieras.": "Without a PIN, anyone can open this panel. You can create one whenever you want.",
    "👤 Cuentas de usuario": "👤 User accounts",
    "Sesión abierta:": "Session open:",
    "Si el sitio se actualiza y los perfiles desaparecen, entra con el usuario y la copia devuelve el progreso.": "If the site updates and profiles disappear, sign in with the user and the backup restores progress.",
    "👤 Ver la cuenta": "👤 View account",
    "➕ Crear una cuenta (con acepto de adulto)": "➕ Create an account (with adult consent)",
    "⬆️ Importar cuenta desde archivo": "⬆️ Import account from file",
    "Continuar con Gmail": "Continue with Gmail",
    "📋 Cuadro de cuentas": "📋 Accounts table",
    "🧒 Perfiles": "🧒 Profiles",
    "🏠 Volver al menú": "🏠 Back to menu",
    "📄 Reportes para el docente": "📄 Teacher reports",
    "Preguntas repetidas entre temas": "Questions repeated between topics",
    "Para decidir si cada frase repetida queda como refuerzo o se cambia.": "To decide whether each repeated sentence stays as reinforcement or is changed.",
    "Abrir ➜": "Open ➜",
    "Validación de las 150 unidades": "Validation of the 150 units",
    "Marcar Sí/No del título, objetivo y DBA de cada unidad.": "Mark Yes/No for the title, objective and DBA of each unit.",

    /* Mensajes de la guía y avisos de actividades */
    "¡A jugar para practicar! 🎮": "Let's play to practice! 🎮",
    "¡Eso es!": "That's it!",
    "¡Fase completa! 🌟": "Stage complete! 🌟",
    "¡Muy bien! Encontraste todas las palabras.": "Well done! You found all the words.",
    "¡Muy bien! Seguimos ➡️": "Well done! Let's keep going ➡️",
    "¡Otra vez será! Repasa el tema y vuelve al reto.": "Better luck next time! Review the topic and try the challenge again.",
    "¡Qué divertido! 🎉": "So much fun! 🎉",
    "¡Tema completado! 🌟": "Topic complete! 🌟",
    "Ahora se crea la clave de respaldo de cuatro números. La guarda el adulto.": "Now the four-number backup key is created. The adult keeps it.",
    "Busca las palabras escondidas. Toca la primera letra y después la última letra de la palabra.": "Find the hidden words. Tap the first letter and then the last letter of the word.",
    "Completa la palabra con las letras que faltan.": "Complete the word with the missing letters.",
    "Cuenta con calma, uno por uno, y toca el número correcto.": "Count calmly, one by one, and tap the correct number.",
    "Cuenta creada. Ahora puedes crear el perfil del niño y empezar a practicar.": "Account created. Now you can create the child's profile and start practicing.",
    "Cuenta los puntos llenos del marco de diez y toca el número.": "Count the filled dots in the ten frame and tap the number.",
    "Dibuja tu cara con el dedo o con el ratón. Elige el color que más te guste.": "Draw your face with your finger or the mouse. Choose the color you like best.",
    "El usuario para entrar, escrito por el adulto. Luego se crea la clave de 4 números.": "The username to sign in, written by the adult. Then the 4-number key is created.",
    "Elige tu grado de primaria.": "Choose your primary grade.",
    "Escucha la oración.": "Listen to the sentence.",
    "Escucha la palabra y toca la imagen.": "Listen to the word and tap the picture.",
    "Escucha la palabra.": "Listen to the word.",
    "Esta cuenta la crea y cuida un adulto responsable. Si eres el adulto, acepta el aviso y continúa.": "This account is created and looked after by a responsible adult. If you are the adult, accept the notice and continue.",
    "Este panel es para la persona adulta.": "This panel is for the adult.",
    "Las palabras van en línea recta. Toca otra vez la primera letra.": "Words go in a straight line. Tap the first letter again.",
    "Mira cómo se repite el grupo del principio y toca el elemento que viene.": "Watch how the group at the beginning repeats and tap the item that comes next.",
    "Muy bien. Ahora toca el siguiente número, el que sigue.": "Well done. Now tap the next number, the one that follows.",
    "Toca cada palabra para escucharla.": "Tap each word to listen to it.",
    "Toca los números de menor a mayor, empezando por el más pequeño.": "Tap the numbers from smallest to largest, starting with the smallest.",
    "Tu cuenta está abierta y el progreso se está guardando con copia automática.": "Your account is open and progress is being saved with automatic backup.",
    "Voltea dos cartas y busca las que sean iguales.": "Flip two cards and look for matching ones.",
    "Termina primero el tema anterior 🌟": "Finish the previous topic first 🌟",
    "Área para personas adultas": "Adults area",
    "Abrir el menú": "Open the menu",
    "Cerrar el menú": "Close the menu",
    "Kiko el loro": "Kiko the parrot",
    "¡Empieza hoy!": "Start today!",
    "▶️ Lectura y letras": "▶️ Reading and letters",
    /* Entrada, cuentas y perfil (puerta de entrada y formulario) */
    "Crear perfil": "Create profile",
    "Crear un perfil": "Create a profile",
    "Continuar con Gmail (adulto)": "Continue with Gmail (adult)",
    "Crear una cuenta": "Create an account",
    "🆕 Crear una cuenta": "🆕 Create an account",
    "Importar una copia": "Import a backup",
    "Mucho Mundo: bienvenido. Para entrar, crea una cuenta con un adulto o importa una copia.": "Mucho Mundo: welcome. To come in, create an account with an adult or import a backup.",
    "Mucho Mundo: iniciar sesión en la cuenta": "Mucho Mundo: sign in to the account",
    "Ilustración de Mucho Mundo: dos niños leyendo un libro entre el cielo, un castillo, montañas y un globo sonriente": "Mucho Mundo illustration: two children reading a book between the sky, a castle, mountains and a smiling balloon",
    "En este equipo todavía no hay cuentas. La manera más fácil es con el Gmail del adulto. La cuenta es local: se guarda en este equipo y su copia de respaldo se puede llevar a otro cuando quieras.": "This device has no accounts yet. The easiest way is with the adult's Gmail. The account is local: it is saved on this device and its backup copy can be taken to another one whenever you want.",
    "La cuenta es local: se guarda en este equipo y no viaja por internet. Con la copia de respaldo puedes devolver el progreso a este u otro equipo cuando quieras.": "The account is local: it is saved on this device and does not travel over the internet. With the backup copy you can bring the progress back to this or another device whenever you want.",
    "🔐 Iniciar sesión": "🔐 Sign in",
    "La cuenta guarda el progreso con una copia automática.": "The account saves progress with an automatic backup.",
    "👤 Usuario": "👤 Username",
    "Escribe tu usuario": "Type your username",
    "— o —": "— or —",
    "Paso 1 de 3: aviso del adulto responsable": "Step 1 of 3: responsible adult notice",
    "👨‍👩‍👧 Esta cuenta la crea y cuida un adulto responsable": "👨‍👩‍👧 This account is created and looked after by a responsible adult",
    "Para crear la cuenta hace falta el permiso y la supervisión de un adulto (madre, padre, docente o cuidador). El adulto queda responsable de la cuenta, de su clave secreta y del cuidado de los datos del niño o niña (nombre, avatar y progreso).": "Creating the account requires the permission and supervision of an adult (mother, father, teacher or caregiver). The adult is responsible for the account, its secret key and the care of the child's data (name, avatar and progress).",
    "Todo se guarda solo en este equipo: la web no envía datos por internet. Para proteger el progreso use la copia de respaldo de la cuenta (se guarda en automático y se puede descargar en un archivo).": "Everything is saved only on this device: the website does not send data over the internet. To protect the progress, use the account's backup copy (it is saved automatically and can be downloaded as a file).",
    "Soy el adulto responsable y acepto cuidar esta cuenta y su respaldo.": "I am the responsible adult and I agree to look after this account and its backup.",
    "Este aviso es obligatorio: sin el acepto del adulto, no se crea la cuenta.": "This notice is required: without the adult's consent, the account is not created.",
    "🌟 ¡Crea tu perfil!": "🌟 Create your profile!",
    "✏️ Editar perfil": "✏️ Edit profile",
    "Escribe tu nombre y elige un animalito, una foto o un dibujo.": "Type your name and choose an animal, a photo or a drawing.",
    "✏️ ¿Cómo te llamas?": "✏️ What's your name?",
    "Escribe tu nombre aquí": "Type your name here",
    "🎨 Elige tu animal": "🎨 Choose your animal",
    "📸 O pon tu foto o un dibujo": "📸 Or add your photo or a drawing",
    "📷 Usar una foto": "📷 Use a photo",
    "🎨 Hacer un dibujo": "🎨 Make a drawing",
    "✅ ¡Empezar a jugar!": "✅ Start playing!",
    "💾 Guardar cambios": "💾 Save changes",
    "Vamos a crear tu perfil. Escribe tu nombre y elige tu animal favorito.": "Let's create your profile. Type your name and choose your favorite animal.",
    "🎓 Elegir mi grado": "🎓 Choose my grade",
    "🎯 Elegir mi grado": "🎯 Pick my grade",
    "Elegir 🦊": "Pick 🦊",
    "Elegir 🐼": "Pick 🐼",
    "Elegir 🐯": "Pick 🐯",
    "Elegir 🐸": "Pick 🐸",
    "Elegir 🐵": "Pick 🐵",
    "Elegir 🦄": "Pick 🦄",
    "Elegir 🐶": "Pick 🐶",
    "Elegir 🐱": "Pick 🐱",
    "Elegir 🐰": "Pick 🐰",
    "Elegir 🐨": "Pick 🐨",
    "Elegir 🦁": "Pick 🦁",
    "Elegir 🐷": "Pick 🐷",
    "Elegir 🐙": "Pick 🐙",
    "Elegir 🐢": "Pick 🐢",
    "Elegir 🐝": "Pick 🐝",
    "Elegir 🦋": "Pick 🦋",
    /* Entrada, asistente, teclado, panel y perfil (lote 2) */
    "Escribe primero tu usuario.": "Type your username first.",
    "No hay una cuenta con ese usuario en este equipo. ¿La vas a crear o importar?": "There is no account with that username on this device. Are you going to create or import one?",
    "El usuario necesita al menos 3 letras.": "The username needs at least 3 letters.",
    "El usuario puede tener máximo 15 letras.": "The username can have at most 15 letters.",
    "Usa letras, números, punto, guion o espacio.": "Use letters, numbers, dot, hyphen or space.",
    "➡️ Continuar": "➡️ Continue",
    "Paso 2 de 3: usuario y clave": "Step 2 of 3: username and key",
    "👤 Elige el usuario": "👤 Choose the username",
    "Ej. tutor-de-pedro": "E.g. pedro-tutor",
    "🔑 Crear la clave (4 números)": "🔑 Create the key (4 numbers)",
    "Ese usuario ya existe en este equipo.": "That username already exists on this device.",
    "La clave es la misma para entrar a la cuenta. Truco: que sea la misma en todas las cuentas del mismo hogar o salón.": "The same key is used to enter the account. Tip: make it the same for all the accounts in the same home or classroom.",
    "🔑 Clave secreta de la cuenta": "🔑 Secret account key",
    "🔑 Crea la clave": "🔑 Create the key",
    "Elige 4 números. Que solo los conozcan los del hogar.": "Choose 4 numbers. Only the people at home should know them.",
    "✅ Continuar": "✅ Continue",
    "🔁 Repite la clave": "🔁 Repeat the key",
    "Otra vez, para confirmar.": "One more time, to confirm.",
    "✅ Guardar": "✅ Save",
    "La clave tiene 4 números.": "The key has 4 numbers.",
    "Clave incorrecta. Inténtalo otra vez.": "Wrong key. Try again.",
    "No se pudo crear la clave. Inténtalo otra vez.": "The key could not be created. Try again.",
    "Los números no coinciden. Empecemos otra vez.": "The numbers do not match. Let's start again.",
    "🔴 Cuenta con Gmail": "🔴 Account with Gmail",
    "🔑 Crear la clave de respaldo (4 números)": "🔑 Create the backup key (4 numbers)",
    "↩️ Usar otro Gmail": "↩️ Use another Gmail",
    "Con esta cuenta la copia del progreso va al equipo y también a la nube amarrada a tu Gmail: si cambias de equipo, entra con el mismo Gmail y el progreso regresa solo.": "With this account the progress backup goes to the device and also to the cloud linked to your Gmail: if you change devices, sign in with the same Gmail and the progress comes back on its own.",
    "✅ Cuenta creada": "✅ Account created",
    "La cuenta quedó con sesión abierta. Ahora soy responsable de hacer la copia del progreso cada vez que la app guarda.": "The account is now signed in. I am now in charge of backing up the progress every time the app saves.",
    "La cuenta quedó con sesión abierta. Ahora soy responsable de hacer la copia del progreso cada vez que la app guarda (equipo y nube de tu Gmail).": "The account is now signed in. I am now in charge of backing up the progress every time the app saves (device and your Gmail cloud).",
    "🧒 Crear el perfil del niño": "🧒 Create the child's profile",
    "🏠 Ir al inicio": "🏠 Go to the start",
    "Importante: para que la copia del progreso funcione en otro equipo (o cuando la dirección de la web cambie) descarga tu copia con el botón «Descargar respaldo» y guárdala en el equipo del adulto.": "Important: for the progress backup to work on another device (or when the website address changes) download your backup with the «Download backup» button and keep it on the adult's device.",
    "☁️ Subir a la nube ahora": "☁️ Upload to the cloud now",
    "La copia aparece cuando la app guarda el progreso del niño.": "The backup appears when the app saves the child's progress.",
    "La copia vive en este equipo. Si va a borrar el navegador o va a cambiar de equipo/dirección de esta web, primero descarga el respaldo. Sin sesión de cuenta abierta no se puede entrar: la web queda en la puerta de la cuenta.": "The backup lives on this device. If you are going to clear the browser or change device/address of this website, download the backup first. Without an open account session you cannot enter: the website stays at the account door.",
    "🔑 Crea tu PIN de adulto": "🔑 Create your adult PIN",
    "Elige 4 números que solo sepas tú.": "Choose 4 numbers only you know.",
    "⬅️ Cancelar": "⬅️ Cancel",
    "🔁 Repite el PIN": "🔁 Repeat the PIN",
    "Escríbelo otra vez para confirmar.": "Type it again to confirm.",
    "El PIN tiene 4 números.": "The PIN has 4 numbers.",
    "PIN incorrecto. Inténtalo otra vez.": "Wrong PIN. Try again.",
    "🏫 Mi grado y mis materias": "🏫 My grade and my subjects",
    "Toca las materias que practicarás. Si dejas todas, verás las 10.": "Tap the subjects you will practise. If you leave them all, you will see all 10.",
    "✅ Todas": "✅ All",
    "⬜ Ninguna": "⬜ None",
    "Elige tu grado de primaria": "Choose your primary school grade",
    "❌ Quitar": "❌ Remove",
    "¡Qué dibujo tan bonito! Va a ser tu nueva cara.": "What a lovely drawing! It will be your new face.",
    "Listo, vuelves a tener tu animalito.": "Done, you have your little animal back.",
    "¡Qué foto tan linda! La voy a usar en tu perfil.": "What a lovely photo! I will use it in your profile.",
  };

  /* Mapa inverso para VOLVER al español: al cambiar ES→EN se
     sustituye con DICC y al regresar se revierte con REV. */
  const REV = {};
  for (const es in DICC) {
    if (!(DICC[es] in DICC)) REV[DICC[es]] = es;
  }

  /* Patrones para cadenas CON INTERPOLACIÓN (ej. "¡Hola, Ana!"),
     que el diccionario exacto no puede captar. Cada entrada es
     [regexES, reemplazoEN, regexEN, reemplazoES] para poder ir
     Y volver. Lo que ningún patrón cubre queda en español
     (degradación segura, per spec). */
  const PATRONES = [
    /* Saludos de Kiko con el nombre del perfil (antes del saludo simple) */
    [/^¡Hola, (.+)! Soy Kiko 🦜 ¡Vamos a aprender!$/, "Hi, $1! I'm Kiko 🦜 Let's learn!", /^Hi, (.+)! I'm Kiko 🦜 Let's learn!$/, "¡Hola, $1! Soy Kiko 🦜 ¡Vamos a aprender!"],
    [/^¡Hola, (.+)! Seguimos donde quedamos\.$/, "Hi, $1! Let's pick up where we left off.", /^Hi, (.+)! Let's pick up where we left off\.$/, "¡Hola, $1! Seguimos donde quedamos."],
    /* Saludo personalizado del inicio */
    [/^¡Hola, (.+)!$/, "Hi, $1!", /^Hi, (.+)!$/, "¡Hola, $1!"],
    /* Contadores de la cabecera del inicio */
    [/^(\d+) estrellas$/, "$1 stars", /^(\d+) stars$/, "$1 estrellas"],
    [/^1 estrella$/, "1 star", /^1 star$/, "1 estrella"],
    [/^(\d+) actividades$/, "$1 activities", /^(\d+) activities$/, "$1 actividades"],
    [/^1 actividad$/, "1 activity", /^1 activity$/, "1 actividad"],
    [/^(\d+) lecciones del colegio$/, "$1 school lessons", /^(\d+) school lessons$/, "$1 lecciones del colegio"],
    [/^1 lección del colegio$/, "1 school lesson", /^1 school lesson$/, "1 lección del colegio"],
    /* Progreso con "de": primero lo más específico */
    [/^(\d+) de (\d+) temas del colegio completados$/, "$1 of $2 school topics completed", /^(\d+) of (\d+) school topics completed$/, "$1 de $2 temas del colegio completados"],
    [/^(\d+) de (\d+) zonas secretas$/, "$1 of $2 secret zones", /^(\d+) of (\d+) secret zones$/, "$1 de $2 zonas secretas"],
    [/^(\d+) de (\d+) misiones$/, "$1 of $2 missions", /^(\d+) of (\d+) missions$/, "$1 de $2 misiones"],
    [/^(\d+) de (\d+) actividades$/, "$1 of $2 activities", /^(\d+) of (\d+) activities$/, "$1 de $2 actividades"],
    [/^(\d+) de (\d+) accesorios$/, "$1 of $2 accessories", /^(\d+) of (\d+) accessories$/, "$1 de $2 accesorios"],
    [/^(\d+) de (\d+) candados$/, "$1 of $2 locks", /^(\d+) of (\d+) locks$/, "$1 de $2 candados"],
    [/^(\d+) de (\d+) piezas$/, "$1 of $2 pieces", /^(\d+) of (\d+) pieces$/, "$1 de $2 piezas"],
    [/^(\d+) de (\d+) etapas$/, "$1 of $2 stages", /^(\d+) of (\d+) stages$/, "$1 de $2 etapas"],
    [/^(\d+) de (\d+) rondas$/, "$1 of $2 rounds", /^(\d+) of (\d+) rounds$/, "$1 de $2 rondas"],
    [/^(\d+) de (\d+) temas$/, "$1 of $2 topics", /^(\d+) of (\d+) topics$/, "$1 de $2 temas"],
    [/^(\d+) de (\d+)$/, "$1 of $2", /^(\d+) of (\d+)$/, "$1 de $2"],
    /* Contadores con emoji delante */
    [/^🏆 (\d+) de (\d+) misiones$/, "🏆 $1 of $2 missions", /^🏆 (\d+) of (\d+) missions$/, "🏆 $1 de $2 misiones"],
    [/^🔑 (\d+) de (\d+) zonas secretas$/, "🔑 $1 of $2 secret zones", /^🔑 (\d+) of (\d+) secret zones$/, "🔑 $1 de $2 zonas secretas"],
    [/^🎒 (\d+) de (\d+) accesorios · 🏅 (\d+) de (\d+) misiones$/, "🎒 $1 of $2 accessories · 🏅 $3 of $4 missions", /^🎒 (\d+) of (\d+) accessories · 🏅 (\d+) of (\d+) missions$/, "🎒 $1 de $2 accesorios · 🏅 $3 de $4 misiones"],
    [/^✨ (\d+) puestos?$/, "✨ $1 equipped", /^✨ (\d+) equipped$/, "✨ $1 puestos"],
    /* Etiquetas de estadísticas */
    [/^Actividades: (\d+) de (\d+)$/, "Activities: $1 of $2", /^Activities: (\d+) of (\d+)$/, "Actividades: $1 de $2"],
    [/^Aciertos: (\d+) de (\d+)$/, "Correct answers: $1 of $2", /^Correct answers: (\d+) of (\d+)$/, "Aciertos: $1 de $2"],
    [/^Trazos: (\d+) de (\d+)$/, "Strokes: $1 of $2", /^Strokes: (\d+) of (\d+)$/, "Trazos: $1 de $2"],
    [/^Misiones: (\d+) de (\d+)$/, "Missions: $1 of $2", /^Missions: (\d+) of (\d+)$/, "Misiones: $1 de $2"],
    [/^Estrellas: (\d+) de (\d+)$/, "Stars: $1 of $2", /^Stars: (\d+) of (\d+)$/, "Estrellas: $1 de $2"],
    [/^Dominio: (\d+)% de (\d+)%$/, "Mastery: $1% of $2%", /^Mastery: (\d+)% of (\d+)%$/, "Dominio: $1% de $2%"],
    /* Materia · progreso */
    [/^(.+) · (\d+) temas de (\d+)$/, "$1 · $2 of $3 topics", /^(.+) · (\d+) of (\d+) topics$/, "$1 · $2 temas de $3"],
    /* Fichas de filtro del aventurero */
    [/^Todas · (\d+)$/, "All · $1", /^All · (\d+)$/, "Todas · $1"],
    [/^Aventura · (\d+)$/, "Adventure · $1", /^Adventure · (\d+)$/, "Aventura · $1"],
    [/^Letras · (\d+)$/, "Letters · $1", /^Letters · (\d+)$/, "Letras · $1"],
    [/^Números · (\d+)$/, "Numbers · $1", /^Numbers · (\d+)$/, "Números · $1"],
    [/^Memoria y lógica · (\d+)$/, "Memory and logic · $1", /^Memory and logic · (\d+)$/, "Memoria y lógica · $1"],
    /* Enlaces y avisos con prefijo */
    [/^▶️ Toca para ir: (.+)$/, "▶️ Tap to go: $1", /^▶️ Tap to go: (.+)$/, "▶️ Toca para ir: $1"],
    [/^Seguir: (.+)$/, "Next: $1", /^Next: (.+)$/, "Seguir: $1"],
    [/^🆕 Nueva · (\d+) etapas?$/, "🆕 New · $1 stages", /^🆕 New · (\d+) stages?$/, "🆕 Nueva · $1 etapas"],
    /* Contadores con emoji (Inicio, mascota, concurso y perfil) */
    [/^⭐ (\d+) estrellas$/, "⭐ $1 stars", /^⭐ (\d+) stars$/, "⭐ $1 estrellas"],
    [/^⭐ 1 estrella$/, "⭐ 1 star", /^⭐ 1 star$/, "⭐ 1 estrella"],
    [/^🏆 (\d+) puntos$/, "🏆 $1 points", /^🏆 (\d+) points$/, "🏆 $1 puntos"],
    [/^🏆 1 punto$/, "🏆 1 point", /^🏆 1 point$/, "🏆 1 punto"],
    [/^✅ (\d+) de (\d+) rondas$/, "✅ $1 of $2 rounds", /^✅ (\d+) of (\d+) rounds$/, "✅ $1 de $2 rondas"],
    [/^🎯 (\d+) aciertos · (\d+) pts$/, "🎯 $1 correct · $2 pts", /^🎯 (\d+) correct · (\d+) pts$/, "🎯 $1 aciertos · $2 pts"],
    [/^✅ (\d+) aciertos$/, "✅ $1 correct", /^✅ (\d+) correct$/, "✅ $1 aciertos"],
    [/^✅ 1 acierto$/, "✅ 1 correct", /^✅ 1 correct$/, "✅ 1 acierto"],
    [/^🎤 (\d+) lecturas grabadas$/, "🎤 $1 readings recorded", /^🎤 (\d+) readings recorded$/, "🎤 $1 lecturas grabadas"],
    [/^🎤 1 lectura grabada$/, "🎤 1 reading recorded", /^🎤 1 reading recorded$/, "🎤 1 lectura grabada"],
    [/^🎒 (\d+) de (\d+) accesorios$/, "🎒 $1 of $2 accessories", /^🎒 (\d+) of (\d+) accessories$/, "🎒 $1 de $2 accesorios"],
    [/^🏅 (\d+) de (\d+) misiones$/, "🏅 $1 of $2 missions", /^🏅 (\d+) of (\d+) missions$/, "🏅 $1 de $2 misiones"],
    /* Cuenta y perfiles */
    [/^Creado: (.+)$/, "Created: $1", /^Created: (.+)$/, "Creado: $1"],
    [/^Última actividad: (.+)$/, "Last activity: $1", /^Last activity: (.+)$/, "Última actividad: $1"],
    [/^· copia automática: (.+)$/, "· automatic backup: $1", /^· automatic backup: (.+)$/, "· copia automática: $1"],
    [/^✏️ Cambiar nombre o animal de (.+)$/, "✏️ Change $1's name or animal", /^✏️ Change (.+)'s name or animal$/, "✏️ Cambiar nombre o animal de $1"],
    [/^🧹 Borrar el progreso de (.+)$/, "🧹 Clear $1's progress", /^🧹 Clear (.+)'s progress$/, "🧹 Borrar el progreso de $1"],
    [/^🗑️ Eliminar el perfil de (.+)$/, "🗑️ Delete $1's profile", /^🗑️ Delete (.+)'s profile$/, "🗑️ Eliminar el perfil de $1"],
    [/^Abrir las lecciones de (.+)$/, "Open $1's lessons", /^Open (.+)'s lessons$/, "Abrir las lecciones de $1"],
    [/^Sugerencia: empieza por (.+) \(primer tema sin completar del grado (.+)\)\.$/, "Suggestion: start with $1 (first unfinished topic in grade $2).", /^Suggestion: start with (.+) \(first unfinished topic in grade (.+)\)\.$/, "Sugerencia: empieza por $1 (primer tema sin completar del grado $2)."],
    /* Cuenta, perfiles y copia de respaldo */
    [/^Perfil de (.+)$/, "$1's profile", /^(.+)'s profile$/, "Perfil de $1"],
    [/^👤 Mi cuenta de usuario \(«(.+)»\)$/, "👤 My user account («$1»)", /^👤 My user account \(«(.+)»\)$/, "👤 Mi cuenta de usuario («$1»)"],
    [/^👤 Mi cuenta: (.+)$/, "👤 My account: $1", /^👤 My account: (.+)$/, "👤 Mi cuenta: $1"],
    [/^Copia guardada: todavía ninguna · Creado: (.+?) · Perfiles en la copia: (\d+)$/, "Backup saved: none yet · Created: $1 · Profiles in backup: $2", /^Backup saved: none yet · Created: (.+?) · Profiles in backup: (\d+)$/, "Copia guardada: todavía ninguna · Creado: $1 · Perfiles en la copia: $2"],
    [/^Copia guardada: (.+?) · Creado: (.+?) · Perfiles en la copia: (\d+)$/, "Backup saved: $1 · Created: $2 · Profiles in backup: $3", /^Backup saved: (.+?) · Created: (.+?) · Profiles in backup: (\d+)$/, "Copia guardada: $1 · Creado: $2 · Perfiles en la copia: $3"],
    [/^Copia guardada: todavía ninguna · Creado: (.+)$/, "Backup saved: none yet · Created: $1", /^Backup saved: none yet · Created: (.+)$/, "Copia guardada: todavía ninguna · Creado: $1"],
    [/^Copia guardada: (.+?) · Creado: (.+)$/, "Backup saved: $1 · Created: $2", /^Backup saved: (.+?) · Created: (.+)$/, "Copia guardada: $1 · Creado: $2"],
    [/^Gmail amarrado: (.+) · ☁️ Copia en la nube: pendiente$/, "Linked Gmail: $1 · ☁️ Cloud backup: pending", /^Linked Gmail: (.+) · ☁️ Cloud backup: pending$/, "Gmail amarrado: $1 · ☁️ Copia en la nube: pendiente"],
    [/^Gmail amarrado: (.+) · ☁️ Copia en la nube: última subida (.+)$/, "Linked Gmail: $1 · ☁️ Cloud backup: last upload $2", /^Linked Gmail: (.+) · ☁️ Cloud backup: last upload (.+)$/, "Gmail amarrado: $1 · ☁️ Copia en la nube: última subida $2"],
    [/^🔐 Clave de (.+)$/, "🔐 Key for $1", /^🔐 Key for (.+)$/, "🔐 Clave de $1"],
    [/^🔑 Clave de (.+)$/, "🔑 Key for $1", /^🔑 Key for (.+)$/, "🔑 Clave de $1"],
    [/^🔑 Nueva clave de (.+)$/, "🔑 New key for $1", /^🔑 New key for (.+)$/, "🔑 Nueva clave de $1"],
    [/^Registrada como (.+)\. Falta la clave de respaldo para entrar sin Google\.$/, "Registered as $1. The backup key is missing to sign in without Google.", /^Registered as (.+)\. The backup key is missing to sign in without Google\.$/, "Registrada como $1. Falta la clave de respaldo para entrar sin Google."],
    [/^Listo, guardé el perfil de (.+)\.$/, "Done, I saved $1's profile.", /^Done, I saved (.+)'s profile\.$/, "Listo, guardé el perfil de $1."],
    /* Dificultad, tonos, mascotas y lugares bloqueados */
    [/^Dificultad de (.+)$/, "Difficulty: $1", /^Difficulty: (.+)$/, "Dificultad de $1"],
    [/^Color de piel (.+)$/, "Skin color: $1", /^Skin color: (.+)$/, "Color de piel $1"],
    [/^(.+) cría$/, "$1 (baby)", /^(.+) \(baby\)$/, "$1 cría"],
    [/^(.+) \(bloqueado\)$/, "$1 (locked)", /^(.+) \(locked\)$/, "$1 (bloqueado)"],
    /* Dato de cultura */
    [/^Dato sorpresa: (.+?)\. Toca para escucharlo o cambiarlo\.$/, "Surprise fact: $1. Tap to listen or change it.", /^Surprise fact: (.+?)\. Tap to listen or change it\.$/, "Dato sorpresa: $1. Toca para escucharlo o cambiarlo."],
    /* Saludo de Kiko en la pantalla de inicio (texto de data.js, no se toca) */
    [/^¡Hola (.+)! ¡Hola! Soy Kiko, tu amigo loro\. Hoy vamos a descubrir letras, números y nuevas ideas jugando\. ¡Tú marcas el ritmo! Toca el botón grande cuando quieras comenzar\.$/, "Hi $1! Hi! I'm Kiko, your parrot friend. Today we'll discover letters, numbers and new ideas by playing. You set the pace! Tap the big button when you want to start.", /^Hi (.+)! Hi! I'm Kiko, your parrot friend\. Today we'll discover letters, numbers and new ideas by playing\. You set the pace! Tap the big button when you want to start\.$/, "¡Hola $1! ¡Hola! Soy Kiko, tu amigo loro. Hoy vamos a descubrir letras, números y nuevas ideas jugando. ¡Tú marcas el ritmo! Toca el botón grande cuando quieras comenzar."],
    [/^¡Hola! Soy Kiko, tu amigo loro\. Hoy vamos a descubrir letras, números y nuevas ideas jugando\. ¡Tú marcas el ritmo! Toca el botón grande cuando quieras comenzar\.$/, "Hi! I'm Kiko, your parrot friend. Today we'll discover letters, numbers and new ideas by playing. You set the pace! Tap the big button when you want to start.", /^Hi! I'm Kiko, your parrot friend\. Today we'll discover letters, numbers and new ideas by playing\. You set the pace! Tap the big button when you want to start\.$/, "¡Hola! Soy Kiko, tu amigo loro. Hoy vamos a descubrir letras, números y nuevas ideas jugando. ¡Tú marcas el ritmo! Toca el botón grande cuando quieras comenzar."],
    [/^¡Qué alegría verte otra vez! Tu aventura continúa justo donde la dejaste\. ¡Vamos por el siguiente descubrimiento!$/, "So glad to see you again! Your adventure continues right where you left off. Let's go for the next discovery!", /^So glad to see you again! Your adventure continues right where you left off\. Let's go for the next discovery!$/, "¡Qué alegría verte otra vez! Tu aventura continúa justo donde la dejaste. ¡Vamos por el siguiente descubrimiento!"],
  ];

  function actual() {
    try {
      return localStorage.getItem(CLAVE) === "en" ? "en" : "es";
    } catch (e) {
      return "es";
    }
  }

  function guardar(idioma) {
    try {
      localStorage.setItem(CLAVE, idioma);
    } catch (e) { /* modo privado: sin persistencia */ }
  }

  /* Colapsa espacios y recorta extremos: las coincidencias no
     dependen del formato del HTML. */
  function norm(texto) {
    return String(texto).replace(/\s+/g, " ").trim();
  }

  /* Traduce UNA cadena según el idioma activo: en EN busca en
     DICC (ES→EN); en ES busca en REV (EN→ES, para volver atrás).
     Si no hay entrada exacta, prueba PATRONES (interpolación).
     Devuelve el texto traducido, o null si no hay entrada. */
  function traducirCadena(texto) {
    if (!texto) return null;
    const limpio = norm(texto);
    if (!limpio) return null;
    const en = actual() === "en";
    const destino = en ? DICC[limpio] : REV[limpio];
    if (destino) return String(texto).replace(limpio, destino);
    for (const pat of PATRONES) {
      if (en && pat[0].test(limpio)) {
        return limpio.replace(pat[0], pat[1]);
      }
      if (!en && pat[2].test(limpio)) {
        return limpio.replace(pat[2], pat[3]);
      }
    }
    return null;
  }

  /* NOTA: `aplicando` NO evita bucles del observer: las mutaciones
     se entregan en una microtask posterior, cuando este flag ya
     volvió a false. Se conserva (inofensivo), pero la convergencia
     real la dan los checks de idempotencia de texto y atributos:
     solo se escribe si el valor cambia. */
  let aplicando = false;

  /* Traduce textos y atributos dentro de `raiz` (un Element o
     el propio body), EN LA DIRECCIÓN del idioma activo: en EN
     pasa frases ES→EN; en ES revierte frases EN→ES con REV.
     Si `soloAtributos` es true, SOLO recorre los atributos de
     `raiz` (sin TreeWalker ni querySelectorAll): lo usa el
     observer para mutaciones de atributo, sin re-escanear el
     subtree. Los nodos de script/style de código se ignoran;
     el botón de idioma no se toca (sus frases van "al revés"
     a propósito, las escribe pintarBoton). */
  function aplicar(raiz, soloAtributos) {
    if (!raiz) return;
    aplicando = true;
    try {
      if (raiz.nodeType === 3) { /* nodo de texto suelto */
        const t = traducirCadena(raiz.nodeValue);
        if (t && raiz.nodeValue !== t) raiz.nodeValue = t;
      } else if (raiz.nodeType === 1) {
        if (raiz.closest && raiz.closest("#btn-idioma")) return;
        for (const atr of ATRIBUTOS) {
          if (!raiz.hasAttribute(atr)) continue;
          const v = raiz.getAttribute(atr);
          const t = traducirCadena(v);
          if (t && t !== v) raiz.setAttribute(atr, t);
        }
        if (soloAtributos) return;
        const walker = document.createTreeWalker(
          raiz,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: function (nodo) {
              const p = nodo.parentElement;
              if (!p) return NodeFilter.FILTER_REJECT;
              const tag = p.tagName;
              if (tag === "SCRIPT" || tag === "STYLE") {
                return NodeFilter.FILTER_REJECT;
              }
              if (p.closest && p.closest("#btn-idioma")) {
                return NodeFilter.FILTER_REJECT;
              }
              return traducirCadena(nodo.nodeValue)
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          }
        );
        const nodos = [];
        let n;
        while ((n = walker.nextNode())) nodos.push(n);
        for (const nodo of nodos) {
          const t = traducirCadena(nodo.nodeValue);
          if (t && nodo.nodeValue !== t) nodo.nodeValue = t;
        }
        if (raiz.querySelectorAll) {
          const conAtr = raiz.querySelectorAll(
            "[title],[aria-label],[placeholder]"
          );
          for (const el of conAtr) {
            for (const atr of ATRIBUTOS) {
              if (!el.hasAttribute(atr)) continue;
              const v = el.getAttribute(atr);
              const t = traducirCadena(v);
              if (t && t !== v) el.setAttribute(atr, t);
            }
          }
        }
      }
    } finally {
      aplicando = false;
    }
  }

  /* Región aria-live para anunciar el cambio de idioma al lector
     de pantalla (spec: "aviso por aria-live"). Se crea bajo
     demanda, visualmente oculta por estilo inline (sin depender
     de clases del sitio). */
  function anunciar(texto) {
    let zona = document.getElementById("aviso-idioma");
    if (!zona) {
      zona = document.createElement("p");
      zona.id = "aviso-idioma";
      zona.setAttribute("aria-live", "polite");
      zona.style.cssText =
        "position:absolute;width:1px;height:1px;overflow:hidden;" +
        "clip:rect(0 0 0 0);white-space:nowrap";
      document.body.appendChild(zona);
    }
    zona.textContent = texto;
  }

  /* Cambia ES ↔ EN, guarda la preferencia, actualiza <html lang>,
     hace la pasada completa, anuncia por aria-live y deja el
     botón coherente. */
  function cambiar() {
    const nuevo = actual() === "en" ? "es" : "en";
    guardar(nuevo);
    document.documentElement.lang = nuevo === "en" ? "en-US" : "es";
    aplicando = true;
    try {
      document.body.normalize(); /* une nodos de texto partidos */
    } finally {
      aplicando = false;
    }
    aplicar(document.body);
    pintarBoton();
    anunciar(
      nuevo === "en"
        ? "Interface switched to English"
        : "Interfaz cambiada a español"
    );
  }

  function pintarBoton() {
    const btn = document.getElementById("btn-idioma");
    if (!btn) return;
    const en = actual() === "en";
    /* La etiqueta muestra el idioma destino; en EN muestra ES */
    btn.textContent = en ? "ES" : "EN";
    const titulo = en
      ? "Cambiar la interfaz al español"
      : "Switch the interface to English";
    btn.title = titulo;
    btn.setAttribute("aria-label", titulo);
    btn.setAttribute("aria-pressed", en ? "true" : "false");
  }

  /* Observer: traduce lo que aparece después (pantallas nuevas,
     burbujas de la guía, avisos). No entra en bucles: cada
     escritura compara antes y solo cambia si el valor difiere,
     y las mutaciones de atributo se procesan con `aplicar`
     (soloAtributos) sin re-escanear el subtree. */
  function iniciarObserver() {
    if (!window.MutationObserver) return;
    const obs = new MutationObserver(function (mutaciones) {
      if (aplicando) return;
      for (const m of mutaciones) {
        if (m.type === "childList") {
          for (const nodo of m.addedNodes) {
            if (nodo.nodeType === 1) aplicar(nodo);
            else if (nodo.nodeType === 3) aplicar(nodo);
          }
        } else if (m.type === "characterData") {
          aplicar(m.target);
        } else if (m.type === "attributes") {
          aplicar(m.target, true);
        }
      }
    });
    obs.observe(document.body, {
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATRIBUTOS,
      subtree: true,
    });
  }

  function iniciar() {
    document.documentElement.lang = actual() === "en" ? "en-US" : "es";
    pintarBoton();
    const btn = document.getElementById("btn-idioma");
    if (btn && !btn.dataset.idiomaListo) {
      btn.dataset.idiomaListo = "1";
      btn.addEventListener("click", cambiar);
    }
    if (actual() === "en") aplicar(document.body);
    iniciarObserver();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }

  window.IDIOMA = { actual: actual, cambiar: cambiar, aplicar: aplicar };
})();
