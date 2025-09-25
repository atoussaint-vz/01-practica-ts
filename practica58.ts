// Ejercicio 58: función normal + Object.entries() para obtener pares clave-valor
function obtenerEntradas(obj: object): [string, any][] {
  return Object.entries(obj);
}

console.log(obtenerEntradas({a: 1, b: 2, c: 3})); // [["a",1],["b",2],["c",3]]
