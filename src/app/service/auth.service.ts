import { Injectable } from '@angular/core';
import {BehaviorSubject,map,Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root',

})
export class AuthService {
  public authStatus!: BehaviorSubject<boolean>;

  constructor(private http:HttpClient) {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.authStatus=new BehaviorSubject<boolean>(true);
    }else {
      this.authStatus=new BehaviorSubject<boolean>(false);
    }
  }
  login(data:any){
    const {email,mdpHash}=data;
    return this.http.post<any>('http://localhost:3000/utilisateurs/login',{email,mdpHash})
      .pipe(map(utilisateurs => {
        localStorage.setItem('token',JSON.stringify(utilisateurs));
        this.authStatus.next(true);
        return utilisateurs;
      }))
  }
  logout(){
    localStorage.removeItem('token');
    this.authStatus.next(false);
  }
  register(data:any){
    const {pseudo,email,mdpHash}=data;
    return this.http.post<any>('http://localhost:3000/utilisateurs/register',{pseudo,email,mdpHash})
  }
}
