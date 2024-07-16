import { TestBed } from '@angular/core/testing';

import { XappsService } from './xapps.service';

describe('XappsService', () => {
  let service: XappsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XappsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
