#funzione giocattolo

def f(x):
    x += 1
    for y in range(10):
        x += y
    return x

x = 100
y = 25
print (f(x))  