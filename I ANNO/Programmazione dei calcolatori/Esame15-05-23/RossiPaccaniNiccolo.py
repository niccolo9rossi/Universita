# -*- coding: utf-8 -*-
"""
Created on Thu Jun 15 12:10:45 2023

@author: niccolò
"""

#Si scriva una funzione, denominata intersection, 
#che prenda in input due dizionari d0
#e d1 e restituisca una lista contenente le chiavi 
#che sono in d0 ed in d1.

def intersection(d0, d1):
    chiavi = [] #dichiaro la lista dove verranno inserite le chiavi in comune tra i due dizionari
    
    #Verifico se le chiavi corrispondo e faccio un append nella lista chiavi
    for chiave in d0.keys():
        if chiave in d1:
            chiavi.append(chiave)
            
    #ritorno il valore di chiavi
    return chiavi
#dichiaro i dizionari
d0 = {'programmazione': 1, 'calcolatori': 2, 'python': 3}
d1 = {'calcolatori': 4, 'python': 5, 'c': 6, 'esame': 7}

#richiamo la funzione e la inserisco nella var val_chiavi
val_chiave = intersection(d0, d1)
print(val_chiave) #stampa