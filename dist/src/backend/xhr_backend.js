import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
var XHRBrowser = (function () {
    function XHRBrowser() {
    }
    XHRBrowser.prototype.build = function () {
        return new XMLHttpRequest();
    };
    XHRBrowser.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    XHRBrowser.ctorParameters = function () { return []; };
    return XHRBrowser;
}());
export { XHRBrowser };
var XHRConnection = (function () {
    function XHRConnection(requestOptions, browserXHR) {
        this.response = new Observable(function (observer) {
            var httpRequest = browserXHR.build();
            httpRequest.open(requestOptions.method, requestOptions.url);
            httpRequest.onload = function () {
                observer.next(httpRequest.response);
                observer.complete();
            };
            httpRequest.send();
        });
    }
    return XHRConnection;
}());
export { XHRConnection };
/*export class XHRConnection {
    response: Observable<any>
    constructor(requestOptions: any, browserXHR: XHRBrowser) {
        this.response = new Observable(function (observer: any) {

           let httpRequest = browserXHR.build();
           httpRequest.open(requestOptions.method, requestOptions.url);

           httpRequest.onload = function () {
                if (httpRequest.status == 200) {
                    observer.next(httpRequest.response)
                    observer.complete()
                } else {
                    observer.error(new Error(httpRequest.statusText))
                }
           }

           httpRequest.onerror = function () {
                observer.error(new Error("Error: HTTP error"))
           }

           httpRequest.ontimeout = function () {
                observer.error(new Error('Error Timeout'))
           }
           httpRequest.send()
        })
    }
}
*/
var XHRBackend = (function () {
    function XHRBackend(browserXHR) {
        this.browserXHR = browserXHR;
    }
    XHRBackend.prototype.createConnection = function (requestOptions /*RequestOptions*/) {
        return new XHRConnection(requestOptions, this.browserXHR);
    };
    XHRBackend.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: XHRBrowser, },
    ]; };
    return XHRBackend;
}());
export { XHRBackend };
//# sourceMappingURL=xhr_backend.js.map