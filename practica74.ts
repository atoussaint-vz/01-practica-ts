// Ejercicio 74: función flecha que use Promise.race() para obtener la promesa más rápida
const promesaMasRapida = (): Promise<any> => {
  const promesas = [
    new Promise(resolve => setTimeout(() => resolve("Promesa lenta"), 2000)),
    new Promise(resolve => setTimeout(() => resolve("Promesa rápida"), 500))
  ];
  return Promise.race(promesas);
};

promesaMasRapida().then(console.log); // "Promesa rápida"
