# input
x = 25

# primo valore
g = 10.0
print (g)

# ciclo
while abs (g * g - x) > 0.0000001:
    g = 0.5 * (g + x/g)
    print (g)

print ("La radice quadrata di", x, "e'", g)
