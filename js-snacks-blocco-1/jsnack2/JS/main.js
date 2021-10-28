
/* JSnack 2
    L’utente inserisce due parole in successione, con due prompt.
    Il software stampa prima la parola più corta, poi la parola più lunga 
*/

let parola1 = prompt('inserimento prima parola:');
console.log(parola1, parola1.length);
let parola2 = prompt('inserimento seconda parola:');
console.log(parola2, parola2.length);

if(parola1.length < parola2.length){
  console.log(`"${parola1}" ha meno caratteri di "${parola2}"`);
} else if(parola2.length < parola1.length){
  console.log(`"${parola2}" ha meno caratteri di "${parola1}"`);
} else{
  console.log(`"${parola1}" e "${parola2}" hanno lo stesso numero di caratteri`);
}

