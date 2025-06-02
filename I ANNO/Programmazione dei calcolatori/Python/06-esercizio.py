#verifica che la frase y si trovi all'interno della frase x e da che punto inizia
from pickle import FALSE, TRUE


x = 'programmazione'
y = input('inserisci seconda frase: ')

p, trovato = 0, FALSE
while p < len(x): #modificato tenendo conto che possa aver successo
    #verifico se y è in x a partire da p
    q = 0

    while q < len(y) and x[p + q] == y[q]:
        q += 1
    if not  (q < len(y)):
        trovato = TRUE 
        break
    p += 1
if not (p <= len(x) - len(y)):
    print('non esiste corrispondenza')
else:
    print (y + ' compare in posizione ' + str(p+1) + ' di ' + x)