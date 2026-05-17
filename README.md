# Analizador Sintáctico DoWhileLoop

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y Node.js.

El analizador reconoce estructuras `do while` simples que incluyen:
- sentencias `puts`
- sentencias `break`
- condiciones `0` y `1`

Además, el programa:
- genera una tabla de tokens,
- detecta errores léxicos,
- detecta errores sintácticos,
- genera el árbol de derivación,
- y traduce la entrada válida a código JavaScript.


## Estructura del proyecto

El proyecto se organiza de la siguiente manera:

- `DoWhileLoop.g4`  
  Contiene la gramática utilizada por ANTLR.

- `index.js`  
  Archivo principal encargado de ejecutar el analizador.

- `CustomDoWhileLoopVisitor.js`  
  Implementa la traducción de la entrada válida a código JavaScript.

- `generated/`  
  Contiene los archivos generados automáticamente por ANTLR.

- `input.txt`  
  Archivo utilizado como entrada del analizador.

- `ejemplos-validos/`  
  Contiene ejemplos válidos para probar el analizador.

- `ejemplos-invalidos/`  
  Contiene ejemplos inválidos para verificar la detección de errores.


## Cómo descargar el proyecto

Clonar el repositorio utilizando:

``` bash

git clone https://github.com/USUARIO/LEGAJO.git

```

Luego abrir la carpeta del proyecto en Visual Studio Code

## Instalación

Abrir una terminal dentro de la carpeta del proyecto y ejecutar:

`npm install`

## Cómo ejecutar el programa

Los ejemplos de prueba incluidos en el repositorio pueden copiarse dentro del archivo:

`input.txt`

Una vez colocado el ejemplo deseado, ejecutar el proyecto desde la terminal con:

`npm start`

También puede ejecutarse desde Visual Studio Code utilizando F5.

## ¿Qué muestra el programa?

Si la entrada es válida:
Se muestra la tabla de tokens, el árbol de derivación  y el código JavaScript generado.

Si la entrada contiene errores:
Se informa si el error es léxico o sintáctico, la línea y columna del error, el lexema encontrado y el token esperado.

## Ejemplos Incluidos

El repositorio contiene ejemplos válidos e inválidos para probar el funcionamiento del analizador.
Recuerde reemplazar los mismos dentro del archivo input.txt.

### Ejemplo váido 1

Entrada:

``` bash
do {
puts("Hola");
} while(1);
``` 

Salida esperada:

### Ejemplo váido 2

Entrada:

``` bash
do {
puts("Mensaje");
break;
} while(0);
``` 

### Ejemplo inváido 1

Entrada:

``` bash
do {
puts("Hola")
} while(1);
``` 

Salida esperada:

### Ejemplo inváido 2

Entrada:

``` bash
do {
puts(Hola);
} while(1);
``` 

Salida esperada:
