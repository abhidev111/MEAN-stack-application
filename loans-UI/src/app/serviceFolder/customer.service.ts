import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient : HttpClient, private location:Location ) { }
  //metgods to communicate with backend API's  

  getCustomers(){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS
    return this.httpClient.get(url);
  }

  viewCustomer(id:any){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER + id
    return this.httpClient.get(url);

  }

  editCustomer(id :any,updatedCustomerObj:any){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.UPDATE_CUSTOMER + id;
    return this.httpClient.put(url,updatedCustomerObj);

  }

  addcustomer(addCustomerObj:any){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER
    return this.httpClient.post(url,addCustomerObj);
  }

  deletecustomer(id:any){
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.DELETE_CUSTOMER +id;
    return this.httpClient.delete(url,id);
  }

  searchCustomer(keyword:any){

  }

  goback(){
    this.location.back();
  }

  
}
