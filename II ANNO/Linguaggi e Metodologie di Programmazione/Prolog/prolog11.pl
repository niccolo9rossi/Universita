/*Precedenza operatori: prima il x, 2+3*5 
Albero: + radice di x, 2 sx, x dx, 3 dx sx, 5 dx dx
* C(precede) :
* C : C + C - (moltiplicazione precede divisione che precede addizione che precede sottrazione) operazione di precedenza transitiva,
invece di utilizzare questo tipo di precedenza potremmo usare o numeri associandoli a ogni operatore
(* = 100, : = 200, + = 300, - = 400) ora nella visita dell'albero devo verificare che il numero sopra sia maggiore di quello sotto.
un operatore è definito da tre fattori: nome, grado e come deve apparire.
2+3*5 modalità infissa
+(2,*(3,5)) modalità defissa
in prolog : op(priorità, nome). al centro potrei avere fx, xfx, xfy, yfx. la priorità deve essere decrescente. la differenza tra xfx e xfy è che la x sta a dire che la priorità
dell'elemento a sx o dx deve essere minore di quella di f, y deve essere min o uguale.

vogliamo definire l'operatore somma.
prendo 2+4+4 e lo unifico a +(x,y)
*/

:-op(300,xfy,somma). %definisco l'operatore somma

/*ora voglio scrivere cose del tipo:
mario ha la macchina di dario.
giovanni ha panino.
elena ha panino di giovanni.

dobbiamo rispondere alla domanda: ?-Chi ha Cosa.
devo scrivere i fatti, e gli operatori saranno "ha" e "di" */

:-op(300,xfy,ha).
:-op(200,xfy,di).

mario ha macchina di dario.
giovanni ha panino.
elena ha panino di giovanni.
giacomo ha borsa di pelle di daino.
gennaro ha (borsa di pelle) di nonna.

/*Predicati standard per verificare se sono variabili o costanti (già unificati a costanti oppure no):
var(X) dice X è variabile o meno (cioè se X è unificata o no).*/
?-var(X) true var(x) false
?- x=1,
    var(X). False
nonvar(X). %contrario

/*ordina(X,LX):-
    nonvar(X),*/

