export class  AddAnimal {
  static readonly type = '[Zoo] Add Animal';

  constructor(public name: string) {}

}

export class DeleteAnimal {
  static readonly type = '[Zoo] Delete Animal';

  constructor(public name: string) {}
}
