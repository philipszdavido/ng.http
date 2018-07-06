import { RequestOptions } from './RequestOptions';
import { Observable } from 'rxjs';
import { XHRBackend } from './backend/xhr_backend';

export class Http {
    constructor(private backend: XHRBackend) {}
    request(requestOptions: any/*RequestOptions*/): Observable<any> {
        return this.backend.createConnection(requestOptions).response
    }
    get (url: string, options?: any) {
        return this.request(/*new RequestOptions(*/{url, method: 'GET'}/*)*/)
    }
    post (url: string, body: any, options?: any) {

    }
}
