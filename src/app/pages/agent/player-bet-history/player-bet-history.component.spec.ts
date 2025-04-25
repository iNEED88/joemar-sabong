import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBetHistoryComponent } from './player-bet-history.component';

describe('PlayerBetHistoryComponent', () => {
  let component: PlayerBetHistoryComponent;
  let fixture: ComponentFixture<PlayerBetHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerBetHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBetHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
