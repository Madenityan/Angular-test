import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserLogin} from '../../models/userLogin';
import { HttpService} from '../../http.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  allControl: FormGroup;
  public user: UserLogin;
  public formSubmitted: boolean;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formSubmitted = false;

    this.user = {
      id: 0,
      name: '',
      email: '',
      password: ''
    };

  this.allControl = this.formBuilder.group({
    name: [''],
    mail: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  // this.allControl.valueChanges.subscribe((value => console.log(value)));
  }

  // відправка даних на сервер
  public submit() {
    console.log(this.allControl, this.allControl.value);
    this.httpService.register(this.allControl.value).subscribe((data: UserLogin) => this.user = data);
    this.allControl.reset();
    this.formSubmitted = true;
  }
}
