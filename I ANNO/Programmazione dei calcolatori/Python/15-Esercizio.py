# In[]
'''
Modificare browse_dir nel seguente modo: aggiungere un secondo parametro ext opzionale di tipo str che, se specificato, stampi solo i file che hanno per estensione ext. 
Se non indicato, la funzione si comporti nel modo originale.

Modificare la precedente funzione in modo tale che, invece di stampare i nomi dei file, li ritorni in una lista
'''

import os


def browse_dir( d, ext = None ):
    
    '''
    Input: d è il nome di una cartella (str), ext è una str che indica estensione file
    
    Output: stampa tutti i file in d e in tutte le sotto cartelle che terminano in .ext. Se ext = None stampa tutti i file
    
    '''
    
    b = []
    cartella = os.listdir(d)
    for x in cartella:
        full_path = os.path.join(d, x)
        if os.path.isfile(full_path):
            if ext == None or full_path.split('.')[-1] == ext:
                print(f'FILE: {full_path}')    
        elif os.path.isdir(full_path):
           c = browse_dir( full_path, ext = ext )
           b.extend(c)
           #equivalentemente a
           
           #for x in c:
            #   b.append(x)
    return b

b = browse_dir( os.getcwd(), ext = None )
print(b)


# In[]

a = 'D:\Niccolo\Tor Vergata\Programmazione dei calcolatori\14-Lezione.py'

f = open(a)
for line in f:
    print(line)

f.close (a)
