// Ejercicio 79: función normal que encadene promesas con .then()
function encadenarPromesas(): void {
  Promise.resolve(10)
    .then(valor => valor * 2)
    .then(valor => console.log(valor)); // 20
}

encadenarPromesas();
