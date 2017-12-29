import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { errorRoute } from './error/error.route';

const LAYOUT_ROUTES = [
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ],
})

export class LayoutRoutingModule { }