import { Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CardModule} from "primeng/card";
import {MessagesModule} from "primeng/messages";
import {Subscription} from "rxjs";
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MessageModule} from "primeng/message";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    MessagesModule,
    RouterLink,
    MessageModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  private messageSub!:Subscription;

  loginForm:FormGroup;
  loginSub!:Subscription;
  successRegister!:string

  constructor(private _fb:FormBuilder,private _authService:AuthService,private _route:ActivatedRoute,private _router:Router){
    this.loginForm=this._fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.maxLength(24)]],
    })
  }
  ngOnInit():void{
    this.messageSub=this._route.params.subscribe(params => {
      this.successRegister=params['message'];
    })
  }
  login(){
    if(this.loginForm.valid){
      this.loginSub=this._authService.login(this.loginForm.value).subscribe({
        next : (response)=> this._router.navigate(['/home']),
        error:(error)=> console.error(error)
      })

      console.log(this.loginForm)
    }
  }
}
