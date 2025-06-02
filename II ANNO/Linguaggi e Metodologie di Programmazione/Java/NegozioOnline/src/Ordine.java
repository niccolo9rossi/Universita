import java.util.ArrayList;

// Classe Ordine
class Ordine {
    private int id;
    private Cliente cliente;
    private ArrayList<Prodotto> listaProdotti;  // Cambiato da List a ArrayList
    private double totale;

    // Costruttore
    public Ordine(int id, Cliente cliente, ArrayList<Prodotto> listaProdotti) {
        this.id = id;
        this.cliente = cliente;
        this.listaProdotti = listaProdotti;
        this.totale = calcolaTotale();  // Calcola subito il totale quando viene creato l'ordine
    }

    // Metodi getter e setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public ArrayList<Prodotto> getListaProdotti() {
        return listaProdotti;
    }

    public void setListaProdotti(ArrayList<Prodotto> listaProdotti) {
        this.listaProdotti = listaProdotti;
    }

    public double getTotale() {
        return totale;
    }

    // Metodo per calcolare il totale dell'ordine
    public double calcolaTotale() {
        double totale = 0;
        for (Prodotto prodotto : listaProdotti) {
            totale += prodotto.getPrezzo();
        }
        return totale;
    }

    // Metodo per mostrare i dettagli dell'ordine
    public void mostraDettagliOrdine() {
        cliente.mostraDettagli();
        System.out.println("Prodotti ordinati:");
        for (Prodotto prodotto : listaProdotti) {
            System.out.println("- " + prodotto.getNome() + " - Prezzo: " + prodotto.getPrezzo() + "€ - Quantità: 1");
        }
        System.out.println("Totale Ordine: " + totale + "€");
    }
}