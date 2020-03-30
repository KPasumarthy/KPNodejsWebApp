import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracledbComponent } from './oracledb.component';

describe('OracledbComponent', () => {
  let component: OracledbComponent;
  let fixture: ComponentFixture<OracledbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracledbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracledbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
