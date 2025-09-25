// ejercicio 4: forEach() con función flecha para imprimir cada elemento con su índice
const imprimirElementos = (arr: number[]): void => {
  arr.forEach((num, index) => console.log(`Índice ${index}: ${num}`));
};
imprimirElementos([10, 20, 30]);
