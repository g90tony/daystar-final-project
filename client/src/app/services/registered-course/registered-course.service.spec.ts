import { TestBed } from '@angular/core/testing';

import { RegisteredCourseService } from './registered-course.service';

describe('RegisteredCourseService', () => {
  let service: RegisteredCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
