import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePostPageComponent } from './active-post-page.component';

describe('ActivePostPageComponent', () => {
  let component: ActivePostPageComponent;
  let fixture: ComponentFixture<ActivePostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
