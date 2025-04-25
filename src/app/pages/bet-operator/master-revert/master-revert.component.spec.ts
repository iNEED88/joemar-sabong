import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRevertComponent } from './master-revert.component';

describe('MasterRevertComponent', () => {
  let component: MasterRevertComponent;
  let fixture: ComponentFixture<MasterRevertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterRevertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterRevertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
