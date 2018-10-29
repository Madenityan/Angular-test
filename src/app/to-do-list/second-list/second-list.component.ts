import {Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-second-list',
  templateUrl: './second-list.component.html',
  styleUrls: ['./second-list.component.css']
})
export class SecondListComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<SecondListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {}

  public close (isDelete) {
    this.matDialogRef.close(isDelete);
  }

}
