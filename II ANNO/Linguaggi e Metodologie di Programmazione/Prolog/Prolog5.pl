2+3=5 %falso
2+3+1=A % A = 2+3+1
2+3+1=A+B % A = 2+3, B = 1

/*stiamo unificando due predicati 2+3+1 e A. In procedurale con l'unificazione stiamo svolgendo 2 operazioni: assegnare e calcolare
*
* Per forzare prolog a effettuare una somma si utilizza l'operatore is, che prima dell'unificazione effettua l'operazione richiesta. 
* la parte destra dell'is deve essere istanziata completamente prima che la parte sinistra sia istanziabile
 */

 4 is 3+1 %TRUE

 /* In procedurale 4 = 4 ha il primo 4 che rappresenta lo spazio di memoria, per confrontare due valori si usa ==
 * is può effettuare due operazioni diverse: restituire TRUE o FALSE e unificare.
 */

 A is 1,
 A is A+1
 -> A = 2 %FALSE perchè A può essere qualsiasi valore

 lung(L, Lung) %predicato vero se L è una lista e Lung è la sua lunghezza

 /* len L = lung T + 1
 * lung L = 0
 */

/*Calcola lunghezza della lista*/

%PB
lung([], 0).
%PI
lung([_|T], A):-
    lung(T,B),
    A is B+1.

/*mai scrivere 
lung([], A):- 
    A is 0. 
se si conosce il valore della lunghezza della lista va inserita nel prototipo */

/*Data una lista vero se L lista, El elemento e N numero di volte in cui l'elemento appare nella lista*/

%PB
El(L, El, N).
nEl([], El, 0).

%PI

nEl([El|T], El, N):-
    nEl(T, El, M),
    N is M+1.

nEl([_|T], El, M):-
    nEl(T, El, M).