import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/serviceFolder/customer.service';
import { CustomersComponent } from '../customers.component';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  customerId: string = '';
  customerDetails: any = {};
  serverErrorMsg: string = '';

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService , private customersComponent:CustomersComponent) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(data => {
    //   this.customerId = data.id;
    // });
    console.log("hello");
   this.customerDetails=this.customersComponent.userdetails;
    
  }

  back() {
    
    this.customerService.goback();
  }
}
