import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:5120/api/Booking'; 

  constructor(private http: HttpClient) { }

  // Save booking data to the backend
  saveBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookings`, bookingData);
  }

  // Send request to the manager for approval or cancellation
  requestToManager(bookingId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/manager/request`, { bookingId });
  }

  // Approve or Cancel a booking
  manageBookingStatus(bookingId: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/bookings/${bookingId}`, { status });
  }
  getPendingBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bookings/pending`);
  }

}
