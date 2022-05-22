import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AnimalInterface} from "../store/animal.state";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }
  data = [{
    name: 'Animal 1',
    id: 1
  },
    {
      name: 'Animal 2',
      id: 2
    },
    {
      name: 'Animal 3',
      id: 3
    }]

  getAnimals(): Observable<any> {
    return of(this.data)
  }

  addAnimal(animal: any) {
    this.data = Object.assign([], this.data);
    this.data.push(animal);
  }

  removeAnimal(id: number) {
    this.data = this.data.filter(resp => resp.id !== id);
  }
}
