import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';

import { MyAccountComponent } from './my-account.component';

export const myacountRoute: Route = {
    path: 'myaccount',
    component: MyAccountComponent,
    canActivate: [UserRouteAccessService]
};