// Ejercicio 41: función normal + Math.max() para devolver el mayor de una lista
function maximo(...numeros: number[]): number {
  return Math.max(...numeros);
}

console.log(maximo(10, 20, 30, 5)); // 30
