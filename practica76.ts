// Ejercicio 76: función flecha que use Promise.allSettled()
const todasPromesas = (): Promise<any[]> => {
  const promesas = [
    Promise.resolve("Éxito"),
    Promise.reject("Error"),
    Promise.resolve("Otro éxito")
  ];
  return Promise.allSettled(promesas);
};

todasPromesas().then(console.log);
// [{status: "fulfilled", value: "Éxito"}, {status: "rejected", reason: "Error"}, {status: "fulfilled", value: "Otro éxito"}]
