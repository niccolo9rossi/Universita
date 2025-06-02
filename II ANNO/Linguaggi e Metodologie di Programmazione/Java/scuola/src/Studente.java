import java.time.LocalDate;
import java.time.Period;

public class Studente {
    private String nome;
    private String cognome;
    private LocalDate dataNascita;
    private String luogoNascita;
    private int annoIscrizione;

    public Studente(String nome, String cognome, LocalDate dataNascita, String luogoNascita, int annoIscrizione) {
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.luogoNascita = luogoNascita;
        this.annoIscrizione = annoIscrizione;
    }

    public String getNome() {
        return nome;
    }

    public String getCognome() {
        return cognome;
    }

    public LocalDate getDataNascita() {
        return dataNascita;
    }

    public String getLuogoNascita() {
        return luogoNascita;
    }

    public int getAnnoIscrizione() {
        return annoIscrizione;
    }

    public int calcolaEta() {
        return Period.between(dataNascita, LocalDate.now()).getYears();
    }

    public int calcolaAnniDiRitardo(int annoCorrente, int annoCorso) {
        int etaCorrente = calcolaEta();
        int etaAttesa = annoCorrente - annoIscrizione + 6;
        return etaCorrente - etaAttesa;
    }
}

