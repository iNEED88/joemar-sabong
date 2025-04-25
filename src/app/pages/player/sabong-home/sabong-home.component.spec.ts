import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabongHomeComponent } from './sabong-home.component';

describe('SabongHomeComponent', () => {
  let component: SabongHomeComponent;
  let fixture: ComponentFixture<SabongHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabongHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabongHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
