import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { updateCustomer } from '../Models/UserAccount';




@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  
  private apiUrl = 'http://localhost:5120/api/Customer'; 
  private loginURl = '  http://localhost:5120/api/CustomerLogin/login';
  
 

  constructor(private http: HttpClient) { }

  // register(userData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/register`, userData);
  // }


  register(userData :any){
    return this.http.post(this.apiUrl , userData)
  }

//sm L s
  login(userData: any){
    return this.http.post(this.loginURl ,userData);
  }

  
  // getCustomer(userData: any){
  //   return this.http.get(this.apiUrl ,userData);
  // }

  getCustomerById(id: string): Observable<any> {
    return this.http.get(this.apiUrl+"/"+id);
  }

  // Update customer profile
  updateCustomer(id: number, updatedData: updateCustomer){
    return this.http.put(`http://localhost:5120/api/Customer/${id}`, updatedData);
  }

  
  getCustomerDetails(customerId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${customerId}`);
  }

  //  delete customer record


}
