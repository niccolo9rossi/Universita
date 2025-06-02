/*
I professori sono stanchi di comparare i compiti per vedere se gli studenti copiano. Pertanto,
vogliamo catturare questa esigenza proponendo un comparatore di compiti prolog.
Nel caso specifico, vogliamo essere in grado di scovare se due studenti propongono una soluzione
strutturalmente simile anche se hanno cambiato il nome dei predicati e delle variabili.
Vogliamo dunque fare un predicato:
haStessaStruttura (P1,P2)
che sia vero se P1 e P2 sono due regole o due fatti strutturalmente uguali.
Due fatti sono strutturalmente uguali se hanno lo stesso numero di argomenti.
Due regole sono strutturalmente uguali se la parte sinistra delle regole ha lo stesso numero di
argomenti, hanno lo stesso numero di componenti nella parte destra e ciascun componente
appaiato di una regola e dell’altra hanno lo stesso numero di argomenti.
Ad esempio, queste due regole sono strutturalmente uguali:
a(N,M):- b(N,K), c(K,M).
gda(N,M):- gdb(N,K), gdc(K,M).
Ad esempio, queste due regole NON sono strutturalmente uguali:
a(N,M):- b(N), c(K,M).
gda(N,M):- gdb(N,K), gdc(K,M).
Per semplicità non si tenga in considerazione la relazione tra le variabili.
Suggerimento:
VERSIONE SEMPLICE: rappresentare le regole come una coppia parte sinistra e parte destra dove
parte destra è una lista (a(N,M),[b(N,K), c(K,M)])
VERSIONE COMPLETA: usare la normale definizione di regola come argomento di
haStessaStruttura (P1,P2)
*/


haStessaStruttura((Head1, Body1), (Head2, Body2)) :-
    verificaStruttura(Head1, Head2),   
    confrontaListePredicati(Body1, Body2).

/*usiamo la funzione functor per confrontare i due predacati ignorando come si chiamano 
ma calcolando solo la loro struttura*/

verificaStruttura(Predicato1, Predicato2) :-
    functor(Predicato1, _, N1),
    functor(Predicato2, _, N2),
    N1 =:= N2.

% Confronta due liste di predicati per verificare che abbiano la stessa struttura
confrontaListePredicati([], []).
confrontaListePredicati([Elem1|Rest1], [Elem2|Rest2]) :-
    verificaStruttura(Elem1, Elem2),
    confrontaListePredicati(Rest1, Rest2).
confrontaListePredicati(_, _) :- false.
