/* 
JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.

 Il programma stampa la somma di tutti i numeri inseriti con for

 e opzionalmente con while
 */


let somma = 0;
for(let i = 1; i <= 5; i++){
  let numero = parseInt(prompt(`inserire ${[i]}° numero:`));
  console.log(numero);
  somma += numero; 
  
}
console.log(somma);
