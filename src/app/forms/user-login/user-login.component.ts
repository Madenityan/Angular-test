import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserLogin} from '../../models/userLogin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  allControl: FormGroup;
  public user: UserLogin;
  public formSubmitted: boolean;

  constructor() { }

  ngOnInit() {
    this.formSubmitted = false;

    this.user = {
      id: 1,
      name: '',
      email: '',
      pass: ''
    };

  this.allControl = new FormGroup({
    nameControl: new FormControl(),
    emailControl: new FormControl(),
    passControl: new FormControl()
  });

  this.allControl.valueChanges.subscribe((value => console.log(value)));

  }

  // відправка даних на сервер
  public submitted() {
    this.formSubmitted = true;
  }
}
