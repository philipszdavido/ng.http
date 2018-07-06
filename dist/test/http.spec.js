import { TestBed, inject } from '@angular/core/testing';
import { Http } from './../src';
import { XHRBackend, XHRBrowser } from '../src/backend/xhr_backend';
import { MockXHRBrowser } from './xhrconnection.spec';
import { Observable } from 'rxjs/Observable';
describe('Http', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: Http,
                    useFactory: function (xhr) {
                        return new Http(xhr);
                    },
                    deps: [XHRBackend]
                },
                { provide: XHRBrowser, useClass: MockXHRBrowser },
                { provide: XHRBackend, useFactory: function (x) {
                        return new XHRBackend(x);
                    }, deps: [XHRBrowser] }
            ]
        });
    });
    it('should be created', inject([Http], function (http) {
        expect(http).toBeTruthy();
    }));
    it('request should return an Observable', inject([Http, XHRBrowser], function (http, xhrB) {
        expect(http.request({}) instanceof Observable).toBeTruthy();
    }));
    it('checks get method exist on Http instance', inject([Http], function (http) {
        expect(typeof http.get).toBe('function');
    }));
    it('get() call should return an Observable', inject([Http, XHRBrowser], function (http, xhrB) {
        expect(http.get('people.json') instanceof Observable).toBeTruthy();
    }));
});
//# sourceMappingURL=http.spec.js.map