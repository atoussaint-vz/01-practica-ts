// ejercicio 3: reduce() para obtener la suma total de un array
function sumaArray(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log("3:", sumaArray([1, 2, 3, 4])); // 10
