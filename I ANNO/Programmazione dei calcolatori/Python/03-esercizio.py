#esercizio: contare num vocali nella stringa x

x = input ('Digitare una stringa: ')

numero_vocale = 0
cont = 0
vocali = 'aeiou'

while (cont < len(x)):
    x = x.lower()
    if (x[cont] in vocali):
        numero_vocale += 1
    cont +=1

print ('Il numero di vocali presenti nella stringa è: ', numero_vocale)