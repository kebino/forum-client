import { TestBed, inject } from '@angular/core/testing';

import { ThreadListService } from './thread-list.service';

describe('ThreadListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadListService]
    });
  });

  it('should ...', inject([ThreadListService], (service: ThreadListService) => {
    expect(service).toBeTruthy();
  }));
});
