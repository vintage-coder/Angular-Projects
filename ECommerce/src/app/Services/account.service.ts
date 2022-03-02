import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos/1';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }



  showTodayDate()
  {
    let ndate = new Date();
    return ndate;
  }

}
