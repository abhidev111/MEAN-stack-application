import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/serviceFolder/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
