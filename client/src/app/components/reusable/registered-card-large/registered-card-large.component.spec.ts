import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCardLargeComponent } from './registered-card-large.component';

describe('RegisteredCardLargeComponent', () => {
  let component: RegisteredCardLargeComponent;
  let fixture: ComponentFixture<RegisteredCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredCardLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
