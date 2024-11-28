import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WindowComponent } from './Components/window/window.component';
import { ManagerComponent } from './Components/managercomponents/manager/manager.component';
import { MangerDashboardComponent } from './Components/managercomponents/manger-dashboard/manger-dashboard.component';
import { RentalRequestComponent } from './Components/managercomponents/rental-request/rental-request.component';
import { BookingComponent } from './Components/booking/booking.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'window', component: WindowComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'login', component: LoginComponent},
  
  { path: 'managerdashboard', 
     component: MangerDashboardComponent,
      children: [
        { path: 'manager', component: ManagerComponent},
        { path: 'rentalRequest', component: RentalRequestComponent},
    ]
  },
  
 

  {path : '**' , redirectTo : 'window' , pathMatch : 'full'}


  // { path: 'edit-task/:id', component: TaskEditComponent},
  // { path: 'edit-user/:id', component: UserAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
