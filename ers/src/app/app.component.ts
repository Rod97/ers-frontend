import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{

  url = '/employee'
  constructor(private router: Router){}
  ngOnChanges(changes: SimpleChanges): void {
  }
  
  title = 'Expense Reimbursement System';
}
