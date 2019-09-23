import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRowManagerComponent } from './project-row-manager.component';

describe('ProjectRowManagerComponent', () => {
  let component: ProjectRowManagerComponent;
  let fixture: ComponentFixture<ProjectRowManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRowManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRowManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
