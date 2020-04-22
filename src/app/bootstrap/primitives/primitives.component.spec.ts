import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitivesComponent } from './primitives.component';

describe('PrimitivesComponent', () => {
  let component: PrimitivesComponent;
  let fixture: ComponentFixture<PrimitivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimitivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
