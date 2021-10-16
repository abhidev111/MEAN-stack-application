import { Component, OnInit } from '@angular/core';
import { UserService } from '../serviceFolder/user.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 UserObj:any={};
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {}

  logOut(){
    if(this.userService.isLoggedIn() && confirm("Are you sure you want to LogOut.?")){
    this.userService.deleteToken();
    this.router.navigateByUrl('sign-in');
  }
  

  }
  showDetails(){
    this.userService.fetchUser().subscribe((data:any)=>{
      console.log(data);
      console.log(data['user']);
      this.UserObj = data['user'];
    },
    (err)=>{
      this.UserObj={};
      alert("Please Login !!")
      // console.log(err.error);

    })
  }

}
// function value(value: any, s: boolean) {
//   throw new Error('Function not implemented.');
// }

