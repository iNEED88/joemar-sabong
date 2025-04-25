import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentQueryComsComponent } from './agent-query-coms.component';

describe('AgentQueryComsComponent', () => {
  let component: AgentQueryComsComponent;
  let fixture: ComponentFixture<AgentQueryComsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentQueryComsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentQueryComsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
