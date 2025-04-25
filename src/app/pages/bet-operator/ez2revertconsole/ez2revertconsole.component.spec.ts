import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ez2revertconsoleComponent } from './ez2revertconsole.component';

describe('Ez2revertconsoleComponent', () => {
  let component: Ez2revertconsoleComponent;
  let fixture: ComponentFixture<Ez2revertconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ez2revertconsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ez2revertconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
