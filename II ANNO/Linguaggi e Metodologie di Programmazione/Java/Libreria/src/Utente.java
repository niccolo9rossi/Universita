/*2.Classe Utente:
   - Attributi: nome, cognome, email, lista di libri presi in prestito (ArrayList di libri).
   - Metodi: costruttore, getter e setter per ogni attributo,
            metodo per aggiungere e restituire libri,
            metodo `toString()` per stampare i dettagli dell'utente e dei libri presi in prestito.
*/
import java.util.ArrayList;
public class Utente {
    private String nome;
    private String cognome;
    private String email;
    private ArrayList<Libro> libriInPrestito;

    public Utente(String nome, String cognome, String email){
        this.nome=nome;
        this.cognome=cognome;
        this.email=email;
        this.libriInPrestito=new ArrayList<>();
    }

    public String getNome() {
        return nome;
    }

    public String getCognome() {
        return cognome;
    }

    public String getEmail() {
        return email;
    }

    public ArrayList<Libro> getLibriInPrestito() {
        return libriInPrestito;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setLibriInPrestito(ArrayList<Libro> libriInPrestito) {
        this.libriInPrestito = libriInPrestito;
    }

    public void aggiungiLibroPresoInPrestito(Libro libro) {
        if (libro != null) {
            libriInPrestito.add(libro);
            System.out.println("Libro aggiunto ai prestiti: " + libro.getTitolo());
        } else {
            System.out.println("Errore: libro non valido.");
        }
    }


    public boolean restituisciLibroPresoInPrestito(Libro libro) {
        if (libriInPrestito.contains(libro)) {
            libriInPrestito.remove(libro);
            System.out.println("Libro restituito: " + libro.getTitolo());
            return true;
        } else {
            System.out.println("Errore: questo libro non è nei prestiti.");
            return false;
        }
    }
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Utente: ").append(nome).append(" ").append(cognome).append(", Email: ").append(email).append("\n");
        sb.append("Libri presi in prestito: \n");
        for (Libro libro : libriInPrestito) {
            sb.append(libro.toString()).append("\n");
        }
        return sb.toString();
    }
}
