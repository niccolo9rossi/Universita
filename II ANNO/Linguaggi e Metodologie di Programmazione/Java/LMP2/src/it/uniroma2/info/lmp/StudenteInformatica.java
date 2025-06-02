package it.uniroma2.info.lmp;

public class StudenteInformatica extends StudenteImpl implements Studente {

    public StudenteInformatica(String nome, String cognome, String matricola) {
        super(nome, cognome, "INF" + matricola);

    }

}

