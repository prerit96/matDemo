import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateAuthService } from 'src/Service/validate-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: ValidateAuthService) {}
  canActivate() {
    if(this.auth.getLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
