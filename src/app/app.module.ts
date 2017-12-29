import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Webstorage } from 'ng2-webstorage';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { appRoute } from './app.route';

import { SharedModule } from './shared/shared.module';
import { UserRouteAccessService } from './shared';
import { LayoutRoutingModule } from './layouts';

import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';

import {
    MainComponent,
    OutsideLayoutComponent,
    SuperAdminLayoutComponent,
    SuperAdminNavbarComponent,
    SuperAdminTopnavbarComponent,
    FooterComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'sunflower', separator: '-' }),
        RouterModule.forRoot(appRoute, { useHash: true }),
        ToastModule.forRoot(),
        BrowserAnimationsModule,
        
        SharedModule,
        DashboardModule,
        ProfileModule
    ],
    declarations: [
        MainComponent,
        OutsideLayoutComponent,
        SuperAdminLayoutComponent,
        SuperAdminNavbarComponent,
        SuperAdminTopnavbarComponent,
        FooterComponent,
        ErrorComponent
    ],
    providers: [
        UserRouteAccessService
    ],
    bootstrap: [
        MainComponent
    ]
})

export class AppModule { }