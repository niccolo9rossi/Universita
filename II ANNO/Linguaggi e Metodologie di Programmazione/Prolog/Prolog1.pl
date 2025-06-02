genitore(mario, gino).
genitore(mario, dario).
genitore(pino, gino).

fratello(X, Y) :- 
    genitore(Z, Y), 
    genitore(Z, X).

nonno(X, Y) :- 
    genitore(Z, Y), 
    genitore(Z, X).

avo(X, Y) :-
    genitore(X, Z),
    avo(Z, Y).