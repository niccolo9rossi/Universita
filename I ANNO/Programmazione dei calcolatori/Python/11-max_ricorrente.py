def max_ric(a):
    '''
    input: lista di numeri
    output: massimo in a
            funzione ricorsiva
    '''
    
    n = len(a)
    if n == 1:
        return a[0]
    else:
        m = max_ric( a[1:] )
        if a[0] > m:
            return a[0]
        else:
            return m
        
b = [1, 7, 2]
print(max_ric(b))