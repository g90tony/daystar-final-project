import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredSearchComponent } from './registered-search.component';

describe('RegisteredSearchComponent', () => {
  let component: RegisteredSearchComponent;
  let fixture: ComponentFixture<RegisteredSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
