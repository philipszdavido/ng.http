(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/Observable'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs/Observable', '@angular/core'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.http = {}),global.Rx,global.ng.core));
}(this, (function (exports,Observable,core) { 'use strict';

    var Http = (function () {
        function Http(backend) {
            this.backend = backend;
        }
        Http.prototype.request = function (requestOptions /*RequestOptions*/) {
            return this.backend.createConnection(requestOptions).response;
        };
        Http.prototype.get = function (url, options) {
            return this.request(/*new RequestOptions(*/ /*new RequestOptions(*/ { url: url, method: 'GET' } /*)*/);
        };
        Http.prototype.post = function (url, body, options) {
        };
        return Http;
    }());

    var XHRBrowser = (function () {
        function XHRBrowser() {
        }
        XHRBrowser.prototype.build = function () {
            return new XMLHttpRequest();
        };
        XHRBrowser.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        XHRBrowser.ctorParameters = function () { return []; };
        return XHRBrowser;
    }());
    var XHRConnection = (function () {
        function XHRConnection(requestOptions, browserXHR) {
            this.response = new Observable.Observable(function (observer) {
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        XHRBackend.ctorParameters = function () { return [
            { type: XHRBrowser, },
        ]; };
        return XHRBackend;
    }());

    function httpFactory(Xhrbackend) {
        return new Http(Xhrbackend);
    }
    var HttpModule = (function () {
        function HttpModule() {
        }
        HttpModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [],
                        exports: [],
                        providers: [
                            {
                                provide: Http,
                                useFactory: httpFactory,
                                deps: [XHRBackend]
                            },
                            XHRBrowser,
                            XHRBackend
                        ]
                    },] },
        ];
        /** @nocollapse */
        HttpModule.ctorParameters = function () { return []; };
        return HttpModule;
    }());

    exports.Http = Http;
    exports.HttpModule = HttpModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
