// Generated from c:/Users/marti/53359/Proyecto Node JS/DoWhileLoop.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DoWhileLoopParser}.
 */
public interface DoWhileLoopListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DoWhileLoopParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(DoWhileLoopParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileLoopParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(DoWhileLoopParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileLoopParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(DoWhileLoopParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileLoopParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(DoWhileLoopParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileLoopParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(DoWhileLoopParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileLoopParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(DoWhileLoopParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileLoopParser#bucle}.
	 * @param ctx the parse tree
	 */
	void enterBucle(DoWhileLoopParser.BucleContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileLoopParser#bucle}.
	 * @param ctx the parse tree
	 */
	void exitBucle(DoWhileLoopParser.BucleContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileLoopParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(DoWhileLoopParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileLoopParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(DoWhileLoopParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileLoopParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(DoWhileLoopParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileLoopParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(DoWhileLoopParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileLoopParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(DoWhileLoopParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileLoopParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(DoWhileLoopParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link DoWhileLoopParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(DoWhileLoopParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DoWhileLoopParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(DoWhileLoopParser.CondicionContext ctx);
}