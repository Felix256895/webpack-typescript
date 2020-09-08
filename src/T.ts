function test<T>(value: T): T {
  return value;
}

test<string[]>(['a']);
test([1,2,3]);

type Test = <T>(value: T) => T;
let test1: Test = test;

// 范型默认类型
interface Test2<T = number> {
  <T>(value: T): T
}

let test3: Test2<string> = test;

test('2');


class Demo<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let D = new Demo<string>();
D.run('123');
let P = new Demo();
P.run(123);

interface Len {
  length: number;
}

function demo2<T extends Len>(value: T): T {
  console.log(value, value.length);
  return value;
}

demo2([1, 2, 3]);
demo2('string');