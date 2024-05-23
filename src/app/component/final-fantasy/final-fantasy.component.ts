import { Component } from '@angular/core';
import {FinalFantasyNComponent} from "./final-fantasy-n/final-fantasy-n.component";

@Component({
  selector: 'app-final-fantasy',
  standalone: true,
  imports: [
    FinalFantasyNComponent
  ],
  templateUrl: './final-fantasy.component.html',
  styleUrl: './final-fantasy.component.scss'
})
export class FinalFantasyComponent {

  ffNumeroter:IFinalFantasyNumeroter[]=[
  {id: 1,name: 'Final Fantasy I',url:"/finalfantasy/ff1"},
  ]
}

interface IFinalFantasyNumeroter{
  id:number;
  name:string;
  url:string;
}
