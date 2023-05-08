// Chiedi all'utente di scommettere pari o dispari
const scomessaUtente = prompt("Scrivi se vuoi che il risultato sia pari o dispari");

// Chiedi all'utente un numero
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Ottieni dal PC un numero, con una funzione
const numeroPC = numeroRandom(1, 5);

// Somma i due numeri, con una funzione
const sommaDeiDueNumeri = somma(numeroUtente, numeroPC);

// Controlla se la somma dei due numeri e' pari o dispari, con una funzione
const pariODispari = controllaPariODispari(sommaDeiDueNumeri);

// Controlla il vincitore, con una funzione
const vincitore = controlloStringa(scomessaUtente, pariODispari);


// Scrivi sul DOM
const selectContainer = document.querySelector('.container');
selectContainer.innerHTML += `<p>Il tuo numero: ${numeroUtente}</p>`;
selectContainer.innerHTML += `<p>Il numero del PC: ${numeroPC}</p>`;
selectContainer.innerHTML += `<p>La somma e': ${sommaDeiDueNumeri}</p>`;
selectContainer.innerHTML += `<p>La soma dei numeri e' un numero: ${pariODispari}</p>`;
selectContainer.innerHTML += `<p>${vincitore}</p>`;



// MY FUNCTIONS
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function somma(num1, num2) {
    return num1 + num2;
}

function controllaPariODispari(num) {
    if (num % 2 === 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

function controlloStringa(stringa1, stringa2) {
    if (stringa1 === stringa2) {
        return 'Hai vinto!'
    } else {
        return 'Hai perso!'
    }
}