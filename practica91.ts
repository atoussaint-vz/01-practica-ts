function contarPalabras(texto: string): Map<string, number> {
  const mapaPalabras = new Map<string, number>();
  const palabras = texto.toLowerCase().split(" "); // divide en palabras y pasa todo a minúscula

  for (const palabra of palabras) {
    if (mapaPalabras.has(palabra)) {
      mapaPalabras.set(palabra, mapaPalabras.get(palabra)! + 1);
    } else {
      mapaPalabras.set(palabra, 1);
    }
  }

  return mapaPalabras;
}

// Ejemplo de uso:
const resultado = contarPalabras("llegamos a senegal y nos reciben");
console.log(resultado);
