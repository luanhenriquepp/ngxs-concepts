import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AddAnimal, GetAnimals, RemoveAnimal} from "./animal.actions";
import {AnimalService} from '../service/animal.service'
import {tap} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface AnimalInterface {
  name: string;
  id: string;
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

  constructor(private _service: AnimalService, private _snackBar: MatSnackBar) {
  }

  @Selector()
  static getAnimalsSelector(state: AnimalStateModel) {
    return state.animals
  }

  @Action(GetAnimals)
  getAnimalStateAction(ctx: StateContext<AnimalStateModel>){
    return this._service.getAnimals().pipe(tap((item) => {
      const state  = ctx.getState();
      ctx.setState({
        ...state,
        animals: item
      });

    }))
  }

  @Action(AddAnimal)
  addAnimalStateAction(ctx: StateContext<AnimalStateModel>, payload: AddAnimal) {
    this._service.addAnimal(payload).subscribe(resp => {
      return this._snackBar.open(resp.message, 'close')
    })
    const state = ctx.getState()
    ctx.setState({
      ...state,
      animals: [...state.animals, {...payload}]
    })
  }

  @Action(RemoveAnimal)
  removeAnimalStateAction(ctx: StateContext<AnimalStateModel>, payload: RemoveAnimal) {
    this._service.removeAnimal(payload.id).subscribe(resp => {
      return this._snackBar.open(resp.message, 'close')
    })
    const state = ctx.getState();
    ctx.setState({
      ...state,
      animals: state.animals.filter(resp => resp.id !== payload.id)
    })

  }


}
