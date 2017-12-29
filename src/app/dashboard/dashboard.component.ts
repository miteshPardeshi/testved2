import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

import { AppConfig } from '../app.config';
import { AuthServerProvider } from '../shared';
import { DashboardService } from './dashboard.service';
import { Host, HostInterface } from './dashboard.model';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    loading: boolean = true;
    headerTitle: string;
    host: Host;
    hostList: Host[] = [];
    hostInterface: HostInterface;
    hostInterfacelist: HostInterface[] = [];

    constructor(
        private authService: AuthServerProvider,
        private route: ActivatedRoute,
        private dashboardService: DashboardService,
        private toastsManager: ToastsManager
    ) {
    }
    ngOnInit() {
        this.host = new Host();
        this.hostInterface = new HostInterface();
    }

    savehost() { }
    updatehost() { }
    getAllhost() { }
    getHostbyId(hostId) { }
    deleteHost() { }


    getallHostInterface(hostId) { }
    saveHostInterface() { }
    updateHostInterface() { }
    getHostInterfacebyId(hostInterfaceId) { }
    deleteHostInterface(hostInterfaceId) { }

}