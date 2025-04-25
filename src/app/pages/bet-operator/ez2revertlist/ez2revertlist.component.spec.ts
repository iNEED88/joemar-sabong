import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ez2revertlistComponent } from './ez2revertlist.component';

describe('Ez2revertlistComponent', () => {
  let component: Ez2revertlistComponent;
  let fixture: ComponentFixture<Ez2revertlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ez2revertlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ez2revertlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
