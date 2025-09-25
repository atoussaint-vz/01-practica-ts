// Ejercicio 19: join() para unir un array en un string separado por guiones
function unirConGuiones(arr: string[]): string {
  return arr.join("-");
}
console.log("19:", unirConGuiones(["rojo", "verde", "azul"])); // "rojo-verde-azul"
