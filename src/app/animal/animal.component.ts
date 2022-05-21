import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AddAnimal, GetAnimal} from "./store/animal.actions";
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
    this.store.dispatch(new GetAnimal())
    this.getAnimalsObs$?.subscribe(resp => {
      console.log(resp)
      this.data = resp;
    })
  }

  addAnimal(name: string) {
    this.store.dispatch(new AddAnimal(name))
    this.getAnimal();
  }
}
