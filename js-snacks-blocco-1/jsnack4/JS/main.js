/* 
JSnack 4
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
 */


let num = [];

for(i = 0; i < 6; i++){
  const numero = parseInt(prompt(`inserire il numero:`));
  console.log(numero);
  if(numero % 2 !== 0){
    num.push(numero);
  }
}
console.log(num);
