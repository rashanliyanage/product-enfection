import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {UserHeaderComponent} from '../userComponent/user-header/user-header.component'
import {UserSidebarComponent} from '../userComponent/user-sidebar/user-sidebar.component'
import {UserLayoutRoutingModule} from './user-layout.routing.module'
import {UserLayoutComponent} from './user-layout.component';


@NgModule({
    imports: [
        CommonModule,
       
        TranslateModule,
        UserLayoutRoutingModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [UserHeaderComponent,UserSidebarComponent,UserLayoutComponent]
})
export class UserLayoutModule {}
