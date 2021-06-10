import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  baseurl = 'https://ers-backend.herokuapp.com';
  constructor(private http: HttpClient) { }

  name: string = ""
  amount: number = 0.0
  reason: string = ""

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  ngOnInit(): void {
  }

  register(id: string): string {
    if (id === "Employee") return "60bf9637bc4289f9fc1c3282"
    else if (id === "New") return "60bfcc68a2c83f20c1b26943"
  }

  submit() {
    let info = {
      amount: this.amount,
      reason: this.reason,
      name: this.register(this.name)
    }
    this.http.post<any>(`${this.baseurl}request`, JSON.stringify(info), this.httpOptions).subscribe((data)=>{
      if(data.success) document.getElementById("success").innerHTML = "Reimbursement submitted successfully!"
    })
  }

  pending() {
    this.http.get<any>(`${this.baseurl}pending/${this.register(this.name)}`, this.httpOptions).subscribe((data)=>{
      if(data.success) document.getElementById("success").innerHTML = data
      else document.getElementById("success").innerHTML = "You have no reimbursements to display!"
    })
  }

  resolved() {
    this.http.get<any>(`${this.baseurl}resolved/${this.register(this.name)}`, this.httpOptions).subscribe((data)=>{
      if(data.success) document.getElementById("success").innerHTML = data
      else document.getElementById("success").innerHTML = "You have no reimbursements to display!"
    })
  }
}
