const date = new Date();
date.getHours();

const customDate = new Date(1993, 1, 12);
customDate.getHours();

console.log(date);
console.log(customDate);

let myVar;

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const otherDate = new MyDate(2021, 3, 12)
console.log(otherDate)
