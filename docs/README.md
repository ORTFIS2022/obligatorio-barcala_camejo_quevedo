# Informe académico entrega 1
Fecha de entrega: 03-oct-2022

## Indice

1. [Repositorio de Git](#id1)
2. [Elicitación](#id2)
3. [User Personas](#id3)
4. [Especificación](#id4)
5. [User Stories](#US)
6. [Use Cases](#UC)
7. [Validación/Verificación](#ValYVer)
8. [Reflexión Grupal](#ReflexionGrupal)
9. [Reflexión Individual](#ReflexionInd)
10. [Anexo](#anexo)

<a name= "id1">

# Repositorio Git

## Creación y uso de repositorios locales y remotos

Para introducir todo contenido a realizar primero debemos crearnos un repositorio local tanto como uno remoto, para ello utilizaremos el sistema de control de versionado distribuido (GIT), este mismo nos permitirá trabajar de forma autónoma, local y offline en nuestras máquinas. Al ser un trabajo en equipo no alcanza con tan solo tener un repositorio local, ya que todo cambio realizado por cada uno de los integrantes debe poder a su vez tenerlo cada uno de los integrantes del grupo, logrando asi evitar conflictos en el porvenir. Dado a esto, utilizaremos un sistema de control de versiones de tipo centralizado reconocido como GitHub. Donde tendremos un servidor de versionado único mediante el cual iremos colocando todo contenido fundamental para el desarrollo del trabajo.

*¿Que es un repositorio?*

![fotorepo](/media/fotorepo.jpg)

Los repositorios son estructuras de directorios en disco, donde se almacenan y resguardan los elementos de software producidos a lo largo de todo el proyecto.
*¿Porque tomarse la molestia de crear repositorios locales y uno remoto para el desarrollo del proyecto, y no usar Google Drive?*
Esta pregunta nos la fuimos realizando durante el inicio del proyecto, con el paso del tiempo logramos entender que github, a diferencia de un servicio de alojamiento de archivos, ejemplo : (Google Drive), nos permite volver a versiones anteriores en caso de un fallo crítico y dejar registrado todo cambio importante.

## Creación repositorio:

1. Acceder a GitHub 
2. Crear nuevo repositorio (Boton en verde) y nombrarlo 

Una vez allí el repositorio remoto habrá sido creado, pero ahora lo mas importante es poder conectar tu repositorio local con el remoto, para ello habrá que efectuar lo siguiente.

## Creación del repositorio local:

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
    4. Oficializamos el cambio, mediante un **git commit -m "Msg"** , dejando registrado una versión hasta ese momento y a la par notificamos mediante el mensaje lo que realizamos.
    (Al realizar el commit mandamos los archivos al repositorio local).

## Vincular repositorio local con repositorio remoto

Una vez que hayamos realizado los pasos de arriba, el repositorio local habrá sido creado con éxito. Ahora hay que conectarlo de forma remota, para ello:

1. **git remote add origin <url del repositorio remoto(brindado por GitHub) >** *Añadimos de forma remota una rama nombrada origin*
2. **git push -u origin main**  *Envia los archivos locales a la nube*
    
## Técnica que utilizamos para la creación del proyecto

*Lo que nuestro grupo realizó fue:* 
Al repositorio local (creado mediante un git init) le clonamos el repositorio remoto almacenado en GitHub del profesor, para conseguir la letra del ejercicio, las carpetas específicas de donde almacenar los distintos archivos, fotos, etc. A continuación aplicamos un cierto procedimiento para redirigir el repositorio clonado a una nueva url única nuestra, para ello:
-Usamos RD /S <carpeta> para borrar toda la carpeta .git, generando que cualquier nexo existente con el repositorio remoto actual sea destruido.
-git init para reinicializar el repositorio local.
-git add . para añadir todos los archivos modificados a la staging area.
-git remote add origin <url del nuevo repositorio remoto> Actualizamos el nuevo repositorio remoto a nuestro servidor único.

`En otras palabras lo que hicimos fue copiar los archivos necesarios del profesor, borrar la conexion local-remota que existía. Volvemos a inicializar git, añadimos los archivos devuelta a la staging area y finalmente creamos devuelta la conexión local - remota pero con nuestro servidor específico en la nube de GitHub.`

## Comandos Git ejecutados desde terminal y desde el IDE

| Comando | Descripción |
| ------------- |:-------------:|
| **git init** | `Inicializa` un directorio existente como un repositorio GIT |
| **git add .** |  `Añade` un archivo a la staging area como está en ese momento para su siguiente commit |
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

</a>

<a name = "id2">

# Elicitación

## Evidencia de actividades de investigación

### Ingeniería Inversa
---

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
---

Esta técnica la utilizamos para aquellos momentos de emergencia en los cuales nos quedabamos congelados sin saber que mas poner o que pensar. Esta técnica es buena para salir de nuestro esquema mental y expandir las ideas generando que sean de caracter global. Estas mismas fueron puestas en común y notamos que aunque cada una de ellas eran muy diferentes entre sí, a su vez eran muy similares.
Esta técnica especialmente la realizamos para definir los Use Cases y los User Stories, realizamos una lluvia de ideas (BrainStorming) sobre los aspectos mas generales que si o si concordabamos que deberian de estar y fuimos profundizandonos en cada una de ellas hasta llegar a su limite más estrecho.
Notamos que gracias a esta técnica de elicitación suponer y generar casos promedios era mucho más sencillo que a diferencia de estar pensando una por una.

### Entrevista
---

En esta técnica se trata de entrevistar a varios perfiles que podrían estar interesados en nuestro producto con la finalidad de obtener información sobre qué aspectos del mismo resultan relevantes para cada perfil. En este caso entrevistamos a dos personas con dos perfiles distintos:

- [Carlos (20 años)](/media/entrevista_carlos.m4a). Estudiante y amante del fútbol.
- [Martín (34 años)](/media/entrevista_martin.m4a). CEO de Hattrick-IT interesado en poder crear una penca para su empresa

De ambas entrevistas obtuvimos información valiosa que se terminó traduciendo a requerimientos funcionales. Por ejemplo, para ambos entrevistados era de vital importancia contar con la creación de grupos privados para poder utilizar la aplicación desde un ámbito más privado. En el caso de Martín, veía esta funcionalidad como vital ya que su intención sería aprovechar los grupos privados para poder organizar una penca para los empleados de su empresa.

También obtuvimos opiniones un tanto dispares. En particular, para Carlos era de vital importancia tener información general sobre el Mundial y las selecciones a la hora de predecir los partidos. Nos comentó que era interesante contar con ello directo en la app y no tener que acudir a otros sitios. Sin embargo, para Martín este detalle no fue de tanta importancia. Nos comentó que no le molesta que aparezca esa información pero dado que se puede obtener en otros sitios no le pareció algo muy importante para remarcar.
</a>


<a name="id3">

## Caracterización de usuarios: User Personas

Nuestra aplicación fue desarrollada para un público objetivo de entre 20 y 40 años sin ser este un límite restrictivo ya que personas de diferentes edades pueden utilizar la aplicación sin necesidad de estar en el rango objetivo definido anteriormente.

A continuación se encuentran los usuarios modelados de nuestra aplicación los cuales fueron creados mediante la utilización de la técnica user personas la cual nos permite crear usuarios objetivos para nuestro sistema.

![User persona 1](/media/persona1.png)

![User persona 2](/media/persona2.png)

Con la información recabada creamos el siguiente modelo conceptual del problema:

![modelo-conceptual](/media/modeladoConceptual.jpg)

</a>

<a name="id4">

## Especificación

### Definición de requerimientos funcionales y no funcionales   
---

Antes de fundamentar los distintos tipos de requerimientos hay que desarrollar el concepto del propio requerimiento en si y donde se aplica.

**Requerimientos**

- Todo aquello que el cliente requiere y solicita para la posible solución del problema.
- De alta importancia para la creación y evolución del software

**Ingenieria de Requerimientos**

- La ingeniería de requerimientos es el proceso por el cual se traduce las necesidades de los distintos clientes y usuarios en requerimientos técnicos a implementar.
- Su objetivo principal es definir el problema a resolver.
- Es el primer paso en la creación del Software.

## Requerimentos Funcionales

Los requerimientos funcionales son aquellos que dan una especificación sobre servicios y/o funciones que el software debe implementar. Estos dan una descripción de la reacción y comportamientos del sistema en distintas condiciones determinadas. 
Las funciones del sistema están vinculadas directamente con el objetivo del negocio o cliente y los roles que cumplirán los usuarios dentro de la aplicación.

### RF1 Registro de usuario
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

## Requerimientos no Funcionales

Los requerminentos no funcionales son las restricciones a los distintos servicios que el sistema brinda, considerando aspectos técnicos y la relación con sistemas externos. Tambien se consideran los atribuitos de calidad como parte de este tipo de requerimientos.
La calidad se divide en dos partes fundamentales:
- Externa: relacionada con la ejecución del sistema y los factores visibles durante la misma.
- Interna: relacionada con el mantenimiento a largo plazo del sistema requiriendo un cierto standar dentro de la empresa para que todos los desarrolladores tanto los actuales como los que vendrán en un futuro puedan comprender el código y evitar problemas internos. Asegurando la portabilidad y escalabilidad del sistema.

### RNF1: Aplicación responsiva
---
- **Descripción:** La aplicación debe poder ser accedida desde cualquier dispositivos móvil que contenga Android 10 o IOS 12.
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
- **Descripción:** El producto será realizado mediante JavaScript 5, CSS3 y HTML5
- **Prioridad:** Alta

### RNF6: Estabilidad del producto:
---
- **Descripción:** El sistema debe soportar mas de 3000 usuarios definiendo un posible resultado para el mismo partido sin una degradación del tiempo de respuesta mayor a 10 segundos.
- **Prioridad:** Alta

### RNF7: Múltiples idiomas:
---
- **Descripción:** El sistema debe soportar múltiples idiomas y desarrollarse inicialmente en español, inglés y portugués
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
- **Descripción:** La aplicación no puede consumir más del 10% de los recursos del dispositivo
- **Prioridad:** Media

### RNF10: Actualización de registros
- **Descripción:** Que los resultados se vayan actualizando en tiempo vivo y no demoren mas de 10 segundos en figurar en la aplicación
- **Prioridad:** Alta

</a>

<a name= "US">

## User Stories 

### User Story 1
---

**Título:** Predicción resultados.

- **Como** usuario
- **Quiero** poder predecir los partidos del Mundial
- **Para** poder participar en la penca

- **Referencia a RF:** RF4

**Criterio de aceptación:** 
- Se puede predecir los resultados exactos de un partido.
- Se dispone de un marcador para seleccionar el puntaje de ambos equipos.
- Se puede predecir los resultados de distintos partidos.
- Los puntajes varían entre 1 a n, siendo n un valor lógico.

### User Story 2
---

**Título:** Ver información del Mundial.

- **Como** usuario
- **Quiero** poder ver información en tiempo real sobre el Mundial
- **Para** poder tener mas información a la hora de predecir los resultados

- **Referencia a RF:** RF3

**Criterio de aceptación:** 
- La información otorgada es acorde a la del momento actual.
- La información se va actualizando con el paso del tiempo.
- Se dispone de un botón para acceder a esta sección detallada.


### User Story 3
---

**Título:** Creación de grupo privado.

- **Como** usuario
- **Quiero** poder crear un grupo privado
- **Para** poder competir contra mis amigos

- **Referencia a RF:** RF5

**Criterio de aceptación:** 
- Se dispone de un boton que permita al usuario incializar el proceso de creación del grupo.
- El grupo contiene un nombre no existente.
- El grupo contiene dos usuarios o más.
- El grupo es visible para todos los integrantes.

### User Story 5
---

**Título:** Modificación del grupo privado.

- **Como** usuario
- **Quiero** poder personalizar distintos aspectos de mi penca
- **Para** que la rivalidad sana entre los integrantes sea mayor

**Criterio de aceptación:** 
- Se tiene un apartado donde se puede configurar los valores pre-establecidos de la penca a critero personal.
- Solo los administradores del grupo pueden modificarlos.
- Se puede modificar foto del grupo.
- Se puede configurar valores pre establecidos antes del inicio de la penca.

### User Story 6
---

**Título:** Notificaciones de partidos.

- **Como** cliente
- **Quiero** que se notifique media hora antes de cada partido a los usuarios que no hayan establecido un puntaje
- **Para** que los usuarios no pierdan participación en la penca y mantener el afán del juego.

- **Referencia a RF:** RF7

**Criterio de aceptación:** 
- Cuando el usuario habilite las notificaciones de la penca en su celular y reciba la misma media hora antes de cada partido.
Por ende el usuario está conectado a una red WiFi.

### User Story 7
---

**Título:** Cantidad de usuarios por mes.

- **Como** cliente
- **Quiero** controlar el número de usuarios registrado en mi penca
- **Para** poder tener mejor control de los datos

**Criterio de aceptación:** 
- El cliente recibe un informe de la cantidad de usuarios registrados.
- El cliente recibe el informe una vez al mes.
- El informe contiene email y fecha de cada registro.

### User Story 8
---

**Título:** Alternalización de premios.

- **Como** cliente
- **Quiero** que los administradores de grupos puedan definir los premios
- **Para** que haya una mayor versatilidad y no se vuelta tan repetitivas

- **Referencia a RF:** RF10

**Criterio de aceptación:** 
- Los administradores de los grupos disponen de una sección para definir un premio.
- Los premios se actualizan.

### User Story 9
---

**Título:** Habilitación de mensajes en linea.

- **Como** cliente
- **Quiero** que se pueda enviar y recibir mensajes en los grupos
- **Para** que haya una mejor relación entre los usuarios y se creen vínculos

**Criterio de aceptación:** 
- El usuario recibe un mensaje enviado por otro.

### User Story 10
---

**Título:** Notificación de cambios recientes.

- **Como** cliente
- **Quiero** que sea de notificar cada cambio existente dentro de los valores customizables del juego
- **Para** facilitar la comunicación entre los administradores y usuario de cada grupo

**Criterio de aceptación:** 
- Aparece un mensaje en el chat del cambio realizado.

### User Story 11
---

**Título:** ¿Chat visible?

- **Como** usuario
- **Quiero** que me den a elección si formar parte de un chat
- **Para** no tener que leer comentarios y opiniones de forma obligatoria

**Criterio de aceptación:** 
- Se despliega una alerta preguntando si quiere formar parte del chat.
- Solo se despliega la primera vez que se intenta entrar al mismo.

### User Story 12
---

**Título:** Abandono de grupo.

- **Como** usuario
- **Quiero** que pueda abandonar un grupo
- **Para** elegir si formar parte del mismo

**Criterio de aceptación:** 
- Se dispone de un botón que permite salir del grupo, a continuación se despliega una alerta preguntando si confirma los cambios.
- Se elimina al usuario del grupo.

### User Story 13         
---

**Título:** Remover integrante del grupo.

- **Como** usuario
- **Quiero** que los administradores puedan borrar parcipantes del grupo
- **Para** que haya una mejor organización

**Criterio de aceptación:** 
- Se despliega una alerta preguntando si quiere eliminar al usuario.
- Se dispone de un botón por el cual se accede a la zona de borrado.

### User Story 14
---

**Título:** Censurado de comentarios ofensivos.

- **Como** usuario
- **Quiero** que los comentarios ofensivos sean censurados
- **Para** generar un clima mas ameno y apto para todo público pero no se descarta la opción de que se pueda deshabilitar la misma si el usuario quiere.

**Criterio de aceptación:** 
- Se sustituye el comentario ofensivo por un conjunto de caracteres (****).

### User Story 15
---

**Título:** Reglas del juego.

- **Como** cliente
- **Quiero** que haya un apartado en la aplicacion que te rediriga a una ventana explicandote las reglas del juego
- **Para** que cada usuario este al tanto de todo

**Criterio de aceptación:** 
- Se dispone de un botón que te redirige a las reglas.
- Las reglas se pueden visualizar.

</a>

<a name = "UC">

## Use Cases

### UC1: Registro de usuario (A determinar)
---

**Actor:** Usuario

**Curso normal:**

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario abre la app por primera vez | 2. El sistema le pide que se indentifique con un nickname personal y un correo electrónico |
| 3. El usuario selecciona su nickname y email | 4. El sistema registra al usuario, muestra un mensaje de confirmación y lo lleva a la pagina principal |

**Curso alternativo:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 3.1 El usuario selecciona un nickname o email que ya está en uso | 3.2 El sistema muestra un mensaje de error y le vuelve a pedir que ingrese un nickname y email |

### UC2: Registro de predicción
---

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
| 7.1 El usuario presiona guardar sin haber ingresado una predicción | 7.2 El sistema muestra una mensaje de error y le pide que ingrese una predicción |

| 1 | 2 |
| ----------- | ----------- |
| ![partido](/docs/bocetosiu/partido.png) | ![error](/docs/bocetosiu/error-guardar.png) |

### UC3: Creación de grupo privado
---

**Actor:** Usuario

**Curso normal:**

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona la sección *Mis Grupos* | 2. El sistema muestra la sección seleccionada |
| 3. El usuario selecciona para crear un nuevo grupo privado | 4. El sistema le pide un nombre para el grupo y a quien quiere invitar |
| 5. El usuario ingresa el nombre del grupo y marca los invitados | 6. El sistema crea el grupo y agrega a los invitados. Devuelve la pantalla principal del grupo |

| 1 | 2 |
| ----------- | ----------- |
| ![mis-grupos-menu](/docs/bocetosiu/menu-mis-grupos.png) | ![mis-grupos](/docs/bocetosiu/mis-grupos.png) |
| 3 | 4 |
| ![crear-grupo](/docs/bocetosiu/crear-grupo.png) | ![confirmar-grupo](/docs/bocetosiu/nuevo-grupo.png) |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 5.1 El usuario selecciona un nombre de grupo que ya está en uso | 5.2 El sistema muestra un mensaje de error y le vuelve a pedir que ingrese un nombre |

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 5.1 El usuario no selecciona ningun amigo para invitar | 5.2 El sistema muestra un mensaje de error y le vuelve a pedir que seleccione al menos un amigo para invitar |

### UC4: Eliminación de integrante de grupo
---

**Actor:** Usuario (Administrador de grupo)

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona la sección *Mis grupos* | 2. El sistema muestra la sección seleccionada |
| 3. El usuario selecciona un grupo | 4. El sistema muestra la sección del grupo seleccionado |
| 5. El usuario del grupo selecciona el botón de editar | 6. El sistema muestra la misma sección pero en formato edición  |
| 7. El usuario selecciona el botón rojo en el usuario que desea eliminar | 8. El sistema muestra una alerta de confirmación |
| 9. El usuario confirma la eliminación del participante | 10. El sistema elimina al participante y vuelve a mostrar la sección del grupo con los cambios reflejados |

| 1 | 2 |
| ----------- | ----------- |
| ![mis-grupos-menu](/docs/bocetosiu/menu-mis-grupos.png) | ![mis-grupos](/docs/bocetosiu/mis-grupos.png) |
| 3 | 4 |
| ![grupo-1](/docs/bocetosiu/grupo-particular.png) | ![grupo-editar](/docs/bocetosiu/grupo-particular-editar.png) |
| 5 | 6 |
| ![confirmar-eliminacion](/docs/bocetosiu/eliminar-participante-confirmacion.png) | ![eliminacion-hecha](/docs/bocetosiu/grupo-particular-luego-eliminar.png) |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 9.1 El administrador del grupo NO confirma | 9.2 Queda sin efecto y no se hace nada |

### UC5: Abandono del grupo
---

**Actor:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona la sección *Mis Grupos* | 2. El sistema muestra la sección seleccionada |
| 3. El usuario selecciona el grupo que quiere acceder | 4. El sistema muestra la sección del grupo seleccionado | 
| 5. El usuario selecciona la configuración del grupo | 6. El sistema muestra la sección de configuración |
| 7. El usuario selecciona abandonar el grupo | 8. El sistema le pide confirmación de la acción |
| 9. El usuario confirma | 10. El sistema elimina al usuario del grupo, notifica al resto de los usuarios y lleva al usuario a la sección *Mis Grupos* |

| 1 | 2 |
| ----------- | ----------- |
| ![mis-grupos-menu](/docs/bocetosiu/menu-mis-grupos.png) | ![mis-grupos](/docs/bocetosiu/mis-grupos.png) |
| 3 | 4 |
| ![grupo-1](/docs/bocetosiu/grupo-particular.png) | ![grupo-editar](/docs/bocetosiu/grupo-configuracion.png) |
| 5 | 6 |
| ![confirmar-eliminacion](/docs/bocetosiu/confirmar-abandono.png) | ![eliminacion-hecha](/docs/bocetosiu/mis-grupos-abandono.png) |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 7.1. El usuario presiona el boton de abandonar el grupo | 7.2. Aparece una alerta preguntandole al usuario si esta seguro de realizar dicha acción |
| 7.3. El usuario selecciona la opción *Cancelar* | 7.4. El sistema no hace nada y retorna a la sección del grupo |

### UC6: Acceso a reglas 
---

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario ingresa a la sección de Reglas | 2. El sistema muestra la sección seleccionada |

| 1 | 2 |
| ----------- | ----------- |
| ![menu-reglas](/docs/bocetosiu/menu-reglas.png) | ![reglas](/docs/bocetosiu/reglas.png) |

### UC7: Envío de mensajes
---

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona la sección *Mis Grupos* | 2. El sistema muestra la sección seleccionada |
| 3. El usuario selecciona el grupo que quiere acceder | 4. El sistema muestra la sección del grupo seleccionado | 
| 5. El usuario selecciona la sección de chat | 6. El abre la sección de chat con todos los mensajes enviados en el grupo |
| 7. El usuario abre el teclado y envia un mensaje | 8. El sistema envía el mensaje |

| 1 | 2 |
| ----------- | ----------- |
| ![mis-grupos-menu](/docs/bocetosiu/menu-mis-grupos.png) | ![mis-grupos](/docs/bocetosiu/mis-grupos.png) |
| 3 | 4 |
| ![grupo-chat](/docs/bocetosiu/grupo-chat.png) | ![chat-abierto](/docs/bocetosiu/chat-abierto.png) |
| 5 | 6 |
| ![chat-teclado](/docs/bocetosiu/chat-teclado.png) | |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 3.2 El usuario no selecciona la sección de mensajes |

### UC8: Habilitar Notificaciones
---

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario ingresa a la aplicación por primera vez | 2. El sistema muestra una ventana emergente pidiendo permisos para mandarle notificaciónes |
| 3. El usuario otorga autorización | 4. El sistema queda autorizado de enviar notificaciones y las mismas quedan activadas | 

| 1 | 2 |
| ----------- | ----------- |
| ![menu-reglas](/docs/bocetosiu/permiso-notificaciones.png) | ![reglas](/docs/bocetosiu/grupos.png) |

**Cursos alternativos:** 

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 3.1 El usuario selecciona que no | 3.2 El sistema queda notificado que no se le deberá enviar notificaciones de los partidos |

### UC9: Habilitar - Deshabilitar el chat
---

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona la sección *Mis Grupos* | 2. El sistema muestra la sección seleccionada |
| 3. El usuario selecciona el grupo que quiere acceder | 4. El sistema muestra la sección del grupo seleccionado | 
| 5. El usuario selecciona la configuración del grupo | 6. El sistema muestra la sección de configuración |
| 7. El usuario habilita/deshabilita el chat | 8. El sistema guarda la selección del usuario |

| 1 | 2 |
| ----------- | ----------- |
| ![mis-grupos-menu](/docs/bocetosiu/menu-mis-grupos.png) | ![mis-grupos](/docs/bocetosiu/mis-grupos.png) |
| 3 | 4 |
| ![grupo-1](/docs/bocetosiu/grupo-particular.png) | ![grupo-editar](/docs/bocetosiu/grupo-configuracion.png) |

### UC10: Acceso a la información detallada de partidos anteriores
---

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario entra en la sección *Penca Mundial* | 2. El sistema muestra la sección seleccionada |
| 3. El usuario selecciona el grupo que quiere acceder | 4. El sistema muestra la sección del grupo seleccionado |

| 1 | 2 |
| ----------- | ----------- |
| ![menu](/docs/bocetosiu/menu.png) | ![grupos](/docs/bocetosiu/grupos.png) |
| 3 | 4 |
| ![grupoH](/docs/bocetosiu/grupoH.png) | ![partido](/docs/bocetosiu/partidos-finalizados.png) |

### UC11: Habilitar/Deshabilitar la censura en el chat

**Actor:** Usuario

| Acción | Respuesta del sistema |
| ----------- | ----------- |
| 1. El usuario selecciona la sección *Mis Grupos* | 2. El sistema muestra la sección seleccionada |
| 3. El usuario selecciona el grupo que quiere acceder | 4. El sistema muestra la sección del grupo seleccionado | 
| 5. El usuario selecciona la configuración del grupo | 6. El sistema muestra la sección de configuración |
| 7. El usuario habilita/deshabilita la censura del chat | 8. El sistema guarda la selección del usuario |

| 1 | 2 |
| ----------- | ----------- |
| ![mis-grupos-menu](/docs/bocetosiu/menu-mis-grupos.png) | ![mis-grupos](/docs/bocetosiu/mis-grupos.png) |
| 3 | 4 |
| ![grupo-1](/docs/bocetosiu/grupo-particular.png) | ![grupo-editar](/docs/bocetosiu/grupo-configuracion.png) |

</a>

<a name = "ValYVer">

# Validación y verificación

## Verificar la especificación

Para verificar que nuestra aplicación concordara con lo pedido y así asegurarnos de que no nos estabamos dejando algo por alto, realizamos un formato tabla con estilo "Check-List", en los cuales definimos un conjunto de preguntas que abarcan todos los conceptos que debían cumplir  nuestros requerimientos.
Estos conceptos abarcan desde la correctitud del mismo hasta su verificación y el cuestionamiento de su ambiguedad. Dependiendo de nuestras respuestas íbamos marcando con un SI/NO.

*Adjuntamos tablas y respuestas:*

**Tabla de Requerimientos Funcionales**

| Requerimiento | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RF7 | RF8 | RF9 | RF10 |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| **Correctitud** | | | | | | | | | | |
| ¿Es viable? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Su prioridad está bien definida? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Actor bien definidos? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Se interpone con otros Requerimientos? | NO | NO | NO | NO | NO | NO | NO | NO | NO | NO |
| ¿Incluye aspectos de diseño? | SI | SI | SI | NO | SI | SI | SI | SI | NO | SI | |
| ¿Esta a nuestro alcance de implementación? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| **Verificación y ambiguedad** | | | | | | | | | | | | 
| ¿Es preciso? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Se puede verificar? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Realmente vale la pena definirlo? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |

**Tabla de Requerimientos No Funcionales** 

| Requerimiento | RF1 | RF2 | RF3 | RF4 | RF5 | RF6 | RF7 | RF8 | RF9 | RF10 |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| **Correctitud** | | | | | | | | | | |
| ¿Es viable? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Su prioridad está bien definida? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Se interpone con otros Requerimientos? | NO | NO | NO | NO | NO | NO | NO | NO | NO | NO | NO | 
| ¿Incluye aspectos de diseño? | SI | SI | SI  | SI | SI | NO | NO | NO | NO | NO |
| ¿Esta a nuestro alcance de implementación? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| **Verificación y ambiguedad** | | | | | | | | | | | | 
| ¿Es preciso? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Se puede verificar? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |
| ¿Realmente vale la pena definirlo? | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI | SI |

## *Validar la solución con personas no involucradas en el proyecto* ##

Tuvimos una videollamada con un cliente para mostrarle todos los requerimientos y casos de uso de la aplicación, fundamentandole a que público iba dirigido principalmente y un prototipado  para que se pusiera en mayor sintonía con nosotros.
El cliente se mostró muy satisfecho y decidido comentandonos que le parecía todo muy completo pero que le gustaría un poco mas de detalle al apartado "Penca Mundial" logrando que la navegación en la app sea mas amigable a todo público. Porque iniciar la app y encontrarse de frente con ese apartado le parece muy directo cuando el usuario abre por primera vez la app.

</a>

<a name = "ReflexionGrupal">

# Reflexión

Antes de realizar las reflexiones individuales optamos por contruibuir primero con una reflexión grupal, ya que la mayor parte del obligatorio la realizamos de forma conjunta, ayudandonos con las dudas que fueron surgieron, dividiendonos el trabajo, realizando partes entre todos y escuchando las opiniones y aportes de cada uno.
Somos conscientes de que este trabajo nos impulsó como programadores ya que fuimos aprendiendo poco a poco todo el proceso de relación entre  Git y GitHub, logrando arreglar los errores de mergeo, introduciendo sobretodo el concepto de los adds, commits, pulls y los pushs, como tambien la necesidad de volver para atras en versiones para poder deshacer cambios erroneos. El trabajo nos pareció muy interesante ya que nos llevó mas a entender como es en realidad el día a día del programador promedio y que no fuera tan teórico y esquemático como lo que nos enseñan la mayoria de las otras materias.
Nos pareció muy entretenido el tener que realizarle entrevistas a personas ajenas a nuestros vínculos, simulando como si fueran nuestros clientes, fueron de mucha utilidad dado que nos aportaron un conjunto amplio de ideas nuevas que podias implementar, las cuales fuimos poco a poco traduciendolas en requerimientos funcionales y no funcionales. Aprendimos nuevas técnicas de elicitación como el focus group y en nuestro caso a como realizar correctamente una BrainStorming (Lluvia de ideas).

</a>

<a name = "ReflexionInd">

# Detalle del trabajo individual

A continuación daremos una reflexión individual de cada integrante del grupo:

| Integrante | Reflexión |
| ----------- | ----------- |
| Fernando Barcala | Me parece que el trabajo general del equipo fue bueno. Se aplicó correctamente el git-flow y todo fue utilizado desde la consola lo cual hace que el entendimiento sobre el tema sea aún mayor. Las técnicas de elicitación que utilizamos nos brindó muy buena información para crear los requerimientos. En lo personal también fue muy interesante el uso de [proto.io](https://proto.io/) para la creación de los bocetos. Es una herramienta que desconocía y da mucha facilidad a la hora de crear interfaces de usuario |
| Ignacio Quevedo | Los avances del proyecto fueron realizados en conjunto, cada uno aportó ideas creativas y útiles para el desarrollo del mismo, noté que realizar este trabajo en grupo fue, además de divertido, muy enriquescedor a nivel intelectual dado que aprendí muchas cosas útiles y que de verdad voy a poder aplicar en el porvenir de los días. Me permitió poner en práctica los conceptos que hemos ido aprendiendo durante lo que llevamos del semestre, ejemplo las técnicas de elicitación,los comandos de git, el modelo conceptual, casos de uso, user personas,user stories, requerimientos y sus respectivos tipos (Funcionales y No Funcionales), entre otras. En lo personal me resultó muy interesante el uso de proto.io para la creación de los bocetos, me permitió ver y comprender más nuestra aplicación gracias a ella, dado que nos mostraba de forma fácil y muy intuitiva todo las ideas que fuimos aplicando en el mismo. Fue una forma rápida de poder darle vida a nuestro proyecto lo cual me pareció increible.Notamos que las entrevistas fueron medias complicadas de agendar por tema de tiempo y disponibilidad, de tanto los entrevistados como nosotros, esto nos generó el buen hábito de mejorar la organización del grupo para las futuras entrevistas, por ejemplo a la hora de hacer la validación.Los conceptos de Git/GitHub fueron de extrema útilidad para el desarrollo del proyecto, me fascina la idea de poder trabajar de forma lócal y autónoma cada uno en su máquina, pero que a su vez esa forma de trabajo pueda en tan solo un segundo tener todos los cambios y actualizaciones de forma remota, es tan solo increible. Es un hecho que al principio del proyecto cuando intentabamos pushear cosas, mas de una vez ocurrió la mala suerte de que el otro habia pusheado algo antes y por ende nuestros cambios no podian ser registrados de forma remota hasta que se arreglara el error, al principio nos tendió un poco de dificultad el poder arreglarlo, pero gracias a los conocimientos dados en clase y un par de vichadas a las grabaciones, pudimos comprenderlo, logrando que este problema pase de ser algo malo a un buen recuerdo. |
| Gonzalo Camejo | Creo que este trabajo nos ayudó a comprender mucho mejor la forma en la cual un equipo de desarrollo funciona, aprendiendo tecnologías como git y GitHub que hoy en día son esenciales para el trabajo remoto en equipo. Me pareció realmente importante el hecho de "simular" una entrevista como si fuera real ya que nos permitió tratar con personas no comunes a nuestro núcleo con las cuales logramos interactuar y llegar a un acuerdo sobre las aplicaciones a desarrollar. Creo que la utilización de herramientas como Canva para realizar user personas y proto.io fueron de gran ayuda a la hora de generar una interfaz de usuario. Las técnicas de elicitación utilizadas como Brainstorming e ingeniería inversa fueron muy efectivas a la hora de tener un primer acercamiento a la aplicación. Personalmente sentí que logramos trabajar en equipo cubriendo las distintas áreas en conjunto verificando y discutiendo los distintos aspectos del proyecto, para lograr así una mejor solución. En un inicio creo que estábamos un poco perdidos con git/github y su funcionamiento, pero a medida que utilizábamos más git/github y nos ayudábamos unos a otros logramos comprender el funcionamiento de la herramienta. |

</a>

<a name = "Anexo">

# Anexo

A continuación se ve una historia de los commits realizados:

![historia-commits-1](/media/historia-commits-1.png)
![historia-commits-2](/media/historia-commits-2.png)
![historia-commits-3](/media/historia-commits-3.png)
![historia-commits-4](/media/historia-commits-4.png)

</a>