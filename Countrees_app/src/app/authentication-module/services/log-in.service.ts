import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    Login(username: string, password: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
              //'Authorization': 'my-auth-token'
            })
          };

        const body = JSON.stringify({
            "Username": username,
            "Password": password
          });

        return this.http.post<any>("http://173.249.40.235:5005/api/User/Login()", body, httpOptions);
      }
}