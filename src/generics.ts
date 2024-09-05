function getValue<myType>(value: myType) {
  const array: myType[] = [value];
  return value;
}

getValue<number>(22).toFixed();
getValue<string>('').toLowerCase();
getValue<number[]>([1, 2, 4]).forEach;
