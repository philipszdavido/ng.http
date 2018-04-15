class RequestOptions {
    url: string
    method: string
    body?: Object

    constructor(opts){
        let { url, method, body } = opts
        this.url = url
        this.method = method
        this.body = body
    }
}
export default RequestOptions