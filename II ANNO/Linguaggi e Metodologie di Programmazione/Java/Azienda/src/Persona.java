/*L'obiettivo è implementare un semplice sistema di gestione di un'azienda con dipendenti.

Esercizio: Sistema di gestione dipendenti
Requisiti:

Classe Persona:
    Attributi: nome, cognome, età.
    Metodi: costruttore, getter e setter per ogni attributo, metodo toString() per stampare i dettagli della persona.

Classe Dipendente che estende la classe Persona:
    Attributi: stipendio, reparto.
    Metodi: costruttore, getter e setter per ogni attributo, metodo toString() per stampare i dettagli del dipendente (inclusi quelli della classe Persona).
    Metodo per calcolare il bonus di fine anno, pari al 10% dello stipendio.

Classe Azienda:
    Attributi: nome azienda, lista di dipendenti (ArrayList).
    Metodi: aggiungi un dipendente, rimuovi un dipendente, calcola lo stipendio totale annuale di tutti i dipendenti, metodo toString() per stampare i dettagli dell'azienda e dei suoi dipendenti.

Classe Main (con il metodo main):
    Crea un'istanza della classe Azienda.
    Aggiungi almeno 3 dipendenti all'azienda.
    Stampa i dettagli dell'azienda, compresi i dipendenti.
    Calcola lo stipendio totale annuale e stampa il bonus di ciascun dipendente.


 */
public class Persona {
    private int id;
    private String nome;
    private String cognome;
    private int eta;
    public Persona(int id, String nome, String cognome, int eta){
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;
    }

    public String getNome() {
        return nome;
    }

    public String getCognome() {
        return cognome;
    }

    public int getEta() {
        return eta;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public void setEta(int eta) {
        this.eta = eta;
    }

    @Override
    public String toString() {
        return "Persona{" + "id=" + id + ", nome='" + nome + ", cognome='" + cognome + ", eta=" + eta +'}';
    }


}
