import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountService } from '../../Service/user-account.service';


@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserAccountService]
})


export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userAccountService: UserAccountService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      licenceNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      nic: ['', [Validators.required, Validators.pattern('^[0-9]{9}[vVxX]$')]],
      password: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userAccountService.register(this.registerForm.value).subscribe(response => {
        alert('User registered successfully');
        this.router.navigate(['/login']);  // Redirect to login page after registration
      }, error => {
        console.error('Registration failed', error);
      });
    }
  }
}
    