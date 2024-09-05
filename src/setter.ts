export class MyDate {
  constructor(
    public year: number = 1993,
    public _month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type == 'days') {
      this._day += amount;
    } else if (type == 'months') {
      this._month += amount;
    } else if (type == 'years') {
      this.year += amount;
    }
  }

  get day() {
    return `${this._day}`;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  set month(value: number) {
    if (value >= 1 && value <= 12) {
      this._month = value;
    } else {
      throw new Error('Month out of range');
    }
  }
}

const defaultDate = new MyDate();
console.log('default date:', defaultDate.printFormat());
console.log(defaultDate.day);
console.log(defaultDate.isLeapYear);
defaultDate.month = 4;
console.log(defaultDate.printFormat());
