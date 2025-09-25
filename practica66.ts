// Ejercicio 66: función normal + delete para eliminar una propiedad
function eliminarPropiedad(obj: object, clave: string): void {
  delete obj[clave as keyof typeof obj];
}

const obj66 = {a: 1, b: 2};
eliminarPropiedad(obj66, "a");
console.log(obj66); // {b: 2}
