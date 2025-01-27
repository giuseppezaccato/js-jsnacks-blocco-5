const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//task map ==>> crea in automatico un ciclo forEach con istruzioni nuovoArray.push(element +1)
const increm = numbers.map((element) => element + 1);
console.log(increm);

//task senza map avrei dovuto fare un for con dentro un push manualmente!
const increm1 = [];
for (let i = 0; i < numbers.length; i++) {
    increm1.push(numbers[i] + 1)
};
console.log(increm1);


