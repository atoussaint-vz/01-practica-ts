// Ejercicio 11: slice() para obtener los primeros 5 elementos
function primerosCinco(arr: number[]): number[] {
  return arr.slice(0, 5);
}
console.log("11:", primerosCinco([1, 2, 3, 4, 5, 6, 7])); // [1,2,3,4,5]
