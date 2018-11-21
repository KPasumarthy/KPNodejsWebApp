import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDBNoSqlComponent } from './mongodbnosql.component';

describe('MongodbComponent', () => {
  let component: MongoDBNoSqlComponent;
  let fixture: ComponentFixture<MongoDBNoSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoDBNoSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoDBNoSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
