import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  tableView ="";
  data = [];

  ngOnInit(): void {
    this.getAllEmployees()

  }
  getAllEmployees() {
    this.managerService.getAllEmployees().subscribe((data) => {
      if (data.success) {
        console.log(data);
        this.data = data.data;
        this.tableView = "employees"
      }
    })
  }
  getAllPending() {
    this.managerService.getAllPending().subscribe((data) => {
      if(data.success){
        this.data = data.data;
        this.tableView = "pending"
      }
    })
  }
  getAllResolved(){
    this.managerService.getAllResolved().subscribe((data) => {
      if(data.success){
        this.data = data.data;
        this.tableView = "resolved"
      }
    })
  }
  getAllRequestsByEmployee(id:any){
    this.managerService.getAllRequestsByEmployee(id).subscribe((data) => {
      if(data.success){
        this.data = data.data;
        this.tableView = "employeeRequests"
      }
    })
  } 
  resolveRequest(decision, reimbursement){
    console.log(decision, reimbursement);
    
    this.managerService.resolveRequest({reimbursement, decision,}).subscribe((data) =>{
      if(data.success){
        document.getElementById(reimbursement).innerHTML = decision
      }
    })
  }

}
