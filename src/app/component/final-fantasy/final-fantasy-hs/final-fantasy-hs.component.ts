import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-final-fantasy-hs',
  standalone: true,
  imports: [],
  templateUrl: './final-fantasy-hs.component.html',
  styleUrl: './final-fantasy-hs.component.scss'
})
export class FinalFantasyHsComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() images!: string[];
  @Input() lien!:string;
}
