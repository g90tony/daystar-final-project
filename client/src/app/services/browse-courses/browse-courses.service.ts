import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Cookies from 'universal-cookie';

@Injectable({
  providedIn: 'root',
})
export class BrowseCoursesService {
  api_url: string = environment.apiUrl;
  cookies = new Cookies();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, public router: Router) {}

  get_all_courses() {
    let endpoint = `${this.api_url}/api/courses/browse/`;

    return this.http.get<any[]>(endpoint, this.httpOptions);
  }

  get_recent_courses() {
    let endpoint = `${this.api_url}/api/courses/browse/recent`;

    return this.http.get<any[]>(endpoint, this.httpOptions);
  }

  get_course(course_id: any) {
    let endpoint = `${this.api_url}/api/courses/browse/${course_id}`;

    return this.http.get<any>(endpoint, this.httpOptions);
  }

  get_similar(course_category: any) {
    let endpoint = `${this.api_url}/api/courses/browse/similar/${course_category}`;

    return this.http.get<any[]>(endpoint, this.httpOptions);
  }
}
