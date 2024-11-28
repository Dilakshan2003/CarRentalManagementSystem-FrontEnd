import { Component } from '@angular/core';
import { BookingService } from '../../Service/booking.service';

@Component({
  selector: 'app-booking',
  standalone: false,
  
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  bookingData = {
    bookingId: 0,
    customerId: 123,  // Example, you can dynamically assign this
    startDate: '',
    endDate: '',
    status: 'pending', // default status
    createdDate: new Date().toISOString()  // current date/time
  };

  constructor(private bookingService: BookingService) { }

  onBookCar() {
    // First, save the booking data
    this.bookingService.saveBooking(this.bookingData).subscribe(response => {
      console.log('Booking saved:', response);
      // Once booking is saved, send the request to the manager
      this.bookingService.requestToManager(this.bookingData.bookingId).subscribe(managerResponse => {
        console.log('Request sent to manager:', managerResponse);
      });
    });
  }

}
