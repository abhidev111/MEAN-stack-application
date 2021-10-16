import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../serviceFolder/user.service';

import { Router } from '@angular/router';  //for redirecting to dashboard after login

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  serverErrorMsg:string="";
  gotErr:boolean=false;

  model={
    email :'',
    password :''
  }
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.userService.login(form.value).subscribe(
      (data:any)=>{
        this.userService.setToken(data['token']);
        this.router.navigateByUrl('dashboard')
      },
      (err)=>{
        this.serverErrorMsg = err.error.message;
        this.gotErr =true;
      }
    )
  }

}
