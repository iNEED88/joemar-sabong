import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetOperatorComponent } from './bet-operator.component';

describe('BetOperatorComponent', () => {
  let component: BetOperatorComponent;
  let fixture: ComponentFixture<BetOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
