import { TestBed } from '@angular/core/testing';

import { NuevoService } from './nuevo.service';

describe('NuevoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NuevoService = TestBed.get(NuevoService);
    expect(service).toBeTruthy();
  });
});
