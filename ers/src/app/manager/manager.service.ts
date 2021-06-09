import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseurl = 'http://localhost:5051/manager/';
  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getAllEmployees(): Observable<any> {
    return this.http.get<any>(this.baseurl + "employees")
  }
}

