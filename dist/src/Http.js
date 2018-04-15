import { RequestOptions } from './RequestOptions';
import { Observable } from 'rxjs';
var Http = (function () {
    function Http() {
    }
    Http.prototype.request = function (requestOptions) {
        return new Observable(function (observer) {
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
export { Http };
//# sourceMappingURL=Http.js.map