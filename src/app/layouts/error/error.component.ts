import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'error',
    templateUrl: './error.component.html'
})

export class ErrorComponent implements OnInit {
    constructor(private location: Location, public router: Router) { }

    ngOnInit() {
    }

    goBack() {
        this.location.back();
    }
}