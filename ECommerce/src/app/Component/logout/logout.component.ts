import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import {EmployeeService} from './../../Services/employee.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  title:string;
  studentList:Student[];
  presentDate = new Date(); 
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]; 
  decimalNum1: number = 8.7589623; 
  decimalNum2: number = 5.43; 

  jsonData = { id: 'one', name: { username: 'user1' }} 

  digits : number = 100; 

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    
    this.empService.ShowLog();
    this.title="This is the logout page";
    this.studentList=[
      {
        stuId:1,
        stuName:"Gowthaman",
        stuAge:25
      },
      {
        stuId:2,
        stuName:"Anbarasan",
        stuAge:24

      }];

  }

  CallLogService()
  {
    this.empService.ShowLog();
  }

}

class Student
{
  stuId:number;
  stuName:string;
  stuAge:number;
}