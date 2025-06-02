/*Devi creare un sistema per la gestione di un'autofficina. Il sistema deve permettere di gestire le auto, i clienti e gli interventi di riparazione.

Classe Auto:
Attributi: targa, modello, anno, cliente (associato al proprietario)
Metodi:
    Costruttore per inizializzare i campi.
    Metodi getter e setter per gli attributi.
    Un metodo mostraDettagli() che stampa i dettagli dell'auto.

Classe Cliente:
Attributi: id, nome, telefono
Metodi:
    Costruttore per inizializzare i campi.
    Metodi getter e setter per gli attributi.
    Un metodo mostraDettagli() che stampa i dettagli del cliente.

Classe InterventoRiparazione:
Attributi: id, auto, descrizione, costo
Metodi:
    Costruttore per inizializzare i campi.
    Metodi getter e setter.
    Un metodo mostraDettagliIntervento() che stampa i dettagli dell'intervento, inclusi auto e cliente.
    Un metodo calcolaCostoTotale() che restituisce il costo totale della riparazione.

Classe Main (OfficinaAuto):
    Creare alcune auto e clienti.
    Creare uno o più interventi di riparazione.
    Stampare i dettagli delle auto, dei clienti e delle riparazioni effettuate.
*/
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Creazione di alcuni clienti
        Cliente cliente1 = new Cliente(1, "Mario Rossi", "1234567890");
        Cliente cliente2 = new Cliente(2, "Luca Bianchi", "0987654321");

        // Creazione di alcune auto
        Auto auto1 = new Auto("AB123CD", "Fiat Panda", 2015, cliente1);
        Auto auto2 = new Auto("EF456GH", "Volkswagen Golf", 2018, cliente2);

        // Creazione di alcuni interventi di riparazione
        InterventoRiparazione intervento1 = new InterventoRiparazione(1, auto1, "Cambio olio", 100, cliente1);
        InterventoRiparazione intervento2 = new InterventoRiparazione(2, auto2, "Sostituzione freni", 250, cliente2);

        // Mostrare i dettagli degli interventi
        intervento1.mostraDettagliIntervento();
        System.out.println();
        intervento2.mostraDettagliIntervento();
    }
}

