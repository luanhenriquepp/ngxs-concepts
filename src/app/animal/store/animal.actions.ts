export class  GetAnimals {
  static readonly type = '[Animal] Get Animal';
  constructor() {}
}

export class  AddAnimal {
  static readonly type = '[Animal] Add Animal';
  constructor(public name: string, public id: string){}
}

export class RemoveAnimal {
  static readonly type = '[Animal] Remove Animal';
  constructor(public id: string) {}
}
