import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { CarComponent } from './Components/car/car.component';
import { WindowComponent } from './Components/window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CarComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,      
    AppRoutingModule,
    FormsModule,          
    ReactiveFormsModule,  
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
