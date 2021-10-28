/*   
     JS-SNACK-2
     Inserisci un numero, se è pari stampa il numero,
     se è dispari stampa il numero successivo
 */

const number = parseInt(prompt('inserisci un numero'));

console.log('numero inserito:', number);

 if(number % 2 !== 0){
    console.log(number + 1);
} else{
    console.log(number);
}