x = input ('Digitare una stringa: ')

numero_vocale = 0
cont = 0
vocali = 'aeiou'
str2 = ''

while (cont < len(x)):
    x = x.lower()
    if (x[cont] in vocali):
        str2 += '*'
        numero_vocale += 1
    str2 += ' '
    cont +=1

print ('Il numero di vocali presenti nella stringa è: ', numero_vocale)
print (x)
print (str2)