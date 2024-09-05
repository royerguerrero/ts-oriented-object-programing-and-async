export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  barking(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('🐕');
    }
  }
}

const max = new Dog('Max', 'Roy');
max.move();
console.log(max.greeting());
max.barking(3);
console.log(max.owner);
