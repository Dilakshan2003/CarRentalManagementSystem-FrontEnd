import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccountService } from '../../Service/user-account.service';
import { UserAccount } from '../../Models/UserAccount';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserAccountService]
})


export class RegisterComponent {

  constructor(private fb: FormBuilder, private userAccountService: UserAccountService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
     
            
      nic: ['', [Validators.required]],           
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      licenceNumber: ['', [Validators.required]],     
    });
  }

  passwordInput!: string;
  registerForm: FormGroup;
  userAccount!: UserAccount;

  checkPassword(event: any) {           
    if (event.target.value !== this.passwordInput) {
      console.log(false);
    } else {
      console.log(true);
    }
  }

  onRegister() {
    
    this.userAccount = this.registerForm.value;

    console.log(this.userAccount);

    const newAccount = {
     
      "nic": this.registerForm.get('nic')?.value,
      "name": this.registerForm.get('name')?.value,
      "email": this.registerForm.get('email')?.value,
      "phoneNumber": this.registerForm.get('phoneNumber')?.value,
      "address": this.registerForm.get('address')?.value,
      "password": this.registerForm.get('password')?.value,
      "licenceNumber": this.registerForm.get('licenceNumber')?.value,
    };


    this.userAccountService.registerUser(newAccount).subscribe(data => {
      console.log(data);
    });
   }
}

