import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { BrowseCoursesService } from 'src/app/services/browse-courses/browse-courses.service';
import { RegisteredCoursesService } from 'src/app/services/registered-course/registered-course.service';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  recently_added: any[];
  registered_courses: any[];

  constructor(
    private browseCoursesService: BrowseCoursesService,
    private registeredCoursesService: RegisteredCoursesService,
    private profileService: UserProfileService,
    private authService: AuthService,
    private router: Router
  ) {
    this.recently_added = [];
    this.registered_courses = [];
  }

  ngOnInit(): void {
    this.browseCoursesService.get_recent_courses().subscribe((res) => {
      this.recently_added = res;
      console.log(this.recently_added);
    });
    this.profileService.get_authenticated_profile();
    this.registeredCoursesService.get_registered_courses().subscribe((res) => {
      this.registered_courses = res;
      console.log(this.recently_added);
    });
  }
}
