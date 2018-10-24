import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public tasks = [];

  public form: FormGroup = new FormGroup({
    task: new FormControl()
  });

  submit() {
    this.tasks.push(this.form.value.task);
    this.form.reset();
  }

  deleteTask (index: number) {
    this.tasks.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
