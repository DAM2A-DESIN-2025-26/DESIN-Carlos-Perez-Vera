import { TestBed } from '@angular/core/testing';

import { Yesno } from './yesno';

describe('Yesno', () => {
  let service: Yesno;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Yesno);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
