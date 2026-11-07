/* Contenido DBA g1 — generado por build-dba.js desde Temp/opencode/dba-src.
   Datos compactos que js/curriculo.js convierte en temas (builder anexarTemasDBA). */

/* ====== g1 / lenguaje ====== */
/* DBA 1º — lenguaje */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.lenguaje = [
  {
    n: "El sonido inicial",
    o: "Reconozco con qué sonido empieza cada palabra y encuentro su letra inicial.",
    d: "DBA: identifica sonidos de las letras para leer y escribir sus primeras palabras.",
    t: [
      ["Escucho primero", "Digo la palabra despacio y me quedo con el sonido del principio. Así reconozco sonidos antes de escribir.", "👂"],
      ["La letra inicial", "La primera letra es la que hace el sonido inicial. Mesa empieza con M y perro empieza con P.", "🔤"],
      ["Practico con ejemplos", "Digo: pan, pelota, pato. Las tres empiezan con el sonido de la P. Así aprendo a escuchar cada palabra.", "✅"],
    ],
    q: [
      ["¿Con qué letra empieza la palabra mesa?", ["M", "P", "S", "L"], 0, "Mesa empieza con la letra M porque el primer sonido es mmmm.", "Diga la palabra despacio."],
      ["¿Con qué letra empieza la palabra sol?", ["L", "S", "D", "M"], 1, "Sol empieza con S porque el primer sonido es ssss.", "Piense en el sonido del principio."],
      ["¿Con qué letra empieza la palabra perro?", ["T", "B", "P", "M"], 2, "Perro empieza con P porque suena ppp en el inicio.", "Es el mismo sonido de pan."],
      ["¿Cuál palabra empieza con la letra L?", ["dado", "mesa", "sapo", "luna"], 3, "Luna empieza con L: llll, como leche y lápiz.", "Piense en palabras de la luna."],
      ["¿Cuál palabra empieza con la letra S?", ["pato", "sol", "luna", "dado"], 1, "Sol empieza con S porque el primer sonido es ssss.", "Es una cosa que brilla en el cielo."],
      ["¿Cuál palabra empieza con la letra D?", ["dado", "sapo", "mesa", "luna"], 0, "Dado empieza con D porque el primer sonido es ddd.", "Se juega con él en la mesa."],
      ["¿Con qué letra empieza la palabra nube?", ["B", "T", "M", "N"], 3, "Nube empieza con N porque el primer sonido es nnn.", "Es blanca o gris en el cielo."],
      ["¿Con qué letra empieza la palabra taza?", ["D", "N", "T", "P"], 2, "Taza empieza con T porque el primer sonido es ttt.", "De ella tomo el agua."],
      ["¿Cuál palabra empieza con la letra P?", ["luna", "dado", "pato", "nube"], 2, "Pato empieza con P porque el primer sonido es ppp.", "Nada en el estanque."],
      ["Empiezan con la misma letra: luna, leche, lápiz. ¿Cuál es esa letra?", ["R", "S", "N", "L"], 3, "Las tres palabras empiezan con L porque las tres comienzan con el sonido lll.", "Escuche el principio de cada palabra."],
      ["¿Cuál palabra NO empieza con M?", ["pato", "mesa", "mamá", "mono"], 0, "Pato empieza con P, no con M; las otras tres sí empiezan con M.", "Busque la letra que no es M."],
      ["¿Con qué letra empieza la palabra casa?", ["S", "C", "P", "M"], 1, "Casa empieza con C, que aquí suena cccc como en carro.", "Es el lugar donde vivo."],
    ],
    cl: {
      c: [
        ["m", "EMPIEZA CON M", "🗂️"],
        ["l", "EMPIEZA CON L", "📌"],
      ],
      i: [
        ["mesa", "m"],
        ["mamá", "m"],
        ["mono", "m"],
        ["mano", "m"],
        ["luna", "l"],
        ["leche", "l"],
        ["lápiz", "l"],
        ["libro", "l"]
      ]
    },
    em: [
      ["mesa", "M"],
      ["perro", "P"],
      ["sol", "S"],
      ["luna", "L"]
    ],
    or: [
      "Digo la palabra despacio.",
      "Escucho el sonido del principio.",
      "Busco la letra que hace ese sonido.",
      "Leo la palabra para comprobar."
    ],
    e: ["Escribe dos palabras que empiecen con la letra M.", "mesa, mano", 3],
  },
  {
    n: "¿Con qué termina?",
    o: "Escucho el final de cada palabra y encuentro la última letra.",
    d: "DBA: identifica sonidos, ahora también al final de las palabras, para leer mejor.",
    t: [
      ["El final también se escucha", "Toda palabra tiene un principio y un final. Cuando termino de decir la palabra, escucho qué sonido queda.", "🔚"],
      ["La última letra", "La última letra es la que cierra la palabra. Sol termina con L y pan termina con N.", "✍️"],
      ["Comparo palabras", "Si dos palabras terminan igual, su final se escucha parecido. Casa y mesa terminan en A.", "🔁"],
    ],
    q: [
      ["¿Con qué letra termina la palabra sol?", ["S", "L", "O", "T"], 1, "Sol termina con L porque el último sonido es lll.", "Diga la palabra y escuche el final."],
      ["¿Con qué letra termina la palabra pan?", ["P", "M", "N", "T"], 2, "Pan termina con N porque el sonido final es nnn.", "Es el sonido de decir aaaa al final."],
      ["¿Con qué letra termina la palabra mesa?", ["S", "E", "O", "A"], 3, "Mesa termina con A porque la última vocal es a.", "Piense en cómo suena al acabar."],
      ["¿Cuál palabra termina en la letra P?", ["sapo", "sol", "mesa", "luna"], 0, "Sapo termina con P porque el último sonido es ppp.", "Es un animal que croa."],
      ["¿Cuál palabra termina en la letra L?", ["pan", "mano", "sal", "gato"], 2, "Sal termina con L, igual que sol y flor.", "Se usa para sazonar la comida."],
      ["¿Cuál palabra termina en la letra O?", ["flor", "gato", "pan", "sal"], 1, "Gato termina con O porque la última vocal es o.", "Dice miau en la casa."],
      ["¿Con qué letra termina la palabra flor?", ["R", "L", "O", "F"], 0, "Flor termina con R porque el último sonido es rrr.", "Es lo que tiene la planta."],
      ["¿Con qué letra termina la palabra casa?", ["C", "S", "M", "A"], 3, "Casa termina con A porque cierra con la vocal a.", "También termina en A: mesa y luna."],
      ["¿Cuál palabra termina igual que perro?", ["casa", "pan", "luna", "cerro"], 3, "Cerro y perro terminan igual, en rro, por eso riman.", "Busque el mismo final."],
      ["¿Cuál palabra termina igual que casa?", ["mesa", "sol", "perro", "pan"], 0, "Mesa y casa terminan igual, en asa.", "Es un mueble del salón."],
      ["¿Con qué letra termina la palabra luna?", ["L", "N", "A", "U"], 1, "Luna termina con N porque el sonido final es nnn.", "Escuche la última parte: na."],
      ["¿Con qué letra termina la palabra mano?", ["M", "A", "O", "N"], 2, "Mano termina con O porque la última vocal es o.", "Es la parte del cuerpo con cinco dedos."],
    ],
    cl: {
      c: [
        ["a", "TERMINAN EN A", "🗂️"],
        ["o", "TERMINAN EN O", "📌"],
      ],
      i: [
        ["casa", "a"],
        ["mesa", "a"],
        ["luna", "a"],
        ["mano", "a"],
        ["gato", "o"],
        ["sapo", "o"],
        ["perro", "o"],
        ["libro", "o"]
      ]
    },
    em: [
      ["sol", "L"],
      ["pan", "N"],
      ["flor", "R"],
      ["mesa", "A"]
    ],
    or: [
      "Digo la palabra completa.",
      "Me quedo con el sonido del final.",
      "Busco la letra que hace ese sonido.",
      "Comparo con otra palabra que termina igual."
    ],
    e: ["Escribe dos palabras que terminen en la letra O.", "gato, sapo", 3],
  },
  {
    n: "Palabras que riman",
    o: "Reconozco palabras que terminan igual y las uso para jugar con los sonidos.",
    d: "DBA: identifica sonidos al final de las palabras para leer y escribir con más seguridad.",
    t: [
      ["Rimar es terminar igual", "Dos palabras riman cuando terminan con el mismo sonido. Casa y mesa terminan en asa, así que riman.", "🎵"],
      ["Ejemplos divertidos", "Gato y plato riman. Sapo y trapo riman. Perro y cerro riman porque las dos terminan en rro.", "😄"],
      ["Juego de rimas", "Puedo inventar rimas: si digo flor, puedo buscar color. Rimar me ayuda a escuchar mejor.", "🎮"],
    ],
    q: [
      ["¿Cuál palabra rima con casa?", ["luna", "perro", "mesa", "sol"], 2, "Casa y mesa terminan igual, en asa, por eso riman.", "Mire cómo terminan las palabras."],
      ["¿Cuál palabra rima con gato?", ["sapo", "flor", "perro", "plato"], 3, "Gato y plato terminan igual, en ato, así que riman.", "Piense en algo de la cocina."],
      ["¿Cuál palabra rima con perro?", ["cerro", "casa", "luna", "pan"], 0, "Perro y cerro terminan igual, en rro.", "Es un montañón de tierra."],
      ["¿Cuál palabra rima con flor?", ["mesa", "color", "gato", "sapo"], 1, "Flor y color terminan igual, en or.", "Piense en pintar algo bonito."],
      ["¿Cuál palabra rima con sapo?", ["mesa", "flor", "luna", "trapo"], 3, "Sapo y trapo terminan igual, en apo.", "Se usa para limpiar el piso."],
      ["¿Cuál palabra rima con luna?", ["casa", "perro", "cuna", "sapo"], 2, "Luna y cuna terminan igual, en una.", "Ahí duerme el bebé."],
      ["Leo: La luna duerme en la cuna. ¿Qué palabras riman?", ["luna y duerme", "luna y cuna", "cuna y duerme", "la y en"], 1, "Luna y cuna son las que terminan igual, en una.", "Busque las palabras del final."],
      ["¿Cuál palabra rima con zapato?", ["plato", "sapo", "perro", "flor"], 0, "Zapato y plato terminan igual, en ato.", "De la comida se sirve en él."],
      ["¿Cuál palabra rima con sal?", ["cristal", "sol", "pan", "mesa"], 0, "Sal y cristal terminan igual, en al.", "Es claro y se rompe fácil."],
      ["Si digo pan, ¿qué palabra rima?", ["mano", "tren", "flor", "gato"], 1, "Pan y tren terminan igual, en an.", "Va por las vías."],
      ["Riman perro y cerro porque:", ["las dos son colores", "las dos empiezan con p", "las dos terminan igual", "las dos terminan en l"], 2, "Rimar es terminar igual: las dos palabras terminan en rro.", "Recuerde que rimar es del final."],
      ["¿Cuál palabra NO rima con casa?", ["mesa", "taza", "plato", "sapo"], 3, "Sapo termina en apo, no en asa, así que no rima con casa.", "Busque el final distinto."],
    ],
    cl: {
      c: [
        ["r1", "RIMAN CON CASA", "🗂️"],
        ["r2", "RIMAN CON GATO", "📌"],
      ],
      i: [
        ["mesa", "r1"],
        ["taza", "r1"],
        ["plato", "r2"],
        ["zapato", "r2"],
        ["asa", "r1"],
        ["ato", "r2"]
      ]
    },
    em: [
      ["casa", "mesa"],
      ["gato", "plato"],
      ["flor", "color"],
      ["sapo", "trapo"]
    ],
    or: [
      "Digo la primera palabra.",
      "Escucho cómo termina.",
      "Busco otra palabra que termine igual.",
      "Las leo juntas para comprobar la rima."
    ],
    e: ["Escribe una palabra que rime con sol.", "gol o col", 3],
  },
  {
    n: "Leo frases cortas",
    o: "Leo frases de una o dos palabras con sentido y digo qué sucede en ellas.",
    d: "DBA: lee textos cortos y comprende lo que dicen.",
    t: [
      ["Leo de izquierda a derecha", "Miro la frase, empiezo por la primera palabra y sigo hacia la derecha. Así no me salto nada.", "👁️"],
      ["Una frase dice algo", "Una frase cuenta algo: Ana come arepa. Tiene letras, palabras y un punto al final.", "💬"],
      ["Después cuento", "Cuando termino de leer, pregunto: ¿quién? ¿qué hace? Así sé que entendí la frase.", "🤔"],
    ],
    q: [
      ["Leo: Ana come arepa. ¿Qué hace Ana?", ["Duerme", "Corre", "Salta la cuerda", "Come arepa"], 3, "La frase dice que Ana come arepa, por eso esa es la respuesta.", "Lea otra vez la frase."],
      ["Leo: El gato duerme. ¿Qué hace el gato?", ["Duerme", "Miau", "Corre", "Come"], 0, "La frase dice claramente que el gato duerme.", "Busque la acción del gato."],
      ["Leo: La pelota es roja. ¿De qué color es la pelota?", ["Azul", "Roja", "Verde", "Amarilla"], 1, "La frase dice que la pelota es roja.", "Escuche la última parte de la frase."],
      ["¿Cuál frase está bien escrita?", ["come el niño la arepa.", "el niño come la arepa", "El niño come la arepa.", "El niño La Arepa come."], 2, "La buena frase empieza con mayúscula, termina con punto y sus palabras están en orden.", "Busque mayúscula y punto."],
      ["Leo: Sofía lee un cuento. ¿Quién lee?", ["Sofía", "El cuento", "Mamá", "Nadie"], 0, "Sofía es quien lee porque es la primera palabra de la frase.", "Quién está al principio."],
      ["Leo: Nos vamos a la plaza. ¿A dónde van?", ["A la escuela", "A la tienda", "Al río", "A la plaza"], 3, "La frase dice que se van a la plaza.", "Escuche el lugar de la frase."],
      ["Leo: Pedro salta. ¿Quién salta?", ["Mamá", "El caballo", "Pedro", "Nadie"], 2, "Pedro es quien salta porque es el que está haciendo la acción.", "El que hace la acción es el principio."],
      ["Leo: Tengo una mochila nueva. ¿Qué tiene el niño?", ["Un cuento", "Una mochila", "Una pelota", "Una taza"], 1, "La frase dice que tiene una mochila nueva.", "Es lo que se lleva a la escuela."],
      ["Leo: Mi mamá lava la ropa. ¿Qué hace mamá?", ["Canta", "Lava la ropa", "Duerme", "Lee"], 1, "La frase dice que mamá lava la ropa.", "Busque la acción de mamá."],
      ["Leo: El niño come una arepa. ¿Qué come?", ["Un plátano", "Un dulce", "Una arepa", "Un queso"], 2, "El niño come una arepa, así lo dice la frase.", "Es comida colombiana de maíz."],
      ["¿Cuál frase le primero porque está bien terminada?", ["el Sol Brilla.", "el sol brilla", "El sol brilla", "El sol brilla."], 3, "La frase El sol brilla tiene mayúscula al empezar y punto al final.", "Mire el principio y el final."],
      ["Leo: Vamos al río con papá. ¿Con quién van?", ["Con papá", "Con mamá", "Con la abuela", "Solo"], 0, "La frase dice que van con papá.", "Es la última idea de la frase."],
    ],
    cl: {
      c: [
        ["ac", "ACCIÓN QUE SE HACE", "🗂️"],
        ["es", "QUIÉN O QUÉ ESTÁ EN LA FRASE", "📌"],
      ],
      i: [
        ["come arepa", "ac"],
        ["salta", "ac"],
        ["lava la ropa", "ac"],
        ["duerme", "ac"],
        ["Ana", "es"],
        ["Pedro", "es"],
        ["la pelota", "es"],
        ["la mochila", "es"]
      ]
    },
    em: [
      ["Ana", "come arepa"],
      ["El gato", "duerme"],
      ["La pelota", "es roja"],
      ["Pedro", "salta"]
    ],
    or: [
      "Miro la frase completa.",
      "Leo despacio de izquierda a derecha.",
      "Pienso quién está y qué hace.",
      "Respondo con mis palabras."
    ],
    e: ["Escribe una frase corta sobre lo que haces en la mañana.", "Me cepillo los dientes.", 3],
  },
  {
    n: "Mayúscula y punto",
    o: "Escribo mayúscula al inicio y punto al final de cada frase.",
    d: "DBA: escribe oraciones básicas con las señales que las hacen claras.",
    t: [
      ["Empiezo con mayúscula", "Toda frase empieza con letra mayúscula. Mi nombre Sofía también empieza con mayúscula.", "🅰️"],
      ["Termino con punto", "Al final de la frase pongo un punto. El punto me dice que ya terminé de hablar.", "•"],
      ["Dejo un espacio", "Entre cada palabra dejo un espacio con el dedo. Así no se juntan todas las letras.", "↔️"],
    ],
    q: [
      ["¿Con qué letra empieza una frase?", ["Mayúscula", "Minúscula", "Con un número", "Con un espacio"], 0, "Toda frase empieza con letra mayúscula para marcar el comienzo.", "Piense en la primera letra de tu nombre."],
      ["¿Dónde va el punto?", ["Al principio de la frase", "Al final de la frase", "En medio de la palabra", "Encima de la e"], 1, "El punto se coloca al final para indicar que la frase terminó.", "Es la señal de que ya acabó."],
      ["¿Cuál frase empieza bien?", ["perro come.", "el perro Come", "El perro come.", "PERRO come"], 2, "La frase El perro come empieza con mayúscula E.", "Mire la primera letra."],
      ["¿Cuál frase tiene punto al final?", ["El sol brilla", "El Sol Brilla", "el sol brilla.", "El sol brilla."], 3, "Solo la opción con punto está terminada correctamente.", "Busque el puntito al final."],
      ["Entre dos palabras debo dejar:", ["ningún espacio", "un espacio", "dos puntos", "una rayita"], 1, "El espacio separa las palabras para que se puedan leer.", "Es lo que deja el dedo en el renglón."],
      ["Leo: el niño salta. ¿Qué le falta a la frase?", ["El punto", "El espacio", "Las palabras", "Nada"], 0, "Falta el punto final y también la mayúscula al principio.", "Mire el final de la frase."],
      ["¿Cuál frase está bien escrita?", ["hoy es lunes.", "HOY es lunes", "Hoy Es Lunes", "Hoy es lunes."], 3, "Hoy es lunes tiene mayúscula al inicio, minúsculas después y punto final.", "Revise principio, medio y final."],
      ["Mi nombre se escribe con:", ["letra minúscula siempre", "ninguna letra", "letra mayúscula al inicio", "un punto al final"], 2, "Los nombres propios empiezan con mayúscula, como Sofía o Daniel.", "Es como si fuera el comienzo de una frase."],
      ["¿Cuál es la última señal que pongo en una frase?", ["El espacio", "La mayúscula", "El punto", "La raya"], 2, "Primero la mayúscula, después las palabras con espacio y al final el punto.", "Es lo último del renglón."],
      ["Leo: Tengo Una Pelota. ¿Qué debo corregir?", ["Quitar el punto", "No escribir nada", "Escribir más grande", "Poner minúsculas a las otras letras"], 3, "Solo la primera letra va con mayúscula; las demás palabras van en minúscula.", "La mayúscula es solo al principio."],
      ["¿Cómo quedan las letras dentro de la palabra?", ["Todas pegadas sin espacio", "Con espacio entre ellas", "Con mayúscula cada una", "En orden alfabético"], 0, "Las letras de una misma palabra van pegadas; el espacio es entre palabras.", "El espacio separa palabras, no letras."],
      ["¿Cuál tiene mayúscula y punto?", ["mi mamá lava.", "Mi mamá lava.", "mi Mamá lava", "MI MAMÁ LAVA."], 1, "Mi mamá lava empieza con mayúscula y termina con punto.", "Busque las dos señales juntas."],
    ],
    cl: {
      c: [
        ["ok", "ESTÁ BIEN ESCRITA", "🗂️"],
        ["no", "NECESITA CORRECCIÓN", "📌"],
      ],
      i: [
        ["El niño come.", "ok"],
        ["Ana salta.", "ok"],
        ["El gato duerme.", "ok"],
        ["Hoy es martes.", "ok"],
        ["el niño come", "no"],
        ["ana salta", "no"],
        ["El gato duerme", "no"],
        ["HOY ES MARTES.", "no"]
      ]
    },
    em: [
      ["inicio de la frase", "mayúscula"],
      ["final de la frase", "punto"],
      ["entre dos palabras", "espacio"]
    ],
    or: [
      "Escribo la primera letra en mayúscula.",
      "Escribo las palabras con un espacio entre ellas.",
      "Pongo punto al final de la frase.",
      "Leo para comprobar que se entiende."
    ],
    e: ["Escribe una frase de tu familia con mayúscula y punto.", "Papá lee un cuento.", 3],
  },
  {
    n: "Escribo mis ideas",
    o: "Escribo oraciones cortas para contar lo que pienso, veo y siento.",
    d: "DBA: escribe oraciones básicas para expresar sus ideas del día a día.",
    t: [
      ["Primero pienso", "Antes de escribir digo en voz alta lo que quiero contar. Después lo escribo palabra por palabra.", "💭"],
      ["Escribo palabra por palabra", "Escribo una idea en cada renglón: Yo voy a la escuela. Uso mayúscula y punto.", "📝"],
      ["Vuelvo a leer", "Leo lo que escribí. Si se entiende, estoy listo; si no, lo arreglo con gusto.", "🔁"],
    ],
    q: [
      ["¿Qué hago antes de escribir una idea?", ["Corro", "Pienso y digo lo que quiero contar", "Borro todo", "Me callo"], 1, "Primero pienso en lo que quiero decir y luego lo escribo.", "La idea nace antes del lápiz."],
      ["Escribo: Me gusta la _____. ¿Qué palabra completa la idea?", ["mesa", "tiza", "arepa", "nube"], 2, "Arepa es una comida y queda como idea completa y con sentido.", "Es comida de maíz muy colombiana."],
      ["¿Cuánta idea escribo en cada renglón?", ["Cinco ideas", "Todas las del día", "Ninguna", "Una idea"], 3, "Una idea por renglón hace que mi oración sea clara y fácil de leer.", "Así no se me junta todo."],
      ["¿Qué le pongo al final de mi idea?", ["Un punto", "Un dibujo", "Una risa", "Un número"], 0, "El punto marca que mi idea ya terminó.", "Es la señal de final."],
      ["Escribo: Voy a la plaza con mi mamá. ¿De qué hablo?", ["De mi mascota", "De una tarea", "De un paseo", "De una fruta"], 2, "La oración cuenta un paseo a la plaza con mamá.", "Lea la idea completa."],
      ["Si escribo: Juego con Diego. ¿Quién es el sujeto de mi idea?", ["Juego", "Diego", "Nadie", "El balón"], 1, "Juego con Diego habla de lo que hace Diego, por eso él es el sujeto.", "Es quien está haciendo la acción."],
      ["¿Cómo sé que mi oración se entiende?", ["La leo en voz alta", "La copio más grande", "La dibujo", "La cuento sin escribir"], 0, "Al leerla en voz alta descubro si mi idea quedó clara.", "Mi voz me ayuda a revisar."],
      ["Escribo sobre mi día. ¿Cuál es una buena idea?", ["El azul como correr", "Rápido verde", "Mesa pelota anda", "Hoy jugué en el recreo"], 3, "Hoy jugué en el recreo es una idea completa, con sentido y con punto.", "Busque lo que sí se entiende."],
      ["Para escribir mejor, debo:", ["escribir en una sola línea pegado", "mezclar todas las letras", "no usar punto", "escribir con orden y sin apuro"], 3, "Escribir con orden y sin apuro me ayuda a que otros me entiendan.", "La calma mejora la letra."],
      ["Escribo: Me llamo Paula. ¿Quién habla en la oración?", ["Paula", "Mamá", "El niño", "Nadie"], 0, "La oración habla de la niña que se llama Paula.", "Es la primera palabra."],
      ["¿Qué hago si me equivoco al escribir?", ["Rómpo el papel", "Borro y lo vuelvo a intentar", "Dejo la tarea", "Cambio de salón"], 1, "Corregir es parte de aprender; siempre puedo intentarlo de nuevo.", "El error me enseña."],
      ["Escribo una oración sobre mi familia. ¿Cuál es correcta?", ["Mi Papá Y Yo Leemos", "mi papá y yo leemos", "Mi papá y yo leemos.", "Mi papá y yo leemos."], 2, "Mi papá y yo leemos está en orden, con mayúscula y punto: queda perfecta.", "Revise orden, mayúscula y punto."],
    ],
    cl: {
      c: [
        ["fam", "HABLA DE MI FAMILIA", "🗂️"],
        ["esc", "HABLA DE LA ESCUELA", "📌"],
      ],
      i: [
        ["Mi mamá cocina.", "fam"],
        ["Mi papá me ayuda.", "fam"],
        ["Mi abuela cuenta cuentos.", "fam"],
        ["Leo un cuento en clase.", "esc"],
        ["Escribo en mi cuaderno.", "esc"],
        ["Mi amiga va conmigo.", "esc"]
      ]
    },
    em: [
      ["pienso", "escribo"],
      ["una idea", "un renglón"],
      ["final de la idea", "punto"],
      ["leo", "reviso"]
    ],
    or: [
      "Pienso en lo que quiero contar.",
      "Escribo la idea palabra por palabra.",
      "Pongo mayúscula al inicio y punto al final.",
      "Leo mi oración para comprobar."
    ],
    e: ["Escribe una oración sobre lo que hiciste ayer.", "Ayer fui al parque con mi hermano.", 3],
  },
  {
    n: "Mis emociones en palabras",
    o: "Nombro cómo me siento y uso palabras para expresar mis emociones.",
    d: "DBA: expresa sus ideas y emociones diarias con palabras escritas y habladas.",
    t: [
      ["Tengo emociones", "Me siento alegre, triste, enojado o tranquilo. Todas las emociones son normales y puedo decirlas.", "💛"],
      ["Pongo nombre al sentir", "Cuando digo estoy alegre o estoy triste, los demás entienden cómo me siento.", "🗣️"],
      ["Escribo cómo me siento", "En mi cuaderno puedo escribir: Hoy estoy feliz porque jugué con mis amigos.", "✍️"],
    ],
    q: [
      ["Estoy muy contento porque gané un juego. ¿Cómo me siento?", ["Enojado", "Triste", "Alegre", "Cansado"], 2, "Cuando estoy contento y juego, me siento alegre.", "Es la emoción de sonreír."],
      ["Se me cae mi cuento y lloro. ¿Cómo me siento?", ["Alegre", "Tranquilo", "Sorprendido", "Triste"], 3, "Llorar algo que se me cayó es sentir tristeza.", "Es cuando algo me apena."],
      ["Alguien me quita mi juguete sin pedirme permiso. ¿Cómo me siento?", ["Enojado", "Alegre", "Dormido", "Orgulloso"], 0, "Es normal sentir enojo cuando me tratan sin respeto.", "Es cuando algo me incomoda mucho."],
      ["Mi mamá me abraza y me dice te quiero. ¿Cómo me siento?", ["Enojado", "Tranquilo y querido", "Asustado", "Aburrido"], 1, "Los abrazos y las palabras bonitas me hacen sentir tranquilo y querido.", "Es una sensación de calma."],
      ["¿Qué emoción siento cuando canto y bailo?", ["Miedo", "Cansancio", "Tristeza", "Alegría"], 3, "Cantar y bailar suele darme alegría.", "Es la emoción que me hace mover el cuerpo."],
      ["¿Cuál palabra expresa tristeza?", ["Feliz", "Contento", "Apenado", "Enojado"], 2, "Apenado es una palabra que describe tristeza.", "Es cuando siento pesar en el corazón."],
      ["Escribo: Estoy enojado porque _____. ¿Qué idea la completa bien?", ["el cielo es azul", "mi juguete está roto", "hay una mesa", "es día de clase"], 1, "Rojarse un juguete es una razón clara para sentir enojo.", "Busque la causa del enojo."],
      ["¿Cómo expreso que estoy triste?", ["Digo o escribo cómo me siento", "Me golpeo", "Grito siempre", "Me escondo sin decir nada"], 0, "Hablar o escribir mi emoción ayuda a que otro me consuele.", "Las emociones se comparten."],
      ["¿Qué emoción siento cuando veo una película de miedo?", ["Miedo", "Alegría", "Hambre", "Orgullo"], 0, "Las películas de miedo despiertan la emoción de miedo.", "Es cuando quiero que me abracen."],
      ["Mi amigo está triste. ¿Qué puedo hacer?", ["Reírme de él", "Decirle palabras bonitas", "Quitarle su cuento", "Gritarle"], 1, "Las palabras bonitas ayudan a que el otro se sienta mejor.", "El cariño se comparte."],
      ["¿Cuál es una palabra de emoción?", ["mesa", "cuaderno", "enojo", "taza"], 2, "Enojo nombra una emoción; las otras son cosas.", "Es algo que siento, no algo que toco."],
      ["Escribo: Hoy estoy feliz porque jugué con Diego. ¿Qué emoción escribí?", ["Enojo", "Tristeza", "Miedo", "Alegría"], 3, "Feliz es la palabra que nombra la alegría.", "Es la emoción de sonreír."],
    ],
    cl: {
      c: [
        ["pos", "EMOCIÓN ALEGRE", "🗂️"],
        ["neg", "EMOCIÓN DIFÍCIL", "📌"],
      ],
      i: [
        ["alegría", "pos"],
        ["orgullo", "pos"],
        ["cariño", "pos"],
        ["tristeza", "neg"],
        ["enojo", "neg"],
        ["miedo", "neg"]
      ]
    },
    em: [
      ["contento", "alegría"],
      ["apenado", "tristeza"],
      ["furioso", "enojo"],
      ["asustado", "miedo"]
    ],
    or: [
      "Pienso en cómo me siento.",
      "Busco la palabra que nombra mi emoción.",
      "Digo o escribo mi emoción con calma.",
      "Escucho cómo se siente el otro."
    ],
    e: ["Escribe cómo te sientes hoy y por qué.", "Hoy estoy alegre porque jugué con mis amigos.", 3],
  },
  {
    n: "Leo y te cuento",
    o: "Leo un texto muy corto y respondo qué pasó y quiénes están en él.",
    d: "DBA: lee textos cortos y comprende lo que sucede en ellos.",
    t: [
      ["Leo con calma", "Leo el texto completo una vez, sin correr, para enterarme de todo lo que cuenta.", "🐢"],
      ["Busco respuestas", "Después pregunto: ¿quién está? ¿qué hace? ¿dónde pasa? Las respuestas están en el texto.", "🔍"],
      ["Cuento con mis palabras", "Puedo repetir el cuento con mis palabras. Así muestro que lo entendí.", "📖"],
    ],
    q: [
      ["Leo: Ana tiene un gato blanco. ¿Qué color es el gato?", ["Negro", "Gris", "Marrón", "Blanco"], 3, "El texto dice que el gato es blanco.", "Busque el color en la frase."],
      ["Leo: Juan y María van a la escuela. ¿A dónde van?", ["A la escuela", "Al parque", "Al río", "A la tienda"], 0, "El texto dice que van a la escuela.", "Es el lugar que aparece escrito."],
      ["Leo: El perro corre en la plaza. ¿Qué hace el perro?", ["Duerme", "Corre", "Come", "Llora"], 1, "El texto dice que el perro corre en la plaza.", "Es la acción del perro."],
      ["Leo: La abuela hornea arepas. ¿Qué hace la abuela?", ["Canta", "Lee un cuento", "Hornea arepas", "Tose"], 2, "La abuela hornea arepas, como lo dice el texto.", "Es comida hecha de maíz."],
      ["Leo: Hace sol en el parque. ¿Qué clima hay?", ["Hay sol", "Llueve", "Hace frío", "Hay nube"], 0, "El texto dice que hace sol, por eso está despejado.", "Es lo contrario de llover."],
      ["Leo: Mi hermano pequeño llora. ¿Por qué llora?", ["Porque está feliz", "Porque come", "Porque juega", "No dice el texto"], 3, "El texto no explica la razón, así que debo decir que no aparece.", "A veces falta la respuesta en el texto."],
      ["Leo: Sofía dibuja una casa. ¿Qué dibuja Sofía?", ["Un árbol", "Un río", "Una casa", "Una flor"], 2, "El texto dice que dibuja una casa.", "Es donde vive la gente."],
      ["Leo: En la plaza hay una garza. ¿Qué animal ve?", ["Un perro", "Una garza", "Un gato", "Un caballo"], 1, "El texto dice que en la plaza hay una garza.", "Es un pájaro blanco de patas largas."],
      ["Leo: Los niños comen fruta en el recreo. ¿Cuándo comen?", ["En la noche", "En el recreo", "En la mañana en cama", "En la tarde sin nadie"], 1, "La respuesta está en el texto: comen en el recreo.", "Es el tiempo de descanso de la escuela."],
      ["Leo: Papá lee un cuento antes de dormir. ¿Qué hace papá?", ["Corre", "Canta", "Lee", "Brinca"], 2, "Papá lee un cuento antes de dormir.", "Es la acción de mirar las palabras."],
      ["¿Dónde busco la respuesta si no la recuerdo?", ["Pregunto al aire", "En el pizarrón de otro salón", "No la busco", "En el texto, leyendo otra vez"], 3, "Las respuestas están en el texto; solo debo leerlo otra vez con calma.", "El texto es mi pista principal."],
      ["Leo: Tengo una mochila roja y voy a la escuela. ¿Qué color es la mochila?", ["Roja", "Azul", "Verde", "Blanca"], 0, "El texto dice que la mochila es roja.", "Vuelva a leer la primera parte."],
    ],
    cl: {
      c: [
        ["par", "PASA EN LA PLAZA O EL PARQUE", "🗂️"],
        ["cas", "PASA EN CASA", "📌"],
      ],
      i: [
        ["El perro corre en la plaza.", "par"],
        ["Hay una garza en la plaza.", "par"],
        ["Los niños juegan en el parque.", "par"],
        ["La abuela hornea arepas.", "cas"],
        ["Papá lee un cuento.", "cas"],
        ["Mi hermano llora.", "cas"]
      ]
    },
    em: [
      ["Ana", "tiene un gato blanco"],
      ["El perro", "corre en la plaza"],
      ["La abuela", "hornea arepas"],
      ["Sofía", "dibuja una casa"]
    ],
    or: [
      "Leo el texto completo sin correr.",
      "Busco quién está y qué hace.",
      "Encuentro la respuesta en el texto.",
      "Cuento con mis palabras lo que pasó."
    ],
    e: ["Escribe qué pasó hoy en tu casa en una oración.", "Hoy mi mamá cocinó y yo ayudé.", 3],
  },
  {
    n: "Mi nombre y mi apellido",
    o: "Escribo correctamente mi nombre y los de mi familia con la primera letra en mayúscula.",
    d: "DBA: escribe oraciones básicas para presentarse y expresar quién es.",
    t: [
      ["Mi nombre me identifica", "Mi nombre es lo que me llama mi familia. Siempre se escribe con mayúscula al principio.", "📇"],
      ["Nombre y apellido", "Tengo nombre y apellido. En Colombia muchas personas tienen dos apellidos: el del papá y el de mamá.", "👪"],
      ["Escribo mi dirección", "También puedo escribir dónde vivo con ayuda de un adulto: mi barrio y mi calle.", "🏠"],
    ],
    q: [
      ["¿Cómo debo escribir mi nombre, por ejemplo luis?", ["Luis", "luis", "LUIS con todo en grande", "lUis"], 0, "Mi nombre propio empieza con mayúscula y el resto va en minúscula.", "Los nombres siempre llevan mayúscula inicial."],
      ["Si me llamo Paula Gómez, ¿cuál es mi apellido?", ["Paula", "Gómez", "Los dos", "Ninguno"], 1, "Gómez es el apellido; Paula es el nombre.", "El apellido viene después del nombre."],
      ["¿Por qué escribimos el nombre con mayúscula?", ["Porque así no cabe en la línea", "Porque queda más grande", "Porque es un nombre propio y único", "Porque no tiene sonido"], 2, "Los nombres propios se escriben con mayúscula para indicar que son únicos.", "Es una regla de las mayúsculas."],
      ["Mi apellido de la mamá en Colombia se escribe:", ["con número", "antes del nombre", "en otra hoja", "después del apellido del papá"], 3, "En Colombia se acostumbra primero el apellido del papá y luego el de mamá.", "Así queda el segundo apellido."],
      ["¿Cuál está bien escrito?", ["maría torres", "María Torres", "MARÍA torres", "marÍa TorreS"], 1, "María Torres empieza con mayúscula en cada nombre y apellido.", "Cada nombre propio lleva su mayúscula."],
      ["Escribo mi nombre para firmar un dibujo. ¿Qué pongo primero?", ["Mi nombre", "Mi apellido", "La fecha", "Un dibujo"], 0, "Primero escribo mi nombre y luego mis apellidos.", "El nombre va al inicio."],
      ["¿Quién me ayuda a escribir mi dirección?", ["Nadie porque no existe", "Nadie", "El vecino al azar", "Un adulto de mi familia"], 3, "Un adulto me puede decir el barrio y la calle donde vivo.", "Mi seguridad va primero."],
      ["Si mi nombre es Daniel, ¿qué letra mayúscula debo usar?", ["Ninguna", "La d", "La D", "Todas las letras"], 2, "Daniel empieza con la letra D en mayúscula.", "Es la primera del nombre."],
      ["Escribo: Me llamo sofía pérez. ¿Qué debo corregir?", ["Quitar el punto", "Escribir más pegado", "Poner mayúsculas a Sofía y Pérez", "Nada, está bien"], 2, "Sofía y Pérez son nombres propios, así que llevan mayúscula.", "Los nombres siempre empiezan en mayúscula."],
      ["Mi documento de identidad en Colombia se llama:", ["libreta de zapatos", "mochila", "arepa", "cédula"], 3, "La cédula es el documento que identifica a cada persona.", "Es un papel muy importante."],
      ["Al presentarme digo: Me llamo Carlos. ¿Qué información doy?", ["Mi nombre", "Mi edad", "Mi color favorito", "Mi juguete"], 0, "Me llamo Carlos da mi nombre, que es cómo me identifican.", "Es lo primero para conocerme."],
      ["¿Cuántos apellidos suelen tener las personas en Colombia?", ["Uno", "Dos", "Cinco", "Ninguno"], 1, "Normalmente se tienen dos apellidos, uno de cada padre.", "Es la costumbre colombiana."],
    ],
    cl: {
      c: [
        ["nom", "ES UN NOMBRE", "🗂️"],
        ["ape", "ES UN APELLIDO", "📌"],
      ],
      i: [
        ["Paula", "nom"],
        ["Daniel", "nom"],
        ["Sofía", "nom"],
        ["Gómez", "ape"],
        ["Torres", "ape"],
        ["Pérez", "ape"]
      ]
    },
    em: [
      ["nombre", "Paula"],
      ["apellido", "Gómez"],
      ["mi país", "Colombia"]
    ],
    or: [
      "Escribo mi nombre con mayúscula al inicio.",
      "Escribo mi primer apellido.",
      "Escribo mi segundo apellido.",
      "Reviso que cada nombre tenga su mayúscula."
    ],
    e: ["Escribe tu nombre y tus apellidos como van en tu documento.", "María Torres Gómez", 3],
  },

  /* [Aporte PDF] temas del libro: Nivelemos Lenguaje 1 · Guía del Estudiante (MEN Colombia, 2011)
     Agregados aditivamente en la fase de contenido (ver TODO.md). */
  {
    "n": "El avioncito que no sabía volar",
    "o": "Yo recuerdo la historia del avioncito y cuento qué le pasó con sus amigos.",
    "d": "Fuente: cuento 'El avioncito que no sabía volar' de Humberto Jarrín B., con ilustraciones de Michi Peláez. Logro: el niño comprende el inicio de la historia, sus personajes y los primeros intentos del avioncito antes de aprender a volar.",
    "f": "Nivelemos Lenguaje 1 · (págs. 10-23)",
    "t": [
            [
                    "Un avioncito curioso",
                    "En los Llanos Orientales vivía un avioncito tranquilo entre aves, potros, topos y caimanes. Un día se preguntó: ¿Quién soy yo? ¿A cuál de mis amigos pertenezco?",
                    "✈️"
            ],
            [
                    "Se tiró a la laguna",
                    "Creyó que era amigo del agua y se tiró a la laguna, pero se hundió. Los caimanes lo sacaron y le dijeron: No estás hecho para nadar.",
                    "🐊"
            ],
            [
                    "Corre con los potros",
                    "Vio a los potros galopando y se unió a la carrera. Los potros lo dejaron atrás y el avioncito cayó jadeante al suelo.",
                    "🐴"
            ]
    ],
    "q": [
            [
                    "¿Dónde vivía el avioncito?",
                    [
                            "En los Llanos Orientales",
                            "En la playa",
                            "En una ciudad grande",
                            "En el desierto"
                    ],
                    0,
                    "El cuento dice que el avioncito vivía tranquilo en medio de un paraje de los Llanos Orientales.",
                    "Hay pastizales y palmas; no hay mar ni edificios."
            ],
            [
                    "¿Qué se preguntó el avioncito un día?",
                    [
                            "¿Quién soy yo y a cuál de mis amigos pertenezco?",
                            "¿Cuántas estrellas ve la lechuza?",
                            "¿Por qué el llano es verde?",
                            "¿Cómo se llama el hombre de la ciudad?"
                    ],
                    0,
                    "El avioncito quería saber quién era y a cuál de sus amigos pertenecía, y se propuso hallar las respuestas.",
                    "Piensa: él no sabía si era potro, topo, caimán o ave."
            ],
            [
                    "¿Por qué se tiró a la laguna?",
                    [
                            "Porque creyó que era un ser del agua",
                            "Porque los potros lo empujaron",
                            "Porque quería beber agua",
                            "Porque vio peces de colores"
                    ],
                    0,
                    "Al ver a los caimanes, el avioncito pensó: tal vez sea alguien que deba vivir en el agua.",
                    "Primero miró a los caimanes en la laguna."
            ],
            [
                    "¿Qué le sucedió dentro del agua?",
                    [
                            "Se hundió y gritó pidiendo auxilio",
                            "Nadó como los caimanes",
                            "Voló bajo el agua",
                            "Jugó con los peces"
                    ],
                    0,
                    "El avioncito se tiró a la laguna pero se hundió, y sus gritos de auxilio llamaron a los caimanes.",
                    "El avioncito no tiene aletas ni cola de pez."
            ],
            [
                    "¿Quién lo sacó a la orilla?",
                    [
                            "Los caimanes",
                            "Los potros",
                            "El topo",
                            "Las mariposas"
                    ],
                    0,
                    "Ante sus gritos de auxilio, los caimanes lo sacaron de la laguna.",
                    "Son los amigos de cola larga y hocico largo que viven en el agua."
            ],
            [
                    "¿Qué le dijeron los caimanes?",
                    [
                            "No estás hecho para nadar",
                            "Nadas muy bien, sigue",
                            "Vuelve mañana temprano",
                            "Quédate a vivir con nosotros"
                    ],
                    0,
                    "Los caimanes le dijeron: ya ves que no. No estás hecho para nadar; ve y prueba en otra parte.",
                    "Recuerda que el avioncito se hundió como piedra."
            ],
            [
                    "¿Con quiénes se unió a una carrera?",
                    [
                            "Con los potros",
                            "Con los topos",
                            "Con las aves",
                            "Con los peces"
                    ],
                    0,
                    "Al ver a los potros galopando, el avioncito pensó: debo estar hecho para correr, y se unió a la carrera.",
                    "Son caballitos veloces que galopan por el llano."
            ],
            [
                    "¿Qué ocurrió en la carrera?",
                    [
                            "Los potros lo dejaron atrás y él cayó jadeante",
                            "El avioncito ganó la carrera",
                            "Todos llegaron juntos a la meta",
                            "Los potros se detuvieron a descansar"
                    ],
                    0,
                    "No pasó un minuto cuando los potros lo dejaron atrás, y el avioncito cayó al suelo jadeante.",
                    "Piensa: ¿el avioncito tiene patas para correr por el pasto?"
            ],
            [
                    "¿Quién salió de su madriguera a ver el escándalo?",
                    [
                            "El topo",
                            "El caimán",
                            "La lechuza",
                            "El tucán"
                    ],
                    0,
                    "Un topo sintió el golpe del avioncito al caer y salió de su madriguera a ver cuál era el escándalo.",
                    "Ese amigo vive por debajo de la tierra."
            ],
            [
                    "Cuando el topo le preguntó si se había vuelto loco, el avioncito respondió que...",
                    [
                            "solo intento saber para qué he nacido",
                            "quería quedarse a jugar con él",
                            "estaba harto de volar",
                            "le dolía el motor"
                    ],
                    0,
                    "El avioncito dijo: Solo intento saber para qué he nacido.",
                    "Él buscaba a qué grupo pertenecía."
            ],
            [
                    "¿A quién pidió el avioncito que le enseñara a volar?",
                    [
                            "A una mariposa",
                            "A un potro",
                            "A un caimán",
                            "Al hombre"
                    ],
                    0,
                    "Al primer animal volador que se topó en el camino, una bella mariposa, le rogó que le enseñara a volar.",
                    "Es un animalito de colores que salta de flor en flor."
            ],
            [
                    "¿Qué le dijo la mariposa?",
                    [
                            "Salto de flor en flor y agito mis alas; quizá si haces lo mismo...",
                            "Corre por el llano con el viento",
                            "Nada en la laguna sin miedo",
                            "Duérmete y el sueño te llevará"
                    ],
                    0,
                    "La mariposa dijo que vuela saltando de flor en flor y agitando sus alas en el aire.",
                    "Piensa en cómo vuela una mariposa entre las flores."
            ],
            [
                    "¿Qué pasó cuando el avioncito quiso volar como la mariposa?",
                    [
                            "Dañó algunas flores y cayó",
                            "Voló muy bien y contento",
                            "Se quedó flotando un rato",
                            "Se convirtió en otra cosa"
                    ],
                    0,
                    "El avioncito lo intentó, pero no hizo más que dañar algunas flores y caer al suelo.",
                    "Sus alas no son como las de una mariposa."
            ]
    ],
    "em": [["avioncito","los Llanos Orientales"],["caimán","la laguna"],["topo","su madriguera"],["potro","el pastizal"]],
    "or": [
          "El avioncito se pregunta: ¿quién soy yo?",
          "Se tira a la laguna y se hunde.",
          "Los caimanes lo sacan: no estás hecho para nadar.",
          "Corre con los potros, cae jadeante y el topo sale a ver."
    ],
    "e": ["Escribe con tus palabras quién es el avioncito: 'El avioncito es...'","El avioncito es un avión pequeño del llano que solo quería saber para qué había nacido.",3]
  },
  {
    "n": "Escucho las frases del cuento",
    "o": "Yo miro las imágenes y elijo la que le va a cada oración del cuento.",
    "d": "Fuente: exploración de saberes previos (págs. 6 a 9) y actividades del Cuaderno de trabajo (págs. 8 y 9). Logro: el niño une la oración con la imagen correcta y nombra los movimientos de los animalitos del cuento.",
    "f": "Nivelemos Lenguaje 1 · (págs. 6-9 y cuaderno 8-9)",
    "t": [
            [
                    "Mirar y elegir",
                    "Observa cada imagen con calma y encuentra la oración que la describe: si los potros van trotando, la oración buena es Los potros trotan.",
                    "🖼️"
            ],
            [
                    "Movimientos de los amigos",
                    "Cada amigo se mueve a su manera: el caimán se arrastra por la orilla, el potro trota, el topo se esconde debajo de la tierra.",
                    "🐾"
            ],
            [
                    "Dentro o fuera de la laguna",
                    "El caimán debe estar dentro de la laguna, pero el avioncito, que no sabe nadar, espera en la orilla.",
                    "🔄"
            ]
    ],
    "q": [
            [
                    "La oración dice: 'El avión no sabe volar'. ¿Cuál imagen le acompaña?",
                    [
                            "El avioncito entre los árboles, sin poder volar",
                            "Las mariposas volando alto",
                            "Un potro trotando",
                            "La lechuza en su rama"
                    ],
                    0,
                    "La oración habla del avión que no vuela: en la imagen está atrapado entre los árboles.",
                    "Piensa en el que quería volar y falló."
            ],
            [
                    "La oración dice: 'Las mariposas saben volar'. ¿Cuál imagen le va bien?",
                    [
                            "Mariposas volando entre las palmas",
                            "Un avioncito caído entre flores",
                            "Un caimán en la orilla",
                            "Un topo en su agujero"
                    ],
                    0,
                    "Las mariposas sí saben volar: en la imagen están volando sobre las palmas y las flores.",
                    "Ellas agitan sus alas de colores."
            ],
            [
                    "Mira la imagen: varios potros van trotando por el pasto. ¿Cuál oración la describe?",
                    [
                            "Los potros trotan",
                            "Los caballos saltan",
                            "El potro corre solo",
                            "Las lechuzas duermen"
                    ],
                    0,
                    "Con sus patas al viento, los potros trotan por el llano.",
                    "Son varios potros, no uno."
            ],
            [
                    "En la otra imagen, la lechuza cierra sus ojitos en la rama. ¿Cuál oración le va mejor?",
                    [
                            "La lechuza duerme",
                            "La lechuza está despierta",
                            "Las lechuzas duermen",
                            "La lechuza abre los ojos"
                    ],
                    0,
                    "En la ilustración la lechuza está en su rama bajo la luna, con los ojos cerrados: duerme.",
                    "Solo es una lechuza con los ojos cerrados."
            ],
            [
                    "¿Cómo llega el caimán a la orilla?",
                    [
                            "Se arrastra por el pasto",
                            "Trota alegre",
                            "Vuela entre las palmas",
                            "Salta de rama en rama"
                    ],
                    0,
                    "El caimán se arrastra, casi pegado al suelo, arrastrando su larga cola.",
                    "Piensa en su cuerpo pegadito a la tierra."
            ],
            [
                    "¿Qué hace el potro?",
                    [
                            "Trota y galopa",
                            "Se arrastra",
                            "Vive en el agua",
                            "Se esconde en la tierra"
                    ],
                    0,
                    "El potro trotó en la carrera con el avioncito, pero lo dejó atrás.",
                    "Es el caballito veloz del llano."
            ],
            [
                    "¿Por dónde camina el topo?",
                    [
                            "Por debajo de la tierra",
                            "Por encima de los árboles",
                            "Por el fondo del agua",
                            "Por los aires"
                    ],
                    0,
                    "Los topos nerviosos se mueven por debajo de la tierra, en su madriguera.",
                    "Se sienten celosos de la gente del aire."
            ],
            [
                    "¿Cuál de estos amigos del avioncito no es un animalito?",
                    [
                            "El avioncito",
                            "El potro",
                            "El caimán",
                            "El topo"
                    ],
                    0,
                    "El avioncito es un avión; los otros amigos sí son animalitos.",
                    "Solo uno tiene hélice y motor."
            ],
            [
                    "En el Cuaderno hay cuatro lugares para elegir el hogar del avioncito. ¿Cuál es el correcto?",
                    [
                            "Los llanos",
                            "La playa",
                            "La selva",
                            "La montaña"
                    ],
                    0,
                    "En la actividad de colorear, el lugar donde vive el avioncito son los llanos.",
                    "Hay pastizal, palmas y laguna."
            ],
            [
                    "¿Dónde debe estar el caimán: dentro o fuera de la laguna?",
                    [
                            "Dentro de la laguna",
                            "Fuera de la laguna",
                            "En un árbol",
                            "En la carretera"
                    ],
                    0,
                    "El caimán vive en el agua: debe estar dentro de la laguna.",
                    "Es el amigo que nadando sacó al avioncito."
            ],
            [
                    "¿Y el avioncito, dónde debe estar?",
                    [
                            "Fuera de la laguna",
                            "Dentro de la laguna",
                            "Abajo, con los peces",
                            "En una roca del fondo"
                    ],
                    0,
                    "El avioncito se hundió en el agua: debe estar fuera de la laguna, en la orilla.",
                    "Piensa: ¿no estás hecho para nadar?"
            ],
            [
                    "Si la oración dice 'El avioncito vuela', ¿qué imagen le acompaña?",
                    [
                            "El avioncito arriba, con su hélice girando",
                            "El avioncito hundido en el agua",
                            "El avioncito entre las flores caído",
                            "El avioncito escondido con el topo"
                    ],
                    0,
                    "Cuando vuela, el avioncito está levantado en el aire y su hélice gira y gira.",
                    "Vuela por los aires entre las palmas."
            ]
    ],
    "cl": {
      "c": [
            [
                    "id1",
                    "Nada",
                    "🌊"
            ],
            [
                    "id2",
                    "Trota",
                    "🐴"
            ],
            [
                    "id3",
                    "Se arrastra",
                    "🐊"
            ],
            [
                    "id4",
                    "Vuela",
                    "✈️"
            ]
    ],
      "i": [
            [
                    "los peces",
                    "id1"
            ],
            [
                    "el potro",
                    "id2"
            ],
            [
                    "el caimán",
                    "id3"
            ],
            [
                    "el avioncito",
                    "id4"
            ]
    ]
    },
    "em": [["caimán","se arrastra"],["potro","trota"],["peces","nada"],["avioncito","vuela"]],
    "or": [
          "Lee la oración con calma.",
          "Mira bien las imágenes.",
          "Piensa de qué habla la oración.",
          "Elige la imagen que mejor le acompaña."
    ],
    "e": ["Escribe una oración corta para una imagen del cuento: quién es y qué hace.","El potro trota en el llano.",3]
  },
  {
    "n": "Invento mi cuento",
    "o": "Yo preparo mi propia historia escogiendo personajes, lugar y acciones en orden.",
    "d": "Fuente: actividad 'Tú también puedes escribir' del Cuaderno de actividades (págs. 20 y 21, mostradas en la pág. 5 de la guía). Logro: el niño prepara la escritura de su propia historia fantástica paso a paso.",
    "f": "Nivelemos Lenguaje 1 · (cuaderno, págs. 20-21)",
    "t": [
            [
                    "Elige tus personajes",
                    "Piensa quiénes estarán en tu historia: el avioncito, la niña, el hombre, el caballo o el conejo. ¡Dales un nombre bonito a cada uno!",
                    "🧒"
            ],
            [
                    "Elige el lugar",
                    "¿Dónde pasará tu cuento? Puedes escoger un lugar del cuento, como la selva, la playa, el desierto o la montaña azul... o el lugar que tú quieras.",
                    "🗺️"
            ],
            [
                    "Une tus ideas con orden",
                    "Imagina las acciones que harán tus personajes y numéralas: primero, después y al final. Así tu historia aparece con buen orden.",
                    "🔢"
            ]
    ],
    "q": [
            [
                    "¿Qué debes escoger primero antes de escribir tu cuento?",
                    [
                            "Los personajes",
                            "El clima del día",
                            "El nombre de la escuela",
                            "Nada, se escribe de una vez"
                    ],
                    0,
                    "Antes de comenzar, escoge los personajes que participarán en la historia.",
                    "Los personajes son los que se muestran con dibujos en el cuaderno."
            ],
            [
                    "Después de los personajes, escoges...",
                    [
                            "El lugar del cuento",
                            "El número de páginas",
                            "El color de tu lápiz",
                            "El nombre de tu maestra"
                    ],
                    0,
                    "Escoge el lugar: puede ser un lugar propuesto o el que tú decidas.",
                    "Piensa: primero quién, luego dónde."
            ],
            [
                    "¿Qué son las 'acciones' de un cuento?",
                    [
                            "Las cosas que hacen los personajes",
                            "Los colores del dibujo",
                            "La letra con la que escribes",
                            "El título del cuento"
                    ],
                    0,
                    "Las acciones son las cosas que los personajes realizan en la historia.",
                    "Se escriben con verbos: volar, saltar, ayudar..."
            ],
            [
                    "¿Cuál de estas es una acción para tu cuento?",
                    [
                            "Volar por el cielo con las aves",
                            "La selva azul",
                            "El conejo Tito",
                            "Un cuento bonito"
                    ],
                    0,
                    "Las acciones empiezan con un verbo: volar; 'la selva azul' es un lugar y 'el conejo Tito' es un personaje.",
                    "Busca la frase que dice lo que alguien hace."
            ],
            [
                    "¿Para qué numeras tus ideas?",
                    [
                            "Para ponerlas en orden en la historia",
                            "Para pintarlas de colores",
                            "Para tener menos ideas",
                            "Para olvidarlas pronto"
                    ],
                    0,
                    "Organiza tus ideas: numéralas en el orden en que quieres que aparezcan en tu historia fantástica.",
                    "Cada idea toma un número: 1, 2, 3..."
            ],
            [
                    "¿Qué es una 'historia fantástica'?",
                    [
                            "Un cuento con personajes y lugares inventados",
                            "Un recado de la casa",
                            "La lista de la compra",
                            "Una clase de matemáticas"
                    ],
                    0,
                    "La historia fantástica es el cuento especial que inventas con tus personajes, lugares y acciones.",
                    "En ella todo puede pasar, como un avioncito que habla."
            ],
            [
                    "En el ejemplo del cuaderno aparecen personajes como el avioncito, la niña, el hombre, el caballo y...",
                    [
                            "El conejo",
                            "El cocodrilo",
                            "La serpiente",
                            "El gorrión"
                    ],
                    0,
                    "Entre los personajes del ejemplo aparece un conejo, listo para tu historia.",
                    "Es un animalito saltarín de orejas largas."
            ],
            [
                    "¿Quiénes pueden ser los personajes de tu cuento?",
                    [
                            "Animales, personas o cosas que tú imagines",
                            "Solo una vaca de verdad",
                            "Solo tu maestra",
                            "Solo un mueble del salón"
                    ],
                    0,
                    "Tus personajes salen de tu imaginación: inspírate en el ejemplo y escoge los que quieras, dándoles un nombre.",
                    "Puedes imaginar de todo, hasta un avioncito que habla."
            ],
            [
                    "¿Cuál de estos lugares aparece en el ejercicio para escoger el escenario?",
                    [
                            "El desierto",
                            "El autobús",
                            "La lavadora",
                            "El garaje"
                    ],
                    0,
                    "El cuaderno muestra un desierto entre los lugares posibles, junto con la selva, la playa y la montaña azul.",
                    "Es un lugar con mucha arena y pocas plantas."
            ],
            [
                    "¿Qué haces al final, después de ordenar tus ideas?",
                    [
                            "Escribes tu historia completa",
                            "Borras todo de nuevo",
                            "Pintas solo el sol",
                            "Cambias de cuaderno"
                    ],
                    0,
                    "Después de escoger personajes, lugar y numerar las acciones, escribes tu historia.",
                    "Llega el gran momento: ¡escribir!"
            ],
            [
                    "¿Quiénes te acompañan al organizar tus ideas?",
                    [
                            "Tu familia, contigo",
                            "Nadie, hay que hacerlo en secreto",
                            "El refrigerador de la cocina",
                            "El calendario viejo"
                    ],
                    0,
                    "Organiza tus ideas con la ayuda de tu familia: elijan juntos las mejores ideas y numéralas.",
                    "En el cuaderno aparece la palabra 'con tu familia'."
            ],
            [
                    "¿Qué debes tener listo para escribir tu cuento?",
                    [
                            "Personajes, un lugar y las acciones en orden",
                            "Solo un lápiz rojo",
                            "Media página en blanco",
                            "Solo un dibujo"
                    ],
                    0,
                    "Con personajes nombrados, un lugar y las acciones numeradas, tu escritura estará preparada.",
                    "Piensa: personajes + lugar + acciones ordenadas."
            ],
            [
                    "¿Qué haces si dos acciones se mezclan?",
                    [
                            "Les pongo números: una va primero y la otra después",
                            "Las borro para siempre",
                            "Las dejo sueltas sin orden",
                            "Las pinto todas del color azul"
                    ],
                    0,
                    "Numerar las ideas ayuda a que cada acción salga en su puesto.",
                    "Cada idea toma un número: 1, 2, 3..."
            ]
    ],
    "em": [["personajes","quién"],["lugar","dónde"],["acciones","qué hacen"],["orden","numera"]],
    "or": [
          "Escoge a los personajes de tu historia.",
          "Dale un nombre a cada personaje.",
          "Escoge el lugar donde pasa todo.",
          "Imagina las acciones y numéralas en orden."
    ],
    "e": ["Escribe el principio de tu historia fantástica: los personajes, el lugar y una primera acción.","El conejo Tito y el avioncito Volarón fueron a la selva azul para buscar flores que brillan en la noche.",3]
  },
  {
    "n": "Mi avioncito aprende a volar",
    "o": "Yo nombro las partes del avioncito y cuento su secreto para volar.",
    "d": "Fuente: cuento (págs. 24 a 38, con la lechuza, el hombre, las partes del avión y el vuelo feliz). Logro: el niño sigue el viaje del avioncito hasta el hombre y menciona las partes del avión, como las hélices, el motor, las alas y la cola.",
    "f": "Nivelemos Lenguaje 1 · (págs. 24-38)",
    "t": [
            [
                    "El consejo de la lechuza",
                    "La lechuza, abriendo apenas un ojo en su rama, reveló el secreto: ¡el hombre! Él sabe cómo vuelan los aviones y puede enseñarte. Vete a la ciudad.",
                    "🦉"
            ],
            [
                    "Motor y hélices",
                    "El hombre le puso a rugir el motor y a mover las hélices del avioncito para prepararlo para el vuelo.",
                    "🔧"
            ],
            [
                    "¡Al fin vuelo!",
                    "Con las pruebas entre alas y cola, el avioncito carreteó por la pista, se levantó feliz por los aires y gritó: ¡Ya sé volar!",
                    "⛅"
            ]
    ],
    "q": [
            [
                    "¿Con qué aves trató de imitar el avioncito antes de ver a la lechuza?",
                    [
                            "Con el loro, el tucán y el águila",
                            "Con el potro y el topo",
                            "Con los peces y las ranas",
                            "Con el hombre y la niña"
                    ],
                    0,
                    "El avioncito trató de imitar a un loro, un tucán y un águila, tirándose de ramas, árboles y cerros, pero tampoco aprendió a volar.",
                    "Son tres amigos con picos y alas."
            ],
            [
                    "¿Quién le reveló el secreto para volar?",
                    [
                            "La lechuza",
                            "La mariposa",
                            "El caimán",
                            "El topo"
                    ],
                    0,
                    "Alguien le dijo que visitara a la lechuza, y ella le reveló secretos del vuelo.",
                    "Es el amigo que duerme de día, en un árbol."
            ],
            [
                    "¿Quién sabía el secreto del vuelo según la lechuza?",
                    [
                            "El hombre",
                            "El viento",
                            "El sol",
                            "La luna"
                    ],
                    0,
                    "La lechuza abrió apenas un ojo y dijo: el secreto para volar lo sabe el hombre.",
                    "Piensa: ¿quién construye los aviones?"
            ],
            [
                    "¿A dónde le dijo la lechuza que fuera el avioncito?",
                    [
                            "A la ciudad",
                            "Al desierto",
                            "A la playa",
                            "A la montaña"
                    ],
                    0,
                    "La lechuza le dijo: vete a la ciudad y pregunta por el hombre.",
                    "Es un lugar con casas, calles y aviones."
            ],
            [
                    "¿Qué encontró el avioncito al llegar a la ciudad?",
                    [
                            "Otros aviones amistosos",
                            "Un lago con tiburones",
                            "Un tren largo",
                            "Una escuela de potros"
                    ],
                    0,
                    "Al llegar, el avioncito se encontró con otros aviones amistosos que le dieron su ayuda.",
                    "Había aviones de colores en la pista."
            ],
            [
                    "¿Qué contestó el hombre cuando el avioncito pidió aprender a volar?",
                    [
                            "¡Pero claro que puedo enseñarte!",
                            "Vuelve mañana, estoy cansado",
                            "No quiero ver más aviones",
                            "Mejor ve a nadar a la laguna"
                    ],
                    0,
                    "El hombre contestó: ¡Pero claro que puedo enseñarte! ¿Cuándo quieres comenzar?",
                    "El avioncito pidió aprender de una vez."
            ],
            [
                    "¿Qué parte del avioncito revisó el hombre primero?",
                    [
                            "Las hélices",
                            "Las ruedas",
                            "La ventana",
                            "El asiento"
                    ],
                    0,
                    "El hombre, señalándole las hélices, le preguntó: ¿Sabes para qué es esto? Y el avioncito respondió: No, señor.",
                    "Giran al frente del avioncito."
            ],
            [
                    "¿Qué hace la hélice?",
                    [
                            "Gira a gran velocidad",
                            "Sube y baja la cola",
                            "Aterriza en el pasto",
                            "Brilla en la noche"
                    ],
                    0,
                    "Las hélices giran y giran ayudando al avioncito a avanzar por el aire.",
                    "Giran muy rápido, como aspas."
            ],
            [
                    "¿Y el motor?",
                    [
                            "Ruge poderoso",
                            "Canta una canción bonita",
                            "Duerme al bajar el avioncito",
                            "Llama a un camión pequeño"
                    ],
                    0,
                    "El hombre le puso a rugir el motor; sonó fuerte, listo para aplicar la fuerza.",
                    "No silencia: ¡suena bien ruidoso!"
            ],
            [
                    "¿Qué hizo el avioncito después de las pruebas entre alas y cola?",
                    [
                            "Carreteó por la pista",
                            "Nadar en la laguna",
                            "Cavar con el topo",
                            "Dormir entre las flores"
                    ],
                    0,
                    "El hombre lo puso a carretear por la pista, luego de las pruebas entre alas y cola.",
                    "Corre por la pista antes de despegar."
            ],
            [
                    "¿Cómo se sintió el avioncito por fin al volar?",
                    [
                            "Muy feliz y emocionado",
                            "Triste y con sed",
                            "Enfadado con la laguna",
                            "Callado y aburrido"
                    ],
                    0,
                    "El avioncito gritó: ¡Es maravilloso! ¡Al fin vuelo, sí, vuelo! con toda su felicidad.",
                    "Piensa en cómo suena la alegría."
            ],
            [
                    "Después de aprender a volar, ¿a dónde fue primero el avioncito?",
                    [
                            "A buscar a sus amigos del llano",
                            "A quedarse en la ciudad para siempre",
                            "A dormir en el río",
                            "A estudiar en la montaña"
                    ],
                    0,
                    "El avioncito agradeció al hombre y se fue a buscar a sus viejos amigos de los Llanos Orientales.",
                    "Para allá van potros, topos y caimanes que lo esperaban."
            ],
            [
                    "¿Qué dijeron sus amigos al verlo en el cielo?",
                    [
                            "¡Es el avioncito que ya sabe volar!",
                            "¡Vaya a nadar de nuevo!",
                            "¡Usted no sabe nada!",
                            "¡Hasta luego, avioncito pequeño!"
                    ],
                    0,
                    "El águila, el tucán, el loro, la mariposa, la lechuza y el topo dijeron: es el avioncito que ya sabe volar.",
                    "Ya no es el que no sabía volar."
            ]
    ],
    "cl": {
      "c": [
            [
                    "id1",
                    "Partes del avioncito",
                    "✈️"
            ],
            [
                    "id2",
                    "Amigos del avioncito",
                    "🐾"
            ]
    ],
      "i": [
            [
                    "el motor",
                    "id1"
            ],
            [
                    "las alas",
                    "id1"
            ],
            [
                    "la lechuza",
                    "id2"
            ],
            [
                    "el topo",
                    "id2"
            ]
    ]
    },
    "em": [["hélices","giran"],["motor","ruge"],["alas","se mueven"],["cola","va atrás"]],
    "or": [
          "El avioncito pide ayuda al hombre.",
          "El hombre revisa motor, hélices, alas y cola.",
          "Carretea por la pista.",
          "Se levanta feliz por los aires y va a buscar a sus amigos."
    ],
    "e": ["Escribe cómo el avioncito aprendió a volar: quién lo ayudó y qué partes le revisaron.","El hombre le puso a rugir el motor, movió las hélices y probó alas y cola; así el avioncito por fin voló.",3]
  },
];

/* ====== g1 / mate ====== */
/* DBA 1º — mate */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.mate = [
  {
    n: "Contamos hasta 50",
    o: "Cuento de 1 en 1 hasta el 50 y digo qué número viene antes y después.",
    d: "DBA: cuenta hasta 100; aquí avanzamos del 1 al 50 con orden y seguridad.",
    t: [
      ["Cuento con orden", "Cuento de 1 en 1 sin saltarme números: 1, 2, 3, 4, 5. Cuando llego a 50, sé que conté bien.", "🔢"],
      ["Antes y después", "El número 49 está antes del 50 y el 51 está después. Siempre puedo retroceder o avanzar uno.", "⬅️➡️"],
      ["Decenas y unidades", "El 40 tiene 4 decenas. El 45 tiene 4 decenas y 5 unidades. Así reconozco cada número.", "🧮"],
    ],
    q: [
      ["¿Qué número va después del 49?", ["50", "48", "51", "40"], 0, "Después del 49 viene el 50, porque contamos de 1 en 1.", "Cuenta desde 49 un paso más."],
      ["¿Qué número va antes del 50?", ["48", "49", "51", "40"], 1, "Antes del 50 está el 49, que es el número que le precede.", "Piense en el 50 y retroceda uno."],
      ["¿Cuál número está entre 47 y 49?", ["46", "50", "48", "45"], 2, "El 48 está en medio: después del 47 y antes del 49.", "Diga: 47, ..., 49."],
      ["El número 40 tiene:", ["1 decena", "4 unidades", "5 decenas", "4 decenas"], 3, "Cuatro decenas son 40: 10, 20, 30, 40.", "Cuente de 10 en 10 hasta llegar."],
      ["¿Cuál es 10 más que 30?", ["20", "40", "50", "31"], 1, "30 más 10 da 40, porque va la siguiente decena.", "Cuente una decena más."],
      ["¿Cuál número NO va en la cuenta de 1 a 50?", ["51", "45", "23", "38"], 0, "El 51 es mayor que 50, así que no entra en esa cuenta.", "Mire cuál pasa del 50."],
      ["Cuento hasta 50. ¿Cuál es el último número?", ["49", "51", "40", "50"], 3, "Al contar hasta 50, el último número es el 50.", "Es la meta de la cuenta."],
      ["Empiezo en 46 y avanzo 1 dos veces. ¿En qué número termino?", ["49", "47", "48", "45"], 2, "46 más 1 es 47 y otra vez 1 es 48.", "Dele dos pasos de 1."],
      ["El número 45 tiene:", ["5 decenas y 4 unidades", "45 decenas", "4 decenas y 5 unidades", "4 unidades y 5 decenas"], 2, "El 45 se parte en 4 decenas y 5 unidades.", "Separe el 40 del 5."],
      ["¿Cuál número se lee como cuarenta y siete?", ["74", "40", "57", "47"], 3, "Cuarenta y siete se escribe 47.", "El40 va primero y el 7 al lado."],
      ["¿Cuál es mayor: 40 o 50?", ["50", "40", "Los dos son iguales", "Ninguno"], 0, "El 50 es mayor porque está más adelante en la cuenta.", "El número más lejano es el mayor."],
      ["Si cuento de 10 en 10: 10, 20, 30, ¿cuál sigue?", ["41", "40", "50", "35"], 1, "Después de 30 viene 40 al contar de 10 en 10.", "Sume siempre diez más."],
    ],
    cl: {
      c: [
        ["d4", "TIENE 4 DECENAS", "🗂️"],
        ["d5", "TIENE 5 DECENAS", "📌"],
      ],
      i: [
        ["40", "d4"],
        ["42", "d4"],
        ["47", "d4"],
        ["50", "d5"],
        ["53", "d5"],
        ["59", "d5"]
      ]
    },
    em: [
      ["40", "cuarenta"],
      ["45", "cuarenta y cinco"],
      ["50", "cincuenta"]
    ],
    or: [
      "Empiezo a contar desde el 1.",
      "Avanzo de 1 en 1 sin saltarme números.",
      "Retrocedo uno para saber cuál va antes.",
      "Confirmo cuál es el último número de la cuenta."
    ],
    e: ["Cuenta hasta el 50 y escribe el último número.", "50", 3],
  },
  {
    n: "Contamos hasta 100",
    o: "Cuento hasta el 100 de 10 en 10 y reconozco las decenas completas.",
    d: "DBA: cuenta hasta 100 usando las decenas como guía.",
    t: [
      ["De 10 en 10", "Cuento las decenas: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. Es un camino rápido hasta el 100.", "💯"],
      ["El 100 llega al final", "Después del 90 está el 100, que tiene tres cifras: 1, 0 y 0.", "🏁"],
      ["Un montón de números", "Entre el 50 y el 100 hay muchos números: 51, 52, 63, 78, 99. Todos caben en la cuenta.", "🧺"],
    ],
    q: [
      ["¿Qué número va después del 99?", ["98", "100", "101", "90"], 1, "Después del 99 llega el 100, el final de nuestra cuenta.", "Es el que tiene tres cifras."],
      ["¿Cuál es el último número al contar hasta 100?", ["99", "90", "100", "110"], 2, "El último número de esa cuenta es el 100.", "Es la meta final."],
      ["¿Qué número está entre 70 y 80?", ["69", "60", "85", "75"], 3, "El 75 está en medio, después del 70 y antes del 80.", "Piense en el centro de esa decena."],
      ["¿Cuál número tiene 8 decenas?", ["80", "8", "18", "88"], 0, "Ocho decenas dan 80: 10, 20, 30, 40, 50, 60, 70, 80.", "Cuente de 10 en 10 ocho veces."],
      ["¿Qué número va justo antes del 100?", ["90", "91", "99", "89"], 2, "El 99 está antes del 100 porque es el número que le precede.", "Retroceda un paso del 100."],
      ["¿Cuál de estos números NO está entre 1 y 100?", ["77", "105", "100", "42"], 1, "El 105 es mayor que 100, así que no entra en la cuenta.", "Busque el número más grande."],
      ["Cuento: 10, 20, 30, 40, ... ¿cuál sigue?", ["50", "41", "45", "30"], 0, "Al contar de 10 en 10, después de 40 viene 50.", "Sume una decena más."],
      ["El número 100 se lee como:", ["un mil", "diez", "ciento diez", "cien"], 3, "100 se lee cien.", "Tiene una centena completa."],
      ["¿Cuántas decenas tiene el 60?", ["66", "60", "16", "6"], 3, "El 60 tiene 6 decenas: 10, 20, 30, 40, 50, 60.", "Cuente de 10 en 10 hasta 60."],
      ["¿Cuál es el número que sigue después de 89?", ["90", "98", "88", "79"], 0, "Después de 89 viene el 90, que abre la siguiente decena.", "Es la siguiente decena."],
      ["¿Cuál es mayor: 99 o 100?", ["99", "100", "Los dos son iguales", "Ninguno"], 1, "El 100 es mayor porque está después del 99 en la cuenta.", "Mire cuál llega más lejos."],
      ["Si cuento de 1 en 1 desde el 97, ¿cuál es el tercero?", ["98", "99", "100", "96"], 2, "97, 98, 99, 100: el tercero después del 97 es el 100.", "Dele tres pasos de 1."],
    ],
    cl: {
      c: [
        ["dec", "ES UNA DECENA", "🗂️"],
        ["nor", "NO ES DECENA", "📌"],
      ],
      i: [
        ["10", "dec"],
        ["30", "dec"],
        ["70", "dec"],
        ["100", "dec"],
        ["25", "nor"],
        ["48", "nor"],
        ["63", "nor"],
        ["91", "nor"]
      ]
    },
    em: [
      ["10", "diez"],
      ["50", "cincuenta"],
      ["100", "cien"],
      ["90", "noventa"]
    ],
    or: [
      "Cuento las decenas de 10 en 10.",
      "Añado los números que faltan entre decena y decena.",
      "Reviso el número que viene antes y después.",
      "Llego al 100 y confirmo el final."
    ],
    e: ["Escribe la cuenta de 10 en 10 hasta el 100.", "10, 20, 30, 40, 50, 60, 70, 80, 90, 100", 3],
  },
  {
    n: "Secuencias hasta el 100",
    o: "Completo secuencias de números y descubro qué número falta.",
    d: "DBA: cuenta hasta 100 reconociendo el orden de los números.",
    t: [
      ["Una secuencia tiene orden", "Una secuencia es una fila de números con regla: 5, 6, 7, 8. El orden siempre se respeta.", "📏"],
      ["Encuentro el que falta", "Cuando un número se escondió, miro los vecinos de antes y después para adivinarlo.", "🔍"],
      ["Secuencias de 10 en 10", "También puedo saltar de 10 en 10: 20, 30, 40. La regla cambia, pero el orden se mantiene.", "🦘"],
    ],
    q: [
      ["Completa: 12, 13, 14, ____", ["11", "16", "15", "20"], 2, "La secuencia avanza de 1 en 1, así que después de 14 viene 15.", "Sume uno al último número."],
      ["Completa: 20, 30, 40, ____", ["41", "60", "45", "50"], 3, "Salta de 10 en 10, después de 40 viene 50.", "La regla es sumar diez."],
      ["¿Qué número falta? 46, 47, ___, 49", ["48", "50", "45", "44"], 0, "Entre 47 y 49 está el 48.", "Es el número del medio."],
      ["Completa: 98, 99, ____", ["97", "100", "90", "101"], 1, "Después de 99 llega el 100.", "Es el final de la cuenta hasta cien."],
      ["¿Qué número falta? 60, 70, ___, 90", ["75", "95", "65", "80"], 3, "Entre 70 y 90, saltando de 10 en 10, va el 80.", "Cuente una decena más."],
      ["Completa: 5, 4, 3, ____", ["1", "6", "2", "4"], 2, "La secuencia baja de 1 en 1, después del 3 viene el 2.", "Aquí se resta uno."],
      ["¿Cuál secuencia está bien? ", ["1, 3, 2, 4", "1, 2, 3, 4", "4, 3, 1, 2", "2, 1, 4, 3"], 1, "Solo la primera va en orden ascendente de 1 en 1.", "Busque la que avanza sin saltos."],
      ["Completa: 25, 26, 27, ____", ["28", "29", "24", "30"], 0, "Después de 27 viene el 28, porque sube de 1 en 1.", "Sume uno al 27."],
      ["¿Qué número falta? 11, ___, 13", ["12", "14", "10", "15"], 0, "Entre 11 y 13 está el 12.", "Diga la cuenta: 11, 12, 13."],
      ["Completa de 10 en 10: 30, 40, ___, 60", ["45", "50", "55", "70"], 1, "Saltando de 10 en 10, después de 40 viene 50.", "La regla es sumar diez."],
      ["¿Cuál número rompe la secuencia? 71, 72, 73, 75, 74", ["71", "73", "75", "74"], 2, "El 75 está fuera de lugar: después de 73 debe venir 74.", "Busque el número que no sigue el orden."],
      ["Completa: 89, 90, ____", ["88", "92", "100", "91"], 3, "Después de 90 viene el 91 porque sube de 1 en 1.", "Sume uno al 90."],
    ],
    cl: {
      c: [
        ["sub", "LA SECUENCIA SUBE", "🗂️"],
        ["baj", "LA SECUENCIA BAJA", "📌"],
      ],
      i: [
        ["10, 11, 12", "sub"],
        ["45, 46, 47", "sub"],
        ["80, 90, 100", "sub"],
        ["8, 7, 6", "baj"],
        ["20, 19, 18", "baj"],
        ["5, 4, 3", "baj"]
      ]
    },
    em: [
      ["11, 12, 13", "sube de 1 en 1"],
      ["30, 40, 50", "salta de 10 en 10"],
      ["9, 8, 7", "baja de 1 en 1"]
    ],
    or: [
      "Miro los números que están escritos.",
      "Descubro la regla: sube, baja o salta de 10 en 10.",
      "Aplico la regla al último número.",
      "Leo la secuencia completa para comprobar."
    ],
  },
  {
    n: "Sumas hasta 10",
    o: "Sumo cantidades hasta 10 y encuentro el resultado correcto.",
    d: "DBA: suma para resolver situaciones sencillas del día a día.",
    t: [
      ["Juntar es sumar", "Cuando junto dos grupos, sumo. Tengo 3 canicas y gano 2: ahora tengo 5.", "➕"],
      ["Sumo con los dedos", "Puedo levantar los dedos de una mano y los de otra para ver el total.", "🖐️"],
      ["Busco el resultado", "Después de sumar, digo el resultado con una frase: 4 más 2 son 6.", "🎯"],
    ],
    q: [
      ["¿Cuánto es 2 más 3?", ["4", "1", "6", "5"], 3, "2 más 3 da 5: si levanto 2 dedos y luego 3, quedan 5.", "Use los dedos para juntar."],
      ["¿Cuánto es 4 más 4?", ["8", "7", "9", "6"], 0, "4 más 4 da 8, porque son dos grupos iguales de 4.", "Doble de cuatro es ocho."],
      ["¿Cuánto es 5 más 1?", ["4", "6", "7", "5"], 1, "5 más 1 da 6, que es el número siguiente al 5.", "Sume uno al cinco."],
      ["¿Cuánto es 1 más 6?", ["5", "8", "7", "6"], 2, "1 más 6 da 7, igual que 6 más 1.", "El orden no cambia el resultado."],
      ["¿Cuánto es 3 más 5?", ["8", "9", "7", "6"], 0, "3 más 5 da 8.", "Cuente tres pasos adelante desde el 5."],
      ["Tengo 6 balones y me dan 2 más. ¿Cuántos tengo ahora?", ["6", "7", "9", "8"], 3, "6 más 2 da 8 balones en total.", "Junte los dos grupos."],
      ["¿Cuánto es 0 más 7?", ["0", "8", "7", "10"], 2, "Sumar 0 no cambia nada: 0 más 7 da 7.", "Cero no añade nada."],
      ["¿Cuál suma da 10?", ["6 más 6", "5 más 5", "4 más 4", "3 más 3"], 1, "5 más 5 da 10, que es la decena completa.", "Piense en dos mitades de diez."],
      ["¿Cuánto es 7 más 2?", ["8", "9", "10", "5"], 1, "7 más 2 da 9.", "Cuente dos más desde el 7."],
      ["En la mesa hay 4 arepas y papá pone 3 más. ¿Cuántas hay en total?", ["6", "8", "7", "5"], 2, "4 más 3 da 7 arepas.", "Junte los dos grupos de arepas."],
      ["¿Cuánto es 8 más 1?", ["8", "10", "7", "9"], 3, "8 más 1 da 9, el siguiente número.", "Uno más que ocho es nueve."],
      ["Si tengo 2 y recibo 2, ¿cuánto tengo?", ["4", "5", "2", "3"], 0, "2 más 2 da 4, que es el doble de 2.", "Junte los dos pares."],
    ],
    cl: {
      c: [
        ["d10", "EL RESULTADO ES 10", "🗂️"],
        ["no10", "EL RESULTADO NO ES 10", "📌"],
      ],
      i: [
        ["5 + 5", "d10"],
        ["6 + 4", "d10"],
        ["7 + 3", "d10"],
        ["4 + 4", "no10"],
        ["2 + 3", "no10"],
        ["6 + 1", "no10"]
      ]
    },
    em: [
      ["2 + 3", "5"],
      ["4 + 4", "8"],
      ["6 + 4", "10"],
      ["5 + 2", "7"]
    ],
    or: [
      "Leo los dos números que voy a sumar.",
      "Junto los dos grupos con dedos o dibujos.",
      "Cuento el total del conjunto.",
      "Escribo la frase completa: 4 más 2 son 6."
    ],
    e: ["Escribe dos sumas que den 10.", "6 + 4 = 10, 7 + 3 = 10", 3],
  },
  {
    n: "Restas hasta 10",
    o: "Resto cantidades hasta 10 y descubro cuánto queda.",
    d: "DBA: resta para resolver situaciones sencillas del día a día.",
    t: [
      ["Quitar es restar", "Cuando quito parte de un grupo, resto. Tenía 7 lápices y gasto 2: quedan 5.", "➖"],
      ["Retrocedo en la cuenta", "Para restar voy hacia atrás: de 9,8, 7, 6. El resultado es el número donde paro.", "⏪"],
      ["Compruebo con la suma", "Si 8 menos 3 da 5, puedo comprobar sumando: 5 más 3 son 8.", "✅"],
    ],
    q: [
      ["¿Cuánto es 5 menos 1?", ["4", "6", "3", "5"], 0, "5 menos 1 da 4, porque retrocedo un paso desde el 5.", "Camine un número hacia atrás."],
      ["¿Cuánto es 8 menos 3?", ["4", "5", "6", "7"], 1, "8 menos 3 da 5.", "Cuente tres atrás desde el 8."],
      ["¿Cuánto es 10 menos 10?", ["10", "1", "0", "5"], 2, "Si quito todo, no queda nada: el resultado es 0.", "Si se va el grupo completo, queda cero."],
      ["¿Cuánto es 7 menos 2?", ["9", "4", "6", "5"], 3, "7 menos 2 da 5.", "Retroceda dos desde el 7."],
      ["Tengo 9 dulces y como 4. ¿Cuántos quedan?", ["4", "5", "6", "3"], 1, "9 menos 4 da 5 dulces.", "Quite los que se comió."],
      ["¿Cuánto es 6 menos 0?", ["6", "0", "1", "7"], 0, "Restar 0 no cambia nada: quedan 6.", "Nada se fue del grupo."],
      ["¿Cuál resta da 3?", ["4 menos 4", "6 menos 2", "8 menos 4", "5 menos 2"], 3, "5 menos 2 da 3.", "Pruebe cada opción contando hacia atrás."],
      ["En el estanque había 10 garzas y 3 se fueron. ¿Cuántas quedan?", ["6", "8", "7", "9"], 2, "10 menos 3 da 7 garzas.", "Quite las que volaron."],
      ["¿Cuánto es 9 menos 5?", ["3", "6", "4", "5"], 2, "9 menos 5 da 4.", "Cuatro pasos atrás desde el 9."],
      ["¿Cuánto es 4 menos 2?", ["1", "6", "3", "2"], 3, "4 menos 2 da 2.", "Es la mitad de cuatro."],
      ["Tenía 8 canicas y perdí 8. ¿Cuántas me quedan?", ["0", "1", "10", "8"], 0, "Si se van todas, no queda ninguna: el resultado es 0.", "Se fue el grupo completo."],
      ["¿Cuánto es 7 menos 4?", ["2", "3", "5", "1"], 1, "7 menos 4 da 3.", "Retroceda cuatro desde el 7."],
    ],
    cl: {
      c: [
        ["c0", "EL RESULTADO ES 0", "🗂️"],
        ["cn", "EL RESULTADO ES MAYOR QUE 0", "📌"],
      ],
      i: [
        ["5 - 5", "c0"],
        ["10 - 10", "c0"],
        ["7 - 7", "c0"],
        ["8 - 3", "cn"],
        ["9 - 4", "cn"],
        ["6 - 2", "cn"]
      ]
    },
    em: [
      ["5 - 2", "3"],
      ["8 - 3", "5"],
      ["10 - 4", "6"],
      ["7 - 6", "1"]
    ],
    or: [
      "Miro cuántos había al principio.",
      "Cuento cuántos se quitan.",
      "Retrocedo en la cuenta el número que falta.",
      "Digo y escribo lo que queda."
    ],
    e: ["Escribe una resta que dé como resultado 4.", "9 - 5 = 4", 3],
  },
  {
    n: "Problemas de todos los días",
    o: "Resuelvo problemas cortos de sumar y restar de mi vida diaria.",
    d: "DBA: usa sumas y restas para expresar y resolver ideas de su día a día.",
    t: [
      ["Leo el problema", "Leo despacio para saber qué me preguntan y qué datos me dan.", "🧾"],
      ["Elijo sumar o restar", "Si algo se junta, sumo; si algo se va o falta, resto. Esta decisión es la clave.", "🤔"],
      ["Respondo con frase", "Contesto con una frase completa: quedan 6 arepas. Así muestro que entendí.", "💬"],
    ],
    q: [
      ["Ana tenía 3 lápices y su mamá le dio 2 más. ¿Cuántos lápices tiene ahora?", ["4", "5", "6", "2"], 1, "3 más 2 dan 5 lápices en total.", "Los datos se juntan, así que sume."],
      ["En la canasta hay 7 naranjas y comemos 3. ¿Cuántas quedan?", ["3", "10", "4", "5"], 2, "7 menos 3 dan 4 naranjas.", "Algo se fue, así que reste."],
      ["Miguel juega con 5 canicas y gana 4. ¿Cuántas tiene?", ["6", "8", "7", "9"], 3, "5 más 4 dan 9 canicas.", "Ganar es juntar más."],
      ["La plaza tiene 10 bancos y 2 están rotos. ¿Cuántos sirven?", ["8", "12", "10", "2"], 0, "10 menos 2 dan 8 bancos en buen estado.", "Quite los que no sirven."],
      ["Llevaba 6 pesos en mi alcancía y gasté 2. ¿Cuántos me quedan?", ["3", "8", "4", "5"], 2, "6 menos 2 dan 4 en la alcancía.", "Gastar es quitar."],
      ["Vinieron 4 amigas y luego llegaron 3 más. ¿Cuántas amigas hay?", ["8", "7", "5", "6"], 1, "4 más 3 dan 7 amigas.", "Las llegadas se juntan."],
      ["Teníamos 9 globos y 2 se reventaron. ¿Cuántos están bien?", ["7", "6", "11", "8"], 0, "9 menos 2 dan 7 globos buenos.", "Los reventados se quitan."],
      ["¿Cuál pregunta corresponde a 5 más 3?", ["¿Cuántos quedan?", "¿Cuánto falta?", "¿Cuántos se fueron?", "¿Cuántos hay en total?"], 3, "Cuando pregunto cuántos hay en total, debo sumar.", "Juntar siempre es suma."],
      ["En el salón hay 8 niñas y 4 niños. ¿Cuántos niños hay en total?", ["4", "16", "8", "12"], 3, "8 más 4 dan 12 niños en total.", "Junte los dos grupos."],
      ["Pablo recogió 10 hojas y después se llevó 5. ¿Cuántas dejó tiradas?", ["5", "10", "15", "4"], 0, "10 menos 5 dan 5 hojas que quedaron.", "La pregunta es lo que deja."],
      ["Mamá hornea 6 arepas y papá come 6. ¿Cuántas sobran?", ["6", "0", "12", "1"], 1, "6 menos 6 dan 0 arepas, porque se acabaron todas.", "Restar el mismo número da cero."],
      ["¿Cuál es el último paso para resolver un problema?", ["Correr", "Dibujar sin pensar", "Escribir la respuesta con frase", "Cambiar los números"], 2, "Al final escribo la respuesta completa para que se entienda.", "La frase cierra el problema."],
    ],
    cl: {
      c: [
        ["sum", "SE RESUELVE SUMANDO", "🗂️"],
        ["res", "SE RESUELVE RESTANDO", "📌"],
      ],
      i: [
        ["3 lápices y me dan 2 más", "sum"],
        ["4 amigas y llegan 3", "sum"],
        ["5 canicas y gano 4", "sum"],
        ["7 naranjas y comemos 3", "res"],
        ["10 bancos y 2 rotos", "res"],
        ["9 globos y 2 reventados", "res"]
      ]
    },
    em: [
      ["se juntan", "sumar"],
      ["se va o falta", "restar"],
      ["pregunta en total", "sumar"],
      ["pregunta cuántos quedan", "restar"]
    ],
    or: [
      "Leo el problema completo.",
      "Identifico qué datos me dan.",
      "Decido si sumo o resto.",
      "Escribo la respuesta con frase."
    ],
    e: ["Escribe un problema corto de tu casa con sumar o restar.", "Había 5 platos y lavé 3. Quedan 2 platos.", 3],
  },
  {
    n: "Círculo, cuadrado y triángulo",
    o: "Reconozco el círculo, el cuadrado y el triángulo por sus lados y puntas.",
    d: "DBA: reconoce figuras geométricas planas simples.",
    t: [
      ["El círculo", "El círculo es redondo como la luna o una moneda. No tiene esquinas ni lados rectos.", "⚪"],
      ["El cuadrado", "El cuadrado tiene 4 lados iguales y 4 esquinas. Una ficha de juego tiene esa forma.", "🟩"],
      ["El triángulo", "El triángulo tiene 3 lados y 3 puntas. El techo de muchas casas dibuja esa forma.", "🔺"],
    ],
    q: [
      ["¿Cuántos lados tiene un cuadrado?", ["3", "5", "4", "0"], 2, "El cuadrado tiene 4 lados, todos de la misma medida.", "Cuenta los bordes rectos."],
      ["¿Cuántas puntas tiene un triángulo?", ["2", "4", "5", "3"], 3, "El triángulo tiene 3 puntas o esquinas.", "Son las esquinas de sus lados."],
      ["¿Cuál figura es redonda como una moneda?", ["Círculo", "Triángulo", "Cuadrado", "Rectángulo"], 0, "El círculo es la única figura completamente redonda.", "No tiene esquinas."],
      ["Un cuadrado tiene los lados:", ["todos distintos", "todos iguales", "redondos", "muy largos"], 1, "En el cuadrado los 4 lados miden lo mismo.", "Mida con la vista cada lado."],
      ["¿Cuántos lados tiene un triángulo?", ["4", "6", "5", "3"], 3, "El triángulo tiene 3 lados, ni más ni menos.", "Su nombre ya lo dice: tri."],
      ["¿Cuál NO tiene esquinas?", ["El cuadrado", "El triángulo", "El círculo", "Tiene las tres"], 2, "El círculo no tiene esquinas porque es redondo.", "Las esquinas son puntas de ángulo."],
      ["El techo de la casa se parece a un:", ["círculo", "triángulo", "cuadrado", "óvalo"], 1, "Los techos de muchas casas tienen forma de triángulo.", "Tiene tres lados."],
      ["¿Cuántas esquinas tiene el cuadrado?", ["4", "3", "2", "1"], 0, "El cuadrado tiene 4 esquinas, una en cada vértice.", "Cuenta sus puntas."],
      ["La luna vista de noche se parece a un:", ["círculo", "cuadrado", "triángulo", "rectángulo"], 0, "La luna llena tiene forma de círculo.", "Es redonda."],
      ["¿Cuál figura tiene 4 lados pero dos largos y dos cortos?", ["Cuadrado", "Rectángulo", "Triángulo", "Círculo"], 1, "El rectángulo tiene 2 lados largos y 2 cortos; el cuadrado los tiene todos iguales.", "Piense en una puerta."],
      ["Si pinto dentro de un círculo, la pintura se queda:", ["en esquinas", "en 3 puntas", "en el borde redondo", "en 4 lados"], 2, "El borde del círculo es curvo, sin puntas.", "Su contorno da vueltas."],
      ["¿Cuál es la forma de una ficha cuadrada de juego?", ["Círculo", "Triángulo", "Óvalo", "Cuadrado"], 3, "La ficha cuadrada tiene 4 lados iguales y 4 esquinas.", "Es la figura con sus cuatro lados parejos."],
    ],
    cl: {
      c: [
        ["cua", "ES CUADRADO", "🗂️"],
        ["tri", "ES TRIÁNGULO", "📌"],
      ],
      i: [
        ["ficha de juego", "cua"],
        ["ventana de 4 lados iguales", "cua"],
        ["cuadro de la pared", "cua"],
        ["techo de la casa", "tri"],
        ["señal de adelante", "tri"],
        ["barco de papel", "tri"]
      ]
    },
    em: [
      ["círculo", "redondo"],
      ["cuadrado", "4 lados iguales"],
      ["triángulo", "3 lados"]
    ],
    or: [
      "Miro la figura con calma.",
      "Cuento sus lados.",
      "Cuento sus esquinas o puntas.",
      "Comparo con figuras conocidas."
    ],
    e: ["Dibuja un cuadrado, un círculo y un triángulo y escribe sus nombres.", "Cuadrado, círculo, triángulo", 3],
  },
  {
    n: "Rectángulo y figuras a mi alrededor",
    o: "Reconozco el rectángulo y encuentro figuras planas en los objetos de mi entorno.",
    d: "DBA: reconoce figuras geométricas planas simples en su entorno.",
    t: [
      ["El rectángulo", "El rectángulo tiene 4 lados: dos largos y dos cortos. Su puerta del salón es así.", "🚪"],
      ["Figuras en mi casa", "El plato es un círculo, la ventana un rectángulo y la hoja del cuaderno también.", "🏠"],
      ["Figuras en la plaza", "En la plaza veo círculos en los árboles y rectángulos en los bancos. Las figuras están en todas partes.", "🌳"],
    ],
    q: [
      ["¿Cuántos lados tiene un rectángulo?", ["3", "2", "5", "4"], 3, "El rectángulo tiene 4 lados, como el cuadrado.", "Cuenta sus bordes."],
      ["En el rectángulo, los lados opuestos son:", ["iguales entre sí", "todos redondos", "todos distintos", "muy cortos"], 0, "Los lados opuestos del rectángulo miden igual: dos largos y dos cortos.", "Compare lado frente a lado."],
      ["¿Cuál objeto tiene forma de rectángulo?", ["El plato", "La ventana", "La pelota", "El balón"], 1, "La ventana suele tener 4 lados con dos largos y dos cortos.", "Mire el marco de la ventana."],
      ["La tapa de mi cuaderno se parece a un:", ["triángulo", "círculo", "rectángulo", "óvalo"], 2, "La tapa del cuaderno es un rectángulo.", "Tiene dos lados largos y dos cortos."],
      ["¿Cuántas esquinas tiene el rectángulo?", ["4", "3", "2", "0"], 0, "El rectángulo tiene 4 esquinas.", "Cuenta sus puntas."],
      ["Un reloj redondo se parece a un:", ["rectángulo", "cuadrado", "triángulo", "círculo"], 3, "El reloj de pared redondo tiene forma de círculo.", "Es completamente redondo."],
      ["¿Cuál figura NO es un cuadrado pero tiene 4 lados?", ["Círculo", "Triángulo", "Rectángulo", "Luna"], 2, "El rectángulo tiene 4 lados pero no todos iguales.", "Recuerde: dos largos y dos cortos."],
      ["La puerta del salón es más parecida a un:", ["círculo", "rectángulo", "triángulo", "óvalo"], 1, "La puerta tiene forma de rectángulo alto.", "Mira sus lados largos y cortos."],
      ["¿En qué parte de la plaza veo un círculo?", ["En la escalera", "En el borde redondo de la fuente", "En la reja", "En el letrero rectangular"], 1, "La fuente o su borde redondo tienen forma de círculo.", "Busque algo redondo."],
      ["El balón de fútbol visto en el piso se parece a un:", ["cuadrado", "triángulo", "círculo", "rectángulo"], 2, "El balón es redondo, como un círculo.", "Rodé en el piso y notará su forma."],
      ["¿Cuál de estas NO es una figura plana simple?", ["Círculo", "Rectángulo", "Triángulo", "Pelota redonda"], 3, "La pelota es redonda pero no es una figura plana: es redonda en todos lados.", "Las figuras planas se pueden dibujar en el papel."],
      ["Si dibujo un rectángulo, debo poner:", ["4 lados, dos largos y dos cortos", "3 lados iguales", "todo redondo", "2 lados y 1 punta"], 0, "Esa es la característica del rectángulo: 4 lados con medidas opuestas iguales.", "Dibuje largo, corto, largo, corto."],
    ],
    cl: {
      c: [
        ["cir", "ES UN CÍRCULO", "🗂️"],
        ["rec", "ES UN RECTÁNGULO", "📌"],
      ],
      i: [
        ["plato hondo", "cir"],
        ["reloj redondo", "cir"],
        ["sol dibujado", "cir"],
        ["puerta del salón", "rec"],
        ["ventana", "rec"],
        ["hoja del cuaderno", "rec"]
      ]
    },
    em: [
      ["rectángulo", "dos lados largos y dos cortos"],
      ["cuadrado", "cuatro lados iguales"],
      ["círculo", "redondo sin esquinas"]
    ],
    or: [
      "Miro el objeto con atención.",
      "Observo cuántos lados tiene.",
      "Comparo si sus lados son iguales o distintos.",
      "Nombro la figura que reconozco."
    ],
    e: ["Busca en tu casa dos rectángulos y escribe sus nombres.", "la puerta y la ventana", 3],
  },
  {
    n: "Mido con clips y tapas",
    o: "Mido longitudes con objetos sin usar la regla y comparo qué es más largo.",
    d: "DBA: usa medidas no convencionales para comparar y medir.",
    t: [
      ["Mido sin regla", "Para medir uso clips, tapas o mi mano. Cuento cuántos caben de un extremo al otro.", "📎"],
      ["La misma medida para todos", "Si mido con clips, todos los clips deben ser del mismo tamaño; si no, la medida no sirve.", "⚖️"],
      ["Más largo o más corto", "Si mi cuaderno mide 8 clips y el lápiz 5, el cuaderno es más largo que el lápiz.", "📐"],
    ],
    q: [
      ["Mi cuaderno mide 8 clips y mi lápiz mide 5 clips. ¿Cuál es más largo?", ["El cuaderno", "El lápiz", "Los dos igual", "Ninguno"], 0, "8 clips es más que 5, así que el cuaderno es más largo.", "Compare los números de clips."],
      ["¿Con qué puedo medir si no tengo regla?", ["Con el color", "Con clips, tapas o la mano", "Con el nombre", "Con el sonido"], 1, "Las medidas no convencionales usan objetos comunes del salón.", "Piense en objetos del mismo tamaño."],
      ["Para medir bien con clips, debo:", ["no contarlos", "usar clips de tamaños distintos", "usar clips del mismo tamaño", "mezclarlos con lápices"], 2, "Si los clips son distintos, la medida queda mal.", "La medida justa necesita unidades iguales."],
      ["Mi mesa mide 10 tapas y mi libro mide 6 tapas. ¿Cuántas tapas más mide la mesa?", ["2", "16", "6", "4"], 3, "10 menos 6 dan 4 tapas de diferencia.", "Reste las dos medidas."],
      ["Si mido mi mesa con clips y luego con lápices, ¿el resultado es el mismo?", ["Sí, siempre", "No, porque los objetos miden distinto", "Sí, si cuento mal", "No, si cuento rápido"], 1, "Cada objeto tiene un tamaño diferente, así que cambia el resultado.", "Un clip no mide igual que un lápiz."],
      ["¿Qué unidad NO sirve para medir longitud?", ["El nombre", "La tapa", "El clip", "La mano"], 0, "El nombre no tiene tamaño; los otros sí se pueden colocar en fila.", "Lo que mide debe ocupar un espacio."],
      ["Mi mano mide 4 dedos de ancho y la de mi amigo mide 5. ¿Quién tiene la mano más ancha?", ["Yo", "Nadie", "Los dos igual", "Mi amigo"], 3, "5 dedos es más que 4, la mano de mi amigo es más ancha.", "Compare los números."],
      ["Mido la puerta con mi paso y doy 3 pasos. ¿Qué hago para medir bien?", ["No dar pasos", "Dar pasos muy distintos", "Dar pasos del mismo tamaño cada vez", "Correr sin contar"], 2, "Los pasos iguales hacen que la medida sea confiable.", "Igual que con los clips."],
      ["Cuadro A mide 7 tapas y cuadro B mide 9 tapas. ¿Cuál es más corto?", ["El B", "Los dos iguales", "El A", "Ninguno"], 2, "7 tapas es menos que 9, así que el cuadro A es más corto.", "El número menor indica menos longitud."],
      ["Para comparar dos longitudes con clips, primero:", ["las dibujo en rojo", "las pego sin contar", "las corto", "mido las dos por separado"], 3, "Se mide cada una y luego se comparan los resultados.", "Sin medir no hay comparación."],
      ["Mi cuerda mide 6 clips y mi cordón mide 4 clips. ¿Cuántos clips mide la cuerda más que el cordón?", ["2", "10", "4", "1"], 0, "6 menos 4 dan 2 clips de diferencia.", "Reste las medidas."],
      ["¿Cuál es una medida no convencional?", ["Usar centímetros", "Contar clips", "Usar metros", "Usar pulgadas"], 1, "Los clips, tapas y pasos son medidas no convencionales.", "Son objetos comunes, no unidades oficiales."],
    ],
    cl: {
      c: [
        ["lar", "ES MÁS LARGO", "🗂️"],
        ["cor", "ES MÁS CORTO", "📌"],
      ],
      i: [
        ["cuaderno de 8 clips", "lar"],
        ["mesa de 10 tapas", "lar"],
        ["libro de 9 pasos", "lar"],
        ["lápiz de 5 clips", "cor"],
        ["libro de 6 tapas", "cor"],
        ["cordón de 4 clips", "cor"]
      ]
    },
    em: [
      ["medir con clips", "no convencional"],
      ["más que", "restar"],
      ["en total", "sumar"]
    ],
    or: [
      "Elijo el objeto con el que voy a medir.",
      "Alineo el objeto desde el extremo sin saltos.",
      "Cuento cuántos caben en toda la longitud.",
      "Comparo la medida con otra y concluyo."
    ],
    e: ["Mide tu cuaderno con clips y escribe cuántos caben.", "Mi cuaderno mide 8 clips.", 3],
  },

  /* [Aporte PDF] temas del libro: Matemáticas 1 · Segunda Cartilla (Escuela Nueva, MEN Colombia 2010)
     Agregados aditivamente en la fase de contenido (ver TODO.md). */
  {
    "n": "Cálculos con barras y cuadros",
    "o": "Represento cantidades con barras y cuadros para sumar y restar hasta 99.",
    "d": "DBA: uso representaciones (barras y cuadros) para calcular sumas y restas hasta 99.",
    "f": "Cartilla Escuela Nueva Grado 1 · Unidad 5 Cálculos y escrituras hasta 99 (Guías 9-11)",
    "t": [
            [
                    "Cantidades con dibujos",
                    "Cada barra vale DIEZ y cada cuadrito vale UNO. Con 2 barras y 3 cuadritos dibujo el número 23.",
                    "📊"
            ],
            [
                    "Sumo con ayuda de los dibujos",
                    "Para sumar 24 y 3, dibujo 2 barras y 4 cuadros, agrego 3 cuadritos más y cuento: 27.",
                    "➕"
            ],
            [
                    "Resto tachando cuadritos",
                    "Para restar 27 menos 4, tacho 4 cuadritos de mi dibujo y cuento lo que queda: 23.",
                    "➖"
            ]
    ],
    "q": [
            [
                    "Si una barra vale 10, ¿cuánto valen 2 barras y 3 cuadritos?",
                    [
                            "13",
                            "23",
                            "32",
                            "20"
                    ],
                    1,
                    "Dos barras son 20 y tres cuadritos son 3: 20 con 3 hacen 23.",
                    "Primero las barras, luego los cuadritos."
            ],
            [
                    "Con 1 barra y 5 cuadritos dibujo el número...",
                    [
                            "15",
                            "51",
                            "6",
                            "105"
                    ],
                    0,
                    "Una barra vale 10 y cinco cuadritos valen 5: en total son 15.",
                    "Piense primero en la barra (diez) y luego en los cuadritos (cinco)."
            ],
            [
                    "¿Qué dibujo representa el número 32?",
                    [
                            "3 barras y 2 cuadros",
                            "2 barras y 3 cuadros",
                            "3 barras y 3 cuadros",
                            "32 barras"
                    ],
                    0,
                    "El 32 son 3 barras (30) y 2 cuadritos (2).",
                    "Empiece por las decenas: 30."
            ],
            [
                    "Cuente 25 y agregue 4. ¿Cuántos son?",
                    [
                            "29",
                            "26",
                            "35",
                            "52"
                    ],
                    0,
                    "25 con 4 son 29: son cuatro cuadritos más.",
                    "Cuento de uno en uno: 26, 27, 28, 29."
            ],
            [
                    "24 más 3 es igual a...",
                    [
                            "21",
                            "27",
                            "43",
                            "243"
                    ],
                    1,
                    "24 más 3 son 27: el 24 ya tiene 4 cuadritos, agrego 3 más.",
                    "Piense en cuatro cuadritos y tres más."
            ],
            [
                    "Tengo 27 y quito 4. ¿Cuánto me queda?",
                    [
                            "31",
                            "23",
                            "24",
                            "27"
                    ],
                    1,
                    "27 menos 4 son 23: tacho cuatro cuadritos de mi dibujo.",
                    "Empiece en 27 y vaya contando para atrás."
            ],
            [
                    "Si tengo 5 barras, tengo...",
                    [
                            "5",
                            "15",
                            "50",
                            "55"
                    ],
                    2,
                    "Cada barra vale 10, entonces 5 barras son 50.",
                    "Es como decir diez cinco veces."
            ],
            [
                    "4 barras y 2 cuadros son el número...",
                    [
                            "42",
                            "24",
                            "6",
                            "402"
                    ],
                    0,
                    "Cuatro barras valen 40 y dos cuadritos valen 2: hacen 42.",
                    "Los cuadritos son poquitos, cuéntelos fuerte."
            ],
            [
                    "40 más 8 es igual a...",
                    [
                            "48",
                            "84",
                            "408",
                            "44"
                    ],
                    0,
                    "Al lado de las 4 barras pego 8 cuadritos: quedan 48.",
                    "Después del 40 sigo contando: 41, 42, 43..."
            ],
            [
                    "Piense con barras: ¿cuál resta está mal hecha?",
                    [
                            "30 menos 10 son 20",
                            "50 menos 20 son 20",
                            "60 menos 30 son 30",
                            "70 menos 10 son 60"
                    ],
                    1,
                    "50 menos 20 son 30: si quito 2 barras, quedan 3 barras que son 30.",
                    "Quite barras de diez en diez."
            ],
            [
                    "3 barras son lo mismo que...",
                    [
                            "3 más 3",
                            "10 más 10 más 10",
                            "30 cuadros negros",
                            "un cuadrado"
                    ],
                    1,
                    "Cada barra es 10: tres barras son 10, 10 y 10, que hacen 30.",
                    "Las barras valen diez."
            ]
    ],
    "cl": {
      "c": [
            [
                    "b",
                    "BARRAS (10)",
                    "📏"
            ],
            [
                    "c",
                    "CUADROS (1)",
                    "🟦"
            ]
    ],
      "i": [
            [
                    "3",
                    "c"
            ],
            [
                    "30",
                    "b"
            ],
            [
                    "10",
                    "b"
            ],
            [
                    "1",
                    "c"
            ],
            [
                    "20",
                    "b"
            ],
            [
                    "2",
                    "c"
            ]
    ]
    },
    "em": [["1 barra","10"],["2 barras","20"],["3 barras","30"],["4 barras","40"]],
    "or": [
          "Dibujo las barras, de diez en diez.",
          "Dibujo los cuadritos, de uno en uno.",
          "Sumo (agrego) o resto (tacho) según el ejercicio.",
          "Cuento todo y escribo el número final."
    ],
    "e": ["Dibuja con barras y cuadros el número 45. ¿Cuántas barras y cuántos cuadritos usaste?","4 barras y 5 cuadritos",3]
  },
  {
    "n": "La posición de los objetos",
    "o": "Ubico objetos y personas: dentro, fuera, encima, debajo, delante y detrás.",
    "d": "DBA: describo la posición de un objeto respecto a otro usando palabras de ubicación (posicionalidad).",
    "f": "Cartilla Escuela Nueva Grado 1 · Unidad 6 Introducción a la posicionalidad (Guía 12)",
    "t": [
            [
                    "Dónde está",
                    "Para decir dónde está una cosa uso palabras de posición: dentro, fuera, encima, debajo, delante, detrás y al lado.",
                    "🧭"
            ],
            [
                    "Dentro y fuera",
                    "El lápiz DENTRO de la caja está guardado. Si está sobre la mesa, está FUERA de la caja.",
                    "📦"
            ],
            [
                    "Delante y detrás",
                    "En una fila, quien está delante va primero; quien está detrás me sigue.",
                    "🚸"
            ]
    ],
    "q": [
            [
                    "El aguacate está DENTRO de la canasta. ¿Dónde está?",
                    [
                            "Guardado en la canasta",
                            "Sobre la canasta",
                            "Al lado de la canasta",
                            "Debajo de la canasta"
                    ],
                    0,
                    "Dentro significa hacia adentro: el aguacate está en la canasta.",
                    "Pensar en la mochila: guardo cosas adentro."
            ],
            [
                    "La pelota está ENCIMA de la mesa. La pelota está en...",
                    [
                            "la parte de abajo",
                            "la parte de arriba",
                            "dentro de la mesa",
                            "detrás de la mesa"
                    ],
                    1,
                    "Encima significa que está sobre la mesa, hacia arriba.",
                    "Piense en la taza: va encima de la mesa."
            ],
            [
                    "El gato está DEBAJO de la silla. ¿Dónde está?",
                    [
                            "Encima de la silla",
                            "Junto a la silla",
                            "Sobre la silla",
                            "En el piso, escondido por la silla"
                    ],
                    3,
                    "Debajo significa hacia abajo: el gato está escondido, más abajo que la silla.",
                    "Es como meterse bajo la cama."
            ],
            [
                    "En la fila, la persona que va antes que yo está...",
                    [
                            "detrás de mí",
                            "delante de mí",
                            "dentro de mí",
                            "debajo de mí"
                    ],
                    1,
                    "Delante es lo primero de la fila, antes de mí.",
                    "Es la primera persona que veo al mirar adelante."
            ],
            [
                    "La casa está ENTRE el árbol y la tienda. ¿Dónde queda?",
                    [
                            "En medio de los dos",
                            "Detrás de la tienda",
                            "Dentro del árbol",
                            "Debajo del árbol"
                    ],
                    0,
                    "Entre quiere decir en medio: el árbol y la tienda quedan a los lados.",
                    "Es el lugar en medio de dos cosas."
            ],
            [
                    "¿Cuál lápiz está FUERA de la caja de lápices?",
                    [
                            "El lápiz guardado en la caja",
                            "El lápiz que quedó suelto sobre la mesa",
                            "El lápiz del fondo de la caja",
                            "El lápiz de la caja abierta"
                    ],
                    1,
                    "Si el lápiz está en la mesa, lejos de la caja, está fuera de ella.",
                    "Fuera es lo que no está adentro."
            ],
            [
                    "La moneda quedó cerca de la caja, pero no adentro. Está...",
                    [
                            "dentro de la caja",
                            "al lado de la caja",
                            "encima de la caja",
                            "detrás de la caja"
                    ],
                    1,
                    "Al lado significa pegada o cerca, pero no adentro.",
                    "Ni dentro ni lejos: está pegadita."
            ],
            [
                    "El niño metió el juguete ADENTRO de la caja de juguetes. El juguete está...",
                    [
                            "encima de la caja",
                            "guardado en la caja",
                            "al lado de la caja",
                            "debajo de la caja"
                    ],
                    1,
                    "Adentro significa hacia dentro: está guardado en la caja.",
                    "Dentro es donde se guardan las cosas."
            ],
            [
                    "En la fila del desayuno, yo voy después de Ana. Ana está...",
                    [
                            "detrás de mí",
                            "delante de mí",
                            "encima de mí",
                            "fuera de la fila"
                    ],
                    1,
                    "Si voy después de Ana, ella va primero: Ana está delante.",
                    "Primero va Ana, luego usted."
            ],
            [
                    "El libro está ENTRE el cuaderno y el lápiz. ¿Qué lo rodea?",
                    [
                            "Nada",
                            "El lápiz y el cuaderno, a su alrededor",
                            "Solo el lápiz",
                            "Solo el cuaderno"
                    ],
                    1,
                    "Entre dos cosas hay algo de cada lado: el lápiz y el cuaderno lo cercan.",
                    "Mire los dos lados del libro."
            ]
    ],
    "em": [["La pelota encima de la mesa","arriba"],["El gato bajo la cama","abajo"],["El primero de la fila","delante"],["El que me sigue","detrás"]],
    "or": [
          "Mire con calma el dibujo o el lugar.",
          "Busque cada objeto con la mirada.",
          "Diga su posición: dentro, fuera, encima, debajo, delante, detrás.",
          "Compare con un compañero o compañera."
    ],
    "e": ["Dibuja una mesa con una pelota encima y un gato debajo. ¿Dónde quedó cada uno?","La pelota está encima de la mesa y el gato debajo.",3]
  },
  {
    "n": "Descubro simetrías",
    "o": "Encuentro la línea que divide una figura en dos partes iguales (eje de simetría).",
    "d": "DBA: identifico simetrías en figuras planas y en objetos de mi entorno.",
    "f": "Cartilla Escuela Nueva Grado 1 · Unidad 8 Introducción a la simetría (Guía 16)",
    "t": [
            [
                    "Mitades iguales",
                    "Una figura tiene simetría cuando al partirla por una línea sus dos pedazos quedan IGUALES.",
                    "🦋"
            ],
            [
                    "El eje de simetría",
                    "La línea que parte la figura en dos mitades iguales se llama eje de simetría.",
                    "📏"
            ],
            [
                    "Simetría a mi alrededor",
                    "Las mariposas, las hojas y su cara tienen dos lados parecidos: son simétricas.",
                    "🌸"
            ]
    ],
    "q": [
            [
                    "Si partimos una mariposa por el centro, ¿qué pasa con sus dos partes?",
                    [
                            "Quedan iguales",
                            "Son diferentes",
                            "Se deshacen",
                            "Se vuelven cuatro"
                    ],
                    0,
                    "Las alas de la mariposa son espejo una de la otra: quedan iguales.",
                    "Piense en sus dos alas iguales."
            ],
            [
                    "El eje de simetría es...",
                    [
                            "cualquier línea",
                            "la línea que parte la figura en dos mitades iguales",
                            "un punto pequeño",
                            "el color de la figura"
                    ],
                    1,
                    "Es la línea que divide la figura y deja dos partes iguales.",
                    "Compruébelo doblando un papel."
            ],
            [
                    "¿Cuál de estas letras NO es simétrica?",
                    [
                            "A",
                            "M",
                            "F",
                            "O"
                    ],
                    2,
                    "La letra F no se puede partir en dos mitades iguales: sus lados son distintos.",
                    "Mire cada letra de arriba a abajo."
            ],
            [
                    "Sobre una hoja doblada, corto un dibujo. Al abrirla veo...",
                    [
                            "dos pedazos raros",
                            "el dibujo completo, igual a cada lado",
                            "nada",
                            "un círculo"
                    ],
                    1,
                    "Al abrir el papel aparece el dibujo completo, con las dos partes iguales.",
                    "Dóblela de nuevo y mire el doblez."
            ],
            [
                    "Un círculo es simétrico porque...",
                    [
                            "es redondo y pequeño",
                            "puedo partirlo en mitades iguales de varias maneras",
                            "no tiene esquinas",
                            "se puede pintar"
                    ],
                    1,
                    "Por varias líneas el círculo queda partido en dos partes iguales.",
                    "Pruebe una línea de arriba a abajo."
            ],
            [
                    "¿Cuál objeto es simétrico?",
                    [
                            "Una hoja con sus dos lados",
                            "Un zapato solo",
                            "Un plato torcido",
                            "Un nudo"
                    ],
                    0,
                    "La hoja de la planta se parte por el tallo y quedan dos mitades iguales.",
                    "Piense en la línea del tallo."
            ],
            [
                    "La letra A es simétrica porque...",
                    [
                            "tiene una línea en el medio",
                            "sus dos lados son iguales si se parte por el centro",
                            "es la primera letra",
                            "es grande"
                    ],
                    1,
                    "Por el centro de la A, sus dos lados quedan iguales.",
                    "Dibuje una línea vertical en la A."
            ],
            [
                    "Un plato pintado con un lado liso y otro con puntos, ¿es simétrico?",
                    [
                            "Sí, siempre",
                            "No, porque sus lados son diferentes",
                            "Sí, si lo volteo",
                            "No, porque es redondo"
                    ],
                    1,
                    "Un lado liso y otro con puntos son diferentes: no hay simetría.",
                    "Compare los dos lados."
            ],
            [
                    "Dobla tu carita dibujada por la mitad de arriba a abajo. Sus dos partes quedan iguales. La carita es...",
                    [
                            "asimétrica",
                            "simétrica",
                            "cuadrada",
                            "pequeña"
                    ],
                    1,
                    "Si sus mitades quedan iguales, la figura es simétrica.",
                    "Eso lo comprueba el doblez."
            ],
            [
                    "Para encontrar el eje de simetría de una figura lo mejor es...",
                    [
                            "partirla en pedazos chiquitos",
                            "doblar la figura y mirar si las partes quedan iguales",
                            "borrarla",
                            "contar sus esquinas"
                    ],
                    1,
                    "Doblar permite comprobar si las dos partes coinciden.",
                    "El doblez muestra la línea."
            ]
    ],
    "em": [["Las alas de la mariposa","son simétricas"],["La letra F","no es simétrica"],["La línea imaginaria","es el eje de simetría"],["Partir en dos igual","mitades iguales"]],
    "or": [
          "Doble una hoja de papel por la mitad.",
          "Dibuje la mitad de una figura al lado del doblez.",
          "Desdoble el papel y mire las dos partes.",
          "Si quedan iguales, dibuje la línea de simetría."
    ],
    "e": ["Dibuja una figura simétrica de tu alrededor y marca su eje de simetría con una línea.","Una hoja de árbol con su eje en el tallo.",3]
  },
];

/* ====== g1 / cnaturales ====== */
/* DBA 1º — cnaturales */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.cnaturales = [
  {
    n: "Partes de mi cuerpo",
    o: "Nombro las principales partes de mi cuerpo y sé para qué sirve cada una.",
    d: "DBA: reconoce su cuerpo y cómo funciona en su vida diaria.",
    t: [
      ["Mi cuerpo tiene partes", "Tengo cabeza, tronco, brazos y piernas. Cada parte tiene un nombre y una función.", "🧍"],
      ["Cada parte tiene una función", "Con los ojos veo, con las piernas camino y con las manos agarro mis lápices.", "✋"],
      ["Cuido mi cuerpo", "Me lavo, como sano y duermo bien para que todas mis partes trabajen bien.", "💙"],
    ],
    q: [
      ["¿Cuántos ojos tiene una persona?", ["2", "3", "1", "4"], 0, "Las personas tenemos dos ojos para ver.", "Piense en tu cara."],
      ["¿Con qué parte del cuerpo camino?", ["Manos", "Piernas", "Cabeza", "Ojos"], 1, "Camino con las piernas, que me sostienen y me mueven.", "Son las que usas para dar pasos."],
      ["¿Con qué agarro el lápiz?", ["Pies", "Rodillas", "Manos", "Codos"], 2, "Agarro el lápiz con las manos, usando los dedos.", "Los dedos se cierran alrededor del lápiz."],
      ["¿Qué parte del cuerpo está arriba de todo?", ["Los pies", "El cuello", "Las manos", "La cabeza"], 3, "La cabeza está en la parte más alta del cuerpo.", "Ahí está tu cara."],
      ["¿Qué parte tiene cinco dedos?", ["La cabeza", "La mano", "La rodilla", "El codo"], 1, "La mano tiene cinco dedos.", "Cuenta los dedos de tu mano."],
      ["¿Qué parte muevo para saltar?", ["Las piernas", "Los ojos", "La nariz", "El pelo"], 0, "Salto usando las piernas, que tienen fuerza.", "Son las mismas que para caminar."],
      ["El corazón y los pulmones están dentro de:", ["La panza", "El brazo", "La frente", "El pecho"], 3, "El corazón y los pulmones están protegidos en el pecho.", "Ponga la mano en el pecho y siéntelos."],
      ["El cabello sirve para:", ["Oler", "Ver", "Cubrir la cabeza", "Comer"], 2, "El cabello cubre y protege la cabeza.", "Crece en la cabeza."],
      ["Los dientes sirven para:", ["Ver", "Oler", "Masticar la comida", "Saltar"], 2, "Los dientes mastican la comida antes de tragarla.", "Piense en morder una arepa."],
      ["¿Cuántas orejas tiene una persona?", ["3", "1", "4", "2"], 3, "Tenemos dos orejas, una a cada lado de la cabeza.", "Una oreja a la izquierda y otra a la derecha."],
      ["¿Dónde está el estómago?", ["La panza", "El pie", "La mano", "La oreja"], 0, "El estómago está en la panza, entre el pecho y la cintura.", "Es donde se pone la comida."],
      ["Los labios están en:", ["La mano", "La cara", "La pierna", "La espalda"], 1, "Los labios están en la cara, cubriendo la boca.", "Son los que usas para sonreír."],
    ],
    cl: {
      c: [
        ["sup", "PARTE SUPERIOR DEL CUERPO", "🗂️"],
        ["inf", "PARTE INFERIOR DEL CUERPO", "📌"],
      ],
      i: [
        ["cabeza", "sup"],
        ["brazos", "sup"],
        ["pecho", "sup"],
        ["manos", "sup"],
        ["piernas", "inf"],
        ["pies", "inf"],
        ["rodillas", "inf"]
      ]
    },
    em: [
      ["ojo", "ver"],
      ["pierna", "caminar"],
      ["mano", "agarrar"],
      ["boca", "comer"]
    ],
    or: [
      "Nombro la parte del cuerpo que quiero describir.",
      "Digo para qué sirve esa parte.",
      "La señalo en mi cuerpo.",
      "Pienso en una actividad que la use."
    ],
    e: ["Escribe tres partes de tu cuerpo y para qué sirven.", "Los ojos sirven para ver.", 3],
  },
  {
    n: "Veo con mis ojos",
    o: "Uso el sentido de la vista para observar colores, formas y lo que me rodea.",
    d: "DBA: reconoce los cinco sentidos; aquí trabaja el sentido de la vista.",
    t: [
      ["Los ojos miran", "Con los ojos veo los colores de la mochila, la cara de mi amiga y las palabras del cuaderno.", "👀"],
      ["La vista distingue", "La vista me dice si algo es grande o pequeño, rojo o azul, redondo o cuadrado.", "🌈"],
      ["Cuido mis ojos", "Leo con buena luz y no miro al sol directo para cuidar mi vista.", "💡"],
    ],
    q: [
      ["¿Con qué sentido veo los colores?", ["Orejas", "Ojos", "Nariz", "Manos"], 1, "El sentido de la vista está en los ojos.", "Son las ventanitas de mi cara."],
      ["Para leer las palabras del cuaderno uso:", ["Los pies", "La lengua", "Los ojos", "El codo"], 2, "Necesito la vista para mirar y leer las letras.", "Las palabras se miran, no se huelen."],
      ["¿Qué color tiene la leche?", ["Ruidoso", "Salado", "Suave", "Blanco"], 3, "La leche es blanca; el color se descubre con la vista.", "Los colores se ven, no se saben."],
      ["En la noche, con poca luz, yo veo:", ["peor que con luz", "mejor que con luz", "igual siempre", "colores más fuertes"], 0, "Con poca luz los ojos trabajan menos y veo menos.", "Por eso enciendo la luz para leer."],
      ["El arcoíris tiene:", ["muchos olores", "muchos sonidos", "muchos colores", "muchos sabores"], 2, "El arcoíris se descubre con la vista porque tiene muchos colores.", "Se ve después de la lluvia con el sol."],
      ["¿Cuál de estas cosas puedo VER?", ["Un perfume", "Un pájaro", "Una melodía", "Un sabor"], 1, "El pájaro es algo que se ve con los ojos.", "Lo demás se escucha, se huele o se prueba."],
      ["¿Qué uso para reconocer a mi mamá cuando está lejos?", ["La vista", "El oído", "El olfato", "El gusto"], 0, "La vista me deja verla y reconocerla a distancia.", "Miro su cara y su ropa."],
      ["El médico revisa mis ojos para saber si:", ["corro bien", "escucho bien", "huelo bien", "veo bien"], 3, "La revisión de los ojos comprueba la vista.", "Por eso leo las letras de un cartel."],
      ["Miro el cielo y veo que está:", ["ruidoso", "salado", "suave", "azul"], 3, "El color azul del cielo se descubre con la vista.", "El color es algo que se ve."],
      ["¿Qué hago al entrar al salón y ver el pizarrón?", ["Lo miro", "Lo huelo", "Lo pruebo", "Lo toco con la lengua"], 0, "Miro el pizarrón para copiar lo que está escrito.", "Primero miro, después escribo."],
      ["Mi abuela usa lentes porque:", ["huele mejor", "ve mejor con ellos", "oye mejor", "sabe mejor"], 1, "Los lentes ayudan a la vista a enfocar mejor.", "Son como una ayuda para los ojos."],
      ["El sentido de la vista me ayuda a:", ["oler la arepa", "probar el arroz", "leer y escribir", "escuchar la cumbia"], 2, "Leer y escribir necesitan mirar las letras.", "Los otros sentidos cumplen otra tarea."],
    ],
    cl: {
      c: [
        ["ved", "SE PUEDE VER", "🗂️"],
        ["no", "NO SE PUEDE VER", "📌"],
      ],
      i: [
        ["la mesa roja", "ved"],
        ["el sol", "ved"],
        ["mi mochila", "ved"],
        ["el pájaro", "ved"],
        ["el sonido de la flauta", "no"],
        ["el olor a café", "no"],
        ["el sabor de la arepa", "no"],
        ["el viento", "no"]
      ]
    },
    em: [
      ["ojos", "vista"],
      ["colores", "se ven"],
      ["leer", "mira las letras"]
    ],
    or: [
      "Miro el objeto con atención.",
      "Observo su color, tamaño y forma.",
      "Compara con lo que ya conozco.",
      "Digo lo que vi con mis palabras."
    ],
    e: ["Escribe tres cosas de tu casa y de qué color son.", "Mi puerta es marrón.", 3],
  },
  {
    n: "Oigo con mis oídos",
    o: "Uso el sentido del oído para distinguir sonidos suaves, fuertes y alegres.",
    d: "DBA: reconoce los cinco sentidos; aquí trabaja el sentido del oído.",
    t: [
      ["Los oídos escuchan", "Con los oídos escucho la voz de mi mamá, el canto de las aves y las palabras de la maestra.", "👂"],
      ["Sonidos fuertes y suaves", "Un trueno es fuerte y el susurro es suave. Sé cuándo bajar la voz.", "🔊"],
      ["Cuido mis oídos", "No me acucho a sonidos muy fuertes y tapo mis oídos si hay ruido molesto.", "🛡️"],
    ],
    q: [
      ["¿Con qué escucho la voz de mi maestra?", ["Nariz", "Ojos", "Orejas", "Manos"], 2, "El sentido del oído está en las orejas.", "Están a los lados de la cabeza."],
      ["¿Cuál de estos hace un sonido?", ["Un libro cerrado", "Una mesa", "Una piedra", "Una flauta"], 3, "La flauta suena cuando se sopla; las otras cosas están quietas.", "Los instrumentos hacen sonidos."],
      ["El sonido del trueno es:", ["fuerte", "suave", "dulce", "azul"], 0, "El trueno es un sonido fuerte que se escucha de lejos.", "Los sonidos fuertes se oyen mucho."],
      ["Cuando la maestra habla suave, yo:", ["no hago nada", "escucho con atención", "grito", "salgo"], 1, "Si está suave, me acerco y escucho con cuidado.", "Los oídos captan hasta los susurros."],
      ["¿Cuál de estos sonidos escucho en la plaza?", ["La forma del árbol", "El color del piso", "El sabor del agua", "Pájaros y personas"], 3, "En la plaza se oyen pájaros, voces y juegos, todo por el oído.", "Los sonidos llegan a mis orejas."],
      ["El sonido de comer una galleta es:", ["fuerte", "muy grande", "suave", "de colores"], 2, "Crujir la galleta es un sonido suave que se escucha cerca.", "Hay sonidos que casi no se oyen."],
      ["Para escuchar mejor a mi amiga, debo:", ["taparme los ojos", "poner atención y quedarme quieto", "cerrar la nariz", "comer"], 1, "La atención ayuda a captar mejor lo que se escucha.", "Los oídos trabajan mejor sin ruido."],
      ["¿Cuál de estos NO se escucha?", ["El color del cielo", "El canto de un gallo", "El ruido del río", "La música de la cumbia"], 0, "El color es algo que se ve; no hace sonido.", "Los colores no suenan."],
      ["En la noche escucho:", ["grillos", "sabores", "olores", "colores"], 0, "Los grillos hacen un sonido que se oye de noche.", "Es un insecto que canta."],
      ["Si el sonido es muy fuerte y me molesta, yo:", ["grito más fuerte", "me tapo las orejas y me alejo", "me acerco más", "no hago nada"], 1, "Proteger los oídos de ruidos fuertes es cuidar mi salud auditiva.", "Alejarse también ayuda."],
      ["¿Qué sentido uso para saber que pasó un carro?", ["El olfato", "El gusto", "El oído", "El tacto"], 2, "Escucho el ruido del carro aunque no lo mire.", "Los sonidos avisan lo que pasa."],
      ["Cantar y bailar con la cumbia uso:", ["el gusto", "la vista", "el olfato", "el oído"], 3, "Para cantar y bailar con el ritmo, escucho la música.", "Primero oigo el compás."],
    ],
    cl: {
      c: [
        ["son", "HACE SONIDO", "🗂️"],
        ["nos", "NO HACE SONIDO", "📌"],
      ],
      i: [
        ["la flauta", "son"],
        ["el río", "son"],
        ["el gallo", "son"],
        ["la radio", "son"],
        ["la silla", "nos"],
        ["la piedra", "nos"],
        ["el cuaderno", "nos"],
        ["la pared", "nos"]
      ]
    },
    em: [
      ["orejas", "oído"],
      ["flauta", "hace sonido"],
      ["susurro", "sonido suave"],
      ["trueno", "sonido fuerte"]
    ],
    or: [
      "Me quedo quieto para escuchar.",
      "Identifico qué sonido llega a mis orejas.",
      "Digo si es suave o fuerte.",
      "Cuento de dónde viene el sonido."
    ],
    e: ["Escribe tres sonidos que escuchas en tu casa.", "Escucho la televisión, la olla y a mi papá.", 3],
  },
  {
    n: "Huelo con mi nariz",
    o: "Uso el sentido del olfato para reconocer olores agradables y desagradables.",
    d: "DBA: reconoce los cinco sentidos; aquí trabaja el sentido del olfato.",
    t: [
      ["La nariz huele", "Con la nariz huelo el pan recién hecho, las flores de la plaza y el café de mamá.", "👃"],
      ["Olores agradables y fuertes", "Algunos olores son ricos y otros no me gustan. Los dos los percibo con la nariz.", "🌸"],
      ["Respiro por la nariz", "La nariz también me sirve para respirar, que es algo que hago sin pensarlo.", "🌬️"],
    ],
    q: [
      ["¿Con qué huelo el café?", ["Los pies", "Los ojos", "Las manos", "La nariz"], 3, "El sentido del olfato está en la nariz.", "Es la parte de la cara con dos agujeritos."],
      ["¿Cuál de estas cosas tiene olor?", ["La flor", "La mesa", "La piedra", "El cuaderno"], 0, "Las flores dan un aroma que se huele con la nariz.", "Los colores y las formas no huelen."],
      ["El olor a pan recién hecho es:", ["un color", "agradable", "un sonido", "una forma"], 1, "El pan recién hecho huele rico y lo percibo con el olfato.", "Es un olor que me da ganas de comer."],
      ["Huelo algo podrido y hago cara de asco. Ese olor es:", ["suave de alegría", "bonito", "desagradable", "colorido"], 2, "Los olores desagradables también me avisan algo: mejor no comerlo.", "La nariz protege mi cuerpo."],
      ["¿Qué huelo en el mercado colombiano?", ["Frutas y especias", "Colores", "Sonidos", "Formas"], 0, "En el mercado huele a frutas, a especias y a comida.", "Los olores se sienten con la nariz."],
      ["Para oler una flor, debo:", ["escucharla", "tocarla con la lengua", "mirarla con los ojos cerrados", "acercarla a mi nariz"], 3, "Cerca de la nariz el olor se capta mejor.", "El olfato necesita que el aire llegue."],
      ["¿Cuál de estos NO tiene olor?", ["El agua con jabón", "El perfume", "El color azul", "La arepa"], 2, "El color es algo que se ve, no algo que se huele.", "Los colores no tienen aroma."],
      ["Mi mamá huele la comida para saber si:", ["está azul", "está lista", "está sonando", "está redonda"], 1, "A veces el olor avisa que la comida ya está cocida.", "El olfato ayuda en la cocina."],
      ["¿Qué sentido uso para saber que hay gas en la casa?", ["El gusto", "El olfato", "La vista", "El tacto"], 1, "El olor del gas se percibe con la nariz y avisa un peligro.", "La nariz me cuida."],
      ["Huelo la comida desde otra habitación porque:", ["la comida me ve", "la comida grita", "el olor viaja por el aire", "la comida suena"], 2, "El aroma se difunde en el aire hasta llegar a mi nariz.", "Por eso huele desde la cocina."],
      ["Al oler vinagre, siento que:", ["es una forma", "es un color", "es un sonido", "me molesta un poco"], 3, "El vinagre tiene un olor fuerte que puede molestar.", "Es normal que algunos olores incomoden."],
      ["¿Cuál es un buen olor para mí?", ["El aroma del café", "El olor a bote podrido", "El humo", "La basura"], 0, "El café tiene un aroma agradable para muchas personas.", "Elijo los olores que me gustan."],
    ],
    cl: {
      c: [
        ["bien", "HUELE BIEN", "🗂️"],
        ["mal", "HUELE MAL", "📌"],
      ],
      i: [
        ["pan recién hecho", "bien"],
        ["flor", "bien"],
        ["café", "bien"],
        ["jabón", "bien"],
        ["basura", "mal"],
        ["comida podrida", "mal"],
        ["humo", "mal"],
        ["vinagre fuerte", "mal"]
      ]
    },
    em: [
      ["nariz", "olfato"],
      ["flor", "olor agradable"],
      ["basura", "olor desagradable"]
    ],
    or: [
      "Acercó el objeto a mi nariz.",
      "Respiro suave por la nariz.",
      "Digo si el olor me gusta o no.",
      "Cuento de dónde viene el olor."
    ],
    e: ["Escribe tres cosas de tu casa que huelen bien.", "El café, la sopa y la flor de mi jardín.", 3],
  },
  {
    n: "Pruebo con mi lengua",
    o: "Uso el sentido del gusto para distinguir sabores dulces, salados, agrios y amargos.",
    d: "DBA: reconoce los cinco sentidos; aquí trabaja el sentido del gusto.",
    t: [
      ["La lengua prueba", "Con la lengua pruebo la comida: la arepa, la fruta y la sopa tienen sabores distintos.", "👅"],
      ["Cuatro sabores", "Puedo sentir cosas dulces, saladas, agrias y amargas. Cada una tiene su sabor.", "🍬"],
      ["Cuidado con lo caliente", "Antes de probar espero que la comida se enfríe, porque lo muy caliente quema la lengua.", "🥵"],
    ],
    q: [
      ["¿Con qué pruebo la comida?", ["La lengua", "Las orejas", "Los ojos", "Las manos"], 0, "El sentido del gusto está en la lengua.", "La lengua está dentro de la boca."],
      ["El dulce de leche tiene sabor:", ["salado", "dulce", "fuerte de ruido", "azul"], 1, "El dulce de leche es una golosina dulce.", "Los dulces se sienten en la lengua."],
      ["¿Cuál de estos es salado?", ["El agua simple", "La fruta", "La papas fritas con sal", "El pan sin sal"], 2, "La sal le da el sabor salado a la comida.", "Es el sabor de la papas con sal."],
      ["La limón tiene sabor:", ["amargo", "dulce", "salado", "agrio"], 3, "El limón es agrio y me hace arrugar la cara.", "Es el sabor que pone cara rara."],
      ["Si como algo muy caliente, la lengua:", ["se enfría", "se quema", "se ve azul", "no siente nada"], 1, "Lo caliente quema la lengua; mejor espero que se enfríe.", "Es una cuidado importante."],
      ["¿Cuál tiene sabor amargo?", ["Algunas medicinas", "El azúcar", "La gaseosa", "La arepa"], 0, "Algunas medicinas amargan y por eso cuestan tragarse.", "El amargo casi no me gusta."],
      ["El mango maduro es:", ["sin forma", "salado", "amargo de ruido", "dulce"], 3, "El mango maduro sabe dulce y refrescante.", "A medida que madura, se pone más dulce."],
      ["¿Qué hago antes de probar la sopa?", ["La pinto", "La ruido", "Espero que se enfríe", "La corro"], 2, "Esperar evita quemarme la lengua.", "La sopa recién hecha está muy caliente."],
      ["El gusto se siente en:", ["la nariz", "las orejas", "la lengua", "los pies"], 2, "Los sabores los detectan las papilas de la lengua.", "La lengua es el órgano del gusto."],
      ["¿Cuál de estos se prueba con la lengua?", ["La forma del árbol", "El sonido del tambor", "El color del balón", "El sabor de la naranja"], 3, "El sabor es lo que se percibe comiendo.", "Los demás se ven u oyen."],
      ["El agua sin nada sabe:", ["casi nada, insípida", "salada", "agria", "amarga"], 0, "El agua pura no tiene sabor marcado.", "No lleva ni sal ni azúcar."],
      ["¿Cuál es un sabor agradable para ti?", ["El sabor de la medicina amarga", "El sabor de la fruta", "El sabor a quemado", "El sabor del vinagre puro"], 1, "La fruta suele saber dulce y agradable.", "Cada quien tiene sus gustos."],
    ],
    cl: {
      c: [
        ["dul", "SABOR DULCE", "🗂️"],
        ["sal", "SABOR SALADO", "📌"],
      ],
      i: [
        ["dulce de leche", "dul"],
        ["mango maduro", "dul"],
        ["agua con azúcar", "dul"],
        ["papas con sal", "sal"],
        ["pan con queso salado", "sal"],
        ["pescado salado", "sal"]
      ]
    },
    em: [
      ["lengua", "gusto"],
      ["limón", "agrio"],
      ["dulce de leche", "dulce"],
      ["papas con sal", "salado"]
    ],
    or: [
      "Espero que la comida esté tibia.",
      "Pongo un poquito en la lengua.",
      "Identifico el sabor: dulce, salado, agrio o amargo.",
      "Digo si me gusta o no."
    ],
    e: ["Escribe el sabor de tres comidas de tu casa.", "La arepa sabe suave y la fruta sabe dulce.", 3],
  },
  {
    n: "Toco con mis manos",
    o: "Uso el sentido del tacto para distinguir texturas y temperaturas.",
    d: "DBA: reconoce los cinco sentidos; aquí trabaja el sentido del tacto.",
    t: [
      ["Las manos sienten", "Con las manos y la piel siento si algo está suave, áspero, caliente o frío.", "🤲"],
      ["Texturas distintas", "El algodón es suave, la lija es áspera y la mesa de madera es lisa.", "🧶"],
      ["Tacto que cuida", "Toco con cuidado lo caliente y lo pesado para no lastimarme.", "⚠️"],
    ],
    q: [
      ["¿Con qué siento si la manta está suave?", ["Los ojos", "Las manos", "La nariz", "Los oídos"], 1, "El sentido del tacto está en la piel, sobre todo en las manos.", "Con los dedos percibo la textura."],
      ["La piel de la sandía se siente:", ["caliente", "suave y esponjosa", "áspera y rugosa", "ruidosa"], 2, "La cáscara de la sandía es áspera al tacto.", "Pase el dedo y note la rugosidad."],
      ["El algodón se siente:", ["azul", "caliente siempre", "ruidoso", "suave"], 3, "El algodón es una textura suave y agradable.", "Es como una nube."],
      ["Toco el plato recién servido y está:", ["caliente", "frío", "azul", "sonoro"], 0, "La comida recién hecha está caliente; debo tener cuidado.", "El tacto avisa la temperatura."],
      ["Si toco un cubo de hielo, está:", ["suave tibio", "caliente", "frío", "oloroso"], 2, "El hielo está frío y me hace retirar la mano.", "Es lo contrario del plato caliente."],
      ["¿Cuál de estos es áspero?", ["La seda", "Una lija", "El algodón", "El agua"], 1, "La lija tiene la superficie áspera para lijar la madera.", "Ráspela con el dedo y lo sentirás."],
      ["La mesa de madera se siente:", ["lisa", "salada", "ruidosa", "agria"], 0, "La mesa de madera generalmente es lisa al tacto.", "Pase la mano por encima."],
      ["Antes de tocar algo muy caliente, debo:", ["comerlo rápido", "correr a tocarlo", "gritar sin avisar", "tener cuidado o pedir ayuda"], 3, "Lo caliente quema; siempre conviene cuidarse o pedir ayuda a un adulto.", "La prevención va primero."],
      ["El hielo se siente con:", ["el gusto", "el oído", "el olfato", "el tacto"], 3, "La temperatura la percibimos con la piel.", "El tacto siente el frío y el calor."],
      ["¿Cuál de estos objetos pesado puedo mover con cuidado?", ["Un bote grande", "Una pluma", "Un papel", "Un confite"], 0, "El bote grande pesa más y pido ayuda para moverlo.", "El tacto también siente el peso."],
      ["Al tocar la mascota, siento su pelaje:", ["con sonido fuerte", "suave", "con olor a pintura", "con color"], 1, "El pelaje de muchos animales es suave al tacto.", "Cuidado: primero pregunto si puedo tocarla."],
      ["Mi piel me sirve también para:", ["oir", "oler", "sentir el calor y el frío", "saber los colores"], 2, "La piel es el órgano del tacto y siente la temperatura.", "Por eso tiemblo cuando hace frío."],
    ],
    cl: {
      c: [
        ["sua", "SE SIENTE SUAVE", "🗂️"],
        ["asp", "SE SIENTE ÁSPERO", "📌"],
      ],
      i: [
        ["algodón", "sua"],
        ["manta de peluche", "sua"],
        ["pelaje del gato", "sua"],
        ["lija", "asp"],
        ["piedra rugosa", "asp"],
        ["cáscara de sandía", "asp"]
      ]
    },
    em: [
      ["manos", "tacto"],
      ["hielo", "frío"],
      ["plato caliente", "caliente"],
      ["manta", "suave"]
    ],
    or: [
      "Extiendo las manos con cuidado.",
      "Toco suavemente el objeto.",
      "Pienso en la textura y la temperatura.",
      "Digo cómo se siente con mis palabras."
    ],
    e: ["Toca dos objetos de tu casa y escribe cómo se sienten.", "La manta es suave y la mesa es lisa.", 3],
  },
  {
    n: "Los seres vivos necesitan alimento",
    o: "Diferencio a los seres vivos porque se mueven, crecen y necesitan comida y agua.",
    d: "DBA: diferencia los seres vivos de los elementos inertes del entorno.",
    t: [
      ["Los seres vivos se mueven", "Los animales caminan, vuelan o nadan; las plantas crecen hacia la luz. Los seres vivos están vivos.", "🌱"],
      ["Necesitan comida y agua", "Los seres vivos comen y beben agua para vivir. Un perrito y una planta los necesitan.", "🥤"],
      ["Nacen, crecen y mueren", "Todos los seres vivos nacen, crecen, se reproducen y algún día mueren; eso es parte de la vida.", "♻️"],
    ],
    q: [
      ["¿Cuál de estos es un ser vivo?", ["Una piedra", "Una mesa", "Un gato", "Un lápiz"], 2, "El gato se mueve, come y crece: es un ser vivo.", "Las cosas inertes no hacen nada de eso."],
      ["¿Qué necesita una planta para vivir?", ["Zapatos", "Juguetes", "Pizarra", "Agua y luz"], 3, "Las plantas toman agua de la tierra y luz del sol.", "Sin eso se marchitan."],
      ["¿Cuál de estos NO es ser vivo?", ["La silla", "El perro", "La abeja", "El colibrí"], 0, "La silla es un objeto inerte: no come, ni crece, ni se mueve sola.", "Fue hecha por personas."],
      ["Los seres vivos crecen:", ["nunca", "sí, todos en algún momento", "solo las mesas", "solo los zapatos"], 1, "Crecer es una característica de todo ser vivo.", "Tú también creces cada día."],
      ["¿Qué come un perrito?", ["Nada nunca", "Piedras", "Clavos", "Comida y agua"], 3, "Los animales necesitan comida y agua todos los días.", "Si no comen, se enferman."],
      ["¿Cuál de estos seres vivos vuela?", ["El libro", "La mesa", "La garza", "La taza"], 2, "La garza es un ave que vuela en el río y la plaza.", "Las cosas inertes no vuelan solas."],
      ["Una planta muerta porque:", ["era de madera", "no tuvo agua ni luz", "tenía color", "estaba en un estante"], 1, "Sin agua y luz la planta se seca y deja de estar viva.", "Los seres vivos necesitan cuidados."],
      ["¿Cuál de estos se mueve solo?", ["Un pez", "Una silla", "Un cuaderno", "Una pared"], 0, "El pez nada solo porque es un ser vivo.", "Las cosas inertes necesitan que alguien las mueva."],
      ["¿Cómo sabemos que un perrito está vivo?", ["Se mueve, come y respira", "Tiene cuatro patas", "Es marrón", "Está en la casa"], 0, "Movimiento, alimento y respiración señalan la vida.", "Las formas y colores no lo demuestran."],
      ["¿Cuál de estos animales bebe agua?", ["La piedra", "La vaca", "La mesa", "El papel"], 1, "Los animales, como la vaca, necesitan beber agua.", "Todo ser vivo necesita agua."],
      ["Las plantas también están vivas porque:", ["tienen hojas", "son verdes siempre", "crecen y necesitan agua", "están en macetas"], 2, "Crecer y necesitar agua son señales de vida, aunque no se muevan como los animales.", "Miren cómo brota una semilla."],
      ["¿Cuál de estos seres vivos nadan en el río?", ["Los cuadernos", "Los libros", "Las tazas", "Los peces"], 3, "Los peces son seres vivos que nadan en el agua.", "Los objetos inertes se hunden o flotan sin vivir."],
    ],
    cl: {
      c: [
        ["viv", "ES SER VIVO", "🗂️"],
        ["iner", "ES ELEMENTO INERTE", "📌"],
      ],
      i: [
        ["el colibrí", "viv"],
        ["la vaca", "viv"],
        ["el pez del río", "viv"],
        ["la planta de la maceta", "viv"],
        ["la silla", "iner"],
        ["la piedra", "iner"],
        ["el lápiz", "iner"],
        ["la taza", "iner"]
      ]
    },
    em: [
      ["ser vivo", "come y crece"],
      ["planta", "necesita agua y luz"],
      ["piedra", "elemento inerte"]
    ],
    or: [
      "Observo si el ser se mueve o crece.",
      "Pienso si necesita comida o agua.",
      "Pregunto si nació y se desarrolla.",
      "Clasifico si es vivo o inerte."
    ],
    e: ["Escribe dos seres vivos de tu casa o jardín.", "Mi gato y la planta del ventanal.", 3],
  },
  {
    n: "Objetos inertes a mi alrededor",
    o: "Reconozco los elementos inertes: no comen, no crecen y no se mueven solos.",
    d: "DBA: diferencia los elementos inertes del entorno de los seres vivos.",
    t: [
      ["Los objetos inertes", "La mesa, el lápiz, la piedra y el libro están hechos de materia; no están vivos.", "⛰️"],
      ["No comen ni crecen", "Los objetos inertes no comen, no respiran y no crecen; solo cambian si alguien los rompe.", "🚫"],
      ["Los usamos todos los días", "Con los objetos inertes aprendo, me visto y me divierto, pero debo cuidarlos.", "🎒"],
    ],
    q: [
      ["¿Cuál de estos es un objeto inerte?", ["El colibrí", "El perro", "La planta", "El cuaderno"], 3, "El cuaderno está hecho de papel y no está vivo.", "No come, no crece y no respira."],
      ["Los elementos inertes:", ["no se mueven solos", "corren siempre", "comen siempre", "crecen siempre"], 0, "Sin alguien que los mueva, los inertes quedan quietos.", "Alguien debe moverlos."],
      ["¿Cuál de estos elementos inertes uso para escribir?", ["La gata", "El lápiz", "El pescado", "El girasol"], 1, "El lápiz es un objeto inerte con el que escribo.", "También sirve para dibujar."],
      ["La piedra del patio es un elemento:", ["que come", "vivo", "inerte", "que respira"], 2, "La piedra no está viva: es parte de los elementos inertes.", "No nació ni crece."],
      ["¿Cuál de estos NO necesita comida?", ["La mesa", "El hermano", "El gato", "La gallina"], 0, "La mesa es inerte; los otros son seres vivos que comen.", "Las cosas inertes no tienen hambre."],
      ["Los objetos inertes pueden estar hechos de:", ["hojas verdes vivas", "sangre", "piel", "madera, metal o plástico"], 3, "Los materiales inertes son cosas como madera, metal y plástico.", "Así están hechos mis útiles."],
      ["¿Cuál de estos elementos inertes se puede romper?", ["La abeja", "El perrito", "El vaso", "El tomate"], 2, "El vaso es frágil y se rompe si cae.", "Los seres vivos se lastiman, no se rompen así."],
      ["Un libro está vivo porque:", ["come", "no está vivo", "respira", "crece"], 1, "El libro es inerte: no hace nada de lo que hace un ser vivo.", "Se hizo en una fábrica."],
      ["¿Cuál de estos es inerte y se usa para tomar agua?", ["El gatito", "El vaso", "La planta", "El pollito"], 1, "El vaso es un objeto inerte; los otros tres son seres vivos.", "Piense en lo que no está vivo."],
      ["¿Qué hago con los elementos inertes del salón?", ["Los baño", "Los alimento", "Los cuido y los uso con cuidado", "Los dejo crecer"], 2, "Cuidar los útiles y el mobiliario es parte de la convivencia.", "Los inertes se cuidan, no se alimentan."],
      ["¿Cuál de estos elementos inertes es redondo?", ["El maíz", "El gato", "La abeja", "La pelota de juguete"], 3, "La pelota de juguete es un objeto inerte de forma redonda.", "Los animales redondos casi no existen."],
      ["La mesa de mi casa está viva porque:", ["no está viva, es un objeto inerte", "come por la noche", "respira", "crece mucho"], 0, "La mesa no está viva; fue construida con madera.", "Los muebles son inertes."],
    ],
    cl: {
      c: [
        ["utl", "ES UN ÚTIL ESCOLAR", "🗂️"],
        ["mov", "ES UN MUEBLE U OBJETO DEL HOGAR", "📌"],
      ],
      i: [
        ["lápiz", "utl"],
        ["cuaderno", "utl"],
        ["borrador", "utl"],
        ["mochila", "utl"],
        ["mesa", "mov"],
        ["silla", "mov"],
        ["vaso", "mov"],
        ["puerta", "mov"]
      ]
    },
    em: [
      ["mesa", "objeto inerte"],
      ["piedra", "elemento inerte"],
      ["lápiz", "útil escolar"],
      ["libro", "objeto inerte"]
    ],
    or: [
      "Miro el objeto con atención.",
      "Pregunto si está vivo o no.",
      "Compruebo si come, crece o se mueve solo.",
      "Clasifico si es un elemento inerte."
    ],
    e: ["Escribe tres objetos inertes de tu salón.", "La mesa, la silla y el pizarrón.", 3],
  },
  {
    n: "Vivo o no vivo",
    o: "Clasifico seres vivos y elementos inertes según lo que sé de cada uno.",
    d: "DBA: diferencia los seres vivos de los elementos inertes del entorno.",
    t: [
      ["Preguntas clave", "Para clasificar pregunto: ¿come? ¿crece? ¿se mueve solo? Si dice sí, es un ser vivo.", "❓"],
      ["Un montón de seres vivos", "Los animales y las plantas son seres vivos: mi gato, las garzas del río y el maíz.", "🐔"],
      ["Un montón de objetos inertes", "Las piedras, las sillas y los útiles son inertes: no viven, solo están ahí.", "🛋️"],
    ],
    q: [
      ["¿El perro es vivo o inerte?", ["Vivo", "Inerte", "Es un color", "Es un sonido"], 0, "El perro come, crece y se mueve: es un ser vivo.", "Piense en qué hace cada día."],
      ["¿La flor del jardín está viva?", ["No, es una piedra", "Sí, es un ser vivo", "No, es un lápiz", "No, es un color"], 1, "La flor es una parte de la planta, que está viva y necesita agua.", "Las plantas también son seres vivos."],
      ["¿La piedra del patio es viva?", ["Sí, come", "Sí, duerme", "No, es un elemento inerte", "Sí, crece"], 2, "La piedra no come, ni crece, ni respira: es inerte.", "Los minerales no están vivos."],
      ["¿Cuál de estos es un ser vivo del río?", ["El puente", "La roca", "La arena", "La garza"], 3, "La garza es un ave que vive en el río.", "Las demás cosas son inertes."],
      ["¿El cuaderno está vivo?", ["Sí, un poco", "No", "Sí, si lo abro", "Sí, si lo cuido"], 1, "El cuaderno fue hecho de papel y no está vivo.", "Cuidarlo no lo hace vivo."],
      ["¿Cuál de estos NO es ser vivo?", ["La taza", "El colibrí", "El gato", "La abeja"], 0, "La taza es un objeto inerte; los otros son animales vivos.", "La taza no respira."],
      ["Una semilla de maíz germina y crece. ¿Por qué está viva?", ["Porque está en un bote", "Porque es amarilla", "Porque pesa", "Porque crece y necesita agua"], 3, "Crecer con agua y luz son señales claras de vida.", "Hasta una semilla pequeña está viva."],
      ["¿Cuál es la mejor pregunta para saber si algo está vivo?", ["¿Es grande?", "¿Tiene color?", "¿Come, crece o se mueve solo?", "¿Está lejos?"], 2, "Las funciones vitales son comer, crecer y moverse.", "Los colores y tamaños no definen la vida."],
      ["¿El aire es un ser vivo?", ["Sí, come", "Sí, respira", "No, es un elemento del entorno", "Sí, corre"], 2, "El aire no come ni crece; es parte del entorno inerte.", "Él no necesita alimento."],
      ["¿Cuál par está bien clasificado?", ["Ambos inertes", "Perro: inerte; mesa: vivo", "Ambos vivos", "Perro: vivo; mesa: inerte"], 3, "El perro es un ser vivo y la mesa es un objeto inerte.", "Revise cada uno con sus pistas."],
      ["¿La gallina del patio es un ser vivo?", ["Sí", "No", "Solo si pone huevos", "Solo de noche"], 0, "La gallina come, crece y se mueve: es un ser vivo.", "Todos los animales lo son."],
      ["¿Cuál de estos es un ser vivo que crece en la tierra?", ["La piedra", "El tomate de la huerta", "El clavo", "La silla"], 1, "El tomate nace de una planta que creció en la tierra.", "Es un alimento de seres vivos."],
    ],
    cl: {
      c: [
        ["viv", "SER VIVO", "🗂️"],
        ["iner", "ELEMENTO INERTE", "📌"],
      ],
      i: [
        ["la gallina", "viv"],
        ["el tomate", "viv"],
        ["la garza", "viv"],
        ["el gato", "viv"],
        ["el clavo", "iner"],
        ["la silla", "iner"],
        ["la taza", "iner"],
        ["el puente", "iner"]
      ]
    },
    em: [
      ["come y crece", "ser vivo"],
      ["no se mueve solo", "elemento inerte"],
      ["planta", "ser vivo"],
      ["piedra", "elemento inerte"]
    ],
    or: [
      "Observo el ser u objeto.",
      "Pregunto si come, crece o se mueve solo.",
      "Recuerdo qué sé de él.",
      "Lo clasifico como vivo o inerte."
    ],
    e: ["Clasifica cinco cosas de tu casa: ¿vivas o inertes?", "Vivas: mi gato, la planta. Inertes: la mesa, la puerta, el vaso.", 3],
  },

  /* [Aporte PDF] temas del libro: Ciencias Naturales y Educación Ambiental · Fichas Grado 1 (Escuela Nueva, MEN Colombia 2010)
     Agregados aditivamente en la fase de contenido (ver TODO.md). */
  {
    "n": "La luz de mi alrededor",
    "o": "Yo reconozco la luz natural y la artificial, descubro las sombras y los colores que se forman al mezclar.",
    "d": "Guía 2 'LUZ Y SONIDO', fichas 'La luz y las sombras' (pág. 17), 'La luz y los colores' (pág. 18) y 'Objetos y seres con luz' (pág. 20). Logro: yo clasifico las fuentes de luz, distingo objetos transparentes y opacos, y veo cómo se forman las sombras y demás colores.",
    "f": "Cartilla Escuela Nueva Grado 1 · Guía 2 (págs. 17-18 y 20)",
    "t": [
            [
                    "La luz del Sol",
                    "La luz que viene del Sol se llama luz natural. Con ella podemos ver todo lo que nos rodea durante el día. ¡También la Luna y las estrellas brillan en el cielo!",
                    "🌞"
            ],
            [
                    "Luces que la gente hace",
                    "La luz que proviene de objetos hechos por el ser humano es luz artificial, como la linterna, el bombillo de la casa o la vela. Ellas nos alumbran cuando anochece.",
                    "🔦"
            ],
            [
                    "Sombras y colores",
                    "La luz pasa a través de objetos transparentes, como el vidrio de la ventana, pero no puede pasar por objetos opacos, como la caja de cartón: allí se forma una sombra. Y con la luz conocemos los colores primarios: el amarillo, el azul y el rojo.",
                    "🌈"
            ]
    ],
    "q": [
            [
                    "La luz que viene del Sol se llama…",
                    [
                            "luz natural",
                            "luz artificial",
                            "luz de juguete",
                            "luz apagada"
                    ],
                    0,
                    "Muy bien: la ficha dice que la luz que proviene del Sol es luz natural. La artificial es la que viene de objetos hechos por el ser humano, como la linterna.",
                    "Mire el cielo de día y pregúntese: ¿quién encendió esa luz?"
            ],
            [
                    "¿Cuál de estos objetos da una luz artificial?",
                    [
                            "La linterna",
                            "El Sol",
                            "Las estrellas",
                            "La Luna llena"
                    ],
                    0,
                    "¡Correcto! La linterna la fabricaron las personas y funciona con pilas, por eso su luz es artificial. El Sol, la Luna y las estrellas lucen solitos en el cielo, sin que nadie los encienda.",
                    "¿Alguien podía prender el Sol como se prende una linterna?"
            ],
            [
                    "Por los objetos transparentes la luz puede…",
                    [
                            "pasar",
                            "quedarse pegada",
                            "volverse negra",
                            "dar vueltas"
                    ],
                    0,
                    "¡Muy bien! La ficha 'La luz y las sombras' dice que la luz puede pasar a través de los objetos transparentes, como la jarra de vidrio.",
                    "Fíjese en el vidrio de la ventana: ¿ve lo que hay al otro lado?"
            ],
            [
                    "¿Cuál es un objeto opaco, por donde la luz no pasa?",
                    [
                            "La caja de cartón",
                            "La ventana de vidrio",
                            "La jarra de vidrio claro",
                            "El vaso transparente"
                    ],
                    0,
                    "¡Correcto! La caja de cartón es opaca: la luz no puede pasar a través de ella, por eso detrás de ella se forma una sombra. El vidrio es transparente y por ahí sí pasa la luz.",
                    "Tape la linterna con un cartón y mire si la luz atraviesa."
            ],
            [
                    "Los colores primarios son…",
                    [
                            "el amarillo, el azul y el rojo",
                            "el verde, el morado y el naranja",
                            "el rosado, el gris y el café",
                            "el blanco, el negro y el gris"
                    ],
                    0,
                    "¡Exacto! La página 18 dice que los colores primarios son el amarillo, el azul y el rojo, y con estos tres colores se forman los demás.",
                    "Piense en los colores de los crayones, como el amarillo, el azul y el rojo."
            ],
            [
                    "Si usted mezcla el color amarillo con el azul, se forma…",
                    [
                            "el verde",
                            "el morado",
                            "el naranja",
                            "el rojo"
                    ],
                    0,
                    "¡Muy bien! Amarillo más azul dan el color verde, como las hojas de los árboles. El morado sale de mezclar rojo con azul.",
                    "Piense en la luz verde del semáforo."
            ],
            [
                    "Si usted mezcla el rojo con el azul, se forma…",
                    [
                            "el morado",
                            "el verde",
                            "el amarillo",
                            "el café"
                    ],
                    0,
                    "¡Correcto! Rojo más azul dan el morado. Con la mezcla de colores se forman todos los demás a partir de los tres primarios.",
                    "Piense en las uvas y en las berenjenas: esos colores salieron de una mezcla."
            ],
            [
                    "¿Cuál de estos seres tiene luz propia?",
                    [
                            "La medusa que brilla en el mar",
                            "El caballo del potrero",
                            "El perro del patio",
                            "La vaca de la finca"
                    ],
                    0,
                    "¡Muy bien! En la ficha 'Objetos y seres con luz' aparecen la medusa que brilla y el farol. La medusa produce su propia luz en el mar oscuro.",
                    "¿Cuáles animales se ven brillando en la noche?"
            ],
            [
                    "Cuando la luz no puede pasar por un objeto, atrás de él se forma…",
                    [
                            "una sombra",
                            "un arcoíris",
                            "un charco",
                            "una nube"
                    ],
                    0,
                    "¡Correcto! Si la luz no pasa por un objeto opaco, detrás se forma una sombra, como las siluetas que se hacen con las manos y la linterna.",
                    "Levante la mano frente a la luz y vea que queda en la pared."
            ],
            [
                    "Para jugar a hacer siluetas con sombras se necesita…",
                    [
                            "una linterna y una pared clara",
                            "una pala y tierra",
                            "una taza y agua",
                            "una sandía y un cuchillo"
                    ],
                    0,
                    "¡Muy bien! 'Hagamos siluetas': con la luz de la linterna proyectamos las manos sobre la pared y aparecen las siluetas.",
                    "Apague un poco la luz del cuarto y prenda la linterna."
            ],
            [
                    "¿Por qué de noche necesitamos bombillos o velas?",
                    [
                            "Porque el Sol no está y hace falta luz para ver",
                            "Porque los bombillos silban en la noche",
                            "Porque de noche no existen los colores",
                            "Porque las ventanas duermen en la noche"
                    ],
                    0,
                    "¡Exacto! De noche la luz natural del Sol desaparece, y por eso usamos luz artificial para ver; las demás ideas son cosas que no pasan.",
                    "¿Encienden en su casa un bombillo cuando llega la noche?"
            ],
            [
                    "¿De dónde sacan su luz el farol y la vela?",
                    [
                            "De objetos hechos por las personas",
                            "Del Sol que brilla en el día",
                            "Del mar cuando brilla con el sol",
                            "De los pajaros que cantan en la mañana"
                    ],
                    0,
                    "¡Correcto! El farol y la vela son objetos hechos por el ser humano, por eso su luz es artificial. La luz natural viene del Sol.",
                    "¿Quién fabricó la vela que se prende en la torta?"
            ],
            [
                    "¿Qué objetos percibimos alrededor cuando hay luz?",
                    [
                            "Colores, formas y todo lo que nos rodea",
                            "Solo sonidos y olores",
                            "Nada, porque la luz tapa todo",
                            "Solo el frío del viento"
                    ],
                    0,
                    "¡Muy bien! Con la luz de día vemos los colores y todo lo que hay a nuestro alrededor; de noche, sin luz, no logramos ver objeto alguno.",
                    "Compare cómo ve el parque de día y en la noche."
            ]
    ],
    "cl": {
      "c": [
            [
                    "nat",
                    "LUZ NATURAL",
                    "🌞"
            ],
            [
                    "art",
                    "LUZ ARTIFICIAL",
                    "💡"
            ]
    ],
      "i": [
            [
                    "el Sol",
                    "nat"
            ],
            [
                    "las estrellas",
                    "nat"
            ],
            [
                    "el relámpago",
                    "nat"
            ],
            [
                    "la medusa que brilla",
                    "nat"
            ],
            [
                    "la linterna",
                    "art"
            ],
            [
                    "el bombillo",
                    "art"
            ],
            [
                    "la vela",
                    "art"
            ],
            [
                    "el farol",
                    "art"
            ]
    ]
    },
    "em": [["Sol","luz natural"],["linterna","luz artificial"],["transparente","pasa la luz"],["opaco","se forma sombra"]],
    "or": [
          "Dibuje en cartulina la figura que quiere silueta",
          "Recorte la figura con cuidado",
          "Apéguela en un palo o sosténgala con la mano",
          "Prenda la linterna hacia la pared y mire cómo se forma la sombra"
    ],
    "e": ["Dibuje dos cosas que dan luz: una natural y otra artificial","Ejemplo: dibujé el Sol (natural) y una vela (artificial)",3]
  },
  {
    "n": "El mundo de los sonidos",
    "o": "Yo reconozco los sonidos de la naturaleza y de los instrumentos, y descubro cómo nace el sonido con la vibración.",
    "d": "Guía 2 'LUZ Y SONIDO', fichas 'Sonidos naturales' (pág. 21), 'La música' (pág. 22), 'El eco' (pág. 23) y 'La voz' (pág. 24). Logro: yo clasifico sonidos por su fuente, distingo tono grave y agudo, y hago instrumentos con semillas.",
    "f": "Cartilla Escuela Nueva Grado 1 · Guía 2 (págs. 21-24)",
    "t": [
            [
                    "Sonidos de la naturaleza",
                    "En el campo y en los parques escuchamos sonidos que hacen los seres vivos: el canto de los pájaros, el maullido del gato, el rebuzno del burro, la lluvia en las hojas. ¡Imite esos sonidos con su voz!",
                    "🐦"
            ],
            [
                    "La música y sus notas",
                    "Los sonidos de la música se llaman notas. A cada nota se le dio un nombre: Do, Re, Mi, Fa, Sol, La y Si. Las notas van subiendo como una escalera, y por eso su unión se llama escala.",
                    "🎶"
            ],
            [
                    "El sonido nace al vibrar",
                    "Para que suene un instrumento se necesita que algo vibre: en la guitarra las cuerdas, en los tambores las membranas y en las flautas el aire. Nosotros también tenemos un instrumento: la voz, que suena con las cuerdas vocales del cuello.",
                    "🥁"
            ]
    ],
    "q": [
            [
                    "Los sonidos de la música se llaman…",
                    [
                            "notas",
                            "letras",
                            "puntitos",
                            "rayitas"
                    ],
                    0,
                    "¡Muy bien! La ficha 'La música' dice que los sonidos de la música se llaman notas y a cada una se le dio un nombre.",
                    "Recuerde el nombre de la primera nota: suena como 'dó'."
            ],
            [
                    "A cada nota se le dio un nombre. ¿Cuál es una de ellas?",
                    [
                            "Sol",
                            "Nube",
                            "Faro",
                            "Piedra"
                    ],
                    0,
                    "¡Correcto! Las notas son Do, Re, Mi, Fa, Sol, La y Si. Sol es una nota musical aunque también sea el nombre del astro que alumbra.",
                    "Cante la canción Das, das, das, subiendo la escalera."
            ],
            [
                    "Las notas musicales van subiendo como si estuvieran en…",
                    [
                            "una escalera",
                            "una culebra",
                            "una rueda",
                            "un tren"
                    ],
                    0,
                    "¡Exacto! La ficha compara las notas con una escalera que va subiendo de Do hasta Si, y por eso su unión se llama escala.",
                    "Imagine que cada paso que sube suena más agudo."
            ],
            [
                    "¿Cuál es un sonido natural?",
                    [
                            "El canto de los pájaros",
                            "La bocina del carro",
                            "El timbre del colegio",
                            "La alarma del reloj"
                    ],
                    0,
                    "¡Muy bien! Los sonidos naturales los hacen los animales y la naturaleza, como los gansos del lago. Los demás los producen máquinas hechas por las personas.",
                    "Escuche en su patio: ¿cantó un pájaro hoy?"
            ],
            [
                    "Si la vibración es rápida, el sonido es de tono…",
                    [
                            "agudo",
                            "grave",
                            "triste",
                            "apagado"
                    ],
                    0,
                    "¡Correcto! La ficha 'La voz' dice que si la vibración es rápida, el sonido es de tono agudo, como el de las cuerdas delgadas de la guitarra.",
                    "¿El pio de los pajaritos suena fino o grueso?"
            ],
            [
                    "Si la vibración es lenta, el sonido es de tono…",
                    [
                            "grave",
                            "agudo",
                            "difícil",
                            "colorido"
                    ],
                    0,
                    "¡Exacto! Cuando la vibración es lenta, el sonido es grave, como las cuerdas más gruesas de la guitarra y la voz de un oso.",
                    "Ponga la mano en la garganta y diga una palabra larga y baja."
            ],
            [
                    "En nuestro cuerpo también hay un instrumento musical. Es…",
                    [
                            "la voz",
                            "la oreja",
                            "la nariz",
                            "la rodilla"
                    ],
                    0,
                    "¡Muy bien! Gracias a la voz podemos producir sonidos para hablar y cantar; suena cuando vibran las cuerdas vocales del cuello.",
                    "Coloque la mano en el cuello y sienta cómo vibra al hablar."
            ],
            [
                    "El sonido de la voz se produce cuando vibran las…",
                    [
                            "cuerdas vocales",
                            "uñas",
                            "pestañas",
                            "orejas"
                    ],
                    0,
                    "¡Correcto! Las cuerdas vocales están en el cuello y vibran con el paso del aire que respiramos; así producimos la voz.",
                    "Toque su cuello y diga 'a' bien fuerte: sentirá un tembleque."
            ],
            [
                    "El eco es cuando el sonido…",
                    [
                            "se repite al regresar de una montaña",
                            "se moja con la lluvia",
                            "se pinta de colores",
                            "se enfría en el viento"
                    ],
                    0,
                    "¡Muy bien! En la montaña, el sonido que enviamos regresa y repetimos la última palabra, como la ninfa Eco de los cuentos griegos.",
                    "Grite '¡hola!' en las montañas: ¿quién lo contesta?"
            ],
            [
                    "¿En qué lugar SÍ se produce el eco?",
                    [
                            "En las grutas y cuevas de la montaña",
                            "En la sala pequeña de una casa",
                            "Dentro de una caja de fósforos",
                            "Bajo la mesa del comedor"
                    ],
                    0,
                    "¡Exacto! El eco se oye en lugares grandes y con muros lejanos, como cavernas y montañas; en una sala pequeña el sonido no regresa.",
                    "Piense en lugares con muchísimas paredes lejos."
            ],
            [
                    "En un tambor, la parte que vibra para sonar es…",
                    [
                            "la membrana",
                            "las patas",
                            "la pintura",
                            "la cuerda"
                    ],
                    0,
                    "¡Bien! La ficha dice que en los tambores vibran las membranas para producir el sonido; por eso golpear la piel del tambor lo hace sonar.",
                    "¿Qué parte del tambor toca la mano al tocarlo?"
            ],
            [
                    "Para construir un chuco (tarro con semillas), el último paso es…",
                    [
                            "tapar la boca del tarro y moverlo para que suene",
                            "comer las semillas del tarro",
                            "enterrar el tarro en el jardín",
                            "pintar el tarro de colores y guardarlo"
                    ],
                    0,
                    "¡Correcto! En 'Construyamos instrumentos musicales': se colocan semillas dentro del tarro, se tapa la boca y se mueve para que suene.",
                    "Piense: para que suenen las semillas, ¿el tarro va abierto o cerrado?"
            ],
            [
                    "El mate es un instrumento hecho con…",
                    [
                            "calabazo, tela y semillas",
                            "una computadora",
                            "una llave inglesa",
                            "un plato de vidrio"
                    ],
                    0,
                    "¡Muy bien! El mate se hace cortando el calabazo, metiendo semillas de arroz o lentejas y cubriéndolo con un pañuelo o tela bien anudado.",
                    "¿Con qué se cubrió el calabazo para que no se salgan las semillas?"
            ]
    ],
    "cl": {
      "c": [
            [
                    "nat",
                    "SONIDO NATURAL",
                    "🐦"
            ],
            [
                    "mus",
                    "INSTRUMENTO MUSICAL",
                    "🥁"
            ]
    ],
      "i": [
            [
                    "el canto del pájaro",
                    "nat"
            ],
            [
                    "el trueno",
                    "nat"
            ],
            [
                    "el rebuzno del burro",
                    "nat"
            ],
            [
                    "el maullido del gato",
                    "nat"
            ],
            [
                    "el tambor",
                    "mus"
            ],
            [
                    "la flauta",
                    "mus"
            ],
            [
                    "el mate",
                    "mus"
            ],
            [
                    "la guitarra",
                    "mus"
            ],
            [
                    "la pandereta",
                    "mus"
            ]
    ]
    },
    "em": [["vibrar","sonar"],["notas","escala"],["eco","repetir"],["voz","cantar"]],
    "or": [
          "Consiga un tarro con tapa y un puñado de semillas",
          "Coloque las semillas dentro del tarro",
          "Tape bien la boca del tarro para que no se salgan",
          "Muévalo suave y luego fuerte, y escuche cómo cambia el sonido"
    ],
    "e": ["Dibuje dos instrumentos y escriba si su sonido es agudo o grave","Ejemplo: el tambor suena grave; el triángulo suena agudo",3]
  },
  {
    "n": "Cuido mi cuerpo",
    "o": "Yo practico hábitos que cuidan mi cuerpo: bañarme, cepillarme, comer bien, dormir y jugar, porque pienso y hablo.",
    "d": "Guía 3 'EL CUERPO HUMANO', fichas 'El ser humano' (pág. 25), 'Así somos los seres humanos' (pág. 26) y 'Cuidado del cuerpo' (pág. 27), con consejos del oído (pág. 10) y la piel (pág. 13). Logro: yo clasifico hábitos que cuidan o lastiman mi cuerpo y enumero pasos de higiene.",
    "f": "Cartilla Escuela Nueva Grado 1 · Guía 3 (págs. 25-27)",
    "t": [
            [
                    "Bien lavadito",
                    "Me baño todos los días, me cepillo los dientes y me lavo las manos: la piel me protege y así cuido mi cuerpo. Mis oídos también se cuidan: nunca les meta objetos.",
                    "🛁"
            ],
            [
                    "Comer y dormir bien",
                    "El cuerpo crece si como bien en el desayuno, el almuerzo y la cena, y si duermo todas las noches en mi cama. Un cuerpo descansado aprende mejor.",
                    "😴"
            ],
            [
                    "Yo pienso y hablo",
                    "Soy un ser humano porque pienso y puedo hablar. También me divierto jugando al aire libre, montando bicicleta: el cuerpo sano está alegre.",
                    "😊"
            ]
    ],
    "q": [
            [
                    "¿Para cuidar mis dientes debo…",
                    [
                            "cepillarlos después de comer",
                            "comer dulces todo el día",
                            "meter objetos puntiagudos en la boca",
                            "no lavarlos nunca, así se curan solos"
                    ],
                    0,
                    "¡Muy bien! Cepillarse los dientes después de comer es un hábito de cuidado del cuerpo; los dulces en exceso y los objetos los dañan.",
                    "Pregúntese: ¿cuántas veces al día se cepilla?"
            ],
            [
                    "El jabón me sirve para…",
                    [
                            "bañarme y lavarme las manos",
                            "pintarme la cara",
                            "darle agua a las plantas",
                            "arreglar la bicicleta"
                    ],
                    0,
                    "¡Correcto! Con agua y jabón limpiamos el cuerpo y las manos, y así los gérmenes no nos hacen daño.",
                    "¿Usted se lava las manos antes de comer?"
            ],
            [
                    "Para descansar bien necesito…",
                    [
                            "dormir todas las noches en mi cama",
                            "jugar con el celular en la cama",
                            "comer en la cama a media noche",
                            "gritar toda la noche"
                    ],
                    0,
                    "¡Exacto! Dormir bien cada noche es un hábito que cuida el cuerpo y lo deja listo para un nuevo día de aprendizaje.",
                    "¿A qué hora se va a dormir hoy?"
            ],
            [
                    "Después de jugar, lo mejor es…",
                    [
                            "lavarme las manos con agua y jabón",
                            "limpiarme con tierra del patio",
                            "limpiarme las manos en la camisa",
                            "no limpiarme para quedarme pegajoso"
                    ],
                    0,
                    "¡Muy bien! Al jugar las manos se ensucian; agua y jabón las dejan limpias antes de comer o de tocarse la cara.",
                    "Mire sus manos: ¿están listas para comer?"
            ],
            [
                    "Somos seres humanos porque, entre otras cosas…",
                    [
                            "pensamos y podemos hablar",
                            "vamos a volar muy alto",
                            "ponemos huevos en nidos",
                            "tenemos plumas de colores"
                    ],
                    0,
                    "¡Correcto! En 'El ser humano' el niño responde 'porque pienso y puedo hablar contigo', algo que solo las personas hacemos; los pájaros ponen huevos, nosotros no.",
                    "¿Qué otro animal pone huevos?"
            ],
            [
                    "Mi cuerpo está formado por cabeza, tronco y…",
                    [
                            "extremidades",
                            "alas",
                            "cola larga",
                            "antenas"
                    ],
                    0,
                    "¡Muy bien! El esquema de la página 26 muestra que el cuerpo humano está formado por cabeza, tronco y extremidades.",
                    "Revise la figura: ¿de dónde salen los brazos y las piernas?"
            ],
            [
                    "La cabeza está formada por el cráneo y la…",
                    [
                            "cara",
                            "rodilla",
                            "muñeca",
                            "planta del pie"
                    ],
                    0,
                    "¡Muy bien! El esquema de la página 26 enseña que la cabeza está formada por el cráneo y la cara.",
                    "Toque su cara: ¿qué partes del cuerpo están ahí?"
            ],
            [
                    "Las extremidades superiores son el brazo y la…",
                    [
                            "mano",
                            "pierna",
                            "espalda",
                            "ceja"
                    ],
                    0,
                    "¡Correcto! Las extremidades superiores se dividen en brazo y mano: con ellas tomamos y abrazamos; gracias a ellas, las manos también sienten el tacto.",
                    "¿Con qué mano saluda usted a sus amigos?"
            ],
            [
                    "Las extremidades inferiores son la pierna y el…",
                    [
                            "pie",
                            "codo",
                            "cuello",
                            "ombligo"
                    ],
                    0,
                    "¡Exacto! Las extremidades inferiores están formadas por la pierna y el pie: con ellos caminamos, corremos y jugamos.",
                    "¿Qué parte del cuerpo pisó el suelo al caminar?"
            ],
            [
                    "Escuchar música con el volumen muy alto…",
                    [
                            "puede afectar mi audición",
                            "limpia mis oídos",
                            "me da más fuerza",
                            "hace crecer mis orejas"
                    ],
                    0,
                    "¡Muy bien! La ficha del oído dice que no se debe escuchar música con el volumen muy alto, porque puede afectar la audición.",
                    "¿Puede hablar tranquilo con la música a todo volumen?"
            ],
            [
                    "Nunca me debo meter objetos en los oídos porque…",
                    [
                            "los puedo lastimar",
                            "se escucha mejor la radio",
                            "los oídos crecen más rápidos",
                            "así me lavo por dentro"
                    ],
                    0,
                    "¡Correcto! Nunca se deben meter objetos dentro de los oídos porque se los puede lastimar; para limpiarlos basta lavar con una toalla la parte externa.",
                    "¿Los oídos se limpian con palitos o con un paño suave?"
            ],
            [
                    "Jugar con fósforos es peligroso porque…",
                    [
                            "me puedo quemar la piel",
                            "me da más sueño",
                            "hace que existan más colores",
                            "es un juego de escuela"
                    ],
                    0,
                    "¡Exacto! La ficha de la piel advierte: no juegue con fósforos porque se puede quemar, y además podría provocar un incendio.",
                    "¿A quién le pide permiso para encender algo?"
            ]
    ],
    "cl": {
      "c": [
            [
                    "bue",
                    "HÁBITOS QUE CUIDAN MI CUERPO",
                    "🧼"
            ],
            [
                    "mal",
                    "COSAS QUE LASTIMAN MI CUERPO",
                    "⚠️"
            ]
    ],
      "i": [
            [
                    "bañarme todos los días",
                    "bue"
            ],
            [
                    "cepillarme los dientes",
                    "bue"
            ],
            [
                    "dormir temprano",
                    "bue"
            ],
            [
                    "comer frutas",
                    "bue"
            ],
            [
                    "dibujar y jugar al aire libre",
                    "bue"
            ],
            [
                    "meter objetos en los oídos",
                    "mal"
            ],
            [
                    "escuchar música muy fuerte",
                    "mal"
            ],
            [
                    "jugar con fósforos",
                    "mal"
            ],
            [
                    "no lavarme las manos",
                    "mal"
            ]
    ]
    },
    "em": [["jabón","baño"],["cepillo","dientes"],["cama","dormir"],["bicicleta","jugar"]],
    "or": [
          "Moje el cepillo con agua",
          "Póngale un poquito de pasta dental",
          "Cepille los dientes por dentro y por fuera",
          "Enjuague la boca y lave el cepillo"
    ],
    "e": ["Dibuje tres cosas que usted hace para cuidar su cuerpo","Ejemplo: bañarme, cepillarme los dientes y dormir bien",3]
  },
  {
    "n": "Sólidos, líquidos y gases",
    "o": "Yo clasifico los objetos de mi alrededor en sólidos, líquidos y gases, y los describo por su tamaño, forma, color y textura.",
    "d": "Guía 4 'LA MATERIA', fichas 'Sólidos' (pág. 28), 'Líquidos' (pág. 29) y 'Gaseosos' (pág. 30). Logro: yo distingo los tres estados de la materia con ejemplos de mi diario vivir, como el agua, la piedra y el aire de un globo.",
    "f": "Cartilla Escuela Nueva Grado 1 · Guía 4 (págs. 28-30)",
    "t": [
            [
                    "Los sólidos",
                    "Los objetos sólidos tienen una forma definida y podemos describirlos por su tamaño, su forma, su color y su textura: duro o blando, áspero o suave. El balón y la piedra son sólidos.",
                    "🪨"
            ],
            [
                    "Los líquidos",
                    "Los líquidos no tienen una forma definida como los sólidos: toman la forma del recipiente que los contiene. El agua, la leche y el aceite son líquidos; el agua es parte de plantas, animales y de usted.",
                    "💧"
            ],
            [
                    "Los gases",
                    "Los gases, igual que los líquidos, no tienen forma definida y toman la forma del recipiente. ¡Muchas veces no los vemos! El aire que respiramos, que infla los globos y llena las botellas de un instrumento, es un gas.",
                    "🎈"
            ]
    ],
    "q": [
            [
                    "Los objetos sólidos tienen…",
                    [
                            "una forma definida",
                            "solo color y no forma",
                            "la forma del recipiente",
                            "siempre textura áspera"
                    ],
                    0,
                    "¡Muy bien! La ficha 'Sólidos' dice que los objetos sólidos tienen una forma definida, y sus características son tamaño, forma, color y textura.",
                    "Mire su cuaderno: ¿cambia de forma si lo muevo?"
            ],
            [
                    "El agua de la botella es un ejemplo de…",
                    [
                            "líquido",
                            "sólido",
                            "gas",
                            "roca"
                    ],
                    0,
                    "¡Correcto! El agua es un líquido: no tiene forma propia y toma la forma de la botella o del vaso que la contiene.",
                    "Apártese y mire el agua en una taza: ¿qué forma tiene?"
            ],
            [
                    "Dentro de un globo inflado hay…",
                    [
                            "un gas: el aire",
                            "un sólido: la madera",
                            "un líquido: la leche",
                            "una roca pequeñita"
                    ],
                    0,
                    "¡Exacto! En 'Gaseosos' vemos globos que se llenan de aire, y el aire es un gas que toma la forma del globo.",
                    "¿Se sopló para inflar el globo?"
            ],
            [
                    "La forma de un líquido depende de…",
                    [
                            "el recipiente que lo contiene",
                            "el color del cielo",
                            "la hora del día",
                            "su precio en el mercado"
                    ],
                    0,
                    "¡Muy bien! Los líquidos toman la forma del recipiente que los contiene: en una taza tienen la forma de la taza.",
                    "Sirva agua en dos vasos distintos y compare."
            ],
            [
                    "Las características de los objetos son el tamaño, la forma, el color y…",
                    [
                            "la textura",
                            "el precio",
                            "el sabor",
                            "la velocidad"
                    ],
                    0,
                    "¡Correcto! La ficha 'Sólidos' dice: tamaño, forma, color y textura. La textura puede ser lisa, rugosa, dura o blanda.",
                    "Toque con los dedos: ¿es liso o áspero?"
            ],
            [
                    "¿Cuál de estos objetos es sólido?",
                    [
                            "La pelota de fútbol",
                            "El aceite de la botella",
                            "El humo del incendio",
                            "El aire del globo"
                    ],
                    0,
                    "¡Muy bien! La pelota tiene una forma definida que no cambia, por eso es sólida. El aceite es líquido y el humo y el aire son gases.",
                    "Apriete con la mano: ¿cuál de esos mantiene su forma?"
            ],
            [
                    "El balón de fútbol tiene una forma…",
                    [
                            "redonda",
                            "cuadrada",
                            "triangular",
                            "larga y delgada"
                    ],
                    0,
                    "¡Exacto! El balón es redondo; esa es una de sus características de forma que describimos en 'Sólidos'.",
                    "Píntele un círculo en el aire con el dedo."
            ],
            [
                    "En '¿Dónde estás que no te veo?', el gas que está en todas partes es…",
                    [
                            "el aire que respiramos",
                            "el agua del estanque",
                            "el vidrio de la ventana",
                            "la piedra de la montaña"
                    ],
                    0,
                    "¡Muy bien! El aire es un gas que no vemos, pero está a nuestro alrededor y respiramos todo el tiempo.",
                    "Respire profundo dos veces: ¿dónde entra ese aire?"
            ],
            [
                    "El agua me sirve para…",
                    [
                            "beber, bañarme, lavar y regar",
                            "apagar los bombillos de mi casa",
                            "pintar la ropa de colores",
                            "comprar juguetes nuevos"
                    ],
                    0,
                    "¡Correcto! La página 29 dice: el agua para beber, para bañarse, para lavar, para preparar alimentos, para regar y para vivir.",
                    "Cite tres usos del agua en su día."
            ],
            [
                    "La leche vertida en una taza toma la forma…",
                    [
                            "de la taza",
                            "de una estrella",
                            "de la montaña",
                            "de un zapato"
                    ],
                    0,
                    "¡Exacto! Los líquidos toman la forma del recipiente que los contiene: en la taza la leche queda con forma de taza.",
                    "Imagine servir la misma leche en un plato: ¿cambió?"
            ],
            [
                    "El vapor que sale de una olla caliente es un ejemplo de…",
                    [
                            "gas",
                            "sólido",
                            "líquido",
                            "piedra"
                    ],
                    0,
                    "¡Muy bien! El vapor es agua en forma de gas: sube por el aire como una nubecita.",
                    "Mire una olla con su adulto: ¿qué sube del agua?"
            ],
            [
                    "Para hacer pompas de jabón se necesita…",
                    [
                            "agua con jabón, alambre y soplar suave",
                            "carbón, tierra y una pala",
                            "semillas, calabazo y tela",
                            "papel periódico y pegante"
                    ],
                    0,
                    "¡Correcto! En 'Hagamos pompas de jabón' se mezcla agua con jabón, se dobla un alambre en círculo, se mete en la mezcla y se sopla con suavidad.",
                    "¿Qué звонido hace el jabón en el agua?"
            ]
    ],
    "cl": {
      "c": [
            [
                    "sol1",
                    "SÓLIDOS",
                    "🪨"
            ],
            [
                    "liq",
                    "LÍQUIDOS",
                    "💧"
            ],
            [
                    "gas",
                    "GASES",
                    "💨"
            ]
    ],
      "i": [
            [
                    "la piedra",
                    "sol1"
            ],
            [
                    "la pelota",
                    "sol1"
            ],
            [
                    "la lata del mercado",
                    "sol1"
            ],
            [
                    "el lápiz",
                    "sol1"
            ],
            [
                    "el agua",
                    "liq"
            ],
            [
                    "la leche",
                    "liq"
            ],
            [
                    "el aceite",
                    "liq"
            ],
            [
                    "el jugo",
                    "liq"
            ],
            [
                    "el aire del globo",
                    "gas"
            ],
            [
                    "el vapor de la olla",
                    "gas"
            ],
            [
                    "el humo",
                    "gas"
            ]
    ]
    },
    "em": [["piedra","sólido"],["agua","líquido"],["aire","gas"],["hielo","sólido"]],
    "or": [
          "Mezcle agua con jabón dentro del frasco",
          "Doble el alambre formando un círculo",
          "Meta el alambre en la mezcla jabonosa",
          "Sople con suavidad y observará las pompas"
    ],
    "e": ["Busque dos objetos de su casa y describalos: tamaño, forma, color y textura","Ejemplo: la mesa es grande, café y lisa; mi borrador es pequeño, blanco y suave",3]
  },
  {
    "n": "Cuidamos los recursos naturales",
    "o": "Yo reconozco los recursos naturales que se acaban y los que no se acaban, y aprendo a cuidarlos reciclando y ahorrando.",
    "d": "Guía 5 'LOS RECURSOS NATURALES', fichas 'Recursos que se acaban' (pág. 31), 'Recursos que no se acaban' (pág. 32) y 'Cuidemos los recursos naturales' (pág. 33). Logro: yo clasifico recursos y practico el reciclaje de papel y el cuidado del agua y los seres vivos.",
    "f": "Cartilla Escuela Nueva Grado 1 · Guía 5 (págs. 31-33)",
    "t": [
            [
                    "Recursos que se acaban",
                    "En la naturaleza hay recursos que tardaron muchísimo tiempo en formarse, como el carbón y el petróleo. Si los usamos sin control, se pueden acabar, por eso debemos usarlos con cuidado.",
                    "⛏️"
            ],
            [
                    "Recursos que se renuevan",
                    "Otros recursos se forman constantemente: la luz del Sol, el viento, el agua, las plantas y los animales. Pero si los usamos demasiado y no los cuidamos, también podrían llegar a acabarse.",
                    "🌳"
            ],
            [
                    "¡A reciclar!",
                    "Cuidar los recursos es tarea de todos: podemos reciclar el papel viejo para hacer papel nuevo, cerrar la llave del agua y cuidar las plantas y los animales de nuestro entorno.",
                    "♻️"
            ]
    ],
    "q": [
            [
                    "El carbón nos sirve para…",
                    [
                            "hacer fuego, cocinar y hervir agua",
                            "pintar las paredes de colores",
                            "regar los jardines de la casa",
                            "lavar la ropa con agua"
                    ],
                    0,
                    "¡Muy bien! La página 31 dice que con el carbón podemos hacer fuego y cocinar, o hervir agua; las demás ideas no corresponden a su uso.",
                    "¿Encendieron con carbón una parrilla alguna vez?"
            ],
            [
                    "Con el petróleo se produce…",
                    [
                            "gasolina para mover camiones y aviones",
                            "pastel de chocolate",
                            "jugo de naranja",
                            "ropa nueva"
                    ],
                    0,
                    "¡Correcto! La ficha dice que del petróleo producimos gasolina para mover camiones y aviones; no sabría utilizarse para pasteles o jugos.",
                    "¿Qué máquina del patio se mueve con gasolina?"
            ],
            [
                    "¿Por qué se acaban el carbón y el petróleo?",
                    [
                            "Porque se demoraron muchísimo en formarse y si los usamos sin control se acaban",
                            "Porque las plantas los comen todo el día",
                            "Porque los pájaros los esconden en nidos",
                            "Porque la lluvia los lleva al mar"
                    ],
                    0,
                    "¡Exacto! Se formaron durante muchísimo tiempo: nadie que esté vivo estuvo cuando eso sucedió; por eso, si los usamos sin control, se pueden acabar.",
                    "¿Qué pasará si hoy gastamos todo y mañana no queda?"
            ],
            [
                    "¿Cuál de estos es un recurso que NO se acaba con facilidad?",
                    [
                            "La luz del Sol",
                            "El carbón de la mina",
                            "El petróleo del mar",
                            "La gasolina del carro"
                    ],
                    0,
                    "¡Muy bien! La página 32 dice que la luz del Sol se forma constantemente, junto con el viento, el agua, las plantas y los animales.",
                    "¿El Sol volverá a brillar mañana?"
            ],
            [
                    "Estos recursos de la naturaleza se forman constantemente:",
                    [
                            "el Sol, el viento, el agua, las plantas y los animales",
                            "solo el carbón y el petróleo",
                            "solo las piedras del camino",
                            "los juguetes de la sala"
                    ],
                    0,
                    "¡Correcto! Se forman constantemente: la luz del Sol, el viento, el agua, las plantas y los animales; los juguetes no son recursos de la naturaleza.",
                    "Mire por la ventana: ¿qué ve de esa lista?"
            ],
            [
                    "¿Qué pasa si no cuidamos los recursos que se renuevan?",
                    [
                            "Pueden llegar a acabarse si cambiamos nuestra forma de usarlos o no",
                            "Se duplican y sobran para todos",
                            "Se pintan de colores",
                            "Se vuelven carbón"
                    ],
                    0,
                    "¡Exacto! La página 32 advierte que si los utilizamos en demasiada cantidad y no los cuidamos, pueden llegar a acabarse si no cambia nuestra forma de usarlos.",
                    "¿Se puede acabar un río si lo ensuciamos mucho?"
            ],
            [
                    "Para reciclar papel, primero debemos…",
                    [
                            "romper el papel viejo en trozos muy pequeños",
                            "quemarlo en el patio",
                            "botarlo a la basura",
                            "regarlo a un perro"
                    ],
                    0,
                    "¡Muy bien! El primer paso de 'Vamos a reciclar papel' es romper el papel en trozos muy pequeños para luego ponerlo en agua.",
                    "¿Se recicla el papel entero o en pedacitos?"
            ],
            [
                    "El papel en agua se deja dentro de la palangana durante…",
                    [
                            "dos días",
                            "diez segundos",
                            "un mes entero",
                            "todo un año"
                    ],
                    0,
                    "¡Correcto! La ficha dice: colócalo dentro de la palangana con agua durante dos días para que se ablande.",
                    "¿Cuál es más tiempo: dos días o un año?"
            ],
            [
                    "En la licuadora mezclamos…",
                    [
                            "el papel con agua",
                            "el carbón con arena",
                            "las piedras con sal",
                            "la gasolina con jugo"
                    ],
                    0,
                    "¡Muy bien! Después de remojar el papel dos días, se mezcla en la licuadora o con una batidora para formar la pasta de papel nuevo.",
                    "¿Con qué se licuan las frutas para el jugo? "
            ],
            [
                    "La mezcla de papel reciclado se coloca…",
                    [
                            "encima del tamiz y se deja secar",
                            "encima del televisor caliente",
                            "dentro de la nevera",
                            "dentro de un zapato"
                    ],
                    0,
                    "¡Exacto! Se coloca la mezcla encima del tamiz y se deja secar; luego se puede utilizar el papel reciclado.",
                    "¿Dónde dejaría papel para que se seque al sol?"
            ],
            [
                    "Para cuidar el agua en casa puedo…",
                    [
                            "cerrar la llave mientras me cepillo",
                            "dejarla abierta todo el día",
                            "regar la calle con la manguera",
                            "tirar basura al río"
                    ],
                    0,
                    "¡Muy bien! El agua es un recurso precioso: cerrar la llave al cepillar los dientes o al enjabonarme ahorra cantidades enormes.",
                    "¿Cuánto tiempo corre el agua si deja la llave abierta?"
            ],
            [
                    "¿Cómo cuidamos las plantas y los animales de nuestro entorno?",
                    [
                            "Cuidándolos y no dañando los lugares donde viven",
                            "Arrancando las plantas del parque",
                            "Asustando a los animales con gritos",
                            "Tirando basuras en el río"
                    ],
                    0,
                    "¡Correcto! Las plantas y los animales son recursos que no se acaban y por eso deben cuidarse: no arrancar plantas ni ensuciar sus hogares.",
                    "¿Cómo es el hogar de una planta o de un pajarito?"
            ]
    ],
    "cl": {
      "c": [
            [
                    "acab",
                    "RECURSOS QUE SE ACABAN",
                    "⛏️"
            ],
            [
                    "ren",
                    "RECURSOS QUE NO SE ACABAN",
                    "🌿"
            ]
    ],
      "i": [
            [
                    "el carbón",
                    "acab"
            ],
            [
                    "el petróleo",
                    "acab"
            ],
            [
                    "la gasolina",
                    "acab"
            ],
            [
                    "el Sol",
                    "ren"
            ],
            [
                    "el viento",
                    "ren"
            ],
            [
                    "el agua",
                    "ren"
            ],
            [
                    "las plantas",
                    "ren"
            ],
            [
                    "los animales",
                    "ren"
            ],
            [
                    "la luz del día",
                    "ren"
            ]
    ]
    },
    "em": [["carbón","fuego"],["petróleo","gasolina"],["papel","reciclar"],["Sol","luz"]],
    "or": [
          "Rompa el papel viejo en trozos muy pequeños",
          "Colóquelo en la palangana con agua durante dos días",
          "Mezcle el papel con agua en la licuadora o batidora",
          "Coloque la mezcla encima del tamiz y deje secar"
    ],
    "e": ["Dibuje dos acciones para cuidar los recursos naturales","Ejemplo: cerrar la llave del agua y reciclar el papel del cuaderno",3]
  },
];

/* ====== g1 / csociales ====== */
/* DBA 1º — csociales */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.csociales = [
  {
    n: "Ayudo en mi familia",
    o: "Reconozco mi rol en la familia y cumplo tareas sencillas con alegría.",
    d: "DBA: identifica su rol familiar y aporta a la convivencia en casa.",
    t: [
      ["Todos aportamos", "En mi familia cada persona ayuda: mamá cocina, papá ordena y yo recojo mis juguetes.", "🏠"],
      ["Mis tareas posibles", "Puedo poner la mesa, recoger mis juguetes, regar las plantas y tender mi ropa con ayuda.", "🧺"],
      ["Cuido a los míos", "Acompaño a mi hermanito, ayudo a la abuela y escucho a los mayores con cariño.", "💙"],
    ],
    q: [
      ["¿Cuál tarea puedo hacer en casa a mi edad?", ["Recoger mis juguetes", "Conducir el carro", "Cocinar con fuego solo", "Pagar las cuentas"], 0, "Recoger los juguetes es una tarea sencilla y segura para mí.", "Piense en algo que no peligre."],
      ["Mi hermanito pequeño llora. ¿Qué hago?", ["Le grito", "Lo consuelo y busco un adulto", "Me voy corriendo", "Lo ignoro"], 1, "Consolarlo y avisar a un adulto es ayudar en la familia.", "Los mayores también necesitan mi ayuda."],
      ["¿Quién es mi familia?", ["Mis vecinos", "Mis juguetes", "Las personas que me cuidan y me quieren", "Los dibujos"], 2, "La familia son las personas que me cuidan y viven conmigo o me quieren mucho.", "No son cosas, son personas."],
      ["Pongo la mesa para:", ["correr en el pasillo", "ver televisión", "dormir", "ayudar a mamá en la cocina"], 3, "Poner la mesa es una forma concreta de ayudar en casa.", "Es una tarea de todos los días."],
      ["En mi familia, los abuelos:", ["no me quieren", "me cuentan cosas y yo los ayudo", "son mis maestros", "viven en la escuela"], 1, "Los abuelos comparten sus historias y yo puedo ayudarlos acercando cosas.", "La familia se ayuda entre todos."],
      ["Cuando le pido algo a un adulto, debo:", ["saludar y pedir con cortesía", "gritar", "quitarle algo", "sentarme sin hablar"], 0, "Pedir con cortesía hace la convivencia en casa más agradable.", "Empiece por un buenos días."],
      ["Mamá está muy cansada. ¿Qué puedo hacer?", ["Le grito", "Le pido que me lleve ya al parque", "Le quito el celular", "Le traigo agua y juego tranquilo"], 3, "Descansarla y portarme bien es una ayuda real.", "A veces ayudar es dejar tranquilo al otro."],
      ["Recoger la ropa tendida:", ["no se puede hacer", "es solo de los niños grandes", "es una tarea que puedo hacer con ayuda", "solo se hace en lunes"], 2, "Con acompañamiento de un adulto puedo tender y recoger ropa.", "Nadie nace sabiendo; se aprende ayudando."],
      ["¿Cómo tomo decisiones en mi familia?", ["Nadie decide nada", "Solo el más grande", "Escuchando la opinión de todos", "Siempre gana el más ruidoso"], 2, "En familia se escucha a todos para decidir mejor.", "Escuchar también es ayudar."],
      ["¿Qué hago con mis hermanos cuando discutimos?", ["Nos dejamos de hablar", "Golpeamos", "Gritamos más fuerte", "Buscamos una solución hablando"], 3, "Hablando encontramos solución sin lastimarnos.", "Las palabras arreglan más que los golpes."],
      ["Mi papá lava los platos. ¿Cómo lo ayudo?", ["Le seco los platos", "Le quito el delantal", "Le apago el agua", "Le grito"], 0, "Secar los platos es una tarea que combina con lavar.", "Así terminamos más rápido juntos."],
      ["Ayudar en casa me hace sentir:", ["enojado siempre", "útil y feliz", "cansado de todo", "triste"], 1, "Colaborar da sensación de pertenencia y logro.", "Ayudar también es jugar en equipo."],
    ],
    cl: {
      c: [
        ["coc", "TAREA DE LA COCINA", "🗂️"],
        ["hab", "TAREA DE LA HABITACIÓN", "📌"],
      ],
      i: [
        ["poner la mesa", "coc"],
        ["lavar los platos con ayuda", "coc"],
        ["ayudar a preparar la comida", "coc"],
        ["recoger los juguetes", "hab"],
        ["tender la cama", "hab"],
        ["ordenar los libros", "hab"]
      ]
    },
    em: [
      ["mamá cocina", "aporta"],
      ["yo recogo juguetes", "aporto"],
      ["abuela cuenta", "comparte"]
    ],
    or: [
      "Observo qué necesita mi familia.",
      "Pido mi tarea o acepto la que me dan.",
      "La hago con calma y sin apuro.",
      "Recibo el agradecimiento y me siento bien."
    ],
    e: ["Escribe una tarea que haces en tu casa.", "Recogo mis juguetes antes de dormir.", 3],
  },
  {
    n: "Escucho y hablo en casa",
    o: "Uso palabras claras y escucho a mi familia cuando hablamos.",
    d: "DBA: identifica su rol familiar comunicándose con respeto en el hogar.",
    t: [
      ["Primero escucho", "Cuando alguien habla, miro y escucho sin interrumpir. Así entiendo lo que me dice.", "👂"],
      ["Después hablo", "Hablo con voz clara y sin gritar para que mi familia me entienda.", "🗣️"],
      ["Contamos nuestro día", "En la cena cuento qué pasó en la escuela y escucho lo que pasó en la de los demás.", "🍽️"],
    ],
    q: [
      ["Cuando mi papá me habla, yo:", ["grito más fuerte", "lo escucho sin interrumpir", "me tapo los oídos", "me voy sin mirar"], 1, "Escuchar es el primer paso para entender.", "Los dos hablamos mejor si uno escucha."],
      ["¿Cómo pido que me pasen la sal?", ["Tomo la sal sin decir", "Dame ya la sal", "Por favor, me pasas la sal", "Grito la sal"], 2, "Pedir con por favor es una manera respetuosa.", "La cortesía abre conversaciones."],
      ["Mi mamá me cuenta algo y yo la interrumpo mucho. ¿Qué hago mejor?", ["Me levanto", "Sigo interrumpiendo", "Me tapo la boca", "Espero a que termine y luego pregunto"], 3, "Esperar el momento hace la charla más agradable.", "También puedo tomar notas mentalmente."],
      ["¿Con qué voz hablo dentro de casa?", ["Normal, sin gritar", "Muy fuerte siempre", "Gritando", "Sin abrir la boca"], 0, "La voz normal se escucha bien sin molestar a nadie.", "En la escuela y en casa es igual."],
      ["Cuando no entiendo algo que dijo la abuela, yo:", ["me voy", "me río de ella", "le pido que lo repita con calma", "le grito"], 2, "Pedir que repita es una buena estrategia para entender.", "Nadie sabe todas las palabras."],
      ["Contar mi día ayuda a mi familia porque:", ["se aburren más rápido", "saben cómo me fue y me acompañan", "pierden el tiempo", "no sirve de nada"], 1, "Compartir acerca a la familia y pide apoyo cuando lo necesito.", "Lo que siento también se cuenta."],
      ["Si quiero hablar mientras todos hablan, debo:", ["levantar la mano o esperar mi turno", "gritar encima", "golpear la mesa", "cortar la frase"], 0, "Esperar el turno respeta a los demás.", "Todos merecen escucharse."],
      ["Mi hermano me habla y lo molesto. ¿Qué consecuencia tiene?", ["No pasa nada nunca", "Se ríe siempre", "Se pone contento", "Él se pone triste y discutimos"], 3, "Molestar rompe el clima familiar y crea tristeza.", "Mejor escucho y respondo."],
      ["¿A quién le cuento si algo me preocupa en casa?", ["A los dibujos", "A nadie", "Al perro", "A un adulto de confianza"], 3, "Un adulto de confianza me ayuda a resolver lo que me quita el sueño.", "Hablar alivia."],
      ["Cuando discutimos por un juguete, lo mejor es:", ["hablar y ponernos de acuerdo", "jalarnos el pelo", "romper el juguete", "gritar todo el día"], 0, "Hablar permite encontrar un acuerdo sin lastimarse.", "Hasta se puede turnar para jugar."],
      ["Decir te quiero a mi familia es:", ["algo malo", "una forma bonita de comunicarme", "una tarea", "un castigo"], 1, "Las palabras de cariño también son comunicación.", "Decirlas fortalece la familia."],
      ["Para que mi familia me escuche, hablo:", ["sin palabras", "muy rápido y sin parar", "con calma y en voz clara", "con gritos"], 2, "La calma y la claridad hacen que me atiendan.", "El tono importa tanto como las palabras."],
    ],
    cl: {
      c: [
        ["esc", "ES ESCUCHAR BIEN", "🗂️"],
        ["hab2", "ES HABLAR BIEN", "📌"],
      ],
      i: [
        ["mirar a quien habla", "esc"],
        ["no interrumpir", "esc"],
        ["esperar mi turno", "esc"],
        ["hablar con calma", "hab2"],
        ["pedir por favor", "hab2"],
        ["contar mi día", "hab2"]
      ]
    },
    em: [
      ["escuchar", "primero"],
      ["gritar", "no ayuda"],
      ["por favor", "cortesía"]
    ],
    or: [
      "Miro a la persona que habla.",
      "Escucho hasta que termine.",
      "Respondo con calma y claridad.",
      "Pido que repita si no entendí."
    ],
  },
  {
    n: "Me presento y conozco mi barrio",
    o: "Me presento con mi nombre y digo dónde vivo y dónde estudio.",
    d: "DBA: se orienta en su entorno cotidiano presentándose con sus datos básicos.",
    t: [
      ["Me presento", "Digo: Hola, me llamo Camila, tengo 6 años y estoy en primero. Así me conocen.", "🙋"],
      ["Dónde vivo", "Puedo decir el barrio donde vivo y el de mi escuela, siempre con ayuda de un adulto.", "📍"],
      ["Cuidado con mis datos", "Mi dirección completa solo la doy a personas de confianza, nunca a desconocidos.", "🔒"],
    ],
    q: [
      ["¿Qué digo primero cuando me presento?", ["El color de mi casa", "Mi número de juguete", "Me llamo y mi edad", "Mi canción favorita"], 2, "El nombre y la edad son los datos iniciales de una presentación.", "Es lo que la otra persona quiere saber."],
      ["Me llamo Sofía Pérez. ¿Cuál es mi nombre?", ["Ninguno", "Pérez", "Los dos", "Sofía"], 3, "Sofía es el nombre; Pérez es el apellido.", "El nombre va antes del apellido."],
      ["Tengo 6 años. ¿Qué dato doy?", ["Mi edad", "Mi peso", "Mi color", "Mi juguete"], 0, "La edad dice cuántos años cumplí.", "Se responde con un número."],
      ["¿A quién le pregunto la dirección de mi casa si no la sé?", ["A un desconocido", "A un adulto de mi familia", "A nadie", "Al aire"], 1, "Mis datos personales los confirma un adulto de confianza.", "La seguridad va primero."],
      ["Cuando conozco a un niño nuevo, yo:", ["me voy sin mirar", "le quito su mochila", "me río de él", "le doy la mano y me presento"], 3, "Presentarse y saludar abre la amistad.", "Un gesto amable basta para empezar."],
      ["Mi barrio se llama San Antonio. ¿Qué estoy diciendo?", ["Mi edad", "Mi color favorito", "Dónde vivo", "Mi materia"], 2, "El barrio es el lugar donde vivo con mi familia.", "Es parte de ubicarme en el entorno."],
      ["¿Con quién puedo hablar de mis datos personales?", ["Con cualquiera en la calle", "Con mi familia y personas de confianza", "Con desconocidos", "Nadie nunca"], 1, "Solo las personas de confianza reciben mi dirección.", "Es una regla de seguridad."],
      ["Si me pierdo en la plaza, ¿qué hago?", ["Busco un adulto de confianza: policía, maestra o madre", "Me quedo llorando sin buscar", "Sigo solo a otro lugar", "Le pregunto a cualquiera"], 0, "Pedir ayuda a personal identificado es lo correcto.", "La policía y los maestros ayudan."],
      ["Saludar a las personas de mi barrio es:", ["una costumbre amable de convivencia", "una tarea obligada", "un castigo", "algo que no sirve"], 0, "El saludo crea buen ambiente en el entorno cotidiano.", "Un buenos días transforma el día."],
      ["¿Qué información NO debo dar a un desconocido?", ["Mi edad", "Mi dirección y teléfono", "Mi color favorito", "Mi juego favorito"], 1, "Dirección y teléfono son datos privados y sensibles.", "Menos información, más seguridad."],
      ["Mi escuela está en el barrio La Esperanza. ¿Dónde estudio?", ["En la plaza", "En el mercado", "En el barrio La Esperanza", "En el río"], 2, "La frase dice claramente dónde queda mi escuela.", "Lea el lugar que aparece."],
      ["Al presentarme en clase, puedo decir:", ["Nada de mí", "El número de mi casa a gritos", "La contraseña de mi mamá", "Mi nombre y de qué me gusta jugar"], 3, "Compartir intereses sin datos privados es lo adecuado.", "Suficiente para que me conozcan."],
    ],
    cl: {
      c: [
        ["dad", "ES UN DATO PERSONAL", "🗂️"],
        ["int", "ES UN DATO DE INTERÉS", "📌"],
      ],
      i: [
        ["mi nombre", "dad"],
        ["mi edad", "dad"],
        ["mi barrio", "dad"],
        ["mi juego favorito", "int"],
        ["mi color favorito", "int"],
        ["mi animal favorito", "int"]
      ]
    },
    em: [
      ["me llamo", "nombre"],
      ["tengo 6 años", "edad"],
      ["dónde vivo", "barrio"],
      ["seguridad", "adulto de confianza"]
    ],
    or: [
      "Saludo a la persona.",
      "Digo mi nombre y mi edad.",
      "Cuento dónde vivo y dónde estudio.",
      "Respondo solo lo necesario y seguro."
    ],
    e: ["Escribe cómo te presentas en una frase.", "Me llamo Mateo, tengo 6 años y voy a primero.", 3],
  },
  {
    n: "Normas de mi salón",
    o: "Conozco y aplico las normas que hacen de mi salón un lugar para aprender.",
    d: "DBA: respeta las normas de convivencia básica en su entorno escolar.",
    t: [
      ["Las normas ayudan", "Las normas del salón no son castigos: sirven para que todos podamos aprender y jugar.", "📋"],
      ["Levanto la mano", "Cuando quiero participar, levanto la mano y espero mi turno para hablar.", "✋"],
      ["Cuido lo que es de todos", "Los materiales y el salón son de todos; los cuido y los devuelvo a su lugar.", "🧹"],
    ],
    q: [
      ["Cuando quiero participar en clase, primero:", ["le quito el turno al otro", "grito fuerte", "me paro y corro", "levanto la mano"], 3, "Levantar la mano respeta al que habla y al maestro.", "La maestra luego me da la palabra."],
      ["¿Qué hago cuando suena el timbre y entra la maestra?", ["Me siento y me acomodo", "Sigo jugando de pie", "Salgo corriendo", "Me acuesto en el piso"], 0, "Al entrar la maestra me acomodo para iniciar la clase.", "Es el momento de empezar."],
      ["Correr dentro del salón:", ["es lo mejor siempre", "puede hacer que me caiga o lastime a otro", "es una norma", "ayuda a aprender"], 1, "El salón es espacio para estar sentados; correr es en el recreo.", "Los golpes no son deseables."],
      ["¿Qué hago con los lápices del salón?", ["Los rompo", "Me los llevo sin avisar", "Los uso y los devuelvo a su lugar", "Los escondo"], 2, "Los materiales son de todos y se comparten devolviéndolos.", "Compartir es convivencia."],
      ["Si mi compañero tiene una duda mientras habla, yo:", ["espero mi turno para responder", "le grito encima", "le quito el cuaderno", "me río de él"], 0, "Esperar el turno evita interrupciones y hace el salón más amable.", "Todos aprenden mejor así."],
      ["Al terminar la clase, debo:", ["romper el papel", "dejar todo tirado", "irme sin mirar", "ordenar mi puesto y guardar mis útiles"], 3, "Dejar el puesto listo ayuda al siguiente y a mí mismo.", "Ordenar también es aprender."],
      ["En el recreo, ¿dónde juego?", ["En la cocina", "Donde no haya normas", "En el lugar señalado y con mis compañeros", "Subido a los mesones"], 2, "Los espacios señalados están pensados para mi seguridad.", "Las normas también protegen."],
      ["Un compañero espera su turno para usar la tijera. ¿Qué hago?", ["Se la quito", "Le paso la tijera", "Escondo la tijera", "La rompo"], 1, "Esperar y compartir el material respeta al otro.", "A mí también me gusta que me esperen."],
      ["¿Cuándo puedo hablar en clase?", ["Todo el tiempo", "Cuando la maestra me da el turno", "Nunca", "Solo de noche"], 1, "El turno permite escuchar y ser escuchado.", "Levanto la mano y espero."],
      ["Llegar tarde a clase afecta porque:", ["no afecta nada", "es una recompensa", "pierdo el inicio y molesto a los demás", "me hace más grande"], 2, "La puntualidad cuida el tiempo propio y el de todos.", "Salgo temprano de casa."],
      ["¿Qué norma ayuda a mantener limpio el salón?", ["Dibujar en las paredes", "Tirar papeles al piso", "Comer en el salón sin avisar", "Tirar la basura en su cesto"], 3, "Tirar la basura en su lugar mantiene un ambiente sano.", "El cesto es para la basura."],
      ["Si incumplo una norma, lo correcto es:", ["asumir mi error y corregir", "esconderme siempre", "echar la culpa al otro", "romper algo"], 0, "Reconocer el error y corregir es madurar en la convivencia.", "Corregir también es aprender."],
    ],
    cl: {
      c: [
        ["hac", "ES UNA CONDUCTA CORRECTA", "🗂️"],
        ["no", "ES UNA CONDUCTA INCORRECTA", "📌"],
      ],
      i: [
        ["levantar la mano", "hac"],
        ["guardar los materiales", "hac"],
        ["escuchar al compañero", "hac"],
        ["llegar puntual", "hac"],
        ["correr en el salón", "no"],
        ["gritar en clase", "no"],
        ["tirar papel al piso", "no"],
        ["quitar los útiles", "no"]
      ]
    },
    em: [
      ["levantar la mano", "participar con turno"],
      ["guardar útiles", "orden"],
      ["tirar basura al cesto", "limpieza"]
    ],
    or: [
      "Recuerdo la norma del salón.",
      "Pienso en cómo ayuda a todos.",
      "La cumplo en el momento.",
      "Reviso cómo quedó mi puesto y el salón."
    ],
    e: ["Escribe una norma de tu salón.", "En el salón no se corre, se camina.", 3],
  },
  {
    n: "Juego con los demás",
    o: "Comparto, espero mi turno y resuelvo conflictos sin golpes.",
    d: "DBA: respeta las normas de convivencia básica al jugar con sus compañeros.",
    t: [
      ["Compartir es amable", "Si tengo dos pelotas, juego con un amigo. Compartir hace el recreo más divertido.", "🤝"],
      ["Espero mi turno", "En el tobogán espero mi vez; todos queremos pasar y el turno hace justicia.", "⏳"],
      ["Resuelvo sin golpes", "Si discutimos, hablo, cedo o busco un adulto. Los golpes nunca son la solución.", "☮️"],
    ],
    q: [
      ["Tengo un juguete y mi amiga quiere jugar. ¿Qué hago?", ["Compartimos o le toca después", "Se lo quito", "Le grito", "Lo rompo"], 0, "Compartir y turnar permite que ambos se diviertan.", "El juguete es para todos."],
      ["En el columpio solo cabe un niño. ¿Qué hago?", ["Empujo al otro", "Espero mi turno", "Me subo encima", "Grito para que se baje"], 1, "Esperar el turno respeta a los demás y evita accidentes.", "Mi turno llegará."],
      ["Un compañero se cae en el recreo. ¿Qué hago?", ["Lo empujo otra vez", "Me río de él", "Le ayudo y busco a un adulto", "Me voy"], 2, "Ayudar y avisar es la conducta de un buen amigo.", "Todos podemos lastimarnos."],
      ["¿Cómo inicio a jugar con un grupo que ya juega?", ["Los molesto", "Entro corriendo y quito el balón", "Grito", "Pregunto si puedo participar"], 3, "Pedir permiso integra y respeta el juego en curso.", "La pregunta abre puertas."],
      ["Mi compañero no me pasa la pelota. ¿Qué hago?", ["Le doy un empujón", "Le digo con calma que la necesito", "Le rompo el juguete", "Lo insulto"], 1, "Hablar con calma es más efectivo que los golpes.", "Las palabras arreglan."],
      ["En un juego, un equipo tiene más niños que el otro. ¿Qué hacemos?", ["Repartimos los jugadores parejos", "Ganamos siempre", "No jugamos", "Escondemos a alguien"], 0, "Equipos parejos hacen el juego más justo y divertido.", "La igualdad mejora el partido."],
      ["¿Qué hago si pierdo un juego?", ["No juego más", "Lloro y rompo algo", "Golpeo al otro", "Felicito al ganador y vuelvo a intentar"], 3, "Perder también se acepta con alegría y aprendo para la próxima.", "Hasta los campeones pierden."],
      ["Un niño no quiere jugar conmigo. ¿Qué hago?", ["Le quito su mochila", "Lo golpeo", "Busco con quién más jugar", "Me siento a llorar todo el día"], 2, "Buscar otros amigos es una solución madura.", "Siempre hay más grupos para jugar."],
      ["Al terminar de jugar con algo prestado, lo devuelvo:", ["escondido", "roto", "como estaba y agradeciendo", "sin decir nada"], 2, "Devolver en buen estado y agradecer sostiene la confianza.", "Así me prestarán otra vez."],
      ["Dos amigos discuten por un balón. ¿Qué pueden hacer?", ["Gritar sin parar", "Pelear", "Romper el balón", "Turnarse o buscar otro juego"], 3, "Turnarse y buscar alternativas resuelve sin lastimar.", "Hay muchas formas de jugar."],
      ["¿Qué juego es mejor para el salón?", ["Los que no rompen cosas ni lastiman", "Los que empujan", "Los que gritan mucho", "Los que usan tijeras corriendo"], 0, "Los juegos seguros cuidan a todos.", "En el salón se juega tranquilo."],
      ["Cuando juego, debo cuidar que:", ["yo siempre gane", "nadie se lastime", "nadie juegue", "todo se rompa"], 1, "Cuidar al otro es la base de una buena convivencia.", "Todos salimos enteros y felices."],
    ],
    cl: {
      c: [
        ["buen", "ES BUENA CONVIVENCIA", "🗂️"],
        ["mal", "NO ES BUENA CONVIVENCIA", "📌"],
      ],
      i: [
        ["compartir el juguete", "buen"],
        ["esperar el turno", "buen"],
        ["ayudar al que se cae", "buen"],
        ["felicitar al ganador", "buen"],
        ["empujar para pasar", "mal"],
        ["quitar el balón", "mal"],
        ["reírse del otro", "mal"],
        ["pelear por un juguete", "mal"]
      ]
    },
    em: [
      ["turno", "esperar"],
      ["compartir", "diversión"],
      ["hablar", "solución"],
      ["golpes", "nunca"]
    ],
    or: [
      "Pienso en cómo se siente el otro.",
      "Hablo con calma o cedo el turno.",
      "Busco una solución donde todos ganen.",
      "Si no puedo, pido ayuda a un adulto."
    ],
    e: ["Escribe cómo resuelves una discusión con un amigo.", "Le hablo con calma y nos turnamos para jugar.", 3],
  },
  {
    n: "Por favor, gracias y perdón",
    o: "Uso palabras de cortesía y reconozco cuándo debo pedir perdón.",
    d: "DBA: respeta las normas de convivencia básica con palabras amables.",
    t: [
      ["Palabras que abren", "Buenos días, por favor, gracias y permiso hacen que las conversaciones sean agradables.", "💛"],
      ["Cuándo pedir perdón", "Si lastimo a alguien sin querer, pido perdón de corazón y trato de no repetirlo.", "🙏"],
      ["Reconozco el esfuerzo", "Agradezco a quien me ayuda: a mamá, a la maestra y a mi compañero.", "🙌"],
    ],
    q: [
      ["¿Qué digo cuando alguien me pasa algo?", ["Nada", "Gracias", "Adiós", "Pronto"], 1, "El agradecimiento reconoce la ayuda del otro.", "Es una palabra corta y potente."],
      ["Al entrar a un lugar, digo:", ["Golpeo sin avisar", "Nada", "Buenos días o permiso", "Corro sin mirar"], 2, "Saludar y pedir permiso es parte de la cortesía.", "Primero el saludo, después entro."],
      ["Si empujo a un compañero sin querer, debo:", ["reírme", "esconderme", "decir que fue culpa suya", "pedir perdón y ayudarlo"], 3, "Pedir perdón repara el daño y cuida la amistad.", "Todos nos equivocamos alguna vez."],
      ["¿Qué palabra uso para pedir que me ayuden?", ["Por favor", "Ya", "Nunca", "Adiós"], 0, "Por favor suaviza el pedido.", "Sin por favor, el pedido suena duro."],
      ["Cuando alguien me dice gracias, yo respondo:", ["Me río", "Grito", "De nada", "Me voy"], 2, "De nada cierra el intercambio amable.", "Es la pareja natural de gracias."],
      ["¿En qué momento digo buenos días?", ["Solo de noche", "Al llegar y encontrarme con alguien", "Nunca", "Cuando estoy triste"], 1, "El saludo marca el encuentro cotidiano.", "Sirve en casa, en la escuela y en la plaza."],
      ["Pedir perdón de verdad implica:", ["reconocer el error y no repetirlo", "decirlo rápido sin pensar", "culpar al otro", "esconderse"], 0, "El perdón verdadero cambia la conducta después.", "La palabra sin cambio no alcanza."],
      ["Si llego tarde a la mesa, digo:", ["Corro a la silla", "Nada", "Yo no tengo hambre", "Disculpen, ya llegué"], 3, "Disculparme reconoce la espera de los demás.", "Los otros también estaban esperando."],
      ["Agradezco la comida diciendo:", ["Nada de nada", "Ya", "Más rápido", "Gracias por la comida"], 3, "Agradecer la comida reconoce el trabajo de quien cocinó.", "Detrás de cada plato hay esfuerzo."],
      ["Si un compañero se disculpa conmigo, yo:", ["acepto y le doy la mano", "lo insulto", "le doy un empujón", "lo ignoro para siempre"], 0, "Aceptar el perdón repara la amistad.", "Todos merecemos una segunda oportunidad."],
      ["Decir permiso antes de pasar es:", ["una obligación pesada", "cortesía con los demás", "algo que no sirve", "un castigo"], 1, "Permiso reconoce el espacio y el tiempo del otro.", "Así no molesto a nadie."],
      ["¿Cuál es la pareja de por favor?", ["Pronto", "Adiós", "Gracias", "Silencio"], 2, "Pedimos con por favor y agradecemos con gracias.", "Van juntas en la conversación."],
    ],
    cl: {
      c: [
        ["sal", "PALABRA DE SALUDO", "🗂️"],
        ["agi", "PALABRA DE AGRADECIMIENTO O DISCULPA", "📌"],
      ],
      i: [
        ["buenos días", "sal"],
        ["buenas tardes", "sal"],
        ["buenas noches", "sal"],
        ["gracias", "agi"],
        ["por favor", "agi"],
        ["perdón", "agi"],
        ["disculpen", "agi"]
      ]
    },
    em: [
      ["por favor", "al pedir"],
      ["gracias", "al recibir ayuda"],
      ["perdón", "al equivocarme"],
      ["de nada", "al agradecer"]
    ],
    or: [
      "Pienso en lo que voy a decir.",
      "Elijo la palabra adecuada: por favor, gracias o perdón.",
      "La digo con voz clara y mirando al otro.",
      "Compruebo que el otro se sienta bien."
    ],
    e: ["Escribe una oración con las palabras por favor y gracias.", "Por favor, me pasas el lápiz. Gracias.", 3],
  },
  {
    n: "Mi camino a la escuela",
    o: "Reconozco el camino de mi casa a la escuela y lo hago con seguridad.",
    d: "DBA: se orienta en su entorno cotidiano conociendo su ruta y sus cuidados.",
    t: [
      ["Mi ruta", "De mi casa a la escuela paso por la esquina, la tienda y el parque. Esa es mi ruta.", "🗺️"],
      ["Puntos de referencia", "Los referentes son lugares que reconozco: el semáforo, la plaza y el puente del río.", "🚦"],
      ["Siempre con un adulto", "Camino de la mano de un adulto, cruzo en la esquina y no hablo con desconocidos.", "🧓"],
    ],
    q: [
      ["¿Con quién camino de la casa a la escuela?", ["Con un desconocido", "Solo siempre", "Con un adulto de confianza", "Corriendo adelante"], 2, "Un adulto me cuida al cruzar y en el camino.", "La seguridad es lo primero."],
      ["Para cruzar la calle, debo hacerlo:", ["con los ojos cerrados", "corriendo sin mirar", "por el medio", "en la esquina y mirando ambos lados"], 3, "La esquina es el lugar seguro para cruzar.", "Miro a la derecha, a la izquierda y otra vez."],
      ["El semáforo en rojo indica:", ["esperar y no cruzar", "caminar rápido", "jugar en la calle", "correr sin mirar"], 0, "En rojo los carros se detienen y yo espero.", "Espero a que quede en verde."],
      ["¿Qué hago si no reconozco el camino?", ["Sigo corriendo a cualquier lado", "Pregunto a un adulto de confianza y me quedo donde estoy", "Cambio de ruta solo", "Me siento en cualquier carro"], 1, "Pedir ayuda evita perderme.", "Me quedo en un lugar visible."],
      ["En mi ruta paso por el parque. Eso es:", ["una tarea", "un color", "un sonido", "un punto de referencia"], 3, "Los referentes me ayudan a ubicarme en el camino.", "Los lugares marcan la ruta."],
      ["Si un desconocido me ofrece llevarme en su carro:", ["me subo rápido", "acepto si es amable", "no acepto y busco a un adulto", "acepto si tiene dulces"], 2, "Nunca debo aceptar llevarme con desconocidos, aunque sean amables.", "Mi familia me espera."],
      ["Cruzar en la esquina es mejor porque:", ["es más lento", "los carros frenan y veo mejor", "no hay semáforo nunca", "no sirve de nada"], 1, "Desde la esquina veo y me ven los conductores.", "Es el punto diseñado para peatones."],
      ["Camino por la acera, no por la calle, porque:", ["la calle es para los carros", "es más bonito", "ahí juego mejor", "no hay aceras"], 0, "La acera protege a los peatones.", "Cada espacio tiene su uso."],
      ["Salgo a la misma hora todos los días porque:", ["llego puntual y mi ruta es más segura", "para perder el tiempo", "porque no hay reloj", "no cambia nada"], 0, "La rutina y la puntualidad facilitan el camino.", "Además, camino con más calma."],
      ["Si llueve mucho en el camino:", ["corro por la calle", "espero con un adulto en un lugar seguro", "me meto a cualquier casa", "sigo igual sin cuidado"], 1, "Un lugar cubierto y con un adulto es lo más seguro.", "La lluvia resbala y baja la visión."],
      ["Mi escuela queda cerca del mercado. ¿Dónde está mi escuela?", ["En la montaña lejana", "En el río", "Cerca del mercado", "En otra ciudad"], 2, "La frase indica un referente cercano a la escuela.", "Los referentes orientan."],
      ["¿Qué le digo a mi mamá si me atraso en el camino?", ["Me escondo", "No le digo nada", "Sigo sin avisar", "La espero o busco un adulto para avisarle"], 3, "Avisar evita preocupación y mantiene mi seguridad.", "Los adultos necesitan saber dónde estoy."],
    ],
    cl: {
      c: [
        ["ref", "ES UN PUNTO DE REFERENCIA", "🗂️"],
        ["seg", "ES UN CUIDADO EN LA RUTA", "📌"],
      ],
      i: [
        ["el parque", "ref"],
        ["la tienda de la esquina", "ref"],
        ["la plaza", "ref"],
        ["el puente del río", "ref"],
        ["cruzar en la esquina", "seg"],
        ["ir de la mano de un adulto", "seg"],
        ["caminar en la acera", "seg"],
        ["esperar el semáforo", "seg"]
      ]
    },
    em: [
      ["semáforo rojo", "esperar"],
      ["acera", "camino para peatones"],
      ["referente", "lugar que reconozco"]
    ],
    or: [
      "Salgo con un adulto a la hora acordada.",
      "Sigo mi ruta y reconozco los referentes.",
      "Cruzo en la esquina mirando a los dos lados.",
      "Llego a la escuela y saludo a los demás."
    ],
    e: ["Escribe dos lugares por donde pasas en tu camino a la escuela.", "Paso por la tienda y por el parque.", 3],
  },
  {
    n: "Derecha, izquierda y alrededor",
    o: "Uso palabras de ubicación para orientarme en el salón y en la plaza.",
    d: "DBA: se orienta en su entorno cotidiano usando nociones de espacio.",
    t: [
      ["Mi derecha e izquierda", "Con la mano derecha señalo a un lado y con la izquierda al otro. Así me oriento.", "👉"],
      ["Arriba, abajo, cerca y lejos", "El pizarrón está arriba, el piso abajo; mi mesa está cerca y el árbol lejos.", "↕️"],
      ["Mi alrededor", "Alrededor mío están mis compañeros, la maestra y las paredes del salón.", "🔁"],
    ],
    q: [
      ["¿Con qué mano escribo la mayoría de las personas?", ["Ninguna", "La izquierda", "Las dos igual", "La derecha"], 3, "Muchas personas escriben con la derecha; otras con la izquierda, y está bien.", "Observa cuál usas tú."],
      ["Mi escritorio está delante de mí y la pizarra está:", ["al frente", "atrás", "dentro de la mochila", "en mi mano"], 0, "Al frente es hacia donde miro al escuchar a la maestra.", "Gira la cabeza hacia el pizarrón."],
      ["El piso está:", ["arriba", "abajo", "al lado del techo", "en el cielo"], 1, "El piso es la parte baja del salón; el techo va arriba.", "Piso abajo, techo arriba."],
      ["El techo del salón está:", ["cerca de mis pies", "abajo", "arriba", "en mi pupitre"], 2, "El techo cubre el salón por arriba.", "Lo miro cuando levanto la cabeza."],
      ["¿Qué significa cerca?", ["A poca distancia", "Muy lejos", "En otra ciudad", "Arriba del cielo"], 0, "Cerca es poca distancia; lejos es mucha.", "Mi lápiz está cerca de mi mano."],
      ["¿Qué significa lejos?", ["Sobre mi mesa", "Muy cerca", "Dentro de mi mochila", "A mucha distancia"], 3, "Lejos indica gran distancia.", "El árbol del parque está lejos."],
      ["Si la puerta está a mi derecha, ¿hacia dónde giro?", ["Hacia arriba", "Hacia la izquierda", "Hacia la derecha", "Hacia atrás"], 2, "Giro hacia el lado de mi mano derecha.", "Señale con esa mano y siga la dirección."],
      ["A mi alrededor en el salón están:", ["solo mi mamá", "mis compañeros y la maestra", "los peces del río", "ninguna persona"], 1, "Alrededor es lo que está en círculo alrededor de mí.", "Gire la cabeza y observe."],
      ["La maestra está delante y yo estoy:", ["en el techo", "detrás o en mi sitio", "fuera de la tierra", "dentro del armario"], 1, "Si ella está al frente, yo estoy en mi lugar mirándola.", "Cada uno tiene su puesto."],
      ["Mi mochila está abajo, colgada de:", ["el cielo", "el techo", "mi silla", "la lámpara"], 2, "Abajo, en la silla o en el piso, es donde apoyo mi mochila.", "No cuelga de arriba."],
      ["Si estoy en el centro del salón, ¿qué tengo en todo el borde?", ["Nada", "El mar", "Una montaña", "Mis compañeros y paredes"], 3, "El centro es el medio; alrededor está todo lo demás.", "Imagine un círculo con usted en medio."],
      ["Al dar instrucciones digo: gira a la izquierda. ¿Qué hago?", ["Giro hacia el lado izquierdo", "Me siento", "Salto", "Me quedo quieto"], 0, "La instrucción indica dirección clara para moverme.", "Sígala despacio y en el lugar seguro."],
    ],
    cl: {
      c: [
        ["arr", "ESTÁ ARRIBA", "🗂️"],
        ["aba", "ESTÁ ABAJO", "📌"],
      ],
      i: [
        ["el techo", "arr"],
        ["el pizarrón", "arr"],
        ["la lámpara", "arr"],
        ["el piso", "aba"],
        ["la base de la silla", "aba"],
        ["mi mochila en el suelo", "aba"]
      ]
    },
    em: [
      ["derecha", "lado de la mano derecha"],
      ["izquierda", "lado contrario"],
      ["cerca", "poca distancia"],
      ["lejos", "mucha distancia"]
    ],
    or: [
      "Me ubico en mi lugar.",
      "Identifico mi derecha e izquierda.",
      "Observo dónde está cada objeto.",
      "Describo la ubicación con palabras claras."
    ],
    e: ["Escribe dónde está algo de tu salón usando cerca, lejos, arriba o abajo.", "El pizarrón está arriba y el piso abajo.", 3],
  },
  {
    n: "Mi barrio y sus lugares",
    o: "Identifico los lugares de mi barrio y sé para qué sirve cada uno.",
    d: "DBA: se orienta en su entorno cotidiano conociendo su barrio y sus servicios.",
    t: [
      ["Lugares del barrio", "En mi barrio hay plaza, tienda, mercado, parque, biblioteca y centro de salud.", "🏘️"],
      ["Para qué sirve cada lugar", "En la tienda compro, en el parque juego y en el centro de salud me atienden.", "🧩"],
      ["Cuidamos el barrio", "Tiro la basura en su lugar, respeto los juegos y trato bien a mis vecinos.", "💚"],
    ],
    q: [
      ["¿Dónde juego en mi barrio?", ["En el parque", "En el mercado", "En la panadería", "En la avenida"], 0, "El parque es el espacio del barrio diseñado para jugar.", "Tiene columpios y áreas verdes."],
      ["¿Dónde compro frutas y verduras?", ["En la escuela", "En el mercado", "En el río", "En el salón"], 1, "El mercado es el lugar para comprar alimentos.", "Allí hay puestos con productos."],
      ["Si me duele el estómago, mi familia me lleva:", ["a la panadería", "al parque", "al centro de salud", "a la plaza"], 2, "El centro de salud atiende cuando alguien se enferma.", "Ahí trabajan los profesionales de la salud."],
      ["¿Dónde puedo pedir un cuento prestado?", ["En la avenida", "En el mercado", "En el estadio", "En la biblioteca"], 3, "La biblioteca presta libros y cuenta con historias.", "También es un lugar tranquilo para leer."],
      ["La plaza del barrio sirve para:", ["dormir siempre", "encontrarse con los vecinos y pasear", "conducir carros", "tirar basura"], 1, "La plaza es punto de encuentro y paseo en muchas comunidades colombianas.", "Allí se encuentran los vecinos y se hacen fiestas."],
      ["Mi vecino me saluda y yo:", ["le devuelvo el saludo amablemente", "lo ignoro", "le grito", "me río"], 0, "Responder el saludo crea buen ambiente entre vecinos.", "La cortesía es bidireccional."],
      ["¿Qué hago con la basura en mi barrio?", ["Dejo que vuele", "La tiro al piso", "La lanzo al río", "La tiro en su cesto"], 3, "Tirar la basura en su lugar mantiene limpio el barrio.", "El río no es un basurero."],
      ["El semáforo del barrio está en la:", ["habitación", "cocina", "esquina o cruce", "azotea"], 2, "El semáforo regula el tráfico en las esquinas.", "Ayuda a cruzar con seguridad."],
      ["¿Dónde viven las personas en el barrio?", ["En el parque", "En la tienda", "En casas o apartamentos", "En el mercado"], 2, "Las viviendas son casas y apartamentos donde vive la gente.", "Es el lugar de descanso."],
      ["Si mi amigo vive al otro lado del barrio, para verlo debo:", ["cambiar de barrio", "ir solo sin avisar", "brincar los techos", "pedir que me acompañen a su casa"], 3, "Las visitas se coordinan con un adulto.", "La seguridad también vale en el barrio."],
      ["¿Cuál NO es un lugar del barrio?", ["El color azul", "La plaza", "La tienda", "El parque"], 0, "El color azul no es un lugar, es un color.", "Los lugares se encuentran en un mapa."],
      ["Ayudar a mi barrio se ve cuando:", ["pinto las paredes sin permiso", "tiro la basura y cuido los espacios", "juego en la avenida", "golpeo los árboles"], 1, "Cuidar los espacios comunes es aportar a la comunidad.", "El barrio también es de todos."],
    ],
    cl: {
      c: [
        ["com", "ES UN LUGAR PARA COMPRAR", "🗂️"],
        ["enc", "ES UN LUGAR PARA ENCONTRARSE O JUGAR", "📌"],
      ],
      i: [
        ["la tienda", "com"],
        ["el mercado", "com"],
        ["la panadería", "com"],
        ["la plaza", "enc"],
        ["el parque", "enc"],
        ["la cancha", "enc"]
      ]
    },
    em: [
      ["parque", "jugar"],
      ["mercado", "comprar"],
      ["biblioteca", "leer"],
      ["centro de salud", "atenderse"]
    ],
    or: [
      "Miro el mapa o paseo por el barrio.",
      "Identifico los lugares importantes.",
      "Digo para qué sirve cada lugar.",
      "Pienso cómo puedo cuidar mi barrio."
    ],
    e: ["Escribe dos lugares de tu barrio y para qué sirven.", "En el parque juego y en la tienda compro.", 3],
  },
];

/* ====== g1 / ingles ====== */
/* DBA 1º — ingles */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.ingles = [
  {
    n: "Good Morning — Buenos días",
    o: "Saludo en inglés según la hora del día con palabras sencillas.",
    d: "DBA: comprende saludos básicos en inglés dentro del aula.",
    t: [
      ["Good Morning — Buenos días", "Decimos Good morning cuando llegamos en la mañana, antes del mediodía.", "🌅"],
      ["Hello — Hola", "Hello es el saludo más simple. Se puede usar en cualquier momento del día.", "👋"],
      ["Nice to meet you — Mucho gusto", "Cuando conozco a alguien nuevo, digo Hello y después Nice to meet you.", "🤝"],
    ],
    q: [
      ["¿Cómo saludas en inglés cuando es de mañana?", ["Good morning", "Good night", "Goodbye", "Good afternoon"], 0, "Good morning significa buenos días y se usa en la mañana.", "Piense en la hora en que llega a la escuela."],
      ["Good morning significa:", ["Buenas noches", "Buenos días", "Buenas tardes", "Adiós"], 1, "Good es bueno y morning es mañana: buenos días.", "Morning es la primera parte del día."],
      ["¿A qué hora se dice Good afternoon?", ["Antes de levantarse", "En la noche", "Por la tarde", "Nunca"], 2, "Good afternoon se usa después del mediodía y antes de la noche.", "Es cuando el sol ya pasó."],
      ["¿Cómo se dice hola en inglés?", ["Goodbye", "Thank you", "Please", "Hello"], 3, "Hello es la palabra inglesa para hola.", "Es el saludo más corto."],
      ["Llego a la escuela en la mañana y saludo a mi amiga con:", ["Good night", "Good morning", "Goodbye", "See you"], 1, "En la mañana el saludo correcto es Good morning.", "Es la hora de la llegada."],
      ["Good night se dice cuando:", ["me voy a dormir", "llego a la escuela", "almuerzo", "juego en el parque"], 0, "Good night es para la noche, antes de dormir.", "Es el saludo de las buenas noches."],
      ["¿Cuál saludo corresponde a la tarde?", ["Goodbye", "Good morning", "Good night", "Good afternoon"], 3, "Afternoon es la tarde, así que se dice Good afternoon.", "Afternoon va después del mediodía."],
      ["En inglés, buenas noches es:", ["Good afternoon", "Good morning", "Good night", "Good day"], 2, "Good night traduce buenas noches.", "Night es noche."],
      ["La maestra llega por la mañana y dice:", ["Goodbye!", "Good night!", "Good morning, class!", "Thank you!"], 2, "Por la mañana el saludo de la maestra es Good morning.", "Class es la clase, los estudiantes."],
      ["Si alguien te dice Good morning, respondes:", ["Goodbye!", "Good night!", "No!", "Good morning!"], 3, "Es cortés devolver el mismo saludo.", "El saludo se devuelve igual."],
      ["Nice to meet you significa:", ["Mucho gusto", "Adiós", "Gracias", "Por favor"], 0, "Se dice cuando conocemos a una persona nueva.", "Es amable al presentarnos."],
      ["Good afternoon se usa:", ["en la madrugada", "después del mediodía", "al dormir", "al despedirse para siempre"], 1, "La tarde va desde después del mediodía hasta la noche.", "Es la hora del almuerzo."],
    ],
    cl: {
      c: [
        ["sal", "SALUDO — GREETING", "👋"],
        ["des", "DESPEDIDA — GOODBYE", "📌"],
      ],
      i: [
        ["Good morning", "sal"],
        ["Hello", "sal"],
        ["How are you?", "sal"],
        ["Goodbye", "des"],
        ["See you later", "des"],
        ["Good night", "des"]
      ]
    },
    em: [
      ["Good morning", "Buenos días"],
      ["Hello", "Hola"],
      ["Nice to meet you", "Mucho gusto"],
      ["Good afternoon", "Buenas tardes"]
    ],
    or: [
      "Say: Good morning!",
      "Smile and wave your hand.",
      "Listen to the answer.",
      "Say: Nice to meet you!"
    ],
    e: ["Escribe en inglés un saludo para la mañana.", "Good morning!", 3],
  },
  {
    n: "How Are You? — ¿Cómo estás?",
    o: "Pregunto y respondo cómo estoy en inglés con frases muy cortas.",
    d: "DBA: comprende saludos básicos y frases cortas de uso diario en el aula.",
    t: [
      ["How Are You? — ¿Cómo estás?", "Esta pregunta se hace después del saludo para saber cómo se siente la otra persona.", "❓"],
      ["I'm Fine — Estoy bien", "Respondo I'm fine, thank you. Es la respuesta corta y amable.", "😊"],
      ["And You? — ¿Y tú?", "Después pregunto And you? para saber cómo está mi amigo. La conversación sigue.", "🔁"],
    ],
    q: [
      ["How are you? pregunta:", ["cómo te llamas", "cómo estás", "cuántos años tienes", "dónde vives"], 1, "How are you es la pregunta clásica para saber cómo estás.", "How es cómo y are you es estás."],
      ["La respuesta corta a How are you? es:", ["Goodbye", "Good night", "I'm fine, thank you", "Yes, please"], 2, "I'm fine, thank you significa estoy bien, gracias.", "Es la respuesta de cortesía."],
      ["I'm fine significa:", ["tengo hambre", "estoy triste", "soy muy grande", "estoy bien"], 3, "Fine quiere decir bien.", "I'm es yo estoy."],
      ["¿Cómo respondes a How are you? y preguntas de vuelta?", ["I'm fine, thank you. And you?", "Goodbye", "Good morning", "My name is Ana"], 0, "Se responde y se devuelve la pregunta con And you.", "Así ambos hablan."],
      ["And you? significa:", ["¿qué hora es?", "¿y usted?", "¿y tú?", "¿dónde estás?"], 2, "And es y, you es tú: ¿y tú?", "Se usa para devolver la pregunta."],
      ["Si estás contento, dices:", ["I'm sad", "I'm happy", "Goodbye", "Thank you"], 1, "Happy es contento, así que digo I'm happy.", "La emoción va con I'm."],
      ["Thank you significa:", ["gracias", "por favor", "perdón", "hola"], 0, "Thank you es la forma de agradecer en inglés.", "Se dice después de recibir algo."],
      ["Please significa:", ["buenas noches", "gracias", "adiós", "por favor"], 3, "Please es la palabra para pedir con cortesía.", "Va junto a los pedidos."],
      ["Si estás triste, dices:", ["I'm here", "I'm fine", "Good night", "I'm sad"], 3, "Sad es triste: I'm sad.", "Es bueno decir cómo nos sentimos."],
      ["¿Cuál es una respuesta corta a How are you?", ["Fine, thanks", "Goodbye", "Good morning", "Yes"], 0, "Fine, thanks es una versión corta de estoy bien, gracias.", "Sirve entre amigos."],
      ["I'm hungry significa:", ["tengo sed", "tengo hambre", "estoy triste", "tengo sueño"], 1, "Hungry es hambre.", "Después del juego puedo decirlo."],
      ["I'm tired significa:", ["estoy rápido", "estoy alegre", "estoy cansado", "estoy limpio"], 2, "Tired es cansado.", "Es lo que siento al final del día."],
    ],
    cl: {
      c: [
        ["bien", "ESTOY BIEN — I'M FINE", "😊"],
        ["mal", "ESTOY MAL O CANSADO", "😔"],
      ],
      i: [
        ["I'm fine", "bien"],
        ["I'm happy", "bien"],
        ["I'm OK", "bien"],
        ["I'm sad", "mal"],
        ["I'm tired", "mal"],
        ["I'm sick", "mal"]
      ]
    },
    em: [
      ["How are you?", "¿Cómo estás?"],
      ["I'm fine", "Estoy bien"],
      ["Thank you", "Gracias"],
      ["And you?", "¿Y tú?"]
    ],
    or: [
      "Say: How are you?",
      "Listen to the answer.",
      "Say: I'm fine, thank you.",
      "Ask: And you?"
    ],
    e: ["Escribe en inglés cómo estás hoy.", "I'm fine, thank you.", 3],
  },
  {
    n: "Goodbye — Adiós",
    o: "Me despido en inglés con palabras sencillas al terminar la clase o la visita.",
    d: "DBA: comprende saludos y despedidas básicas en situaciones del aula.",
    t: [
      ["Goodbye — Adiós", "Goodbye es la despedida formal. La digo cuando me voy de la escuela o de un lugar.", "👋"],
      ["Bye — Chao", "Bye es más corto e informal. Se usa entre amigos con mucha confianza.", "😄"],
      ["See You Tomorrow — Nos vemos mañana", "Esta frase promete que nos veremos de nuevo al día siguiente.", "🌅"],
    ],
    q: [
      ["Goodbye significa:", ["gracias", "hola", "adiós", "buenos días"], 2, "Goodbye es la palabra inglesa para adiós.", "Se dice al irse."],
      ["See you tomorrow significa:", ["muy temprano", "buenas noches", "hasta ayer", "nos vemos mañana"], 3, "Tomorrow es mañana y see you es nos vemos.", "Es una promesa de encuentro."],
      ["Termina la clase y me despido de la maestra con:", ["Goodbye, teacher!", "Good morning!", "Thank you!", "How are you?"], 0, "Al irme, lo correcto es despedirme con goodbye.", "Teacher es la maestra."],
      ["Bye es una despedida:", ["muy larga", "informal y corta", "de la mañana", "para presentarse"], 1, "Bye se usa entre amigos con confianza.", "Es la versión corta de goodbye."],
      ["En la noche, antes de dormir, digo:", ["Hello", "Good morning", "Good afternoon", "Good night"], 3, "Good night es el saludo nocturno para despedirse.", "Night es la noche."],
      ["¿Qué frase significa nos vemos luego?", ["Thank you", "Good morning", "See you later", "How are you?"], 2, "Later es luego: see you later es nos vemos luego.", "Se usa cuando nos separamos un rato."],
      ["¿Cuándo digo goodbye?", ["cuando llego", "cuando me voy", "cuando como", "cuando juego"], 1, "La despedida marca el momento de irse.", "Es lo contrario de hello."],
      ["Have a nice day significa:", ["que tengas un buen día", "buenas noches", "hasta mañana temprano", "por favor"], 0, "Nice es bonito o bueno y day es día.", "Es un deseo amable al despedirme."],
      ["Adiós en inglés es:", ["Goodbye", "Hello", "Thank you", "Good morning"], 0, "Goodbye traduce adiós.", "Es la despedida clásica."],
      ["A un amigo cercano le puedo decir:", ["Good night!", "Bye!", "Please!", "Good afternoon!"], 1, "Bye es informal y apto entre amigos.", "Es corto y amigable."],
      ["Me voy del salón y me despido de mis compañeros con:", ["I'm fine!", "Good morning!", "Goodbye, friends!", "How are you?"], 2, "Al salir, me despido de todos.", "Friends es amigos."],
      ["See you tomorrow se usa cuando:", ["pido ayuda", "llego a clase", "saludo en la mañana", "me despido para volver el día siguiente"], 3, "Promete un encuentro al día siguiente.", "Es una despedida con futuro."],
    ],
    cl: {
      c: [
        ["bye", "DESPEDIDA — GOODBYE", "👋"],
        ["hi", "SALUDO — GREETING", "📌"],
      ],
      i: [
        ["Goodbye", "bye"],
        ["Bye", "bye"],
        ["See you tomorrow", "bye"],
        ["Good night", "bye"],
        ["Hello", "hi"],
        ["Good morning", "hi"],
        ["How are you?", "hi"]
      ]
    },
    em: [
      ["Goodbye", "Adiós"],
      ["Bye", "Chao"],
      ["See you tomorrow", "Nos vemos mañana"],
      ["Good night", "Buenas noches"]
    ],
    or: [
      "Finish your activity.",
      "Say: Goodbye, teacher!",
      "Wave your hand.",
      "Say: See you tomorrow!"
    ],
    e: ["Escribe en inglés una despedida para tu amiga.", "Goodbye! See you tomorrow!", 3],
  },
  {
    n: "Primary Colors — Colores primarios",
    o: "Nombro en inglés los colores primarios y algunos colores básicos.",
    d: "DBA: comprende colores primarios en inglés con vocabulario básico.",
    t: [
      ["Primary Colors — Colores primarios", "Los colores primarios son rojo, azul y amarillo. Con ellos se hacen los demás colores.", "🎨"],
      ["Red, Blue, Yellow — Rojo, azul, amarillo", "Estas tres palabras las uso para nombrar mis colores favoritos en inglés.", "🔴🔵🟡"],
      ["Black and White — Negro y blanco", "Aunque no son primarios, black y white son colores muy fáciles de reconocer.", "⚫⚪"],
    ],
    q: [
      ["¿Cuáles son los colores primarios?", ["Rojo, verde y blanco", "Verde, blanco y negro", "Rosa, morado y café", "Rojo, azul y amarillo"], 3, "Rojo, azul y amarillo son los tres colores primarios.", "Con ellos se crean los demás."],
      ["Red significa:", ["rojo", "azul", "amarillo", "verde"], 0, "Red es rojo en inglés.", "Es el color de la sandía."],
      ["Blue significa:", ["verde", "azul", "rojo", "amarillo"], 1, "Blue es azul.", "Es el color del cielo de día."],
      ["Yellow significa:", ["rojo", "azul", "amarillo", "naranja"], 2, "Yellow es amarillo.", "Es el color del sol."],
      ["¿Cómo se dice verde en inglés?", ["Green", "Red", "Blue", "Black"], 0, "Green es verde.", "Es el color del pasto."],
      ["Black significa:", ["azul", "blanco", "rojo", "negro"], 3, "Black es negro.", "Es el color de la noche sin luna."],
      ["White significa:", ["amarillo", "negro", "blanco", "verde"], 2, "White es blanco.", "Es el color de la leche."],
      ["En inglés, el color del sol es:", ["Blue", "Yellow", "Black", "Green"], 1, "El sol se ve amarillo: yellow.", "Recuerde la palabra del sol."],
      ["¿Cuál NO es un color primario?", ["Rojo", "Morado", "Azul", "Amarillo"], 1, "Morado no es primario; rojo, azul y amarillo sí lo son.", "Piense en los tres primarios."],
      ["¿Cuál palabra es un color?", ["Chair", "Table", "Blue", "Book"], 2, "Blue es un color; las otras son cosas del salón.", "Traduzca cada palabra."],
      ["The sky is blue significa:", ["la flor es roja", "el sol es amarillo", "el agua es verde", "el cielo es azul"], 3, "Sky es cielo y blue es azul.", "Lea palabra por palabra."],
      ["El tomate en inglés es:", ["red", "blue", "yellow", "black"], 0, "El tomate es rojo: red.", "Es un color primario."],
    ],
    cl: {
      c: [
        ["pri", "COLOR PRIMARIO — PRIMARY", "🎨"],
        ["nop", "NO ES PRIMARIO", "📌"],
      ],
      i: [
        ["red", "pri"],
        ["blue", "pri"],
        ["yellow", "pri"],
        ["green", "nop"],
        ["black", "nop"],
        ["white", "nop"],
        ["morado", "nop"]
      ]
    },
    em: [
      ["red", "rojo"],
      ["blue", "azul"],
      ["yellow", "amarillo"],
      ["white", "blanco"]
    ],
    or: [
      "Look at the color.",
      "Say the color in English: red, blue or yellow.",
      "Repeat the word out loud.",
      "Point to something with that color."
    ],
    e: ["Escribe en inglés tres colores primarios.", "Red, blue, yellow", 3],
  },
  {
    n: "What Color? — ¿De qué color?",
    o: "Pregunto y respondo por colores en inglés con la frase It's.",
    d: "DBA: comprende colores primarios y pregunta por ellos en el aula.",
    t: [
      ["What Color Is It? — ¿De qué color es?", "Esta pregunta sirve para saber el color de cualquier cosa que miro.", "❓"],
      ["It's Red — Es rojo", "Respondo con It's más el color: It's red. It's es es o está.", "🟰"],
      ["More Colors — Más colores", "Además de los primarios, reconozco green, black, white, orange y pink.", "🌈"],
    ],
    q: [
      ["¿Cómo preguntas el color de tu mochila?", ["What color is it?", "How are you?", "What's your name?", "Where are you?"], 0, "What color is it pregunta por el color.", "Color es color."],
      ["It's red significa:", ["es azul", "es rojo", "es grande", "es mía"], 1, "It's es es y red es rojo.", "Es la respuesta corta de color."],
      ["What color is the banana? La banana es:", ["black", "blue", "yellow", "green"], 2, "La banana es amarilla: yellow.", "Piense en su color real."],
      ["Tu cuaderno es verde. ¿Cómo lo dices?", ["It's mine", "It's red", "It's big", "It's green"], 3, "Green es verde: It's green.", "It's + color es la estructura."],
      ["El caballo negro en inglés es:", ["The white horse", "The black horse", "The red horse", "The blue horse"], 1, "Black va antes del nombre: black horse.", "En inglés el color va primero."],
      ["La leche en inglés es de color:", ["White", "Black", "Red", "Blue"], 0, "La leche es blanca: white.", "Es el color opuesto a black."],
      ["¿Cómo se dice naranja (color) en inglés?", ["Green", "Apple", "Banana", "Orange"], 3, "Orange es naranja, el color y la fruta.", "También es la fruta naranja."],
      ["The grass is significa que el pasto es:", ["red", "blue", "green", "white"], 2, "El pasto es verde: green.", "Es el color de los árboles también."],
      ["Para responder el color con la estructura correcta uso:", ["Goodbye + color", "I'm + color", "It's + color", "Thank you + color"], 2, "La respuesta correcta es It's más el color.", "It's es la forma corta de it is."],
      ["¿Cómo se dice rosa en inglés?", ["Yellow", "Blue", "Black", "Pink"], 3, "Pink es rosa.", "Es un color muy usado en el salón."],
      ["El cielo de día es:", ["blue", "green", "black", "white"], 0, "De día el cielo es azul: blue.", "En la noche se ve black."],
      ["¿Cómo se dice color café o marrón en inglés?", ["Red", "Brown", "Blue", "Green"], 1, "Brown es café o marrón.", "Es el color de la tierra."],
    ],
    cl: {
      c: [
        ["ved", "SE VE DE ESE COLOR", "🌈"],
        ["no", "NO TIENE ESE COLOR", "📌"],
      ],
      i: [
        ["the banana is yellow", "ved"],
        ["the grass is green", "ved"],
        ["the sky is blue", "ved"],
        ["the milk is white", "ved"],
        ["the sun is blue", "no"],
        ["the grass is black", "no"],
        ["the milk is red", "no"]
      ]
    },
    em: [
      ["What color is it?", "¿De qué color es?"],
      ["It's red", "Es rojo"],
      ["It's green", "Es verde"],
      ["orange", "naranja"]
    ],
    or: [
      "Look at the object.",
      "Ask: What color is it?",
      "Answer: It's plus the color.",
      "Repeat the full sentence."
    ],
    e: ["Escribe en inglés el color de tres cosas de tu salón.", "The door is brown. The book is blue.", 3],
  },
  {
    n: "Classroom Objects — Objetos del salón",
    o: "Nombro en inglés los objetos que uso todos los días en clase.",
    d: "DBA: sigue instrucciones sencillas en el aula usando vocabulario básico en inglés.",
    t: [
      ["Classroom Objects — Objetos del salón", "Book, pencil, chair y table son cosas que toco cada día en la escuela.", "🎒"],
      ["School Things — Útiles escolares", "Eraser, ruler, scissors y backpack me ayudan a aprender y ordenar.", "✏️"],
      ["Say and Point — Di y señala", "Digo el nombre del objeto y lo señalo. Así aprendo más rápido.", "👉"],
    ],
    q: [
      ["Book significa:", ["lápiz", "libro", "mesa", "silla"], 1, "Book es libro.", "Lo abro para leer."],
      ["Pencil significa:", ["silla", "libro", "lápiz", "puerta"], 2, "Pencil es lápiz.", "Sirve para escribir."],
      ["Chair significa:", ["ventana", "mesa", "puerta", "silla"], 3, "Chair es silla.", "En ella me siento."],
      ["Table significa:", ["mesa", "silla", "libro", "pared"], 0, "Table es mesa.", "Sobre ella pongo mis útiles."],
      ["Door significa:", ["pizarrón", "ventana", "puerta", "lápiz"], 2, "Door es puerta.", "Por ella entro al salón."],
      ["Eraser significa:", ["tijera", "borrador", "mochila", "cuaderno"], 1, "Eraser es borrador.", "Con él borro lo que escribí mal."],
      ["Backpack significa:", ["mochila", "cuaderno", "libro", "lápiz"], 0, "Backpack es mochila.", "En ella llevo mis útiles."],
      ["Scissors significa:", ["papel", "regla", "pegamento", "tijeras"], 3, "Scissors es tijeras.", "Se usan con cuidado y siempre supervisadas."],
      ["Ruler significa:", ["silla", "lápiz", "borrador", "regla"], 3, "Ruler es regla.", "Sirve para medir y trazar líneas."],
      ["Notebook significa:", ["cuaderno", "libro", "mochila", "puerta"], 0, "Notebook es cuaderno.", "En él escribo mis tareas."],
      ["Para escribir en el cuaderno uso:", ["chair", "pencil", "door", "table"], 1, "Pencil es el lápiz que uso para escribir.", "Las otras cosas no escriben."],
      ["What's this? It's a book. ¿Qué objeto es?", ["Silla", "Lápiz", "Libro", "Mesa"], 2, "La respuesta dice claramente: it's a book, es un libro.", "Traduzca book."],
    ],
    cl: {
      c: [
        ["obj", "ES UN OBJETO — OBJECT", "🎒"],
        ["utl", "ES UN ÚTIL — SCHOOL THING", "✏️"],
      ],
      i: [
        ["book", "obj"],
        ["chair", "obj"],
        ["table", "obj"],
        ["door", "obj"],
        ["pencil", "utl"],
        ["eraser", "utl"],
        ["ruler", "utl"],
        ["backpack", "utl"]
      ]
    },
    em: [
      ["book", "libro"],
      ["pencil", "lápiz"],
      ["chair", "silla"],
      ["backpack", "mochila"]
    ],
    or: [
      "Look at the object.",
      "Say its name in English.",
      "Point to it in the classroom.",
      "Repeat the word three times."
    ],
    e: ["Escribe en inglés tres objetos de tu salón.", "Book, pencil, chair", 3],
  },
  {
    n: "Listen and Do — Escucha y haz",
    o: "Sigo instrucciones sencillas en inglés que escucho dentro del aula.",
    d: "DBA: sigue instrucciones sencillas y directas dentro del aula de clases.",
    t: [
      ["Listen and Do — Escucha y haz", "Cuando la maestra da una instrucción en inglés, la escucho y la hago.", "👂"],
      ["Stand Up and Sit Down — Párate y siéntate", "Son las primeras instrucciones del salón: me levanto y me siento cuando me lo piden.", "🧍"],
      ["Clap Your Hands — Aplaude", "Aplaudir es una instrucción divertida que también practica mi atención.", "👏"],
    ],
    q: [
      ["Stand up significa:", ["salta", "siéntate", "párate", "corre"], 2, "Stand up es levantarse o pararse.", "Up es hacia arriba."],
      ["Sit down significa:", ["lee", "párate", "mira", "siéntate"], 3, "Sit down es sentarse.", "Down es hacia abajo."],
      ["Clap your hands significa:", ["aplaude con las manos", "salta alto", "corre rápido", "canta fuerte"], 0, "Clap es aplaudir y hands son las manos.", "Se escucha el sonido de las palmas."],
      ["Jump significa:", ["camina", "salta", "siéntate", "lee"], 1, "Jump es saltar.", "Se hace con los dos pies."],
      ["Quiet, please significa:", ["mira", "gracias", "párate", "por favor, silencio"], 3, "Quiet es silencio y please es por favor.", "Se usa para pedir calma."],
      ["Raise your hand significa:", ["siéntate", "cierra los ojos", "levanta la mano", "salta"], 2, "Raise es levantar y hand es mano.", "Así pido la palabra en clase."],
      ["Listen to me significa:", ["mírame", "escúchame", "aplaude", "siéntate"], 1, "Listen es escuchar.", "Es una instrucción de atención."],
      ["Go to your seat significa:", ["ve a tu silla", "salta en el sitio", "aplaude", "mira el piso"], 0, "Seat es el lugar donde me siento.", "Es volver a mi puesto."],
      ["Be quiet significa:", ["quédate tranquilo", "grita más", "corre en el salón", "salta en el sitio"], 0, "Be quiet pide silencio.", "Es útil cuando hay mucho ruido."],
      ["La maestra dice: Stand up, please. ¿Qué hago?", ["Me siento", "Me paro", "Grito", "Duermo"], 1, "La instrucción me pide pararme.", "Escucho y hago."],
      ["Hands down significa:", ["aplaude", "levanta la mano", "baja las manos", "salta"], 2, "Hands son las manos y down es abajo.", "Es lo contrario de raise your hand."],
      ["Walk slowly significa:", ["siéntate ya", "corre rápido", "salta alto", "camina despacio"], 3, "Slowly es despacio.", "En el salón siempre caminamos despacio."],
    ],
    cl: {
      c: [
        ["par", "ME VOY A PARAR — STAND", "🧍"],
        ["sia", "ME VOY A SENTAR — SIT", "🛋️"],
      ],
      i: [
        ["Stand up", "par"],
        ["Stand by the door", "par"],
        ["Stand next to me", "par"],
        ["Sit down", "sia"],
        ["Sit on your chair", "sia"],
        ["Sit quietly", "sia"]
      ]
    },
    em: [
      ["Stand up", "Párate"],
      ["Sit down", "Siéntate"],
      ["Clap your hands", "Aplaude"],
      ["Listen", "Escucha"]
    ],
    or: [
      "Listen to the instruction.",
      "Understand the key word.",
      "Do the action slowly.",
      "Wait for the next instruction."
    ],
    e: ["Escribe en inglés dos instrucciones que entiendas.", "Stand up. Sit down.", 3],
  },
  {
    n: "Open and Close — Abre y cierra",
    o: "Sigo instrucciones de abrir y cerrar objetos del aula en inglés.",
    d: "DBA: sigue instrucciones sencillas y directas dentro del aula de clases.",
    t: [
      ["Open — Abrir", "Open your book es la instrucción para abrir el cuaderno o el libro y empezar a leer.", "📖"],
      ["Close — Cerrar", "Close your book significa cerrar el libro cuando termino la actividad.", "📕"],
      ["Opposites — Contrarios", "Open y close son contrarios, como arriba y abajo. Aprendo parejas de palabras.", "↔️"],
    ],
    q: [
      ["Open the door significa:", ["salta la puerta", "cierra la puerta", "mira la puerta", "abre la puerta"], 3, "Open es abrir.", "Es lo contrario de close."],
      ["Close the window significa:", ["cierra la ventana", "abre la ventana", "limpia la ventana", "pinta la ventana"], 0, "Close es cerrar.", "Se cierra cuando hace frío."],
      ["Open your book significa:", ["cierra tu libro", "abre tu libro", "escribe tu libro", "rompe tu libro"], 1, "Open your book es abre tu libro.", "Es la instrucción para empezar a leer."],
      ["Close your eyes significa:", ["levanta la mano", "abre los ojos", "cierra los ojos", "salta"], 2, "Eyes son los ojos y close es cerrar.", "Se hace en juegos y relajación."],
      ["El contrario de open es:", ["close", "look", "jump", "run"], 0, "Open y close son contrarios: abrir y cerrar.", "Parejas de opuestos."],
      ["El contrario de close es:", ["clap", "sit", "stand", "open"], 3, "Close tiene como contrario open.", "Cierro y luego abro."],
      ["Open the box significa:", ["mira la caja", "cierra la caja", "abre la caja", "rompe la caja"], 2, "Box es caja y open es abrir.", "Tengo que sacar algo."],
      ["Para leer, primero debo:", ["close my book", "open my book", "throw my book", "hide my book"], 1, "Se abre el libro antes de leer.", "Open va antes de leer."],
      ["Para dormir, yo:", ["abro los ojos", "cierro los ojos", "grito", "salto"], 1, "Al dormir cierro los ojos: close my eyes.", "Es una rutina de la noche."],
      ["Close your book, please significa:", ["lee tu libro", "abre tu libro, por favor", "cierra tu libro, por favor", "toma tu libro"], 2, "Close es cerrar y please es por favor.", "Se dice al terminar."],
      ["Open your pencil case significa:", ["rompe tu estuche", "cierra tu estuche", "guarda tu estuche", "abre tu estuche"], 3, "Pencil case es estuche.", "Para sacar el lápiz."],
      ["Si hace mucho frío, la ventana:", ["la cierro con la instrucción Close the window", "la abro", "la rompo", "la pinto"], 0, "Con frío se cierra la ventana.", "Sigo la instrucción correcta."],
    ],
    cl: {
      c: [
        ["ab", "ABRIR — OPEN", "📖"],
        ["ce", "CERRAR — CLOSE", "📕"],
      ],
      i: [
        ["open the book", "ab"],
        ["open the door", "ab"],
        ["open the box", "ab"],
        ["open your eyes", "ab"],
        ["close the book", "ce"],
        ["close the window", "ce"],
        ["close the door", "ce"],
        ["close your eyes", "ce"]
      ]
    },
    em: [
      ["Open", "Abrir"],
      ["Close", "Cerrar"],
      ["Open your book", "Abre tu libro"],
      ["Close your eyes", "Cierra los ojos"]
    ],
    or: [
      "Listen to the instruction.",
      "Find the key word: open or close.",
      "Do the action with care.",
      "Wait for the teacher's next word."
    ],
    e: ["Escribe en inglés una instrucción con open y otra con close.", "Open your book. Close your book.", 3],
  },
  {
    n: "Look and Point — Mira y señala",
    o: "Sigo instrucciones de mirar y señalar objetos en inglés dentro del salón.",
    d: "DBA: sigue instrucciones sencillas y directas dentro del aula de clases.",
    t: [
      ["Look — Mira", "Look at me significa mírame. Primero miro para saber qué debo hacer.", "👀"],
      ["Point — Señala", "Point to the door significa señala la puerta. Señalo sin moverme de mi sitio.", "👉"],
      ["Touch and Show — Toca y muestra", "Touch your nose y Show me your pencil son instrucciones cortas y divertidas.", "✋"],
    ],
    q: [
      ["Look at the board significa:", ["mira el pizarrón", "señala el piso", "escucha el piso", "salta el pizarrón"], 0, "Board es pizarrón y look es mirar.", "Miro hacia el frente."],
      ["Point to the door significa:", ["abre la puerta", "señala la puerta", "cierra la puerta", "rompe la puerta"], 1, "Point es señalar.", "Señalo sin tocar."],
      ["Touch your nose significa:", ["mira el pizarrón", "señala la puerta", "toca tu nariz", "salta en el sitio"], 2, "Touch es tocar y nose es nariz.", "Es un juego del cuerpo."],
      ["Look at me significa:", ["siéntate", "escúchame", "aplaude", "mírame"], 3, "Look es mirar y me es a mí.", "Es la instrucción para ganar atención."],
      ["Show me your pencil significa:", ["rompe tu lápiz", "muéstrame tu lápiz", "esconde tu lápiz", "tira tu lápiz"], 1, "Show es mostrar.", "No lo doy, solo lo muestro."],
      ["Touch the table significa:", ["toca la mesa", "mira la mesa", "abre la mesa", "señala el cielo"], 0, "Table es mesa y touch es tocar.", "La toco con la mano."],
      ["Where is the window? pregunta:", ["cuándo es la ventana", "qué es la ventana", "cómo está la ventana", "dónde está la ventana"], 3, "Where es dónde.", "Es una pregunta de ubicación."],
      ["The book is on the table significa:", ["el libro está en la silla", "el libro está bajo la mesa", "el libro está sobre la mesa", "el libro está en el suelo"], 2, "On significa sobre.", "El libro apoya en la mesa."],
      ["Look at your book significa:", ["cierra tu libro", "abre tu libro", "mira tu libro", "escribe tu libro"], 2, "Look at es mirar hacia.", "Todavía no lo abro, solo lo miro."],
      ["Point to your friend significa:", ["abraza a tu amigo", "saluda a tu amigo", "ayuda a tu amigo", "señala a tu amigo"], 3, "Point to es señalar hacia.", "Señalo con el dedo sin tocar."],
      ["Si la maestra dice Look!, yo:", ["miro hacia donde ella señala", "cierro los ojos", "grito", "corro en el salón"], 0, "Look manda a mirar con atención.", "Sigo la instrucción de inmediato."],
      ["Show me your hands significa:", ["guarda tus manos", "muéstrame tus manos", "esconde tus manos", "rompe tus manos"], 1, "Hands son las manos y show es mostrar.", "Las abro y las muestro."],
    ],
    cl: {
      c: [
        ["mir", "MIRAR — LOOK", "👀"],
        ["sen", "SEÑALAR — POINT", "👉"],
      ],
      i: [
        ["look at me", "mir"],
        ["look at the board", "mir"],
        ["look at your book", "mir"],
        ["point to the door", "sen"],
        ["point to your friend", "sen"],
        ["point to the window", "sen"]
      ]
    },
    em: [
      ["Look", "Mira"],
      ["Point", "Señala"],
      ["Touch", "Toca"],
      ["Show me", "Muéstrame"]
    ],
    or: [
      "Listen to the instruction.",
      "Find the key word: look, point, touch or show.",
      "Look at the right place.",
      "Do the action and wait."
    ],
    e: ["Escribe en inglés una instrucción de mirar y una de señalar.", "Look at the board. Point to the door.", 3],
  },

  /* [Aporte PDF] temas del libro: Mallas de Aprendizaje de Inglés · Transición a 5° (Mineducación, Colombia)
     Agregados aditivamente en la fase de contenido (ver TODO.md). */
  {
    "n": "Cuido Mi Cuerpo — I Take Care of My Body",
    "o": "Identificar, visual y oralmente en inglés, algunas actividades para el cuidado de la salud y el aseo personal.",
    "d": "Malla de aprendizaje de grado 1, Módulo 1 (Salud y vida). Mineducación, Colombia. Basado en las evidencias: identifica vocabulario de las partes del cuerpo, reconoce rutinas de higiene y responde qué/who/how old con información personal.",
    "f": "Mallas Inglés grado 1 · Módulo 1 Salud y vida: Cuido mi cuerpo (págs. 88-95)",
    "t": [
            [
                    "Partes del cuerpo",
                    "Dile hola a tu cuerpo en inglés: head (cabeza), eyes (ojos), mouth (boca), hands (manos), feet (pies). ¡This is my head!",
                    "🧒"
            ],
            [
                    "Mi rutina de la mañana",
                    "I take a shower (me baño), I brush my teeth (me cepillo los dientes), I have breakfast (desayuno), I get dressed (me visto).",
                    "🚿"
            ],
            [
                    "First, then, next, last",
                    "Palabras mágicas para contar tu rutina en orden: first (primero), then (luego), next (después), last (al final).",
                    "⏰"
            ]
    ],
    "q": [
            [
                    "¿Qué significa la expresión 'I brush my teeth'?",
                    [
                            "Me cepillo los dientes",
                            "Me baño",
                            "Desayuno",
                            "Me visto"
                    ],
                    0,
                    "'I brush my teeth' significa 'me cepillo los dientes'. Es parte de tu rutina de aseo.",
                    "Brush = cepillar. Teeth = dientes."
            ],
            [
                    "'Take a shower' quiere decir...",
                    [
                            "Bañarse",
                            "Desayunar",
                            "Dormir",
                            "Peinarte"
                    ],
                    0,
                    "'Take a shower' es bañarse. En la malla aparece: 'I take a shower in the morning'.",
                    "Shower es la ducha."
            ],
            [
                    "¿Qué palabra usamos para decir que algo pasa PRIMERO?",
                    [
                            "First",
                            "Last",
                            "Next",
                            "Then"
                    ],
                    0,
                    "First significa 'primero'. Luego vienen then, next y last.",
                    "First es la palabra #1 de la secuencia."
            ],
            [
                    "'Before bedtime' significa...",
                    [
                            "Antes de dormir",
                            "Después de comer",
                            "En la mañana",
                            "Al mediodía"
                    ],
                    0,
                    "'Before bedtime' es 'antes de la hora de dormir'. Ejemplo: I brush my teeth before bedtime.",
                    "Bedtime = hora de dormir."
            ],
            [
                    "En inglés, la cabeza es...",
                    [
                            "Head",
                            "Foot",
                            "Hand",
                            "Mouth"
                    ],
                    0,
                    "Head es la cabeza. ¡Señálala y di: This is my head!",
                    "Head suena como 'jed'."
            ],
            [
                    "¿Cómo dices 'Mi nombre es Ana' en inglés?",
                    [
                            "My name is Ana",
                            "I am name Ana",
                            "Your name is Ana",
                            "This is name Ana"
                    ],
                    0,
                    "Se dice 'My name is Ana'. También puedes decir: I am 6 years old.",
                    "My name is... = Mi nombre es..."
            ],
            [
                    "'I am 6 years old' significa...",
                    [
                            "Tengo 6 años",
                            "Tengo 6 hermanos",
                            "Soy el número 6",
                            "Mido 6 metros"
                    ],
                    0,
                    "'I am 6 years old' quiere decir 'tengo 6 años'. Así te presentas en inglés.",
                    "Years old = años de edad."
            ],
            [
                    "Cuando presentas a tu papá dices...",
                    [
                            "This is my father",
                            "This is your father",
                            "My father is name",
                            "Father is me"
                    ],
                    0,
                    "'This is my father' significa 'este es mi papá'. En la malla: This is my father.",
                    "This is... = este es..."
            ],
            [
                    "¿Qué significa 'have breakfast'?",
                    [
                            "Desayunar",
                            "Almorzar con la familia",
                            "Cenar",
                            "Merendar en el recreo"
                    ],
                    0,
                    "'Have breakfast' es desayunar. Es la primera comida del día.",
                    "Breakfast = desayuno."
            ],
            [
                    "La palabra 'then' significa...",
                    [
                            "Luego",
                            "Nunca",
                            "Ayer",
                            "Tal vez"
                    ],
                    0,
                    "'Then' significa 'luego' o 'entonces'. Ayuda a contar tu rutina en orden.",
                    "Then viene después de first."
            ],
            [
                    "En la frase 'my hands', la palabra my significa...",
                    [
                            "Mis",
                            "Tus",
                            "Sus",
                            "El"
                    ],
                    0,
                    "My significa 'mi/mis' (de mí). My hands = mis manos; your hands = tus manos.",
                    "My es para hablar de lo MÍO."
            ],
            [
                    "'Get dressed' significa...",
                    [
                            "Vestirse",
                            "Bañarse",
                            "Cepillarse",
                            "Acostarse"
                    ],
                    0,
                    "'Get dressed' es vestirse. ¡Ponte tu uniforme y dilo en inglés!",
                    "Dressed viene de dress (vestido/vestir)."
            ]
    ],
    "em": [["The morning routines song","Canción de las rutinas de la mañana (take a shower, brush my teeth, have breakfast)."],["This is my mother. She is 8... years old? No! My sister is 8 years old.","Presenta a tu familia con This is... y años con years old."]],
    "or": [
          "Responde en inglés preguntas sencillas sobre tu información personal: nombre, edad y familia.",
          "Organiza en orden las imágenes de tu rutina diaria usando first, then, next y last.",
          "Distingue las partes del cuerpo con el vocabulario en inglés."
    ],
    "e": ["Cuenta tu rutina de la mañana en inglés usando las palabras de secuencia.","First, I take a shower. Then, I brush my teeth. Next, I have breakfast. Last, I get dressed.",3]
  },
  {
    "n": "Valoro Nuestras Diferencias — I Respect Our Differences",
    "o": "Describir en inglés las diferencias físicas propias y de sus compañeros y mostrar respeto hacia ellas.",
    "d": "Malla de aprendizaje de grado 1, Módulo 2 (Convivencia y paz). Mineducación, Colombia. Basado en las evidencias: usa los posesivos his/her, las frases I like/I don't like e imperativos amables como Don't laugh.",
    "f": "Mallas Inglés grado 1 · Módulo 2 Convivencia y paz: Valoro nuestras diferencias (págs. 96-103)",
    "t": [
            [
                    "I like / I don't like",
                    "Para decir qué cosas te gustan: I like her hair (me gusta su cabello). Y si NO te gusta: I don't like...",
                    "👍"
            ],
            [
                    "His y Her",
                    "His es 'de él': his hair (el cabello de él). Her es 'de ella': her hair (el cabello de ella).",
                    "👧"
            ],
            [
                    "Be kind y respeta",
                    "Frases de convivencia: Be kind to your friends (sé amable), Respect others (respeta a los demás), Don't laugh at your friends (no te rías de tus amigos).",
                    "💛"
            ]
    ],
    "q": [
            [
                    "'Her hair is curly' significa...",
                    [
                            "Su cabello (de ella) es rizado",
                            "Su cabello (de él) es lacio",
                            "Mi cabello es corto",
                            "Tu cabello es rojo"
                    ],
                    0,
                    "'Her hair is curly' = el cabello de ella es rizado. Her habla de una niña o mujer.",
                    "Curly = rizado."
            ],
            [
                    "Para hablar del cabello de un compañero niño usamos...",
                    [
                            "His",
                            "Her",
                            "My",
                            "Your"
                    ],
                    0,
                    "His es el posesivo de él (his hair). Her es el posesivo de ella.",
                    "His → boy (niño). Her → girl (niña)."
            ],
            [
                    "'She's a girl' significa...",
                    [
                            "Ella es una niña",
                            "Él es un niño",
                            "Yo soy una chica",
                            "Tú eres alta"
                    ],
                    0,
                    "'She's a girl' = ella es una niña. She habla de niñas y mujeres.",
                    "She = ella."
            ],
            [
                    "¿Qué significa 'Don't laugh at your friends'?",
                    [
                            "No te rías de tus amigos",
                            "Ríete de todos",
                            "Saluda a tus amigos",
                            "Juega con tu familia"
                    ],
                    0,
                    "Es una frase de respeto: no te burles de tus amigos. La malla dice: Don't laugh at your friends.",
                    "Don't = no (manda negativa)."
            ],
            [
                    "'Be kind to your friends' quiere decir...",
                    [
                            "Sé amable con tus amigos",
                            "Corre con tus amigos",
                            "Escucha a tu mamá",
                            "Lava tus manos"
                    ],
                    0,
                    "Kind significa 'amable'. Be kind = sé amable.",
                    "Kind = amable, bondadoso."
            ],
            [
                    "¿Cómo traduces 'Nosotros somos diferentes, pero respetamos a los demás'?",
                    [
                            "We are different, but we respect others",
                            "We are the same and we laugh",
                            "I am different, you respect me",
                            "We don't like each other"
                    ],
                    0,
                    "La malla dice: We are different, but we respect others.",
                    "Different = diferentes; respect = respetar."
            ],
            [
                    "'I like her hair' significa...",
                    [
                            "Me gusta su cabello (de ella)",
                            "No me gusta tu cabello",
                            "Ella gusta de mi cabello",
                            "Me gusta mi cabello"
                    ],
                    0,
                    "I like her hair = me gusta el cabello de ella. Usa her para hablar de ella.",
                    "I like = me gusta."
            ],
            [
                    "En inglés, 'tall' significa...",
                    [
                            "Alto",
                            "Bajo",
                            "Flaco",
                            "Gordo"
                    ],
                    0,
                    "Tall es alto. Su contrario es short (bajo).",
                    "Tall suena como 'tol'."
            ],
            [
                    "La palabra 'blonde' describe...",
                    [
                            "Cabello rubio",
                            "Cabello negro",
                            "Cabello rojo",
                            "Cabello corto"
                    ],
                    0,
                    "Blonde es cabello rubio. redhead es pelirrojo, black hair es cabello negro.",
                    "Blonde = rubio/a."
            ],
            [
                    "'Respect others' significa...",
                    [
                            "Respeta a los demás",
                            "Cuenta hasta diez",
                            "Pide ayuda rápido",
                            "Da las gracias"
                    ],
                    0,
                    "Others significa 'los demás'. Respect others = respeta a los amigos y demás personas.",
                    "Others = otros, los demás."
            ],
            [
                    "'Boy' es la palabra en inglés para...",
                    [
                            "Niño",
                            "Niña",
                            "Bebé",
                            "Abuelo"
                    ],
                    0,
                    "Boy es niño y girl es niña. My sister is a girl.",
                    "Boy = niño."
            ],
            [
                    "En la frase 'your hair', la palabra your significa...",
                    [
                            "Tu",
                            "Mi",
                            "Su (de él)",
                            "El"
                    ],
                    0,
                    "Your significa 'tu/tus' (tuyo). Your hair = tu cabello; my hair = mi cabello.",
                    "Your es para lo de la persona con quien hablas."
            ]
    ],
    "em": [["My friend has short, black hair.","Describe el cabello de tu amigo con has (tiene) y adjetivos."],["We are all the same!","Frase de la malla: ¡todos somos iguales, aunque tengamos diferencias!"]],
    "or": [
          "Expresa en inglés tus gustos y preferencias con I like / I don't like.",
          "Presenta a tus compañeros usando los posesivos his y her.",
          "Responde a estímulos amables con imperativos en inglés: Be kind, Respect."
    ],
    "e": ["Describe a un compañero o compañera diciendo su cabello y estatura.","She's a girl. Her hair is curly. I like her hair.",3]
  },
  {
    "n": "Cuido Mi Escuela — I Take Care of My School",
    "o": "Reconocer, visual y oralmente en inglés, y poner en práctica estrategias de cuidado del medio ambiente en la escuela.",
    "d": "Malla de aprendizaje de grado 1, Módulo 3 (Medioambiente y sociedad). Mineducación, Colombia. Basado en las evidencias: usa There is/There are, preposiciones in/on/at e imperativos Do/Don't para cuidar el salón y la escuela.",
    "f": "Mallas Inglés grado 1 · Módulo 3 Medioambiente y sociedad: Cuido mi escuela (págs. 104-108)",
    "t": [
            [
                    "There is / There are",
                    "Para decir que algo hay: There is a book on the desk (hay un libro). Con más de uno: There are 15 pencils (hay 15 lápices).",
                    "📚"
            ],
            [
                    "¿Dónde está? in, on, under",
                    "Si algo está sobre la mesa: The book is on the table. Y preguntas: Is the book under the chair? Yes, it is / No, it's not.",
                    "❓"
            ],
            [
                    "Don't throw garbage!",
                    "Cuida tu escuela: Don't throw garbage on the floor (no tires basura al piso), Keep your classroom clean (mantén tu salón limpio), Raise your hand (levanta la mano), Don't eat in class.",
                    "🚮"
            ]
    ],
    "q": [
            [
                    "'There is a book on the desk' significa...",
                    [
                            "Hay un libro sobre el pupitre",
                            "El libro está debajo de la silla",
                            "No hay libros",
                            "El libro es mío"
                    ],
                    0,
                    "There is = hay (una sola cosa). On = sobre. There is a book on the desk = hay un libro en el pupitre.",
                    "There is para una sola cosa."
            ],
            [
                    "Si son MUCHOS lápices decimos...",
                    [
                            "There are 15 pencils",
                            "There is 15 pencils",
                            "It is 15 pencils",
                            "Are 15 pencil"
                    ],
                    0,
                    "There are = hay (para varios). There are 15 pencils in the pencil case.",
                    "Are se usa con plurales."
            ],
            [
                    "'Is the book under the chair?' — si el libro SÍ está debajo de la silla respondes...",
                    [
                            "Yes, it is",
                            "No, it's not",
                            "Yes, it's not",
                            "No, it is"
                    ],
                    0,
                    "Con preguntas de sí/no usamos Yes, it is o No, it's not. Under = debajo de.",
                    "Under = debajo."
            ],
            [
                    "'Keep your classroom clean' significa...",
                    [
                            "Mantén tu salón limpio",
                            "Cierra la puerta del salón",
                            "Levanta tu mano",
                            "Trae tu cuaderno"
                    ],
                    0,
                    "Keep = mantener, clean = limpio. Cuida tu salón de clases.",
                    "Clean = limpio."
            ],
            [
                    "¿Qué significa 'Don't throw garbage on the floor'?",
                    [
                            "No tires basura al piso",
                            "Tira la basura afuera",
                            "Lava el piso rápido",
                            "Guarda tu basurero"
                    ],
                    0,
                    "Garbage es la basura. Floor es el piso. Es una frase para cuidar a la escuela.",
                    "Don't throw = no tires."
            ],
            [
                    "La basura pequeñita que queda en el piso se llama...",
                    [
                            "Litter",
                            "Library",
                            "Little",
                            "Letter"
                    ],
                    0,
                    "Litter es basura pequeña que dejamos tirada. ¡Recógela (pick up)!",
                    "Litter = basura en el suelo."
            ],
            [
                    "Las 3 R del cuidado del medio ambiente son...",
                    [
                            "Reduce, Reuse, Recycle",
                            "Read, Run, Rest",
                            "Red, Rain, Ring",
                            "Ready, Rice, Right"
                    ],
                    0,
                    "Reduce (usa menos), Reuse (reúsa), Recycle (recicla). ¡Planeta feliz!",
                    "Reduce, Reuse, Recycle: las tres empiezan con R y una dice 'usa menos'."
            ],
            [
                    "En inglés, el tablero del salón es el...",
                    [
                            "Board",
                            "Door",
                            "Window",
                            "Floor"
                    ],
                    0,
                    "Board es el tablero o pizarra. La maestra escribe en el board.",
                    "Board = tablero."
            ],
            [
                    "El 'pencil case' es la...",
                    [
                            "Caja de lápices (lonchera de útiles)",
                            "Puerta del salón",
                            "Patio de la escuela",
                            "Regadera"
                    ],
                    0,
                    "Pencil case es la caja o estuche donde guardas lápices. Pencil = lápiz.",
                    "Pencil = lápiz."
            ],
            [
                    "La 'library' es...",
                    [
                            "La biblioteca",
                            "La cocina",
                            "El baño",
                            "El parqueadero"
                    ],
                    0,
                    "Library es la biblioteca, un lugar de la escuela donde hay libros para leer.",
                    "Library = biblioteca (books!)."
            ],
            [
                    "'Raise your hand' significa...",
                    [
                            "Levanta la mano",
                            "Baja tu silla",
                            "Abre la ventana",
                            "Guarda el cuaderno"
                    ],
                    0,
                    "Raise your hand = levanta la mano para hablar. ¡Es buena manera en clase!",
                    "Raise = levantar; hand = mano."
            ],
            [
                    "Regla de clase correcta en inglés: ...",
                    [
                            "Don't eat in class",
                            "Eat in class more!",
                            "Class eat don't",
                            "No eat is class"
                    ],
                    0,
                    "La malla dice: Don't eat in class (no comas en clase). Don't + acción = no hagas eso.",
                    "Don't = no (prohibido)."
            ]
    ],
    "em": [["Don't throw garbage on the floor. Pick it up!","Consigna: recoge la basura y cuida el ambiente."],["There are 15 pencils in the pencil case.","Usa There are para contar muchas cosas de tu estuche."]],
    "or": [
          "Identifica los objetos y lugares de la escuela con su nombre en inglés.",
          "Describe dónde están las cosas usando There is / There are e in, on, under.",
          "Propone acciones para cuidar y limpiar tu escuela con imperativos Do/Don't."
    ],
    "e": ["Inventa una lista de las cosas que se deben hacer para tener un salón limpio.","Raise your hand. Don't throw garbage. Keep your classroom clean.",3]
  },
  {
    "n": "Colaboro en Mi Casa — I Help at Home",
    "o": "Expresar y promover en inglés hábitos de colaboración y consumo responsable en su familia y su casa.",
    "d": "Malla de aprendizaje de grado 1, Módulo 4 (Una aldea global). Mineducación, Colombia. Basado en las evidencias: describe los objetos de la casa, promueve hábitos de ahorro y usa expresiones como Turn off y Save water.",
    "f": "Mallas Inglés grado 1 · Módulo 4 Una aldea global: Colaboro en mi casa (págs. 109-113)",
    "t": [
            [
                    "This is a lamp",
                    "Describe tu casa: This is a lamp (es una lámpara), There is a bed in my bedroom (hay una cama en mi cuarto), There are two bedrooms (hay dos cuartos).",
                    "🏠"
            ],
            [
                    "Turn off / Turn on",
                    "Turn off the TV (apaga la TV), Turn on (enciende). Y cuidado con: Don't leave the lights on (no dejes las luces encendidas).",
                    "💡"
            ],
            [
                    "Save water y save energy",
                    "Close the tap (cierra la llave del agua), Save water (ahorra agua), Save energy (ahorra energía). ¡Colaborar en casa es divertido!",
                    "💧"
            ]
    ],
    "q": [
            [
                    "'There is a bed in my bedroom' significa...",
                    [
                            "Hay una cama en mi cuarto",
                            "Mi cama está afuera",
                            "No tengo cama",
                            "La cama es de mi hermano"
                    ],
                    0,
                    "There is = hay. Bed = cama. Bedroom = cuarto para dormir.",
                    "Room = cuarto; bed + room = cuarto de la cama."
            ],
            [
                    "El aparato que guarda la comida fría es el...",
                    [
                            "Fridge",
                            "Fan",
                            "Radio",
                            "Lamp"
                    ],
                    0,
                    "Fridge es el refrigerador o nevera. Mantiene los alimentos fríos.",
                    "Fridge suena como 'frij'."
            ],
            [
                    "'Turn off the TV' es...",
                    [
                            "Apaga la TV",
                            "Enciende la TV",
                            "Sube el volumen",
                            "Mira la TV"
                    ],
                    0,
                    "Turn off = apagar. Turn on = encender. ¡Apaga la TV si nadie la ve!",
                    "Off = apagado, On = encendido."
            ],
            [
                    "'Don't leave the lights on' significa...",
                    [
                            "No dejes las luces encendidas",
                            "Deja las luces prendidas siempre",
                            "Enciende todas las luces",
                            "No hay luces en casa"
                    ],
                    0,
                    "Lights son las luces. Ahorrar energía empieza con apagar lo que no usas.",
                    "Leave... on = dejar encendido."
            ],
            [
                    "¿Qué significa 'Close the tap'?",
                    [
                            "Cierra la llave del agua",
                            "Abre la ventana",
                            "Cierra la puerta",
                            "Guarda el jabón"
                    ],
                    0,
                    "Tap es la llave o grifo del agua. Cerrarla ahorra agua. ¡Save water!",
                    "Tap = grifo del agua."
            ],
            [
                    "'Save water' quiere decir...",
                    [
                            "Ahorrar agua",
                            "Beber mucha agua",
                            "Tirar el agua",
                            "Ver el agua"
                    ],
                    0,
                    "Save = ahorrar, guardar. Save water y save energy cuidan el planeta.",
                    "Save = guardar, no malgastar."
            ],
            [
                    "El experimento inverso de 'save' es 'waste', que significa...",
                    [
                            "Desperdiciar",
                            "Compartir",
                            "Recoger",
                            "Comprar"
                    ],
                    0,
                    "Waste = desperdiciar. No desperdicies agua ni energía. ¡Sé responsable!",
                    "Save ♡ / Waste ♡."
            ],
            [
                    "El ventilador en inglés es...",
                    [
                            "Fan",
                            "Fridge",
                            "Floor",
                            "Fanatic"
                    ],
                    0,
                    "Fan es el ventilador que refresca la casa. Apágalo si no se usa.",
                    "Fan = ventilador."
            ],
            [
                    "'The lamp is big' significa...",
                    [
                            "La lámpara es grande",
                            "La lámpara es pequeña",
                            "La lámpara está encendida",
                            "La lámpara es mía"
                    ],
                    0,
                    "Big = grande. This is a lamp. The lamp is big. Es un ejemplo de la malla.",
                    "Big = grande."
            ],
            [
                    "'Plug' y 'unplug' son...",
                    [
                            "Conectar y desconectar de la toma",
                            "Abrir y cerrar la puerta",
                            "Comer y beber",
                            "Subir y bajar"
                    ],
                    0,
                    "Plug = conectar a la toma eléctrica. Unplug = desconectar. ¡Hazlo con cuidado y con ayuda de un adulto!",
                    "Un- al principio es lo contrario."
            ],
            [
                    "La 'night table' es...",
                    [
                            "La mesita de noche",
                            "La mesa del comedor",
                            "La noche estrellada",
                            "El sofá-cama"
                    ],
                    0,
                    "Night table (o nightstand) es la mesita pequeña junto a la cama.",
                    "Night = noche."
            ],
            [
                    "Para colaborar en casa puedes decir...",
                    [
                            "Save energy!",
                            "Waste water!",
                            "Leave the TV on!",
                            "Open the tap!"
                    ],
                    0,
                    "Colaborar es promover hábitos buenos: Save energy, Close the tap, Turn off the TV.",
                    "Las frases positivas ayudan al planeta."
            ]
    ],
    "em": [["Don't leave the tap open!","Aviso de la malla: ¡no dejes la llave del agua abierta!"],["Energy, let's save it!","Canción y video del módulo sobre ahorrar la energía en casa."]],
    "or": [
          "Describe con There is / There are los objetos y cuartos de tu casa.",
          "Reconoce acciones que favorecen hábitos de ahorro en la familia.",
          "Promueve hábitos de consumo sostenible con imperativos: Turn off, Save."
    ],
    "e": ["Haz un listado con dibujos de acciones para colaborar en tu casa.","Turn off the TV. Close the tap. Don't leave the lights on.",3]
  },
];

/* ====== g1 / tecnologia ====== */
/* DBA 1º — tecnologia */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.tecnologia = [
  {
    n: "El monitor y la pantalla",
    o: "Reconozco el monitor y la pantalla y sé para qué sirven.",
    d: "DBA 1º tecnología: reconoce las partes básicas del computador. Aquí: el monitor y la pantalla.",
    t: [
      ["El monitor", "El monitor es la parte del computador que se parece a una televisión. Muestra las letras, los dibujos y los colores.", "🖥️"],
      ["La pantalla", "La pantalla es la parte plana y brillante del monitor. Allí ves todo lo que hace el computador.", "💡"],
      ["Cuido mi vista", "Miro la pantalla desde lejos y con la luz encendida. Así mis ojos no se cansan.", "👀"]
    ],
    q: [
      ["¿Cuál parte del computador muestra las imágenes?", ["El monitor", "El teclado", "La silla", "La mochila"], 0, "El monitor muestra las imágenes, las letras y los colores.", "Es como una tele pequeña."],
      ["¿Dónde se ven las letras que escribe la maestra en el computador?", ["El enchufe", "La pared", "La pantalla", "El piso"], 2, "La pantalla es la parte plana y brillante donde aparece todo lo que hace el computador.", "Es la parte que brilla."],
      ["La pantalla del monitor es...", ["Una fruta muy grande", "Una parte plana y brillante", "Un juguete de peluche", "Una taza para el café"], 1, "La pantalla es plana y brilla; allí se ven las letras y los dibujos."],
      ["Yo miro el monitor para...", ["Esconder mi mochila", "Comer mi almuerzo", "Dormir la siesta", "Ver lo que hace el computador"], 3, "El monitor nos deja ver las imágenes, los videos y las letras del computador."],
      ["Cuando la maestra abre un dibujo en el computador, ¿qué pasa?", ["El dibujo se ve en la pantalla", "El dibujo se huele", "El dibujo se vuelve agua", "El dibujo desaparece para siempre"], 0, "En la pantalla se ven los dibujos; con los ojos los miramos.", "Los dibujos se miran, no se huelen."],
      ["El monitor se parece mucho a...", ["Una nevera", "Una televisión", "Una bicicleta", "Un árbol"], 1, "El monitor tiene forma de televisión con una pantalla grande donde aparecen las imágenes.", "Piensa en la tele de tu casa."],
      ["Miro la pantalla desde lejos para...", ["Verla más chica", "Hacer más ruido", "Cuidar mis ojos", "Golpearla mejor"], 2, "Mirar desde lejos y con la luz encendida ayuda a que los ojos no se cansen."],
      ["¿Es bueno mirar la pantalla en un cuarto oscuro?", ["Sí, es lo mejor", "No, mejor con la luz encendida", "Sí, siempre se debe", "No importa nunca"], 1, "En un cuarto oscuro los ojos se cansan más; mejor mirar con la luz encendida.", "La luz cuida tus ojos."],
      ["¿Cuál de estos aparatos también tiene pantalla?", ["El celular", "La olla", "El plato", "El trapo"], 0, "El celular tiene pantalla como el computador; por eso también es un aparato tecnológico.", "Piensa en el teléfono de tus papás."],
      ["Si la pantalla brilla mucho y me molesta, ¿qué hago?", ["La golpeo", "La mojo con agua", "Me acuesto encima", "Le pido ayuda a un adulto"], 3, "Cuando algo molesta o falla, avisamos a un adulto; nunca se golpea ni se moja un aparato."],
      ["La maestra puede mostrarme en el monitor...", ["Un video de animales", "Un plato de comida", "Un perfume", "Un suéter de lana"], 0, "El monitor muestra videos, letras y dibujos; la comida y la ropa son cosas de verdad."],
      ["Cuando termino de trabajar, la pantalla...", ["Se pone a cantar", "Desaparece para siempre", "Se apaga o queda en espera", "Se vuelve de papel"], 2, "Al terminar, la pantalla se apaga o queda en espera y después se puede encender de nuevo.", "Se puede volver a encender."]
    ],
    cl: {
      c: [["parte", "ES PARTE DEL COMPUTADOR", "🖥️"], ["otra", "NO ES PARTE DEL COMPUTADOR", "🧰"]],
      i: [["Monitor", "parte"], ["Pantalla", "parte"], ["Teclado", "parte"], ["Ratón", "parte"], ["Silla", "otra"], ["Mochila", "otra"], ["Lápiz", "otra"], ["Pupitre", "otra"]]
    },
    em: [["Monitor", "muestra las imágenes"], ["Pantalla", "parte plana y brillante"], ["Ver de lejos", "cuida los ojos"]],
    or: ["Enciendo la luz del cuarto", "Me siento lejos de la pantalla", "Miro la pantalla con calma", "Al terminar, aviso a la maestra"],
    e: ["Dibuja en tu cuaderno el computador del salón y colorea su pantalla.", "Dibujo de un computador con la pantalla coloreada de azul.", 3]
  },
  {
    n: "El botón de encendido",
    o: "Sé que un adulto enciende el computador y que debo esperar con paciencia.",
    d: "DBA 1º tecnología: reconoce las partes básicas del computador. Aquí: el botón de encendido.",
    t: [
      ["El botón de encendido", "El botón de encendido es un botón pequeño. Cuando lo presiona un adulto, el computador se despierta.", "🔴"],
      ["Espero con paciencia", "Después de encender hay que esperar unos segundos. El computador tarda un poco en mostrar la pantalla.", "⏳"],
      ["Apagar también es cuidar", "Al terminar, el computador se apaga o queda en espera. Así lo cuidamos y ahorramos energía.", "🌙"]
    ],
    q: [
      ["¿Qué se necesita presionar para encender el computador?", ["El botón de encendido", "La mochila", "El pizarrón", "La ventana"], 0, "El botón de encendido activa el computador; sin él no arranca.", "Es un botón pequeño y redondo."],
      ["¿Quién debe presionar el botón de encendido en el salón?", ["El payaso", "El gato", "Un adulto, como la maestra", "Nadie"], 2, "En la escuela enciende un adulto. Así el computador se usa seguro."],
      ["Cuando se enciende el computador, ¿qué debo hacer?", ["Golpear la mesa", "Esperar unos segundos", "Correr a la puerta", "Mojar el teclado"], 1, "El computador tarda unos segundos en despiertarse; la espera es parte de encenderlo.", "Los buenos tiempos esperan."],
      ["Presionar muchas veces seguidas el botón de encendido...", ["Es un juego divertido", "Hace el computador más rápido", "Es bueno para el computador", "No es bueno, puede confundirlo"], 3, "Muchas presiones seguidas confunden al computador; se presiona una sola vez."],
      ["¿Cómo sé que el computador ya se encendió?", ["La pantalla muestra algo", "Suena un teléfono", "Llueve afuera", "Se apaga la luz"], 0, "Cuando la pantalla muestra letras o dibujos, el computador ya está encendido.", "Mira la pantalla."],
      ["Encender el computador es...", ["Un trabajo solo para niños", "Una tarea que hace un adulto con cuidado", "Algo prohibido siempre", "Una cosa de magia"], 1, "Encender es una acción de adulto, hecha con calma y cuidado."],
      ["Si el computador no se enciende, ¿qué hago?", ["Le pego", "Lo mojo", "Le pido ayuda a la maestra", "Lo escondo bajo la silla"], 2, "Si algo no funciona, avisamos a un adulto. Nunca se golpea ni se moja.", "Los adultos ayudan a arreglar."],
      ["Esperar unos segundos es importante porque...", ["El computador tarda en preparar todo", "A los computadores les gusta dormir", "El aula se pone fría", "Los botones se enfrían"], 0, "Al encender, el computador prepara sus partes y tarda un poco; por eso esperamos sentados."],
      ["¿Cuántas veces se debe presionar el botón de encendido?", ["Diez veces", "Cinco veces", "Siempre tres", "Una sola vez"], 3, "Se presiona una vez con calma. Muchas presiones confunden al aparato.", "Solo una vez."],
      ["Al terminar de usar el computador, la maestra...", ["Lo tira a la basura", "Lo apaga o lo deja en espera", "Lo deja encendido para siempre", "Lo moja con la esponja"], 1, "Apagar o dejarlo en espera cuida el aparato y ahorra energía.", "Apagar también es cuidar."],
      ["Dejar el computador en espera significa que...", ["Ya no existe", "Se rompió para siempre", "Puedo encenderlo después", "Se convierte en tele"], 2, "En espera el computador guarda su trabajo y se puede encender otra vez."],
      ["Si el botón de encendido se queda trabado, ¿qué hago?", ["Intento arreglarlo yo", "Le sigo apretando fuerte", "Le aviso a un adulto de inmediato", "Lo tapo con papel"], 2, "Si un botón no funciona, avisamos de inmediato a un adulto; nunca lo arreglamos solos."]
    ],
    cl: {
      c: [["cuido", "ASÍ CUIDO EL COMPUTADOR", "✅"], ["nocuido", "ASÍ NO LO CUIDO", "⛔"]],
      i: [["Lo enciende un adulto", "cuido"], ["Espero sentado", "cuido"], ["Apago al terminar", "cuido"], ["Miro desde lejos", "cuido"], ["Le pego", "nocuido"], ["Lo mojo", "nocuido"], ["Le meto los dedos", "nocuido"], ["Lo empujo", "nocuido"]]
    },
    em: [["Botón de encendido", "prende el computador"], ["Esperar", "deja que se despierte"], ["Apagar", "cuida y ahorra energía"]],
    or: ["Levanto la mano y pido permiso", "La maestra presiona el botón", "Espero unos segundos", "Cuando veo la pantalla, empiezo"],
    e: ["Escribe o dibuja los pasos para encender el computador en tu salón.", "Pido permiso, espero y empiezo a trabajar.", 3]
  },
  {
    n: "Aparatos en mi salón",
    o: "Identifico los aparatos tecnológicos que usamos en la escuela.",
    d: "DBA 1º tecnología: reconoce aparatos tecnológicos comunes en su entorno escolar.",
    t: [
      ["El proyector", "El proyector manda una imagen grande a la pared o al tablero. La maestra lo usa para mostrar las lecciones.", "📽️"],
      ["La impresora", "La impresora saca en papel lo que está en el computador. Así tengo mis hojas para colorear.", "🖨️"],
      ["El timbre y el reloj", "En la escuela hay timbre eléctrico y reloj digital. El timbre marca el cambio de clase y el reloj dice la hora.", "⏰"]
    ],
    q: [
      ["¿Qué aparato manda una imagen grande a la pared del salón?", ["El proyector", "La nevera", "El ventilador", "La tijera"], 0, "El proyector proyecta la imagen del computador en la pared o el tablero.", "Suena a cine."],
      ["La impresora sirve para...", ["Cocinar el almuerzo", "Sacar en papel lo del computador", "Lavar la ropa", "Poner música fuerte"], 1, "La impresora imprime las hojas con lo que está en el computador.", "Piensa en tus hojas de colorear."],
      ["El timbre eléctrico de la escuela sirve para...", ["Dar la comida", "Prender las luces", "Avisar el cambio de clase", "Limpiar el piso"], 2, "El timbre suena para avisar cuándo cambia la clase o el recreo."],
      ["Un reloj digital muestra la hora con...", ["Letras pintadas", "Piedritas", "Números", "Dibujos de animales"], 2, "El reloj digital enseña la hora con números en una pantallita."],
      ["¿Cuál de estos aparatos hay en muchas escuelas?", ["La batidora", "El proyector", "La olla arrocera", "El horno"], 1, "En el salón hay proyector, impresora y computador; la batidora es de la cocina.", "Está en el salón."],
      ["El proyector se conecta al...", ["Cuaderno", "Computador", "Mochila", "Árbol"], 1, "El proyector recibe la imagen del computador y la muestra grande."],
      ["¿Para qué uso la impresora en la escuela?", ["Para comer", "Para correr", "Para tener en papel mis hojas de trabajo", "Para dormir"], 2, "La impresora convierte lo del computador en hojas de papel que puedo usar."],
      ["El reloj digital nos ayuda a...", ["Saber la hora", "Saber el peso", "Saber cuántas flores hay", "Saber si llueve"], 0, "El reloj digital enseña la hora con números."],
      ["¿Quién maneja el proyector en clase?", ["El payaso", "El lechero", "La maestra", "El conserje de la plaza"], 2, "La maestra enciende y maneja el proyector para la lección."],
      ["Todos los aparatos del salón se usan...", ["Mojándolos", "Golpeándolos", "Haciendo ruido", "Con permiso y cuidado"], 3, "En el salón los aparatos se usan con permiso, con calma y con cuidado.", "Primero pido permiso."],
      ["Un aparato tecnológico es uno que...", ["Usa electricidad o pilas para trabajar", "Es de trapo", "Se puede comer", "No sirve para nada"], 0, "Los aparatos tecnológicos usan energía, como la electricidad o las pilas, para trabajar.", "¿Necesita enchufe o pilas?"],
      ["Si a la impresora se le acaba el papel, ¿qué hago?", ["Le meto los dedos", "Le pongo mi cuaderno adentro", "Le aviso a la maestra", "La golpeo"], 2, "Si falta papel o algo falla, avisamos a un adulto; nunca metemos las manos.", "Los adultos ayudan."]
    ],
    cl: {
      c: [["aparato", "APARATO DEL SALÓN", "🏫"], ["noaparato", "NO ES UN APARATO", "✏️"]],
      i: [["Proyector", "aparato"], ["Impresora", "aparato"], ["Computador", "aparato"], ["Reloj digital", "aparato"], ["Cartulina", "noaparato"], ["Tijera", "noaparato"], ["Goma", "noaparato"], ["Papel", "noaparato"]]
    },
    em: [["Proyector", "manda la imagen a la pared"], ["Impresora", "saca en papel"], ["Reloj digital", "muestra la hora"]],
    or: ["La maestra enciende el proyector", "Conecta el computador", "Se ve la imagen en la pared", "Copio lo importante en mi cuaderno"],
    e: ["Escribe el nombre de dos aparatos de tu salón.", "Proyector y computador.", 3]
  },
  {
    n: "¿Usa electricidad?",
    o: "Diferencio cosas que usan electricidad o pilas de las que no la usan.",
    d: "DBA 1º tecnología: reconoce aparatos tecnológicos comunes y cómo funcionan en su entorno.",
    t: [
      ["La electricidad", "La electricidad es una energía que no se ve. Hace que el ventilador gire y que la luz se prenda.", "⚡"],
      ["Las pilas", "Algunos aparatos no llevan cable: usan pilas. Las pilas guardan energía para que el aparato trabaje.", "🔋"],
      ["Sin energía no trabaja", "Cuando se va la luz o se acaban las pilas, el aparato deja de funcionar. Por eso cuidamos la energía.", "🌑"]
    ],
    q: [
      ["¿Cuál de estos aparatos usa electricidad?", ["El ventilador", "La mochila", "El lápiz", "El pañuelo"], 0, "El ventilador necesita electricidad para girar y soplar aire.", "Tiene cable y enchufe."],
      ["La electricidad es...", ["Un tipo de juguete", "Una energía que no se ve", "Una fruta", "Un calzado"], 1, "La electricidad es una energía invisible que hace trabajar a los aparatos.", "No se ve, pero hace cosas."],
      ["¿Qué guardan las pilas?", ["Agua", "Comida", "Energía", "Aire frío"], 2, "Las pilas guardan energía para los aparatos que no tienen cable."],
      ["Un aparato sin electricidad y sin pilas...", ["Se vuelve más rápido", "Puede trabajar igual", "Sirve mejor", "No puede trabajar"], 3, "Sin energía el aparato no funciona; necesita electricidad o pilas."],
      ["¿Cuál usa pilas y no cable?", ["El ventilador del salón", "El reloj de pulsera", "La lámpara de la cocina", "La televisión grande"], 1, "El reloj de pulsera funciona con pilas pequeñas y no tiene cable.", "Lo llevas en la muñeca."],
      ["¿Cuál de estos NO usa electricidad?", ["El computador", "La cartulina", "El celular", "La licuadora"], 1, "La cartulina es de papel; no necesita energía para existir."],
      ["Cuando se va la luz de un barrio, los aparatos...", ["Cantan mejor", "Se vuelven juguetes", "Dejan de funcionar", "Cocinan más rápido"], 2, "Sin electricidad los aparatos dejan de funcionar hasta que vuelva la luz."],
      ["Ahorrar energía significa...", ["Dejar todo encendido", "Usar solo lo necesario y apagar lo que no uso", "Romper los cables", "Tocar los enchufes"], 1, "Ahorrar energía es encender solo lo necesario y apagar lo que no se usa.", "Cuidar también es ahorrar."],
      ["¿Cuál trabaja con pilas y también con su cargador?", ["El libro", "La cartulina", "El papel", "El celular"], 3, "El celular usa pilas recargables; funciona con su cargador conectado a la electricidad."],
      ["El enchufe es el lugar donde...", ["Se guardan los juguetes", "Se conecta un aparato a la electricidad", "Se pinta el salón", "Se deja la mochila"], 1, "Por el enchufe llega la electricidad al aparato.", "Es de la pared."],
      ["¿Cuál de estos aparatos del hogar usa electricidad para trabajar?", ["La nevera", "La mesa", "El plato", "El guante"], 0, "La nevera usa electricidad para mantener los alimentos fríos."],
      ["Si veo un cable suelto o un enchufe mojado...", ["Lo toco un poco", "Lo jalo para ver", "Le aviso a un adulto", "Lo mojo más"], 2, "Un cable suelto o mojado puede ser peligroso; avisamos a un adulto y no lo tocamos.", "Los adultos ayudan."]
    ],
    cl: {
      c: [["energia", "USA ELECTRICIDAD O PILAS", "⚡"], ["noenergia", "NO USA ENERGÍA", "🛋️"]],
      i: [["Ventilador", "energia"], ["Nevera", "energia"], ["Computador", "energia"], ["Reloj de pulsera", "energia"], ["Cartulina", "noenergia"], ["Mesa", "noenergia"], ["Guante", "noenergia"], ["Servilleta", "noenergia"]]
    },
    em: [["Electricidad", "energía que no se ve"], ["Pila", "guarda energía"], ["Enchufe", "lleva energía al aparato"], ["Apagar", "ahorra energía"]],
    or: ["Reviso que mis manos estén secas", "Le pido permiso a un adulto", "El adulto conecta el aparato", "Lo uso con cuidado y lo apago"],
    e: ["Dibuja dos cosas de tu casa que usen electricidad y dos que no la usan.", "Usan: ventilador y lámpara. No usan: silla y trapo.", 3]
  },
  {
    n: "Pilas y enchufes con cuidado",
    o: "Reconozco las pilas y el enchufe y pido ayuda a un adulto para manejarlos.",
    d: "DBA 1º tecnología: reconoce los aparatos tecnológicos de su entorno y los usa con cuidado.",
    t: [
      ["Las pilas", "Las pilas son pequeñas. Guardan energía para los aparatos, pero no son juguetes.", "🔋"],
      ["El enchufe", "El enchufe da electricidad a los aparatos. Solo un adulto conecta los cables.", "🔌"],
      ["Pilas no a la boca", "Las pilas pequeñas son peligrosas si se tragan o se muerden. Por eso solo las usa un adulto.", "⚠️"]
    ],
    q: [
      ["¿Quién debe poner las pilas en un aparato?", ["Un adulto", "Mi mascota", "Mi muñeca", "Yo solo"], 0, "Las pilas las pone un adulto; así se evitan accidentes.", "Los adultos ayudan."],
      ["Las pilas guardan...", ["Comida", "Energía", "Agua", "Ropa"], 1, "Las pilas guardan energía para los aparatos pequeños."],
      ["¿Qué hago si encuentro una pila en el piso?", ["La meto a la boca", "La pico", "Le aviso a un adulto", "La tiro al inodoro"], 2, "Una pila suelta se le entrega a un adulto; nunca se pica ni se lleva a la boca.", "Se la doy a un adulto."],
      ["El enchufe de la pared da...", ["Luz del sol", "Agua", "Papel", "Electricidad"], 3, "Por el enchufe llega la electricidad a los aparatos."],
      ["¿Es correcto meter los dedos al enchufe?", ["No, es peligroso", "Sí, siempre", "Sí, si estoy aburrido", "Sí, si me lo pide un amigo"], 0, "Meter los dedos al enchufe es muy peligroso; la electricidad puede lastimar.", "Los dedos nunca van al enchufe."],
      ["Las pilas gastadas se...", ["Comen", "Se pisan para jugar", "Las revisa un adulto para reciclarlas", "Se tiran al río"], 2, "Las pilas gastadas las recoge un adulto; no se tiran al río ni a la basura común."],
      ["Si se va la electricidad, ¿qué hago?", ["Jalo los cables", "Meto los dedos al enchufe", "Espero con un adulto y no toco los enchufes", "Mojo el panel"], 2, "Durante un apagón esperamos con un adulto; nunca tocamos cables ni enchufes.", "Paciencia y calma."],
      ["¿Dónde se guardan las pilas hasta que un adulto las use?", ["En la boca", "En el patio", "En un cajón con los aparatos", "En la nevera"], 2, "Las pilas se guardan en un lugar seguro, lejos de los niños pequeños."],
      ["Un cable pelado o roto...", ["Se arregla con cinta de colores solo", "Es peligroso y hay que avisar a un adulto", "Sirve para saltar", "Se moja para limpiarlo"], 1, "Un cable dañado puede dar electricidad; no se toca y se avisa a un adulto.", "Aviso a un adulto."],
      ["Las pilas no son juguetes porque...", ["Son muy aburridas", "No tienen color", "Son muy grandes", "Pueden ser peligrosas si se tragan o se muerden"], 3, "Las pilas traen materiales peligrosos por dentro; por eso solo las manejan adultos."],
      ["¿Quién conecta los aparatos grandes de la casa?", ["Mi hermanito", "Mi amiga", "Un adulto", "Yo"], 2, "Los aparatos grandes se conectan solamente con ayuda de un adulto.", "Solo los adultos conectan."],
      ["Para cambiar la pila del reloj de la abuela...", ["Lo abro yo", "Lo golpeo", "Lo mojo", "Le pido a un adulto que lo haga"], 3, "Cambiar las pilas de otros aparatos lo hace un adulto; yo le pido ayuda."]
    ],
    cl: {
      c: [["adulto", "LO USA UN ADULTO", "🔧"], ["solo", "COSAS SEGURAS PARA MÍ", "🧸"]],
      i: [["Pila", "adulto"], ["Enchufe", "adulto"], ["Cable", "adulto"], ["Panel de luz", "adulto"], ["Pelota", "solo"], ["Libro", "solo"], ["Cartulina", "solo"], ["Cadena de colores", "solo"]]
    },
    em: [["Pila", "guarda energía"], ["Enchufe", "da electricidad"], ["Cable", "lleva la electricidad"], ["Pila gastada", "se recicla con un adulto"]],
    or: ["Le aviso a un adulto", "El adulto consigue la pila nueva", "El adulto cambia la pila", "Le doy las gracias"],
    e: ["Escribe una regla de seguridad para las pilas.", "Las pilas las usa un adulto.", 3]
  },
  {
    n: "Aparatos que me comunican",
    o: "Reconozco aparatos que sirven para comunicarme con otras personas.",
    d: "DBA 1º tecnología: reconoce aparatos tecnológicos comunes en su hogar que sirven para comunicarse.",
    t: [
      ["El teléfono", "El teléfono fijo y el celular sirven para hablar con alguien que está lejos. Siempre los maneja un adulto.", "📞"],
      ["Mensajes y videos", "Con el celular se envían mensajes y se hacen videollamadas. Yo me veo con mi abuela cuando mi mamá lo permite.", "🎥"],
      ["Pido permiso", "No uso el celular de los adultos sin pedir permiso. Es un aparato para hablar, no un juguete.", "🙋"]
    ],
    q: [
      ["¿Para qué sirve el teléfono?", ["Cocinar el arroz", "Hablar con alguien que está lejos", "Barrer el salón", "Planchar la ropa"], 1, "El teléfono nos deja hablar a distancia con familiares y amigos.", "Para saludar a quien no está cerca."],
      ["Un celular puede enviar...", ["Mensajes", "Agua", "Comida", "Arepas"], 0, "Con el celular se envían mensajes escritos, fotos y videos."],
      ["Una videollamada es...", ["Un juego de pelota", "Un tipo de comida", "Una canción de cumbia", "Una llamada donde también nos vemos"], 3, "En la videollamada hablamos y nos vemos por la pantalla."],
      ["¿Quién maneja el celular en mi casa?", ["Un adulto que me autoriza", "Yo siempre", "Mi muñeca", "Mi mascota"], 0, "El celular lo usamos con permiso de un adulto.", "Primero pido permiso."],
      ["Con el celular, mi mamá puede hablar con...", ["Los peces del río", "La abuela que vive lejos", "Los árboles del parque", "La Luna"], 1, "El teléfono conecta a las personas aunque estén lejos."],
      ["¿Qué hago cuando quiero usar el celular de mi papá?", ["Lo tomo sin decir nada", "Lo escondo en la mochila", "Le pido permiso", "Lo lavo con agua"], 2, "Pedir permiso es respetuoso; el celular es de otra persona.", "Las palabras mágicas ayudan."],
      ["El celular es...", ["Un mueble", "Una consola de cocina", "Un aparato para comunicarnos", "Una plaza"], 2, "El celular es un aparato tecnológico para comunicarnos; no es un juguete."],
      ["Si el celular suena mientras como, ¿qué hago?", ["Contesto y sigo comiendo", "Lo mojo", "Lo rompo", "Le aviso a mi mamá"], 3, "El adulto decide atender el celular; yo sigo con mi comida.", "Los adultos ayudan."],
      ["¿Cuál de estos aparatos también sirve para comunicarse?", ["La nevera", "El ventilador", "El teléfono fijo", "La olla arrocera"], 2, "El teléfono fijo y el celular son aparatos para hablar con otros."],
      ["Hacer videollamadas sirve para...", ["Lavar la ropa", "Ver y hablar con alguien lejos", "Comer más rápido", "Pintar la casa"], 1, "En la videollamada vemos y escuchamos a la persona que está lejos.", "Nos vemos por la pantalla."],
      ["Los aparatos de comunicación usan...", ["Arena de la playa", "Pintura de colores", "Electricidad o pilas", "Telas de colores"], 2, "Los teléfonos funcionan con electricidad o pilas para poder comunicarnos."],
      ["Mi primo vive en otra ciudad. ¿Cómo puedo saludarlo?", ["Le mando un pez", "Le planto un árbol", "Le grito desde la ventana", "Le hago una videollamada con mi mamá"], 3, "La videollamada o la llamada telefónica nos deja saludar a quien está lejos.", "La distancia se achica."]
    ],
    cl: {
      c: [["comunica", "PARA HABLAR CON OTROS", "📞"], ["nocomunica", "NO SIRVE PARA HABLAR", "🍲"]],
      i: [["Teléfono fijo", "comunica"], ["Celular", "comunica"], ["Mensajes", "comunica"], ["Videollamada", "comunica"], ["Nevera", "nocomunica"], ["Ventilador", "nocomunica"], ["Olla arrocera", "nocomunica"], ["Lámpara", "nocomunica"]]
    },
    em: [["Teléfono", "hablamos a distancia"], ["Mensaje", "palabras que llegan por escrito"], ["Videollamada", "nos vemos y hablamos"], ["Permiso", "lo pido antes de usar el celular"]],
    or: ["Le pido permiso a mi mamá", "Marcamos el número juntos", "Hablamos con calma", "Le doy las gracias y cuelgo"],
    e: ["Escribe a quién te gusta saludar por teléfono y qué le dices.", "Saludo a mi abuela y le digo te quiero.", 3]
  },
  {
    n: "Aparatos que trabajan en casa",
    o: "Identifico aparatos del hogar y para qué sirve cada uno.",
    d: "DBA 1º tecnología: reconoce aparatos tecnológicos comunes en su entorno del hogar.",
    t: [
      ["El refrigerador", "La nevera mantiene fríos los alimentos para que no se dañen. Usa electricidad todo el día.", "🧊"],
      ["La olla y la batidora", "La olla arrocera cocina el arroz y la batidora licúa las frutas. Son aparatos de la cocina.", "🍲"],
      ["La lavadora", "La lavadora limpia la ropa con agua y electricidad. Así cuidamos nuestra ropa.", "🧺"]
    ],
    q: [
      ["¿Qué aparato mantiene fríos los alimentos?", ["La nevera", "El ventilador", "La olla", "La cama"], 0, "La nevera usa electricidad para mantener fríos la leche, la arepa y las frutas.", "Está en la cocina."],
      ["La olla arrocera sirve para...", ["Lavar la ropa", "Cocinar el arroz", "Planchar", "Barrer"], 1, "La olla arrocera cocina el arroz con electricidad."],
      ["¿Qué aparato limpia la ropa?", ["La nevera", "El ventilador", "La lavadora", "La lámpara"], 2, "La lavadora gira con agua y jabón para limpiar la ropa.", "Está donde guardo la ropa."],
      ["La batidora sirve para...", ["Apagar la luz", "Licuar las frutas", "Caminar", "Doblar la ropa"], 1, "La batidora licúa o mezcla las frutas para hacer jugos."],
      ["El ventilador de la casa...", ["Cocina", "Sopla aire fresco", "Lava platos", "Hiela la ropa"], 1, "El ventilador gira y sopla aire para sentirnos frescos.", "Sopla en verano."],
      ["¿Cuál aparato usa electricidad y agua para trabajar?", ["La mesa", "El cuaderno", "El guante", "La lavadora"], 3, "La lavadora necesita electricidad y agua para limpiar la ropa."],
      ["Si la nevera se queda sin electricidad...", ["Se vuelve un juguete", "Los alimentos se cuidan más", "Los alimentos pueden dañarse", "La nevera cocina"], 2, "Sin electricidad la nevera deja de enfriar y los alimentos pueden dañarse."],
      ["¿Cuál aparato da calor para cocinar?", ["La nevera", "El ventilador", "La tijera", "La estufa"], 3, "La estufa da calor para cocinar; siempre la maneja un adulto.", "Da mucho calor."],
      ["Los aparatos de la casa...", ["Sirven para subir encima", "Deben usarse con permiso y cuidado", "Se pueden mojar todos", "No tienen ninguna función"], 1, "Los aparatos se usan con permiso, con cuidado y nunca para subirse encima.", "No son columpios."],
      ["¿Quién maneja la estufa y la plancha?", ["Los niños", "Los bebés", "Los adultos", "Nadie"], 2, "La estufa y la plancha dan mucho calor; solo las manejan los adultos."],
      ["La nevera y la lavadora trabajan con...", ["Pinturas", "Arena", "Electricidad", "Globos"], 2, "Ambas usan electricidad para hacer su trabajo."],
      ["En verano, la nevera sirve para...", ["Dar luz", "Escuchar música", "Pasear", "Mantener los alimentos fríos"], 3, "La nevera mantiene fríos los alimentos; en verano cuida la leche y el agua.", "Guarda bien la leche."]
    ],
    cl: {
      c: [["cocina", "APARATOS DE LA COCINA", "🍳"], ["casa", "EN OTRA PARTE DE LA CASA", "🏠"]],
      i: [["Nevera", "cocina"], ["Olla arrocera", "cocina"], ["Batidora", "cocina"], ["Estufa", "cocina"], ["Lavadora", "casa"], ["Ventilador", "casa"], ["Televisor", "casa"], ["Teléfono", "casa"]]
    },
    em: [["Nevera", "mantiene los alimentos fríos"], ["Olla arrocera", "cocina el arroz"], ["Lavadora", "limpia la ropa"], ["Ventilador", "sopla aire fresco"]],
    or: ["Le pido permiso a un adulto", "El adulto prende el aparato", "Hago mi tarea con el aparato", "El adulto lo apaga y lo guarda"]
  },
  {
    n: "Si algo falla, pido ayuda",
    o: "Sé qué hacer cuando un aparato se daña o no funciona.",
    d: "DBA 1º tecnología: usa los aparatos tecnológicos comunes con cuidado y seguridad.",
    t: [
      ["Aviso a un adulto", "Si un aparato no funciona, se lo digo a un adulto. Ellos saben ayudar y arreglar.", "🔧"],
      ["Nunca solo", "No abro los aparatos ni meto cosas por los agujeros. Los aparatos se arreglan solo con ayuda.", "🚫"],
      ["Los aparatos son frágiles", "Los aparatos no se golpean, no se mojan y no se tiran al piso. Se llevan con cuidado.", "🤲"]
    ],
    q: [
      ["El computador no prende. ¿Qué hago?", ["Le pego", "Aviso a la maestra", "Lo mojo", "Lo tiro por la ventana"], 1, "Cuando algo no funciona, avisamos a un adulto. Ellos ayudan a arreglarlo.", "Los adultos ayudan."],
      ["¿Qué hago si un aparato hace un ruido raro?", ["Lo tapo con la cobija", "Sigo jugando", "Le aviso a un adulto", "Le doy patadas"], 2, "Un ruido raro puede avisar que algo falla; conviene avisar a un adulto.", "Primero escucho y aviso."],
      ["¿Puedo abrir un aparato para ver sus partes?", ["Sí, siempre", "Sí, si estoy aburrido", "No, es peligroso", "Sí, con permiso de mi amigo"], 2, "Abrir un aparato es peligroso; sus partes solo las revisa un adulto.", "Los dedos no van adentro."],
      ["Si mojo un aparato por accidente...", ["Sigo usándolo", "Le aviso a un adulto de inmediato", "Lo sacudo fuerte", "Lo conecto otra vez"], 1, "Un aparato mojado puede dar electricidad; se avisa a un adulto y no se toca."],
      ["¿Es bueno tirar el celular al piso?", ["Sí, es un juego", "Sí, prueba que es fuerte", "No, se puede romper", "Sí, siempre"], 2, "Los aparatos son frágiles; si se caen se pueden romper la pantalla."],
      ["Se me cayó la tablet. ¿Qué le digo a mi mamá?", ["Nada, la escondo", "Le cuento lo que pasó", "Le echo la culpa a mi hermano", "La mojo para que no se note"], 1, "Contar la verdad ayuda a que un adulto revise si la tablet está bien.", "Decir la verdad siempre ayuda."],
      ["¿Quién puede arreglar un aparato?", ["Yo", "Mi amigo", "Mi muñeca", "Un adulto que sabe"], 3, "Los aparatos los arreglan adultos con conocimientos; yo no los abro."],
      ["Si la pantalla de un aparato se ve rara...", ["La golpeo", "La mojo", "Le aviso a un adulto", "La tapo con papel"], 2, "Una pantalla rara puede indicar una falla; avisamos a un adulto."],
      ["Los aparatos se llevan...", ["Con cuidado y con las dos manos", "Lanzándolos", "Pateándolos", "Tirándolos al piso"], 0, "Llevarlos con cuidado y con las dos manos evita que se caigan y se rompan.", "Dos manos siempre."],
      ["Si un aparato se calienta mucho...", ["Sigo usándolo", "Lo mojo con agua", "Le aviso a un adulto", "Lo pongo en la nevera"], 2, "Un aparato muy caliente puede estar fallando; avisamos a un adulto y no lo tocamos.", "Un calor raro avisa algo."],
      ["¿Qué hago si no sé prender un aparato?", ["Lo fuerzo", "Le pido ayuda a un adulto", "Le golpeo los botones", "Lo rompo"], 1, "Si no sé cómo funciona, pido ayuda; nunca fuerzo los botones.", "Pedir ayuda es de valientes."],
      ["Después de un problema con un aparato...", ["Lo uso igual", "Lo desconecto y aviso", "Lo escondo", "Lo mojo"], 1, "Si hubo un problema, se desconecta con ayuda de un adulto y se avisa."],
    ],
    cl: {
      c: [["hago", "ESTO SÍ HAGO", "✅"], ["nohago", "ESTO NO HAGO", "⛔"]],
      i: [["Aviso a un adulto", "hago"], ["Lo desconecto con ayuda", "hago"], ["Lo llevo con dos manos", "hago"], ["Conto la verdad", "hago"], ["Lo golpeo", "nohago"], ["Lo mojo", "nohago"], ["Lo abro solo", "nohago"], ["Lo tiro al piso", "nohago"]]
    },
    em: [["No funciona", "aviso a un adulto"], ["Se mojó", "no lo toco y pido ayuda"], ["Se cayó", "lo revisa un adulto"], ["La verdad", "ayuda a arreglar"]],
    or: ["Miro qué pasó sin tocar", "Levanto la mano y aviso", "El adulto revisa el aparato", "Sigo con otra actividad"],
    e: ["Escribe qué harías si un aparato de tu casa dejara de funcionar.", "Le aviso a mi mamá y espero su ayuda.", 3]
  },
  {
    n: "Hago fotos y videos",
    o: "Reconozco la cámara de los aparatos y sé cuándo y cómo usarla con ayuda.",
    d: "DBA 1º tecnología: reconoce aparatos tecnológicos comunes de su entorno y sus funciones básicas.",
    t: [
      ["La cámara", "La tablet y el celular tienen cámara. Con ella tomamos fotos de lo que queremos recordar.", "📷"],
      ["Foto y video", "La foto guarda un momento quieto. El video guarda movimiento y sonido, como una mini película.", "🎬"],
      ["Con permiso", "Antes de sacar fotos o videos, pido permiso. También me gusta que me avisen cuando me fotografían.", "🙋"]
    ],
    q: [
      ["¿Qué aparato tiene cámara para tomar fotos?", ["La tablet", "La nevera", "El ventilador", "La olla"], 0, "La tablet y el celular tienen cámara para tomar fotos y videos.", "Es un aparato con pantalla."],
      ["Una foto guarda...", ["Un agua fría", "Un momento quieto", "Un olor", "Una canción completa"], 1, "La foto es una imagen de un momento que no se mueve.", "Se queda inmóvil."],
      ["Un video guarda...", ["Solo olores", "Movimiento y sonido", "Solo sabores", "Solo colores"], 1, "El video guarda el movimiento y el sonido, como una mini película.", "Se mueve y se oye."],
      ["Antes de sacar una foto a mi amigo...", ["Le mojo el pelo", "Le quito la mochila", "Le pido permiso", "Lo asusto"], 2, "Pedir permiso es respetar a la otra persona; a muchos no les gusta que los graben sin avisar.", "Primero pregunto."],
      ["¿Qué hago cuando me tocan una foto o un video?", ["Corro lejos", "Me tapo y lloro", "Puedo seguir jugando con calma", "Golpeo el aparato"], 2, "Si me avisan, puedo seguir jugando con calma; me siento respetado."],
      ["¿Quién me ayuda a tomar fotos y videos?", ["Mi mascota", "El muñeco", "Nadie", "Un adulto"], 3, "Un adulto me ayuda a sostener el aparato y a no caerme.", "Los adultos ayudan."],
      ["¿Cuál es un buen momento para tomar una foto?", ["Cuando celebramos algo en la escuela", "Cuando alguien llora", "Cuando alguien se cae", "Cuando alguien está triste"], 0, "Las fotos guardan momentos felices; no se fotografía a quien está mal."],
      ["¿Dónde se ven las fotos que tomamos?", ["En la nevera", "En la pantalla del aparato", "En el pizarrón", "En el patio"], 1, "Las fotos se ven en la pantalla de la tablet o el celular."],
      ["Tomar muchas fotos sin parar...", ["Es mejor", "No es amable ni cuida la batería", "Hace el aparato más grande", "Es la mejor costumbre"], 1, "Grabar sin parar cansa la batería y puede incomodar a los demás."],
      ["¿Qué hago con el celular de mi mamá para tomar fotos?", ["Lo escondo", "Lo mojo", "Lo rompo", "Lo pido, lo uso con cuidado y se lo devuelvo"], 3, "Uso el aparato con permiso, con cuidado y lo devuelvo enseguida.", "Primero pido permiso."],
      ["¿Cuál de estos NO se puede grabar con la cámara?", ["Una danza del salón", "Un dibujo del cuaderno", "Una flor del patio", "Un olor a la comida"], 3, "La cámara guarda lo que se ve y se oye; los olores no se pueden grabar."],
      ["Si se me cae el celular al tomar una foto...", ["Sigo grabando", "Lo mojo", "Le aviso a un adulto", "Le pego"], 2, "Si algo se cae, avisamos a un adulto para que revise si está bien.", "Aviso a un adulto."]
    ],
    cl: {
      c: [["guarda", "LO GUARDA LA CÁMARA", "📷"], ["noguarda", "NO LO PUEDE GUARDAR", "👃"]],
      i: [["Foto", "guarda"], ["Video", "guarda"], ["Un abrazo de la clase", "guarda"], ["Una canción de la radio", "guarda"], ["Un olor", "noguarda"], ["Un sabor", "noguarda"], ["El viento", "noguarda"], ["Un pensamiento", "noguarda"]]
    },
    em: [["Foto", "momento quieto"], ["Video", "movimiento y sonido"], ["Permiso", "lo pido antes de grabar"], ["Pantalla", "allí veo mis fotos"]],
    or: ["Pido permiso a la persona", "Un adulto sostiene el aparato", "Tomamos la foto o el video", "La vemos juntos en la pantalla"],
    e: ["Escribe qué te gusta fotografiar y a quién le pedirías permiso.", "Me gusta fotografiar a mi familia y les pido permiso.", 3]
  }
];

/* ====== g1 / artistica ====== */
/* DBA 1º — artistica */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.artistica = [
  {
    n: "Mezclo colores",
    o: "Mezclo los colores primarios y descubro colores nuevos.",
    d: "DBA 1º artística: explora el color a través del juego y la experimentación.",
    t: [
      ["Tres colores primarios", "El rojo, el amarillo y el azul son los colores primarios. Con ellos puedo crear muchos colores nuevos.", "🎨"],
      ["Descubro el naranja", "Si mezclo rojo y amarillo, obtengo naranja. Prueba con tu pincel y sorpréndete.", "🧡"],
      ["Cuido mis colores", "Uso la témpera con cuidado, mezclo poquito a poco y lavo el pincel al terminar.", "🧼"]
    ],
    q: [
      ["Si mezclo rojo y amarillo, ¿qué color obtengo?", ["Naranja", "Verde", "Morado", "Rosado"], 0, "Rojo más amarillo hace naranja.", "Los dos juntos."],
      ["¿Cuáles son los colores primarios?", ["Verde y naranja", "Rosado y morado", "Rojo, amarillo y azul", "Blanco y negro"], 2, "Los primarios son rojo, amarillo y azul; con ellos se hacen los demás colores.", "Son los primeros."],
      ["Si mezclo azul y amarillo, ¿qué color aparece?", ["Naranja", "Verde", "Negro", "Rosado"], 1, "Azul más amarillo hace verde."],
      ["¿Qué color sale de rojo y azul?", ["Verde", "Amarillo", "Naranja", "Morado"], 3, "Rojo más azul hace morado.", "Piensa en una uva."],
      ["Mezclar colores en el papel es...", ["Un juego de descubrimiento", "Algo prohibido", "Un castigo", "Una limpieza"], 0, "Mezclar es explorar; así aprendemos qué colores se pueden crear.", "Exploro y aprendo."],
      ["Antes de mezclar, ¿qué hago con el pincel?", ["Lo mojo mucho", "Lo piso", "Lo lavo un poquito", "Lo escondo"], 2, "Si limpio un poco el pincel, el color sale limpio y bonito.", "Agua y trapo."],
      ["Si pongo demasiada témpera, ¿qué pasa?", ["Sale el color perfecto", "Se hace un charco y se mezcla todo", "El papel desaparece", "El color se vuelve invisible"], 1, "Con mucha témpera se hace un charco; mejor poquito a poco.", "Poquito a poco."],
      ["¿Qué color obtengo si mezclo rojo con blanco?", ["Morado", "Verde", "Amarillo", "Rosado"], 3, "Rojo con blanco hace rosado; el blanco aclara cualquier color.", "Como un vestido de gala."],
      ["El verde se hace mezclando...", ["Azul y amarillo", "Rojo y amarillo", "Rojo y azul", "Blanco y negro"], 0, "Azul más amarillo hace verde.", "Como las hojas."],
      ["Si mezclo muchos colores a la vez, ¿qué sale?", ["Un arcoíris", "El color primario", "Un color apagado o sucio", "Un color dorado"], 2, "Mezclar muchos colores da un tono apagado; conviene mezclar de a dos.", "De a dos se ve mejor."],
      ["¿Dónde puedo mezclar colores?", ["En mi almuerzo", "En una cartulina con témpera", "En la nevera", "En el patio sin papel"], 1, "Mezclamos en papel o cartulina, con témpera o pintura.", "Papel y pincel."],
      ["Al terminar de pintar, mis manos...", ["Las dejo sucias todo el día", "Las escondo", "Las mojo en la témpera", "Las lavo con agua y jabón"], 3, "Después de pintar lavo mis manos con agua y jabón; así cuido mi piel.", "Agua y jabón siempre."]
    ],
    cl: {
      c: [["prim", "COLOR PRIMARIO", "🔴"], ["mez", "COLOR MEZCLADO", "🟠"]],
      i: [["Rojo", "prim"], ["Amarillo", "prim"], ["Azul", "prim"], ["Naranja", "mez"], ["Verde", "mez"], ["Morado", "mez"], ["Rosado", "mez"]]
    },
    em: [["Rojo y amarillo", "naranja"], ["Azul y amarillo", "verde"], ["Rojo y azul", "morado"], ["Rojo y blanco", "rosado"]],
    or: ["Elijo dos colores", "Lavo un poco el pincel", "Mezclo poquito a poco", "Lavo el pincel y mis manos"],
    e: ["Escribe qué color sale si mezclas azul y amarillo.", "Verde.", 3]
  },
  {
    n: "Dibujo lo que quiero",
    o: "Me expreso con el dibujo libre y respeto los dibujos de los demás.",
    d: "DBA 1º artística: explora el dibujo libre como forma de expresarse a través del juego.",
    t: [
      ["Mi dibujo, mis ideas", "Cuando dibujo libremente, elijo yo qué quiero dibujar: mi casa, el río o un animal.", "✏️"],
      ["No hay dibujos malos", "Todos los dibujos son buenos porque cuentan algo de mí. No comparo mi dibujo con el de otros.", "💛"],
      ["Cuido mi cuaderno", "Uso los lápices con cuidado, no doblo las hojas y comparto los colores con mis compañeros.", "📓"]
    ],
    q: [
      ["Cuando dibujo libremente, ¿quién elige qué dibujar?", ["La maestra", "Yo", "Mi mamá", "El conserje"], 1, "Dibujar libre quiere decir que yo elijo mi idea.", "Mis ideas son mías."],
      ["¿Puedo dibujar mi casa y también un animal?", ["No, solo uno", "Solo si la maestra dice que sí", "Solo en la pared", "Sí, puedo dibujar lo que quiero"], 3, "En el dibujo libre elijo yo mi tema; puedo cambiar de idea cuando quiera."],
      ["Si mi dibujo no se parece al de mi amigo...", ["Está bien, cada uno tiene su forma", "Lo borro", "Lo rompo", "Pinto el de él"], 0, "Cada persona dibuja a su manera; no hay dibujos malos ni iguales.", "Cada uno es único."],
      ["¿Qué hago cuando termino mi dibujo?", ["Lo tiro al piso", "Lo mojo", "Lo guardo con cuidado", "Lo piso"], 2, "Guardar con cuidado mi cuaderno protege mi trabajo y mi esfuerzo.", "Mi trabajo vale."],
      ["Dibujar me sirve para...", ["Expresar lo que siento y pienso", "Hacer silencio siempre", "Comer", "Correr más rápido"], 0, "El dibujo es una forma de decir lo que siento sin palabras."],
      ["Si no se me ocurre qué dibujar, ¿qué hago?", ["Rompo el papel", "Me salgo del salón", "Le quito el lápiz a otro", "Miro alrededor y pienso una idea"], 3, "Puedo mirar por la ventana o pensar en mi familia hasta que llegue una idea.", "Respiro y pienso."],
      ["¿Con qué materiales puedo dibujar?", ["Solo con el dedo", "Lápiz, colores, tiza o témpera", "Solo con agua", "Solo con arena"], 1, "Hay muchos materiales para dibujar; puedo explorar varios."],
      ["Mientras dibujo, ¿qué hago con mis compañeros?", ["Les quito sus colores", "Les digo qué dibujar", "Los respeto y dejo que dibujen lo suyo", "Les mojo su papel"], 2, "Respeto el espacio y las ideas de los demás mientras dibujo.", "Respeto y convivencia."],
      ["Un boceto es...", ["Un dibujo rápido que ayuda a pensar", "Un error", "Un castigo", "Una comida"], 0, "Un boceto es un dibujo rápido; me ayuda a organizar mis ideas antes de pintar.", "Dibujo de prueba."],
      ["Al mostrar mi dibujo a la clase...", ["Digo que lo hizo mi primo", "Lo escondo", "Lo mojo", "Cuento qué dibujé y por qué"], 3, "Contar qué dibujé me ayuda a expresarme y a compartir mis ideas.", "Con calma y orgullo."],
      ["¿Es bueno usar la imaginación al dibujar?", ["No, es pierde el tiempo", "Sí, la imaginación me crea mundos", "Solo de noche", "Solo si hay permiso"], 1, "La imaginación me permite dibujar cosas que no existen, como dragones amables.", "Imaginar es crear."],
      ["Si se me rompe un lápiz, ¿qué hago?", ["Lo tiro al piso", "Le pego a la mesa", "Pido otro con cuidado", "Lo mojo"], 2, "Pido otro lápiz con calma; los materiales se cuidan y se comparten.", "Pido y agradezco."]
    ],
    cl: {
      c: [["material", "MIS MATERIALES DE ARTE", "🖍️"], ["nomaterial", "NO SON MATERIALES DE ARTE", "🍲"]],
      i: [["Lápiz", "material"], ["Colores", "material"], ["Témpera", "material"], ["Pincel", "material"], ["Comida", "nomaterial"], ["Ropa", "nomaterial"], ["Zapatos", "nomaterial"], ["Arena", "nomaterial"]]
    },
    em: [["Dibujo libre", "yo elijo qué dibujar"], ["Imaginación", "me crea ideas nuevas"], ["Boceto", "dibujo rápido para pensar"], ["Cuaderno", "guardo mis dibujos"]],
    or: ["Pienso qué quiero dibujar", "Reúno mis lápices y colores", "Dibujo con calma", "Guardo mis materiales"],
    e: ["Dibuja algo que te guste y escribe su nombre.", "Dibujo de mi casa y la palabra casa.", 3]
  },
  {
    n: "Texturas: suave y áspero",
    o: "Reconozco texturas simples con las manos y las describo con palabras.",
    d: "DBA 1º artística: explora texturas simples a través del tacto y el juego.",
    t: [
      ["Suave y áspero", "El algodón es suave y el papel lija es áspero. Si paso las manos, siento la diferencia.", "🤲"],
      ["Liso y rugoso", "La hoja lisa se desliza y la corteza del árbol se siente rugosa, con muchos bultitos.", "🌳"],
      ["Toco con cuidado", "Toco los materiales con las manos limpias y con cuidado; lo muy áspero puede rasparme.", "✋"]
    ],
    q: [
      ["El algodón se siente...", ["Suave", "Áspero", "Mojado siempre", "Frío como el hielo"], 0, "El algodón es muy suave; si lo tocas, resbala en tus dedos.", "Como una nube."],
      ["El papel lija se siente...", ["Suave", "Dulce", "Áspero", "Frío como el agua"], 2, "El papel lija tiene puntitas; se siente áspero al tacto.", "Raspa poquito."],
      ["¿Cuál se siente liso y resbaloso?", ["La corteza del árbol", "La hoja lisa", "El papel lija", "Una piedra áspera"], 1, "La hoja de papel lisa se desliza suave por mis dedos."],
      ["La corteza del árbol se siente...", ["Como algodón", "Como vidrio", "Rugosa", "Como una seda"], 2, "La corteza tiene bultitos y grietas; se siente rugosa.", "Como montañitas."],
      ["Tocar texturas es un juego para...", ["Desarrollar mis sentidos", "Ensuciarme siempre", "Hacer ruido", "Dormir"], 0, "Al tocar materiales, entreno mis dedos y aprendo palabras nuevas para describir.", "Manos alertas."],
      ["Si un material áspero me raspa un poco...", ["Sigo frotando fuerte", "Dejo de frotar y se lo digo", "Lo mojo mucho", "Lo pego a mi cara"], 1, "Si algo me raspa, paro y se lo cuento a la maestra; así me cuido.", "Cuido mis manos."],
      ["¿Cuál de estos es suave?", ["La piedra del camino", "El papel lija", "El ladrillo", "El peluche"], 3, "El peluche está hecho de tela suave, como el algodón.", "Como un oso."],
      ["Para sentir las texturas, uso...", ["Los oídos", "La nariz", "Las manos", "La boca"], 2, "Las manos tienen mucha sensibilidad; con ellas siento si algo es suave o áspero.", "Mis dedos sienten."],
      ["La toalla de baño se siente...", ["Suave cuando está seca", "Áspera como el papel lija", "Como una piedra", "Como una tabla"], 0, "La toalla de tela se siente suave y esponjosa sobre la piel."],
      ["¿Dónde encuentro una textura áspera en la naturaleza?", ["En el agua del río", "En la arena fina", "En la corteza de un árbol", "En una nube"], 2, "La corteza de los árboles es rugosa y áspera; el agua y las nubes no."],
      ["Al describir una textura, puedo decir...",["Que sabe a arepa", "Que huele a perfume", "Que suena a cumbia", "Que es suave o áspera"], 3, "Con palabras como suave, áspero, liso o rugoso describo lo que mis manos sienten.", "Palabras de las manos."],
      ["¿Qué hago antes de tocar los materiales de la clase?", ["Me lavo las manos", "Me mojo el pelo", "Me siento en el piso", "Cierro los ojos"], 0, "Con las manos limpias cuido los materiales y mi salud.", "Agua y jabón primero."]
    ],
    cl: {
      c: [["suave", "TEXTURA SUAVE", "☁️"], ["aspero", "TEXTURA ÁSPERA", "⛰️"]],
      i: [["Algodón", "suave"], ["Peluche", "suave"], ["Toalla", "suave"], ["Tela", "suave"], ["Papel lija", "aspero"], ["Corteza", "aspero"], ["Piedra", "aspero"], ["Ladrillo", "aspero"]]
    },
    em: [["Algodón", "suave"], ["Papel lija", "áspero"], ["Hoja lisa", "liso"], ["Corteza", "rugoso"]],
    or: ["Me lavo las manos", "Toco un material con cuidado", "Digo si es suave o áspero", "Pruebo con otro material"]
  },
  {
    n: "Pinto con pincel y esponja",
    o: "Uso el pincel y otras herramientas para pintar y descubro sus huellas.",
    d: "DBA 1º artística: explora el color y las texturas simples pintando con distintas herramientas.",
    t: [
      ["El pincel", "El pincel lleva la pintura al papel. Lo sostengo como un lápiz y pinto con calma.", "🖌️"],
      ["Huellas de esponja", "Si mojo una esponja y la aprieto sobre el papel, queda una huella suave y esponjosa.", "🧽"],
      ["Limpio al terminar", "Al cambiar de color, lavo el pincel. Al terminar, lavo la esponja y cuido mi mesa.", "💦"]
    ],
    q: [
      ["¿Cómo sostengo el pincel para pintar?", ["Como un lápiz", "Con el pie", "Con la boca", "Con la rodilla"], 0, "Sostener el pincel como un lápiz me da más control para pintar.", "Entre los dedos."],
      ["Si mojo una esponja y la aprieto en el papel, queda...", ["Una línea finita", "Un círculo perfecto", "Una huella esponjosa", "Nada"], 2, "La esponja deja huellas suaves y con agujeritos, distintas a las del pincel.", "Huella de esponja."],
      ["Para pintar con el pincel necesito...", ["Agua sola", "Pintura o témpera", "Arena", "Piedras"], 1, "La témpera o la pintura se llevan con el pincel al papel.", "Pintura y papel."],
      ["Si quiero cambiar de color, ¿qué hago?", ["Pongo el color nuevo encima del viejo", "Tiro el pincel", "Lavo el pincel antes de tomar otro color", "Me mojo la cara"], 2, "Al lavar el pincel, los colores no se ensucian entre ellos.", "Agua y trapito."],
      ["Pintar con esponja es bueno para...", ["Descubrir huellas y texturas", "Mojar todo el salón", "Romper el papel", "Hacer ruido"], 0, "Cada herramienta deja una marca distinta; explorar es aprender.", "Exploro herramientas."],
      ["La témpera se guarda...", ["En el piso", "En la ventana", "En su envase, tapada", "En la mochila sin tapar"], 2, "Si cierro el envase, la témpera no se seca y se cuida para otro día.", "Siempre tapada."],
      ["¿Qué hago con mi mesa al terminar de pintar?", ["La dejo llena de pintura", "La limpio con ayuda de un adulto", "La mojo más", "La tiro"], 1, "Con ayuda limpio la mesa; así el salón queda listo para otros juegos.", "Trabajo en equipo."],
      ["¿Cuál NO es una herramienta para pintar?", ["El pincel", "La esponja", "El rodillo pequeño", "La cuchara de comer"], 3, "La cuchara sirve para comer; las otras herramientas llevan pintura al papel.", "Cuidado al elegir."],
      ["Si se me cae pintura en la mano...", ["Me la lavo y sigo", "Me la mojo más", "La paso por mi ropa", "Le pego a la mesa"], 0, "Me lavo las manos y sigo pintando con calma.", "Agua y jabón."],
      ["Los colores primarios que puedo usar son...", ["Blanco y negro", "Rojo, amarillo y azul", "Verde y rosado", "Naranja y morado"], 1, "Rojo, amarillo y azul son los primarios; con ellos hago los demás colores.", "Los tres básicos."],
      ["Pintar con calma me ayuda a...", ["Ensuciar más", "Controlar mejor el pincel", "Gastar toda la tinta", "Hacer ruido"], 1, "Cuando pinto con calma, mis trazos salen más bonitos y no mancho de más.", "Paciencia y pulso."],
      ["Al terminar, ¿dónde dejo el pincel?", ["Limpio y en su lugar", "En el piso", "Sucio en mi mochila", "Sobre la ventana"], 0, "Dejar limpio y en su lugar cada herramienta ayuda a cuidar el salón.", "Un buen hábito."]
    ],
    cl: {
      c: [["pinto", "CON ESTO PINTO", "🖌️"], ["nopinto", "NO PINTO CON ESTO", "🍽️"]],
      i: [["Pincel", "pinto"], ["Esponja", "pinto"], ["Rodillo pequeño", "pinto"], ["Témpera", "pinto"], ["Cuchara", "nopinto"], ["Arena", "nopinto"], ["Piedras", "nopinto"], ["Comida", "nopinto"]]
    },
    em: [["Pincel", "lleva la pintura al papel"], ["Esponja", "deja huellas esponjosas"], ["Témpera", "pintura del salón"], ["Rodillo", "pinta superficies grandes"]],
    or: ["Pongo un poco de témpera en el plato", "Mojo la herramienta y escurro un poco", "Pinto con calma en mi hoja", "Lavo la herramienta y la guardo"],
    e: ["Escribe qué herramienta usarías para dejar huellas esponjosas.", "La esponja.", 3]
  },
  {
    n: "Mi cuerpo expresa",
    o: "Expreso ideas y emociones con mi cuerpo a través del juego.",
    d: "DBA 1º artística: explora la expresión corporal mediante el juego.",
    t: [
      ["Mi cuerpo habla", "Con mi cuerpo puedo parecer un árbol, un pájaro o una rana. Mis movimientos cuentan cosas.", "🤸"],
      ["Lento y rápido", "Puedo moverme lento como un caracol o rápido como un caballito. El ritmo lo elijo yo.", "🐌"],
      ["Me expreso sin miedo", "No hay movimientos malos. Me divierto moviéndome y respeto el espacio de mis compañeros.", "💛"]
    ],
    q: [
      ["Si me muevo despacio con las manos juntas, ¿qué animal represento?", ["Un caracol", "Un avión", "Una silla", "Un plato"], 0, "Con mi cuerpo puedo imitar animales y objetos; así expreso ideas.", "Me hago caracol."],
      ["¿Con qué parte de mi cuerpo puedo hacer un saludo?", ["Solo con los pies", "Solo con la cabeza", "Con las manos y los brazos", "Solo con la nariz"], 2, "Mis brazos y manos me ayudan a saludar y a expresar cosas."],
      ["Cuando el juego pide moverse lento, yo me muevo...", ["Como un rayo", "Como un caracol", "Como el viento", "Sin parar jamás"], 1, "Moverse lento me ayuda a controlar mi cuerpo y a escuchar la consigna.", "Paso a paso."],
      ["Expresarme con el cuerpo sirve para...", ["Comer más rápido", "Dormir mejor", "Ganar siempre", "Comunicar lo que siento"], 3, "Mi cuerpo puede decir alegría, calma o tristeza, incluso sin palabras.", "El cuerpo también habla."],
      ["En el juego del espejo, ¿qué hago?", ["Imito los movimientos de mi compañero", "Me siento a mirar", "Le mojo", "Corro lejos"], 0, "En el espejo copio los movimientos; es un juego de atención y imitación.", "Lo copio igualito."],
      ["¿Qué hago antes de moverme mucho en el salón?", ["Grito fuerte", "Corro en círculos", "Miro el espacio para no chocar", "Me tiro al piso"], 2, "Antes de moverme reviso mi espacio; así no golpeo a nadie.", "Miro mi lugar."],
      ["Si un compañero se mueve distinto a mí...", ["Me río de él", "Lo respeto, cada uno se mueve a su manera", "Le digo que pare", "Lo empujo"], 1, "Cada cuerpo es único; respeto la forma en que los demás se mueven.", "Respeto y valor."],
      ["¿Qué juego puedo hacer con mi cuerpo en parejas?", ["Esconder la mochila", "Comer juntos", "Dormir la siesta", "Imitar animales por turnos"], 3, "Por turnos imitamos animales y el otro adivina; así juego y respeto.", "Tú y yo por turnos."],
      ["Moverme al ritmo de una canción me ayuda a...", ["Seguir el ritmo y a divertirme", "Hacer la tarea", "Cocinar", "Hablar por teléfono"], 0, "Moverme con la música desarrolla mi oído y mi cuerpo.", "Cumbia y juego."],
      ["Mi cara también expresa...", ["Solo hambre", "La hora", "Alegría, tristeza o sorpresa", "El peso"], 2, "Con la cara muestro lo que siento; los gestos también son expresión.", "Sonrisa o ceño."],
      ["Si me canso de moverme...", ["Sigo sin parar", "Me tiro en el pasillo", "Me detengo, respiro y descanso", "Le pego a un compañero"], 2, "Escuchar a mi cuerpo es importante; si me canso, descanso.", "Respiro y paro."],
      ["En la expresión corporal, lo importante es...", ["Participar y divertirse", "Ser el más rápido", "Copiar exacto a todos", "No moverse"], 0, "No hay respuestas malas: me expreso, juego y disfruto el movimiento.", "Divertirse primero."]
    ],
    cl: {
      c: [["forma", "ASÍ ME MUEVO", "🏃"], ["parte", "PARTE DE MI CUERPO", "🧍"]],
      i: [["Lento como caracol", "forma"], ["Rápido como caballo", "forma"], ["Salto como rana", "forma"], ["Me balanceo", "forma"], ["Brazos", "parte"], ["Piernas", "parte"], ["Cabeza", "parte"], ["Manos", "parte"]]
    },
    em: [["Caracol", "me muevo lento"], ["Caballo", "me muevo rápido"], ["Rana", "salto"], ["Espejo", "copio los movimientos"]],
    or: ["Escucho la consigna de la maestra", "Reviso que tenga espacio libre", "Me muevo con calma", "Me detengo cuando lo piden"]
  },
  {
    n: "Hago collage con papel",
    o: "Recorto, arrugo y pego papel para crear un collage.",
    d: "DBA 1º artística: explora texturas simples y el color creando con trozos de papel.",
    t: [
      ["Recorto con cuidado", "Uso tijeras de punta roma y corto despacio, con los dedos lejos del filo. Pido ayuda si me cuesta.", "✂️"],
      ["Arrugo y pego", "Puedo arrugar el papel, hacer bolitas o tiras y pegarlas con cola sobre la cartulina.", "📄"],
      ["Creo con trozos", "Con trozos de papel de colores puedo hacer un sol, una casa o un animal. El collage es divertido.", "🧩"]
    ],
    q: [
      ["¿Qué tijeras uso para recortar en la escuela?", ["Tijeras de punta roma", "Tijeras de metal con punta", "Cuchillo", "Navaja"], 0, "Las tijeras de punta roma son seguras para los niños.", "Punta redonda."],
      ["Cuando recorto, ¿dónde van mis dedos?", ["Cerca del filo", "Sobre la hoja", "Lejos del filo, sujetando el papel", "En la boca"], 2, "Los dedos se alejan del filo; así no me corto.", "Manos alerta."],
      ["Si no puedo cortar una línea, ¿qué hago?", ["Tiro el papel", "Le pido ayuda a un adulto", "Corto más rápido", "Uso los dientes"], 1, "Pedir ayuda es de valientes; un adulto me puede acompañar.", "Pido y sigo."],
      ["Para pegar los trozos de papel uso...", ["Agua sola", "Arena", "Aceite", "Cola o pegamento"], 3, "La cola o el pegamento hacen que el papel se quede pegado.", "Poco pegamento."],
      ["Arrugar el papel en bolitas sirve para...", ["Dar textura a mi collage", "Romper la mesa", "Hacer ruido", "Limpiar la ventana"], 0, "Con bolitas de papel mi obra sale con textura y un poco de volumen.", "Bolitas de papel."],
      ["¿Qué material necesito para hacer un collage?", ["Solo agua", "Solo arena", "Papel de colores y cartulina", "Solo tiza"], 2, "Con recortes de papel de colores y una cartulina de base hago mi collage.", "Papel y cartulina."],
      ["¿Qué hago con los recortes que sobran?", ["Los dejo en el piso", "Los guardo o los tiro en la basura", "Los escondo en la ventana", "Los mojo"], 1, "Guardar o tirar los sobrantes mantiene el salón limpio.", "Salón limpio."],
      ["Un collage es...", ["Una canción", "Un baile", "Un examen", "Una obra hecha pegando trozos"], 3, "En el collage uno trozos de papel, tela u otros materiales sobre una base.", "Pegar y crear."],
      ["Al pegar, conviene usar...", ["Poca cola", "Muchísima cola", "Cola en la cara", "Cola en el piso"], 0, "Con poca cola el papel se pega bien y no se arruga.", "Menos es más."],
      ["¿Puedo usar papel de revista para mi collage?", ["No, está prohibido", "Solo si lo como", "Solo de noche", "Sí, recorto con ayuda y creo algo nuevo"], 3, "El papel reciclado sirve para crear; así también cuido el planeta.", "Reciclo y creo."],
      ["Mi collage puede contar...", ["Cuántos años tengo", "El peso de mi mochila", "Una historia o una idea mía", "La hora exacta"], 2, "Las obras de arte comunican ideas y emociones; mi collage también.", "Cuento con imágenes."],
      ["Al terminar, mis manos...", ["Las lavo con agua y jabón", "Las dejo pegajosas todo el día", "Las paso por la ropa", "Las escondo"], 0, "Después de pegar lavo mis manos; la cola se limpia con agua y jabón.", "Agua y jabón."]
    ],
    cl: {
      c: [["uso", "SIRVE PARA MI COLLAGE", "🎨"], ["nouso", "NO USO EN EL COLLAGE", "🍽️"]],
      i: [["Papel de colores", "uso"], ["Cartulina", "uso"], ["Cola", "uso"], ["Tijeras de punta roma", "uso"], ["Comida", "nouso"], ["Zapatos", "nouso"], ["Basura", "nouso"], ["El vaso de agua", "nouso"]]
    },
    em: [["Recortar", "hacer trozos de papel"], ["Arrugar", "dar textura al papel"], ["Cola", "pega los trozos"], ["Cartulina", "la base donde pego"]],
    or: ["Elijo los papeles de colores", "Recorto con tijeras de punta roma", "Pego con poca cola sobre la cartulina", "Guardo los sobrantes y lavo mis manos"],
    e: ["Escribe qué harías con los recortes que sobran.", "Los guardo para otra obra o los tiro en la basura.", 3]
  },
  {
    n: "El día y la noche",
    o: "Observo los colores del día y de la noche y los pinto.",
    d: "DBA 1º artística: explora el color observando el mundo que lo rodea.",
    t: [
      ["Colores del día", "De día el cielo es azul claro y el sol es amarillo. Todo se ve brillante y alegre.", "☀️"],
      ["Colores de la noche", "De noche el cielo se pone azul oscuro o negro. La luna y las estrellas brillan suavecito.", "🌙"],
      ["Observo y pinto", "Puedo pintar un día y una noche y comparar sus colores. Así aprendo a mirar el mundo.", "🌃"]
    ],
    q: [
      ["De día, el cielo se ve...", ["Azul claro", "Negro", "Morado", "Rojo siempre"], 0, "De día el cielo se ve azul claro porque brilla el sol.", "Mira hacia arriba."],
      ["De noche, la luz que vemos en el cielo es...", ["El sol", "Un semáforo", "La luna y las estrellas", "El reflector"], 2, "De noche brillan la luna y las estrellas; el sol está del otro lado del mundo.", "Brillan de lejos."],
      ["El sol en mi dibujo puede ser...", ["Azul oscuro", "Amarillo", "Negro", "Gris"], 1, "Pinto el sol amarillo porque así lo vemos en el día.", "Amarillo como el maíz."],
      ["¿Qué color uso para una noche oscura?", ["Amarillo del día", "Verde", "Blanco puro", "Azul oscuro o negro"], 3, "De noche los colores son oscuros: azul oscuro, negro o morado.", "Colores de la noche."],
      ["Observar el cielo es una forma de...", ["Aprender del mundo que me rodea", "Perder el tiempo", "Hacer ruido", "Dormir"], 0, "Observar me ayuda a ver detalles y a pintar mejor.", "Observo y aprendo."],
      ["La luna en mi dibujo puede ser...", ["Cuadrada y verde", "Azul como el mar", "Clara, casi amarilla o blanca", "Negra"], 2, "La luna se ve clara, amarillenta o blanca contra el cielo oscuro.", "Clara en la noche."],
      ["Si pinto un amanecer, ¿qué colores puedo usar?", ["Solo negro", "Rosado, naranja y amarillo", "Solo morado", "Solo verde"], 1, "Al amanecer el cielo se ve rosado, naranja y amarillo; es un momento bonito para pintar.", "Amanecer colorido."],
      ["¿Cuándo salen las estrellas?", ["De día", "En la mañana", "Al mediodía", "En la noche"], 3, "Las estrellas se ven en la noche; de día su luz se pierde con el sol.", "En la oscuridad."],
      ["Al pintar la noche, puedo añadir...", ["Una casa con luz y un búho", "Un sol muy grande", "Una playa con gente", "Un desayuno"], 0, "En mi noche puedo poner luna, estrellas, un búho o casas con luz encendida.", "Invento mi noche."],
      ["Comparar el día y la noche me ayuda a...", ["Dormir más", "Notar diferencias de color", "Comer", "Hablar por teléfono"], 1, "Comparar es observar: noto qué cambia y qué se mantiene en cada uno.", "Miro las diferencias."],
      ["Si quiero pintar una bombilla encendida, uso...", ["Color oscuro", "Tijeras", "Amarillo o naranja", "Gris oscuro"], 2, "La luz se pinta con colores claros y cálidos, como amarillo o naranja.", "Luz con color claro."],
      ["¿Es correcto decir que todos pintan la noche igual?", ["No, cada uno la imagina a su manera", "Sí, siempre", "Solo si hay permiso", "Sí, con los mismos colores"], 0, "El arte es libre: cada persona imagina y pinta a su manera.", "Mi noche es única."]
    ],
    cl: {
      c: [["dia", "COLOR DEL DÍA", "☀️"], ["noche", "COLOR DE LA NOCHE", "🌙"]],
      i: [["Amarillo", "dia"], ["Azul claro", "dia"], ["Blanco de las nubes", "dia"], ["Verde de los árboles", "dia"], ["Azul oscuro", "noche"], ["Negro", "noche"], ["Morado", "noche"], ["Gris oscuro", "noche"]]
    },
    em: [["Día", "sol y cielo azul claro"], ["Noche", "luna y estrellas"], ["Amanecer", "rosado y naranja"], ["Bombilla encendida", "luz amarilla"]],
    or: ["Miro el cielo por la tarde", "Pienso si es día o noche", "Elijo los colores adecuados", "Pinto y comparo con mi compañero"]
  },
  {
    n: "Dibujo a mi familia",
    o: "Dibujo a las personas de mi familia y cuento quiénes son.",
    d: "DBA 1º artística: se expresa mediante el dibujo libre de su mundo afectivo.",
    t: [
      ["Dibujo a mi gente", "Puedo dibujar a mi mamá, mi papá, mis hermanos o a la persona que me cuida. Mi familia es la que me quiere.", "👪"],
      ["Caras y cuerpos", "En cada persona dibujo la cabeza, el cuerpo, los brazos y las piernas. Las caras tienen ojos, nariz y boca.", "🙂"],
      ["Familias distintas", "Hay familias grandes y familias pequeñas. Todas son valiosas porque se cuidan y se quieren.", "💛"]
    ],
    q: [
      ["¿A quién puedo dibujar de mi familia?", ["A la persona que me cuida", "Solo a un payaso", "Solo a mi mascota", "A nadie"], 0, "Dibujo a quienes me quieren y me cuidan: mamá, papá, abuelos o mi cuidador.", "Mi gente querida."],
      ["Para dibujar una persona, primero dibujo...", ["Las piernas", "Los zapatos", "La cabeza", "El techo"], 2, "La cabeza va arriba; después dibujo el cuerpo, los brazos y las piernas.", "Arriba está la cabeza."],
      ["Las caras tienen...", ["Solo boca", "Ojos, nariz y boca", "Solo orejas", "Solo pelo"], 1, "Con los ojos, la nariz y la boca expreso emociones en mi dibujo.", "Tres cosas clave."],
      ["Si mi familia es pequeña...", ["No la dibujo", "Invento otra", "Está mal dibujarla", "La dibujo con cariño igual"], 3, "Toda familia es valiosa, sea grande o pequeña; se dibuja con cariño.", "Todas importan."],
      ["Al dibujar a mi hermano, ¿cómo lo hago?", ["Con cariño y sin burlarme", "Haciéndolo feo", "Quitándole los brazos", "Poniéndolo triste siempre"], 0, "Dibujo a mi familia con respeto y cariño; no me burlo de nadie.", "Con cariño en el corazón."],
      ["¿Qué tonos puedo usar para la piel?", ["Solo verde", "Solo morado", "Varios: claro, medio y oscuro", "Ninguno"], 2, "Las personas tenemos distintos tonos de piel; todos son bonitos y se respetan.", "Todos los tonos."],
      ["Si dibujo a mi abuela cocinando...", ["La hago mal", "Cuento algo de ella con mi dibujo", "Rompo el papel", "No está permitido"], 1, "Un dibujo puede contar una escena de la vida de mi familia."],
      ["Mis dibujos de familia pueden regalarse...", ["Solo si valen dinero", "Nunca", "Solo a extraños", "A quien yo quiera, con cariño"], 3, "Regalar mi dibujo es un gesto de cariño; no necesita valer dinero.", "Un regalo del corazón."],
      ["Al hablar de mi familia en clase...", ["Cuento con calma y respeto", "Me burlo", "Grito", "Quito el cuaderno a otros"], 0, "Comparto mi historia con respeto; las familias de mis amigos también son valiosas.", "Con calma y respeto."],
      ["Si no recuerdo bien un rostro...", ["Lo dejo en blanco", "Lo mojo", "Observo con calma y empiezo de nuevo", "Lo copio sin pedir"], 2, "Observar con calma y practicar hace que mi dibujo mejore poco a poco.", "Observar y practicar."],
      ["Dibujar a mi familia me ayuda a...", ["A olvidarlos", "Sentir cariño y a hablar de los míos", "A no hablar con nadie", "A correr más"], 1, "El dibujo expresa el cariño que siento por quienes me cuidan.", "El arte expresa cariño."],
      ["En mi dibujo familiar, lo más importante es...", ["El cariño que le pongo", "Que sea perfecto", "Que sea gigante", "Que tenga mil colores"], 0, "Lo que hace especial a un dibujo es el cariño con que lo hago.", "El cariño se nota."]
    ],
    cl: {
      c: [["familia", "ES PERSONA DE MI FAMILIA", "👪"], ["nofamilia", "NO ES DE MI FAMILIA", "🏫"]],
      i: [["Mamá", "familia"], ["Papá", "familia"], ["Abuelo", "familia"], ["Hermana", "familia"], ["La maestra", "nofamilia"], ["Un personaje de televisión", "nofamilia"], ["Un cantante", "nofamilia"], ["El semáforo", "nofamilia"]]
    },
    em: [["Mamá", "me cuida y me quiere"], ["Papá", "me acompaña"], ["Abuela", "me cuenta cuentos"], ["Hermano", "juega conmigo"]],
    or: ["Pienso en quienes me cuidan", "Dibujo la cabeza y el cuerpo", "Agrego brazos, piernas y cara", "Coloreo y pongo el nombre de cada uno"],
    e: ["Dibuja a alguien de tu familia y escribe quién es.", "Dibujo de mi abuela y la palabra abuela.", 3]
  },
  {
    n: "Me hago un autorretrato",
    o: "Me observo y me dibujo a mí mismo.",
    d: "DBA 1º artística: se expresa mediante el dibujo libre explorando su identidad.",
    t: [
      ["Me miro con calma", "Puedo mirarme en un espejo y observar mi cara: mis ojos, mi nariz, mi boca y mi pelo.", "👁️"],
      ["Me dibujo a mí", "Un autorretrato es un dibujo de mí mismo. Dibujo lo que veo, sin prisa y sin copiar a nadie.", "🎨"],
      ["Todos somos únicos", "Cada persona tiene su cara, su pelo y su sonrisa distintos. Yo soy único y eso es bonito.", "🌟"]
    ],
    q: [
      ["Un autorretrato es...", ["Un dibujo de mí mismo", "Un dibujo de mi casa", "Un dibujo de mi maestra", "Un dibujo de un animal"], 0, "Autorretrato quiere decir dibujarme a mí mismo.", "Yo soy el modelo."],
      ["¿Qué uso para mirar mi cara?", ["Una olla", "Un plato", "Un espejo", "La mochila"], 2, "Con el espejo puedo ver mi cara con calma para dibujarla.", "Reflejo mi cara."],
      ["Al mirarme en el espejo, observo...", ["Mi mochila", "Mis ojos, mi nariz y mi boca", "El pizarrón", "El reloj"], 1, "Observo los rasgos de mi cara para dibujarlos mejor.", "Ojos, nariz y boca."],
      ["Mi pelo puede ser...", ["Igual al de todos", "Oloroso", "Una fruta", "Distinto: liso, rizado, oscuro o claro"], 3, "Cada persona tiene su pelo; por eso mi dibujo es único.", "Cada pelo es distinto."],
      ["Al dibujarme, ¿qué pongo en mi cara?", ["La expresión que tenga ese día", "Siempre una cara triste", "La cara de otro niño", "Ninguna expresión"], 0, "Puedo dibujarme sonriendo, sorprendido o tranquilo; así expreso lo que siento.", "Mi cara cuenta."],
      ["¿Cómo dibujo mis ojos?", ["Como círculos gigantes siempre", "Como triángulos", "Formas redondeadas con iris y pupila", "Como líneas rectas"], 2, "Los ojos son redondos; tienen el iris y un puntito negro que es la pupila.", "Redondos y con color."],
      ["Si mi dibujo no se parece mucho a mí...", ["Rompo el papel", "Está bien, sigo practicando", "Le echo la culpa a otro", "Lo mojo"], 1, "Dibujar bien lleva práctica; cada intento me acerca más.", "Practicar mejora."],
      ["Mi sonrisa en el dibujo puede expresar...", ["Tristeza", "Enojo", "Miedo", "Alegría"], 3, "La sonrisa expresa alegría; dibujarla contagia ánimo.", "Sonrisa grande."],
      ["¿Qué hago con mi cabello en el dibujo?", ["Lo dibujo como lo veo en el espejo", "Lo invento de otro color siempre", "No lo dibujo", "Lo mojo"], 0, "Dibujo mi cabello como es: con su color y su forma.", "Como lo veo."],
      ["¿Puedo usar colores libres en mi autorretrato?", ["No, está prohibido", "Solo verde", "Sí, puedo usar los colores que quiera", "Solo si copio una foto"], 2, "El arte es libre; puedo usar colores reales o inventados.", "Yo decido los colores."],
      ["Dibujarme me ayuda a...", ["Compararme con otros", "Conocerme y a quererme como soy", "Copiar a mis amigos", "No mirarme nunca"], 1, "Dibujarme me hace notar que soy único y a sentirme bien conmigo mismo.", "Me quiero como soy."],
      ["Al terminar mi autorretrato...", ["Lo firmo con mi nombre", "Lo escondo", "Lo mojo", "Lo tiro"], 0, "Firmar mi obra es decir con orgullo: esto lo hice yo.", "Firmo mi obra."]
    ],
    cl: {
      c: [["necesito", "LO NECESITO PARA DIBUJARME", "👁️"], ["nonecesito", "NO LO NECESITO", "🍽️"]],
      i: [["Espejo", "necesito"], ["Lápiz", "necesito"], ["Colores", "necesito"], ["Hoja", "necesito"], ["Cuchara", "nonecesito"], ["Zapatos", "nonecesito"], ["Pelota", "nonecesito"], ["Nevera", "nonecesito"]]
    },
    em: [["Autorretrato", "dibujo de mí mismo"], ["Espejo", "me ayuda a mirarme"], ["Sonrisa", "expresa alegría"], ["Firma", "dice que lo hice yo"]],
    or: ["Me miro en el espejo con calma", "Observo mi cara y mi pelo", "Dibujo la cabeza y luego la cara", "Coloreo, firmo y lo muestro"],
    e: ["Escribe qué expresión usarías en tu autorretrato y por qué.", "Me dibujo sonriendo porque estoy alegre.", 3]
  }
];

/* ====== g1 / efisica ====== */
/* DBA 1º — efisica */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.efisica = [
  {
    n: "Corro, camino y me detengo",
    o: "Cambio entre caminar, correr y detenerme cuando la maestra lo pide.",
    d: "DBA 1º educación física: desarrolla la motricidad gruesa con desplazamientos básicos.",
    t: [
      ["Camino", "Camino despacio y con los brazos sueltos. Mis pies tocan el piso con calma.", "🚶"],
      ["Corro y me detengo", "Puedo correr suave y parar de golpe cuando suena la señal. Frenar también se aprende.", "🏃"],
      ["Escucho la señal", "Cuando la maestra dice alto o toca el silbato, me detengo en el lugar y escucho.", "🛑"]
    ],
    q: [
      ["Cuando corro, mis pies...", ["Van rápido pero con control", "No se mueven", "Se quedan quietos", "Van muy lento como caracol"], 0, "Correr es desplazarse rápido, pero siempre con control para no chocar.", "Rápido y con cuidado."],
      ["Si la maestra dice alto, yo...", ["Sigo corriendo", "Me siento en el piso", "Me detengo en el lugar", "Corro más lejos"], 2, "Al escuchar alto, me detengo y escucho la siguiente consigna.", "Me paro y escucho."],
      ["¿Qué hago antes de correr en el salón?", ["Corro nada más", "Reviso que no haya cosas en el piso", "Grito fuerte", "Me tiro al suelo"], 1, "Antes de correr miro el espacio; así evito tropezar.", "Miro el piso primero."],
      ["Correr sirve para...", ["Dormir", "Comer", "Hablar", "Fortalecer mis piernas y mi corazón"], 3, "Correr es ejercicio: fortalece mis piernas y hace latir mi corazón sano.", "Ejercicio para el cuerpo."],
      ["Cuando camino en fila, lo hago...", ["Despacio y sin empujar", "Empujando", "Corriendo", "A saltos"], 0, "En fila caminamos despacio, uno detrás del otro, sin empujar.", "Uno tras otro."],
      ["Si estoy cansado de correr...", ["Sigo sin parar", "Me tiro en el pasillo", "Camino suave y descanso", "Le pego a un compañero"], 2, "Escucho a mi cuerpo: si me canso, camino suave y descanso.", "Respiro y bajo el ritmo."],
      ["La señal de alto puede ser...", ["Una canción fuerte", "Un silbato de la maestra", "Un ruido de la nevera", "Una luz de la televisión"], 1, "La maestra usa el silbato o su voz para dar las señales de alto y sigue.", "Silbato o voz."],
      ["Mientras corro, mis brazos...", ["Los dejo quietos", "Los mojo", "Los amarro", "Los muevo sueltos para ayudar el cuerpo"], 3, "Los brazos se mueven sueltos y ayudan a mantener el equilibrio al correr.", "Brazos sueltos."],
      ["Jugar a las escondidas me ayuda a...", ["Correr y a decidir cuándo parar", "Dormir", "Cocinar", "Planchar"], 0, "Los juegos de persecución desarrollan mi velocidad y mi atención a las señales.", "Corro y me escondo."],
      ["¿Dónde sí puedo correr?", ["En el salón entre las mesas", "En la fila", "En el patio, donde hay espacio", "Cerca del pizarrón"], 2, "En el patio hay espacio libre para correr sin chocar.", "Aire libre y espacio."],
      ["Si camino rápido sin control...", ["Está bien siempre", "Puedo chocar con un compañero", "Es la mejor forma", "No pasa nada"], 1, "Sin control puedo chocar o caerme; por eso regulo mi velocidad.", "Velocidad con control."],
      ["Detenerme de golpe se practica para...", ["Controlar mi cuerpo", "Hacer ruido", "Romper mis zapatos", "Mojar el piso"], 0, "Frenar desarrolla mi equilibrio y mi atención a la señal.", "Freno y escucho."]
    ],
    cl: {
      c: [["muevo", "ASÍ ME MUEVO", "🏃"], ["nomuevo", "NO ES MOVERME", "🛋️"]],
      i: [["Camino", "muevo"], ["Corro", "muevo"], ["Salto en el lugar", "muevo"], ["Me detengo", "muevo"], ["Me siento", "nomuevo"], ["Duermo", "nomuevo"], ["Como", "nomuevo"], ["Escucho en silencio", "nomuevo"]]
    },
    em: [["Camino", "voy despacio"], ["Corro", "voy rápido"], ["Alto", "me detengo en el lugar"], ["Fila", "uno detrás del otro"]],
    or: ["Escucho la señal de la maestra", "Miro que el espacio esté libre", "Me desplazo con control", "Me detengo y espero la siguiente consigna"],
    e: ["Escribe qué haces cuando la maestra dice alto.", "Me detengo en el lugar y escucho.", 3]
  },
  {
    n: "Me mantengo en equilibrio",
    o: "Me mantengo en equilibrio parado en un pie y sobre líneas del piso.",
    d: "DBA 1º educación física: desarrolla el equilibrio general con juegos guiados.",
    t: [
      ["Parado en un pie", "Me paro en un pie y abro los brazos. Así me mantengo firme como un flamenco.", "🦩"],
      ["Camino en la línea", "Camino sobre una línea imaginaria, uno delante del otro, sin salirme. Así entreno mis pies.", "➕"],
      ["Equilibrio con ayuda", "Puedo llevar un librito sobre la cabeza y caminar despacio. No pasa nada si se cae; lo levanto y sigo.", "📚"]
    ],
    q: [
      ["Para mantenerme en un pie, mis brazos...", ["Los abro para ayudarme", "Los mojo", "Los amarro", "Los escondo"], 0, "Abrir los brazos ayuda a mantener el equilibrio, como las alas de un flamenco.", "Brazos abiertos."],
      ["Si me caigo mientras juego al equilibrio...", ["Me quedo llorando", "Rompo algo", "Lo levanto y sigo intentando", "Me siento y ya no vuelvo"], 2, "Caerse es parte de aprender; me levanto y vuelvo a intentar.", "Levanto y sigo."],
      ["¿En qué puedo pararme para practicar el equilibrio?", ["Sobre la cabeza", "En un solo pie", "En los brazos", "En las rodillas"], 1, "Pararme en un pie es un ejercicio básico de equilibrio.", "Un pie y brazos abiertos."],
      ["Camino en la línea imaginaria para...", ["Dormir mejor", "Comer", "Hablar", "Fortalecer mis pies y mi atención"], 3, "Caminar sobre la línea mejora mi control y mi atención.", "Paso firme."],
      ["Si llevo un libro en la cabeza, camino...", ["Despacio y con cuidado", "Corriendo", "Saltando", "A tumbas"], 0, "Con el libro en la cabeza camino despacio para no caerlo; practico el equilibrio.", "Despacio y derecho."],
      ["El equilibrio me sirve para...", ["Caerme siempre", "Mantenerme firme al parar, saltar o caminar", "No poder moverme", "Dormir en clase"], 1, "El equilibrio me ayuda a no caerme y a moverme con seguridad.", "Firme como un poste."],
      ["¿Dónde practico el equilibrio con seguridad?", ["Cerca de las mesas", "En un espacio libre del patio", "En la escalera sola", "Sobre una silla"], 1, "En un espacio libre, sin obstáculos, practico sin riesgo de chocar.", "Espacio libre."],
      ["Parado en un pie, ¿qué hago con la mirada?", ["La mojo", "La cierro siempre", "La tapo", "Miro un punto fijo adelante"], 3, "Mirar un punto fijo ayuda a mantener el equilibrio.", "Miro al frente y me mantengo."],
      ["Me mantengo en un pie por...", ["Tres segundos o más", "Todo el recreo", "Una hora entera", "Toda la clase sin parar"], 0, "Empiezo aguantando poquito; poco a poco puedo durar más.", "Aguanto un ratico."],
      ["Si mi compañero se cae al practicar...", ["Me río", "Lo animo a intentar de nuevo", "Lo empujo", "Le quito el lugar"], 1, "Animar a mi compañero es jugar con respeto y amistad.", "Lo animo y sigo."],
      ["Subirme a una silla para practicar es...", ["Bueno para el equilibrio", "La mejor idea", "Peligroso, no lo hago", "Una orden"], 2, "Subirse a sillas es peligroso; practico solo en el suelo y con espacio libre.", "Piso seguro."],
      ["Practicar equilibrio a menudo...", ["Me hace más seguro al moverme", "Me cansa para siempre", "No sirve de nada", "Hace que no pueda correr"], 0, "La práctica frecuente mejora mi control corporal poco a poco.", "Un poquito cada día."]
    ],
    cl: {
      c: [["practico", "ASÍ PRACTICO EQUILIBRIO", "🦩"], ["nopractico", "NO ES PRACTICAR EQUILIBRIO", "🍽️"]],
      i: [["Parado en un pie", "practico"], ["Camino en la línea", "practico"], ["Librito en la cabeza", "practico"], ["Me balanceo suave", "practico"], ["Correr sin control", "nopractico"], ["Comer", "nopractico"], ["Dormir", "nopractico"], ["Mirar la tele", "nopractico"]]
    },
    em: [["Un pie", "practico el equilibrio"], ["Brazos abiertos", "me ayudan a no caer"], ["Línea", "camino sin salirme"], ["Libro en la cabeza", "camino despacio"]],
    or: ["Busco un espacio libre", "Abro los brazos", "Me paro en un pie y cuento hasta tres", "Me agito suave y repito"],
    e: ["Escribe cuántos segundos puedes pararte en un pie.", "Me paro cinco segundos.", 3]
  },
  {
    n: "Mi derecha y mi izquierda",
    o: "Identifico mi lado derecho y mi lado izquierdo para moverme mejor.",
    d: "DBA 1º educación física: desarrolla la lateralidad con juegos guiados.",
    t: [
      ["Mi lado derecho", "Mi brazo derecho y mi pie derecho están de un mismo lado. Muchos escribo con la mano derecha.", "✋"],
      ["Mi lado izquierdo", "Mi brazo izquierdo y mi pie izquierdo están del otro lado. Todos tenemos un lado y el otro.", "🤚"],
      ["Me oriento", "Puedo señalar a la derecha o a la izquierda para seguir instrucciones en el patio y en el salón.", "🧭"]
    ],
    q: [
      ["¿Con qué mano escriben muchos niños?", ["La derecha", "La izquierda", "Con los pies", "Con la boca"], 0, "Muchas personas escriben con la mano derecha; otras con la izquierda; ambas están bien.", "La mano de escribir."],
      ["Mi mano izquierda está...", ["Del mismo lado que mi derecha", "Arriba de mi cabeza", "Del lado contrario a la derecha", "Atrás de mi espalda"], 2, "La izquierda y la derecha son lados opuestos del cuerpo.", "Lados distintos."],
      ["Si mi pie derecho da un paso, el izquierdo...", ["También es derecho", "Está del otro lado", "No existe", "Está arriba"], 1, "Mis piernas también tienen lado derecho y lado izquierdo.", "Dos lados."],
      ["Para saber mi lado dominante, puedo...", ["Comer", "Dormir", "Correr sin mirar", "Ver con cuál mano agarro el lápiz"], 3, "La mano con la que agarro el lápiz me indica mi lado dominante.", "Agarro el lápiz."],
      ["La derecha y la izquierda me ayudan a...", ["Seguir instrucciones de dirección", "Comer", "Dormir", "Hablar por teléfono"], 0, "Conozco mi derecha e izquierda para seguir caminos y consignas.", "Sigo indicaciones."],
      ["Si la maestra dice gira a la derecha, yo...", ["Me siento", "Salto en el lugar", "Giro mi cuerpo hacia el lado derecho", "Me acuesto"], 2, "Girar a la derecha es girar hacia el lado de mi mano derecha.", "Giro a la derecha."],
      ["Todos tenemos...", ["Solo lado derecho", "Un lado derecho y un lado izquierdo", "Tres lados", "Ningún lado"], 1, "Nuestro cuerpo tiene dos lados: derecho e izquierdo.", "Dos lados."],
      ["Escribir con la mano izquierda es...", ["Algo malo", "Algo prohibido", "Un error", "Una forma válida de escribir"], 3, "Escribir con la izquierda es tan normal como hacerlo con la derecha; se respeta.", "Todos son válidos."],
      ["Señalar con el brazo me sirve para...", ["Indicar direcciones", "Comer", "Dormir", "Abrigarme"], 0, "Con mi brazo señalo hacia dónde debo ir o qué estoy viendo.", "Señalo y explico."],
      ["Si camino hacia mi derecha, el salón queda...", ["Siempre igual", "En el mismo lugar", "Depende de dónde esté parado", "Nunca cambia"], 2, "La dirección derecha o izquierda depende de cómo esté parado; por eso me oriento.", "Me oriento primero."],
      ["Practicar la derecha y la izquierda mejora...", ["Mi dibujo", "Mi salto", "Mi orientación al seguir consignas", "Mi canto"], 2, "Orientarme mejora cuando juego, camino o sigo consignas.", "Me ubico mejor."],
      ["¿Cómo aprendo jugando la derecha y la izquierda?", ["Repito movimientos con un brazo y luego con el otro", "Me quedo quieto", "Grito", "Duermo"], 0, "Repetir movimientos por lados me ayuda a memorizarlos jugando.", "Derecha, izquierda."]
    ],
    cl: {
      c: [["derecho", "MI LADO DERECHO", "👉"], ["izquierdo", "MI LADO IZQUIERDO", "👈"]],
      i: [["Brazo derecho", "derecho"], ["Pie derecho", "derecho"], ["Mano derecha", "derecho"], ["Oreja derecha", "derecho"], ["Brazo izquierdo", "izquierdo"], ["Pie izquierdo", "izquierdo"], ["Mano izquierda", "izquierdo"], ["Oreja izquierda", "izquierdo"]]
    },
    em: [["Derecha", "lado de la mano con la que escribo"], ["Izquierda", "lado contrario a la derecha"], ["Señalar", "indicar una dirección"], ["Girar", "cambiar mi dirección"]],
    or: ["Me paro derecho en el lugar", "Levanto la mano con la que escribo", "Repito derecha varias veces", "Pruebo un movimiento a cada lado"]
  },
  {
    n: "Cantamos en ronda",
    o: "Participo en rondas cantando, moviéndome y esperando mi turno.",
    d: "DBA 1º educación física: desarrolla la motricidad y la convivencia mediante rondas y juegos guiados.",
    t: [
      ["Nos tomamos de la mano", "En la ronda nos tomamos de la mano y formamos un círculo. Así todos nos vemos.", "🤝"],
      ["Canto y me muevo", "Cantamos una canción y hacemos los movimientos. La ronda es mejor cuando todos participan.", "🎶"],
      ["Espero mi turno", "En algunas rondas cada uno actúa por turnos. Espero con calma y animo a mi compañero.", "⏳"]
    ],
    q: [
      ["En la ronda, los niños...", ["Forman un círculo tomados de la mano", "Se acuestan", "Se esconden", "Salen corriendo"], 0, "La ronda se forma en círculo; así todos nos vemos y participamos.", "Círculo de amigos."],
      ["Cuando canto en la ronda, yo...", ["Guardo la voz", "Grito solo", "Participo con alegría", "No canto"], 2, "Participar con alegría hace la ronda más divertida para todos.", "Canto con alegría."],
      ["En la ronda del zapatero, ¿qué hago?", ["Me siento", "Hago los movimientos de la canción", "Duermo", "Como"], 1, "Las rondas tienen movimientos que acompañan la canción.", "Música y movimiento."],
      ["Si mi compañero no sabe la canción, yo...", ["Me burlo", "Lo empujo", "Le quito el lugar", "Lo ayudo para que aprenda"], 3, "Ayudar a mi compañero hace que todos disfrutemos la ronda.", "Lo ayudo y sigo."],
      ["Esperar mi turno en la ronda me enseña...", ["La paciencia y el respeto", "A gritar", "A correr", "A empujar"], 0, "Esperar mi turno es respetar a los demás.", "Turno y respeto."],
      ["¿Qué hago cuando me toca mi parte en la ronda?", ["Salgo corriendo", "Me mojo", "Canto mi parte con calma", "Golpeo el piso"], 2, "Me toca mi parte: canto o hago el movimiento con calma.", "Mi turno llegó."],
      ["Las rondas se hacen mejor...", ["Solo", "En grupo, escuchando al ritmo", "En silencio", "Sin movimiento"], 1, "En grupo y al ritmo de la música la ronda sale mejor.", "Juntos y al ritmo."],
      ["Si me equivoco en un movimiento de la ronda...", ["Rompo la ronda", "Me salgo para siempre", "Le echo la culpa a otro", "Sigo e intento de nuevo"], 3, "Equivocarme es normal; sigo participando e intento otra vez.", "Sigo participando."],
      ["Cantar en ronda me ayuda a...", ["Seguir el ritmo y a convivir", "Dormir", "Cocinar", "Hablar por teléfono"], 0, "Cantar juntos mejora mi ritmo y mi convivencia con el grupo.", "Ritmo y amigos."],
      ["¿Cómo me muevo mientras canto la ronda?", ["Quedo congelado", "Me siento siempre", "Hago los movimientos que pide la canción", "Corro sin parar"], 2, "Los movimientos acompañan la letra; así trabajo mi cuerpo y mi memoria.", "Muevo el cuerpo."],
      ["Si un compañero llega tarde a la ronda...", ["Lo dejo afuera", "Lo grito", "Lo invito a incorporarse", "Lo quito del círculo"], 2, "Incluir a todos es parte del buen convivir.", "Lo invito a sumarse."],
      ["Al terminar la ronda...", ["Agradezco y me siento con calma", "Grito", "Corro", "Rompo algo"], 0, "Terminar con calma y agradecer cierra bien la actividad.", "Gracias y calma."]
    ],
    cl: {
      c: [["hago", "ESTO HAGO EN LA RONDA", "🎶"], ["nohago", "ESTO NO HAGO EN LA RONDA", "⛔"]],
      i: [["Canto", "hago"], ["Me muevo con la canción", "hago"], ["Tomo la mano", "hago"], ["Espero mi turno", "hago"], ["Empujo", "nohago"], ["Grito solo", "nohago"], ["Me burlo", "nohago"], ["Salgo corriendo", "nohago"]]
    },
    em: [["Ronda", "círculo de niños cantando"], ["Turno", "me toca a mí después"], ["Ritmo", "sigo el compás de la canción"], ["Movimiento", "acompaño la letra"]],
    or: ["Nos formamos en círculo", "Nos tomamos de la mano", "Cantamos y hacemos los movimientos", "Agradecemos y nos sentamos"],
    e: ["Escribe el nombre de una ronda que te guste.", "De la ronda del zapatero.", 3]
  },
  {
    n: "Circuito de aventuras",
    o: "Recorro circuitos básicos saltando, gateando y esquivando.",
    d: "DBA 1º educación física: desarrolla la motricidad gruesa mediante circuitos básicos.",
    t: [
      ["¿Qué es un circuito?", "Un circuito es un camino con estaciones: primero salto en los aros, luego gateo y termino caminando en línea.", "🏟️"],
      ["Sigo el orden", "Recorro las estaciones en orden y sin empujar. Todos esperan su turno para pasar.", "1️⃣"],
      ["Cuido mi seguridad", "La maestra organiza el circuito para que sea seguro. Le aviso si algo se cae o se rompe.", "🛡️"]
    ],
    q: [
      ["Un circuito es...", ["Un camino con varias estaciones de ejercicio", "Una canción", "Una comida", "Un examen"], 0, "El circuito tiene estaciones; en cada una hago un ejercicio distinto.", "Varias estaciones."],
      ["En el circuito, ¿qué hago con las estaciones?", ["Las salto todas a la vez", "Las escojo al azar", "Sigo el orden que indica la maestra", "No las hago"], 2, "Sigo el orden marcado; así el circuito funciona para todos.", "Orden y disciplina."],
      ["Si hay aros en el piso, ¿qué hago?", ["Los mojo", "Salto dentro de cada aro", "Los rompo", "Los escondo"], 1, "Salto de aro en aro con los dos pies; eso desarrolla mi fuerza.", "De aro en aro."],
      ["Para pasar una estación de gateo...", ["Corro", "Me paro", "Salto", "Gateo sobre las manos y las rodillas"], 3, "Gatear fortalece mis brazos y mi cuerpo entero.", "Como un animalito."],
      ["En el circuito espero mi turno porque...", ["Así nadie choca", "Mejor no juego", "Estoy cansado", "No me gusta"], 0, "Esperar el turno evita choques y accidentes.", "Turno y seguridad."],
      ["Si algo del circuito se cae, ¿qué hago?", ["Sigo igual", "Lo piso", "Le aviso a la maestra", "Lo mojo"], 2, "Aviso a la maestra para que lo arregle; así seguimos seguros.", "Aviso de inmediato."],
      ["Caminar en línea recta sobre una marca me ayuda a...", ["Dormir", "Mejorar el equilibrio", "Comer", "Hablar"], 1, "Caminar en línea mejora mi equilibrio y mi concentración.", "Paso a paso en línea."],
      ["¿Cuántas estaciones hago de una vez?", ["Todas menos una", "Ninguna", "Las que yo quiera sin orden", "Las que indique la maestra, una por una"], 3, "La maestra indica cuáles y en qué orden; sigo sus instrucciones.", "Sigo a la maestra."],
      ["Recorrer un circuito me pone...", ["Activo y fuerte", "Triste", "Dormido", "Hambriento"], 0, "El circuito es ejercicio: me hace mover todo el cuerpo.", "Ejercicio divertido."],
      ["Si mi compañero tropeza en una estación...", ["Me río", "Lo empujo", "Le aviso a la maestra y lo ayudo", "Sigo sin mirar"], 2, "Aviso y ayudo; el cuidado del compañero es parte del juego.", "Cuido a mi compañero."],
      ["¿Qué hago al terminar el circuito?", ["Corro otra vez sin avisar", "Me detengo, respiro y espero", "Me tiro al piso", "Grito"], 1, "Al terminar bajo el ritmo, respiro y espero mi siguiente actividad.", "Respiro y espero."],
      ["Los materiales del circuito...", ["Son para usarlos con cuidado", "Son para tirarlos", "Se pisan fuerte", "Se mojan"], 0, "Cuido los conos, aros y cuerdas; así sirven para todos los días.", "Cuido el material."]
    ],
    cl: {
      c: [["estacion", "ESTACIONES DEL CIRCUITO", "🏟️"], ["noestacion", "NO ES UNA ESTACIÓN", "🍽️"]],
      i: [["Saltar en aros", "estacion"], ["Gatear", "estacion"], ["Caminar en línea", "estacion"], ["Esquivar conos", "estacion"], ["Dormir la siesta", "noestacion"], ["Comer", "noestacion"], ["Sentarme a ver", "noestacion"], ["Mirar la tele", "noestacion"]]
    },
    em: [["Circuito", "camino con estaciones"], ["Aro", "salto dentro de él"], ["Cono", "debo esquivarlo"], ["Turno", "espero para pasar"]],
    or: ["La maestra organiza las estaciones", "Espero mi turno", "Recorro el circuito con cuidado", "Termino, respiro y espero"]
  },
  {
    n: "Gateo como los animales",
    o: "Me desplazo gateando y trepando para fortalecer todo mi cuerpo.",
    d: "DBA 1º educación física: desarrolla la motricidad gruesa con desplazamientos variados.",
    t: [
      ["Gateo a cuatro patas", "Pongo las manos y las rodillas en el piso y avanzo como un gato o una rana. Gateo fortalece mis brazos.", "🐱"],
      ["Paso bajo la cuerda", "Puedo pasar gateando debajo de una cuerda baja sin tocarla. Me gusta ser sigiloso.", "🧵"],
      ["Trepo con ayuda", "Trepo en estructuras bajas siempre con un adulto cerca y con las dos manos firmes.", "🧗"]
    ],
    q: [
      ["Para gatear necesito...", ["Usar mis manos y mis rodillas", "Sentarme", "Dormirme", "Comer"], 0, "Gateo a cuatro patas: manos y rodillas en el piso.", "Como un gatito."],
      ["Gatear me ayuda a fortalecer...", ["Las uñas", "Los brazos y el cuerpo", "El pelo", "La voz"], 1, "Gatear trabaja mis brazos, mi espalda y todo mi abdomen.", "Brazos fuertes."],
      ["Si paso bajo una cuerda, ¿qué hago?", ["La mojo", "La rompo", "La tiro", "Gateo bajo sin tocarla"], 3, "Gatear bajo la cuerda me obliga a mantenerme bajito y con control.", "Sin tocar la cuerda."],
      ["Cuando trepo, mis manos...", ["Se mojan", "Se quedan atrás", "Se esconden", "Sujetan fuerte y paso un pie a la vez"], 3, "Al trepar sujeto fuerte y muevo los pies de a poco.", "Manos firmes."],
      ["¿Dónde trepo con seguridad?", ["En estructuras bajas con un adulto cerca", "En el árbol solo", "En el techo", "En la ventana"], 0, "Trepo siempre donde hay un adulto cerca y en estructuras seguras.", "Adulto cerca siempre."],
      ["Si me canso trepando...", ["Sigo hasta arriba", "Salto", "Bajo despacio y descanso", "Grito"], 2, "Si me canso, bajo con cuidado y descanso; escucho a mi cuerpo.", "Bajo y descanso."],
      ["En el gateo cruzo primero...", ["La pierna", "La mano contraria", "La cabeza", "La cola"], 1, "Al gatear cruzo mano y pie del lado contrario; así me coordino mejor.", "Cruzo lados."],
      ["Gatear en el patio sirve para...", ["Cocinar", "Dormir", "Comer", "Jugar y ejercitar mi cuerpo"], 3, "Gatear es un ejercicio divertido que fortalece todo mi cuerpo.", "Juego y ejercicio."],
      ["Si mi compañero trepa antes que yo...", ["Espero mi turno", "Lo empujo", "Lo tiro", "Subo con él sin permiso"], 0, "Espero mi turno; así nadie se cae por empujones.", "Turno para todos."],
      ["¿Qué hago con mis rodillas al gatear en el piso?", ["Las mojo", "Las levanto siempre", "Las apoyo con cuidado", "Las cierro fuerte"], 2, "Apoyo las rodillas con cuidado; si el piso está duro, uso una colchoneta.", "Rodillas con cuidado."],
      ["El gateo y la trepa me ayudan a...", ["Mirar la tele", "Coordinar mis movimientos", "Cocinar", "Planchar"], 1, "Gatear y trepar mejoran mi coordinación y mi fuerza.", "Cuerpo coordinado."],
      ["Antes de gatear, reviso que...", ["El piso esté libre de cosas", "Haga frío", "Haga sol", "Haya mucho ruido"], 0, "Un piso libre de objetos evita que me tropiece.", "Piso despejado."]
    ],
    cl: {
      c: [["piso", "ASÍ ME DESPLAZO EN EL PISO", "🐱"], ["nopiso", "NO ES DESPLAZARSE EN EL PISO", "🍽️"]],
      i: [["Gateo", "piso"], ["Me arrastro", "piso"], ["Paso bajo la cuerda", "piso"], ["Trepo bajo", "piso"], ["Me siento a comer", "nopiso"], ["Duermo", "nopiso"], ["Me acuesto a ver", "nopiso"], ["Me quedo parado", "nopiso"]]
    },
    em: [["Gatear", "ir a cuatro patas"], ["Trepar", "subir con manos y pies"], ["Cruzar lados", "coordinar mano y pie"], ["Descansar", "paro cuando me canso"]],
    or: ["Reviso que el piso esté libre", "Pongo las manos y las rodillas", "Gateo cruzando mano y pie", "Me detengo y descanso"],
    e: ["Escribe qué animal imitas cuando gateas.", "Imito a un gato.", 3]
  },
  {
    n: "Subo y bajo con cuidado",
    o: "Subo y bajo escalones, bancos y rampas con seguridad.",
    d: "DBA 1º educación física: desarrolla la motricidad gruesa y el equilibrio con desplazamientos seguros.",
    t: [
      ["Subo despacio", "Cuando subo escalones o un banco, pongo un pie completo arriba y luego el otro. No corro.", "🧗"],
      ["Bajo mirando", "Para bajar, miro hacia abajo y pongo el pie de a poco. Bajo de frente, no de espaldas.", "👀"],
      ["Pido ayuda", "Si algo es muy alto, pido ayuda a un adulto. Pedir ayuda me cuida y evita caídas.", "🤲"]
    ],
    q: [
      ["Al subir escalones, mis pies...", ["Van uno completo arriba, luego el otro", "Se quedan abajo", "Saltan todos juntos", "Van de espaldas"], 0, "Pongo el pie completo en el escalón; así no me tropiezo.", "Pie completo."],
      ["Para bajar, primero...", ["Cierro los ojos", "Corro", "Miro hacia abajo", "Me siento"], 2, "Miro hacia abajo para poner bien el pie en cada escalón.", "Miro mis pies."],
      ["Bajar de espaldas por la escalera es...", ["Bueno", "Peligroso", "Divertido", "Una orden"], 1, "Bajar de espaldas es peligroso porque no veo los escalones.", "Siempre de frente."],
      ["Si el banco es muy alto para mí...", ["Lo empujo", "Lo salto corriendo", "Me río", "Pido ayuda a un adulto"], 3, "Pido ayuda; un adulto me sostiene y evito caerme.", "Pido ayuda."],
      ["Subir y bajar me ayuda a...", ["Tener piernas fuertes", "Dormir", "Comer", "Hablar"], 0, "Subir y bajar escalones ejercita mis piernas y mi equilibrio.", "Piernas fuertes."],
      ["Si la escalera está mojada, ¿qué hago?", ["Corro", "Salto", "Espero a que sequen o aviso a un adulto", "La mojo más"], 2, "Una escalera mojada resbala; espero o pido ayuda.", "Cuidado con los resbalones."],
      ["Cuando subo a un juego del patio, ¿qué hago primero?", ["Corro", "Espero mi turno y subo con cuidado", "Empujo", "Salto sin mirar"], 1, "Espero mi turno y subo con calma; así evito caídas.", "Turno y calma."],
      ["Mis manos al subir...", ["Se esconden", "Se mojan", "Se quedan atrás", "Sujetan la baranda cuando hay"], 3, "Sujetar la baranda me da seguridad al subir y bajar.", "Baranda firme."],
      ["Si llevo algo en las manos y subo la escalera...", ["Pido ayuda o lo dejo abajo", "Lo suelto", "Lo tiro", "Lo mojo"], 0, "Con las manos llenas es más difícil sostenerme; pido ayuda.", "Manos libres o ayuda."],
      ["Subir y bajar es...", ["Algo prohibido", "Una orden", "Un ejercicio que fortalece mis piernas", "Un castigo"], 2, "Subir y bajar es ejercicio natural que fortalece mis piernas.", "Ejercicio diario."],
      ["Si mi compañero baja corriendo, yo...", ["Lo sigo", "Le aviso que baje con calma", "Lo empujo", "Me río"], 1, "Le recuerdo bajar con calma; así cuidamos a todos.", "Cuido a mi amigo."],
      ["En la escalera del salón...", ["Camino y me sujeto", "Corro", "Salto", "Me siento en los escalones"], 0, "En la escalera camino despacio y me sujeto; no corro ni salto.", "Calma y sujeción."]
    ],
    cl: {
      c: [["seguro", "ASÍ VOY SEGURO", "🧗"], ["noseguro", "ASÍ NO VOY SEGURO", "⛔"]],
      i: [["Espero mi turno", "seguro"], ["Miro hacia abajo", "seguro"], ["Sujeto la baranda", "seguro"], ["Pido ayuda", "seguro"], ["Bajar de espaldas", "noseguro"], ["Correr en la escalera", "noseguro"], ["Saltar varios escalones", "noseguro"], ["Bajar mojado", "noseguro"]]
    },
    em: [["Subir", "pongo el pie completo"], ["Bajar", "miro hacia abajo"], ["Baranda", "me sujeta y me cuida"], ["Ayuda", "la pido a un adulto"]],
    or: ["Miro la escalera", "Espero mi turno", "Me sujeto y subo de frente", "Bajo despacio mirando mis pies"]
  },
  {
    n: "Nos ayudamos en equipo",
    o: "Juego en equipo y me apoyo en mis compañeros.",
    d: "DBA 1º educación física: participa en juegos guiados aprendiendo a cooperar.",
    t: [
      ["Juegos en pareja", "En algunos juegos trabajo con un compañero: pasamos el aro por encima de los dos sin soltarlo.", "👫"],
      ["Nos animamos", "Si mi compañero se cae, lo animo a intentar de nuevo. Ganamos y perdemos juntos.", "👏"],
      ["Todos suman", "En el equipo nadie sobra. Cada persona aporta algo: correr, saltar o animar.", "🌟"]
    ],
    q: [
      ["Cuando juego en equipo, yo...", ["Ayudo y me apoyo en mis compañeros", "Solo gano", "Me burlo", "No juego"], 0, "En el equipo nos ayudamos; así logramos más juntos.", "Juntos somos más."],
      ["Si mi compañero se cae en un juego...", ["Me río", "Lo empujo", "Lo ayudo a levantarse", "Sigo sin mirar"], 2, "Ayudar a levantarse es cuidar a mi compañero.", "Lo ayudo."],
      ["En el juego del aro en pareja, ¿qué hacemos?", ["Lo rompemos", "Pasamos el aro por encima sin soltarlo", "Lo tiramos", "Lo mojamos"], 1, "Los dos avanzamos pasando el aro; trabajamos juntos.", "Aro sin soltar."],
      ["¿Por qué es bueno jugar en equipo?", ["Para no jugar", "Para ganarle a todos", "Para copiar", "Para convivir y lograr cosas juntos"], 3, "El juego en equipo enseña convivencia y nos permite lograr más.", "Convivir y lograr."],
      ["Si perdemos un juego en equipo...", ["Animo a mi equipo para la próxima", "Rompo algo", "Me burlo", "Me voy"], 0, "Perder también enseña; animo a mi equipo y seguimos.", "Ánimo y seguimos."],
      ["¿Qué hago antes de empezar un juego en equipo?", ["Grito", "Corro", "Escucho las reglas", "Me siento"], 2, "Escuchar las reglas hace que el juego sea claro y divertido.", "Reglas primero."],
      ["En un juego de pasarme algo, ¿cómo lo hago?", ["Lanzándolo fuerte", "Con cuidado, mirando a mi compañero", "Cerrando los ojos", "A escondidas"], 1, "Paso los objetos con cuidado y mirando a mi compañero para no golpearlo.", "Cuidado y mirada."],
      ["Mi equipo ganó y el otro perdió...", ["Me burlo", "Les quito el material", "Grito", "Los saludo y les doy las gracias por jugar"], 3, "Ganar o perder se vive con respeto; saludo y agradezco.", "Respeto siempre."],
      ["Jugar en equipo me ayuda a...", ["Convivir y a trabajar con otros", "A pelear", "A copiar", "A no jugar"], 0, "Trabajar con otros desarrolla mi paciencia y mi amistad.", "Amigos y equipo."],
      ["Si alguien no quiere jugar en mi equipo...", ["Lo obligo", "Lo grito", "Lo invito con cariño y respeto", "Lo quito"], 2, "Invito con respeto; si no quiere, lo dejo tranquilo y busco otro compañero.", "Invito y respeto."],
      ["¿Qué pasamos con cuidado en los juegos?", ["Nada", "El aro o la pelota, mirando al compañero", "Todo lo más fuerte posible", "Los muebles"], 1, "Los materiales se pasan suaves y mirando a quien los recibe.", "Suave y mirando."],
      ["Al terminar el juego en equipo...", ["Agradezco a mis compañeros", "Grito", "Corro", "Rompo el material"], 0, "Agradecer cierra el juego con buen ánimo.", "Gracias, equipo."]
    ],
    cl: {
      c: [["bueno", "ESTO SÍ HAGO EN EL EQUIPO", "🤝"], ["malo", "ASÍ NO JUEGO EN EQUIPO", "⛔"]],
      i: [["Ayudo a mi compañero", "bueno"], ["Espero mi turno", "bueno"], ["Escucho las reglas", "bueno"], ["Animo a mi equipo", "bueno"], ["Me burlo", "malo"], ["Empujo", "malo"], ["No dejo jugar", "malo"], ["No escucho", "malo"]]
    },
    em: [["Ayudar", "apoyo a mi compañero"], ["Turno", "espero para jugar"], ["Reglas", "se escuchan antes de jugar"], ["Animar", "digo ánimo a mi equipo"]],
    or: ["Escucho las reglas", "Me junto con mi equipo", "Juego ayudando y esperando mi turno", "Agradezco al final"],
    e: ["Escribe cómo ayudas a tu equipo en un juego.", "Paso el aro con cuidado y animo a mis amigos.", 3]
  },
  {
    n: "Me estiro y descanso",
    o: "Estiro mi cuerpo y descanso al terminar la clase de educación física.",
    d: "DBA 1º educación física: cuida su cuerpo con elongación y descanso tras el juego.",
    t: [
      ["Estiro suave", "Estiro mis brazos hacia arriba, hacia los lados y hacia abajo. Estirar deja mis músculos suaves.", "🙆"],
      ["Respiro profundo", "Respiro por la nariz y suelto el aire por la boca. Respirar me calma después de correr.", "😮"],
      ["Descanso", "Al terminar, me siento o me acuesto en un lugar cómodo. El descanso también es parte del ejercicio.", "😴"]
    ],
    q: [
      ["Estirar los brazos hacia arriba sirve para...", ["Dejar los músculos suaves", "Comer", "Dormir", "Hablar"], 0, "Estirar elonga los músculos y evita dolores después de jugar.", "Arriba y suave."],
      ["Después de correr, ¿qué hago para calmarme?", ["Corro más", "Grito", "Respiro profundo por la nariz", "Me tiro al piso"], 2, "Respirar profundo baja el ritmo y me calma.", "Respiro y calmo."],
      ["La elongación se hace...", ["Rápido y fuerte", "Despacio y sin dolor", "Golpeando", "A saltos"], 1, "Estiro despacio; nunca con dolor ni rebotes fuertes.", "Despacio y suave."],
      ["Si me duele al estirar, ¿qué hago?", ["Sigo fuerte", "Estiro más", "Golpeo el piso", "Paro y se lo digo a la maestra"], 3, "Si algo me duele, paro y aviso; nunca insisto con dolor.", "Paro y aviso."],
      ["¿Qué puedo estirar sentado?", ["El cuello suave y los brazos", "Los pies sin moverlos", "La boca", "Las orejas fuerte"], 0, "Sentado puedo estirar brazos, cuello y espalda con calma.", "Sentado también estiro."],
      ["El descanso después del ejercicio...", ["Es una pérdida de tiempo", "Es un castigo", "Ayuda a mi cuerpo a recuperarse", "Es para dormir toda la clase"], 2, "El descanso permite que mi cuerpo se recupere para la siguiente actividad.", "Recuperar fuerzas."],
      ["Mientras descanso, yo...", ["Corro", "Respiro calmado y me quedo quieto", "Grito", "Empujo"], 1, "Descanso quieto y respirando; así recupero energía.", "Quietito y respiro."],
      ["Estirar antes de jugar sirve para...", ["No jugar", "Comer", "Dormir", "Preparar mis músculos"], 3, "Estirar antes de jugar prepara mi cuerpo y evita golpes.", "Preparo mi cuerpo."],
      ["Después de la clase, yo...", ["Bebo agua y descanso un momento", "Corro a la puerta", "Grito fuerte", "Rompo algo"], 0, "Beber agua y descansar cuida mi cuerpo después del ejercicio.", "Agua y calma."],
      ["¿Dónde me acuesto a descansar?", ["En el pasillo", "En la escalera", "En un lugar cómodo y seguro", "Sobre las mesas"], 2, "Elijo un lugar cómodo y seguro, como la colchoneta del salón.", "Lugar cómodo."],
      ["Respirar por la nariz y soltar por la boca...", ["Hace ruido fuerte", "Me ayuda a calmarme", "No sirve", "Es un juego"], 1, "Esta respiración me calma y me ayuda a recuperar el ritmo.", "Nariz entra, boca sale."],
      ["Ejercicio y descanso van juntos porque...", ["El cuerpo necesita moverse y también recuperarse", "El descanso es mejor siempre", "El ejercicio no sirve", "Hay que dormir siempre"], 0, "Mi cuerpo crece sano con movimiento y con descanso.", "Equilibrio sano."]
    ],
    cl: {
      c: [["cuido", "ASÍ CUIDO MI CUERPO AL TERMINAR", "🙆"], ["nocuido", "ESTO NO CUIDA MI CUERPO", "⛔"]],
      i: [["Estiro suave", "cuido"], ["Respiro profundo", "cuido"], ["Bebo agua", "cuido"], ["Descanso un momento", "cuido"], ["Sigo sin parar", "nocuido"], ["Golpeo", "nocuido"], ["Corro a la escalera", "nocuido"], ["No bebo nada", "nocuido"]]
    },
    em: [["Estirar", "alargo los músculos suave"], ["Respirar", "me calma"], ["Descansar", "recupero energía"], ["Agua", "la tomo después de jugar"]],
    or: ["Bajo el ritmo de mi movimiento", "Estiro brazos y piernas despacio", "Respiro profundo", "Descanso un momento y tomo agua"],
    e: ["Escribe qué haces para descansar después de correr.", "Respiro profundo y me tomo un vasito de agua.", 3]
  }
];

/* ====== g1 / etica ====== */
/* DBA 1º — etica */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.etica = [
  {
    n: "Saludo con cariño",
    o: "Saludo con calma y cariño a mis compañeros y a mi maestra.",
    d: "DBA 1º ética: reconoce la importancia del buen trato hacia sus compañeros, empezando por el saludo.",
    t: [
      ["Buenos días", "Cada mañana saludo con un buenos días y una sonrisa. Un saludo abre bien el día.", "🌞"],
      ["Distintos saludos", "Puedo saludar con un apretón de mano, un beso en la mano o con la mano al corazón. Cada familia saluda a su manera.", "🤝"],
      ["Saludo sin tocar", "Si alguien no quiere que lo toque, lo saludo con la voz o con la mano. Respeto cómo cada uno recibe el saludo.", "✋"]
    ],
    q: [
      ["Cuando llego a la escuela, es bueno...", ["Saludar con un buenos días", "Quedarme callado sin mirar", "Empujar", "Entrar corriendo"], 0, "Saludar muestra respeto y cariño; abre bien el día.", "Buenos días y sonrisa."],
      ["Un saludo puede ser...", ["Un empujón", "Un grito", "Un apretón de mano o un beso en la mano", "Un golpe"], 2, "Hay muchas formas de saludar; cada familia tiene la suya.", "Manos y cariño."],
      ["Si alguien no quiere que lo abrace...", ["Lo abrazo más fuerte", "Lo saludo con la voz y respeto", "Me enojo", "Lo empujo"], 1, "Respeto cómo cada persona recibe el saludo; no todos quieren contacto.", "Respeto su forma."],
      ["Saludar a la maestra es...", ["Falta de respeto", "Una orden", "Algo triste", "Una costumbre amable"], 3, "Saludar es una costumbre amable que crea buen ambiente.", "Amabilidad diaria."],
      ["Un buen saludo me hace sentir...", ["Bienvenido y alegre", "Triste", "Enojado", "Con miedo"], 0, "Los saludos cálidos nos hacen sentir queridos y seguros.", "Me siento querido."],
      ["¿A quién saludo en la escuela?", ["A nadie", "Solo a mi mamá", "A la maestra y a mis compañeros", "Al perro de la esquina"], 2, "Saludo a quienes están conmigo: la maestra, mis compañeros y el personal.", "Saludo a todos."],
      ["Si llego tarde a clase...", ["No saludo", "Saludo con calma y me siento", "Grito", "Corro"], 1, "Aunque llegue tarde, saludo con calma y respeto.", "Calma y respeto."],
      ["Mi saludo puede ser...", ["Uno con empujón", "Uno con grito", "Uno con risa burlona", "Un beso en la mano si mi familia lo hace"], 3, "El saludo depende de mi cultura y mi familia; se respeta el propio y el ajeno.", "Mi forma de saludar."],
      ["Saludar con la mano al corazón significa...", ["Que estoy contento de ver a la persona", "Que estoy enojado", "Que no quiero jugar", "Que tengo hambre"], 0, "El saludo con la mano al corazón expresa cariño sin tocar.", "Cariño en el corazón."],
      ["En la fila del recreo, yo...", ["Empujo para ser el primero", "Grito", "Saludo a mis compañeros con calma", "Me quedo sin mirar"], 2, "En la fila saludo y espero con calma; no empujo.", "Fila con calma."],
      ["Cuando saludo, mis ojos y mi voz...", ["Se esconden", "Muestran calma y amabilidad", "Gritan", "No sirven"], 1, "Mirar y hablar con calma hace mi saludo amable.", "Voz suave."],
      ["Un saludo amable ayuda a...", ["Convivir mejor", "Pelear", "Hacer ruido", "Perder el juego"], 0, "Los buenos saludos crean amistad y buen ambiente en el salón.", "Convivir mejor."]
    ],
    cl: {
      c: [["saludo", "FORMAS DE SALUDAR", "🤝"], ["nosu", "NO ES UN SALUDO", "⛔"]],
      i: [["Apretón de mano", "saludo"], ["Beso en la mano", "saludo"], ["Mano al corazón", "saludo"], ["Buenos días con la voz", "saludo"], ["Empujón", "nosu"], ["Grito", "nosu"], ["Golpe", "nosu"], ["Burla", "nosu"]]
    },
    em: [["Buenos días", "saludo de la mañana"], ["Apretón de mano", "saludo con la mano"], ["Mano al corazón", "cariño sin tocar"], ["Sonrisa", "acompaña el saludo"]],
    or: ["Me acerco con calma", "Miro a la persona", "Digo buenos días o la frase de mi familia", "Espero con paciencia"],
    e: ["Escribe cómo saludas cada mañana a tu maestra.", "Digo buenos días con la mano al corazón.", 3]
  },
  {
    n: "Hago y cuido mis amistades",
    o: "Hago nuevos amigos y cuido mis amistades con respeto.",
    d: "DBA 1º ética: reconoce la importancia de la amistad y del buen trato a sus compañeros.",
    t: [
      ["Hago amigos", "Si veo a un compañero solo, lo invito a jugar. Un saludo y una sonrisa pueden empezar una amistad.", "😊"],
      ["Juego compartido", "Cuando juego con mis amigos, comparto el material y espero mi turno.", "🧸"],
      ["Cuido la amistad", "No empujo, no golpeo y no me burlo. Si discutimos, hablamos con calma y pedimos perdón.", "💚"]
    ],
    q: [
      ["Si veo a un compañero solo en el patio...", ["Lo invito a jugar", "Me burlo", "Lo empujo", "Me voy"], 0, "Invitar a jugar es el primer paso de una amistad.", "Incluyo y juego."],
      ["Para hacer un amigo nuevo, puedo...", ["Quitarle el juguete", "Gritarle", "Decirle buenos días y ofrecer jugar", "Ignorarlo"], 2, "Un saludo y una invitación abren la puerta a la amistad.", "Buenos días y juego."],
      ["Cuando juego con mis amigos, el material...", ["Es solo mío", "Se comparte por turnos", "Se esconde", "Se rompe"], 1, "Compartir y esperar el turno cuida la amistad.", "Turno para todos."],
      ["Si mi amigo y yo discutimos...", ["Lo golpeo", "Me burlo", "Grito", "Hablamos con calma y pedimos perdón"], 3, "Hablar con calma y pedir perdón arregla las discusiones.", "Hablamos con calma."],
      ["Un buen amigo...", ["Respeta y escucha", "Empuja", "Grita", "Se burla"], 0, "El buen amigo respeta, escucha y no lastima.", "Respeta y escucha."],
      ["Si un amigo me lastima sin querer...", ["Lo golpeo", "Lo quito del juego", "Le digo que me dolió y lo escucho", "Me burlo"], 2, "Decir cómo me siento y escuchar resuelve mejor que golpear.", "Digo y escucho."],
      ["¿A quién puedo invitar a jugar?", ["Solo al más fuerte", "A quien quiera, con respeto", "A nadie", "Solo a mi primo"], 1, "Puedo jugar con cualquiera; todos merecen una oportunidad.", "Invito a todos."],
      ["Cuando mi amigo gana un juego...", ["Me enojo", "Lo empujo", "Me burlo", "Lo felicito"], 3, "Decirle felicidades a quien gana es amistad y generosidad.", "Lo felicito."],
      ["La amistad es...", ["Querer y respetar a otra persona", "Ganar siempre", "Tener muchos juguetes", "Mandar en los demás"], 0, "La amistad se basa en el cariño, el respeto y la compañía.", "Cariño y respeto."],
      ["Si alguien no habla mi idioma...", ["Me burlo", "Lo quito", "Le enseño con gestos y amabilidad", "Lo ignoro"], 2, "La amistad no depende del idioma; me comunico con gestos y cariño.", "Gestos amables."],
      ["Cuidar la amistad es...", ["Pedirle cosas siempre", "Escuchar, esperar el turno y no golpear", "Gritar", "Romper cosas"], 1, "Escuchar, compartir y no golpear cuida la amistad cada día.", "Amistad cuidada."],
      ["Si me mudo de barrio, puedo...", ["Mantener el contacto con ayuda de mi familia", "Olvidar a todos", "Romper todo", "Pelear"], 0, "Las amistades se cuidan también a la distancia con ayuda de los adultos.", "Amistad a la distancia."]
    ],
    cl: {
      c: [["amigo", "ASÍ ES UN BUEN AMIGO", "💚"], ["noamigo", "ASÍ NO SE ES BUEN AMIGO", "⛔"]],
      i: [["Respeta", "amigo"], ["Escucha", "amigo"], ["Comparte", "amigo"], ["Invita a jugar", "amigo"], ["Empuja", "noamigo"], ["Grita", "noamigo"], ["Se burla", "noamigo"], ["Golpea", "noamigo"]]
    },
    em: [["Invitar a jugar", "empieza una amistad"], ["Compartir", "jugar por turnos"], ["Escuchar", "prestar atención a mi amigo"], ["Pedir perdón", "arregla una discusión"]],
    or: ["Saludo y ofrezco jugar", "Comparto el material por turnos", "Escucho a mi amigo", "Si discutimos, hablamos y pedimos perdón"]
  },
  {
    n: "Por favor, gracias y permiso",
    o: "Uso las palabras de cortesía en el salón y en la casa.",
    d: "DBA 1º ética: practica el buen trato y el respeto usando palabras de cortesía.",
    t: [
      ["Palabras mágicas", "Por favor, gracias y permiso son palabras de cortesía. Con ellas pido y agradezco con respeto.", "✨"],
      ["Agradezco", "Cuando alguien me ayuda o me regala algo, digo gracias. Agradecer hace feliz a quien me da.", "🙏"],
      ["Pido con respeto", "Antes de tomar algo que no es mío o de entrar a un lugar, digo permiso. Así respeto a los demás.", "🚪"]
    ],
    q: [
      ["Cuando pido algo, añado...", ["Por favor", "Gracias", "Permiso", "Adiós"], 0, "Con por favor mi pedido suena respetuoso y amable.", "Por favor."],
      ["Si alguien me regala algo, digo...", ["Nada", "Adiós", "Gracias", "Permiso"], 2, "Agradecer reconoce el gesto del otro y lo hace sentir bien.", "Mil gracias."],
      ["¿Dónde digo permiso?", ["Solo en el recreo", "Antes de entrar o de tomar algo que no es mío", "Nunca", "Solo en casa"], 1, "Permiso se pide antes de entrar, tomar o intervenir algo.", "Pido permiso."],
      ["Las palabras de cortesía...", ["Son aburridas", "No sirven", "Son flojas", "Ayudan a convivir mejor"], 3, "Las palabras amables mejoran la convivencia y las amistades.", "Convivir mejor."],
      ["Si un compañero me ayuda con la mochila...", ["Le digo gracias", "Me quedo callado", "Lo empujo", "Me voy"], 0, "Agradezco cuando alguien me ayuda; es de buena educación.", "Gracias, amigo."],
      ["Pedir permiso muestra...", ["Que soy el más fuerte", "Que tengo miedo", "Respeto por el otro", "Que no quiero jugar"], 2, "Pedir permiso reconoce que el otro también decide.", "Respeto y permiso."],
      ["Si me olvido de decir gracias...", ["No pasa nada", "Puedo hacerlo después con calma", "Lo empujo", "Lo grito"], 1, "Nunca es tarde para agradecer; lo hago cuando me acuerdo.", "Agradezco después."],
      ["Para pasar delante de alguien, es amable decir...", ["Nada", "Muévete", "Apúrate", "Con permiso"], 3, "Decir con permiso es cuidar el espacio de los demás.", "Con permiso, gracias."],
      ["Decir gracias a la maestra al terminar...", ["Es una costumbre amable", "Es algo flojo", "Es una orden", "Es un castigo"], 0, "Agradecer al final cierra la actividad con buen ánimo.", "Gracias, maestra."],
      ["Las palabras mágicas se dicen...", ["Con gritos", "Corriendo", "Con calma y buena voz", "Sin mirar"], 2, "Se dicen con calma y mirando a la persona; así suenan amables.", "Voz suave."],
      ["Si alguien no me dice gracias...", ["Lo golpeo", "Le recuerdo amablemente o lo dejo pasar", "Me burlo", "Lo quito del juego"], 1, "Puedo recordar con amabilidad o dejarlo pasar; no lastimo a nadie.", "Amablemente."],
      ["En casa también uso palabras de cortesía porque...", ["La educación es para todos los lugares", "Solo sirve en la escuela", "Mis papás me obligan", "No sirven de nada"], 0, "La cortesía se practica en casa, en la escuela y en la calle.", "En todos lados."]
    ],
    cl: {
      c: [["cortesia", "PALABRAS DE CORTESÍA", "✨"], ["nocortesia", "NO SON PALABRAS DE CORTESÍA", "⛔"]],
      i: [["Por favor", "cortesia"], ["Gracias", "cortesia"], ["Permiso", "cortesia"], ["Buenos días", "cortesia"], ["Gritar", "nocortesia"], ["Burlarse", "nocortesia"], ["Empujar", "nocortesia"], ["Golpear", "nocortesia"]]
    },
    em: [["Por favor", "hace amable mi pedido"], ["Gracias", "agradezco un favor"], ["Permiso", "respeto al otro"], ["Disculpe", "llamo con respeto"]],
    or: ["Pido con por favor", "Espero la respuesta", "Recibo con calma", "Agradezco con un gracias"],
    e: ["Escribe una oración con la palabra gracias.", "Gracias por ayudarme con mi mochila.", 3]
  },
  {
    n: "No me burlo, todos somos diferentes",
    o: "Respeto las diferencias y no me burlo de mis compañeros.",
    d: "DBA 1º ética: reconoce la importancia del respeto y del buen trato hacia compañeros diferentes.",
    t: [
      ["Todos somos distintos", "Hay niños con lentes, con el pelo rizado o que usan silla de ruedas. Todos somos importantes.", "🌍"],
      ["Las burlas lastiman", "Reírse de otro hace daño, aunque sea jugando. Si me burlo, dejo de ser amable.", "💔"],
      ["Valoro las diferencias", "De las personas distintas aprendo cosas nuevas. Cada persona tiene algo bonito que aportar.", "💛"]
    ],
    q: [
      ["Si un compañero usa lentes...", ["Lo respeto y juego con él", "Me burlo", "Le quito los lentes", "Lo llamo tonto"], 0, "Los lentes ayudan a ver; no son motivo de burla.", "Respeto y juego."],
      ["Reírse de otro niño...", ["Es gracioso", "Es un juego bueno", "Hace daño y no es amable", "Es permitido"], 2, "Las burlas lastiman el corazón; no son buenas.", "Las burlas duelen."],
      ["Si me burlo de alguien...", ["No pasa nada", "Debo parar y pedir perdón", "Es divertido", "Es la mejor idea"], 1, "Si me burlo, paro de inmediato y pido perdón.", "Paro y pido perdón."],
      ["Todos somos importantes porque...", ["Somos iguales", "Tenemos los mismos juguetes", "Cantamos igual", "Cada persona tiene algo único"], 3, "Cada persona tiene algo especial que aportar al grupo.", "Cada uno es único."],
      ["Un niño que usa silla de ruedas...", ["Puede jugar y ser mi amigo", "No puede nada", "Es raro", "No debe salir"], 0, "Las sillas de ruedas ayudan a moverse; quien las usa puede jugar igual que yo.", "Juega como todos."],
      ["Si un compañero habla distinto...", ["Lo burlo", "Lo quito", "Lo escucho con respeto", "Lo empujo"], 2, "Escuchar con respeto nos permite aprender de los demás.", "Escucho y aprendo."],
      ["¿Qué hago si alguien se burla de mí?", ["Lo golpeo", "Le digo con calma que me duele y busco ayuda", "Me burlo", "Me salgo para siempre"], 1, "Decir con calma cómo me siento y pedir ayuda es lo mejor.", "Digo y pido ayuda."],
      ["Las diferencias nos ayudan a...", ["Pelear", "Copiar", "Perder", "Aprender unos de otros"], 3, "De lo distinto aprendemos todos.", "Aprendo de otros."],
      ["Respetar es...", ["Tratar bien a todos sin importar cómo sean", "Copiar a los demás", "Mandar en todos", "Burlarse"], 0, "Respetar es tratar bien a cada persona tal como es.", "Trato a todos bien."],
      ["Si un compañero no puede correr como yo...", ["Lo burlo", "Lo quito del juego", "Busco un juego donde también participe", "Lo empujo"], 2, "Ajusto el juego para que todos participen y se diviertan.", "Todos juegan."],
      ["Las palabras que lastiman...", ["Son graciosas", "No se deben usar", "Son de amigos", "Están bien siempre"], 1, "Elijo palabras que cuiden; nunca uso palabras que lastimen.", "Palabras que cuidan."],
      ["En mi salón convivimos bien cuando...", ["Respetamos las diferencias", "Todos somos iguales", "Nos burlamos", "Ganamos siempre"], 0, "El respeto a las diferencias crea un salón amable para todos.", "Respeto para todos."]
    ],
    cl: {
      c: [["respeto", "ESTO ES RESPETAR LAS DIFERENCIAS", "💛"], ["norespeto", "ESTO NO ES RESPETAR", "⛔"]],
      i: [["Juego con quien usa lentes", "respeto"], ["Escucho a quien habla distinto", "respeto"], ["Incluyo a quien usa silla", "respeto"], ["Valoro el pelo de cada uno", "respeto"], ["Me burlo", "norespeto"], ["Le quito el material", "norespeto"], ["Lo llamo tonto", "norespeto"], ["Lo dejo solo", "norespeto"]]
    },
    em: [["Diferencias", "cada persona es única"], ["Burla", "lastima a quien la recibe"], ["Respeto", "trato amable a todos"], ["Incluir", "invito a todos a jugar"]],
    or: ["Observo con calma", "Reconozco que todos somos distintos", "Juego e incluyo al otro", "Uso palabras que cuidan"]
  },
  {
    n: "Levanto la mano y escucho",
    o: "Espero mi turno para hablar levantando la mano y escuchando a los demás.",
    d: "DBA 1º ética: practica el respeto hacia sus compañeros escuchando y esperando el turno.",
    t: [
      ["Levanto la mano", "Cuando quiero hablar, levanto la mano y espero. Así todos podemos participar.", "✋"],
      ["Escucho al otro", "Cuando habla mi compañero, escucho en silencio y lo miro. Escuchar es respetar.", "👂"],
      ["Espero mi turno", "No interrumpo ni grito. Espero mi turno; todos tenemos derecho a hablar.", "⏳"]
    ],
    q: [
      ["Cuando quiero hablar en clase, yo...", ["Levanto la mano y espero", "Grito fuerte", "Me paro de golpe", "Interrumpo"], 0, "Levantar la mano y esperar hace orden y permite participar a todos.", "Mano arriba."],
      ["Mientras habla mi compañero, yo...", ["Lo interrumpo", "Grito", "Escucho en silencio", "Me burlo"], 2, "Escuchar en silencio es respetar a quien habla.", "Escucho en silencio."],
      ["Interrumpir a alguien...", ["Es bueno", "No es respetuoso", "Es amable", "Es una orden"], 1, "Interrumpir no deja terminar al otro; espero mi turno.", "Espero mi turno."],
      ["¿Quién tiene derecho a hablar en clase?", ["Solo el más grande", "Solo yo", "Solo quien canta", "Todos, por turnos"], 3, "Todos podemos hablar; por eso esperamos turnos.", "Turnos para todos."],
      ["Escuchar me ayuda a...", ["Entender lo que se explica", "Perder", "Copiar", "Pelear"], 0, "Cuando escucho, entiendo mejor la lección.", "Escucho y aprendo."],
      ["Si quiero decir algo urgente mientras habla otro...", ["Grito", "Lo empujo", "Levanto la mano y espero el momento", "Lo interrumpo"], 2, "Aunque sea urgente, levanto la mano y espero mi turno.", "Mano arriba y espero."],
      ["Para escuchar mejor, mis ojos...", ["Se cierran", "Miran a quien habla", "Se tapan", "No importan"], 1, "Mirar a quien habla demuestra atención y respeto.", "Miro y escucho."],
      ["Si no entiendo algo, ¿qué hago?", ["Me quedo callado para siempre", "Grito", "Lo mojo", "Levanto la mano y pregunto con calma"], 3, "Preguntar con calma me ayuda a aprender; no da vergüenza.", "Pregunto con calma."],
      ["Cuando escucho, mantengo...", ["La boca cerrada y el cuerpo quieto", "La boca abierta", "Los brazos en alto", "Los pies en la mesa"], 0, "Mi cuerpo quieto y mi boca cerrada ayudan a escuchar.", "Cuerpo quieto."],
      ["Si mi compañero no sabe responder...", ["Lo burlo", "Lo empujo", "Espero con calma y lo animo", "Le quito el turno"], 2, "Esperar con calma y animar ayuda a que el otro participe.", "Lo animo."],
      ["Escuchar también es...", ["Mirar el pizarrón sin más", "Respetar la idea del otro", "Perder el turno", "Copiar al compañero"], 1, "Escuchar es valorar lo que el otro dice.", "Valoro su idea."],
      ["En la mesa del almuerzo también...", ["Escucho y espero mi turno para hablar", "Grito", "Interrumpo", "Me paro de la silla"], 0, "La escucha es para todos los momentos del día.", "En la mesa también."]
    ],
    cl: {
      c: [["bien", "ASÍ ESCUCHO Y HABLO", "👂"], ["mal", "ASÍ NO ESCUCHO", "⛔"]],
      i: [["Levanto la mano", "bien"], ["Espero mi turno", "bien"], ["Miro a quien habla", "bien"], ["Pregunto con calma", "bien"], ["Grito", "mal"], ["Interrumpo", "mal"], ["Me burlo", "mal"], ["Me paro sin permiso", "mal"]]
    },
    em: [["Levantar la mano", "pido la palabra"], ["Escuchar", "atender al que habla"], ["Turno", "me toca después"], ["Preguntar", "saco mis dudas con calma"]],
    or: ["Levanto la mano", "Espero que la maestra me indique", "Hablo con calma y voz clara", "Escucho la respuesta"],
    e: ["Escribe qué haces cuando quieres hablar en clase.", "Levanto la mano y espero mi turno.", 3]
  },
  {
    n: "Cuido lo que es de todos",
    o: "Cuido los materiales y juguetes de la escuela y los devuelvo en buen estado.",
    d: "DBA 1º ética: reconoce la importancia del respeto cuidando lo que es de todos.",
    t: [
      ["Son de todos", "Los juguetes, libros y colores de la escuela son de todos. Cuido lo que uso porque no es solo mío.", "🏫"],
      ["Manos suaves", "No rompo las hojas, no muerdo los lápices y no arrastro los juguetes por el piso.", "🤲"],
      ["Los devuelvo", "Al terminar, devuelvo los materiales a su lugar y en buen estado. Así están listos para mis amigos.", "📦"]
    ],
    q: [
      ["Los materiales del salón...", ["Son de todos y se cuidan", "Son solo míos", "Se pueden romper", "No importan"], 0, "Los materiales compartidos se cuidan porque los usan muchos niños.", "De todos para todos."],
      ["Cuando termino de usar un juguete...", ["Lo escondo", "Lo tiro", "Lo devuelvo a su lugar", "Lo mojo"], 2, "Devolverlo a su lugar mantiene el salón ordenado.", "A su lugar."],
      ["Si rompo una hoja sin querer...", ["La escondo", "Le aviso a la maestra y pido otra", "La mojo", "La tiro al piso"], 1, "Avisar y pedir otra hoja es honesto y respetuoso.", "Aviso y pido."],
      ["Cuidar los libros significa...", ["Romper las páginas", "Doblar las esquinas", "Mojarlos", "Pasar las hojas con cuidado"], 3, "Pasar las hojas con cuidado alarga la vida del libro.", "Hojas con cuidado."],
      ["Los colores de la escuela se...", ["Usan con cuidado y se devuelven", "Esconden", "Rompen", "Tiran"], 0, "Uso cada color y lo devuelvo; así mi compañero también lo encuentra.", "Uso y devuelvo."],
      ["Si encuentro un juguete tirado...", ["Lo piso", "Lo escondo en mi mochila", "Lo levanto y lo guardo", "Lo mojo"], 2, "Recoger lo que está tirado cuida el salón y evita tropezones.", "Lo levanto y guardo."],
      ["¿Qué hago si un material no funciona?", ["Lo golpeo", "Le aviso a la maestra", "Lo mojo", "Lo rompo"], 1, "Avisar permite arreglarlo o reemplazarlo; nunca lo golpeo.", "Aviso a la maestra."],
      ["Compartir los colores con un compañero...", ["Es perder", "Es flojo", "Es malo", "Es de buen corazón"], 3, "Compartir enseña generosidad y mejora la convivencia.", "Compartir es bueno."],
      ["No muerdo los lápices porque...", ["Daño el material y puede ser peligroso", "Sabe mal", "Es aburrido", "Me lo dicen"], 0, "Morder daña los lápices y puede lastimarme; el material se cuida con las manos.", "Manos, no boca."],
      ["El pupitre de la escuela se cuida...", ["Pintándolo", "Rayándolo", "No rayándolo y apoyando suavemente", "Rompiéndolo"], 2, "No rayar y tratar con suavidad conserva los muebles del salón.", "Suave y sin rayar."],
      ["Si uso algo de mi compañero...", ["Lo tomo sin avisar", "Le pido permiso y se lo devuelvo", "Lo escondo", "Lo rompo"], 1, "Pedir permiso y devolver en buen estado es respeto al otro.", "Pido y devuelvo."],
      ["Cuidar lo de todos me hace...", ["Una persona responsable y respetuosa", "El más rápido", "El más grande", "Famoso"], 0, "Cuidar lo compartido forma buenos hábitos y respeto.", "Responsable y respetuoso."]
    ],
    cl: {
      c: [["cuido", "ASÍ CUIDO LOS MATERIALES", "📦"], ["nocuido", "ASÍ NO LOS CUIDO", "⛔"]],
      i: [["Uso con cuidado", "cuido"], ["Devuelvo a su lugar", "cuido"], ["Comparto", "cuido"], ["Aviso si algo falla", "cuido"], ["Rompo", "nocuido"], ["Escondo", "nocuido"], ["Tiro al piso", "nocuido"], ["Muerdo", "nocuido"]]
    },
    em: [["Compartir", "uso y devuelvo lo de otros"], ["Devolver", "lo dejo en su lugar"], ["Avisar", "digo si algo falla"], ["Suave", "trato el material con cuidado"]],
    or: ["Pido permiso para usarlo", "Lo uso con cuidado", "Lo devuelvo a su lugar", "Agradezco si me prestaron"]
  },
  {
    n: "Ayudo a quien lo necesita",
    o: "Ayudo a mis compañeros y a mi familia cuando lo necesitan.",
    d: "DBA 1º ética: reconoce la importancia del buen trato ayudando a los demás.",
    t: [
      ["Ayudo en el salón", "Si a un compañero se le cae el lápiz, se lo levanto. Ayudar es un gesto de amistad.", "💗"],
      ["Ayudo en casa", "Puedo ayudar a mi familia poniendo la mesa, ordenando mis juguetes o llevando algo ligero.", "🏠"],
      ["Ayudo con alegría", "Ayudo sin que me lo pidan y sin esperar premio. Ayudar me hace sentir bien.", "😊"]
    ],
    q: [
      ["Si a un compañero se le cae el lápiz...", ["Se lo levanto", "Me burlo", "Lo piso", "Me voy"], 0, "Levantar lo que se le cayó es un gesto sencillo de amistad.", "Lo levanto y se lo doy."],
      ["Ayudar en casa puede ser...", ["Ver la tele", "Poner la mesa", "Romper cosas", "Tirar la ropa"], 1, "Poner la mesa o recoger mis juguetes son ayudas reales.", "Ayudo con la mesa."],
      ["Cuando ayudo, lo hago...", ["Esperando un premio", "Con alegría y sin pedir nada", "Solo para ganar", "A regañadientes"], 1, "Ayudar con alegría, sin esperar premio, llena el corazón.", "De corazón."],
      ["Si alguien no quiere mi ayuda...", ["Lo obligo", "Lo empujo", "Lo grito", "Respeto y le ofrezco otra vez"], 3, "Respeto su decisión; puedo ofrecer mi ayuda con amabilidad.", "Respeto su decisión."],
      ["Ayudar a un mayor como mi abuelo...", ["Es un acto de respeto y amor", "Es algo flojo", "Es un castigo", "Es aburrido"], 0, "Ayudar a los mayores muestra amor y respeto.", "Amor y respeto."],
      ["¿Qué hago si no sé ayudar?", ["Me burlo", "Me voy", "Pregunto cómo puedo ayudar", "Me quedo callado"], 2, "Preguntar cómo ayudar es la mejor forma de empezar.", "Pregunto cómo ayudo."],
      ["Ayudar a mi hermanito pequeño...", ["Es cosa de mayores", "Es cuidarlo y acompañarlo", "Es quitarle sus cosas", "Es gritarle"], 1, "Cuidar y acompañar a los pequeños es un gesto de amor.", "Cuido y acompaño."],
      ["Si veo a alguien triste...", ["Me burlo", "Lo empujo", "Lo grito", "Me acerco y le pregunto cómo está"], 3, "Preguntar cómo está y acompañar ayuda mucho.", "Me acerco y pregunto."],
      ["En el salón, ayudar puede ser...", ["Prestar mi goma o explicar con calma", "Quitarle el lápiz", "Gritar", "Empujar"], 0, "Prestar y explicar con calma ayudan a mis compañeros.", "Presto y explico."],
      ["Ayudar me hace sentir...", ["Triste", "Enojado", "Útil y feliz", "Cansado para siempre"], 2, "Ayudar nos da satisfacción y fortalece la amistad.", "Útil y feliz."],
      ["Ayudo a mi familia también...", ["Cuando me lo piden a gritos", "Cuando veo que necesitan una mano", "Solo si me lo regalan", "Nunca"], 1, "Observar y ofrecer ayuda sin que me lo pidan es una actitud madura.", "Ofrezco mi ayuda."],
      ["Si ayudo todos los días...", ["Formo un buen hábito", "Me canso para siempre", "No sirve de nada", "Pierdo el tiempo"], 0, "Ayudar a diario se vuelve un hábito bueno para toda la vida.", "Todos los días ayudo."]
    ],
    cl: {
      c: [["ayudo", "ESTO ES AYUDAR", "💗"], ["noayudo", "ESTO NO ES AYUDAR", "⛔"]],
      i: [["Levanto lo caído", "ayudo"], ["Presto mi goma", "ayudo"], ["Pongo la mesa", "ayudo"], ["Acompaño al triste", "ayudo"], ["Me burlo", "noayudo"], ["Empujo", "noayudo"], ["Quito el material", "noayudo"], ["Grito", "noayudo"]]
    },
    em: [["Levantar lo caído", "ayudo con un gesto"], ["Prestar", "comparto mi material"], ["Poner la mesa", "ayudo en casa"], ["Acompañar", "estoy con quien está triste"]],
    or: ["Miro quién necesita ayuda", "Pregunto cómo puedo ayudar", "Ayudo con calma", "Agradezco la oportunidad de ayudar"],
    e: ["Escribe en qué ayudas en tu casa.", "Ayudo a poner la mesa.", 3]
  },
  {
    n: "Cuando me equivoco, pido perdón",
    o: "Reconozco cuando me equivoco y pido perdón con sinceridad.",
    d: "DBA 1º ética: practica el buen trato reconociendo sus errores y pidiendo perdón.",
    t: [
      ["Me disculpo", "Si lastimo a alguien sin querer, digo lo siento o discúlpame. Pedir perdón es de valientes.", "🙏"],
      ["Reparo el daño", "Pido perdón y también reparo: si manché su cuaderno, le doy el mío o lo ayudo.", "🛠️"],
      ["Perdono", "Si alguien me pide perdón, lo acepto. Perdonar deja la paz en el corazón.", "🕊️"]
    ],
    q: [
      ["Si lastimo a alguien sin querer...", ["Le pido perdón", "Me burlo", "Lo empujo", "Me escondo"], 0, "Pedir perdón reconoce el error y cuida la amistad.", "Lo siento de verdad."],
      ["Pedir perdón significa...", ["Ganar", "Perder", "Reconocer que me equivoqué", "Esconderme"], 2, "Pedir perdón es reconocer mi error con sinceridad.", "Reconozco mi error."],
      ["Si manché el cuaderno de mi compañero...", ["Me río", "Le pido perdón y le ofrezco el mío", "Lo escondo", "Lo mojo"], 1, "Reparar el daño muestra que mi perdón es sincero.", "Reparo el daño."],
      ["Cuando alguien me pide perdón...", ["Lo golpeo", "Lo grito", "Me burlo", "Lo perdono y sigo jugando"], 3, "Aceptar el perdón deja la paz y permite seguir siendo amigos.", "Perdono y sigo."],
      ["Decir discúlpame me hace...", ["Una persona valiente y honesta", "Débil", "Famoso", "Más grande"], 0, "Pedir perdón necesita valentía y honestidad.", "Valiente y honesto."],
      ["Si no fui yo el que rompió algo...", ["Culpo a otro", "Me burlo", "Digo la verdad con calma", "Lo escondo"], 2, "Decir la verdad con calma es mejor que culpar a otro.", "Digo la verdad."],
      ["Perdonar es...", ["Un castigo", "Dejar ir el enojo y buscar la paz", "Perder", "Olvidar todo"], 1, "Perdonar no es olvidar; es soltar el enojo para vivir en paz.", "Suelto el enojo."],
      ["Si se me olvida pedir perdón...", ["No pasa nada", "Lo empujo", "Me burlo", "Puedo hacerlo cuando me acuerdo"], 3, "Nunca es tarde para pedir perdón; lo hago cuando me acuerdo.", "Aunque tarde, lo hago."],
      ["Cuando pido perdón, lo hago...", ["Con calma y mirando al otro", "Gritando", "Corriendo", "Rompiendo algo"], 0, "Pedir perdón con calma y mirada sincera llega al corazón del otro.", "Calma y sinceridad."],
      ["Si mi hermano me pide perdón...", ["Lo golpeo", "Lo quito", "Lo perdono y lo abrazo", "Lo grito"], 2, "Aceptar el perdón de un familiar fortalece el cariño.", "Lo perdono y lo abrazo."],
      ["Después de pedir perdón...", ["Sigo sin más", "Trato de no volver a equivocarme", "Olvido a todos", "Peleo"], 1, "Pedir perdón va acompañado del esfuerzo de no repetir el error.", "No lo repito."],
      ["El perdón ayuda a...", ["Vivir en paz con los demás", "Pelear más", "Ganar siempre", "No hablar"], 0, "Con el perdón retomamos la amistad y la paz.", "Paz y amistad."]
    ],
    cl: {
      c: [["bien", "ASÍ PIDO PERDÓN Y PERDONO", "🕊️"], ["mal", "ASÍ NO LO HAGO", "⛔"]],
      i: [["Disculpame", "bien"], ["Reparo el daño", "bien"], ["Digo la verdad", "bien"], ["Acepto el perdón", "bien"], ["Culpo a otro", "mal"], ["Me burlo", "mal"], ["Golpeo", "mal"], ["Escondo", "mal"]]
    },
    em: [["Discúlpame", "pido perdón"], ["Lo siento", "reconozco mi error"], ["Perdono", "suelto el enojo"], ["Verdad", "cuento lo que pasó"]],
    or: ["Reconozco mi error", "Digo discúlpame con calma", "Reparo el daño si puedo", "Trato de no repetirlo"]
  },
  {
    n: "Mis manos y palabras son amables",
    o: "Uso mis manos y mis palabras con amabilidad; no golpeo ni insulto.",
    d: "DBA 1º ética: reconoce la importancia del buen trato usando manos y palabras amables.",
    t: [
      ["Manos que cuidan", "Mis manos sirven para ayudar, saludar y jugar. No golpeo ni empujo a nadie.", "🤲"],
      ["Palabras que cuidan", "Elijo palabras amables para hablar con mis compañeros. Las palabras feas lastiman.", "💬"],
      ["Resuelvo con palabras", "Si no estoy de acuerdo, hablo con calma y busco ayuda. Las manos no golpean.", "🗣️"]
    ],
    q: [
      ["Mis manos sirven para...", ["Ayudar y saludar", "Golpear", "Empujar", "Romper"], 0, "Las manos cuidan; nunca lastiman a los demás.", "Manos que cuidan."],
      ["Si estoy enojado, ¿qué hago?", ["Golpeo", "Empujo", "Respiro y hablo con calma", "Rompo algo"], 2, "Respirar y hablar con calma evita lastimar.", "Respiro y hablo."],
      ["Las palabras feas...", ["Son graciosas", "Lastiman a quien las escucha", "Son de amigos", "Están bien siempre"], 1, "Las palabras feas duelen; elijo palabras amables.", "Palabras que cuidan."],
      ["Cuando no estoy de acuerdo con mi compañero...", ["Lo golpeo", "Lo burlo", "Lo empujo", "Hablo con calma y explico"], 3, "Hablar con calma y explicar resuelve mejor que golpear.", "Hablo con calma."],
      ["Si alguien me empuja, yo...", ["Le digo con calma que no me gusta", "Lo empujo más fuerte", "Lo golpeo", "Lo burlo"], 0, "Decir con calma cómo me siento es más fuerte que un empujón.", "Digo con calma."],
      ["Un saludo amable es...", ["Un empujón", "Un grito", "Un apretón de mano suave", "Un golpe"], 2, "Los gestos amables se hacen con suavidad y respeto.", "Suave y respetuoso."],
      ["Mis palabras pueden...", ["Solo lastimar", "Lastimar o cuidar", "No hacer nada", "Comer"], 1, "Con mis palabras puedo cuidar o lastimar; elijo cuidar.", "Elijo cuidar."],
      ["Si veo una pelea entre compañeros...", ["Los animo a pegarse", "Los empujo", "Me burlo", "Busco a un adulto y los calmo"], 3, "Buscar ayuda adulta y calmar es lo mejor; yo no golpeo.", "Busco ayuda."],
      ["Golpear a un compañero...", ["Está mal y lastima", "Es un juego", "Es permitido", "Es bueno"], 0, "Golpear está mal; las manos no son para lastimar.", "Manos que no lastiman."],
      ["Para calmarme cuando algo me enoja...", ["Golpeo", "Grito", "Respiro profundo y cuento hasta tres", "Empujo"], 2, "Respirar y contar hasta tres me ayuda a no reaccionar golpeando.", "Respiro y cuento."],
      ["Hablar con calma me hace...", ["Débil", "Más fuerte y respetado", "Igual a todos", "Famoso"], 1, "Hablar con calma demuestra control y respeto propio y ajeno.", "Calma que respeta."],
      ["En mi salón preferimos...", ["Palabras amables y manos que cuidan", "Gritos", "Empujones", "Peleas"], 0, "Un salón agradable se construye con palabras amables y manos que cuidan.", "Amabilidad diaria."]
    ],
    cl: {
      c: [["cuidan", "MANOS Y PALABRAS QUE CUIDAN", "🤲"], ["lastiman", "MANOS Y PALABRAS QUE LASTIMAN", "⛔"]],
      i: [["Saludo suave", "cuidan"], ["Ayudo", "cuidan"], ["Hablo con calma", "cuidan"], ["Presto", "cuidan"], ["Golpear", "lastiman"], ["Empujar", "lastiman"], ["Insultar", "lastiman"], ["Burlarse", "lastiman"]]
    },
    em: [["Manos amables", "ayudo y saludo"], ["Palabras amables", "cuidan al otro"], ["Respirar", "me calma antes de reaccionar"], ["Hablar", "resuelvo mis diferencias"]],
    or: ["Respiro profundo", "Pienso antes de actuar", "Hablo con calma", "Busco ayuda si es necesario"],
    e: ["Escribe una palabra amable que puedas usar hoy.", "Gracias por ayudarme.", 3]
  }
];

/* ====== g1 / religiosa ====== */
/* DBA 1º — religiosa */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g1 = window.CURRICULO_DBA.g1 || {};
window.CURRICULO_DBA.g1.religiosa = [
  {
    n: "Cuido la naturaleza",
    o: "Valoro y cuido el entorno natural que me rodea.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Valora el entorno cuidando la naturaleza.",
    t: [
      ["La naturaleza es bonita", "El cielo, los árboles, los ríos y los animales son parte del entorno que me rodea. Es bonito cuidarlos.", "🌿"],
      ["Cuido con acciones", "No tiro basura al río ni al parque, riego las plantas y no rompo las ramas de los árboles.", "🏞️"],
      ["Observo y agradezco", "Cuando observo un pajarito o una flor, agradezco lo bello que es el mundo en que vivo.", "🌸"]
    ],
    q: [
      ["¿Qué hago con la basura en el parque?", ["La busco en un cesto", "La tiro al río", "La dejo en el piso", "La mojo"], 0, "Guardar la basura en su cesto cuida el entorno donde juego.", "Basura en su lugar."],
      ["Los árboles nos dan...", ["Juguetes", "Carros", "Sombra y aire limpio", "Televisores"], 2, "Los árboles dan sombra y aire limpio, y son hogar de pajaritos.", "Aire y sombra."],
      ["Si veo un pajarito en el árbol...", ["Le tiro una piedra", "Lo observo con calma", "Lo grito", "Lo molesto"], 1, "Observar en silencio respeta a los animales y me deja aprender.", "Observo y respeto."],
      ["Tirar basura al río...", ["Es bueno", "Es un juego", "No importa", "Lastima a los peces y al agua"], 3, "La basura contamina el agua y lastima a los seres que viven allí.", "El río no es un basurero."],
      ["Cuidar el entorno es...", ["Una forma de cuidar lo que me rodea", "Un castigo", "Algo solo para grandes", "Aburrido"], 0, "Cuidar el entorno es un acto de respeto y amor por la vida.", "Cuido lo que me rodea."],
      ["¿Qué puedo hacer con las plantas?", ["Romperlas", "Mojarlas sin parar", "Regarlas con cuidado", "Pisarlas"], 2, "Regar con cuidado ayuda a las plantas a crecer sanas.", "Riego con cuidado."],
      ["El agua del río sirve para...", ["Tirar basura", "Dar vida a plantas y animales", "Ensuciar", "Lastimar"], 1, "El agua da vida; por eso la cuidamos y no la ensuciamos.", "El agua da vida."],
      ["Cuando salgo al parque, yo...", ["Rompo las flores", "Tiro papeles", "Pinto los árboles", "Recogo lo que se cae y juego con cuidado"], 3, "Recoger y jugar con cuidado mantiene el parque limpio para todos.", "Parque para todos."],
      ["Los animales del campo merecen...", ["Respeto y cuidado", "Piedras", "Gritos", "Molestias"], 0, "Los animales son seres vivos; merecen respeto y cuidado.", "Respeto a la vida."],
      ["¿A quién le pido ayuda para cuidar plantas o animales?", ["A nadie", "Al televisor", "A un adulto de mi familia", "A los niños"], 2, "Los adultos me guían para cuidar bien el entorno.", "Me ayuda un adulto."],
      ["Cuidar la naturaleza también es...", ["Usar lo necesario y no desperdiciar", "Dejar la luz encendida", "Tirar agua a diestra y siniestra", "Romper ramas"], 0, "No desperdiciar agua ni luz cuida la naturaleza y a los demás.", "No desperdicio."],
      ["Observar una flor o un atardecer me hace...", ["Agradecer lo bonito del mundo", "Enojado", "Triste", "Hambriento"], 0, "La belleza del entorno invita a la gratitud y al asombro.", "Agradezco lo bello."]
    ],
    cl: {
      c: [["cuido", "ASÍ CUIDO EL ENTORNO", "🌿"], ["nocuido", "ASÍ NO LO CUIDO", "⛔"]],
      i: [["Guardo la basura", "cuido"], ["Riego las plantas", "cuido"], ["Observo a los animales", "cuido"], ["No desperdicio", "cuido"], ["Tiro basura", "nocuido"], ["Rompo flores", "nocuido"], ["Molesto a los animales", "nocuido"], ["Dejo la luz encendida", "nocuido"]]
    },
    em: [["Río", "da vida a plantas y animales"], ["Árbol", "da sombra y aire limpio"], ["Basura", "va al cesto"], ["Regar", "ayuda a crecer las plantas"]],
    or: ["Observo lo que me rodea", "Pienso cómo cuidarlo", "Hago una acción de cuidado", "Agradezco lo bello"],
    e: ["Escribe una forma de cuidar la naturaleza.", "Guardo la basura en su cesto.", 3]
  },
  {
    n: "El amor en mi familia",
    o: "Reconozco el amor de mi familia y lo demuestro con gestos.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Valora el amor familiar.",
    t: [
      ["El amor se demuestra", "El amor no solo se dice: se demuestra ayudando, escuchando y abrazando a quienes me cuidan.", "❤️"],
      ["Todos cuidamos", "En mi familia todos aportamos algo: yo ordeno mis juguetes y ellos me ayudan con la tarea.", "🏠"],
      ["Familias distintas", "Hay muchas formas de familia. Todas son valiosas cuando hay amor, cuidado y respeto.", "💞"]
    ],
    q: [
      ["El amor en la familia se demuestra...", ["Con gestos y ayudando", "Solo diciendo palabras", "Con regalos caros", "Con gritos"], 0, "El amor se muestra en acciones diarias: ayudar, escuchar y cuidar.", "Gestos de amor."],
      ["¿Qué gesto puedo hacer hoy en mi familia?", ["Gritar", "Romper cosas", "Ordenar mis juguetes", "Pelea"], 2, "Ordenar mis juguetes es un pequeño gesto de amor y responsabilidad.", "Ordeno mis cosas."],
      ["Cuando escucho a mi mamá o a mi papá...", ["Me burlo", "Los interrumpo", "Muestro amor y respeto", "Los empujo"], 2, "Escuchar con atención es una forma de amor.", "Escucho con atención."],
      ["Si mi hermanito pequeño llora...", ["Lo burlo", "Lo empujo", "Lo grito", "Lo acompaño y busco a un adulto"], 3, "Acompañar al pequeño y avisar a un adulto es cuidarlo con amor.", "Lo acompaño."],
      ["Abrazar a mi familia...", ["Es una forma de dar cariño", "Es malo", "Es un castigo", "Es un juego"], 0, "El abrazo es un gesto de cariño cuando ambos lo aceptan.", "Abrazo con cariño."],
      ["En mi familia, yo también...", ["Mando en todos", "No hago nada", "Apoyo con tareas pequeñas", "Peleo"], 2, "Aportar con tareas pequeñas muestra amor y responsabilidad.", "Yo también ayudo."],
      ["Las familias pueden ser...", ["Solo iguales", "Distintas, todas con valor", "Malas", "Sin importancia"], 1, "Las familias son distintas; todas tienen valor cuando hay cuidado.", "Todas tienen valor."],
      ["Si me enojo con mi familia...", ["Rompo algo", "Los empujo", "Me burlo", "Respiro y hablo con calma"], 3, "Hablar con calma arregla los enojos y cuida el cariño.", "Respiro y hablo."],
      ["Decir te quiero a mi familia...", ["Es un gesto bonito de amor", "Es flojo", "Es vergonzoso", "No sirve de nada"], 0, "Decir te quiero con la voz y con los gestos llena de alegría.", "Te quiero."],
      ["Cuando llego de la escuela...", ["Escondo mi mochila", "Grito", "Me acuesto", "Cuento cómo me fue y escucho a los míos"], 3, "Compartir cómo me fue y escuchar es un gesto de amor.", "Comparto y escucho."],
      ["Cuidar a un enfermo de mi familia...", ["Es molestia", "Es un acto de amor y paciencia", "Es un castigo", "Es aburrido"], 1, "Cuidar al enfermo con paciencia es amor en acción.", "Amor con paciencia."],
      ["El amor en familia me hace...", ["Sentirme seguro y querido", "Triste", "Enojado", "Con miedo"], 0, "El amor familiar da seguridad, paz y alegría.", "Seguro y querido."]
    ],
    cl: {
      c: [["amor", "GESTOS DE AMOR EN FAMILIA", "❤️"], ["noamor", "NO SON GESTOS DE AMOR", "⛔"]],
      i: [["Ayudo", "amor"], ["Escucho", "amor"], ["Aprecio", "amor"], ["Acompaño", "amor"], ["Gritar", "noamor"], ["Empujar", "noamor"], ["Me burlo", "noamor"], ["Romper", "noamor"]]
    },
    em: [["Ayudar", "gesto de amor"], ["Escuchar", "atención que vale"], ["Abrazar", "cariño en gestos"], ["Decir te quiero", "palabras de amor"]],
    or: ["Observo lo que mi familia necesita", "Ofrezco mi ayuda con alegría", "Acompaño y escucho", "Agradezco el amor que recibo"]
  },
  {
    n: "Doy gracias",
    o: "Agradezco lo que recibo y a las personas que me cuidan.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Comprende la gratitud como valor.",
    t: [
      ["Gracias por todo", "Desayuno, mochila, casa y cariño: muchas cosas buenas llegan a mi vida. Doy gracias por ellas.", "🙏"],
      ["Agradezco a las personas", "Doy gracias a mi familia, a mi maestra y a quienes me ayudan cada día.", "💞"],
      ["La gratitud se comparte", "Cuando agradezco, las personas se sienten bien queridas. Agradecer multiplica la alegría.", "😊"]
    ],
    q: [
      ["Cuando alguien me ayuda, yo...", ["Digo gracias", "Me quedo callado", "Lo empujo", "Me voy"], 0, "Agradecer reconoce el gesto del otro y lo hace sentir bien.", "Digo gracias."],
      ["¿A quién puedo agradecer?", ["A nadie", "Solo a mí", "A mi familia, mi maestra y a quienes me ayudan", "Al televisor"], 2, "Agradezco a quienes me cuidan y me ayudan cada día.", "A todos los que cuidan."],
      ["Agradecer por la comida es...", ["Un castigo", "Una costumbre bonita de gratitud", "Algo flojo", "Una orden"], 1, "Agradecer por la comida es valorar a quienes la prepararon.", "Gracias por la comida."],
      ["Si no tengo todo lo que quiero...", ["Me enojo", "Peleo", "Rompo", "Agradezco lo que sí tengo"], 3, "La gratitud es agradecer lo que tenemos, aunque no tengamos todo.", "Agradezco lo que tengo."],
      ["Agradecer me hace sentir...", ["Contento y lleno de alegría", "Triste", "Enojado", "Cansado"], 0, "La gratitud llena el corazón de alegría y paz.", "Corazón alegre."],
      ["¿Cómo agradezco a mi maestra?", ["Grito", "Me burlo", "Le digo gracias con calma", "La interrumpo"], 2, "Agradecer con calma y respeto es un regalo para quien enseña.", "Gracias, maestra."],
      ["Cuando agradezco...", ["Pasa nada", "Las personas se sienten queridas", "Se enojan", "Pierden algo"], 1, "Agradecer hace feliz a quien nos dio su ayuda.", "Se sienten queridas."],
      ["Dar las gracias también sirve para...", ["Pelear", "Gritar", "Perder", "Reconocer lo bueno que recibo"], 3, "Agradecer me ayuda a ver lo bueno de cada día.", "Veo lo bueno."],
      ["Si un amigo me presta su color...", ["Le doy las gracias", "Lo escondo", "Lo rompo", "Lo mojo"], 0, "Prestar merece agradecimiento; así cuidamos la amistad.", "Gracias, amigo."],
      ["En mi familia podemos dar las gracias...", ["Solo de noche", "Nunca", "En cualquier momento del día", "Solo si hay permiso"], 2, "La gratitud se vive a cualquier hora, no solo en momentos especiales.", "Siempre."],
      ["Agradecer también es...", ["Mirar el piso", "Valorar lo que otros hacen por mí", "Gritar", "Dormir"], 1, "La gratitud valora el esfuerzo y el cariño de los demás.", "Valoro lo que hacen."],
      ["Doy gracias por...", ["La vida, la familia y la escuela", "Las cosas malas", "Pelear", "Romper"], 0, "Agradezco las cosas buenas de mi vida: personas, salud y cuidados.", "Agradezco lo bueno."]
    ],
    cl: {
      c: [["doygracias", "ASÍ DOY GRACIAS", "🙏"], ["nodoy", "NO ES DAR LAS GRACIAS", "⛔"]],
      i: [["Gracias por la comida", "doygracias"], ["Gracias a mi familia", "doygracias"], ["Gracias a mi maestra", "doygracias"], ["Gracias al que me ayuda", "doygracias"], ["Gritar", "nodoy"], ["Molestar", "nodoy"], ["Insultar", "nodoy"], ["Romper", "nodoy"]]
    },
    em: [["Gracias", "palabra de gratitud"], ["Comida", "agradezco quien la preparó"], ["Ayuda", "la reconozco con gratitud"], ["Alegría", "lo que siento al agradecer"]],
    or: ["Reconozco lo bueno que recibí", "Digo gracias con la voz", "Agradezco con un gesto amable", "Comparto la alegría de agradecer"],
    e: ["Escribe a quién le das las gracias hoy y por qué.", "Le doy las gracias a mi mamá por cuidarme.", 3]
  },
  {
    n: "Perdonar es de valientes",
    o: "Comprendo que perdonar y pedir perdón hacen la paz.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Comprende el perdón como valor de convivencia.",
    t: [
      ["Pido y acepto perdón", "Cuando me equivoco, pido perdón. Cuando otro se disculpa, acepto su perdón con calma.", "🕊️"],
      ["Perdonar hace la paz", "Perdonar no es olvidar; es soltar el enojo para volver a jugar y a convivir bien.", "☮️"],
      ["Valientes que perdonan", "Perdonar necesita valentía. Las personas de buen corazón perdonan y buscan la paz.", "💛"]
    ],
    q: [
      ["Perdonar significa...", ["Soltar el enojo para vivir en paz", "Ganar siempre", "Perder", "Olvidar todo"], 0, "Perdonar es soltar el enojo; no olvidar, sino elegir la paz.", "Suelto el enojo."],
      ["Si alguien me pide perdón...", ["Lo golpeo", "Me burlo", "Lo escucho y puedo aceptar su perdón", "Lo quito"], 2, "Aceptar el perdón repara la amistad y trae calma.", "Acepto el perdón."],
      ["Pedir perdón es...", ["Una señal de debilidad", "Un acto de valentía", "Una orden", "Un castigo"], 1, "Pedir perdón reconoce el error con valentía y honestidad.", "Valentía y verdad."],
      ["Después de perdonar...", ["Peleo más", "Me burlo", "Lo golpeo", "Trato de seguir siendo amigo"], 3, "Después del perdón sigo conviviendo con calma y amistad.", "Seguimos siendo amigos."],
      ["Perdonar me hace sentir...", ["Liviano y en paz", "Más enojado", "Triste", "Cansado"], 0, "Perdonar quita un peso del corazón y trae paz interior.", "Corazón liviano."],
      ["Si me enojo con un amigo...", ["Rompo algo", "Me burlo", "Hablo con calma y busco arreglar", "Lo empujo"], 2, "Hablar y buscar arreglar es el camino de la paz.", "Busco arreglar."],
      ["Un acto de perdón se ve cuando...", ["Grito fuerte", "Digo discúlpame y cambio mi actitud", "Me burlo", "Lo escondo"], 1, "Pedir perdón va con cambio de actitud; no solo con palabras.", "Palabras y acciones."],
      ["Perdonar a mi hermanito...", ["Es malo", "Es un castigo", "Es pérdida", "Es cuidar el cariño familiar"], 3, "Perdonar cuida el cariño entre hermanos y en la familia.", "Cuido el cariño."],
      ["Si soy yo el que lastimó a otro...", ["Reconozco mi error y pido perdón", "Lo culpo", "Me burlo", "Lo escondo"], 0, "Reconocer el error y pedir perdón es el primer paso.", "Reconozco y pido."],
      ["Las personas de buen corazón...", ["Se enojan siempre", "Pelean", "Perdonan y buscan la paz", "Se burlan"], 2, "El buen corazón elige perdonar y vivir en paz.", "Buen corazón."],
      ["Perdonar todos los días me ayuda a...", ["Pelear más", "Convivir mejor", "Perder", "No hablar"], 1, "El perdón diario mejora la convivencia en casa y en la escuela.", "Convivir mejor."],
      ["La paz empieza cuando...", ["Yo elijo perdonar y tratar bien al otro", "Peleo", "Me burlo", "Grito"], 0, "La paz la construyo con mis decisiones diarias.", "Empiezo en mí."]
    ],
    cl: {
      c: [["paz", "ESTO BUSCA LA PAZ", "☮️"], ["nopaz", "ESTO NO BUSCA LA PAZ", "⛔"]],
      i: [["Pido perdón", "paz"], ["Perdono", "paz"], ["Hablo con calma", "paz"], ["Busco arreglar", "paz"], ["Grito", "nopaz"], ["Golpeo", "nopaz"], ["Me burlo", "nopaz"], ["Culpo", "nopaz"]]
    },
    em: [["Pedir perdón", "reconozco mi error"], ["Perdonar", "suelto el enojo"], ["Discúlpame", "palabra de paz"], ["Paz", "clima de convivencia"]],
    or: ["Reconozco lo que pasó", "Pido o acepto el perdón", "Hablo con calma", "Sigo conviviendo con respeto"]
  },
  {
    n: "Pequeños gestos de amor",
    o: "Demuestro el amor con pequeños gestos de servicio a los demás.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Comprende el servicio como expresión de amor.",
    t: [
      ["El amor se nota en gestos", "El amor se demuestra en cosas sencillas: regar una planta, llevar agua al abuelo o recoger un juguete.", "🤲"],
      ["Sirvo con alegría", "Servir a los demás es un gesto de amor que hace felices a todos.", "💛"],
      ["Sin esperar premio", "Ayudo sin esperar nada a cambio. El premio es ver sonreír a quien ayudé.", "🎁"]
    ],
    q: [
      ["Un pequeño gesto de amor puede ser...", ["Llevar agua a mi abuelo", "Romper algo", "Gritar", "Pelea"], 0, "Llevar agua o acompañar es un gesto sencillo y lleno de amor.", "Gestos sencillos."],
      ["Cuando sirvo a los demás...", ["Me siento triste", "Pierdo algo", "Me siento alegre y útil", "Me enojo"], 2, "Servir nos llena de alegría y nos hace sentir útiles.", "Útil y alegre."],
      ["Ayudo sin esperar premio porque...", ["Es un castigo", "El amor no se compra", "No sirve", "Es aburrido"], 1, "El amor verdadero no espera pago; se regala con alegría.", "Amor que se regala."],
      ["¿A quién puedo servir con gestos bonitos?", ["A nadie", "Solo a mí", "Al televisor", "A mi familia y a mi comunidad"], 3, "Sirvo a mi familia, a mis vecinos y a mis compañeros con gestos de amor.", "Familia y comunidad."],
      ["Regar las plantas de la casa es...", ["Un gesto de cuidado", "Un castigo", "Un juego", "Algo inútil"], 0, "Regar cuida la vida de las plantas; es un gesto de amor al entorno.", "Cuido las plantas."],
      ["Si mi abuelo está cansado...", ["Lo burlo", "Lo empujo", "Le llevo agua y lo acompaño", "Lo grito"], 2, "Acompañar y servir a los mayores es amor y respeto.", "Lo acompaño."],
      ["Servir en mi comunidad puede ser...", ["Pelear", "Recoger basura con otros", "Gritar", "Molestar"], 1, "Recoger basura o ayudar en la plaza cuida mi comunidad.", "Cuido mi barrio."],
      ["Cuando ayudo a un amigo que se cayó...", ["Me burlo", "Lo empujo", "Lo grito", "Le doy la mano y lo animo"], 3, "Dar la mano y animar es un gesto pequeño y muy valioso.", "Le doy la mano."],
      ["Los pequeños gestos...", ["Tanto valen como los grandes", "No valen nada", "Son flojos", "No se notan"], 0, "Un gesto pequeño hecho con amor tiene mucho valor.", "Pequeño y valioso."],
      ["Sirvo a los demás con...", ["Enojo", "Gritos", "Alegría y respeto", "A regañadientes"], 2, "Sirvo con alegría; así mi gesto llena de cariño.", "Alegría y respeto."],
      ["Si no puedo ayudar hoy...", ["Rompo algo", "Lo digo con calma y busco otro momento", "Me burlo", "Lo empujo"], 1, "Si hoy no puedo, lo expreso con calma y busco otra ocasión.", "Busco otro momento."],
      ["Los gestos de amor...", ["Hacen más bonita la convivencia", "No sirven", "Hacen daño", "Son solo para grandes"], 0, "Los gestos de amor crean un ambiente de calma y amistad.", "Convivencia bonita."]
    ],
    cl: {
      c: [["gesto", "GESTOS DE AMOR", "🤲"], ["nogesto", "NO ES UN GESTO DE AMOR", "⛔"]],
      i: [["Llevar agua", "gesto"], ["Regar plantas", "gesto"], ["Dar la mano", "gesto"], ["Recoger un juguete", "gesto"], ["Gritar", "nogesto"], ["Empujar", "nogesto"], ["Burlarse", "nogesto"], ["Romper", "nogesto"]]
    },
    em: [["Servir", "ayudo con alegría"], ["Acompañar", "estoy con quien me necesita"], ["Dar la mano", "ayudo a levantarse"], ["Amor", "se demuestra en gestos"]],
    or: ["Miro quién necesita mi ayuda", "Pienso un gesto sencillo", "Lo hago con alegría", "Agradezco la oportunidad de servir"],
    e: ["Escribe un gesto de amor que puedas hacer hoy.", "Le llevo agua a mi abuelo.", 3]
  },
  {
    n: "Todos somos importantes",
    o: "Comprendo que cada persona es valiosa e importante.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Comprende la fraternidad: todos tienen valor.",
    t: [
      ["Cada persona tiene valor", "Grande o pequeño, de acá o de otro lugar: cada persona es valiosa e importante.", "🌟"],
      ["Todos somos hermanos", "Tratarnos como hermanos quiere decir cuidarnos, respetarnos y querernos sin importar las diferencias.", "🤝"],
      ["Nadie sobra", "En el salón y en el barrio nadie sobra. Cada persona aporta algo bueno al grupo.", "💛"]
    ],
    q: [
      ["Cada persona es valiosa...", ["Sin importar cómo sea", "Solo si es rico", "Solo si gana", "Solo si es grande"], 0, "El valor de cada persona no depende de lo que tiene ni de lo que sabe.", "Valor que no se compra."],
      ["Tratarnos como hermanos quiere decir...", ["Pelear", "Copiar", "Cuidarnos y respetarnos", "Competir"], 2, "La fraternidad es cuidarse, respetarse y quererse como familia.", "Como hermanos."],
      ["Si un niño nuevo llega al salón...", ["Lo burlo", "Lo recibo con amabilidad", "Lo quito", "Lo empujo"], 1, "Recibir con amabilidad al nuevo es tratarlo como hermano.", "Lo recibo bien."],
      ["Nadie sobra porque...", ["Todos somos iguales", "Tenemos los mismos juguetes", "Cantamos igual", "Cada persona aporta algo bueno"], 3, "Cada persona tiene algo bueno que dar al grupo.", "Todos aportan."],
      ["Ayudar a alguien que no conozco...", ["Es un acto de bondad", "Es un error", "Es perder el tiempo", "Es aburrido"], 0, "Ayudar a quien no conozco también es cuidar al otro.", "Bondad sin conocer."],
      ["Las personas que tienen menos...", ["No importan", "Son malas", "Merecen respeto y ayuda", "No deben salir"], 2, "Merecen respeto, cuidado y ayuda; su valor es igual al mío.", "Respeto y ayuda."],
      ["Todos somos importantes porque...", ["Somos los más fuertes", "Cada ser humano tiene valor", "Somos iguales", "Tenemos lo mismo"], 1, "Cada ser humano tiene valor; esa es la base de la fraternidad.", "Valor humano."],
      ["¿Con quién puedo ser amigo?", ["Solo con quien es igual a mí", "Solo con mi vecino", "Solo con mi primo", "Con quien quiera, respetando sus diferencias"], 3, "La amistad no tiene barreras; se respeta lo distinto.", "Amistad sin barreras."],
      ["Decir que todos somos hermanos me invita a...", ["Cuidar a los demás", "Pelear", "Copiar", "Ganar siempre"], 0, "La hermandad me invita al cuidado y al buen trato.", "Cuido a los demás."],
      ["Si alguien tiene menos que yo...", ["Me burlo", "Lo quito", "Comparto y lo ayudo", "Lo grito"], 2, "Compartir con quien tiene menos es amor y fraternidad.", "Comparto y ayudo."],
      ["En el recreo, todos...", ["Deben ganar", "Podemos jugar juntos con respeto", "Deben sentarse", "No deben hablar"], 1, "Jugar juntos con respeto refleja que todos somos importantes.", "Juntos y respetados."],
      ["Sentirme parte de un grupo...", ["Me hace valorar a los demás", "Me hace perder", "Me hace triste", "Me hace enojar"], 0, "Pertenecer me ayuda a valorar la amistad y a los demás.", "Valoro a los demás."]
    ],
    cl: {
      c: [["valora", "ASÍ VALORO A LOS DEMÁS", "💛"], ["novalora", "ASÍ NO VALORO A LOS DEMÁS", "⛔"]],
      i: [["Respeto", "valora"], ["Cuido", "valora"], ["Comparto", "valora"], ["Incluyo", "valora"], ["Me burlo", "novalora"], ["Excluyo", "novalora"], ["Grito", "novalora"], ["Golpeo", "novalora"]]
    },
    em: [["Valor", "cada persona lo tiene"], ["Fraternidad", "tratarnos como hermanos"], ["Incluir", "invitar a todos"], ["Compartir", "reparto lo que tengo"]],
    or: ["Reconozco el valor de cada persona", "Trato con respeto", "Incluyo al que está solo", "Comparto y ayudo"]
  },
  {
    n: "Respeto lo que otros creen",
    o: "Respeto las creencias, tradiciones y formas de vida de los demás.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Respeta las creencias y tradiciones ajenas.",
    t: [
      ["Creencias distintas", "Algunos niños van a la iglesia, otros a su templo y otros no practican. Todos merecen respeto.", "🕊️"],
      ["Tradiciones que reúnen", "Las familias tienen tradiciones distintas: fiestas, comidas y cantos. Conocerlas me hace más amable.", "🎉"],
      ["Respeto escuchando", "No me burlo de las creencias de otros ni de sus tradiciones. Escucho con calma y respeto.", "👂"]
    ],
    q: [
      ["Si mi compañero tiene otra religión...", ["Lo respeto y sigo siendo su amigo", "Lo burlo", "Lo quito", "Peleo con él"], 0, "Respetar las creencias ajenas es amistad y buena convivencia.", "Respeto y amistad."],
      ["Las creencias de cada familia...", ["Son malas", "Son iguales todas", "Son distintas y se respetan", "No importan"], 2, "Cada familia tiene sus creencias; todas se respetan.", "Distintas y respetadas."],
      ["Cuando hablan de sus tradiciones, yo...", ["Me burlo", "Escucho con calma", "Grito", "Los quito"], 1, "Escuchar con calma me permite aprender de los demás.", "Escucho y aprendo."],
      ["Respetar una tradición ajena significa...", ["Criticarla", "Copiarla", "Romperla", "No burlarme y tratarla con amabilidad"], 3, "No me burlo y trato con amabilidad lo que es importante para otro.", "Amabilidad siempre."],
      ["Conocer las tradiciones de otros...", ["Me hace más amable y abierto", "Me hace enojar", "Me hace triste", "No sirve"], 0, "Conocer lo distinto amplía mi corazón y mi amistad.", "Me abre el corazón."],
      ["Si alguien no quiere contar sus creencias...", ["Lo grito", "Lo burlo", "Respeto su decisión", "Lo empujo"], 2, "Respetar también es aceptar cuando alguien prefiere no hablar de eso.", "Respeto su silencio."],
      ["Cuando hablamos de creencias, yo...", ["Impongo mi idea", "Uso palabras amables", "Grito", "Me burlo"], 1, "Al hablar de creencias uso palabras amables y respetuosas.", "Palabras amables."],
      ["Si alguien no celebra lo que yo celebro...", ["Lo burlo", "Lo quito", "Lo grito", "Lo entiendo y lo respeto"], 3, "Celebramos cosas distintas; entiendo y respeto al otro.", "Entiendo y respeto."],
      ["El respeto por las creencias...", ["Es parte de la convivencia", "Es flojo", "Es una orden", "No sirve"], 0, "El respeto a las creencias es la base de la convivencia pacífica.", "Base de convivencia."],
      ["¿Cómo aprendo de las tradiciones ajenas?", ["Burlándome", "Gritando", "Escuchando con calma", "Peleando"], 2, "Escuchando con calma y preguntando con respeto aprendo de los demás.", "Escucho con calma."],
      ["Si en mi barrio hay fiestas de otra cultura...", ["Las rompo", "Las respeto y puedo observar con calma", "Me burlo", "Las curo"], 1, "Observar con respeto me hace parte de una comunidad diversa.", "Observo con respeto."],
      ["Respetar a todos me hace...", ["Una persona amable y de buen convivir", "Famoso", "Fuerte", "Más grande"], 0, "El respeto construye amistad y buen ambiente.", "Amable y convivencial."]
    ],
    cl: {
      c: [["respeta", "ASÍ RESPETO LAS CREENCIAS", "🕊️"], ["norespeta", "ASÍ NO LAS RESPETO", "⛔"]],
      i: [["Escucho", "respeta"], ["No me burlo", "respeta"], ["Pregunto con calma", "respeta"], ["Aprecio sus fiestas", "respeta"], ["Me burlo", "norespeta"], ["Critico", "norespeta"], ["Impongo", "norespeta"], ["Grito", "norespeta"]]
    },
    em: [["Creencias", "las respeto"], ["Tradiciones", "las conozco con calma"], ["Escuchar", "aprendo de otros"], ["Amabilidad", "trato bien a todos"]],
    or: ["Escucho con calma", "No me burlo ni critico", "Pregunto con respeto", "Agradezco que me compartan"],
    e: ["Escribe algo que respetas de un compañero o vecino.", "Respeto las fiestas de mi vecina porque son importantes para ella.", 3]
  },
  {
    n: "Mi barrio, mi comunidad",
    o: "Valoro mi barrio y convivo en paz con mi comunidad.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Valora el entorno y la comunidad.",
    t: [
      ["Mi barrio es mi casa grande", "La plaza, la tienda, la cancha y el río son lugares de mi comunidad. Los cuido como si fueran mi casa.", "🏘️"],
      ["Convivo con mis vecinos", "Saludo a mis vecinos y los trato con respeto. En comunidad nos ayudamos entre todos.", "👋"],
      ["Participo con alegría", "Puedo ayudar en la comunidad recogiendo basura en la plaza o cuidando los juegos del parque.", "🌱"]
    ],
    q: [
      ["La plaza del barrio es...", ["Un lugar común que debo cuidar", "Mi casa", "El salón", "La escuela"], 0, "Los lugares comunes se cuidan entre todos; no son de una sola persona.", "Lugar de todos."],
      ["Si veo basura en la plaza...", ["La dejo", "La mojo", "La recogo o aviso a un adulto", "La piso"], 2, "Recoger o avisar cuida el lugar donde vivimos.", "Recogo o aviso."],
      ["A mis vecinos los saludo...", ["Gritando", "Con respeto", "Me burlo", "No los saludo"], 1, "El saludo respetuoso crea buen ambiente en el barrio.", "Saludo respetuoso."],
      ["Cuando convivo en comunidad...", ["Peleo", "Grito", "Me burlo", "Me ayudo con los demás"], 3, "En comunidad nos ayudamos y cuidamos lo compartido.", "Nos ayudamos."],
      ["Los juegos del parque se...", ["Cuidan para que todos jueguen", "Rompen", "Esconden", "Mojan"], 0, "Cuidar los juegos permite que todos los niños se diviertan.", "Juegos para todos."],
      ["¿Cómo aprendo sobre mi comunidad?", ["Cerrando los ojos", "Mirando la tele", "Observando, preguntando y participando", "Quedándome en casa"], 2, "Observar, preguntar y participar me hace parte de mi comunidad.", "Observo y pregunto."],
      ["Si un vecino necesita ayuda...", ["Lo burlo", "Le aviso a un adulto y ayudo si puedo", "Lo quito", "Me río"], 1, "Avisar a un adulto y ayudar cuida a mi vecino.", "Aviso y ayudo."],
      ["La escuela y la comunidad...", ["Son rivales", "No se relacionan", "Son lo mismo", "Se ayudan y conviven"], 3, "La escuela y la comunidad conviven y se ayudan mutuamente.", "Conviven y se ayudan."],
      ["Cuidar mi barrio me hace sentir...", ["Parte de una gran familia", "Triste", "Enojado", "Aislado"], 0, "Cuidar el barrio me hace sentir pertenencia y cariño.", "Pertenencia."],
      ["Si en la plaza hay una fiesta del barrio...", ["La rompo", "Me burlo", "La respeto y puedo observar con calma", "La curo"], 2, "Las fiestas del barrio son tradiciones que se respetan y disfrutan.", "Observo y respeto."],
      ["En la comunidad, lo compartido...", ["Es solo mío", "Se cuida entre todos", "No importa", "Se rompe"], 1, "Lo compartido se cuida entre todos los vecinos.", "Entre todos."],
      ["Mi actitud diaria...", ["Contribuye a un barrio amable", "No cambia nada", "Solo me afecta a mí", "Es dañina"], 0, "Mis gestos diarios hacen mejor mi barrio y mi comunidad.", "Hago mejor mi barrio."]
    ],
    cl: {
      c: [["cuido", "ASÍ CUIDO MI COMUNIDAD", "🏘️"], ["nocuido", "ASÍ NO LA CUIDO", "⛔"]],
      i: [["Saludo", "cuido"], ["Recogo basura", "cuido"], ["Cuido los juegos", "cuido"], ["Ayudo al vecino", "cuido"], ["Gritar", "nocuido"], ["Romper", "nocuido"], ["Burlarse", "nocuido"], ["Tirar basura", "nocuido"]]
    },
    em: [["Barrio", "mi comunidad"], ["Vecino", "la persona que vive cerca"], ["Plaza", "lugar común de todos"], ["Convivir", "vivir bien con otros"]],
    or: ["Observo lo que necesita mi barrio", "Pregunto cómo puedo ayudar", "Participo con respeto", "Cuido lo que es de todos"]
  },
  {
    n: "Amigos sin importar de dónde venimos",
    o: "Comprendo que todos podemos ser amigos sin importar de dónde venimos.",
    d: "Educación religiosa: valores y convivencia (según el currículo institucional). Comprende la fraternidad entre todos.",
    t: [
      ["Amigos de todas partes", "Puedo ser amigo de quien vive en la ciudad o en el campo, del que habla igual o distinto que yo.", "🌎"],
      ["Lo que nos une", "A todos nos gusta jugar, queremos ser tratados bien y disfrutamos el cariño de nuestra familia.", "💞"],
      ["Hacemos comunidad", "Cuando nos tratamos bien, creamos una comunidad donde todos cabemos y nadie se queda solo.", "🤝"]
    ],
    q: [
      ["Puedo ser amigo de...", ["Quien vive en el campo o en la ciudad", "Solo de mi primo", "Solo de quien tiene mi color", "Solo de mi barrio"], 0, "La amistad no depende del lugar donde se vive; depende del buen trato.", "Amistad sin fronteras."],
      ["Lo que todos tenemos en común es...", ["La misma casa", "El mismo color de piel", "Querer ser bien tratados", "La misma comida"], 2, "Todos queremos ser tratados con respeto y cariño.", "Queremos lo mismo."],
      ["Si llega un niño de otro lugar...", ["Lo burlo", "Lo recibo con amabilidad", "Lo quito", "Lo grito"], 1, "Recibir con amabilidad crea amistades nuevas.", "Lo recibo bien."],
      ["Si no entiendo el acento de otro niño...", ["Lo burlo", "Lo quito", "Lo grito", "Le pido que repita con calma"], 3, "Pedir que repita con calma me ayuda a entenderlo y a respetarlo.", "Pido que repita."],
      ["Tratar bien a todos...", ["Hace de nosotros mejores amigos", "Hace perder", "Hace aburrir", "Hace daño"], 0, "El buen trato construye amistades verdaderas.", "Buen trato, mejores amigos."],
      ["Nadie debe quedarse solo porque...", ["Es su culpa", "No lo quieren", "Todos merecemos amistad y compañía", "Es débil"], 2, "Todos merecemos compañía; nadie debe quedar solo en el juego.", "Nadie solo."],
      ["¿Cómo hago comunidad en mi salón?", ["Peleando", "Tratando bien a todos y ayudando", "Copiando", "Gritando"], 1, "El buen trato y la ayuda crean comunidad en el salón.", "Trato bien y ayudo."],
      ["Si tengo amigos distintos a mí...", ["Pierdo", "Peleo", "Me burlo", "Aprendo y me enriquezco"], 3, "Los amigos distintos me enseñan cosas nuevas.", "Aprendo de ellos."],
      ["Querer a los demás es...", ["Un valor que me hace mejor persona", "Un castigo", "Una pérdida", "Una orden"], 0, "El amor al prójimo me forma como persona buena.", "Me hace mejor."],
      ["Cuando comparto con otros...", ["Pierdo cosas", "Pierdo amigos", "Construyo amistad", "Me quedo solo"], 2, "Compartir construye amistad y comunidad.", "Construyo amistad."],
      ["Ser amigo de todos me hace sentir...", ["Aislado", "Parte de una gran familia", "Enojado", "Triste"], 1, "La amistad amplia me hace sentir parte de una gran familia.", "Gran familia."],
      ["Un gesto amable mío...", ["Puede empezar una gran amistad", "No sirve", "Hace daño", "Es perdido"], 0, "Un gesto amable puede abrir el corazón de alguien y empezar una amistad.", "Un gesto abre corazones."]
    ],
    cl: {
      c: [["amigo", "ESTO FOMENTA LA AMISTAD", "🤝"], ["noamigo", "ESTO NO FOMENTA LA AMISTAD", "⛔"]],
      i: [["Saludo", "amigo"], ["Comparto", "amigo"], ["Juego con todos", "amigo"], ["Ayudo", "amigo"], ["Burlarse", "noamigo"], ["Excluir", "noamigo"], ["Gritar", "noamigo"], ["Dejar solo", "noamigo"]]
    },
    em: [["Amistad", "nos une a todos"], ["Buen trato", "forma comunidad"], ["Compañía", "nadie se queda solo"], ["Gestos", "abren corazones"]],
    or: ["Saludo a quien no conozco", "Lo recibo con amabilidad", "Juego e incluyo a todos", "Cuido la amistad cada día"],
    e: ["Escribe quién te puede enseñar algo nuevo y cómo lo tratas.", "Trato bien a mi compañero de otro barrio y juego con él.", 3]
  }
];
