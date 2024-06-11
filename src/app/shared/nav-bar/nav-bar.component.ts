import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";
import {routes} from "../../app.routes";
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {AuthService} from '../../service/auth.service'


export interface MenuItem {
  id:number;
  label: string;
  icon:string;
}
interface FinalFantasySection {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-nav-bar',
  standalone:true,
  imports: [
    RouterModule,
    MatMenu,
    MatMenuTrigger,
    MatButton,
    MatMenuItem,
    MatToolbar,
    MatIcon,
    MatDivider,
    MatIconButton,
    MatMenuModule,
    MatToolbarModule,
    MatNavList,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatListItem,
    MatExpansionModule

  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  finalFantasySections: FinalFantasySection[] = [];
  finalFantasyHs: MenuItem[] = [];
  expandedSectionIndex: number | null = null;

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2,public authService:AuthService) {}
  ngOnInit() {
    this.finalFantasySections = [
      {
        title: 'FF I-VI',
        items: [
          { id: 1, label: 'Final Fantasy I', icon: 'assets/icons/FF1Full.svg' },
          { id: 2, label: 'Final Fantasy II', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 3, label: 'Final Fantasy III', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 4, label: 'Final Fantasy IV', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 5, label: 'Final Fantasy IV After Years', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 6, label: 'Final Fantasy V', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 7, label: 'Final Fantasy VI', icon: 'src/assets/icons/Gunbreaker.png' }
        ]
      },
      {
        title: 'FF VII Series',
        items: [
          { id: 8, label: 'Final Fantasy VII', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 9, label: 'FF VII Crisis Core', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 10, label: 'FF VII Dirge Of Cerberus', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 11, label: 'FF VII Reunion', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 12, label: 'FF VII Remake', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 13, label: 'FF VII Rebirth', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 14, label: 'FF VII Part 3', icon: 'src/assets/icons/Gunbreaker.png' }
        ]
      },
      {
        title: 'FF VIII-X',
        items: [
          { id: 15, label: 'Final Fantasy VIII', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 16, label: 'Final Fantasy IX', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 17, label: 'Final Fantasy X', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 18, label: 'Final Fantasy X-2', icon: 'src/assets/icons/Gunbreaker.png' }
        ]
      },
      {
        title: 'FF XI-XVI',
        items: [
          { id: 19, label: 'Final Fantasy XI', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 20, label: 'Final Fantasy XII', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 21, label: 'FF XII Revenant Wings', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 22, label: 'Final Fantasy XIII', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 23, label: 'FF XIII-2', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 24, label: 'FF XIII Lightning Return', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 25, label: 'Final Fantasy XIV', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 26, label: 'Final Fantasy XV', icon: 'src/assets/icons/Gunbreaker.png' },
          { id: 27, label: 'Final Fantasy XVI', icon: 'src/assets/icons/Gunbreaker.png' }
        ]
      }
    ];

    this.finalFantasyHs = [
      { id: 28, label: 'Dissidia Final Fantasy NT', icon: '' },
      { id: 29, label: 'Final Fantasy Brave Exvius', icon: '' },
      { id: 30, label: 'Final Fantasy Collection Of Saga', icon: '' },
      { id: 31, label: 'FF Crystal Chronicles Remastered Edition', icon: '' },
      { id: 32, label: 'FF Crystal Defender', icon: '' },
      { id: 33, label: 'Final Fantasy Dissidia', icon: '' },
      { id: 34, label: 'Final Fantasy Dissidia 012', icon: '' },
      { id: 35, label: 'FF Origin Stranger Of Paradise', icon: '' },
      { id: 36, label: 'Final Fantasy Tactics', icon: '' },
      { id: 37, label: 'FF Tactics War Of Lions', icon: '' },
      { id: 38, label: 'Final Fantasy Theatrhythm', icon: '' },
      { id: 39, label: 'FF Theatrhythm Curtain Call', icon: '' },
      { id: 40, label: 'Final Fantasy Type-0', icon: '' },
      { id: 41, label: 'World Of Final Fantasy', icon: '' }
    ];
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.el.nativeElement.contains(e.target)) {
        this.expandedSectionIndex = null;
      }
    });
  }

  toggleSection(index: number) {
    this.expandedSectionIndex = this.expandedSectionIndex === index ? null : index;
  }

  navigate(id: number, type: string) {
    const url = type === 'ffN' ? `/finalfantasyN/${id}` : `/finalfantasyhs/${id}`;
    this.router.navigate([url]);
  }



}

