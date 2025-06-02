#TUPLE

t = (1, 'python', 3.14, (0,1)) #packing
print (t)

x = t[2] #indicizzazione
print(x)

print(t[1:3]) #slicing
print(t[::-1]) #slicing con step negativo

'''
t[2] = 4 #non ammissibile, le tuble sono immutabili
'''

x0, x1, x3, x3 = t #unpacking

print (x0, x1, x3, x3)

print (len(t))
