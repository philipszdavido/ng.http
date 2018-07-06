import {Injector} from '@angular/core';
import {TestBed, getTestBed, inject} from '@angular/core/testing';

import { XHRBackend, XHRConnection, XHRBrowser } from '../src/backend/xhr_backend';
import { Observable } from 'rxjs';

let abortSpy: any;
let sendSpy: any;
let openSpy: any;

export class MockXMLHttpRequest  {
  response: any
  status: number
  constructor() {
    abortSpy = spyOn(this,'abort');
    sendSpy = spyOn(this,'send');
    openSpy = spyOn(this,'open');
  }
  abort() {}
  send () {}
  open() {}
  setResponse(response: any) { this.response = response}
  setStatus(status:number) { this.status = status}
  dispatchEvent(type: string) {
    (this as any)[type]()
  }
}

export class MockXHRBrowser extends XHRBrowser {
    mockXMLHttpRequest:MockXMLHttpRequest
    
    build() {
        this.mockXMLHttpRequest = new MockXMLHttpRequest()
        return this.mockXMLHttpRequest
    }
}

describe('XHRConnection', () => {
  it('should be created', () => {
    expect(new XHRConnection({}, new MockXHRBrowser())).toBeTruthy();
  });
  it('`open` should be called', () => {
    const conn = new XHRConnection({}, new MockXHRBrowser())
    conn.response.subscribe()
    expect(openSpy).toHaveBeenCalled()
  });
  it('`send` should be called', () => {
    const conn = new XHRConnection({}, new MockXHRBrowser())
    conn.response.subscribe()
    expect(sendSpy).toHaveBeenCalled()
  });
  it('`response` should be instance of Observable', () => {
      const conn = new XHRConnection({}, new MockXHRBrowser())
      const response = conn.response
    expect(response instanceof Observable).toBeTruthy();
  });
  it('`response` should be `dogs`', () => {
      const mockXHRBrowser = new MockXHRBrowser()
      const conn = new XHRConnection({url: 'dogg'}, mockXHRBrowser)
      conn.response.subscribe(res => {
          expect(res).toBe('dogs')
      })
     mockXHRBrowser.mockXMLHttpRequest.setStatus(200)            
     mockXHRBrowser.mockXMLHttpRequest.setResponse('dogs')            
     mockXHRBrowser.mockXMLHttpRequest.dispatchEvent('onload')
  });
  it('onload listener should exist on subscribe call', () => {
      const mockXHRBrowser = new MockXHRBrowser()
      const conn = new XHRConnection({}, mockXHRBrowser)
      conn.response.subscribe()
     expect((mockXHRBrowser.mockXMLHttpRequest as any)['onload']).toBeTruthy()
  });
});
