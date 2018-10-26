import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-second-list',
  templateUrl: './second-list.component.html',
  styleUrls: ['./second-list.component.css']
})
export class SecondListComponent implements OnInit, OnDestroy {

  toDo: any;
  subscription: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {

      this.toDo = params['toDo'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
