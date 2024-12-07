import { Component } from '@angular/core';
import { CarService } from '../../../Service/car.service';
import { Booking } from '../../../Models/booking';

@Component({
  selector: 'app-manager-inbox',
  standalone: false,
  
  templateUrl: './manager-inbox.component.html',
  styleUrl: './manager-inbox.component.css'
})
export class ManagerInboxComponent {
bookings: Booking[] = []; // An array of bookings fetched from the service

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Fetch bookings from the service
    this.carService.getCustomerBookings().subscribe((data: Booking[]) => {
      this.bookings = data;
    });
  }

  sendMessage(bookingId: number): void {
    const messageElement = document.getElementById(`${bookingId}`) as HTMLTextAreaElement;
    const message = messageElement.value;

    if (message.trim()) {
      // Log message and bookingId for debugging
      console.log(`Sending message for Booking ID: ${bookingId}`);
      console.log(`Message: ${message}`);

      this.carService.sendMessage(message).subscribe(() => {
        alert('Message sent successfully!');
        messageElement.value = ''; // Clear the textarea
      });
    } else {
      alert('Please enter a message before sending.');
    }
  }

}
