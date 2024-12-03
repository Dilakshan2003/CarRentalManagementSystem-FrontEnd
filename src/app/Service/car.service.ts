import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../Models/Car';
import { Booking } from '../Models/booking';
import { message } from '../Models/message';

@Injectable({
  providedIn: 'root'
})
export class CarService {




private apiUrl = 'http://localhost:5120/api/Car';
  private bookingUrl = 'http://localhost:5120/api/Booking';
  private messageUrlUrl = 'http://localhost:5120/api/Message';

  constructor(private http: HttpClient) {}


  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }


  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }


  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, car);
  }


  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

 
  saveBooking(bookingData: any): Observable<any> {
    return this.http.post<any>(this.bookingUrl, bookingData);
  }

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
  
  getCustomerBookings(): Observable<Booking[]> {
   
    const customerId = 123; 
    return this.http.get<Booking[]>(`${this.bookingUrl}/${customerId}/bookings`);
  }

  sendMessage(content: string, sender: string): Observable<void> {
    const message = { content, sender };
    return this.http.post<void>(this.messageUrlUrl, message);
  }

  getMessages(): Observable<message[]> {
    return this.http.get<message[]>(this.messageUrlUrl);
  }

  deleteBooking(bookingId: number): Observable<void> {
    return this.http.delete<void>(`${this.bookingUrl}/${bookingId}`);
  }


 

}