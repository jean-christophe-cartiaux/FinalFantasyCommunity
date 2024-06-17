import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {

    if (this.authService.authStatus.getValue()) {

      // Si true -> .verify((error, user) => {
         // user.roleId
      //}
      if(this.authService.isAdmin()){

        return true;
      }else{
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      this.router.navigate(['/login']); // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
      return false;
    }
  }
}
