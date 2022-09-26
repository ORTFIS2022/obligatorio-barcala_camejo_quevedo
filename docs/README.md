# Informe académico entrega 1
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
---

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

### RF1: 
---
- **Actor:** Usuario
- **Descripción:** El usuario debe registrarse en el sistema mediante un nickname.
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
- **Descripción:** La aplicación debe poder ser accedida tanto de la web como desde dispositivos móviles.
- **Prioridad:** Alta

### RNF2: Tipografía
---
- **Descripción:** El sistema debe utilizar la tipografía *Roboto*.
- **Prioridad:** Alta

### RNF3: Formato de iconos
---
- **Descripción:** El sistema debe utilizar iconos en el formato *filled*.
- **Prioridad:** Alta

### RNF4: Paleta de colores
---
- **Descripción:** El sistema debe utilizar *Green 900* como color principal y *Light Blue 800* como secundario.
- **Prioridad:** Alta

## User Stories 

### User Story 1

**Título:** Predicción resultados

- **Como** usuario
- **Quiero** poder predecir los partidos del Mundial
- **Para** poder participar en la penca

**Criterio de aceptación:** 
- No se deben poder ingresar valores negativos en los resultados

### User Story 2

**Título:** Ver información del Mundial

- **Como** usuario
- **Quiero** poder ver información en tiempo real sobre el Mundial
- **Para** poder tener mas información a la hora de predecir los resultados

**Criterio de aceptación:** 
- Debe estar conectado a internet

### User Story 3

**Título:** Registro de usuario

- **Como** usuario
- **Quiero** poder registrarme
- **Para** poder predecir los partidos del Mundial

**Criterio de aceptación:** 
- Brindar un nickname que no esté previamente en uso

Bocetos de IU

## Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes



