import { Component } from '@angular/core';
import { EventManagementService } from '../eventmanagement.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
employees: any[]=[];
id=""
first_name=""
last_name=""
email=""

constructor(private eventservice:EventManagementService) { }

ngOnInit(): void {
  this.getemployee();

}

getemployee():void{
  this.eventservice.getemployee().subscribe(data=>{this.employees=data});
}
}