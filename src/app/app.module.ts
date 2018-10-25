import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SecondListComponent } from './to-do-list/second-list/second-list.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UserFormComponent,
    ReactiveFormComponent,
    ToDoListComponent,
    SecondListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
