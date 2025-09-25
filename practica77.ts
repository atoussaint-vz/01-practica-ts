// Ejercicio 77: función normal async que consuma fetch() y devuelva JSON
async function obtenerJSON(url: string): Promise<any> {
  const respuesta = await fetch(url);
  return respuesta.json();
}

// ejemplo: obtenerJSON("https://jsonplaceholder.typicode.com/todos/1").then(console.log);
