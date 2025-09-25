// Ejercicio 61: función flecha + Object.seal() para sellar un objeto
const sellarObjeto = (obj: object): object => Object.seal(obj);

const obj61 = {a: 1};

sellarObjeto(obj61);
obj61['a'] = 99; // Se permite modificar valores existentes

console.log(obj61); // {a: 99}
