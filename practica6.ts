// Ejercicio 6: some() para verificar si hay algún número negativo
const hayNegativos = (arr: number[]): boolean => arr.some(num => num < 0);
console.log("6:", hayNegativos([1, -2, 3])); // true
