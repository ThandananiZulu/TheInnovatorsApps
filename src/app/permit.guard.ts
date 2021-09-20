import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermitGuard implements CanActivate {
  
  val = this.cookie.get("valid");

  constructor(private cookie: CookieService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.val != "Developer")
      {
        return true;
      }
      else{
        alert("Sorry, This page is for the App Clients and not Developers!")
        return false;
      }
  }
  
}
