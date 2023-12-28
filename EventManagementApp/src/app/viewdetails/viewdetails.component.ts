import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventManagementService } from '../eventmanagement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.css'
})
export class ViewdetailsComponent {

  employee: any = {}; // Initialize with an empty object or default values

  

  constructor(
    private route: ActivatedRoute,
    private eventservice: EventManagementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getEmployeeDetails(id);
      }
    });
  }

  getEmployeeDetails(id: string): void {
    this.eventservice.getEmployeeById(id).subscribe(employee => {
      this.employee = employee;
    });
  }
  deleteEmployee(id: any) {
    this.eventservice.deleteemployee(id).subscribe(() => {
      
      this.employee = {};
      this.router.navigate(['/employees']);
    }, error => {
      console.error('Error deleting employee:', error);
    });
  }
  
  
  }