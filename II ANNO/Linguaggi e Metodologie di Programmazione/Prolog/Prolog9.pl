:- dynamic f/2.

f(1,1) :- !.
f(2,1) :- !.
f(M,N):-
    write(in(M,N)),nl,
    Mmu is M-1,
    Mmd is M-2,
    Mmu > 0,
    Mmd > 0,
    f(Mmu,N1),
    f(Mmd,N2),
    N is N1+N2,
    asserta((f(M,N) :- !)).
