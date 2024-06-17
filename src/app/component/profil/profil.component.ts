import { Component } from '@angular/core';
import {PaginatorModule} from "primeng/paginator";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    PaginatorModule,
    MatButton,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {

  updateForm:FormGroup;
  updateSub!:Subscription
  hide=true;

  constructor(private _fb:FormBuilder, private _router:Router, private _authService:AuthService ) {
    this.updateForm = this._fb.group({
      prenom:[null,[Validators.maxLength(25)]],
      nom:[null,[Validators.maxLength(25)]],
      pseudo:[null,[Validators.maxLength(25)]],
      email:[null,[Validators.email]],
      password:[null,[Validators.maxLength(50)]],
      bio:[null,[]],
      idAvatar:[null,[]],
      supportPref:[null,[Validators.maxLength(150)]],
    })
  }


  update(){
    if(this.updateForm.valid){
      this.updateSub= this._authService.modify(this.updateForm.value).subscribe({
        next:()=>{
          this._router.navigate(["/actualiter",{message:'Modification faite avec succès ಠ_ಠ'}]);
        },
        error(err){
          console.log(err)
        }
      })
    }
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

}
