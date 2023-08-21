import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

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
export class CountriesListingComponent implements OnInit {
  countries: any[] = [];
  countries_original: any[] = [];
  myControl = new FormControl();
  filteredOptions: string[] = [];

  private _filter(value: string, auth_token: string): any[] {
    const filterValue = value.toLowerCase();
    let filteredCountries: any[] = this.countries_original.filter(x => x.name.common.toLowerCase().indexOf(filterValue) == 0);
    return filteredCountries;
  }

  constructor(
    private countries_list_service: CountrieslistService,
    private cookie_service: CookieService
  ) { }

  ngOnInit() {
    let auth_token = this.cookie_service.get('AuthToken');
    this.countries_list_service.Getcountries(auth_token).subscribe(countries_res => {
      this.countries_original = countries_res;
      this.filteredOptions = this.countries_original.map(item => item.name.common);

      combineLatest([countries_res, this.myControl.valueChanges.pipe(startWith(''))]).subscribe(([countries, value]) => {
        let filteredCountries = this._filter(value || '', auth_token);
        this.countries = filteredCountries;
        this.filteredOptions = filteredCountries.map(item => item.name.common);
      });
    });

  }
}
