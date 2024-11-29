import { Component } from '@angular/core';
import { CarService } from '../../Service/car.service';
import { Car } from '../../Models/Car';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cars: Car[] = [];
  selectedCar: Car | null = null;

  constructor(private carService: CarService) {}



  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  viewDetails(car: Car): void {
    this.selectedCar = car;
  }

  cancel() {
    this.selectedCar = null; // Close the popup by resetting the selectedCar
  }





  bookingData = {
    bookingId: 0,   // This will be set after saving the booking
    customerId: '',
    carId: '',         // This should be populated dynamically
    startDate: '',
    endDate: '',
    status: 'pending', // Default status
  };










  onBookCar(): void {
    // Make sure startDate and endDate are formatted correctly
    if (this.bookingData.startDate && this.bookingData.endDate) {
      this.bookingData.startDate = new Date(this.bookingData.startDate).toISOString();
      this.bookingData.endDate = new Date(this.bookingData.endDate).toISOString();
    }

    // Ensure customerId and carId are set
    this.bookingData.customerId = '123';  // Example: Replace with actual logged-in user ID
    this.bookingData.carId = '456';       // Example: Replace with selected car ID

    // Save the booking data
    this.carService.saveBooking(this.bookingData).subscribe(
      response => {
        // The response should include bookingId
        console.log('Booking saved:', response);

        // Update bookingId from the response (assuming the backend sends it back)
        this.bookingData.bookingId = response.bookingId;

        // Once booking is saved, send the request to the manager
        this.carService.requestToManager(this.bookingData.bookingId).subscribe(
          managerResponse => {
            console.log('Request sent to manager:', managerResponse);
          },
          managerError => {
            console.error('Error sending request to manager:', managerError);
            alert('Bokking added successfully!!!!!!' );
          }
        );
      },
      error => {
        console.error('Error saving booking:', error);
        alert('Error saving booking: ' + error.message);
      }
    );
  }
  


  

}


