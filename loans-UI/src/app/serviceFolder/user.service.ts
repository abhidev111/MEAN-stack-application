import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user.model';
import { environment } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  seletctedUser : user = {
    userName:'',
    email:'',
    password:''
  }

  noAuthHeader = {headers : new HttpHeaders({'NoAuth':'True'})}

  constructor(private http:HttpClient) { }

  register(User:user){
    let url = environment.USER_BASE_URL + environment.USER.REGISTER;
    return this.http.post(url,User,this.noAuthHeader) ;
  }

  login(authCredentials:any){
    let url = environment.USER_BASE_URL + environment.USER.AUTH;
      return this.http.post(url,authCredentials,this.noAuthHeader);
  }
  fetchUser(){
    let url = environment.USER_BASE_URL +environment.USER.USER_DETAIL;
    return this.http.get(url); 
  }

  setToken(token : string){
    localStorage.setItem('token',token);
    
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = localStorage.getItem('token');
    if(token){
      var payload = atob(token.split('.')[1]);  //this will be in just text form
      return JSON.parse(payload);   //this makes it as a json object
      //console.log(JSON.parse(payload))
    }
    else 
      return null;
  }


  isLoggedIn(){
    var payload = this.getUserPayload();
    if(payload){
      return payload.exp > Date.now()/1000;
    }
    return false;
  }

  
}
