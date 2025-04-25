import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryComsComponent } from './query-coms.component';

describe('QueryComsComponent', () => {
  let component: QueryComsComponent;
  let fixture: ComponentFixture<QueryComsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryComsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryComsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
