import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Cookies from 'universal-cookie';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  api_url: string = environment.apiUrl;
  cookies = new Cookies();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, public router: Router) {}

  get_authenticated_profile() {
    const stored_profile = localStorage.getItem('user_profile');

    const stored_profile_object = JSON.parse(stored_profile!);
    console.log(stored_profile_object);
    if (stored_profile === null) {
      this.router.navigate(['/users/login']);
    }
    if (stored_profile_object.id !== undefined) {
      localStorage.clear;

      return stored_profile_object;
    } else {
      this.router.navigate(['/']);
    }
  }

  get_user_profile(user_id: any) {
    let endpoint = `${this.api_url}/api/profile/${user_id}`;

    return this.http.get<any>(endpoint, this.httpOptions);
  }

  load_user_profile(user_id: any) {
    let endpoint = `${this.api_url}/api/profile/${user_id}`;

    return this.http.get<any>(endpoint, this.httpOptions).subscribe(
      (res: any) => {
        console.log('user profile exists', res);
        localStorage.setItem('user_profile', JSON.stringify(res));
      },
      (error) => {
        if (error) {
          console.error(error);
          this.router.navigate(['/profile/create']);
        }
      }
    );
  }

  create_user_profile(new_profile: any) {
    let endpoint = `${this.api_url}/api/profile/create`;

    return this.http.post<any>(endpoint, new_profile);
  }
}
