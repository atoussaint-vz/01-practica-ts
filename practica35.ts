// Ejercicio 35: función normal + match()
function encontrarVocales(texto: string): RegExpMatchArray | null {
  return texto.match(/[aeiouáéíóú]/gi);
}

console.log(encontrarVocales("Hola Mundo")); // ["o", "a", "u", "o"]
