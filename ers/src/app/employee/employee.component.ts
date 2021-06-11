import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ManagerService } from '../manager/manager.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  baseurl = 'https://ers-node.herokuapp.com/employee/';
  constructor(private http: HttpClient, private manager: ManagerService, private currencyPipe: CurrencyPipe) { }

  id;
  amount;
  amountPlaceholder = 0;
  reason;
  names = [];
  data = [];
  tableView = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  ngOnInit(): void {
    this.manager.getAllEmployees().subscribe(data => {
      let employees = data.data
      for (let employee of employees) {
        this.names.push({ name: employee.first_name + " " + employee.last_name, id: employee._id })
      }
    });
  }


  submit() {
    let info = {
      amount: this.amount,
      reason: this.reason,
      employee_id: this.id,
      status: 'Pending'
    }

    console.log(info);

    this.http.post<any>(`${this.baseurl}request`, JSON.stringify(info), this.httpOptions).subscribe((data) => {
      console.log(data.success);

      if (data.success) document.getElementById("success").innerHTML = "Reimbursement submitted successfully!"
    })
  }

  pending() {
    this.http.get<any>(`${this.baseurl}pending/${this.id}`, this.httpOptions).subscribe((data) => {
      console.log("pending",data);
      console.log();
      
      if (data.success && data.data.length !== 0) {
        this.data = data.data
        this.tableView = 'pending'
      } else {
        alert("No requests found for employee")
        this.data=[]
        this.tableView = ""
      }
    })
  }

  resolved() {

    this.http.get<any>(`${this.baseurl}resolved/${this.id}`, this.httpOptions).subscribe((data) => {

      if (data.success && data.data.length !== 0) {
        this.data = data.data
        this.tableView = 'resolved'
      }
      else {
        alert("No requests found for employee")
        this.data=[]
        this.tableView = ""
      }
    })
  }

  format(){
    if(this.amount){
      this.amount = this.currencyPipe.transform(this.amount.replace(/\D/g, '').replace(/^0+/,''),'USD', 'symbol', '1.0-0')
    }
  }
}
