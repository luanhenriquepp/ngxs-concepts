import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AddAnimal, GetAnimals, RemoveAnimal} from "./animal.actions";
import {AnimalService} from '../service/animal.service'
import {tap} from "rxjs/operators";

export interface AnimalInterface {
  name: string;
  id: number;
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

  @Action(GetAnimals)
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
    this.service.addAnimal(payload)
    const state = ctx.getState()
    ctx.setState({
      ...state,
      animals: [...state.animals, {...payload}]
    })
  }

  @Action(RemoveAnimal)
  removeAnimalStateAction(ctx: StateContext<AnimalStateModel>, payload: RemoveAnimal) {
    this.service.removeAnimal(payload.id)
    const state = ctx.getState();
    ctx.setState({
      ...state,
      animals: state.animals.filter(resp => resp.id !== payload.id)
    })

  }


}
