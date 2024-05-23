import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {ImageModule} from "primeng/image";
@Component({
  selector: 'app-nav-bis',
  standalone: true,
  imports: [RouterLink,ButtonModule,ImageModule],
  templateUrl: './nav-bis.component.html',
  styleUrl: './nav-bis.component.scss'
})
export class NavBisComponent {

}
