import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
   title:string;
  constructor() { }

  ngOnInit(): void {
    
    this.title="This is the logout page"
  }

}
