import { Injectable } from '@angular/core';
import {BehaviorSubject,map,Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root',

})
export class AuthService {
  public authStatus!: BehaviorSubject<boolean>;

  constructor(private http:HttpClient, private router:Router) {
    const storedToken = localStorage.getItem('token');
    this.authStatus = new BehaviorSubject<boolean>(storedToken ? true : false);
  }
  login(data:any):Observable<any> {
    const {email,password}=data;
    return this.http.post<any>('http://localhost:3000/utilisateurs/login',{email,mdpHash:password})
      .pipe(map(utilisateurs => {
        localStorage.setItem('token',JSON.stringify(utilisateurs));
        this.authStatus.next(true);
        return utilisateurs;
      }))
  }
  isAdmin():boolean{
    const utilisateurstocker= localStorage.getItem('token');
    if(!utilisateurstocker){
      return false;
    }
    const utilisateurs=JSON.parse(utilisateurstocker);
    return utilisateurs.roles && utilisateurs.roles.includes('Admin');
  }
  logout(){
    localStorage.removeItem('token');
    this.authStatus.next(false);
    this.router.navigate(['/actualiter']);
  }
  register(data:any){
    const {pseudo,email,password}=data;
    return this.http.post<any>('http://localhost:3000/utilisateurs/register',{pseudo,email,mdpHash:password})
  }
}
