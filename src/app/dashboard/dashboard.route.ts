import { Route, Routes } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { SuperAdminLayoutComponent} from '../layouts';

import { DashboardComponent } from './dashboard.component';

export const dashboardState: Routes = [
    {
        path: '',
        component: SuperAdminLayoutComponent,
        canActivate: [UserRouteAccessService],
        children: [
            {
                path: 'admin/dashboard',
                component: DashboardComponent
            }
        ]
    }
];