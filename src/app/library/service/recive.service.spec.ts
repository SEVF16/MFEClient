import { TestBed } from '@angular/core/testing';

import { ReciveService } from './recive.service';

describe('ReciveService', () => {
  let service: ReciveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
