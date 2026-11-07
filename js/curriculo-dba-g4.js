/* Contenido DBA g4 — generado por build-dba.js desde Temp/opencode/dba-src.
   Datos compactos que js/curriculo.js convierte en temas (builder anexarTemasDBA). */

/* ====== g4 / lenguaje ====== */
/* DBA 4º — lenguaje */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.lenguaje = [
{
  n: "Deduzco entre líneas",
  o: "Deduzco ideas que el texto no dice con palabras y las apoyo en pistas concretas.",
  d: "DBA 4º lenguaje: lectura inferencial: voy más allá de lo escrito usando evidencias del texto.",
  t: [
    ["Pistas, no adivinanzas", "Inferir es deducir algo que no está escrito, pero se sabe por las pistas del texto.", "🎯"],
    ["Evidencia concreta", "Siempre puedo señalar la frase que me dio la pista; así mi idea se sostiene.", "🧠"],
    ["La que encaja", "Varias ideas pueden parecer buenas, pero gana la que explica todas las pistas juntas.", "✅"]
  ],
  q: [
    ["Andrés llegó tarde a la escuela con el uniforme desordenado. ¿Qué se deduce?", ["Andrés tuvo prisa", "Andrés desayunó arepa", "Andrés juega al fútbol", "Andrés cambió de colegio"], 0,
      "Llegar tarde y con el uniforme desordenado son pistas de que corrió o anduvo con apuro: eso se deduce aunque no esté escrito.", "Mira las dos pistas: tarde y desordenado."],
    ["En la plaza la gente caminaba con paraguas y los puestos tenían toldos. ¿Qué clima había?", ["Hacía mucho calor", "Estaba lloviendo", "Era de noche", "Había feria de libros"], 1,
      "Los paraguas y los toldos abiertos son señales de lluvia: casi nadie los usa con sol fuerte.", "¿Para qué sirve un paraguas?"],
    ["Mateo cerró los ojos, se tapó con la manta y dejó el cuaderno abierto. ¿Qué pasaba?", ["Se asustó", "Se rió con el programa", "Se quedó dormido", "Se enojó"], 2,
      "Cerrar los ojos y taparse son señales de sueño: el cuaderno quedó olvidado porque ya descansaba.", "Piensa en las señales del cuerpo."],
    ["Camilo limpió el espejo, sacudió el sofá y puso flores en el jarrón. ¿Qué preparaba?", ["La cena", "Un examen", "Su salida", "La visita de alguien"], 3,
      "Limpiar y poner flores son cosas que hacemos cuando llega visita: las pistas apuntan a eso.", "¿Por qué adornamos la casa?"],
    ["A la mañana siguiente el parque estaba lleno de papeles y los bancos desordenados. ¿Qué pasó la noche antes?", ["Llovía en el parque", "Nadie cuidaba el parque", "Hubo mucha gente o una fiesta", "Iban a pintar los bancos"], 2,
      "Papeles y bancos movidos indican que hubo mucha gente reunida; los rastros del desorden son la pista.", "Busca los rastros que dejó la gente."],
    ["Don Emilio sacó la olla grande, los platos de la abuela y la mesa larga. ¿Qué iba a pasar?", ["Se mudaba", "Había una reunión familiar", "Reparaba la mesa", "Iba a viajar"], 1,
      "La olla grande y muchos platos preparan una comida para varias personas: se avecina una reunión familiar.", "¿Cuánta comida y cuántos platos?"],
    ["Aunque hizo sol, la profesora llevaba paraguas y abrigó a los niños al salir del colegio. ¿Qué se deduce?", ["Iban a nadar", "Era un día de campo", "Empezaba el recreo", "Podía llover o bajar la temperatura"], 3,
      "Abrigar y llevar paraguas son decisiones frente a un cambio de clima posible: por eso el sol no descarta la lluvia.", "La maestra previó un cambio."],
    ["En la tienda de don Jorge el cartel decía «Hoy todo a la mitad de precio». ¿Qué ocurría?", ["Había una promoción", "Todo costaba el doble", "La tienda cerraba", "No vendían frutas"], 0,
      "Pagar menos de lo habitual es una promoción: el cartel es la pista directa.", "Compara «mitad de precio» con el precio normal."],
    ["Samuel miró la ventana mojada, tomó el impermeable y salió con la mochila cubierta. ¿Qué inferimos?", ["Iba a nadar", "Llovía afuera", "Hacía mucho calor", "Se olvidó la tarea"], 1,
      "La ventana mojada y el impermeable dicen que afuera está lloviendo o va a llover.", "Todo el material protege del agua."],
    ["La maestra dijo: «Vamos a leer el capítulo 5, pero antes repasemos el 4». ¿Qué harán primero?", ["Leer el capítulo 5", "Ir al recreo", "Repasar primero el capítulo 4", "Escribir un resumen"], 2,
      "La palabra «antes» marca el orden: primero se repasa el capítulo 4 y después se lee el 5.", "Busca la palabra que ordena."],
    ["Al abrir la nevera, Sebastián vio que solo quedaban un tomate y un huevo. ¿Qué se deduce?", ["Solo quedaban pocos alimentos en la casa", "La familia fue de compras", "La nevera estaba rota", "Iban a cenar pavo"], 0,
      "Con tan pocos alimentos dentro, lo que se deduce es que en casa queda muy poco para comer.", "Cuenta lo que había adentro."],
    ["El kiosco de la esquina tenía la luz apagada y la cortina bajada a las tres de la tarde. ¿Qué pasó?", ["Estaban ampliando el kiosco", "Había un cumpleaños", "Vendían helados", "El kiosco estaba cerrado"], 3,
      "Sin luz y con la cortina bajada, el negocio no está atendiendo: se deduce que estaba cerrado a esa hora.", "¿Se ve a alguien atendiendo?"]
  ],
  cl: {
    c: [["pistas", "PISTAS QUE SE VEN", "🔎"], ["ded", "LO QUE SE DEDUCE", "💡"]],
    i: [["Llegar tarde", "pistas"], ["Mochila mojada", "pistas"], ["Puesto vacío", "pistas"], ["Llovía", "ded"], ["Hubo prisa", "ded"], ["Llegaba visita", "ded"]]
  },
  em: [
    ["Llegó tarde", "tuvo prisa"],
    ["Paraguas abiertos", "estaba lloviendo"],
    ["Puesto vacío", "quedaba poca fruta"],
    ["Cortina bajada", "el negocio estaba cerrado"]
  ],
  or: ["Leo el texto completo sin apurarme", "Busco las pistas concretas", "Pienso qué idea encaja con todas ellas", "Compruebo que mi idea explica las pistas"],
  e: ["Escribe una escena de tu casa y, debajo, lo que se deduce de ella.", "Mamá puso la mesa con seis platos. Vino la familia a almorzar.", 5]
},
{
  n: "Adivino el significado",
  o: "Deduzco el significado de palabras nuevas usando las pistas del contexto.",
  d: "DBA 4º lenguaje: lectura inferencial: uso el contexto para comprender palabras que aún no conozco.",
  t: [
    ["El contexto ayuda", "Una palabra difícil se aclara cuando leemos la frase completa que la contiene.", "🔎"],
    ["Pistas alrededor", "Las palabras de alrededor suelen dar el significado sin necesidad del diccionario.", "🧠"],
    ["Vuelvo a comprobar", "Después de adivinar, releo para asegurarme de que el sentido encaja bien.", "✅"]
  ],
  q: [
    ["En la feria, los artesanos vendían tejidos de lana muy suaves. ¿Qué es un tejido?", ["Una tela hecha con hilos", "Un calzado de cuero", "Una olla de barro", "Una fruta madura"], 0,
      "El texto dice que los tejidos eran de lana y suaves: de la lana se hacen hilos y de los hilos, las telas.", "Piensa en qué se hace con la lana."],
    ["Después de la lluvia, en el patio quedó un charco de agua. ¿Qué es un charco?", ["Un montón de tierra", "Una pequeña acumulación de agua", "Un árbol del patio", "Un juego de niños"], 1,
      "Se formó después de la lluvia y adentro tenía agua: es una pozada pequeña que queda en el suelo.", "Apareció con la lluvia."],
    ["Mi abuelo dice: la siembra empieza en enero y la cosecha en octubre. ¿Qué es la cosecha?", ["La semilla que se planta", "La máquina que ara", "El momento de recoger lo sembrado", "El día de la siembra"], 2,
      "Viene meses después de sembrar, cuando lo plantado ya creció: es recoger lo que dio la tierra.", "Sucede mucho después de sembrar."],
    ["En la costa, la brisa marina refrescaba la tarde. ¿Qué es la brisa?", ["Una ola grande", "Una nube oscura", "Un ruido del mar", "Un viento suave"], 3,
      "La brisa refresca sin ser fuerte: es un aire ligero que sopla con suavidad.", "Refresca sin hacer daño."],
    ["Andrés amontonó las hojas secas en una esquina del patio. ¿Qué es amontonar?", ["Separar las hojas una por una", "Juntar las hojas en un montón", "Tirar las hojas al río", "Regar las hojas secas"], 1,
      "Las dejó juntas formando una montaña de hojas: eso es amontonar.", "De las hojas salió una montaña."],
    ["La resbaladiza banqueta obligó a caminar con cuidado. ¿Qué es resbaladizo?", ["Liso o mojado que hace resbalar", "Sucio y lleno de polvo", "Alto y difícil de subir", "Pequeño y difícil de ver"], 0,
      "Por eso la persona tuvo cuidado al pisar: resbaladizo es lo que nos hace caer.", "La pista es el cuidado al caminar."],
    ["Subimos la cuesta arriba hasta llegar a la iglesia del barrio. ¿Qué es cuesta arriba?", ["Caminar por el plano", "Bajar una inclinación", "Subir una inclinación", "Correr en círculos"], 2,
      "La iglesia está en lo alto y decimos «subimos»: es trepar una pendiente.", "Subimos, no bajamos."],
    ["El vaso cayó y quedó hecho pedazos en el piso. ¿Qué significa hecho pedazos?", ["Muy limpio y brillante", "Lleno de agua", "Pintado de blanco", "Roto en muchos trozos"], 3,
      "Cayó al piso y se rompió: hecho pedazos quiere decir totalmente roto.", "Cayó desde la mesa."],
    ["La vecina guardó los tiliches viejos en un costal. ¿Qué son tiliches?", ["Juguetes muy nuevos", "Frutas de la región", "Trapos o cosas viejas sin valor", "Herramientas de trabajo"], 2,
      "Eran viejos y se guardaron en un costal: tiliches son cosas gastadas que ya casi no sirven.", "Viejos y guardados: ya no los usaban."],
    ["El niño miraba a los ancianos jugar tejo en la plaza. ¿Quién es anciano?", ["Una persona de poca edad", "Una persona de mucha edad", "Un deportista famoso", "Un vendedor de la plaza"], 1,
      "Jugaban en la plaza con calma y son mayores: anciano es quien ya tiene muchos años.", "Piensa en la edad."],
    ["El caballo piafó impaciente mientras esperaba la salida. ¿Qué es piafar?", ["Relinchar y moverse sin quietud", "Dormir de pie bajo el árbol", "Comer pasto muy despacio", "Galopar de lejos"], 0,
      "Estaba impaciente: piafar es el sonido y el movimiento del caballo que no se queda quieto.", "Impaciente quiere decir sin quietud."],
    ["Al mediodía la sombra era corta y el sol estaba en lo alto. ¿Qué es mediodía?", ["El amanecer", "La tarde temprana", "La noche cerrada", "El momento en que el sol queda en lo alto"], 3,
      "El sol en lo alto y las sombras cortas indican el centro del día: mediodía, las doce del día.", "Las sombras cortas dan la pista."]
  ],
  cl: {
    c: [["ctx", "PISTAS DEL CONTEXTO", "🔎"], ["sig", "SIGNIFICADO QUE DESCUBRÍ", "📖"]],
    i: [["Después de la lluvia", "ctx"], ["De lana y muy suave", "ctx"], ["Viejo y guardado", "ctx"], ["Acumulación de agua", "sig"], ["Tela hecha con hilos", "sig"], ["Recoger lo sembrado", "sig"]]
  },
  em: [
    ["charco", "pozada de agua"],
    ["cosecha", "recolección de lo sembrado"],
    ["brisa", "viento suave"],
    ["hecho pedazos", "totalmente roto"]
  ],
  or: ["Leo la frase completa", "Busco las palabras de alrededor", "Adivino el significado", "Releo para comprobar que encaja"]
},
{
  n: "Metáforas que transforman",
  o: "Reconozco la metáfora y explico qué compara y qué efecto produce.",
  d: "DBA 4º lenguaje: analizo figuras literarias básicas como la metáfora para entender cómo se embellece un texto.",
  t: [
    ["Una igualdad imaginada", "La metáfora dice que algo ES otra cosa: «Tu hermano es un toro».", "✨"],
    ["Sin comparar con «como»", "A diferencia de la comparación, la metáfora no usa palabras de enlace.", "🧠"],
    ["Una imagen que ayuda", "Nos deja ver una cualidad con claridad: fuerza, dulzura, frialdad.", "✨"]
  ],
  q: [
    ["En el cuaderno se lee: «Tu hermano es un toro». ¿Qué quiere decir?", ["Que come mucho pasto", "Que es muy fuerte", "Que tiene cuernos", "Que duerme en el campo"], 1,
      "El autor iguala a tu hermano con un toro para destacar su fuerza: esa es la cualidad que busca mostrar.", "¿Qué cualidad tiene un toro?"],
    ["¿Cuál de estas oraciones es una metáfora?", ["Corrió como el viento.", "El perro ladra fuerte.", "Mi mochila es roja.", "La luna era una moneda de plata."], 3,
      "«La luna era una moneda de plata» iguala la luna con una moneda sin usar «como»: eso es metáfora.", "Busca la que no usa «como»."],
    ["«Tiene un corazón de hielo». ¿Cómo es esa persona?", ["Fría en el trato, sin cariño", "Muy apresurada", "Alta y delgada", "Amable con todos"], 0,
      "El hielo es frío, así que la metáfora cuenta que esa persona es fría en el trato.", "El hielo da frío."],
    ["En «el viento susurraba entre los árboles», ¿qué significa susurraba?", ["Que gritaba fuerte", "Que no hacía ruido", "Que sonaba suave, como cuando hablamos bajito", "Que soplaba muy frío"], 2,
      "Los árboles no hablan: el autor compara el sonido del viento con un murmullo bajito.", "Susurrar es hablar muy bajo."],
    ["«Los soldados eran hormigas en la montaña». ¿Qué quiere destacar?", ["Que caminaban a cuatro patas", "Que llevaban mochilas verdes", "Que comían azúcar", "Que eran pequeños y estaban muchos juntos"], 3,
      "Las hormigas son pequeñas y van en grupos: así el autor pinta la escena de la montaña.", "Piensa en cómo se ven las hormigas."],
    ["Una metáfora compara dos cosas...", ["usando solo números", "sin usar las palabras «como» ni «cual»", "con una pregunta", "con un punto y coma"], 1,
      "Esa es la clave: la metáfora hace la comparación directa, como si fuera una igualdad.", "Recuerda: no hay palabras de enlace."],
    ["«Su cabello era oro». ¿Qué se compara?", ["El cabello con el fuego", "El oro con un peine", "El brillo del cabello con el oro", "La cabeza con una cesta"], 2,
      "Se destacó el brillo del cabello igualándolo al brillo del oro.", "Piensa en el brillo de ambas cosas."],
    ["Al decir «la casa era una jaula», el autor quiere mostrar que...", ["se sentía encerrado", "tenía muchos pájaros", "era muy grande", "estaba pintada de verde"], 0,
      "Una jaula encierra: al comparar la casa con una jaula, se transmite la sensación de no poder salir.", "¿Qué hace una jaula?"],
    ["¿Cuál de estas NO es metáfora porque se entiende tal cual?", ["Eres mi sol.", "El aula era una colmena.", "Su risa era miel.", "El cuaderno está sobre la mesa."], 3,
      "«El cuaderno está sobre la mesa» describe un hecho real y cotidiano: no compara nada.", "Busca la oración normal."],
    ["«El río cantaba». Sabemos que es metáfora porque...", ["los ríos no cantan: es el sonido del agua", "los ríos sí cantan en primavera", "el río tiene boca", "cantan los peces"], 0,
      "Los ríos no tienen voz: el autor usa «cantar» para describir el sonido del agua.", "Los ríos no tienen boca."],
    ["¿Qué efecto tiene una metáfora en un texto?", ["Lo vuelve más corto", "Quita las palabras difíciles", "Lo convierte en una lista", "Hace el texto más claro e imaginativo"], 3,
      "La metáfora crea una imagen que se recuerda fácil y da más vida a lo que se describe.", "Da color y vida al texto."],
    ["«Mi abuelo es roca». ¿Qué se dice de tu abuelo?", ["Que es muy veloz", "Que le gusta el mar", "Que es firme y seguro", "Que es blando"], 2,
      "La roca es firme y resistente, así que así se describe a tu abuelo.", "Una roca no se mueve."]
  ],
  cl: {
    c: [["meta", "METÁFORAS", "✨"], ["lit", "LO QUE SE ENTIENDE LITERAL", "🧾"]],
    i: [["Tu hermano es un toro", "meta"], ["Tu risa era miel", "meta"], ["La luna era una moneda", "meta"], ["El cuaderno está sobre la mesa", "lit"], ["Hay tres perros en la casa", "lit"], ["El agua está tibia", "lit"]]
  },
  em: [
    ["corazón de hielo", "persona fría en el trato"],
    ["hermano es un toro", "es muy fuerte"],
    ["risa era miel", "risa dulce"]
  ],
  or: ["Leo la frase completa", "Pregunto qué dos cosas se igualan", "Pienso la cualidad que comparten", "Explico la metáfora con mis palabras"],
  e: ["Escribe una metáfora sobre algo de tu salón usando «es».", "Ejemplo: La maestra es faro en la clase.", 5]
},
{
  n: "Comparaciones con «como»",
  o: "Identifico comparaciones y las distingo de la metáfora por su palabra de enlace.",
  d: "DBA 4º lenguaje: analizo figuras literarias básicas: la comparación une dos ideas con «como» o «cual».",
  t: [
    ["Dos cosas, un «como»", "La comparación une dos ideas con «como» o «cual»: «Rápido como el relámpago».", "⚖️"],
    ["Se parecen en algo", "No son iguales: solo comparten una cualidad, como el color o la velocidad.", "🧠"],
    ["Distinguir con calma", "Si la frase usa «como», es comparación; si no, puede ser metáfora.", "✅"]
  ],
  q: [
    ["En «Rápido como el relámpago», ¿qué se compara?", ["El ruido con un trueno", "La luz con una vela", "La velocidad con un relámpago", "El cielo con el mar"], 2,
      "Se usa «como» para unir la velocidad de alguien con la velocidad de un relámpago.", "Busca la palabra «como»."],
    ["Una comparación se reconoce porque usa...", ["«como» o «cual»", "comas", "números ordinales", "una rima"], 0,
      "Esa es su marca: las palabras «como» y «cual» señalan que se están comparando dos cosas.", "Es la palabra que une."],
    ["¿Cuál de estas oraciones es una comparación?", ["La casa es azul.", "El niño corre veloz.", "Hay tres perros.", "Su voz suena como el trueno."], 3,
      "Solo la última une dos ideas con «como»: la voz y el trueno.", "Solo una usa «como»."],
    ["«Blanca como la nieve» describe...", ["una estación fría", "el color de algo usando otra cosa blanca", "un juego en la nieve", "una comida caliente"], 1,
      "Se toma un color conocido, el de la nieve, para pintar el blanco de algo.", "Nieve = color de referencia."],
    ["¿En qué se diferencia la metáfora de la comparación?", ["La metáfora no usa «como»", "La metáfora es más corta", "La comparación no tiene sentido", "Las dos son idénticas"], 0,
      "La metáfora hace la igualdad directa; la comparación necesita las palabras de enlace como «como».", "Piensa en la palabra puente."],
    ["En «Tus ojos brillaban como dos estrellas», ¿qué se destaca?", ["Que tenía ojos muy grandes", "Que miraba al cielo", "Que era de noche", "El brillo de los ojos"], 3,
      "Se comparan los ojos con las estrellas justamente para resaltar el brillo.", "Las estrellas brillan."],
    ["«Fuerte como un roble» es una comparación porque...", ["habla de árboles", "usa «como» para unir dos ideas", "tiene dos adjetivos", "termina en punto"], 1,
      "La palabra «como» es el puente que une «fuerte» con «roble»: por eso es comparación.", "¿Cuál es la palabra puente?"],
    ["¿Cuál de estas NO es comparación?", ["Ágil como un gato.", "Fría como el hielo.", "La mesa es de madera.", "Ligero como una pluma."], 2,
      "«La mesa es de madera» solo dice de qué está hecha: no une dos ideas con «como».", "Busca la que no usa «como»."],
    ["En «lloró como lluvia de abril», ¿qué se compara?", ["Las nubes con los ojos", "El agua con la ropa", "Abril con el invierno", "El llanto con la lluvia"], 3,
      "Se usa «como» para unir el llanto con la lluvia: ambas caen en gotas.", "¿Qué cae en gotas?"],
    ["En «la luna salió como una moneda plateada», la luna se compara con...", ["un sol", "una moneda", "un espejo", "un plato"], 1,
      "La forma redonda y plateada de la luna se parece a una moneda: esa es la comparación.", "Busca algo redondo y plateado."],
    ["Una buena comparación ayuda a...", ["contar números", "ordenar el texto", "imaginar mejor lo que se describe", "hacer preguntas"], 2,
      "La comparación pinta una imagen mental que hace más fácil ver lo que el autor describe.", "Da una imagen para recordar."],
    ["«Dulce como la miel» describe que algo...", ["sabe o resulta dulce", "es un insecto", "viene de la tienda", "está frío"], 0,
      "La miel es dulce, así que «dulce como la miel» habla del sabor o de un gesto amable.", "¿De qué sabor es la miel?"]
  ],
  cl: {
    c: [["sim", "COMPARACIONES", "⚖️"], ["sin", "SIN COMPARACIÓN", "📌"]],
    i: [["Rápido como el relámpago", "sim"], ["Blanca como la nieve", "sim"], ["La mesa es de madera", "sin"], ["El niño corre veloz", "sin"], ["Hay tres perros en casa", "sin"], ["La luna era una moneda", "sim"]]
  },
  em: [
    ["rápido como el relámpago", "velocísimo"],
    ["blanca como la nieve", "muy blanca"],
    ["ojos como dos estrellas", "ojos que brillan"]
  ],
  or: ["Leo la oración", "Busco las palabras «como» o «cual»", "Identifico las dos cosas comparadas", "Explico qué cualidad comparten"],
  e: ["Escribe una comparación de tu escuela o barrio usando «como».", "Ejemplo: El patio era grande como una cancha.", 5]
},
{
  n: "Adjetivos que pintan",
  o: "Elijo adjetivos precisos y de acuerdo en género y número para describir con claridad.",
  d: "DBA 4º lenguaje: escribo textos descriptivos con palabras que pintan con precisión a personas, animales y cosas.",
  t: [
    ["Pintar con palabras", "Los adjetivos dan color, tamaño, olor y textura a lo que describimos.", "🎨"],
    ["Precisos, no vagos", "«Dulce y cremoso» dice más que «bonito»: los detalles concretos forman la imagen.", "🎯"],
    ["Acuerdo correcto", "El adjetivo concuerda en género y número: la niña alta, los niños altos.", "✅"]
  ],
  q: [
    ["Para describir el chocolate arequipe, ¿qué palabra es más precisa?", ["bonito", "cosa", "dulce y cremoso", "grande"], 2,
      "«Dulce y cremoso» pinta el sabor y la textura: son detalles que el lector puede imaginar.", "Los adjetivos de sabor ayudan."],
    ["Elijo el adjetivo más exacto para el aguacate maduro:", ["duro", "verde y áspero", "blando y de buen sabor", "pequeño"], 2,
      "El aguacate maduro está blandito y rico: por eso esos adjetivos lo describen bien.", "El aguacate maduro cede al apretón."],
    ["¿Cuál frase está bien dicha?", ["La niña alta salió al patio.", "La niño alto salió al patio.", "La niñas altos salió al patio.", "El niña alto salió al patio."], 0,
      "El artículo «la» y el adjetivo «alta» concuerdan con «niña» en género y número.", "Revisa artículo y adjetivo juntos."],
    ["El sonido del río era...", ["visible", "suave y constante", "redondo", "amarillo"], 1,
      "El oído percibe sonidos: «suave y constante» describe cómo se oía el río.", "Es un sonido, no un color."],
    ["Para un retrato, ¿qué aporte conviene?", ["cosas bonitas", "muy bueno", "ojos claros y sonrisa ancha", "esto"], 2,
      "Los detalles concretos de la apariencia ayudan al lector a imaginar a la persona.", "Describe lo que se ve."],
    ["La manta estaba...", ["cantando", "corriendo", "feliz", "azul y muy suave"], 3,
      "«Azul y muy suave» son cualidades de la manta: color y textura, las que se perciben al tocarla.", "Piensa en el color y el tacto."],
    ["En la selva el aire era...", ["húmedo y cálido", "cuadrado", "rápido", "metálico"], 0,
      "El calor y la humedad son sensaciones del cuerpo: por eso describen bien el aire de la selva.", "Se siente en la piel."],
    ["«El perro era mullido». ¿Qué nos dice?", ["Que el perro era agresivo", "Que su pelaje era suave y esponjoso", "Que el perro era pequeño", "Que el perro corría mucho"], 1,
      "«Mullido» habla del tacto: el pelaje se siente suave y esponjoso al tocarlo.", "Es una palabra de tacto."],
    ["Un retrato que solo dice «bueno» y «bonito»...", ["es mejor que uno con detalles", "es vago: conviene agregar detalles de apariencia", "no necesita cambios", "solo sirve para adultos"], 1,
      "Esos adjetivos no pintan nada concreto; con detalles de apariencia el lector forma una imagen.", "Falta qué se ve."],
    ["¿Cuál combina bien con «la señora»?", ["trajeada y amable", "trajeado y amable", "trajeada y amables", "trajeado y amables"], 0,
      "«La señora» es femenino y singular, así que pide «trajeada» y «amable».", "Revisa género y número."],
    ["El olor del pan recién hecho era...", ["alto", "rápido", "cuadrado", "fuerte y agradable"], 3,
      "El olfato percibe olores: «fuerte y agradable» es una cualidad que se huele.", "Es un olor, no una forma."],
    ["¿Cuál es el adjetivo más útil para describir un mercado?", ["alguna", "esto", "bullicioso y colorido", "mucho"], 2,
      "«Bullicioso y colorido» reúne sonido y color: dos detalles que pintan el mercado.", "Piensa en ruido y colores."]
  ],
  cl: {
    c: [["prec", "ADJETIVOS PRECISOS", "🎯"], ["vag", "PALABRAS VAGAS", "🌫️"]],
    i: [["dulce y cremoso", "prec"], ["ojos claros y sonrisa ancha", "prec"], ["húmedo y cálido", "prec"], ["cosas bonitas", "vag"], ["muy bueno", "vag"], ["alguna cosa", "vag"]]
  },
  em: [
    ["mullido", "suave y esponjoso"],
    ["bullicioso", "lleno de ruido y movimiento"],
    ["húmedo", "con mucha humedad"]
  ],
  or: ["Miro, escucho o toco el objeto", "Elijo un adjetivo exacto", "Reviso género y número", "Lo coloco junto al sustantivo"],
  e: ["Escribe dos frases describiendo tu mochila con adjetivos precisos.", "Ejemplo: Mi mochila es azul y resistente.", 5]
},
{
  n: "Retrato con palabras",
  o: "Escribo la descripción de una persona ordenada en párrafos coherentes.",
  d: "DBA 4º lenguaje: escribo textos descriptivos organizados en párrafos coherentes, empezando por un retrato.",
  t: [
    ["Un orden que se entiende", "Apariencia primero, después gestos y acciones; así el lector arma la imagen.", "👁️"],
    ["Detalles que cuentan", "Pecas, sonrisa y manos ágiles dicen más que palabras genéricas.", "✍️"],
    ["Respeto en cada línea", "Un buen retrato usa detalles amables y cierra dejando una idea clara.", "🤝"]
  ],
  q: [
    ["En un retrato, ¿por qué conviene empezar por la apariencia?", ["Para que el lector imagine a la persona desde el inicio", "Para escribir menos", "Porque es la parte más corta", "Para terminar pronto"], 0,
      "Lo primero que se ve es la apariencia; así el lector construye la imagen paso a paso.", "Empieza por lo que se ve."],
    ["¿Cuál oración aporta un detalle de apariencia?", ["Le gusta el fútbol.", "Tiene pecas en la cara y el pelo rizado.", "Llegó tarde ayer.", "Vive en el barrio."], 1,
      "Las pecas y el pelo rizado son cosas que se ven: son detalles de apariencia.", "Busca lo que se ve en la cara."],
    ["Un retrato coherente agrupa los detalles así:", ["de suerte", "apariencia en un párrafo, gestos en otro y gustos en otro", "todo en una sola línea", "los colores alfabéticamente"], 1,
      "Cuando cada párrafo desarrolla un aspecto, el texto se entiende sin esfuerzo.", "Un párrafo, un tema."],
    ["¿Cuál oración no pertenece a un retrato de la abuela?", ["Usa gafas redondas.", "Tiene manos ágiles para tejer.", "Su risa es calma.", "La escuela está lejos."], 3,
      "«La escuela está lejos» habla de un lugar, no de la abuela: rompe el tema del retrato.", "Pregunta de qué trata el párrafo."],
    ["¿Cuál frase sirve para describir gestos?", ["Es muy amable.", "Le gusta comer.", "Cuando sonríe, se le arrugan los ojos.", "Tiene ojos."], 2,
      "Los gestos son movimientos de la cara y las manos: arrugarse los ojos al sonreír es un gesto.", "Piensa en cómo se mueve la cara."],
    ["Dos párrafos de un retrato se conectan porque...", ["son del mismo color", "ambos hablan de la misma persona", "tienen el mismo largo", "usan números"], 1,
      "La coherencia nace de mantener el mismo tema: siempre la persona que estamos describiendo.", "¿De quién hablan los dos?"],
    ["¿Cuál es un buen cierre para un retrato?", ["y ya está fin fin fin", "punto", "adiós mundo", "Con esos detalles, la persona se hace cercana para quien lee."], 3,
      "Un cierre cierra la idea y deja al lector con una impresión clara de la persona.", "El cierre retoma la idea."],
    ["Un retrato puede incluir los gustos para...", ["mostrar también cómo es la persona por dentro", "alargar el texto", "usar colores", "no escribir apariencia"], 0,
      "Los gustos completan el retrato: junto a la apariencia muestran cómo es esa persona.", "No solo se ve, también se siente."],
    ["¿Cuál es la mejor forma de ordenar un retrato?", ["mezclar todo por azar", "apariencia, gestos y acciones o gustos", "solo decir su nombre", "poner solo adjetivos"], 1,
      "Un orden fijo ayuda al lector a avanzar de lo visible a lo que se deduce.", "De lo de afuera a lo de adentro."],
    ["Escribir «es simpática» sin más deja al lector...", ["con una imagen clara", "esperando un dibujo", "sin imaginar nada concreto", "confundido por las tildes"], 2,
      "Sin detalles no hay imagen; con «cuando ayuda a sus compañeros» se entiende mucho mejor.", "Agrega un ejemplo concreto."],
    ["¿Cuál frase aporta un detalle de acción?", ["Corre tan rápido que nadie la alcanza.", "Es buena alumna.", "Tiene familia.", "Le gusta el verde."], 0,
      "La acción de correr muestra cómo se mueve: es un detalle que da vida al retrato.", "Los verbos pintan movimiento."],
    ["Al describir a un compañero, debo...", ["exagerar sus defectos para que sea divertido", "solo escribir su apellido", "preguntar qué dice el salón", "respetar su privacidad y usar detalles respetuosos"], 3,
      "Un retrato ético cuida a la persona descrita: detalles respetuosos hacen un texto amable.", "Escribe como te gustaría que describieran a ti."]
  ],
  cl: {
    c: [["apa", "APARIENCIA", "👀"], ["ges", "GESTOS Y ACCIONES", "🎬"]],
    i: [["pecas y pelo rizado", "apa"], ["gafas redondas", "apa"], ["sonrisa ancha", "apa"], ["se le arrugan los ojos", "ges"], ["corre muy rápido", "ges"], ["teje con las manos", "ges"]]
  },
  em: [
    ["apariencia", "cómo se ve la persona"],
    ["gestos", "cómo mueve la cara y las manos"],
    ["retrato", "descripción de una persona"]
  ],
  or: ["Elijo a quién describo", "Ordeno apariencia, gestos y gustos", "Escribo un párrafo por aspecto", "Reviso detalles y respeto"],
  e: ["Escribe el retrato de un familiar en tres frases ordenadas.", "Ejemplo: Mi tío es alto y usa gafas. Tiene manos grandes. Le gusta pintar.", 5]
},
{
  n: "Mi lugar favorito",
  o: "Describo un lugar concreto con detalles de los sentidos y un orden claro.",
  d: "DBA 4º lenguaje: escribo textos descriptivos organizados en párrafos coherentes aplicados a un lugar.",
  t: [
    ["Primero, ¿dónde queda?", "Nombrar el lugar al inicio orienta al lector desde la primera oración.", "📍"],
    ["Los sentidos ayudan", "Vista, oído, olfato y tacto dan detalles que un simple «es bonito» no da.", "👃"],
    ["Orden y sentimiento", "Describo cómo es el lugar y cierro con lo que allí se siente.", "🧭"]
  ],
  q: [
    ["En una descripción de la plaza, ¿cuál detalle es visual?", ["Los puestos de colores", "El olor a arepa", "El murmullo del río", "La brisa fresca"], 0,
      "Lo visual es lo que se ve: los colores de los puestos se perciben con la vista.", "Se ve con los ojos."],
    ["¿Cuál oración describe el río con detalle sensorial?", ["El río es bonito.", "El agua golpeaba las piedras con un murmullo constante.", "Hay un río.", "El río está en el cauce."], 1,
      "Ahí hay un sonido concreto: el lector puede oír el agua con esa descripción.", "Escucha el agua en la frase."],
    ["¿Por qué conviene ubicar el lugar al inicio?", ["Para ahorrar palabras", "Para nombrar los colores", "Para que el lector sepa dónde transcurre la descripción", "Para terminar pronto"], 2,
      "Sin saber el lugar, los detalles no se ordenan en la mente del lector.", "Responde primero ¿dónde?"],
    ["¿Cuál oración NO describe un lugar?", ["Los árboles daban sombra.", "El viento movía las hojas.", "Las bancas estaban pintadas de verde.", "Mi tío llega el domingo."], 3,
      "La última habla de una persona y su llegada: no aporta detalles del lugar.", "¿Habla del lugar o de alguien?"],
    ["Para ordenar la descripción del barrio, ¿qué sirve?", ["Copiar el mapa", "Usar un orden: entrada, lugares y sensaciones", "Escribir solo el nombre", "Contar hasta diez"], 1,
      "Un orden fijo evita saltos y hace que el texto se lea de corrido.", "Piensa en un recorrido."],
    ["¿Cuál frase mezcla sin orden las ideas?", ["Primero la plaza, luego el río y al final el monte, todo en una sola oración sin puntos.", "La plaza tiene puestos; el río corre cerca; el monte se ve al fondo.", "Primero menciono la plaza y después el río.", "Uso puntos para separar las ideas."], 0,
      "Amontonar todo en una oración larga cansa al lector; conviene separar con puntos y ordenar.", "Los puntos dan aire al texto."],
    ["El sentido del oído aporta...", ["el sabor", "el color", "los sonidos del lugar", "la textura"], 2,
      "Con el oído percibimos voces, pasos y sonidos: son detalles del lugar.", "Escucha el lugar."],
    ["Un buen párrafo final en la descripción...", ["repite lo mismo", "borra el lugar", "no dice nada", "cuenta cómo se siente uno en ese lugar"], 3,
      "Cerrar con la sensación personal deja una impresión y da coherencia al texto.", "Termina con lo que sientes."],
    ["¿Cuál detalle de la feria del pueblo es concreto y útil?", ["es bonito", "algunas cosas", "los puestos de maíz oliendo a mantequilla", "mucho"], 2,
      "Une dos sentidos, olfato y vista, con algo muy propio de una feria colombiana.", "Busca algo que se huela."],
    ["Al describir mi barrio, ¿qué conviene evitar?", ["Mencionar la plaza", "Exagerar con palabras vacías como «cosa cosa»", "Nombrar el río", "Decir dónde queda"], 1,
      "Las palabras vacías no pintan nada; los detalles concretos sí construyen la imagen.", "¿Qué palabra da información?"],
    ["La brisa y el calor son detalles...", ["sensoriales que se sienten en el cuerpo", "de ortografía", "de matemáticas", "que no sirven para describir"], 0,
      "El tacto percibe temperatura: son detalles sensoriales válidos para cualquier descripción.", "Se sienten en la piel."],
    ["¿Cuál es el mejor orden para describir el río cercano?", ["Decir solo «río»", "Contar el clima antes del nombre del lugar", "Nombrar animales sin más", "Primero dónde queda, luego cómo es y al final qué se siente"], 3,
      "Ubicar, describir y sentir es un orden lógico que se entiende sin esfuerzo.", "Del lugar a la sensación."]
  ],
  cl: {
    c: [["vis", "LO QUE SE VE", "👁️"], ["sen", "LO QUE SE SIENTE Y OYE", "👂"]],
    i: [["puestos de colores", "vis"], ["bancas verdes", "vis"], ["árboles altos", "vis"], ["murmullo del agua", "sen"], ["brisa fresca", "sen"], ["olor a arepa", "sen"]]
  },
  em: [
    ["sensoriales", "los que perciben los sentidos"],
    ["descripción de lugar", "pintar con palabras un espacio"],
    ["sensación", "lo que el lugar me hace sentir"]
  ],
  or: ["Nombró el lugar y dónde queda", "Lo describo con detalles de los sentidos", "Cuento cómo es parte por parte", "Cierro con la sensación que me da"],
  e: ["Escribe tres frases describiendo tu lugar favorito.", "Ejemplo: El parque de mi barrio tiene árboles altos. Se oye el agua de la fuente. Allí me siento tranquilo.", 5]
},
{
  n: "Un párrafo, una idea",
  o: "Reconozco la idea principal de cada párrafo y las oraciones que la apoyan.",
  d: "DBA 4º lenguaje: escribo párrafos coherentes donde cada párrafo desarrolla una sola idea principal.",
  t: [
    ["Una idea por párrafo", "Cada párrafo habla de un tema; si hay dos, se separan en dos párrafos.", "⭐"],
    ["Apoyos concretos", "Las oraciones de apoyo dan ejemplos y detalles de la idea principal.", "🧩"],
    ["Pregunta de control", "Al terminar pregunto: ¿de qué trata este párrafo en una sola idea?", "✅"]
  ],
  q: [
    ["La idea principal de un párrafo es...", ["cualquier palabra del texto", "la idea que desarrolla el párrafo", "el título solamente", "la última palabra"], 1,
      "Es la idea alrededor de la cual giran todas las demás oraciones del párrafo.", "La que resume el párrafo."],
    ["¿Cuál oración puede ser la idea principal?", ["Y luego", "El cuaderno", "Por eso", "La feria del pueblo se llena cada diciembre."], 3,
      "Es una idea completa que puede explicarse con ejemplos: por eso sirve como idea principal.", "Debe poder explicarse más."],
    ["Las oraciones de apoyo...", ["dan ejemplos o detalles de la idea principal", "cambian de tema", "no tienen sujeto", "terminan siempre en coma"], 0,
      "Su función es sostener la idea principal con información concreta.", "Apoyan, no se desvían."],
    ["Un párrafo habla de...", ["diez temas a la vez", "colores", "una sola idea principal", "los números"], 2,
      "Ese es el significado de coherencia: un párrafo, una idea.", "Regla de oro del párrafo."],
    ["¿Qué hace que las oraciones de un párrafo se conecten?", ["Que tengan la misma letra", "Los espacios en blanco", "Las comas solas", "Hablar del mismo tema con palabras que se repiten o se reemplazan"], 3,
      "La repetición y los pronombres evitan repetir el sustantivo y mantienen unido el párrafo.", "Evitan repetir siempre la misma palabra."],
    ["«El mercado estaba lleno. Había verduras, pescado y frutas. Los vendedores ofrecían precios.» ¿Cuál es el tema?", ["La feria", "El mercado", "La mochila", "El almuerzo"], 1,
      "Las tres oraciones giran alrededor del mercado: ese es el tema del párrafo.", "Busca la palabra que se repite."],
    ["Si mi párrafo habla de la lluvia, no debo incluir...", ["Las nubes", "Los charcos", "La receta de sancocho", "El paraguas"], 2,
      "La receta no guarda relación con la lluvia: rompería la coherencia del párrafo.", "Pregúntate si encaja con el tema."],
    ["Una oración de apoyo sirve para...", ["proteger la idea principal con ejemplos concretos", "cambiar de tema", "terminar el texto sin más", "escribir el título"], 0,
      "Los ejemplos hacen creíble y clara la idea principal.", "Da pruebas de la idea."],
    ["¿Dónde suele estar la idea principal?", ["Al final siempre", "En la mitad de la página", "En el dibujo", "Al inicio o en la primera oración del párrafo"], 3,
      "Suele abrir el párrafo; después vienen las oraciones de apoyo.", "Se anuncia al comienzo."],
    ["¿Cuál es un error típico al escribir un párrafo?", ["Contar dos temas que no se relacionan", "Usar puntos al final", "Empezar con mayúscula", "Desarrollar una idea"], 0,
      "Mezclar temas desconectados confunde al lector; mejor, un párrafo por tema.", "Si hay dos ideas, hacen falta dos párrafos."],
    ["Un buen párrafo sobre la garza...", ["cambia de tema en cada oración", "habla de la garza con detalles que la acompañan", "no usa puntos", "solo dice «ave»"], 1,
      "Mantener el tema con detalles propios de la garza da coherencia al párrafo.", "Todo gira alrededor de la garza."],
    ["Para comprobar mi párrafo, pregunto...", ["¿cuántos colores usé?", "¿cuántas letras tiene?", "¿de qué trata este párrafo en una sola idea?", "¿cuántas comas puse?"], 2,
      "Si puedo responder en una frase, el párrafo está bien logrado.", "Resúmelo en una idea."]
  ],
  cl: {
    c: [["prin", "IDEA PRINCIPAL", "⭐"], ["apo", "IDEAS DE APOYO", "🧩"]],
    i: [["La feria se llena en diciembre", "prin"], ["El mercado está lleno", "prin"], ["Un párrafo trata de un tema", "prin"], ["Verduras, pescado y frutas", "apo"], ["Los vendedores ofrecían precios", "apo"], ["Ejemplos concretos", "apo"]]
  },
  em: [
    ["idea principal", "la idea que desarrolla el párrafo"],
    ["oración de apoyo", "detalle o ejemplo que la confirma"],
    ["coherencia", "que todas las oraciones hablen del mismo tema"]
  ],
  or: ["Elijo un solo tema", "Escribo la idea principal al inicio", "Agrego oraciones de apoyo con ejemplos", "Pregunto de qué trata mi párrafo"],
  e: ["Escribe un párrafo de cuatro frases sobre la feria de tu pueblo.", "En diciembre la feria se llena. Hay puestos de comida. Suena la música. Me gusta bailar con mi familia.", 5]
},
{
  n: "Ideas en orden",
  o: "Organizo las ideas de un texto con conectores para que se entiendan sin esfuerzo.",
  d: "DBA 4º lenguaje: escribo textos descriptivos con estructura, orden y coherencia usando conectores.",
  t: [
    ["Ordenar antes de escribir", "Pienso el orden en una lista corta y luego convierte en oraciones.", "🗺️"],
    ["Conectores que guían", "Primero, después, además y sin embargo marcan el camino de las ideas.", "🔗"],
    ["Una entrada y una salida", "El inicio presenta el tema y el cierre lo cierra con sentido.", "🚪"]
  ],
  q: [
    ["¿Qué conector uso para añadir una idea?", ["Sin embargo", "Por eso", "Además", "En fin"], 2,
      "«Además» suma una información nueva sin oponerse a lo anterior.", "Busca el conector que agrega."],
    ["«Primero preparé la mochila; después desayuné». La palabra «después»...", ["marca el orden de las acciones", "da una causa", "termina el texto", "hace una pregunta"], 0,
      "Los conectores de orden señalan en qué momento sucede cada acción.", "Indica cuándo pasó."],
    ["Para mostrar un contraste uso...", ["y", "luego", "por lo tanto", "sin embargo"], 3,
      "«Sin embargo» introduce una idea que se opone o matiza lo dicho antes.", "Une ideas opuestas."],
    ["Ordeno mis ideas cuando...", ["escribo el título", "organizo primero, luego y finalmente", "cambio todo al final", "uso solo una oración"], 1,
      "Un esquema con orden temporal hace que el texto se lea claro desde el inicio.", "Haz un plan corto."],
    ["«Estaba cansado; sin embargo, terminé la tarea». La segunda idea...", ["se opone a la primera", "la repite", "la borra", "no tiene sentido"], 0,
      "La partícula «sin embargo» marca la oposición entre estar cansado y terminar la tarea.", "Busca la idea contraria."],
    ["¿Cuál es un cierre lógico?", ["Primero", "Después", "Además", "Por eso, guardo mi diario todas las noches."], 3,
      "Un cierre reúne lo anterior y lo cierra con una conclusión personal.", "Cierra con una conclusión."],
    ["Una secuencia lógica para escribir el día es...", ["finalmente, luego, primero", "primero, luego, finalmente", "nunca, siempre, ayer", "porque, pero, ni"], 1,
      "El orden temporal claro facilita que el lector siga el relato sin confusión.", "De lo primero a lo último."],
    ["Los conectores ayudan a...", ["cambiar de idioma", "sumar números", "unir las oraciones para que se entienda el texto", "bajar el volumen"], 2,
      "Son los puentes entre oraciones: sin ellos el texto suena a frases sueltas.", "Son puentes del texto."],
    ["¿Cuál oración introduce bien el tema?", ["Y ya", "Luego", "Por eso", "Este fin de semana visitamos la feria de mi municipio."], 3,
      "Presenta de qué hablará el texto con una oración clara y completa.", "Anuncia el tema."],
    ["Si escribo «Llovió todo el día», ¿qué idea sigue mejor con «por eso»?", ["El sol salió fuerte", "Nos quedamos en casa", "Fuimos a nadar", "Compramos helado"], 1,
      "«Por eso» introduce la consecuencia: la lluvia explica quedarse en casa.", "Busca la consecuencia."],
    ["Un texto ordenado se reconoce porque...", ["tiene muchos dibujos", "es largo", "las ideas siguen un orden claro con conectores", "no usa puntos"], 2,
      "El orden y los conectores hacen que el lector avance sin perderse.", "Todo va en su lugar."],
    ["El conector «primero» indica...", ["el primer paso", "el resultado", "la causa", "el final"], 0,
      "Marca el inicio de una secuencia de acciones o ideas.", "El comienzo de la serie."]
  ],
  cl: {
    c: [["ord", "ORDEN", "1️⃣"], ["con", "CONECTORES", "🔗"]],
    i: [["primero", "ord"], ["después", "ord"], ["finalmente", "ord"], ["además", "con"], ["sin embargo", "con"], ["por eso", "con"]]
  },
  em: [
    ["primero", "primer paso"],
    ["además", "agregar una idea"],
    ["sin embargo", "idea opuesta"],
    ["por eso", "consecuencia de lo dicho"]
  ],
  or: ["Pienso el orden de mis ideas", "Escribo la entrada que presenta el tema", "Uso conectores en cada paso", "Cierro con una conclusión"]
}
];

/* ====== g4 / mate ====== */
/* DBA 4º — mate */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.mate = [
{
  n: "Equivale multiplicando",
  o: "Obtengo fracciones equivalentes multiplicando numerador y denominador por el mismo número.",
  d: "DBA 4º matemáticas: opero con fracciones equivalentes multiplicando arriba y abajo por el mismo número.",
  t: [
    ["Multiplico por igual", "Si multiplico el numerador y el denominador por el mismo número, la fracción no cambia de valor.", "🔁"],
    ["Mismo valor, otra cara", "1/2 y 2/4 dicen lo mismo: solo cambian los números, no la cantidad.", "🎯"],
    ["Compruebo", "Puedo dibujar o simplificar para confirmar que ambas fracciones son la misma parte.", "✅"]
  ],
  q: [
    ["¿Qué fracción es equivalente a 1/2?", ["2/4", "1/3", "3/5", "2/5"], 0,
      "Multiplicando 1×2 y 2×2 obtengo 2/4: ambas cantidades valen lo mismo.", "Multiplica arriba y abajo por 2."],
    ["Para escribir 2/3 con denominador 9, ¿qué hago?", ["Divido entre 3", "Multiplico numerador y denominador por 3", "Sumo 6 al denominador", "Multiplico solo el denominador"], 1,
      "3×3=9, así que también multiplico 2×3=6 y queda 6/9, equivalente a 2/3.", "¿Por qué número multiplico 3 para que sea 9?"],
    ["¿Cuál fracción NO es equivalente a 3/4?", ["6/8", "9/12", "4/3", "12/16"], 2,
      "3/4×2=6/8, ×3=9/12 y ×4=12/16; la 4/3 es la inversa, no una equivalente.", "Compara arriba y abajo."],
    ["Si 3/5 = ?/10, ¿qué número falta en el numerador?", ["5", "4", "7", "6"], 3,
      "5×2=10, así que 3×2=6: la fracción equivalente es 6/10.", "Mira por cuánto se multiplicó el denominador."],
    ["Si multiplico 4/7 por 3/3, obtengo...", ["4/21", "12/7", "12/21", "4/7"], 2,
      "Multiplico 4×3=12 y 7×3=21: queda 12/21, que vale lo mismo que 4/7.", "Multiplica ambos por 3."],
    ["Una fracción equivalente a 1/4 es...", ["1/8", "2/8", "4/1", "3/4"], 1,
      "1×2=2 y 4×2=8, por eso 2/8 es equivalente a 1/4.", "Multiplica por 2 arriba y abajo."],
    ["¿Para qué sirve escribir fracciones equivalentes?", ["Para cambiar de color", "Para ordenarlas alfabéticamente", "Para volverlas números enteros", "Para comparar y operar fracciones con el mismo denominador"], 3,
      "Con el mismo denominador es fácil comparar, sumar y restar fracciones.", "Piensa en sumar fracciones."],
    ["5/6 con denominador 18 es...", ["15/18", "10/18", "5/18", "25/18"], 0,
      "6×3=18, así que 5×3=15 y la equivalente es 15/18.", "Multiplica por 3."],
    ["¿Cuál fracción es equivalente a 2/5?", ["4/15", "6/15", "8/15", "5/2"], 1,
      "2×3=6 y 5×3=15: 6/15 tiene el mismo valor que 2/5.", "Multiplica por 3."],
    ["Multiplicar numerador y denominador por el mismo número...", ["cambia el valor de la fracción", "la hace imposible", "no cambia el valor", "la vuelve un número entero"], 2,
      "Por eso se llaman equivalentes: el valor sigue siendo el mismo aunque los números cambien.", "Ese es el secreto de las equivalentes."],
    ["1/3 es equivalente a...", ["4/12", "3/12", "1/12", "2/12"], 0,
      "1×4=4 y 3×4=12, entonces 4/12 vale lo mismo que 1/3.", "Multiplica por 4."],
    ["¿Cuál pareja es equivalente?", ["1/2 y 2/5", "2/3 y 4/5", "3/4 y 6/10", "3/8 y 6/16"], 3,
      "3×2=6 y 8×2=16: 6/16 es la equivalente de 3/8.", "Busca el doble arriba y abajo."]
  ],
  cl: {
    c: [["eq", "FRACCIONES EQUIVALENTES", "🔁"], ["noeq", "NO SON EQUIVALENTES", "🚫"]],
    i: [["1/2 y 2/4", "eq"], ["3/4 y 6/8", "eq"], ["3/8 y 6/16", "eq"], ["1/2 y 2/5", "noeq"], ["3/4 y 6/10", "noeq"], ["2/3 y 4/5", "noeq"]]
  },
  em: [
    ["1/2", "2/4"],
    ["3/5", "6/10"],
    ["4/7", "12/21"]
  ],
  or: ["Escribo la fracción", "Multiplico numerador y denominador por el mismo número", "Escribo la fracción equivalente", "Compruebo que valen lo mismo"],
  e: ["Escribe una fracción equivalente a 2/3 multiplicando por 3.", "4/9", 5]
},
{
  n: "Simplifico fracciones",
  o: "Divido numerador y denominador entre el mismo número hasta llegar a la forma más simple.",
  d: "DBA 4º matemáticas: opero con fracciones equivalentes usando la simplificación hasta la forma irreducible.",
  t: [
    ["Divido por igual", "Dividir arriba y abajo entre el mismo número deja la fracción más pequeña y clara.", "✂️"],
    ["Forma más simple", "La fracción irreducible ya no se puede simplificar más: es su presentación final.", "✨"],
    ["El número 1 como ayuda", "Multiplicar o dividir entre el mismo número es como multiplicar por 1: no cambia nada.", "1️⃣"]
  ],
  q: [
    ["¿Cómo se simplifica 4/8?", ["Divido 4 y 8 entre 4", "Divido 4 y 8 entre 2 y sumo", "Multiplico por 2", "Resto 4 a 8"], 0,
      "4÷4=1 y 8÷4=2, así que 4/8 simplificada es 1/2.", "Busca un número que divida a los dos."],
    ["2/6 en su forma más simple es...", ["2/3", "1/3", "3/6", "4/6"], 1,
      "Dividiendo 2÷2=1 y 6÷2=3 queda 1/3, que es la forma más simple.", "Divide entre 2 arriba y abajo."],
    ["Para simplificar una fracción debo dividir...", ["solo el numerador", "numerador y denominador entre el mismo número", "entre el siguiente número mayor", "hasta que sobren números"], 1,
      "Esa es la regla: dividir siempre entre el mismo número para no cambiar el valor.", "La misma operación arriba y abajo."],
    ["3/5 está simplificada porque...", ["es impar", "no se puede dibujar", "su denominador es primo", "no hay número distinto de 1 que divida a 3 y a 5"], 3,
      "3 y 5 solo se dividen entre 1, así que la fracción ya está en su forma más simple.", "Prueba dividirla y verás."],
    ["10/20 en su forma más simple es...", ["10/10", "1/2", "2/10", "5/20"], 1,
      "Dividiendo entre 10: 10÷10=1 y 20÷10=2, queda 1/2.", "¿Entre qué número caben los dos?"],
    ["Si simplifico 6/12 dividiendo entre 6, queda...", ["1/2", "6/12", "2/4", "3/12"], 0,
      "6÷6=1 y 12÷6=2, por eso el resultado es 1/2.", "Una parte de dos es la mitad."],
    ["¿Cuál es 8/12 en su forma más simple?", ["4/6", "8/4", "2/3", "3/2"], 2,
      "Dividiendo entre 4: 8÷4=2 y 12÷4=3, queda 2/3.", "Busca el máximo divisor común."],
    ["Una fracción irreducible...", ["es una suma", "es un decimal", "es imposible", "no se puede simplificar más"], 3,
      "Irreducible significa que ya no existe número (distinto de 1) que divida a arriba y abajo.", "Es la versión final."],
    ["15/25 simplificada es...", ["5/3", "15/5", "3/5", "6/10"], 2,
      "15÷5=3 y 25÷5=5, así que 15/25 equivale a 3/5.", "Divide entre 5."],
    ["Al simplificar, puedo dividir...", ["solo el numerador", "numerador y denominador entre el mismo número", "hasta obtener números distintos", "solo cuando el denominador es par"], 1,
      "Mantener la misma división arriba y abajo garantiza una fracción equivalente.", "Siempre el mismo número."],
    ["9/9 simplificada es...", ["1", "9", "0", "1/9"], 0,
      "9÷9=1 en arriba y abajo, y toda la fracción equivale a 1 unidad completa.", "¿Cuántas novenas caben en 9 novenas?"],
    ["¿Qué fracción es más simple y equivalente a 4/16?", ["4/8", "2/16", "8/16", "1/4"], 3,
      "Dividiendo entre 4: 4÷4=1 y 16÷4=4, queda 1/4.", "Divide entre 4."]
  ],
  cl: {
    c: [["simp", "FORMA MÁS SIMPLE", "✨"], ["compl", "TODAVÍA SE PUEDE SIMPLIFICAR", "🔧"]],
    i: [["2/6 = 1/3", "simp"], ["4/8 = 1/2", "simp"], ["9/9 = 1", "simp"], ["4/16 se puede simplificar", "compl"], ["10/20 se puede simplificar", "compl"], ["6/12 se puede simplificar", "compl"]]
  },
  em: [
    ["4/8", "1/2"],
    ["6/12", "1/2"],
    ["9/15", "3/5"]
  ],
  or: ["Busco un número que divida arriba y abajo", "Divido numerador y denominador entre ese número", "Reviso si se puede simplificar más", "Escribo la fracción irreducible"],
  e: ["Simplifica 10/15 hasta su forma más simple.", "2/3 (divido entre 5)", 5]
},
{
  n: "Fracción igual a decimal",
  o: "Convierto fracciones sencillas en decimales y explico qué parte representan.",
  d: "DBA 4º matemáticas: opero con fracciones equivalentes y decimales relacionando las dos formas.",
  t: [
    ["Dos maneras de lo mismo", "Una misma cantidad se puede escribir como fracción o como decimal: 1/2 y 0,5.", "💠"],
    ["Denominadores amigables", "Con denominadores 10, 100 o 1000 la conversión es directa con la coma decimal.", "🔢"],
    ["Leer bien el decimal", "Después de la coma están las décimas, las centésimas y las milésimas.", "👀"]
  ],
  q: [
    ["1/2 escrita en decimal es...", ["0,2", "0,5", "2,0", "0,25"], 1,
      "La mitad de 1 unidad es 0,5: cinco décimas de esa unidad.", "Piensa en 10 partes iguales."],
    ["La fracción 1/4 equivale a...", ["0,4", "0,5", "0,2", "0,25"], 3,
      "1/4 es la cuarta parte: en 100 partes toca 25, o sea 0,25.", "100÷4=25."],
    ["3/4 en decimal es...", ["0,75", "0,34", "0,43", "3,4"], 0,
      "3×25=75 centésimas, por eso 3/4 = 0,75.", "Multiplica 3 por 0,25."],
    ["5/10 en decimal es...", ["0,05", "5,0", "0,5", "0,15"], 2,
      "5 décimas se escriben 0,5; el cero antes de la coma marca que no hay enteros.", "Cinco décimas, no cinco enteros."],
    ["1/10 en decimal se escribe...", ["1,0", "0,01", "0,5", "0,1"], 3,
      "Una décima es 0,1: el 1 está en el lugar de los décimos.", "Es la décima parte de 1."],
    ["0,25 se lee...", ["veinticinco enteros", "veinticinco centésimas", "veinticinco décimas", "doscientos cincuenta milésimas"], 1,
      "El 25 ocupa las posiciones de décimas y centésimas, así que se lee veinticinco centésimas.", "Después de la coma, dos posiciones."],
    ["¿Qué fracción equivale a 0,5?", ["5/100", "50/100", "5/10", "1/50"], 2,
      "0,5 significa cinco décimas, o sea 5/10.", "La coma separa décimas."],
    ["0,75 equivale a la fracción...", ["75/100", "7/100", "75/10", "7/10"], 0,
      "Tiene dos cifras después de la coma: 75 centésimas, o sea 75/100.", "Dos cifras = cientos."],
    ["El decimal 0,3 equivale a...", ["3/100", "30/10", "1/3", "3/10"], 3,
      "Una cifra después de la coma son décimas: 0,3 = 3/10.", "Cuenta las cifras después de la coma."],
    ["En el número 0,46, el 4 representa...", ["cuatro décimas", "cuatrocientos", "cuatro centésimas", "cuatro enteros"], 0,
      "La primera posición después de la coma es la de las décimas.", "Es la primera cifra decimal."],
    ["1/5 en decimal es...", ["0,5", "0,2", "0,1", "0,25"], 1,
      "1/5 equivale a 2/10, así que se escribe 0,2.", "Multiplica arriba y abajo por 2."],
    ["¿Cuál es la parte entera del número 7,8?", ["78", "0,8", "7", "8"], 2,
      "Lo que está antes de la coma son los enteros: en 7,8 la parte entera es 7.", "Mira a la izquierda de la coma."]
  ],
  cl: {
    c: [["frac", "FRACCIÓN", "🔢"], ["dec", "DECIMAL", "💠"]],
    i: [["1/2", "frac"], ["3/4", "frac"], ["5/10", "frac"], ["0,5", "dec"], ["0,75", "dec"], ["0,1", "dec"]]
  },
  em: [
    ["1/2", "0,5"],
    ["1/4", "0,25"],
    ["3/4", "0,75"],
    ["1/10", "0,1"]
  ],
  or: ["Escribo la fracción con denominador 10, 100 o 1000", "Convierto el numerador en cifras decimales", "Coloco la coma decimal", "Leo el decimal para comprobar"],
  e: ["Escribe la fracción 1/4 como número decimal.", "0,25", 5]
},
{
  n: "Sumo y resto fracciones",
  o: "Sumo y resto fracciones con el mismo denominador y verifico la simplificación final.",
  d: "DBA 4º matemáticas: opero con fracciones equivalentes y decimales resumiendo sumas y restas de partes iguales.",
  t: [
    ["El denominador se queda", "Al sumar partes del mismo tamaño, solo cambio cuántas partes tocan: el denominador no cambia.", "➕"],
    ["Cuento numeradores", "2/5 + 1/5 son 3 quintas partes: sumo los numeradores y conservo el 5.", "🔢"],
    ["Simplifico al final", "Si el resultado se puede simplificar, lo hago al final de la operación.", "✅"]
  ],
  q: [
    ["¿Cuánto es 1/5 + 2/5?", ["1/5", "3/10", "3/5", "2/5"], 2,
      "Los denominadores son iguales: sumo 1+2=3 y conservo el 5, queda 3/5.", "Suma solo arriba."],
    ["Para sumar fracciones con el mismo denominador...", ["sumo los numeradores y conservo el denominador", "sumo todos los números", "sumo los denominadores", "multiplico las fracciones"], 0,
      "Las partes ya son del mismo tamaño; solo cuántas de ellas tomamos.", "El denominador no se toca."],
    ["¿Cuánto es 7/8 − 3/8?", ["4/16", "3/8", "10/8", "4/8"], 3,
      "7−3=4 y el denominador 8 se conserva: queda 4/8, que además se simplifica en 1/2.", "Resta solo arriba."],
    ["¿Cuál es 3/10 + 4/10?", ["7/20", "7/10", "12/10", "1/10"], 1,
      "Mismo denominador: 3+4=7 y sigue siendo décimas, o sea 7/10.", "No sumes los denominadores."],
    ["Ana comió 2/9 de una arepa y luego 4/9. ¿Qué fracción comió en total?", ["6/9", "6/18", "2/9", "8/9"], 0,
      "2/9 + 4/9 = 6/9 novenas partes; además se simplifica a 2/3.", "Suma los numeradores."],
    ["¿Cuánto es 5/6 − 2/6?", ["3/12", "5/6", "7/6", "3/6"], 3,
      "5−2=3 y el denominador sigue siendo 6: queda 3/6 (o 1/2 simplificada).", "Resta arriba, conserva abajo."],
    ["¿Cuál resta da 1/4?", ["3/4 − 1/4", "2/4 − 1/4", "4/4 − 4/4", "1/4 − 1/4"], 1,
      "2−1=1 y el denominador 4 se mantiene: el resultado es 1/4.", "Piensa en cuántas cuartas partes faltan."],
    ["En una cancha: 5/12 + 4/12 + 3/12 = ?", ["9/24", "12/24", "12/12", "8/12"], 2,
      "5+4+3=12 doceavas partes, y 12/12 es una unidad completa.", "Suma los numeradores."],
    ["¿Cuánto es 1/3 + 1/3?", ["1/3", "1/6", "2/6", "2/3"], 3,
      "Dos terceras partes dan 2/3: los denominadores iguales se conservan.", "Cuenta cuántas terceras tomas."],
    ["Si las denominaciones son distintas, primero...", ["las sumo igual", "busco un denominador común", "las resto", "las multiplico por cero"], 1,
      "Sin partes del mismo tamaño no se puede sumar: primero hay que equipararlas con equivalentes.", "Equipara antes de operar."],
    ["¿Cuál es 9/10 − 4/10?", ["5/20", "4/10", "5/10", "13/10"], 2,
      "9−4=5 décimas: el resultado es 5/10, que se simplifica en 1/2.", "Resta solo los numeradores."],
    ["Pedro tenía 8/8 de una fruta y comió 3/8. ¿Cuánto quedó?", ["5/8", "8/8", "3/8", "11/8"], 0,
      "8−3=5: quedan 5/8 de la fruta.", "8/8 es la fruta completa."]
  ],
  cl: {
    c: [["suma", "SUMA", "➕"], ["res", "RESTA", "➖"]],
    i: [["1/5 + 2/5 = 3/5", "suma"], ["3/10 + 4/10 = 7/10", "suma"], ["1/3 + 1/3 = 2/3", "suma"], ["7/8 − 3/8 = 4/8", "res"], ["5/6 − 2/6 = 3/6", "res"], ["8/8 − 3/8 = 5/8", "res"]]
  },
  em: [
    ["mismo denominador", "conservo el denominador"],
    ["numeradores", "lo que sumo o resto"],
    ["denominador común", "primer paso con denominadores distintos"]
  ],
  or: ["Verifico que los denominadores sean iguales", "Sumo o resto los numeradores", "Conservo el denominador", "Simplifico si es posible"],
  e: ["Suma 2/7 + 4/7 y escribe el resultado.", "6/7", 5]
},
{
  n: "Decimales en el mercado",
  o: "Sumo y resto decimales en situaciones de compras, medidas y dinero.",
  d: "DBA 4º matemáticas: opero con decimales resolviendo problemas cotidianos con dinero y medidas.",
  t: [
    ["Alineo las comas", "Para sumar o restar decimales, los puntos decimales deben quedar unos debajo de otros.", "🧮"],
    ["Dinero con coma", "En Colombia los precios usan decimales: 1,5 mil es un peso y medio en miles.", "💰"],
    ["Estimo para verificar", "Redondeo rápido antes de calcular para saber si mi resultado es razonable.", "🧠"]
  ],
  q: [
    ["La arepa cuesta 1,5 mil y el jugo 0,5 mil. ¿Cuánto es en total?", ["1,0 mil", "2,5 mil", "0,5 mil", "2,0 mil"], 3,
      "1,5 + 0,5 = 2,0 mil: sumo las partes enteras y las décimas.", "Suma la coma alineada."],
    ["Compré 2,3 m de tela y usé 0,8 m. ¿Cuánto queda?", ["2,8 m", "0,5 m", "1,5 m", "3,1 m"], 2,
      "2,3 − 0,8 = 1,5 metros: resto las décimas primero y luego las unidades.", "Presta una unidad si hace falta."],
    ["¿Cuál es la suma correcta?", ["1,25 + 0,75 = 2,00", "1,25 + 0,75 = 1,100", "1,25 + 0,75 = 0,100", "1,25 + 0,75 = 1,25"], 0,
      "Alineando las comas: 125 centésimas + 75 centésimas = 200 centésimas = 2,00.", "Suma como si fueran enteros."],
    ["Un litro de leche cuesta 3,6 mil y pagué con 5,0 mil. ¿Cuánto devuelven?", ["2,6 mil", "1,4 mil", "8,6 mil", "1,6 mil"], 1,
      "5,0 − 3,6 = 1,4 mil: la diferencia es lo que te devuelven.", "Resta con las comas alineadas."],
    ["¿Cuál resta es correcta?", ["5,4 − 2,1 = 3,4", "5,4 − 2,1 = 4,2", "5,4 − 2,1 = 3,3", "5,4 − 2,1 = 7,5"], 2,
      "5−2=3 enteros y 4 décimas−1 décima=3 décimas: 3,3.", "Resta cifra por cifra."],
    ["En el mercado: 1,25 kg de tomate + 0,75 kg de aguacate = ?", ["1,00 kg", "0,50 kg", "1,50 kg", "2,00 kg"], 3,
      "125 gramos + 75 gramos = 200 gramos, o sea 2,00 kg completos.", "Suma las centésimas."],
    ["Para sumar decimales debo...", ["alinear los puntos decimales", "sumar solo los enteros", "quitar los ceros", "multiplicar por 100"], 0,
      "Si las comas no están alineadas, se mezclan décimas con enteros y el resultado sale mal.", "La coma es la referencia."],
    ["¿Cuánto es 0,6 + 0,7?", ["13,0", "1,3", "1,13", "0,3"], 1,
      "6 décimas + 7 décimas = 13 décimas, que es 1,3 (una unidad y tres décimas).", "13 décimas = 1 entero y 3 décimas."],
    ["El metro de cuerda cuesta 0,8 mil. Dos metros cuestan...", ["0,16 mil", "1,6 mil", "1,8 mil", "2,0 mil"], 1,
      "0,8 + 0,8 = 1,6 mil: son dos décimas doble.", "Doble de 0,8."],
    ["¿Cuánto es 4,5 − 1,2?", ["3,3", "3,7", "5,7", "4,3"], 0,
      "4−1=3 enteros y 5−2=3 décimas: el resultado es 3,3.", "Resta enteros y décimas."],
    ["Compré por 7,8 mil y devolvieron 2,0 mil de vuelto. ¿Cuánto gasté?", ["9,8 mil", "5,0 mil", "6,8 mil", "5,8 mil"], 3,
      "7,8 − 2,0 = 5,8 mil lo que realmente gastaste.", "Resta lo que te devolvieron."],
    ["¿Cuál es la lectura correcta de 12,05?", ["doce enteros cinco décimas", "ciento dos enteros cinco décimas", "doce enteros cinco centésimas", "doce enteros cinco milésimas"], 2,
      "Tiene dos cifras después de la coma: 05 son cinco centésimas.", "Cuenta las cifras decimales."]
  ],
  cl: {
    c: [["sum", "SUMAS DE DECIMALES", "➕"], ["res", "RESTAS DE DECIMALES", "➖"]],
    i: [["1,5 + 0,5 = 2,0", "sum"], ["1,25 + 0,75 = 2,00", "sum"], ["0,6 + 0,7 = 1,3", "sum"], ["5,4 − 2,1 = 3,3", "res"], ["2,3 − 0,8 = 1,5", "res"], ["4,5 − 1,2 = 3,3", "res"]]
  },
  em: [
    ["coma decimal", "separa enteros y décimas"],
    ["pesos colombianos", "moneda de los problemas de dinero"],
    ["alinear los puntos", "clave para sumar bien"]
  ],
  or: ["Alineo los puntos decimales", "Sumo o resto cifra por cifra", "Coloco la coma en su lugar", "Estimo para comprobar el resultado"],
  e: ["Suma 3,6 + 1,8 y escribe el resultado.", "5,4", 5]
},
{
  n: "Caza de ángulos",
  o: "Clasifico ángulos en agudos, rectos, obtusos y llanos según su medida.",
  d: "DBA 4º matemáticas: clasifico ángulos comparando su medida con 90° y 180°.",
  t: [
    ["Menor que 90°", "El ángulo agudo es más cerrado que la esquina de una hoja.", "📐"],
    ["Exactamente 90°", "El ángulo recto es el de las esquinas de las hojas y los cuadrados.", "📏"],
    ["Entre 90° y 180°", "El obtuso está más abierto que el recto y el llano mide 180°.", "⤴"]
  ],
  q: [
    ["Un ángulo de 45° es...", ["agudo", "recto", "obtuso", "llano"], 0,
      "45° es menor que 90°, así que es un ángulo agudo.", "Compara con 90°."],
    ["Un ángulo de 90° es...", ["agudo", "recto", "obtuso", "llano"], 1,
      "90° es exactamente la medida del ángulo recto: la esquina perfecta.", "Es justo la esquina."],
    ["Un ángulo de 120° es...", ["agudo", "recto", "obtuso", "llano"], 2,
      "120° está entre 90° y 180°: por eso es un ángulo obtuso.", "Es mayor que recto."],
    ["Un ángulo de 180° es...", ["agudo", "recto", "obtuso", "llano"], 3,
      "180° forma una línea recta: es el ángulo llano.", "Es la línea completa."],
    ["La esquina de una hoja tiene un ángulo...", ["agudo", "obtuso", "recto", "llano"], 2,
      "Las hojas de cuaderno tienen esquinas de 90°, o sea ángulos rectos.", "Mide 90°."],
    ["¿Cuál de estos ángulos es agudo?", ["100°", "60°", "95°", "180°"], 1,
      "60° es el único menor que 90°, así que es agudo.", "Busca el menor de 90°."],
    ["El ángulo recto mide...", ["45°", "60°", "100°", "90°"], 3,
      "Esa es su definición: 90 grados exactos.", "Es la medida exacta."],
    ["Un ángulo mayor que 90° y menor que 180° es...", ["obtuso", "recto", "agudo", "llano"], 0,
      "Ese es el rango del ángulo obtuso: se abre más que el recto pero no llega a línea.", "Entre 90° y 180°."],
    ["A las 3:00, las manecillas del reloj forman...", ["agudo", "recto", "obtuso", "llano"], 1,
      "La manecilla de las 3 y la del 12 forman 90°: es un ángulo recto.", "Dibuja el reloj en tu cabeza."],
    ["A las 6:00, las manecillas forman...", ["agudo", "recto", "llano", "obtuso"], 2,
      "El 12 y el 6 quedan opuestos: forman 180°, un ángulo llano.", "Forman una línea."],
    ["La punta de un lápiz bien afilado tiene un ángulo...", ["agudo", "recto", "obtuso", "llano"], 0,
      "La punta es muy cerrada: su ángulo es claramente menor que 90°.", "Es puntiagudo."],
    ["¿Cuál NO es un tipo de ángulo que clasificamos?", ["agudo", "recto", "obtuso", "redondo"], 3,
      "«Redondo» no es una clasificación de ángulos; las conocidas son agudo, recto, obtuso y llano.", "Revisa los nombres oficiales."]
  ],
  cl: {
    c: [["menor", "MENORES A 90°", "📐"], ["mayor", "DE 90° EN ADELANTE", "📏"]],
    i: [["45° es agudo", "menor"], ["60° es agudo", "menor"], ["15° es agudo", "menor"], ["90° es recto", "mayor"], ["120° es obtuso", "mayor"], ["180° es llano", "mayor"]]
  },
  em: [
    ["agudo", "menor que 90°"],
    ["recto", "igual a 90°"],
    ["obtuso", "entre 90° y 180°"],
    ["llano", "igual a 180°"]
  ],
  or: ["Miro el ángulo con su esquina", "Lo mido con el transportador", "Comparo con 90° y 180°", "Lo clasifico: agudo, recto, obtuso o llano"],
  e: ["Clasifica los ángulos de 30°, 90° y 150°.", "30° agudo, 90° recto, 150° obtuso", 5]
},
{
  n: "Polígonos por sus lados",
  o: "Clasifico polígonos contando sus lados y vértices para nombrarlos correctamente.",
  d: "DBA 4º matemáticas: clasifico polígonos según el número de lados y de vértices.",
  t: [
    ["Cuento los lados", "Un triángulo tiene 3 lados, un cuadrilátero 4 y así sucesivamente.", "🔺"],
    ["Vértices emparejados", "Los vértices son las esquinas donde se unen dos lados; siempre hay tantos como lados.", "🧭"],
    ["Cerrados y rectos", "Un polígono tiene lados rectos que se tocan formando una figura cerrada.", "✅"]
  ],
  q: [
    ["¿Cuántos lados tiene un triángulo?", ["3", "4", "5", "6"], 0,
      "El triángulo, como su nombre lo dice, se forma con 3 lados.", "Tri = tres."],
    ["Un cuadrilátero tiene...", ["3 lados", "4 lados", "5 lados", "6 lados"], 1,
      "Cuadrilátero viene de cuadrado: siempre son 4 lados.", "Cuenta sus esquinas."],
    ["¿Cuál polígono tiene 5 lados?", ["Cuadrilátero", "Hexágono", "Pentágono", "Triángulo"], 2,
      "El pentágono tiene 5 lados y 5 vértices.", "Penta = cinco."],
    ["Un hexágono tiene...", ["3 lados", "4 lados", "5 lados", "6 lados"], 3,
      "El hexágono se forma con 6 lados; el panal de abejas es un ejemplo.", "Hexa = seis."],
    ["¿Cuántos vértices tiene un triángulo?", ["4", "3", "5", "6"], 1,
      "Tiene tantos vértices como lados: 3 esquinas para 3 lados.", "Esquinas = vértices."],
    ["Los polígonos se clasifican según...", ["sus lados y sus ángulos", "su color", "su nombre", "el tamaño del dibujo"], 0,
      "El número y tipo de lados y ángulos determina el nombre del polígono.", "Cuenta y compara."],
    ["¿Cuál es un cuadrilátero?", ["Triángulo", "Pentágono", "Cuadrilátero", "Hexágono"], 2,
      "Todo polígono de 4 lados es un cuadrilátero: cuadrados, rectángulos y rombos.", "Son 4 lados."],
    ["Un cuadrado tiene...", ["3 lados iguales", "5 lados iguales", "lados de distinto tamaño", "4 lados iguales"], 3,
      "El cuadrado tiene 4 lados iguales y 4 ángulos rectos.", "Los cuatro miden lo mismo."],
    ["¿Cuántos lados tiene un octógono?", ["6", "7", "8", "9"], 2,
      "Octo = ocho: ese polígono tiene 8 lados y 8 vértices.", "Piensa en octubre."],
    ["Un polígono cerrado con lados rectos...", ["es una línea", "tiene lados que se unen en vértices", "es un círculo", "no tiene lados"], 1,
      "Los lados rectos se encuentran en las esquinas formando los vértices.", "Se tocan en las esquinas."],
    ["La señal de peligro en el colegio tiene forma de...", ["triángulo", "cuadrado", "pentágono", "hexágono"], 0,
      "Las señales de peligro suelen ser triángulos de 3 lados.", "Mira la señal de la esquina."],
    ["¿Cuál de estas figuras NO es un polígono?", ["Cuadrado", "Triángulo", "Pentágono", "Círculo"], 3,
      "El círculo no tiene lados rectos ni vértices, así que no es un polígono.", "Busca lados rectos."]
  ],
  cl: {
    c: [["tri", "DE 3 Y 4 LADOS", "🔺"], ["mas", "DE 5 LADOS O MÁS", "⬠"]],
    i: [["triángulo (3 lados)", "tri"], ["cuadrilátero (4 lados)", "tri"], ["rectángulo (4 lados)", "tri"], ["pentágono (5 lados)", "mas"], ["hexágono (6 lados)", "mas"], ["octógono (8 lados)", "mas"]]
  },
  em: [
    ["triángulo", "3 lados"],
    ["pentágono", "5 lados"],
    ["hexágono", "6 lados"],
    ["octógono", "8 lados"]
  ],
  or: ["Cuento los lados", "Cuento los vértices", "Comparo con los nombres conocidos", "Clasifico el polígono"],
  e: ["Escribe el nombre de un polígono de 6 lados y cuántos vértices tiene.", "Hexágono, 6 vértices", 5]
},
{
  n: "El dado y la moneda",
  o: "Identifico todos los resultados posibles en experimentos aleatorios simples.",
  d: "DBA 4º matemáticas: resuelvo problemas de probabilidad con experimentos aleatorios listando resultados posibles.",
  t: [
    ["No sé qué saldrá", "En un experimento aleatorio el resultado se desconoce antes de lanzar.", "🎲"],
    ["Todos los posibles", "Primero listo todo lo que puede pasar: en el dado son 1, 2, 3, 4, 5 y 6.", "📋"],
    ["Justo e igualitario", "En un dado bien hecho, cada cara tiene la misma oportunidad de salir.", "⚖️"]
  ],
  q: [
    ["Al lanzar un dado común, ¿cuántos resultados posibles hay?", ["5", "6", "7", "12"], 1,
      "El dado tiene 6 caras numeradas, así que hay 6 resultados posibles.", "Cuenta las caras."],
    ["Con una moneda, los resultados posibles son...", ["números del 1 al 6", "colores", "caras de personas", "cara o cruz"], 3,
      "Una moneda solo tiene dos caras: cara o cruz.", "Dos caras, dos resultados."],
    ["Si lanzo un dado, ¿cuál resultado es posible?", ["Que salga el 5", "Que salga el 7", "Que salga el 0", "Que salga el 9"], 0,
      "El 5 está entre las caras del dado: es un resultado posible.", "Está en el dado."],
    ["Un experimento aleatorio es aquel...", ["que siempre da el mismo resultado", "que se repite igual", "en el que no sé qué saldrá antes de hacerlo", "que no se puede repetir"], 2,
      "La incertidumbre antes de lanzar es lo que lo hace aleatorio.", "Piensa antes de lanzar."],
    ["Lanzo la moneda una vez. ¿Cuál es un resultado posible?", ["Salir cruz dos veces", "Salir cara y cruz a la vez", "Salir siempre cara", "Salir cara"], 3,
      "En un solo lanzamiento solo puede salir una opción: cara o cruz.", "Una sola tirada, un resultado."],
    ["Con un dado bien hecho, cada cara...", ["sale más veces que las demás", "tiene la misma probabilidad de salir", "nunca sale", "solo sale cuando es 6"], 1,
      "La equidad del dado hace que todas las caras sean igual de probables.", "Ninguna cara es la favorita."],
    ["¿Cuál es imposible al lanzar un dado?", ["Que salga el 3", "Que salga el 6", "Que salga el 10", "Que salga el 1"], 2,
      "El dado solo llega al 6: el 10 no está en ninguna cara.", "Mira el número máximo."],
    ["Para que el experimento sea justo conviene...", ["agitar bien el dado o la moneda", "lanzar muy suave siempre", "contar los resultados dos veces", "elegir el resultado antes"], 0,
      "Agitar bien evita que un resultado sea favorecido por el lanzamiento.", "Mezcla antes de lanzar."],
    ["Si lanzo la moneda 4 veces, ¿cuál registro es posible?", ["4 caras y 3 cruces", "6 caras", "0 resultados", "3 caras y 1 cruz"], 3,
      "En 4 lanzamientos caben 4 resultados: 3 caras más 1 cruz da 4.", "Suma los registros."],
    ["Los resultados posibles de un dado son...", ["1, 2, 3, 4, 5 y 6", "1, 2 y 3", "solo el 6", "todos los números mayores que 6"], 0,
      "Es la lista completa de caras: esos y solo esos pueden salir.", "Son las 6 caras."],
    ["Al tirar un dado, el resultado de cada lanzamiento...", ["depende de la suerte fija del jugador", "es aleatorio: no se sabe antes", "siempre es el mismo", "lo decide el que mira"], 1,
      "Cada lanzamiento es nuevo e independiente: por eso es aleatorio.", "Nadie lo puede decidir."],
    ["¿Cuál es un resultado posible al lanzar dos dados?", ["Que la suma dé 13 siempre", "Que la suma dé 7", "Que la suma dé 20", "Que no salga nada"], 1,
      "Con dos dados la suma va de 2 a 12; el 7 es perfectamente posible.", "El mínimo es 2 y el máximo 12."]
  ],
  cl: {
    c: [["pos", "RESULTADOS POSIBLES", "🎲"], ["imp", "RESULTADOS IMPOSIBLES", "⛔"]],
    i: [["Que salga el 5 en el dado", "pos"], ["Cara o cruz en la moneda", "pos"], ["Que salga el 1 en el dado", "pos"], ["Que salga el 10 en el dado", "imp"], ["Que salga el 0 en el dado", "imp"], ["Salir cara y cruz a la vez", "imp"]]
  },
  em: [
    ["dado", "6 resultados posibles"],
    ["moneda", "cara o cruz"],
    ["experimento aleatorio", "resultado desconocido antes de lanzar"]
  ],
  or: ["Pienso qué puedo hacer en el experimento", "Listo todos los resultados posibles", "Realizo el experimento", "Anoto qué resultado salió"],
  e: ["Lista tres resultados posibles al lanzar un dado.", "1, 2 y 3 (cualquiera del 1 al 6)", 5]
},
{
  n: "Repito el experimento",
  o: "Registro y comparo frecuencias de un experimento aleatorio repetido varias veces.",
  d: "DBA 4º matemáticas: resuelvo problemas de probabilidad mediante experimentos aleatorios con registro de resultados.",
  t: [
    ["Registro cada tirada", "Una tabla con marcas me permite contar cuántas veces salió cada resultado.", "📊"],
    ["Más intentos, más claridad", "Al repetir muchas veces, los resultados se parecen más a lo que se espera.", "🔁"],
    ["Comparo frecuencias", "Gana el resultado que salió más veces en mi serie, no el que yo esperaba.", "🔍"]
  ],
  q: [
    ["Lancé el dado 10 veces y anoté los resultados. ¿Qué obtengo?", ["Un número secreto", "Una operación", "Una tabla de frecuencias con cuántas veces salió cada número", "Un polígono"], 2,
      "Contar las repeticiones de cada resultado da una tabla de frecuencias.", "Cuenta cuántas veces salió cada uno."],
    ["Si el 6 salió cuatro veces y el 2 una vez, ¿cuál salió más?", ["6", "2", "Los dos igual", "Ninguno"], 0,
      "Cuatro veces es mayor que una: el 6 fue el más frecuente en esa serie.", "Compara las cantidades."],
    ["Repetir muchas veces el experimento...", ["lo hace imposible", "no cambia nada", "lo impide", "acerca los resultados a lo esperado"], 3,
      "Con más lanzamientos las frecuencias se estabilizan y el patrón se ve mejor.", "La práctica aclara el patrón."],
    ["Registrar los resultados es...", ["lanzar el dado", "anotar cada resultado", "comerse el dado", "romper la moneda"], 1,
      "Sin anotar no hay con qué comparar: el registro es la base del análisis.", "Anota cada tirada."],
    ["Lancé la moneda 20 veces: 12 caras y 8 cruces. ¿Qué se observa?", ["Salieron más caras en esta serie", "La moneda está rota", "Nunca saldrá cruz", "Salieron 20 caras"], 0,
      "En esta serie concreta hubo más caras; en otra podría ser distinto.", "Compara 12 con 8."],
    ["¿Para qué comparo los resultados?", ["Para romper el dado", "Para decidir quién gana siempre", "Para dejar de lanzar", "Para ver qué resultado fue más frecuente"], 3,
      "La comparación de frecuencias revela qué resultado apareció más en la serie.", "Ordena de mayor a menor."],
    ["En una serie corta, un número puede no salir...", ["porque el dado está mal", "aunque sea posible", "porque se equivocaron", "si se usa otra moneda"], 1,
      "Pocas tiradas pueden ocultar resultados posibles: por eso conviene repetir.", "Posible no significa seguro."],
    ["¿Cuál es la mejor forma de llevar el registro?", ["Sin anotar nada", "Un solo número al final", "Una tabla donde marco cada lanzamiento", "De memoria"], 2,
      "La tabla de marcas permite contar rápido y revisar después.", "Usa columnas y marcas."],
    ["Si en 30 lanzamientos el 5 salió 6 veces, ¿qué significa?", ["El 5 es imposible", "El 5 siempre sale", "El 5 salió una vez", "El 5 fue de los más frecuentes"], 3,
      "Seis de treinta es una frecuencia alta respecto a los otros números.", "Compara con 30."],
    ["Al comparar dos experimentos, debo...", ["cambiar las reglas", "usar el mismo número de lanzamientos", "lanzar con otra mano", "esconder los resultados"], 1,
      "Solo se comparan series de igual tamaño para que la comparación sea justa.", "Igual cantidad de tiradas."],
    ["El azar hace que...", ["los resultados sean siempre iguales", "haya una fórmula secreta", "los resultados varíen en cada serie", "se pueda predecir el dado"], 2,
      "Cada serie es distinta: esa variación es justamente el azar.", "Ninguna serie se repite igual."],
    ["Después de 50 lanzamientos, ¿cómo saco mi conclusión?", ["Comparando las frecuencias anotadas", "Adivinando", "Mirando el dado fijamente", "Tirándolo una vez más"], 0,
      "Las marcas de la tabla son la evidencia con la que se compara y se concluye.", "Mira tu tabla."]
  ],
  cl: {
    c: [["freq", "MÁS FRECUENTES", "📊"], ["poco", "MENOS FRECUENTES", "📉"]],
    i: [["El 6 salió 4 veces", "freq"], ["Las caras salieron 12 veces", "freq"], ["El 5 salió 6 de 30 veces", "freq"], ["El 2 salió 1 vez", "poco"], ["Las cruces salieron 8 veces", "poco"], ["Un número que nunca salió", "poco"]]
  },
  em: [
    ["registro", "tabla donde anoto los resultados"],
    ["frecuencia", "cuántas veces salió cada resultado"],
    ["serie", "varios lanzamientos seguidos"]
  ],
  or: ["Realizo el experimento varias veces", "Anoto cada resultado en una tabla", "Cuento cuántas veces salió cada uno", "Comparo las frecuencias"],
  e: ["Tras 10 lanzamientos del dado, escribe cómo registrarías los resultados.", "Tabla de dos columnas: número y marcas de conteo", 5]
}
];

/* ====== g4 / cnaturales ====== */
/* DBA 4º — cnaturales */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.cnaturales = [
{
  n: "Cadenas tróficas del río",
  o: "Armo cadenas tróficas explicando quién se alimenta de quién en un ecosistema.",
  d: "DBA 4º ciencias naturales: explico las cadenas tróficas desde los productores hasta los consumidores.",
  t: [
    ["Una cadena de comidas", "Una cadena trófica muestra quién se come a quién, desde las plantas hasta los depredadores.", "🔗"],
    ["Empieza por los productores", "Las plantas y algas fabrican su propio alimento con la luz del sol.", "🌿"],
    ["Eslabones conectados", "Si cambia un eslabón, los demás también se ven afectados.", "🧩"]
  ],
  q: [
    ["En una cadena trófica del río, ¿quién inicia casi siempre la cadena?", ["Las plantas acuáticas", "El pez grande", "La garza", "Los descomponedores"], 0,
      "Los productores hacen su propio alimento con la luz del sol: ellos abren la cadena.", "Piensa en quién fabrica su comida."],
    ["En «algas → pez pequeño → pez grande», ¿qué ocurre?", ["El pez pequeño come algas", "El pez grande come al pez pequeño", "Las algas comen al pez grande", "El pez grande come plantas del río"], 1,
      "En la cadena, el que está después se alimenta del anterior: el pez grande se come al pequeño.", "Sigue la flecha de la energía."],
    ["Una cadena trófica muestra...", ["los nombres de los ríos", "las partes del cuerpo", "quién se come a quién", "el clima de la selva"], 2,
      "Su propósito es mostrar las relaciones de alimentación entre los seres vivos.", "Es una lista de almuerzos."],
    ["En «hojas → gusano → ave», ¿qué papel cumple el gusano?", ["Productor", "Consumidor", "Descomponedor", "Simbionte"], 1,
      "El gusano no fabrica su alimento: come hojas, así que es consumidor.", "No hace fotosíntesis."],
    ["¿Quién se come los restos y devuelve nutrientes al suelo?", ["Los productores", "Los consumidores", "Los descomponedores", "Los depredadores"], 2,
      "Bacterias y hongos descomponen lo muerto y devuelven nutrientes a la tierra.", "Cierran el ciclo."],
    ["Si desaparecen los peces pequeños, ¿qué le pasa a la garza?", ["Nada en absoluto", "Le falta alimento", "Tiene más comida", "Se vuelve productora"], 1,
      "La garza depende de ese eslabón: sin peces pequeños, debe buscar otros alimentos.", "Un eslabón roto afecta al siguiente."],
    ["¿Cuál es una cadena trófica bien ordenada?", ["León → cebra → hierba", "Hierba → cebra → león", "Cebra → hierba → león", "Hierba → león → cebra"], 1,
      "Siempre empieza por el productora y sigue hacia quien se alimenta de él.", "Empieza por quien fabrica el alimento."],
    ["Las plantas en una cadena trófica son...", ["productores", "consumidores", "depredadores", "descomponedores"], 0,
      "Con la luz del sol producen su propio alimento y alimentan al resto de la cadena.", "Producen, no consumen."],
    ["El conejo come zanahoria y el zorro come al conejo. ¿Quién es el depredador?", ["El conejo", "El zorro", "La zanahoria", "Ninguno"], 1,
      "El depredador es quien caza y se come a otro animal; en este caso, el zorro.", "El que caza."],
    ["¿Qué le pasaría a la cadena si los insectos desaparecieran?", ["Las plantas crecerían más rápido", "Los pájaros tendrían más alimento", "Los pájaros perderían una fuente de alimento", "Nada cambiaría"], 2,
      "Quien se alimentaba de insectos quedaría sin esa parte de su dieta.", "Revisa quién come insectos."],
    ["En «maíz → gallina → persona», la gallina es...", ["consumidor", "productor", "descomponedor", "planta"], 0,
      "La gallina no fabrica su alimento: se come el maíz, así que consume.", "Come lo que produce otro."],
    ["¿Por qué las algas son el inicio de la cadena del río?", ["Porque son del agua", "Porque nadan rápido", "Porque son comestibles", "Porque producen su alimento con la luz"], 3,
      "Su capacidad de producir alimento con la luz las convierte en el primer eslabón.", "Fabrican su propia comida."]
  ],
  cl: {
    c: [["prod", "PRODUCTORES", "🌿"], ["cons", "CONSUMIDORES", "🐾"]],
    i: [["Plantas acuáticas", "prod"], ["Hierba", "prod"], ["Algas", "prod"], ["Pez pequeño", "cons"], ["Gusano", "cons"], ["Garza", "cons"]]
  },
  em: [
    ["algas → pez → garza", "cadena del río"],
    ["productor", "ser vivo que fabrica su alimento"],
    ["eslabón", "cada ser vivo que participa en la cadena"]
  ],
  or: ["Identifico quién es el productor", "Sigo quién se alimenta de él", "Completo la cadena hasta el final", "Verifico que vaya de lo comido a quien come"],
  e: ["Escribe una cadena trófica de tres eslabones de tu región.", "Hierba → conejo → gavilán", 5]
},
{
  n: "Redes que se enlazan",
  o: "Explico cómo las cadenas tróficas se cruzan formando redes tróficas.",
  d: "DBA 4º ciencias naturales: explico las cadenas tróficas y cómo se conectan entre sí en redes.",
  t: [
    ["Muchas cadenas juntas", "En la naturaleza rara vez existe una sola cadena: las cadenas se cruzan en redes.", "🕸️"],
    ["Uno come varios", "Cada animal suele tener varias presas y también varios depredadores.", "🧩"],
    ["Redes frágiles", "Si una especie desaparece, la red entera cambia de forma.", "⚠"]
  ],
  q: [
    ["En la naturaleza, ¿qué es más común: una sola cadena o una red?", ["Una red de cadenas: cada animal come varios seres vivos", "Una sola cadena cerrada", "Ninguna de las dos", "Cadenas de solo dos eslabones"], 0,
      "Los seres vivos se alimentan de varias fuentes, así que las cadenas se entrelazan.", "Piensa en qué come tu perro."],
    ["Una red trófica se forma porque...", ["un animal come varios seres vivos", "todos comen lo mismo", "los animales no comen", "las plantas comen animales"], 1,
      "La variedad de alimentos hace que muchas cadenas se conecten entre sí.", "Cada uno come distinto."],
    ["Un animal que aparece en dos cadenas al mismo tiempo...", ["desaparece", "es el inicio de todo", "se conecta con ambas cadenas", "no come"], 2,
      "Esa especie es el punto donde dos cadenas se cruzan y forman parte de la red.", "Está en dos cadenas a la vez."],
    ["En el pantano, la rata come frutos y el ave la caza. ¿Cuántas relaciones hay?", ["Ninguna", "Solo la de los frutos", "Solo la del ave", "Dos: rata con frutos y ave con rata"], 3,
      "Son dos relaciones de alimentación que se enlazan en la rata.", "Cuenta cada flecha."],
    ["Si una especie desaparece de la red...", ["la red se rompe o cambia", "no pasa nada", "todos mueren siempre", "las plantas desaparecen todas"], 1,
      "La red se reorganiza: otros seres pierden alimento o depredadores.", "Cada eslabón sostiene a otros."],
    ["La garza come peces pequeños y también ranas. Esto demuestra que...", ["un depredador puede tener varias presas", "la garza es una planta", "las ranas no sirven", "los peces no existen"], 0,
      "Las conexiones múltiples son lo que hace una red en vez de una sola línea.", "Una presa, otra presa."],
    ["Las redes tróficas se dibujan con...", ["flechas que van de quien es comida a quien come", "líneas de colores sin sentido", "números de teléfono", "letras del alfabeto"], 2,
      "La flecha indica el paso de la energía: de lo que se come a quien come.", "Apunta al que come."],
    ["¿Quién se beneficia cuando hay muchas plantas en un ecosistema?", ["Solo los descomponedores", "Nadie", "Solo el agua", "Todos los niveles que dependen de ellas"], 3,
      "De las plantas dependen consumidores primarios, secundarios y más.", "Mira hacia arriba en la red."],
    ["En una red trófica, los productores están...", ["al final", "en los dos extremos", "al principio", "fuera de la red"], 2,
      "Todo arranca por quienes fabrican su propio alimento.", "Son la base."],
    ["¿Por qué hay más plantas que depredadores en un ecosistema?", ["Porque los depredadores no comen", "Porque en cada salto se pierde energía y se necesita mucho alimento del nivel anterior", "Porque las plantas no sirven", "Porque hay poca luz"], 1,
      "En cada eslabón se pierde parte de la energía: por eso abajo hay muchos más individuos.", "Piensa en la pirámide."],
    ["Si aumentan mucho los conejos en el bosque...", ["pueden comer tanta hierba que afecte a otros animales", "las hierbas aumentan", "el cielo cambia", "los lobos se vuelven plantas"], 0,
      "Un aumento en un eslabón presiona al nivel anterior y afecta a toda la red.", "Demasiados comelones."],
    ["Una red trófica saludable...", ["tiene un solo alimento", "no tiene plantas", "depende de una sola especie", "tiene muchas conexiones entre sus especies"], 3,
      "Cuando hay muchas relaciones, la red es más estable ante los cambios.", "Más lazos, más estabilidad."]
  ],
  cl: {
    c: [["una", "RELACIONES DE UNA CADENA", "1️⃣"], ["var", "ESPECIES CON VARIAS PRESAS", "🧩"]],
    i: [["Rata → fruto", "una"], ["Ave → rata", "una"], ["Alga → pez", "una"], ["Garza come peces y ranas", "var"], ["Zorro come ratones y frutos", "var"], ["Gavilán come aves y ratones", "var"]]
  },
  em: [
    ["red trófica", "cadenas tróficas que se cruzan"],
    ["eslabón", "cada ser vivo de la cadena"],
    ["flecha", "indica quién se come a quién"]
  ],
  or: ["Anoto los seres vivos del lugar", "Escribo quién come a quién", "Cruzo las cadenas que comparten especies", "Reviso que todas empiecen por productores"]
},
{
  n: "Productores y consumidores",
  o: "Diferencio productores, consumidores y descomponedores dentro de las cadenas tróficas.",
  d: "DBA 4º ciencias naturales: explico las cadenas tróficas identificando cada nivel trófico.",
  t: [
    ["Producen su alimento", "Plantas y algas usan la luz del sol: son el primer nivel de la cadena.", "🌱"],
    ["Consumen lo ajeno", "Los animales comen plantas u otros animales para obtener energía.", "🍖"],
    ["Descomponen y reciclan", "Bacterias y hongos devuelven al suelo los nutrientes de lo que muere.", "🍂"]
  ],
  q: [
    ["¿Qué son los productores?", ["Animales carnívoros", "Seres vivos que fabrican su alimento con la luz", "Los descomponedores", "Los depredadores"], 1,
      "Producen su propio alimento a partir de la luz del sol y el agua.", "Hacen fotosíntesis."],
    ["¿Cuál de estos es un consumidor?", ["El musgo", "El helecho", "La bacteria del suelo", "El jaguar que caza"], 3,
      "El jaguar obtiene su alimento cazando: es un consumidor.", "No fabrica su comida."],
    ["Los descomponedores...", ["descomponen restos y devuelven nutrientes al suelo", "hacen fotosíntesis", "nunca comen", "viven solo en el agua"], 0,
      "Reciclan la materia de los seres muertos y la devuelven a la tierra.", "Cierran el ciclo de la materia."],
    ["En «algas → pez → garza», las algas son...", ["consumidor", "depredador", "productor", "descomponedor"], 2,
      "Fabrican su alimento con la luz: son el productor de esa cadena.", "Empiezan la cadena."],
    ["Un hongo que crece sobre una hoja muerta actúa como...", ["productor", "consumidor de luz", "depredador de árboles", "descomponedor"], 3,
      "Se alimenta de materia en descomposición y la devuelve al suelo en partes simples.", "Descompone lo muerto."],
    ["Las plantas son productoras porque...", ["comen insectos", "usan la luz del sol para fabricar su alimento", "viven mucho tiempo", "son verdes"], 1,
      "Esa es su gran capacidad: transformar luz en alimento para casi todos los demás.", "Ese es su superpoder."],
    ["En «hierba → vaca → persona», ¿quién ocupa el último lugar?", ["La hierba", "La vaca", "La persona", "Ninguno"], 2,
      "La persona es quien cierra esa cadena como consumidora.", "Es quien come al final."],
    ["Un león es...", ["consumidor", "productor", "descomponedor", "planta"], 0,
      "Obtiene su alimento cazando otros animales: es consumidor.", "Caza para comer."],
    ["Los descomponedores más conocidos son...", ["las águilas", "los tiburones", "los lobos", "bacterias y hongos"], 3,
      "Son microscópicos o pequeños y trabajan sobre restos de plantas y animales.", "Viven en el suelo."],
    ["Si no hubiera descomponedores, los restos...", ["se acumularían y los nutrientes no volverían al suelo", "desaparecerían muy rápido", "se convertirían en plantas", "los comería el sol"], 0,
      "Sin ellos, los nutrientes quedarían atrapados en la materia muerta.", "El suelo se quedaría sin reciclaje."],
    ["¿Cuál es la clasificación correcta en orden?", ["Descomponedor → productor → consumidor", "Productor → consumidor → descomponedor", "Consumidor → productor → descomponedor", "Productor → descomponedor → consumidor"], 1,
      "Primero quien fabrica el alimento, luego quien lo consume y al final quien recicla los restos.", "Del fabricante al reciclador."],
    ["Una lombriz que se come hojas muertas es...", ["productora", "una planta", "descomponedora", "depredadora"], 2,
      "Al descomponer restos de plantas devuelve nutrientes al suelo.", "Trabaja sobre lo muerto."]
  ],
  cl: {
    c: [["prod", "PRODUCTORES", "🌿"], ["res", "CONSUMIDORES Y DESCOMPONEDORES", "🍂"]],
    i: [["Plantas con luz solar", "prod"], ["Algas", "prod"], ["Musgo", "prod"], ["Jaguar", "res"], ["Bacterias del suelo", "res"], ["Hongos", "res"]]
  },
  em: [
    ["productor", "fabrica su propio alimento"],
    ["consumidor", "obtiene alimento de otro ser vivo"],
    ["descomponedor", "descompone restos y devuelve nutrientes"]
  ],
  or: ["Clasifico quién fabrica su alimento", "Clasifico quién se alimenta de otros", "Ubico quién descompone los restos", "Ordeno la cadena por niveles"],
  e: ["Clasifica estos seres: planta, lombriz y águila.", "Planta: productora; lombriz: descomponedora; águila: consumidora", 5]
},
{
  n: "Masa: cuánta materia",
  o: "Diferencio la masa como la cantidad de materia de un objeto y la mido con instrumentos.",
  d: "DBA 4º ciencias naturales: diferencio masa, peso y volumen describiendo cómo se mide la masa.",
  t: [
    ["Materia condensada", "La masa es toda la materia que tiene un objeto: la suma de sus partículas.", "⚖️"],
    ["No cambia de lugar", "Un objeto tiene la misma masa en la Tierra, en la Luna o en el mar.", "🌍"],
    ["Se mide con balanza", "Se expresa en gramos y kilogramos con una balanza.", "📊"]
  ],
  q: [
    ["La masa mide...", ["cuánto ocupa un objeto", "la fuerza con la que cae", "cuánta materia tiene un objeto", "el color del objeto"], 2,
      "Es la cantidad de materia que lo conforma, sin importar dónde esté.", "Piensa en cuánta materia hay adentro."],
    ["¿En qué unidades se mide la masa?", ["Kilogramos y gramos", "Metros", "Litros", "Newton"], 0,
      "El gramo y el kilogramo son las unidades habituales de masa.", "Las usamos al pesar comida."],
    ["Una bolsa de arroz de 1 kg tiene...", ["menos masa que una de 100 g", "la misma masa que una de 2 kg", "menos masa que una de 500 g", "más masa que una de 500 g"], 3,
      "Un kilogramo es 1000 gramos: supera a los 500 gramos.", "Compara 1000 con 500."],
    ["La masa de un objeto...", ["cambia según el lugar donde esté", "es la misma en la Tierra y en la Luna", "es menor en la Luna", "depende de su color"], 1,
      "La materia no aparece ni desaparece al viajar: la masa se conserva.", "El lugar no la modifica."],
    ["Para medir la masa se usa...", ["una balanza", "una cinta métrica", "un termómetro", "un reloj"], 0,
      "La balanza compara masas y da el valor en gramos o kilogramos.", "Tiene platillos."],
    ["¿Cuál de estos objetos tiene más masa?", ["Una pluma", "Una canica", "Un globo inflado", "Un ladrillo"], 3,
      "El ladrillo tiene mucha más materia concentrada que los otros.", "Piensa en cuánta materia contiene."],
    ["500 gramos de maíz equivalen a...", ["5 kg", "0,5 kg", "50 kg", "0,05 kg"], 1,
      "1000 gramos es 1 kg, así que 500 gramos es la mitad: 0,5 kg.", "La mitad de mil gramos."],
    ["Dos manzanas del mismo tamaño...", ["tienen masas distintas siempre", "tienen masa distinta según el color", "tienen la misma masa", "no tienen masa"], 2,
      "Si tienen la misma cantidad de materia, su masa es igual.", "Misma materia, misma masa."],
    ["La masa total se conserva aunque...", ["el objeto se pinte de otro color", "cambie de lugar en la sala", "se le agregue un número", "el objeto se parta en dos"], 3,
      "Al partirlo, la suma de las dos partes es igual a la masa original: la materia no se pierde.", "Suma las dos mitades."],
    ["En la Luna, un martillo de 2 kg tiene...", ["menos materia", "la misma masa de 2 kg", "más masa", "masa infinita"], 1,
      "Su masa no cambia: lo que cambia allí es el peso, porque la gravedad es menor.", "La materia viaja con él."],
    ["¿Qué instrumento sirve para comparar masas?", ["El compás", "El termómetro", "La balanza de platillos", "El prisma"], 2,
      "La balanza de platillos equilibra las masas al colocar los objetos.", "Tiene dos platillos."],
    ["La masa de un lápiz nuevo y de uno gastado...", ["es mayor la del lápiz nuevo", "es siempre igual", "es mayor la del gastado", "no se puede comparar"], 0,
      "Al escribir el lápiz pierde materia, así que el nuevo tiene más masa.", "El gastado perdió material."]
  ],
  cl: {
    c: [["mas", "TIENE MASA", "⚖️"], ["nom", "NO ES UNA MASA", "📏"]],
    i: [["Una roca", "mas"], ["Un ladrillo", "mas"], ["Una bolsa de arroz", "mas"], ["El color de la roca", "nom"], ["La forma del objeto", "nom"], ["El lugar donde está", "nom"]]
  },
  em: [
    ["masa", "cuánta materia tiene un objeto"],
    ["kilogramo", "unidad de masa grande"],
    ["balanza", "instrumento para medir masa"]
  ],
  or: ["Coloco el objeto en la balanza", "Espero que se equilibre", "Leo la marca en gramos o kilogramos", "Comparo con otro objeto"],
  e: ["Escribe dos unidades de masa y el instrumento para medirla.", "Kilogramo y gramo; la balanza", 5]
},
{
  n: "Peso: la gravedad tira",
  o: "Explico el peso como fuerza de gravedad y lo diferencio de la masa.",
  d: "DBA 4º ciencias naturales: diferencio masa, peso y volumen describiendo qué es y cómo se mide el peso.",
  t: [
    ["Una fuerza, no materia", "El peso es la fuerza con que la gravedad atrae hacia abajo un objeto.", "⛰️"],
    ["Cambia con la gravedad", "En la Luna el mismo objeto pesa menos porque la gravedad allí es más débil.", "🌙"],
    ["Se mide en newtons", "El dinamómetro es el instrumento que mide el peso en newtons.", "📏"]
  ],
  q: [
    ["El peso es...", ["la materia de un objeto", "el tamaño de un objeto", "la forma de un objeto", "la fuerza con que la gravedad atrae el objeto"], 3,
      "A diferencia de la masa, el peso es una fuerza que depende de la gravedad.", "Es una fuerza hacia abajo."],
    ["¿En qué unidad se mide el peso?", ["Kilogramos", "Metros", "Newton", "Litros"], 2,
      "El newton es la unidad de fuerza, y el peso es una fuerza.", "Piensa en fuerza."],
    ["En la Luna, una roca de 10 kg...", ["pesa menos que en la Tierra", "pesa igual que en la Tierra", "pesa más que en la Tierra", "no tiene masa"], 0,
      "La gravedad lunar atrae con menos fuerza, así que el peso disminuye.", "Allí la gravedad es más débil."],
    ["Una persona pesa más...", ["en la cima de un monte", "cerca del nivel del mar", "igual en todo lugar", "en el espacio"], 1,
      "La gravedad es ligeramente mayor cerca del nivel del mar.", "Más cerca del centro de la Tierra."],
    ["Para medir el peso se usa...", ["cinta métrica", "termómetro", "dinamómetro", "reloj de arena"], 2,
      "El dinamómetro tiene un resorte que marca la fuerza de peso.", "Tiene un resorte."],
    ["El peso de un objeto cambia porque...", ["cambia su materia", "se rompe en pedazos", "se pinta de otro color", "cambia la gravedad que lo atrae"], 3,
      "Es la gravedad la que hace variar el peso: menos gravedad, menos peso.", "Depende de dónde esté."],
    ["En el espacio, casi no hay peso porque...", ["no hay gravedad que atraiga con fuerza", "los objetos desaparecen", "no hay objetos", "los objetos pierden masa"], 0,
      "Sin una gravedad fuerte, la balanza de tu cuerpo no marcaría nada.", "Sin gravedad, sin peso."],
    ["Una mochila llena pesa más que vacía porque...", ["se hizo más grande", "tiene más masa y la gravedad la atrae con más fuerza", "cambió de color", "el aire la empuja"], 1,
      "El peso crece cuando hay más masa atraída por la misma gravedad.", "Más materia, más atracción."],
    ["El dinamómetro mide...", ["la longitud", "el peso", "la temperatura", "el tiempo"], 1,
      "Suelta el objeto y el resorte marca la fuerza de su peso en newtons.", "Mide fuerza."],
    ["Una bolsa de arena pesa más que una de algodón del mismo tamaño porque...", ["tiene más masa y la gravedad la atrae con más fuerza", "es de mejor color", "está más lejos", "el algodón flota"], 0,
      "Más materia concentrada significa más peso bajo la misma gravedad.", "Piensa en cuánta materia lleva."],
    ["¿Cuál afirmación sobre masa y peso es correcta?", ["Peso y masa son siempre el mismo número", "La masa cambia con la gravedad", "El peso se mide en gramos", "La masa es la materia; el peso es la fuerza de la gravedad"], 3,
      "Esa es la diferencia clave: una es materia, el otro es una fuerza.", "Materia contra fuerza."],
    ["Al pesar una pelota en la Tierra y en la Luna...", ["el peso es mayor en la Luna", "no se puede pesar en ningún lugar", "el peso es mayor en la Tierra", "los dos pesos son iguales"], 2,
      "La Tierra tiene más gravedad, así que allí el peso es mayor.", "Más gravedad, más peso."]
  ],
  cl: {
    c: [["ti", "PESO EN LA TIERRA", "🌍"], ["ot", "PESO EN OTRO LUGAR", "🌙"]],
    i: [["Un ladrillo pesa 2 kg en la Tierra", "ti"], ["La mochila pesa más llena", "ti"], ["Se mide con el dinamómetro", "ti"], ["En la Luna pesa menos", "ot"], ["En el espacio casi no hay peso", "ot"], ["Cambia con la gravedad", "ot"]]
  },
  em: [
    ["peso", "fuerza de la gravedad sobre el objeto"],
    ["newton", "unidad en que se mide el peso"],
    ["dinamómetro", "instrumento para medir el peso"]
  ],
  or: ["Coloco el objeto en el dinamómetro", "Espero que el resorte se estire", "Leo la marca en newtons", "Comparo el peso en distintos lugares"]
},
{
  n: "Volumen: cuánto ocupa",
  o: "Determino el volumen de sólidos y líquidos y lo expreso con sus unidades.",
  d: "DBA 4º ciencias naturales: diferencio masa, peso y volumen describiendo cómo se mide lo que ocupa un cuerpo.",
  t: [
    ["Espacio tomado", "El volumen es el espacio que ocupa un cuerpo sólido o un líquido.", "📦"],
    ["Litros y mililitros", "Los líquidos se miden en litros y mililitros con una probeta.", "🧃"],
    ["El agua desplaza", "Al sumergir un objeto, el agua sube porque el objeto ocupa volumen.", "🌊"]
  ],
  q: [
    ["El volumen mide...", ["cuánto ocupa un objeto o un líquido", "cuánto pesa un objeto", "de qué color es", "a qué temperatura está"], 0,
      "Es la cantidad de espacio que toma el cuerpo, no su masa.", "Piensa en cuánto lugar necesita."],
    ["¿En qué unidad se mide el volumen de un líquido?", ["Kilogramos", "Litros y mililitros", "Metros", "Newton"], 1,
      "El litro y el mililitro son las unidades habituales de los líquidos.", "Las verás en los envases."],
    ["¿Cuántos mililitros hay en un litro?", ["10", "100", "1000", "500"], 2,
      "Un litro equivale exactamente a 1000 mililitros.", "Mil mililitros."],
    ["Una taza de leche tiene aproximadamente...", ["1 litro", "10 litros", "1 mililitro", "250 mililitros"], 3,
      "Una taza común ronda los 250 mililitros de líquido.", "Es la cuarta parte de un litro."],
    ["Si pongo una piedra en un recipiente con agua, el nivel del agua...", ["baja", "se mantiene igual", "sube", "desaparece"], 2,
      "La piedra ocupa espacio y desplaza el agua hacia arriba: eso es el volumen.", "El agua tiene que hacerle lugar."],
    ["Para medir el volumen de un líquido sirve...", ["una balanza", "una probeta", "un prisma", "un imán"], 1,
      "La probeta tiene marcas de mililitros que permiten leer el volumen.", "Es un cilindro graduado."],
    ["500 ml + 500 ml son...", ["1000 ml", "50 ml", "5 ml", "1 litro"], 3,
      "Suman 1000 mililitros, que es exactamente un litro.", "1000 mililitros = 1 litro."],
    ["Un cubo de 1 cm de lado tiene un volumen de...", ["1 centímetro cúbico", "1 litro", "1 kilogramo", "1 metro"], 0,
      "Se mide multiplicando largo por ancho por alto: 1×1×1 = 1 cm³.", "Usa las tres dimensiones."],
    ["¿Cuál de estos objetos ocupa más volumen?", ["Una cucharita", "Una olla grande", "Un grano de arroz", "Una canica"], 1,
      "La olla grande necesita mucho más espacio que los demás.", "Compara tamaños reales."],
    ["El volumen de un cuerpo regular se calcula...", ["midiendo su color", "contando sus letras", "midiendo sus dimensiones", "pesándolo"], 2,
      "Con largo, ancho y alto se calcula el espacio que ocupa.", "Mide sus tres medidas."],
    ["Dos vasos iguales llenos al ras...", ["tienen el mismo volumen", "tienen distinto volumen", "el de vidrio ocupa más", "el de agua ocupa menos"], 0,
      "Mismo recipiente al mismo nivel significa igual volumen.", "Igual recipiente, igual espacio."],
    ["Un litro de leche repartido en cuatro vasos de 250 ml...", ["no alcanza para los cuatro", "queda de más leche", "queda leche sin servir", "alcanza exactamente para los cuatro"], 3,
      "4×250 = 1000 ml, o sea un litro completo: alcanza para los cuatro.", "Multiplica 250 por 4."]
  ],
  cl: {
    c: [["ocupa", "OCUPA ESPACIO", "📦"], ["vol", "UNIDADES DE VOLUMEN", "🧃"]],
    i: [["Una olla grande", "ocupa"], ["Una piedra en el agua", "ocupa"], ["Un cubo de 1 cm³", "ocupa"], ["Litro", "vol"], ["Mililitro", "vol"], ["Centímetro cúbico", "vol"]]
  },
  em: [
    ["volumen", "cuánto ocupa un cuerpo"],
    ["litro", "mil mililitros"],
    ["probeta", "instrumento para medir líquidos"]
  ],
  or: ["Elijo la unidad adecuada", "Mido el líquido con la probeta o el recipiente", "Anoto el valor con su unidad", "Comparo con otro volumen"],
  e: ["Escribe cuántos mililitros tiene 2 litros.", "2000 mililitros", 5]
},
{
  n: "Me nutro y respiro",
  o: "Describo las funciones de nutrición y respiración en los seres vivos.",
  d: "DBA 4º ciencias naturales: describo las funciones vitales de los seres vivos, empezando por nutrición y respiración.",
  t: [
    ["Comer para vivir", "La nutrición obtiene de los alimentos la materia y la energía que el cuerpo necesita.", "🍎"],
    ["Entrar y salir aire", "La respiración toma oxígeno y libera dióxido de carbono en cada respiración.", "🌬️"],
    ["Todo el día", "Ambas funciones trabajan sin descanso, incluso mientras duermes.", "⏱"]
  ],
  q: [
    ["La función de nutrición cumple el propósito de...", ["obtener materia y energía para vivir", "dormir de noche", "reproducirse", "moverse más rápido"], 0,
      "Los alimentos aportan los nutrientes con los que el cuerpo se mantiene vivo.", "Piensa para qué comemos."],
    ["¿Qué respiran los animales terrestres?", ["Dióxido de carbono", "Oxígeno", "Nitrógeno puro", "Humo"], 1,
      "Inhalan oxígeno, que sus células necesitan para funcionar.", "El aire que inhalamos."],
    ["Las plantas durante el día...", ["no intercambian gases", "absorben solo agua", "toman dióxido de carbono y liberan oxígeno", "respiran igual que los humanos"], 2,
      "En la fotosíntesis absorben dióxido de carbono y devuelven oxígeno al aire.", "Nos regalan oxígeno."],
    ["¿Cuál de estos SÍ es una función vital?", ["Ver televisión", "Jugar fútbol", "Comprar en el mercado", "Respirar"], 3,
      "La respiración es indispensable para vivir: es una función vital.", "No puedes dejar de hacerla."],
    ["Los nutrientes llegan a las células a través de...", ["los ojos", "la digestión y la sangre", "los pies", "la ropa"], 1,
      "Se digieren, se absorben y viajan por la sangre hasta cada célula.", "Un viaje por el cuerpo."],
    ["El dióxido de carbono es un desecho que...", ["expulsamos al respirar", "el cuerpo necesita guardar", "nos nutre", "hace crecer los huesos"], 0,
      "Es el gas de desecho que sale en la exhalación.", "Sale con el aire que sueltas."],
    ["Después de correr, respiramos más rápido porque...", ["los pulmones quieren descansar", "el cuerpo pide oxígeno extra para las células", "el aire se acabó en el salón", "los pulmones se enfrían"], 1,
      "Al correr se gasta más energía y las células necesitan más oxígeno.", "Más esfuerzo, más aire."],
    ["Para nutrirnos necesitamos...", ["aire y nada más", "solo agua", "descanso eterno", "alimentos que aporten nutrientes"], 3,
      "Sin alimentos no hay materia ni energía para el cuerpo.", "Los alimentos son combustible."],
    ["Comer, digerir y absorber nutrientes hace parte de...", ["la función de relación", "la reproducción", "la función de nutrición", "la función de locomoción"], 2,
      "Ese es el recorrido completo de la nutrición.", "Del plato a las células."],
    ["Las células necesitan oxígeno para...", ["guardar silencio", "obtener energía de los alimentos", "cambiar de color", "dormir mejor"], 1,
      "Con el oxígeno extraen la energía de los nutrientes.", "El oxígeno enciende la energía."],
    ["Al respirar, los pulmones...", ["toman oxígeno y sacan dióxido de carbono", "toman comida", "fabrican nutrientes", "guardan agua"], 0,
      "Ese intercambio de gases es el trabajo principal de los pulmones.", "Entra uno, sale otro."],
    ["¿Por qué es vital respirar todo el tiempo?", ["Porque el aire llena los pulmones nada más", "Porque el oxígeno es opcional", "Porque sin aire no hay sonido", "Porque las células necesitan oxígeno continuamente para vivir"], 3,
      "Las células no pueden almacenar oxígeno: lo piden en cada instante.", "Sin descanso para las células."]
  ],
  cl: {
    c: [["nut", "NUTRICIÓN Y RESPIRACIÓN", "🌬️"], ["otro", "NO ES FUNCIÓN VITAL", "🚫"]],
    i: [["Comer y digerir", "nut"], ["Intercambiar oxígeno", "nut"], ["Obtener nutrientes de los alimentos", "nut"], ["Ver televisión", "otro"], ["Jugar al fútbol", "otro"], ["Comprar en el mercado", "otro"]]
  },
  em: [
    ["nutrición", "obtener materia y energía de los alimentos"],
    ["respiración", "intercambio de oxígeno y dióxido de carbono"],
    ["oxígeno", "gas que las células necesitan para funcionar"]
  ],
  or: ["Ingiere los alimentos", "Los digiere y absorbe los nutrientes", "Lleva nutrientes y oxígeno a las células", "Elimina los desechos del cuerpo"],
  e: ["Escribe dos acciones de nutrición y una de respiración.", "Comer y digerir; inhalar y exhalar", 5]
},
{
  n: "Me relaciono con el entorno",
  o: "Explico la función de relación describiendo sentidos, estímulos y respuestas.",
  d: "DBA 4º ciencias naturales: describo las funciones vitales de los seres vivos explicando cómo se relacionan con su ambiente.",
  t: [
    ["A través de los sentidos", "Vista, oído, olfato, gusto y tacto reciben información del ambiente.", "👃"],
    ["Estímulo y respuesta", "Ante un sonido, un calor o una luz, el cuerpo responde rápido.", "⚡"],
    ["Vivir y adaptarse", "Reaccionar al entorno ayuda a sobrevivir y a buscar lo que se necesita.", "🧭"]
  ],
  q: [
    ["¿Cuál de estos nos ayuda a percibir el mundo?", ["Los sentidos", "Las uñas", "Los huesos", "El cabello"], 0,
      "Los cinco sentidos son las ventanas del cuerpo hacia lo que nos rodea.", "Son cinco y trabajan juntos."],
    ["Cuando siento frío y me abrigo, estoy...", ["durmiendo", "reproducido", "nutrido", "respondiendo a un estímulo"], 3,
      "El frío fue el estímulo y abrigarse es la respuesta del cuerpo.", "El frío disparó la acción."],
    ["La irritabilidad en los seres vivos es...", ["la capacidad de responder ante estímulos", "estar enojado todo el tiempo", "no poder dormir", "perder la vista"], 0,
      "No tiene que ver con mal humor: es reaccionar ante lo que pasa afuera.", "Es reaccionar, no enojarse."],
    ["¿Cuál de estos es un estímulo?", ["Un libro cerrado", "Un ser vivo", "El sonido de una campana", "Una mesa"], 2,
      "El estímulo es aquello que despierta una respuesta: aquí, el sonido.", "Despierta una reacción."],
    ["Las plantas giran hacia la luz porque...", ["tienen ojos", "saben bailar", "miran hacia los costados", "responden a un estímulo de luz"], 3,
      "Aunque no tienen sentidos, reaccionan a la luz del sol.", "Reaccionan sin ojos."],
    ["¿Qué sentido usas para oler el sancocho?", ["El oído", "El olfato", "El tacto", "La vista"], 1,
      "El olfato percibe los olores que suben de la olla.", "Se huele con la nariz."],
    ["Si tocas algo caliente y retiras la mano, ¿qué función se activa?", ["Nutrición", "Reproducción", "Relación", "Digestión"], 2,
      "Percibir el calor y reaccionar es la función de relación en acción.", "Sentir y reaccionar."],
    ["¿Qué ayuda a mantener el equilibrio al caminar?", ["El oído interno y los sentidos del cuerpo", "El gusto", "El olfato", "La vista solamente"], 0,
      "El oído interno informa de la posición de la cabeza y el cuerpo.", "Sin él nos caeríamos seguido."],
    ["Cuando escuchamos el timbre y salimos del salón...", ["estamos respirando más rápido", "estamos comiendo", "estamos creciendo", "respondemos a un estímulo sonoro"], 3,
      "El sonido es el estímulo y salir es la respuesta aprendida.", "Oír y actuar."],
    ["Un pescado que huye al ver una sombra...", ["responde a un estímulo visual", "está reproduciéndose", "está haciendo digestión", "no hace nada"], 0,
      "La sombra es información visual que el cuerpo traduce en respuesta.", "Vio y reaccionó."],
    ["Los seres vivos se relacionan con su ambiente para...", ["vivir y adaptarse", "perder energía", "dejar de respirar", "volverse piedras"], 1,
      "Reaccionar al entorno permite buscar alimento, agua y seguridad.", "Es cuestión de sobrevivir."],
    ["¿Cuál es una respuesta ante el dolor?", ["Ignorarlo siempre", "Dormir ocho horas", "Retirar la parte afectada y llorar", "Comer más rápido"], 2,
      "Alejarse de lo que daña y avisar con el llanto son respuestas de protección.", "El cuerpo se protege."]
  ],
  cl: {
    c: [["sen", "SENTIDOS", "👁️"], ["resp", "RESPUESTAS ANTE ESTÍMULOS", "⚡"]],
    i: [["Oler el sancocho", "sen"], ["Escuchar el timbre", "sen"], ["Tocar algo caliente", "sen"], ["Retirar la mano", "resp"], ["Girar hacia la luz", "resp"], ["Huir de la sombra", "resp"]]
  },
  em: [
    ["estímulo", "lo que provoca una respuesta"],
    ["irritabilidad", "capacidad de responder ante estímulos"],
    ["sentidos", "ventanas del cuerpo hacia el entorno"]
  ],
  or: ["Percibo un estímulo con los sentidos", "Lo registro en el cuerpo", "Genero una respuesta", "Ajusto mi acción al ambiente"],
  e: ["Escribe un estímulo y la respuesta que produce en ti.", "Al oír el timbre, salgo del salón", 5]
},
{
  n: "Me reproduzco y crezco",
  o: "Describo las funciones de reproducción y crecimiento con ejemplos de plantas y animales.",
  d: "DBA 4º ciencias naturales: describo las funciones vitales de los seres vivos explicando crecimiento y reproducción.",
  t: [
    ["Crecer es cambiar", "Las células se dividen y el cuerpo aumenta de tamaño y de peso.", "🌱"],
    ["Continuar la especie", "La reproducción permite que los seres vivos tengan descendencia.", "🥚"],
    ["Ciclo de vida", "Nacer, crecer, madurar y reproducirse son etapas de toda especie.", "🔄"]
  ],
  q: [
    ["La función de reproducción permite...", ["comer más rápido", "dormir mejor", "que la especie continúe", "correr más"], 2,
      "Sin reproducción, cada especie terminaría con los individuos que ya existen.", "Piensa en el futuro de la especie."],
    ["Los seres vivos crecen porque sus células...", ["se dividen y aumentan de número", "desaparecen por completo", "se congelan", "cambian de color"], 0,
      "La división celular genera más tejidos y el cuerpo aumenta de tamaño.", "Más células, más tamaño."],
    ["¿Cuál es un ejemplo de reproducción en animales?", ["La fotosíntesis", "El metabolismo", "La digestión", "La puesta de huevos"], 3,
      "Poner huevos es una forma de dejar descendencia: reproducción.", "Sale una nueva vida."],
    ["Las plantas se reproducen...", ["solo cuando su dueño las riega", "por semillas, esquejes o flores", "comiendo tierra", "cambiando de clima"], 1,
      "Tienen varias estrategias: semillas, esquejes y floración son algunas.", "Busca las semillas."],
    ["Después de nacer, un cachorro...", ["crece y se desarrolla", "no cambia nunca", "pierde todas sus células", "se convierte en planta"], 0,
      "Pasa de cría a adulto gracias al crecimiento.", "De pequeño a grande."],
    ["Un ser vivo maduro es aquel que...", ["es muy pequeño", "no respira", "no come", "puede reproducirse"], 3,
      "La madurez marca el momento en que puede dejar descendencia.", "Ya está listo para la siguiente generación."],
    ["El ciclo de vida de una planta suele empezar...", ["con una flor cortada", "con una semilla", "con una fruta ya comida", "con la raíz de otro árbol"], 1,
      "De la semilla nace la planta que luego florecerá y dará nuevas semillas.", "Todo empieza en la semilla."],
    ["¿Por qué necesitan reproducirse los seres vivos?", ["Para llenar el espacio", "Para dormir más", "Para que la especie continúe", "Para comer mejor"], 2,
      "Es la manera de asegurar que haya individuos nuevos en el futuro.", "La especie no debe terminarse."],
    ["El crecimiento implica...", ["perder materia siempre", "quedar igual toda la vida", "no cambiar de tamaño", "aumento de tamaño y número de células"], 3,
      "Eso es crecer: más células y más tamaño con el tiempo.", "Suma de células."],
    ["Una mariposa antes de volar pasa por...", ["una sola etapa sin cambios", "etapas de huevo, larva, pupa y adulto", "etapa de semilla", "etapa de raíz"], 1,
      "Su metamorfosis es un ejemplo claro de etapas de desarrollo.", "Cambia de forma en cada etapa."],
    ["Las aves ponen huevos porque...", ["les sirve de alimento únicamente", "necesitan nidos por regalo", "es su manera de reproducirse", "los huevos son minerales"], 2,
      "En el huevo se desarrolla la cría antes de salir al mundo.", "El huevo es su cuna."],
    ["Al nacer, el tamaño de una cría...", ["es menor y luego crece", "ya es el definitivo", "es mayor que el de sus padres", "no tiene tamaño"], 0,
      "Nacen pequeños y a lo largo de la vida alcanzan su tamaño adulto.", "Empieza diminuta."]
  ],
  cl: {
    c: [["cre", "CRECIMIENTO Y DESARROLLO", "🌱"], ["rep", "REPRODUCCIÓN", "🥚"]],
    i: [["Las células se dividen", "cre"], ["La cría aumenta de tamaño", "cre"], ["De semilla a planta adulta", "cre"], ["Puesta de huevos", "rep"], ["Flores que producen semillas", "rep"], ["Cachorros que nacen vivos", "rep"]]
  },
  em: [
    ["reproducción", "permitir que la especie continúe"],
    ["crecimiento", "aumento de tamaño y de células"],
    ["ciclo de vida", "etapas desde nacer hasta reproducirse"]
  ],
  or: ["Reconozco la etapa inicial del ser vivo", "Observo cómo crece y cambia", "Identifico la etapa de madurez", "Reviso cómo se reproduce la especie"],
  e: ["Escribe dos etapas del ciclo de vida de una planta.", "Semilla y planta adulta", 5]
}
];

/* ====== g4 / csociales ====== */
/* DBA 4º — csociales */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.csociales = [
{
  n: "Las tres cordilleras",
  o: "Identifico las tres cordilleras de Colombia y relaciono su altura con el clima.",
  d: "DBA 4º ciencias sociales: identifico el relieve de Colombia reconociendo sus tres cordilleras andinas.",
  t: [
    ["Tres cadenas de montañas", "Colombia tiene las cordilleras Occidental, Central y Oriental, parte de los Andes.", "⛰️"],
    ["Más arriba, más frío", "A mayor altura, la temperatura baja: por eso hay nevados en las cumbres.", "❄️"],
    ["Pisos térmicos", "Cada nivel de altura tiene su clima y su vegetación característica.", "🗺️"]
  ],
  q: [
    ["¿Cuáles son las tres cordilleras de Colombia?", ["Occidental, Central y Oriental", "Norte, Sur y Este", "Alta, Media y Baja", "Pacífica, Caribe y Amazónica"], 0,
      "Ese es su nombre oficial en el mapa del país: de occidente a oriente.", "Piensa en los puntos cardinales."],
    ["La cordillera Occidental queda...", ["en el centro del país", "hacia el occidente, cerca del Pacífico", "en el oriente", "sobre el mar Caribe"], 1,
      "Su nombre lo dice: está hacia el occidente, cercana a la costa del Pacífico.", "El nombre indica la posición."],
    ["Las tres cordilleras colombianas nacen de...", ["el norte del país", "el sur del país", "la cordillera de los Andes", "los llanos orientales"], 2,
      "Colombia se asienta sobre los Andes, que se ramifican en tres cordilleras.", "Son parte de una cordillera mayor."],
    ["La cordillera Oriental pasa por...", ["el valle del Cauca", "el desierto de la Guajira", "el norte del Amazonas", "ciudades como Bogotá"], 3,
      "Bogotá y Tunja están sobre la cordillera Oriental, en alturas considerables.", "La capital está allí."],
    ["Una cordillera es...", ["un río muy largo", "una llanura", "una cadena de montañas", "una isla"], 2,
      "Cordillera viene de cordillera: un conjunto de montañas encadenadas.", "Son montañas seguidas."],
    ["En las zonas más altas de la cordillera hace...", ["más calor", "menos calor, hace más frío", "no hay clima", "siempre llueve igual"], 1,
      "Por cada metro de altura la temperatura baja: por eso las cumbres tienen nieve.", "El frío sube con la montaña."],
    ["Un piso térmico es...", ["un piso de madera", "una escalera para subir", "un tipo de piedra", "un nivel de altura con su temperatura"], 3,
      "Cada piso reúne un clima y una vegetación propios según la altura.", "Es una franja de altura."],
    ["Los nevados se encuentran...", ["en las zonas más altas de la cordillera", "en las costas", "en el centro de los llanos", "en las ciudades"], 0,
      "Solo en las cumbres muy altas la temperatura baja lo suficiente para conservar nieve.", "Busca las puntas más altas."],
    ["Las ciudades de Bogotá y Tunja están en...", ["la cordillera Occidental", "la cordillera Oriental", "el valle del Cauca", "la costa Caribe"], 1,
      "Ambas se ubican sobre la cordillera Oriental, en el altiplano cundiboyacense.", "Están en el altiplano."],
    ["En las ciudades altanas la temperatura...", ["es más fresca que en las costas", "es más caliente", "no cambia nunca", "solo existe de día"], 0,
      "La altura hace que las ciudades de montaña sean más frescas que las zonas bajas.", "Compara Bogotá con Santa Marta."],
    ["El macizo colombiano se encuentra...", ["en el sur del país, donde nacen las cordilleras", "en la península de la Guajira", "en el Pacífico", "en San Andrés"], 0,
      "Es el nudo de montañas del sur donde se separan las tres cordilleras.", "Es el punto de partida."],
    ["En las zonas montañosas de Colombia...", ["nunca hay movimientos de la tierra", "solo pasan de noche", "son imposibles", "pueden ocurrir sismos por el movimiento de las placas"], 3,
      "Las cordilleras están en zonas activas: por eso se recomienda estar preparados.", "Las montañas siguen creciendo."]
  ],
  cl: {
    c: [["alt", "ZONAS ALTAS", "⛰️"], ["baj", "ZONAS BAJAS", "🏞️"]],
    i: [["Cordillera Occidental", "alt"], ["Cordillera Central", "alt"], ["Nevados", "alt"], ["Llanuras", "baj"], ["Valles", "baj"], ["Costas", "baj"]]
  },
  em: [
    ["cordillera", "cadena de montañas"],
    ["tres cordilleras", "Occidental, Central y Oriental"],
    ["piso térmico", "nivel de altura con su clima"]
  ],
  or: ["Ubico el relieve en el mapa", "Identifico la cordillera o la zona", "Anoto su altura característica", "Relaciono su clima con la altura"],
  e: ["Escribe el nombre de las tres cordilleras de Colombia.", "Occidental, Central y Oriental", 5]
},
{
  n: "Llanuras, valles y costas",
  o: "Diferencio llanuras, valles, altiplanos y costas en el relieve colombiano.",
  d: "DBA 4º ciencias sociales: identifico el relieve de Colombia describiendo llanuras, valles y zonas costeras.",
  t: [
    ["Tierra plana", "Las llanuras son extensiones amplias y planas, ideales para pastos y cultivos.", "🌾"],
    ["Entre montañas", "Los valles son depresiones entre montañas por donde suele correr un río.", "🏔️"],
    ["Junto al mar", "Colombia tiene dos costas: el mar Caribe al norte y el océano Pacífico al occidente.", "🏖️"]
  ],
  q: [
    ["Una llanura es una extensión...", ["plana y amplia de tierra", "llena de montañas", "cubierta de agua", "subterránea"], 0,
      "Su rasgo principal es la superficie plana y su gran amplitud.", "Terreno sin cerros."],
    ["Los llanos orientales se encuentran...", ["en el Pacífico", "al oriente del país", "en la cordillera", "en San Andrés"], 1,
      "Como su nombre indica, están hacia el oriente de Colombia.", "El nombre da la pista."],
    ["Un valle es...", ["un pico nevado", "un océano", "una depresión entre montañas por donde suele pasar un río", "una ciudad grande"], 2,
      "Los valles se forman entre relieves altos y suelen llevar ríos en el fondo.", "Bajada entre cerros."],
    ["El valle del Cauca...", ["es un desierto", "está en la cordillera Oriental", "está en el mar", "está entre la cordillera Occidental y la Central"], 3,
      "Se llama así porque lo baña el río Cauca entre dos cordilleras.", "Dos cordilleras lo enmarcan."],
    ["Colombia tiene dos costas porque...", ["está en una isla", "está bañada por el océano Pacífico y el mar Caribe", "no tiene ríos", "es un desierto"], 1,
      "Su posición en el extremo norte de Sudamérica le da dos costas oceánicas.", "Mira el mapa: dos mares."],
    ["La costa Caribe queda...", ["al norte del país", "al sur", "al occidente", "en el oriente"], 0,
      "El mar Caribe baña el norte colombiano, donde están Santa Marta y Cartagena.", "Arriba en el mapa."],
    ["La costa del Pacífico queda...", ["al norte", "al oriente", "al occidente", "en el centro"], 2,
      "El océano Pacífico baña el occidente del país.", "A la izquierda del mapa."],
    ["¿Cuál de estos es una llanura colombiana conocida?", ["La cordillera Oriental", "El macizo colombiano", "El nevado del Ruiz", "Los llanos orientales"], 3,
      "Los llanos orientales son la gran llanura del país, en elMeta y el Vichada.", "Su nombre lo dice."],
    ["En la sabana colombiana...", ["siempre nieva", "hay arrecifes de coral", "hay pastos y clima cálido", "hay glaciares"], 2,
      "La sabana combina pastizales con un clima cálido y lluvias marcadas.", "Es paisaje de pastos."],
    ["Las playas de la costa...", ["están en las montañas", "son zonas bajas junto al mar", "son llanuras secas", "están en el altiplano"], 1,
      "Las playas son franjas bajas donde la tierra encuentra el mar.", "Allí termina la tierra."],
    ["El relieve de Colombia es variado porque...", ["combina cordilleras, llanuras, valles y costas", "solo tiene montañas", "solo tiene ríos", "es completamente plano"], 0,
      "Esa diversidad de formas es una de las grandes riquezas del país.", "El país tiene de todo."],
    ["Un altiplano es...", ["un río", "un valle húmedo", "una playa", "una meseta alta en las montañas"], 3,
      "Los altiplanos son superficies planas y altas, como el de Bogotá.", "Una planicie en altura."]
  ],
  cl: {
    c: [["llano", "LLANURAS Y VALLES", "🌾"], ["cost", "COSTAS Y ZONAS MARINAS", "🏖️"]],
    i: [["Llanos orientales", "llano"], ["Valle del Cauca", "llano"], ["Sabana", "llano"], ["Costa Caribe", "cost"], ["Costa del Pacífico", "cost"], ["Playas", "cost"]]
  },
  em: [
    ["llanura", "tierra plana y amplia"],
    ["valle", "depresión entre montañas"],
    ["altiplano", "meseta alta"]
  ],
  or: ["Dibujo el contorno del lugar", "Lo ubico en el mapa de Colombia", "Lo clasifico: llano, valle o costa", "Anoto su clima y su vegetación"]
},
{
  n: "Ríos, mares y lagos",
  o: "Identifico la hidrografía de Colombia: ríos principales, costas, lagos y humedales.",
  d: "DBA 4º ciencias sociales: identifico la hidrografía de Colombia reconociendo sus ríos, mares y lagos.",
  t: [
    ["Agua que corre", "El río Magdalena es el más navegable y recoge aguas de gran parte del país.", "🌊"],
    ["Dos mares", "Colombia se baña en el mar Caribe y en el océano Pacífico.", "🧭"],
    ["Lagos y humedales", "Ciénagas y lagos alimentan pesca, transporte y vida silvestre.", "🦆"]
  ],
  q: [
    ["¿Cuál es el río más importante de Colombia para la navegación?", ["El Catatumbo", "El Magdalena", "El Atrato", "El Guaviare"], 1,
      "El Magdalena recorre el país de sur a norte y ha sido la gran vía fluvial colombiana.", "Es el río de la patria."],
    ["El río Magdalena fluye...", ["hacia el occidente", "hacia el sur", "hacia el oriente", "de sur a norte hacia el mar Caribe"], 3,
      "Nace en el sur y desemboca en el mar Caribe, cerca de Barranquilla.", "Sigue el rumbo al norte."],
    ["El río Cauca...", ["nace en el sur y también llega al mar Caribe", "es el más corto del país", "no tiene agua", "es un lago"], 0,
      "Corre paralelo al Magdalena y junta sus aguas al norte, desembocando en el Caribe.", "Acompaña al Magdalena."],
    ["El río Magdalena y el río Cauca...", ["son lagos", "no llegan al mar", "desembocan en el mar Caribe", "desembocan en el océano Pacífico"], 2,
      "Ambos terminan su recorrido en el mar Caribe colombiano.", "Mira dónde terminan."],
    ["Un lago es...", ["un río muy ancho", "una montaña", "una corriente", "una extensión de agua rodeada de tierra"], 3,
      "Por eso se dice que un lago está «encerrado» por tierra.", "Agua con tierra alrededor."],
    ["El agua del río sirve para...", ["solo para decorar", "beber, regar, transportar y generar energía", "no sirve", "solo para nadar en verano"], 1,
      "Los ríos son vitales: abastecen, riegan, mueven barcos y producen energía.", "Tiene muchos usos."],
    ["Las humedales y ciénagas del Caribe...", ["no tienen agua", "están en la cordillera", "son zonas donde el agua se encuentra con la tierra", "son desiertos"], 2,
      "Son zonas de transición entre agua y tierra, ricas en aves y peces.", "Aguas someras con vegetación."],
    ["La cuenca del río Magdalena...", ["recoge aguas de gran parte de las cordilleras Central y Oriental", "es un desierto", "está en el Amazonas", "no existe"], 0,
      "Su cuenca es extensa: por eso recibe tantos afluentes a lo largo del país.", "Muchos ríos la alimentan."],
    ["¿Por qué es importante cuidar los ríos?", ["Porque el agua no sirve para nada", "Porque se puede tirar basura sin más", "Porque solo sirven en invierno", "Porque contaminarlos daña a los seres vivos y a las personas"], 3,
      "El agua contaminada enferma a la vida del río y a quien la consume.", "El río es casa de muchos seres."],
    ["En la Guajira los ríos...", ["son escasos por el clima seco", "son muy caudalosos", "tienen nieve permanente", "desembocan en el Pacífico"], 0,
      "Es una región semiárida con pocos cursos de agua permanente.", "Allí el agua es un tesoro."],
    ["El caudal de un río es...", ["su color", "la cantidad de agua que pasa por él", "su longitud exacta", "su temperatura"], 1,
      "Se mide en litros por segundo: indica cuánta agua transporta.", "Cuánta agua por segundo."],
    ["En el Amazonas colombiano los ríos...", ["no existen", "son pocos y secos", "son numerosos y alimentan la selva", "son de agua salada"], 2,
      "La selva amazónica está cruzada por ríos y quebradas que la mantienen viva.", "Agua por todas partes."]
  ],
  cl: {
    c: [["agua", "FUENTES DE AGUA", "💧"], ["usa", "USOS DEL AGUA", "🚰"]],
    i: [["Río Magdalena", "agua"], ["Mar Caribe", "agua"], ["Ciénaga", "agua"], ["Beber y regar", "usa"], ["Transportar", "usa"], ["Generar energía", "usa"]]
  },
  em: [
    ["río", "corriente de agua dulce que va al mar"],
    ["caudal", "cantidad de agua que pasa por el río"],
    ["desembocar", "llegar con el agua al mar"]
  ],
  or: ["Identifico la fuente de agua", "Sigo su curso hacia el mar", "Anoto quién la usa y cómo", "Reviso qué necesita para no contaminarse"],
  e: ["Escribe el nombre de dos ríos colombianos y a qué mar llegan.", "Magdalena y Cauca; ambos al mar Caribe", 5]
},
{
  n: "Los tres poderes",
  o: "Explico la estructura del Estado describiendo los poderes legislativo, ejecutivo y judicial.",
  d: "DBA 4º ciencias sociales: identifico la estructura del Estado reconociendo sus tres poderes.",
  t: [
    ["Hacen las leyes", "El poder legislativo, en el Congreso, crea y aprueba las leyes de todo el país.", "📜"],
    ["Aplican y dirigen", "El poder ejecutivo, encabezado por el presidente, aplica las leyes y administra el Estado.", "🏛️"],
    ["Administran justicia", "El poder judicial, con los jueces y las cortes, resuelve conflictos y castiga delitos.", "⚖️"]
  ],
  q: [
    ["¿En cuántos poderes se organiza el Estado colombiano?", ["Rey y nobles", "Ejército y policía", "Poder ejecutivo, legislativo y judicial", "Alcaldes y gobernadores solamente"], 2,
      "Ese es el diseño de la Constitución: tres ramas con funciones distintas.", "Son tres y con tareas diferentes."],
    ["El poder legislativo...", ["hace las leyes en el Congreso", "dirige el país", "juzga los delitos", "recolecta la basura"], 0,
      "El Congreso es quien discute, modifica y aprueba las leyes.", "Legislar es hacer leyes."],
    ["El poder judicial...", ["hace las leyes", "elige al presidente", "administra las rentas", "administra justicia mediante los jueces"], 3,
      "Los jueces y las cortes interpretan la ley y resuelven los casos.", "Juzgar es su tarea."],
    ["El poder ejecutivo está encabezado por...", ["el Congreso", "el presidente de la República", "la Corte Suprema", "los alcaldes"], 1,
      "El presidente o la presidenta es la máxima autoridad del poder ejecutivo.", "Encabeza la administración."],
    ["Se habla de «separación de poderes» porque...", ["cada rama cumple su tarea y nadie acumula todo el poder", "no debe haber gobierno", "las leyes no deben existir", "todos deben ser presidentes"], 0,
      "El equilibrio entre ramas evita que una sola persona o cuerpo lo controle todo.", "Repartir el poder lo cuida."],
    ["Las leyes se aprueban en...", ["la Presidencia", "los juzgados", "las escuelas", "el Congreso de la República"], 3,
      "Allí los representantes y senadores debaten y votan cada ley.", "El Congreso vota las leyes."],
    ["Si alguien comete un delito, lo juzga...", ["el Congreso", "la rama judicial", "el presidente", "los periodistas"], 1,
      "La justicia está en manos de jueces y fiscales, no del Congreso.", "Los jueces deciden."],
    ["El presidente de la República hace parte del...", ["poder legislativo", "poder judicial", "poder ejecutivo", "poder municipal"], 2,
      "Su trabajo es aplicar las leyes y dirigir la administración pública.", "Encabeza el Ejecutivo."],
    ["El Congreso de la República está formado por...", ["los jueces", "los ministros", "los alcaldes", "el Senado y la Cámara de Representantes"], 3,
      "Dos cámaras deliberan: senadores y representantes.", "Son dos cámaras."],
    ["Las tres ramas del poder...", ["no tienen ninguna relación", "se vigilan y se equilibran entre sí", "compiten en un partido", "tienen el mismo presidente"], 1,
      "Se revisan mutuamente para que ninguna se salga de su papel.", "Se controlan entre ellas."],
    ["¿Cuál función corresponde al Ejecutivo?", ["Hacer las leyes", "Juzgar delitos", "Aplicar las leyes y dirigir la administración pública", "Escribir la Constitución"], 2,
      "Aplica lo que el Legislativo aprueba y dirige los ministerios y la gestión del Estado.", "Aplica y administra."],
    ["La Constitución es...", ["la ley suprema del país", "un periódico", "una canción", "un tratado deportivo"], 0,
      "Todas las leyes deben ajustarse a la Constitución, que está por encima de ellas.", "Es la madre de las leyes."]
  ],
  cl: {
    c: [["leg", "PODER LEGISLATIVO", "📜"], ["ejec", "PODER EJECUTIVO", "🏛️"], ["jud", "PODER JUDICIAL", "⚖️"]],
    i: [["Hace las leyes", "leg"], ["Aprueba leyes en el Congreso", "leg"], ["Dirige la administración pública", "ejec"], ["Encabezado por el presidente", "ejec"], ["Administra justicia", "jud"], ["Juzga con los jueces", "jud"]]
  },
  em: [
    ["poder legislativo", "hace las leyes"],
    ["poder ejecutivo", "aplica las leyes"],
    ["poder judicial", "administra justicia"]
  ],
  or: ["Identifico qué tarea cumple cada rama", "Ubico dónde trabaja cada una", "Reviso cómo se equilibran entre sí", "Pongo un ejemplo de cada una"],
  e: ["Escribe en una frase qué hace el poder legislativo.", "Hace y aprueba las leyes en el Congreso.", 5]
},
{
  n: "Del país al municipio",
  o: "Organizo el territorio colombiano por niveles: país, departamento y municipio.",
  d: "DBA 4º ciencias sociales: identifico la estructura del Estado reconociendo su organización territorial.",
  t: [
    ["Un país de regiones", "Colombia es una nación con 32 departamentos y un distrito capital.", "🌺"],
    ["El municipio, lo cercano", "Cada municipio tiene su cabecera, su alcaldía y sus barrios o veredas.", "🏘️"],
    ["Del barrio al mapa", "Mi barrio pertenece a un municipio, ese a un departamento y todos al país.", "🗺️"]
  ],
  q: [
    ["Colombia se divide administrativamente en...", ["solo un distrito", "ciudades y pueblos sin orden", "regiones sin nombre", "departamentos y un distrito capital"], 3,
      "Esa es la división política del país, con Bogotá como distrito capital.", "Son dos cosas juntas."],
    ["Un municipio es...", ["todo el país", "un océano", "una unidad pequeña con su cabecera y su alcaldía", "una cordillera"], 2,
      "Es la división básica en la que viven las personas, con gobierno local.", "Tiene alcalde y cabecera."],
    ["Bogotá es...", ["la capital de Colombia", "un río", "una montaña", "un departamento del sur"], 0,
      "Es el centro del poder nacional y capital de la República.", "La capital del país."],
    ["¿Cuál NO es un departamento de Colombia?", ["Antioquia", "Cundinamarca", "El Amazonas", "El Pacífico"], 3,
      "«El Pacífico» es un océano; los otros sí son departamentos.", "Busca el que no es tierra."],
    ["El gobernador o la gobernadora administra...", ["un municipio", "todo el país", "un departamento", "un colegio"], 2,
      "Gobierna el departamento elegido por votación popular.", "Cabecera departamental."],
    ["El alcalde o la alcaldesa administra...", ["el departamento", "el país", "la cordillera", "el municipio"], 3,
      "Es la máxima autoridad local de un municipio.", "Gobierna lo cercano."],
    ["La cabecera municipal es...", ["la sede del gobierno municipal", "un río principal", "la cordillera", "un parque nacional"], 0,
      "Allí están la alcaldía y las oficinas principales del municipio.", "Es el centro del municipio."],
    ["Un barrio hace parte de...", ["un océano", "un municipio", "un continente", "una cordillera entera"], 1,
      "Los barrios son partes de un municipio, junto con las veredas.", "Dentro del municipio."],
    ["Colombia tiene 32 departamentos...", ["y Bogotá como distrito capital", "y ningún distrito", "y dos países vecinos", "sin municipios"], 0,
      "A los 32 departamentos se suma el Distrito Capital de Bogotá.", "Más la capital."],
    ["Santa Marta es...", ["una ciudad del departamento del Magdalena", "un río", "una cordillera", "un país"], 0,
      "Es una ciudad costera y capital del departamento del Magdalena.", "Ciudad con departamento."],
    ["¿Para qué sirven los municipios?", ["Para separar continentes", "Para medir la altura", "Para contar estrellas", "Para dividir el país en unidades con gobierno local"], 3,
      "Cada municipio administra servicios cercanos: agua, aseo, escuelas y vías.", "Gobierno cerca de la gente."],
    ["Mi vereda o mi barrio...", ["no pertenece a nada", "es un país independiente", "pertenece a un municipio de un departamento", "está en otra nación"], 2,
      "Toda la organización arranca de donde vives: barrio, municipio, departamento, país.", "Sube de nivel en nivel."]
  ],
  cl: {
    c: [["niv", "NIVEL NACIONAL", "🌺"], ["loc", "NIVEL LOCAL", "🏘️"]],
    i: [["País (nación)", "niv"], ["Departamento", "niv"], ["Distrito capital", "niv"], ["Municipio", "loc"], ["Barrio", "loc"], ["Vereda", "loc"]]
  },
  em: [
    ["departamento", "división mayor de Colombia"],
    ["municipio", "tiene cabecera y alcaldía"],
    ["alcaldía", "gobierno de un municipio"]
  ],
  or: ["Ubico mi lugar en el mapa", "Subo al nivel del municipio", "Continúo con el departamento y el país", "Nombro las autoridades de cada nivel"],
  e: ["Escribe a qué municipio y departamento perteneces.", "Ejemplo: municipio de Zipaquirá, departamento de Cundinamarca", 5]
},
{
  n: "Autoridades elegidas",
  o: "Reconozco cómo se eligen las autoridades y qué funciones cumplen en el Estado.",
  d: "DBA 4º ciencias sociales: identifico la estructura del Estado reconociendo a sus autoridades y su elección.",
  t: [
    ["El pueblo decide", "Presidente, gobernadores y alcaldes son elegidos por los ciudadanos en votación.", "🗳️"],
    ["Representantes con tareas", "Cada autoridad cumple funciones definidas por la Constitución y las leyes.", "🏛️"],
    ["Rendir cuentas", "Las autoridades deben responder por su gestión ante la ciudadanía.", "📋"]
  ],
  q: [
    ["¿Quién elige al presidente de Colombia?", ["Los ciudadanos en votación", "El Congreso solamente", "Los alcaldes", "El ejército"], 0,
      "El presidente o la presidenta se elige en elecciones nacionales por voto popular.", "Todos los ciudadanos votan."],
    ["Las autoridades se eligen...", ["por sorteo", "para que el pueblo participe en el gobierno", "por edad", "por tamaño"], 1,
      "El voto es la manera en que el pueblo decide quién lo representa.", "La voz del pueblo."],
    ["Los gobernadores y alcaldes...", ["son herederos del cargo", "son nombrados por los niños", "se eligen en votación popular", "no existen"], 2,
      "Los tres niveles de autoridad se eligen de forma popular.", "Votos en su departamento o municipio."],
    ["Un ciudadano vota para...", ["comprar comida", "hacer la tarea", "jugar", "elegir a sus representantes"], 3,
      "Ese es el sentido del sufragio: escoger quiénes gobiernan.", "Tu voto elige."],
    ["Las elecciones se realizan...", ["de noche en secreto", "solo en las escuelas", "en urnas y con puestos de votación", "por internet obligatorio"], 2,
      "En cada puesto de votación hay mesas, cédulas y urnas para depositar el voto.", "Allí se deposita el voto."],
    ["El presidente de la República...", ["administra el municipio", "encabeza el poder ejecutivo de todo el país", "dirige un colegio", "es un juez"], 1,
      "Su tarea es dirigir la administración nacional y hacer cumplir las leyes.", "Encabeza el Ejecutivo."],
    ["Los ministros...", ["son elegidos por los niños", "son autoridades municipales", "son los jueces", "colaboran con el presidente en las políticas del Estado"], 3,
      "Cada ministerio se encarga de un área: educación, salud, ambiente y más.", "Son su equipo de trabajo."],
    ["Una función de los alcaldes es...", ["prestar servicios en su municipio: agua, aseo y seguridad", "hacer las leyes nacionales", "juzgar delitos graves", "mandar en todo el mundo"], 0,
      "Gestionan los servicios que la gente usa cada día en su territorio.", "Atienden lo cercano."],
    ["¿Cuál NO es una autoridad pública?", ["La alcaldesa", "Mi vecino sin cargo público", "El gobernador", "La presidenta"], 1,
      "Sin un cargo público, no ejerce funciones del Estado.", "No tiene función oficial."],
    ["El voto es un derecho y un deber porque...", ["es obligatorio para siempre", "sirve para ganar premios", "permite al pueblo decidir quién lo gobierna", "no tiene importancia"], 2,
      "Participar en las decisiones colectivas sostiene la democracia.", "Decidir juntos."],
    ["Las autoridades deben rendir cuentas...", ["ante la ciudadanía y las leyes", "ante nadie", "solo ante su familia", "ante los artistas"], 0,
      "Su poder tiene límites y debe responder por sus actos.", "Rendir cuentas es norma."],
    ["¿Cuál es la tarea del poder judicial?", ["Recolectar impuestos", "Dirigir el ejército", "Organizar fiestas", "Aplicar la ley y administrar justicia"], 3,
      "Los jueces hacen cumplir las leyes en cada caso que conocen.", "Aplicar justicia."]
  ],
  cl: {
    c: [["eleg", "AUTORIDADES ELEGIDAS", "🗳️"], ["no", "NO ES AUTORIDAD PÚBLICA", "🚫"]],
    i: [["Presidente o presidenta", "eleg"], ["Gobernador o gobernadora", "eleg"], ["Alcalde o alcaldesa", "eleg"], ["Mi vecino sin cargo", "no"], ["Una estudiante", "no"], ["Una mascota", "no"]]
  },
  em: [
    ["voto", "derecho y deber de elegir representantes"],
    ["urna", "caja donde se deposita el voto"],
    ["elección", "proceso para elegir autoridades"]
  ],
  or: ["Conozco las autoridades de mi municipio", "Me informo sobre los candidatos", "Voto en el puesto de votación", "Las autoridades asumen sus funciones"]
},
{
  n: "Nuestros pueblos originarios",
  o: "Reconozco a los pueblos indígenas que habitaron el territorio antes de la Colonia y sus aportes.",
  d: "DBA 4º ciencias sociales: describo las etapas de la Conquista y la Colonia reconociendo primero a los pueblos originarios.",
  t: [
    ["Antes de la Colonia", "Muiscas, taironas, quimbayas, wayuu y muchos más vivían aquí con sus propias culturas.", "🖋️"],
    ["Territorio y saberes", "Cada pueblo tenía su lengua, su gobierno, su agricultura y sus formas de organización.", "🧺"],
    ["Memoria viva", "Sus nombres, palabras y técnicas siguen presentes en la Colombia de hoy.", "✨"]
  ],
  q: [
    ["Antes de la llegada de europeos, en el territorio de Colombia...", ["vivían múltiples pueblos indígenas con sus propias culturas", "no vivía nadie", "vivían solo extranjeros", "vivían los romanos"], 0,
      "Miles de personas habitaron estas tierras durante milenios con culturas diversas.", "El territorio ya tenía historia."],
    ["Los muiscas habitaban...", ["la costa del Pacífico", "la zona de Bogotá y Boyacá", "la isla de San Andrés", "el Amazonas"], 1,
      "Su sociedad se organizó en los altos de Cundinamarca y Boyacá.", "En el altiplano."],
    ["Los taironas vivían...", ["en el Llano", "en el río Amazonas", "en la Sierra Nevada de Santa Marta", "en el Pacífico sur"], 2,
      "Desarrollaron una compleja sociedad en la Sierra Nevada, cerca de Santa Marta.", "Entre montañas y mar."],
    ["Los wayuu habitan...", ["en el Cauca", "en el Meta", "en San Andrés", "en la península de la Guajira"], 3,
      "Su territorio ocupa la Guajira, en el extremo norte del país.", "Tierra de viento y sol."],
    ["La sociedad muisca era conocida por...", ["sus barcos", "sus trabajos en oro y cerámica y su organización social", "sus rascacielos", "sus trenes"], 1,
      "Su orfebrería y su organización política son muy estudiadas.", "Oro y cerámica."],
    ["Antes de 1492, los pueblos originarios...", ["tenían sus propias lenguas, gobiernos y formas de vivir", "usaban el español", "leían el periódico", "viajaban en avión"], 0,
      "Cada pueblo tenía su lengua y sus propias instituciones.", "Todo existía antes del contacto."],
    ["El tejido wayuu es...", ["un plato típico", "una ley", "una técnica artesanal propia de la Guajira", "un río"], 2,
      "Es una práctica cultural viva que se enseña de generación en generación.", "Arte con hilo y colores."],
    ["Muchos nombres de ciudades y ríos...", ["vienen solo de la historia europea", "llegaron del inglés", "salen de los deportes", "tienen raíces en las lenguas indígenas"], 3,
      "Topónimos como Bogotá, Caquetá o Guaviare lo recuerdan cada día.", "Escucha el nombre del río."],
    ["Respetar la memoria de los pueblos originarios significa...", ["ignorar lo que hicieron", "decir que no existían", "reconocer sus aportes y su diversidad", "borrar sus nombres"], 2,
      "Reconocer su historia es parte de una convivencia respetuosa.", "Apreciar lo que aportaron."],
    ["Las comunidades indígenas de hoy...", ["desaparecieron todas", "siguen vivas con sus culturas y aportes", "no hablan nunca", "viven solo en museos"], 1,
      "Están presentes en el país, con sus lenguas, autoridades y tradiciones.", "La historia continúa."],
    ["Los chibchas eran un pueblo...", ["que habitaba los altos de Cundinamarca y Boyacá", "marítimo del Caribe europeo", "del norte de Europa", "del desierto africano"], 0,
      "Chibchas es otro nombre con el que se conoce a los muiscas y pueblos vecinos.", "Estaban en el altiplano."],
    ["¿Por qué estudiar a los pueblos originarios?", ["Porque no aportaron nada", "Porque es solo un tema aburrido", "Porque sirve únicamente para dibujar", "Porque explican cómo se formó la sociedad colombiana antes de la Colonia"], 3,
      "Su historia es la primera parte de la historia del país.", "Sin ellos falta la mitad del cuento."]
  ],
  cl: {
    c: [["pueb", "PUEBLOS ORIGINARIOS", "🖋️"], ["cul", "APORTES DE SUS CULTURAS", "🧺"]],
    i: [["Muiscas", "pueb"], ["Taironas", "pueb"], ["Wayuu", "pueb"], ["Trabajos en oro", "cul"], ["Tejidos artesanales", "cul"], ["Lenguas y nombres de lugares", "cul"]]
  },
  em: [
    ["pueblos originarios", "habitaron estas tierras antes de la Colonia"],
    ["Sierra Nevada de Santa Marta", "territorio tairona"],
    ["tejido wayuu", "artesanía de la Guajira"]
  ],
  or: ["Ubico el pueblo en el mapa", "Anoto su territorio y su lengua", "Reconozco sus aportes", "Comparo con mi comunidad"]
},
{
  n: "Encuentro y conquista",
  o: "Describo el proceso de la Conquista con un lenguaje respetuoso e inclusivo.",
  d: "DBA 4º ciencias sociales: describo las etapas de la Conquista y la Colonia reconociendo a los actores y sus perspectivas.",
  t: [
    ["Dos mundos en contacto", "En el siglo XV llegaron europeos a América: comenzó un encuentro entre sociedades distintas.", "🧭"],
    ["Encuentro desigual", "Hubo resistencia indígena, violencia, enfermedades y también mezcla de culturas.", "⚖️"],
    ["Historia para todas las voces", "Contamos lo ocurrido con respeto a los pueblos que defendieron su territorio.", "🤝"]
  ],
  q: [
    ["¿Cuándo comenzó el proceso de la Conquista de América?", ["Fue una fiesta", "Con la llegada de europeos a América en el siglo XV", "En 1990", "Nunca existió"], 1,
      "La llegada de europeos al continente a finales del siglo XV abrió ese periodo histórico.", "Busca el siglo XV."],
    ["Las sociedades europeas llegaron a América en busca de...", ["hacer turismo", "aprender deportes", "sus vacaciones", "oro, tierras y rutas comerciales"], 3,
      "La búsqueda de riquezas y nuevas rutas impulsó sus viajes.", "Buscaban riquezas."],
    ["Las personas que llegaron de Europa...", ["traían otras lenguas, costumbres y tecnologías", "hablaban exactamente igual", "no trajeron nada", "eran todas iguales entre sí"], 0,
      "Cada sociedad tiene su lengua, sus costumbres y sus saberes técnicos.", "Traían su propia cultura."],
    ["Durante la Conquista, muchos pueblos originarios...", ["no opusieron ninguna resistencia", "se mudaron a Europa", "resistieron y defendieron su territorio", "desaparecieron antes de 1492"], 2,
      "Hubo batallas y defensas largas: la resistencia fue parte de la historia.", "Defendieron su tierra."],
    ["Las enfermedades traídas por los recién llegados...", ["no afectaron a nadie", "ayudaron a todos", "eran imaginarias", "debilitaron mucho a las poblaciones originarias"], 3,
      "Pueblos que no las conocían fueron muy afectadas por ellas.", "Fueron una gran tragedia."],
    ["El intercambio entre América y Europa se conoce como...", ["un partido de fútbol", "encuentro de dos mundos", "una fiesta", "un terremoto"], 1,
      "El término «encuentro de dos mundos» nombra ese contacto histórico.", "Dos mundos, un contacto."],
    ["A raíz de ese contacto, se mezclaron...", ["los planetas", "los océanos", "las lenguas, los alimentos y las costumbres", "los continentes"], 2,
      "De esa mezcla nacieron nuevas formas de hablar, comer y vivir.", "Culturas que se encontraron."],
    ["Para estudiar este periodo conviene usar un lenguaje...", ["respetuoso e inclusivo con todos los pueblos", "que menosprecie a los pueblos originarios", "que borre a las víctimas", "que solo hable de un bando"], 0,
      "Una historia justa reconoce a todos los actores sin desprecio ni olvido.", "Respeto para todas las voces."],
    ["Los conquistadores europeos...", ["eran de las Américas", "vivían en Colombia desde siempre", "nunca viajaron", "encabezaron empresas de conquista con ejércitos"], 3,
      "Organizadas en tropas, avanzaron por el territorio con objetivos de conquista.", "Vinieron organizados."],
    ["Durante la Conquista se construyeron...", ["rascacielos", "autopistas modernas", "aviones", "iglesias y ciudades con formas europeas junto a lo indígena"], 3,
      "Las nuevas ciudades mezclaron trazados europeos con saberes y manos locales.", "Nacieron ciudades mestizas."],
    ["Las encomiendas...", ["eran tierras gratis para todos", "obligaban a los indígenas a trabajar y a entregar tributo", "eran escuelas", "eran fiestas"], 1,
      "Fue un sistema de trabajo forzado que generó gran sufrimiento.", "Un sistema injusto."],
    ["Hoy reconocemos este proceso...", ["como un tiempo de armonía total", "como algo que no existió", "como un encuentro desigual que marcó la historia del país", "como un evento reciente"], 2,
      "Los desequilibrios de poder hicieron de la Conquista un proceso duro y desigual.", "Así lo estudian los historiadores."]
  ],
  cl: {
    c: [["eu", "LO QUE TRAJERON LOS RECÉN LLEGADOS", "🧭"], ["am", "LO QUE YA VIVÍA EN AMÉRICA", "🌎"]],
    i: [["Lengua española", "eu"], ["Religión católica europea", "eu"], ["Técnicas europeas", "eu"], ["Lenguas indígenas", "am"], ["Organizaciones propias", "am"], ["Saberes sobre el territorio", "am"]]
  },
  em: [
    ["conquista", "periodo de expansión europea en América"],
    ["encuentro de dos mundos", "contacto entre sociedades de América y Europa"],
    ["encomienda", "sistema de trabajo forzado e impuestos"]
  ],
  or: ["Ubico el año y el lugar del contacto", "Reconozco a las dos sociedades en presencia", "Nombro cambios, resistencias y mezclas", "Uso un lenguaje respetuoso e inclusivo"],
  e: ["Escribe en dos frases qué significa el encuentro de dos mundos.", "Llegaron europeos a América y se contactaron con pueblos que ya vivían aquí, con lenguas y costumbres distintas.", 5]
},
{
  n: "La vida en la Colonia",
  o: "Describo cómo era la vida económica y social durante la etapa de la Colonia.",
  d: "DBA 4º ciencias sociales: describo las etapas de la Conquista y la Colonia detallando la vida en el periodo colonial.",
  t: [
    ["Bajo dominio español", "La Colonia fue el periodo en que el territorio estuvo gobernado por la Corona española.", "📜"],
    ["Minería, haciendas y comercio", "La economía giraba en torno al oro, la tierra y el comercio con España.", "⛏️"],
    ["Ciudades con plaza", "Las ciudades coloniales tenían plaza, iglesia y calles trazadas en cuadrícula.", "🏘️"]
  ],
  q: [
    ["La etapa de la Colonia en Colombia...", ["comenzó con la independencia", "duró un solo mes", "fue el periodo bajo el dominio español hasta inicios del siglo XIX", "comenzó en 1819"], 2,
      "Se extiende desde la Conquista hasta los movimientos de independencia.", "Antes de 1819."],
    ["El Virreinato de la Nueva Granada...", ["era el nombre del gobierno colonial del territorio", "era una fiesta", "era un río", "era una tribu"], 0,
      "Con ese nombre se conocía la organización política de la región bajo la Corona.", "Era el nombre del gobierno."],
    ["La economía colonial se basaba en...", ["la informática", "el turismo", "la aviación", "minería, agricultura y ganadería"], 3,
      "El oro, las cosechas y el ganado sostenían la vida de la época.", "Piensa en qué trabajaba la gente."],
    ["En la Colonia, la sociedad estaba muy...", ["igual para todos", "dividida en estamentos y muy desigual", "formada solo por niños", "sin leyes"], 1,
      "Unas pocas personas concentraban tierras y poder frente a muchas otras.", "Muy pocos arriba, muchos abajo."],
    ["Las haciendas...", ["eran grandes extensiones de tierra de cultivo o ganado", "eran barcos", "eran volcanes", "eran escuelas"], 0,
      "En ellas trabajaban muchos campesinos bajo las órdenes del terrateniente.", "Grandes propiedades rurales."],
    ["Las minas de oro y esmeraldas...", ["no existían en Colombia", "estaban solo en Europa", "solo producían agua", "fueron muy importantes para la economía colonial"], 3,
      "La extracción de metales fue una de las principales riquezas de la época.", "De allí salía el oro."],
    ["Las ciudades coloniales...", ["no tenían plaza", "tenían plaza, iglesia y calles trazadas", "eran todas flotantes", "no tenían gobierno"], 1,
      "Su diseño seguía normas europeas con la plaza como centro.", "Todo giraba en la plaza."],
    ["En la Colonia, la religión católica...", ["no se practicaba", "tenía gran influencia en la vida cotidiana", "se conocía solo en África", "era prohibida"], 2,
      "Marcaba fiestas, costumbres y hasta el calendario de la época.", "Estaba en todas partes."],
    ["Muchos nombres de pueblos y ciudades...", ["son de este año", "salen del fútbol", "son inventados ayer", "conservan raíces indígenas o españolas"], 3,
      "La toponimia recuerda el origen de cada lugar.", "Escucha el nombre del pueblo."],
    ["Durante la Colonia nació...", ["internet", "una sociedad mestiza con mezcla de culturas", "el teléfono", "el automóvil"], 1,
      "La convivencia forzada entre pueblos originarios, africanos y europeos creó una sociedad mestiza.", "Culturas que se mezclaron."],
    ["El comercio con España...", ["estaba prohibido", "no existía", "era controlado y limitado a ciertos puertos", "era libre para todos los pueblos originarios"], 2,
      "La Corona restringía el comercio para controlar las riquezas.", "Solo por puertos oficiales."],
    ["La etapa colonial terminó con...", ["los movimientos de independencia", "un terremoto", "una cosecha", "el descubrimiento del fuego"], 0,
      "A inicios del siglo XIX, los procesos independentistas cerraron ese periodo.", "Empezó la independencia."]
  ],
  cl: {
    c: [["eco", "VIDA ECONÓMICA", "⛏️"], ["soc", "VIDA SOCIAL", "🏘️"]],
    i: [["Minería de oro y esmeraldas", "eco"], ["Haciendas de cultivo y ganado", "eco"], ["Comercio con España", "eco"], ["Ciudades con plaza e iglesia", "soc"], ["Sociedad muy desigual", "soc"], ["Mezcla de culturas", "soc"]]
  },
  em: [
    ["colonia", "periodo bajo el dominio español"],
    ["Virreinato de la Nueva Granada", "gobierno colonial de la época"],
    ["hacienda", "gran propiedad rural"]
  ],
  or: ["Ubico el periodo en la línea de tiempo", "Describo la economía de la época", "Describo cómo vivía la gente", "Relaciono la Colonia con la independencia"],
  e: ["Escribe dos características de la vida en la Colonia.", "Se vivía en ciudades con plaza e iglesia; la economía se basaba en minería y haciendas.", 5]
}
];

/* ====== g4 / ingles ====== */
/* DBA 4º — ingles */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.ingles = [
{
  n: "My day in sentences — Mi día en oraciones",
  o: "Escribirás oraciones cortas en presente simple sobre tus rutinas diarias.",
  d: "DBA 4º inglés: escribo oraciones cortas sobre mis rutinas diarias en presente simple.",
  t: [
    ["Present simple para rutinas", "Usamos el presente simple para lo que hacemos todos los días: I wake up at six.", "⏰"],
    ["Sujeto claro + verbo", "Cada oración necesita quién hace la acción y el verbo en su forma base.", "🧱"],
    ["Con «every day»", "Palabras como every day, in the morning o at night señalan que es rutina.", "📅"]
  ],
  q: [
    ["¿Cuál oración está bien escrita en presente simple?", ["I wake up at six.", "I wakes up at six.", "I waking up at six.", "I am wake at six."], 0,
      "Con «I» el verbo va sin -s: I wake up at six.", "Recuerda: con I no lleva -s."],
    ["Completa: «I ___ my teeth in the morning.»", ["brushes", "brush", "brushing", "to brush"], 1,
      "Después de «I» el verbo va en forma base: I brush my teeth.", "¿Qué forma va con I?"],
    ["Completa: «She ___ breakfast at 7.»", ["eat", "eats", "eating", "eaten"], 2,
      "Con she, he o it el verbo en presente simple termina en -s: She eats.", "Termina en -s."],
    ["¿Cuál oración habla de una rutina diaria?", ["I went to the zoo once.", "I am at home now.", "I will go tomorrow.", "I go to school every day."], 3,
      "«Every day» indica una rutina y pide presente simple: I go to school every day.", "Busca la frecuencia diaria."],
    ["¿Cuál oración está bien escrita?", ["I haves a break at ten.", "I having a break at ten.", "I have a break at ten.", "I am has a break."], 2,
      "«Have» no cambia con «I»: I have a break at ten.", "Con I, have stays igual."],
    ["Completa: «We ___ our backpacks at night.»", ["packs", "pack", "packing", "is pack"], 1,
      "Con «we» el verbo va sin -s: We pack our backpacks.", "¿Qué forma va con we?"],
    ["Una oración corta y clara debe...", ["no llevar verbo", "ir sin punto final", "no llevar sujeto", "decir algo claro con sujeto y verbo"], 3,
      "Sujeto, verbo e idea clara hacen que la oración se entienda.", "Quién + qué hace."],
    ["Lee: «I read my notebook before bed.» ¿Qué tipo de texto es?", ["Una rutina", "Una orden", "Una pregunta", "Un pasado lejano"], 0,
      "La acción se repite cada noche: es una rutina en presente simple.", "Se hace todas las noches."],
    ["Completa: «My brother ___ the bus at 7.»", ["take", "takes", "taking", "taken"], 1,
      "«My brother» equivale a «he», así que el verbo lleva -s: takes.", "Piensa en he."],
    ["¿Cuál es la forma correcta con «they»?", ["They plays soccer.", "They playing soccer.", "They play soccer.", "They is soccer."], 2,
      "Con «they» el verbo va sin -s: They play soccer.", "They no pide -s."],
    ["Para escribir sobre tu rutina, empiezo por...", ["mi sujeto y la hora", "solo la hora", "un dibujo", "una pregunta"], 0,
      "«I get up at six» ya trae sujeto y hora: así comienza la idea.", "Empieza por quién."],
    ["¿Cuál oración es la más corta y clara?", ["In the morning I usually and after that I brush my teeth and also...", "Morning.", "I am being going.", "I get up at six."], 3,
      "Corta, completa y con sentido: I get up at six.", "Menos palabras, más claro."]
  ],
  cl: {
    c: [["ok", "CORRECT SENTENCES", "✅"], ["fix", "NEEDS FIXING", "🔧"]],
    i: [["I wake up at six.", "ok"], ["She eats breakfast at 7.", "ok"], ["They play soccer.", "ok"], ["I wakes up at six.", "fix"], ["She eat breakfast.", "fix"], ["They plays soccer.", "fix"]]
  },
  em: [
    ["I get up at six.", "Me levanto a las seis."],
    ["I brush my teeth.", "Me cepillo los dientes."],
    ["I go to school.", "Voy a la escuela."]
  ],
  or: ["Choose the subject: I, you, he, she...", "Add the verb in the present simple", "Add the time or the place", "Read it aloud to check it"],
  e: ["Escribe en inglés dos oraciones cortas sobre tu mañana.", "I get up at six. I have breakfast at seven.", 5]
},
{
  n: "My family and home — Mi familia y mi hogar",
  o: "Escribirás oraciones cortas para presentar a tu familia y a tu casa.",
  d: "DBA 4º inglés: escribo oraciones cortas sobre mi vida diaria presentando a mi familia y mi hogar.",
  t: [
    ["Present my family", "Usamos «This is...» e «I have...» para presentar a la familia.", "👪"],
    ["Rooms at home", "kitchen, bedroom y bathroom son las habitaciones que más usamos.", "🏠"],
    ["Has o have", "«I have» para mí y «she has» para tercera persona en presente simple.", "🔑"]
  ],
  q: [
    ["¿Cuál oración es correcta?", ["I have two brothers.", "I has two brothers.", "I having two brothers.", "I am two brothers."], 0,
      "Con «I» usamos «have»: I have two brothers.", "Con I va have."],
    ["Completa: «My mother ___ in a bakery.»", ["work", "works", "working", "is work"], 1,
      "Mi mamá equivale a «she», así que el verbo lleva -s: works.", "Piensa en she."],
    ["¿Quién es «my aunt»?", ["Mi hermana", "Mi abuela", "Mi tía", "Mi prima"], 2,
      "«Aunt» es tía; «cousin» sería primo o prima.", "Aunt = tía."],
    ["Completa: «We live ___ a small house.»", ["on", "at the", "to", "in"], 3,
      "Decimos «live in» para vivir dentro de un lugar: We live in a small house.", "¿In o on?"],
    ["Completa: «This is my sister. She ___ ten.»", ["have", "has", "having", "haves"], 1,
      "Con «she» usamos «has»: She has ten years.", "She pide has."],
    ["Completa: «My parents ___ at home in the evening.»", ["are", "is", "am", "be"], 0,
      "«My parents» es plural, así que va «are».", "Plural pide are."],
    ["¿Cuál es «kitchen» en español?", ["Sala", "Baño", "Cocina", "Jardín"], 2,
      "Kitchen es la cocina, el lugar donde se prepara la comida.", "Allí se cocina."],
    ["Completa: «There ___ a big window in my room.»", ["are", "am", "have", "is"], 3,
      "«A big window» es singular, así que va «is»: There is a big window.", "¿Singular o plural?"],
    ["¿Cuál oración describe bien a tu familia?", ["Family four.", "I family am.", "My family has four people.", "My is family."], 2,
      "Tiene sujeto, verbo y una idea completa: My family has four people.", "Debe decir algo claro."],
    ["Completa: «My cousin ___ games after school.»", ["play", "plays", "playing", "playes"], 1,
      "«My cousin» es tercera persona: plays, con -s y sin letra extra.", "Termina en -es."],
    ["Lee: «Grandma tells us stories.» ¿Quién cuenta las historias?", ["La abuela", "El primo", "Yo", "Nadie"], 0,
      "«Grandma» es la abuela, y el verbo «tells» confirma que es ella.", "Busca quién hace la acción."],
    ["¿Cómo empiezo una oración sobre mi hogar?", ["Con la primera letra en minúscula", "Sin sujeto", "Con una preposición sola", "Con mayúscula y sujeto claro"], 3,
      "Toda oración empieza con mayúscula y un sujeto claro: My home is small.", "Mayúscula primero."]
  ],
  cl: {
    c: [["fam", "FAMILY", "👪"], ["room", "ROOMS OF THE HOUSE", "🏠"]],
    i: [["my mother", "fam"], ["my cousin", "fam"], ["grandma", "fam"], ["kitchen", "room"], ["bedroom", "room"], ["window", "room"]]
  },
  em: [
    ["aunt", "tía"],
    ["cousin", "primo o prima"],
    ["kitchen", "cocina"]
  ],
  or: ["Say who is in the family", "Say where they are", "Use has or have correctly", "Add one detail about your home"],
  e: ["Escribe en inglés dos oraciones sobre tu familia.", "I have two brothers. We live in a small house.", 5]
},
{
  n: "My school day — Mi día escolar",
  o: "Escribirás oraciones cortas sobre tu día escolar, sus materias y sus espacios.",
  d: "DBA 4º inglés: escribo oraciones cortas sobre mis rutinas diarias aplicadas a la escuela.",
  t: [
    ["Subjects at school", "math, English y science son las materias que más aparecen en tu horario.", "📚"],
    ["There is / There are", "Para decir qué hay en el salón: There is a board, there are desks.", "🏫"],
    ["Times and places", "A las oraciones les gusta la hora y el lugar: at nine, in the library.", "🕘"]
  ],
  q: [
    ["Completa: «I ___ math at nine.»", ["has", "have", "am", "having"], 1,
      "Con «I» el verbo es «have»: I have math at nine.", "Con I va have."],
    ["¿Cuál es «library»?", ["Comedor", "Laboratorio", "Cancha", "Biblioteca"], 3,
      "Library es la biblioteca, donde se prestan los libros.", "Allí se leen libros."],
    ["Lee: «We have lunch at noon.» ¿Qué significa?", ["Almorzamos a mediodía", "Desayunamos temprano", "Cenamos tarde", "Llegamos tarde"], 0,
      "«Lunch» es el almuerzo y «noon» es el mediodía.", "Noon = las 12:00."],
    ["Completa: «My teacher ___ us English.»", ["teach", "teachs", "teaches", "teached"], 2,
      "Con «she/he» y verbos terminados en -ch se agrega -es: teaches.", "Regla: +es con -ch."],
    ["¿Cuál oración usa bien there is / there are?", ["There is many desks.", "There are a board.", "There is a board and there are desks.", "There be desks."], 2,
      "Singular con «is» y plural con «are», como en la opción correcta.", "Une ambos usos."],
    ["Completa: «The bell rings and we ___ to class.»", ["goes", "go", "going", "gone"], 1,
      "Con «we» el verbo va en forma base: we go to class.", "We no lleva -s."],
    ["¿Cuál es «school schedule»?", ["El uniforme", "El almuerzo", "El horario escolar", "El recreo"], 2,
      "El schedule es el horario que ordena tus clases.", "Ordena las clases."],
    ["Lee: «I like science because it is fun.» ¿Por qué se entiende?", ["Porque da un motivo con «because»", "Porque es una pregunta", "Porque no tiene verbo", "Porque está en pasado"], 0,
      "«Because» explica el motivo, y eso da coherencia a la oración.", "Because = porque."],
    ["En el horario, «P.E.» significa...", ["English", "Math", "Art", "Physical Education"], 3,
      "Physical Education es Educación Física, la clase de deportes.", "Es la clase de ejercicio."],
    ["Lee: «School starts at 7:30.» ¿Qué se informa?", ["La hora de inicio", "El almuerzo", "Un examen", "Las vacaciones"], 0,
      "«Starts at» marca a qué hora comienza la escuela.", "Busca la hora."],
    ["Lee: «After class I play with my friends.» ¿Cuándo sucede?", ["Después de clase", "Antes de clase", "En la noche", "Nunca"], 1,
      "«After class» significa después de terminar las clases.", "After = después."],
    ["¿Cuál es la forma correcta con «He»?", ["He study English.", "He studys English.", "He studies English.", "He studying English."], 2,
      "«Study» termina en -y: con «he» cambia a -ies: He studies English.", "La -y se vuelve -ies."]
  ],
  cl: {
    c: [["subj", "SCHOOL SUBJECTS", "📚"], ["plc", "SCHOOL PLACES", "🏫"]],
    i: [["math", "subj"], ["English", "subj"], ["science", "subj"], ["library", "plc"], ["classroom", "plc"], ["playground", "plc"]]
  },
  em: [
    ["library", "biblioteca"],
    ["teacher", "maestro o maestra"],
    ["school schedule", "horario escolar"]
  ],
  or: ["Look at the school schedule", "Write the subject and the time", "Add the place with there is or there are", "Check the verb form"],
  e: ["Escribe en inglés dos oraciones sobre tu día escolar.", "I have math at nine. We have lunch at noon.", 5]
},
{
  n: "Days and schedules — Días y horarios",
  o: "Escribirás oraciones cortas con días, horas y actividades de tu semana.",
  d: "DBA 4º inglés: escribo oraciones cortas sobre mis rutinas diarias usando días y horarios.",
  t: [
    ["Days of the week", "Monday, Tuesday, Wednesday... los días siempre empiezan con mayúscula.", "📅"],
    ["On, at y in", "«On Monday» para días, «at 7:00» para horas y «in the morning» para partes del día.", "🕐"],
    ["a.m. y p.m.", "a.m. es de la madrugada a la mañana; p.m. es de la tarde a la noche.", "🌞"]
  ],
  q: [
    ["¿Cuál lista de días está en el orden correcto desde el lunes?", ["Tuesday, Monday, Wednesday", "Wednesday, Tuesday, Monday", "Monday, Tuesday, Wednesday", "Monday, Wednesday, Tuesday"], 2,
      "El orden semanal empieza Monday, Tuesday, Wednesday...", "Empieza por el lunes."],
    ["Lee: «On Monday I have English.» ¿Cuándo es la clase?", ["El lunes", "El martes", "El domingo", "Los fines de semana"], 0,
      "«On Monday» señala el día lunes.", "Monday = lunes."],
    ["La abreviatura «Fri.» significa...", ["Thursday", "Monday", "Sunday", "Friday"], 3,
      "Fri. es la abreviatura de Friday, el viernes.", "Termina en day."],
    ["Completa: «I get up early ___ weekdays.»", ["in", "on", "at", "to"], 1,
      "Con días usamos «on»: on weekdays.", "On + días."],
    ["Lee: «We do not have classes on Saturday.» ¿Qué significa?", ["No hay clases el sábado", "Hay clases el sábado", "Hay examen el sábado", "El domingo es festivo"], 0,
      "La forma negativa «do not have» dice que no hay clases.", "Do not = no."],
    ["¿Cuál es «schedule» en español?", ["Vacaciones", "Mostrador", "Uniforme", "Horario"], 3,
      "Schedule es el horario que ordena días y horas.", "Es tu tabla de clases."],
    ["Completa: «My art class is ___ 2 p.m.»", ["on", "at", "in", "of"], 1,
      "Con la hora exacta usamos «at»: at 2 p.m.", "At + hora."],
    ["¿Qué día sigue a Wednesday?", ["Monday", "Tuesday", "Thursday", "Saturday"], 2,
      "Después de Wednesday viene Thursday.", "Cuenta los días."],
    ["«Breakfast is at 6:30 a.m.» ¿Qué significa «a.m.»?", ["De la tarde", "Del mediodía", "De la noche", "De la madrugada y la mañana"], 3,
      "a.m. cubre de la madrugada hasta el mediodía.", "6:30 está temprano."],
    ["Completa: «On Sunday we rest.» El sujeto «we» pide el verbo...", ["rests", "rest", "resting", "rested"], 1,
      "Con «we» el verbo va sin -s: we rest.", "We no lleva -s."],
    ["¿Cuál es «weekend»?", ["Día festivo", "Vacaciones de verano", "Fines de semana", "Horario nocturno"], 2,
      "Weekend son el sábado y el domingo, el fin de semana.", "Week + end."],
    ["En inglés, «half past seven» son...", ["las siete y media", "las siete en punto", "las seis y cuarto", "las ocho"], 0,
      "«Half past» indica los treinta minutos después de la hora.", "Media hora más."]
  ],
  cl: {
    c: [["days", "DAYS OF THE WEEK", "📅"], ["time", "TIME WORDS", "⏰"]],
    i: [["Monday", "days"], ["Wednesday", "days"], ["Sunday", "days"], ["a.m.", "time"], ["at seven", "time"], ["on Sunday", "time"]]
  },
  em: [
    ["weekend", "fin de semana"],
    ["schedule", "horario"],
    ["half past seven", "las siete y media"]
  ],
  or: ["Name the day of the week", "Say the time with a.m. or p.m.", "Use on with days and at with hours", "Say what you do that day"],
  e: ["Escribe en inglés qué haces los lunes por la mañana.", "On Mondays I get up at six and go to school at seven.", 5]
},
{
  n: "Healthy meals — Comidas saludables",
  o: "Escribirás oraciones cortas sobre qué comes y bebes en tu rutina.",
  d: "DBA 4º inglés: escribo oraciones cortas sobre mis rutinas diarias relacionadas con las comidas.",
  t: [
    ["Three main meals", "breakfast en la mañana, lunch al mediodía y dinner por la noche.", "🥗"],
    ["Healthy choices", "fruit, vegetables y water son las palabras clave de una comida sana.", "🍎"],
    ["Third person -s", "She eats, they eat: el verbo cambia según quién hace la acción.", "🔁"]
  ],
  q: [
    ["Completa: «I ___ fruit every day.»", ["eats", "eating", "is eat", "eat"], 3,
      "Con «I» el verbo va en forma base: I eat fruit every day.", "Con I sin -s."],
    ["Completa: «She ___ water after class.»", ["drink", "drinking", "drinks", "drunk"], 2,
      "Con «she» el verbo lleva -s: She drinks water.", "She pide -s."],
    ["Lee: «We need milk for strong bones.» ¿Qué significa?", ["Necesitamos leche para huesos fuertes", "Odiamos la leche", "Compramos zapatos", "Dormimos mucho"], 0,
      "«Need» es necesitar y «strong bones» son huesos fuertes.", "Need = necesitar."],
    ["¿Cuál es «breakfast»?", ["Almuerzo", "Desayuno", "Cena", "Merienda"], 1,
      "Breakfast es el desayuno, la primera comida del día.", "Break + fast."],
    ["Lee: «Lunch is at noon.» ¿Qué es «noon»?", ["La medianoche", "La tarde", "El mediodía", "La mañana"], 2,
      "Noon es exactamente las doce del día.", "Son las 12:00."],
    ["¿Cuál es una opción saludable?", ["Candy for breakfast", "Soda only", "No water", "Vegetables and fruit"], 3,
      "Verduras y frutas aportan nutrientes: la elección más sana.", "Piensa en lo verde."],
    ["¿Cuál oración está bien escrita?", ["My cousin eats soup.", "My cousin eat soup.", "My cousin eating soup.", "My cousin is eat soup."], 0,
      "«My cousin» es tercera persona: eats, con -s.", "Tercera persona con -s."],
    ["En inglés, «dinner» es...", ["el desayuno", "la cena", "la merienda", "el almuerzo"], 1,
      "Dinner es la cena, la comida de la noche.", "Es por la noche."],
    ["Completa: «We ___ vegetables at lunch.»", ["has", "have", "haves", "having"], 1,
      "Con «we» el verbo es «have»: We have vegetables.", "We + have."],
    ["Para comer saludable conviene...", ["elegir frutas, verduras y agua", "comer solo dulces", "tomar gaseosa cada día", "no desayunar"], 0,
      "Frutas, verduras y agua sostienen una dieta equilibrada.", "El agua es lo mejor para beber."],
    ["Lee: «We cook at home.» ¿Quién cocina?", ["Nadie", "Solo los niños", "Los animales", "Nosotros en casa"], 3,
      "«We» significa nosotros: la familia cocina en casa.", "We = nosotros."],
    ["¿Cuál oración está bien con «they»?", ["They likes juice.", "They liking juice.", "They like juice.", "They is juice."], 2,
      "Con «they» el verbo va sin -s: They like juice.", "They no lleva -s."]
  ],
  cl: {
    c: [["hea", "HEALTHY FOOD", "🥗"], ["sw", "FOODS TO EAT LESS", "🍬"]],
    i: [["vegetables", "hea"], ["fruit", "hea"], ["water", "hea"], ["candy", "sw"], ["soda", "sw"], ["cake every day", "sw"]]
  },
  em: [
    ["breakfast", "desayuno"],
    ["lunch", "almuerzo"],
    ["dinner", "cena"]
  ],
  or: ["Think about your meals in a day", "Choose healthy food words", "Write a short sentence with I or we", "Add the time of the meal"],
  e: ["Escribe en inglés dos comidas saludables que tomas.", "I eat fruit for breakfast. I have vegetables at lunch.", 5]
},
{
  n: "Illustrated texts — Textos ilustrados",
  o: "Comprenderás textos sencillos e ilustrados usando el título, las imágenes y el contexto.",
  d: "DBA 4º inglés: comprendo textos sencillos e ilustrados en formato físico o digital.",
  t: [
    ["Picture + words", "En un texto ilustrado, la imagen apoya las palabras y aclara el significado.", "🖼️"],
    ["Start with the title", "El título y las imágenes son la primera pista de qué trata el texto.", "🔎"],
    ["Context clues", "Si no entiendo una palabra, miro el dibujo y lo que está alrededor.", "🧠"]
  ],
  q: [
    ["Un texto ilustrado ayuda a...", ["entender la idea con la imagen y las palabras", "escribir más rápido", "no leer nada", "decorar sin sentido"], 0,
      "Las imágenes y el texto trabajan juntos para comprender mejor.", "Mira y lee a la vez."],
    ["En un texto con dibujos, la imagen...", ["reemplaza siempre las palabras", "apoya lo que dice el texto", "está prohibida", "no sirve"], 1,
      "La ilustración ilustra: acompaña y aclara el contenido.", "Apoya, no reemplaza."],
    ["Lee: «Tom is a cat. He likes fish.» ¿Qué come Tom?", ["Milk only", "Rice", "Fish", "Bread"], 2,
      "La segunda oración dice claramente que a Tom le gusta el pescado.", "Busca el alimento."],
    ["¿Dónde suele estar el título?", ["Al final del texto", "En medio de un párrafo", "En la última línea", "Arriba, al inicio"], 3,
      "El título se coloca al principio para anunciar el tema.", "Arriba de todo."],
    ["Lee: «Ana gets up at six. She walks to school.» ¿Cómo va Ana a la escuela?", ["By car", "By plane", "Walking", "By boat"], 2,
      "«She walks to school» significa que va caminando.", "Walk = caminar."],
    ["Antes de leer, conviene...", ["mirar las imágenes y el título", "cerrar el libro", "romper la página", "leer al revés"], 1,
      "Mirar primero prepara la mente para entender lo que viene.", "Primero mirar, después leer."],
    ["Si no entiendo una palabra, puedo...", ["dejar el texto", "gritar", "llorar", "usar la imagen y el contexto para deducirla"], 3,
      "Las pistas alrededor suelen resolver la duda sin diccionario.", "Mira qué hay cerca."],
    ["Lee: «The sun is hot. The kids drink water.» ¿Qué clima se describe?", ["Caluroso", "Frío", "Lluvioso", "Nevado"], 0,
      "Sol fuerte y agua para beber indican un día de calor.", "Hot = caliente."],
    ["En un texto digital, para pasar la página...", ["apago la pantalla", "toco la flecha o deslizo", "golpeo el computador", "lo cierro siempre"], 1,
      "Las flechas o el deslizamiento cambian de página en pantalla.", "Un toque y sigue."],
    ["Lee: «Ben has a red bike. He rides after school.» ¿Qué color es la bicicleta?", ["Blue", "Green", "Red", "Black"], 2,
      "La palabra «red» está escrita en el texto.", "Red = rojo."],
    ["Las preguntas al final del texto...", ["ayudan a comprobar si entendí", "sirven para decorar", "no tienen respuesta", "son un trabalenguas"], 0,
      "Respondlas para verificar tu comprensión.", "Es tu examen rápido."],
    ["¿Cuál es la mejor forma de leer un texto ilustrado?", ["De corrido sin mirar nada", "Saltando al final", "Mirando solo el dibujo", "Leer el título, mirar las imágenes y leer el texto con calma"], 3,
      "Un buen lector integra título, imágenes y texto en ese orden.", "De lo general a lo específico."]
  ],
  cl: {
    c: [["info", "INFORMATION IN THE TEXT", "🔍"], ["pic", "INFORMATION IN THE PICTURE", "🖼️"]],
    i: [["the title", "info"], ["the name Tom", "info"], ["the word fish", "info"], ["the red bike in the drawing", "pic"], ["the sun in the picture", "pic"], ["the children's faces", "pic"]]
  },
  em: [
    ["illustrated text", "texto con imágenes"],
    ["title", "título que va al inicio"],
    ["context", "lo que está alrededor de la palabra"]
  ],
  or: ["Look at the title and the pictures", "Read the short text", "Connect the words with the images", "Answer the questions"],
  e: ["Escribe en inglés dos frases sobre un texto ilustrado que leíste.", "The text has a title and three pictures. It is about a cat.", 5]
},
{
  n: "Who? What? Where? — ¿Quién? ¿Qué? ¿Dónde?",
  o: "Encontrarás en el texto la persona, la acción y el lugar que pregunta cada pregunta.",
  d: "DBA 4º inglés: comprendo textos sencillos e ilustrados identificando quién, qué y dónde.",
  t: [
    ["Who = la persona", "Cuando la pregunta es «Who?», busco quién realiza la acción.", "🙋"],
    ["What = la acción o cosa", "«What?» pregunta por lo que pasa o por qué se trata.", "🎯"],
    ["Where = el lugar", "«Where?» me lleva a buscar el lugar en el texto o en la imagen.", "📍"]
  ],
  q: [
    ["Lee: «Lucy is in the kitchen. She makes a sandwich.» ¿Quién hace el sándwich?", ["Lucy", "Ben", "The cat", "Nobody"], 0,
      "Lucy es el sujeto de la segunda oración: ella hace el sándwich.", "Busca el nombre."],
    ["Según el texto anterior, ¿dónde está Lucy?", ["In the garden", "In the kitchen", "At school", "At the park"], 1,
      "La primera oración dice «Lucy is in the kitchen».", "Where = lugar."],
    ["La pregunta «What?» busca...", ["la persona", "el lugar", "la cosa o la acción", "el tiempo"], 2,
      "«What» pregunta por qué es o qué sucede.", "What = qué."],
    ["La pregunta «Where is the ball?» busca...", ["quién", "qué", "cuándo", "el lugar"], 3,
      "«Where» siempre pregunta por el lugar.", "Where = dónde."],
    ["Lee: «Sam plays soccer on Saturday.» ¿Qué hace Sam?", ["Reads a book", "Plays soccer", "Rides a bike", "Eats lunch"], 1,
      "El verbo de la oración dice que juega fútbol.", "Busca la acción."],
    ["Para responder «who», busco en el texto...", ["la persona que realiza la acción", "el color de la página", "el número de párrafos", "el título solamente"], 0,
      "Quién hace la acción es siempre una persona o personaje.", "Es el quién."],
    ["Lee: «The party is on Friday.» ¿Cuándo es la fiesta?", ["On Monday", "At noon", "On Friday", "In the morning"], 2,
      "La oración dice con toda claridad: on Friday.", "Friday = viernes."],
    ["¿Qué palabra clave uso para buscar el lugar?", ["Who", "What", "How", "Where"], 3,
      "«Where» es la palabra que pide el lugar.", "Where = dónde."],
    ["Lee: «Dad works in a hospital.» ¿Dónde trabaja papá?", ["In a school", "At home", "In a hospital", "In a store"], 2,
      "La preposición «in» señala el lugar: in a hospital.", "Busca después de in."],
    ["Responder con palabras del texto...", ["no sirve", "hace la respuesta precisa", "es copiar de más", "complica todo"], 1,
      "Tomar las palabras del texto garantiza una respuesta exacta.", "Usa lo que dice."],
    ["Lee: «Mia has a little dog.» ¿Quién tiene un perrito?", ["Mia", "The dog", "Nobody", "Her teacher"], 0,
      "Mia es el sujeto de la oración.", "El sujeto es quien tiene."],
    ["Si la pregunta es «What does Leo eat?», busco...", ["el lugar de Leo", "la hora", "los colores", "el alimento que menciona el texto"], 3,
      "«What does Leo eat?» pide el alimento: busco comida en el texto.", "Eat = comer."]
  ],
  cl: {
    c: [["who", "WHO?", "🙋"], ["where", "WHERE?", "📍"], ["what", "WHAT?", "🎯"]],
    i: [["Lucy", "who"], ["Sam", "who"], ["the kitchen", "where"], ["the hospital", "where"], ["plays soccer", "what"], ["makes a sandwich", "what"]]
  },
  em: [
    ["who", "la persona"],
    ["what", "la cosa o la acción"],
    ["where", "el lugar"]
  ],
  or: ["Read the question carefully", "Find the question word: who, what or where", "Scan the text for that clue", "Answer with words from the text"],
  e: ["Escribe en inglés una pregunta con «who» y otra con «where».", "Who is in the kitchen? Where is the ball?", 5]
},
{
  n: "Questions with Do — Preguntas con Do",
  o: "Formarás preguntas cortas con do y does para hablar de tus rutinas.",
  d: "DBA 4º inglés: escribo oraciones y preguntas cortas sobre mis rutinas usando do y does.",
  t: [
    ["Do + I, you, we, they", "Para estas personas la pregunta empieza con «Do»: Do you like math?", "❓"],
    ["Does + he, she, it", "En tercera persona cambiamos a «Does» y el verbo pierde la -s.", "🔁"],
    ["Short answers", "Respuestas cortas: Yes, I do. / No, I don't.", "💬"]
  ],
  q: [
    ["¿Cuál es la forma correcta con «you»?", ["Do you likes coffee?", "Do you like coffee?", "Does you like coffee?", "You do likes coffee?"], 1,
      "Con «you» usamos «do» y el verbo sin -s: Do you like coffee?", "Do + verbo base."],
    ["Con «she, he, it» usamos...", ["do", "did", "doing", "does"], 3,
      "En tercera persona la pregunta se forma con «does».", "Does = tercera persona."],
    ["Respuesta corta correcta a «Do you like math?»", ["Yes, I do.", "Yes, I does.", "Yes, I am.", "No, I like."], 0,
      "La respuesta corta con «I» termina en «do».", "I + do."],
    ["Completa: «___ they play on Friday?»", ["Does", "Is", "Do", "Are"], 2,
      "«They» es plural, así que la pregunta empieza con «Do».", "Do con they."],
    ["¿Cuál es la respuesta negativa corta?", ["No, I does.", "No, I am.", "No, he do.", "No, I don't."], 3,
      "La negación corta de «do» es «don't»: No, I don't.", "Do + not = don't."],
    ["Lee: «Does your school have a garden?» ¿Cómo respondo si sí?", ["Yes, it do.", "Yes, it does.", "Yes, it is.", "No, it has."], 1,
      "Con «does» la respuesta corta positiva es «Yes, it does.»", "Does → does."],
    ["¿Cuál es la pregunta bien formada?", ["What you like?", "Do what you like?", "What do you like?", "You what like?"], 2,
      "El orden correcto es palabra interrogativa + do + sujeto + verbo.", "What + do + you + like."],
    ["En preguntas con «do», el verbo va...", ["en su forma base sin -s", "con -s siempre", "en pasado", "con -ing"], 0,
      "Después del sujeto el verbo siempre va en forma base.", "Base form."],
    ["Completa: «Do you ___ bananas?»", ["likes", "liking", "is like", "like"], 3,
      "Después de «Do» el verbo va sin -s: Do you like bananas?", "Sin -s después de do."],
    ["¿Cuál es una buena pregunta para hablar de tu rutina?", ["Do you get up early?", "Are you get up early?", "You do get up early?", "Do you getting up early?"], 0,
      "Orden correcto: Do + sujeto + verbo base: Do you get up early?", "Do you + verbo."],
    ["Lee: «Does he like soccer?» ¿Cómo respondo?", ["Yes, he do.", "Yes, he does.", "Yes, he is.", "Yes, he has."], 1,
      "Con «he» la respuesta corta es «Yes, he does.»", "He + does."],
    ["¿Cuál de estas NO es una pregunta con do/does?", ["Do you run?", "Does she run?", "He runs fast.", "Do they run?"], 2,
      "«He runs fast» es una oración afirmativa, no una pregunta.", "No tiene signo de interrogación."]
  ],
  cl: {
    c: [["do", "DO + I / YOU / WE / THEY", "❓"], ["does", "DOES + HE / SHE / IT", "❓"]],
    i: [["Do you like math?", "do"], ["Do they play on Friday?", "do"], ["Do we have art today?", "do"], ["Does she like math?", "does"], ["Does he play on Friday?", "does"], ["Does it rain in May?", "does"]]
  },
  em: [
    ["do", "se usa con I, you, we, they"],
    ["does", "se usa con he, she, it"],
    ["don't / doesn't", "respuesta negativa corta"]
  ],
  or: ["Choose do or does", "Add the subject", "Put the verb without -s", "Make the short answer"],
  e: ["Escribe en inglés una pregunta con «Do you...» y su respuesta corta.", "Do you like soccer? Yes, I do.", 5]
},
{
  n: "Paper or screen — En papel o en pantalla",
  o: "Compararás textos en formato físico y digital cuidando tu forma de leer.",
  d: "DBA 4º inglés: comprendo textos sencillos e ilustrados en formato físico o digital.",
  t: [
    ["On paper", "El texto en papel se toca, se subraya y no necesita batería.", "📄"],
    ["On screen", "La pantalla permite agrandar letras, buscar palabras y escuchar.", "📱"],
    ["Care for your eyes", "En cualquier formato: buena postura y descansos para cuidar la vista.", "👀"]
  ],
  q: [
    ["Un texto en papel te permite...", ["navegar con enlaces", "hacer clic en videos", "tocarlo y subrayarlo", "agrandar la letra con un botón"], 2,
      "El papel se puede marcar con lápiz o marcador: esa es su gran ventaja.", "Lo puedes subrayar."],
    ["En un texto digital puedo...", ["usar el zoom para agrandar la letra", "comer la pantalla", "romper el papel", "escribir con tiza"], 0,
      "El zoom hace la letra más grande cuando la necesitas.", "Agranda con un gesto."],
    ["Al leer en pantalla conviene...", ["mirar muy de cerca sin descansar", "apagar la luz", "leer sin parar una hora", "tomar descansos para cuidar la vista"], 3,
      "Los descansos y la postura protegen tus ojos durante la lectura.", "Cuida tus ojos."],
    ["Un libro de papel no necesita...", ["páginas", "batería", "tinta", "tapa"], 1,
      "La batería es propia de los dispositivos, no del papel.", "¿Qué gastan los aparatos?"],
    ["¿Cuál es una ventaja del texto digital?", ["Buscar palabras al instante", "Subrayar con marcador", "Sentir el papel", "Doblar la esquina"], 0,
      "La búsqueda rápida es un gran recurso de la pantalla.", "Encuentra en segundos."],
    ["¿Cuál es una ventaja del texto físico?", ["Cambia solo de pantalla", "Necesita wifi", "Tiene enlaces", "Lo puedes llevar y leer sin batería"], 3,
      "Un libro funciona en cualquier lugar, sin conexión ni carga.", "Funciona siempre."],
    ["En ambos formatos es importante...", ["leer solo los dibujos", "leer con atención y respetar el tema", "leer muy rápido", "no hacer preguntas"], 1,
      "La atención y el respeto por el tema mejoran en cualquier formato.", "Lee con cuidado."],
    ["Si el texto tiene enlaces azules, es...", ["papel común", "una pared", "un texto digital", "un cuadro"], 2,
      "Los enlaces son propios de los textos en pantalla.", "Los enlaces son clickeables."],
    ["Para comparar dos textos sobre lo mismo...", ["leo solo uno", "los quemo", "no los leo", "leo ambos y anoto lo que dicen"], 3,
      "Leer los dos y anotar las ideas permite comparar con evidencia.", "Anota las diferencias."],
    ["¿Dónde suelo encontrar instrucciones digitales?", ["En un cartel de papel", "En la pantalla de un dispositivo", "En una pared", "En el aire"], 1,
      "Las instrucciones digitales aparecen en tablets, celulares o computadores.", "Están en la pantalla."],
    ["¿Cuál consigna corresponde a una actividad digital?", ["Subraya con lápiz", "Escribe en tu cuaderno", "Toca el botón para escuchar", "Recorta la revista"], 2,
      "Tocar botones y escuchar audio son propios de la pantalla.", "Es un gesto táctil."],
    ["Cuidar la vista al leer en pantalla significa...", ["tomar descansos y mantener buena postura", "leer en la oscuridad", "acercar la pantalla al rostro", "leer sin parpadear"], 0,
      "La postura y los descansos reducen la fatiga visual.", "Lejos y con pausas."]
  ],
  cl: {
    c: [["paper", "READING ON PAPER", "📄"], ["screen", "READING ON A SCREEN", "📱"]],
    i: [["You can touch and underline it.", "paper"], ["It does not need battery.", "paper"], ["You can carry it anywhere.", "paper"], ["You can zoom the letters.", "screen"], ["You can search a word.", "screen"], ["It has links to listen.", "screen"]]
  },
  em: [
    ["paper text", "texto en papel"],
    ["digital text", "texto en pantalla"],
    ["take a break", "tomar un descanso"]
  ],
  or: ["Choose the format: paper or screen", "Read with attention", "Take care of your eyes and posture", "Answer or do the activity"],
  e: ["Escribe en inglés una ventaja de leer en papel y una de leer en pantalla.", "On paper I can underline. On screen I can zoom the letters.", 5]
}
];

/* ====== g4 / tecnologia ====== */
/* DBA 4º — tecnologia */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.tecnologia = [
  {
    "n": "Busco con palabras clave",
    "o": "Elegirás dos o tres palabras clave para encontrar información rápida en internet.",
    "d": "DBA 4º tecnología: realizo búsquedas seguras y orientadas en internet usando palabras clave.",
    "t": [
      ["Palabras clave", "En el buscador no se escriben frases completas. Escoge dos o tres palabras importantes del tema.", "🔍"],
      ["Menos es más", "Una oración larga confunde al buscador. 'Volcán Nevado del Ruiz' funciona mejor que una pregunta muy larga.", "💭"],
      ["Ajusto mi búsqueda", "Si hay muchos resultados, agrego una palabra. Si no sirven, la cambio por otra.", "🔄"]
    ],
    "q": [
      [
        "Quieres saber sobre la cumbia. ¿Qué escribes en el buscador?",
        ["la música de la cumbia colombiana que a mi abuelo le gusta mucho", "historia de la cumbia", "¿Qué es la cumbia, de dónde viene y cuándo empezó?", "cumbia cumbia cumbia cumbia"],
        1,
        "'Historia de la cumbia' resume el tema en dos palabras claras. El buscador entiende mejor las frases cortas.",
        "Usa solo dos o tres palabras."
      ],
      [
        "Buscaste 'jaguar' y hay muchos resultados de otros países. ¿Qué hago?",
        ["borro todo y busco otro tema", "repito la misma búsqueda", "agrego la palabra 'Colombia'", "escribo una pregunta muy larga"],
        2,
        "Agregar una palabra que limite el tema, como 'Colombia', filtra los resultados y te acerca a lo que buscas.",
        "Suma una palabra que acote el tema."
      ],
      [
        "¿Cuál es la mejor palabra clave para investigar el río Magdalena?",
        ["todo sobre el río más grande de Colombia", "río Magdalena", "río", "el río"],
        2,
        "'Río Magdalena' es corto y específico. La palabra 'río' es tan general que trae información de todo el mundo.",
        "Nombra el río exacto."
      ],
      [
        "¿Qué puede pasar si escribo una pregunta completa con muchas palabras?",
        ["el buscador se pone más rápido", "solo aparecen dibujos", "se borra mi búsqueda", "el buscador puede mezclar palabras que no coinciden"],
        3,
        "El buscador toma casi todas las palabras. Si hay muchas de relleno, los resultados se desvían del tema.",
        "El buscador toma casi todas las palabras."
      ],
      [
        "¿Cuál de estas búsquedas es más clara para saber cómo se hace una arepa?",
        ["receta de arepa de maíz historia de la arepa y sus secretos", "arepa", "receta de arepa", "comida colombiana que mi mamá prepara"],
        2,
        "'Receta de arepa' indica exactamente lo que necesitas: el cómo se hace, no su historia.",
        "La palabra clave aclara la intención."
      ],
      [
        "Buscaste 'loro' y quieres loros de Colombia. ¿Qué escribo?",
        ["loro de la selva que canta bonito", "loro", "loros de Colombia", "loros y más loros"],
        3,
        "La palabra 'Colombia' orienta el buscador hacia loros de nuestro país. Sin ella, verás loros de muchos lugares.",
        "Agrega el país."
      ],
      [
        "Una buena palabra clave para informarte sobre el Nevado del Ruiz es...",
        ["el volcán nevado del Ruiz ubicado en Colombia el cual es muy alto", "nevado del Ruiz", "volcán", "montaña"],
        1,
        "'Nevado del Ruiz' nombra al lugar exacto. 'Volcán' o 'montaña' traen información de muchos sitios distintos.",
        "'Nevado del Ruiz' nombra al lugar exacto."
      ],
      [
        "Si busco 'tejido wayuu', ¿qué resultados espero?",
        ["solo canciones", "recetas de comida", "información sobre el tejido de la Guajira", "videos de fútbol"],
        2,
        "Las palabras clave orientan el tema de los resultados. 'Tejido wayuu' lleva directo a esa artesanía de La Guajira.",
        "Las palabras clave orientan el tema de los resultados."
      ],
      [
        "Mi búsqueda 'feria de ciencias' trae resultados de otros años. ¿Qué hago?",
        ["agrego el año o el nombre de mi colegio", "repito la misma búsqueda", "borro el tema", "escribo solo 'feria'"],
        0,
        "Añadir el año o el colegio hace los resultados más específicos y cercanos a tu comunidad.",
        "Limita con el año o el lugar."
      ],
      [
        "Para investigar la garza real, ¿qué palabras uso?",
        ["la garza blanca que vive cerca del agua en Colombia", "ave", "garza real", "pájaros blancos de la ciénaga"],
        3,
        "'Garza real' es el nombre preciso del ave. Es mejor que 'ave', que es demasiado general.",
        "'Garza real' es el nombre preciso del ave."
      ],
      [
        "¿Por qué conviene usar palabras clave en el buscador?",
        ["para que la página cargue más rápido", "porque resumen el tema y dan resultados más útiles", "para no usar el mouse", "porque el buscador no entiende español"],
        1,
        "Las palabras clave son el resumen de tu tema. Con ellas, el buscador encuentra información más parecida a lo que necesitas.",
        "Las palabras clave son el resumen de tu tema."
      ],
      [
        "¿Cuál es un error típico al hacer una búsqueda?",
        ["usar dos palabras claras", "copiar el enlace correcto", "escribir el tema con tildes", "escribir una oración entera con palabras de relleno"],
        3,
        "Las palabras de relleno (como 'por favor', 'quiero saber') no ayudan y pueden confundir los resultados.",
        "Las palabras de relleno (como 'por favor', 'quiero saber') no ayudan y pueden co..."
      ]
    ],
    "cl": {
      "c": [
        ["buenas", "BÚSQUEDAS EFICACES", "✅"],
        ["malas", "BÚSQUEDAS INEFICACES", "❌"]
      ],
      "i": [
        ["receta de arepa", "buenas"],
        ["nevado del Ruiz", "buenas"],
        ["loros de Colombia", "buenas"],
        ["historia de la cumbia", "buenas"],
        ["todo sobre todo lo que quiero saber de la feria", "malas"],
        ["por favor información completa", "malas"],
        ["la la la la", "malas"]
      ]
    },
    "em": [
      ["palabras clave", "las palabras importantes del tema"],
      ["buscador", "página que encuentra información en internet"],
      ["resultados", "enlaces que aparecen después de buscar"]
    ],
    "or": ["Pienso en mi tema", "Elijo dos o tres palabras clave", "Las escribo en el buscador", "Reviso los resultados y afino la búsqueda"],
    "e": [
      "Escribe dos palabras clave para saber más de la feria de tu colegio.",
      "feria colegio; feria de ciencias",
      5
    ]
  },
  {
    "n": "Preguntas guía antes de buscar",
    "o": "Formularás tu propia pregunta de investigación antes de encender el computador.",
    "d": "DBA 4º tecnología: realizo búsquedas orientadas en internet definiendo antes qué quiero averiguar.",
    "t": [
      ["Pregunta guía", "Antes de buscar, escríbete en una hoja la pregunta que quiero responder. Así no me pierdo.", "❓"],
      ["¿Quién, qué, cuándo, dónde?", "Estas palabras ayudan a armar preguntas claras sobre un tema.", "🧭"],
      ["Una pregunta, una búsqueda", "Si tengo varias dudas, las separo en preguntas pequeñas y busco una por una.", "🧩"]
    ],
    "q": [
      [
        "Quieres saber por qué llueve en el trópico. ¿Cuál es buena pregunta guía?",
        ["lluvia", "por qué llueve en el trópico", "clima", "agua"],
        1,
        "Una pregunta guía es completa y clara. Con ella sabrás identificar si la página te dio la respuesta.",
        "Debe decir qué quiero saber."
      ],
      [
        "¿Qué hago primero antes de buscar en internet?",
        ["abro muchos enlaces a la vez", "escribo mi pregunta guía en una hoja", "apago el computador", "le pregunto al primero que vea"],
        1,
        "Definir la pregunta guía orienta toda la búsqueda y evita perder el tiempo.",
        "Empiezo escribiendo mi duda."
      ],
      [
        "Mi pregunta es '¿Qué comida típica tiene mi departamento?'. ¿Cuál es el filtro para saber si una página me sirve?",
        ["si tiene colores bonitos", "si responde a mi pregunta sobre comida típica", "si tiene muchos botones", "si su letra es grande"],
        2,
        "El criterio es sencillo: la página debe responder a mi pregunta guía, no solo verse atractiva.",
        "El criterio es sencillo: la página debe responder a mi pregunta guía, no solo ve..."
      ],
      [
        "Tengo tres dudas sobre la feria. ¿Qué conviene hacer?",
        ["buscar las tres a la vez en una sola palabra", "separarlas en tres preguntas pequeñas", "elegir al azar una", "no buscar nada"],
        1,
        "Las preguntas pequeñas dan resultados más precisos y fáciles de entender.",
        "Una duda, una búsqueda."
      ],
      [
        "¿Cuál de estas NO es una pregunta clara?",
        ["¿Cómo se hace el tejido wayuu?", "¿Quién pintó la mona lisa?", "tejido wayuu historia pintura", "¿Cuándo se celebra el día del maestro?"],
        3,
        "Una lista de palabras no es una pregunta. Falta el 'qué quiero saber'.",
        "Una lista de palabras no es una pregunta."
      ],
      [
        "¿Qué palabra interrogativa uso para saber el lugar de un evento?",
        ["cuándo", "cuántos", "dónde", "quiénes"],
        2,
        "'Dónde' pregunta por el lugar. Es una de las palabras que guían bien una búsqueda.",
        "'Dónde' pregunta por el lugar."
      ],
      [
        "Después de leer una página, ¿cómo sé si respondió mi pregunta?",
        ["comparo lo leído con mi pregunta guía", "cuento los párrafos", "miro si el sitio es largo", "veo si tiene videos"],
        0,
        "La pregunta guía es el filtro: si la página la responde, la información me sirve.",
        "Comparo con mi duda inicial."
      ],
      [
        "¿Cuál es una buena pregunta guía sobre la cumbia?",
        ["música", "por qué la cumbia es patrimonio de Colombia", "bailar", "acordeón"],
        3,
        "La pregunta 'por qué' pide una explicación y te lleva a buscar textos con sentido.",
        "La pregunta 'por qué' pide una explicación y te lleva a buscar textos con sentido."
      ],
      [
        "¿Qué hago si encuentro información que no responde mi pregunta?",
        ["la copio igual", "busco otro enlace", "la invento", "la borro del navegador"],
        1,
        "Si un sitio no responde, sigo buscando en otro. No todo lo que aparece sirve.",
        "Si un sitio no responde, sigo buscando en otro."
      ],
      [
        "Mi pregunta es '¿Cuántos departamentos tiene Colombia?'. ¿Qué tipo de dato busco?",
        ["un número", "una canción", "un dibujo", "un saludo"],
        0,
        "Las palabras 'cuántos' y 'cuántas' indican que busco una cantidad.",
        "Las palabras 'cuántos' y 'cuántas' indican que busco una cantidad."
      ],
      [
        "Escribir la pregunta guía antes de buscar ayuda porque...",
        ["me hace perder tiempo", "evita que el computador se dañe", "me mantiene enfocado en el tema", "hace que todo cargue más rápido"],
        2,
        "Tener la pregunta a la vista evita desviarme y me permite organizar lo que encuentre.",
        "Evita distracciones."
      ],
      [
        "¿Cuál es una buena pregunta guía sobre el agua en mi vereda?",
        ["agua", "cómo cuidamos el agua en mi vereda", "líquido", "río río río"],
        1,
        "La buena pregunta nombra el tema y lo que quiero saber sobre él.",
        "La buena pregunta nombra el tema y lo que quiero saber sobre él."
      ]
    ],
    "cl": {
      "c": [
        ["claras", "PREGUNTAS QUE ORIENTAN", "✅"],
        ["confusas", "PREGUNTAS QUE CONFUNDEN", "❌"]
      ],
      "i": [
        ["¿Dónde está el río Magdalena?", "claras"],
        ["¿Cuándo se celebra la independencia?", "claras"],
        ["¿Quién hizo el tejido wayuu?", "claras"],
        ["buscar cosas", "confusas"],
        ["información de todo", "confusas"],
        ["eso de la feria", "confusas"]
      ]
    },
    "em": [
      ["pregunta guía", "la duda que escribo antes de buscar"],
      ["dónde", "palabra que pregunta por el lugar"],
      ["filtro", "criterio para saber si una página me sirve"]
    ],
    "or": ["Eligo el tema que quiero investigar", "Escribo mi pregunta guía", "Busco información que la responda", "Comparo lo leído con mi pregunta"]
  },
  {
    "n": "Elijo sitios confiables",
    "o": "Reconocerás páginas confiables para la información de tus trabajos.",
    "d": "DBA 4º tecnología: realizo búsquedas seguras evaluando la confiabilidad de las fuentes.",
    "t": [
      ["¿Qué es una fuente?", "Una fuente es el autor o el sitio de donde viene la información. No todas dicen la verdad.", "📚"],
      ["Señales de confianza", "Los sitios de escuelas, museos, bibliotecas y medios conocidos suelen revisar lo que publican.", "🏛️"],
      ["Comparo dos fuentes", "Si dos sitios dicen lo mismo, puedo confiar más en ese dato. Si difieren, sigo investigando.", "⚖️"]
    ],
    "q": [
      [
        "¿Cuál de estas fuentes es más confiable para un trabajo sobre la Guajira?",
        ["un blog personal sin nombre", "la página de una enciclopedia escolar", "un anuncio de juegos", "un mensaje reenviado"],
        1,
        "Las enciclopedias escolares revisan sus datos antes de publicarlos. Un blog personal puede tener errores o inventos.",
        "Elijo la que revisa sus datos."
      ],
      [
        "Un sitio no dice quién escribió la información. ¿Qué señal es esa?",
        ["que el sitio es moderno", "que puede no ser confiable", "que tiene buenas imágenes", "que está en español"],
        1,
        "Las fuentes confiables muestran autor y fecha. Ocultarlos es una alerta para buscar otro sitio.",
        "Falta el autor: alerta."
      ],
      [
        "¿Qué ayuda a saber si un dato es cierto?",
        ["que el texto sea muy largo", "que aparezca en dos fuentes confiables", "que tenga colores brillantes", "que tenga música"],
        2,
        "Cuando varias fuentes confiables coinciden, el dato es más seguro.",
        "Cuando varias fuentes confiables coinciden, el dato es más seguro."
      ],
      [
        "Para investigar volcanes de Colombia, ¿qué sitio elegirías?",
        ["la página de un instituto de estudios del país", "un foro donde cualquiera escribe", "un juego en línea", "un video sin autor"],
        0,
        "Los institutos científicos y educativos revisan sus publicaciones y citan sus fuentes.",
        "Busco quién respalda el dato."
      ],
      [
        "Un texto dice 'los jaguares vuelan'. ¿Qué hago?",
        ["lo copio tal cual", "lo creo porque está en internet", "busco otra fuente para comprobarlo", "lo comparto de inmediato"],
        3,
        "Los jaguares son felinos y no vuelan. Ante un dato raro, verifico con otra fuente confiable.",
        "Ante lo imposible, verifica."
      ],
      [
        "¿Qué NO caracteriza a una fuente confiable?",
        ["muestra su autor", "corrige sus errores", "dice 'esto es 100% verdad sin pruebas'", "cita de dónde sacó los datos"],
        2,
        "Quien asegura sin pruebas y sin fuentes busca convencer, no informar.",
        "Quien asegura sin pruebas y sin fuentes busca convencer, no informar."
      ],
      [
        "¿Cuál es una buena señal de un sitio educativo?",
        ["tiene anuncios que parpadean", "pide datos personales al entrar", "muestra autor, fecha y fuentes", "usa mayúsculas en todo"],
        3,
        "Autor, fecha y fuentes son la firma de un contenido responsable.",
        "Autor, fecha y fuentes son la firma de un contenido responsable."
      ],
      [
        "Dos sitios cuentan fechas distintas para un hecho histórico. ¿Qué hago?",
        ["elijo la que me gusta", "elijo la primera", "busco una tercera fuente confiable", "me quedo con la más corta"],
        2,
        "Ante el conflicto entre fuentes, una tercera fuente confiable ayuda a aclarar el dato.",
        "Desempata una tercera fuente."
      ],
      [
        "Un mensaje de internet afirma un dato asombroso y pide compartirlo ya. ¿Qué conviene hacer?",
        ["compartirlo con todos", "verificarlo antes de compartir", "ignorar el tema", "responder sin leer"],
        1,
        "Los mensajes que piden compartir rápido suelen ser rumores. Primero verifico.",
        "Primero verifico, después comparto."
      ],
      [
        "Las bibliotecas y los museos publican información porque...",
        ["es más bonita", "sus datos se revisan antes de publicarse", "tienen más imágenes", "no tienen que responder"],
        3,
        "Esas instituciones cuidan su reputación y revisan lo que publican.",
        "Esas instituciones cuidan su reputación y revisan lo que publican."
      ],
      [
        "¿Qué le pregunta a una página para evaluarla?",
        ["¿tiene dibujos bonitos?", "¿quién la escribió y cuándo?", "¿tiene muchos botones?", "¿es larga?"],
        1,
        "Autor y fecha son las primeras preguntas para evaluar una fuente.",
        "Autor y fecha son las primeras preguntas para evaluar una fuente."
      ],
      [
        "Un compañero dice que un dato es cierto 'porque lo vio en internet'. ¿Qué le respondes?",
        ["internet tiene toda la verdad", "conviene comprobar la fuente antes de creerlo", "entonces está bien", "copiemos el dato"],
        0,
        "Internet contiene fuentes buenas y malas. La clave es evaluar quién publica y con qué pruebas.",
        "Internet contiene fuentes buenas y malas."
      ]
    ],
    "cl": {
      "c": [
        ["confiables", "FUENTES CONFIABLES", "✅"],
        ["dudosas", "FUENTES DUDOSAS", "❌"]
      ],
      "i": [
        ["enciclopedia escolar", "confiables"],
        ["página de un museo", "confiables"],
        ["informe de un instituto", "confiables"],
        ["foro sin nombres", "dudosas"],
        ["mensaje que pide compartir ya", "dudosas"],
        ["blog sin autor ni fecha", "dudosas"]
      ]
    },
    "em": [
      ["fuente", "el origen de la información"],
      ["autor", "la persona que escribió el contenido"],
      ["verificar", "comprobar un dato con otra fuente"]
    ],
    "or": ["Leo el texto y elijo el dato importante", "Miro quién escribió el sitio y cuándo", "Busco una segunda fuente confiable", "Comparo los datos y decido"],
    "e": [
      "Escribe dos señales de que una página es confiable.",
      "Muestra quién la escribió y cita sus fuentes.",
      5
    ]
  },
  {
    "n": "Navego con cuidado en internet",
    "o": "Aplicarás reglas de seguridad al navegar: no doy datos, pido ayuda y no hago clic en lo desconocido.",
    "d": "DBA 4º tecnología: realizo búsquedas seguras en internet cuidando mis datos y pidiendo ayuda a un adulto.",
    "t": [
      ["No doy mis datos", "Mi nombre completo, dirección, colegio y teléfono no se escriben en formularios de internet.", "🛡️"],
      ["Ante lo raro, pregunto", "Si aparece una ventana inesperada o un regalo que parece mentira, no hago clic: le pregunto a un adulto.", "🧑"],
      ["Bajo solo con permiso", "Descargo imágenes o archivos únicamente con la guía del docente o un adulto responsable.", "📥"]
    ],
    "q": [
      [
        "Una página te regala un premio si escribes tu dirección. ¿Qué hago?",
        ["la escribo rápido", "no escribo mis datos y le aviso a un adulto", "escribo la de mi amigo", "apago la pantalla"],
        1,
        "Los premios que piden datos personales suelen ser engañosos. Nunca doy mi información y aviso a un adulto.",
        "Nunca doy datos personales."
      ],
      [
        "Aparece una ventana que no abrí con un anuncio saltón. ¿Qué hago?",
        ["hago clic para ver qué es", "la cierro y le aviso al adulto", "escribo mis datos", "la dejo abierta"],
        1,
        "Las ventanas inesperadas pueden ser peligrosas. Cerrarla y avisar es lo seguro.",
        "Cierro y aviso."
      ],
      [
        "¿Cuál de estos datos SÍ puedo escribir en internet con mi maestro?",
        ["mi número de cédula", "el tema de mi trabajo de sociales", "la contraseña de mi mamá", "mi dirección de casa"],
        1,
        "Los datos del trabajo escolar no son personales. La cédula, la contraseña y la dirección siempre se cuidan.",
        "Los datos del trabajo escolar no son personales."
      ],
      [
        "Un desconocido en un juego en línea te pide saber dónde vive tu familia. ¿Qué hago?",
        ["le respondo que no", "le digo la dirección", "lo bloqueo y aviso a un adulto", "le mando una foto"],
        3,
        "Ningún desconocido necesita saber dónde vivo. Lo bloqueo y se lo cuento a un adulto.",
        "Bloqueo y aviso."
      ],
      [
        "¿Por qué no debo usar la misma contraseña en todo?",
        ["porque se olvida más fácil", "porque si la descubren en un sitio, la tendrán en todos", "porque las contraseñas no sirven", "porque el computador se lenta"],
        1,
        "Usar contraseñas distintas protege el resto de tus cuentas si una se filtra.",
        "Usar contraseñas distintas protege el resto de tus cuentas si una se filtra."
      ],
      [
        "¿Dónde es más seguro hacer una búsqueda escolar?",
        ["en el navegador que el maestro preparó", "en cualquier enlace de un mensaje", "en la primera página que aparezca", "en un sitio que pide registrarse"],
        0,
        "El maestro orienta hacia sitios seguros y adecuados para la edad.",
        "Sigo la guía del docente."
      ],
      [
        "Quiero descargar una imagen para mi trabajo. ¿Qué hago?",
        ["la bajo donde sea, rápido", "la bajo con permiso del docente y anoto la fuente", "la tomo de un sitio que no conozco", "la pido por mensaje a un desconocido"],
        1,
        "Descargar con permiso y citar la fuente es parte de una búsqueda segura y honesta.",
        "Descargar con permiso y citar la fuente es parte de una búsqueda segura y honesta."
      ],
      [
        "Un sitio pide crear una cuenta con muchos datos míos. ¿Qué conviene?",
        ["llenarlo todo", "pedir ayuda a un adulto antes de decidir", "inventar datos", "dejarlo para después sin avisar"],
        1,
        "Un adulto puede evaluar si el sitio realmente los necesita.",
        "Un adulto puede evaluar si el sitio realmente los necesita."
      ],
      [
        "¿Cuál es una buena costumbre al usar el computador del colegio?",
        ["dejar la sesión abierta", "cerrar sesión y dejar el equipo en orden", "borrar el trabajo de otros", "instalar lo que encuentre"],
        1,
        "Cerrar sesión y cuidar el equipo compartido evita problemas para los demás."
      ],
      [
        "Un enlace dice 'gana un teléfono'. ¿Qué hago?",
        ["hago clic ya", "lo ignoro y le aviso al adulto", "lo comparto", "escribo mis datos"],
        3,
        "Los mensajes que prometen premios suelen ser trampas. Ignorarlos y avisar es lo correcto.",
        "Los premios fáciles suenan a trampa."
      ],
      [
        "¿Con quién puedo hablar si algo en internet me asusta?",
        ["con un amigo que lo oculte", "con mi maestro o un adulto de confianza", "con nadie", "con el desconocido"],
        1,
        "Un adulto de confianza me ayuda a resolverlo sin culpas. Siempre hay que avisar."
      ],
      [
        "¿Qué información personal NUNCA debo publicar en internet?",
        ["mi color favorito", "la foto de mi mascota", "mi dirección y mi teléfono", "el nombre de mi colegio"],
        2,
        "Dirección y teléfono permiten localizarme. Esa información se guarda en casa, no en internet."
      ]
    ],
    "cl": {
      "c": [
        ["seguro", "LO QUE HAGO SEGURO", "✅"],
        ["riesgoso", "LO QUE NO DEBO HACER", "❌"]
      ],
      "i": [
        ["aviso a un adulto", "seguro"],
        ["cierro la ventana rara", "seguro"],
        ["uso contraseñas distintas", "seguro"],
        ["doy mi dirección a desconocidos", "riesgoso"],
        ["hago clic en premios fáciles", "riesgoso"],
        ["descargo archivos sin permiso", "riesgoso"]
      ]
    },
    "em": [
      ["datos personales", "información que revela quién y dónde soy"],
      ["adulto de confianza", "persona que me cuida y me orienta"],
      ["contraseña", "palabra secreta que solo yo uso"]
    ],
    "or": ["Navego solo en los sitios que el docente indica", "No escribo mis datos personales", "Si algo raro aparece, no hago clic", "Le aviso a un adulto de confianza"]
  },
  {
    "n": "Encuentro imágenes y cito la fuente",
    "o": "Seleccionarás imágenes apropiadas para tu trabajo y anotarás de dónde salieron.",
    "d": "DBA 4º tecnología: integro texto e imágenes en presentaciones digitales respetando el origen de cada recurso.",
    "t": [
      ["La imagen correcta", "Elijo imágenes que muestren el tema sin datos inventados ni anuncios.", "🖼️"],
      ["La fuente siempre", "Al usar una imagen, anoto el sitio donde la encontré. Así honro el trabajo de otros.", "📝"],
      ["Calidad y tamaño", "Elijo imágenes claras y de buen tamaño para que se vean bien en la pantalla.", "🔎"]
    ],
    "q": [
      [
        "¿Por qué anoto la fuente de una imagen?",
        ["porque el maestro lo pide y así se respeta a quien la hizo", "porque ocupa lugar en la hoja", "para que la imagen sea más grande", "porque no puedo usarla"],
        0,
        "Citar la fuente es honestidad: muestra de dónde salió y respeta a su autor.",
        "Es respeto a quien la hizo."
      ],
      [
        "Busco una imagen del río Magdalena. ¿Cuál elijo?",
        ["una clara del río con su nombre", "una de un río sin datos", "un anuncio con letras grandes", "una foto borrosa"],
        1,
        "La imagen debe corresponder al tema y aportar información clara."
      ],
      [
        "¿Dónde anoto la fuente de la imagen?",
        ["en el borde de la pantalla", "al pie de la diapositiva o en mi lista de fuentes", "no la anoto", "en el fondo con letra chica"],
        2,
        "El lugar correcto es junto a la imagen o en la lista de fuentes del trabajo."
      ],
      [
        "Una imagen tiene muchos anuncios alrededor. ¿Qué hago?",
        ["la uso igual", "busco otra sin anuncios", "recorto los anuncios con tijera", "la aumento"],
        1,
        "Los anuncios distraen y pueden indicar un sitio poco cuidadoso. Mejor busco otra opción."
      ],
      [
        "Tengo dos imágenes del volcán. ¿Cuál conviene usar?",
        ["la más pequeña y borrosa", "la clara y de buen tamaño", "la que tiene música", "la que ocupa más página"],
        3,
        "La claridad y el tamaño hacen que la imagen se entienda en la presentación.",
        "Mejor clara que borrosa."
      ],
      [
        "¿Qué hago con una imagen demasiado grande para la diapositiva?",
        ["la estiro hasta deformarla", "la reduzco manteniendo sus proporciones", "la borro", "la pongo dos veces"],
        1,
        "Reducir sin deformar conserva la forma natural del dibujo o la foto."
      ],
      [
        "Uso una imagen de internet en mi trabajo. ¿Qué debo escribir?",
        ["solo mi nombre", "el sitio o autor de la imagen", "una canción", "el color de la imagen"],
        1,
        "El crédito incluye el sitio o el autor. Es la parte mínima de citar una fuente."
      ],
      [
        "¿Cuál es una buena imagen para explicar el tejido wayuu?",
        ["una foto de una artesanía wayuu", "un dibujo de un tren", "un paisaje de montaña nevada", "un video sin conexión"],
        2,
        "La buena imagen ilustra el tema exacto del que habla el texto."
      ],
      [
        "¿Qué evito al buscar imágenes?",
        ["usar palabras clave", "elegir las que no tienen relación con el tema", "anotar la fuente", "pedir ayuda"],
        1,
        "Elegir imágenes sin relación confunde al que mira el trabajo."
      ],
      [
        "Una imagen encontrada no se entiende sola. ¿Qué hago?",
        ["la borro", "la acompaño de un texto corto que la explique", "la giro muchas veces", "la pongo más veces"],
        3,
        "Texto e imagen se complementan: el texto explica lo que la imagen muestra."
      ],
      [
        "¿Puedo tomar una foto propia para el trabajo?",
        ["sí, y también anoto que es mía", "no, está prohibido", "sí, pero sin decirlo", "solo si es de un animal"],
        0,
        "Las fotos propias también llevan crédito: 'Foto: autora' o 'Foto: autor'."
      ],
      [
        "¿Cuántas imágenes conviene poner en una diapositiva?",
        ["una o dos bien elegidas", "diez pequeñas", "ninguna", "todas las que quepan"],
        0,
        "Pocas imágenes claras comunican mejor que muchas imágenes apretadas.",
        "Menos, pero mejor."
      ]
    ],
    "cl": {
      "c": [
        ["apropiadas", "IMÁGENES APROPIADAS", "✅"],
        ["inconvenientes", "IMÁGENES QUE NO AYUDAN", "❌"]
      ],
      "i": [
        ["foto clara del tema", "apropiadas"],
        ["dibujo propio con crédito", "apropiadas"],
        ["imagen de gran tamaño nítida", "apropiadas"],
        ["imagen borrosa", "inconvenientes"],
        ["imagen sin relación con el tema", "inconvenientes"],
        ["imagen llena de anuncios", "inconvenientes"]
      ]
    },
    "em": [
      ["fuente de la imagen", "el sitio o autor del que proviene"],
      ["crédito", "la anotación que reconoce al autor"],
      ["proporción", "la forma natural que no debo deformar"]
    ],
    "or": ["Busco imágenes con palabras clave", "Elijo las claras y relacionadas con el tema", "Descargo o copio con permiso del docente", "Anoto la fuente junto a cada imagen"],
    "e": [
      "Escribe el crédito que escribirías al pie de una foto encontrada en internet.",
      "Foto tomada de una enciclopedia escolar sobre Colombia.",
      5
    ]
  },
  {
    "n": "Diseño mi presentación paso a paso",
    "o": "Organizarás una presentación digital sencilla con título, desarrollo y cierre.",
    "d": "DBA 4º tecnología: diseño presentaciones digitales sencillas organizando título, contenido y conclusiones.",
    "t": [
      ["Diapositiva de título", "La primera lámina lleva el tema, mi nombre y la fecha. Es la puerta de entrada.", "🎯"],
      ["Diapositivas de desarrollo", "Cada lámina trata una idea del tema con pocas palabras y una imagen.", "🧱"],
      ["Diapositiva de cierre", "La última lámina resume las conclusiones y agradece a la audiencia.", "🔚"]
    ],
    "q": [
      [
        "¿Qué lleva la diapositiva de título?",
        ["el tema, mi nombre y la fecha", "solo un dibujo", "las conclusiones", "todos los datos"],
        0,
        "El título presenta el trabajo: tema, autor y fecha ayudan a ubicar al público.",
        "Tema, autor y fecha."
      ],
      [
        "¿Cuántas ideas principales pongo en cada diapositiva?",
        ["una idea clara", "todas las que sé", "ninguna", "diez ideas"],
        1,
        "Una idea por lámina hace que el mensaje se entienda rápido.",
        "Una idea, una lámina."
      ],
      [
        "¿Dónde van las conclusiones?",
        ["en la primera lámina", "en la última lámina", "en el título", "no se ponen"],
        2,
        "El cierre recapitula lo aprendido y deja el mensaje final."
      ],
      [
        "Voy a presentar sobre la feria del colegio. ¿Cuál es un buen título?",
        ["cosas", "La feria de ciencias de mi colegio", "trabajo", "información importante"],
        1,
        "Un buen título dice el tema exacto de forma clara y atractiva."
      ],
      [
        "¿Qué hago si una lámina queda con demasiado texto?",
        ["lo dejo así", "lo divido en dos láminas", "lo borro entero", "lo hago más pequeño hasta ilegal"],
        1,
        "Dividir el texto en láminas mantiene la claridad del mensaje.",
        "Divido, no aprieto."
      ],
      [
        "El orden lógico de una presentación es...",
        ["cierre, título, desarrollo", "desarrollo, cierre, título", "título, desarrollo, cierre", "título, cierre, desarrollo"],
        3,
        "Se empieza presentando el tema, luego se desarrolla y se cierra con lo aprendido.",
        "Empiezo, desarrollo, cierro."
      ],
      [
        "¿Qué escribo en la diapositiva de agradecimiento?",
        ["las gracias a la audiencia", "más datos", "otro título", "nada"],
        0,
        "Agradecer es una cortesía que cierra bien cualquier presentación."
      ],
      [
        "Una buena presentación digital integra...",
        ["solo texto", "solo imágenes", "texto e imágenes", "música fuerte"],
        2,
        "Texto e imágenes trabajando juntos comunican mejor que cualquiera de los dos solo."
      ],
      [
        "Antes de presentar, ¿qué reviso?",
        ["que estén las tres partes: título, desarrollo y cierre", "solo el color", "el reloj", "la silla"],
        0,
        "Revisar la estructura completa evita que falte información importante.",
        "Reviso las tres partes."
      ],
      [
        "¿Qué hago si me equivoco al presentar?",
        ["me siento mal y me callo", "respiro, corrijo y sigo", "corro del salón", "culpo al computador"],
        3,
        "Un error se corrige con calma y se continúa. Es parte de aprender."
      ],
      [
        "¿Para quién adapto el lenguaje de mi presentación?",
        ["para mí solo", "para la audiencia", "para el computador", "para nadie"],
        1,
        "Pensar en la audiencia ayuda a elegir palabras sencillas y ejemplos cercanos."
      ],
      [
        "¿Cuál es un buen color de fondo para las letras?",
        ["uno claro con letras oscuras o viceversa", "todos los colores a la vez", "amarillo sobre amarillo", "ninguno"],
        0,
        "El contraste entre fondo y letra hace que el texto se lea fácilmente."
      ]
    ],
    "cl": {
      "c": [
        ["titulo", "PARTE INICIAL", "✅"],
        ["cierre", "PARTE FINAL", "📌"]
      ],
      "i": [
        ["tema del trabajo", "titulo"],
        ["nombre y fecha", "titulo"],
        ["idea central", "titulo"],
        ["conclusiones", "cierre"],
        ["agradecimiento", "cierre"],
        ["preguntas al público", "cierre"]
      ]
    },
    "em": [
      ["diapositiva de título", "lámina que presenta el tema"],
      ["diapositiva de cierre", "lámina final con conclusiones"],
      ["desarrollo", "las láminas que explican el tema"]
    ],
    "or": ["Elijo el tema y el objetivo", "Armo la diapositiva de título", "Desarrollo el tema en pocas láminas", "Escribo las conclusiones y agradezco"],
    "e": [
      "Escribe el título de una presentación sobre tu vereda o barrio.",
      "Mi vereda El Roble: gente, agua y fiestas",
      5
    ]
  },
  {
    "n": "Texto e imagen se llevan bien",
    "o": "Integrarás texto corto e imágenes para que tu mensaje se entienda mejor.",
    "d": "DBA 4º tecnología: diseño presentaciones digitales sencillas integrando texto e imágenes con claridad.",
    "t": [
      ["Poco texto, mucha claridad", "En cada lámina escribo solo las ideas clave. La explicación la doy con mi voz.", "✏️"],
      ["La imagen apoya", "La imagen muestra lo que el texto dice. Si no tiene relación, la quito.", "🤝"],
      ["Ubicación y legibilidad", "Dejo espacios en blanco y uso letras grandes para que todos vean desde lejos.", "📐"]
    ],
    "q": [
      [
        "Un compañero escribe un párrafo completo en cada lámina. ¿Qué le sugieres?",
        ["dejar solo las ideas clave", "escribir más", "poner menos imágenes", "usar letra pequeña"],
        0,
        "En las láminas no se lee todo: van ideas clave, no párrafos completos.",
        "Las láminas llevan ideas, no párrafos."
      ],
      [
        "Pongo una foto de montañas en una lámina sobre la arepa. ¿Qué pasa?",
        ["enriquece el tema", "confunde porque no tiene relación", "hace el trabajo más corto", "mejora el color"],
        1,
        "La imagen debe ilustrar el tema. Si no tiene relación, distrae en lugar de ayudar."
      ],
      [
        "¿Qué tamaño de letra uso para que el público lea?",
        ["grande", "pequeñísima", "el mínimo", "el que sea"],
        2,
        "La letra grande permite que el último compañero también lea desde atrás.",
        "Grande, para que se lea."
      ],
      [
        "¿Cuántas imágenes conviene usar para explicar una idea?",
        ["una o dos claras", "ocho en fila", "ninguna", "todo el carrusel"],
        0,
        "Pocas imágenes bien elegidas refuerzan la idea sin saturar."
      ],
      [
        "¿Qué queda mejor en una lámina?",
        ["una palabra clave con una imagen", "un texto largo sin imágenes", "una página de libro copiada", "un color sin contenido"],
        1,
        "La palabra clave resume y la imagen lo muestra: se apoyan mutuamente."
      ],
      [
        "El texto y la imagen de una lámina deben...",
        ["hablar del mismo tema", "ser de colores iguales", "tener el mismo tamaño", "no tener relación"],
        0,
        "La coherencia entre texto e imagen es la base de una buena lámina."
      ],
      [
        "Ubico la imagen donde estaba el título por error. ¿Qué hago?",
        ["la dejo tapando todo", "la recoloco y verifico que no tape el texto", "borro la lámina", "la agrando"],
        3,
        "Verificar la ubicación evita que un elemento tape a otro."
      ],
      [
        "¿Qué hago si el texto no cabe con letra grande?",
        ["lo divido en dos láminas", "lo achico hasta que nadie lea", "lo borro", "lo pongo en la última lámina"],
        0,
        "Dividir el contenido es mejor que sacrificar la legibilidad.",
        "Divido el texto en dos."
      ],
      [
        "Un buen trabajo integra texto e imágenes porque...",
        ["ocupa más espacio", "comunica mejor el mensaje", "es más lento", "tiene más colores"],
        1,
        "La combinación adecuada hace el mensaje más claro y memorable."
      ],
      [
        "¿Qué reviso antes de pasar la lámina?",
        ["que el texto se lea y la imagen acompañe", "solo los colores", "la hora", "el número de la lámina"],
        0,
        "La revisión rápida de lectura e imagen evita sorpresas al presentar."
      ],
      [
        "¿Puedo copiar el texto de un libro completo en mi lámina?",
        ["sí, entero", "no, tomo solo las ideas principales", "sí, dos veces", "solo el título del libro"],
        1,
        "Resumir con mis palabras demuestra que entendí y respeta el espacio de la lámina."
      ],
      [
        "¿Qué aportan los espacios en blanco?",
        ["hacen que el diseño se vea ordenado y fácil de leer", "estorban", "ocupan el trabajo", "no sirven"],
        2,
        "El aire visual ordena la lámina y facilita la lectura."
      ]
    ],
    "cl": {
      "c": [
        ["bien", "INTEGRACIÓN QUE FUNCIONA", "✅"],
        ["mal", "ERRORES FRECUENTES", "❌"]
      ],
      "i": [
        ["idea clave con imagen clara", "bien"],
        ["letra grande con buen contraste", "bien"],
        ["imagen relacionada con el tema", "bien"],
        ["párrafo completo copiado", "mal"],
        ["imagen sin relación con el tema", "mal"],
        ["letra diminuta amontonada", "mal"]
      ]
    },
    "em": [
      ["texto clave", "las palabras principales de la lámina"],
      ["legibilidad", "qué tan fácil es leer el contenido"],
      ["contraste", "diferencia clara entre fondo y letra"]
    ],
    "or": ["Escribo solo las ideas clave", "Elijo una imagen relacionada", "Ubico texto e imagen sin que se tapen", "Reviso que la letra se lea desde lejos"]
  },
  {
    "n": "Escribo conclusiones y agradecimientos",
    "o": "Redactarás conclusiones breves que resuman lo aprendido en tu presentación.",
    "d": "DBA 4º tecnología: cierro mis presentaciones digitales con conclusiones claras del tema investigado.",
    "t": [
      ["¿Qué es una conclusión?", "Es el mensaje final: lo más importante que aprendí sobre el tema.", "🏁"],
      ["Resumo, no repito", "En la conclusión no copio todo el trabajo: destaco lo esencial con mis palabras.", "🔎"],
      ["Gracias y fuentes", "Agradezco a la audiencia y recuerdo de dónde tomé la información.", "🙏"]
    ],
    "q": [
      [
        "¿Qué debo escribir en las conclusiones?",
        ["lo más importante que aprendí", "todo el trabajo copiado", "otro título", "los datos de mis amigos"],
        0,
        "La conclusión destaca lo esencial con mis propias palabras.",
        "Destaco lo esencial."
      ],
      [
        "¿Cuántas ideas pongo en la conclusión?",
        ["dos o tres claras", "treinta", "una lista interminable", "ninguna"],
        1,
        "Pocas ideas claras resumen mejor el aprendizaje.",
        "Dos o tres ideas claras."
      ],
      [
        "¿Qué NO va en las conclusiones?",
        ["lo que aprendí", "los agradecimientos", "los datos inventados sin revisar", "el mensaje final"],
        3,
        "Las conclusiones deben apoyarse en lo que realmente investigué."
      ],
      [
        "¿Dónde van las fuentes del trabajo?",
        ["en una lámina final o al pie de cada lámina", "en el título", "no se ponen", "en el nombre"],
        0,
        "Anotar las fuentes al final o al pie es una práctica honesta y ordenada."
      ],
      [
        "Un buen agradecimiento suena así:",
        ["gracias por su atención", "ya", "adiós", "no sé"],
        1,
        "Agradecer la atención es una cortesía sencilla y apropiada al cierre."
      ],
      [
        "¿Cómo cierro mi presentación si quedan preguntas?",
        ["invito al público a preguntar", "me voy corriendo", "repito todo", "no dejo preguntas"],
        0,
        "Invitar preguntas muestra seguridad y disposición a compartir."
      ],
      [
        "¿Qué hago si no sé responder una pregunta del público?",
        ["miento", "reconozco que no lo sé y lo investigaré", "me río", "culpo al computador"],
        2,
        "Reconocer lo que falta por aprender es honesto y valiente."
      ],
      [
        "La conclusión ayuda al público porque...",
        ["le recuerda lo importante", "lo cansa", "ocupa tiempo", "lo confunde"],
        0,
        "El mensaje final fija en la memoria lo esencial de la presentación."
      ],
      [
        "¿Con qué palabras puedo empezar una conclusión?",
        ["aprendí que...", "color", "abc", "jajaja"],
        0,
        "Frasear 'aprendí que...' ayuda a expresar lo aprendido con claridad.",
        "Empiezo con: aprendí que..."
      ],
      [
        "Si mi trabajo fue en equipo, ¿qué escribo en las conclusiones?",
        ["las ideas del grupo y el nombre de los integrantes", "solo mi nombre", "ningún nombre", "un saludo"],
        1,
        "Reconocer al equipo es justo y muestra trabajo colaborativo."
      ],
      [
        "¿Puedo terminar con una imagen que resuma el tema?",
        ["sí, si representa lo aprendido", "no, está prohibido", "sí, aunque no tenga relación", "solo con música"],
        0,
        "Una imagen final bien elegida refuerza el mensaje del trabajo."
      ],
      [
        "Las conclusiones se escriben...",
        ["después de investigar y ordenar lo aprendido", "antes de buscar", "mientras juego", "nunca"],
        0,
        "Primero investigo, luego resumo. El orden ayuda a concluir bien."
      ]
    ],
    "cl": {
      "c": [
        ["sí", "SÍ VA EN EL CIERRE", "✅"],
        ["no", "NO VA EN EL CIERRE", "❌"]
      ],
      "i": [
        ["resumen con mis palabras", "sí"],
        ["agradecimiento", "sí"],
        ["lista de fuentes", "sí"],
        ["párrafos copiados enteros", "no"],
        ["datos sin verificar", "no"],
        ["bromas sin relación", "no"]
      ]
    },
    "em": [
      ["conclusión", "mensaje final con lo más importante aprendido"],
      ["agradecimiento", "expresión de cortesía al público"],
      ["fuentes", "los sitios de donde salió la información"]
    ],
    "or": ["Reviso lo que investigué", "Escribo dos o tres ideas principales", "Agrego el agradecimiento y las fuentes", "Practico leerla en voz alta"],
    "e": [
      "Escribe una conclusión breve de dos o tres ideas sobre tu tema.",
      "Aprendí que el río Magdalena es vital para Colombia y debemos cuidarlo.",
      5
    ]
  },
  {
    "n": "Presento mi trabajo al grupo",
    "o": "Presentarás tu trabajo con voz clara y mirando a la audiencia.",
    "d": "DBA 4º tecnología: presento mis creaciones digitales integrando texto e imágenes y comunicándome con claridad.",
    "t": [
      ["Voz y ritmo", "Hablo despacio y en voz alta. Si me apuro, pauso y respiro.", "🗣️"],
      ["Contacto con la audiencia", "Miro a mis compañeros, no solo a la pantalla. Así los incluyo.", "👀"],
      ["Practico antes", "Repaso las diapositivas en casa o con un compañero antes de exponer.", "🎬"]
    ],
    "q": [
      [
        "Antes de presentar, lo más útil es...",
        ["practicar en voz alta", "no prepararme", "escribir todo de nuevo", "llegar tarde"],
        0,
        "La práctica reduce los nervios y hace la exposición más fluida.",
        "La práctica hace al maestro."
      ],
      [
        "Cuando presento, ¿dónde miro?",
        ["al computador todo el tiempo", "a la audiencia de vez en cuando", "al techo", "a mi mochila"],
        1,
        "El contacto visual con el público los hace sentir parte de la presentación."
      ],
      [
        "Me trabo en una palabra. ¿Qué hago?",
        ["me callo para siempre", "respiro, la digo de otra forma y sigo", "corro", "pido que me cambien el tema"],
        2,
        "Si olvido una palabra, la digo con otras y continúo con calma.",
        "Respiro y sigo."
      ],
      [
        "¿Cómo sé si los compañeros entienden?",
        ["miro sus caras y respondo dudas", "sigo sin mirar", "hablo más rápido", "no importa"],
        0,
        "Observar y preguntar si hay dudas mejora la comunicación."
      ],
      [
        "¿Cuánto tiempo debo usar para presentar?",
        ["el que el docente indicó", "todo el recreo", "un segundo", "sin límite"],
        1,
        "Respetar el tiempo acordado es parte del trabajo en grupo.",
        "El tiempo que indicó el docente."
      ],
      [
        "Cuando un compañero presenta, yo...",
        ["escucho con atención", "hablo con otros", "le corrijo en voz alta", "dibujo"],
        0,
        "Escuchar con respeto motiva a quien expone y es una cortesía."
      ],
      [
        "¿Qué hago con las manos si estoy nervioso?",
        ["las muevo mucho", "las dejo con calma o uso una diapositiva de apoyo", "las escondo bajo la mesa", "las cruzo todo el tiempo"],
        1,
        "Gestos tranquilos o señalar la pantalla ayudan a canalizar los nervios."
      ],
      [
        "¿Qué hago al terminar mi presentación?",
        ["agradezco y abro preguntas", "me siento sin decir nada", "me voy", "repito todo"],
        3,
        "Cerrar con agradecimiento y preguntas deja una buena impresión."
      ],
      [
        "Una buena presentación digital se apoya en...",
        ["texto e imágenes bien elegidos", "solo mi memoria", "un video largo", "música fuerte"],
        0,
        "Las diapositivas son un apoyo visual: refuerzan lo que digo."
      ],
      [
        "Si olvido una idea importante, ¿qué apoyo uso?",
        ["las diapositivas que preparé", "la mochila", "el pizarrón de otro salón", "nada"],
        0,
        "Las diapositivas son mi guía: si me pierdo, vuelvo a ellas."
      ],
      [
        "¿Por qué conviene presentar al grupo el trabajo digital?",
        ["para compartir lo aprendido y escuchar otras ideas", "para competir", "para perder el tiempo", "porque no hay más opción"],
        1,
        "Compartir enriquece el aprendizaje y fortalece la confianza."
      ],
      [
        "Si discrepo de una pregunta del público, ¿qué hago?",
        ["respondo con respeto y explico mi punto", "me enojo", "ignoro", "me río"],
        0,
        "Responder con respeto, aunque no haya acuerdo, es señal de madurez."
      ]
    ],
    "cl": {
      "c": [
        ["hago", "LO QUE YO HAGO AL EXPONER", "✅"],
        ["evito", "LO QUE EVITO AL EXPONER", "❌"]
      ],
      "i": [
        ["miro a la audiencia", "hago"],
        ["hablo despacio y claro", "hago"],
        ["respiro si me trabo", "hago"],
        ["leo todas las palabras sin parar", "evito"],
        ["corro del salón", "evito"],
        ["disputo con el público", "evito"]
      ]
    },
    "em": [
      ["práctica", "ensayo previo de la exposición"],
      ["audiencia", "las personas que escuchan la presentación"],
      ["nervios", "sensación que se calma respirando"]
    ],
    "or": ["Reviso el orden de las diapositivas", "Practico en voz alta", "Presento mirando a la audiencia", "Agradezco y respondo preguntas"],
    "e": [
      "Escribe tres frases que usarás para empezar, desarrollar y cerrar tu presentación.",
      "Hoy les hablaré de... Ahora veamos... Con esto aprendí que...",
      5
    ]
  }
];

/* ====== g4 / artistica ====== */
/* DBA 4º — artistica */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.artistica = [
  {
    "n": "Formas planas y formas con volumen",
    "o": "Distinguirás entre figuras planas y objetos con volumen en obras de arte.",
    "d": "DBA 4º artística: exploro la noción de volumen en el arte diferenciando lo plano de lo sólido.",
    "t": [
      ["Plano", "Un círculo dibujado en el papel tiene ancho y alto, pero no se puede apretar. Es plano.", "⭕"],
      ["Volumen", "Una pelota, una arepa o una olla tienen ancho, alto y profundidad. Tienen volumen.", "🏀"],
      ["El arte también modela", "Esculturas y relieves dan volumen a las formas; los dibujos lo sugieren con sombras.", "🗿"]
    ],
    "q": [
      [
        "¿Cuál de estos objetos tiene volumen?",
        ["un dibujo de un triángulo", "una pelota de trapo", "letra A pintada en la pared", "una foto de una fruta"],
        1,
        "La pelota ocupa espacio y se puede apretar: tiene las tres dimensiones (ancho, alto y profundidad).",
        "Piensa en lo que puedes apretar."
      ],
      [
        "Un dibujo de una manzana en tu cuaderno es...",
        ["plano", "volumétrico", "pesado", "transparente"],
        0,
        "El dibujo está en una hoja: tiene ancho y alto, pero no profundidad real.",
        "El dibujo está en una hoja: tiene ancho y alto, pero no profundidad real."
      ],
      [
        "Tiene volumen porque ocupa espacio en tres dimensiones...",
        ["un cuadro", "una escultura de barro", "una palabra", "una sombra proyectada"],
        1,
        "Las tres dimensiones (ancho, alto y profundidad) hacen que el objeto ocupe espacio real: es volumen.",
        "Tres dimensiones = volumen."
      ],
      [
        "Para lograr volumen en un dibujo uso principalmente...",
        ["líneas rectas y nada más", "sombras y tonos", "letras", "borrones sin sentido"],
        2,
        "Las sombras oscuras y las zonas claras hacen que la figura parezca redondeada y salga del papel.",
        "Las sombras hacen creer que algo es redondo."
      ],
      [
        "¿Qué le falta a un recorte de papel para tener volumen?",
        ["color", "profundidad", "forma", "borde"],
        1,
        "El recorte es delgado: tiene ancho y alto, pero casi no tiene profundidad.",
        "El recorte es delgado: tiene ancho y alto, pero casi no tiene profundidad."
      ],
      [
        "Una arepita de maíz que modelas con las manos tiene...",
        ["volumen", "solo largo", "solo color", "nada"],
        3,
        "Al modelarla le das ancho, alto y profundidad: se convierte en un cuerpo con volumen.",
        "Al modelarla le das ancho, alto y profundidad: se convierte en un cuerpo con vol..."
      ],
      [
        "En una pintura, el volumen se logra...",
        ["con el marco", "con claroscuro, o sea luces y sombras", "con el título", "con la firma"],
        1,
        "La luz y la sombra que pinta el artista hacen que la forma parezca sólida y redonda.",
        "La luz y la sombra que pinta el artista hacen que la forma parezca sólida y redo..."
      ],
      [
        "¿Cuál de estas obras tiene volumen real (no simulado)?",
        ["un mural", "un relieve en arcilla", "un poema", "un cartel"],
        2,
        "El relieve en arcilla sobresale de la superficie: tiene volumen que se puede tocar.",
        "El relieve en arcilla sobresale de la superficie: tiene volumen que se puede toc..."
      ],
      [
        "¿Por qué una foto de una manzana NO tiene volumen?",
        ["porque está en color", "porque es una imagen plana de un objeto volumétrico", "porque es pequeña", "porque es de fruta"],
        1,
        "La foto guarda la imagen en una superficie plana; el volumen original queda solo aparente.",
        "La foto guarda la imagen en una superficie plana; el volumen original queda solo..."
      ],
      [
        "Si aprietas plastilina y le das forma de pelota, estás...",
        ["pintando", "modelando volumen", "dibujando", "escribiendo"],
        0,
        "Modelar es dar volumen a una materia blanda con las manos.",
        "Mis manos le dan forma."
      ],
      [
        "Un dado de tela cosido tiene...",
        ["volumen", "solo largo", "solo color", "una cara plana"],
        0,
        "Aunque es suave, ocupa espacio en las tres dimensiones: tiene volumen.",
        "Aunque es suave, ocupa espacio en las tres dimensiones: tiene volumen."
      ],
      [
        "La noción de volumen en el arte sirve para...",
        ["escribir mejor", "crear formas que parecen o son sólidas y ocupan espacio", "ordenar el cuaderno", "aprender verbos"],
        3,
        "Toda obra con volumen busca que percibamos sólidos que ocupan lugar en el espacio.",
        "Toda obra con volumen busca que percibamos sólidos que ocupan lugar en el espacio."
      ]
    ],
    "cl": {
      "c": [
        ["plano", "FORMAS PLANAS", "📄"],
        ["volumen", "FORMAS CON VOLUMEN", "🧊"]
      ],
      "i": [
        ["dibujo en el cuaderno", "plano"],
        ["letra pintada en la pared", "plano"],
        ["fotografía pegada", "plano"],
        ["pelota de trapo", "volumen"],
        ["escultura de barro", "volumen"],
        ["arepa modelada", "volumen"]
      ]
    },
    "em": [
      ["plano", "tiene ancho y alto, pero no profundidad"],
      ["volumen", "tiene ancho, alto y profundidad"],
      ["modelar", "dar forma con las manos a una materia blanda"],
      ["relieve", "escultura que sobresale de una superficie"]
    ],
    "or": ["Observo la forma en el papel o en el objeto", "Pregunto si ocupa espacio real", "Comparo con un objeto que sí se toca", "Clasifico: plano o con volumen"],
    "e": [
      "Escribe tres objetos de tu casa: uno plano y dos con volumen.",
      "Plano: un cartel. Volumen: una taza y una pelota.",
      5
    ]
  },
  {
    "n": "Modelo y esculpo volúmenes",
    "o": "Crearás pequeñas formas con volumen usando materiales blandos y relieves.",
    "d": "DBA 4º artística: exploro la noción de volumen modelando y esculpiendo formas.",
    "t": [
      ["Materiales blandos", "Barro, plastilina o pasta de papel se dejan aplastar, estirar y unir.", "🏺"],
      ["Modelar por partes", "Construyo el cuerpo principal y luego añado detalles más pequeños.", "🧩"],
      ["El relieve", "Si mis formas sobresalen de una base plana, obtengo un relieve con volumen aparente.", "🏔️"]
    ],
    "q": [
      [
        "¿Qué material se usa comúnmente para modelar volumen?",
        ["la tiza", "la plastilina", "la goma de borrar", "la regla"],
        1,
        "La plastilina es blanda y se moldea con las manos para crear volúmenes.",
        "Es blanda y de colores."
      ],
      [
        "Al modelar, ¿por qué empiezo por la parte más grande del objeto?",
        ["porque queda más pesada", "porque sirve de base para añadir detalles", "porque es más bonita", "porque se seca antes"],
        1,
        "La forma principal funciona como cimiento; los detalles pequeños se agregan al final.",
        "La forma principal funciona como cimiento; los detalles pequeños se agregan al f..."
      ],
      [
        "Para unir dos piezas de plastilina, es útil...",
        ["mojar un poco las uniones", "separarlas", "pintarlas", "aplastarlas"],
        0,
        "Un toque de humedad ayuda a que las piezas se adhieran correctamente.",
        "Un toque de humedad ayuda a que las piezas se adhieran correctamente."
      ],
      [
        "Un relieve se caracteriza porque...",
        ["sus formas sobresalen de una superficie plana", "es completamente redondo", "se puede comer", "es muy grande"],
        0,
        "En el relieve, las figuras se proyectan desde la base, creando volumen aparente.",
        "En el relieve, las figuras se proyectan desde la base, creando volumen aparente."
      ],
      [
        "Si quiero hacer una olla con volumen, debo...",
        ["dejarla hueca y redondeada", "aplanarla como una torta", "hacerla rectangular", "no añadirle asas"],
        0,
        "La redondez y el interior hueco le dan la apariencia del objeto real con volumen.",
        "La redondez y el interior hueco le dan la apariencia del objeto real con volumen."
      ],
      [
        "Cuando modelo, ¿qué hago si una parte se cae?",
        ["la quito", "la sostengo con un pequeño soporte", "la pinto", "la estiro más"],
        1,
        "Los soportes o alambres internos ayudan a mantener erguidas las partes frágiles.",
        "Los soportes o alambres internos ayudan a mantener erguidas las partes frágiles."
      ],
      [
        "¿Cuál es la ventaja de modelar por partes pequeñas?",
        ["permite controlar mejor cada detalle", "hace la pieza más pesada", "es más rápido", "no requiere imaginación"],
        0,
        "Trabajar por segmentos facilita la creación y el ajuste de los detalles.",
        "Trabajar por segmentos facilita la creación y el ajuste de los detalles."
      ],
      [
        "Un bajorrelieve tiene formas que...",
        ["sobresalen poco de la base", "flotan en el aire", "son muy profundas", "no se tocan"],
        0,
        "El bajorrelieve presenta proyecciones ligeras sobre la superficie.",
        "El bajorrelieve presenta proyecciones ligeras sobre la superficie."
      ],
      [
        "Al esculpir una figura, los brazos y piernas deben...",
        ["ser proporcionales al cuerpo", "ser muy grandes", "no existir", "ser del mismo grosor que el tronco"],
        0,
        "La proporción armónica entre partes es clave para un resultado equilibrado.",
        "La proporción armónica entre partes es clave para un resultado equilibrado."
      ],
      [
        "¿Qué hago con la plastilina que no uso para evitar que se seque?",
        ["la guardo en un recipiente cerrado", "la dejo al sol", "la escondo", "la comparto"],
        0,
        "Guardarla en un lugar húmedo y cerrado la mantiene blanda y lista para modelar.",
        "Guardarla en un lugar húmedo y cerrado la mantiene blanda y lista para modelar."
      ],
      [
        "El volumen en una escultura se aprecia desde...",
        ["solo un ángulo", "todos los ángulos", "arriba únicamente", "atrás solamente"],
        1,
        "La escultura presenta distintas caras que se observan rodeándola.",
        "La escultura presenta distintas caras que se observan rodeándola."
      ],
      [
        "Crear con volumen ayuda a desarrollar...",
        ["la imaginación y la motricidad", "la memoria de canciones", "la lectura veloz", "nada"],
        0,
        "Modelar ejercita la creatividad y la coordinación de las manos.",
        "Modelar ejercita la creatividad y la coordinación de las manos."
      ]
    ],
    "cl": {
      "c": [
        ["modelar", "TÉCNICAS DE MODELADO", "🏺"],
        ["evito", "ERROR FRECUENTE AL ESCULPIR", "❌"]
      ],
      "i": [
        ["construir por partes", "modelar"],
        ["unir con humedad", "modelar"],
        ["respetar proporciones", "modelar"],
        ["hacer todo de una sola vez", "evito"],
        ["ignorar los soportes", "evito"],
        ["dejar la plastilina al sol", "evito"]
      ]
    },
    "em": [
      ["modelar", "crear formas con materiales blandos"],
      ["escultura", "obra con volumen real"],
      ["relieve", "figuras que sobresalen de una base"],
      ["proporción", "relación entre el tamaño de las partes"]
    ],
    "or": ["Elijo un material blando", "Construyo primero la forma principal", "Añado los detalles más pequeños", "Reviso proporciones y uniones"],
    "e": [
      "Escribe dónde irá la luz y dónde la sombra en una esfera que dibujes.",
      "La luz vendrá de arriba; la sombra irá al lado opuesto.",
      5
    ]
  },
  {
    "n": "Le doy volumen con sombras",
    "o": "Aplicarás luces y sombras para dar volumen a un dibujo.",
    "d": "DBA 4º artística: exploro la noción de volumen simulando sólidos con luces y sombras.",
    "t": [
      ["Luz y sombra", "Donde llega la luz la figura queda clara; donde no llega, oscura. Así nace el volumen.", "💡"],
      ["Gradación suave", "Paso del claro al oscuro poco a poco, sin rayones bruscos, para que se vea redondo.", "🌫️"],
      ["Fuente de luz", "Decido de dónde viene la luz (una ventana, una vela) para ser coherente en todo el dibujo.", "🌬️"]
    ],
    "q": [
      [
        "Para que una esfera dibujada parezca redonda, primero debo...",
        ["decidir de dónde viene la luz", "borrar todo", "cambiar el color del papel", "dibujar otra figura"],
        0,
        "Sin fuente de luz definida las sombras saldrían en lugares distintos y se rompería la ilusión.",
        "Todo empieza preguntando: ¿de dónde viene la luz?"
      ],
      [
        "El lado de la esfera que queda opuesto a la luz se pinta...",
        ["más claro", "más oscuro", "del mismo tono", "de blanco"],
        1,
        "El lado alejado de la luz recibe menos brillo: queda en sombra y ayuda a percibir el volumen.",
        "El lado alejado de la luz recibe menos brillo: queda en sombra y ayuda a percibi..."
      ],
      [
        "Si pinto la sombra de un lado y la luz del otro lado contradiciéndose, la figura...",
        ["se ve más bonito", "se ve confusa y sin volumen", "se seca más rápido", "queda perfecta"],
        1,
        "La luz debe ser constante en todo el dibujo; si se contradice, el ojo percibe inconsistencia.",
        "La luz debe ser constante en todo el dibujo; si se contradice, el ojo percibe in..."
      ],
      [
        "Para sombrear suave conviene usar...",
        ["la punta del lápiz con poca presión", "toda la fuerza del brazo", "un marcador negro", "la goma de borrar"],
        0,
        "Con poca presión logras tonos medios y una transición suave que simula redondez.",
        "Suave como una caricia."
      ],
      [
        "En un cilindro, la sombra más oscura suele quedar...",
        ["en el centro exacto", "en un lateral, junto al borde de sombra", "arriba de todo", "en el borde iluminado"],
        1,
        "El núcleo de sombra va a un lado; el borde opuesto capta un poco de luz reflejada.",
        "El núcleo de sombra va a un lado; el borde opuesto capta un poco de luz reflejada."
      ],
      [
        "Una manzana dibujada con el mismo tono en todas partes se ve...",
        ["volumétrica", "plana", "brillante", "redonda"],
        0,
        "Sin contraste de luces y sombras la figura parece pegada al papel y sin volumen.",
        "Sin contraste de luces y sombras la figura parece pegada al papel y sin volumen."
      ],
      [
        "Si la luz viene de la izquierda, la sombra de un objeto cae...",
        ["a la derecha", "a la izquierda", "hacia arriba", "en todos lados"],
        2,
        "La sombra se proyecta del lado contrario a la fuente de luz.",
        "La sombra se proyecta del lado contrario a la fuente de luz."
      ],
      [
        "Un claro muy brillante en un objeto se llama...",
        ["penumbra", "reflejo o luz especular", "borrador", "trama"],
        1,
        "Ese punto de luz intensa indica una superficie lisa y ayuda a dar volumen y textura.",
        "Ese punto de luz intensa indica una superficie lisa y ayuda a dar volumen y text..."
      ],
      [
        "Para pasos de tono ordenados uso la técnica de...",
        ["manchas suaves", "tachar fuerte", "líneas cruzadas al azar", "borrar media hoja"],
        3,
        "Las manchas o tramas ligeras y repetidas permiten gradaciones limpias de claro a oscuro.",
        "Las manchas o tramas ligeras y repetidas permiten gradaciones limpias de claro a..."
      ],
      [
        "Al sombrear, el papel blanco que dejo sin tocar representa...",
        ["la sombra profunda", "la zona más iluminada", "un error", "el fondo"],
        1,
        "Reservar el blanco del papel marca el brillo máximo sin sobrecargar el dibujo.",
        "Reservar el blanco del papel marca el brillo máximo sin sobrecargar el dibujo."
      ],
      [
        "Si mezclo varios colores sin orden para simular sombra, la figura...",
        ["gana volumen", "puede verse sucia y sin dirección de luz", "se ve más clara", "dura más"],
        0,
        "Mezclar sin plan desluce; conviene elegir un color base y oscurecerlo gradualmente.",
        "Mezclar sin plan desluce; conviene elegir un color base y oscurecerlo gradualmen..."
      ],
      [
        "Dar volumen con sombras consiste en...",
        ["repetir el mismo tono en toda la figura", "transitar del claro al oscuro según la luz", "usar solo negro", "dibujar bordes dobles"],
        3,
        "La gradación coherente de tonos es lo que engaña al ojo y produce volumen.",
        "La gradación coherente de tonos es lo que engaña al ojo y produce volumen."
      ]
    ],
    "cl": {
      "c": [
        ["ayuda", "LO QUE APORTA VOLUMEN", "✅"],
        ["estorba", "LO QUE IMPIDE EL VOLUMEN", "❌"]
      ],
      "i": [
        ["definir la fuente de luz", "ayuda"],
        ["transición suave de tonos", "ayuda"],
        ["reservar los claros", "ayuda"],
        ["tono uniforme en todo", "estorba"],
        ["sombras contradiciéndose", "estorba"],
        ["sombra dura y aplastada sin gradación", "estorba"]
      ]
    },
    "em": [
      ["claroscuro", "contraste de luces y sombras que da volumen"],
      ["fuente de luz", "lugar de donde proviene la iluminación"],
      ["penumbra", "zona de sombra media y suave"],
      ["reflejo", "punto de luz brillante sobre un objeto"]
    ],
    "or": ["Decido de dónde viene la luz", "Marco la zona más clara", "Aplico la sombra del lado opuesto", "Suavizo la transición entre luz y sombra"]
  },
  {
    "n": "Objetos cerca y objetos lejos",
    "o": "Representarás la profundidad ubicando los objetos según su distancia.",
    "d": "DBA 4º artística: exploro la perspectiva básica situando los objetos cerca y lejos en el dibujo.",
    "t": [
      ["Tamaño cambia con la distancia", "Lo que está cerca se dibuja grande y lo que está lejos, pequeño.", "📏"],
      ["Superposición", "Si un objeto tapa a otro, el que tapa está más cerca de ti.", "🔀"],
      ["Línea del horizonte", "Es donde parece que la tierra y el cielo se juntan; todo lo lejano se acerca a ella.", "🌤️"]
    ],
    "q": [
      [
        "Un árbol está muy lejos en el campo. En mi dibujo lo haré...",
        ["enorme", "pequeño", "del mismo tamaño que uno cercano", "invisible"],
        1,
        "Los objetos lejanos ocupan menos espacio en nuestra vista: se dibujan más pequeños.",
        "Lo lejano se ve pequeño."
      ],
      [
        "Si una silla tapa parte de la mesa, la silla está...",
        ["más cerca", "más lejos", "a la misma distancia", "en el horizonte"],
        2,
        "Lo que se superpone y tapa a otro elemento está por delante, más cerca del observador.",
        "Lo que se superpone y tapa a otro elemento está por delante, más cerca del obser..."
      ],
      [
        "La línea del horizonte en un paisaje corresponde a...",
        ["la raya del cuaderno", "el punto donde el cielo y la tierra se encuentran", "el borde del papel", "una carretera"],
        0,
        "Esa línea visual marca el punto de fuga y ordena la profundidad del paisaje.",
        "Esa línea visual marca el punto de fuga y ordena la profundidad del paisaje."
      ],
      [
        "Dos personas caminan: una cerca y otra lejos. ¿Cómo las dibujas?",
        ["ambas iguales y grandes", "la cercana grande y la lejana pequeña", "la lejana grande", "ambas diminutas"],
        1,
        "La escala por distancia es la base de la perspectiva: grande = cerca, pequeño = lejos.",
        "La escala por distancia es la base de la perspectiva: grande = cerca, pequeño =..."
      ],
      [
        "Un pájaro que pasa sobre mi cabeza, muy cerca, en el dibujo...",
        ["queda pequeño arriba", "queda grande", "queda en el horizonte", "no se dibuja"],
        3,
        "Aunque esté alto, su cercanía lo hace verse grande respecto a lo lejano.",
        "Aunque esté alto, su cercanía lo hace verse grande respecto a lo lejano."
      ],
      [
        "Al pintar montañas lejanas, el color debe ser...",
        ["muy vivo y saturado", "más suave y apagado", "igual que el primer plano", "negro"],
        0,
        "El aire hace que lo lejano se vea más claro y menos intenso: eso se llama perspectiva aérea.",
        "El aire hace que lo lejano se vea más claro y menos intenso: eso se llama perspe..."
      ],
      [
        "Si dibujas la puerta de tu casa pequeña y el carro del vecino grande al lado, el espacio parece...",
        ["correcto", "descuadrado", "profundo", "ordenado"],
        3,
        "Las proporciones sin relación rompen la lógica de la distancia y el espacio se ve raro.",
        "Las proporciones sin relación rompen la lógica de la distancia y el espacio se v..."
      ],
      [
        "En una foto, un edificio lejano se ve más pequeño porque...",
        ["es un edificio pequeño", "la distancia reduce el tamaño aparente", "está pintado de claro", "hay niebla"],
        0,
        "A mayor distancia, menor ángulo visual: por eso el objeto ocupa menos en el encuadre.",
        "A mayor distancia, menor ángulo visual: por eso el objeto ocupa menos en el encu..."
      ],
      [
        "Para lograr profundidad en mi paisaje uso...",
        ["tres planos: primer plano, medio y fondo", "solo un color", "líneas horizontales en toda la hoja", "un único objeto"],
        1,
        "Organizar en tres planos es una forma sencilla de ordenar cerca y lejos.",
        "Organizar en tres planos es una forma sencilla de ordenar cerca y lejos."
      ],
      [
        "En un dibujo con perspectiva, las veredas estrechas se vuelven...",
        ["más anchas hacia el fondo", "más angostas conforme se alejan", "iguales siempre", "circular"],
        2,
        "Las líneas paralelas parecen acercarse al horizonte: se estrechan con la distancia.",
        "Las líneas paralelas parecen acercarse al horizonte: se estrechan con la distanc..."
      ],
      [
        "¿Cuál es una señal clara de que algo está más cerca?",
        ["se ve más pequeño y claro", "se ve más grande y tapa a lo de atrás", "está sobre el horizonte", "tiene menos colores"],
        1,
        "El tamaño mayor y la superposición son pistas fiables de cercanía.",
        "El tamaño mayor y la superposición son pistas fiables de cercanía."
      ],
      [
        "Para situar bien los objetos en el espacio primero debo...",
        ["colocar la línea del horizonte", "pintar el cielo", "firmar la obra", "dibujar sombras"],
        0,
        "La línea del horizonte es el ancla que ordena todas las distancias del paisaje.",
        "La línea del horizonte es el ancla que ordena todas las distancias del paisaje."
      ]
    ],
    "cl": {
      "c": [
        ["cerca", "SE VE ASÍ LO CERCANO", "🔍"],
        ["lejos", "SE VE ASÍ LO LEJANO", "🌄"]
      ],
      "i": [
        ["grande", "cerca"],
        ["tapona a los demás", "cerca"],
        ["colores intensos", "cerca"],
        ["pequeño", "lejos"],
        ["apenas se distingue", "lejos"],
        ["cerca del horizonte", "lejos"]
      ]
    },
    "em": [
      ["línea del horizonte", "donde el cielo y la tierra se juntan"],
      ["superposición", "un objeto tapa a otro porque está más cerca"],
      ["perspectiva", "representar la profundidad en una superficie plana"],
      ["primer plano", "lo más cercano al observador"]
    ],
    "or": ["Ubico la línea del horizonte", "Coloco lo lejano pequeño y claro", "Marco el primer plano grande y detallado", "Reviso que nada quede sin relación"],
    "e": [
      "Describe con palabras cómo harías un paisaje con tres distancias.",
      "Al frente un árbol grande, al medio una casa pequeña y al fondo montañas claras.",
      5
    ]
  },
  {
    "n": "Líneas que se alejan",
    "o": "Usarás líneas de fuga sencillas para representar caminos y edificios con profundidad.",
    "d": "DBA 4º artística: exploro la perspectiva básica de objetos con líneas que convergen en el horizonte.",
    "t": [
      ["Líneas de fuga", "Los bordes de un camino parecen juntarse en el horizonte; por eso se estrechan.", "🛣️"],
      ["Punto de fuga", "El punto exacto del horizonte donde se cruzan todas las líneas paralelas.", "📍"],
      ["Aplico la regla", "Camino, reja o edificio: hago los lados converger hacia ese punto.", "✏️"]
    ],
    "q": [
      [
        "Un camino recto que se aleja, en la distancia, parece...",
        ["ensancharse", "juntarse en un punto", "desaparecer de golpe", "volverse curvo"],
        1,
        "Las líneas paralelas del camino convergen visualmente en el punto de fuga del horizonte.",
        "Se estrecha al alejarse."
      ],
      [
        "El punto de fuga siempre está...",
        ["en el borde superior del papel", "sobre la línea del horizonte", "en la esquina inferior", "donde yo quiera sin relación"],
        2,
        "El punto de fuga se ubica en la línea del horizonte porque es el nivel del ojo del observador.",
        "El punto de fuga se ubica en la línea del horizonte porque es el nivel del ojo d..."
      ],
      [
        "Para dibujar una reja larga de lado, sus palos verticales...",
        ["crecen más y más", "se vuelven más pequeños y juntos", "se inclinan todos a la izquierda", "se borran"],
        0,
        "Con la distancia, los elementos repetidos se ven más estrechos y juntos por la perspectiva.",
        "Con la distancia, los elementos repetidos se ven más estrechos y juntos por la p..."
      ],
      [
        "¿Qué pasa si dibujo las líneas del camino paralelas hasta el final del papel?",
        ["el camino se ve infinito y sin profundidad", "gana profundidad", "se ve más corto", "mejora el color"],
        3,
        "Sin convergencia no hay profundidad: el camino parecería plano y vertical sobre el papel.",
        "Sin convergencia no hay profundidad: el camino parecería plano y vertical sobre..."
      ],
      [
        "Un edificio visto de frente y de lado a la vez muestra sus caras...",
        ["iguales y rectas", "con líneas que se estrechan hacia el fondo", "en círculo", "sin bordes"],
        1,
        "La cara lateral profunda se reduce con la distancia, siguiendo las líneas de fuga.",
        "La cara lateral profunda se reduce con la distancia, siguiendo las líneas de fuga."
      ],
      [
        "El punto de fuga representa...",
        ["el sol", "el nivel de los ojos de quien mira", "una estrella", "el borde del cuadro"],
        0,
        "Está en la altura de los ojos porque es el nivel a partir del cual vemos converger las líneas.",
        "Está en la altura de los ojos porque es el nivel a partir del cual vemos converg..."
      ],
      [
        "Si quiero que un pasillo se vea largo, debo...",
        ["dibujarlo igual de ancho de punta a punta", "hacer que las paredes se junten en el fondo", "ponerle sombras", "alargarlo con más colores"],
        1,
        "La convergencia de paredes al fondo produce la sensación de largo y profundidad.",
        "La convergencia de paredes al fondo produce la sensación de largo y profundidad."
      ],
      [
        "En un cuarto con paredes, las líneas del techo y el piso van...",
        ["en dirección contraria al punto de fuga", "hacia el punto de fuga", "en círculos", "no se dibujan"],
        2,
        "Las líneas horizontales profundas del cuarto convergen hacia el punto de fuga.",
        "Las líneas horizontales profundas del cuarto convergen hacia el punto de fuga."
      ],
      [
        "Un error típico al usar perspectiva es...",
        ["colocar todos los puntos de fuga en el horizonte", "poner puntos de fuga en lugares distintos sin lógica", "estirar las líneas", "usar regla"],
        0,
        "En un dibujo simple conviene un solo punto de fuga coherente; varios desordenan el espacio.",
        "En un dibujo simple conviene un solo punto de fuga coherente; varios desordenan..."
      ],
      [
        "Al dibujar varias rejas alineadas, todas comparten...",
        ["el mismo punto de fuga", "un color distinto", "diferente altura", "ninguna dirección"],
        3,
        "Los objetos paralelos en el espacio real comparten la misma dirección de fuga.",
        "Los objetos paralelos en el espacio real comparten la misma dirección de fuga."
      ],
      [
        "Para hallar el punto de fuga puedo...",
        ["alargar con regla los bordes de un camino hasta que se crucen", "mirar el techo", "pintar el cielo", "dibujar una montaña"],
        0,
        "Extender las líneas de los bordes muestra dónde convergen: ahí está el punto de fuga."
      ],
      [
        "La perspectiva de un solo punto es útil para dibujar...",
        ["un pasillo o una carretera recta", "una cara humana", "una flor", "un texto"],
        2,
        "Es ideal para escenas con líneas profundas que se alejan frente al observador."
      ]
    ],
    "cl": {
      "c": [
        ["fuga", "ELEMENTOS DE LA PERSPECTIVA", "🎯"],
        ["error", "ERRORES FRECUENTES", "❌"]
      ],
      "i": [
        ["línea del horizonte", "fuga"],
        ["punto de fuga", "fuga"],
        ["líneas que convergen", "fuga"],
        ["puntos de fuga contradictorios", "error"],
        ["camino sin estrechamiento", "error"],
        ["tamaño igual cerca y lejos", "error"]
      ]
    },
    "em": [
      ["punto de fuga", "punto del horizonte donde se cruzan las líneas"],
      ["líneas de fuga", "bordes que parecen juntarse al alejarse"],
      ["converger", "acercarse hasta un punto común"]
    ],
    "or": ["Ubico la línea del horizonte", "Marco el punto de fuga sobre ella", "Dibujo los objetos con sus bordes rectos", "Alargo los bordes hasta el punto de fuga"]
  },
  {
    "n": "Escribo mi guion teatral",
    "o": "Construirás un guion breve con personajes, escenas y diálogos.",
    "d": "DBA 4º artística: participo en dramatizaciones teatrales creando un guion sencillo.",
    "t": [
      ["Personajes", "Cada personaje tiene un nombre y un objetivo: lo que quiere lograr en la obra.", "🎭"],
      ["Escenas", "Cada escena es un pedazo del cuento con lugar y tiempo definidos.", "🎬"],
      ["Diálogo", "Lo que dicen los personajes. En un guion, cada línea empieza con el nombre del que habla.", "💬"]
    ],
    "q": [
      [
        "En un guion, el diálogo de un personaje se escribe...",
        ["debajo de su nombre en mayúsculas", "en una esquina cualquiera", "dentro de un dibujo", "sin indicar quién habla"],
        0,
        "La convención teatral es poner el nombre y debajo sus palabras para saber quién dice cada cosa.",
        "Nombre arriba, diálogo abajo."
      ],
      [
        "Antes de escribir diálogos debo definir...",
        ["el color de las luces", "los personajes y qué quieren", "el precio de las entradas", "los aplausos"],
        2,
        "Sin personajes con objetivos claros no hay conflicto ni historia que contar."
      ],
      [
        "Una escena necesita al menos...",
        ["un lugar y un momento", "diez personajes", "una canción completa", "un aplauso"],
        0,
        "Situar dónde y cuándo ocurre ayuda a los actores y al público a entender la acción."
      ],
      [
        "Si mi obra habla de una feria del colegio, el tema central podría ser...",
        ["la preparación y sorpresa de la feria", "un dinosaurio", "la receta de un pastel", "un partido de fútbol"],
        3,
        "La historia gira alrededor de una idea principal coherente; los detalles la acompañan."
      ],
      [
        "Un buen conflicto en un guion infantil es...",
        ["pelear a los gritos", "un problema que los personajes pueden resolver", "un castigo severo", "no pasa nada"],
        1,
        "El conflicto da tensión y permite mostrar resolución, esfuerzo y valores."
      ],
      [
        "En el guion, acotaciones (indicaciones de acción) sirven para...",
        ["contar cómo se mueve o siente el personaje", "reemplazar el diálogo", "escribir más rápido", "confundir al actor"],
        0,
        "Las acotaciones guían la puesta en escena: gestos, tono o movimiento."
      ],
      [
        "Si un personaje habla mucho y otro nada, lo mejor es...",
        ["quitar al mudo", "darle líneas breves al segundo", "escribir todo en un monólogo", "cambiar de tema"],
        1,
        "Repartir turnos hace la escena más viva y participativa."
      ],
      [
        "Para ordenar el guion uso...",
        ["escenas numeradas con su lugar", "párrafos largos sin títulos", "solo dibujos", "palabras al azar"],
        3,
        "Numerar escenas y situarlas ordena el trabajo del equipo teatral."
      ],
      [
        "Un borrador de guion se revisa para...",
        ["corregir ideas confusas y repetidas", "aumentar el tamaño de la letra", "poner colores", "hacerlo más largo"],
        0,
        "Revisar claridad y coherencia mejora la comprensión antes de ensayar."
      ],
      [
        "El lenguaje del diálogo debe sonar...",
        ["natural para los personajes y claro para el público", "igual para todos y muy técnico", "lleno de palabras raras", "sin sentido"],
        3,
        "Cada personaje puede tener su forma de hablar, pero el público debe entenderlo."
      ],
      [
        "Para empezar a escribir, lo primero es...",
        ["elegir el tema y el mensaje que quiero compartir", "escribir el final", "dibujar el escenario", "invitar al público"],
        0,
        "Tener claro el mensaje central orienta todas las decisiones del guion."
      ],
      [
        "Al final del guion puedo incluir...",
        ["una despedida o moraleja breve", "más conflictos nuevos", "los créditos sin más", "nada que cierre"],
        2,
        "Un cierre redondo deja al público con la idea principal de la obra."
      ]
    ],
    "cl": {
      "c": [
        ["personaje", "PARTE DE UN GUION", "📝"],
        ["escena", "UNIDAD DE LA OBRA", "🎞️"]
      ],
      "i": [
        ["nombre y objetivo", "personaje"],
        ["diálogo", "personaje"],
        ["acotación", "personaje"],
        ["lugar", "escena"],
        ["tiempo", "escena"],
        ["número de orden", "escena"]
      ]
    },
    "em": [
      ["guion", "texto que ordena la obra de teatro"],
      ["diálogo", "palabras que dicen los personajes"],
      ["acotación", "indicación de acción o tono"],
      ["escena", "parte de la obra con lugar y tiempo"]
    ],
    "or": ["Elijo el tema y el mensaje", "Creo los personajes con objetivos", "Organizo las escenas con lugar y tiempo", "Escribo los diálogos y las acotaciones"],
    "e": [
      "Escribe el diálogo inicial de dos personajes que se encuentran en la plaza.",
      "LUCÍA: ¡Hola! ¿Vienes a la feria? / ANDRÉS: Sí, traje mi receta de arepa.",
      5
    ]
  },
  {
    "n": "Improvisamos en escena",
    "o": "Improvisarás situaciones cortas aplicando las reglas del juego teatral.",
    "d": "DBA 4º artística: participo en dramatizaciones teatrales mediante improvisación con respeto.",
    "t": [
      ["Sí, y...", "Acepto la idea del compañero y le sumo algo. Así la escena crece en vez de frenarse.", "➕"],
      ["Escucha activa", "Improviso reaccionando a lo que el otro dice o hace, no en mi mundo aparte.", "👂"],
      ["Sí, todavía no", "Si una idea incomoda, se redirige con cariño. Improvisar es jugar seguro.", "🛡️"]
    ],
    "q": [
      [
        "Tu compañero dice 'somos astronautas en Marte'. ¿Qué respondes con la regla del sí y además?",
        ["no, somos pescadores", "sí, y encontramos una roca extraña", "no quiero jugar", "me quedo callado"],
        1,
        "Aceptar y sumar mantiene la escena viva; negarla la corta de golpe.",
        "Acepto y sumo algo."
      ],
      [
        "La regla sí y además sirve para...",
        ["discutir quién tiene razón", "hacer creer la historia entre todos", "vencer al compañero", "calificar al actor"],
        0,
        "Es cooperación creativa: cada aporte construye sobre el anterior."
      ],
      [
        "Mientras un compañero actúa, yo...",
        ["escucho y observo para responder a lo que hace", "pienso en mi turno nada más", "hablo con el público", "me río a espaldas"],
        0,
        "La improvisación exige estar presente y reaccionar a lo que sucede en el momento."
      ],
      [
        "Si improvisando aparece una idea que asusta o incomoda, debo...",
        ["seguir igual", "redirigir la escena a algo cómodo", "gritar", "salir corriendo"],
        3,
        "En el teatro seguro siempre se puede cambiar de rumbo para que todos estén bien."
      ],
      [
        "Improvisar significa actuar...",
        ["siguiendo un guion exacto", "con apoyo en el momento, sin texto previo", "sin escuchar al resto", "solo en silencio"],
        1,
        "No hay texto escrito, pero sí hay acuerdos, escucha y símil de sí."
      ],
      [
        "Una buena escena improvisada empieza con...",
        ["situar lugar y quiénes somos", "gritar fuerte", "correr por el salón", "el final"],
        0,
        "Contexto claro (dónde, quién, qué pasa) da pie a que todos aporten."
      ],
      [
        "Si todos hablan al mismo tiempo en la escena, el público...",
        ["entiende todo", "no entiende nada", "se divierte más", "aplaude más"],
        2,
        "Turnarse los parlamentos permite que el mensaje llegue claro."
      ],
      [
        "Antes de actuar, para no repetir ideas conviene...",
        ["escuchar las propuestas previas", "ignorar todo", "imponer la mía", "empezar de cero"],
        3,
        "Partir de lo ya dicho evita repeticiones y enriquece la escena."
      ],
      [
        "Durante la improvisación los gestos deben...",
        ["acompañar lo que digo con claridad", "estar todo el tiempo igual", "esconderse", "ser raros a propósito"],
        0,
        "El cuerpo refuerza la palabra y ayuda al público a comprender la emoción."
      ],
      [
        "Si me bloqueo en escena, ¿qué hago?",
        ["me quedo paralizado", "repito o pregunto en el personaje para ganar tiempo", "me río parando la escena", "me voy"],
        3,
        "Los nervios se sortean con recursos del personaje: preguntar, observar o repetir."
      ],
      [
        "Improvisar fortalece porque...",
        ["solo gano competencias", "desarrollo escucha, creatividad y confianza", "aprendo a interrumpir", "evito el ensayo"],
        1,
        "Cada ejercicio suma seguridad, empatía y habilidad para pensar rápido."
      ],
      [
        "Al terminar una escena improvisada, lo ideal es...",
        ["cerrar con un gesto o frase que redondee", "seguir sin parar", "romper la escena", "discutir el final"],
        0,
        "Un cierre sencillo da sensación de completitud y prepara el paso al siguiente momento."
      ]
    ],
    "cl": {
      "c": [
        ["sí", "REGLAS QUE HACEN CRECER LA ESCENA", "✅"],
        ["no", "QUÉ FRENESA LA JUEGADA", "❌"]
      ],
      "i": [
        ["acepto y sumo", "sí"],
        ["escucho al compañero", "sí"],
        ["reacciono a lo que pasa", "sí"],
        ["niego la idea del otro", "no"],
        ["hablo sin parar", "no"],
        ["reírme de un error", "no"]
      ]
    },
    "em": [
      ["sí y además", "aceptar la idea y sumarle algo"],
      ["escucha activa", "atender al otro para reaccionar"],
      ["bloqueo", "momento en que no sé qué hacer en escena"],
      ["turno", "momento en que a mí me toca hablar"]
    ],
    "or": ["Escucho la propuesta inicial", "Acepto la idea con un sí", "Sumo un nuevo detalle", "Reacciono y cierro la escena"]
  },
  {
    "n": "Voz, gesto y cuerpo en escena",
    "o": "Usarás la voz y el cuerpo para comunicar emociones durante la dramatización.",
    "d": "DBA 4º artística: participo en dramatizaciones teatrales expresando emociones con voz y cuerpo.",
    "t": [
      ["Voz con intención", "Cambio volumen, ritmo y tono según la emoción: susurro nervioso, grito alegre.", "🎤"],
      ["Cuerpo que habla", "La postura y el gesto cuentan cómo se siente el personaje antes de que hable.", "🧍"],
      ["Ocupar el espacio", "Moverme por el escenario con propósito hace la escena más creíble y dinámica.", "🚶"]
    ],
    "q": [
      [
        "Para un personaje triste, mi voz debe ser...",
        ["rápida y alta", "lenta y baja", "igual siempre", "cantando"],
        1,
        "Ritmo lento y tono bajo transmiten tristeza; el público lo capta sin palabras de más.",
        "Tristeza = lenta y bajita."
      ],
      [
        "Si el personaje grita de lejos, conviene...",
        ["decirlo en voz normal", "aumentar el volumen proyectando", "susurrar", "hablar más rápido"],
        2,
        "La distancia en escena se sugiere con volumen: fuerte = lejos, suave = cerca."
      ],
      [
        "Un personaje nervioso se reconoce por...",
        ["postura firme y voz calmada", "movimientos inquietos y voz quebrada", "mirada fija al suelo todo el tiempo", "no moverse"],
        0,
        "Gestos y voz cambian juntos para expresar nerviosismo de forma creíble."
      ],
      [
        "Para que el público escuche siempre, debo...",
        ["hablar fuerte hacia ellos girando la cara", "hablar hacia el telón", "mirar al piso", "taparme la boca"],
        1,
        "Proyectar la voz hacia el público y girar la cabeza permite que todos escuchen."
      ],
      [
        "La postura abierta y erguida transmite...",
        ["timidez extrema", "seguridad y presencia", "sueño", "enojo"],
        0,
        "El cuerpo erguido y los hombros abiertos proyectan confianza ante el público."
      ],
      [
        "Cuando cambio de emoción en la escena, mis ojos...",
        ["deben reflejar ese cambio de ánimo", "se quedan fijos", "se cierran", "miran el guion todo el tiempo"],
        3,
        "La mirada es un canal poderoso de emoción en el teatro."
      ],
      [
        "Un error común al actuar es...",
        ["modular la voz", "hablar tan bajo que no se escucha", "gestualizar mucho", "mirar al público"],
        0,
        "No modular (articular y proyectar) hace que el mensaje se pierda."
      ],
      [
        "Para representar sorpresa, un buen gesto es...",
        ["la boca abierta y ojos muy abiertos", "dormir", "toser", "caminar lento"],
        3,
        "Los gestos faciales claros ayudan al público a leer la emoción a distancia."
      ],
      [
        "Gesticular de más, sin relación con el texto...",
        ["ayuda siempre", "puede distraer y desorientar", "es mejor que hablar", "no se nota"],
        0,
        "El gesto debe acompañar el sentido; si es excesivo, compite con la palabra."
      ],
      [
        "Si el personaje habla en secreto, mi voz...",
        ["sube de volumen", "baja y se vuelve pausada", "se vuelve cantarina", "no cambia"],
        3,
        "Bajar la voz y el ritmo comunica confidencia y tensión en la escena."
      ],
      [
        "Moverme por el escenario conviene cuando...",
        ["lo pide la acción, no por costumbre", "para no quedarme quieto siempre", "para tapar a otros", "sin razón"],
        0,
        "Cada desplazamiento debe tener un motivo claro; los pasos sin fin cansan la mirada."
      ],
      [
        "Para darle vida al personaje, integro...",
        ["voz, gesto, mirada y postura", "solo la voz", "solo las manos", "solo el texto"],
        2,
        "La actuación es un todo coordinado: todos los canales expresivos se suman."
      ]
    ],
    "cl": {
      "c": [
        ["voz", "RECURSOS DE LA VOZ", "🗣️"],
        ["cuerpo", "RECURSOS DEL CUERPO", "🤸"]
      ],
      "i": [
        ["volumen alto o bajo", "voz"],
        ["ritmo rápido o lento", "voz"],
        ["entonación alegre o triste", "voz"],
        ["postura erguida o encorvada", "cuerpo"],
        ["gestos de las manos", "cuerpo"],
        ["dirección de la mirada", "cuerpo"]
      ]
    },
    "em": [
      ["proyectar la voz", "hablar fuerte y claro hacia el público"],
      ["entonación", "musicalidad de la voz según la emoción"],
      ["postura", "posición del cuerpo al actuar"],
      ["gesto", "movimiento que expresa una emoción"]
    ],
    "or": ["Pienso en la emoción del personaje", "Elijo el tono y ritmo de voz", "Acompaño con postura y gesto", "Miro al público y ajusto el volumen"]
  },
  {
    "n": "El público y el escenario",
    "o": "Organizarás el espacio escénico y respetarás al público en tu dramatización.",
    "d": "DBA 4º artística: participo en dramatizaciones teatrales cuidando el espacio escénico y la relación con el público.",
    "t": [
      ["Zonas del escenario", "Fondo, centro y frentes: elegir dónde ubicarse cambia el sentido de la escena.", "🎭"],
      ["Entradas y salidas", "Llegar y retirarse con intención, sin tropezar ni tapar a otros.", "🚪"],
      ["El público es aliado", "Lo recibo con la mirada, agradezco y cuido su espacio y su atención.", "👏"]
    ],
    "q": [
      [
        "Para mostrar un momento íntimo o escondido, el personaje conviene que esté...",
        ["al fondo del escenario", "al frente y centrado", "fuera de escena", "tapiado por otros"],
        2,
        "Fondo y penumbra sugieren lejanía o reserva; el frente destaca lo importante.",
        "Lo íntimo va al fondo."
      ],
      [
        "Un personaje que llega con gran noticia entra...",
        ["sin que se note", "por el centro, con presencia", "dando la espalda", "gateando sin motivo"],
        0,
        "Las entradas marcadas enfatizan momentos clave de la escena."
      ],
      [
        "Si dos actores se tapan mutuamente, el público...",
        ["ve mejor", "pierde información visual", "se divierte", "aplaude"],
        2,
        "Evitar el solapamiento garantiza que la acción se vea completa."
      ],
      [
        "Mirar al público ocasionalmente sirve para...",
        ["conectar y verificar que sigan la escena", "distraerlos", "romper el personaje siempre", "evitar ensayar"],
        1,
        "El contacto con la audiencia incluye y permite ajustar el ritmo."
      ],
      [
        "Durante la función, un compañero en la butaca debe...",
        ["presionar al actor", "respetar el silencio y la atención", "gritar indicaciones", "burlarse"],
        3,
        "El respeto al espectador es parte esencial de la cultura teatral."
      ],
      [
        "Al terminar la obra, el equipo...",
        ["corre a guardar", "agradece con una reverencia o saludo", "discute errores", "ignora al público"],
        0,
        "El agradecimiento cierra el ritual teatral y muestra cortesía."
      ],
      [
        "Un apagón o error en escena, lo mejor es...",
        ["parar en pánico", "seguir con calma y recuperar el hilo", "reírse fuerte", "pedir que se retiren"],
        2,
        "La improvisación y la calma permiten retomar sin romper la ficción."
      ],
      [
        "Los decorados deben ubicarse...",
        ["tapando a los actores", "sin estorbar pasos ni la visión", "en el centro siempre", "donde caigan"],
        0,
        "La seguridad y la visibilidad guían la colocación del espacio escénico."
      ],
      [
        "Si un actor se le olvida una línea, otro puede...",
        ["ignorarla y ayudar con una pista natural", "burlarse", "salir de escena", "reírse en su cara"],
        1,
        "El apoyo entre compañeros sostiene la escena y evita el ridículo."
      ],
      [
        "Para ocupar el espacio escénico bien, debo...",
        ["quedarme pegado en un punto", "moverme con sentido según la acción", "caminar sin parar", "bloquear la salida"],
        2,
        "Los desplazamientos tienen motivo: acercarse, alejarse, buscar, huir."
      ],
      [
        "El ruido detrás del telón durante la función...",
        ["es normal e ideal", "distrae y se evita ensayando", "ayuda al suspenso", "no importa"],
        0,
        "Se cuida el silencio en camerinos y pasillos para no interrumpir la escena."
      ],
      [
        "Reconocer al público al final fortalece porque...",
        ["mejora la relación y agradece la atención", "alarga la obra", "evita el ensayo", "no aporta"],
        3,
        "El teatro es un diálogo entre escena y sala; el agradecimiento lo simboliza."
      ]
    ],
    "cl": {
      "c": [
        ["escenario", "EN EL ESPACIO ESCÉNICO", "🎭"],
        ["público", "CON EL PÚBLICO", "🛋️"]
      ],
      "i": [
        ["fondo para lo lejano", "escenario"],
        ["centro para lo destacado", "escenario"],
        ["entradas y salidas ordenadas", "escenario"],
        ["mirada que conecta", "público"],
        ["silencio y atención", "público"],
        ["agradecimiento al final", "público"]
      ]
    },
    "em": [
      ["escenario", "espacio donde ocurre la obra"],
      ["fondo", "parte más alejada del escenario"],
      ["reverencia", "gesto de agradecimiento al público"],
      ["butaca", "asiento del espectador"]
    ],
    "or": ["Ubico decorados sin estorbar", "Defino entradas y posiciones", "Represento conectando con el público", "Agradezco y recogo el espacio"],
    "e": [
      "Escribe qué harás en los tres momentos: entrada, clímax y despedida.",
      "Entrada: salgo saludando. Clímax: descubro la sorpresa. Despedida: agradezco y me inclino.",
      5
    ]
  }
];

/* ====== g4 / efisica ====== */
/* DBA 4º — efisica */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.efisica = [
  {
    "n": "¿Qué le pasa a mi cuerpo al calentar?",
    "o": "Explicarás cómo se preparan corazón, músculos y articulaciones antes de hacer ejercicio.",
    "d": "DBA 4º efísica: comprendo la importancia fisiológica del calentamiento antes de la actividad física.",
    "t": [
      ["El corazón se acelera", "Al calentar, el corazón bombea más sangre y con ella oxígeno a los músculos.", "❤️"],
      ["Músculos listos", "Un músculo tibio se estira mejor; uno frío se contractura y se lesiona más fácil.", "🔥"],
      ["Articulaciones lubricadas", "Los codos, rodillas y hombros producen líquido que las hace moverse suaves.", "🦴"]
    ],
    "q": [
      [
        "Al empezar a calentar, el ritmo del corazón...",
        ["baja", "aumenta", "se queda igual", "se detiene"],
        1,
        "El corazón late más rápido para llevar más sangre, y con ella oxígeno, a los músculos que van a trabajar.",
        "Late más rápido para llevar energía."
      ],
      [
        "El calentamiento previene lesiones porque...",
        ["los músculos fríos son más elásticos", "los músculos tibios se estiran con mayor facilidad", "quita la necesidad de estirar", "hace que los huesos crezcan"],
        1,
        "La temperatura muscular elevada aumenta la elasticidad y reduce el riesgo de tirones.",
        "El músculo tibio es más elástico."
      ],
      [
        "¿Qué parte del cuerpo bombea la sangre con más fuerza al calentar?",
        ["el cerebro", "el corazón", "el estómago", "los pulmones solamente"],
        1,
        "El corazón es el motor de la circulación; su ritmo sube con la actividad.",
        "El corazón es el motor de la circulación; su ritmo sube con la actividad."
      ],
      [
        "Las articulaciones al moverse durante el calentamiento...",
        ["se endurecen", "se lubrican y se mueven mejor", "se hinchan", "desaparecen"],
        2,
        "El movimiento genera líquido sinovial que hace que las articulaciones funcionen suaves.",
        "El movimiento genera líquido sinovial que hace que las articulaciones funcionen..."
      ],
      [
        "Si salgo a correr sin calentar, puedo sentir...",
        ["los músculos más preparados", "dolor por tirones o calambres", "más energía", "nadie lo notaría"],
        0,
        "Los músculos fríos y duros se resisten al esfuerzo repentino y aparecen tirones.",
        "Músculo frío = mayor riesgo."
      ],
      [
        "El oxígeno llega a los músculos gracias a...",
        ["la sangre que impulsa el corazón", "los pies", "la ropa deportiva", "el aire frío"],
        3,
        "El corazón envía sangre rica en oxígeno a los músculos para que produzcan energía.",
        "El corazón envía sangre rica en oxígeno a los músculos para que produzcan energía."
      ],
      [
        "Calentar prepara al cuerpo porque...",
        ["lo lleva poco a poco de descanso al esfuerzo", "lo cansa antes de empezar", "lo enfría", "sirve para ganar peso"],
        0,
        "Es una transición progresiva: evita el salto brusco de la quietud al esfuerzo fuerte.",
        "Poco a poco, nunca de golpe."
      ],
      [
        "Un calentamiento adecuado dura aproximadamente...",
        ["1 minuto", "5 a 10 minutos", "1 hora", "todo el tiempo del partido"],
        1,
        "Cinco a diez minutos bastan para elevar la temperatura y el pulso sin cansar.",
        "Cinco a diez minutos bastan para elevar la temperatura y el pulso sin cansar."
      ],
      [
        "Los tendones son importantes durante el calentamiento porque...",
        ["conectan músculo con hueso y al estirarse se preparan", "no participan", "solo sirven para correr", "se calientan solos"],
        3,
        "Al estirar gradualmente, los tendones ganan flexibilidad y resisten mejor el esfuerzo.",
        "Al estirar gradualmente, los tendones ganan flexibilidad y resisten mejor el esf..."
      ],
      [
        "¿Qué señal indica que mi cuerpo ya está caliente?",
        ["escalofríos", "sensación de calor y pulso un poco más alto", "sueño", "frío en las manos"],
        0,
        "Calor corporal y pulsaciones elevadas son señales de que la sangre llega a los músculos.",
        "Calorcito y pulso arriba."
      ],
      [
        "Si siento dolor agudo al calentar, debo...",
        ["seguir igual para acostumbrarme", "detenerme y avisar al docente", "calentar más fuerte", "ignorarlo"],
        2,
        "El dolor es una alerta: parar y consultar evita una lesión mayor.",
        "El dolor es una alerta: parar y consultar evita una lesión mayor."
      ],
      [
        "La sangre durante el ejercicio se distribuye...",
        ["hacia los músculos que trabajan", "al estómago para digerir", "solo a la cabeza", "no cambia"],
        1,
        "El cuerpo redirige el flujo sanguíneo a los músculos activos; por eso no es bueno comer mucho antes.",
        "El cuerpo redirige el flujo sanguíneo a los músculos activos; por eso no es buen..."
      ]
    ],
    "cl": {
      "c": [
        ["prepara", "EFECTOS DEL CALENTAMIENTO", "✅"],
        ["lastima", "QUÉ LASTIMA EL SALTO BRUSCO", "❌"]
      ],
      "i": [
        ["aumenta el ritmo cardíaco", "prepara"],
        ["calienta los músculos", "prepara"],
        ["lubrica las articulaciones", "prepara"],
        ["tirones por músculo frío", "lastima"],
        ["calambres repentinos", "lastima"],
        ["correr sin preparación", "lastima"]
      ]
    },
    "em": [
      ["calentamiento", "serie de ejercicios previos al esfuerzo"],
      ["oxígeno", "gas que la sangre lleva a los músculos"],
      ["articulación", "unión entre dos huesos"],
      ["tirón", "desgarro leve por estiramiento brusco"]
    ],
    "or": ["Comienzo con movimientos suaves", "Aumento poco a poco el ritmo", "Siento calor y pulso más alto", "Añado movimientos propios del deporte"],
    "e": [
      "Escribe dos señales de que tu cuerpo ya está caliente.",
      "Siento calor en la piel y el corazón late más rápido.",
      5
    ]
  },
  {
    "n": "Las fases del calentamiento",
    "o": "Secuenciarás las partes del calentamiento: movilidad, elevación del pulso y estiramiento.",
    "d": "DBA 4º efísica: comprendo la importancia fisiológica del calentamiento organizando sus fases en orden.",
    "t": [
      ["Movilidad articular", "Cabeza, hombros, cintura, rodillas: muevo cada articulación suavemente para lubricarla.", "🔁"],
      ["Activación cardiovascular", "Trote o saltos suaves para subir el pulso y llevar sangre a los músculos.", "💓"],
      ["Estiramiento dinámico", "Estiro con movimiento controlado, sin rebotes, los grupos musculares del día.", "🧘"]
    ],
    "q": [
      [
        "El orden correcto de un calentamiento es...",
        ["estiramiento estático largo, trotar, sentarse", "movilidad articular, activación, estiramiento dinámico", "sprint completo, estirar, dormir", "saltar, correr sin parar, estirar después de jugar"],
        1,
        "Se empieza por las articulaciones, sigue con pulso y termina con estiramientos dinámicos que preparan el movimiento.",
        "Primero articulaciones, luego pulso, luego estirar."
      ],
      [
        "Al inicio del calentamiento muevo...",
        ["todo el cuerpo a máxima velocidad", "las articulaciones de forma suave", "solo los pies", "nada, me quedo quieto"],
        2,
        "La movilidad articular inicial lubrica codos, hombros, rodillas y cintura sin esfuerzo fuerte.",
        "La movilidad articular inicial lubrica codos, hombros, rodillas y cintura sin es..."
      ],
      [
        "La fase cardiovascular sirve para...",
        ["bajar el pulso", "elevar el pulso y la temperatura", "enfriar el cuerpo", "digestionar"],
        1,
        "Trote o saltos suaves llevan el corazón a un ritmo apto para el esfuerzo.",
        "Trote o saltos suaves llevan el corazón a un ritmo apto para el esfuerzo."
      ],
      [
        "¿Por qué se estira al final del calentamiento y no antes de sentarse?",
        ["porque los músculos fríos se estiran mejor", "porque con el cuerpo caliente el estiramiento es más efectivo y seguro", "porque no sirve antes", "para perder el tiempo"],
        0,
        "El tejido caliente se elonga mejor; además, el estiramiento dinámico mantiene el pulso activo.",
        "Con cuerpo tibio se estira mejor."
      ],
      [
        "Estirar con rebotes bruscos...",
        ["es la mejor técnica", "puede causar microlesiones en el músculo", "ayuda a crecer", "no tiene riesgo"],
        2,
        "El rebote obliga al músculo a un estiramiento súbito; se hace de forma lenta y sostenida.",
        "El rebote obliga al músculo a un estiramiento súbito; se hace de forma lenta y s..."
      ],
      [
        "Rotar la cabeza suavemente al inicio corresponde a...",
        ["movilidad articular", "estiramiento estático largo", "vuelta a la calma", "competencia"],
        0,
        "Es un ejercicio de movilidad para la cervical, muy suave y controlado.",
        "Es un ejercicio de movilidad para la cervical, muy suave y controlado."
      ],
      [
        "Una rutina corta de calentamiento de clase puede durar...",
        ["30 segundos", "5 a 10 minutos", "30 minutos", "una hora entera"],
        1,
        "Ese rango prepara sin fatigar, dejando energía para la actividad principal.",
        "Ese rango prepara sin fatigar, dejando energía para la actividad principal."
      ],
      [
        "Si el día es frío, el calentamiento debe...",
        ["ser más largo y progresivo", "omtirse", "consistir solo en estirar", "durar un minuto"],
        3,
        "Con frío el cuerpo tarda más en calentar; conviene alargar la fase inicial.",
        "Con frío el cuerpo tarda más en calentar; conviene alargar la fase inicial."
      ],
      [
        "Un rebote tipo estiramiento dinámico controlado se hace...",
        ["a saltones sin fin", "con movimiento lento y amplitud progresiva", "en seco y rápido", "sin respirar"],
        0,
        "La amplitud creciente y el control evitan tirones y preparan la musculatura.",
        "La amplitud creciente y el control evitan tirones y preparan la musculatura."
      ],
      [
        "¿Qué NO es una fase del calentamiento?",
        ["movilidad articular", "elevación del pulso", "descanso prolongado acostado", "estiramiento dinámico"],
        2,
        "Acostarse a descansar no prepara al cuerpo; lo mantiene en reposo.",
        "Acostarse a descansar no prepara al cuerpo; lo mantiene en reposo."
      ],
      [
        "Durante la fase de activación puedo...",
        ["trotar suave o saltar la cuerda", "sentarme a hablar", "dormir", "comer"],
        0,
        "Las actividades suaves continuas elevan gradualmente el pulso.",
        "Las actividades suaves continuas elevan gradualmente el pulso."
      ],
      [
        "Terminar el calentamiento con movimientos propios del deporte...",
        ["no sirve", "conecta la preparación con lo que haré después", "cansa demasiado", "provoca lesiones"],
        1,
        "Pases, lanzamientos o desplazamientos específicos afinan la coordinación para la clase.",
        "Pases, lanzamientos o desplazamientos específicos afinan la coordinación para la..."
      ]
    ],
    "cl": {
      "c": [
        ["fase", "FASES DEL CALENTAMIENTO", "📌"],
        ["nofase", "NO PERTENECE AL CALENTAMIENTO", "🚫"]
      ],
      "i": [
        ["movilidad de hombros", "fase"],
        ["trote suave", "fase"],
        ["estiramiento dinámico", "fase"],
        ["acostarse a largo rato", "nofase"],
        ["sprint máximo inicial", "nofase"],
        ["comer antes de activarse", "nofase"]
      ]
    },
    "em": [
      ["movilidad articular", "mover cada articulación con suavidad"],
      ["estiramiento dinámico", "elongar los músculos en movimiento"],
      ["pulso", "latido del corazón por minuto"],
      ["activación", "subir poco a poco la intensidad"]
    ],
    "or": ["Movilizo las articulaciones", "Elevo el pulso con trote suave", "Estiro en movimiento de forma controlada", "Realizo gestos del deporte del día"],
    "e": [
      "Escribe en orden las tres fases del calentamiento.",
      "Movilidad articular, elevación del pulso, estiramiento dinámico.",
      5
    ]
  },
  {
    "n": "Corro con buena técnica",
    "o": "Aplicarás la técnica básica de carrera: postura, brazos y apoyo del pie.",
    "d": "DBA 4º efísica: afianzo fundamentos técnicos deportivos básicos con la técnica correcta de carrera.",
    "t": [
      ["Postura erguida", "Miro al frente, el cuerpo ligeramente inclinado, sin tensionar los hombros.", "🧍"],
      ["Brazos activos", "Los codos a unos 90 grados y brazos que van y vienen, no cruzan el pecho.", "💪"],
      ["Apoyo con el mediopié", "Pisada ligera y corta; aterrizo con el medio del pie, no con el talón de golpe.", "👟"]
    ],
    "q": [
      [
        "Al correr, la mirada debe ir...",
        ["al piso justo al frente", "al frente y lejos", "hacia el cielo", "hacia los lados sin parar"],
        1,
        "Mirar al frente mantiene la postura erguida y ayuda a respirar mejor; mirar al suelo curva la espalda.",
        "Miro al frente, no al suelo."
      ],
      [
        "Los brazos al correr se mueven...",
        ["cruzando el pecho", "adelante y atrás con codo flexible", "pegados al cuerpo sin mover", "hacia arriba"],
        0,
        "El movimiento adelante-atrás equilibra el impulso de las piernas y aporta ritmo.",
        "El movimiento adelante-atrás equilibra el impulso de las piernas y aporta ritmo."
      ],
      [
        "El ángulo aproximado del codo al correr es de...",
        ["0 grados", "90 grados", "160 grados", "cualquiera"],
        2,
        "Codo a unos 90 grados permite brazos eficientes que empujen el ritmo.",
        "Codo a unos 90 grados permite brazos eficientes que empujen el ritmo."
      ],
      [
        "Una zancada demasiado larga hacia adelante...",
        ["ayuda a ir más rápido", "frena y aumenta el impacto en la rodilla", "es la técnica ideal", "no tiene efecto"],
        1,
        "Pisar muy adelante actúa como freno y golpea la articulación; se busca una pisada bajo el cuerpo.",
        "Pisar muy adelante actúa como freno y golpea la articulación; se busca una pisad..."
      ],
      [
        "Al correr, el tronco debe estar...",
        ["completamente recto y rígido", "ligeramente inclinado hacia adelante", "hacia atrás", "girando mucho"],
        3,
        "La inclinación leve acompaña la propulsión natural sin perder equilibrio.",
        "La inclinación leve acompaña la propulsión natural sin perder equilibrio."
      ],
      [
        "Respirar al correr se hace...",
        ["conteniendo el aire", "profundo y rítmico por la nariz y la boca", "rápido y cortado", "solo al final"],
        0,
        "La respiración rítmica aporta oxígeno constante a los músculos y evita fatiga temprana.",
        "La respiración rítmica aporta oxígeno constante a los músculos y evita fatiga te..."
      ],
      [
        "Aterrizar con el talón a cada paso genera...",
        ["menos esfuerzo", "más impacto en rodillas y tibias", "más velocidad", "mejor balance"],
        1,
        "El mediopié reparte el impacto; el golpe de talón transmite la fuerza a las articulaciones.",
        "El mediopié reparte el impacto; el golpe de talón transmite la fuerza a las arti..."
      ],
      [
        "En una carrera de velocidad, los brazos ayudan...",
        ["impulsando con fuerza coordinada", "sin moverse", "bloqueados arriba", "tirando del aire"],
        3,
        "La fuerza de brazos se coordina con las piernas para ganar impulso.",
        "La fuerza de brazos se coordina con las piernas para ganar impulso."
      ],
      [
        "La carrera eficiente se reconoce porque...",
        ["es más ruido y salto", "es ligera, armónica y sostenida", "gasta mucha energía", "dura pocos segundos"],
        1,
        "La técnica busca economía: avanzar sin desperdiciar fuerza ni rebotar de más.",
        "La técnica busca economía: avanzar sin desperdiciar fuerza ni rebotar de más."
      ],
      [
        "Si mis hombros están subidos y tensos al correr, debo...",
        ["subirlos más", "relajarlos y bajarlos", "tensar el cuello", "correr más rápido"],
        0,
        "La tensión gasta energía y acorta la respiración; conviene soltar hombros y manos.",
        "La tensión gasta energía y acorta la respiración; conviene soltar hombros y manos."
      ],
      [
        "Las manos al correr se mantienen...",
        ["apretadas con fuerza excesiva", "relajadas, casi como si sujetaran un huevo", "abiertas en cruz", "en los bolsillos"],
        2,
        "Manos relajadas evitan tensión que se transmite a brazos y hombros.",
        "Manos relajadas evitan tensión que se transmite a brazos y hombros."
      ],
      [
        "Al final de una carrera larga, mantener la técnica...",
        ["se abandona y se arrastra", "es clave para llegar mejor y respirar bien", "no importa", "se cambia por caminar siempre"],
        0,
        "La técnica sostenida permite mantener el ritmo y una llegada controlada.",
        "La técnica sostenida permite mantener el ritmo y una llegada controlada."
      ]
    ],
    "cl": {
      "c": [
        ["tecnica", "BUENA TÉCNICA DE CARRERA", "✅"],
        ["error", "ERROR FRECUENTE AL CORRER", "❌"]
      ],
      "i": [
        ["mirada al frente", "tecnica"],
        ["brazos adelante y atrás", "tecnica"],
        ["apoyo con mediopié", "tecnica"],
        ["mirar el suelo todo el tiempo", "error"],
        ["brazos cruzando el pecho", "error"],
        ["pisada de talón fuerte", "error"]
      ]
    },
    "em": [
      ["postura", "posición del cuerpo al correr"],
      ["mediopié", "parte central del pie para apoyar"],
      ["zancada", "distancia que cubre un paso"],
      ["ritmo", "velocidad constante de la carrera"]
    ],
    "or": ["Me coloco erguido con mirada al frente", "Activo los brazos con codo flexible", "Piso ligero con el mediopié", "Coordino la respiración con el ritmo"],
    "e": [
      "Escribe dos claves de técnica que usarás en tu próxima carrera.",
      "Mirar al frente y mover los brazos adelante y atrás.",
      5
    ]
  },
  {
    "n": "Paso y recibo el balón",
    "o": "Ejecutarás el pase y la recepción con técnica sencilla en juegos colectivos.",
    "d": "DBA 4º efísica: afianzo fundamentos técnicos deportivos básicos mediante el pase y la recepción.",
    "t": [
      ["Pase con el interior", "Giro el pie hacia afuera y empujo el balón con el empeine, mirando al compañero.", "⚽"],
      ["Pase de pecho", "Empujo desde el pecho con ambos brazos, extendiéndolos hacia el receptor.", "👐"],
      ["Recepción en dos tiempos", "Recibo y amortiguo el balón con el cuerpo para que no rebote lejos.", "🤲"]
    ],
    "q": [
      [
        "Para un pase preciso por el piso, uso...",
        ["la punta del pie", "el interior del pie", "la rodilla", "el talón hacia atrás"],
        1,
        "El interior ofrece una superficie plana y grande que controla dirección y fuerza.",
        "Uso el empeine o interior del pie."
      ],
      [
        "Antes de pasear, debo...",
        ["levantar la cabeza y ver al compañero", "mirar solo el balón", "correr a ciegas", "esperar que nadie marque"],
        0,
        "La visión del receptor garantiza que el pase llegue a destino.",
        "La visión del receptor garantiza que el pase llegue a destino."
      ],
      [
        "Al recibir un pase de pecho, los brazos...",
        ["se quedan pegados al cuerpo", "se abren y absorben el impacto", "se levantan arriba", "se cruzan sin mover"],
        2,
        "Los brazos flexibles frenan el balón suavemente para que no rebote lejos.",
        "Los brazos flexibles frenan el balón suavemente para que no rebote lejos."
      ],
      [
        "Si pateo el balón con mucha fuerza a un compañero cercano...",
        ["el pase es mejor", "probablemente no lo controle", "él lo agradece", "se logra más precisión"],
        1,
        "A corta distancia se usa fuerza moderada; la potencia excesiva dificulta la recepción.",
        "A corta distancia se usa fuerza moderada; la potencia excesiva dificulta la rece..."
      ],
      [
        "El pase de pecho se ejecuta...",
        ["con un solo pie saltando", "con ambos brazos desde el pecho", "con la cabeza", "rodando el balón"],
        3,
        "Es el pase típico de baloncesto y handball: empuje simultáneo con las dos manos.",
        "Es el pase típico de baloncesto y handball: empuje simultáneo con las dos manos."
      ],
      [
        "Para que el balón vaya por el piso, debo...",
        ["levantarlo con fuerza", "golpearlo por debajo de su centro", "pisarlo antes", "girarlo en el aire"],
        0,
        "Golpear el centro o por debajo lo mantiene rasante y controlado.",
        "Golpear el centro o por debajo lo mantiene rasante y controlado."
      ],
      [
        "Al recibir, la mejor posición de los pies es...",
        ["juntos y rígidos", "separados, listos para ajustar el cuerpo", "uno atrás muy lejos", "saltando siempre"],
        2,
        "Base amplia y rodillas flexibles permiten reaccionar y amortiguar.",
        "Base amplia y rodillas flexibles permiten reaccionar y amortiguar."
      ],
      [
        "La comunicación en el pase incluye...",
        ["callarse siempre", "nombrar o señalar al compañero", "gritar sin sentido", "esperar el error"],
        0,
        "Señales o llamados claros evitan malentendidos y pases perdidos.",
        "Señales o llamados claros evitan malentendidos y pases perdidos."
      ],
      [
        "Si el balón viene alto hacia mi pecho, lo recibo...",
        ["dejándolo pasar", "con las manos o el pecho amortiguando", "pateándolo lejos", "con los talones"],
        2,
        "Absorber la energía del balón con la superficie del cuerpo evita que se dispare.",
        "Absorber la energía del balón con la superficie del cuerpo evita que se dispare."
      ],
      [
        "Una buena recepción se logra...",
        ["mirando el balón hasta que se detenga", "cerrando los ojos", "con los brazos tiesos", "de espaldas"],
        3,
        "Seguir el balón con la vista y amortiguarlo garantiza el control.",
        "Seguir el balón con la vista y amortiguarlo garantiza el control."
      ],
      [
        "El pase se considera exitoso cuando...",
        ["sale muy alto", "llega al compañero y este lo controla", "viaja rápido sin destino", "rebota en la pared"],
        1,
        "El pase es un gesto colectivo: su destino es el receptor, no la fuerza.",
        "El pase es un gesto colectivo: su destino es el receptor, no la fuerza."
      ],
      [
        "Para mejorar el pase conviene...",
        ["practicar con distancia y dirección variadas", "patear sin mirar", "hacerlo solo una vez", "usar siempre máxima potencia"],
        0,
        "La práctica variada afina el control de fuerza y dirección.",
        "La práctica variada afina el control de fuerza y dirección."
      ]
    ],
    "cl": {
      "c": [
        ["pase", "TÉCNICA DE PASO", "🏹"],
        ["recepcion", "TÉCNICA DE RECEPCIÓN", "🧤"]
      ],
      "i": [
        ["interior del pie", "pase"],
        ["mirada al compañero", "pase"],
        ["fuerza moderada", "pase"],
        ["brazos que amortiguan", "recepcion"],
        ["pies flexibles", "recepcion"],
        ["vista puesta en el balón", "recepcion"]
      ]
    },
    "em": [
      ["pase", "envío del balón a un compañero"],
      ["recepción", "control del balón que llega"],
      ["interior del pie", "zona plana ideal para pasear"],
      ["amortiguar", "frenar suavemente la fuerza del balón"]
    ],
    "or": ["Ubico al compañero con la mirada", "Elijo el tipo de pase según la distancia", "Ejecuto con la técnica adecuada", "Reviso que el compañero lo controle"]
  },
  {
    "n": "Lanzo con técnica",
    "o": "Ejecutarás lanzamientos de precisión con coordinación del cuerpo y seguimiento del movimiento.",
    "d": "DBA 4º efísica: afianzo fundamentos técnicos deportivos básicos con la técnica de lanzamiento.",
    "t": [
      ["Fase de preparación", "Llevo el implemento atrás con el codo alto y el cuerpo de lado al objetivo.", "⤴️"],
      ["Impulso y lanzamiento", "Giro la cadera, flexiono y libero el brazo hacia adelante soltando con precisión.", "🎯"],
      ["Seguimiento", "El brazo continúa suavemente hacia el objetivo tras soltar; no se frena de golpe.", "👆"]
    ],
    "q": [
      [
        "Para lanzar con más control, primero debo...",
        ["mirar bien el objetivo", "cerrar los ojos", "girar la espalda al blanco", "correr sin rumbo"],
        3,
        "La fijación del objetivo guía la dirección del lanzamiento desde el inicio.",
        "Fijo la mirada en el blanco."
      ],
      [
        "Al lanzar, el cuerpo conviene estar...",
        ["de lado al objetivo", "completamente de frente", "de espaldas", "sentado"],
        0,
        "La posición lateral permite girar cadera y hombro, sumando fuerza con orden.",
        "La posición lateral permite girar cadera y hombro, sumando fuerza con orden."
      ],
      [
        "El impulso de un lanzamiento eficiente nace...",
        ["solo de la muñeca", "de las piernas y la cadera", "del cuello", "de los dedos"],
        2,
        "La fuerza sube desde el suelo: piernas, cadera, tronco y brazo se encadenan.",
        "La fuerza sube desde el suelo: piernas, cadera, tronco y brazo se encadenan."
      ],
      [
        "Tras soltar el implemento, el brazo...",
        ["se detiene de golpe", "sigue el movimiento hacia el blanco", "vuelve atrás", "se queda en alto sin seguir"],
        0,
        "El seguimiento suave evita lesiones y mejora la precisión final.",
        "El seguimiento suave evita lesiones y mejora la precisión final."
      ],
      [
        "Lanzar con el codo muy bajo dificulta...",
        ["la altura y la dirección", "la carrera", "la respiración", "nada"],
        3,
        "El codo alto favorece un arco limpio y mejor apuntación al objetivo.",
        "El codo alto favorece un arco limpio y mejor apuntación al objetivo."
      ],
      [
        "Si lanzo apuntando demasiado alto, el objeto...",
        ["recorrerá una trayectoria más larga y pasará el blanco", "se detendrá antes", "volverá solo", "caerá recto abajo"],
        0,
        "El ángulo determina el alcance; subirlo en exceso hace sobrepasar el objetivo.",
        "El ángulo determina el alcance; subirlo en exceso hace sobrepasar el objetivo."
      ],
      [
        "Una buena alineación de la mirada y el brazo...",
        ["se ignora", "aumenta la precisión", "no influye", "solo sirve para correr"],
        1,
        "Ojo y mano apuntando al mismo punto conectan intención y ejecución.",
        "Ojo y mano apuntando al mismo punto conectan intención y ejecución."
      ],
      [
        "Para lanzar segura y lejos, la mejor postura parte desde...",
        ["los pies bien apoyados y separados", "un solo pie en el aire", "piernas rígidas juntas", "sentado en el suelo"],
        0,
        "Una base firme permite transferir fuerza desde el suelo sin perder equilibrio.",
        "Una base firme permite transferir fuerza desde el suelo sin perder equilibrio."
      ],
      [
        "Al lanzar, conviene soltar el objeto...",
        ["en el punto más alto del arco con buena dirección", "en cualquier momento", "después de pasar el cuerpo", "con la mirada al suelo"],
        2,
        "Soltar en el punto óptimo del arco traduce todo el esfuerzo en trayectoria útil.",
        "Soltar en el punto óptimo del arco traduce todo el esfuerzo en trayectoria útil."
      ],
      [
        "El seguimiento del movimiento después de lanzar...",
        ["provoca lesiones", "ayuda a mantener la trayectoria y evitar tirones", "es opcional e inútil", "frena el objeto antes"],
        0,
        "Decelerar gradualmente protege el hombro y completa la mecánica del gesto."
      ],
      [
        "Si quiero acertar a un objetivo fijo, lo mejor es...",
        ["variar el ángulo a cada intento", "repetir la técnica y ajustar según el resultado", "lanzar con fuerza sin mirar", "cambiar de mano siempre"],
        2,
        "Repetir el patrón y corregir poco a poco lleva a la precisión."
      ],
      [
        "Coordinar piernas, cadera y brazo al lanzar se llama...",
        ["fuerza bruta", "encadenamiento coordinado", "equilibrio pasivo", "resistencia"],
        0,
        "La cadena de segmentos hace que la fuerza se acumule en lugar de perderse por partes."
      ]
    ],
    "cl": {
      "c": [
        ["lanzamiento", "PASOS DEL LANZAMIENTO", "🎯"],
        ["evito", "LO QUE DIFICULTA LANZAR", "❌"]
      ],
      "i": [
        ["mirar el objetivo", "lanzamiento"],
        ["cuerpo de lado", "lanzamiento"],
        ["impulso desde piernas y cadera", "lanzamiento"],
        ["seguimiento del brazo", "lanzamiento"],
        ["cerrar los ojos", "evito"],
        ["frenar el brazo de golpe", "evito"],
        ["lanzar sin observar el blanco", "evito"]
      ]
    },
    "em": [
      ["impulso", "fuerza inicial que da el cuerpo al lanzamiento"],
      ["trayectoria", "camino que recorre el objeto lanzado"],
      ["seguimiento", "continuación suave del brazo al soltar"],
      ["precisión", "llegar al objetivo deseado"]
    ],
    "or": ["Fijo el objetivo con la mirada", "Me posiciono de lado con codo alto", "Impulso desde piernas y cadera", "Suelto y sigo el movimiento suavemente"]
  },
  {
    "n": "Salto y aterrizaje seguro",
    "o": "Ejecutarás saltos verticales y aterrizajes con absorción correcta del impacto.",
    "d": "DBA 4º efísica: afianzo fundamentos técnicos deportivos básicos con el salto y la caída controlada.",
    "t": [
      ["Fase de impulso", "Flexiono rodillas y caderas, muevo los brazos y estiro el cuerpo hacia arriba.", "🦘"],
      ["Vuelo", "Mantengo el equilibrio en el aire con el tronco firme y la mirada al frente.", "🕊️"],
      ["Aterrizaje", "Aterrizo con ambas piernas, rodillas flexionadas, absorbiendo el golpe en silencio.", "🛬"]
    ],
    "q": [
      [
        "Un buen aterrizaje se reconoce porque...",
        ["suena fuerte con piernas tiesas", "es suave y silencioso con rodillas flexionadas", "duele en los talones", "rebotas hacia atrás"],
        1,
        "Flexionar rodillas al tocar el suelo amortigua el impacto y protege espalda y articulaciones.",
        "Caer blando como un gato."
      ],
      [
        "Antes de saltar, la posición de preparación es...",
        ["piernas rectas y brazos abajo", "rodillas flexionadas con brazos atrás", "de espaldas", "de pie sin preparar"],
        3,
        "La flexión previa almacena energía que se libera en el impulso."
      ],
      [
        "Al aterrizar, debo apoyar...",
        ["solo el talón de un pie", "ambos pies a la vez con punta-talón", "la rodilla", "las manos primero"],
        0,
        "El apoyo parejo y progresivo reparte el impacto en las dos piernas."
      ],
      [
        "Durante el vuelo, los brazos ayudan...",
        ["a mantener el equilibrio y la altura", "a frenar el aire", "sin moverse", "a caer más rápido"],
        2,
        "El movimiento de brazos aporta impulso inicial y estabiliza el cuerpo en el aire."
      ],
      [
        "Aterrizar con las piernas rígidas...",
        ["protege las rodillas", "transmite todo el impacto a articulaciones y columna", "mejora la técnica", "no tiene riesgo"],
        1,
        "La rigidez convierte el suelo en un golpe directo; la flexión es la amortiguación natural."
      ],
      [
        "La mirada durante el salto y la caída debe...",
        ["ir al techo todo el tiempo", "mantenerse al frente para orientar el aterrizaje", "seguir el piso constantemente", "cerrarse"],
        0,
        "Mirar al frente ayuda a controlar el equilibrio y ubicar el punto de apoyo."
      ],
      [
        "Para saltar más alto, el impulso de los brazos...",
        ["se ignora", "se coordina con el estiramiento de piernas", "se usa al final del vuelo", "no influye"],
        3,
        "Brazos y piernas trabajando juntos suman altura al salto."
      ],
      [
        "Un aterrizamiento inestable de pie suele deberse a...",
        ["apoyar con un solo pie y peso desplazado", "mirar al frente", "flexionar rodillas", "usar brazos"],
        0,
        "El apoyo parejo y el centro de gravedad sobre los pies dan estabilidad."
      ],
      [
        "Caer de frente en un juego es mejor...",
        ["golpeando con las manos rígidas", "rolándose y absorbiendo con piernas flexionadas", "de espaldas", "sin flexionar"],
        2,
        "La caída con rodillo y piernas blandas distribuye la fuerza y evita lesiones."
      ],
      [
        "En un salto concreto, la secuencia es...",
        ["impulso, vuelo, aterrizaje absorbido", "aterrizaje, vuelo, impulso", "vuelo solo", "correr y sentarse"],
        3,
        "Las tres fases ocurren en orden y cada una prepara a la siguiente."
      ],
      [
        "Saltar repetidamente sin control...",
        ["mejora la resistencia", "puede sobrecargar rodillas y tobillos", "es la mejor técnica", "no tiene efectos"],
        0,
        "El impacto acumulado sin técnica fatiga las articulaciones; por eso se enseña a caer blando."
      ],
      [
        "La técnica del aterrizaje también sirve cuando...",
        ["corro en línea recta", "caigo sin querer en el recreo o en un juego", "estoy sentado", "me acuesto"],
        2,
        "Saber caer con flexión protege en situaciones cotidianas fuera del aula."
      ]
    ],
    "cl": {
      "c": [
        ["correcto", "SALTO Y CAÍDA CORRECTOS", "✅"],
        ["riesgo", "SALTO Y CAÍDA CON RIESGO", "❌"]
      ],
      "i": [
        ["rodillas flexibles al tocar", "correcto"],
        ["ambos pies parejos", "correcto"],
        ["mirada al frente", "correcto"],
        ["piernas rígidas", "riesgo"],
        ["apoyo de un solo pie", "riesgo"],
        ["caer con las manos tiesas", "riesgo"]
      ]
    },
    "em": [
      ["impulso", "acción de empujar el suelo para saltar"],
      ["aterrizaje", "momento de tocar el suelo al bajar"],
      ["absorber", "amortiguar el impacto flexionando"],
      ["equilibrio", "mantener el cuerpo sin caerse"]
    ],
    "or": ["Me preparo flexionando rodillas", "Impulso con piernas y brazos", "Mantengo el equilibrio en el aire", "Aterrizo blando con rodillas flexionadas"],
    "e": [
      "Escribe cómo aterrizas para no hacerte daño.",
      "Aterrizo con los dos pies juntos y flexiono las rodillas como si me sentara.",
      5
    ]
  },
  {
    "n": "Mido mi esfuerzo: el pulso",
    "o": "Identificarás cómo cambia tu pulso según la intensidad del ejercicio.",
    "d": "DBA 4º efísica: comprendo la importancia fisiológica del calentamiento midiendo la respuesta de mi cuerpo al esfuerzo.",
    "t": [
      ["¿Dónde siento el pulso?", "En la muñeca o el cuello, donde la arteria está cerca de la piel.", "❤️"],
      ["Mido 15 segundos", "Cuento latidos durante 15 segundos y multiplico por 4 para saber los por minuto.", "⏱️"],
      ["Descanso y recuperación", "En reposo baja; tras esfuerzo sube y vuelve poco a poco a la calma.", "📉"]
    ],
    "q": [
      [
        "Para contar el pulso con precisión, uso...",
        ["la palma de la mano", "las yemas de los dedos sobre la muñeca", "el codo", "la oreja"],
        1,
        "Se usan índice y corazón de los dedos, nunca el pulgar, que tiene su propio latido.",
        "Yemas de dedos, nunca el pulgar."
      ],
      [
        "Cuento latidos durante 15 segundos y obtengo 20. Mis latidos por minuto son...",
        ["20", "40", "60", "80"],
        3,
        "15 segundos es una cuarta parte de minuto: 20 x 4 = 80 latidos por minuto.",
        "Multiplica por 4."
      ],
      [
        "Después de correr, el pulso...",
        ["baja de inmediato", "aumenta", "no cambia", "desaparece"],
        0,
        "El corazón trabaja más para abastecer oxígeno a los músculos activos."
      ],
      [
        "El pulso en reposo de un niño sano suele ser...",
        ["más rápido que en reposo adulto tranquilo normal", "cero", "igual al de después de correr", "muy alto siempre"],
        3,
        "En reposo, los valores habituales rondan los 70-100 latidos por minuto; el ejercicio lo eleva."
      ],
      [
        "Después de esfuerzo, el pulso tarda en bajar...",
        ["es normal si vuelve poco a poco", "nunca baja", "hay que seguir corriendo", "significa que no sirve"],
        0,
        "La recuperación gradual indica que el corazón está sanamente regulado."
      ],
      [
        "¿Qué pasa si presiono fuerte la muñeca al medir?",
        ["siento mejor el pulso", "puedo tapar la arteria y confundir la cuenta", "no pasa nada", "sube el pulso"],
        1,
        "Presión excesiva obstruye el latido; se apoyan las yemas suavemente."
      ],
      [
        "Contar latidos con el pulgar...",
        ["es lo recomendable", "puede sumar el pulgar al conteo y dar error", "es más preciso", "no influye"],
        2,
        "El pulgar tiene arteria propia; por eso se usan los otros dos dedos."
      ],
      [
        "La recuperación rápida del pulso tras el ejercicio es...",
        ["una señal de buena condición física", "una señal de enfermedad", "algo malo", "normal en perros"],
        0,
        "Cuanto antes vuelve a la calma, mejor es la respuesta cardiovascular."
      ],
      [
        "Para comparar esfuerzos, lo mejor es medir...",
        ["siempre en el mismo momento y condiciones", "solo cuando quiero", "en distintos días y estados", "sin importar nada"],
        0,
        "Las mediciones se comparan bajo condiciones similares para que sean válidas."
      ],
      [
        "Al terminar una actividad fuerte, conviene...",
        ["parar de golpe y sentarse", "bajar la intensidad gradualmente", "correr más rápido", "beber mucha agua de una"],
        1,
        "El enfriamiento progresivo ayuda a que el pulso baje ordenadamente."
      ],
      [
        "Si siento el corazón muy acelerado y me marea al medir...",
        ["insisto fuerte", "descanso y le aviso al docente", "sigo corriendo", "ignoro la sensación"],
        3,
        "Mareo o molestia son señales para detenerse y pedir ayuda."
      ],
      [
        "Llevar registro de mis pulsos me sirve para...",
        ["ver cómo responde mi cuerpo con el tiempo", "competir con otros", "ganar pulseras", "no tiene utilidad"],
        0,
        "El registro personal muestra la evolución de la recuperación y la forma física."
      ]
    ],
    "cl": {
      "c": [
        ["medir", "AL MEDIR EL PULSO", "✅"],
        ["evito", "ERROR AL MEDIR", "❌"]
      ],
      "i": [
        ["usar yemas en la muñeca", "medir"],
        ["contar 15 segundos y multiplicar", "medir"],
        ["medir en calma y tras esfuerzo", "medir"],
        ["presionar muy fuerte", "evito"],
        ["usar el pulgar", "evito"],
        ["medir corriendo", "evito"]
      ]
    },
    "em": [
      ["pulso", "latido de las arterias por minuto"],
      ["frecuencia cardiaca", "latidos del corazón en un minuto"],
      ["recuperación", "vuelta del pulso al reposo"],
      ["intensidad", "qué tan fuerte es el esfuerzo"]
    ],
    "or": ["Descanso un momento", "Ubico el pulso en la muñeca", "Cuento latidos durante 15 segundos", "Multiplico por 4 y anoto"]
  },
  {
    "n": "Vuelta a la calma",
    "o": "Aplicarás la fase final del ejercicio para recuperar el cuerpo después del esfuerzo.",
    "d": "DBA 4º efísica: comprendo la importancia fisiológica del ejercicio completo con la vuelta a la calma.",
    "t": [
      ["Bajar poco a poco", "Paso de correr a caminar para que el corazón no se detenga bruscamente.", "🚶"],
      ["Estiramiento en calma", "Estiramientos suaves y sostenidos con el cuerpo todavía tibio.", "🧘"],
      ["Respirar y recuperar", "Respiro profundo y bebo agua en pequeños sorbos para recuperarme.", "🌬️"]
    ],
    "q": [
      [
        "Después de una carrera intensa, lo correcto es...",
        ["parar de golpe y sentarme", "caminar unos minutos para bajar el ritmo", "seguir corriendo", "acostarse de inmediato"],
        1,
        "La transición gradual evita mareos y ayuda a que la sangre retorne ordenadamente al corazón.",
        "Camino para bajar el pulso."
      ],
      [
        "El enfriamiento fisiológico sirve para...",
        ["elevar más el pulso", "ayudar a que el pulso y la respiración bajen progresivamente", "quitar la necesidad de estirar", "deshidratarse"],
        0,
        "Mantener movimiento ligero permite recuperación cardiovascular ordenada."
      ],
      [
        "Los estiramientos finales se hacen...",
        ["en frío y rápido", "con el cuerpo tibio, suaves y sostenidos", "reboteando fuerte", "sin respirar"],
        2,
        "El tejido tibio y el estiramiento lento aprovechan la elasticidad lograda en la sesión."
      ],
      [
        "Una señal de que mi cuerpo se recupera bien es...",
        ["el pulso baja poco a poco", "sigo muy acelerado siempre", "me marea", "no siento nada"],
        3,
        "La recuperación progresiva del pulso indica que el sistema cardiovascular responde bien."
      ],
      [
        "Beber agua al terminar se hace...",
        ["en grandes cantidades de golpe", "en sorbos pequeños y pausados", "nunca", "solo si tengo sed intensa"],
        0,
        "Los sorbos moderados reponen líquido sin incomodar al estómago."
      ],
      [
        "Si termino la clase con el pulso muy alto y me siento mal, informo...",
        ["a nadie", "al docente de educación física", "al público", "no importa"],
        1,
        "El docente atiende y evalúa si es normal o requiere atención."
      ],
      [
        "Un estiramiento sostenido suave dura aproximadamente...",
        ["1 segundo", "10 a 20 segundos", "2 minutos mínimo", "media hora"],
        0,
        "Ese tiempo permite que el músculo se relaje y gane amplitud sin forzar."
      ],
      [
        "La respiración profunda al final...",
        ["acelera el corazón", "ayuda a oxigenar y a bajar la frecuencia", "no tiene efecto", "causa mareo"],
        2,
        "Inspirar y expirar largo activa la recuperación y calma el sistema nervioso."
      ],
      [
        "Estirar después del esfuerzo también...",
        ["previene rigidez al día siguiente", "no sirve", "provoca lesiones", "quita energía"],
        0,
        "Ayuda a reducir la tensión muscular acumulada y la rigidez posterior."
      ],
      [
        "Si siento frío al terminar, debo...",
        ["quitarme la ropa enseguida", "ponerme una prenda seca y seguir caminando suave", "quedarme quieto mucho rato", "salir al frío"],
        1,
        "La ropa adecuada y el movimiento ligero mantienen la temperatura mientras bajo el ritmo."
      ],
      [
        "La vuelta a la calma completa el trabajo porque...",
        ["cierra la sesión de forma segura", "la hace más corta", "la alarga sin motivo", "sirve solo para competir"],
        3,
        "Es la etapa final que integra esfuerzo y recuperación con seguridad."
      ],
      [
        "Al terminar, mis músculos deben sentirse...",
        ["agujetas ya mismo", "recuperándose gradualmente sin dolor agudo", "muy fríos", "insensibles"],
        0,
        "La recuperación normal no genera dolor intenso; molestias fuertes se informan."
      ]
    ],
    "cl": {
      "c": [
        ["hago", "LO QUE HAGO AL TERMINAR", "✅"],
        ["evito", "LO QUE EVITO AL TERMINAR", "❌"]
      ],
      "i": [
        ["caminar para bajar el ritmo", "hago"],
        ["estirar suave y sostenido", "hago"],
        ["beber agua en sorbos", "hago"],
        ["parar de golpe", "evito"],
        ["sentarme rato largo de inmediato", "evito"],
        ["beber de golpe mucha agua", "evito"]
      ]
    },
    "em": [
      ["enfriamiento", "bajada gradual de la intensidad"],
      ["estiramiento sostenido", "mantener una postura suave unos segundos"],
      ["recuperación", "vuelta del cuerpo a su estado de reposo"],
      ["hidratación", "reponer agua después del esfuerzo"]
    ],
    "or": ["Bajo la intensidad caminando", "Respiro profundo y en calma", "Estiro los músculos usados", "Me hidrato en sorbos pequeños"],
    "e": [
      "Escribe qué harás en los tres minutos después de una carrera.",
      "Caminaré, respiraré profundo y estiraré las piernas suavemente.",
      5
    ]
  },
  {
    "n": "Juego limpio y respeto",
    "o": "Practicarás el fair play: respetar reglas, compañeros, adversarios y decisiones.",
    "d": "DBA 4º efísica: afianzo fundamentos técnicos deportivos básicos con actitud de juego limpio y respeto.",
    "t": [
      ["Cumplir las reglas", "Las reglas hacen el juego justo y divertido para todos; las conozco y las respeto.", "📜"],
      ["Respetar al otro", "Saludo al rival, ayudo si se cae y celebro sin humillar.", "🤝"],
      ["Aceptar las decisiones", "El docente o el árbitro deciden; discuto con respeto, no con enojo.", "🧑"]
    ],
    "q": [
      [
        "Un compañero rival se cae durante el partido. ¿Qué hago?",
        ["sigo jugando sin mirar", "le ofrezco la mano y espero que se levante", "celebro", "me río"],
        1,
        "El respeto al adversario es el corazón del juego limpio: primero la persona, después el partido.",
        "Primero la persona."
      ],
      [
        "Si la decisión del árbitro no me gusta...",
        ["la insulto", "la acepto y sigo jugando", "dejo el juego", "peleo"],
        3,
        "Las decisiones se respetan; puedo consultar con calma, pero sin agredir."
      ],
      [
        "Celebrar un punto adecuadamente es...",
        ["burlándome del rival", "celebrando con mi equipo sin humillar", "gritando en su cara", "tocando al rival"],
        0,
        "La alegría compartida motiva sin faltar al respeto."
      ],
      [
        "Antes de empezar, lo esperado es...",
        ["no saludar", "saludar a los equipos", "pelear por el balón", "discutir reglas"],
        1,
        "El saludo inicial marca respeto y buen ánimo para todos."
      ],
      [
        "Si veo que un compañero hace trampa, debo...",
        ["imitar la trampa", "recordarle las reglas con calma", "hacer otra mayor", "decirlo a todo el mundo burlándome"],
        2,
        "El diálogo respetuoso corrige sin exponer ni humillar."
      ],
      [
        "Jugar limpio significa...",
        ["ganar a toda costa", "ganar o perder con honestidad y esfuerzo", "hacer trampa disimulada", "no esforzarme"],
        1,
        "La honestidad y el esfuerzo valen más que el resultado a cualquier precio."
      ],
      [
        "Ganar con humildad se ve cuando...",
        ["me jacto de ser el mejor", "reconozco el esfuerzo de todos", "menosprecio al rival", "repito que gané"],
        0,
        "Reconocer a los demás y al esfuerzo compartido es señal de madurez deportiva."
      ],
      [
        "Perder con deportividad implica...",
        ["culpar al equipo", "reconocer el buen juego del otro y seguir entrenando", "romper el material", "irme sin despedir"],
        1,
        "La derrota también enseña; agradecer y analizar prepara la próxima vez."
      ],
      [
        "Las reglas del juego sirven para...",
        ["limitar por limitar", "proteger a los jugadores y hacerlo justo", "favorecer a uno", "complicar todo"],
        0,
        "Las reglas garantizan seguridad e igualdad de condiciones."
      ],
      [
        "Si un compañero critica a otro por un error...",
        ["me sumo a criticar", "le pido que respete y lo animemos", "grito igual", "me callo y no hago nada"],
        2,
        "Animar en el error fortalece al equipo y la convivencia."
      ],
      [
        "En el ejercicio en clase, el material...",
        ["se usa con cuidado y se devuelve en orden", "se tira", "se esconde", "se rompe"],
        0,
        "Cuidar el equipo compartido es parte de la responsabilidad colectiva."
      ],
      [
        "Después del juego, una buena actitud es...",
        ["agradecer y reconocer el esfuerzo de todos", "discutir el marcador", "irme sin avisar", "quejarme"],
        3,
        "El cierre con gratitud mantiene la amistad y las ganas de volver a jugar."
      ]
    ],
    "cl": {
      "c": [
        ["fair", "JUEGO LIMPIO", "✅"],
        ["nofair", "ACTITUD QUE NO SUMA", "❌"]
      ],
      "i": [
        ["saludar al rival", "fair"],
        ["ayudar al que se cae", "fair"],
        ["aceptar decisiones", "fair"],
        ["burlarse del error", "nofair"],
        ["hacer trampa", "nofair"],
        ["humillar al ganar", "nofair"]
      ]
    },
    "em": [
      ["juego limpio", "competir con honestidad y respeto"],
      ["deportividad", "saber ganar y perder con dignidad"],
      ["reglas", "acuerdos que hacen el juego justo"],
      ["árbitro", "persona que hace cumplir las reglas"]
    ],
    "or": ["Saludo y conozco las reglas", "Juego con esfuerzo y honestidad", "Respeto decisiones y rivales", "Agradezco y reconozco el esfuerzo de todos"],
    "e": [
      "Escribe una actitud de juego limpio que practicarás hoy.",
      "Ayudaré al compañero que se caiga y celebraré sin humillar a nadie.",
      5
    ]
  }
];

/* ====== g4 / etica ====== */
/* DBA 4º — etica */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.etica = [
  {
    "n": "Líder que escucha",
    "o": "Practicarás el liderazgo positivo escuchando antes de decidir.",
    "d": "DBA 4º ética: ejerzo liderazgo positivo entre mis pares escuchando y valorando las ideas de todos.",
    "t": [
      ["El líder escucha primero", "Antes de opinar, escucho a mi compañero completo, sin interrumpir.", "👂"],
      ["Todas las ideas cuentan", "A veces la mejor idea viene de quien menos habla. El líder la descubre.", "💡"],
      ["Escuchar es mirar y preguntar", "Miro al que habla y hago preguntas para entender mejor.", "🗨️"]
    ],
    "q": [
      [
        "Un compañero está explicando su idea y tú no estás de acuerdo. ¿Qué hago primero?",
        ["lo interrumpo", "lo escucho hasta el final", "me río", "le digo que no"],
        1,
        "Escuchar completo respeta a la persona y me permite entender su punto antes de responder.",
        "Primero escucho, luego respondo."
      ],
      [
        "Un buen líder de grupo toma decisiones...",
        ["sin consultar a nadie", "escuchando las ideas de todos antes de decidir", "siguiendo solo a su mejor amigo", "haciendo lo que él quiere"],
        1,
        "El liderazgo positivo recoge las ideas del grupo para que la decisión sea mejor para todos.",
        "El liderazgo positivo recoge las ideas del grupo para que la decisión sea mejor..."
      ],
      [
        "Si mi idea no fue elegida, como líder positivo yo...",
        ["la acepto y apoyo la idea elegida", "insisto en la mía hasta cansar", "me retiro del grupo", "no ayudo"],
        3,
        "Apoyar la decisión compartida, aunque no sea la mía, fortalece al equipo.",
        "El equipo va primero."
      ],
      [
        "Escuchar de verdad significa...",
        ["mirar al que habla y dejar de hacer otras cosas", "pensar en mi respuesta mientras él habla", "interrumpir para ayudar", "mirar el celular"],
        0,
        "La atención plena hace que el otro se sienta valorado y se exprese mejor.",
        "La atención plena hace que el otro se sienta valorado y se exprese mejor."
      ],
      [
        "Cuando doy una instrucción al grupo, es mejor...",
        ["hablar claro y comprobar que entendieron", "hablar muy rápido", "gritar", "asumir que todos entendieron"],
        3,
        "Confirmar la comprensión evita errores y malentendidos en el trabajo.",
        "Confirmar la comprensión evita errores y malentendidos en el trabajo."
      ],
      [
        "Un líder ayuda a que...",
        ["solo unos hablen", "todos tengan un momento para hablar", "él hable siempre", "nadie opine"],
        1,
        "Repartir la palabra es una forma de liderazgo inclusivo y justo.",
        "Repartir la palabra es una forma de liderazgo inclusivo y justo."
      ],
      [
        "Cuando el grupo discute mucho, un líder puede...",
        ["proponer turnos para hablar", "gritar más fuerte que todos", "irse", "elegir solo la respuesta de su amigo"],
        0,
        "Ordenar los turnos calma el ambiente y hace posible el diálogo.",
        "Pongo orden con calma."
      ],
      [
        "Para que el equipo confíe en ti como líder, es importante...",
        ["cumplir lo que prometes", "prometer mucho y no hacer", "cambiar de opinión sin avisar", "mandar sin escuchar"],
        1,
        "La coherencia entre palabras y actos genera confianza en el grupo.",
        "La coherencia entre palabras y actos genera confianza en el grupo."
      ],
      [
        "Si un compañero es tímido y casi no habla, yo...",
        ["lo invito a decir su idea", "lo dejo de lado", "hablo por él", "lo apuro en voz alta"],
        3,
        "Invitar con calma es un gesto de liderazgo que incluye a todos.",
        "Invitar con calma es un gesto de liderazgo que incluye a todos."
      ],
      [
        "Escuchar también es...",
        ["repetir con mis palabras lo que entendí", "discutir", "cambiar de tema", "hablar más fuerte"],
        0,
        "Parafrasear comprueba que entendí y muestra respeto por la idea ajena.",
        "Parafrasear comprueba que entendí y muestra respeto por la idea ajena."
      ],
      [
        "Cuando un líder admite un error, el grupo siente...",
        ["vergüenza de él", "respeto y confianza", "que ya no sirve", "que debe obedecer"],
        2,
        "Reconocer el error es señal de fortaleza y enseña que todos aprendemos.",
        "Reconocer el error es señal de fortaleza y enseña que todos aprendemos."
      ],
      [
        "La frase 'cuenta conmigo' comunica...",
        ["compromiso y apoyo", "indiferencia", "prisa", "desconfianza"],
        0,
        "Ofrecer apoyo genuino es esencia del liderazgo entre pares.",
        "Palabras que unen al equipo."
      ]
    ],
    "cl": {
      "c": [
        ["escucho", "SEÑALES DE UN LÍDER QUE ESCUCHA", "👂"],
        ["noescucho", "SEÑALES DE QUIEN NO ESCUCHA", "🔇"]
      ],
      "i": [
        ["miro al que habla", "escucho"],
        ["no interrumpo", "escucho"],
        ["hago preguntas", "escucho"],
        ["pienso en mi respuesta", "noescucho"],
        ["interrumpo", "noescucho"],
        ["miro el celular", "noescucho"]
      ]
    },
    "em": [
      ["líder positivo", "guía al grupo escuchando y sumando"],
      ["escucha activa", "prestar atención completa al otro"],
      ["turno", "momento de hablar respetando el orden"]
    ],
    "or": ["Presto atención al que habla", "No interrumpo y resumo lo entendido", "Hago preguntas para aclarar", "Agradezco y decido con el grupo"],
    "e": [
      "Escribe una frase de líder para animar a tu equipo cuando pierde.",
      "Ánimo, jugamos mejor cada vez; lo intentamos de nuevo.",
      5
    ]
  },
  {
    "n": "Doy el ejemplo",
    "o": "Liderarás actuando con honestidad, esfuerzo y respeto, sin necesidad de dar órdenes.",
    "d": "DBA 4º ética: ejerzo liderazgo positivo entre mis pares dando ejemplo con mis actos.",
    "t": [
      ["El ejemplo habla", "Mis compañeros miran más lo que hago que lo que digo.", "👣"],
      ["Honestidad a la vista", "Devuelvo lo que no es mío, cumplo las normas y admito mis errores.", "🤝"],
      ["Esfuerzo visible", "Me esfuerzo aunque nadie me mire; eso inspira a otros a seguir.", "🌱"]
    ],
    "q": [
      [
        "Encuentro un lápiz en el piso del salón. Como líder, ¿qué hago?",
        ["me lo quedo", "lo guardo para preguntar de quién es", "lo rompo", "lo escondo"],
        1,
        "Cuidar lo ajeno y buscar al dueño muestra honestidad; los demás aprenden de ese acto.",
        "Busco al dueño."
      ],
      [
        "El mejor ejemplo para el equipo es...",
        ["pedir que hagan lo que yo no hago", "hacer primero lo que pido", "castigar", "hablar de reglas sin cumplirlas"],
        2,
        "La coherencia entre lo que pido y lo que hago gana respeto sin gritos.",
        "La coherencia entre lo que pido y lo que hago gana respeto sin gritos."
      ],
      [
        "Si llego tarde a una actividad grupal, lo honesto es...",
        ["inventar una excusa", "pedir disculpas y ponerme a trabajar", "esconderme", "echar la culpa al transporte"],
        1,
        "Reconocer el error y compensar con esfuerzo es liderar con integridad.",
        "Reconocer el error y compensar con esfuerzo es liderar con integridad."
      ],
      [
        "¿Cómo influye tu actitud en el grupo?",
        ["no influye en nada", "influye: si yo estoy tranquilo, los demás se calman", "solo influye en mí", "influye si soy el más alto"],
        1,
        "La actitud es contagiosa: la calma, el respeto y el esfuerzo se contagian al grupo.",
        "La actitud es contagiosa: la calma, el respeto y el esfuerzo se contagian al gru..."
      ],
      [
        "Un líder cumple las normas...",
        ["solo cuando el docente mira", "siempre, con o sin testigos", "nunca", "solo en público"],
        2,
        "La honestidad se mantiene igual a solas que acompañado.",
        "La honestidad se mantiene igual a solas que acompañado."
      ],
      [
        "Cuando hago una tarea con esfuerzo, los compañeros...",
        ["me ignoran", "se motivan a esforzarse también", "me critican", "pierden el interés"],
        1,
        "El esfuerzo visible inspira; el liderazgo positivo se construye con actos.",
        "El esfuerzo visible inspira; el liderazgo positivo se construye con actos."
      ],
      [
        "Asumir un trabajo del grupo que nadie quiere...",
        ["es pérdida de tiempo", "es una oportunidad de servir y liderar", "es cosa de ingenuos", "es solo para recibir nota"],
        3,
        "El líder positivo sirve al equipo y no busca solo aplausos.",
        "El líder positivo sirve al equipo y no busca solo aplausos."
      ],
      [
        "Si veo que un compañero copia, le sugiero...",
        ["que entienda y luego lo haga con su idea", "que copie mejor", "que no copie y se vaya", "copiar yo también"],
        0,
        "Ayudar a entender educa; callar o imitar no construye.",
        "Ayudo a que aprenda."
      ],
      [
        "Dar ejemplo sin palabras se logra...",
        ["con acciones constantes y respeto", "con castigos", "con amenazas", "con premios"],
        3,
        "La acción repetida con coherencia comunica más que cualquier discurso.",
        "La acción repetida con coherencia comunica más que cualquier discurso."
      ],
      [
        "Admitir 'no sé' demuestra...",
        ["debilidad", "honestidad y apertura a aprender", "falta de inteligencia", "desinterés"],
        1,
        "Reconocer lo que no sé abre la puerta a aprender con otros.",
        "Reconocer lo que no sé abre la puerta a aprender con otros."
      ],
      [
        "Si el grupo llega a la hora acordada y yo llego tarde...",
        ["el ejemplo se rompe", "no pasa nada", "ellos se acostumbran", "ellos llegan tarde también"],
        0,
        "La puntualidad es parte del ejemplo; mi tardanza afecta la confianza del equipo.",
        "La puntualidad es parte del ejemplo; mi tardanza afecta la confianza del equipo."
      ],
      [
        "Un líder que cuida el salón y el material enseña...",
        ["a cuidar lo común", "a desperdiciar", "a no involucrarse", "a culpar"],
        3,
        "Cuidar lo compartido es un acto de respeto que el grupo reconoce y sigue.",
        "Cuidar lo compartido es un acto de respeto que el grupo reconoce y sigue."
      ]
    ],
    "cl": {
      "c": [
        ["si", "LO QUE SÍ ES DAR EJEMPLO", "✅"],
        ["no", "NO ES DAR EJEMPLO", "❌"]
      ],
      "i": [
        ["cumplo lo que pido", "si"],
        ["devuelvo lo ajeno", "si"],
        ["admito mis errores", "si"],
        ["pido y no hago", "no"],
        ["copio la tarea", "no"],
        ["llego tarde sin avisar", "no"]
      ]
    },
    "em": [
      ["ejemplo", "conducta que otros pueden imitar"],
      ["honestidad", "actuar con verdad y rectitud"],
      ["coherencia", "que mis actos coincidan con mis palabras"]
    ],
    "or": ["Pienso en cómo mi actitud afecta al grupo", "Actúo con honestidad aunque nadie mire", "Me esfuerzo y cumplo mis compromisos", "Reconozco mis errores y los corrijo"],
    "e": [
      "Escribe dos acciones con las que darás ejemplo a tu grupo esta semana.",
      "Cumplo mi palabra y ayudo a ordenar el salón sin que me lo pidan.",
      5
    ]
  },
  {
    "n": "Invito a todos a participar",
    "o": "Practicarás un liderazgo incluyente que busca a quien está solo o callado.",
    "d": "DBA 4º ética: ejerzo liderazgo positivo entre mis pares incluyendo a todos en las actividades.",
    "t": [
      ["Nadie sobra", "En todo grupo hay quien habla mucho y quien casi nada; todos aportan.", "🤝"],
      ["Invito con calma", "Me acerco al compañero solo y lo invito a jugar o a trabajar con nosotros.", "🙋"],
      ["Turnos justos", "Propongo que todos tengan turno para hablar, decidir y elegir.", "⚖️"]
    ],
    "q": [
      [
        "Veo a un compañero solo en el recreo. ¿Qué hago?",
        ["lo invito a jugar", "lo ignoro", "me río", "le digo que se vaya"],
        3,
        "La invitación sincera integra y hace del recreo un espacio de amistad.",
        "Lo invito con cariño."
      ],
      [
        "En un trabajo grupal, ¿cómo reparto las tareas?",
        ["las doy a mis amigos", "las reparto según lo que cada uno puede aportar", "las hago todas yo", "no reparto nada"],
        1,
        "Repartir según fortalezas valora a cada integrante y mejora el resultado.",
        "Repartir según fortalezas valora a cada integrante y mejora el resultado."
      ],
      [
        "Un compañero propone una idea tímida y poco clara. Como líder, yo...",
        ["la descarto sin escuchar", "le pido que la explique y la ayudo a mejorarla", "me burlo", "hablo por él"],
        1,
        "Apoyar la idea ajena la fortalece y motiva al compañero a participar más.",
        "Apoyar la idea ajena la fortalece y motiva al compañero a participar más."
      ],
      [
        "Invitar a todos significa...",
        ["que solo trabajen los que yo elijo", "que nadie quede de lado", "que hable siempre el más fuerte", "que no decida nadie"],
        0,
        "La inclusión es la marca del liderazgo positivo: nadie sobra.",
        "La inclusión es la marca del liderazgo positivo: nadie sobra."
      ],
      [
        "Cuando un compañero nuevo llega al salón, yo...",
        ["lo presento al grupo y lo invito a integrarse", "lo dejo solo", "lo ignoro", "espero que él lo haga todo"],
        3,
        "Acoger al recién llegado con acciones concretas crea pertenencia.",
        "Acoger al recién llegado con acciones concretas crea pertenencia."
      ],
      [
        "Cuando todos quieren elegir primero, propongo...",
        ["que el más alto decida", "un sorteo o turnos", "que yo elija", "quien grite más"],
        1,
        "Los mecanismos justos de turnos evitan exclusiones y favorecen la paz.",
        "Los mecanismos justos de turnos evitan exclusiones y favorecen la paz."
      ],
      [
        "Un grupo inclusivo es mejor porque...",
        ["solo ganan los más hábiles", "aprovecha los talentos de todos", "es más lento", "nadie aprende"],
        2,
        "La diversidad de fortalezas multiplica lo que el equipo puede lograr.",
        "La diversidad de fortalezas multiplica lo que el equipo puede lograr."
      ],
      [
        "Si un compañero no participa porque le da miedo, yo...",
        ["lo obligo a hablar", "le ofrezco una tarea sencilla para que empiece", "lo excluyo", "hablo por él siempre"],
        1,
        "Ayudar a empezar con pasos pequeños supera el miedo sin presionar.",
        "Ayudar a empezar con pasos pequeños supera el miedo sin presionar."
      ],
      [
        "Como líder, celebro los logros de...",
        ["solo mí", "todos los integrantes", "los que trabajaron conmigo", "nadie"],
        3,
        "Reconocer cada aporte motiva y refuerza el sentido de equipo.",
        "Reconocer cada aporte motiva y refuerza el sentido de equipo."
      ],
      [
        "Si el grupo se divierte a costa de un compañero, yo...",
        ["me uno a la burla", "defiendo al compañero y paro la burla", "me callo", "grabo el momento"],
        0,
        "Defender al otro es liderazgo valiente; la burla nunca es divertida para quien la recibe.",
        "Defender al otro es liderazgo valiente; la burla nunca es divertida para quien l..."
      ],
      [
        "Para incluir a todos en la recreación, es útil...",
        ["proponer juegos variados y accesibles", "solo jugar al mismo deporte", "no dejar que nadie juegue", "hacer equipos excluyentes"],
        1,
        "Juegos diversos permiten que cada cual encuentre su lugar.",
        "Juegos diversos permiten que cada cual encuentre su lugar."
      ],
      [
        "La inclusión empieza por...",
        ["notar quién está solo", "esperar que otros actúen", "ignorar al grupo", "tener solo un amigo"],
        0,
        "La mirada atenta da el primer paso para integrar a quien falta.",
        "La mirada atenta da el primer paso para integrar a quien falta."
      ]
    ],
    "cl": {
      "c": [
        ["sí", "LÍDER QUE INCLUYE", "🤝"],
        ["no", "NO INVITO A NADIE", "🚫"]
      ],
      "i": [
        ["invito al que está solo", "sí"],
        ["reparto tareas con equidad", "sí"],
        ["celebro a todos", "sí"],
        ["excluyo al tímido", "no"],
        ["burlo de las ideas", "no"],
        ["elijo solo a mis amigos", "no"]
      ]
    },
    "em": [
      ["incluir", "dar lugar y voz a cada persona"],
      ["equidad", "trato justo según las necesidades"],
      ["pertenencia", "sentir que formo parte del grupo"]
    ],
    "or": ["Noto quién está solo o callado", "Me acerco con respeto e invito", "Reparto tareas y turnos con justicia", "Celebro los aportes de cada uno"],
    "e": [
      "Escribe una frase para invitar a un compañero nuevo a tu grupo.",
      "Hola, somos el grupo de la feria; ¿quieres unirte? Hay una tarea para ti.",
      5
    ]
  },
  {
    "n": "Me pongo en tus zapatos",
    "o": "Practicarás la empatía imaginándote cómo se siente otra persona.",
    "d": "DBA 4º ética: fomento la empatía poniéndome en el lugar de mis compañeros.",
    "t": [
      ["¿Qué siente el otro?", "Antes de juzgar, intento imaginar cómo me sentiría yo en su lugar.", "💭"],
      ["Escuchar el porqué", "Detrás de un acto hay un sentimiento: tristeza, miedo o alegría.", "❤️"],
      ["Actuar con cuidado", "Si entiendo su sentir, elijo palabras y acciones que ayuden.", "🤲"]
    ],
    "q": [
      [
        "Un compañero llega con la ropa mojada y otros se ríen de él. ¿Cómo actúas?",
        ["me uno a la risa", "pienso cómo se sentiría y lo consuelo", "lo grabo", "le digo que se calle"],
        0,
        "Ponerse en el lugar del otro es el núcleo de la empatía: nadie quiere ser burlado.",
        "Me imagino en su lugar."
      ],
      [
        "Un amigo cancela el plan porque está triste. ¿Qué respondo?",
        ["qué aguado", "entiendo; ¿quieres hablar o prefieres estar solo?", "no eres amigo", "venga, te obligo"],
        2,
        "Respetar el sentir ajeno y ofrecer acompañamiento es empatía en acción.",
        "Ofrezco apoyo sin forzar."
      ],
      [
        "Ponerse en tus zapatos significa...",
        ["imaginar cómo me sentiría en tu lugar", "hacer lo que yo quiero", "darte consejos sin escuchar", "ignorar tus emociones"],
        3,
        "Es imaginar la experiencia del otro desde su perspectiva, no desde la mía.",
        "Es imaginar la experiencia del otro desde su perspectiva, no desde la mía."
      ],
      [
        "Si veo a un compañero llorando en un rincón, lo más empático es...",
        ["preguntarle con calma si está bien y ofrecer ayuda", "contar a todos", "grabarlo", "reírme"],
        0,
        "La aproximación respetuosa abre la puerta al apoyo sin exponerlo.",
        "La aproximación respetuosa abre la puerta al apoyo sin exponerlo."
      ],
      [
        "Un niño nuevo no habla español bien. ¿Qué hago?",
        ["lo imito para reír", "lo ayudo con paciencia y palabras sencillas", "lo dejo solo", "le pido que no hable"],
        1,
        "La paciencia y la ayuda concreta facilitan la inclusión del recién llegado.",
        "La paciencia y la ayuda concreta facilitan la inclusión del recién llegado."
      ],
      [
        "¿Cómo reconozco que alguien está molesto?",
        ["por su cuerpo y cara, que muestran cómo se siente", "por sus zapatos", "por su ropa", "por su nota"],
        3,
        "Las señales no verbales revelan emociones si aprendo a observarlas.",
        "Las señales no verbales revelan emociones si aprendo a observarlas."
      ],
      [
        "Un compañero responde mal porque le fue difícil la prueba. Yo pienso...",
        ["es grosero conmigo", "a veces es difícil y reaccionamos mal", "siempre es así", "no debo hablarle"],
        1,
        "Comprender el contexto cambia la reacción: empatía reduce los conflictos.",
        "Comprender el contexto cambia la reacción: empatía reduce los conflictos."
      ],
      [
        "Cuando alguien celebra un logro, lo empático es...",
        ["envidiar", "felicitarse con él genuinamente", "restarle valor", "callarse"],
        0,
        "Compartir la alegría ajena fortalece los vínculos.",
        "Compartir la alegría ajena fortalece los vínculos."
      ],
      [
        "Si yo me siento mal, puedo pedir...",
        ["que todos adivinen", "comprensión y acompañamiento", "que me castiguen", "que me ignoren"],
        1,
        "Expresar lo que necesito con palabras es también parte de la inteligencia emocional.",
        "Expresar lo que necesito con palabras es también parte de la inteligencia emocio..."
      ],
      [
        "Una señal de empatía hacia un compañero es...",
        ["esconder su error", "acompañarlo y no exponerlo", "contarlo en el grupo", "grabarlo"],
        2,
        "Cuidar la privacidad del otro es respeto y empatía.",
        "Cuidar la privacidad del otro es respeto y empatía."
      ],
      [
        "Si no entiendo cómo se siente el otro, puedo...",
        ["inventar", "preguntar con calma cómo se siente", "juzgar", "dar por sentado"],
        1,
        "Preguntar con confianza es mejor que suponer mal.",
        "Preguntar con confianza es mejor que suponer mal."
      ],
      [
        "La empatía evita conflictos porque...",
        ["hace que nadie opine", "me permite comprender antes de reaccionar", "todos piensen igual", "elimina las diferencias"],
        3,
        "Comprender al otro suaviza mi respuesta y previene peleas.",
        "Comprender al otro suaviza mi respuesta y previene peleas."
      ]
    ],
    "cl": {
      "c": [
        ["pienso", "SEÑALES DE EMPATÍA", "💖"],
        ["nopienso", "SEÑALES SIN EMPATÍA", "🚫"]
      ],
      "i": [
        ["consuelo al que llora", "pienso"],
        ["ayudo al nuevo", "pienso"],
        ["felicito al que logra", "pienso"],
        ["me río de su ropa", "nopienso"],
        ["cuento su secreto", "nopienso"],
        ["lo grabo al caer", "nopienso"]
      ]
    },
    "em": [
      ["empatía", "entender cómo se siente el otro"],
      ["consolar", "acompañar a quien está triste"],
      ["perspectiva", "ver la situación desde el lugar del otro"],
      ["respeto", "trato cuidadoso hacia las personas"]
    ],
    "or": ["Observo cómo actúa o se ve la persona", "Me imagino en su lugar", "Pregunto con calma cómo se siente", "Elijo palabras y acciones que ayuden"],
    "e": [
      "Escribe cómo actuarías con un compañero que llora en el recreo.",
      "Me acerco con calma, le pregunto si está bien y le ofrezco mi compañía.",
      5
    ]
  },
  {
    "n": "Adivino cómo te sientes",
    "o": "Identificarás emociones en ti y en los demás para responder con cuidado.",
    "d": "DBA 4º ética: fomento la empatía reconociendo emociones propias y ajenas.",
    "t": [
      ["Nombres para lo que siento", "Alegría, tristeza, enojo, miedo: ponerle nombre ayuda a manejarla.", "🎭"],
      ["El cuerpo delata la emoción", "Puños apretados, hombros caídos o sonrisa dicen mucho sin palabras.", "❤️"],
      ["No hay emociones malas", "Todas son señales; lo que elijo hacer con ellas sí importa.", "🌈"]
    ],
    "q": [
      [
        "Tu compañero tiene los puños apretados y la cara roja. Probablemente...",
        ["está enojado", "está alegre", "tiene sueño", "está tranquilo"],
        3,
        "El enojo se manifiesta en el cuerpo: puños, mandíbula tensa y color en la cara.",
        "Los puños apretados indican enojo."
      ],
      [
        "Si tú sientes enojo, una buena forma de manejarlo es...",
        ["golpear", "respirar y decir con palabras qué me molesta", "romper algo", "gritar"],
        1,
        "Nombrar la emoción y expresarla con palabras la hace manejable.",
        "Primero respiro, luego hablo."
      ],
      [
        "Una amiga sonríe y salta. Está...",
        ["triste", "alegre", "enojada", "miedo"],
        2,
        "Las señales de alegría incluyen sonrisa, gestos amplios y energía alta.",
        "Las señales de alegría incluyen sonrisa, gestos amplios y energía alta."
      ],
      [
        "Si un compañero está triste y no quiere hablar, yo...",
        ["lo presiono", "le doy espacio y le digo que cuando quiera, estoy", "le grito", "me burlo"],
        0,
        "Respetar el espacio con oferta de compañía es una respuesta empática.",
        "Respetar el espacio con oferta de compañía es una respuesta empática."
      ],
      [
        "Decir 'estoy enojado porque...' ayuda porque...",
        ["me desahoga golpeando", "puede resolver el problema con palabras", "hace que el otro se rinda", "es gracioso"],
        1,
        "Expresar la causa con palabras abre la posibilidad de solucionar.",
        "Expresar la causa con palabras abre la posibilidad de solucionar."
      ],
      [
        "¿Cómo puedo identificar mis emociones?",
        ["nombro lo que siento y noto cómo reacciona mi cuerpo", "las escondo", "las finjo", "las ignoro"],
        3,
        "La autopercepción es la base de la inteligencia emocional.",
        "La autopercepción es la base de la inteligencia emocional."
      ],
      [
        "Un compañero llora al perder un partido. Le digo...",
        ["no es para tanto", "entiendo que estés decepcionado; yo también lo sentí", "eres malo", "vete"],
        0,
        "Validar el sentimiento ajeno, sin minimizarlo, es empatía.",
        "Validar el sentimiento ajeno, sin minimizarlo, es empatía."
      ],
      [
        "Cuando estoy nervioso antes de una exposición, puedo...",
        ["respirar profundo y recordar que me prepare", "no presentar", "copiar", "gritar"],
        2,
        "Técnicas simples de respiración calman el cuerpo y la mente.",
        "Técnicas simples de respiración calman el cuerpo y la mente."
      ],
      [
        "Las emociones se comparten mejor...",
        ["con gritos", "con palabras respetuosas", "con empujones", "con silencios raros"],
        0,
        "Las palabras respetuosas comunican sin agredir.",
        "Las palabras respetuosas comunican sin agredir."
      ],
      [
        "Si me confundo de emociones, puedo...",
        ["pedir ayuda a un adulto de confianza", "ocultarlo siempre", "inventar", "castigarme"],
        3,
        "Buscar apoyo es una estrategia madura para entender lo que siento.",
        "Buscar apoyo es una estrategia madura para entender lo que siento."
      ],
      [
        "Reconocer la emoción del otro mejora la convivencia porque...",
        ["evita malentendidos", "hace que todos piensen igual", "no aporta nada", "obliga a todos"],
        0,
        "Entender el sentir ajeno reduce juicios apresurados y conflictos."
      ],
      [
        "Cuando alguien expresa una emoción difícil, lo primero es...",
        ["escuchar sin juzgar", "dar consejos largos", "cambiar de tema", "reír"],
        3,
        "La escucha sin juicio es el mejor primer apoyo emocional."
      ]
    ],
    "cl": {
      "c": [
        ["reconozco", "RECONOZCO LA EMOCIÓN", "🧠"],
        ["ignoro", "IGNORO LA EMOCIÓN", "🙈"]
      ],
      "i": [
        ["pongo nombre a lo que siento", "reconozco"],
        ["escucho sin juzgar", "reconozco"],
        ["respiro si estoy nervioso", "reconozco"],
        ["escondo lo que siento", "ignoro"],
        ["me río del enojo ajeno", "ignoro"],
        ["minimizo el miedo", "ignoro"]
      ]
    },
    "em": [
      ["enojo", "emoción ante algo que me molesta"],
      ["tristeza", "emoción cuando extraño o pierdo algo"],
      ["validar", "aceptar que el sentimiento del otro es real"],
      ["autopercepción", "notar lo que yo siento en mi cuerpo"]
    ],
    "or": ["Observo señales del cuerpo y la cara", "Nombro la emoción que identifico", "Escuerdo que toda emoción es válida", "Elijo una respuesta respetuosa"]
  },
  {
    "n": "Respiro antes de reaccionar",
    "o": "Aplicarás técnicas de autorregulación para no reaccionar con enojo.",
    "d": "DBA 4º ética: aplico métodos de resolución pacífica autorregulando mis emociones antes de actuar.",
    "t": [
      ["La pausa es poder", "Un respiro antes de responder evita palabras y golpes que se lamentan.", "⏸️"],
      ["Cuento y respiro", "Respiro hondo y cuento hasta diez antes de decidir qué hacer.", "🔟"],
      ["Cambio de actividad", "Si sigo molesto, me alejo un momento y vuelvo cuando esté más calmado.", "🚶"]
    ],
    "q": [
      [
        "Un compañero me quita el material sin pedir. Lo primero que hago es...",
        ["gritarle", "respiro hondo y contar hasta diez", "empujarlo", "romper su trabajo"],
        0,
        "La pausa permite que el enojo baje y pueda responder sin lastimar.",
        "Respiro antes de actuar."
      ],
      [
        "Contar hasta diez sirve porque...",
        ["hace pasar el tiempo sin reaccionar mal", "me hace perder", "es un juego", "no sirve"],
        3,
        "Da unos segundos para que la emoción baje de intensidad y piense mejor."
      ],
      [
        "Cuando siento que el enojo sube, mi voz debe...",
        ["subir de volumen", "bajar y volverse más pausada", "volverse burlona", "gritar más"],
        1,
        "La voz calmada baja la tensión; los gritos la encienden."
      ],
      [
        "Si una discusión se pone fuerte, puedo sugerir...",
        ["seguir gritando", "hacer una pausa y retomar con calma", "pelear", "romper la amistad"],
        0,
        "Pausar y retomar evita daños irreparables en la relación."
      ],
      [
        "Una técnica de calma corporal es...",
        ["respirar profundo", "patear cosas", "tensar todo el cuerpo", "correr sin rumbo"],
        3,
        "La respiración lenta activa la calma y baja la reacción física del enojo."
      ],
      [
        "Si me enojé y lastimé a un compañero, lo honesto es...",
        ["esperar que se le pase", "pedir disculpas y ofrecer ayudarlo", "echarle la culpa", "olvidar"],
        1,
        "Reparar el daño con actos es parte de la resolución pacífica."
      ],
      [
        "Alejarse un momento de la situación...",
        ["es huir siempre", "puede ayudar a calmarse para volver mejor", "es malo siempre", "no cambia nada"],
        2,
        "Cuando la emoción está muy alta, la distancia temporal es útil."
      ],
      [
        "Antes de reaccionar, me pregunto...",
        ["cómo puedo hacerme daño", "qué pasará si hago esto", "quién gana", "cómo vencerlo"],
        0,
        "Anticipar las consecuencias frena respuestas impulsivas."
      ],
      [
        "Para no lastimar con palabras, conviene...",
        ["pensar antes de hablar", "decir lo primero que me pasa", "insultar", "gritar"],
        3,
        "Filtrar lo que diré evita heridas que el tiempo no borra fácilmente."
      ],
      [
        "Un compañero me provoca. Lo más inteligente es...",
        ["responder igual", "no alimentar la provocación y avisar a un adulto", "seguirle el juego", "amenazar"],
        1,
        "No responder a la provocación desactiva el conflicto y protege a ambos."
      ],
      [
        "La autorregulación es...",
        ["controlar mis emociones y mis actos", "no sentir nada", "esconder el enojo", "obedecer siempre"],
        3,
        "No se trata de no sentir, sino de manejar lo que hago con ese sentimiento."
      ],
      [
        "Después de calmarme, puedo...",
        ["explicar con palabras lo que me pasó", "olvidar y guardar rencor", "vengarme", "romper el vínculo"],
        0,
        "Hablar del conflicto calmado es la vía pacífica y madura para resolverlo."
      ]
    ],
    "cl": {
      "c": [
        ["calma", "ME CALMO ASÍ", "🧘"],
        ["enojo", "EMPEORA EL ENOJO", "🔥"]
      ],
      "i": [
        ["respiro profundo", "calma"],
        ["cuento hasta diez", "calma"],
        ["pido una pausa", "calma"],
        ["grito más fuerte", "enojo"],
        ["empujo al otro", "enojo"],
        ["respondo insultando", "enojo"]
      ]
    },
    "em": [
      ["autorregulación", "manejar mis emociones y actos"],
      ["pausa", "momento de calma antes de actuar"],
      ["impulso", "reacción inmediata sin pensar"],
      ["reparar", "enmendar el daño causado"]
    ],
    "or": ["Siento que el enojo sube", "Respiro hondo y cuento hasta diez", "Pienso en las consecuencias", "Respondo con palabras calmadas"],
    "e": [
      "Escribe qué harás la próxima vez que sientas enojo fuerte.",
      "Respiraré hondo, contaré hasta diez y responderé con calma.",
      5
    ]
  },
  {
    "n": "Los pasos del diálogo para resolver",
    "o": "Aplicarás los pasos del diálogo para resolver un conflicto con un compañero.",
    "d": "DBA 4º ética: aplico métodos de resolución pacífica de conflictos mediante el diálogo.",
    "t": [
      ["Detenerse", "Primero paramos la pelea física y bajamos el tono de voz.", "🛑"],
      ["Hablar y escuchar", "Cada uno dice lo que siente sin interrumpir, y repite lo que entendió.", "🗣️"],
      ["Acordar", "Buscamos una solución que les sirva a ambos y la probamos.", "🤝"]
    ],
    "q": [
      [
        "Un compañero empuja y se cae tu mochila. ¿Cuál es el primer paso?",
        ["pelear", "respiro y escucho qué pasó antes de responder", "gritar", "contarlo a todos"],
        1,
        "Comprender primero evita responder con enojo y empeorar la situación.",
        "Primero entiendo, luego actúo."
      ],
      [
        "En un diálogo de conflicto, hablar por turnos sirve para...",
        ["que todos se escuchen", "que el más fuerte gane", "competir quién grita más", "perder el tiempo"],
        2,
        "Los turnos garantizan que cada voz sea oída sin interrupciones."
      ],
      [
        "Cuando un compañero está enojado contigo, lo mejor es...",
        ["responderle con calma", "subir el tono", "ignorarlo para siempre", "juntar aliados"],
        0,
        "La calma desactiva la escalada del conflicto."
      ],
      [
        "Si la discusión se pone fuerte, puedo proponer...",
        ["seguir gritando", "hacer una pausa y retomar después", "pelear", "romper la amistad"],
        1,
        "La pausa permite que la emoción baje y se pueda hablar con claridad."
      ],
      [
        "Antes de acusar, conviene...",
        ["hablar de lo que siento con 'yo siento...'", "insultar", "amenazar", "gritar"],
        3,
        "Hablar desde lo propio ('me sentí...') reduce la defensividad del otro."
      ],
      [
        "La frase 'entonces, ¿pasó esto?' es útil para...",
        ["resumir lo que entendí", "culpar", "cerrar el diálogo", "confundir"],
        0,
        "Reformular comprueba que entendí y hace que el otro se sienta escuchado."
      ],
      [
        "Una solución dialogada es buena cuando...",
        ["gana solo uno", "beneficia a ambos y se acuerda", "la impone el más fuerte", "nadie queda conforme"],
        1,
        "El objetivo es un acuerdo justo donde ambos quedan razonablemente bien."
      ],
      [
        "Si no logro acuerdo, puedo pedir...",
        ["que intervenga el docente", "pelear más fuerte", "que el otro se vaya", "romper todo"],
        3,
        "Buscar mediación adulta es una estrategia madura, no una rendición."
      ],
      [
        "Cuando alguien pide disculpas, lo mejor es...",
        ["aceptar y pasar la página", "guardar rencor para siempre", "contarlo a todos", "exigir castigo"],
        0,
        "Aceptar unas disculpas sinceras reconstruye la confianza."
      ],
      [
        "Un acuerdo escrito o recordado sirve para...",
        ["que ambos cumplan lo prometido", "olvidarlo rápido", "culpar después", "no sirve"],
        2,
        "Acordar y recordar lo hablado hace el diálogo efectivo."
      ],
      [
        "Después de resolver, conviene...",
        ["quedar en silencio", "agradecer y quedar bien", "seguir peleando", "romper la amistad"],
        1,
        "El agradecimiento cierra el conflicto y fortalece la relación."
      ],
      [
        "Si el conflicto se repite, puedo...",
        ["aplicar los mismos pasos cada vez", "desistir y pelear", "castigar por mi cuenta", "aislarme"],
        3,
        "La constancia en los pasos hace del diálogo un hábito de convivencia."
      ]
    ],
    "cl": {
      "c": [
        ["paso", "PASOS DEL DIÁLOGO", "✅"],
        ["nopaso", "NO AYUDA A RESOLVER", "❌"]
      ],
      "i": [
        ["bajar el tono de voz", "paso"],
        ["hablar por turnos", "paso"],
        ["acordar una solución", "paso"],
        ["gritar y acusar", "nopaso"],
        ["interrumpir al otro", "nopaso"],
        ["amenazar", "nopaso"]
      ]
    },
    "em": [
      ["diálogo", "conversación respetuosa para resolver"],
      ["acuerdo", "solución que ambos aceptan"],
      ["mediación", "un adulto ayuda a encontrar la paz"],
      ["turno", "momento de hablar sin ser interrumpido"]
    ],
    "or": ["Bajamos el tono y paramos la pelea", "Hablamos por turnos sin interrumpir", "Reformulo lo que entendí", "Acordamos una solución y la probamos"],
    "e": [
      "Escribe una frase que inicie un diálogo con un compañero.",
      "Quiero entender qué pasó; cuéntame tu versión y yo te escucho.",
      5
    ]
  },
  {
    "n": "Buscamos una solución justa",
    "o": "Propondrás soluciones que beneficien a las personas involucradas, no solo a ti.",
    "d": "DBA 4º ética: aplico métodos de resolución pacífica buscando soluciones justas y no violentas.",
    "t": [
      ["Ganar-ganar", "La mejor solución busca que ambas partes queden bien, no que una venza.", "🤝"],
      ["Criatividad pacífica", "Hay muchas formas de resolver sin pelear: turnos, acuerdos, ayuda mutua.", "🧠"],
      ["Reparar el daño", "Si algo se rompió o se dolió, buscaré cómo repararlo con actos.", "💧"]
    ],
    "q": [
      [
        "Dos amigos quieren usar el mismo balón. Una solución justa es...",
        ["que lo tome el más fuerte", "turnarse con tiempos acordados", "que nadie lo use", "romperlo"],
        1,
        "Los turnos equitativos respetan el derecho de ambos al juego.",
        "Repartimos el tiempo por igual."
      ],
      [
        "Una solución justa busca...",
        ["favorecer solo a mi amigo", "el bienestar de todos los involucrados", "castigar al otro", "perder el tiempo"],
        2,
        "La justicia considera a cada persona afectada, no solo a mí."
      ],
      [
        "Si alguien derramó el agua por error, la respuesta justa es...",
        ["castigarlo duramente", "pedir que ayude a limpiar y listo", "gritarle", "excluirlo"],
        0,
        "Reparar el daño sin humillar es proporcional y humano."
      ],
      [
        "Cuando busco solución, puedo proponer varias ideas y...",
        ["elegir la más justa entre todos", "imponer la mía", "descartar las ajenas", "no escuchar"],
        3,
        "Comparar alternativas con el grupo lleva a acuerdos más justos."
      ],
      [
        "Si una norma parece injusta, puedo...",
        ["romperla en silencio", "proponer cambiarla con argumentos y diálogo", "obedecer sin más", "obligar a otros"],
        1,
        "Las normas se pueden revisar por canales pacíficos y argumentados."
      ],
      [
        "Una solución que deja a un compañero sin jugar...",
        ["es equitativa", "no es justa", "es la mejor", "resuelve todo"],
        0,
        "La equidad busca que nadie quede excluido ni perjudicado."
      ],
      [
        "Si el conflicto es por un error mío, lo justo es...",
        ["disculparme y reparar", "esconderlo", "echar la culpa", "olvidar"],
        3,
        "Asumir mi parte es el primer paso hacia una solución honesta."
      ],
      [
        "Antes de imponer una idea, conviene...",
        ["consultar al grupo", "gritar", "amenazar", "esconderla"],
        0,
        "La consulta transforma una imposición en un acuerdo."
      ],
      [
        "Cuando una solución no funciona, puedo...",
        ["insistir y probar ajustes", "romper todo", "pelear", "abandonar"],
        2,
        "Ajustar la solución con paciencia es parte del proceso de resolver."
      ],
      [
        "Una señal de que la solución es justa es que...",
        ["todos la aceptan y la cumplen", "solo yo gano", "nadie la entiende", "se olvida rápido"],
        0,
        "El acuerdo genuino se reconoce en la aceptación y el cumplimiento compartido."
      ],
      [
        "Después de acordar, es importante...",
        ["cumplir lo prometido", "cambiar de idea", "olvidarlo", "criticar"],
        2,
        "El cumplimiento da credibilidad al diálogo y a las personas."
      ],
      [
        "Si otro grupo tiene un conflicto parecido, yo...",
        ["ofrezco ayudar a mediar con calma", "me burlo", "participo en el pleito", "lo ignoro"],
        3,
        "Ayudar a otros a resolver refuerza una cultura de paz en la escuela."
      ]
    ],
    "cl": {
      "c": [
        ["justa", "SOLUCIÓN JUSTA", "⚖️"],
        ["injusta", "SOLUCIÓN INJUSTA", "❌"]
      ],
      "i": [
        ["turnos equitativos", "justa"],
        ["reparar el daño", "justa"],
        ["acuerdo consultado", "justa"],
        ["excluir al más débil", "injusta"],
        ["imponer sin consultar", "injusta"],
        ["castigar con humillación", "injusta"]
      ]
    },
    "em": [
      ["solución justa", "acuerdo que beneficia a todos"],
      ["equidad", "trato considerando las necesidades de cada uno"],
      ["reparar", "enmendar con actos el daño causado"],
      ["acuerdo", "compromiso aceptado por las partes"]
    ],
    "or": ["Identifico qué necesita cada persona", "Propongo varias ideas sin pelear", "Comparo cuál es más justa", "Acuerdo, cumplo y verifico"],
    "e": [
      "Escribe una solución justa para dos amigos que quieren el mismo balón.",
      "Nos turnamos por minutos: cada uno juega cinco y luego cambia.",
      5
    ]
  },
  {
    "n": "Pido disculpas y perdono",
    "o": "Repararás daños con disculpas sinceras y aprenderás a perdonar.",
    "d": "DBA 4º ética: aplico métodos de resolución pacífica pidiendo disculpas y practicando el perdón.",
    "t": [
      ["Disculpas sinceras", "Decir 'lo siento' con la verdad y explicar por qué, repara parte del daño.", "🙏"],
      ["Acciones que reparan", "Más que palabras, ayudo a arreglar lo que dañé.", "🛠️"],
      ["Perdonar es soltar", "Perdonar no es olvidar, pero sí dejar de cargar con el rencor.", "🕊️"]
    ],
    "q": [
      [
        "Tu actitud heredó a un compañero. Lo más honesto es...",
        ["esperar que se le pase", "pedir disculpas y ofrecer ayudarlo", "reír", "cambiar de tema"],
        1,
        "Disculparse con acciones repara mejor que fingir que nada pasó.",
        "Pido disculpa y ayudo."
      ],
      [
        "Una disculpa sincera incluye...",
        ["reconocer mi error y ofrecer reparar", "decir 'si te sentiste mal'", "culpar al otro", "minimizar"],
        3,
        "Reconocer el error propio sin excusas hace la disculpa creíble."
      ],
      [
        "Cuando alguien me pide disculpas de verdad, yo...",
        ["las acepto y sigo", "las rechazo siempre", "me vengo", "exijo castigo"],
        0,
        "Aceptar una disculpa sincera abre la puerta a reparar la confianza."
      ],
      [
        "Perdonar significa...",
        ["olvidar todo de inmediato", "dejar de cargar el rencor y buscar la paz", "que no importó", "seguir enemistado"],
        1,
        "Perdonar libera; no significa borrar lo ocurrido ni permitir que se repita."
      ],
      [
        "Si el error se repite, puedo...",
        ["creer siempre sin más", "poner límites claros y pedir cambios", "pelear", "romper el vínculo sin hablar"],
        2,
        "Perdonar no es permitir; puedo cuidarme poniendo límites."
      ],
      [
        "Reparar un material roto por error...",
        ["es parte de pedir disculpas", "no es necesario", "es cosa del docente", "se olvida"],
        0,
        "Las acciones reparadoras acompañan a las palabras de disculpa."
      ],
      [
        "Cuando pido disculpas, evito...",
        ["decir 'fue sin querer' repetido", "reconocer mi parte", "ofrecer ayuda", "hablar con calma"],
        1,
        "Las excusas constantes diluyen la responsabilidad; conviene asumir el error."
      ],
      [
        "Si un compañero no acepta mi disculpa aún, yo...",
        ["insisto respetuosamente y le doy tiempo", "lo presiono", "me enojo", "lo excluyo"],
        3,
        "El perdón del otro toma su tiempo; respeto ese proceso."
      ],
      [
        "El perdón fortalece la convivencia porque...",
        ["elimina el rencor", "hace que todos piensen igual", "no aporta nada", "sirve para olvidar todo"],
        0,
        "Soltar el rencor devuelve la paz al grupo y a mí mismo."
      ],
      [
        "Después de una disculpa reparadora, la relación...",
        ["puede reconstruirse con tiempo", "nunca mejora", "se rompe", "da igual"],
        3,
        "La confianza se recupera con actos coherentes y constantes."
      ],
      [
        "Un buen cierre tras un conflicto es...",
        ["quedar en silencio", "agradecer y desear lo bueno", "seguir peleando", "olvidar a la persona"],
        0,
        "El agradecimiento y el buen deseo cierran el conflicto con dignidad."
      ],
      [
        "Si yo soy el que recibe el daño, puedo...",
        ["practicar el perdón y poner límites", "vengarme", "guardar rencor", "contarlo a todos"],
        3,
        "Perdonar con límites es una decisión madura de paz interior."
      ]
    ],
    "cl": {
      "c": [
        ["repara", "LO QUE REPARA LA RELACIÓN", "💚"],
        ["no", "LO QUE NO REPARA", "🚫"]
      ],
      "i": [
        ["pedir disculpas sinceras", "repara"],
        ["ayudar a arreglar", "repara"],
        ["poner límites con respeto", "repara"],
        ["culpar al otro", "no"],
        ["vengarme", "no"],
        ["guardar rencor", "no"]
      ]
    },
    "em": [
      ["disculpa", "reconocimiento sincero del error"],
      ["perdón", "decisión de soltar el rencor"],
      ["reparación", "acción que enmienda el daño"],
      ["límite", "marco claro para no permitir el daño"]
    ],
    "or": ["Reconozco mi error con la verdad", "Pido disculpas sin excusas", "Ofrezco reparar con acciones", "Agradezco y cierro con respeto"],
    "e": [
      "Escribe una disculpa sincera para un compañero.",
      "Lo siento, me equivoqué al hablar así; quiero repararlo y contar contigo.",
      5
    ]
  }
];

/* ====== g4 / religiosa ====== */
/* DBA 4º — religiosa */
window.CURRICULO_DBA = window.CURRICULO_DBA || {};
window.CURRICULO_DBA.g4 = window.CURRICULO_DBA.g4 || {};
window.CURRICULO_DBA.g4.religiosa = [
  {
    "n": "Ritos que dan sentido",
    "o": "Reconocerás que los ritos son acciones simbólicas que expresan lo que un grupo valora.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["¿Qué es un rito?", "Es una acción simbólica que se repite y expresa las creencias y valores de un grupo.", "🤲"],
      ["Ritos que acompañan", "Muchas tradiciones celebran nacimientos, bodas y despedidas con ritos de cariño.", "👪"],
      ["Ritos y valores", "Cada rito recuerda algo importante: la gratitud, el respeto, el amor o la esperanza.", "🌟"]
    ],
    "q": [
      [
        "Un rito es...",
        ["cualquier costumbre al azar", "una acción simbólica que se repite y expresa valores", "una regla de tránsito", "un juego competitivo"],
        1,
        "Los ritos son gestos con significado que un grupo repite para expresar lo que cree y valora.",
        "Es una acción con significado simbólico."
      ],
      [
        "¿Qué expresan los ritos de muchas tradiciones religiosas?",
        ["solo comida", "creencias y valores del grupo", "una competencia", "un castigo"],
        2,
        "Más allá de la forma, los ritos comunican las convicciones y los valores que unen a la comunidad.",
        "Más allá de la forma, los ritos comunican las convicciones y los valores que une..."
      ],
      [
        "Una boda religiosa es un rito que suele expresar...",
        ["amor y compromiso", "una carrera", "un examen", "una compra"],
        0,
        "Las ceremonias de boda en distintas tradiciones simbolizan la unión y el compromiso amoroso.",
        "Las ceremonias de boda en distintas tradiciones simbolizan la unión y el comprom..."
      ],
      [
        "Los ritos ayudan a una comunidad porque...",
        ["la conectan y recuerdan lo que comparte", "la dividen", "no significan nada", "solo ocupan tiempo"],
        3,
        "Compartir ritos refuerza la identidad y la unión entre las personas de una comunidad.",
        "Compartir ritos refuerza la identidad y la unión entre las personas de una comun..."
      ],
      [
        "¿En qué se parecen los ritos de distintas tradiciones?",
        ["todos usan comida rápida", "todos celebran valores como amor o gratitud", "todos son iguales", "ninguno se parece"],
        1,
        "Aunque cambien las formas, muchas tradiciones celebran valores humanos compartidos.",
        "Aunque cambien las formas, muchas tradiciones celebran valores humanos compartid..."
      ],
      [
        "Un rito de despedida en algunas tradiciones busca...",
        ["expresar duelo y acompañamiento", "celebrar una fiesta", "hacer una compra", "competir"],
        0,
        "Los ritos de despedida acompañan el dolor y ofrecen consuelo a la familia.",
        "Los ritos de despedida acompañan el dolor y ofrecen consuelo a la familia."
      ],
      [
        "Los ritos de gratitud buscan...",
        ["agradecer lo bueno recibido", "pedir un castigo", "olvidar", "competir"],
        3,
        "Muchas tradiciones tienen momentos para agradecer la vida, la familia o la tierra.",
        "Muchas tradiciones tienen momentos para agradecer la vida, la familia o la tierra."
      ],
      [
        "Repetir un rito a lo largo del tiempo...",
        ["lo vuelve insignificante", "fortalece el recuerdo y la identidad del grupo", "lo prohíbe", "no cambia nada"],
        1,
        "La repetición hace que el significado del rito quede vivo en la memoria de la comunidad.",
        "La repetición hace que el significado del rito quede vivo en la memoria de la co..."
      ],
      [
        "Si una comunidad realiza un rito, es importante...",
        ["respetarlo aunque yo lo viva distinto", "burlarme", "impedirlo", "grabarlo sin permiso"],
        3,
        "El respeto por la diversidad de expresiones es esencial en una convivencia sana.",
        "Respeto aunque sea distinto."
      ],
      [
        "Los ritos de bienvenida en algunas tradiciones...",
        ["reciben a los nuevos con cariño", "expulsan", "ignoran", "castigan"],
        0,
        "Muchas comunidades celebran la llegada de nuevas personas con gestos de acogida.",
        "Muchas comunidades celebran la llegada de nuevas personas con gestos de acogida."
      ],
      [
        "¿Qué le da valor a un rito?",
        ["el significado simbólico que comparte el grupo", "su duración", "su costo", "el número de personas"],
        3,
        "Es el significado compartido lo que hace que un rito tenga valor para la comunidad.",
        "Es el significado compartido lo que hace que un rito tenga valor para la comunid..."
      ],
      [
        "Los ritos pueden expresar...",
        ["solo tristeza", "toda gama de emociones humanas", "solo alegría", "ninguna emoción"],
        1,
        "Ritos alegres o solemnes dan cauce a sentimientos como alegría, esperanza, duelo o gratitud.",
        "Ritos alegres o solemnes dan cauce a sentimientos como alegría, esperanza, duelo..."
      ]
    ],
    "cl": {
      "c": [
        ["valor", "VALOR QUE EXPRESA UN RITO", "💛"],
        ["nocolor", "LO QUE UN RITO NO BUSCA", "🚫"]
      ],
      "i": [
        ["gratitud", "valor"],
        ["amor", "valor"],
        ["compromiso", "valor"],
        ["esperanza", "valor"],
        ["competir", "nocolor"],
        ["castigar", "nocolor"],
        ["burlarse", "nocolor"]
      ]
    },
    "em": [
      ["rito", "acción simbólica que repite una comunidad"],
      ["símbolo", "algo que representa una idea más profunda"],
      ["tradiciones", "costumbres que pasan de generación en generación"],
      ["valores", "principios que orientan el buen trato"]
    ],
    "or": ["Observo la acción simbólica", "Pregunto qué representa", "Reconozco el valor que expresa", "Respeto aunque sea distinto a mi experiencia"],
    "e": [
      "Escribe un rito de tu familia y qué valor expresa.",
      "En mi familia celebramos el año nuevo con la cena; expresa gratitud y unión.",
      5
    ]
  },
  {
    "n": "Símbolos de muchas tradiciones",
    "o": "Interpretarás el significado simbólico de elementos comunes en distintas convicciones.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["Un símbolo habla", "Un objeto o signo representa una idea más grande: una estrella puede ser esperanza.", "⭐"],
      ["Símbolos compartidos", "El agua, la luz o el pan aparecen en muchas tradiciones con sentidos afines.", "🌍"],
      ["Significados distintos", "El mismo símbolo puede expresar matices diferentes según la convicción.", "🔎"]
    ],
    "q": [
      [
        "El agua como símbolo en muchas tradiciones suele representar...",
        ["vida y pureza", "un examen", "una moneda", "un castigo"],
        3,
        "El agua limpia y da vida, por eso muchas tradiciones la usan para simbolizar renovación y pureza.",
        "El agua limpia y da vida, por eso muchas tradiciones la usan para simbolizar ren..."
      ],
      [
        "La luz en símbolos religiosos frecuentemente expresa...",
        ["esperanza y conocimiento", "oscuridad", "miedo", "ruina"],
        0,
        "La luz vence a la oscuridad; por eso simboliza la esperanza y la claridad en el camino.",
        "La luz vence a la oscuridad; por eso simboliza la esperanza y la claridad en el..."
      ],
      [
        "El pan compartido como símbolo evoca...",
        ["comida rápida", "comunidad y generosidad", "una competencia", "una compra"],
        2,
        "Repartir el pan simboliza la comunidad y el cuidado mutuo en muchas tradiciones.",
        "Repartir el pan simboliza la comunidad y el cuidado mutuo en muchas tradiciones."
      ],
      [
        "Un símbolo es...",
        ["un objeto sin significado", "algo que representa una idea más profunda", "una ley", "un edificio"],
        1,
        "Lo simbólico apunta más allá de sí mismo a un significado que la comunidad comparte.",
        "Lo simbólico apunta más allá de sí mismo a un significado que la comunidad compa..."
      ],
      [
        "Si en una tradición el agua simboliza pureza, en otra...",
        ["puede tener otro matiz de significado", "no significa nada", "es prohibida", "es solo agua"],
        0,
        "Los símbolos pueden variar en sus matices según la tradición que los interprete.",
        "Los símbolos pueden variar en sus matices según la tradición que los interprete."
      ],
      [
        "La flor de un símbolo religioso puede expresar...",
        ["belleza y crecimiento", "una regla", "un impuesto", "una tarea"],
        3,
        "La flor, que crece y se abre, simboliza a menudo la vida que madura y se transforma.",
        "La flor, que crece y se abre, simboliza a menudo la vida que madura y se transfo..."
      ],
      [
        "Muchas tradiciones usan velas porque...",
        ["iluminan y expresan esperanza", "enfrían", "hacen ruido", "sirven de juguete"],
        0,
        "La flama de la vela, pequeña pero firme, expresa la esperanza que se mantiene viva.",
        "La flama de la vela, pequeña pero firme, expresa la esperanza que se mantiene vi..."
      ],
      [
        "El árbol como símbolo en algunas convicciones representa...",
        ["raíces, crecimiento y vida", "un edificio", "un carro", "una tarea"],
        2,
        "El árbol, arraigado y crecido, evoca la vida firme y el desarrollo espiritual.",
        "El árbol, arraigado y crecido, evoca la vida firme y el desarrollo espiritual."
      ],
      [
        "Cuando alguien explica el símbolo de su tradición, yo...",
        ["escucho con respeto", "me burlo", "lo interrumpo", "digo que el mío es mejor"],
        0,
        "Escuchar con respeto enriquece el entendimiento mutuo entre convicciones.",
        "Escuchar con respeto enriquece el entendimiento mutuo entre convicciones."
      ],
      [
        "El mismo símbolo en distintas religiones...",
        ["siempre significa exactamente igual", "puede expresar matices distintos", "no existe", "está prohibido"],
        1,
        "La diversidad de interpretaciones muestra la riqueza de cada tradición.",
        "La diversidad de interpretaciones muestra la riqueza de cada tradición."
      ],
      [
        "Reconocer lo que un símbolo representa ayuda a...",
        ["comprender mejor a la comunidad", "discutir", "copiar", "olvidar"],
        0,
        "Entender lo simbólico permite apreciar los valores que esa comunidad profesa.",
        "Entender lo simbólico permite apreciar los valores que esa comunidad profesa."
      ],
      [
        "Respetar un símbolo ajeno es señal de...",
        ["madurez y buena convivencia", "debilidad", "indiferencia", "miedo"],
        3,
        "Honrar los símbolos de otros, sin renunciar a los propios, es convivir con respeto.",
        "Honrar los símbolos de otros, sin renunciar a los propios, es convivir con respe..."
      ]
    ],
    "cl": {
      "c": [
        ["símbolo", "SÍMBOLO Y SU SIGNIFICADO", "🔔"],
        ["noé", "LO QUE NO ES UN SÍMBOLO", "🚫"]
      ],
      "i": [
        ["agua: vida y pureza", "símbolo"],
        ["luz: esperanza", "símbolo"],
        ["pan: comunidad", "símbolo"],
        ["un examen", "noé"],
        ["una norma escolar", "noé"],
        ["un trámite", "noé"]
      ]
    },
    "em": [
      ["agua", "vida, pureza y renovación"],
      ["luz", "esperanza y claridad"],
      ["pan", "comunidad y generosidad"],
      ["símbolo", "significado profundo detrás de algo"]
    ],
    "or": ["Observo el símbolo", "Escucho su significado en esa tradición", "Reconozco el valor humano que expresa", "Lo respeto y lo comparo con otros"],
    "e": [
      "Escribe qué valor simboliza la luz en algunas tradiciones.",
      "La luz simboliza la esperanza que sigue viva aun en momentos difíciles.",
      5
    ]
  },
  {
    "n": "Tiempo y celebración",
    "o": "Describirás cómo las convicciones organizan el tiempo con celebraciones y momentos especiales.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["Días especiales", "Muchas tradiciones reservan días para celebrar, reflexionar o estar en familia.", "📅"],
      ["Ciclos y fiestas", "Algunas celebraciones se repiten cada año y marcan la identidad del grupo.", "🎉"],
      ["Tiempo compartido", "Celebrar juntos fortalece la familia y la comunidad.", "👪"]
    ],
    "q": [
      [
        "Muchas convicciones reservan un día especial para...",
        ["descansar, celebrar y reflexionar", "competir", "castigar", "trabajar más"],
        0,
        "Los días sagrados o festivos invitan al descanso, la reflexión y la celebración compartida.",
        "Los días sagrados o festivos invitan al descanso, la reflexión y la celebración..."
      ],
      [
        "Celebrar una fiesta tradicional en familia ayuda a...",
        ["fortalecer los lazos", "romperlos", "olvidar", "aislarse"],
        3,
        "El tiempo celebrado en comunidad refuerza el sentido de pertenencia y el cariño mutuo.",
        "El tiempo celebrado en comunidad refuerza el sentido de pertenencia y el cariño..."
      ],
      [
        "El calendario religioso de una comunidad...",
        ["ordena sus celebraciones y momentos de reflexión", "no sirve", "es solo decorativo", "prohíbe fiestas"],
        0,
        "El ciclo festivo marca los momentos que esa comunidad considera importantes.",
        "El ciclo festivo marca los momentos que esa comunidad considera importantes."
      ],
      [
        "Algunas tradiciones tienen celebraciones anuales que...",
        ["recuerdan hechos y valores de su historia", "no significan nada", "solo sirven para comprar", "compiten"],
        1,
        "Las fiestas anuales renuevan la memoria de lo que la comunidad valora y celebra.",
        "Las fiestas anuales renuevan la memoria de lo que la comunidad valora y celebra."
      ],
      [
        "Cuando una fiesta ajena se acerca, yo...",
        ["la conozco con curiosidad respetuosa", "la critico", "la impido", "me burlo"],
        0,
        "Conocer con respeto las celebraciones de otros enriquece la convivencia.",
        "Conocer con respeto las celebraciones de otros enriquece la convivencia."
      ],
      [
        "Un momento de reflexión o oración puede servir para...",
        ["ordenar prioridades y dar gracias", "perder el tiempo", "castigar", "competir"],
        3,
        "Los momentos de silencio o reflexión ayudan a agradecer y a reencontrar el sentido.",
        "Los momentos de silencio o reflexión ayudan a agradecer y a reencontrar el senti..."
      ],
      [
        "Las celebraciones de gratitud suelen invitar a...",
        ["agradecer lo recibido", "olvidar", "excluir", "castigar"],
        0,
        "Muchas tradiciones tienen fiestas dedicadas exclusivamente a dar gracias.",
        "Muchas tradiciones tienen fiestas dedicadas exclusivamente a dar gracias."
      ],
      [
        "El tiempo sagrado de una tradición...",
        ["tiene significado especial para sus practicantes", "no vale nada", "es solo un día libre", "se prohíbe"],
        2,
        "Cada tradición consagra tiempos que considera especialmente valiosos.",
        "Cada tradición consagra tiempos que considera especialmente valiosos."
      ],
      [
        "Celebrar juntos en la escuela...",
        ["puede fortalecer la convivencia", "está prohibido", "divide", "no sirve"],
        0,
        "Compartir celebraciones con respeto crea comunidad escolar inclusiva.",
        "Compartir celebraciones con respeto crea comunidad escolar inclusiva."
      ],
      [
        "Si mi familia no celebra una fiesta de otra tradición, yo...",
        ["la conozco igual con respeto", "la critico", "la olvido", "la impido"],
        1,
        "El conocimiento respetuoso no exige adoptar la práctica, sino valorar al otro.",
        "El conocimiento respetuoso no exige adoptar la práctica, sino valorar al otro."
      ],
      [
        "Muchas celebraciones incluyen...",
        ["comida compartida, música y oración", "solo castigos", "competencias", "silencio absoluto"],
        0,
        "Los elementos festivos dan alegría y refuerzan el sentido de comunidad.",
        "Los elementos festivos dan alegría y refuerzan el sentido de comunidad."
      ],
      [
        "El valor de una celebración está en...",
        ["el significado que comparte la comunidad", "el dinero gastado", "la duración", "el número de regalos"],
        3,
        "No es el lujo, sino el sentido compartido, lo que hace valiosa una celebración.",
        "No es el lujo, sino el sentido compartido, lo que hace valiosa una celebración."
      ]
    ],
    "cl": {
      "c": [
        ["tiempo", "MOMENTOS QUE CELEBRA UNA COMUNIDAD", "📅"],
        ["no", "LO QUE NO SUELE BUSCAR", "🚫"]
      ],
      "i": [
        ["fiestas anuales", "tiempo"],
        ["días de reflexión", "tiempo"],
        ["celebraciones de gratitud", "tiempo"],
        ["castigos", "no"],
        ["competencias", "no"],
        ["exclusiones", "no"]
      ]
    },
    "em": [
      ["celebración", "momento de alegría compartida"],
      ["reflexión", "tiempo de pensamiento profundo"],
      ["tradición", "costumbre que se hereda y se renueva"],
      ["comunidad", "grupo de personas unidas por valores"]
    ],
    "or": ["Reconozco la fecha especial", "Pregunto qué celebra esa tradición", "Identifico el valor que une a la comunidad", "Lo respeto y lo comparto con aprecio"]
  },
  {
    "n": "Gratitud en las tradiciones",
    "o": "Reconocerás cómo diversas convicciones expresan el valor de la gratitud.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["Dar gracias", "Muchas tradiciones tienen momentos para agradecer la vida, la familia y la tierra.", "🙏"],
      ["Gratitud diaria", "Agradecer no es solo un rito: es una actitud que se vive todos los días.", "🌅"],
      ["Gratitud y generosidad", "Quien agradece suele ser más generoso con los demás.", "💗"]
    ],
    "q": [
      [
        "La gratitud consiste en...",
        ["agradecer lo bueno que recibimos", "pedir más", "compararme", "quejarme"],
        3,
        "Reconocer con agradecimiento lo bueno fortalece el ánimo y los vínculos con los demás.",
        "Reconocer con agradecimiento lo bueno fortalece el ánimo y los vínculos con los..."
      ],
      [
        "Muchas tradiciones expresan la gratitud mediante...",
        ["ritos y oraciones de acción de gracias", "competencias", "castigos", "compras"],
        0,
        "Diversas convicciones reservan momentos para dar gracias por los dones recibidos.",
        "Diversas convicciones reservan momentos para dar gracias por los dones recibidos."
      ],
      [
        "Decir 'gracias' a diario en casa...",
        ["mejora el clima familiar", "no sirve", "está prohibido", "no cambia nada"],
        1,
        "El hábito de agradecer en la familia crea un ambiente de cariño y respeto.",
        "El hábito de agradecer en la familia crea un ambiente de cariño y respeto."
      ],
      [
        "Agradecer la comida antes de compartirla...",
        ["es un gesto de gratitud común en muchas tradiciones", "no existe", "está mal", "solo sirve de reloj"],
        0,
        "Agradecer o bendecir la mesa es una práctica extendida en distintas convicciones.",
        "Agradecer o bendecir la mesa es una práctica extendida en distintas convicciones."
      ],
      [
        "La gratitud se expresa también con...",
        ["acciones amables y servicio", "burlas", "quejas", "castigos"],
        3,
        "Más que palabras, la gratitud se demuestra ayudando y sirviendo a los demás.",
        "Más que palabras, la gratitud se demuestra ayudando y sirviendo a los demás."
      ],
      [
        "Un niño agradecido suele...",
        ["valorar lo que recibe y compartir", "quejarse siempre", "exigir", "olvidar los favores"],
        0,
        "La actitud agradecida genera generosidad y mejores amistades.",
        "La actitud agradecida genera generosidad y mejores amistades."
      ],
      [
        "La gratitud hacia la tierra en algunas tradiciones expresa...",
        ["respeto por la naturaleza y sus frutos", "miedo", "indiferencia", "dominio"],
        3,
        "Muchas comunidades agradecen la tierra y aprenden a cuidarla.",
        "Muchas comunidades agradecen la tierra y aprenden a cuidarla."
      ],
      [
        "Si me olvido de agradecer, puedo...",
        ["hacerlo ahora y cultivar el hábito", "no importar", "castigarme", "dejarlo para siempre"],
        0,
        "Nunca es tarde para empezar a agradecer; es un hábito que se cultiva.",
        "Nunca es tarde para empezar a agradecer; es un hábito que se cultiva."
      ],
      [
        "Agradecer un favor implica...",
        ["reconocer la bondad del otro", "olvidarlo", "devolverlo con enojo", "exigir más"],
        2,
        "Reconocer la generosidad ajena honra a quien nos ayudó.",
        "Reconocer la generosidad ajena honra a quien nos ayudó."
      ],
      [
        "Las celebraciones de gracias invitan a...",
        ["compartir con quien tiene menos", "guardar todo", "excluir", "castigar"],
        0,
        "La gratitud genuina se abre hacia los demás con generosidad.",
        "La gratitud genuina se abre hacia los demás con generosidad."
      ],
      [
        "Un corazón agradecido es menos propenso a...",
        ["la envidia y la queja", "la alegría", "el servicio", "la amabilidad"],
        0,
        "La gratitud desplaza la comparación y la insatisfacción.",
        "La gratitud desplaza la comparación y la insatisfacción."
      ],
      [
        "La gratitud fortalece la convivencia porque...",
        ["fomenta el respeto y la unión", "crea rivalidades", "no influye", "divide"],
        3,
        "Agradecer mutuamente teje confianza y buen trato entre las personas.",
        "Agradecer mutuamente teje confianza y buen trato entre las personas."
      ]
    ],
    "cl": {
      "c": [
        ["hago", "FORMAS DE VIVIR LA GRATITUD", "🙏"],
        ["nohago", "LO QUE CONTRA LA GRATITUD", "🚫"]
      ],
      "i": [
        ["agradezco con palabras", "hago"],
        ["ayudo a quien lo necesita", "hago"],
        ["valoro lo que recibo", "hago"],
        ["me quejo de todo", "nohago"],
        ["olvido los favores", "nohago"],
        ["exijo más sin agradecer", "nohago"]
      ]
    },
    "em": [
      ["gratitud", "reconocimiento agradecido por lo recibido"],
      ["generosidad", "disposición de compartir con los demás"],
      ["agradecer", "reconocer el bien que otro hace"],
      ["servir", "ayudar a los demás con desinterés"]
    ],
    "or": ["Pienso en algo bueno que recibí", "Reconozco quién me lo dio o de dónde vino", "Agradezco con palabra o acción", "Comparto esa alegría con otros"],
    "e": [
      "Escribe tres cosas por las que quieres dar gracias hoy.",
      "Gracias por mi familia, por mi salud y por mis compañeros de curso.",
      5
    ]
  },
  {
    "n": "El perdón y la reconciliación",
    "o": "Valorarás el perdón como camino de reconciliación presente en muchas convicciones.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["Soltar el rencor", "Perdonar libera al corazón del peso de la venganza.", "🕊️"],
      ["Pedir y dar perdón", "Reconocer el error y disculparse abre la puerta a la paz.", "🤝"],
      ["Reconciliarse", "Volver a convivir con respeto después de un conflicto es un bien para todos.", "💞"]
    ],
    "q": [
      [
        "Perdonar significa...",
        ["soltar el deseo de venganza", "olvidar todo de inmediato", "permitir que se repita", "vengarme"],
        2,
        "Perdonar es decidir no devolver el mal; no exige olvidar ni permitir que se repita.",
        "Perdonar es decidir no devolver el mal; no exige olvidar ni permitir que se repi..."
      ],
      [
        "Muchas tradiciones religiosas promueven el perdón porque...",
        ["es fuente de paz interior y convivencia", "es un castigo", "no sirve", "es débil"],
        0,
        "El perdón es un valor universal que las convicciones enseñan como camino de paz.",
        "El perdón es un valor universal que las convicciones enseñan como camino de paz."
      ],
      [
        "Antes de pedir perdón, debo...",
        ["reconocer sinceramente mi error", "esperar que olviden", "culpar al otro", "esconderlo"],
        3,
        "La disculpa sincera reconoce el daño causado y muestra disposición a reparar.",
        "La disculpa sincera reconoce el daño causado y muestra disposición a reparar."
      ],
      [
        "Recibir una disculpa sincera ayuda a...",
        ["reparar la relación", "seguir peleando", "olvidar al otro", "guardar rencor"],
        0,
        "Aceptar la disculpa abre camino a la reconciliación y a la confianza.",
        "Aceptar la disculpa abre camino a la reconciliación y a la confianza."
      ],
      [
        "Reconciliarse implica...",
        ["volver a convivir con respeto", "seguir enemistado", "vengarse", "olvidar a la persona"],
        3,
        "La reconciliación restaura el vínculo roto con respeto y cuidado mutuo.",
        "La reconciliación restaura el vínculo roto con respeto y cuidado mutuo."
      ],
      [
        "Si me cuesta perdonar, puedo...",
        ["pedir ayuda y dar un paso pequeño", "vengarme", "guardar el rencor", "exigir un castigo"],
        0,
        "Perdonar a veces toma tiempo; buscar apoyo y avanzar poco a poco es válido.",
        "Perdonar a veces toma tiempo; buscar apoyo y avanzar poco a poco es válido."
      ],
      [
        "La reconciliación fortalece la convivencia porque...",
        ["restaura la confianza", "crea más conflicto", "no influye", "divide"],
        2,
        "Cuando se restaura la confianza, la comunidad vuelve a vivir en paz.",
        "Cuando se restaura la confianza, la comunidad vuelve a vivir en paz."
      ],
      [
        "Cuando alguien repara su error con actos...",
        ["muestra que su disculpa es sincera", "no cambia nada", "es débil", "no sirve"],
        0,
        "Las acciones reparadoras dan credibilidad a la disculpa.",
        "Las acciones reparadoras dan credibilidad a la disculpa."
      ],
      [
        "El perdón no significa...",
        ["aceptar el daño", "dejar de cuidarme", "permitir que se repita", "olvidar la lección"],
        0,
        "Perdonar no es exponerse: puedo perdonar y a la vez poner límites claros.",
        "Perdonar no es exponerse: puedo perdonar y a la vez poner límites claros."
      ],
      [
        "En la escuela, practicar el perdón evita...",
        ["que los conflictos se acumulen", "la amistad", "el aprendizaje", "la alegría"],
        2,
        "Perdonar pronto impide que los rencores crezcan y dañen el grupo.",
        "Perdonar pronto impide que los rencores crezcan y dañen el grupo."
      ],
      [
        "Una comunidad que practica el perdón se vuelve...",
        ["más unida y pacífica", "más conflictiva", "indiferente", "más competitiva"],
        0,
        "El perdón es un poderoso antídoto contra la violencia y la división.",
        "El perdón es un poderoso antídoto contra la violencia y la división."
      ],
      [
        "El perdón es también un camino interior...",
        ["que libera de la amargura", "que produce tristeza", "que no sirve", "que aísla"],
        3,
        "Al soltar el rencor, el corazón se llena de paz y libertad.",
        "Al soltar el rencor, el corazón se llena de paz y libertad."
      ]
    ],
    "cl": {
      "c": [
        ["sí", "EL PERDÓN QUE CONSTRUYE", "🕊️"],
        ["no", "LO QUE NO ES PERDONAR", "🚫"]
      ],
      "i": [
        ["reconocer el error", "sí"],
        ["reparar con actos", "sí"],
        ["volver a convivir", "sí"],
        ["vengarme", "no"],
        ["guardar rencor", "no"],
        ["permitir el daño", "no"]
      ]
    },
    "em": [
      ["perdón", "decisión de soltar la venganza"],
      ["reconciliación", "restauración del vínculo con respeto"],
      ["disculpa", "reconocimiento sincero del error"],
      ["límite", "marca clara para no permitir el daño"]
    ],
    "or": ["Reconozco el daño o el conflicto", "Pido o recibo el perdón con sinceridad", "Reparo con actos concretos", "Vuelvo a convivir con respeto"],
    "e": [
      "Escribe una frase para pedir perdón de corazón.",
      "Lo siento, me equivoqué; quiero reparar y que volvamos a ser amigos.",
      5
    ]
  },
  {
    "n": "Servir a los demás",
    "o": "Reconocerás el servicio como compromiso ético presente en diversas convicciones religiosas.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["Servir es ayudar", "Atender a quien lo necesita, sin esperar premio, es un valor universal.", "🤝"],
      ["Servicios sencillos", "Un vaso de agua, escuchar o ayudar en casa ya son formas de servir.", "💧"],
      ["Servir une", "Cuando servimos, fortalecemos la comunidad y nos hacemos mejores personas.", "🌍"]
    ],
    "q": [
      [
        "Servir a los demás consiste en...",
        ["ayudar desinteresadamente", "esperar un premio", "mandar", "competir"],
        3,
        "El servicio verdadero busca el bien del otro sin contar con una recompensa."
      ],
      [
        "Muchas tradiciones religiosas enseñan el valor de servir porque...",
        ["fortalece la caridad y la comunidad", "es un castigo", "no sirve", "genera competencia"],
        0,
        "El servicio al prójimo es un pilar ético común a diversas convicciones."
      ],
      [
        "Una forma sencilla de servir en casa es...",
        ["ayudar con las tareas", "no hacer nada", "mandar", "jugar solo"],
        2,
        "Ayudar en las tareas del hogar es el primer ejercicio de servicio y responsabilidad."
      ],
      [
        "En la escuela, servir puede ser...",
        ["ayudar a un compañero a entender", "excluir", "copiar", "gritar"],
        0,
        "Explicar o acompañar a quien no entiende es un gesto valioso de servicio."
      ],
      [
        "Servir en la comunidad puede consistir en...",
        ["participar en obras o ayudar a los vecinos", "burlarme", "no involucrarme", "criticar"],
        3,
        "Muchas comunidades se unen para servir a los más necesitados con obras concretas."
      ],
      [
        "El servicio desinteresado genera...",
        ["satisfacción y unión", "rivalidad", "tristeza", "aislamiento"],
        0,
        "Servir sin esperar nada llena de alegría y crea lazos fuertes."
      ],
      [
        "Si quiero servir, primero debo...",
        ["observar la necesidad real del otro", "imponer mi ayuda", "esperar un premio", "grabarme"],
        3,
        "Servir bien implica atender lo que la persona realmente necesita."
      ],
      [
        "Un líder que sirve...",
        ["es ejemplo para el grupo", "es débil", "no sirve", "es obedecido por miedo"],
        0,
        "Liderar desde el servicio es una de las formas más respetadas de guiar."
      ],
      [
        "Ayudar a quien no puede retribuir es...",
        ["el corazón del servicio genuino", "una pérdida de tiempo", "una obligación molesta", "algo sin valor"],
        2,
        "El servicio más puro es el que se ofrece a quien no puede devolverlo.",
        "Amor desinteresado."
      ],
      [
        "Cuando muchos sirven en comunidad...",
        ["el bien se multiplica", "no cambia nada", "surgen más problemas", "se pierde tiempo"],
        0,
        "El servicio compartido potencia el impacto y une a la comunidad."
      ],
      [
        "Servir también es cuidar...",
        ["la naturaleza y los bienes comunes", "solo lo mío", "nada", "los juguetes"],
        3,
        "Cuidar lo común es una forma de servir a todos los que compartimos ese bien."
      ],
      [
        "El servicio deja un legado de...",
        ["solidaridad y ejemplo", "olvido", "indiferencia", "conflicto"],
        0,
        "Quien sirve con amor deja una huella que inspira a otros a hacer lo mismo."
      ]
    ],
    "cl": {
      "c": [
        ["sirvo", "FORMAS DE SERVIR", "🤝"],
        ["no", "LO QUE NO ES SERVIR", "🚫"]
      ],
      "i": [
        ["ayudo en casa", "sirvo"],
        ["acompaño a un compañero", "sirvo"],
        ["cuido la naturaleza", "sirvo"],
        ["espero premio", "no"],
        ["mando sin cuidar", "no"],
        ["me burlo", "no"]
      ]
    },
    "em": [
      ["servir", "ayudar a los demás sin esperar nada"],
      ["desinterés", "actuar sin buscar beneficio propio"],
      ["solidaridad", "estar cerca de quien lo necesita"],
      ["ejemplo", "conducta que inspira a otros"]
    ],
    "or": ["Observo quién necesita ayuda", "Pienso en cómo puedo aportar", "Ayudo con actos concretos", "Lo hago con alegría y sin esperar premios"],
    "e": [
      "Escribe dos formas de servir en tu casa o tu barrio.",
      "Ayudo a mi abuela con las bolsas y acompaño a un vecino a cruzar la calle.",
      5
    ]
  },
  {
    "n": "Expresiones de fe en mi comunidad",
    "o": "Identificarás manifestaciones de convicciones religiosas presentes en tu entorno.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["Fe que se vive", "Las convicciones religiosas se expresan en celebraciones, obras y gestos diarios.", "🏘️"],
      ["Diversidad cercana", "En Colombia conviven muchas tradiciones, cada una con sus formas de expresarse.", "🌺"],
      ["Aprender a conocer", "Conocer las expresiones de los demás ayuda a convivir mejor.", "🔎"]
    ],
    "q": [
      [
        "Las expresiones de una convicción religiosa se ven en...",
        ["sus celebraciones y obras de bien", "solo su edificio", "su color", "su nombre"],
        3,
        "La fe se vive en gestos, celebraciones y acciones que benefician a la comunidad."
      ],
      [
        "En una comunidad colombiana pueden convivir...",
        ["varias tradiciones religiosas", "una sola siempre", "ninguna", "solo las antiguas"],
        0,
        "Nuestro país es diverso; muchas convicciones conviven con respeto."
      ],
      [
        "Un templo, mezquita o sinagoga es un lugar donde...",
        ["la comunidad se reúne para celebrar y orar", "se vende", "se juega", "se estudia solo"],
        2,
        "Los lugares de culto reúnen a la comunidad para sus celebraciones y momentos sagrados."
      ],
      [
        "Las obras de bien de una comunidad religiosa...",
        ["ayudan a personas necesitadas", "no sirven", "son solo decorativas", "dividen"],
        0,
        "Muchas tradiciones realizan obras sociales que benefician a su entorno."
      ],
      [
        "Cuando veo una manifestación de fe ajena, mi actitud es...",
        ["respetuosa y curiosa", "burlona", "crítica", "indiferente"],
        3,
        "El respeto activo y la curiosidad amable fortalecen la convivencia."
      ],
      [
        "Las fiestas patronales en algunos pueblos...",
        ["celebran la identidad y la tradición local", "no existen", "son solo comerciales", "están prohibidas"],
        0,
        "Las fiestas locales suelen mezclar devoción, cultura y comunidad."
      ],
      [
        "Los cantos y música en algunas tradiciones...",
        ["expresan alegría y devoción", "molestan", "no significan nada", "sirven para competir"],
        2,
        "La música es una hermosa forma de expresar la fe y la identidad de un grupo."
      ],
      [
        "Ayudar en una obra comunitaria de una tradición...",
        ["es un acto de servicio y unión", "está prohibido", "no sirve", "es solo para creyentes"],
        0,
        "Participar en el bien común, respetando cada convicción, fortalece el tejido social."
      ],
      [
        "Si mi amigo celebra una fiesta religiosa distinta a la mía, yo...",
        ["le pregunto con respeto y lo felicito", "lo critico", "lo excluyo", "me burlo"],
        3,
        "Preguntar con cariño y felicitar es un gesto de amistad verdadera."
      ],
      [
        "Las expresiones de fe pueden incluir...",
        ["oración, canto, ayuno o servicio", "solo competencias", "solo castigos", "nada"],
        0,
        "Cada tradición tiene formas propias de expresar sus creencias y valores."
      ],
      [
        "Reconocer las expresiones ajenas me ayuda a...",
        ["ser más tolerante y amable", "discutir", "compararme", "aislarme"],
        3,
        "El conocimiento respetuoso reduce prejuicios y fortalece la amistad."
      ],
      [
        "El patrimonio religioso de un pueblo...",
        ["forma parte de su identidad cultural", "no importa", "es solo viejo", "debe olvidarse"],
        0,
        "Los templos, fiestas y tradiciones son parte de la identidad cultural de las comunidades."
      ]
    ],
    "cl": {
      "c": [
        ["expreso", "EXPRESIONES DE FE", "⛪"],
        ["no", "LO QUE NO EXPRESA FE", "🚫"]
      ],
      "i": [
        ["celebraciones y fiestas", "expreso"],
        ["obras de bien", "expreso"],
        ["oración y canto", "expreso"],
        ["competencias", "no"],
        ["castigos", "no"],
        ["burlas", "no"]
      ]
    },
    "em": [
      ["expresión de fe", "gesto o celebración que muestra creencias"],
      ["convivencia", "vivir en paz con el resto"],
      ["tradiciones", "costumbres que identifican a una comunidad"],
      ["respeto", "trato cuidadoso hacia las creencias ajenas"]
    ],
    "or": ["Observo la expresión de fe", "Pregunto con respeto qué significa", "Reconozco el valor humano que aporta", "Lo celebro sin juzgar"],
    "e": [
      "Escribe una expresión de fe que hayas visto en tu comunidad y qué valor muestra.",
      "En la fiesta del pueblo vi una procesión; muestra unión y gratitud de la comunidad.",
      5
    ]
  },
  {
    "n": "Ritos de paso en la vida",
    "o": "Reconocerás cómo las convicciones acompañan los momentos importantes de la vida con ritos simbólicos.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["Momentos que marcan", "Nacer, crecer, unirse y despedirse son instantes que muchas tradiciones celebran.", "🎢"],
      ["Acompañamiento", "Los ritos de paso ofrecen cariño y comunidad en los cambios importantes.", "🤲"],
      ["Compromiso ético", "Cada rito de paso recuerda responsabilidades y valores asumidos.", "📌"]
    ],
    "q": [
      [
        "Un 'rito de paso' acompaña...",
        ["cambios importantes de la vida", "una competencia", "un examen", "un castigo"],
        3,
        "Los ritos de paso marcan transiciones como nacer, crecer o formar familia."
      ],
      [
        "Muchas tradiciones celebran el nacimiento con...",
        ["un rito de bienvenida y esperanza", "un silencio total", "una competencia", "un ayuno estricto"],
        0,
        "El nacimiento se celebra con gestos de acogida y bendición de la nueva vida."
      ],
      [
        "Ciertos ritos juveniles en algunas tradiciones recuerdan...",
        ["que el crecimiento trae nuevas responsabilidades", "que hay que obedecer siempre", "que se acaba el juego", "que no cambia nada"],
        2,
        "Algunas comunidades marcan la entrada en una etapa con compromisos éticos asumidos."
      ],
      [
        "Una boda como rito de paso expresa...",
        ["unión y compromiso amoroso", "una compra", "una carrera", "un examen"],
        0,
        "La ceremonia simboliza el pacto de cuidarse y caminar juntos."
      ],
      [
        "Los ritos de despedida ayudan a...",
        ["acompañar el duelo y honrar la memoria", "olvidar rápido", "celebrar la pérdida", "aislar a la familia"],
        3,
        "El acompañamiento en la despedida da consuelo y sentido a la pérdida."
      ],
      [
        "En un rito de paso, la comunidad tiene un papel de...",
        ["testigo y acompañante", "espectadora fría", "juez", "competidora"],
        0,
        "La comunidad sostiene a la persona en la transición y comparte su alegría o dolor."
      ],
      [
        "Los ritos de paso en distintas tradiciones...",
        ["varían en forma pero acompañan valores humanos", "son idénticos", "no existen", "solo son fiestas"],
        2,
        "Cada cultura tiene sus formas, pero todas celebran los grandes momentos de la vida."
      ],
      [
        "Un rito de paso puede incluir...",
        ["palabras de bendición, símbolos y compromisos", "solo castigos", "competencias", "ningún gesto"],
        0,
        "Las palabras, los símbolos y los compromisos dan profundidad al rito."
      ],
      [
        "Cuando un familiar vive un rito de paso, yo...",
        ["lo acompaño con cariño y respeto", "lo ignoro", "lo burla", "lo olvido"],
        3,
        "Acompañar con presencia y respeto fortalece los lazos familiares."
      ],
      [
        "Los ritos de paso recuerdan que...",
        ["la vida cambia y crece en responsabilidad", "todo queda igual", "hay que temer al cambio", "lo importante es competir"],
        0,
        "Cada etapa trae aprendizajes y compromisos nuevos con los demás."
      ],
      [
        "El valor de un rito de paso está en...",
        ["el significado y el acompañamiento que ofrece", "el dinero gastado", "la duración", "el número de invitados"],
        2,
        "No es el lujo, sino el sentido compartido lo que enriquece el rito."
      ],
      [
        "Respetar los ritos de paso ajenos es...",
        ["una señal de convivencia", "una obligación para creer lo mismo", "algo sin importancia", "una amenaza"],
        0,
        "Honrar los ritos de otros, sin adoptarlos, es convivir con respeto."
      ]
    ],
    "cl": {
      "c": [
        ["paso", "MOMENTOS DE RITO DE PASO", "🎢"],
        ["nopaso", "NO ES UN RITO DE PASO", "🚫"]
      ],
      "i": [
        ["nacimiento", "paso"],
        ["crecimiento y compromiso", "paso"],
        ["unión en matrimonio", "paso"],
        ["un examen de clase", "nopaso"],
        ["una competencia deportiva", "nopaso"],
        ["un castigo", "nopaso"]
      ]
    },
    "em": [
      ["rito de paso", "ceremonia que acompaña un cambio de etapa"],
      ["acompañamiento", "estar cerca de quien vive el cambio"],
      ["compromiso", "responsabilidad que se asume en la nueva etapa"],
      ["memoria", "recuerdo honrado de lo vivido"]
    ],
    "or": ["Reconozco el momento importante", "Acompaño con respeto y cariño", "Escucho el significado del rito", "Honro el valor humano que celebra"]
  },
  {
    "n": "Valorar las diferencias de convicción",
    "o": "Practicarás el respeto por las creencias y tradiciones distintas a la propia.",
    "d": "Educación religiosa: valores y convivencia (según el currículo institucional).",
    "t": [
      ["Cree distinto, vale igual", "Podemos tener convicciones distintas y aun así respetarnos y querernos.", "🤝"],
      ["Sin burlas ni desprecio", "Burlarse de la fe de otro hiere y rompe la convivencia.", "🚫"],
      ["Diálogo amable", "Preguntar con respeto es la mejor forma de conocer al otro.", "🗨️"]
    ],
    "q": [
      [
        "Un compañero tiene una convicción distinta a la mía. Yo...",
        ["lo respeto y lo trato con cariño", "lo excluyo", "lo burlo", "lo obligo a cambiar"],
        3,
        "El respeto por la diversidad es la base de la convivencia pacífica.",
        "Respeto y cariño, aunque pensemos distinto."
      ],
      [
        "Burlarse de la fe de otro...",
        ["hiere y rompe la amistad", "es gracioso", "no importa", "fortalece"],
        0,
        "Las burlas causan dolor y destruyen la confianza; nunca son aceptables."
      ],
      [
        "Si no entiendo una práctica religiosa ajena, puedo...",
        ["preguntar con respeto", "criticar", "esparcir rumores", "impedirla"],
        3,
        "La pregunta amable abre al diálogo; el prejuicio lo cierra."
      ],
      [
        "El respeto por las convicciones ajenas significa...",
        ["tratar bien a la persona aunque piense distinto", "creer lo mismo que ella", "no hablar", "tolerar el daño"],
        0,
        "Respetar la convicción del otro es honrar su dignidad como persona."
      ],
      [
        "Cuando convivimos con personas de distintas crees...",
        ["aprendemos y nos enriquecemos", "peleamos", "nos aislamos", "discutimos"],
        3,
        "La diversidad bien vivida amplía el horizonte y fortalece la comunidad."
      ],
      [
        "Un gesto de respeto interconviccional es...",
        ["asistir con respeto a una celebración ajena", "grabarla sin permiso", "criticarla", "dormir en ella"],
        0,
        "Acompañar con respeto comunica aprecio sin necesidad de adoptar la práctica."
      ],
      [
        "Los prejuicios sobre la fe ajena...",
        ["distorsionan la realidad", "ayudan", "unen", "esclarecen"],
        3,
        "Los prejuicios impiden ver al otro como realmente es; el diálogo los disipa."
      ],
      [
        "Si alguien critica mi convicción, yo...",
        ["respondo con calma y respeto", "me enojo", "me vengo", "lo insulto"],
        0,
        "Responder con serenidad dignifica y evita la escalada del conflicto."
      ],
      [
        "La paz entre convicciones se construye con...",
        ["diálogo, respeto y acciones amables", "silencio", "competencias", "aislamiento"],
        3,
        "El diálogo respetuoso es el puente entre convicciones distintas."
      ],
      [
        "En la escuela, convivir con crees diversas ayuda a...",
        ["ser más tolerante y amable", "discutir más", "creer que una es mejor", "aislarse"],
        0,
        "La escuela diversa forma ciudadanos respetuosos y abiertos al mundo."
      ],
      [
        "El diálogo entre convicciones promueve...",
        ["la paz y la fraternidad", "la rivalidad", "el olvido", "el miedo"],
        3,
        "La fraternidad entre personas de distintas convicciones es un bien para toda la sociedad."
      ],
      [
        "Valorar las diferencias fortalece porque...",
        ["construye una comunidad más unida y pacífica", "crea conflicto", "no aporta nada", "divide"],
        0,
        "La diversidad bien respetada multiplica los vínculos y hace más fuerte a la comunidad."
      ]
    ],
    "cl": {
      "c": [
        ["sí", "RESPECTO ENTRE CONVICCIONES", "🤝"],
        ["no", "NO RESPETA LAS DIFERENCIAS", "🚫"]
      ],
      "i": [
        ["pregunto con respeto", "sí"],
        ["celebro lo ajeno", "sí"],
        ["dialogo con calma", "sí"],
        ["me burlo", "no"],
        ["esparcir rumores", "no"],
        ["obligar a cambiar", "no"]
      ]
    },
    "em": [
      ["respeto", "trato cuidadoso hacia la convicción ajena"],
      ["tolerancia", "convivir con quien piensa distinto"],
      ["fraternidad", "amor y hermandad entre personas"],
      ["diálogo", "conversación respetuosa para entendernos"]
    ],
    "or": ["Reconozco que él piensa distinto", "Escucho con respeto su convicción", "Encuentro valores compartidos", "Convivo con cariño y sin juzgar"],
    "e": [
      "Escribe una frase de respeto para un compañero de otra convicción.",
      "Piensas distinto y eso es valioso; te respeto y sigues siendo mi amigo.",
      5
    ]
  }
];
