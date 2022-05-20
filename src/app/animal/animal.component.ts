import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import { GetAnimal} from "./store/animal.actions";
import {AnimalInterface, AnimalState} from "./store/animal.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  data!: []

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  @Select(AnimalState.getAnimalSelector) getAnimalObs$: Observable<AnimalInterface[]> | undefined;
  getAnimal() {
    this.store.dispatch(new GetAnimal())
    this.getAnimalObs$?.subscribe(resp => resp)
  }
}
