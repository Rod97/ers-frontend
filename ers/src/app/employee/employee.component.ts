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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  ngOnInit(): void {
  }

  register(id: string): string {
    if (id === "Employee") return "60bf9637bc4289f9fc1c3282"
    else if (id === "New") return "60bfcc68a2c83f20c1b26943"
  }

  submit(amo: number, rea: string, nam: string) {
    let info = {
      amount: amo,
      reason: rea,
      name: this.register(nam)
    }
    return this.http.post(`${this.baseurl}request`, JSON.stringify(info), this.httpOptions)
  }

  pending(id: string) {
    if (id === "Employee") return this.http.post(`${this.baseurl}pending/60bf9637bc4289f9fc1c3282`, this.httpOptions)
    else if (id === "New") return this.http.post(`${this.baseurl}pending/60bfcc68a2c83f20c1b26943`, this.httpOptions)
  }

  resolved(id: string) {
    if (id === "Employee") return this.http.post(`${this.baseurl}resolved/60bf9637bc4289f9fc1c3282`, this.httpOptions)
    else if (id === "New") return this.http.post(`${this.baseurl}resolved/60bfcc68a2c83f20c1b26943`, this.httpOptions)
  }

}
