import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoPlayerComponent } from 'src/app/components/reusable/video-player/video-player.component';
import { RegisteredCoursesService } from 'src/app/services/registered-course/registered-course.service';

@Component({
  selector: 'app-registered-view',
  templateUrl: './registered-view.component.html',
  styleUrls: ['./registered-view.component.css'],
})
export class RegisteredViewComponent implements OnInit {
  @ViewChild('youtube_player') child!: VideoPlayerComponent;

  @Output() ChangeLesson = new EventEmitter<string>();

  current_lesson: any;
  course_lessons: any[];
  current_course: any;
  course_id: any;

  constructor(
    private registeredCourseService: RegisteredCoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.course_lessons = [];
    this.route.params.subscribe((params) => {
      this.course_id = params['id'];
    });

    this.current_lesson = {};
    this.course_lessons = [];
    this.current_course = {};
  }

  goBack() {
    this.router.navigate(['..']);
  }

  ngOnInit(): void {
    this.registeredCourseService
      .get_registered_course(this.course_id)
      .subscribe((res) => {
        this.current_course = res;
      });

    this.registeredCourseService
      .get_registered_course_lessons(this.course_id)
      .subscribe((res) => {
        this.course_lessons = res;
      });

    this.registeredCourseService
      .get_current_lesson(this.course_id)
      .subscribe((res) => {
        this.current_lesson = res;
      });
  }

  currentLessonUpdate(new_lesson: any) {
    this.current_course = new_lesson;
    this.child.onloadNewLesson(new_lesson);
  }

  onLessonChange(new_lesson: string) {
    this.child.onloadNewLesson(new_lesson);
    console.log(new_lesson);
  }
}
