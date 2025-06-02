/*Classe Dipendente che estende la classe Persona:
    Attributi: stipendio, reparto.
    Metodi: costruttore, getter e setter per ogni attributo, metodo toString() per stampare i dettagli del dipendente (inclusi quelli della classe Persona).
    Metodo per calcolare il bonus di fine anno, pari al 10% dello stipendio.*/
public class Dipendente extends Persona{
    private double stipendio;
    private String reparto;
    public Dipendente(int id, String nome, String cognome, int eta, double stipendio, String reparto) {
        super(id, nome, cognome, eta);
        this.stipendio=stipendio;
        this.reparto=reparto;
    }

    public double getStipendio() {
        return stipendio;
    }

    public String getReparto() {
        return reparto;
    }

    public void setStipendio(double stipendio) {
        this.stipendio = stipendio;
    }

    public void setReparto(String reparto) {
        this.reparto = reparto;
    }

    public double calcolaBonus(){
        return stipendio*0.10;
    }

    @Override
    public String toString() {
        return super.toString()+ "stipendio=" + stipendio +", reparto='" + reparto + '}';
    }
}
