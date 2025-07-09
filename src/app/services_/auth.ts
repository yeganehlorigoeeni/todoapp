import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForLogin } from '../models_/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ApiUrl: string = 'http://localhost:1337/api/auth/local';
  constructor(private httpclient:HttpClient) { }


   getLogIn(requestbody: {
    identifier: string;
    password: string;
  }): Observable<{jwt:string , user:{id:number}}> {
    console.log(requestbody)
    return this.httpclient.post<{jwt:string, user:{id:number}}>(this.ApiUrl, {
      identifier: requestbody.identifier,
      password: requestbody.password,
    });
  }
}
