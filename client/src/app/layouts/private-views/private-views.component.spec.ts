import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateViewsComponent } from './private-views.component';

describe('PrivateViewsComponent', () => {
  let component: PrivateViewsComponent;
  let fixture: ComponentFixture<PrivateViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
