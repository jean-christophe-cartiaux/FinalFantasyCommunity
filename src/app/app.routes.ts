import { Routes } from '@angular/router';
import {ActuComponent} from "./component/actu/actu.component";
import {FinalFantasyComponent} from "./component/final-fantasy/final-fantasy.component";
import {FftcgComponent} from "./component/fftcg/fftcg.component";
import {EventComponent} from "./component/event/event.component";
import {ContactComponent} from "./component/contact/contact.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {ForumComponent} from "./component/forum/forum.component";
import {TestComponent} from "./component/test/test.component";

export const routes: Routes = [
  {path:'', redirectTo: '/actualiter', pathMatch: 'full' },
  {path:'actualiter',component:ActuComponent},
  {path:'FinalFantasy',component:FinalFantasyComponent},
  {path:"fftcg",component:FftcgComponent},
  {path:'event',component:EventComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forum",component:ForumComponent},
  {path:"test",component:TestComponent},
];
