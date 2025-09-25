// Ejercicio 68: función normal + for...in para recorrer propiedades
function recorrerPropiedades(obj: object): void {
  for (const clave in obj) {
    console.log(`${clave}: ${obj[clave as keyof typeof obj]}`);
  }
}

recorrerPropiedades({a: 1, b: 2});
