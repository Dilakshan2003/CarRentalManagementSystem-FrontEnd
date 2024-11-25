import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../Models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

//   private apiUrl = 'http://localhost:5120/api/Car'; 

//   constructor(private http: HttpClient) {}

//   // Get all cars
//   getCars(): Observable<Car[]> {
//     return this.http.get<Car[]>(this.apiUrl);
//   }
  
   
//   register(userData :any){
//     return this.http.post(this.apiUrl , userData)
//   }




//   // Add a new car
//   addCar(car: any) {
//     return this.http.post(this.apiUrl, car);
//   }

//   // Update an existing car
//   updateCar(id: number, car: Car): Observable<Car> {
//     return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
//   }

//   // Delete a car
//   deleteCar(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }
private apiUrl = 'http://localhost:5120/api/Car';  // API URL

  constructor(private http: HttpClient) {}

  // Get all cars
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }



  // Add a new car (use Car type instead of any)
  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }


  // addCar(car :any){
  //   return this.http.post(this.apiUrl , car)
  // }


  // Update an existing car
  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
  }

  // Delete a car
  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}