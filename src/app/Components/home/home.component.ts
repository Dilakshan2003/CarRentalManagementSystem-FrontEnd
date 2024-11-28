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
    bookingId: 0,
    customerId: 123,  // Example, you can dynamically assign this
    startDate: '',
    endDate: '',
    status: 'pending', // default status
    createdDate: new Date().toISOString()  // current date/time
  };



  onBookCar() {
    // First, save the booking data
    this.carService.saveBooking(this.bookingData).subscribe(response => {
      console.log('Booking saved:', response);
      // Once booking is saved, send the request to the manager
      this.carService.requestToManager(this.bookingData.bookingId).subscribe(managerResponse => {
        console.log('Request sent to manager:', managerResponse);
      });
    });
  }

}


