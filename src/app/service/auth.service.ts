import { Injectable } from '@angular/core';
import {BehaviorSubject,map,Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import * as jwt_decode from "jwt-decode";
import {getMatFormFieldMissingControlError} from "@angular/material/form-field";
import {jwtDecode} from "jwt-decode";




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
        const token = utilisateurs.token;
        localStorage.setItem('token',token);
        this.authStatus.next(true);
        return utilisateurs;
      }))
  }
  isAdmin():boolean{

    const utilisateurstocker= localStorage.getItem('token');




    if(utilisateurstocker){
      const jwt:any = jwt_decode.jwtDecode(utilisateurstocker)


      if(jwt.roleId === '7FDAA728-2C2A-EF11-94EF-005056A7F3D9'){
          return true;
      }
    }
    return false
   // return utilisateurs.roles && utilisateurs.roles.includes('Admin');
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
  modify(data:any):Observable<any> {

    const utilisateurstocker= localStorage.getItem('token')
    if(utilisateurstocker){
      try {
        const jwt:any = jwt_decode.jwtDecode(utilisateurstocker);
        if (jwt && jwt.roleId){
          const patch = Object.keys(data)
            .filter(key => data[key] !== null && data[key] !== undefined)
            .reduce((acc: any, key) => {
              acc[key] = data[key];
              return acc;
            }, {});
            return this.http.patch<any>(`http://localhost:3000/utilisateurs/${jwt.id}`,patch)
        }else {
          console.error('roleId non Trouver ╰(*°▽°*)╯');
          throw new Error("roleId non Trouver ╰(*°▽°*)╯");
        }
      }catch (error){
        console.error('Error decodage du token',error);
        throw new Error("Error decodage du token',error");
      }
    }else{

      console.error('pas de token dans le local storage');
      throw new Error("pas de token dans le local storage");
    }

  }
}


