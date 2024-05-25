import { Component } from '@angular/core';
import {FinalFantasyNComponent} from "./final-fantasy-n/final-fantasy-n.component";
import {FinalFantasyHsComponent} from "./final-fantasy-hs/final-fantasy-hs.component";
import {IFinalFantasy} from "../../shared/nav-bar/nav-bar.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-final-fantasy',
  standalone: true,
  imports: [
    FinalFantasyNComponent,
    FinalFantasyHsComponent,
    RouterLink
  ],
  templateUrl: './final-fantasy.component.html',
  styleUrl: './final-fantasy.component.scss'
})
export class FinalFantasyComponent {
  finalfantasyN!:IFinalFantasy | undefined;
  finalfantasyHs!:IFinalFantasy | undefined ;

  ffN : IFinalFantasy[]=[
    {id: 1,title: "truc", description: "muche de truc", images: ["truc, muche, moche"],lien:'ff1'},
    {id: 2,title: "truc2", description: "muche de truc2", images: ["truc, muche, moche"],lien:'ff1'},
    {id: 3,title: "truc3", description: "muche de truc3", images: ["truc, muche, moche"],lien:'ff1'},
    {id: 4,title: "truc4", description: "muche de truc4", images: ["truc, muche, moche"],lien:'ff1'},
    {id: 5,title: "truc5", description: "muche de truc5", images: ["truc, muche, moche"],lien:'ff1'},
  ]

  ffHs :IFinalFantasy[]=[
    {id: 6,title: "truc6", description: "muche de truc6", images: ["truc, muche, moche"],lien:'ff1'},
    {id: 7,title: "truc7", description: "muche de truc7", images: ["truc, muche, moche"],lien:'ff1'},
    {id: 8,title: "truc8", description: "muche de truc8", images: ["truc, muche, moche"],lien:'ff1'},
    {id: 9,title: "truc9", description: "muche de truc9", images: ["truc, muche, moche"],lien:'ff1'},
    {id: 10,title: "truc10", description: "muche de truc10", images: ["truc, muche, moche"],lien:'ff1'},
  ]



  displayContent(id: number, type: 'N' | 'HS') {
    if (type === 'N') {
      this.finalfantasyN = this.ffN.find(menuItem => menuItem.id === id);
      this.finalfantasyHs = undefined;
    } else if (type === 'HS') {
      this.finalfantasyHs = this.ffHs.find(menuItem => menuItem.id === id);
      this.finalfantasyN = undefined;
    }
  }
}
