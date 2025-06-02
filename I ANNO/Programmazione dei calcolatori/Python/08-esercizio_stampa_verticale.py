#funzione che prende un num variabile di stringhe e lo stampa in verticale

def print_v ( *strings ):
    '''
    input: num variabile di stringhe
    stampa stringhe in verticale, uno di fianco all'altra
    Restituisce: None

    Esempio: print_v ('ciao', 'python')

    cp
    iy
    at
    oh
     o
     n
    '''
    r = 0 #riga attuale
    terminato = False
    while not terminato:
        terminato = True
        #definiamo la riga r
        riga_r = ''
        for a in strings:
            if len(a) > r:
                riga_r += a[r]
                terminato = False
            else:
                riga_r += ' '
        if not terminato:
            print(riga_r)
        r += 1


print_v ('ciao', 'python', 'programmazione', 'java', 'c++')