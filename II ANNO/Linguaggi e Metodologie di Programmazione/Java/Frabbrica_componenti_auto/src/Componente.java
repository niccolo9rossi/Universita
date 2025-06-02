import java.util.*;

public class Componente {
    private String nome;
    private String paeseProvenienza;
    private double tempoOrdine;
    private double costo;
    private boolean isPubblico;

    public Componente(String nome, String paeseProvenienza, double tempoOrdine, double costo, boolean isPubblico) {
        this.nome = nome;
        this.paeseProvenienza = paeseProvenienza;
        this.tempoOrdine = tempoOrdine;
        this.costo = costo;
        this.isPubblico = isPubblico;
    }

    public String getNome() {
        return nome;
    }

    public String getPaeseProvenienza() {
        return paeseProvenienza;
    }

    public double getTempoOrdine() {
        return tempoOrdine;
    }

    public double getCosto() {
        return costo;
    }

    public boolean isPubblico() {
        return isPubblico;
    }
}
