const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//task due array inizializzati vuoti
const minore15 = [];
const maggiore15 = [];

//task evitando di dover usare .filter su due array!
zucchine.filter((element) => (element.length <= 15) ? (minore15.push(element)) : (maggiore15.push(element)));
console.log(minore15, maggiore15);

//fix concettualmente è sbagliato perchè il filter in automatico pusha nel nuovo array!
//fix sarebbe piu pulito fare due filter in questo modo usando SOLO la condizione
const minore15a = zucchine.filter(element => element.length <= 15);
const maggiore15a = zucchine.filter(element => element.length > 15);
console.log(minore15a, maggiore15a);


// //! versione estesa/sdoppiata 
// const minore15b = [];
// zucchine.filter((element) => {
//   if (element.length <= 15) {
//     minore15b.push(element)
//   }
// });
// console.log(minore15b);

// const maggiore15b = [];
// zucchine.filter((element) => {
//   if (element.length > 15) {
//     maggiore15b.push(element)
//   }
// });
// console.log(maggiore15b);







