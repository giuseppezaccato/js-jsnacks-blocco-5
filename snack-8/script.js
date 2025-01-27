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

//task parto con la variabile vuota
let classeMarcoLanci = null

//task cerco la variabile con .find + ternary
//task sostituendo la variabile con element.class una volta trovata
students.find((element) => element.name === 'Marco Lanci' ? (classeMarcoLanci = element.class) : null);
console.log(classeMarcoLanci);