// Ejercicio 54: función flecha + Number.isInteger() para verificar si es entero
const esEntero = (num: number): boolean => Number.isInteger(num);

console.log(esEntero(10)); // true
console.log(esEntero(10.5)); // false
