import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Http } from './Http';
var HttpModule = (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [],
                    exports: [],
                    providers: [Http]
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = function () { return []; };
    return HttpModule;
}());
export { HttpModule };
//# sourceMappingURL=HttpModule.js.map