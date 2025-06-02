/*definiamo un predicato che sia vero se nella struttura arborea 
ci sia una foglia
*/
leaf(T,L).
%Struttura albero:
t(R,children). %children lista di elementi

leaf(T,L).
%PB
leaf(t(R,[]),R).

%PI
leaf(t(R,children),L):-
    member(C,children),
    leaf(C,L).

/* versione generica:*/
node(T,L).
%PB
node(t(R,_),R).

%PI
node(t(R,children),L):-
    member(C,children),
    node(C,L).
    

/*predicato somma(T,S) dove T sono i due valori di t e S è true solo se è la loro somma*/

t(3,4).
somma(t(x,y),S):-
    S is x+y.

