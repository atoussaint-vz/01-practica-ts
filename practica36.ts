// Ejercicio 36: función flecha + search()
const primeraVocal = (texto: string): number => texto.search(/[aeiouáéíóú]/i);

console.log(primeraVocal("TypeScript")); // 2 (la "e")
