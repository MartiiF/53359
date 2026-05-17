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

## ¿Qué muestra el programa?

Si la entrada es válida:
Se muestra la tabla de tokens, el árbol de derivación  y el código JavaScript generado.

Si la entrada contiene errores:
Se informa si el error es léxico o sintáctico, la línea y columna del error, el lexema encontrado y el token esperado.

## Ejemplos Incluidos

El repositorio contiene ejemplos válidos e inválidos para probar el funcionamiento del analizador.
Recuerde reemplazar los mismos dentro del archivo input.txt.

###  Input correcto 1

Entrada:

``` bash
do {
puts("Hola");
} while(1);
``` 

Salida esperada:

``` bash
TABLA DE TOKENS:
Lexema: do -> Token: DO
Lexema: { -> Token: LKEY
Lexema: 
 -> Token: NEWLINE
Lexema: puts -> Token: PUTS
Lexema: ( -> Token: LPAREN
Lexema: "hola" -> Token: CADENA
Lexema: ) -> Token: RPAREN
Lexema: ; -> Token: SEMI
Lexema: 
 -> Token: NEWLINE
Lexema: } -> Token: RKEY
Lexema: while -> Token: WHILE
Lexema: ( -> Token: LPAREN
Lexema: 1 -> Token: UNO
Lexema: ) -> Token: RPAREN
Lexema: ; -> Token: SEMI

Entrada válida.
Árbol de derivación: (prog (instrucciones (instruccion (bucle do { \r\n (sentencia (salida puts ( "hola" ) ;) \r\n) } while ( (condicion 1) ) ;))))

CÓDIGO JAVASCRIPT GENERADO:
do {
   console.log("hola");
} while(1);
``` 

### Input correcto 2

Entrada:

``` bash
do {
puts("Mensaje");
break;
} while(0);
```

Salida esperada

``` bash
TABLA DE TOKENS:
Lexema: do -> Token: DO
Lexema: { -> Token: LKEY
Lexema: 
 -> Token: NEWLINE
Lexema: puts -> Token: PUTS
Lexema: ( -> Token: LPAREN
Lexema: "Mensaje" -> Token: CADENA
Lexema: ) -> Token: RPAREN
Lexema: ; -> Token: SEMI
Lexema: 
 -> Token: NEWLINE
Lexema: break -> Token: BREAK
Lexema: ; -> Token: SEMI
Lexema: 
 -> Token: NEWLINE
Lexema: } -> Token: RKEY
Lexema: while -> Token: WHILE
Lexema: ( -> Token: LPAREN
Lexema: 0 -> Token: CERO
Lexema: ) -> Token: RPAREN
Lexema: ; -> Token: SEMI

Entrada válida.
Árbol de derivación: (prog (instrucciones (instruccion (bucle do { \r\n (sentencia (salida puts ( "Mensaje" ) ;) \r\n (sentencia (terminar break ;) \r\n)) } while ( (condicion 0) ) ;))))

CÓDIGO JAVASCRIPT GENERADO:
do {
   console.log("Mensaje");
   break;
} while(0);
``` 

### Input incorrecto 1

Entrada:

``` bash
do {
puts("Hola")
} while(1);
``` 

Salida esperada:

``` bash
TABLA DE TOKENS:
Lexema: do -> Token: DO
Lexema: { -> Token: LKEY
Lexema: 
 -> Token: NEWLINE
Lexema: puts -> Token: PUTS
Lexema: ( -> Token: LPAREN
Lexema: "Hola" -> Token: CADENA
Lexema: ) -> Token: RPAREN
Lexema: 
 -> Token: NEWLINE
Lexema: } -> Token: RKEY
Lexema: while -> Token: WHILE
Lexema: ( -> Token: LPAREN
Lexema: 1 -> Token: UNO
Lexema: ) -> Token: RPAREN
Lexema: ; -> Token: SEMI

ERROR SINTÁCTICO DETECTADO
Línea: 2
Columna: 12
Lexema encontrado: \n
Tipo de token: NEWLINE
Se esperaba: {'break', 'puts'}
``` 

### Input incorrecto 2

Entrada:

``` bash
do {
puts(Hola);
} while(1);
``` 

Salida esperada:

``` bash
TABLA DE TOKENS:
Lexema: do -> Token: DO
Lexema: { -> Token: LKEY
Lexema: 
 -> Token: NEWLINE
Lexema: puts -> Token: PUTS
Lexema: ( -> Token: LPAREN
Lexema: H -> Token: LETRA
Lexema: o -> Token: LETRA
Lexema: l -> Token: LETRA
Lexema: a -> Token: LETRA
Lexema: ) -> Token: RPAREN
Lexema: ; -> Token: SEMI
Lexema: 
 -> Token: NEWLINE
Lexema: } -> Token: RKEY
Lexema: while -> Token: WHILE
Lexema: ( -> Token: LPAREN
Lexema: 1 -> Token: UNO
Lexema: ) -> Token: RPAREN
Lexema: ; -> Token: SEMI

ERROR SINTÁCTICO DETECTADO
Línea: 2
Columna: 5
Lexema encontrado: H
Tipo de token: LETRA
Se esperaba: {'break', 'puts'}
``` 
