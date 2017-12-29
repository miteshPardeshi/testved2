import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AppConfig } from '../../app.config';

@Injectable()
export class MyAccountService {
    constructor(private http: Http) { }

    get(): Observable<any> {
        return this.http.get(AppConfig.accountURL).map((res: Response) => res.json());
    }

    save(account: any): Observable<Response> {
        return this.http.post(AppConfig.accountURL, account);
    }

    savePassword(newPassword: string): Observable<any> {
        return this.http.post(AppConfig.changePasswordURL, newPassword);
    }

    updatePassword(keyAndPassword: any): Observable<any> {
        return this.http.post(AppConfig.changePasswordURL, keyAndPassword);
    }
}