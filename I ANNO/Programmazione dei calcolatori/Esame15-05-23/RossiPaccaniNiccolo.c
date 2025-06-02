/*Si scriva una funzione che elimini da una stringa in input tutti i caratteri non
alfabetici. La funzione abbia il seguente prototipo:
    void remove_non_alpha( char *a );
*/

#include <stdio.h>


void remove_non_alpha();

void main() {
    char a[] = "Ciao!!!";
    char a2[] = "Alfabeto senza numeri 1112213";
    
    remove_non_alpha(a);

    printf("Stringa senza caratteri non alfabetici: %s\n", a);

    remove_non_alpha(a2);
    
    printf("Stringa senza caratteri non alfabetici: %s\n", a2);

}

void remove_non_alpha(char *a) {
    if (a == NULL) {
        return;
    }

    char *cerca = a;  // Puntatore per scorrere la stringa originale
    char *a1 = a;  // Puntatore per scrivere la stringa modificata

    while (*cerca) {  // Scorre la stringa originale fino alla fine
        if ((*cerca >= 'a' && *cerca <= 'z') || (*cerca >= 'A' && *cerca <= 'Z')) {
            // verifico se il carattere è una lettera maiuscola o minuscola
            *a1++ = *cerca;  // Copia il carattere nella posizione corrispondente nella stringa modificata
        }
        cerca++;  // Passa al carattere successivo nella stringa originale
    }

    *a1 = '\0';  // Aggiunge il carattere terminatore di stringa alla fine della stringa modificata
}
