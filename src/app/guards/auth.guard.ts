import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


// TEST GUARD

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    // if (localStorage.getItem('token')) {
    //   // this.router.navigate(['/toDoList']);
    // } else {
    //   this.router.navigate(['/user-registration']);
    // }

    return confirm('Вы уверены, что хотите перейти?');
  }
}

