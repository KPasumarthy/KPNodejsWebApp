import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplemodComponent } from './simplemod.component';

describe('SimplemodComponent', () => {
  let component: SimplemodComponent;
  let fixture: ComponentFixture<SimplemodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplemodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
