import { Routes } from '@angular/router';

import { SuperAdminLayoutComponent } from '../layouts';

import {
    myacountRoute
} from './';

import { UserRouteAccessService } from '../shared';

const PROFILE_ROUTES = [
    myacountRoute
];

export const profileState: Routes = [{
    path: '',
    data: {
        authorities: ['ROLE_ADMIN']
    },
    component: SuperAdminLayoutComponent,
    canActivate: [UserRouteAccessService],
    children: PROFILE_ROUTES
}];