import { Routes } from '@angular/router';
import {ActuComponent} from "./component/actu/actu.component";
import {AuthGuard} from "./guards/auth.guard";
import {FftcgComponent} from "./component/fftcg/fftcg.component";
import {EventComponent} from "./component/event/event.component";
import {ContactComponent} from "./component/contact/contact.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ForumComponent} from "./component/forum/forum.component";
import {TestComponent} from "./component/test/test.component";
import {FinalFantasyHsComponent} from "./component/final-fantasy-hs/final-fantasy-hs.component";
import {FinalFantasyNComponent} from "./component/final-fantasy-n/final-fantasy-n.component";
import {ProfilComponent} from "./component/profil/profil.component";
import{NavBarComponent} from "./shared/nav-bar/nav-bar.component";
import {AdminComponent} from "./component/admin/admin.component";
import {AdminGuard} from "./guards/admin.guard";
import {ArticleComponent} from "./component/article/article.component";

export const routes: Routes = [
  {path:'', redirectTo: '/actualiter', pathMatch: 'full' },
  {path:'actualiter',component:ActuComponent},
  {path:"fftcg",component:FftcgComponent},
  {path:'event',component:EventComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forum",component:ForumComponent},
  {path:"test",component:TestComponent},
  {path:"finalfantasyN/:id",component:FinalFantasyNComponent},
  {path:"finalfantasyHs/:id",component:FinalFantasyHsComponent},
  {path:"profil",component:ProfilComponent},
  //canActivate:[AuthGuard]
  {path:'creationcontenue',component:AdminComponent,canActivate:[AdminGuard]},
  {path:'article',component:ArticleComponent},
];
