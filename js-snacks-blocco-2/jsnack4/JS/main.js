/* 
      JS-SNAK-4
    Crea un array di numeri interi
    e fai la somma di tutti gli elementi che sono in posizione dispari 
*/

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tot = 0;

for(let i = 0; i < numList.length; i++){


    if(i % 2 === 0){
        console.log(numList[i]);
        let numero = numList[i]
        tot += numero
    }
}
console.log(tot);

