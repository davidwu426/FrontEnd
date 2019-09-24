import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRsourceComponent } from './project-resource.component';

describe('ProjectRsourceComponent', () => {
  let component: ProjectRsourceComponent;
  let fixture: ComponentFixture<ProjectRsourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRsourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
