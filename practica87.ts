const obteneryearActual = (): number => {
  return new Date().getFullYear();
};

//impresion del aÑo:
const year: number = obteneryearActual();
console.log(year); // Ejemplo: 2025
