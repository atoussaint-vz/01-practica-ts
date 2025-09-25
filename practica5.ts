// ejercicio 5: find() para devolver el primer número mayor que 50
function primerMayor50(arr: number[]): number | undefined {
  return arr.find(num => num > 50);
}
console.log("5:", primerMayor50([10, 60, 80])); // 60
