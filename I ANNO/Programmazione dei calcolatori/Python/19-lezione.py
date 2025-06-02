# In[Esercizio 1 lezione 18]

def dizionario_iniziali (a):
    '''
    input: lista di stringhe
    output: un dizionario d che mappa caratteri in liste di stringhe tali che 
        se d[k] = b, b contiene tutte le stringhe in a che iniziano per k
    '''
    
    d = {}                  #0(1)
    for x in a:             # per n volte
        if x == '':         #0(1)
            continue #torno a testare la condizione del ciclo saltando
                     #la parte restante del blocco
        k = x[0]            #0(1)
        if k in d:          #0(1)
            d[k].append(x)  #0(1) lettura dal dizionario + 0(1) per append
        else:
            d[k] = [x]      #0(1) costo per creare la lista + 0(1) per la 
                            #scrittura nel dizionario
    return d

a = ['python', 'codice', 'programma', '', 'input', 'while', 'for', 'in']

d = dizionario_iniziali(a)
print(d)

#complessita computazionale:
#n*0(1) operazioni per il for, ovvero 0(n)

# In[Esercizio 2 lezione 18]

import os

def analizza_test( cartella ):
    '''
    Assumiamo che n sia la dimensione complessiva dei file da analizzare
    '''
    d = {}
    for filename in os.listdir(cartella):
        if filename.split('.')[-1] == 'csv':
            print(filename)
            # analizziamo filename
            filepath = os.path.join(cartella, filename)
            f = open(filepath)
            for line in f: # per ogni riga di tutti i file (per n volte)
                # elaborare line
                k, v = line.split(';') # unpacking
                v = int(v)
                if k in d:
                    d[k].append(v)
                else:
                    d[k] = [v]         
            f.close()
    return d

# Complessità computazionale
#
# n*O(1) = O(n) operazioni, ovvero O(1) per ogni riga dei file analizzati

#d = analizza_test('/home/gianluca/Dropbox/teaching_and_work/tv/programmazione/aa2022-23/Programmazione-dei-Calcolatori-aa22-23/19-2022-12-12')
#d = analizza_test('19-2022-12-12')
d = analizza_test('.') # cartella corrente
print(d)

            
# In[Soluzione con metodo get]

def analizza_test( cartella ):
    '''
    Assumiamo che n sia la dimensione complessiva dei file da analizzare
    '''
    d = {}
    for filename in os.listdir(cartella):
        if filename.split('.')[-1] == 'csv':
            print(filename)
            # analizziamo filename
            filepath = os.path.join(cartella, filename)
            f = open(filepath)
            for line in f: # per ogni riga di tutti i file (per n volte)
                # elaborare line
                k, v = line.split(';') # unpacking
                v = int(v)
                a = d.get(k, [])
                d[k] = a.append(v) # cosa c'è  che non va?
                
            f.close()
    return d

# Complessità computazionale
#
# n*O(1) = O(n) operazioni, ovvero O(1) per ogni riga dei file analizzati

d = analizza_test('.')
print(d)
