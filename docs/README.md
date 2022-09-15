# Informe académico entrega 1
Fecha de entrega: 18-oct-2021

## Repositorio Git

**Creación y uso de repositorios locales y remotos**

Para introducir todo contenido a realizar primero debemos crearnos un repositorio local tanto como uno remoto, para ello utilizaremos el sistema de control de versionado distribuido GIT, este mismo nos permitirá trabajar de forma autónoma, local y offline en nuestras máquinas. Al ser un trabajo en equipo no alcanza con tan solo tener un repositorio local, ya que todo cambio realizado por cada uno de los integrantes debe poder a su vez tenerlo cada uno de los integrantes del grupo, logrando asi evitar conflictos en el porvenir. Dado a esto, utilizaremos un sistema de control de versiones de tipo centralizado reconocido como GitHub. Donde tendremos un servidor de versionado único mediante el cual iremos colocando todo contenido fundamental para el desarrollo del trabajo.

*¿Que es un repositorio?*

![fotorepo](/media/fotorepo.jpg)

Los repositorios son estructuras de directorios en disco, donde se almacenan y resguardan los elementos de software producidos a lo largo de todo el proyecto.
*¿Porque tomarse la molestia de crear repositorios locales y uno remoto para el desarrollo del proyecto, y no usar Google Drive?*

Esta pregunta nos la fuimos realizando durante el inicio del proyecto, con el paso del tiempo logramos entender que github, a diferencia de un servicio de alojamiento de archivos, ejemplo : (Google Drive), nos permite volver a versiones anteriores en caso de un fallo crítico y dejar registrado todo cambio importante.

**Comandos Git ejecutados desde terminal y desde el IDE**

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

![git-flow](git-flow.jpg)

De esta manera, los desarrolladores siempre se deben situar en la rama `develop` y desde allí comenzar a crear sus ramas `feature/<nombre_de_la_feature>` en la que van a trabajar. Una vez que se llega a un avance que es considerado adecuado para salir a producción se crea la rama `release/<nro_version>` que luego será mergeada con `main` una vez que se efectue el release.

Resumen de commits y evolución del proyecto

## Elicitación

Evidencia de actividades de investigación

Referencias a fuentes de información

Caracterización de usuarios: User Personas

Modelo conceptual del problema

## Especificación

Definición de requerimientos funcionales y no funcionales

User Stories / Use Cases detallados

Bocetos de IU

## Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes



