// Ejercicio 22: includes() para verificar si un texto contiene cierta palabra
const contienePalabra = (texto: string, palabra: string): boolean => texto.includes(palabra);

console.log("22:", contienePalabra("Me gusta el fútbol", "fútbol")); // true
