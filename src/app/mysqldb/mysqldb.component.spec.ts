import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqldbComponent } from './mysqldb.component';

describe('MysqldbComponent', () => {
  let component: MysqldbComponent;
  let fixture: ComponentFixture<MysqldbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysqldbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqldbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
