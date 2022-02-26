import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  age="";
  constructor() { }

  ngOnInit(): void {
    this.age='34';
  }

  GetAge()
  {
    console.log("The entered age is: "+this.age);
  }
}
