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
    empList:Emp;
    resData:string;
    todaydate;
  constructor(private accountService:AccountService) {
    console.log('----------------------------')
   }

  ngOnInit(): void {
    this.title = "Home Page"; 
    this.canShow=true; 
   
    this.todaydate = this.accountService.showTodayDate();
    console.log('==============================================hi========================================');
  }

}

class Emp
{
  userId:number
  id:number
  title:string
  completed:Boolean
}



// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
