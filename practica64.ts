// Definir interfaz para el prototipo
interface Prototipo {
  saludo: () => string;
}

// Función normal + Object.create() con tipado
function heredarObjeto(proto: Prototipo): Prototipo {
  return Object.create(proto);
}

const proto64: Prototipo = { saludo: () => "Hola" };
const obj64 = heredarObjeto(proto64);

console.log(obj64.saludo()); // "Hola"
