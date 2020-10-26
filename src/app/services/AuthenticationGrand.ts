import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationGrand implements CanActivate {

    user: Observable<firebase.User>;

    constructor(afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.user != null && this.user != undefined) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}