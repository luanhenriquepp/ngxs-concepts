import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimalComponent} from "./animal/animal.component";

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
