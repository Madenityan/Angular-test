import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserForm} from '../../models/userForm';
import { HttpService} from '../../http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {

  saved = false;

  allControl: FormGroup;
  public user: UserForm;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.user = {
      id: 0,
      name: '',
      email: '',
      password: ''
    };

  this.allControl = this.formBuilder.group({
    name: [''],
    mail: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordConf: ['', [Validators.required]]
  });

  // this.allControl.valueChanges.subscribe((value => console.log(value)));
  }

  // відправка даних на сервер
  public submit() {
    console.log(this.allControl, this.allControl.value);
    this.httpService.register(this.allControl.value).subscribe((data: UserForm) => this.user = data);
    this.allControl.reset();
  }

  canDeactivate(): boolean | Observable<boolean> {

    if (!this.saved) {
      return confirm('Вы хотите покинуть страницу?');
    } else {
      return true;
    }
  }

}
