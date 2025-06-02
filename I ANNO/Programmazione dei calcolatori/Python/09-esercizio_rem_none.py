'''
Si progetti una funzione, denominata rem_none che prenda in input una lista 
ed elimini da questa tutti gli elementi a valore None.
'''

def rem_none (a):
    while i < len(a):
        if a[i] == None:
            del(a[i])
        else:
            i += 1
    return a

b = [0, None, 1, None, 2, None]
b = rem_none
print (b)

b = [0, None, None, None, 2, None]
b = rem_none
print (b)