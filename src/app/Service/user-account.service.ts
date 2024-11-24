import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccount } from '../Models/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  logIn(logInData: any) {
    throw new Error('Method not implemented.');
  }
  createUserAccount(userAccount: UserAccount) {
   return this.http.post(this.apiUrl,userAccount)
  }

  private apiUrl = 'http://localhost:5120/api/Customer'; 
  constructor(private http: HttpClient) {}

  registerUser(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
