import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare const jQuery: any;

@Component({
    selector: 'super-admin-navbar',
    templateUrl: './super-admin-navbar.component.html'
})

export class SuperAdminNavbarComponent {
    constructor(
        private location: Location
    ) { }

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean {
        let routes = routename.split(',');
        let check = false;
        for (let i = 0; i < routes.length; i++) {
            if (this.location.path().indexOf(routes[i]) >= 0) {
                check = true;
                break;
            } else {
                check = false;
                continue;
            }
        }
        return check;
    }
}