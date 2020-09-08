interface Human {
  name: string;
  eat(): void;
}

class Preson implements Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {}
  good() {}
}

interface Man extends Human {
  run(): void;
}

interface Child {
  get(): void;
}

interface Boy extends Man, Child {
  age: number
}