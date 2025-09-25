// Ejercicio 71: función normal que devuelva una Promise que resuelva después de 1 segundo
function promesaUnSegundo(): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve("¡Listo!"), 1000));
}

promesaUnSegundo().then(console.log); // Después de 1 segundo: "¡Listo!"
