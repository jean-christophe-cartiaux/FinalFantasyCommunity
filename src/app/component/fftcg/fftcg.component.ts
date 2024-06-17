import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-fftcg',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        RouterLink
    ],
  templateUrl: './fftcg.component.html',
  styleUrl: './fftcg.component.scss'
})
export class FftcgComponent {

}
