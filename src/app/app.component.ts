import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import {AccountService } from './Services/account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  email = new FormControl('');  
  title:String;
  constructor(private accountService:AccountService){} 
  
  ngOnInit(): void {

      this.title ='ECommerce';
  }

  updateEmail() {  
    this.email.setValue('sonoojaiswal@javatpoint.com');  
  }  

}


