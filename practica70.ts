// Ejercicio 70: función normal + JSON.parse() para convertir un string a objeto
function stringAObjeto(jsonStr: string): object {
  return JSON.parse(jsonStr);
}

console.log(stringAObjeto('{"a":1,"b":2}')); // { a: 1, b: 2 }
