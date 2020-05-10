import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpwebapisComponent } from './kpwebapis.component';

describe('KpwebapisComponent', () => {
  let component: KpwebapisComponent;
  let fixture: ComponentFixture<KpwebapisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpwebapisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpwebapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
