# Analizador Sintáctico DoWhileLoop

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y Node.js.

La gramática reconoce estructuras `do while` simples con:
- sentencias `puts`
- sentencias `break`
- condiciones booleanas representadas por `0` y `1`

Además:
- genera una tabla de tokens,
- detecta errores léxicos,
- detecta errores sintácticos,
- y traduce la entrada válida a código JavaScript.

# Requisitos

Tener instalado:

- Node.js
- Java
- ANTLR4

# Instalación

Abrir una terminal dentro de la carpeta del proyecto y ejecutar:

```bash
npm install
