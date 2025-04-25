import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick2ConsoleComponent } from './pick2-console.component';

describe('Pick2ConsoleComponent', () => {
  let component: Pick2ConsoleComponent;
  let fixture: ComponentFixture<Pick2ConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pick2ConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pick2ConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
