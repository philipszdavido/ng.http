import { TestBed, inject } from '@angular/core/testing';
import { XHRBrowser } from '../src/backend/xhr_backend';
describe('XHRBrowser', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                XHRBrowser,
            ]
        });
    });
    it('`xhr.build()` should return an instance of `XMLHttpRequest`', inject([XHRBrowser], function (xhr) {
        expect(xhr.build() instanceof XMLHttpRequest).toBe(true);
    }));
});
//# sourceMappingURL=xhrbrowser.spec.js.map