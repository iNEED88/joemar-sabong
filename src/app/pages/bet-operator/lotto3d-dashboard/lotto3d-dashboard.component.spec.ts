import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lotto3dDashboardComponent } from './lotto3d-dashboard.component';

describe('Lotto3dDashboardComponent', () => {
  let component: Lotto3dDashboardComponent;
  let fixture: ComponentFixture<Lotto3dDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lotto3dDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lotto3dDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
