import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCtwLogsComponent } from './view-ctw-logs.component';

describe('ViewCtwLogsComponent', () => {
  let component: ViewCtwLogsComponent;
  let fixture: ComponentFixture<ViewCtwLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCtwLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCtwLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
