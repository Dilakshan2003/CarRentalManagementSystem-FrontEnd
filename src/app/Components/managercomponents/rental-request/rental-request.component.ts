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
   
  Booking !: Booking[];
  // bookings = [];  // List of bookings waiting for approval

  constructor(private car: CarService) { }

  ngOnInit(): void {
    this.fetchPendingBookings();
  }

  // Fetch pending bookings for the manager
  fetchPendingBookings() {
    this.car.getPendingBookings().subscribe(bookings => {
      bookings = bookings;
    });
  }

  // Approve or cancel the booking
  manageBooking(bookingId: number, status: string) {
    this.car.manageBookingStatus(bookingId, status).subscribe(response => {
      console.log(`Booking ${status}:`, response);
      this.fetchPendingBookings(); // Refresh the list after action
    });
  }


}
