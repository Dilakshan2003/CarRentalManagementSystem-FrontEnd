import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WindowComponent } from './Components/window/window.component';
import { ManagerComponent } from './Components/manager/manager.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'window', component: WindowComponent},
  { path: 'manager', component: ManagerComponent},
  {path : '**' , redirectTo : 'window' , pathMatch : 'full'}


  // { path: 'edit-task/:id', component: TaskEditComponent},
  // { path: 'edit-user/:id', component: UserAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
