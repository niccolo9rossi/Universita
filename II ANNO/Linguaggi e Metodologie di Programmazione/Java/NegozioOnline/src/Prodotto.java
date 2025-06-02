/*Classe Prodotto:
 * Attributi: id, nome, prezzo, quantitàDisponibile
 * Metodi:
 *      Costruttore per inizializzare i campi.
 *      Metodi getter e setter per gli attributi.
 *      Un metodo mostraDettagli() che stampa i dettagli del prodotto.*/
public class Prodotto {
    private int id;
    private String nome;
    private double prezzo;
    private int quantitaDisponibile;
    public Prodotto(int id, String nome, double prezzo, int quantitaDisponibile){
        this.id=id;
        this.nome=nome;
        this.prezzo=prezzo;
        this.quantitaDisponibile=quantitaDisponibile;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public void setPrezzo(double prezzo) {
        this.prezzo = prezzo;
    }

    public int getQuantitaDisponibile() {
        return quantitaDisponibile;
    }

    public void setQuantitaDisponibile(int quantitaDisponibile) {
        this.quantitaDisponibile = quantitaDisponibile;
    }


    public void mostraDettagli() {
        System.out.println("Prodotto: " + nome + " - Prezzo: " + prezzo + "€ - Quantità disponibile: " + quantitaDisponibile);
    }
}
