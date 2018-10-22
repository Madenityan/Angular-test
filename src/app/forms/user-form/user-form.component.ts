import { Component, OnInit } from '@angular/core';
import { User} from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public user: User;
  public formSubmitted: boolean;

  constructor() { }

  ngOnInit() {
    this.formSubmitted = false;
    this.user = {
      id: 1,
      firstName: 'Olga',
      lastName: 'Valikova'
    };
  }
  public cleanButtonClicked() {
    this.user = new User();
  }

  public submitted() {
    this.formSubmitted = true;
  }
}
