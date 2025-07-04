package it.uniroma2.info.lmp;

public interface Studente extends Person {
    String getMatricola();

    int getAnnoDiCorso();

    void saluta(Professore prof) throws ProfessoreIrreperibileException;
}
