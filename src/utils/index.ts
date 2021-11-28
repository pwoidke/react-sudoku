export * from './constants';
export * from './enum';
export * from './solver';

export function copyByValue(obj: Object) {
  return JSON.parse(JSON.stringify(obj));
}
