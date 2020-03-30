import { TestBed, inject } from '@angular/core/testing';

import { OracleDBService } from './oracledb.service';

describe('OracleDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OracleDBService]
    });
  });

  it('should be created', inject([OracleDBService], (service: OracleDBService) => {
    expect(service).toBeTruthy();
  }));
});
