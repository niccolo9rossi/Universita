import java.util.ArrayList;

/*3.Classe Biblioteca:
   - Attributi: nome della biblioteca, lista di libri disponibili (ArrayList di libri),
                lista di utenti registrati (ArrayList di utenti).
   - Metodi:
     - Aggiungi un libro alla lista di libri disponibili.
     - Rimuovi un libro dalla lista di libri disponibili.
     - Aggiungi un utente alla lista di utenti.
     - Permetti a un utente di prendere in prestito un libro,
       rimuovendolo dalla lista di libri disponibili e
       aggiungendolo alla lista di libri presi in prestito dell'utente.
     - Permetti a un utente di restituire un libro, rimettendolo nella lista di libri disponibili.
     - Metodo `toString()` per stampare i dettagli della biblioteca, compresi i libri disponibili e
        gli utenti registrati.
*/
public class Biblioteca {
    private String nome;
    private ArrayList<Libro> libriDisponibili;
    private ArrayList<Utente> utentiRegistrati;

    public Biblioteca(String nome) {
        this.nome = nome;
        this.libriDisponibili = new ArrayList<>();
        this.utentiRegistrati = new ArrayList<>();
    }

    public void aggiungiLibroDisponibile(Libro libro) {
        if (libro != null) {
            libriDisponibili.add(libro);
            System.out.println("Libro aggiunto: " + libro.getTitolo());
        }
    }

    public void rimuoviLibroDisponibile(Libro libro) {
        if (libro != null && libriDisponibili.contains(libro)) {
            libriDisponibili.remove(libro);
            System.out.println("Libro rimosso: " + libro.getTitolo());
        } else {
            System.out.println("Errore: il libro non è disponibile.");
        }
    }

    public void aggiungiUtente(Utente utente) {
        utentiRegistrati.add(utente);
        System.out.println("Utente aggiunto: " + utente.getNome());
    }

    public void prendiInPrestitoLibro(Utente utente, Libro libro) {
        if (libriDisponibili.contains(libro)) {
            libriDisponibili.remove(libro);
            utente.aggiungiLibroPresoInPrestito(libro);
            System.out.println("Libro prestato: " + libro.getTitolo() + " a " + utente.getNome());
        } else {
            System.out.println("Errore: il libro non è disponibile.");
        }
    }

    public void restituisciLibro(Utente utente, Libro libro) {
        if (utente.restituisciLibroPresoInPrestito(libro)) {
            libriDisponibili.add(libro);
            System.out.println("Libro restituito: " + libro.getTitolo() + " da " + utente.getNome());
        }
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Biblioteca: ").append(nome).append("\n");
        sb.append("Libri disponibili: \n");
        for (Libro libro : libriDisponibili) {
            sb.append(libro.toString()).append("\n");
        }
        sb.append("Utenti registrati: \n");
        for (Utente utente : utentiRegistrati) {
            sb.append(utente.toString()).append("\n");
        }
        return sb.toString();
    }
}
