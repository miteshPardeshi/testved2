import { Component } from '@angular/core';
import { correctHeight, detectBody } from '../app.helpers';
import { Router, Event, NavigationEnd } from '@angular/router';

declare var jQuery: any;
declare let ga: Function;

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {

    constructor(private router: Router) {
    }

    ngOnInit() {
        jQuery(window).ready(function () {

            correctHeight();
            detectBody();
        });
    }
}