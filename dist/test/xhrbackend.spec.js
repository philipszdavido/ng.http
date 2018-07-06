import { TestBed, inject } from '@angular/core/testing';
import { XHRBackend, XHRConnection, XHRBrowser } from '../src/backend/xhr_backend';
import { MockXHRBrowser } from './xhrconnection.spec';
describe('XHRBackend', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                { provide: XHRBrowser, useClass: MockXHRBrowser },
                {
                    provide: XHRBackend,
                    useFactory: function (xHRBRowser) {
                        return new XHRBackend(xHRBRowser);
                    },
                    deps: [XHRBrowser]
                }
            ]
        });
    });
    it('should be created', inject([XHRBackend], function (xhr) {
        expect(xhr).toBeTruthy();
    }));
    it('should return XHRConnection instance', inject([XHRBackend], function (xhr) {
        expect(xhr.createConnection({})).not.toThrow();
        expect(xhr.createConnection({}) instanceof XHRConnection).toBeTruthy();
    }));
});
//# sourceMappingURL=xhrbackend.spec.js.map