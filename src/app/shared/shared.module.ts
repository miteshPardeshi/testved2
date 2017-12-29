import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/primeng';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { AgmCoreModule } from '@agm/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AppConfig } from '../app.config';

import {
    AuthInterceptor,
    AuthServerProvider,
    Principal,
    DataUtils,
    DataFilterPipe,
    DataFilterPipeUser,
    DataFilterPipeScheduleRide,
    PhonePipe,
    DateConverter,
    ImageUpload
} from './';
import { SharedLibsModule } from './shared-libs.module';

export function httpClientFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, localStorage: LocalStorageService, sessionStorage: SessionStorageService, toastr: ToastsManager): Http {
    return new AuthInterceptor(xhrBackend, requestOptions, localStorage, sessionStorage, toastr);
}

export function imageUpload(http: Http, dataUtils: DataUtils) {
    return new ImageUpload(http, dataUtils);
}

@NgModule({
    imports: [
        SharedLibsModule,
        AgmCoreModule.forRoot({
            libraries: ["places"],
            apiKey: AppConfig.mapKey
        }),
        CalendarModule
    ],
    declarations: [
        DataFilterPipe,
        PhonePipe,
        DataFilterPipeUser,
        DataFilterPipeScheduleRide
    ],
    providers: [
        Principal,
        AuthServerProvider,
        DatePipe,
        { provide: Http, useFactory: httpClientFactory, deps: [XHRBackend, RequestOptions, LocalStorageService, SessionStorageService, ToastsManager] },
        { provide: ImageUpload, useFactory: imageUpload, deps: [Http, DataUtils] },
        DateConverter
    ],
    exports: [
        DatePipe,
        DataFilterPipe,
        PhonePipe,
        DataFilterPipeScheduleRide,
        DataFilterPipeUser
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }