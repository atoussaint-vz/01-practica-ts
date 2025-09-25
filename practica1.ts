function duplicarArray(numeros: number[]): number[] {
  return numeros.map(function (numero: number): number {
    return numero * 2;
  });
}

// 
const miArray: number[] = [1, 2, 3, 4, 5];
const resultado: number[] = duplicarArray(miArray);

console.log(resultado); // [2, 4, 6, 8, 10]
