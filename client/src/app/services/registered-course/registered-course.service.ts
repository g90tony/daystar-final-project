import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Cookies from 'universal-cookie';
import { UserProfileService } from '../user-profile/user-profile.service';

@Injectable({
  providedIn: 'root',
})
export class RegisteredCoursesService {
  api_url: string = environment.apiUrl;
  cookies = new Cookies();
  authenticated_profile: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    public router: Router,
    private userProfileService: UserProfileService
  ) {}

  get_registered_courses() {
    const stored_profile = this.userProfileService.get_authenticated_profile();
    let endpoint = `${this.api_url}/api/courses/registered/${stored_profile.id}`;

    return this.http.get<any[]>(endpoint, this.httpOptions);
  }

  get_registered_course(course_id: any) {
    const stored_profile = this.userProfileService.get_authenticated_profile();
    let endpoint = `${this.api_url}/api/courses/registered/${course_id}/${stored_profile.id}`;

    return this.http.get<any>(endpoint, this.httpOptions);
  }

  get_registered_course_lessons(course_id: any) {
    const stored_profile = this.userProfileService.get_authenticated_profile();
    let endpoint = `${this.api_url}/api/courses/registered/${course_id}/${stored_profile.id}/lessons`;

    return this.http.get<any[]>(endpoint, this.httpOptions);
  }

  get_current_lesson(course_id: any) {
    const stored_profile = this.userProfileService.get_authenticated_profile();
    let endpoint = `${this.api_url}/api/progress/current/${course_id}/${stored_profile.id}`;

    return this.http.get<any>(endpoint, this.httpOptions);
  }

  mark_lesson_complete(course_id: any) {
    const stored_profile = this.userProfileService.get_authenticated_profile();
    let endpoint = `${this.api_url}/api/progress/current/${course_id}/${stored_profile.id}`;

    return this.http.post<any>(endpoint, this.httpOptions);
  }

  post_new_enrollment(new_enrollment: any) {
    let endpoint = `${this.api_url}/api/courses/registered/enroll/`;

    return this.http.post<any>(endpoint, new_enrollment, this.httpOptions);
  }
}
