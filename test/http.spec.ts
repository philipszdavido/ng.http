import {Injector} from '@angular/core';
import {TestBed, getTestBed, inject} from '@angular/core/testing';

import { Http } from './../src';
import { XHRBackend, XHRBrowser } from '../src/backend/xhr_backend';
import {MockXHRBrowser} from './xhrconnection.spec'
import { Observable } from 'rxjs/Observable';

describe('Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http,
          useFactory: (xhr: XHRBackend) => {
            return new Http(xhr)
          },
          deps:[XHRBackend]
        },
        {provide: XHRBrowser, useClass: MockXHRBrowser},
        {provide:XHRBackend, useFactory: (x:XHRBrowser)=>{
          return new XHRBackend(x)
        }, deps:[XHRBrowser]}
      ]
    });
  });

  it('should be created', inject([Http], (http: Http) => {
    expect(http).toBeTruthy();
  }));
  it('request should return an Observable', inject([Http, XHRBrowser], (http: Http,xhrB:XHRBrowser) => {
    expect(http.request({}) instanceof Observable).toBeTruthy();
  }));
  it('checks get method exist on Http instance', inject([Http], (http: Http) => {
    expect(typeof http.get).toBe('function');
  }));
  it('get() call should return an Observable', inject([Http, XHRBrowser], (http: Http,xhrB:XHRBrowser) => {
    expect(http.get('people.json') instanceof Observable).toBeTruthy();
  }));
});
