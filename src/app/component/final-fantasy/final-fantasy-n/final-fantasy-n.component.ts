import {Component, Input, } from '@angular/core';
import {RouterLink} from "@angular/router";



@Component({
  selector: 'app-final-fantasy-n',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './final-fantasy-n.component.html',
  styleUrl: './final-fantasy-n.component.scss'
})
export class FinalFantasyNComponent {


  @Input() id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() images!: string[];
  @Input() lien!: string;
}
