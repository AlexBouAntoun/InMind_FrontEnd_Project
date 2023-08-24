import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CountrieslistService {
  constructor(private http: HttpClient) { }

  Getcountries(auth_token: string | null): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth_token
      })
    };


    return this.http.get<any[]>("https://restcountries.com/v3.1/all", httpOptions);
  }


  Getcountryname(auth_token: string | null, name: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth_token
      })
    };


    return this.http.get<any>("https://restcountries.com/v3.1/name/" + name, httpOptions);
  }


  // Getcountryregion(auth_token: string | null): Observable<string> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + auth_token
  //     })
  //   };


  //   return this.http.get<string>("https://restcountries.com/v3.1/region/{region}", httpOptions);
  // }



  // Getcountrycapitalcity(auth_token: string | null): Observable<string> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + auth_token
  //     })
  //   };


  //   return this.http.get<string>("https://restcountries.com/v3.1/capital/{capital}", httpOptions);
  // }



  // Getcountrylanguage(auth_token: string | null): Observable<string> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + auth_token
  //     })
  //   };


  //   return this.http.get<string>("https://restcountries.com/v3.1/lang/{currency}", httpOptions);
  // }



  // Getcountrycurrency(auth_token: string | null): Observable<string> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + auth_token
  //     })
  //   };


  //   return this.http.get<string>("https://restcountries.com/v3.1/currency/{currency}", httpOptions);
  // }



  // Getcountrycode(auth_token: string | null): Observable<string> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + auth_token
  //     })
  //   };


  //   return this.http.get<string>("https://restcountries.com/v3.1/alpha/{code}", httpOptions);
  // }



  // Getcountrycallingcode(auth_token: string | null): Observable<any[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + auth_token
  //     })
  //   };


  //   return this.http.get<any[]>("https://restcountries.com/v3.1/all", httpOptions);
  // }



  // Getcountrybordercountries(auth_token: string | null): Observable<any[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + auth_token
  //     })
  //   };


  //   return this.http.get<any[]>("https://restcountries.com/v3.1/all", httpOptions);
  // }

}