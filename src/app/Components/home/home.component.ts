import { Component } from '@angular/core';
import { CarService } from '../../Service/car.service';
import { Car } from '../../Models/Car';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cars: Car[] = [];
  selectedCar: Car | null = null;
  bookingForm: any;

  bookingData = {
    customerId: localStorage.getItem('customerId'),
    carId: '',
    startDate: '',
    endDate: '',
    status: 'pending',
  };

  constructor(private carService: CarService, private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      customerId: [localStorage.getItem('customerId')],
      carId: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: 'pending',
    })
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  viewDetails(car: Car): void {
    this.selectedCar = car;
    // Set dynamic carId when a car is selected
    this.bookingData.carId = car.id.toString(); // Convert to string

  }

  cancel() {
    this.selectedCar = null;
  }

  onBookCar(): void {
    // Set the correct start and end dates in the form before submitting
    this.bookingForm.patchValue({
      startDate: new Date(this.bookingForm.value.startDate).toISOString(),
      endDate: new Date(this.bookingForm.value.endDate).toISOString(),
      carId: this.selectedCar?.id.toString()
    });
  
    // Now submit the form
    this.carService.saveBooking(this.bookingForm.value).subscribe(
      response => {
        console.log('Booking saved:', response);
        this.bookingForm.reset();  // Reset the form after successful submission
        alert('Booking added successfully!');
        alert('check your message box later');
      }
    );
  }
  



}


