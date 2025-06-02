/*archi rappresentati da edge(A,B)

vogliamo scrivere un predicato path(X,Y, PATH)*/


%VISITA DFS

edge(a,b).
edge(a,c).
edge(b,d).
edge(b,e).

pathDFS(X,Y,[X,Y]):-
    edge(X,Y).

pathDFS(X,Y,[X|T]):-
    edge(X,Z),
    pathDFS(Z,Y,T).

?-pathDFS(a,e,N).
N = [a, b, e]

/*estendere per fare in modo che non si percorra 2 volte un nodo visitato*/ 

%VISITA BFS

frontiera([],[]).

frontiera([H|R],F):-
    setof(Z, edge(X,Z), R_X),
    append(R_X, RF, F),
    frontiera(R,RF).

?-frontiera([a],N).
N = [b, c] 

apf([X], FF, Y).

apf(F,FR,Y):-
    frontiera(F,FR),
    member(Y,FR).

apf(F,FR,Y):-
    frontiera(F,FRZ),
    apf(FRZ,FR,y).

pathBFS(X,Y[X|Y]):-
    edge(X,Y).