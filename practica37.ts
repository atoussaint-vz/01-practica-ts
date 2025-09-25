// Ejercicio 37: función normal + padStart() para rellenar número con ceros hasta 5 dígitos
function rellenarCeros(num: number): string {
  return num.toString().padStart(5, "0");
}

console.log(rellenarCeros(42)); // "00042"
