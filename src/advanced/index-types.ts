function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'zhangsan',
  age: 30
}

let callback: string[] = pluck(person, ['name']);
console.log(callback);
