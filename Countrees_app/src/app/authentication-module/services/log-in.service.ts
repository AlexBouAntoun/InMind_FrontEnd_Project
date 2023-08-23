import { SignupForm } from './../models/sign-up.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  Login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = JSON.stringify({
      "Username": username,
      "Password": password
    });

    return this.http.post<any>("http://173.249.40.235:5005/api/User/Login()", body, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
        })
      );
  }

  signUp(signUpData: SignupForm, isAdmin: boolean) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = JSON.stringify({
      Firstname: signUpData.Firstname,
      Lastname: signUpData.Lastname,
      Email: signUpData.Email,
      Password: signUpData.Password,
      RoleName: signUpData.RoleName
    });

    if(isAdmin == true){
      return this.http.post<any>("http://173.249.40.235:5005/api/User/CreateAdminUser()", body, httpOptions);
    }
    else{
      return this.http.post<any>("http://173.249.40.235:5005/api/User/SignUp()", body, httpOptions);
    }    
  }
}