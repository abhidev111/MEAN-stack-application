import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { addCustomerModel } from 'src/app/models/addCustomerModel.model';
import { CustomerService } from 'src/app/serviceFolder/customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  Added :boolean=false;
  successNote :string ='';
  addCustomerObj :addCustomerModel={
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    emailAddress: '',
    department: '',
    };

  constructor( private customerService :CustomerService) { }

  ngOnInit(): void {
  }


  addGivenCustomer(Formval:NgForm){
    this.customerService.addcustomer(this.addCustomerObj).subscribe((reply:any)=>{
      console.log(reply);
      this.successNote = reply.message +' with id : ' + reply.customerDetails._id;
      this.Added =true;
      Formval.reset();
      //setTimeout(()=> this.do(Formval),3000)
    })

  }
  // do(Formval:NgForm){
  //   Formval.reset();
  //   this.Added=false;
  // }
  goBack(){
    this.customerService.goback();
  }

}
