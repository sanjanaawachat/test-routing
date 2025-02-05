import { TestBed } from '@angular/core/testing';

import { ProdDashService } from './prod-dash.service';

describe('ProdDashService', () => {
  let service: ProdDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
