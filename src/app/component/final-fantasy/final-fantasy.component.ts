import { Component } from '@angular/core';
import {FinalFantasyNComponent} from "./final-fantasy-n/final-fantasy-n.component";
import {FinalFantasyHsComponent} from "./final-fantasy-hs/final-fantasy-hs.component";

@Component({
  selector: 'app-final-fantasy',
  standalone: true,
  imports: [
    FinalFantasyNComponent,
    FinalFantasyHsComponent
  ],
  templateUrl: './final-fantasy.component.html',
  styleUrl: './final-fantasy.component.scss'
})
export class FinalFantasyComponent {

  ffNumeroter:IFinalFantasyNumeroter[]=[
  {id: 1,name: 'Final Fantasy I',url:"/finalfantasy/ff1",img:"src/assets/img/FF1Full.jpg"},
  ];


  ffHorsSerie:IFinalFantasyHorsSeries[]=[
    {id:1,name:"Dissidia Final Fantasy NT",url:'/DissidiaFfNt'}

  ]
}

interface IFinalFantasyNumeroter{
  id:number;
  name:string;
  url:string;
  img:string;
}

interface IFinalFantasyHorsSeries{
  id:number;
  name:string;
  url: string;
}
