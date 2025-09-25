// Ejercicio 56: función normal + Object.keys() para obtener claves de objeto
function obtenerClaves(obj: object): string[] {
  return Object.keys(obj);
}

console.log(obtenerClaves({a: 1, b: 2, c: 3})); // ["a","b","c"]
