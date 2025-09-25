// Ejercicio 73: función normal que use Promise.all() con 3 promesas
function ejecutarTodas(): Promise<any[]> {
  const promesas = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
  return Promise.all(promesas);
}

ejecutarTodas().then(console.log); // [1, 2, 3]
