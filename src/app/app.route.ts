import { Routes, ROUTER_CONFIGURATION } from '@angular/router';

import { ErrorComponent } from './layouts';

export const appRoute: Routes = [
    {
        path: '**',
        component: ErrorComponent
    }
];