import { Component } from '@angular/core';
import { EventManagementService } from '../eventmanagement.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {

  employees: any[] = [];
  first_name = ""; // Separate properties for form inputs
  last_name = "";
  email = "";
  message=""

  constructor(private eventservice: EventManagementService) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    this.eventservice.getemployee().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    const employee = {
      first_name: this.first_name.trim(),
      last_name: this.last_name.trim(),
      email: this.email.trim()
    };

    this.eventservice.addemployee(employee).subscribe(newEmployee => {
      this.employees.push(newEmployee);
      // Optionally, clear the form inputs after adding the employee
      this.first_name = "";
      this.last_name = "";
      this.email = "";
    });

    this.message="Employee is added successfully...!!"
  }
}