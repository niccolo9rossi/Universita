/*sia un grafo di n nodi. Costruiamo regola path(x,y) vera se un esiste un cammino 
 * tra i nodi
 * protipo edge(start, end)*/

/*Definizione del grafo*/
edge(a, b).
edge(b, c).
edge(c, d).
edge(a, e).
edge(e, f).
edge(f, k).
edge(f, c).

/*V1*//*
%passo base
path(X, Y) :-
    edge(X, Y).
%passo induttivo
path(X, Y) :-
    path(X, Z),
    path(Z, Y).*/
/*V2*//*
path(X, Y) :-
    edge(X, Y).
    
path(X, Y) :-
    edge(X, Z),
    path(Z, Y).*/

/*V3*/
path(X, Y) :-
    edge(X, Z),
    path(Z, Y).

path(X, Y) :-
    edge(X, Y).