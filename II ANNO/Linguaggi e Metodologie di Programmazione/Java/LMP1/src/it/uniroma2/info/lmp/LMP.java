package it.uniroma2.info.lmp;

public class LMP {

    public static void main(String[] args) {

        Studente p1 = new StudenteImpl("Ivan","Collevecchio"," 0348569");

        System.out.println(p1);
        p1.saluta();
        p1.getMatricola();

        Professore stellato = new ProfessoreImpl("Armando","Stellato","LMP");

        p1.saluta(stellato);
        p1.saluta(stellato,"***");

        Studente p2 =new AngryStudent("Mario", "Rossi", "01234");
        p2.saluta(stellato);
        p2.saluta(stellato,"***");
    }

}

