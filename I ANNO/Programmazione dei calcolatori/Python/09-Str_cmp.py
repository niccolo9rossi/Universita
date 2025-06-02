def identita(x):
    return x

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


def str_cmp(x, y, key = None):
    '''
        Input: x, y due stringhe; key una funzione con input str
        Output: ritorna -1 se key(x) < key(y); 0 se uguale key(x) == key(y); +1 key(y) < key(x)
    
    '''
    if key == None:
        x0, y0 = x, y
    else:
        x0, y0 = key(x), key(y)
    
    x0 = x if key == None else key (x)
    y0 = y if key == None else key (y)
    
    if x0 < y0:
        return -1
    if x0 == y0:
        return 0
    return 1
print(str_cmp('Addio', 'addio', len))
print(str_cmp('Addio', 'addio', str))
print(str_cmp('Addio', 'addio', identita))
print(str_cmp('Addio', 'addio'))