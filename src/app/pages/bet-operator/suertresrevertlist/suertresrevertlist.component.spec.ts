import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuertresrevertlistComponent } from './suertresrevertlist.component';

describe('SuertresrevertlistComponent', () => {
  let component: SuertresrevertlistComponent;
  let fixture: ComponentFixture<SuertresrevertlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuertresrevertlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuertresrevertlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
