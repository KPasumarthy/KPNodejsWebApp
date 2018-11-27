import { TestBed, inject } from '@angular/core/testing';

import { MongoDBNoSqlService } from './mongodbnosql.service';

describe('MongodbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoDBNoSqlService]
    });
  });

  it('should be created', inject([MongoDBNoSqlService], (service: MongoDBNoSqlService) => {
    expect(service).toBeTruthy();
  }));
});
