// Ejercicio 80: función flecha que encadene .then() y .catch()
const promesaEncadenada = (): void => {
  Promise.resolve("Éxito")
    .then(console.log)
    .catch(console.error);
};

promesaEncadenada();
