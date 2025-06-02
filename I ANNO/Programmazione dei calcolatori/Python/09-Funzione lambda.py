#Funzione lambda

print ((lambda x: x+1)(1))

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

print (str_cmp('aio', 'addio', lambda x: x[0]))

f = lambda x: x ** 2 + 2 * x +6

print(f(10))

def str_cmp(x, y, key = lambda x:x):
    '''
        Input: x, y due stringhe; key una funzione con input str
        Output: ritorna -1 se key(x) < key(y); 0 se uguale key(x) == key(y); +1 key(y) < key(x)
    
    '''
    if key(x) < key(y):
        return -1
    if key(x) == key(y):
        return 0
    return 1

print (str_cmp('aio', 'addio'))