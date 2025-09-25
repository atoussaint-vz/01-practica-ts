// Ejercicio 65: función flecha + Object.is() para comparar dos valores
const compararValores = (a: any, b: any): boolean => Object.is(a, b);

console.log(compararValores(10, 10)); // true
console.log(compararValores(NaN, NaN)); // true
