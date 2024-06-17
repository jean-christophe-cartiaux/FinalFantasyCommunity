import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-actu',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    RouterLink
  ],
  templateUrl: './actu.component.html',
  styleUrl: './actu.component.scss'
})
export class ActuComponent {

}
