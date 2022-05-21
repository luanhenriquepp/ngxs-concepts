import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }
  data = [{
    name: 'Animal 1'
  },
    {
      name: 'Animal 2'
    },
    {
      name: 'Animal 3'
    }]

  getAnimals(): Observable<any> {
    return of(this.data)
  }

  addAnimal(name: string) {
    this.data = Object.assign([], this.data);
    this.data.push({name});
  }
}
