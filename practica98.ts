// Ejercicio 98: función normal que use instanceof para comprobar clase de un objeto
function esInstanciaDe(obj: any, clase: any): boolean {
  return obj instanceof clase;
}

console.log(esInstanciaDe(new Date(), Date)); // true
console.log(esInstanciaDe({}, Date)); // false
