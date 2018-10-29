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
    // this.tasks.splice(index, 1);
    let dialog: MatDialogRef<SecondListComponent>;
    dialog = this.dialog.open(SecondListComponent, {
      data: {name: 'Delete'}
    });

    dialog.afterClosed().subscribe(result => {
      console.log(result);

    });

  }


  ngOnInit() {
  }

  goTo(cameFromComponent) {
    this.router.navigate(['/secondToDo', {toDo: cameFromComponent}]);
  }
}
