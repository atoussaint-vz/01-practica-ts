// Ejercicio 7: every() para comprobar si todos los elementos son mayores que 10
function todosMayores10(arr: number[]): boolean {
  return arr.every(num => num > 10);
}
console.log("7:", todosMayores10([11, 20, 30])); // true
