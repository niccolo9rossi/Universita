"""
def bin_search (k, bins):
    
'''
    sia n la lunghezza di bins, ritorna 0 se k < bins [0], n se k >= bin[n-1]
    i se bins[i-1] <= k < bin[i]
'''

"""

def find_in_file(filename, k):
    f = open(filename)
    lines = ()
    r = 1 #riga corrente
    
    for line in f:
        if k in line:
            lines += (r, )
        r += 1
    
    f.close()
    return lines

t = find_in_file('17-lezione.py', 'lines')
print(t) 


# In[]

def find_in_file(filename, k):
    f = open(filename)
    lines = []
    r = 1 #riga corrente
    
    for line in f:
        if k in line:
            lines.append(r) 
        r += 1
    
    f.close()
    return tuple(lines)

t = find_in_file('17-lezione.py', 'lines')
print(t) 


# In[]

def find_in_file( filename, k):
    '''
	Input: filename e k sono str, filename è il nome di un file
	Output: una tupla ( (r0, c0), (r1, c1), ...) di coppie di interi che indicano le
        righe e le colonne del file in cui compare k. Per colonna si intende la posizione
        all'interno della riga  
    '''
    f = open(filename)
    lines = []
    r = 1 #riga corrente
    
    for line in f:
        c = 0
        for c in range(len(line) - len(k)):
            #verificare se k è il line a partire dalla posizione c
            if k == line[c:c+len(k)]:
                lines.append((r, c+1)) 
        r += 1
    
    f.close()
    return tuple(lines)

t = find_in_file('17-lezione.py', 'lines')
print(t)


# In[] 

def bin_search (k, bins):
    
    '''
    sia n la lunghezza di bins, ritorna 0 se k < bins [0], 
    n se k >= bin[n-1], i se bins[i-1] <= k < bin[i]
    '''
    
    n = len(bins)+1
    
    if k < bins[0]:
        return 0
    if k >= bins[n-2]:
        return n-1
    
    lx, rx = 0, n
    trovato = False
    
    
    while not trovato:
        cx = (lx+rx)//2
        #cx è il segmento mediano tra lx e rx
        
        if k >= bins[cx-1] and k < bins[cx]:
            trovato = True
        elif k < bins[cx-1]:
            #a sx del segmento cx
            rx = cx-1
        else:
            lx = cx+1
    
    return cx

print(bin_search(6, [6, 8, 12, 23]))
