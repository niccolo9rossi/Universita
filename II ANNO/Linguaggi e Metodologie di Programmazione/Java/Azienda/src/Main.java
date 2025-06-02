/*Classe Main (con il metodo main):
    Crea un'istanza della classe Azienda.
    Aggiungi almeno 3 dipendenti all'azienda.
    Stampa i dettagli dell'azienda, compresi i dipendenti.
    Calcola lo stipendio totale annuale e stampa il bonus di ciascun dipendente.
*/
public class Main {
    public static void main(String[] args) {
        Azienda azienda = new Azienda("Tech Corp");

        Dipendente d1 = new Dipendente(1,"Mario", "Rossi", 30, 30000, "Informatica");
        Dipendente d2 = new Dipendente(2,"Luigi", "Verdi", 40, 35000, "Marketing");
        Dipendente d3 = new Dipendente(3,"Anna", "Bianchi", 25, 28000, "Amministrazione");

        azienda.aggiungiDipendente(d1);
        azienda.aggiungiDipendente(d2);
        azienda.aggiungiDipendente(d3);

        System.out.println(azienda.toString());

        System.out.println("Stipendio totale annuale: " + azienda.calcolaStipendioTotale());

        System.out.println("Bonus di fine anno per Mario: " + d1.calcolaBonus());
        System.out.println("Bonus di fine anno per Luigi: " + d2.calcolaBonus());
        System.out.println("Bonus di fine anno per Anna: " + d3.calcolaBonus());
    }
}