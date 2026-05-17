// Generated from c:/Users/marti/53359/Proyecto Node JS/DoWhileLoop.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DoWhileLoopListener from './DoWhileLoopListener.js';
import DoWhileLoopVisitor from './DoWhileLoopVisitor.js';

const serializedATN = [4,1,18,83,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,1,3,1,22,8,1,1,1,1,1,1,1,3,1,27,
8,1,5,1,29,8,1,10,1,12,1,32,9,1,1,2,1,2,3,2,36,8,2,1,3,1,3,1,3,3,3,41,8,
3,1,3,1,3,3,3,45,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,3,4,56,8,4,1,4,
1,4,3,4,60,8,4,1,4,1,4,3,4,64,8,4,1,4,1,4,3,4,68,8,4,3,4,70,8,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,0,1,2,8,0,2,4,6,8,10,12,14,0,1,1,
0,1,2,86,0,16,1,0,0,0,2,18,1,0,0,0,4,33,1,0,0,0,6,37,1,0,0,0,8,69,1,0,0,
0,10,71,1,0,0,0,12,77,1,0,0,0,14,80,1,0,0,0,16,17,3,2,1,0,17,1,1,0,0,0,18,
19,6,1,-1,0,19,21,3,4,2,0,20,22,5,17,0,0,21,20,1,0,0,0,21,22,1,0,0,0,22,
30,1,0,0,0,23,24,10,1,0,0,24,26,3,4,2,0,25,27,5,17,0,0,26,25,1,0,0,0,26,
27,1,0,0,0,27,29,1,0,0,0,28,23,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,
1,0,0,0,31,3,1,0,0,0,32,30,1,0,0,0,33,35,3,6,3,0,34,36,5,17,0,0,35,34,1,
0,0,0,35,36,1,0,0,0,36,5,1,0,0,0,37,38,5,5,0,0,38,40,5,9,0,0,39,41,5,17,
0,0,40,39,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,44,3,8,4,0,43,45,5,17,0,
0,44,43,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,47,5,10,0,0,47,48,5,6,0,0,
48,49,5,13,0,0,49,50,3,14,7,0,50,51,5,14,0,0,51,52,5,8,0,0,52,7,1,0,0,0,
53,55,3,10,5,0,54,56,5,17,0,0,55,54,1,0,0,0,55,56,1,0,0,0,56,70,1,0,0,0,
57,59,3,10,5,0,58,60,5,17,0,0,59,58,1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,0,
61,63,3,8,4,0,62,64,5,17,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,70,1,0,0,0,65,
67,3,12,6,0,66,68,5,17,0,0,67,66,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,
53,1,0,0,0,69,57,1,0,0,0,69,65,1,0,0,0,70,9,1,0,0,0,71,72,5,4,0,0,72,73,
5,13,0,0,73,74,5,15,0,0,74,75,5,14,0,0,75,76,5,8,0,0,76,11,1,0,0,0,77,78,
5,3,0,0,78,79,5,8,0,0,79,13,1,0,0,0,80,81,7,0,0,0,81,15,1,0,0,0,11,21,26,
30,35,40,44,55,59,63,67,69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DoWhileLoopParser extends antlr4.Parser {

    static grammarFileName = "DoWhileLoop.g4";
    static literalNames = [ null, "'0'", "'1'", "'break'", "'puts'", "'do'", 
                            "'while'", "'\"'", "';'", "'{'", "'}'", null, 
                            null, "'('", "')'" ];
    static symbolicNames = [ null, "CERO", "UNO", "BREAK", "PUTS", "DO", 
                             "WHILE", "CUOTE", "SEMI", "LKEY", "RKEY", "LETRA", 
                             "DIGITO", "LPAREN", "RPAREN", "CADENA", "SIMBOLO", 
                             "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DoWhileLoopParser.ruleNames;
        this.literalNames = DoWhileLoopParser.literalNames;
        this.symbolicNames = DoWhileLoopParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DoWhileLoopParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.instrucciones(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, DoWhileLoopParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.instruccion();
	        this.state = 21;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 20;
	            this.match(DoWhileLoopParser.NEWLINE);

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, DoWhileLoopParser.RULE_instrucciones);
	                this.state = 23;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 24;
	                this.instruccion();
	                this.state = 26;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                if(la_===1) {
	                    this.state = 25;
	                    this.match(DoWhileLoopParser.NEWLINE);

	                } 
	            }
	            this.state = 32;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DoWhileLoopParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.bucle();
	        this.state = 35;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 34;
	            this.match(DoWhileLoopParser.NEWLINE);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DoWhileLoopParser.RULE_bucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(DoWhileLoopParser.DO);
	        this.state = 38;
	        this.match(DoWhileLoopParser.LKEY);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 39;
	            this.match(DoWhileLoopParser.NEWLINE);
	        }

	        this.state = 42;
	        this.sentencia();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 43;
	            this.match(DoWhileLoopParser.NEWLINE);
	        }

	        this.state = 46;
	        this.match(DoWhileLoopParser.RKEY);
	        this.state = 47;
	        this.match(DoWhileLoopParser.WHILE);
	        this.state = 48;
	        this.match(DoWhileLoopParser.LPAREN);
	        this.state = 49;
	        this.condicion();
	        this.state = 50;
	        this.match(DoWhileLoopParser.RPAREN);
	        this.state = 51;
	        this.match(DoWhileLoopParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DoWhileLoopParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.salida();
	            this.state = 55;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 54;
	                this.match(DoWhileLoopParser.NEWLINE);

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.salida();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 58;
	                this.match(DoWhileLoopParser.NEWLINE);
	            }

	            this.state = 61;
	            this.sentencia();
	            this.state = 63;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 62;
	                this.match(DoWhileLoopParser.NEWLINE);

	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            this.terminar();
	            this.state = 67;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	            if(la_===1) {
	                this.state = 66;
	                this.match(DoWhileLoopParser.NEWLINE);

	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DoWhileLoopParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(DoWhileLoopParser.PUTS);
	        this.state = 72;
	        this.match(DoWhileLoopParser.LPAREN);
	        this.state = 73;
	        this.match(DoWhileLoopParser.CADENA);
	        this.state = 74;
	        this.match(DoWhileLoopParser.RPAREN);
	        this.state = 75;
	        this.match(DoWhileLoopParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DoWhileLoopParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(DoWhileLoopParser.BREAK);
	        this.state = 78;
	        this.match(DoWhileLoopParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DoWhileLoopParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DoWhileLoopParser.EOF = antlr4.Token.EOF;
DoWhileLoopParser.CERO = 1;
DoWhileLoopParser.UNO = 2;
DoWhileLoopParser.BREAK = 3;
DoWhileLoopParser.PUTS = 4;
DoWhileLoopParser.DO = 5;
DoWhileLoopParser.WHILE = 6;
DoWhileLoopParser.CUOTE = 7;
DoWhileLoopParser.SEMI = 8;
DoWhileLoopParser.LKEY = 9;
DoWhileLoopParser.RKEY = 10;
DoWhileLoopParser.LETRA = 11;
DoWhileLoopParser.DIGITO = 12;
DoWhileLoopParser.LPAREN = 13;
DoWhileLoopParser.RPAREN = 14;
DoWhileLoopParser.CADENA = 15;
DoWhileLoopParser.SIMBOLO = 16;
DoWhileLoopParser.NEWLINE = 17;
DoWhileLoopParser.WS = 18;

DoWhileLoopParser.RULE_prog = 0;
DoWhileLoopParser.RULE_instrucciones = 1;
DoWhileLoopParser.RULE_instruccion = 2;
DoWhileLoopParser.RULE_bucle = 3;
DoWhileLoopParser.RULE_sentencia = 4;
DoWhileLoopParser.RULE_salida = 5;
DoWhileLoopParser.RULE_terminar = 6;
DoWhileLoopParser.RULE_condicion = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileLoopParser.RULE_prog;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileLoopVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileLoopParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	NEWLINE() {
	    return this.getToken(DoWhileLoopParser.NEWLINE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileLoopVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileLoopParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	NEWLINE() {
	    return this.getToken(DoWhileLoopParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileLoopVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileLoopParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(DoWhileLoopParser.DO, 0);
	};

	LKEY() {
	    return this.getToken(DoWhileLoopParser.LKEY, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	RKEY() {
	    return this.getToken(DoWhileLoopParser.RKEY, 0);
	};

	WHILE() {
	    return this.getToken(DoWhileLoopParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(DoWhileLoopParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(DoWhileLoopParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(DoWhileLoopParser.SEMI, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileLoopParser.NEWLINE);
	    } else {
	        return this.getToken(DoWhileLoopParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileLoopVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileLoopParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DoWhileLoopParser.NEWLINE);
	    } else {
	        return this.getToken(DoWhileLoopParser.NEWLINE, i);
	    }
	};


	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileLoopVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileLoopParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(DoWhileLoopParser.PUTS, 0);
	};

	LPAREN() {
	    return this.getToken(DoWhileLoopParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(DoWhileLoopParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(DoWhileLoopParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(DoWhileLoopParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileLoopVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileLoopParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(DoWhileLoopParser.BREAK, 0);
	};

	SEMI() {
	    return this.getToken(DoWhileLoopParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileLoopVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DoWhileLoopParser.RULE_condicion;
    }

	CERO() {
	    return this.getToken(DoWhileLoopParser.CERO, 0);
	};

	UNO() {
	    return this.getToken(DoWhileLoopParser.UNO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DoWhileLoopListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DoWhileLoopVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DoWhileLoopParser.ProgContext = ProgContext; 
DoWhileLoopParser.InstruccionesContext = InstruccionesContext; 
DoWhileLoopParser.InstruccionContext = InstruccionContext; 
DoWhileLoopParser.BucleContext = BucleContext; 
DoWhileLoopParser.SentenciaContext = SentenciaContext; 
DoWhileLoopParser.SalidaContext = SalidaContext; 
DoWhileLoopParser.TerminarContext = TerminarContext; 
DoWhileLoopParser.CondicionContext = CondicionContext; 
