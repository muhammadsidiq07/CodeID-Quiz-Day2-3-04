function isArraysEqual(arrayA, arrayB) {
    return Array.isArray(arrayA) &&
    Array.isArray(arrayB) &&
    arrayA.length === arrayB.length &&
    arrayA.every((val, index) => val === arrayB[index]);
}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
