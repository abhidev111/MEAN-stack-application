import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/serviceFolder/customer.service';



@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerId : string='';
  customerDetails : any ={};
  result :any;
  deleted :boolean =false;
  constructor(private customerService:CustomerService, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.customerId = data.id;                       
    });
    this.customerService.viewCustomer(this.customerId).subscribe((data:any)=>{
      this.customerDetails = data.results;
    })
  }
deleteCustomer(){
  this.customerService.deletecustomer(this.customerId).subscribe((data:any)=>{
    this.result = data.message;
    console.log(data);
    this.deleted = true;
  },error => {
    
   console.error();
   
  });
   
}
back(){
  this.customerService.goback();
}


}
