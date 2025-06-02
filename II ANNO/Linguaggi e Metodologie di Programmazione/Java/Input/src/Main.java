import java.util.Scanner;

/* Metodi di input da tastiera.
*scrivi da tastiera e stampa a schermo la tua anagrafica (nome, cognome, eta, citta di nascita, codice fiscale,
*numero di scarpe, numero di telefono e se sei maggiorenne)
*  */
public class Main {
    public static void main (String []args){
       Scanner input = new Scanner(System.in);

       String nome, cognome, cittaNascita, codiceFiscale, numeroTelefono;
       char temp;
       int eta;
       float numeroScarpe;
       boolean maggiorenne = false;


      /* System.out.println("Qual è il tuo nome?");
       nome = input.nextLine();

        System.out.println("Qual è il tuo cognome?");
        cognome = input.nextLine();

        System.out.println("Qual è la tua città di nascita?");
        cittaNascita = input.nextLine();

        System.out.println("Qual è la tua età?");
        eta = input.nextInt();
        input.nextLine();
*/
        System.out.println("Sei maggiorenne? Y/n");
        do {
           temp = input.next().charAt(0);
        }while(temp != 'Y' || temp != 'n' || temp != 'y' || temp != 'N');
        if (temp == 'Y' || temp == 'y')
            maggiorenne = true;

        if (maggiorenne == true) {
            System.out.println("Sei maggiorenne");
        }else{
            System.out.println("Sei minorenne");
        }
        /*System.out.println("Qual è il tuo codice fiscale?");
        codiceFiscale = input.nextLine();
        */

    }
}
