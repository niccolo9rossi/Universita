/*Classe InterventoRiparazione:
Attributi: id, auto, descrizione, costo
Metodi:
    Costruttore per inizializzare i campi.
    Metodi getter e setter.
    Un metodo mostraDettagliIntervento() che stampa i dettagli dell'intervento, inclusi auto e cliente.
    Un metodo calcolaCostoTotale() che restituisce il costo totale della riparazione.*/
public class InterventoRiparazione {
    private int id;
    private Auto auto;
    private String descrizione;
    private double costo;
    private Cliente cliente;
    public InterventoRiparazione(int id, Auto auto, String descrizione, double costo, Cliente cliente){
        this.id=id;
        this.auto=auto;
        this.descrizione=descrizione;
        this.costo=costo;
        this.cliente=cliente;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Auto getAuto() {
        return auto;
    }

    public void setAuto(Auto auto) {
        this.auto = auto;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public double getCosto() {
        return costo;
    }

    public void setCosto(double costo) {
        this.costo = costo;
    }

    public void mostraDettagliIntervento() {
        System.out.println("Dettaglio intervento: " + descrizione);
        auto.mostraDettagli();
        cliente.mostraDettagli();
        System.out.println("Costo: " + costo + "€");
    }

    public double calcolaCostoTotale() {
        return this.costo;
    }
}
