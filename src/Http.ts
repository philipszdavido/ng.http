import { RequestOptions } from './RequestOptions';
import { Observable } from 'rxjs';

export class Http {
    constructor() {}
    request(requestOptions: RequestOptions): Observable<any> {
        return new Observable(function (observer: any) {

           let httpRequest = new XMLHttpRequest()
           httpRequest.open(requestOptions.method,requestOptions.url) 

           httpRequest.onload = function () {
                if (httpRequest.status == 200) {
                    observer.next(httpRequest.response)
                    observer.complete()
                } else {
                    observer.error(new Error(httpRequest.statusText))                    
                }
           }

           httpRequest.onerror = function () {
                observer.error(new Error("Error: HTTP error"))               
           }

           httpRequest.ontimeout = function () {
                observer.error(new Error('Error Timeout'))               
           }
           httpRequest.send()
        })
    }
    get (url: string, options?: any) {
        return this.request(new RequestOptions({url, method: 'GET'}))
    }
    post (url: string, body: any, options?: any) {

    }
}
