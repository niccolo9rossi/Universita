# In[]
def hist( a, bins ):
    '''
    Input: a una lista di m float e bins una lista di n-1 floats ordinati in modo crescente
    Output: una lista h di n floats tale che:
        - h[0] = numero di elementi in a < bins[0]
        - h[n-1] = numero di elementi in a >= bins[n-2]
        - per i = 1,..., n-2, h[i] = numero di elementi in a >= bins[i-1] e < bin[i]
    '''
    
    n = len (bins) + 1  # numero costante (rispetto a n e m) operazioni
    h = [0]*n           # ca n operazioni
    
    for v in a:         #blocco ripetuto m volte
    
        #cerco il segmento per v
        
        i = 0           # numero costante (rispetto a n e m) operazioni
        
        while i < n - 1 and v >= bins[i]:
        
            i += 1      # numero costante (rispetto a n e m) operazioni
        
        h[i] += 1       # numero costante (rispetto a n e m) operazioni
    
    return h

print (hist([90, 90, 90, 90], [0, 1, 2, 3, 4, 5]))


#costi