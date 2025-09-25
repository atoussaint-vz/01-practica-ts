// Ejercicio 83: función normal que convierta callback a promesa
function callbackAPromesa(func: (cb: (resultado: string) => void) => void): Promise<string> {
  return new Promise((resolve) => {
    func(resolve);
  });
}

// Ejemplo
callbackAPromesa(cb => setTimeout(() => cb("Resultado desde callback"), 1000)).then(console.log);
