#slicing

x = 'programmazione'
x0 = x[1:4] #da pos 1 a pos 4
x1 = x[:4] #da pos 0 a pos 4
x2 = x[3: len(x)] #da pos 3 a len (x)
x3 = x[3:] #da pos 3 fino all'ultima
x4 = x[:] #da pos 0 fino a pos ultima
x5 = x[3::2] #da pos 3 fino a pos ultima con salto di 2
x6 = x[6:1:-1] #da pos 6 a pos 1 inverso
x7 = x[::-1] #riscrive in modo inverso


print (x0)
print (x1)
print (x2)
print (x3)
print (x4)
print (x5)
print (x6)
print (x7)