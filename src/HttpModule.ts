import { NgModule } from '@angular/core'
import { CommonModule } from "@angular/common";
import { Observable } from 'rxjs';
import { Http } from './Http'

@NgModule({
    imports: [ CommonModule ],
    declarations: [],
    exports: [],
    providers: [ Http ]
})
export class HttpModule {}