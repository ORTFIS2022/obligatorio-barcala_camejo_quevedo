# Informe académico entrega 2
Fecha de entrega: 28-nov-2022

# Documentación de parte 2 

**Estándares de codificación**

En nuestro equipo definimos estándares de codificación para evitar confusiones y generar un código apto para que todos los integrantes lo entiendan y puedan de esta manera trabajar en las funciones y distintos aspectos del proyecto. Gnerando así un ambiente de producción limpio.
Mantener estándares de codificación es muy importante ya que en la ingenría de software gran parte del trabajo es dedicado a mantener el código y no a la creación del mismo.

Nuestros estándares de codificación fueron los siguientes:

- Creación de clases en js para tener la información dividida correctamente.
- Uso de identeación correcta en todos los lenguajes.
- Declaración de variables en js utilizando let y no var con el fin de no generar variables globales que no son necesarias y que representan una mala práctica.
- Comentarios en las funciones para tener una administracion completa de lo que realiza cada parte del código y eliminar confusiones a la hora de re-leer el código o querer realziar cambios.
- Nombres de funciones y variables nemotécnicos haciendo referencia a que hace cada función y/o variable.
- Evitamos repetición de código de forma de optimizar lo más posible nuestras funciones.

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

- Libertad y control del usuario


- Consistencia y estándares 

Al utilizar elementos estandarizados de Material Design estamos cumpliendo con esta heurística, ya que no estamos reinventando la rueda para, por ejemplo, indicarle al usuario que tiene un menú desplegable en el extremo superior izquierdo de la pantalla. Ello ya se infiere debido al uso del símbolo de Menú.

- Prevención de errores 

A la hora de predecir resultados, si bien permitimos que los usuarios ingresen resultados desde el teclado (lo cual habilita a que se ingrese cualquier caracter) se puede ver como si se ingresa cualquier otra cosa que no sea un número el recuadro no indica nada. Esto forma parte de la prevención de errores que nosotros realizamos a los efectos de ayudar al usuario a no ingresar letras o valors negativos como resultado de los partidos.

- Reconocimiento en vez de memorización 


- Flexibilidad y eficiencia de uso 



- Diseño minimalista 

Se puede apreciar al navegar la interfaz que el diseño utilizado es minimalista. Nos focalizamos en crear elementos visuales concretos y simples, sin sobrecargar de información al usuario, para que la experiencia de navegación sea lo mas simple y amigable posible. No queremos crear una interfaz donde el usuario se confunda o se sienta abrumado.

- Ayuda y documentación 

La interfaz web cuenta con una sección `Reglas` donde se explica como participar del juego, realizar pronósticos y el funcionamiento del puntaje. En esta sección también se le explica al usuario el tiempo límite con el que cuenta para realizar las predicciones, con el fin de ayudarlo a prevenir errores a futuro.

# Codificación

Utilizamos el Visual Studio Code como IDE para la creación de nuestro proyecto. Nos terminamos basando en el repo creado anteriormente por *<Nombre persona del repo que usamos>* debido a las dificultades encontradas en clase para la buena inicialización del proyecto y del entorno Node. Es por esto que terminamos usando la versión 16.14.0 de Node.js.

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

# Test de Sistema

Debido a cómo está realizado el proyecto que se nos asignó para esta sección, no se pudo realizar un test de sistema aplicando la técnica de partición de equivalencias. Los únicos datos a completar son los resultados de los partidos y esto no da lugar a la creación de las distintas clases de equivalencia.

Sin embargo, realizamos un test general ingresando valores para todos los partidos. Siguiendo las reglas básicas de asignación de puntos del fútbol, el resultado esperado al finalizar cada grupo debe corresponder con las posiciones en la tabla de clasificación de cada grupo. De esta manera podemos confirmar si se realizó un trabajo correcto en cuanto a la predicción y el avance de equipos en las distintas fases.

Con los datos ingresados, los clasificados esperados son: Holanda y Ecuador por el Grupo A, Inglaterra y Estados Unidos por el Grupo B, Argentina y Polonia por el Grupo C, Francia y Dinamarca por el Grupo D, España y Alemania por el Grupo E, Bélgica y Croacia por el Grupo F, Brasil y Suiza por el Grupo G y Uruguay y Portugal por el Grupo H. 

| Grupo A - B | Grupo C - D  |
| ----------- | ----------- |
| ![gruposA-B.png](/media/gruposA-B.png) | ![gruposC-D.png](/media/gruposC-D.png) |
| Grupo E - F | Grupo G - H  |
| ----------- | ----------- |
| ![gruposE-F.png](/media/gruposE-F.png) | ![gruposG-H.png](/media/gruposG-H.png) |


# Reporte de Issues

# Informe de Calidad del Sistema

# Reflexión

**Informe de calidad**

Siguiendo nuestro caso de uso, el mismo fue completado con éxito con algunas issues que podemos traducir a detalles mínimos a implementar que no representan grandes problemas para nuestra aplicacion pero que si ayudarían a generar un mejor entorno para el usuario.
Creemos que a nivel de calidad nuestro trabajo fue completo abarcando la mayoria de los problemas que fuimos teniendo a lo largo del proyecto y trabajando conjuntamente fueron resueltos.
Nuestro equipo siempre mantuvo un estándar de codificación de manera de mantener la calidad del software.

**Reflexiones y aprendizajes**

Gonzalo Camejo:
Desde mi punto de vista me pareció un proyecto realmente interesante sobre todo por el desafio de crear un aplicacion desde cero sin muchos conocimientos de las tecnologías a utilizar, que más adelante fue necesario pulir para poder trabajar con ellas y modificarlas.
Un ejemplo claro de esto fue material design que se presentó como algo totalmente desconocido creo que para todos los integrantes de nuestro equipo. 
Pudimos ver como lo aprendido en programación anteriormente pudo ser utilizado para el desarrollo de una aplicación y la importancia que las mismas materias tuvieron para llegar a este punto. Me pareció muy importante el trabajo en equipo ya que será muy importante en el futuro.
