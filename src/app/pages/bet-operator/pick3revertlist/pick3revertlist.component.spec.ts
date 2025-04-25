import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pick3revertlistComponent } from './pick3revertlist.component';

describe('Pick3revertlistComponent', () => {
  let component: Pick3revertlistComponent;
  let fixture: ComponentFixture<Pick3revertlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pick3revertlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pick3revertlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
