'''
 Scrivere una funzione che riceva in input un intero n
 e restituisca un float (pseudo)-casuale compreso tra 0 ed 1 composto da n cifre decimali significative dopo la virgola.
'''

import random as rn
'''
def funzione(x, n):
    a = str (x)
    b = '0.'
    for i in range (n):
        b += a[1+2]
    b = float (b)
    return b

n = int(input('Inserire un numero intero: '))
x = rn()

print(funzione(x, n))
'''
#versione prof
def r_float(n):
    str_f ='0.'
    for c in range((n-1)):
        str_f += str(rn.randint(0, 9))
    str_f += str(rn.randint (1, 9))
    return float(str_f)

print(r_float(10))