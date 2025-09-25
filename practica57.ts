// Ejercicio 57: función flecha + Object.values() para obtener valores
const obtenerValores = (obj: object): any[] => Object.values(obj);

console.log(obtenerValores({a: 1, b: 2, c: 3})); // [1,2,3]
