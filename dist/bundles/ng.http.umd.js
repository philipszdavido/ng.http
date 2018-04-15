(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs', '@angular/core', '@angular/common'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.http = {}),global.rxjs,global.ng.core,global.common));
}(this, (function (exports,rxjs,core,common) { 'use strict';

    var RequestOptions = (function () {
        function RequestOptions(opts) {
            var url = opts.url, method = opts.method, body = opts.body;
            this.url = url;
            this.method = method;
            this.body = body;
        }
        return RequestOptions;
    }());

    var Http = (function () {
        function Http() {
        }
        Http.prototype.request = function (requestOptions) {
            return new rxjs.Observable(function (observer) {
                var httpRequest = new XMLHttpRequest();
                httpRequest.open(requestOptions.method, requestOptions.url);
                httpRequest.onload = function () {
                    if (httpRequest.status == 200) {
                        observer.next(httpRequest.response);
                        observer.complete();
                    }
                    else {
                        observer.error(new Error(httpRequest.statusText));
                    }
                };
                httpRequest.onerror = function () {
                    observer.error(new Error("Error: HTTP error"));
                };
                httpRequest.ontimeout = function () {
                    observer.error(new Error('Error Timeout'));
                };
                httpRequest.send();
            });
        };
        Http.prototype.get = function (url, options) {
            return this.request(new RequestOptions({ url: url, method: 'GET' }));
        };
        Http.prototype.post = function (url, body, options) {
        };
        return Http;
    }());

    var HttpModule = (function () {
        function HttpModule() {
        }
        HttpModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [],
                        exports: [],
                        providers: [Http]
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
