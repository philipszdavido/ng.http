import { XHRBrowser } from '../src/backend/xhr_backend';
export declare class MockXMLHttpRequest {
    response: any;
    status: number;
    constructor();
    abort(): void;
    send(): void;
    open(): void;
    setResponse(response: any): void;
    setStatus(status: number): void;
    dispatchEvent(type: string): void;
}
export declare class MockXHRBrowser extends XHRBrowser {
    mockXMLHttpRequest: MockXMLHttpRequest;
    build(): MockXMLHttpRequest;
}
