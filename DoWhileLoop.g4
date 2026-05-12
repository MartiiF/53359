grammar DoWhileLoop;


//Gramatica o Parser
prog: instrucciones;

instrucciones: instruccion NEWLINE?
    | instrucciones instruccion NEWLINE?
    ;

instruccion: bucle NEWLINE?;

bucle: DO LKEY NEWLINE? sentencia NEWLINE? RKEY WHILE LPAREN condicion RPAREN SEMI;

sentencia: salida NEWLINE?
    | salida NEWLINE? sentencia NEWLINE?
    | terminar NEWLINE?
    ;

salida: PUTS LPAREN CADENA RPAREN SEMI;

terminar: BREAK SEMI;

condicion: CERO
    | UNO
    ;   



//Lexemas

CERO: '0';
UNO: '1';

BREAK : 'break';
PUTS : 'puts';
DO : 'do';
WHILE : 'while';
CUOTE : '"';
SEMI : ';';
LKEY : '{';
RKEY : '}';

LETRA : [a-zA-Z];
DIGITO : [0-9];
LPAREN : '(';
RPAREN : ')';

CADENA : CUOTE CARACTERES CUOTE;
CARACTERES: CARACTER+;
CARACTER : (LETRA | DIGITO | SIMBOLO);

SIMBOLO: [.,?!:;];    
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;