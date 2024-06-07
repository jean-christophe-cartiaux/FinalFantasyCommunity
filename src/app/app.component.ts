import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavBisComponent} from "./shared/nav-bis/nav-bis.component";
import {NavBarComponent} from "./shared/nav-bar/nav-bar.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {TestComponent} from "./component/test/test.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBisComponent, NavBarComponent, FooterComponent, TestComponent,MatSlideToggleModule,MatButtonModule,MatIconModule,FontAwesomeModule,    MatMenuModule,
    MatToolbarModule,

    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalFantasyComunity';

}
