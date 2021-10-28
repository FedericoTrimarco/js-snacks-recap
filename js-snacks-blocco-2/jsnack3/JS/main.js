/* 
      JS-SNACK-3
   Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
   lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
 */
const firstName = ['Federico', 'Francesco', 'Vincenzo', 'Luigi', 'Fabio', 'Bruce'];

const firstSurname = ['Trimarco', 'Salvati', 'Pandolfo', 'Abete', 'Borriello', 'Zinno'];

console.log('LISTA INVITATI GATSBY');

for(i = 0; i < 3; i++){

    const randomName = firstName[Math.floor(Math.random() * firstName.length)];

    const randomSurname = firstSurname[Math.floor(Math.random() * firstSurname.length)];

    console.log(`nome invitato: ${randomName} ${randomSurname}`);
}
