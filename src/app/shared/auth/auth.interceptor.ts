import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptionsArgs, Request, Response, ConnectionBackend, RequestOptions } from "@angular/http";
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthServerProvider } from './auth-jwt.service';
import { AppConfig } from '../../app.config';

export class AuthInterceptor extends Http {
    constructor(
        protected backend: ConnectionBackend,
        protected defaultOptions: RequestOptions,
        private localStorage: LocalStorageService,
        private sessionStorage: SessionStorageService,
        private toastr: ToastsManager
    ) {
        super(backend, defaultOptions);
    }

    setCustomHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (!options) {
            options = new RequestOptions({});
        }
        if (!options.headers) {
            options.headers = new Headers();
            options.headers.set("Content-Type", 'application/json');
        }

        const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (token) {
            options.headers.set("Authorization", 'Bearer ' + token);
        }

        return options;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        options = this.setCustomHeaders(options);
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): any {
        options = this.setCustomHeaders(options);
        var geturl = url;
        var urlAppend = geturl.substring(0, 12);
        if (urlAppend == "https://maps") {  //change for google map api
            let headers = new Headers({ 'Accept': 'application/json' });
            let options1 = new RequestOptions({ headers: headers });
            return super.get(url, options1);
        }
        else {
            return super.get(url, options)
                .map((res: any) => {
                    return res;
                })
            // .catch((error: any) => {
            //     if (error.status === 401) {
            //         this.localStorage.clear('authenticationToken');
            //         this.sessionStorage.clear('authenticationToken');
            //         location.href = AppConfig.mainLoginURL;
            //     }
            //     return Observable.throw(error);
            // });
        }
    }

    post(url: string, body: any, options?: RequestOptionsArgs): any {
        options = this.setCustomHeaders(options);
        console.log('called', url, body);

        return super.post(url, body, options)
            .map((res: any) => {
                return res;
            })
        // .catch((error: any) => {
        //     console.log('catch', error._body);
        //     if (error.status === 401) {
        //         this.localStorage.clear('authenticationToken');
        //         this.sessionStorage.clear('authenticationToken');
        //         location.href = AppConfig.mainLoginURL;
        //     }
        //     return Observable.throw(error);
        // });
    }

    put(url: string, body: string, options?: RequestOptionsArgs): any {
        options = this.setCustomHeaders(options);
        return super.put(url, body, options).map((res: any) => {
            return res;
        })
        // .catch((error: any): Observable<Response> => {
        //     if (error.status === 401) {
        //         this.localStorage.clear('authenticationToken');
        //         this.sessionStorage.clear('authenticationToken');
        //         location.href = AppConfig.mainLoginURL;
        //     }
        //     return Observable.throw(error);
        // });
    }

    delete(url: string, options?: RequestOptionsArgs): any {
        options = this.setCustomHeaders(options);
        return super.delete(url, options).map((res: any) => {
            return res;
        })
        // .catch((error: any): Observable<Response> => {
        //     if (error.status === 401) {
        //         this.localStorage.clear('authenticationToken');
        //         this.sessionStorage.clear('authenticationToken');
        //         location.href = AppConfig.mainLoginURL;
        //     }
        //     return Observable.throw(error);
        // });
    }
}