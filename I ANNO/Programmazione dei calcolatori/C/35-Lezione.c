#include <stdio.h>

void incrementa_int(int*);

void main(){
    int n = 1,x = 10, m = 10;
    int d;
    char s[256] = "(123; 456)";
    incrementa_int(&x);
    printf("%d\n",x);


    /*d = scanf("(%d; %d)", &n, &m);
    printf("%d, %d, %d\n", n, m, d);*/

    /*scanf("%s", s);
    printf("%s\n", s);*/

    sscanf(s, "(%d; %d)", &n, &m);
     printf("%d, %d, %d\n", n, m, d);
}  

void incrementa_int(int *z){
    (*z)++;
}