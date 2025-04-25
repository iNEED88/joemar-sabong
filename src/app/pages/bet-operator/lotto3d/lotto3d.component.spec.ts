import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lotto3dComponent } from './lotto3d.component';

describe('Lotto3dComponent', () => {
  let component: Lotto3dComponent;
  let fixture: ComponentFixture<Lotto3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lotto3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lotto3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
