import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {SecondListComponent} from './to-do-list/second-list/second-list.component';
import {HeroesComponent} from './heroes/heroes.component';
import {UserFormComponent} from './forms/user-form/user-form.component';
import {ReactiveFormComponent} from './forms/reactive-form/reactive-form.component';
import {ForTestComponent} from './for-test/for-test.component';
import {MatDialogComponent} from './for-test/mat-dialog/mat-dialog.component';
import {ListItemComponent} from './to-do-list/list-item/list-item.component';
import {UserRegistrationComponent} from './forms/user-registration/user-registration.component';
import {UserLoginComponent} from './forms/user-login/user-login.component';
import {AuthGuard} from './guards/auth.guard';
import {ExitRegistrationGuard} from './guards/exit.registration.guard';


const routes: Routes = [
  { path: '', redirectTo: 'user-login', pathMatch: 'full' },
  { path: 'toDoList', component: ToDoListComponent, canActivate: [AuthGuard]},
  { path: 'secondToDo', component: SecondListComponent},
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard]},
  { path: 'userForm', component: UserFormComponent},
  { path: 'reactiveForm', component:  ReactiveFormComponent },
  { path: 'forTest', component:  ForTestComponent, canActivate: [AuthGuard] },
  { path: 'matDialog', component:  MatDialogComponent },
  { path: 'listItem', component:  ListItemComponent },
  { path: 'user-registration', component:  UserRegistrationComponent, canDeactivate: [ExitRegistrationGuard]},
  { path: 'user-login', component:  UserLoginComponent},
];



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}

