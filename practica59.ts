// Ejercicio 59: función flecha + Object.assign() para copiar propiedades de un objeto a otro
const copiarPropiedades = (destino: object, fuente: object): object => Object.assign(destino, fuente);

console.log(copiarPropiedades({a: 1}, {b: 2, c: 3})); // {a:1, b:2, c:3}
