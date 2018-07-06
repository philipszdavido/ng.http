import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '../RequestOptions';
import {Injectable} from '@angular/core'

@Injectable()
export class XHRBrowser {
    build(): any {
        return new XMLHttpRequest()
    }
}

export class XHRConnection {
    response: Observable<any>
    constructor(requestOptions: any, browserXHR: XHRBrowser) {
        this.response = new Observable(function (observer: any) { 
            let httpRequest = browserXHR.build();
           httpRequest.open(requestOptions.method, requestOptions.url);
           httpRequest.onload = function() {
                observer.next(httpRequest.response)
                observer.complete()
           }
           httpRequest.send()
        })
    }
}

/*export class XHRConnection {
    response: Observable<any>
    constructor(requestOptions: any, browserXHR: XHRBrowser) {
        this.response = new Observable(function (observer: any) {

           let httpRequest = browserXHR.build();
           httpRequest.open(requestOptions.method, requestOptions.url);

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
}
*/
@Injectable()
export class XHRBackend {
    constructor(private browserXHR: XHRBrowser) {  }

    createConnection(requestOptions: any /*RequestOptions*/) {
        return new XHRConnection(requestOptions,this.browserXHR)
    }
}
