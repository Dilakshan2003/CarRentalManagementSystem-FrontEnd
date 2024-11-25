import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountService } from '../../Service/user-account.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  { 
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userAccountService: UserAccountService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userAccountService.login(this.loginForm.value).subscribe(response => {
        if (response) {
          this.router.navigate(['/home']);  // Redirect to home page after successful login
        } else {
          alert('Invalid credentials');
        }
      }, error => {
        console.error('Login failed', error);
      });
    }
  }
}
