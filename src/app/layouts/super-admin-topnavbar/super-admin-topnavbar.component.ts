import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { smoothlyMenu } from '../app.helpers';

import { AuthServerProvider, Principal } from '../../shared';


declare var jQuery: any;

@Component({
    selector: 'super-admin-topnavbar',
    templateUrl: './super-admin-topnavbar.component.html'
})

export class SuperAdminTopnavbarComponent implements OnInit {
    currentAccount: any;

    constructor(
        private router: Router,
        private authService: AuthServerProvider
    ) {
    }

    ngOnInit() {
    }

    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
}