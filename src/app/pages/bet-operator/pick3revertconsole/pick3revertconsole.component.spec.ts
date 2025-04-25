import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick3revertconsoleComponent } from './pick3revertconsole.component';

describe('Pick3revertconsoleComponent', () => {
  let component: Pick3revertconsoleComponent;
  let fixture: ComponentFixture<Pick3revertconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pick3revertconsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pick3revertconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
