import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Customer } from 'src/app/Models/Customer';
import {CustomerService} from './../../Services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  custDetail: FormGroup;
  custList : Customer[];
  custObj : Customer = new Customer();

  sortingName:String;
  isDesc:Boolean;
  searchKeyword:string;

  constructor(private customerService:CustomerService,private formBuilder : FormBuilder) {
   
   }

  ngOnInit(): void {
   
    this.getAllCustomer();
    this.custDetail = this.formBuilder.group(
      {
        custId:[''],
        firstname:[''],
        lastname:[''],
        city:['']
      }
    );

  }

  sort(name: string): void {
    if (name && this.sortingName !== name) {
      this.isDesc = false;
    } else {
      this.isDesc = !this.isDesc;
    }
    this.sortingName = name;
  }

  addCustomer()
  {
    console.log(this.custDetail);

    this.custObj.CustId=this.custDetail.value.custId;
    this.custObj.FirstName=this.custDetail.value.firstname;
    this.custObj.LastName=this.custDetail.value.lastname;
    this.custObj.City=this.custDetail.value.city;

    this.customerService.addCustomer(this.custObj).subscribe(res=>{
      console.log(res);
      this.getAllCustomer();
    },err=>{
      console.log(err);
    });
  }

  editCustomer(cust:Customer)
  {
    this.custDetail.controls['custId'].setValue(cust.CustId);
    this.custDetail.controls['firstname'].setValue(cust.FirstName);
    this.custDetail.controls['lastname'].setValue(cust.LastName);
    this.custDetail.controls['city'].setValue(cust.City);
  }
  updateCustomer()
  {
    this.custObj.CustId=this.custDetail.value.custId;
    this.custObj.FirstName=this.custDetail.value.firstname;
    this.custObj.LastName=this.custDetail.value.lastname;
    this.custObj.City=this.custDetail.value.city;

    this.customerService.updateCustomer(this.custObj).subscribe(res=>{
      console.log(res);
      this.getAllCustomer();
    },err=>{
      console.log(err);
    });
  }

  deleteCustomer(cust:Customer)
  {
    this.customerService
    .deleteCustomer(cust).subscribe(res=>{
      console.log(res);
      alert('Customer deleted successfully');
      this.getAllCustomer();
    },err=>{
      console.log(err);
    });
  }

  getAllCustomer() 
  {
    this.customerService.getAllCustomer().subscribe(res=>{this.custList=res;},
      err=>{
        console.log("error fetching data")
      });
  }

}



