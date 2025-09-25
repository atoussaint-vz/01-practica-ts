const obtenerDiaSemana = (): number => {
  return new Date().getDay();
};

//usoooo:
const diaSemana: number = obtenerDiaSemana();
console.log(diaSemana); // ejemplo: 2 (Martes)
