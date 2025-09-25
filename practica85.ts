// Ejercicio 85: función normal que use AbortController con fetch
async function fetchConAbortController(url: string): Promise<void> {
  const controlador = new AbortController();
  const idTimeout = setTimeout(() => controlador.abort(), 2000);

  try {
    const respuesta = await fetch(url, { signal: controlador.signal });
    console.log(await respuesta.json());
  } catch (error) {
    console.error("Error o fetch abortado:", error);
  } finally {
    clearTimeout(idTimeout);
  }
}

// fetchConAbortController("https://jsonplaceholder.typicode.com/todos/1");
