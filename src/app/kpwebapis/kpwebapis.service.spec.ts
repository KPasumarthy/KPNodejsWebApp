import { TestBed, inject } from '@angular/core/testing';

import { KPWebApisService } from './kpwebapis.service';

describe('KpwebapisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KPWebApisService]
    });
  });

  it('should be created', inject([KPWebApisService], (service: KPWebApisService) => {
    expect(service).toBeTruthy();
  }));
});
