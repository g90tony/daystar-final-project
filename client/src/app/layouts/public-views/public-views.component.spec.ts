import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicViewsComponent } from './public-views.component';

describe('PublicViewsComponent', () => {
  let component: PublicViewsComponent;
  let fixture: ComponentFixture<PublicViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
