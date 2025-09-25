// Ejercicio 42: función flecha + Math.min() para devolver el menor de una lista
const minimo = (...numeros: number[]): number => Math.min(...numeros);

console.log(minimo(10, 20, 30, 5)); // 5
