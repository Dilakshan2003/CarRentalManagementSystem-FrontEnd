import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAccountService } from '../../Service/user-account.service';
import { updateCustomer } from '../../Models/UserAccount';


@Component({
  selector: 'app-customerupdate',
  standalone: false,

  templateUrl: './customerupdate.component.html',
  styleUrl: './customerupdate.component.css'
})
export class CustomerupdateComponent {


  customerId: string | null = null;  // Store customer ID
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userAccountService: UserAccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateForm = this.fb.group({
      customerId: [localStorage.getItem('customerId')],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[gmail.-]+[c]+[o]+[m]')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      licenceNumber: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', [Validators.required]],
      nic: ['', [Validators.required, Validators.pattern('^([0-9]{12}|[0-9]{9}[vV])$')]], 
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {

    this.customerId = localStorage.getItem('customerId');

    if (this.customerId) {

      this.loadCustomerData();
    } else {
      console.error('Customer ID is missing!');

    }

    // console.log(this.customerId) work
  }

  loadCustomerData() {

    if (this.customerId) {
      this.userAccountService.getCustomerById(this.customerId).subscribe((response:updateCustomer) => {
        if ((response)) {

          this.updateForm.patchValue({
            
            name: response.name,
            email : response.email,
            phoneNumber : response.phoneNumber,
            address :response.address,
            nic:response.nic,
            lisenceNumber : response.licenceNumber
          });
      
        }
      }, error => {
        console.error('Error fetching customer data', error);
      });
    } else {
      console.error('Customer ID is null, cannot fetch data');
    }
  }


  onSubmit() {
    if (this.updateForm.valid) {
      const updatedData = this.updateForm.value;
      const data = {
        name: updatedData.name,
        nic: updatedData.nic ,
        email: updatedData.email,
        phoneNumber: updatedData.phoneNumber,
        address: updatedData.address,
        licenceNumber: updatedData.licenceNumber,
        password: updatedData.password

      }

      let UserId = Number(this.customerId)

      if (UserId) {
        this.userAccountService.updateCustomer(UserId, data).subscribe({
          next: res => {
            console.log(res)
            alert("updated succesfully")
          },
          error: res => {
            console.log(res.error)
          }
        })
      }
    }
  }


}
