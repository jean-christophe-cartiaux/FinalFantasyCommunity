import { Component } from '@angular/core';
import {FloatLabelModule} from "primeng/floatlabel";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FloatLabelModule,
    PaginatorModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  pseudo:string| undefined;
  prenom:string|undefined;
  email:string|undefined;
  pswd!:string;

  registerForm!:FormGroup;

  register(){}
}
