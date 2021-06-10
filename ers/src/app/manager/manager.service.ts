import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseurl = 'https://ers-backend.herokuapp.com/manager/';
  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getAllEmployees(): Observable<any> {
    return this.http.get<any>(this.baseurl + "employees")
  }

  getAllPending(): Observable<any> {
    return this.http.get<any>(this.baseurl+"pending")
  }

  getAllResolved(): Observable<any> {
    return this.http.get<any>(this.baseurl + "resolved")
  }
  getAllRequestsByEmployee(id:any): Observable<any> {
    return this.http.get<any>(this.baseurl + "employee/" + id)
  }
  resolveRequest(data:any): Observable<any> {
    return this.http.put<any>(this.baseurl + "manage", data)
  }
}

