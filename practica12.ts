// Ejercicio 12: splice() para eliminar el tercer elemento
const eliminarTercero = (arr: number[]): number[] => {
  const copia = [...arr];
  copia.splice(2, 1);
  return copia;
};
console.log("12:", eliminarTercero([10, 20, 30, 40])); // [10,20,40]
