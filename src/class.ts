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

abstract class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  move(distance: number = 0) {
    console.log(`Animal mover ${distance} m.`)
  }
  protected get() {}
  static food: string = "food";
  abstract sleep(): void;
}

class Dog extends Animal {
  color: string;
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
    this.get();
  }
  move(distance = 5) {
    console.log('dog');
    super.move(distance);
  }
  bark() {
    console.log('woof woof!');
  }
  sleep() {
    console.log('this is dog');
  }
}

class cat extends Animal {
  sleep() {
    console.log('this is cat');
  }
}

const dog = new Dog('This is Dog', 'red');
dog.bark();
dog.move();
dog.bark();
console.log(dog.name);
console.log(Dog.food);
console.log(Animal.food);


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

class Work {
  good() {
    return this;
  }
  food() {
    return this;
  }
}
new Work().food().good();
class My extends Work {
  next() {
    return this;
  }
}

console.log(new My().next().good().next().food());
