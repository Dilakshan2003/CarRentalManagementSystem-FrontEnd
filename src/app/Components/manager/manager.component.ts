import { Component,OnInit } from '@angular/core';
import { CarService } from '../../Service/car.service';
import { Car } from '../../Models/Car';

@Component({
  selector: 'app-manager',
  standalone: false,
  
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {


cars: Car[] = [];
carToEdit: Car | null = null;
newCar: Car = {
  id: 0,
  make: '',
  model: '',
  year: 0,
  pricePerDay: 0,
  color: '',
  isAvailable: true,
  imageFilePath: ''
};






















constructor(private carService: CarService) {}

ngOnInit(): void {
  this.loadCars();
}

loadCars(): void {
  this.carService.getCars().subscribe((cars: Car[]) => {
    this.cars = cars;
  });
}

addCar(): void {
  if (this.newCar.imageFilePath) {
    this.carService.addCar(this.newCar).subscribe((car: Car) => {
      this.cars.push(car);  // Add the car to the list
      this.resetNewCarForm();
    });
  } else {
    alert('Please upload an image for the car.');
  }
}
















editCar(car: Car): void {
  this.carToEdit = { ...car };  // Make a copy of the car for editing
}

updateCar(): void {
  if (this.carToEdit) {
    this.carService.updateCar(this.carToEdit.id, this.carToEdit).subscribe((updatedCar: Car) => {
      const index = this.cars.findIndex(car => car.id === updatedCar.id);
      if (index !== -1) {
        this.cars[index] = updatedCar;  // Update the car in the list
      }
      this.carToEdit = null;  // Clear the edit form
    });
  }
}

deleteCar(id: number): void {
  this.carService.deleteCar(id).subscribe(() => {
    this.cars = this.cars.filter(car => car.id !== id);  // Remove the deleted car from the list
  });
}

onFileSelected(event: any, isEdit: boolean = false): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imagePath = reader.result as string;
      if (isEdit && this.carToEdit) {
        this.carToEdit.imageFilePath = imagePath;  // Set the image for the car being edited
      } else {
        this.newCar.imageFilePath = imagePath;  // Set the image for the new car
      }
    };
  }
}

resetNewCarForm(): void {
  this.newCar = {
    id: 0,
    make: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    color: '',
    isAvailable: true,
    imageFilePath: ''
  };
}
}