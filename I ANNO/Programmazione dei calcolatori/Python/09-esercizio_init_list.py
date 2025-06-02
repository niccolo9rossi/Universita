'''
Si progetti una funzione analoga a init_tuple per le liste.
'''

'''
def init_list(n,v = lambda x: 0):
    t=[]
    for i in range(n):
        #concateno [v(i, ] a t
        t += [v(i, )] #richiede i+2 operazione
    return t
'''
def init_list(n,v = lambda x: 0):
    t=[]
    for i in range(n):
        t.append(v(i, )) 
    return t

t0 = init_list(10, str)
print(t0)
t1 = init_list(10)
print(t1)