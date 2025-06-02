# -*- coding: utf-8 -*-
"""
Created on Fri Mar  3 16:26:58 2023

@author: niccolò
"""


# In[Soluzione con metodo get]

import os
def analizza_test( cartella ):
    '''
    Assumiamo che n sia la dimensione complessiva dei file da analizzare
    '''
    d = {}
    mappa_punti_valori = {6:0.3, 7:0.4, 8:0.6, 9:1, 10:1.5}
    for filename in os.listdir(cartella):
        if filename.split('.')[-1] == 'csv':
            print(filename)
            # analizziamo filename
            filepath = os.path.join(cartella, filename)
            f = open(filepath)
            for line in f: # per ogni riga di tutti i file (per n volte)
                # elaborare line
                k, p = line.split(';') # unpacking
                p = int(p)                
                d[k] = d.get(k, 0) + mappa_punti_valori.get(p, 0)              
            f.close()
    return d

# Complessità computazionale
#
# n*O(1) = O(n) operazioni, ovvero O(1) per ogni riga dei file analizzati

d = analizza_test('.')
print(d)

