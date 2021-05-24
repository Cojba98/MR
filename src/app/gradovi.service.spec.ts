import { TestBed } from '@angular/core/testing';

import { GradoviService } from './gradovi.service';

describe('GradoviService', () => {
  let service: GradoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
