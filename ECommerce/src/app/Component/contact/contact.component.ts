import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:string='This is my sample contact page';
  contactList:string[]=["Contact1", "Contact2","Contact3"];
  title:string;
  expenseEntry: ExpenseEntry[]; 

  constructor() { }

  ngOnInit(): void {
    this.title="This is the contact page";
    this.expenseEntry = [{ 
      id: 1, 
      item: "Pizza", 
      amount: 21, 
      category: "Food", 
      location: "Zomato", 
      spendOn: new Date(2020, 6, 1, 10, 10, 10), 
      createdOn: new Date(2020, 6, 1, 10, 10, 10), 
   },
   { 
    id: 2, 
    item: "Burger", 
    amount: 22, 
    category: "Food", 
    location: "Swiggy", 
    spendOn: new Date(2020, 6, 1, 10, 10, 10),
    createdOn: new Date(2020, 6, 1, 10, 10, 10), 
 }
  ]; 

  }

}


export interface ExpenseEntry { 
  id: number; 
  item: string; 
  amount: number; 
  category: string; 
  location: string; 
  spendOn: Date; 
  createdOn: Date; 
}