import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AppConfig } from '../app.config';
import { Host, HostInterface } from './dashboard.model';


@Injectable()
export class DashboardService {
    constructor(private http: Http) { }

    createHost(host: Host): Observable<Host> {
        const copy: Host = Object.assign({}, host);
        return this.http.post('baseCreateUrl', copy).map((res: Response) => {
            return res.json();
        });
    }

    updateHost(host: Host): Observable<Host> {
        const copy: Host = Object.assign({}, host);
        return this.http.put('baseUpdateUrl', copy).map((res: Response) => {
            return res.json();
        });
    }

    deleteHost(id: string): Observable<Host> {
        return this.http.delete('baseDeleteHost' + id).map((res: Response) => {
            return res.json();
        });
    }

    getAllHostList(): Observable<Response> {
        return this.http.get('baseHostlistUrl');
    }

    getHostById(id): Observable<Host> {
        return this.http.get('baseGetHostbyId' + '/' + id).map((res: Response) => {
            return res.json();
        });
    }

    getHostInterfaceListByHostId(hostId): Observable<Response> {
        return this.http.get('baseHostlistUrl' + '/' + hostId);
    }

    createHostInterface(hostInterface: HostInterface): Observable<HostInterface> {
        const copy: HostInterface = Object.assign({}, hostInterface);
        return this.http.post('baseCreateInterfaceUrl', copy).map((res: Response) => {
            return res.json();
        });
    }

    updateHostInterface(hostInterface: HostInterface): Observable<HostInterface> {
        const copy: HostInterface = Object.assign({}, hostInterface);
        return this.http.put('baseUpdatInterfaceeUrl', copy).map((res: Response) => {
            return res.json();
        });
    }

    getHostInterfaceById(id): Observable<Host> {
        return this.http.get('baseGetHostbyId' + '/' + id).map((res: Response) => {
            return res.json();
        });
    }

    deleteHostInterface(id: string): Observable<Host> {
        return this.http.delete('baseDeleteHostInterface' + id).map((res: Response) => {
            return res.json();
        });
    }

}