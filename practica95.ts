// Ejercicio 95: función flecha que use WeakSet
const usarWeakSet = (): WeakSet<object> => {
  const weakSet = new WeakSet<object>();
  const obj = {};
  weakSet.add(obj);
  return weakSet;
};

console.log(usarWeakSet());
