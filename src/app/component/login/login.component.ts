import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../../service/auth.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatIconButton,
    MatButton,
    RouterLink,
  ]
})
export class LoginComponent implements OnInit {
  private messageSub!: Subscription;
  loginForm: FormGroup;
  loginSub!: Subscription;
  successRegister!: string;
  hide = true;  // used for password visibility toggle


  constructor(private _fb: FormBuilder, private _authService: AuthService, private _route: ActivatedRoute, private _router: Router, private snackBar: MatSnackBar) {
    this.loginForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.maxLength(24)]],
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.successRegister = params['message'];
      if (this.successRegister) {
        this.snackBar.open(this.successRegister, 'Close', {
          duration: 3000,
        });
      }
    });
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  login(): void {

    if (this.loginForm.valid) {
      this.loginSub = this._authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this._router.navigate(['/profil']);
        },
        error: (error) => console.error(error)
      });
      console.log(this.loginForm);
    }
  }
}
