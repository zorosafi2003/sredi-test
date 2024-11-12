import { TestBed } from '@angular/core/testing';

import { ModulesLibService } from './modules-lib.service';

describe('ModulesLibService', () => {
  let service: ModulesLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulesLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
