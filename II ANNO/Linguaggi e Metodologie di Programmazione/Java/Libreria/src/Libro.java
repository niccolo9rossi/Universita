/*1.Classe Libro:
        - Attributi: titolo, autore, anno di pubblicazione, prezzo.
        - Metodi: costruttore, getter e setter per ogni attributo,
                   metodo `toString()` per stampare i dettagli del libro.
*/
public class Libro {
    private String titolo;
    private String autore;
    private int annoPubblicazione;
    private double prezzo;
    public Libro(String titolo, String autore, int annoPubblicazione, double prezzo){
        this.titolo=titolo;
        this.autore=autore;
        this.annoPubblicazione=annoPubblicazione;
        this.prezzo=prezzo;
    }

    public String getTitolo() {
        return titolo;
    }

    public String getAutore() {
        return autore;
    }

    public int getAnnoPubblicazione() {
        return annoPubblicazione;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public void setAutore(String autore) {
        this.autore = autore;
    }

    public void setAnnoPubblicazione(int annoPubblicazione) {
        this.annoPubblicazione = annoPubblicazione;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    @Override
    public String toString() {
        return "Libro{" +"titolo='" + titolo  + ", autore='" + autore +", annoPubblicazione=" + annoPubblicazione +", prezzo=" + prezzo + '}';
    }
}
