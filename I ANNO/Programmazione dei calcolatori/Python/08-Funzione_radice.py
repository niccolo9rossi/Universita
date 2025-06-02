

def radice_quadrata(x, eps = 0.01):
    # primo ipotesi
    g = x / 2 

    # ciclo
    while abs (g * g - x) > eps:
        g = 0.5 * (g + x/g)
    return (g)

def Radice_quadrata(x, eps = 0.01):
    return x**0.5

print(Radice_quadrata(20, 0.000001))
print(Radice_quadrata(20))
print(radice_quadrata(eps = 0.000001, x = 20))