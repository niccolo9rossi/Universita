package it.uniroma2.info.lmp;

public class PersonImpl implements Person {
    private String nome;
    private String cognome;
    public PersonImpl(String nome, String cognome){
        this.nome = nome;
        this.cognome = cognome;
    }


    public String getNome() {
        return nome;
    }

    public String getCognome() {
        return cognome;
    }

    public String toString(){
        return nome +" "+cognome;
    }


    public void saluta() {
        System.out.println("Hello World");
    }


}
