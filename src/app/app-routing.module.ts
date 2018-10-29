import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {SecondListComponent} from './to-do-list/second-list/second-list.component';
import {HeroesComponent} from './heroes/heroes.component';
import {UserFormComponent} from './forms/user-form/user-form.component';
import {ReactiveFormComponent} from './forms/reactive-form/reactive-form.component';
import {ForTestComponent} from './for-test/for-test.component';
import {MatDialogComponent} from './for-test/mat-dialog/mat-dialog.component';


const routes: Routes = [
  { path: '', redirectTo: '/userForm', pathMatch: 'full' },
  { path: 'toDoList', component: ToDoListComponent},
  { path: 'secondToDo', component: SecondListComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'userForm', component: UserFormComponent},
  { path: 'reactiveForm', component:  ReactiveFormComponent },
  { path: 'forTest', component:  ForTestComponent },
  { path: 'matDialog', component:  MatDialogComponent },
];



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

