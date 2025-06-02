#definizione nuova funzione in base ex 06-esercizio_con_slicing

def ricerca_sottostringa(x, y): #parametri formali
    p, trovato = 0, False
    while p < len(x)-len(y) and not trovato: #modificato tenendo conto che possa aver successo
        #verifico se y è in x a partire da p
        
        if y == x[p:p+len(y)]:
            trovato = True
            break
        p += 1
    if not (p <= len(x) - len(y)):
        print('non esiste corrispondenza')
    else:
        print (y + ' compare in posizione ' + str(p+1) + ' di ' + x)

ricerca_sottostringa('programmazione', 'gra') #parametri attuali

