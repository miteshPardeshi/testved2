import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServerProvider } from '../../shared';

@Component({
    selector: 'outside-layout',
    templateUrl: './outside-layout.component.html'
})

export class OutsideLayoutComponent implements OnInit {
    currentAccount: any;

    constructor(
        private router: Router,
        private authService: AuthServerProvider
    ) {
    }

    ngOnInit() {

    }

    checkLogin() {
        // this.currentAccount = this.authService.getLoginInfo();
    }
}