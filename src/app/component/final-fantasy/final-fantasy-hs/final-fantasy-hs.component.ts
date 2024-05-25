import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-final-fantasy-hs',
  standalone: true,
  imports: [],
  templateUrl: './final-fantasy-hs.component.html',
  styleUrl: './final-fantasy-hs.component.scss'
})
export class FinalFantasyHsComponent {
  @Input() id:number=0;
  @Input() name:string="";
  @Input() url:string='';
}
