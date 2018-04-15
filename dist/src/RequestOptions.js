var RequestOptions = (function () {
    function RequestOptions(opts) {
        var url = opts.url, method = opts.method, body = opts.body;
        this.url = url;
        this.method = method;
        this.body = body;
    }
    return RequestOptions;
}());
export { RequestOptions };
//# sourceMappingURL=RequestOptions.js.map