import { NgModule } from '@angular/core';
//import { CommonModule } from "@angular/common";
//import { Observable } from 'rxjs';
import { Http } from './Http';
import { XHRBackend, XHRBrowser } from './backend/xhr_backend';
export function httpFactory(Xhrbackend) {
    return new Http(Xhrbackend);
}
var HttpModule = (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: [],
                    providers: [
                        {
                            provide: Http,
                            useFactory: httpFactory,
                            deps: [XHRBackend]
                        },
                        XHRBrowser,
                        XHRBackend
                    ]
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = function () { return []; };
    return HttpModule;
}());
export { HttpModule };
//# sourceMappingURL=HttpModule.js.map