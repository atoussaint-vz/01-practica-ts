// Ejercicio 72: función flecha async que use await con setTimeout
const esperarUnSegundo = async (): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "He esperado 1 segundo";
};

esperarUnSegundo().then(console.log);
