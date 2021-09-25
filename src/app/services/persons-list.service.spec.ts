import { TestBed } from '@angular/core/testing';

import { PersonsListService } from './persons-list.service';

describe('PersonsListService', () => {
  let service: PersonsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
