import { Component, OnInit } from '@angular/core';
import {UserForm} from '../../models/userForm';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../http.service';
import { Router} from '@angular/router';
import {UserRegistrationComponent} from '../user-registration/user-registration.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public user: UserForm;
  allLoginControl: FormGroup;

  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.allLoginControl = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  saveToken (data) {
    localStorage.setItem('token', data.data.token);
}


  routing () {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/toDoList']);
    } else {
      this.router.navigate(['/forTest']);
    }
  }


  submitLogin() {
    console.log(this.allLoginControl, this.allLoginControl.value);
    this.httpService.login(this.allLoginControl.value).subscribe((data: UserForm) => {
      this.user = data;
      this.saveToken(data);
      this.routing();
    });
  }



}
