// Ejercicio 81: función normal que simule una API falsa con promesas
function apiFalsa(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos recibidos de API falsa"), 1000);
  });
}

apiFalsa().then(console.log); // Después de 1 segundo: "Datos recibidos de API falsa"
