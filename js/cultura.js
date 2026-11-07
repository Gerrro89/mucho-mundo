/* =========================================================
   Cultura general para niños y niñas de 6 a 11 años.
   Todo offline. Datos cortos, sorprendentes y verificables.

   Ofrece:
     · CULTURA.categorias : categorías con datos ("¿Sabías que…?")
     · CULTURA.dato(cat)  : un dato al azar (o de toda la colección)
     · CULTURA.reto(n)    : n preguntas de quiz con explicación
     · CULTURA.galeria    : imágenes ilustradas con su explicación

   Reglas de contenido:
     · Nunca hay emojis en el texto de las preguntas ni en las
       opciones de respuesta (los íconos van por separado).
     · Todos los datos son reales y todos enseñan algo.
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. CATEGORÍAS Y DATOS
     Cada dato: { t: título corto, d: explicación }
     --------------------------------------------------------- */
  const CATS = [
    {
      id: "colombia",
      nombre: "Mi país Colombia",
      icono: "🌺",
      color: "#f4a261",
      facts: [
        { t: "El país de las aves", d: "Colombia es el país con más especies de aves del planeta: más de 1.900. Casi una de cada cinco especies de aves del mundo vive aquí." },
        { t: "Una capital muy, muy alta", d: "Bogotá está a 2.600 metros sobre el nivel del mar. Es una de las capitales más altas del mundo, rodeada por la cordillera de los Andes." },
        { t: "El Carnaval más alegre", d: "El Carnaval de Barranquilla fue declarado Obra Maestra del Patrimonio de la Humanidad por la UNESCO: días enteros de música, tambores y danzas." },
        { t: "El salto legendario", d: "El río Bogotá se lanza desde una pared de roca y forma el Salto del Tequendama. Los muiscas ya contaban historias sobre ese salto hace cientos de años." },
        { t: "Nieve junto al mar", d: "En la Sierra Nevada de Santa Marta hay montañas con nieve permanente a pocas horas del mar Caribe. Es la cordillera costera más alta del mundo." },
        { t: "Huevos azules de verdad", d: "La gallina Araucana, que nació en Colombia, pone huevos de color azul claro. ¡No es magia: es su raza!" },
        { t: "El río rey nace aquí", d: "El río que más agua lleva del planeta es el Amazonas, y uno de los brazos que lo forman nace en Colombia, en los picos nevados del sur." },
        { t: "El oro que cuenta su historia", d: "En el Museo del Oro de Bogotá están guardadas unas 34.000 piezas hechas por los pueblos indígenas antes de que llegara Colón." },
      ],
    },
    {
      id: "universo",
      nombre: "El universo",
      icono: "🚀",
      color: "#4cc9f0",
      facts: [
        { t: "El espacio es silencioso", d: "En el espacio no hay aire, y sin aire el sonido no viaja. Por eso entre las estrellas todo es un silencio absoluto." },
        { t: "Un día más largo que su año", d: "En el planeta Venus un día dura más que un año completo: gira tan lento sobre sí mismo que le gana la vuelta al Sol." },
        { t: "La tormenta gigante", d: "La Gran Mancha Roja de Júpiter es una tormenta tan grande que dentro cabría el planeta Tierra entero. Ya lleva cientos de años soplando." },
        { t: "Un millón de Tierras", d: "Dentro del Sol cabría un millón de planetas como el nuestro. ¿Y la luz? Tarda 8 minutos en llegar cuando la vemos." },
        { t: "La luz viajera", d: "La luz del Sol tarda unos 8 minutos en llegar hasta nosotros. Cuando miras el cielo de día, ves el Sol de hace 8 minuticos." },
        { t: "Astronautas estirados", d: "En la estación espacial los astronautas crecen hasta 5 centímetros, porque sin la fuerza de la gravedad la columna se estira. Al volver, vuelven a su tamaño." },
        { t: "El planeta nadador", d: "Saturno es tan liviano que flotaría en una bañera lo bastante grande: su densidad es menor que la del agua." },
        { t: "La Luna en movimiento", d: "La Luna se aleja de nosotros unos 3,8 centímetros cada año, casi como una regla pequeña creciendo despacio." },
      ],
    },
    {
      id: "planeta",
      nombre: "Nuestro planeta",
      icono: "🌍",
      color: "#06d6a0",
      facts: [
        { t: "Un mar sin explorar", d: "El agua cubre el 71% de la Tierra, pero los humanos solo han visto una fracción muy pequeñita de los fondos del mar." },
        { t: "El volcán más alto", d: "El volcán activo más alto del mundo es el Ojos del Salado, en la cordillera de los Andes, entre Chile y Argentina. Mide casi 6.900 metros." },
        { t: "El rey de los ríos", d: "El río que más agua lleva del mundo es el Amazonas: hay partes en las que es tan ancho que de una orilla a la otra no se ve nada." },
        { t: "La caída más grande", d: "El Salto Ángel, en Venezuela, es la cascada más alta del mundo: el agua cae 979 metros, casi como si cayera desde un edificio de 250 pisos." },
        { t: "El pulmón del planeta", d: "La selva amazónica se llama 'el pulmón del planeta' por la cantidad de árboles que fabrican el oxígeno que respiramos." },
        { t: "Desierto de estrellas", d: "En el Desierto de la Tatacoa, en Colombia, llueve tan poco que es uno de los mejores lugares de América para mirar las estrellas." },
        { t: "Guardianes de agua", d: "Los cactus guardan agua en su interior y algunos, como el saguaro, viven más de 200 años. Crecen tan lento que en 10 años pueden medir solo 5 centímetros." },
        { t: "Nieve en el ecuador", d: "En la Sierra Nevada del Cocuy hay picos con nieve todo el año, aunque estén en plena línea del ecuador: lo que manda es la altura, no el calor del sitio." },
      ],
    },
    {
      id: "animales",
      nombre: "Animales asombrosos",
      icono: "🐾",
      color: "#ff7f7f",
      facts: [
        { t: "El corazón gigante", d: "El corazón de la ballena azul pesa unos 180 kilos, casi como un hipopótamo completo, y su latido se siente a kilómetros de distancia." },
        { t: "Tres corazones", d: "El pulpo tiene tres corazones y su sangre es azul, porque usa cobre para transportar el oxígeno en vez de hierro." },
        { t: "Bailando por comida", d: "Las abejas bailan y dibujan formas en el aire para avisar a sus hermanas dónde hay flores llenas de néctar." },
        { t: "Durmiendo a medias", d: "Los delfines duermen con la mitad del cerebro despierta y el ojo de ese lado abierto, para seguir respirando y estar alerta." },
        { t: "Siete vértebras iguales", d: "La jirafa tiene el mismo número de vértebras en el cuello que tú: siete. Las suyas son gigantes, de más de 25 centímetros." },
        { t: "Vuelo hacia atrás", d: "El colibrí es el único pájaro que sabe volar hacia atrás y bate sus alas unas 80 veces por segundo: al ojo se ve un manchón brillante." },
        { t: "Descanso semanal", d: "Los perezosos bajan del árbol solo una vez a la semana. El resto del tiempo comen hojas, duermen y se dejan balancear." },
        { t: "La lengua más larga", d: "La lengua del camaleón mide lo mismo que su cuerpo y sale disparada en menos de un parpadeo para atrapar insectos." },
      ],
    },
    {
      id: "cuerpo",
      nombre: "El cuerpo humano",
      icono: "🧠",
      color: "#ffd166",
      facts: [
        { t: "206 piezas", d: "El adulto tiene 206 huesos. Los bebés nacen con unos 300, muchos pequeñitos, que se van uniendo al crecer hasta dejar 206." },
        { t: "Un hueso de grano de arroz", d: "El hueso más pequeño del cuerpo está en el oído: se llama estribo y es del tamaño de un grano de arroz." },
        { t: "Cien mil latidos", d: "El corazón late unas 100.000 veces al día. En una vida larga puede dar más de 3.000 millones de latidos sin parar." },
        { t: "Renovarse siempre", d: "La piel se renueva todo el tiempo: cada cuatro semanas se cambia por una capa nueva. Por eso los rayones sanan sin dejar rastro." },
        { t: "La fábrica de olores", d: "La nariz puede distinguir miles de olores distintos, y el olfato es el sentido que más recuerdos nos trae: un olor te lleva a un recuerdo en un segundo." },
        { t: "El hueso viajero", d: "Todos los humanos tenemos un hueso llamado cóccix, que quedó al final de la columna como recuerdo de las colas de nuestros antepasados." },
        { t: "El motor que nunca para", d: "El 60% del cuerpo es agua. Si no bebes suficiente, el cerebro se cansa y cuesta pensar: por eso el agua es mejor amiga que el jugo." },
        { t: "Uñas lentas", d: "Las uñas de la mano crecen unos 3 milímetros al mes, y las de los pies más despacio. El pelo crece más rápido que las uñas." },
      ],
    },
    {
      id: "arte",
      nombre: "Arte y música",
      icono: "🎨",
      color: "#9b5de5",
      facts: [
        { t: "El pintor de los gorditos", d: "El pintor colombiano Fernando Botero pintó personas y animales bien redonditos. A ese estilo lo llaman Boterismo y lo conoce todo el mundo." },
        { t: "La primera galería", d: "Los primeros artistas del mundo pintaron en las paredes de cavernas hace más de 40.000 años: dibujaron animales que hoy ya no existen." },
        { t: "Sonrisa sin cejas", d: "La Mona Lisa, la pintura más famosa del museo del Louvre, casi no tiene cejas: podrían haberse borrado con los años y las restauraciones." },
        { t: "El acordeón viajero", d: "El acordeón llegó desde Alemania a la costa Caribe de Colombia. Allí se mezcló con los tambores y las gaitas, y así nació el vallenato, que también es Patrimonio de la Humanidad." },
        { t: "La cumbia que camina", d: "La cumbia nació en la costa Caribe colombiana mezclando tambores africanos, gaitas indígenas y pasos traídos de Europa: en los bailes se deslizan los pies." },
        { t: "88 teclas", d: "Un piano tiene 88 teclas: 52 blancas y 36 negras. Con esas 88 tecleecitas se puede tocar cualquier melodía del planeta." },
        { t: "La música eterna", d: "Johann Sebastian Bach compuso su música hace más de 300 años y todavía se escucha en todo el mundo. La buena música no se pone vieja." },
        { t: "La leyenda dorada", d: "El oro del museo guarda la leyenda de El Dorado: los muiscas cubrían de polvo de oro a sus caciques y lo sumergían en la laguna de Guatavita." },
      ],
    },
    {
      id: "ciencia",
      nombre: "Inventos y ciencia",
      icono: "🧪",
      color: "#65bfff",
      facts: [
        { t: "La primera rueda", d: "La rueda se inventó hace más de 5.000 años. Al principio no sirvió para carros: se usaba para moldear vasijas de barro." },
        { t: "El papel chino", d: "El papel lo inventaron los chinos hace unos 2.000 años: molían fibras de plantas en agua hasta dejar una hoja delgadita que se secaba al sol." },
        { t: "El velcro y los ganchos", d: "El velcro se inspiró en unas semillas con ganchos que se pegaban al pelo de un perro. Su inventor las miró al microscopio y copió la idea." },
        { t: "Los robots de Marte", d: "Los robots Curiosity y Perseverance ruedan por Marte sacando fotos y perforando rocas, para saber si allí hubo agua y vida." },
        { t: "Ondas invisibles", d: "El wifi usa ondas parecidas a las de la luz, pero mucho más largas: por eso atraviesan las paredes sin que las podamos ver." },
        { t: "La voz viajera", d: "El micrófono convierte el aire de tu voz en electricidad, la electricidad viaja por el cable y en el otro lado vuelve a hacer aire vibrante: otra vez tu voz." },
        { t: "¿Por qué se levanta el avión?", d: "Los aviones vuelan porque sus alas empujan el aire hacia abajo, y el aire responde empujando el avión hacia arriba." },
        { t: "El salto del mensaje", d: "Los satélites que llevan mensajes giran cientos de kilómetros sobre nuestras cabezas: tu llamada brinca al cielo y vuelve en menos de un segundo." },
      ],
    },
    {
      id: "historia",
      nombre: "Historia asombrosa",
      icono: "🏛️",
      color: "#f2994a",
      facts: [
        { t: "Pirámides y obreros pagados", d: "Las pirámides de Egipto tardaron una veintena de años en construirse. Los obreros eran trabajadores pagados con comida, no esclavos como se creía antes." },
        { t: "La escritura primera", d: "La escritura nació en Mesopotamia, hoy Irak, hace unos 5.000 años: se escribía en tablillas de barro blando con una caña cortada." },
        { t: "El invento que cambió el mundo", d: "Hace unos 570 años Gutenberg inventó la imprenta: los libros dejaron de copiarse a mano y el saber llegó a mucha más gente." },
        { t: "Vikingos por delante", d: "Los vikingos llegaron a América unos 500 años antes que Colón y construyeron casas en el norte de Canadá." },
        { t: "La torre que crece", d: "La Torre Eiffel sube unos 15 centímetros en los días más calurosos: el hierro se dilata con el calor y la estructura se estira un pelín." },
        { t: "Contar con cuerdas", d: "Los incas administraban su enorme imperio con quipus: cuerdas con nudos de distintos colores y tamaños que servían para anotar cantidades." },
        { t: "Dinosaurios de largo", d: "Los dinosaurios vivieron sobre la Tierra unos 165 millones de años. Los humanos apenas llevamos unos pocos millones." },
        { t: "La muralla interminable", d: "La Gran Muralla China mide más de 21.000 kilómetros contando sus tramos: es la construcción más larga que han hecho los humanos." },
      ],
    },
    {
      id: "mundo",
      nombre: "Comidas y lugares",
      icono: "🍜",
      color: "#4fa3d1",
      facts: [
        { t: "La bandera en la mesa", d: "La pizza Margarita de Italia lleva tomate, queso y albahaca, los tres colores de la bandera italiana, y se hizo en honor a la reina Margarita." },
        { t: "Cincuenta arepas", d: "En Colombia cada región tiene su receta de arepa: la blanca de Antioquia, la arepa de huevo de la costa. Hay más de 50 maneras de hacerla." },
        { t: "El oro blanco", d: "Hace siglos la sal era tan valiosa que a veces se usaba para pagar como si fueran monedas. Por eso le decían 'oro blanco'." },
        { t: "Nueve mil años de maíz", d: "El maíz se cultiva en América hace unos 9.000 años. Con él nacen las arepas, los tamales y las tortillas: la base de la mesa americana." },
        { t: "El fideo viejo", d: "Los fideos se preparan en Asia desde hace 4.000 años. La idea es la misma en la lasaña y en el ramen: harina molida mezclada con agua." },
        { t: "Del cacao al chocolate", d: "Hace más de 3.500 años los mayas molían cacao para preparar una bebida amarga. El chocolate dulce que hoy comemos apareció cuando se le añadió azúcar." },
        { t: "El pan accidental", d: "El pan nació cuando alguien molió granos de trigo, los mezcló con agua y puso la masa cerca del fuego: probablemente sin querer, pero cambió la comida del mundo." },
        { t: "El grano viajero", d: "El café nació en África y creció fuerte en Arabia. Hoy Colombia lo cultiva entre los mejores del mundo gracias a su altura y su clima." },
      ],
    },
  ];

  /* ---------------------------------------------------------
     2. GALERÍA ILUSTRADA (imágenes ya optimizadas en img/)
     --------------------------------------------------------- */
  const GALERIA = [

  { img: "img/cul-castillo.webp", t: "Los castillos", d: "Los castillos de verdad se construyeron en Europa hace unos 900 años, con murallas gruesas y torres altas para vigilar: su trabajo era proteger a las personas que vivían dentro." },
  { img: "img/cul-montanas.webp", t: "Las montañas", d: "Las montañas se forman cuando las placas gigantes de la corteza terrestre chocan y arrugan el terreno, como un mantel al empujarlo. Los Andes son la cordillera más larga del mundo: más de 7.000 kilómetros." },
  { img: "img/cul-bosque.webp", t: "Los bosques", d: "Un bosque es una ciudad de árboles: limpian el aire, guardan agua, refrescan el terreno y dan casa a miles de animales. Sembrar un árbol es sembrar oxígeno para el futuro." },
  { img: "img/cul-rio.webp", t: "Los ríos y los puentes", d: "Los primeros puentes fueron troncos amarrados. Los de acero de hoy pueden pesar miles de toneladas y aun así sostienen carros y buses sin temblar." },
  { img: "img/cul-animales.webp", t: "Los animales de la sabana", d: "En la sabana africana viven el león y el elefante, el animal terrestre más grande que camina sobre la Tierra. Un elefante puede oler agua a varios kilómetros." },
  { img: "img/cul-exploradores.webp", t: "Los exploradores", d: "Los exploradores usan mapa, brújula y cuaderno para anotar lo que ven. Hoy los científicos exploran el fondo del mar y el espacio con cámaras y robots." },
  { img: "img/mapa.jpg", t: "¿Para qué sirven los mapas?", d: "Un mapa es un dibujo que muestra un lugar grande en un pedazo de papel pequeñito. Los mapas más antiguos tienen más de 3.000 años y se dibujaban en papiro." },
  { img: "img/lectura.jpg", t: "El poder de los libros", d: "Un libro es una máquina de imaginar: puede llevarte a China hace mil años o al corazón de una selva sin moverte de tu asiento. Leer cada día hace crecer el vocabulario como una planta bien regada." },
  { img: "img/matematicas.jpg", t: "Los números por el mundo", d: "Los números que usamos (0, 1, 2, 3…) nacieron en la India, viajaron por Arabia y llegaron a Europa como números árabes. Cambiaron para siempre el comercio y la ciencia." },
  { img: "img/mascota.jpg", t: "Los búhos, sabios de la noche", d: "Los búhos giran la cabeza hasta 270 grados y tienen un oído muy sensible: por eso pueden cazar ratones en la oscuridad sin verlos." },
  { img: "img/g01-vikingo.webp", t: "Los vikingos", d: "Los vikingos llegaron a América unos 500 años antes que Colón. Sus barcos navegan a vela y a remo, y construyeron casitas de madera en el norte de Canadá." },
  { img: "img/g02-cacao.webp", t: "Del cacao al chocolate", d: "Hace más de 3.500 años los mayas molían el cacao para preparar una bebida amarga. El chocolate dulce que comemos hoy apareció cuando a esa bebida se le sumó azúcar." },
  { img: "img/g03-tamal.webp", t: "El maíz, un regalo antiquísimo", d: "El maíz se cultiva en América hace unos 9.000 años. Con él nacen las arepas, los tamales y las tortillas: la base de la mesa americana." },
  { img: "img/g04-colombia.webp", t: "Un país megadiverso", d: "Colombia es un país megadiverso: tiene montañas nevadas, selva amazónica, desiertos de dunas, costas en dos océanos y miles de aves y flores únicas." },
  { img: "img/g05-acordeon.webp", t: "El acordeón viajero", d: "El acordeón llegó desde Alemania a la costa Caribe de Colombia. Allí se mezcló con los tambores y las gaitas, y así nació el vallenato." },
  { img: "img/g06-piano.webp", t: "Un piano de 88 teclas", d: "Un piano tiene 88 teclas: 52 blancas y 36 negras. Con esas 88 teclas se puede tocar cualquier melodía del planeta." },
  { img: "img/g07-tambores.webp", t: "El corazón de los tambores", d: "La caja y la tambora son tambores de la costa Caribe. Con la guacharaca y el acordeón forman el conjunto vallenato: el tambor marca el latido del ritmo." },
  { img: "img/g08-artistas.webp", t: "La primera galería", d: "Los primeros artistas del mundo pintaron en las paredes de cavernas hace más de 40.000 años: dibujaron animales de caza que ya no existen, con tintas hechas de minerales y plantas." },
  { img: "img/g09-desayuno.webp", t: "Cincuenta arepas", d: "En Colombia casi cada región tiene su arepa: blanca en Antioquia, de huevo en la costa, asada con queso en Boyacá. Hay más de 50 maneras de hacerla." },
  { img: "img/g10-pizza.webp", t: "La bandera en la mesa", d: "La pizza Margarita de Italia lleva tomate (rojo), queso (blanco) y albahaca (verde), los colores de la bandera italiana. Se hizo en honor a la reina Margarita." },
  { img: "img/g11-volcan.webp", t: "El volcán más alto", d: "El volcán activo más alto del mundo es el Ojos del Salado, entre Chile y Argentina, con casi 6.900 metros. Sobre sus laderas hay un lago a 6.390 metros de altura." },
  { img: "img/g12-salto.webp", t: "La caída más grande", d: "El Salto Ángel, en Venezuela, es la cascada más alta del mundo: el agua cae 979 metros sin tocar la roca, casi veinte veces la altura de un edificio de 10 pisos." },
  { img: "img/g13-tatacoa.webp", t: "Un desierto para las estrellas", d: "En el Desierto de la Tatacoa, en Colombia, llueve tan poco que la noche queda despejadita: telescopios y familias van allí a contar estrellas y perseguir meteoritos." },
  { img: "img/g14-selva.webp", t: "El pulmón del planeta", d: "La selva amazónica se llama el pulmón del planeta por sus millones de árboles que fabrican oxígeno y guardan un pozo inmenso de agua dulce." },
  { img: "img/g15-sabana.webp", t: "Reina y gigante de la sabana", d: "El león descansa hasta 20 horas al día para guardar energía, y el elefante africano puede pesar 6 toneladas y dormir de pie apoyándose en un árbol." },
  { img: "img/g16-abejas.webp", t: "Bailando por comida", d: "Las abejas bailan y dibujan formas en el aire para avisar a sus hermanas dónde hay flores llenas de néctar. Un panal puede guardar 50.000 abejas." },
  { img: "img/g17-egipto.webp", t: "Las pirámides pagadas", d: "Las pirámides de Egipto tardaron una veintena de años en construirse. Sus obreros eran trabajadores pagados con comida y cerveza, no esclavos como se creía antes." },
  { img: "img/g18-escritura.webp", t: "La primera escritura", d: "La escritura nació en Mesopotamia, hoy Irak, hace unos 5.000 años: se escribía en tablillas de barro blando con una caña cortada en punta." },
  { img: "img/g19-imprenta.webp", t: "La imprenta que cambió el mundo", d: "Hace unos 570 años Gutenberg inventó la imprenta de tipos móviles: los libros dejaron de copiarse a mano y el saber llegó a millones de personas." },
  { img: "img/g20-muralla.webp", t: "La muralla interminable", d: "La Gran Muralla China suma más de 21.000 kilómetros contando sus tramos: es la construcción más larga hecha por humanos, y los obreros tuvieron que subir piedras hasta lo más alto." },
  { img: "img/g21-eiffel.webp", t: "La torre que crece", d: "La Torre Eiffel sube unos 15 centímetros en los días más calurosos: el hierro se dilata con el calor y su estructura se estira un pelín." },
  { img: "img/g22-pulpo.webp", t: "Tres corazones", d: "El pulpo tiene tres corazones y su sangre es azul, porque usa cobre para transportar el oxígeno en vez de hierro. ¡Y puede cambiar de color en un segundo!" },
  { img: "img/g23-colibri.webp", t: "El pájaro acróbata", d: "El colibrí es el único pájaro que vuela hacia atrás y bate sus alas unas 80 veces por segundo. Su corazón late hasta 1.200 veces por minuto." },
  { img: "img/g24-jirafa.webp", t: "Siete vértebras iguales", d: "La jirafa tiene el mismo número de vértebras en el cuello que tú: siete. Las suyas son gigantes, de más de 25 centímetros cada una." },
  { img: "img/g25-camaleon.webp", t: "La lengua más larga", d: "La lengua del camaleón mide lo mismo que su cuerpo y sale disparada en menos de un parpadeo para atrapar insectos." },
  { img: "img/g26-perezoso.webp", t: "Descanso semanal", d: "Los perezosos bajan del árbol solo una vez a la semana. El resto del tiempo comen hojas, duermen y se dejan balancear con la calma de las nubes." },
  { img: "img/g27-delfin.webp", t: "Durmiendo a medias", d: "Los delfines duermen con la mitad del cerebro despierta y el ojo de ese lado abierto, para seguir respirando y estar alerta." },
  { img: "img/g28-espacio.webp", t: "Un millón de Tierras", d: "Dentro del Sol cabría un millón de planetas como el nuestro. ¿Y su luz? Tarda 8 minutos en alcanzar nuestra mirada." },
  { img: "img/g29-astronauta.webp", t: "Astronautas estirados", d: "En la estación espacial los astronautas crecen hasta 5 centímetros, porque sin la fuerza de la gravedad la columna se estira. Al volver, vuelven a su tamaño." },
  { img: "img/g30-cohete.webp", t: "La escala al espacio", d: "Para salir volando de la Tierra, un cohete debe pasar de los 40.000 kilómetros por hora: más rápido que ningún tren, ningún avión y ningún rayo." },
  { img: "img/g31-estacion.webp", t: "La casa de la órbita", d: "La Estación Espacial Internacional gira a 400 kilómetros de altura. De noche se puede ver con la mirada: una lucecita brillante que anda veloz en el cielo." },
  { img: "img/g32-dinosaurios.webp", t: "Dinosaurios de largo", d: "Los dinosaurios vivieron sobre la Tierra unos 165 millones de años. Los humanos, en cambio, apenas llevamos unos pocos millones." },
  { img: "img/g33-ballena.webp", t: "El corazón gigante", d: "El corazón de la ballena azul pesa unos 180 kilos, casi como un hipopótamo completo, y su latido se siente a kilómetros de distancia." },
];

  /* ---------------------------------------------------------
     3. RETOS CULTURALES (quiz con explicación)
     Sin emojis en el texto de la pregunta ni en las opciones.
     --------------------------------------------------------- */
  const RETOS = [
    { p: "¿En qué país es famoso el Museo del Oro?", opciones: ["Colombia", "Japón", "México", "Francia"], correcta: 0, dato: "En Bogotá está el Museo del Oro, con más de 30.000 piezas de los pueblos indígenas." },
    { p: "¿Cuántos corazones tiene un pulpo?", opciones: ["Uno", "Dos", "Tres", "Ninguno"], correcta: 2, dato: "El pulpo tiene tres corazones y su sangre es azul." },
    { p: "¿Cuál es el río que más agua lleva del mundo?", opciones: ["El Nilo", "El Amazonas", "El Magdalena", "El Misisipi"], correcta: 1, dato: "El Amazonas lleva más agua que los siete ríos siguientes juntos." },
    { p: "¿Qué planeta es tan liviano que flotaría en el agua?", opciones: ["Marte", "Venus", "Saturno", "Mercurio"], correcta: 2, dato: "Saturno es menos denso que el agua: por eso flotaría." },
    { p: "¿Cuántas teclas tiene un piano?", opciones: ["52", "88", "104", "60"], correcta: 1, dato: "Un piano tiene 88 teclas: 52 blancas y 36 negras." },
    { p: "¿Qué hueso del cuerpo es el más pequeño?", opciones: ["El fémur", "El del codo", "El estribo del oído", "La rótula"], correcta: 2, dato: "El estribo del oído mide lo mismo que un grano de arroz." },
    { p: "¿Cómo dicen las abejas dónde hay flores?", opciones: ["Con radio", "Con gritos", "Bailando", "Con colores"], correcta: 2, dato: "Las abejas bailan para indicar la dirección y la distancia de las flores." },
    { p: "¿Qué animal vuela hacia atrás?", opciones: ["El pingüino", "El colibrí", "El avestruz", "El murciélago"], correcta: 1, dato: "El colibrí bate sus alas unas 80 veces por segundo y sabe volar de reversa." },
    { p: "¿Quién se inspiró en un perro para crear el velcro?", opciones: ["Un carpintero", "Un astronauta", "Un ingeniero suizo", "Un barbero"], correcta: 2, dato: "El ingeniero George de Mestral miró al microscopio las semillas pegadas al pelo de su perro y creó el velcro." },
    { p: "¿Qué animal tiene 7 vértebras en el cuello?", opciones: ["Solo la jirafa", "El humano y la jirafa", "Solo el humano", "El elefante"], correcta: 1, dato: "Humano y jirafa tienen 7 vértebras en el cuello; las de ella son gigantes." },
    { p: "¿Cuánto tarda la luz del Sol en llegar a la Tierra?", opciones: ["Un segundo", "8 minutos", "Una hora", "Un día"], correcta: 1, dato: "La luz solar tarda unos 8 minutos: vemos el Sol de hace 8 minutos." },
    { p: "¿Cuál es la cascada más alta del mundo?", opciones: ["El Salto del Tequendama", "El Salto Ángel", "Las cataratas del Niágara", "La caída del río Cauca"], correcta: 1, dato: "El Salto Ángel, en Venezuela, tiene 979 metros de caída libre." },
    { p: "¿Qué les pasa a los astronautas en el espacio?", opciones: ["Se encogen", "Crecen hasta 5 cm", "No duermen nunca", "Pierden los dientes"], correcta: 1, dato: "Sin gravedad la columna se estira: crecen unos 5 cm y al volver vuelven a lo normal." },
    { p: "¿Estilo famoso del pintor colombiano Botero?", opciones: ["Pinturas tecnológicas", "Figuras redonditas", "Cuadros en blanco y negro", "Retratos minúsculos"], correcta: 1, dato: "Botero pintó personas y animales redondos y robustos: se llama Boterismo." },
    { p: "¿En qué país nació la pizza?", opciones: ["Italia", "Colombia", "China", "México"], correcta: 0, dato: "La pizza nació en Nápoles, en Italia, como comida popular de la calle." },
    { p: "¿Qué colores de la bandera italiana recuerda la pizza Margarita?", opciones: ["Rojo, blanco y verde", "Amarillo y azul", "Blanco y negro", "Morado y naranja"], correcta: 0, dato: "Tomate (rojo), queso (blanco) y albahaca (verde)." },
    { p: "¿Qué selva se llama el pulmón del planeta?", opciones: ["Selva del Congo", "Selva amazónica", "El bosque negro", "Selva del Darién"], correcta: 1, dato: "La selva amazónica fabrica buena parte del oxígeno que respira el mundo." },
    { p: "¿Qué instrumento venido de Alemania dio origen al vallenato?", opciones: ["El violín", "El acordeón", "El piano", "La flauta"], correcta: 1, dato: "El acordeón viajó de Alemania a la costa Caribe y con él nació el vallenato." },
    { p: "¿Con qué cuerdas con nudos contaban los incas?", opciones: ["Los quipus", "Las maracas", "Las cabullas de pesca", "Las banderas"], correcta: 0, dato: "Los quipus eran cuerdas con nudos de colores para registrar cantidades." },
    { p: "¿Qué parte de la Tierra está cubierta de agua?", opciones: ["Un tercio", "La mitad", "71%", "90%"], correcta: 2, dato: "El agua cubre el 71% de la superficie, pero casi toda es salada." },
    { p: "¿Cuántos años vivieron los dinosaurios sobre la Tierra?", opciones: ["165 millones de años", "Solo un millón", "10.000 años", "Un año", ], correcta: 0, dato: "Los dinosaurios duraron unos 165 millones de años; nosotros apenas unos pocos millones." },
    { p: "¿Cuántos huesos tiene el cuerpo de un adulto?", opciones: ["206", "100", "300", "50"], correcta: 0, dato: "206: los bebés tienen unos 300, pero muchos se unen al crecer." },
    { p: "¿En qué desierto colombiano se miran bien las estrellas?", opciones: ["En la Tatacoa", "En el Sahara", "En Atacama", "En el Kalahari"], correcta: 0, dato: "La Tatacoa, en el Huila, tiene cielo despejado casi todo el año." },
    { p: "¿Qué gallina pone huevos de color azul?", opciones: ["La Araucana", "La gallina roja", "El pavo", "La codorniz"], correcta: 0, dato: "La gallina Araucana nació en Colombia y sus huevos son azules." },
    { p: "¿En qué país está la Sierra Nevada de Santa Marta?", opciones: ["Colombia", "Perú", "Argentina", "Chile"], correcta: 0, dato: "Está en Colombia: nieve permanente a pocas horas del mar Caribe." },
    { p: "¿Cuál de estos animales duerme con medio cerebro despierto?", opciones: ["El delfín", "El león", "La tortuga", "El tigre"], correcta: 0, dato: "El delfín duerme con media mente alerta para seguir respirando y vigilar." },
  ];

  /* ---------------------------------------------------------
     4. UTILIDADES
     --------------------------------------------------------- */
  function mezclar(lista) {
    const c = lista.slice();
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = c[i]; c[i] = c[j]; c[j] = tmp;
    }
    return c;
  }

  const retosReales = RETOS.filter(function (r) { return r.opciones.length === 4; });

  function dato(cat) {
    if (cat) {
      const c = CATS.find(function (x) { return x.id === cat; });
      if (c) return c.facts[Math.floor(Math.random() * c.facts.length)];
    }
    const catAzar = CATS[Math.floor(Math.random() * CATS.length)];
    return catAzar.facts[Math.floor(Math.random() * catAzar.facts.length)];
  }

  function reto(n) {
    return mezclar(retosReales).slice(0, n || 6).map(function (r) {
      /* Mezcla también el orden de opciones guardando cuál es la correcta */
      const marcadas = r.opciones.map(function (texto, i) {
        return { texto: texto, ok: i === r.correcta };
      });
      const mezcladas = mezclar(marcadas);
      let nueva = 0;
      mezcladas.forEach(function (o, i) { if (o.ok) nueva = i; });
      return {
        p: r.p,
        opciones: mezcladas.map(function (o) { return o.texto; }),
        correcta: nueva,
        dato: r.dato,
      };
    });
  }

  window.CULTURA = {
    categorias: CATS,
    galeria: GALERIA,
    dato: dato,
    reto: reto,
    totalDatos: CATS.reduce(function (n, c) { return n + c.facts.length; }, 0),
    totalRetos: retosReales.length,
  };
})();
