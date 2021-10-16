import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../serviceFolder/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  userdetails:any={};
  customerId:string='';
  serverErrorMsg: string='';
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }
   
  back(){
    this.customerService.goback();
    this.customerId='';

  }

}
