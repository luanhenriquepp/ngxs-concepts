import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  getAnimal(): Observable<any> {
    return of([
      {
      name: 'Animal 1'
      },
      {
        name: 'Animal 2'
      },
      {
        name: 'Animal 3'
      }
    ])
  }
}
