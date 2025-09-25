// Ejercicio 78: función flecha que maneje errores con try...catch
const manejarErrores = async (url: string): Promise<void> => {
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    console.log(data);
  } catch (error) {
    console.error("Error capturado:", error);
  }
};

// manejarErrores("https://jsonplaceholder.typicode.com/todos/1");
