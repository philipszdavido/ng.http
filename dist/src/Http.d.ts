import { Observable } from 'rxjs';
import { XHRBackend } from './backend/xhr_backend';
export declare class Http {
    private backend;
    constructor(backend: XHRBackend);
    request(requestOptions: any): Observable<any>;
    get(url: string, options?: any): Observable<any>;
    post(url: string, body: any, options?: any): void;
}
