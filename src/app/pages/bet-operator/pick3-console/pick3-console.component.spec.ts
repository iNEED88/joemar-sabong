import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick3ConsoleComponent } from './pick3-console.component';

describe('Pick3ConsoleComponent', () => {
  let component: Pick3ConsoleComponent;
  let fixture: ComponentFixture<Pick3ConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pick3ConsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pick3ConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
