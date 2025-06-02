'''

Scrivere una funzione che prende in input due stringhe 
e restituisce il carattere della prima stringa che compare più volte nella seconda. 
Ad esempio se la prima stringa è ciao e la seconda è ramarro marrone, la funzione deve restituire a.

'''

def massima_intersezione(x, y):
    
    #Input: x e y sono due stringhe
    #Output: restituisce carattere di x più frequente in y
    
    n_max, c_max = 0, None  #soluzione parziale
    for c in x:
        #quante volte c in y?
        n_c = 0
        for c_y in y:
            if c_y == c:
                n_c += 1
        if n_c > n_max:
            n_max, c_max = n_c, c
    return c_max

a, b = 'ciao', 'ramarro marrone'
r = massima_intersezione(a, b)
if r != None:
    print('Il carattere di' + a + 'che compare più volte in '+ b +' è: '+ r) #print (f'Il carattere di {a} che compare più volte in {b} è {r}) STRINGA FORMATTATA
else:
    print(a +' non ha corrispondenze con '+b) #print(f'\'{a}\' non ha corrispondenze con \'{b}\'') PER METTERE TRA VIRGOLETTE IL CONTENUTO NELLE STRINGHE a E b
