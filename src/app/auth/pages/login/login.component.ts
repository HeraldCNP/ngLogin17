import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderDirective } from '../../../directivess/loader.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, RouterModule, ReactiveFormsModule, LoaderDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: any;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService)
  private _snackBar = inject(MatSnackBar)
  private _router = inject(Router)
  constructor() { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get form() {
    return this.loginForm.controls
  }

  login() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password)
      .subscribe({
        next: () => this._router.navigateByUrl('/dashboard'),
        error: (error) => {
          this._snackBar.open(error.error.message, 'Cerrar', { duration: 3 * 1000 });
        }
      })

   
  }
}
