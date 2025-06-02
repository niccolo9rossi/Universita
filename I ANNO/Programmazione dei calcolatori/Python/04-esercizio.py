#Contare il numero di vocali nella stringa x nelle posizioni pari
x = input ('Digitare una stringa: ')

numero_vocale = 0
cont = 0
vocali = 'aeiou'

while (cont < len(x)):
    x = x.lower()
    if ((x[cont] in vocali) and (cont % 2 == 0)):
         numero_vocale += 1
    cont +=1

print ('Il numero di vocali presenti nella stringa è: ', numero_vocale)