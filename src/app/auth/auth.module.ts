import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule , Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    Router,
    FormsModule,
    AppRoutingModule,
    NgForm,NgModel,ReactiveFormsModule
  ]
})
export class AuthModule { }
