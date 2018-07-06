import {TestBed, inject} from '@angular/core/testing';

import { XHRBrowser } from '../src/backend/xhr_backend';

describe('XHRBrowser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        XHRBrowser,
      ]
    });
  });

  it('`xhr.build()` should return an instance of `XMLHttpRequest`', inject([XHRBrowser], (xhr: XHRBrowser) => {
    expect(xhr.build() instanceof XMLHttpRequest).toBe(true);
  }));
});
