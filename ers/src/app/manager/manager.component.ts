import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  employees = []

  ngOnInit(): void {

  }
  getAllEmployees(){
    this.managerService.getAllEmployees().subscribe((data)=>{
      this.employees = data;
    })

  }
}
