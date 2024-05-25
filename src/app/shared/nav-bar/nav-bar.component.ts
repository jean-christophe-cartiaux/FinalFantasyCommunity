import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

export interface IFinalFantasy{
  id:number;
  title:string;
  description:string;
  images:string[];
}


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink

  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  finalfantasyN!:IFinalFantasy |undefined;
  finalfantasyHs!:IFinalFantasy |undefined;

  ffN : IFinalFantasy[]=[]

  ffHs :IFinalFantasy[]=[]

//displayContent(id:number){
  //this.ffN =this.menuItem.find(menuItem=>menuItem.id === id);
  //this.ffHs =this.menuItem.find(menuItem=>menuItem.id === id);
//}
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

