import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class UserRouteAccessService implements CanActivate {
    constructor(private router: Router, private authServerProvider: AuthServerProvider) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        return true;
    }
}