import { Component, OnInit } from '@angular/core';
import { BrowseCoursesService } from 'src/app/services/browse-courses/browse-courses.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  api_results: any[];

  constructor(private browseCourseService: BrowseCoursesService) {
    this.api_results = [];
  }

  ngOnInit(): void {
    this.browseCourseService.get_all_courses().subscribe((res) => {
      this.api_results = res;
    });
  }
}
