// Ejercicio 75: función normal que use Promise.any()
function primeraPromesaExitosa(): Promise<any> {
  const promesas = [
    Promise.reject("Error 1"),
    Promise.resolve("Éxito"),
    Promise.reject("Error 2")
  ];
  return Promise.any(promesas);
}

primeraPromesaExitosa().then(console.log); // "Éxito"
