import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FinalFantasyNComponent } from "../../component/final-fantasy-n/final-fantasy-n.component";
import { FinalFantasyHsComponent } from "../../component/final-fantasy-hs/final-fantasy-hs.component";

import { MenubarModule } from "primeng/menubar";
import { MegaMenuItem } from "primeng/api";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";
import { NgClass } from "@angular/common";
import { MegaMenuModule } from "primeng/megamenu";

export interface IFinalFantasy {
  id: number;
  title: string;
  description: string;
  images: string[];
  lien: string;
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    FinalFantasyNComponent,
    FinalFantasyHsComponent,

    MenubarModule,
    BadgeModule,
    AvatarModule,
    NgClass,
    MegaMenuModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Actualités',
        icon: 'pi pi-home',
        routerLink: ['/actualiter']
      },
      {
        label: 'Final Fantasy n°',
        icon: 'assets/icons/Gunbreaker.png',
        items: [
          [
            {
              label: 'FF I-VI',
              items: [
                { label: 'Final Fantasy I', icon: 'assets/icons/FF1Full.svg', command: () => this.navigate(1, 'ffN') },
                { label: 'Final Fantasy II', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff2'] },
                { label: 'Final Fantasy III', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff3'] },
                { label: 'Final Fantasy IV', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff4'] },
                { label: 'Final Fantasy IV After Years', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff4after'] },
                { label: 'Final Fantasy V', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff5'] },
                { label: 'Final Fantasy VI', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff6'] },
              ]
            }
          ],
          [
            {
              label: 'FF VII Series',
              items: [
                { label: 'Final Fantasy VII', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff7'] },
                { label: 'FF VII Crisis Core', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff7CrisisCore'] },
                { label: 'FF VII Dirge Of Cerberus', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff7DrigeOfCerberus'] },
                { label: 'FF VII Reunion', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff7Reunion'] },
                { label: 'FF VII Remake', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff7Remake'] },
                { label: 'FF VII Rebirth', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff7Rebirth'] },
                { label: 'FF VII Part 3', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff7part3'] },
              ]
            }
          ],
          [
            {
              label: 'FF VIII-X',
              items: [
                { label: 'Final Fantasy VIII', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff8'] },
                { label: 'Final Fantasy IX', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff9'] },
                { label: 'Final Fantasy X', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff10'] },
                { label: 'Final Fantasy X-2', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff10-2'] },
              ]
            }
          ],
          [
            {
              label: 'FF XI-XVI',
              items: [
                { label: 'Final Fantasy XI', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff11'] },
                { label: 'Final Fantasy XII', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff12'] },
                { label: 'FF XII Revenant Wings', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff12RevenantWings'] },
                { label: 'Final Fantasy XIII', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff13'] },
                { label: 'FF XIII-2', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff13-2'] },
                { label: 'FF XIII Lightning Return', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff13LightningReturn'] },
                { label: 'Final Fantasy XIV', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff14'] },
                { label: 'Final Fantasy XV', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff15'] },
                { label: 'Final Fantasy XVI', icon: 'src/assets/icons/Gunbreaker.png', routerLink: ['/ff16'] },
              ]
            }
          ]
        ],
      },
      {
        label: 'Final Fantasy Hors-série',
        icon: 'assets/img/mob_book_bis.png',
        items: [
          [
            { label: 'Dissidia Final Fantasy NT', icon: '', routerLink: ['/DissidiaFfNt'] },
            { label: 'Final Fantasy Brave Exvius', icon: '', routerLink: ['/BraveExvius'] },
            { label: 'Final Fantasy Collection Of Saga', icon: '', routerLink: ['/CollectionSaga'] },
            { label: 'FF Crystal Chronicles Remastered Edition', icon: '', routerLink: ['/CrystalChronicles'] },
          ],
          [
            { label: 'FF Crystal Defender', icon: '', routerLink: ['/CrystalDefender'] },
            { label: 'Final Fantasy Dissidia', icon: '', routerLink: ['/Dissidia'] },
            { label: 'Final Fantasy Dissidia 012', icon: '', routerLink: ['/Dissidia012'] },
            { label: 'FF Origin Stranger Of Paradise', icon: '', routerLink: ['/Origin'] },
          ],
          [
            { label: 'Final Fantasy Tactics', icon: '', routerLink: ['/tactics'] },
            { label: 'FF Tactics War Of Lions', icon: '', routerLink: ['/TacticWarOfLions'] },
            { label: 'Final Fantasy Theatrhythm', icon: '', routerLink: ['/Theatrhythm'] },
            { label: 'FF Theatrhythm Curtain Call', icon: '', routerLink: ['/TheatrhythmCurtainCall'] },
          ],
          [
            { label: 'Final Fantasy Type-0', icon: '', routerLink: ['/Type-0'] },
            { label: 'World Of FinalFantasy', icon: '', routerLink: ['/WorldOfFinalFantasy'] },
          ],
        ],
      },
      {
        label: 'FFTCG',
        icon: 'pi pi-envelope',
        routerLink: ["/fftcg"]
      },
      {
        label: 'Event',
        icon: 'pi pi-envelope',
        routerLink: ['/event']
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: ['/contact']
      }
    ];
  }

  navigate(id: number, type: string) {
    const url = type === 'ffN' ? `/finalfantasyN/${id}` : `/finalfantasyhs/${id}`;
    this.router.navigate([url]);
  }
}
