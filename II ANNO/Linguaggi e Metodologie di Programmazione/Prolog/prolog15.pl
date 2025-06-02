%2 3 5 7 11 in questo ordine
%+ - x / = usabili più volte
/*Trovare predicato che utilizza tutti i numeri e simboli per verificare se esiste equazione*/
split(L,LS,LD):-
    append(LS,LD,L),
    LS = [_|_],
    LD = [_|_].

operazione(X,Y,X+Y).
operazione(X,Y,X-Y).
operazione(X,Y,X*Y).
operazione(X,Y,X/Y):-
    X=\=0.


termine([],0).
termine([X],X).
termine(L,T):-
    split(L,LS,LD),
    termine(LS,TS),
    termine(LD,TD),
    operazione(TS,TD,T).

equazione(L):-
    split(L,LS,LD),
    termine(LS,TS),
    termine(LD,TD),
    TS =:= TD.