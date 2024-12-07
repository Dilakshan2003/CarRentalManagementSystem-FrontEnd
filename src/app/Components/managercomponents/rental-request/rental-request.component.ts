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
  message = {
    id: '',
    messageContent: '',
    customerId: localStorage.getItem('customerId')
   
  }

  bookings: Booking[] = []; // Declare bookings property with type

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.fetchPendingBookings();
  }

  // Fetch pending bookings for the manager
  fetchPendingBookings() {
    this.carService.getPendingBookings().subscribe(bookings => {
      this.bookings = bookings; // Update the bookings property correctly
      console.log(bookings);
    });
  }

  // Approve or cancel the booking
  manageBooking(bookingId: number, status: string) {
    this.carService.manageBookingStatus(bookingId, status).subscribe(response => {
      console.log(`Booking ${status}:`, response);
      this.fetchPendingBookings(); // Refresh the list after action
    });
  }

  sendMessage(bookingId : number) {
    let messageContent = document.getElementById(`${bookingId}`) as HTMLInputElement;
    let message = messageContent.value;
    console.log(message);
    if (message) {
      console.log(message)
     let reply = {
        customerId : localStorage.getItem('customerId'),
        sender : 'Manager',
        content : message
      }
      alert('Message sent successfully!'); 
      this.carService.sendMessage(reply).subscribe((data) => {
        message = '';
        console.log(data);
      });
    }
  }




  deleteBooking(bookingId: number) {
    if (confirm('Are you sure you want to delete this booking?')) {
      this.carService.deleteBooking(bookingId).subscribe(response => {
        console.log('Booking deleted:', response);

        this.fetchPendingBookings();
      });
    }
  }

}
