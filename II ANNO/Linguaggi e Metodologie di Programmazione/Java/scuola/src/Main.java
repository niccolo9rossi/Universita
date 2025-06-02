/*Una scuola superiore è organizzata in classi, ciascuna delle quali è composta da un certo numero di
studenti.
Ogni classe ha un nome (che possiamo pensare essere una stringa di caratteri, ad esempio “5A” o “3C”,
possibilmente determinata dai dati stessi della classe).
Ad ogni classe è associato:
- l’anno di nascita degli studenti che normalmente frequentano tale classe.
- L’anno di corso (da 1 a 5)
- La sezione
Per ogni studente occorre tener traccia della data e del luogo di nascita, del cognome e del nome, oltre che
dell’anno di iscrizione alla scuola.
Il preside della scuola potrebbe essere interessato a determinare il numero di studenti di una determinata
classe. Inoltre, egli potrebbe essere interessato a sapere se di una certa classe fa parte anche qualche
studente bocciato e di quanti anni è ripetente.
Si progetti e si implementi una gerarchia di classi e i campi e metodi necessari che siano in grado di
rappresentare tale dominio e soddisfare le esigenze del preside.*/

import java.time.LocalDate;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Studente studente1 = new Studente("Mario", "Rossi", LocalDate.of(2005, 5, 14), "Roma", 2019);
        Studente studente2 = new Studente("Luigi", "Verdi", LocalDate.of(2006, 8, 20), "Milano", 2020);

        Classe classe5A = new Classe("5A", 5, 2006, "A");
        classe5A.aggiungiStudente(studente1);
        classe5A.aggiungiStudente(studente2);

        System.out.println("Numero di studenti nella classe " + classe5A.getNomeClasse() + ": " + classe5A.numeroStudenti());

        int annoCorrente = 2024;
        List<Studente> bocciati = classe5A.trovaStudentiBocciati(annoCorrente);
        System.out.println("Studenti bocciati nella classe " + classe5A.getNomeClasse() + ": " + bocciati.size());
        for (Studente s : bocciati) {
            System.out.println(s.getNome() + " " + s.getCognome() + " è ripetente.");
        }
    }
}
