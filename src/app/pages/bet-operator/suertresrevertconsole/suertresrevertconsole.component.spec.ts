import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuertresrevertconsoleComponent } from './suertresrevertconsole.component';

describe('SuertresrevertconsoleComponent', () => {
  let component: SuertresrevertconsoleComponent;
  let fixture: ComponentFixture<SuertresrevertconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuertresrevertconsoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuertresrevertconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
