import {Component, Input, output} from '@angular/core';

@Component({
  selector: 'app-final-fantasy-n',
  standalone: true,
  imports: [],
  templateUrl: './final-fantasy-n.component.html',
  styleUrl: './final-fantasy-n.component.scss'
})
export class FinalFantasyNComponent {


  @Input() id:number=0;
  @Input() name:string="";
  @Input() url:string='';
  @Input() img:string=''
}
