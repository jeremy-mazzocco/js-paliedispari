// Chiedi all'utente di inserire una parola
const parolaUtente = prompt("Scrivi una parola");

// Evoca funzione
const reversedStringa = controllaPalindroma(parolaUtente);

// Confrota risultato
let risultato;
if (parolaUtente === reversedStringa) {
    risultato = "La parola e' palindroma"

} else {
    risultato = "La parola non e' palindroma"
}

// Scrive nel DOM
const selectContainer = document.querySelector('.container');
selectContainer.innerHTML = `<p>${risultato}</p>`;



// MY FUNCTIONS
function controllaPalindroma(stringa) {
    // rompi la stringa in array
    const stringaArray = stringa.split('');
    // ribalta l'array
    const reverseArray = stringaArray.reverse();
    // ricomponi l'array in stringa
    const reverseStringa = reverseArray.join('');

    return reverseStringa;
}








// function controllaPalidroma(stringa) {
//     for (let i = 0; i < stringa.length / 2; i++) {
//         if (stringa[i] === stringa[stringa.length - 1 - i]) {
//             return 'Parola palidroma';
//         } else {
//             return 'Parola non palindroma';
//         }
//     }
// }
