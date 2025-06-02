#include <stdio.h>

void change_array(int x[], int n);

void main (){
    int a[10];
    int b[] = {10, 20, 30, 40};
    int c [5] = {0, 10, 20, 30, 40};
    int d [15] = {0, 10, 20, 30, 40}; 
    int e [100] = {0};
    int i, len_d;

    d[11]= 21;
    printf("%d, %d, %d, %d, %d, %d\n", a[4], b[0], c[2], d[10], d[11], e[97]);  

    len_d = sizeof(d)/sizeof(int);
    printf("----------%d\n", len_d);
    for (i = 0; i < len_d; i++){
        printf("%d\n", d[i]);
    }
    change_array(d, len_d);
    for (i = 0; i < len_d; i++){
        printf("%d\n", d[i]);
    }
}

void change_array(int x[], int n){
    int i;
    for (i = 0; i < n; i++)
    {
        x[i] = 10*i;
    }
}