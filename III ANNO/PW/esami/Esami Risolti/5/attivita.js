// FUNZIONE PER CARICARE E VISUALIZZARE LE ATTIVITÀ
// Caricamento dinamico attività da dati.json tramite /tasks
async function caricaAttivita() {
  // Seleziona il contenitore dove inserire le card
  const container = document.getElementById('contenitore-articoli');
  container.innerHTML = '';
  // Richiede la lista delle attività al server
  const response = await fetch('/tasks');
  const tasks = await response.json();
  // Per ogni attività crea una card
  tasks.forEach(task => {
    const card = document.createElement('div');
    // Aggiunge la classe 'completed' se l'attività è completata
    card.className = 'card' + (task.completed ? ' completed' : '');

    // Crea lo span con il testo dell'attività
    const span = document.createElement('span');
    span.className = 'text';
    span.textContent = task.text;
    card.appendChild(span);

    // Crea il pulsante "Completa"
    const btn = document.createElement('button');
    btn.textContent = 'Completa';
    btn.disabled = task.completed; // Disabilita se già completata
    btn.onclick = async () => {
      btn.disabled = true;
      // Richiesta POST per segnare come completata
      await fetch(`/tasks/complete/${task.id}`, { method: 'POST' });
      caricaAttivita(); // Ricarica la lista aggiornata
    };
    card.appendChild(btn);

    // Inserisce la card nel contenitore
    container.appendChild(card);
  });
}

// CARICA LA LISTA DELLE ATTIVITÀ ALL'AVVIO DELLA PAGINA
window.onload = caricaAttivita;