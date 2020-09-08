/**
 * 联合类型
 * @param value 
 * @param padding 
 */
function padLeft(value: string, padding: string | number) {
  if(typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if(typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft('hello wprld', 4);

interface FooA {
  name: string;
  age: number;
}

interface FooB {
  music: string;
  run(): void;
}

let foo: FooA | FooB= {
  name: 'foo',
  age: 12
}