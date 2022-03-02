import { Injectable } from '@angular/core';
import {Customer} from './../Models/Customer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  addCustURL : string;
  getCustURL : string;
  updateCustUrl : string;
  deleteCustUrl : string;

  constructor(private http : HttpClient) {

    this.addCustURL = 'http://localhost:4200/api/customer';
    this.getCustURL = 'http://localhost:4200/api/customer';
    this.updateCustUrl = 'http://localhost:4200/api/customer';
    this.deleteCustUrl = 'http://localhost:4200/api/customer';

   }

   addCustomer(cust : Customer): Observable<Customer> {
     return this.http.post<Customer>(this.addCustURL,cust);
   }

   getAllCustomer(): Observable<Customer[]>{
     return this.http.get<Customer[]>(this.getCustURL);
   }

   updateCustomer(cust :Customer) : Observable<Customer>{
    console.log('update customer:'+ cust.CustId);
     return this.http.put<Customer>(this.updateCustUrl+'/'+cust.CustId, cust);
   }

   deleteCustomer(cust : Customer) : Observable<Customer> {
     console.log(cust.CustId);
     return this.http.delete<Customer>(this.deleteCustUrl+'/'+cust.CustId);
   }
}
