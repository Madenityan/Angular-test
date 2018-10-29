import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogComponent} from './mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.css']
})
export class ForTestComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(MatDialogComponent, {
      data: {name: 'Delete'}
    });
  }
    ngOnInit() {}
}
