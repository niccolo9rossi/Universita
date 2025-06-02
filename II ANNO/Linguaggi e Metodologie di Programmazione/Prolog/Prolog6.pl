/* come si esprime il not?
amici(mario,maria),
come esprimo che mario non è amico di giovanni? potrei non esprimere la loro amicizia. infatti è vero solo ciò che è scritto, tutto ciò che non è scritto non è vero
in quanto non conosciuto.

amici(mario, dario).
amici(mario, pino).
?- not amici(mario, rino).

*/

amici(mario, dario).
amici(mario, pino).

/*tipi di predicato: 
- il primo predicato che ci viene in mente è il predicato not(P) chiamato predicato fail, il cui scopo è fallire (il fail ci fa guardare un altro ramo, impostato bene ce li fa vedere tutti)
- "!" chiamato cut e si occupa di tagliare un ramo di ricerca

dato un predicato P := a,b,c se poniamo il cut una volta verificata a (quindi diventa P := a,!,b,c) e arrivato a b non più tornare indietro prima del cut. 

ESEMPIO:
*/
f(a).
f(b).
g(a).
g(b).
g(j).
k(a).

p(A):-
    f(A),
    write('10: '),write(A),nl, %write(   ) serve per scrivere il contenuto di una variabile, nl = print
    !,
    g(A),
    write('13: '),write(A),nl,
    k(A).

?- p(X)     /* risultato: 10: b
            13: b
            10: a
            13: a
            X = a
            */

fallimento_di_g(A):-
    g(A), %legge un elemento
    !,
    fail.

fallimento_di_g(_).

/*NOT NEGATION AS FAILURE*/    
mynot(Predicato):-
    Predicato,!,fail.

mynot(_).

?- mynot(g(b)). %false
?- mynot(g(x)). %true

%num_elementi(X,T,N).

num_elementi(_,[],0).
num_elementi(X,[X|T],N):-
    !,
    num_elementi(X,T,N1),
    N is N1+1.

num_elementi(X,[_|T],N):-
    %\+ (X = Y) not		%X =\= Y, %diverso
    num_elementi(X,T,N).