"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularPromedio(numeros) {
    let suma = 0;
    // Recorremos el arreglo y sumamos todos los números
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    // Calculamos el promedio
    let promedio = suma / numeros.length;
    return promedio; // devolvemos un number
}
//  un arreglo de 10 números
let misNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Llamamos a la función y guardamos el resultado
let resultado = calcularPromedio(misNumeros);
// Mostramos el promedio en consola
console.log("El promedio es:", resultado);
//# sourceMappingURL=calcularpromedio.js.map