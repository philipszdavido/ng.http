import { Observable } from 'rxjs/Observable';
export declare class XHRBrowser {
    build(): any;
}
export declare class XHRConnection {
    response: Observable<any>;
    constructor(requestOptions: any, browserXHR: XHRBrowser);
}
export declare class XHRBackend {
    private browserXHR;
    constructor(browserXHR: XHRBrowser);
    createConnection(requestOptions: any): XHRConnection;
}
