# Informe académico entrega 2
Fecha de entrega: 28-nov-2022

# Construcción

En la construcción de nuestro proyecto creamos dos clases en la capa de dominio: la clase Usuario y la clase Sistema. La clase usuario es la encargada de crear el usuario que navegará por la página y cargará resultados mientras que el Sistema se encarga de todos los métodos y funciones de "manejo de datos". Si bien no existe persitencia de datos en nuestro proyecto, la clase Sistema es la que permite:

- Agregar predicciones
- Validar usuarios
- Procesar pronosticos ya ingresados para no perder los datos al navegar por la web

En cuanto a librerías externas, este es nuestro `package.json`:

![package](/media/package.png)

# Interfaz de Usuario

Diseñamos una interfaz web responsiva a los cambios de tamaño del navegador que la contiene:

| Ventana Completa | Ventana pequeña  |
| ----------- | ----------- |
| ![landing_full](/media/landing_full.png) | ![landing_small](/media/landing_small.png) |
| ![grupo_full](/media/grupo_full.png) | ![grupo_small](/media/grupo_small.png) | 

Contamos con una top bar desde donde se despliega un menú lateral para que podamos navegar por las tres secciones de la página: Grupos del Mundial, Ranking y Reglas.

![barra_lateral](/media/barra_lateral.png)

A su vez, barra superior cuenta con una acción donde podemos elegir si queremos activar o no las notificaciones. Esta acción despliega un pop-up en la parte inferior de la página notificando al usuario de su elección:

| Notificaciones Aceptadas | Notificaciones Denegadas  |
| ----------- | ----------- |
| ![notificaciones_aceptadas](/media/notificaciones_aceptadas.png) | ![notificaciones_denegadas](/media/notificaciones_denegadas.png) |

Construimos nuestra interfaz de usuario siguiendo algunas de las Heuristicas de Nielsen:

- Visibilidad del status del sistema

La interacción con las notificaciones es un claro ejemplo donde el sistema responde y le informa al usuario que su acción se ejecutó correctamente y el sistema recibió la información correcta. 

- Vínculo entre el sistema y el mundo real 

Como se puede ver en la sección `Grupos del Mundial`, si accedemos al Grupo A la página nos lleva correctamente a la predicción para los partidos del Grupo A y además, los partidos se muestran en orden cronológico. Si bien esto es algo obvio y evidente, cumple con tener un vínculo entre el sistema y el mundo real, ya que nosotros podríamos haber modificado el orden de presentación de los partidos y haber llevado al usuario a una confusión.

- Consistencia y estándares 

Al utilizar elementos estandarizados de Material Design estamos cumpliendo con esta heurística, ya que no estamos reinventando la rueda para, por ejemplo, indicarle al usuario que tiene un menú desplegable en el extremo superior izquierdo de la pantalla. Ello ya se infiere debido al uso del símbolo de Menú.

- Prevención de errores 

A la hora de predecir resultados, si bien permitimos que los usuarios ingresen resultados desde el teclado (lo cual habilita a que se ingrese cualquier caracter) se puede ver como si se ingresa cualquier otra cosa que no sea un número el recuadro no indica nada. Esto forma parte de la prevención de errores que nosotros realizamos a los efectos de ayudar al usuario a no ingresar letras o valors negativos como resultado de los partidos.

- Diseño minimalista 

Se puede apreciar al navegar la interfaz que el diseño utilizado es minimalista. Nos focalizamos en crear elementos visuales concretos y simples, sin sobrecargar de información al usuario, para que la experiencia de navegación sea lo mas simple y amigable posible. No queremos crear una interfaz donde el usuario se confunda o se sienta abrumado.

- Ayuda y documentación 

La interfaz web cuenta con una sección `Reglas` donde se explica como participar del juego, realizar pronósticos y el funcionamiento del puntaje. En esta sección también se le explica al usuario el tiempo límite con el que cuenta para realizar las predicciones, con el fin de ayudarlo a prevenir errores a futuro.

# Codificación

Utilizamos el Visual Studio Code como IDE para la creación de nuestro proyecto. Nos terminamos basando en el repo creado anteriormente por Vega-Ramirez-Rodriguez debido a las dificultades encontradas en clase para la buena inicialización del proyecto y del entorno Node. Es por esto que terminamos usando la versión 16.14.0 de Node.js.

También introducimos ESLint como herramienta de código estático y lo configuramos para forzar el estilo de codificación de Google. Esto nos permitió tener un código más uniforme y legible entre los 3 participantes. Utilizamos ESLint de dos maneras distintas: 

1. Mediante su extensión en VSCode

ESLint cuenta con una extensión en Visual Studio Code que nos va marcando en rojo cuando tenemos errores. Si posamos el mouse sobre estos errores, el propio IDE nos describe qué tipo de error estamos cometiendo.

![extension_lint](/media/extension_lint.png)

2. Mediante la terminal

También corrimos ESLint mediante la terminal con los siguientes comandos:

`npx eslint <ubicacion_archivo/nombre_archivo>`

`npx eslint --fix <ubicacion_archivo/nombre_archivo>`

El primer comando nos indica dónde podemos encontrar errores en el archivo analizado y qué tipo de error estamos cometiendo. En escencia, algo muy similar a lo que hace la extensión en VSCode. Este comando lo dejamos de utilizar cuando descubrimos la extensión mencionada anteriormente.

A su vez, el segundo comando fue uno que nos brindó muchas soluciones ya que, dado el archivo que indicamos, automaticamente resuelve todos los errores que se puedan automatizar. Por ejemplo, si usamos un comillado doble en lugar de un comillado simple o si utilizamos un tab en lugar de un doble espacio para identar nuestro código. Esto hizo que se ahorrara mucho tiempo en codificación ya que no teníamos que ir manualmente haciendo estos cambios.

# Test Unitario

Utilizamos el framework Jest para crear y correr nuestros tests unitarios en la capa de dominio. Primero creamos los archivos siguiendo la nomenclatura usual `<nombre_clase>.test.js`. Luego configuramos los valores de entrada deseados mediante la creación de variables locales. Por último, creamos un método `test` para cada función que queríamos testear utilizando el método `expect().toBe()` para comparar las salidas con las salidas esperadas.

![tests_captura](/media/test_captura.png)

# Test de Sistema

Debido a cómo está realizado el proyecto que se nos asignó para esta sección, no se pudo realizar un test de sistema aplicando la técnica de partición de equivalencias. Los únicos datos a completar son los resultados de los partidos y esto no da lugar a la creación de las distintas clases de equivalencia.

Sin embargo, realizamos un test general ingresando valores para todos los partidos. Siguiendo las reglas básicas de asignación de puntos del fútbol, el resultado esperado al finalizar cada grupo debe corresponder con las posiciones en la tabla de clasificación de cada grupo. De esta manera podemos confirmar si se realizó un trabajo correcto en cuanto a la predicción y el avance de equipos en las distintas fases.

Con los datos ingresados, los clasificados esperados son: Holanda y Ecuador por el Grupo A, Inglaterra y Estados Unidos por el Grupo B, Argentina y Polonia por el Grupo C, Francia y Dinamarca por el Grupo D, España y Alemania por el Grupo E, Bélgica y Croacia por el Grupo F, Brasil y Suiza por el Grupo G y Uruguay y Portugal por el Grupo H. 

|  |  |
| ----------- | ----------- |
| Grupo A - B | Grupo C - D  |
| ![gruposA-B.png](/media/gruposA-B.png) | ![gruposC-D.png](/media/gruposC-D.png) |
| Grupo E - F | Grupo G - H  |
| ![gruposE-F.png](/media/gruposE-F.png) | ![gruposG-H.png](/media/gruposG-H.png) |

Y, como podemos observar en la imagen, se confirma que los equipos esperados a participar en octavos de final son los que muestra la página:

![octavos.png](/media/octavos.png)

Si continuamos llenando las predicciones como se muestra, se confirma que cada vez que se selecciona un equipo ganador, este es el que avanza de fase hasta llegar a la final, donde si ingresamos un resultado obtenemos una alerta indicando el ganador que seleccionamos.

|  |  |
| ----------- | ----------- |
| Cuartos de final | Semifinal  |
| ![cuartos.png](/media/cuartos.png) | ![semi.png](/media/semi.png) |
| Final | Final con alerta |
| ![final.png](/media/final.png) | ![finalAlerta.png](/media/finalAlerta.png) |

De esta manera, podemos corroborar que dado un set de datos inicial el sistema se comporta de manera correcta y resuelve 

# Reporte de Issues

Al analizar el proyecto asignado reportamos los siguientes issues:

![issues.png](/media/issues.png)

Utilizamos dos etiquetas para agrupar los issues encontrados. La etiqueta `bug` refiere a un error del sistema donde el mismo no se comporta como es esperado. La etiqueta `invalid` refiere a algo que no aparenta funcionar de la manera que se espera. También definimos tres valores de prioridad y severidad: Alta, Media y Baja.

Terminamos reportando 8 issues en total. De estos 8 issues, 5 los etiquetamos como `bug` y 3 los etiquetamos como `invalid`. A su vez, 5 de ellos les asignamos una alta prioridad mientras que a 2 le asignamos prioridad media y a 1 de ellos prioridad baja. También 6 de ellos consideramos son de severidad alta, mientras que existen también issues de severidad media y baja (uno y uno respectivamente).

# Informe de Calidad del Sistema

En ámbitos generales, consideramos que el proyecto que se nos asignó cumple con todos los requerimientos mínimos para ser una página de predicción de resultados. Está muy bueno que lo primero que se vea cuando se accede es una landing donde se explica cómo utilizar el software. Se hizo una predicción completa del Mundial y el resultado obtenido por la página es el que se esperaba al analizar los resultados ingresados. Sin embargo, nos hubiera gustado ver un poco más de control sobre los datos que se pueden ingresar por teclado, ya que reportamos que se podían ingresar valores negativos, la letra 'e' y hasta comas y puntos.

# Reflexión

| Estudiante | Reflexión |
| ----------- | ----------- |
| Gonzalo Camejo | Desde mi punto de vista me pareció un proyecto realmente interesante sobre todo por el desafio de crear un aplicacion desde cero sin muchos conocimientos de las tecnologías a utilizar, que más adelante fue necesario pulir para poder trabajar con ellas y modificarlas. Un ejemplo claro de esto fue material design que se presentó como algo totalmente desconocido creo que para todos los integrantes de nuestro equipo.  Pudimos ver como lo aprendido en programación anteriormente pudo ser utilizado para el desarrollo de una aplicación y la importancia que las mismas materias tuvieron para llegar a este punto. Me pareció muy importante el trabajo en equipo ya que será muy importante en el futuro. |
| Fernando Barcala | En lo personal, me parece que el proyecto era uno con muchos desafíos que supimos ir llevando y superando constantemente. A lo largo del curso se nos brindaron conceptos y herramientas que luego fueron utilizadas en el proyecto como los distintos conceptos de testing y las especificaciones de codificación que terminaron siendo muy productivos. Me parece que lo más importante fue enfrentarnos a algo que al principio no salía pero que a base de esfuerzo y investigación se pudo llevar a cabo. Más allá de las tecnologias aplicadas en este proyecto particular, creo que los conceptos generales aprendidos en el curso serán de gran utilidad para nuestros futuros |
| Ignacio Quevedo | Debo destacar que este proyecto fue realmente un reto, dado que nos enfrentamos de golpe con la realidad de tener que crear lo que habiamos definido en un principio desde cero, el principal problema que tuvimos fue el arranque, no nos acordabamos mucho de las buenas practicas de programación 1, por lo cual tuvimos que hacer un extenso resumen para que se nos viniera a la cabeza todo lo ya aprendido anteriormente. Lo que realmente nos ayudo a recordar fue Material Design que se presentó como algo desconocido pero termino siendo nuestro mejor aliado. Sinceramente lo mas importante a mi parecer fue como en equipo pudimos atravesar los problemas que fuimos obteniendo durante todo el transcurso del proyecto, pude observar que entre mis compañeros y yo nos complementamos bastante bien, dado que entre los 3 pudimos controlar todas las facetas del proyecto. Ejemplo la parte html, la css, y la js. Yo me acordaba bastante de la de js pero la html me tenía un poco preocupado ya que tenia muchos errores a la hora de tratar que la aplicación fuera responsive. Para concluir quiero destacar que el proceso del obligatorio, aunque haya sido al principio algo abrumante, terminó siendo algo muy enriquecedor y que estoy seguro que me va a ayudar en el porvenir, lo encontré muy útil dado que me hizo acordarme todo lo estudiado en programación 1 y me alegra saber de que lo que aprendí en ese semestre realmente haya servido en la actualidad.   