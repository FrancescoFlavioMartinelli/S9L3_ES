import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePostPageComponent } from './inactive-post-page.component';

describe('InactivePostPageComponent', () => {
  let component: InactivePostPageComponent;
  let fixture: ComponentFixture<InactivePostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactivePostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
