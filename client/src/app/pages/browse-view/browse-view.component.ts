import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { BrowseCoursesService } from 'src/app/services/browse-courses/browse-courses.service';
import { RegisteredCoursesService } from 'src/app/services/registered-course/registered-course.service';
import { UserProfileService } from 'src/app/services/user-profile/user-profile.service';

@Component({
  selector: 'app-browse-view',
  templateUrl: './browse-view.component.html',
  styleUrls: ['./browse-view.component.css'],
})
export class BrowseViewComponent implements OnInit {
  data: any;
  similar: any[];
  course_id: string = '';
  constructor(
    private browseCourseService: BrowseCoursesService,
    private registerCourseService: RegisteredCoursesService,
    private userProfileService: UserProfileService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.similar = [];
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.browseCourseService.get_course(id).subscribe((res) => {
      this.data = res;
      this.browseCourseService.get_similar(res.category.id).subscribe((res) => {
        this.similar = res;
      });
    });
  }

  enrollCourse() {
    const store_profile = this.userProfileService.get_authenticated_profile();

    const new_enrollment = {
      profile: store_profile.id,
      course: this.data.id,
      progress: 0,
    };

    this.registerCourseService
      .post_new_enrollment(new_enrollment)
      .subscribe((res) => {
        this.router.navigate(['/']);
      });
  }

  goBack() {
    this.router.navigate(['..']);
  }
}
