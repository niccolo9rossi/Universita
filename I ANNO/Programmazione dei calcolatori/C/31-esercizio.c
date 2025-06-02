#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int *array;
    size_t lunghezza;
} array_int;

array_int trova_spazi(char *a) {
    array_int risultato = {NULL, 0};
    int count = 0;
    size_t lunghezza = strlen(a);
    for (size_t cont = 0; cont < lunghezza; cont++) {
        if (a[cont] == ' ') {
            count++;
            risultato.array = realloc(risultato.array, count * sizeof(int));
            if (risultato.array == NULL) {
                perror("Errore di allocazione di memoria");
                exit(EXIT_FAILURE);
            }
            risultato.array[count - 1] = cont;
        }
    }
    risultato.lunghezza = count;
    return risultato;
}

void main() {
    char a[] = "Questa è una stringa con degli spazi";
    array_int risultato = trova_spazi(a);
    printf("Gli spazi si trovano alle posizioni: ");
    for (size_t cont = 0; cont < risultato.lunghezza; cont++) {
        printf("%d ", risultato.array[cont]);
    }
    printf("\n");
    free(risultato.array);
}
