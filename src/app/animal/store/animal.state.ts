import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {GetAnimal} from "./animal.actions";
import {AnimalService} from '../service/animal.service'
import {tap} from "rxjs/operators";

export interface AnimalInterface {
  name: string;
}

export interface AnimalStateModel {
  addAnimal: AnimalInterface[],
  getAnimal: AnimalInterface[]

}
@State<AnimalStateModel>({
  name: "Animal",
  defaults: {
    addAnimal: [],
    getAnimal: [],
  }
})


@Injectable()
export class AnimalState {

  constructor(private service: AnimalService) {
  }

  @Selector()
  static getAnimalSelector(state: AnimalStateModel) {
    return state.getAnimal
  }

  @Action(GetAnimal)
  getAnimalStateAction(ctx: StateContext<AnimalStateModel>){
    return this.service.getAnimal().pipe(tap((item) => {
      const state  = ctx.getState();
      ctx.setState({
        ...state,
        getAnimal: item
      });

    }))
  }
}
