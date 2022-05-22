import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AddAnimal, GetAnimals, RemoveAnimal} from "./store/animal.actions";
import {AnimalInterface, AnimalState} from "./store/animal.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  data!: any[]

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  @Select(AnimalState.getAnimalsSelector) getAnimalsObs$: Observable<AnimalInterface[]> | undefined;
  getAnimal() {
    this.store.dispatch(new GetAnimals())
    this.getAnimalsObs$?.subscribe(resp => {
      this.data = resp;
    })
  }

  addAnimal(name: string) {
    this.store.dispatch(new AddAnimal(name , Math.floor(Math.random() * (999 -1) + 1)))
  }

  removeAnimal(id: number) {
    this.store.dispatch(new RemoveAnimal(id))
  }
}
