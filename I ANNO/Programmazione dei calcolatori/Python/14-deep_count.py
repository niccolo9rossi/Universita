'''
Si progetti una funzione, denominata count_int che prenda
in input una lista che può contenere liste annidate 
e restituisca il numero di interi nella lista 
e in tutte le sottoliste annidate che questa contiene. 
Ad esempio count_int( [3, [9, [2,5], 2], 10, [8, [4,3], 
[1,2], 3]] ) dovrebbe restituire 12.
'''

def deep_count (a):
    c = 0
    for x in a:
        if type(x) == int:
            c += 1
        elif type(x) == list:
            c += deep_count(x)
    return c

a = [2, [8, [1, 2], 6], 94, [12, [1, [4,[1]], [5, [4,5]]]]]

print(deep_count(a))

