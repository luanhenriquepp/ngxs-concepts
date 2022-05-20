import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {AddAnimal} from "./store/animal.actions";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addAnimal(animal: string) {
    this.store.dispatch(new AddAnimal(animal))
  }
}
