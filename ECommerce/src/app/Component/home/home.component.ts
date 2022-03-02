import { Component, OnInit } from '@angular/core';

import {Employee} from './../../Models/Employee';
import {AccountService} from './../../Services/account.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title:string;
    canShow:Boolean;
    userName:string;
    empList:boolean;
    listEmployee:EmployeeData[];
    resData:string;
    todaydate;
   
  constructor(private accountService:AccountService) {
    console.log('----------------------------')
   }

  ngOnInit(): void {
    this.title = "Home Page"; 
    this.canShow=true; 
    this.empList=false;
    this.todaydate = this.accountService.showTodayDate();
    console.log('==============================================hi========================================');
  }

}


interface EmployeeData {
  employeeId: number;
  name: string;
  gender: string;
  city: string;
  department: string;
  }

