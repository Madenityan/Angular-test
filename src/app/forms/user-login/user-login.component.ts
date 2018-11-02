import { Component, OnInit } from '@angular/core';
import {UserForm} from '../../models/userForm';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public user: UserForm;
  allLoginControl: FormGroup;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.allLoginControl = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submitLogin() {
    console.log('login form submitted');
    console.log(this.allLoginControl, this.allLoginControl.value);
    this.httpService.login(this.allLoginControl.value).subscribe((data: UserForm) => this.user = data);
  }

}
