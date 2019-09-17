import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaFieldsComponent } from './formula-fields.component';

describe('FormulaFieldsComponent', () => {
  let component: FormulaFieldsComponent;
  let fixture: ComponentFixture<FormulaFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
