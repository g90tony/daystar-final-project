import { TestBed } from '@angular/core/testing';

import { BrowseCoursesService } from './browse-courses.service';

describe('BrowseCoursesService', () => {
  let service: BrowseCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowseCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
