import { Component, OnInit } from '@angular/core';
import { RegisteredCoursesService } from 'src/app/services/registered-course/registered-course.service';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css'],
})
export class RegisteredComponent implements OnInit {
  registered_courses: any[];

  constructor(
    private registeredCourseService: RegisteredCoursesService,
    private userProfileService: UserProfileService
  ) {
    this.registered_courses = [];
  }

  ngOnInit(): void {
    const user_profile = this.userProfileService.get_authenticated_profile();

    this.registeredCourseService.get_registered_courses().subscribe((res) => {
      this.registered_courses = res;
    });
  }
}
