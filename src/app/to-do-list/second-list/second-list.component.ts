import {Component, OnInit, Input, OnDestroy, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-second-list',
  templateUrl: './second-list.component.html',
  styleUrls: ['./second-list.component.css']
})
export class SecondListComponent implements OnInit, OnDestroy {

  toDo: any;
  subscription: any;

  constructor(private route: ActivatedRoute, private matDialogRef: MatDialogRef<SecondListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {

      this.toDo = params['toDo'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public close (isDelete) {
    this.matDialogRef.close(isDelete);
  }


}
