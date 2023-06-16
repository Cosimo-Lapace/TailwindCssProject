import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinersComponent } from './headliners.component';

describe('HeadlinersComponent', () => {
  let component: HeadlinersComponent;
  let fixture: ComponentFixture<HeadlinersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlinersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
