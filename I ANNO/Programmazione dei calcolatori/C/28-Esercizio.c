/*
Scrivere una funzione C denominata switch_case che prende 
in input un char c: se c è una lettera maiuscola 
ritorni il corrispondente minuscolo; 
se c è una lettera minuscola ritorni il corrispondente maiuscolo; 
nel caso c non sia una lettera, la funzione ritorni -1.
*/
#include <stdio.h>

/*
Lista prototipi
*/
char switch_case (char); //va vene anche char switch_case (char c)


void main(){
    char c = 'd',c_out;
    printf("%c - %c\n", c, switch_case(c));

    c = 'E';
    printf("%c - %c\n", c, switch_case(c));

    c = '0';
    c_out = switch_case(c);
    if (c_out == -1)
        printf("%c non e' una lettera\n", c);
    else
        printf("%c - %c\n", c, switch_case(c));
}

char switch_case(char c){
    
    if (c > 'A' && c <= 'Z'){// test se c è maiuscolo
        return 'a' + c - 'A';
    }else if(c > 'a' && c <= 'z'){// test se c è minuscolo
        return 'A' + c - 'a';
    }else{
        return -1;
    }
}
