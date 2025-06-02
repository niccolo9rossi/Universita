package it.uniroma2.info.lmp;

public class LMP {
    public static void main (String []args){
        PersonImpl persona1 = new StudenteImpl("Paolo", "Rossi", "0327821");
        //Person persona2 = new Person("Carla", "Bianco");

        System.out.println(persona1);
        //System.out.println(persona2);
        persona1.saluta();
        ((StudenteImpl) persona1).getMatricola();
    }
}
