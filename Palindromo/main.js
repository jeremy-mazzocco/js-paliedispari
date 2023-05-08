// Chiedi all'utente di inserire una parola
const parolaUtente = prompt("Scrivi una parola");

// Evoca funzione
const risultato = controllaPalidroma(parolaUtente);


// Scrive nel DOM
const selectContainer = document.querySelector('.container');
selectContainer.innerHTML = `<p>${risultato}</p>`;




// MY FUNCTIONS
function controllaPalidroma(stringa) {
    for (let i = 0; i < stringa.length / 2; i++) {
        if (stringa[i] === stringa[stringa.length - 1 - i]) {
            return 'Parola palidroma';
        } else {
            return 'Parola non palindroma';
        }
    }
}
