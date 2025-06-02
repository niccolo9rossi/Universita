
/*Classe Cliente:
Attributi: id, nome, telefono
Metodi:
    Costruttore per inizializzare i campi.
    Metodi getter e setter per gli attributi.
    Un metodo mostraDettagli() che stampa i dettagli del cliente.*/
public class Cliente {
    private int id;
    private String nome;
    private String telefono;
    public Cliente(int id, String nome, String telefono){
        this.id=id;
        this.nome=nome;
        this.telefono=telefono;

    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }


    public String getTelefono() {
        return telefono;
    }


    public void mostraDettagli(){
        System.out.println("Cliente: "+nome+" "+telefono);
    }
}
