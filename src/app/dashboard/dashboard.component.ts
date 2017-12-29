import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

import { AppConfig } from '../app.config';
import { AuthServerProvider } from '../shared';
import { DashboardService } from './dashboard.service';
import { Host, HostInterface, HostInter, HostUser, HostInterfaceUser } from './dashboard.model';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    loading: boolean = true;
    viewInterface: boolean = false;
    headerTitle: string;
    hostName: string;
    hostId: number;
    hostInterfaceId: number;
    host: Host;
    hostInter: any[] = [];
    hostList: Host[] = [];
    hostInterface: HostInterfaceUser;
    hostInterfacelist: HostInterface[] = [];
    getAllHostRecords: boolean = false;


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
        this.getAllhost();
    }


    closeInterface() {
        this.viewInterface = false;
        this.hostInterfacelist = [];
        this.hostInterface = new HostInterface();
    }

    openInterface(host) {
        this.viewInterface = true;
        this.hostName = host.hostname;
        this.getallHostInterface(host.id);
        this.host = new Host()
    }

    reset() {
        this.host = new Host();
    }


    savehost() {
        if (this.hostId) {
            this.dashboardService.updateHost(this.host)
                .subscribe((res: Host) =>
                    this.onSuccessSavedHost(res), (res: Response) => this.onError(res.json()));
        }
        else {
            this.dashboardService.createHost(this.host)
                .subscribe((res: Host) =>
                    this.onSuccessSavedHost(res), (res: Response) => this.onError(res.json()));
        }
    }

    onSuccessSavedHost(data) {
        this.toastsManager.success("Host Saved Successfully", "Success");
        this.getAllhost();
    }


    getAllhost() {
        this.dashboardService.getAllHostList()
            .subscribe((res: any) =>
                this.onSuccessHostList(res.json()), (res: Response) => this.onError(res.json()));
    }
    onSuccessHostList(result) {
        this.getAllHostRecords = true
        this.hostList = result;
        console.log(this.hostList);
    }
    onError(error) {
        this.getAllHostRecords = false;

    }

    getHostbyId(hostId) {
        this.hostId = hostId;
        this.dashboardService.getAllHostList()
            .subscribe((res: any) =>
                this.onSuccessgetHostbyId(res.json()), (res: Response) => this.onError(res.json()));
    }

    onSuccessgetHostbyId(result) {
        this.hostList = result;
        for (let i = 0; i < this.hostList.length; i++) {
            if (this.hostId == this.hostList[i].id) {
                this.host = this.hostList[i];
            }
        }
        console.log(this.host);
    }

    getallHostInterface(hostId) {
        this.hostInterfacelist = [];
        this.hostId = hostId;
        this.dashboardService.getHostInterfaceListByHostId(hostId)
            .subscribe((res: any) =>
                this.onSuccessgetHostInterfacebyId(res.json()), (res: Response) => this.onError(res.json()));
    }

    onSuccessgetHostInterfacebyId(data) {
        this.hostInter = null;
        let interfaces = data
        for (let i = 0; i < interfaces.length; i++) {
            if (this.hostId == interfaces[i].hostId) {
                interfaces = interfaces[i];
            }
        }
        this.hostInter = interfaces.hostInterfaces;
    }


    saveHostInterface() {
        if (this.hostInterfaceId) {
            this.dashboardService.updateHostInterface(this.hostInterface)
                .subscribe((res: Host) =>
                    this.onSuccessSavedInterface(res), (res: Response) => this.onError(res.json()));
        }
        else {
            this.dashboardService.createHostInterface(this.hostInterface)
                .subscribe((res: Host) =>
                    this.onSuccessSavedInterface(res), (res: Response) => this.onError(res.json()));
        }
    }

    onSuccessSavedInterface(data) {
        this.toastsManager.success("Interface Saved Successfully", "Success");
        this.getallHostInterface(this.hostInterfaceId);
    }

    getHostInterfacebyId(hostInterfaceId) {
        this.hostInterfaceId = hostInterfaceId;
        this.dashboardService.getHostInterfaceListByHostId(this.hostId)
            .subscribe((res: any) =>
                this.onSuccessgetInterfacebyId(res.json()), (res: Response) => this.onError(res.json()));
    }

    onSuccessgetInterfacebyId(data) {
        let interfaces = data
        for (let i = 0; i < interfaces.length; i++) {
            if (this.hostId == interfaces[i].hostId) {
                interfaces = interfaces[i];
            }
        }
        this.hostInter = interfaces.hostInterfaces
        let result = this.hostInter;
        for (let j = 0; j < this.hostInter.length; j++) {
            if (this.hostInterfaceId == this.hostInter[j].id) {
                this.hostInterface = this.hostInter[j]
            }
        }
    }

    deleteHostInterface(hostInterfaceId) {
        this.dashboardService.deleteHostInterface(hostInterfaceId)
            .subscribe((res: any) =>
                this.getallHostInterface(this.hostInterfaceId))
    }

    deleteHost(hostId) {
        this.dashboardService.deleteHost(hostId)
            .subscribe((res: Host) =>
                this.getAllhost());
    }
}