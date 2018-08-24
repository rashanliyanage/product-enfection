import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {UserHeaderComponent} from '../userComponent/user-header/user-header.component'
import {HomeComponentComponent} from '../userComponent/home-component/home-component.component'
import {HomeLayoutRoutingModule} from './home-layout.routing.module'
import {HomeLayoutComponent} from './home-layout.component'



@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        HomeLayoutRoutingModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [UserHeaderComponent,HomeComponentComponent,HomeLayoutComponent]
})
export class HomeLayoutModule{}
