// Ejercicio 8: includes() para saber si un valor existe en el array
const existeValor = (arr: number[], valor: number): boolean => arr.includes(valor);

console.log("8:", existeValor([1, 2, 3], 2)); // true
console.log("8:", existeValor([1, 2, 3], 5)); // false
