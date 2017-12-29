import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { correctHeight, detectBody } from '../app.helpers';

declare var jQuery: any;

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html'
})

export class MainComponent {
    constructor(
        toastr: ToastsManager,
        viewContainerRef: ViewContainerRef
    ) {
        toastr.setRootViewContainerRef(viewContainerRef);
    }

    ngAfterViewInit() {
        jQuery(window).bind("load resize", function () {
            correctHeight();
            detectBody();
        });

        jQuery('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }
}