import { TestBed } from '@angular/core/testing';

import { StanoviService } from './stanovi.service';

describe('StanoviService', () => {
  let service: StanoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StanoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
