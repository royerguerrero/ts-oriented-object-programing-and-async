export class MyDate {
  // By default is public
  public year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type == 'days') {
      this.day += amount;
    } else if (type == 'months') {
      this.month += amount;
    } else if (type == 'years') {
      this.year += amount;
    }
  }
}

const customDate = new MyDate(2002, 2, 16);
console.log(customDate.printFormat());
customDate.add(10, 'days');
console.log(customDate.day);
console.log(customDate.month);
console.log(customDate.year);
