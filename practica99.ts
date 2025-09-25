// Ejercicio 99: función flecha que use try...catch para manejar errores
const manejarErrores = (func: () => void): void => {
  try {
    func();
  } catch (error) {
    console.error("Error capturado:", error);
  }
};

manejarErrores(() => { throw new Error("Algo salió mal"); });
