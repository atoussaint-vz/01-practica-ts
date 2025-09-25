// Ejercicio 93: función flecha que use Set para eliminar duplicados de un array
const eliminarDuplicados = <T>(arr: T[]): T[] => Array.from(new Set(arr));

console.log(eliminarDuplicados([1, 2, 2, 3, 3, 3])); // [1, 2, 3]
