#esercizio

x = input('Digita prima stringa: ')
y = input('Digita seconda stringa: ')

if x in y:
    print ('La prima stringa appartiene alla seconda')
elif y in x:
    print ('La seconda stringa appartiene alla prima')
else:
    print ('Le due stringhe non si appartengono') 

