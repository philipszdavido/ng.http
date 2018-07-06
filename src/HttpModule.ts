import { NgModule } from '@angular/core'
//import { CommonModule } from "@angular/common";
//import { Observable } from 'rxjs';
import { Http } from './Http'
import { XHRBackend, XHRBrowser } from './backend/xhr_backend';

export function httpFactory(Xhrbackend: XHRBackend) {
    return new Http(Xhrbackend)
}

@NgModule({
    imports: [ /*CommonModule*/ ],
    declarations: [],
    exports: [],
    providers: [ 
        {
            provide:Http, 
            useFactory: httpFactory, 
            deps: [XHRBackend]
        },
        XHRBrowser,
        XHRBackend
    ]
})
export class HttpModule {}