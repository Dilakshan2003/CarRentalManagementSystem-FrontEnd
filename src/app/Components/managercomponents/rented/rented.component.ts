import { Component, OnInit ,  } from '@angular/core';
import { CarService } from '../../../Service/car.service';

@Component({
  selector: 'app-rented',
  standalone: false,
  
  templateUrl: './rented.component.html',
  styleUrl: './rented.component.css'
})
export class RentedComponent  implements OnInit{
 


  rentData: any[] = [];


   
  bookingId: number | null = null;
  booking: any = null;
  error: string | null = null;
  isLoading = false;
  http: any;

  constructor(private CarService: CarService) {}
ngOnInit(): void {
  this.fetchRentData();
}
  fetchBooking(): void {
    if (!this.bookingId) {
      this.error = 'Please enter a booking ID.';
      return;
    }
    this.error = null;
    this.isLoading = true;

    this.CarService.getBookingByIds(this.bookingId).subscribe({
      next: (data) => {
        this.booking = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching booking:', err);
        this.error = 'Booking not found or an error occurred.';
        this.isLoading = false;
        this.booking = null;
      },
    });
  }


  fetchRentData() {
   this.CarService.getRentData().subscribe(data => {
    this.rentData = data;
   })
  }


}