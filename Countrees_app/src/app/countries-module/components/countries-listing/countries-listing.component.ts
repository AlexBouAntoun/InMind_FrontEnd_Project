import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { CountrieslistService } from '../../services/countrieslist.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-countries-listing',
  templateUrl: './countries-listing.component.html',
  styleUrls: ['./countries-listing.component.scss'],
  providers: [CountrieslistService],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ],
})
export class CountriesListingComponent implements OnInit{
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> = new Observable<string[]>();

countries: any[] = [];

  constructor(
    private countries_list_service: CountrieslistService,
    private cookie_service: CookieService
    ) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    let auth_token = this.cookie_service.get('AuthToken');
    
    this.countries_list_service.Getcountries(auth_token).subscribe(result => {
      this.countries = result;
    });   
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
