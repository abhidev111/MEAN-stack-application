import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../serviceFolder/user.service';
import { Router } from '@angular/router';
import{tap} from 'rxjs/operators';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(private userService:UserService , private router:Router){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      if(request.headers.get('noauth')){
        return next.handle(request.clone());
      }
      else{
        const cloneReq = request.clone({
            headers :request.headers.set("Authorization","Bearer "+this.userService.getToken())
        });
        return next.handle(cloneReq).pipe(
          tap(
            event => {},
            err=>{
              if(err.error.auth == false){
                this.router.navigateByUrl('/sign-in');
              }
            }
          )
        );

      }

  }
}
