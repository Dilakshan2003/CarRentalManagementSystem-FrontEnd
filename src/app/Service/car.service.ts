import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../Models/Car';
import { Booking } from '../Models/booking';

@Injectable({
  providedIn: 'root'
})
export class CarService {




private apiUrl = 'http://localhost:5120/api/Car';
  private bookingUrl = 'http://localhost:5120/api/Booking';

  constructor(private http: HttpClient) {}

  // Get all cars
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  // Add a new car
  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }

  // Update an existing car
  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
  }

  // Delete a car
  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Save booking data to the backend
  saveBooking(bookingData: any): Observable<any> {
    return this.http.post<any>(this.bookingUrl, bookingData);
  }

  // Send request to the manager for approval or cancellation
  requestToManager(bookingId: number): Observable<any> {
    return this.http.post(`${this.bookingUrl}/`, { bookingId });
  }

  getPendingBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.bookingUrl}/`);
  }

  // Approve or Cancel a booking
  manageBookingStatus(bookingId: number, status: string): Observable<any> {
    return this.http.put(`${this.bookingUrl}/${bookingId}`, { status });
  }




















//   // Send request to the manager for approval or cancellation
//   requestToManager(bookingId: number): Observable<any> {
//     return this.http.post(`${this.bookingUrl}/`, { bookingId });
//   }

//   getPendingBookings(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.bookingUrl}/`);
//   }
 









//   // Approve or Cancel a booking
//   manageBookingStatus(bookingId: number, status: string): Observable<any> {
//     return this.http.put(`${this.bookingUrl}//${bookingId}`, { status });
//   }
//   // getPendingBookings(): Observable<any[]> {
//   //   return this.http.get<any[]>(`${this.bookingUrl}/`);
//   // }




}