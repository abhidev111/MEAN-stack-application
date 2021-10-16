import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../serviceFolder/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  
  Registersuccess:boolean=false;
  successMsg:string='';
  gotErr:boolean=false;
  errorMsg:string='';

  

  constructor(private userService:UserService) {}

  userName:string =this.userService.seletctedUser.userName;
  email:string =this.userService.seletctedUser.email;
  password :string =this.userService.seletctedUser.password;
  

  ngOnInit(): void {
  }

  Submit(val:NgForm){
    console.log(val.value);
    this.userService.register(val.value).subscribe((data:any)=>{
      console.log(data);
      this.Registersuccess=true;
      
      this.successMsg=data.message;
      setTimeout(()=>{this.Registersuccess=false},4000);

    },
    (err:any)=>{
      console.log(err.error);
      this.gotErr=true;
      this.errorMsg=err.error; //this is a list
      setTimeout(()=>{this.gotErr=false},3000);

    }
    )
  }

  reset(form:NgForm){
    form.reset();
  }

}
