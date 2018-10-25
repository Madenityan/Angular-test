import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {SecondListComponent} from './to-do-list/second-list/second-list.component';
import {HeroesComponent} from './heroes/heroes.component';
import {UserFormComponent} from './forms/user-form/user-form.component';
import {ReactiveFormComponent} from './forms/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'toDoList', component: ToDoListComponent},
  { path: 'secondToDo', component: SecondListComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'userForm', component: UserFormComponent},
  { path: 'reactiveForm', component:  ReactiveFormComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

