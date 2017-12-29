import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from "angular2-datatable";

import { DashboardComponent, DashboardService } from './';
import { dashboardState } from './dashboard.route';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataTableModule,
        SharedModule,
        RouterModule.forRoot(dashboardState, { useHash: true })
    ],
    declarations: [
        DashboardComponent
    ],
    entryComponents: [
    ],
    providers: [
        DashboardService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DashboardModule { }