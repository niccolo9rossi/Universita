#liste

a0 = [] #lista vuota

a1 = [9, 'python', (1, 2), [], 3.14]
a2 = ['ciao']
# supporta: indicizzazione, slicing, concatenazione, ripetizione, funzione len()

a3 = a0+a1 # nuova lista richiede len(a1)+len(a2) operazione elementari
a4 = a1*2 # nuova lista richiede 2*len(a1) operazione elementari

print(a1, a2, a3, a4)

a2.append('mondo') #modifica lista aggiungendo valore alla fine della lista
print(a2)

a2[0] = 'Ciao' ##modifica valore in posizione i nella lista
print(a2)

del (a2[0]) #cancella elemento in posizione i nella lista
print(a2)