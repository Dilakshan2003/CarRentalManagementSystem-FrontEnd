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
    this.selectedCar = null; 
  }





  bookingData = {
    bookingId: 0,   
    customerId: '',
    carId: '',         
    startDate: '',
    endDate: '',
    status: 'pending',
    createdDate:''
    
  };










  onBookCar(): void {
  
    if (this.bookingData.startDate && this.bookingData.endDate) {
      this.bookingData.startDate = new Date(this.bookingData.startDate).toISOString();
      this.bookingData.endDate = new Date(this.bookingData.endDate).toISOString();
      this.bookingData.createdDate= new Date(this. bookingData.createdDate).toDateString();
    }

   
    this.bookingData.customerId = '123';  
    this.bookingData.carId = '456';       

   
    this.carService.saveBooking(this.bookingData).subscribe(
      response => {
        
        console.log('Booking saved:', response);

      
        this.bookingData.bookingId = response.bookingId;

        
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


