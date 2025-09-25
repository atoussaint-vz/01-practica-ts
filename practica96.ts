// Ejercicio 96: función normal que use Symbol() para crear un identificador único
function crearIdentificadorUnico(): symbol {
  return Symbol("id");
}

const id1 = crearIdentificadorUnico();
const id2 = crearIdentificadorUnico();

console.log(id1 === id2); // false
console.log(id1.description); // "id"
