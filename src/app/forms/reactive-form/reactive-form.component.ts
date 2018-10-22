import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  nameControl: FormControl;
  fullNameControl: FormGroup;

  constructor() { }

  ngOnInit() {
    this.nameControl = new FormControl('John', [myValidator]);
    this.nameControl.valueChanges.subscribe((value => console.log(value)));
    this.nameControl.statusChanges.subscribe((status) => {
      console.log(this.nameControl.errors);
      console.log(status);
    });

    this.fullNameControl = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });

    this.fullNameControl.valueChanges.subscribe((value => console.log(value)));
  }
}

function myValidator(formControl: FormControl) {
  if (formControl.value.length < 3) {
    return {myValidator: {message: 'errors'}};
  }
  return null;
}
