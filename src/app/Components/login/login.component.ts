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
      email: [ '',  [ Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[gmail.-]+[c]+[o]+[m]')],],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    
    const hardcodedManagerEmail = 'a@gmail.com';
    const hardcodedManagerPassword = 'aaaaaaaa';

    if (this.loginForm.valid) {
      
      const { email, password } = this.loginForm.value;

      
      if (email === hardcodedManagerEmail && password === hardcodedManagerPassword) {
        this.router.navigate(['/managerdashboard']);
      } else {
        
        this.userAccountService.login(this.loginForm.value).subscribe(
          (response) => {
            if (response) {
              console.log(response);
              let user = JSON.parse(JSON.stringify(response))
              localStorage.setItem('customerId' , user.id)
              this.router.navigate(['/home']);
            } else {
              alert('Invalid credentials');
            }
          },
          (error) => {
            console.error('Login failed', error);
            alert('Login failed. Please try again.');
          }
        );
      }
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}
