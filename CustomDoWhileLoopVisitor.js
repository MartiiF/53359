import DoWhileLoopVisitor from "./generated/DoWhileLoopVisitor.js";

export class CustomDoWhileLoopVisitor extends DoWhileLoopVisitor {

    constructor() {

        super();

        this.codigoJS = "";
    }

    // prog
    visitProg(ctx) {

        return this.visit(ctx.instrucciones());
    }

    // instrucciones
    visitInstrucciones(ctx) {

        if (ctx.instrucciones()) {

            this.visit(ctx.instrucciones());
        }

        if (ctx.instruccion()) {

            this.visit(ctx.instruccion());
        }
    }

    // instruccion
    visitInstruccion(ctx) {

        return this.visit(ctx.bucle());
    }

    // bucle
    visitBucle(ctx) {

        this.codigoJS += "do {\n";

        this.visit(ctx.sentencia());

        this.codigoJS += "} while(";

        this.codigoJS += this.visit(ctx.condicion());

        this.codigoJS += ");\n";
    }

    // sentencia
    visitSentencia(ctx) {

        if (ctx.salida()) {

            this.visit(ctx.salida());
        }

        if (ctx.sentencia()) {

            this.visit(ctx.sentencia());
        }

        if (ctx.terminar()) {

            this.visit(ctx.terminar());
        }
    }

    // salida
    visitSalida(ctx) {

        let texto = ctx.CADENA().getText();

        texto = texto.substring(1, texto.length - 1);

        this.codigoJS += `   console.log("${texto}");\n`;
    }

    // break
    visitTerminar(ctx) {

        this.codigoJS += "   break;\n";
    }

    // condicion
    visitCondicion(ctx) {

        if (ctx.CERO()) {

            return "0";
        }

        if (ctx.UNO()) {

            return "1";
        }
    }
}