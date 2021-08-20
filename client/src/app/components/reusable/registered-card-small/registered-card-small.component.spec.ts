import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCardSmallComponent } from './registered-card-small.component';

describe('RegisteredCardSmallComponent', () => {
  let component: RegisteredCardSmallComponent;
  let fixture: ComponentFixture<RegisteredCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredCardSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
