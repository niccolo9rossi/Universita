import java.util.*;

public class Prodotto {
    private String id;
    private String etichetta;
    private double tempoRealizzazione;
    private List<Componente> componenti;
    private double prezzoVendita;

    public Prodotto(String id, String etichetta, double tempoRealizzazione, List<Componente> componenti) {
        this.id = id;
        this.etichetta = etichetta;
        this.tempoRealizzazione = tempoRealizzazione;
        this.componenti = componenti;
        this.prezzoVendita = 0;
    }

    public double calcolaTempoTotaleOrdine() {
        return componenti.stream()
                .mapToDouble(Componente::getTempoOrdine)
                .max()
                .orElse(0);
    }

    public double calcolaCostoComponenti() {
        return componenti.stream()
                .mapToDouble(Componente::getCosto)
                .sum();
    }

    public void calcolaPrezzoVendita(double costoGiornalieroManodopera, double fattoreGuadagno) {
        double costoComponenti = calcolaCostoComponenti();
        double costoProduzione = costoComponenti + (tempoRealizzazione * costoGiornalieroManodopera);
        this.prezzoVendita = costoProduzione * (1 + fattoreGuadagno);
    }

    public double calcolaRapportoGuadagnoTempo(double costoGiornalieroManodopera, double fattoreGuadagno) {
        double guadagno = prezzoVendita - calcolaCostoComponenti();
        double tempoTotale = calcolaTempoTotaleOrdine() + tempoRealizzazione;
        return guadagno / tempoTotale;
    }

    public String getDescrizionePubblica() {
        StringBuilder descrizione = new StringBuilder();
        descrizione.append("Prodotto: ").append(etichetta).append("\n");
        descrizione.append("Prezzo: ").append(prezzoVendita).append("\n");
        descrizione.append("Componenti:\n");

        for (Componente componente : componenti) {
            if (componente.isPubblico()) {
                descrizione.append("- ").append(componente.getNome())
                        .append(" (").append(componente.getPaeseProvenienza()).append(")\n");
            }
        }
        return descrizione.toString();
    }
}
