// Ejercicio 92: función normal que use Map para contar palabras
function contarPalabras(texto: string): Map<string, number> {
  const palabras = texto.split(/\s+/);
  const mapa = new Map<string, number>();

  palabras.forEach(palabra => {
    const cuenta = mapa.get(palabra) ?? 0;
    mapa.set(palabra, cuenta + 1);
  });

  return mapa;
}

console.log(contarPalabras("hola mundo hola")); // Map { 'hola' => 2, 'mundo' => 1 }
