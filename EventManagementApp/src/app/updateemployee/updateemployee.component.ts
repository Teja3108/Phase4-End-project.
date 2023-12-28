import { Component, OnInit } from '@angular/core';
import { EventManagementService } from '../eventmanagement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css'] // Use styleUrls instead of styleUrl
})
export class UpdateemployeeComponent implements OnInit {
  updatedemployee: any = null;
  employees: any[] = [];
  first_name = '';
  last_name = '';
  employeeId = '';
  email = '';
  message = '';

  constructor(
    private eventService: EventManagementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.employeeId = id || '';
      this.loadEmployeeDetails(); // Load employee details when the component initializes
    });
  }

  loadEmployeeDetails() {
    this.eventService.getEmployeeById(this.employeeId).subscribe(
      (employee: any) => {
        this.first_name = employee.first_name;
        this.last_name = employee.last_name;
        this.email = employee.email;
      },
      (error: any) => {
        console.error('Error fetching employee details:', error);
      }
    );
  }

  updateEmployee(first_name: string, last_name: string, email: string) {
    first_name = first_name.trim();
    last_name = last_name.trim();
    email = email.trim();

    const employee = { first_name, last_name, email };
    this.eventService.updateEmployee(this.employeeId, employee).subscribe(
      (updatedEmployee: any) => {
        this.updatedemployee = updatedEmployee;
        this.message =  "Employee details updated successfully...!!";
      },
      (error: any) => {
        console.error('Error updating employee:', error);
      }
    );

      
  }
}