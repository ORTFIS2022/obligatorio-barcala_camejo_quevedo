+# Informe académico entrega 1
Fecha de entrega: 03-oct-2022

## Repositorio Git

**Creación y uso de repositorios locales y remotos**

Para introducir todo contenido a realizar primero debemos crearnos un repositorio local tanto como uno remoto, para ello utilizaremos el sistema de control de versionado distribuido (GIT), este mismo nos permitirá trabajar de forma autónoma, local y offline en nuestras máquinas. Al ser un trabajo en equipo no alcanza con tan solo tener un repositorio local, ya que todo cambio realizado por cada uno de los integrantes debe poder a su vez tenerlo cada uno de los integrantes del grupo, logrando asi evitar conflictos en el porvenir. Dado a esto, utilizaremos un sistema de control de versiones de tipo centralizado reconocido como GitHub. Donde tendremos un servidor de versionado único mediante el cual iremos colocando todo contenido fundamental para el desarrollo del trabajo.

*¿Que es un repositorio?*

![fotorepo](/media/fotorepo.jpg)

Los repositorios son estructuras de directorios en disco, donde se almacenan y resguardan los elementos de software producidos a lo largo de todo el proyecto.
*¿Porque tomarse la molestia de crear repositorios locales y uno remoto para el desarrollo del proyecto, y no usar Google Drive?*
Esta pregunta nos la fuimos realizando durante el inicio del proyecto, con el paso del tiempo logramos entender que github, a diferencia de un servicio de alojamiento de archivos, ejemplo : (Google Drive), nos permite volver a versiones anteriores en caso de un fallo crítico y dejar registrado todo cambio importante.

**Creación repositorio:**

1. Acceder a GitHub 
2. Crear nuevo repositorio (Boton en verde) y nombrarlo 

Una vez alli el repositorio remoto habrá sido creado, pero ahora lo mas importante es poder conectar tu repositorio local con el remoto, para ello habrá que efectuar lo siguiente.

**Creacion del repositorio local:**

Para crearlo hay dos formas posibles.

**`Primera forma`** 

 - *Clonando un repositorio remoto de GitHub.*
    1. Hacemos **git init** en la carpeta que queremos inicializar.
    2. **git clone <url del repo>**
  
Lo bueno de esta forma es que ya queda totalmente conectado al repositorio remoto por lo que te ahorras molestias y procedimientos más exhaustivos.

**`Segunda forma`**
 - *Crear uno desde cero.* 

    1. Inicializamos el repositorio vacio en la carpeta destinada, mediante **git init**.
    2. Añadimos el/los elementos a la carpeta que querramos efectuar con git.
    3. Usamos **git add .** para pasar todos los archivos modificados/untracked que querramos añadir a la staging area.
    4. Oficializamos el cambio, mediante un **git commit -m "Msg"** , dejando registrado una version hasta ese momento y a la par notificamos mediante el mensaje lo que realizamos.
    (Al realizar el commit mandamos los archivos al repositorio local).

**Vincular repositorio local con repositorio remoto**

Una vez que hayamos realizado los pasos de arriba, el repositorio local habrá sido creado con éxito. Ahora hay que conectarlo de forma remota, para ello:

1. **git remote add origin <url del repositorio remoto(brindado por GitHub) >** *Añadimos de forma remota una rama nombrada origin*
2. **git push -u origin main**  *Envia los archivos locales a la nube*
    
**Técnica que utilizamos para la creación del proyecto**

*Lo que nuestro grupo realizó fue:* 
Al repositorio local (creado mediante un git init) le clonamos el repositorio remoto almacenado en GitHub del profesor, para conseguir la letra del ejercicio, las carpetas especificas de donde almacenar los distintos archivos, fotos, etc. A continuación aplicamos un cierto procedimiento para redirigir el repositorio clonado a una nueva url única nuestra, para ello:
-Usamos RD /S <carpeta> para borrar toda la carpeta .git, generando que cualquier nexo existente con el repositorio remoto actual sea destruido.
-git init para reinicializar el repositorio local.
-git add . para añadir todos los archivos modificados a la staging area.
-git remote add origin <url del nuevo repositorio remoto> Actualizamos el nuevo repositorio remoto a nuestro servidor único.

`En otras palabras lo que hicimos fue copiar los archivos necesarios del profesor, borrar la conexion local-remota que existía. Volvemos a inicializar git, añadimos los archivos devuelta a la staging area y finalmente creamos devuelta la conexion local - remota pero con nuestro servidor especifico en la nube de GitHub.`

## Comandos Git ejecutados desde terminal y desde el IDE

| Comando | Descripción |
| ------------- |:-------------:|
| **git init** | `Inicializa` un directorio existente como un repositorio GIT |
| **git add .** |  `Añade` un archivo a la staging area como esta en ese momento para su siguiente commit |
| **git commit -m "msg"** |  `Commitea` tu "staged content" como una nueva snapshot, lo añade al repositorio |
| **git status** | `Muestra` los archivos modificados de tu repositorio, staged para tu siguiente commit |
| **git branch** | `enlista tus ramas` y te aparece con un * tu rama actual |
| **git log** | `Muestra todos el historial de commits` de la rama actual |
| **git clone [url]** | `Clona un repositorio entero` desde una ubicación remota mediante url |
| **git push** | `Transmite todos tus commits` hacia tu rama remota del repositorio |
| **git push -u origin main** | `Transmite por primera vez tus commits` de la rama actual a la remota, (luego de haberlo realizado una vez podemos utilizar tan solo git push) |
| **git remote add origin [url]** | `Añade` la ubicación del repositorio remoto |
| **git pull** | `Actualiza` el repositorio y sus archivos con los cambios más recientes |

## Flujo de trabajo de GIT
![FotoFlujoGit](/media/FotoFlujoGit.jpg)

## Versionado

Para ayudarnos con el versionado vamos a utilizar el flujo de git llamado **git-flow**. La idea detrás de este flujo es la de simplificar lo más posible las instancias de salida a producción y cuenta con 5 tipos de ramas distintos:

| Rama | Descripción |
| ------------- |:-------------:|
| **Main** | Contiene lo que se va a llevar a producción. Es una rama estable |
| **Develop** | Se crea a partir de `main`. Rama donde los desarrolladores se paran para comenzar a trabajar. Es una rama inestable |
| **Feature** | Se crean a partir de `develop`. Cada tarea a realizarse debe tener una rama `feature` nueva |
| **Release** | Se crea desde `develop` cuando hay un avance estable que se quiere sacar a producción. | 
| **Hotfix** | Se utiliza ocacionalmente cuando se quiere introducir un cambio rápido directo a `main` |

En la siguiente imagen se ve ilustrado el git-flow:

![git-flow](/media/git-flow.jpg)

De esta manera, los desarrolladores siempre se deben situar en la rama `develop` y desde allí comenzar a crear sus ramas `feature/<nombre_de_la_feature>` en la que van a trabajar. Una vez que se llega a un avance que es considerado adecuado para salir a producción se crea la rama `release/<nro_version>` que luego será mergeada con `main` una vez que se efectue el release.

Resumen de commits y evolución del proyecto

# Elicitación

## Evidencia de actividades de investigación

### Ingeniería Inversa

En esta técnica se trata de obtener información sobre documentación o productos similares al nuestro que ya existen en el mercado. En este caso, nos basamos en dos aplicaciones:

1. [Penca Ovación Movistar](https://play.google.com/store/apps/details?id=com.futbolx.pencaapp.ovacion&hl=es_UY&gl=US)

Esta aplicación cuenta con una simple interfaz donde el usuario dispone de los próximos partidos a disputarse y allí mismo puede predecir los resultados. Brinda la posibilidad de crear ligas privadas entre amigos, pero también cuenta con una liga general donde todos los usuarios participan. Acertar un resultado exacto brinda 8 puntos, acertar el ganador y la diferencia de goles brinda 5, sólo el ganador 3 mientras que no acertar al ganador brinda 0 puntos. Si bien se pueden ver el fixture de los campeonatos, no cuenta con una sección de información sobre los mismos, entonces no podemos ver como va la tabla a la hora de predecir nuestros resultados. A grandes rasgos, cuenta con las siguientes funcionalidades:

- Inicio de sesión y creación de usuario
- Predicción de resultados
- Varios torneos en los que participar (Campeonato Uruguayo, Eliminatorias Sudamericanas, Mundial)
- Creación de ligas privadas

2. [Flashscore ES](https://www.flashscore.com/)

Esta aplicación cuenta tanto con versión web como con versión mobile, lo que se acerca más a lo que buscamos para nuestro proyecto. Si bien no cuenta con la habilidad de predecir el resultado de los partidos, cuenta con una interfaz básica con toda la información del partido que se va a jugar, del campeonato que se elige y de los jugadores que participan de los mismos. Ofrece información sobre casi todos los campeonatos del mundo y brinda notificaciones en tiempo real sobre lo sucedido en aquellos partidos que el usuario desee obtenerlas. No requiere inicio de sesión ni creación de usuario para su uso

### BrainStorming

Esta técnica la utilizamos para aquellos momentos de emergencia en los cuales nos quedabamos congelados sin saber que mas poner o que pensar. Esta técnica es buena para salir de nuestro esquema mental y expandir las ideas generando que sean de caracter global. Estas mismas fueron puestas en común y notamos que aunque cada una de ellas eran muy diferentes entre si a su vez eran muy similares.
Esta técnica especialmente la realizamos para definir los Use Cases y los User Stories, realizamos una lluvia de ideas (BrainStorming) sobre los aspectos mas generales que si o si concordabamos que deberian de estar y fuimos profundizandonos en cada una de ellas hasta llegar a su limite mas estrecho.
Notamos que gracias a esta técnica de elicitacion suponer y generar casos promedios era mucho mas sencillo que a diferencia de estar pensando una por una.

### FocusGroup

Esta técnica de elicitación la utilizamos una vez que ya  habiamos realizado las entrevistas. Les pedimos cordialmente a ambos entrevistados si podiamos hacerle un par de preguntas más para anotar sus deseos e inquietudes y amablemente accedieron. Esto lo realizamos ya que buscabamos personas que no se conocieran entre sí pero que tuvieran comportamientos de consumo similares.
Nosotros cumplimos el rol de moderadores, fuimos liderando la conversación y de vez en cuando realizabamos una pregunta a modo de "disparador" para que los participantes expresen sus opiniónes 
e inquietudes del producto o servicio. Registramos todo aporte hecho. Estos mismos fueron de extrema utilidad a la hora de realizar algunos requerimientos funcionales como también no funcionales.

### Entrevista

En esta técnica se trata de entrevistar a varios perfiles que podrían estar interesados en nuestro producto con la finalidad de obtener información sobre qué aspectos del mismo resultan relevantes para cada perfil. En este caso entrevistamos a dos personas con dos perfiles distintos:

- [Carlos (20 años)](/media/entrevista_carlos.m4a). Estudiante y amante del fútbol.
- [Martín (34 años)](/media/entrevista_martin.m4a). CEO de Hattrick-IT interesado en poder crear una penca para su empresa

Caracterización de usuarios: User Personas

Modelo conceptual del problema

## Especificación

### Definición de requerimientos funcionales y no funcionales   

Antes de fundamentar los distintos tipos de requerimientos hay q desarrollar el concepto del propio requerimiento en si y donde se aplica.

**Requerimientos**

- Todo aquello que el cliente requiere y solicita para la posible solución del problema.
- De alta importancia para la creación y evolución del software

**Ingenieria de Requerimientos**

- La ingenieria de requerimientos es el proceso por el cual se traduce las necesidades de los distintos clientes y usuarios en requerimientos técnicos a implementar.
- Su objetivo principal es definir el problema a resolver.
- Es el primer paso en la creacion del Software.

**Requerimentos Funcionales**

Los requerimientos funcionales son aquellos que dan una especificacion sobre servicios y/o funciones que el software debe implementar. Estos dan una descripción de la reacción y comportamientos del sistema en distintas condiciones determinadas. 
Las funciones del sistema están vinculadas directamente con el objetivo del negocio o cliente y los roles que cumplirán los usuarios dentro de la aplicación.

**Nuestro sistema cuenta con los siguientes requermientos funcionales**

### RF1 Registro de usuario: 
---
- **Actor:** Usuario
- **Descripción:** El usuario debe registrarse en el sistema mediante un nickname y un email.
- **Prioridad:** Alta

### RF2: Sección Penca
---
- **Actor:** Sistema
- **Descripción:** El sistema debe soportar una sección donde el usuario pueda predecir los partidos a jugarse del Mundial.
- **Prioridad:** Alta

### RF3: Sección Información
---
- **Actor:** Sistema
- **Descripción:** El sistema debe soportar una sección donde el usuario pueda ver la clasificación de los grupos del Mundial en tiempo real.
- **Prioridad:** Baja

### RF4: Registrar predicción
---
- **Actor:** Usuario
- **Descripción:** El usuario debe poder predecir todos los partidos del Mundial en la Sección Penca hasta la hora de comienzo de los mismos.
- **Prioridad:** Alta

### RF5: Crear grupos privados
---
- **Actor:** Usuario
- **Descripción:** El usuario debe poder crear grupos privados donde pueda armar una penca con sus invitados, ver la tabla de dicho grupo y las predicciones de cada usuario.
- **Prioridad:** Alta

### RF6: Ranking General
---
- **Actor:** Usuario
- **Descripción:** El usuario debe poder acceder a un ranking general donde participan todos los usuarios registrados en la penca.
- **Prioridad:** Media

### RF7: Notificaciones
---
- **Actor:** Sistema
- **Descripción:** El sistema debe enviar una notificación 15 minutos antes del comienzo de un partido a los usuarios que no hayan realizado una predicción para ese partido
- **Prioridad:** Media

### RF8: Predicción ganador Mundial y goleador
---
- **Actor:** Usuario
- **Descripción:** El usuario debe predecir una selección ganadora y un jugador goleador para el Mundial antes del comienzo del mismo. 
- **Prioridad:** Baja

### RF9: Sistema de puntaje
---
- **Actor:** Sistema
- **Descripción:** El sistema debe otorgar 10 puntos a los usuarios que acierten el resultado exacto de un partido y 5 puntos si se acierta solamente el ganador/empate. Si se acierta el ganador del mundial se otorgan 50 puntos mientras que si se acierta el goleador se otorgan 100
- **Prioridad:** Alta

### RF10: Sección premios
---
- **Actor:** Usuario
- **Descripción:** El usuario puede agregar una sección Premios a su grupo privado donde indica la cantidad de ganadores y sus respectivos premios
- **Prioridad:** Baja

**Requerimientos no Funcionales**

Los requerminentos no funcionales son las restricciones a los distintos servicios que el sistema brinda, considerando aspectos técnicos y la relación con sistemas externos. Tambien se consideran los atribuitos de calidad como parte de este tipo de requerimientos.
La calidad se divide en dos partes fundamentales:
- Externa: relacionada con la ejecución del sistema y los factores visibles durante la misma.
- Interna: relacionada con el mantenimiento a largo plazo del sistema requiriendo un cierto standar dentro de la empresa para que todos los desarrolladores tanto los actuales como los que vendrán en un futuro puedan comprender el código y evitar problemas internos. Asegurando la portabilidad y escalabilidad del sistema.

**Nuestro sistema cuenta con los siguientes requermientos no funcionales**

### RNF1: Aplicación responsiva
---
- **Descripción:** La aplicación debe poder ser accedida desde cualquier dispositivos móvil que contenga Android o IOS.
- **Prioridad:** Alta

### RNF2: Tipografía
---
- **Descripción:** El sistema debe utilizar la tipografía *Roboto*.
- **Prioridad:** Alta

### RNF3: Formato de íconos
---
- **Descripción:** El sistema debe utilizar iconos en el formato *filled*.
- **Prioridad:** Baja

### RNF4: Paleta de colores
---
- **Descripción:** El sistema debe utilizar *Green 900* como color principal y *Light Blue 800* como secundario.
- **Prioridad:** Media

### RNF5: Versionado Web
---
- **Descripción:** El producto será realizado mediante JavaScript, CSS y HTML
- **Prioridad:** Alta

### RNF6: Estabilidad del producto:
---
- **Descripción:** El sistema debe soportar mas de 3000 usuarios definiendo un posible resultado para el mismo partido sin una degradación del tiempo de respuesta mayor a 10 segundos.
- **Prioridad:** Alta

### RNF7: Múltiples lenguajes:
---
- **Descripción:** El sistema debe soportar múltiples lenguajes y desarrollarse inicialmente en español e inglés
- **Prioridad:** Media

### RNF7: Inicio del producto:
---
- **Descripción:** El sistema no debe de demorar mas de 7 segundos en inicializar
- **Prioridad:** Media/Alta

### RNF8: Persistencia Local
---
- **Descripción:** El sistema debe poder resguardar la información de los puntajes del usuario
- **Prioridad:** Alta

### RNF9: Consumo de recursos
---
- **Descripción:** Que no consuma muchos recursos del dispositivo a la hora de procesar.
- **Prioridad:** Media

### RNF10: Actualización de registros
- **Descripción:** Que los resultados se vayan actualizando en tiempo vivo y no demoren mas de 10 segundos en figurar en la aplicación
- **Prioridad:** Alta

## User Stories 

### User Story 1

**Título:** Predicción resultados.

- **Como** usuario
- **Quiero** poder predecir los partidos del Mundial
- **Para** poder participar en la penca

**Criterio de aceptación:** 
- Se puede predecir los resultados exactos de un partido.
- Se dispone de un marcador para seleccionar el puntaje de ambos equipos.
- Se puede predecir los resultados de distintos partidos.
- Los puntajes varian entre 1 a n, siendo n un valor lógico.


### User Story 2

**Título:** Ver información del Mundial.

- **Como** usuario
- **Quiero** poder ver información en tiempo real sobre el Mundial
- **Para** poder tener mas información a la hora de predecir los resultados

**Criterio de aceptación:** 
- La informacion otorgada es acorde a la del momento actual.
- La información se va actualizando con el paso del tiempo.
- Se dispone de un botón para acceder a esta sección detallada.


### User Story 3

**Título:** Creación de grupo privado.

- **Como** usuario
- **Quiero** poder crear un grupo privado
- **Para** poder competir contra mis amigos

**Criterio de aceptación:** 
- Se dispone de un boton que permita al usuario incializar el proceso de creación del grupo.
- El grupo contiene un nombre no existente.
- El grupo contiene dos usuarios o más.
- El grupo es visible para todos los integrantes.

### User Story 5

**Título:** Modificación del grupo privado.

- **Como** usuario
- **Quiero** poder personalizar distintos aspectos de mi penca
- **Para** que la rivalidad sana entre los integrantes sea mayor

**Criterio de aceptación:** 
- Se tiene un apartado donde se puede configurar los valores pre establecidos de la penca a critero personal.
- Solo los administradores del grupo pueden modificarlos.
- Se puede modificar foto del grupo.
- Se puede configurar valores pre establecidos antes del inicio de la penca.

### User Story 6

**Título:** Notificaciones de partidos.

- **Como** cliente
- **Quiero** que se notifique media hora antes de cada partido a los usuarios que no hayan establecido un puntaje
- **Para** que los usuarios no pierdan participacion en la penca y mantener el afán del juego.

**Criterio de aceptación:** 
- Cuando el usuario habilite las notificaciones de la penca en su celular y reciba la misma media hora antes de cada partido.
Por ende el usuario está conectado a una red WiFi.

### User Story 7

**Título:** Cantidad de usuarios por mes.

- **Como** cliente
- **Quiero** controlar el número de usuarios registrado en mi penca
- **Para** poder tener mejor control de los datos

**Criterio de aceptación:** 
- El cliente recibe un informe de la cantidad de usuarios registrados.
- El cliente recibe el informe una vez al mes.
- El informe contiene email y fecha de cada registro.

### User Story 8

**Título:** Alternalización de premios.

- **Como** cliente
- **Quiero** que los administradores de grupos puedan definir los premios
- **Para** que haya una mayor versatilidad y no se vuelta tan repetitivas

**Criterio de aceptación:** 
- Los administradores de los grupos disponen de una sección para definir un premio.
- Los premios se actualizan.

### User Story 9

**Título:** Habilitación de mensajes en linea.

- **Como** cliente
- **Quiero** que se pueda enviar y recibir mensajes en los grupos
- **Para** que haya una mejor relación entre los usuarios y se creen vínculos

**Criterio de aceptación:** 
- El usuario recibe un mensaje enviado por otro.

### User Story 10

**Título:** Notificacion de cambios recientes.

- **Como** cliente
- **Quiero** que sea de notificar cada cambio existente dentro de los valores customizables del juego
- **Para** facilitar la comunicacion entre los administradores y usuario de cada grupo

**Criterio de aceptación:** 
- Aparece un mensaje en el chat del cambio realizado.

### User Story 11

**Título:** ¿Chat visible?

- **Como** usuario
- **Quiero** que me den a elección si formar parte de un chat
- **Para** no tener que leer comentarios y opiniones de forma obligatoria

**Criterio de aceptación:** 
- Se despliega una alerta preguntando si quiere formar parte del chat.
- Solo se despliega la primera vez que se intenta entrar al mismo.

### User Story 12

**Título:** Abandono de grupo.

- **Como** usuario
- **Quiero** que pueda abandonar un grupo
- **Para** elegir si formar parte del mismo

**Criterio de aceptación:** 
- Se dispone de un botón que permite salir del grupo, a continuación se despliega una alerta preguntando si confirma los cambios.
- Se elimina al usuario del grupo.

### User Story 13         

**Título:** Remover integrante del grupo.

- **Como** usuario
- **Quiero** que los administradores puedan borrar parcipantes del grupo
- **Para** que haya una mejor organización

**Criterio de aceptación:** 
- Se despliega una alerta preguntando si quiere eliminar al usuario.
- Se dispone de un botón por el cual se accede a la zona de borrado.

### User Story 14

**Título:** Censurado de comentarios ofensivos.

- **Como** usuario
- **Quiero** que los comentarios ofensivos sean censurados
- **Para** generar un clima mas ameno y apto para todo público pero no se descarta la opción de que se pueda deshabilitar la misma si el usuario quiere.

**Criterio de aceptación:** 
- Se sustituye el comentario ofensivo por un conjunto de caracteres (****).

### User Story 15

**Título:** Reglas del juego.

- **Como** cliente
- **Quiero** que haya un apartado en la aplicacion que te rediriga a una ventana explicandote las reglas del juego
- **Para** que cada usuario este al tanto de todo

**Criterio de aceptación:** 
- Se dispone de un botón que te redirige a las reglas.
- Las reglas se pueden visualizar.

## Use Cases
### UC1: Registro de usuario

**Actor:** Usuario

**Curso normal:**

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario abre la app por primera vez | 2. El sistema le pide que se indentifique con un nickname personal y un correo electrónico |
| 3. El usuario selecciona su nickname y email | 4. El sistema registra al usuario, muestra un mensaje de confirmación y lo lleva a la pagina principal |

**Curso alternativo:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 3.1 El usuario selecciona un nickname o email que ya está en uso | El sistema muestra un mensaje de error y le vuelve a pedir que ingrese un nickname y email |

### UC2: Registro de predicción

**Actor:** Usuario

**Curso normal:**

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona la sección *Penca Mundial* del menú lateral | 2. El sistema muestra la sección *Penca Mundial* |
| 3. El usuario selecciona el grupo que quiere predecir | 4. El sistema muestra la sección del grupo elegido |
| 5. El usuario selecciona el partido que quiere predecir | 6. El sistema muestra la sección de predicción del partido elegido |
| 7. El usuario ingresa el resultado y presiona "Guardar" | 8. El sistema guarda el resultado y vuelve a la sección del grupo elegido |


| 1 | 2 |
| ----------- | ----------- |
| ![menu](/docs/bocetosiu/menu.png) | ![grupos](/docs/bocetosiu/grupos.png) |
| 3 | 4 |
| ![grupoH](/docs/bocetosiu/grupoH.png) | ![partido](/docs/bocetosiu/partido.png) |
| 5 | 6 |
| ![pronostico](/docs/bocetosiu/pronostico-en-partido.png) | ![pronostico-guardado](/docs/bocetosiu/pronostico-hecho.png) |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 5.1 El usuario selecciona un partido que ya comenzó | 5.2 El sistema muestra una alerta indicando que no se puede predecir un partido que ya comenzó |

| 1 | 2 |
| ----------- | ----------- |
| ![partido](/docs/bocetosiu/partido-en-curso.png) | ![error](/docs/bocetosiu/error-partido-en-curso.png) |

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 7.1 El usuario presiona guardar sin haber ingresado una predicción | El sistema muestra una mensaje de error y le pide que ingrese una predicción |

| 1 | 2 |
| ----------- | ----------- |
| ![partido](/docs/bocetosiu/partido.png) | ![error](/docs/bocetosiu/error-guardar.png) |

### UC3: Creación de grupo privado

**Actor:** Usuario

**Curso normal:**

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona la sección de predicción de partidos | 2. El sistema muestra la sección de predicción de partidos |
| 3. El usuario selecciona para crear un nuevo grupo privado | 4. El sistema le pide un nombre para el grupo |
| 5. El usuario ingresa el nombre del grupo | 6. El sistema crea el grupo y devuelve una lista de amigos para invitar |
| 7. El usuario selecciona los amigos a invitar | 7. El sistema los agrega y muestra la tabla de posiciones del grupo creado |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 5.1 El usuario selecciona un nombre de grupo que ya está en uso | El sistema muestra un mensaje de error y le vuelve a pedir que ingrese un nombre |

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 7.1 El usuario no selecciona ningun amigo para invitar | El sistema muestra un mensaje de error y le vuelve a pedir que seleccione al menos un amigo para invitar |

### UC4: Eliminación de integrante de grupo

**Actor:** Usuario (Administrador de grupo)

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario ingresa a un grupo | 2. El sistema muestra los participantes del grupo |
| 3. El administrador selecciona un usuario | 4. El sistema despliega una ventana de confirmación |
| 5. El administrador del grupo confirma | 6. El sistema elimina al integrante seleccionado del grupo |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 5.1 El administrador del grupo NO confirma | Queda sin efecto y no se hace nada |

### UC5: Abandono del grupo

**Actor:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario presiona el boton de abandonar el grupo | | 2. Aparece una alerta preguntandole al usuario si esta seguro de realizar dicha acción |
| 3. El usuario selecciona la opción SI | | 4. Se elimina automaticamente el grupo | 
| 5. Se les notifica el abandono a los integrantes restantes del grupo mediante un mensaje|

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario presiona el boton de abandonar el grupo | | 2. Aparece una alerta preguntandole al usuario si esta seguro de realizar dicha acción |
| 3. El usuario selecciona la opción NO | | 4. El sistema no ejecuta nada | 5. Vuelve a la normalidad |


### UC6: Acceso a reglas 

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario ingresa a la sección de información | 2. El sistema muestra una opción llamada "REGLAS DEL JUEGO" |
| 3. El usuario selecciona la opción | 4. El sistema despliega las reglas del juego |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario no selecciona dicha opción | 2. El sistema no muestra las reglas siguiendo el curso de la opcion alterna elegida |


### UC7: Envío de mensajes

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario ingresa a un grupo | 2. El sistema muestra el grupo y sus secciones |
| 3. el usuario ingresa a la sección de mensajes | 4. El sistema muestra una sección con los últimos mensajes recibidos y el historial de mensajes |
| 5. El usuario selecciona un cuadro de texto | 6. El sistema muestra el teclado |
| 6. El usuario envia el mensaje seleccionando la opción enviar | 6. El sistema envía el mensaje |


### UC8: Habilitar Notificaciones

**Actor:**Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario ingresa a la aplicación por primera vez | 2. El sistema muestra una ventana emergente pidiendo permisos para mandarle notificaciónes |
| 3. el usuario ingresa que si | | 4. Queda notificado el sistema de dejar al pendiente las futuras notificaciones | 

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona que no | | 2. El sistema queda notificado que no se le deberá enviar notificaciones de los partidos |

### UC9: Habilitar - Deshabilitar el chat

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario accede a la configuración | 2. Habilita el chat | 
| 3. El sistema queda notificado del cambio | | 4. Se carga el chat y se le habilita la funcion de mandar y recibir mensajes |

**Cursos alternativos:**

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. EL usuario deshabilita el chat | | 2. Se borra todo acceso al mismo | 
| 3. Se eliminan todos los mensajes pre guardados en su celular |

### UC10: Acceso a la información detallada de partidos anteriores

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario entra en la sección partidos | | 2. El sistema proyecta todos los partidos y sus respectivos resultados hasta el momento |

### UC11: Deshabilitar la censura en el chat

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El administrador desactiva la opción | | 2. El sistema deja de correr el checkeo de las palabras | 
| 3. Se permite cualquier palabra |

**Cursos alternativos:**

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El administrador del grupo activa esta opción | | 2. Se le notifica al sistema |
| 3. El sistema corre en segundo plano un checkeo de cada palabra enviada al chat y se evalua si cumple los requisitos para ser publicada para todo público |
| 4. Si cumple los requisitos se deja como esta y sino se sustituye por un conjunto de (***) |

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |


**Cursos alternativos:**

| Acción | Respuesta del sistema |
| ----------- | ----------- |


Bocetos de IU

## Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes



