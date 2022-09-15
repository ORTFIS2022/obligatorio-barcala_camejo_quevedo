# Informe académico entrega 1
Fecha de entrega: 18-oct-2021

## Repositorio Git

Creación y uso de repositorios locales y remotos

Comandos Git ejecutados desde terminal y desde el IDE

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



