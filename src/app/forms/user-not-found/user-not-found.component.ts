import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-not-found',
  templateUrl: './user-not-found.component.html',
  styleUrls: ['./user-not-found.component.css']
})
export class UserNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToReg () {
    this.router.navigate(['/user-registration']);
  }
}
