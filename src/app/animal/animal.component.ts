import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AddAnimal, GetAnimals, RemoveAnimal} from "./store/animal.actions";
import {AnimalInterface, AnimalState} from "./store/animal.state";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  data!: any[]
  animalFormControl: FormControl =  new FormControl();

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  @Select(AnimalState.getAnimalsSelector)
  getAnimalsObs$!: Observable<AnimalInterface[]>;
  getAnimal() {
    this._store.dispatch(new GetAnimals())
    this.getAnimalsObs$?.subscribe((resp: any) => {
      this.data = resp;
    })
  }

  addAnimal(name: string) {
    this._store.dispatch(new AddAnimal(name , uuidv4()))
    this.animalFormControl.setValue(null)
  }

  removeAnimal(id: string) {
    this._store.dispatch(new RemoveAnimal(id))
  }
}
