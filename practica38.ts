// Ejercicio 38: función flecha + padEnd() para rellenar un string con "*" hasta 10 caracteres
const rellenarAsteriscos = (texto: string): string => texto.padEnd(10, "*");

console.log(rellenarAsteriscos("Hola")); // "Hola******"
