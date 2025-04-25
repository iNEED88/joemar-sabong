import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick2Component } from './pick2.component';

describe('Pick2Component', () => {
  let component: Pick2Component;
  let fixture: ComponentFixture<Pick2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pick2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pick2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
