import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class EventManagementService {

    private url='http://localhost:3000/employees';
      constructor(private http:HttpClient) { }
    
    
    addemployee(employee:any){
      return this.http.post(this.url,employee);
    }
    
    
    getemployee():Observable<any>{
      return this.http.get(this.url);
    }
    
    deleteemployee(id:any){
      return this.http.delete(`${this.url}/${id}`);
    }
    
    getEmployeeById(id: string): Observable<any> {
      return this.http.get(`${this.url}/${id}`); // Use template literals to include the ID in the URL
    }
    



updateEmployee(id: string, employee: any): Observable<any> {
  return this.http.put(`${this.url}/${id}`, employee);
}

    

  
}