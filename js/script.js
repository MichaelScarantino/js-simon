// Visualizzare con degli alert 5 numeri casuali. 
// creo un array di 5 numeri random diversi
const numbersGame = 5;
const numbersRandom = getRandomNumberArray(numbersGame);
console.log(numbersRandom);
// visualizzo i numeri in un alert
numbersRandom.forEach(element => {
    alert(element);
});

// parte un timer di 30 secondi.
const clock = setTimeout(function() {
    // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    // creo un array vuoto per inserire i numeri corretti dell'utente
    const userArray = [];
    // eseguo un ciclo for per chiedere i numeri all'utente
    for(let i = 0; i < numbersGame; i++){
        // per cinque volte l'utente inserisce un numero
        const userNumber = parseInt( prompt('Inserisci un numero tra quelli visualizzati in precedenza') );
        // se il numero è compreso nell'array contenente i numeri assegnati dal pc e non si ripete, lo pusho nell'array userArray
        if( (numbersRandom.includes(userNumber)) && (!userArray.includes(userNumber)) ) {
           
            userArray.push(userNumber);
           
        }
    }
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    if(userArray.length > 1) {
        alert(`Hai indovinato ${userArray.length} numeri, i numeri indovinati sono: ${userArray}`);
    } else {
        alert(`Hai indovinato ${userArray.length} numero, il numero indovinato è: ${userArray}`);
    }
    
},3000);

// -------------
// FUNCTIONS
// -------------
// funzione che genera un array di numeri casuali non ripetuti
function getRandomNumberArray(numberOfItems){
    let numbersArray = [];
    while(numbersArray.length < numberOfItems) {
        const newNumber = getRndInteger(1, 100);
        if(!numbersArray.includes(newNumber)) {
            numbersArray.push(newNumber);
        }
    }
    return numbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }