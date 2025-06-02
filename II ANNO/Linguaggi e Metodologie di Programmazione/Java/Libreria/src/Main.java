/*
1.Classe Libro:
   - Attributi: titolo, autore, anno di pubblicazione, prezzo.
   - Metodi: costruttore, getter e setter per ogni attributo, metodo `toString()` per stampare i dettagli del libro.

2.Classe Utente:
   - Attributi: nome, cognome, email, lista di libri presi in prestito (ArrayList di libri).
   - Metodi: costruttore, getter e setter per ogni attributo, metodo per aggiungere e restituire libri, metodo `toString()` per stampare i dettagli dell'utente e dei libri presi in prestito.

3.Classe Biblioteca:
   - Attributi: nome della biblioteca, lista di libri disponibili (ArrayList di libri), lista di utenti registrati (ArrayList di utenti).
   - Metodi:
     - Aggiungi un libro alla lista di libri disponibili.
     - Rimuovi un libro dalla lista di libri disponibili.
     - Aggiungi un utente alla lista di utenti.
     - Permetti a un utente di prendere in prestito un libro, rimuovendolo dalla lista di libri disponibili e aggiungendolo alla lista di libri presi in prestito dell'utente.
     - Permetti a un utente di restituire un libro, rimettendolo nella lista di libri disponibili.
     - Metodo `toString()` per stampare i dettagli della biblioteca, compresi i libri disponibili e gli utenti registrati.

4.Classe Main:
   - Crea un'istanza della classe `Biblioteca`.
   - Aggiungi almeno 5 libri alla biblioteca.
   - Registra almeno 3 utenti.
   - Consenti a due utenti di prendere in prestito almeno un libro ciascuno.
   - Stampa i dettagli della biblioteca, includendo sia i libri disponibili che quelli in prestito, insieme agli utenti e i loro libri.*/
public class Main {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca("Biblioteca Comunale");

        // Creazione di libri
        Libro libro1 = new Libro("Il nome della rosa", "Umberto Eco", 1980, 15.99);
        Libro libro2 = new Libro("1984", "George Orwell", 1949, 12.99);
        Libro libro3 = new Libro("Il grande Gatsby", "F. Scott Fitzgerald", 1925, 10.99);

        // Aggiunta di libri alla biblioteca
        biblioteca.aggiungiLibroDisponibile(libro1);
        biblioteca.aggiungiLibroDisponibile(libro2);
        biblioteca.aggiungiLibroDisponibile(libro3);

        // Creazione di utenti
        Utente utente1 = new Utente("Mario", "Rossi", "mario.rossi@email.com");
        Utente utente2 = new Utente("Luigi", "Bianchi", "luigi.bianchi@email.com");

        // Aggiunta di utenti alla biblioteca
        biblioteca.aggiungiUtente(utente1);
        biblioteca.aggiungiUtente(utente2);

        // Prendere in prestito un libro
        biblioteca.prendiInPrestitoLibro(utente1, libro1);
        biblioteca.prendiInPrestitoLibro(utente1, libro2);

        // Restituire un libro
        biblioteca.restituisciLibro(utente1, libro1);

        // Visualizza dettagli della biblioteca e utenti
        System.out.println(utente1);
        System.out.println(biblioteca);
    }
}
