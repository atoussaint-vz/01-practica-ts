// Ejercicio 51: función normal + isNaN() para comprobar si un valor no es número
function esNoNumero(valor: any): boolean {
  return isNaN(valor);
}

console.log(esNoNumero("abc")); // true
console.log(esNoNumero(123));   // false
