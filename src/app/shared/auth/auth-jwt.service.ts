import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

import { AppConfig } from '../../app.config';

@Injectable()
export class AuthServerProvider {
    constructor(
        private http: Http,
        private $localStorage: LocalStorageService,
        private $sessionStorage: SessionStorageService
    ) { }

    getToken() {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    }

    login(credentials): Observable<any> {
        const data = {
            email: credentials.email,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post(AppConfig.loginURl, data).map(authenticateSuccess.bind(this));

        function authenticateSuccess(resp) {
            console.log('response');
            const bearerToken = JSON.parse(resp._body).id_token;
            if (bearerToken) {
                this.storeAuthenticationToken(bearerToken, credentials.rememberMe);
                return bearerToken;
            }
        }
    }

    loginWithToken(jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        } else {
            return Promise.reject('auth-jwt-service Promise reject');
        }
    }

    // Set and Get Login Information...
    storeLoginInfo(account) {
        this.$localStorage.store('currentAccount', account);
    }

    getLoginInfo() {
        return this.$localStorage.retrieve('currentAccount');
    }

    // Set and Get to Check if it is Super Admin...
    storeIsAdminPanel(value: boolean) {
        this.$localStorage.store('isSuperAdmin', value);
    }

    getIsAdminPanel() {
        return this.$localStorage.retrieve('isSuperAdmin');
    }

    // Set and Get Organization Id & Name...
    storeOrganizationId(id) {
        this.$localStorage.store('organizationId', id);
    }

    storeFacilityId(id) {
        this.$localStorage.store('facilityId', id);
    }



    storeFacilityName(faciltyName) {
        this.$localStorage.store('facilityName', faciltyName);
    }

 

    getFacilityId() {
        return this.$localStorage.retrieve('facilityId');
    }


    getAuthToken() {
        return this.$localStorage.retrieve('authenticationToken');
    }

    storeAuthenticationToken(jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        } else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    }

    logout() {
        this.$localStorage.clear('authenticationToken');
        this.$sessionStorage.clear('authenticationToken');

        this.$localStorage.clear('currentAccount');

        this.$localStorage.clear('organizationId');
        this.$localStorage.clear('organizationName');
        this.$localStorage.clear('facilityId');
        this.$localStorage.clear('facilityName');
    }
}