#utilizzo funzione return su base ex 06-esercizio_con_slicing

def ricerca_sottostringa(x, y): #parametri formali
    p, trovato = 0, False
    while p < len(x)-len(y) and not trovato: #modificato tenendo conto che possa aver successo
        #verifico se y è in x a partire da p
        
        if y == x[p:p+len(y)]:
            trovato = True
            break
        p += 1
    if not trovato:
        return -1 
    else:
        return p
a = 'gra'
t = ricerca_sottostringa('programmazione', a)

if t < 0:
    print('KO')
else:
    print ('OK')