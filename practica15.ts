// Ejercicio 15: flatMap() para duplicar y expandir un array de números
function duplicarExpandir(arr: number[]): number[] {
  return arr.flatMap(num => [num, num * 2]);
}
console.log("15:", duplicarExpandir([1, 2, 3])); // [1,2,2,4,3,6]
