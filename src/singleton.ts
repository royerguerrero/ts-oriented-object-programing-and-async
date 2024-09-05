export class MyService {
  static instance: MyService | null = null;
  private constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Deberia entarr una vez');
      MyService.instance = new MyService(name);
    }

    return MyService.instance
  }
}

const randomService = MyService.create('Random Service');
console.log(randomService.name)

const otherService = MyService.create('Another Service');
console.log(otherService.name)

console.log(randomService === otherService);
