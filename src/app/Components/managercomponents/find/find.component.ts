import { Component } from '@angular/core';
import { UserAccountService } from '../../../Service/user-account.service';
import { CarService } from '../../../Service/car.service';

@Component({
  selector: 'app-find',
  standalone: false,
  
  templateUrl: './find.component.html',
  styleUrl: './find.component.css'
})
export class FindComponent {
   
  customerId: string = '';
  customer: any = null;
  errorMessage: string = '';

  carId: number | null = null;
  carDetails: any = null;
  message: string = '';
  
  constructor(private UserAccountService: UserAccountService, private carService: CarService) {}



  // Method to fetch customer details by customerId
  getCustomer() {
    if (this.customerId) {
      this.UserAccountService.getCustomerDetails(this.customerId).subscribe(
        (data) => {
          this.customer = data;
          this.errorMessage = '';  // Reset error message if data is found
        },
        (error) => {
          this.errorMessage = 'Customer not found!';
          this.customer = null; // Reset customer data if error occurs
        }
      );
    }
  }

  // Method to delete customer record
  // deleteCustomer() {
  //   if (this.customer) {
  //     this.UserAccountService.deleteCustomer(this.customerId).subscribe(
  //       (response) => {
  //         this.customer = null; // Clear the customer data after deletion
  //         alert ( 'Customer deleted successfully!')
  //       },
  //       (error) => {
         
  //         alert ( 'Error deleting the customer!')
  //       }
  //     );
  //   }
  // }

  deleteCustomerRecords(): void {
    if (this.customer) {
      
      this.customer = null;
      
      
      alert('Car details deleted from the page.');
    } else {
      alert('No car details to delete.');
    }
  
  
  }

//////////////////////////////////////////////////////////////////////////

fetchCarDetails(): void {
  if (this.carId) {
    this.carService.getCarById(this.carId).subscribe(
      (data) => {
        if (data) {
          this.carDetails = data;
          this.message = '';
        } else {
          this.message = 'Car not found.';
          this.carDetails = null;
        }
      },
      (error) => {
        this.message = 'Error fetching car details.';
        this.carDetails = null;
      }
    );
  } else {
    this.message = 'Please enter a car ID.';
  }
}

// Delete car details
deleteCarRecord(): void {
  if (this.carDetails) {
    
    this.carDetails = null;
    
    
    alert('Car details deleted from the page.');
  } else {
    alert('No car details to delete.');
  }


}
}