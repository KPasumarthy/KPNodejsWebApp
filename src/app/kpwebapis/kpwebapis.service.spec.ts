import { TestBed, inject } from '@angular/core/testing';

import { KpwebapisService } from './kpwebapis.service';

describe('KpwebapisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KpwebapisService]
    });
  });

  it('should be created', inject([KpwebapisService], (service: KpwebapisService) => {
    expect(service).toBeTruthy();
  }));
});
