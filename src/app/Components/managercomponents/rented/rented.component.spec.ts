import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedComponent } from './rented.component';

describe('RentedComponent', () => {
  let component: RentedComponent;
  let fixture: ComponentFixture<RentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



// import { Component ,  } from '@angular/core';
// import { CarService } from '../../../Service/car.service';
// import { Booking } from '../../../Models/booking';

// @Component({
//   selector: 'app-rented',
//   standalone: false,
  
//   templateUrl: './rented.component.html',
//   styleUrl: './rented.component.css'
// })
// export class RentedComponent  {
 
//   rentedDetails: any[] = [];
//   bookings: Booking[] = [];

   
//   bookingId: number | null = null;
//   booking: any = null;
//   error: string | null = null;
//   isLoading = false;

//   constructor(private CarService: CarService) {}

//   fetchBooking(): void {
//     if (!this.bookingId) {
//       this.error = 'Please enter a booking ID.';
//       return;
//     }
//     this.error = null;
//     this.isLoading = true;

//     this.CarService.getBookingByIds(this.bookingId).subscribe({
//       next: (data) => {
//         this.booking = data;
//         this.isLoading = false;
//       },
//       error: (err) => {
//         console.error('Error fetching booking:', err);
//         this.error = 'Booking not found or an error occurred.';
//         this.isLoading = false;
//         this.booking = null;
//       },
//     });
//   }

//   deleteBooking(): void {
//     if (!this.booking || !this.booking.id) return;

//     if (confirm('Are you sure you want to delete this booking?')) {
//       this.CarService.deleteBooking(this.booking.id).subscribe({
//         next: () => {
//           alert('Booking deleted successfully!');
//           this.booking = null;
//         },
//         error: (err) => {
//           console.error('Error deleting booking:', err);
//           alert('Failed to delete the booking.');
//         },
//       });
//     }
//   }
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  
//   ngOnInit(): void {
//     this.fetchPendingBookings();
//   }

//   // Fetch pending bookings for the manager
//   fetchPendingBookings() {
//     this.CarService.getPendingBookings().subscribe(bookings => {
//       this.bookings = bookings; // Update the bookings property correctly
//       console.log(bookings);
//     });
//   }

//   // Approve or cancel the booking
//   manageBooking(bookingId: number, status: string) {
//     this.CarService.getBookingById(bookingId).subscribe(data => {
//       data.status = status;
//       console.log(data);
//       this.CarService.manageBookingStatus(bookingId, data).subscribe(response => {
//         console.log(`Booking ${status}:`, response);
//         this.fetchPendingBookings(); // Refresh the list after action
//       });
//     })
  
//   }


// }
