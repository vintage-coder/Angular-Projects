import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  title = 'Register for stuff';
  formGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: '',
      email: '',
      terms: false
    });
  }
    ngOnInit(): void
    {

    }

  onSubmit(formData) {
    var name = formData['name'];
  }


  // email = new FormControl('');
  // constructor() { }

  // ngOnInit(): void {
  // }

    
  // updateEmail() {  
  //   this.email.setValue('sonoojaiswal@javatpoint.com');  
  // }  

}
