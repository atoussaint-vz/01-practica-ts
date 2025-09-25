function obtenerMesActual(): number {
  return new Date().getMonth() + 1; // +1 porque getMonth() empieza en 0
}

// uso:
const mes: number = obtenerMesActual();
console.log(mes); // ejemplo: 9 (si estamos en septiembre)
