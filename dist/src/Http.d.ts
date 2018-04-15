import { RequestOptions } from './RequestOptions';
import { Observable } from 'rxjs';
export declare class Http {
    constructor();
    request(requestOptions: RequestOptions): Observable<any>;
    get(url: string, options?: any): Observable<any>;
    post(url: string, body: any, options?: any): void;
}
