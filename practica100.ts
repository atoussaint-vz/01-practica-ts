// Ejercicio 100: función normal que use throw para lanzar un error personalizado
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

// lanzarError("Este es un error personalizado");
