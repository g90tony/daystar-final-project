import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/models/user/user';

import { environment } from 'src/environments/environment';
import Cookies from 'universal-cookie';
import { UserProfileService } from '../user-profile/user-profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api_url: string = environment.apiUrl;

  cookies = new Cookies();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'X-CSRFToken': `${this.cookies.get('csrftoken')}`,
    }),
  };

  constructor(
    private http: HttpClient,
    public router: Router,
    private profileService: UserProfileService
  ) {}

  register(new_user: any): Observable<any> {
    let endpoint = `${this.api_url}/auth/register/`;

    return this.http
      .post(endpoint, new_user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  login(login_credentials: any) {
    return this.http
      .post<any>(
        `${this.api_url}/auth/login/`,
        login_credentials,
        this.httpOptions
      )
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);

        console.log(res.data);

        const authenticateUser = {
          id: res.data.id,
          email: res.data.email_address,
        };

        this.profileService.load_user_profile(res.data.id);

        localStorage.setItem(
          'authenticated_user',
          JSON.stringify(authenticateUser)
        );
        this.router.navigate(['/']);
      });
  }

  getAuthenticatedUserId() {
    const _authenticatedUser = localStorage.getItem('authenticated_user');
    if (_authenticatedUser) {
      const _authenticatedUserObject = JSON.parse(_authenticatedUser);
      return _authenticatedUserObject.id;
    } else this.logout();
  }

  getAuthenticatedUserEmail() {
    const _authenticatedUser = localStorage.getItem('authenticated_user');
    if (_authenticatedUser) {
      const _authenticatedUserObject = JSON.parse(_authenticatedUser);
      return _authenticatedUserObject.email;
    } else this.logout();
  }

  getToken() {
    return localStorage.getItem('access_token')
      ? localStorage.getItem('access_token')
      : null;
  }

  get isLoggedIn(): boolean {
    let auth_token = localStorage.getItem('access_token');
    let auth_user = localStorage.getItem('authenticated_user');
    return auth_token && auth_user ? true : false;
  }

  logout() {
    localStorage.clear();

    this.router.navigate(['users/login']);
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
