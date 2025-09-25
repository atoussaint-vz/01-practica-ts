// Ejercicio 94: función normal que use WeakMap
function usarWeakMap(): WeakMap<object, string> {
  const weakMap = new WeakMap<object, string>();
  const obj = {};
  weakMap.set(obj, "valor asociado");
  return weakMap;
}

console.log(usarWeakMap());
