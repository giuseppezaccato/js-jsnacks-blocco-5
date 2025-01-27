const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }
//task dichiaro variabile vuota
let studentId2;

//task uso .find per cercare in base a element.id chi ha la corrispondenza,
//task per sovrascrivere element nella variabile studentId2
students.find((element) => element.id === 2 ? (studentId2 = element) : null);
console.log(studentId2);

//fix facendo un mix tra snack 5 e 8! potrei evitare anche di dichiare la funzione vuota
const studId2 = students.find((element) => element.id === 2); //unico return true possibile che fa da break!
console.log(studId2);

