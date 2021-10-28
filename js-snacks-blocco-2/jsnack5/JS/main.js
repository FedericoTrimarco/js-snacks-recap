/* 
     JS-SNACL-5
     Crea due array che hanno un numero di elementi diversi.
     Aggiungi elementi casuali all’array che ha meno elementi,
     fino a quando ne avrà tanti quanti l’altro.
*/

const array1 = [1, 2, 3, 4, 5, 6];

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('elementi array1:', array1);
console.log('elementi array2:', array2);

console.log('lunghezza elementi array1:', array1.length);
console.log('lunghezza elementi array2:', array2.length);

while(array1.length !== array2.length){

     if(array1.length < array2.length){
          array1.push('a');
     } else {
          array2.push('a');
     }
}
console.log('AFTER CICLE --> elementi array1:', array1);
console.log('AFTER CICLE --> elementi array2:', array2);

console.log('AFTER CICLE --> lunghezza elementi array1:', array1.length);
console.log('AFTER CICLE --> lunghezza elementi array2:', array2.length);