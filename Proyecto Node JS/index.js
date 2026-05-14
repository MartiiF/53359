import DoWhileLoopLexer from "./generated/DoWhileLoopLexer.js";
import DoWhileLoopParser from "./generated/DoWhileLoopParser.js";
import { CustomDoWhileLoopVisitor } from "./CustomDoWhileLoopVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {

    let input;

    try {

        input = fs.readFileSync('input.txt', 'utf8');

    } catch (err) {

        input = await leerCadena();

        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);

    let lexer = new DoWhileLoopLexer(inputStream);

    let erroresLexicos = [];

    class MyLexerErrorListener extends antlr4.error.ErrorListener {

        syntaxError(recognizer, offendingSymbol, line, column, msg, err) {

            erroresLexicos.push({

                linea: line,
                columna: column,
                mensaje: msg
            });
        }
    }

    lexer.removeErrorListeners();

    lexer.addErrorListener(new MyLexerErrorListener());

    let tokenStream = new CommonTokenStream(lexer);

    tokenStream.fill();

    console.log("\nTABLA DE TOKENS:");

    tokenStream.tokens.forEach(token => {

        if (token.type !== antlr4.Token.EOF) {

            const tokenName =
                DoWhileLoopLexer.symbolicNames[token.type];

            console.log(
                `Lexema: ${token.text} -> Token: ${tokenName}`
            );
        }
    });

    if (erroresLexicos.length > 0) {

        erroresLexicos.forEach(error => {

            console.error("\nERROR LÉXICO DETECTADO");

            console.error(`Línea: ${error.linea}`);

            console.error(`Columna: ${error.columna}`);

            console.error(`Mensaje: ${error.mensaje}`);
        });

        return;
    }

    let parser = new DoWhileLoopParser(tokenStream);

    let hayErroresSintacticos = false;

    class MyErrorListener extends antlr4.error.ErrorListener {

        syntaxError(recognizer, offendingSymbol, line, column, msg, err) {

            hayErroresSintacticos = true;

            const tokenName =
                recognizer.symbolicNames[offendingSymbol.type];

            const expectedTokens =
                recognizer.getExpectedTokens().toString(
                    recognizer.literalNames,
                    recognizer.symbolicNames
                );

            console.error("\nERROR SINTÁCTICO DETECTADO");

            console.error(`Línea: ${line}`);

            console.error(`Columna: ${column}`);

            let lexema = offendingSymbol.text;

            if (lexema === null || lexema.trim() === "") {

                if (lexema.includes("\n")) {

                    lexema = "\\n";

                } else if (lexema.includes("\r")) {

                    lexema = "\\r";

                } else if (lexema.includes("\t")) {

                    lexema = "\\t";

                } else {

                    lexema = "[espacio en blanco]";
                }
            }

            console.error(
                `Lexema encontrado: ${lexema}`
            );

            console.error(
                `Tipo de token: ${tokenName}`
            );

            console.error(
                `Se esperaba: ${expectedTokens}`
            );
        }

        reportAmbiguity() {}

        reportAttemptingFullContext() {}

        reportContextSensitivity() {}
    }

    parser.removeErrorListeners();

    parser.addErrorListener(new MyErrorListener());

    let tree = parser.prog();

    if (hayErroresSintacticos) {

        return;
    }

    console.log("\nEntrada válida.");

    const cadena_tree =
        tree.toStringTree(parser.ruleNames);

    console.log(`Árbol de derivación: ${cadena_tree}`);

    const visitor = new CustomDoWhileLoopVisitor();

    visitor.visit(tree);

    console.log("\nCÓDIGO JAVASCRIPT GENERADO:");

    console.log(visitor.codigoJS);
}

function leerCadena() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question("Ingrese una cadena: ", (answer) => {

            rl.close();

            resolve(answer);
        });
    });
}

main();