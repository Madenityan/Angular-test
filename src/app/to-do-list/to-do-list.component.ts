import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SecondListComponent} from './second-list/second-list.component';

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

  constructor( private router: Router, public dialog: MatDialog) {

  }

  submit() {
    this.tasks.push(this.form.value.task);
    this.form.reset();
  }

  deleteTask(index: number) {
    let dialog: MatDialogRef<SecondListComponent>;
    dialog = this.dialog.open(SecondListComponent, {
      height: '200px',
      width: '250px',
      data: {name: 'Delete'}
    });

    dialog.afterClosed().subscribe(result => {
      console.log(result);

      if (result) {
        this.tasks.splice(index, 1);
      }
    });
  }

  ngOnInit() {
  }

  goTo(cameFromComponent) {
    this.router.navigate(['/listItem', {toDo: cameFromComponent}]);
  }
}
