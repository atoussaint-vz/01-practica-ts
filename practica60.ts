// Ejercicio 60: función normal + Object.freeze() para evitar modificaciones
function congelarObjeto(obj: object): object {
  return Object.freeze(obj);
}

const obj60 = {a: 1};
congelarObjeto(obj60);
obj60['a'] = 99; // No cambiará
console.log(obj60); // {a: 1}
