// Ejercicio 90: función normal que formatee fecha con toLocaleDateString()
function formatearFecha(fecha: Date, locale: string = "es-ES"): string {
  return fecha.toLocaleDateString(locale);
}

console.log(formatearFecha(new Date())); // Ejemplo: "25/9/2025"
