import {State} from "@ngxs/store";
import {Injectable} from "@angular/core";


export interface AnimalStateModel {
  addAnimal: [],
  getAnimal: []

}
@State<AnimalStateModel>({
  name: "Animal",
  defaults: {
    addAnimal: [],
    getAnimal: []
  }
})


@Injectable()
export class AnimalState {

}
