import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  url = this.router.url
  constructor(private router: Router){}
  
  title = 'Expense Reimbursement System';
}
