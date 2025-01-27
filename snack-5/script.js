const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


// task logica filter ==>> simile a .map ma restituisce newArray.length < oldArray.length 
//task appunto perchè l'IF interno fa da filtro nel ciclo
const pari = nums.filter((element) => {
    if (element % 2 === 0) {
        return true
    }
});
console.log(pari);

//fix .filter EASIER ==>> inserendo la condizione nell'IF il .filter di per sè 
//fix restituirà solo gli elementi che la verificano(senza per forza dover dare un RETURN) 
//fix e usando TERNARY OPERATOR posso eliminare anche la {} riducendo sensibilmente il codice!
const pariB = nums.filter((element) => element % 2 === 0); //--- senza return nè ? () ---
console.log(pariB);

