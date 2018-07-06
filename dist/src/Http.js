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
export { Http };
//# sourceMappingURL=Http.js.map