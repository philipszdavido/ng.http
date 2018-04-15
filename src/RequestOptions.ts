export class RequestOptions {
    url: string
    method: string
    body?: Object

    constructor(opts: any){
        let { url, method, body } = opts
        this.url = url
        this.method = method
        this.body = body
    }
}