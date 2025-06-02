/*Classe Auto:
Attributi: targa, modello, anno, cliente (associato al proprietario)
Metodi:
    Costruttore per inizializzare i campi.
    Metodi getter e setter per gli attributi.
    Un metodo mostraDettagli() che stampa i dettagli dell'auto.*/
public class Auto {
    private String targa;
    private String modello;
    private int anno;
    private Cliente cliente;
    public Auto(String targa, String modello, int anno, Cliente cliente){
        this.targa=targa;
        this.modello=modello;
        this.anno=anno;
        this.cliente=cliente;

    }

    public String getTarga() {
        return targa;
    }

    public String getModello() {
        return modello;
    }

    public int getAnno() {
        return anno;
    }

    public Cliente getCliente() {
        return cliente;
    }


    public void mostraDettagli(){
        System.out.println("Auto: "+targa+" "+modello+" ("+anno+") "+cliente.getNome());
    }
}
