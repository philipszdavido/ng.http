var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { XHRConnection, XHRBrowser } from '../src/backend/xhr_backend';
import { Observable } from 'rxjs';
var abortSpy;
var sendSpy;
var openSpy;
var MockXMLHttpRequest = (function () {
    function MockXMLHttpRequest() {
        abortSpy = spyOn(this, 'abort');
        sendSpy = spyOn(this, 'send');
        openSpy = spyOn(this, 'open');
    }
    MockXMLHttpRequest.prototype.abort = function () { };
    MockXMLHttpRequest.prototype.send = function () { };
    MockXMLHttpRequest.prototype.open = function () { };
    MockXMLHttpRequest.prototype.setResponse = function (response) { this.response = response; };
    MockXMLHttpRequest.prototype.setStatus = function (status) { this.status = status; };
    MockXMLHttpRequest.prototype.dispatchEvent = function (type) {
        this[type]();
    };
    return MockXMLHttpRequest;
}());
export { MockXMLHttpRequest };
var MockXHRBrowser = (function (_super) {
    __extends(MockXHRBrowser, _super);
    function MockXHRBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockXHRBrowser.prototype.build = function () {
        this.mockXMLHttpRequest = new MockXMLHttpRequest();
        return this.mockXMLHttpRequest;
    };
    return MockXHRBrowser;
}(XHRBrowser));
export { MockXHRBrowser };
describe('XHRConnection', function () {
    it('should be created', function () {
        expect(new XHRConnection({}, new MockXHRBrowser())).toBeTruthy();
    });
    it('`open` should be called', function () {
        var conn = new XHRConnection({}, new MockXHRBrowser());
        conn.response.subscribe();
        expect(openSpy).toHaveBeenCalled();
    });
    it('`send` should be called', function () {
        var conn = new XHRConnection({}, new MockXHRBrowser());
        conn.response.subscribe();
        expect(sendSpy).toHaveBeenCalled();
    });
    it('`response` should be instance of Observable', function () {
        var conn = new XHRConnection({}, new MockXHRBrowser());
        var response = conn.response;
        expect(response instanceof Observable).toBeTruthy();
    });
    it('`response` should be `dogs`', function () {
        var mockXHRBrowser = new MockXHRBrowser();
        var conn = new XHRConnection({ url: 'dogg' }, mockXHRBrowser);
        conn.response.subscribe(function (res) {
            expect(res).toBe('dogs');
        });
        mockXHRBrowser.mockXMLHttpRequest.setStatus(200);
        mockXHRBrowser.mockXMLHttpRequest.setResponse('dogs');
        mockXHRBrowser.mockXMLHttpRequest.dispatchEvent('onload');
    });
    it('onload listener should exist on subscribe call', function () {
        var mockXHRBrowser = new MockXHRBrowser();
        var conn = new XHRConnection({}, mockXHRBrowser);
        conn.response.subscribe();
        expect(mockXHRBrowser.mockXMLHttpRequest['onload']).toBeTruthy();
    });
});
//# sourceMappingURL=xhrconnection.spec.js.map