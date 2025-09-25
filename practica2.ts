const obtenerNumerosPares = (numeros: number[]): number[] => {
  return numeros.filter((numero: number) => numero % 2 === 0);
};

// uso:
const lista: number[] = [1, 2, 3, 4, 5, 6];
const pares: number[] = obtenerNumerosPares(lista);

console.log(pares); // [2, 4, 6]
