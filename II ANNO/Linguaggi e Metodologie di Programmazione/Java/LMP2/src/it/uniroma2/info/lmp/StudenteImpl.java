package it.uniroma2.info.lmp;

public class StudenteImpl extends StudenteBaseImpl implements Studente {

    protected String matricola;

    public StudenteImpl(String nome, String cognome, String matricola) {
        super(nome,cognome,matricola);
    }

    public void saluta(Professore prof) {
        System.out.println("Salve Professor " + prof);

    }

    public void saluta(Professore prof, String appellativo) {
        System.out.println("Salve Professor " + prof + ", Lei è proprio un " + appellativo);

    }
}

