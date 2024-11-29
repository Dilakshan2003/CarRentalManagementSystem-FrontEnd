import { Component } from '@angular/core';
import { CarService } from '../../../Service/car.service';
import { Booking } from '../../../Models/booking';


@Component({
  selector: 'app-rental-request',
  standalone: false,
  
  templateUrl: './rental-request.component.html',
  styleUrl: './rental-request.component.css'
})
export class RentalRequestComponent {
   
  bookings: Booking[] = []; // Declare bookings property with type

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.fetchPendingBookings();
  }

  // Fetch pending bookings for the manager
  fetchPendingBookings() {
    this.carService.getPendingBookings().subscribe(bookings => {
      this.bookings = bookings; // Update the bookings property correctly
    });
  }

  // Approve or cancel the booking
  manageBooking(bookingId: number, status: string) {
    this.carService.manageBookingStatus(bookingId, status).subscribe(response => {
      console.log(`Booking ${status}:`, response);
      this.fetchPendingBookings(); // Refresh the list after action
    });
  }


}
