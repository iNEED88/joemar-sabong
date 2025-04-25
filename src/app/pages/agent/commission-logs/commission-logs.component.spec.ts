import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionLogsComponent } from './commission-logs.component';

describe('CommissionLogsComponent', () => {
  let component: CommissionLogsComponent;
  let fixture: ComponentFixture<CommissionLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommissionLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
