mossa_possibile([X,Y],[X1,Y1]):-
  X1 is X+2,
  Y1 is Y+1.

mossa_possibile([X,Y],[X1,Y1]):-
  X1 is X+2,
  Y1 is Y-1.

mossa_possibile([X,Y],[X1,Y1]):-
  X1 is X-2,
  Y1 is Y+1.

mossa_possibile([X,Y],[X1,Y1]):-
  X1 is X-2,
  Y1 is Y-1.

mossa_possibile([X,Y],[X1,Y1]):-
  X1 is X+1,
  Y1 is Y+2.

mossa_possibile([X,Y],[X1,Y1]):-
  X1 is X+1,
  Y1 is Y-2.

mossa_possibile([X,Y],[X1,Y1]):-
  X1 is X-1,
  Y1 is Y+2.

mossa_possibile([X,Y],[X1,Y1]):-
  X1 is X-1,
  Y1 is Y-2.

/*posso semplificarlo nel seguente modo

  mossa_possibile([X,Y],[X1,Y1]):-
    abs(X-X1,1),
    abs(Y-Y1,2).

  mossa_possibile([X,Y],[X1,Y1]):-
    abs(X-X1,2),
    abs(Y-Y1,1).

*/

controllo([_]).

controllo([H1,H2|T]):-
  mossa_possibile(H1,H2),
  \+member(H1, T),
  controllo([H2|T]).