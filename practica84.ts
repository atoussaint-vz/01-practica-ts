// Ejercicio 84: función flecha que use setInterval() dentro de promesa
const intervaloPromesa = (): Promise<string> =>
  new Promise(resolve => {
    const intervalo = setInterval(() => {
      clearInterval(intervalo);
      resolve("Intervalo completado");
    }, 1000);
  });

intervaloPromesa().then(console.log);
