'''
Esercizio: descrivere come utilizzare la funzione str_cmp in modo che vengano 
confrontati i carattere in posizione 0
di due stringhe in input x e y. In particolare ritorna -1 se x[0] < y[0]:
ritorna 0 se x[0] == y[0]; altrimenti ritorna +1
'''

def primo_elemento(x):
    return x[0]

def str_cmp(x, y, key = str):
    '''
        Input: x, y due stringhe; key una funzione con input str
        Output: ritorna -1 se key(x) < key(y); 0 se uguale key(x) == key(y); +1 key(y) < key(x)
    
    '''
    if key(x) < key(y):
        return -1
    if key(x) == key(y):
        return 0
    return 1

print (str_cmp('aio', 'addio', primo_elemento))