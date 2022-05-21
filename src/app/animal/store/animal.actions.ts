export class  GetAnimals {
  static readonly type = '[Animal] Get Animal';
  constructor() {}
}

export class  AddAnimal {
  static readonly type = '[Animal] Add Animal';
  constructor(public name: string) {}
}
