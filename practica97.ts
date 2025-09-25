// Ejercicio 97: función flecha que use typeof para devolver el tipo de dato
const tipoDato = (valor: any): string => typeof valor;

console.log(tipoDato(123)); // "number"
console.log(tipoDato("texto")); // "string"
