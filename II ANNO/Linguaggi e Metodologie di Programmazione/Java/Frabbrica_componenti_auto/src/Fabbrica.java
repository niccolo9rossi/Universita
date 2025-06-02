import java.util.*;
import java.util.stream.Collectors;

public class Fabbrica {
    private List<Prodotto> prodotti;
    private double costoGiornalieroManodopera;
    private double fattoreGuadagno;

    public Fabbrica(double costoGiornalieroManodopera, double fattoreGuadagno) {
        this.prodotti = new ArrayList<>();
        this.costoGiornalieroManodopera = costoGiornalieroManodopera;
        this.fattoreGuadagno = fattoreGuadagno;
    }

    public double getCostoGiornalieroManodopera() {
        return costoGiornalieroManodopera;
    }

    public double getFattoreGuadagno() {
        return fattoreGuadagno;
    }

    public void inserisciProdotto(Prodotto prodotto) {
        prodotti.add(prodotto);
    }

    public void aggiornaCostoManodopera(double costoAggiornato) {
        this.costoGiornalieroManodopera = costoAggiornato;
    }

    public void aggiornaFattoreGuadagno(double fattoreGuadagnoAggiornato) {
        this.fattoreGuadagno = fattoreGuadagnoAggiornato;
    }

    public List<Prodotto> rankingProdotti() {
        return prodotti.stream()
                .sorted(Comparator.comparingDouble(p -> -p.calcolaRapportoGuadagnoTempo(getCostoGiornalieroManodopera(), getFattoreGuadagno())))
                .collect(Collectors.toList());
    }

    public void stampaProdottiPubblici() {
        for (Prodotto prodotto : prodotti) {
            System.out.println(prodotto.getDescrizionePubblica());
        }
    }
}
