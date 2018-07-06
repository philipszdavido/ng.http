import {TestBed, inject} from '@angular/core/testing';

import { XHRBackend, XHRConnection, XHRBrowser } from '../src/backend/xhr_backend';
import {MockXHRBrowser} from './xhrconnection.spec'

describe('XHRBackend', () => {
 beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: XHRBrowser, useClass: MockXHRBrowser},
        {
            provide:XHRBackend, 
            useFactory: (xHRBRowser:XHRBrowser) => {
                return new XHRBackend(xHRBRowser)
            },
            deps:[XHRBrowser]
        }
      ]
    });
 });
 it('should be created', inject([XHRBackend], (xhr: XHRBackend) => {
    expect(xhr).toBeTruthy();
  }));
 it('should return XHRConnection instance', inject([XHRBackend], (xhr: XHRBackend) => {
    expect(()=>xhr.createConnection({})).not.toThrow();
    expect(xhr.createConnection({}) instanceof XHRConnection).toBeTruthy();
  }));
})