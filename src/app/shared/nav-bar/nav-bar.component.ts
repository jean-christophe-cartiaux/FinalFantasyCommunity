import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FinalFantasyNComponent} from "../../component/final-fantasy/final-fantasy-n/final-fantasy-n.component";
import {FinalFantasyHsComponent} from "../../component/final-fantasy/final-fantasy-hs/final-fantasy-hs.component";
import {FinalFantasyComponent} from "../../component/final-fantasy/final-fantasy.component";

export interface IFinalFantasy{
  id:number;
  title:string;
  description:string;
  images:string[];
  lien:string;
}


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    FinalFantasyNComponent,
    FinalFantasyHsComponent,
    FinalFantasyComponent

  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  // finalfantasyN!:IFinalFantasy | undefined;
  // finalfantasyHs!:IFinalFantasy | undefined ;
  // //
  // ffN : IFinalFantasy[]=[
  //   {id: 1,title: "truc", description: "muche de truc", images: ["truc, muche, moche"],lien:'/ff1'},
  //   {id: 2,title: "truc2", description: "muche de truc2", images: ["truc, muche, moche"],lien:'/ff1'},
  //   {id: 3,title: "truc3", description: "muche de truc3", images: ["truc, muche, moche"],lien:'/ff1'},
  //   {id: 4,title: "truc4", description: "muche de truc4", images: ["truc, muche, moche"],lien:'/ff1'},
  //   {id: 5,title: "truc5", description: "muche de truc5", images: ["truc, muche, moche"],lien:'/ff1'},
  // ]
  //
  // ffHs :IFinalFantasy[]=[
  //   {id: 6,title: "truc6", description: "muche de truc6", images: ["truc, muche, moche"]},
  //   {id: 7,title: "truc7", description: "muche de truc7", images: ["truc, muche, moche"]},
  //   {id: 8,title: "truc8", description: "muche de truc8", images: ["truc, muche, moche"]},
  //   {id: 9,title: "truc9", description: "muche de truc9", images: ["truc, muche, moche"]},
  //   {id: 10,title: "truc10", description: "muche de truc10", images: ["truc, muche, moche"]},
  // ]
  //
  // displayContent(id: number, type: 'N' | 'HS') {
  //   if (type === 'N') {
  //     this.finalfantasyN = this.ffN.find(menuItem => menuItem.id === id);
  //     this.finalfantasyHs = undefined;
  //   } else if (type === 'HS') {
  //     this.finalfantasyHs = this.ffHs.find(menuItem => menuItem.id === id);
  //     this.finalfantasyN = undefined;
  //   }
  // }

  isDropdownOpen: boolean[] = [false, false]; // Tableau pour gérer les états des dropdowns
  isFading: boolean[] = [false, false]; // Tableau pour gérer les états de transition des dropdowns
  timeout: any[] = [null, null]; // Tableau pour stocker les timeouts des dropdowns

  onMouseEnter(index: number) {
    clearTimeout(this.timeout[index]);
    this.isDropdownOpen[index] = true;
    this.isFading[index] = true;
  }

  onMouseLeave(index: number) {
    this.isFading[index] = false;
    this.timeout[index] = setTimeout(() => {
      this.isDropdownOpen[index] = false;
    }, 250); // Délai de 300ms avant la disparition
  }

}

