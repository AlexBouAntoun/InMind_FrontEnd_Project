import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { NgxPermissionsService } from 'ngx-permissions';
import { CookieService } from 'ngx-cookie-service';

import { CountrieslistService } from '../../services/countrieslist.service';

@Component({
  selector: 'app-countries-listing',
  templateUrl: './countries-listing.component.html',
  styleUrls: ['./countries-listing.component.scss'],
  providers: [CountrieslistService], 
})
export class CountriesListingComponent implements OnInit {
  countries: any[] = [];
  countries_original: any[] = [];
  myControl = new FormControl();
  filteredOptions: string[] = [];
  roles: any;

  private _filter(value: string, auth_token: string): any[] {
    const filterValue = value.toLowerCase();
    let filteredCountries: any[] = this.countries_original.filter(x => x.name.common.toLowerCase().indexOf(filterValue) == 0);
    return filteredCountries;
  }

  constructor(
    private countries_list_service: CountrieslistService,
    private permission_service: NgxPermissionsService,
    private cookie_service: CookieService
  ) { }

  ngOnInit() {
    this.roles = this.permission_service.getPermissions();

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
