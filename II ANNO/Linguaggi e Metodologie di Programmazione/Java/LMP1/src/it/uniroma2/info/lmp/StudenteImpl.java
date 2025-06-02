package it.uniroma2.info.lmp;

public class StudenteImpl extends PersonImpl implements Studente {

    private String matricola;

    public StudenteImpl(String nome, String cognome, String matricola) {
        super(nome,cognome);
        this.matricola = matricola;
    }

    public String getMatricola() {
        return matricola;
    }

    public String toString() {
        return super.toString() + " " + matricola;
    }

    public void saluta(Professore prof) {
        System.out.println("Salve Professor " + prof);

    }

    public void saluta(Professore prof, String appellativo) {
        System.out.println("Salve Professor " + prof + ", Lei è proprio un " + appellativo);

    }
}

