def massima_intersezione(x, y):
    '''
    Input: x e y sono due stringhe
    Output: restituisce carattere di x più frequente in y e la sua frequenza
    '''
    n_max, c_max = 0, None  #soluzione parziale
    for c in x:
        #quante volte c in y?
        n_c = 0
        for c_y in y:
            if c_y == c:
                n_c += 1
        if n_c > n_max:
            n_max, c_max = n_c, c
    return c_max
a, b = 'ciao', 'ramarro marrone'
c, n = massima_intersezione(a, b) #operazione di unpacking
print (c, n)