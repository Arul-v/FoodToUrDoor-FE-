import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerRequest } from 'http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  getRestaurants() {
    return this.httpClient.get('https://reqres.in/api/users');
  }

  signIn(username: string, password: string): boolean {
    const payload = username + ':' + password;
    this.httpClient.post('http://localhost:8102/login', payload).subscribe(res => {
      // get the token and write it to localstore or cookie 	
        return true;
    },
    err => {
      console.log(err);
      return false;
    });
    return false;
  }

  signUp(email: string, username: string, password: string, phone: string): boolean {
    const payload = {
      'email': email,
      'username': username,
      'password': password,
      'phone': phone
    };
    this.httpClient.post('http://localhost:8102/createUser', payload).subscribe(res => {
      // get the token and write it to localstore or cookie
        return true;
    },
    err => {
      console.log(err);
      return false;
    });
    return false;
  }
}
