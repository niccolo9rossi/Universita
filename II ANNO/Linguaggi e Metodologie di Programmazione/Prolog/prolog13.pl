/*Problema delle 8 regine*/


controlloRiga([A, B], [A, C]).
controlloColonna([A, B], [C, A]).
controlloDiagonale([A, B], [C, D]).

controlloDiagonale([A, B], [C, D]):-
    X is A-C,
    Y is B-D,
    X =\= Y,
    X =\= -Y.

controlloCoppia([A]).
controlloCoppia([A, B|T]):-
    controlloRiga(A, B),
    controlloColonna(A, B),
    controlloDiagonale(A, B),
    controlloCoppia([A|T]).

controlloSoluzione([A]).
controlloSoluzione([H|T]):-
    \+controlloCoppia([H|T]),
    controlloSoluzione([T]).

?- controlloSoluzione([[1,3],[3,4],[4,2],[2,1]]). %true