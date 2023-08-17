import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CountrieslistService {
    constructor(private http: HttpClient) { }

    Getcountries(auth_token: string): Observable<any[]> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + auth_token
            })
          };


        return this.http.get<any[]>("https://restcountries.com/v3.1/all", httpOptions);
      }
}