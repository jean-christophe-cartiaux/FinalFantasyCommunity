import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { AuthService } from "../../service/auth.service";
import { Subscription } from "rxjs";
import {Router, RouterLink} from "@angular/router";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  registerSub!: Subscription;
  hide = true;  // used for password visibility toggle

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.registerForm = this._fb.group({
      pseudo: [null, [Validators.required, Validators.maxLength(12)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.maxLength(50)]]
    })
  }

  register() {
    if (this.registerForm.valid) {
      this.registerSub = this._authService.register(this.registerForm.value).subscribe({
        next: (response: any) => {
          this._router.navigate(['/login', { message: 'Création de compte réussi ╰(*°▽°*)╯' }]);
        },
        error: (error) => console.error(error)
      });
    }
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}
