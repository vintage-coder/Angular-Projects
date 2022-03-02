import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs/operators';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
 
})
export class AboutComponent implements OnInit {
  age="";

  public siteUrl=window.location.href;

  public stringval="Hello World";
  public sucessResult="text-sucess";
  public hasError=false;
  public isSpecial=true;
  public myId="testId";

  public highlightcolor="blue";

  public greetings=" ";

  public multistyle={
    color:"yellow",
    fontstyle:"bold"
  }

  public messageClass={
    "text-sucess":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  };


  constructor() { }

  ngOnInit(): void {
    this.age='34';
  }

  GetAge()
  {
    console.log("The entered age is: "+this.age);
  }

  onClick(event)
  {
    console.log(event);

    console.log(event.type);
    this.greetings="welcome to angular programming";
  }

}
