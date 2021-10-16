import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/serviceFolder/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerResult:any;
  customerList:any;
  recordCount:any;
  searchTxt:string='';
  constructor(private customerService :CustomerService) { }

  ngOnInit(): void {
    this.getCustomerList();
  }
 
  getCustomerList(){
    this.customerService.getCustomers().subscribe((data) =>{
      this.customerResult = data;
      console.log(data);
      this.customerList =this.customerResult.results;
      this.recordCount = this.customerResult.RecordCount;
    })
  }


}
