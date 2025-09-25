// Ejercicio 63: función flecha + Object.fromEntries() para convertir pares clave-valor en objeto
const desdeEntradas = (entradas: [string, any][]): object => Object.fromEntries(entradas);

console.log(desdeEntradas([["a", 1], ["b", 2]])); // {a:1, b:2}
