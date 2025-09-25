// Ejercicio 62: función normal + Object.hasOwnProperty() para verificar si existe una clave
function tieneClave(obj: object, clave: string): boolean {
  return obj.hasOwnProperty(clave);
}

console.log(tieneClave({a: 1, b: 2}, "b")); // true
console.log(tieneClave({a: 1, b: 2}, "c")); // false
