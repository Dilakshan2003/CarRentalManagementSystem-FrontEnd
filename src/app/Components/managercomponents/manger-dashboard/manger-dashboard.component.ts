import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manger-dashboard',
  standalone: false,
  
  templateUrl: './manger-dashboard.component.html',
  styleUrl: './manger-dashboard.component.css'
})
export class MangerDashboardComponent {
       
  constructor(private router: Router) {}

  // Function to navigate to the selected page
  // showPage1(page: string) {
  //   this.router.navigate(['/manager/login']);
  // }
}
