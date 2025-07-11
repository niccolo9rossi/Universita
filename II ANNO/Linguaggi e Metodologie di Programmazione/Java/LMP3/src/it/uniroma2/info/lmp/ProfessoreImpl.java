package it.uniroma2.info.lmp;

public class ProfessoreImpl extends PersonImpl implements Professore {

    private String cattedra;

    public ProfessoreImpl(String nome, String cognome, String cattedra) {
        super(nome, cognome);
        this.cattedra = cattedra;
    }

    @Override
    public String getCattedra() {
        return cattedra;
    }

}
