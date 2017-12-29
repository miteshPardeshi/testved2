import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import {
    MyAccountComponent,
    MyAccountService
} from './';
import { profileState } from './profile.route';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forRoot(profileState, { useHash: true })
    ],
    declarations: [
        MyAccountComponent
    ],
    providers: [
        MyAccountService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileModule { }