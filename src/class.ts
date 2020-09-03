class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  };
  greet() {
    return this.greeting + ' world';
  }
}
console.log(Greeter.prototype);
let greeter: Greeter = new Greeter('hello');

console.log(greeter.greet());

class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  move(distance: number = 0) {
    console.log(`Animal mover ${distance} m.`)
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance = 5) {
    console.log('dog');
    super.move(distance);
  }
  bark() {
    console.log('woof woof!');
  }
}

const dog = new Dog('This is Dog');
dog.bark();
dog.move();
dog.bark();
console.log(dog.name);

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d);