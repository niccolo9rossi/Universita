/* Induzione strutturale diverso dalla ricorsione
    prototipo -> rivoltata(L, RL). vero che RL è L rivoltata?
*/

/*
%PB
rivoltata([H|_], [_|H]). 

%PI

rivoltata([_|T], [L|_]):-
    rivoltata(T,L).

Soluzione che manca della parte fontamentale che ci permette di controllare se è rivoltata -> capacità di prendere l'ultimo elemento

Introduciamo quindi la funzione append, vera se la lista L è formata da tutti i suoi n-1 elementi più un ultimo elemento in coda
*/


%PB
rivoltata([], []).

%PI
rivoltata([H|T], RL):-
    append(RT,[H], RL),
    rivoltata(T,RT).


%rivoltata([a, b, c], X).

/* Permutazione dove nelle due liste che contengono solo gli stessi elementi -> elementi di A = elementi di B */


%PB
appartiene(X, [X|_]). 

%PI
appartiene(X, [_|T]):-
    appartiene(X,T).


%PB
permutazione([], []).

%PI
permutazione([H|T], B):-
    permutazione(T, PT1_2),
    appartiene(H, B),
    subtract(H, B, PT1_2). /*vera se sussiste la seguente relazione fra PT1_2 e B -> PT1_2 = B - {H} */


    
