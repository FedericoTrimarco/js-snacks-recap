
/* 
Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto. 
*/

const btn = document.querySelector('button');
let num = '';
let tot = 0;
let media = 0;

btn.addEventListener('click', function(){
    
    while(num.length !== 4 || isNaN(num)){
        num = prompt('inserire un numero a 4 cifre');
    }

    for(i = 0; i < num.length; i++){
        let numero = parseInt(num[i]);
        tot += numero;
    }
    console.log('stringa:', num);
    console.log('stringa convertita:', parseInt(num));
    console.log('tot cifre stringa:',tot);
        
    const h1 = document.querySelector('h1').innerHTML += `${num}`;

    const h2 = document.querySelector('h2').innerHTML += `${tot}`;
});
