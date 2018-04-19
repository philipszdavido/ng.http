import { TestBed, inject } from '@angular/core/testing';

import { Http } from './../src';

describe('Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Http]
    });
  });

  it('should be created', inject([Http], (http: Http) => {
    expect(http).toBeTruthy();
  }));
});
