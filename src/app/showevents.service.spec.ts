import { TestBed } from '@angular/core/testing';

import { ShoweventsService } from './showevents.service';

describe('ShoweventsService', () => {
  let service: ShoweventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoweventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
