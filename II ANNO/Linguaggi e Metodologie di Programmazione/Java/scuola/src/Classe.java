import java.util.ArrayList;
import java.util.List;

public class Classe {
    private String nomeClasse;
    private int annoCorso;
    private int annoNascitaAtteso;
    private String sezione;
    private List<Studente> studenti;

    public Classe(String nomeClasse, int annoCorso, int annoNascitaAtteso, String sezione) {
        this.nomeClasse = nomeClasse;
        this.annoCorso = annoCorso;
        this.annoNascitaAtteso = annoNascitaAtteso;
        this.sezione = sezione;
        this.studenti = new ArrayList<>();
    }

    public String getNomeClasse() {
        return nomeClasse;
    }

    public int getAnnoCorso() {
        return annoCorso;
    }

    public int getAnnoNascitaAtteso() {
        return annoNascitaAtteso;
    }

    public String getSezione() {
        return sezione;
    }

    public void aggiungiStudente(Studente studente) {
        studenti.add(studente);
    }

    public int numeroStudenti() {
        return studenti.size();
    }

    public List<Studente> trovaStudentiBocciati(int annoCorrente) {
        List<Studente> studentiBocciati = new ArrayList<>();
        for (int i = 0; i < studenti.size(); i++) {
            Studente studente = studenti.get(i);
            int anniDiRitardo = studente.calcolaAnniDiRitardo(annoCorrente, annoCorso);
            if (anniDiRitardo > 0) {
                studentiBocciati.add(studente);
            }
        }

        return studentiBocciati;
    }
}
