#Funzioni

import random #moduli aka librerie

random.random()

print (random.random()) #verifica con help se intervallo [0, 1)
print (random.randint(10, 20)) #stampa un numero intero compreso tra l'intervallo [a, b]

from math import cos, sin  #utilizzabile per importare solo una funzione presente in un modulo

print (cos(3.14), sin (3.14))

import time as t

print (t.localtime(), t.time())
