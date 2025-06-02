#include <stdio.h>
#include <stdlib.h>

int str_len(char*);
char *str_cat(char*, char*);

void main(){
    char a[] = "programmazione";
    char b[] = "dei calcolatori";
    char *c;
    int i;

    printf("Questa e' la mia prima stringa \"%s\"\n", a);

    i = 0;
    while (a[i] != '\0'){
        /*
        Faccio qualcosa con a[i]
        */
       printf("%c", 'A' + a[i] - 'a');
       i++;
    }
    printf("\n");    

    c=str_cat(a, b);
    printf("%s\n", c);

}

/*
* INPUT: due stringhe a e b
* OUTPUT: una nuova stringa concatenazione di a e b
*/
char *str_cat0(char *a, char *b){
    char *c = malloc((str_len(a) + str_len(b) + 1)*sizeof(char)); // ha lunghezza len(a) + len (b) + 1
    int i;

    for (i = 0; i < str_len(a); i++){ //costo 0(n^2)!!! dove n e' len(a)
        c[i] = a[i];
    }
    for (; i < str_len(a)+str_len(b); i++){
        c[i] = b[i-str_len(a)]; 
    }
    c[i] = '\0';
    return c;
/* 
*complessita' temporale 0(n^2)!!! NON VA BENE
*/
}

/*
* INPUT: due stringhe a e b
* OUTPUT: una nuova stringa concatenazione di a e b
*/
char *str_cat(char *a, char *b){
    char *c = malloc((str_len(a) + str_len(b) + 1)*sizeof(char)); // ha lunghezza len(a) + len (b) + 1
    int i, n, m;

    n = str_len(a); //costo 0(n)
    m = str_len(b); //costo 0(n)

    for (i = 0; i < n; i++){ //costo 0(n)
        c[i] = a[i];
    }
    for (; i < n+m; i++){  //costo 0(m)
        c[i] = b[i-n]; 
    }
    c[i] = '\0';
    return c;
    
}
/*
* INPUT a: una stringa
* OUTPUT: lughezza della stringa, numero di caratteri escluso il \0
*/
int str_len (char *a){
    int n = 0;
    while (a[n]!= '\0'){
        n++;
    }
    return n;
}

