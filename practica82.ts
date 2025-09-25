// Ejercicio 82: función flecha que retrase ejecución 3 segundos con promesa
const retrasarTresSegundos = (): Promise<string> =>
  new Promise(resolve => setTimeout(() => resolve("Han pasado 3 segundos"), 3000));

retrasarTresSegundos().then(console.log);
