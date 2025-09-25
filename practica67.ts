// Ejercicio 67: función flecha + in para comprobar si existe una propiedad
const existePropiedad = (obj: object, clave: string): boolean => clave in obj;

console.log(existePropiedad({a: 1}, "a")); // true
console.log(existePropiedad({a: 1}, "b")); // false
