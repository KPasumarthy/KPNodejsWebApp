import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EloquaComponent } from './eloqua.component';

describe('EloquaComponent', () => {
  let component: EloquaComponent;
  let fixture: ComponentFixture<EloquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EloquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EloquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
