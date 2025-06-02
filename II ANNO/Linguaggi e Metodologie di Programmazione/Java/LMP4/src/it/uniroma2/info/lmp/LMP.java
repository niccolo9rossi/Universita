package it.uniroma2.info.lmp;

public class LMP {

    public static void main(String[] args) {


        Studente p1 = null;
        try {
            p1 = new StudenteImpl("Ivan","Collevecchio", CdS.INFORMATICA, 1);

            System.out.println(p1);
            p1.getMatricola();

            Professore stellato = new ProfessoreImpl("Armando","Stellato","LMP");

            Studente inf = new StudenteImpl("Mario", "Rossi", CdS.INFORMATICA, 2);
            Studente psy = new StudenteImpl("Luigi", "Bianchi", CdS.PSICOLOGIA, 3);
            System.out.println(inf);
            System.out.println(psy);
            System.out.println("anno di corso dello studente "+psy+": "+psy.getAnnoDiCorso());
            psy.saluta(stellato);
            Professore ignoto = null;
            psy.saluta(ignoto);
        } catch (AnnoDiCorsoErratoException e) {
            System.err.println("c'è stato un errore con la creazione degli studenti: "+e.getMessage());
        } catch (ProfessoreIrreperibileException e) {
            System.err.println("c'è stato un problema nel salutare un professore: "+e.getMessage());
        }
    }

}
