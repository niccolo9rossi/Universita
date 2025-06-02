/**
 * Devi creare un sistema base per gestire un negozio online.
 * Il sistema deve permettere la gestione dei prodotti, degli ordini e dei clienti.
 *
 * Specifiche:
 * Classe Prodotto:
 * Attributi: id, nome, prezzo, quantitàDisponibile
 * Metodi:
 *      Costruttore per inizializzare i campi.
 *      Metodi getter e setter per gli attributi.
 *      Un metodo mostraDettagli() che stampa i dettagli del prodotto.
 *
 * Classe Cliente:
 * Attributi: id, nome, email
 * Metodi:
 *      Costruttore per inizializzare i campi.
 *      Metodi getter e setter.
 *      Un metodo mostraDettagli() per visualizzare le informazioni del cliente.
 *
 * Classe Ordine:
 *      Attributi: id, cliente, listaProdotti (una lista di oggetti Prodotto), totale
 * Metodi:
 *      Costruttore per inizializzare i campi.
 *      Metodi getter e setter.
 *      Un metodo calcolaTotale() che calcola il totale dell'ordine.
 *      Un metodo mostraDettagliOrdine() che stampa i dettagli dell'ordine.
 *
 * Classe Main (NegozioOnline):
 *      Creare alcuni prodotti e clienti.
 *      Creare un ordine con uno o più prodotti per un cliente.
 *      Stampare i dettagli dell'ordine e il totale.
 *
 * Esempio di output:
 * Cliente: Mario Rossi
 * Prodotti ordinati:
 * - Laptop - Prezzo: 1000€ - Quantità: 1
 * - Smartphone - Prezzo: 500€ - Quantità: 2
 * Totale Ordine: 2000€
 */
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Creazione di alcuni prodotti
        Prodotto laptop = new Prodotto(1, "Laptop", 1000, 5);
        Prodotto smartphone = new Prodotto(2, "Smartphone", 500, 10);

        // Creazione di un cliente
        Cliente cliente = new Cliente(1, "Mario Rossi", "mario.rossi@example.com");

        // Creazione di una lista di prodotti per l'ordine
        ArrayList<Prodotto> prodottiOrdinati = new ArrayList<>();
        prodottiOrdinati.add(laptop);
        prodottiOrdinati.add(smartphone);

        // Creazione di un ordine
        Ordine ordine = new Ordine(1, cliente, prodottiOrdinati);

        // Mostra i dettagli dell'ordine
        ordine.mostraDettagliOrdine();
    }
}