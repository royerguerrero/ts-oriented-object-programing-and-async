export class MyDate {
  // By default is public
  public year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.addPadding(this.day)}/${this.addPadding(this.month)}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
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

  getDay() {
    return `${this.day}`
  }
}

const customDate = new MyDate(2002, 2, 16);
customDate.add(10, 'days');
console.log(customDate.getDay());
