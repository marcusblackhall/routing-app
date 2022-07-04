import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {

    canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

}

export class CanDeactivateeGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?:  RouterStateSnapshot ) {
        

            return component.canDeactivate();
    }





}