import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/serviceFolder/customer.service';
import { Customer } from 'src/app/models/customer.model';



@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerId :string ='';
  customerObj :any ={};
  updateResult:any={};
  successNote : string ='';
  Updated :boolean=false;

  updatedCustomerObj: Customer ={
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    emailAddress: '',
    department: '',
    _id: ''
  };
  



  

  constructor(private activatedRoute :ActivatedRoute , private customerService :CustomerService) { }

   ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.customerId = data.id;                       
    });
  
  
    this.customerService.viewCustomer(this.customerId).subscribe((data:any) =>{
      this.customerObj = data['results'];  //can also be written as data.results
      console.log(this.customerObj)
      this.updatedCustomerObj._id = this.updatedCustomerObj._id;
      this.updatedCustomerObj.firstName = this.customerObj.firstName;
      this.updatedCustomerObj.lastName = this.customerObj.lastName;
      this.updatedCustomerObj.phoneNumber = this.customerObj.phoneNumber;
      this.updatedCustomerObj.dob = this.customerObj.dob;
      this.updatedCustomerObj.emailAddress = this.customerObj.emailAddress;
      this.updatedCustomerObj.department = this.customerObj.department;

    })
  
  }



  editGivenCustomer(){
    

    this.customerService.editCustomer(this.customerId , this.updatedCustomerObj).subscribe((data:any)=>{
      this.updateResult = data;
      console.log(data);
      this.successNote = data['message'];
      this.Updated =true;
    },error=>{
      console.log(error);
    });
  }

  goBack(){
    this.customerService.goback();
  }

}
