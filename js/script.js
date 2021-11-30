// Visualizzare con degli alert 5 numeri casuali. 
// creo un array vuoto
let numbersArray = [];
// credo una variabile per ogni numero 
const firstNumber = getRndInteger(1, 100);
alert(firstNumber);
const secondNumber = getRndInteger(1, 100);
alert(secondNumber);
const thirdNumber = getRndInteger(1, 100);
alert(thirdNumber);
const fourthNumber = getRndInteger(1, 100);
alert(fourthNumber);
const fifthNumber = getRndInteger(1, 100);
alert(fifthNumber);

// pusho i cinque numeri all'interno dell' array vuoto
numbersArray.push(firstNumber);
numbersArray.push(secondNumber);
numbersArray.push(thirdNumber);
numbersArray.push(fourthNumber);
numbersArray.push(fifthNumber);

// parte un timer di 30 secondi.
const clock = setTimeout(function() {
    // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    // creo un array vuoto per inserire i numeri corretti dell'utente
    const userArray = [];
    // eseguo un ciclo for per chiedere i numeri all'utente
    for(let i = 0; i < 5; i++){
        // per cinque volte l'utente inserisce un numero
        const userNumber = parseInt( prompt('Inserisci un numero tra quelli visualizzati in precedenza') );
        // se il numero è compreso nell'array contenente i numeri assegnati dal pc e non si ripete, lo pusho nell'array userArray
        if( (numbersArray.includes(userNumber)) && (!userArray.includes(userNumber)) ) {
           
            userArray.push(userNumber);
           
        }
    }
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    alert(`Hai indovinato ${userArray.length} numero/i, i numeri indovinati sono: ${userArray}`);
},30000);

// -------------
// FUNCTIONS
// -------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }