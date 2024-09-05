console.log(Math.PI);
console.log(Math.max(2, 34, 5, 67, 4, 0));
console.log('-----');

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(2, 3, 4, 5));
console.log(MyMath.max(-2, -87, -199));
