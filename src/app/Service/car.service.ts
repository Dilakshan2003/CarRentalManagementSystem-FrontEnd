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
private messageUrlUrl = 'http://localhost:5120/api/Message/';
private cusBooking = 'http://localhost:5120/api/Booking?CustomerId=';
private rentax = 'http://localhost:5120/api/Rent';


 

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
    console.log(bookingData);
  return this.http.post<any>(this.cusBooking+bookingData.customerId, bookingData);
 
  }

  requestToManager(bookingId: number): Observable<any> {
    return this.http.post(`${this.cusBooking}/`, { bookingId });
  }

  getPendingBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.bookingUrl}/`);
  }

  // Approve or Cancel a booking
  manageBookingStatus(bookingId: number, status: Booking): Observable<any> {
    return this.http.put( 'http://localhost:5120/api/Booking/'+bookingId, status);
  }
  getBookingById(id : number){
    return this.http.get<Booking>('http://localhost:5120/api/Booking/' + id);
  }
  
  getCustomerBookings(): Observable<Booking[]> {
   
    const customerId = 123; 

    return this.http.get<Booking[]>(`${this.bookingUrl}/${customerId}/bookings`);
  }

  sendMessage( message  : any , ): Observable<any> {
    console.log(message );
    return this.http.post<any>('http://localhost:5120/api/Message', message);
  }



  getMessages(id : number): Observable<message[]> {
    return this.http.get<message[]>(this.messageUrlUrl + id);
  }

  deleteBooking(bookingId: number): Observable<void> {
    return this.http.delete<void>(`${this.bookingUrl}/${bookingId}`);
  }


  deleteMessage(messageId: number) {
    return this.http.delete(`${this.messageUrlUrl}${messageId}`);
  }
 

  getCarById(carId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${carId}`);
  }


  getBookingByIds(bookingId: number): Observable<any> {
    return this.http.get<any>(`${this.bookingUrl}/${bookingId}`);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to get rented details from the API
getRentedDetails(): Observable<any> {
  return this.http.get<any>(this.bookingUrl);
}


getRentData(): Observable<any[]> {
  return this.http.get<any[]>(this.rentax);
}

  }

