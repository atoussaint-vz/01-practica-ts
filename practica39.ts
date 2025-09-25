// Ejercicio 39: función normal + localeCompare() para comparar dos strings
function compararStrings(str1: string, str2: string): number {
  return str1.localeCompare(str2);
}

console.log(compararStrings("apple", "banana")); // -1
