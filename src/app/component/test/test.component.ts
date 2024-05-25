import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
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
    }, 300); // Délai de 300ms avant la disparition
  }
}
