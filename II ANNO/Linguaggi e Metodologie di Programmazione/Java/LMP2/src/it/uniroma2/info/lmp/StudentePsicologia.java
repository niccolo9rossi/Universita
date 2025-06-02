package it.uniroma2.info.lmp;

public class StudentePsicologia extends StudenteImpl implements Studente {

    public StudentePsicologia(String nome, String cognome, String matricola) {
        super(nome, cognome, "PSY" + matricola);

    }

}

