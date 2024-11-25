import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  
  private apiUrl = 'http://localhost:5120/api/Customer'; 

  constructor(private http: HttpClient) { }

  // register(userData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/register`, userData);
  // }


  register(userData :any){
    return this.http.post(this.apiUrl , userData)
  }


  login(userData: any): Observable<any> {
    return this.http.get(this.apiUrl ,userData);
  }
}
