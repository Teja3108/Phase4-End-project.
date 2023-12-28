import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[

  {path:"",component:HomeComponent},
  {path:"employees",component:EmployeesComponent},
  {path:"addEmployee",component:AddemployeeComponent},
  {path:"viewDetails/:id",component:ViewdetailsComponent},
  {path:"updateEmployee/:id",component:UpdateemployeeComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EmployeesComponent,
    HomeComponent,
    NavbarComponent,
    UpdateemployeeComponent,
    ViewdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
