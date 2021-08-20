import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth-service.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLoggedIn !== true) {
      swal
        .fire({
          title:
            '<p class="secondary-text body-xl-bold margin-bottom-0">Access Denied </p>',
          showDenyButton: true,
          html: '<p class="body-md-regular margin-top-0">You are trying to access a protected page.<br/><br/> If you have an account click the "Login" button below.<br/> If you do not have an account click on the "Register" button below</p>',
          icon: 'info',
          confirmButtonText: 'Login',
          confirmButtonColor: '#00afb9',
          denyButtonText: 'Register',
          denyButtonColor: '#c7c7c7',
          buttonsStyling: true,
          customClass: {
            confirmButton: 'secondary-background body-sm-bold light-text',
          },
        })
        .then((hasAccount) => {
          if (hasAccount.isConfirmed) {
            this.router.navigate(['users/login']);
          } else {
            this.router.navigate(['users/register']);
          }
        });
    }

    return true;
  }
}
