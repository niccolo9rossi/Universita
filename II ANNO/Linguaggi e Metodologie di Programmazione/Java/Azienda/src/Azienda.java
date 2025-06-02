/*Classe Azienda:
    Attributi: nome azienda, lista di dipendenti (ArrayList).
    Metodi: aggiungi un dipendente, rimuovi un dipendente,
    calcola lo stipendio totale annuale di tutti i dipendenti,
    metodo toString() per stampare i dettagli dell'azienda e dei suoi dipendenti.*/
import java.util.ArrayList;
public class Azienda {
    private String nome;
    private ArrayList<Dipendente> dipendenti;
    public Azienda(String nome){
        this.nome=nome;
        this.dipendenti=new ArrayList<>();
    }
    public void aggiungiDipendente(Dipendente dipendente){
        dipendenti.add(dipendente);
    }
    public void rimuoviDipendente(Dipendente dipendente){
        dipendenti.remove(dipendente);
    }

    public double calcolaStipendioTotale(){
        double stipendioTotale = 0;
        for(Dipendente d: dipendenti) {
            stipendioTotale += d.getStipendio();
        }
        return stipendioTotale;
    }

    @Override
    public String toString() {
        StringBuilder sb= new StringBuilder();
        sb.append("Azienda: ").append(nome).append("\n");
        for (Dipendente d : dipendenti) {
            sb.append(d.toString()).append("\n");
        }
        return sb.toString();
    }
}
