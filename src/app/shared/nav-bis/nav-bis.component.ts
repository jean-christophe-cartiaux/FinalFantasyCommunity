import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {ImageModule} from "primeng/image";
import {AuthService} from "../../service/auth.service";
import {Subscription} from "rxjs";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-nav-bis',
  standalone: true,
  imports: [RouterLink, ButtonModule, ImageModule, MatButton],
  templateUrl: './nav-bis.component.html',
  styleUrl: './nav-bis.component.scss'
})
export class NavBisComponent implements OnInit{
  loggedIn: boolean = false;
  private authSubscription!: Subscription;


  constructor(private authService: AuthService) {

  }
  ngOnInit():void{

    this.authSubscription = this.authService.authStatus.subscribe(status => {
      this.loggedIn = status;
    });
  }

  // ngOnDestroy(): void {
  //   if (this.authSubscription) {
  //     this.authSubscription.unsubscribe();
  //   }
  // }

  logout() {
    this.authService.logout();
  }
}
