import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AddAnimal, GetAnimal} from "./animal.actions";
import {AnimalService} from '../service/animal.service'
import {tap} from "rxjs/operators";

export interface AnimalInterface {
  name: string;
}

export interface AnimalStateModel {
  animals: AnimalInterface[]
}

@State<AnimalStateModel>({
  name: "Animal",
  defaults: {
    animals: [],
  }
})

@Injectable()
export class AnimalState {

  constructor(private service: AnimalService) {
  }

  @Selector()
  static getAnimalsSelector(state: AnimalStateModel) {
    return state.animals
  }

  @Action(GetAnimal)
  getAnimalStateAction(ctx: StateContext<AnimalStateModel>){
    return this.service.getAnimals().pipe(tap((item) => {
      const state  = ctx.getState();
      ctx.setState({
        ...state,
        animals: item
      });

    }))
  }

  @Action(AddAnimal)
  addAnimalStateAction(ctx: StateContext<AnimalStateModel>, payload: AddAnimal) {
    this.service.addAnimal(payload.name)
    const state = ctx.getState()
    ctx.setState({
      ...state,
      animals: [...state.animals, {name: payload.name}]
    })
  }


}
