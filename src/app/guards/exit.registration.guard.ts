import {Observable} from 'rxjs';
import {CanDeactivate} from '@angular/router';
import {Injectable} from '@angular/core';

// TEST GUARD


export interface OnInit {
  canDeactivate: () => boolean | Observable<boolean>;
}
@Injectable()
export class ExitRegistrationGuard implements CanDeactivate<OnInit> {

  canDeactivate(component: OnInit): Observable<boolean> | boolean {

    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
