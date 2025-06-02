/* Un processo è formato da stack, data, testo e gap, il testo di un programma può essere anche dato di un altro programma */
/* La parte di dati può anche essere un database,
 * In prolog in runtime è possibile definire predicati regole e fatti e quindi cambiare il programma,
 * cosa non possibile in altri linguaggi di programmazione, i dati in prolog sono fatti + regole.
 * modificando questi possiamo modificare il significato di un predicato. */

% assert()

% retract()

/* sono due predicati che se veri avranno una determinata azione sullo stato globale del programma,
 * introducendo un prima e un dopo. 
 * 
 * All' interno di assert mettiamo i fatti che vogliamo asserire, assert(lun([],0))
 * assertz() mette il predicato in coda.
 * asserta() mette il predicato in testa. (non funziona su swish)
 * 
 * retract permette di retrarre un fatto, se il fatto esiste lo toglie altrimenti darà falso. 
 * 
 * retractAll(len(A,0)) permette di retrarre tutti i fatti e predicati che si unificano con len(A,0) qualsiasi sia A.
 * 
 * consult() è il modo di consultare un file, legge una riga fino al punto e fa l'assert di quella riga. */<

/* :-dynamic nomePredicato/numeroArgomenti dichiarando che per questo predicato si puo asserire e retrarre,
 * è necessario per programmi che sono scritti per il programma che carichiamo. */

/* lun(0,1) =.. [lun,0,1] unificazione lista elementi che lo compongono, serve per generare un nuovo predicato
 * si chiama lumiv, possiamo quindi scirvere:
 * A =.. [lun,0,1] costruendo nella variabile il predicato che ci serve. */

/* tell(nomeFile) scrive lo stdout nel file con told(nomeFile) finisce di scriverlo, (la virgola ha priorità maggiore rispetto alle parentesi)*/

/* a predicato, f funtore del predicato*/

lung([], 0).
lung([_|T], A):-
    lung(T,B),
    A is B+1.

funtore(A,Funtore):-
    A =.. [Funtore|_].

consult(__) %legge una regola e fa l'assert
assert(len([], o)). %scrive
asserta(__) /*aggiunge in testa*/
assertz(__) /*aggiunge in coda*/
retract(len([], o)). %cancella

?-assert(primo(a)).
%true.

?-assert(primo(b)).
%true.

?- listing(primo).
:- dynamic primo/1.

primo(a).
primo(b).

%true.

?- assert(secondo(X):-primo(X)).
%true.

?- secondo(a).
%true.

?- primo(b)=..L.
% L = [primo, b].


?- primo(b)=..[primo, b].
%true.

?- primo(b)=..[primo, B].
%B = b.

?- primo(b)=..[A, B].
%A = primo,
%B = b.

?- X=..[primo, B].
%X = primo(B).

?- X=..[primo, B], Y=..[terzo,B], assert(Y:-x).
%X = primo(B),
%Y = terzo(B).

?-terzo(a).
%true.

?-listing(terzo).
:-dynamic   terzo/1.

terzo(A):-
    primo(A).

%true

?- assert(lun([],0)).
%true.

?- assert(lun([X|T],N):-(lun(T,M),N is M+1)).
%true.

?- lun([1,2],M).
%M = 2.

/*Scrivere predicato */

?- assert(funtore(A, Funtore):-A=..[Funtore|_]).
true.

?- listing(funtore).
:- dynamic funtore/2.

funtore(A, B) :-
    A=..[B|_].

true.

?- lun([1,2],M)=..[lun|T].
T = [[1, 2], M].