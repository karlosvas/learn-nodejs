# learn-nodejs
En este repositorio veremos los conceptos de nodejs desde cero, utilizando como el curso en Youtube de midulive

## Apuntes

En CommandJS no hace falta poner extensión al utilizarlo:
"const {sum} = require('./sum.mjs')"
Mietras que en EMAScript si es necesario poner la extensión:
"import {sum, sub, mult} from './sum.mjs'

Actualmente es mas recomendable y mas utilizado mjs, utilizan el sistema de módulos ES6 (ECMAScript) nativo
Siempre hay que priorizar que sean asíncronas o promesas antes que síncronas.
Diferencias de síncrona, asíncrona con callbaks, asíncrona secuencial, y asíncrona paralela.
![SyncYAsync](./img/sync-async.png)

La diferencia entre parámetros y argumentos: los parámetros son las variables
definidas en la declaración de la función, mientras que los argumentos son los
valores que se proporcionan cuando se llama a la función y que se asignan a los
parámetros para su uso interno dentro de la función.

El primer comando que devemos utilizar en cualquier pryecto de node es npm init, nos creará
un nuevo archivo package.json, desde donde podremos gestiionar las versiones de las dependencias,
y al añadir una nueva dependencia nos generara un archivo package-lock.json
Podremos instalar dependencias con "npm i dependencia" o "npm install dependencia".
Podremos desinstalar dependencias con "npm rm dependencia" o "npm rm dependencia" o "npm rm dependencia".

Hay dos tipos de dependencias: las "dependencias de producción", las que nuestra aplicacción la
necesita para funcionar en el entorno final, por ejemplo "npm i picocolors"
El otro tipo son las "dependencias de desarollo", estas son las dependencias que son necesarias durante el
desarrollo y no son esenciales para que la aplicación funcione en producción.
"npm i dependencia -D" o "npm i dependencia --development" indica que es de desarollo.

## Status code;
Existe una página web que explíca todos los errores de una manera divertida con imágenes de gatos,
https://http.cat

Un buffer: En nodejs es una clase global que se utiliza para trabajar con datos binarios,
lo guarda en un espacio de la memoria física.

### POST - PUT - PATCH
![post-put-patch](./img/post-put-patch.png)
