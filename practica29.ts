// Ejercicio 29: función normal + replace()
function reemplazarPalabra(texto: string, buscar: string, reemplazo: string): string {
  return texto.replace(buscar, reemplazo);
}

console.log(reemplazarPalabra("Me gusta Java", "Java", "TypeScript")); 
// Me gusta TypeScript
