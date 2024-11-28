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

  // Method to navigate to view reports
  viewReports(): void {
    this.router.navigate(['/manager']);
  }

  // Method to navigate to manage employees
  manageEmployees(): void {
    this.router.navigate(['/manage-employees']);
  }

  // Method to navigate to assign tasks
  assignTasks(): void {
    this.router.navigate(['/assign-tasks']);
  }

}
