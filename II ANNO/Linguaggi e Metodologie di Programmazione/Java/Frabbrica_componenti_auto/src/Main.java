import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Creazione di componenti
        Componente motore = new Componente("Motore", "Italia", 5, 2000, true);
        Componente ruota = new Componente("Ruota", "Germania", 3, 500, false);
        Componente carrozzeria = new Componente("Carrozzeria", "Francia", 7, 1500, true);

        // Creazione di un prodotto
        List<Componente> componentiAuto = Arrays.asList(motore, ruota, carrozzeria);
        Prodotto auto = new Prodotto("A123", "Auto di Lusso", 10, componentiAuto);

        // Creazione della fabbrica
        Fabbrica fabbrica = new Fabbrica(300, 0.2);

        // Inserimento del prodotto
        fabbrica.inserisciProdotto(auto);

        // Calcolo del prezzo del prodotto e stampa della descrizione pubblica
        auto.calcolaPrezzoVendita(fabbrica.getCostoGiornalieroManodopera(), fabbrica.getFattoreGuadagno());
        fabbrica.stampaProdottiPubblici();

        // Ranking prodotti
        List<Prodotto> ranking = fabbrica.rankingProdotti();
        System.out.println("Ranking prodotti:");
        for (Prodotto prodotto : ranking) {
            System.out.println(prodotto.getDescrizionePubblica());
        }
    }
}
