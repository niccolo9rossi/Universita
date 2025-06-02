package it.uniroma2.info.lmp;

public class AnnoDiCorsoErratoException extends Exception{

    private int anno;
    public AnnoDiCorsoErratoException(int anno) {
        super("l'anno: "+anno+" è superiore o inferiore al range prefissato");
        this.anno = anno;
    }

    public int getAnno() {
        return anno;
    }
}
