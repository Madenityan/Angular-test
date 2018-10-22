import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UserFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
