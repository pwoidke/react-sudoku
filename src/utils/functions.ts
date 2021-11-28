export function copyByValue(obj: Object) {
  return JSON.parse(JSON.stringify(obj));
}

export function deepCompare(obj1: Object, obj2: Object): boolean {
  return JSON.stringify(obj1) !== JSON.stringify(obj2);
}
