import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredViewComponent } from './registered-view.component';

describe('RegisteredViewComponent', () => {
  let component: RegisteredViewComponent;
  let fixture: ComponentFixture<RegisteredViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
