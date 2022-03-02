import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  ShowLog()
  {
    console.log('This is the log info of employee service');
  }
}
