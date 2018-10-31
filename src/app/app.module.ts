import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SecondListComponent } from './to-do-list/second-list/second-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatDialogModule} from '@angular/material';
import { MatIconModule} from '@angular/material/icon';
import { ForTestComponent } from './for-test/for-test.component';
import { MatDialogComponent } from './for-test/mat-dialog/mat-dialog.component';
import { ListItemComponent } from './to-do-list/list-item/list-item.component';
import { UserLoginComponent } from './forms/user-login/user-login.component';
import { HttpService} from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UserFormComponent,
    ReactiveFormComponent,
    ToDoListComponent,
    SecondListComponent,
    ForTestComponent,
    MatDialogComponent,
    ListItemComponent,
    UserLoginComponent
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
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  entryComponents: [SecondListComponent]
})
export class AppModule { }
