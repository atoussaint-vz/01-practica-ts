// Ejercicio 69: función flecha + JSON.stringify() para convertir un objeto a string
const objetoAString = (obj: object): string => JSON.stringify(obj);

console.log(objetoAString({a: 1, b: 2})); // '{"a":1,"b":2}'
